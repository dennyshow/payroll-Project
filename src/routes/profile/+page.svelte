<script>
    import { onMount } from 'svelte';
    import { supabase } from '../../lib/supabase';


    let userRole = ''; // Placeholder for user role (you should set this based on actual role)
    let userFirstName = '';
    let userLastName = '';
    let employeeId = '';
    let bio = '';
    let about = '';

    let employees = [];

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
      
      const { data, err } = await supabase.from('profile').select('*');
        if (error) {
            console.error('Error fetching employees:', error.message);
        } else {
          employees = data;
        }  
    
  });

  let employeeName = '';
  let startTime = '';
  let endTime = '';
  let logs = [];
  
  function logTime() {
    const logEntry = {
      name: userFirstName+userLastName,
      start: startTime,
      end: endTime,
    };

    logs = [...logs, logEntry];

    // Clear the input fields
    employeeName = '';
    startTime = '';
    endTime = '';
  }

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return date.toLocaleDateString('en-US', options);
  }

</script>
  
  <main>

    
    <div class="container mt-5">
      <!-- <h1>Welcome to your Dashboard </h1>
      <p>You are logged in as: {userRole}</p> -->
    
    <div class="row">
      <div class="col-md-12">
        <!-- <div class="card" style="width: 18rem;">
          <img src="#" alt="Profile pic" class="card-img-top" />
          <div class="card-body text-center">
            <h5 class="card-title" style="color:brown">Welcome to your Dashboard</h5>
            <p class="card-subtitle mb-2 text-muted">You are logged in as: {userRole}</p>
          </div>


        </div> -->
            <!-- Display different content based on user role -->
            {#if session}
              {#if userRole === 'Admin'}
                <p>Admin!</p>
                <p>Name: {userFirstName} {userLastName}</p>
                <p>Employee ID: {employeeId}</p>
                <div>
                  <h2>Employee List</h2>
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th>Employee ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Time Log</th>
                      <th>Approval</th>
                      <!-- Add more columns as needed -->
                    </tr>
                  </thead>
                  <tbody>
                    {#each employees as employee}
                      <tr>
                        <td>{employee.employee_id}</td>
                        <td>{employee.first_name} {employee.last_name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.role}</td>
                        <td>{formatTimestamp(employee.time_log)}</td>
                        <td>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                            <label class="form-check-label" for="defaultCheck1">
                            </label>
                          </div>
                        </td>
                        <!-- Add more columns as needed -->
                      </tr>
                    {/each}
                  </tbody>
                </table>

                </div>
                
                <a href="/register" class="btn btn-primary" type="submit">Add New Employee</a>
                <a href="/" class="btn btn-primary" type="submit">Delete Employee</a>
                
            <!-- Admin-specific content -->
              {:else if userRole === 'Manager'}
                <p>Manager</p>
                <p>Name: {userFirstName} {userLastName}</p>
                <p>Employee ID: {employeeId}</p>
            <!-- Manager-specific content -->
              {:else}
                <p>Employee!</p>
                <p>Name: {userFirstName} {userLastName}</p>
                <p>Employee ID: {employeeId}</p>
                <h2>Employee Time Log</h2>
                <form on:submit|preventDefault={logTime}>
                  <div class="mb-3">
                    <label for="employeeName" class="form-label">Employee Name</label>
                    <input type="text" class="form-control" id="employeeName" bind:value={employeeName} required />
                  </div>
                  <div class="mb-3">
                    <label for="startTime" class="form-label">Start Time</label>
                    <input type="time" class="form-control" id="startTime" bind:value={startTime} required />
                  </div>
                  <div class="mb-3">
                    <label for="endTime" class="form-label">End Time</label>
                    <input type="time" class="form-control" id="endTime" bind:value={endTime} required />
                  </div>
                  <button type="submit" class="btn btn-primary">Log Time</button>
                </form>
            <!-- Employee-specific content -->
              {/if}
          {/if}
          </div>
        </div>
      </div>
    
  </main>
  