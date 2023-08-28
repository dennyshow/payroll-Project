import { supabase } from '$lib/supabase.js';
import { error, redirect } from '@sveltejs/kit';
import { employeeProfileTable } from '$lib/server/schema.js';
import { addEmployee } from '../../stores/employeeStores.js';

let employeeData = {
    employee_id: '',
    first_name: '',
    last_name: '',
    role: '',
    email: '',
    password: ''
  };

async function handleSubmit() {
        
    await addEmployee(
        employeeData.employee_id,
        employeeData.first_name,
        employeeData.last_name,
        employeeData.role,
        employeeData.email,
        employeeData.password
    );
    // Display success message to the user (you can use an alert or display it in the UI)

    alert("Employee added successfully!");
    
    // Reseting the form fields
    employeeData = {
        employee_id: '',
        first_name: '',
        last_name: '',
        role: '',
        email: '',
        password: ''
    };
    
    throw redirect(301, '/');

    return {};

}




// // TODO: set it so that on load the user will be redirected if they have the wrong auth state
// export const actions = {
// 	create: async (event) => {
// 		// get the form body from the event
// 		const formData = await event.request.formData();
//         const employeeID = formData.get('employee_id');
// 		const firstName = formData.get('first_name');
// 		const lastName = formData.get('last_name');
//         const role = formData.get('role');
//         const email = formData.get('email');
//         const password = formData.get('password')

// 		if (!firstName || !lastName || !role) {
// 			throw error(400, 'Must send a valid first name and last name');
// 		}

// 		// create the user
// 		const session = await event.locals.getSession();
// 		if (!session) {
// 			throw error(401, 'Must have be logged in to create an account');
// 		}

// 		await db.insert(employeeProfileTable).values({

// 			first_name: firstName.toString(),
// 			last_name: lastName.toString(),
//             role: role.toString(),
// 			email: session.user.email,
//             password: password?.toString(),
//             user_id: session.user.id
// 		});

// 		throw redirect(301, '/profile');
// 	}
// };