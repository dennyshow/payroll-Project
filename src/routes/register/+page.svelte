<!-- AddEmployeeForm.svelte -->
<script>
    import { addEmployee } from "../../stores/employeeStores";
    import { goto } from "$app/navigation";
    
    let employeeData = {
      employee_id: '',
      first_name: '',
      last_name: '',
      role: '',
      email: '',
      password: ''
    };
  
    async function handleSubmit() {
        
        await addEmployee(
            employeeData.employee_id,
            employeeData.first_name,
            employeeData.last_name,
            employeeData.role,
            employeeData.email,
            employeeData.password
        );

        if (employeeData.employee_id && employeeData.first_name)
        
        // Display success message to the user (you can use an alert or display it in the UI)
        alert("Employee added successfully!");
        
        // Reseting the form fields
        employeeData = {
            employee_id: '',
            first_name: '',
            last_name: '',
            role: '',
            email: '',
            password: ''
        };
        goto('/');


    }
  </script>
  
  <main>
    <h1>Employee Registration</h1>
    <form method="post" on:submit|preventDefault={handleSubmit}>
      <!-- Form fields for employee data -->
      <!-- Bind input fields to employeeData properties using bind:input -->
      <div>
        <input id="employee" type="text" bind:value={employeeData.employee_id} placeholder="Employee ID" />
        <input type="text" bind:value={employeeData.first_name} placeholder="First Name" />
        <input type="text" bind:value={employeeData.last_name} placeholder="Last Name" />
        <input type="text" bind:value={employeeData.role} placeholder="Role" />
        <input type="text" bind:value={employeeData.email} placeholder="Email" />
        <input type="password" bind:value={employeeData.password} placeholder="Password" />
      </div>
      <button class="btn btn-primary" type="submit">Add Employee</button>
    </form>
    
  </main>
  