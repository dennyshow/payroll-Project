<script lang="ts">
	import {supabase} from '$lib/supabase.js'
    
	export let data
  
	let loadedData = []

	async function loadData() {
	  const { data: result } = await data.supabase.from('profile').select('*').limit(30)
	  loadedData = result
	}
  
	$: if (data.session) {
	  loadData()
	}
  </script>


<div>
	{#if data.session}
		<p>Welcome, {data.session.user.email}</p>
		
	{:else}
		<div class=" auth-buttons col-xs-12 col-md-12 col-lg-12">
			<p>Please Log In To Proceed</p>
			<a href="/login" class="btn btn-primary">Login</a>

		</div>
		
	{/if}
</div>

