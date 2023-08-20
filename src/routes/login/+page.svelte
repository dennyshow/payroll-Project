<script>
	import { enhance } from "$app/forms";
	export let form;

</script>

<main>
	<h1>Login</h1>
	<form method="post" use:enhance class="auth-form">
        <label for=""> Employee ID </label>
		<input name="employee_id" value={form?.employee_id ??''} />
		<label for=""> Password </label>
		<input type="password" name="password" />
		<button class="btn btn-primary">Login</button>
	</form>
</main>
