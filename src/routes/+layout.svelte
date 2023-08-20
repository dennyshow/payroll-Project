<script>
    import { onMount } from 'svelte';
	import '../../static/css/main.css';
    import { supabase } from '$lib/supabase';
    import { invalidate } from '$app/navigation';

	onMount(() =>{
		const { 
			data: { subscription },
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => subscription.unsubscribe()
		
	});
</script>

<slot />
