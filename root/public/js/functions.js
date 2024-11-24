async function ping() {
    try{
        const response = await fetch('/ping', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({message: 'Button Clicked!'})
        });

        const result = await response.json();
        alert(`NodeJS responded with:${result.response}`);
    }catch(error){
        console.error("Error Occured: ", error);
    }
}

async function addItems(){
    try{
        const response = await fetch('/add', {
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