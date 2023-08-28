<script lang="ts">
	import {supabase} from '$lib/supabase.js'
	export let data
  
	let loadedData = []

	async function loadData() {
	  const { data: result } = await data.supabase.from('employee_profile').select('*').limit(20)
	  loadedData = result
	}
  
	$: if (data.session) {
	  loadData()
	}

	async function logOut() {
		await supabase.auth.signOut();
	}
  </script>

<div>
	{#if data.session}
		<p>Welcome, {data.session.user.email}</p>
		<button on:click="{logOut}">Log Out</button>
	{:else}
		<div class="col-xs-12 col-md-12 col-lg-12">
			<p>Please Log In or Register To Proceed</p>
			<a href="/login" class="btn btn-primary">Login</a>
			<a href="/register" class="btn btn-secondary">Register</a>

		</div>
		
	{/if}
</div>

