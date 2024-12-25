// Test function
async function ping() {
    // Try to run the code in the brackets
    try{
        // Create a constant var named response
        // response will await for /ping to be called
        const response = await fetch('/ping', {
            // Utilise the POST method
            // Set the header 'Content-Type' to 'application/json'
            // Finally set the body of the response to "Button Clicked!"
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({message: 'Button Clicked!'})
        });
        // Createa var named result
        // This var will take the JSON and turn it into a JS object
        const result = await response.json();
        // Create an alert window
        alert(`NodeJS responded with:${result.response}`);
    }catch(error){
        // Display error log to the console
        console.error("Error Occured: ", error);
    }
}

// Function that adds an item to the database (one item)
async function addItem(){
    try{
        // Listen for the /add command
        const response = await fetch('/add', {
            // Setup the response using POST and JSON
            // With the body 
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({message: 'Add Items'})
        });

        const result = await response.json();
        alert(`Server responded with: ${result.response}`);
    }catch(error){
        console.error("Error Occured when adding Items\nSee Below for Error Dump:\n", error);
    }
}

// Function that deletes items in the database (one or more)
async function delItems(){
    try{
        const response = await fetch('/del', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({message: 'Remove Items'})
        });

        const result = await response.json();
        alert(`Server responded with: ${result.response}`);
    }catch(error){
        console.error("Error Occured when adding Items\nSee Below for Error Dump:\n", error);
    }
}

async function viewStats(){
    try{
        const response = await fetch('/stats', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({message: 'View Stats'})
        });

        const result = await response.json();
        alert(`Server responded with: ${result.response}`);
    }catch(error){
        console.error("Error Occured when adding Items\nSee Below for Error Dump:\n", error);
    }
}