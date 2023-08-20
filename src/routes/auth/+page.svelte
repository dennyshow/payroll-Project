<!-- // src/routes/auth/+page.svelte -->
<script>
    export let data
    let { supabase } = data
    $: ({ supabase } = data)
    
    let first_name
    let last_name
    let email
    let password
    let roles
  
    const handleSignUp = async () => {
      await supabase.auth.signUp({
        first_name,
        last_name
        email,
        password,
        roles,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      })
    }
  
    const handleSignIn = async () => {
      await supabase.auth.signInWithPassword({
        id,
        password,
      })
    }
  
    const handleSignOut = async () => {
      await supabase.auth.signOut()
    }
  </script>
  
  <form on:submit="{handleSignUp}">
    <input name="id" bind:value="{id}" />
    <input type="password" name="password" bind:value="{password}" />
    <button>Sign up</button>
  </form>
  
  <button on:click="{handleSignIn}">Sign in</button>
  <button on:click="{handleSignOut}">Sign out</button>