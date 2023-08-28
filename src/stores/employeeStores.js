import { writable } from "svelte/store";
import { supabase } from "../lib/supabase"

export const employees = writable([]);

export const name = writable('Svelte');

// calling the loading fn to open once layout loads
export const loadEmployees = async () => {
    const {data, error} = await supabase.from('profile').select();

    if(error){
        return console.error(error);
    }
    employees.set(data);

}

export const addEmployee = async (
    employee_id='', 
    first_name='', 
    last_name='', 
    role='', 
    email='', 
    password=''
    ) => {

    // create a new record in table with data passed as arguments
    const {data, error} = await supabase
    .from('profile')
    .insert([{employee_id, 
        first_name, 
        last_name, 
        role, 
        email, 
        password}])
        .select();

        if(error) {
            return console.error(error);

        }
        console.log(data);
        employees.update((cur) => {
            const newEmployee = [...cur, data[0]];
            return newEmployee;
        });

        //employees.update((current_employee) => [...current_employee, data[0]]);
           
};

export const deleteEmployee = async (id) => {
    const {error} = await supabase
        .from('profile')
        .delete()
        .match({ 'employee_id': id })
    if(error) {
        return console.error("Error deleting", id);
    }
    employees.update((employees) => employees.filter((employee) => employee.id !== id));
    //employees.update((employees) => employees.filter((employee) => employee.id !== employee_id));
};