export const sendContactForm = async(data) =>{
    fetch("/api/",{
        method:"POST",
        body: JSON.stringify(data),
        headers:{          
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    });
}