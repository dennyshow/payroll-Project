<script>
    import { onMount } from 'svelte';
	import '../static/css/main.css';
    import { invalidate } from '$app/navigation';
	

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);


	onMount(() => {
		const { 
			data: { subscription },
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at){
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe()
		
	});


</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width" />
	<title >M.A.N Brothers</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	
</svelte:head>


<nav>
	<ul class="nav justify-content-center">
		<li class="nav-item">
		  <a class="nav-link active" href="/">Home</a>
		</li>
		{#if session}
		<li class="nav-item">
		  <a class="nav-link" href="/profile">Profile</a>
		</li>
		
		{/if}
		<li class="nav-item">
		  <a class="nav-link" href="/about">About Us</a>
		</li>
	  </ul>
	  <div class="tab-content" id="myTabContent">
		<div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
		<div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
		<div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
	  </div>
	
</nav>

<div class="container  col-xs-6 col-md-6 col-lg-12">
	<h1>M.A.N Brothers</h1>
	<p>Payroll Management System</p>
	
	<slot>
	</slot>
	
</div>


