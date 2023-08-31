<!-- src/AboutUs.svelte -->
<script>
    let appName = "[App Name]";
    let contactInfo = "[contact email/phone number]";
  </script>
  
  <section class="about-us">
    <h1>About Us</h1>
    <p>
      Welcome to our innovative payroll management system designed to streamline and simplify the way businesses handle their payroll processes...
    </p>
  
    <h2>Our Vision</h2>
    <p>
      Our vision is to empower businesses with a user-friendly and intuitive payroll management system that takes the complexity out of payroll processing...
    </p>
  
    <h2>Key Features</h2>
    <ul>
      <li><strong>User-Centric Approach:</strong> Our app is designed with the end-users in mind...</li>
      <li><strong>Role-Based Dashboards:</strong> We recognize the different responsibilities that come with each role...</li>
      <li><strong>Seamless Registration:</strong> Getting started is a breeze...</li>
      <li><strong>Effortless Time Logging:</strong> Our app simplifies the task of logging worked hours...</li>
    </ul>
  
    <h2>Why Choose Us</h2>
    <ul>
      <li><strong>Reliability:</strong> Our platform is built with robust technology...</li>
      <li><strong>Customizability:</strong> We understand that every business is unique...</li>
      <li><strong>Support:</strong> Our dedicated support team is always ready to assist you...</li>
    </ul>
  
    <p>Join us in streamlining payroll management. Contact us at <a href={`mailto:${contactInfo}`}>{contactInfo}</a> to get started.</p>
  </section>
  
  <style>
    /* Add your CSS styling here */
  </style>
  