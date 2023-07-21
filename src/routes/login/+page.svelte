<!-- Login Page -->
<script>
    import { onMount } from 'svelte';
    import { navigate } from '@sveltejs/kit';
    import supabase from '../supabase.js';
  
    let emp_id = '';
    let password = '';
    let errorMessage = '';
  
    async function handleLogin(event) {
      event.preventDefault();
  
      try {
        const { user, error } = await supabase.auth.signIn({ emp_id, password });
        if (error) {
          errorMessage = error.message;
        } else {
          navigate(`/profile/${user.id}`);
        }
      } catch (error) {
        console.error('Error during login:', error);
        errorMessage = 'An error occurred during login. Please try again later.';
      }
    }
  </script>
  
  <main>
    <h1>Employee Login</h1>
    <form on:submit={handleLogin}>
      <label for="emp_id">Employee ID:</label>
      <input type="email" bind:value={emp_id} required>
      <br>
      <label for="password">Password:</label>
      <input type="password" bind:value={password} required>
      <br>
      {#if errorMessage}
        <p>{errorMessage}</p>
      {/if}
      <button type="submit">Login</button>
    </form>
  </main>
  