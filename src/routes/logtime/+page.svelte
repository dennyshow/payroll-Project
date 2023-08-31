<script>
    import {addLogTime} from '../../stores/logStores';
    import { goto } from "$app/navigation";
    
    let employeeData = {
      employee_id: '',
      employee_name: '',
      start_time: '',
      end_time: ''
    };

    let logs = [];
  
    async function handleTimeLog() {
        
        await addLogTime(
            employeeData.employee_id,
            employeeData.employee_name,
            employeeData.start_time,
            employeeData.end_time,
        );

        if (employeeData.employee_id && employeeData.employee_name
        && 	employeeData.start_time && employeeData.end_time){
        
        // Display success message to the user (you can use an alert or display it in the UI)
        alert(" Your time has been logged successfully!");
        } else{
            // Show error messages for each field that is empty
            alert('Please fill all fields');
        }
        
        // Reseting the form fields
        employeeData = {
            employee_id: '',
            employee_name: '',
            start_time: '',
            end_time: '',
        };
        goto('/profile');


    }


</script>
  
  <!-- HTML Structure using Bootstrap classes -->
  <div class="container mt-5">
    <h2>Employee Time Log</h2>
    <form on:submit|preventDefault={handleTimeLog}>
      <div class="mb-3">
        <label for="employeeID" class="form-label">Employee ID</label>
        <input type="text" class="form-control" id="employeeID" bind:value={employeeData.employee_id} required />
      </div>
      <div class="mb-3">
        <label for="employeeName" class="form-label">Employee Name</label>
        <input type="text" class="form-control" id="employeeName" bind:value={employeeData.employee_name} required />
      </div>
      <div class="mb-3">
        <label for="startTime" class="form-label">Start Time</label>
        <input type="time" class="form-control" id="startTime" bind:value={employeeData.start_time} required />
      </div>
      <div class="mb-3">
        <label for="endTime" class="form-label">End Time</label>
        <input type="time" class="form-control" id="endTime" bind:value={employeeData.end_time} required />
      </div>
      <button type="submit" class="btn btn-primary">Log Time</button>
    </form>
  
    <h3 class="mt-4">Logged Times</h3>
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
            <td>{employeeData.employee_name}</td>
            <td>{employeeData.start_time}</td>
            <td>{employeeData.end_time}</td>
          </tr>
        
      </tbody>
    </table>
  </div>
  
  <style>
    /* Add any additional styling here */
  </style>
  