<script lang="ts">
	export let data
  
	let loadedData = []
	async function loadData() {
	  const { data: result } = await data.supabase.from('test').select('*').limit(20)
	  loadedData = result
	}
  
	$: if (data.session) {
	  loadData()
	}
  </script>

<main>
	<h1>MAN Brothers</h1>
	<p>Payroll Management System</p>
	<div class="auth-buttons">
		<a href="/login" class="btn btn-primary">Login</a>
		<a href="/register" class="btn btn-secondary">Register</a>

		{#if data.session}
  			<p>client-side data fetching with RLS</p>
  			<pre>{JSON.stringify(loadedData, null, 2)}</pre>
  		{/if}
	</div>
</main>
