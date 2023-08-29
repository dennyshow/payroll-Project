<script>
    let employeeName = '';
    let startTime = '';
    let endTime = '';
    let logs = [];
  
    function logTime() {
      const logEntry = {
        name: employeeName,
        start: startTime,
        end: endTime,
      };
  
      logs = [...logs, logEntry];
  
      // Clear the input fields
      employeeName = '';
      startTime = '';
      endTime = '';
    }
  </script>
  
  <!-- HTML Structure using Bootstrap classes -->
  <div class="container mt-5">
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
  
    <h3 class="mt-4">Logged Times</h3>
    <table class="table">
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Start Time</th>
          <th>End Time</th>
        </tr>
      </thead>
      <tbody>
        {#each logs as log, i}
          <tr key={i}>
            <td>{log.name}</td>
            <td>{log.start}</td>
            <td>{log.end}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  
  <style>
    /* Add any additional styling here */
  </style>
  