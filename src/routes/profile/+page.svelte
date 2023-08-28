<script>
    import { onMount } from 'svelte';
    import { supabase } from '../../lib/supabase';
  
    let userRole = ''; // Placeholder for user role (you should set this based on actual role)
    let userFirstName = '';
    let userLastName = '';
    let employeeId = '';

    export let data;

    const {session} = data;
  
    onMount(async () => {
      const {data: {user}} = await supabase.auth.getUser();
      console.log(session)

      // Fetch the user's role from the Supabase table
      const { data: {first_name, last_name, employee_id, role}, error } = await supabase
        .from('profile')
        .select('*')
        .eq('user_id', session?.user.id)
        .single();
      
        userFirstName = first_name;
        userLastName = last_name;
        employeeId = employee_id;
        userRole = role;
      });
      
  </script>
  
  <main>
    <h1>Welcome to your Dashboard </h1>
    <p>You are logged in as: {userRole}</p>
    
    <div>
      <!-- Display different content based on user role -->
      {#if session}
        {#if userRole === 'admin'}
          <p>Hello Admin!</p>
          <p>Name: {userFirstName} {userLastName}</p>
          <p>Employee ID: {employeeId}</p>
          <!-- Admin-specific content -->
        {:else if userRole === 'manager'}
          <p>Hello Manager!</p>
          <p>Name: {userFirstName} {userLastName}</p>
          <p>Employee ID: {employeeId}</p>
          <!-- Manager-specific content -->
        {:else}
          <p>Hello Staff!</p>
          <p>Name: {userFirstName} {userLastName}</p>
          <p>Employee ID: {employeeId}</p>
          <!-- Employee-specific content -->
        {/if}
      {/if}
    </div>
  </main>
  