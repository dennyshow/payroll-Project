<!-- _layout.svelte -->
<script>
    import { Router } from '@sveltejs/kit';
    import { session } from '@sveltejs/kit/app';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import supabase from '../supabase';
  
    let isLoggedIn = false;
  
    // Check if the user is logged in on every page load
    onMount(async () => {
      const sessionData = await session;
  
      if (sessionData.user) {
        isLoggedIn = true;
      }
    });
  
    async function logout() {
      await supabase.auth.signOut();
      goto('/login');
    }
  </script>
  
  <header>
    <nav>
      {#if isLoggedIn}
        <button on:click={logout}>Logout</button>
      {/if}
    </nav>
  </header>
  
  <main>
    <Router {segment}>
      <slot></slot>
    </Router>
  </main>
  