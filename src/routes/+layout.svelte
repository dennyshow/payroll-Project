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

	async function logOut()  {
		await supabase.auth.signOut();

	}


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
		<li class="nav-item">
			<a class="nav-link" href="/logtime">Log Time</a>
		  </li>

		{/if}
		<li class="nav-item">
		  <a class="nav-link" href="/about">About Us</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="https://forms.office.com/Pages/ResponsePage.aspx?id=yxdjdkjpX06M7Nq8ji_V2n22HJdBJIhPmJ6O9a94XT9URFhKUVNYM1RGQzJLRFRLN0hINldLWEpSRi4u">Feedback</a>
		  </li>
		  {#if data.session}
		  <li class="nav-item">
			<a on:click="{logOut}" class="nav-link" href="/">Log Out</a>
		  </li>
		  {/if}
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
<hr>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
	<ol class="carousel-indicators">
	  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
	  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
	  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	</ol>
	<div class="carousel-inner">
	  <div class="carousel-item active">
		<img class="d-block w-100" src="../src/static/img/payrollimg1.png" alt="First slide">
	  </div>
	  <div class="carousel-item">
		<img class="d-block w-100" src="../src/static/img/payrollimg2.jpg" alt="Second slide">
	  </div>
	  <div class="carousel-item">
		<img class="d-block w-100" src="../src/static/img/payrollimg4.jpg" alt="Third slide">
	  </div>
	</div>
	<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
	  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
	  <span class="sr-only">Previous</span>
	</a>
	<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
	  <span class="carousel-control-next-icon" aria-hidden="true"></span>
	  <span class="sr-only">Next</span>
	</a>
  </div>

<footer class=" footer bg-dark text-center">
	<!-- Copyright -->
	<div class="text-center p-3" style="background-color: rgb(33, 33, 245);">
	  © 2023 Copyright:
	  <a class="text-light" href="/">MANBrothers.com</a>
	</div>
	<!-- Copyright -->
  </footer>


