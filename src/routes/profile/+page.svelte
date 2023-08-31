<script>
    import { onMount } from 'svelte';
    import { supabase } from '../../lib/supabase';
    import { writable } from "svelte/store";

    export const employee = writable([]);

    let userRole = ''; // Placeholder for user role (you should set this based on actual role)
    let userFirstName = '';
    let userLastName = '';
    let employeeId = '';
    let employeeEmail = '';
    let employeePass = '';
    let bio = '';
    let about = '';

    let employees = [];


    export let data;


    const {session} = data;

    
  
    onMount(async () => {
      const {data: {user}} = await supabase.auth.getUser();

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

  export const deleteEmployee = async (user_id) => {
    const {data,error} = await supabase
        .from('profile')
        .delete()
        .eq('employee_id', user_id)
        .single();
    if(error) {
        alert("Error deleting", );
        console.error("Error deleting employee:", error);
    } else {
        console.log("Employee deleted successfully:", data);
    }
    employee.update((employees) => employees.filter((employee) => employee.id !== id));
    //employees.update((employees) => employees.filter((employee) => employee.id !== employee_id));
};





</script>
  
  <main>

    
    <div class="container">
      <!-- <h1>Welcome to your Dashboard </h1>
      <p>You are logged in as: {userRole}</p> -->
    
    <div class="row">
      <div class="col-md-12 col-lg-12">

            <!-- Display different content based on user role -->
            {#if session}
              {#if userRole === 'Admin'}
                <h2>You are Logged in as Admin!</h2>
                <h5>Name: {userFirstName} {userLastName}</h5>
                <h5>Employee ID: {employeeId}</h5>
                <div>
                  <h2>Employee List</h2>
                <table class="table table-sm table-bordered">
                  <thead class="thead-dark">
                    <tr>
                      <th>Employee ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Time Log</th>
                      <th>Approval</th>
                      <th>Delete</th>
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
                        <td>{employee.time_log}</td>
                        <td>
                            <button type="submit" class="btn-success">Approve</button>
                        </td>
                        <td>
                          <button on:click={deleteEmployee} class="btn-danger" type="submit">Delete Employee</button>
                      </td>
                        <!-- Add more columns as needed -->
                      </tr>
                    {/each}
                  </tbody>
                </table>

                </div>
                
                <a href="/register" class="btn btn-primary" type="submit">Add New Employee</a>
                
                
                <!-- Admin-specific content -->
              {:else if userRole === 'Manager'}
                <p>Manager</p>
                <p>Name: {userFirstName} {userLastName}</p>
                <p>Employee ID: {employeeId}</p>
                <!-- Manager-specific content -->
                <h2>Employee Time Log</h2>
                <a href="/logtime"class="btn btn-primary" type="submit">Delete Employee</a>
                
                <textarea>
                  Bio: 
                </textarea>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Employee ID</th>
                      <th>Employee Name</th>
                      <th>Start Time</th>
                      <th>End Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                      <tr>
                        <td>{employeeId}</td>
                        <td>{userFirstName}{userLastName}</td>
                        
                      </tr>
                    
                  </tbody>
                </table>
              {:else}
                <p>Employee!</p>
                <p>Name: {userFirstName} {userLastName}</p>
                <p>Employee ID: {employeeId}</p>
                <!-- Employee-specific content -->
                <h2>Employee Time Log</h2>
                  <a href="/logtime"class="btn btn-primary" type="submit">Delete Employee</a>
                  <textarea>
                    Bio: 
                  </textarea>
              {/if}
          {/if}
          </div>
        </div>
      </div>
    
  </main>
  