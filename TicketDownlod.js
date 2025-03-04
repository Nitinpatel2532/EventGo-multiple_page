 // Function to fetch user ticket
    
 async function fetchTicket() {
    const email = document.getElementById("tkt-email").value;

    try {
        const response = await fetch("http://localhost:3000/ user_booking");
        const tickets = await response.json();

        const userTickets = tickets.filter(ticket => ticket.user_email === email);

        const ticketInfo = document.getElementById("download-tkt");
        ticketInfo.innerHTML = "";

        if (userTickets.length > 0) {
            userTickets.forEach(ticket => {
                const div = document.createElement("div");
                div.classList.add("download-tkt")
                div.innerHTML = `
                    <h3 style="text-decoration: underline;"> Your Ticket </h3>
                    <p>Name: ${ticket.user_name}</p>
                    <p>Email: ${ticket.user_email}</p>
                     <p>Contact: ${ticket.user_contact}</p>
                    <p>Age: ${ticket.user_age}</p>
                     <p>Movie_Name: ${ticket.movie_name}</p>
                    <p>Price: ${ticket.user_ticket_price}</p>
                     <p>Ticket_Type: ${ticket.user_ticket_type}</p>
                    <p>Total_Quantity: ${ticket.user_total_quantity}</p>
                    <p>Total_Amount: ${ticket.user_total_pay}</p>
                    <button onclick="downloadTicket('${ticket.id}')">Download</button>
                    <button onclick="cancelTicket('${ticket.id}')">Cancel</button>
                    <hr>
                `;
                ticketInfo.appendChild(div);    
            });
        } else {
            ticketInfo.innerHTML = "<p>No tickets found.</p>";
        }
    } catch (error) {
        console.error("Error fetching ticket:", error);
    }
}

// Function to download ticket

function downloadTicket(ticketId) {
    const ticketDiv = document.querySelector("#download-tkt div");
    const ticketText = ticketDiv.innerText;
    
    const blob = new Blob([ticketText], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "ticket.txt";
    a.click();
}

// // Function to cancel a ticket


function cancelTicket(ticketId) {
     
    try {
        const response= fetch(`http://localhost:3000/ user_booking/${ticketId}`,{
            method:"DELETE"
        })
    

        if (response.ok) {
            document.getElementById("download-tkt div").innerHTML = "<p>Ticket canceled successfully!</p>";
        }
    } catch (error) {
        console.error("Error canceling ticket:",error);
 }
}