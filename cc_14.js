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

// Task 3: Converting NodeLists to Arrays for Bulk Updates
function highlightHighPriorityTickets() { 
    const highPriorityTickets = document.querySelectorAll('.high-priority'); // Get all tickets with 'high-priority' class
    const highPriorityArray = Array.from(highPriorityTickets); // Convert NodeList to array
    
    
    highPriorityArray.forEach(ticket => { 
    ticket.style.border = '3px solid #f7b500'; // Change border color of high-priority tickets to yellow
    });
    }

// Task 4: Implementing Ticket Resolution with Event Bubbling
document.getElementById('ticketContainer').addEventListener('click', (event) => { 
    event.stopPropagation(); // Stop the event from propagating to parent elements
    console.log('Ticket container clicked!'); // Log message when the ticket container is clicked
    });

// Task 5: Inline editing functionality
function enableEdit(ticket, name, issue, priority) { 
     const ticketDetails = ticket.querySelectorAll('h3, p, label'); // Select all child elements with ticket details
     const inputs = []; // Array to hold the input fields
     
     
     // Replace text with input fields
     ticketDetails.forEach(detail => { 
     const input = document.createElement('input'); // Create a new input field
     input.setAttribute('type', 'text'); // Set the input type to 'text'
     input.value = detail.textContent; // Set the input value to the current text content
     ticket.replaceChild(input, detail); // Replace the current detail with the input field
     inputs.push(input); // Add the input field to the inputs array
     });
     
     
     // Change button to Save
     const editButton = ticket.querySelector('.edit-btn'); // Get the Edit button
     editButton.textContent = 'Save'; // Change the button text to 'Save'
     
     
     // Save the updated ticket details
     editButton.addEventListener('click', () => { 
     const updatedName = inputs[0].value; // Get the updated name from the input
     const updatedIssue = inputs[1].value; // Get the updated issue from the input
     const updatedPriority = inputs[2].value; // Get the updated priority from the input
     
     
     // Replace inputs with updated static content
     ticket.replaceChild(createElement('h3', updatedName), inputs[0]); // Replace input with updated name
     ticket.replaceChild(createElement('p', updatedIssue), inputs[1]); // Replace input with updated issue
     ticket.replaceChild(createElement('label', `Priority: ${updatedPriority}`), inputs[2]); // Replace input with updated priority
     
     
     // Update button text to "Edit" again
     editButton.textContent = 'Edit'; // Change the button text back to 'Edit'
     });
     }
     
     
     // Helper function to create elements
     function createElement(tag, content) { 
    const element = document.createElement(tag); // Create an element with the specified tag
    element.textContent = content; // Set the text content of the element
    return element; // Return the created element
     }
 
     
     // Add event listener to Resolve button to remove ticket
     resolveButton.addEventListener('click', () => { 
    ticket.remove(); // Remove the ticket from the DOM when clicked
     });
     
     
     // If high priority, apply high-priority class for styling
     if (priority === 'High') { 
     ticket.classList.add('high-priority'); // Add 'high-priority' class for special styling
     }
     
     
     // Create and append Edit button
     const editButton = document.createElement('button'); // Create a <button> element for editing
     editButton.textContent = 'Edit'; // Set the button text to 'Edit'
     editButton.setAttribute('class', 'edit-btn'); // Add the class 'edit-btn' for styling
     ticket.appendChild(editButton); // Append the edit button to the ticket
     
     
     // Add event listener for inline editing
     editButton.addEventListener('click', () => { 
     enableEdit(ticket, customerName, issueDescription, priority); // Call the enableEdit function on click
     });
     
     
     // Append the ticket to the container
     document.getElementById('ticketContainer').appendChild(ticket); // Append the ticket to the DOM container
     }
     
     
     // Updated details
     addSupportTicket('Johnathan Powell', 'Unable to login to the account', 'High'); // Add a high priority ticket
     addSupportTicket('Janet Gordon', 'Payment issue on the website', 'Medium'); // Add a medium priority ticket
     addSupportTicket('Alexander Clark', 'Account restricted', 'High'); // Add a high priority ticket
     addSupportTicket('Bruce Knight', 'Unable to reset password', 'Low'); // Add a low priority ticket
     addSupportTicket('Thomas Rhodes', 'Payment not being accepted', 'Medium'); // Add a medium priority ticket
     addSupportTicket('Howard Ross', 'Website not loading', 'Medium'); // Add a medium priority ticket
     
     
     // Highlighting high-priority tickets
     highlightHighPriorityTickets(); // Call function to highlight all high-priority tickets