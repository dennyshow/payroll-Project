// src/routes/login/+page.server.js

import express from 'express';
import { json } from 'body-parser';
import { createClient } from '@supabase/supabase-js';

const app = express();
const PORT = process.env.port || 3000;

// Parse JSON requests
app.use(json());

// Initialize Supabase client
const supabase = createClient(
  'https://qgsiuzixklsdxvxijxpt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnc2l1eml4a2xzZHh2eGlqeHB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk2MzM0NjQsImV4cCI6MjAwNTIwOTQ2NH0.z1X6OehilojhEjhsY_t973B_h5JpsE-ZFHaAhUsguog'
);

// Handling login POST request
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data, error} = await supabase.auth.signInWithPassword({
      
      email,
      password
      
    });
    console.log(data)
  

    if (error) {
      return res.status(401).json({ status: 'Error', 
    message: 'Invalid login credentials' });
    } else {
      return res.status(200).json({ status: 'Success',
      message: `Welcome ${email}` });

      
    }

    // return res.json({ status: 'OK', data });

  } catch (error) {
    console.error('Login error', error);
    res.status(500).send(`Internal Server Error`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})