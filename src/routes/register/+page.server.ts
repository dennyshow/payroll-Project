import { supabase } from '$lib/supabase.js';
import { error, redirect } from '@sveltejs/kit';
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