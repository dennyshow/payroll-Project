<script>

	export let data;

	let { supabase } = data;

	let email = '';
  	let password = '';
  	let message = '';

	async function signInWithPassword(e) {
		e.preventDefault();
		const{data, error} = await supabase.auth.signInWithPassword({
			email: email, 
			password: password,
			
		});

		if (email.length < 5 && password.length < 10){
			alert("Please enter your credentials");
			
		}
		
		window.location.href = '/'
	}

</script>

<div>
	<h1>Log In</h1>
	<form on:submit="{signInWithPassword}" class="auth-form">
		<div class="col-xs-12 col-md-6">
			<label for=""> Email </label>
			<input id="email" type="email" name="email" bind:value={email}
			placeholder="Email" required/>
			<label for=""> Password </label>
			<input id="password" type="password" name="password" 
			bind:value={password} placeholder="Password" required/>
		</div>
		<button  type="submit" class="btn btn-primary">Log In</button>
	</form>
</div>
