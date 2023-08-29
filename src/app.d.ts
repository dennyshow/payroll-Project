// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import { Session, SupabaseClient } from "@supabase/supabase-js"

declare global {

	namespace App {
		interface Locals {
			supabase: SupabaseClient;
			getSession(): Promise<Session | null>
		}
		//interface PageData {}
		
		// interface Platform {}
		// interface Error {}
		
		interface Employee {
			id: number;
			name: string;
			email: string;
			// Add more properties as needed
		  }
	}
}

export {};
