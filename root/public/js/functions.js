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