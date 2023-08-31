import { writable } from "svelte/store";
import { supabase } from "../lib/supabase"

export const logs = writable([]);

export const name = writable('Svelte');


// calling the loading fn to open once layout loads
export const loadLogs = async () => {
    const {data, error} = await supabase.from('logs').select();

    if(error){
        return console.error(error);
    }
    logs.set(data);

}

export const addLogTime = async (
    employee_id = '',
    employeeName = '',
    startTime = '',
    endTime = '',

    ) => {
    // create a new record in table with data passed as arguments
    const {data, error} = await supabase
    .from('log')
    .insert([{employee_id, 
        employeeName, 
        startTime, 
        endTime}])
    .select('*');

        if (employeeName.length < 3 || startTime.length < 3 
            || endTime.length < 3 ){
                alert("Please fill all fields");
            }

        if(error) {
            return console.error(error);

        }
        
        console.log(data);
        logs.update((cur) => {
            const newLogEntry = [...cur, data[0]];
            return newLogEntry;

            
        });
        
           
};