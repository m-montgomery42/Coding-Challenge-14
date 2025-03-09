// Task 1: Creating the Base Structure
// Completed in the HTML file

// Task 2: Adding Support Tickets Dynamically
function addSupportTicket(customerName, issueDescription, priority) { 
    const ticket = document.createElement('div'); // Create a new div element for the ticket
    ticket.setAttribute('class', 'support-ticket'); // Add the class 'support-ticket' to style the ticket

    // Create and append customer name
    const nameHeading = document.createElement('h3'); // Create an <h3> element for the customer name
    nameHeading.textContent = customerName; // Set the text content to the provided customer name
    ticket.appendChild(nameHeading); // Append the customer name to the ticket

    // Create and append issue description
    const issuePara = document.createElement('p'); // Create a <p> element for the issue description
    issuePara.textContent = issueDescription; // Set the text content to the provided issue description
    ticket.appendChild(issuePara); // Append the issue description to the ticket

    // Create and append priority label
    const priorityLabel = document.createElement('label'); // Create a <label> element for the priority
    priorityLabel.textContent = `Priority: ${priority}`; // Set the label text to the provided priority
    ticket.appendChild(priorityLabel); // Append the priority label to the ticket

    // Create and append Resolve button
    const resolveButton = document.createElement('button'); // Create a <button> element for resolve
    resolveButton.textContent = 'Resolve'; // Set the button text to 'Resolve'
    resolveButton.setAttribute('class', 'resolve-btn'); // Add the class 'resolve-btn' for styling
    ticket.appendChild(resolveButton); // Append the resolve button to the ticket