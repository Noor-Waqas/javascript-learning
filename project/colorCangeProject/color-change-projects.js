const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const message = document.getElementById('message');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // console.log(e);
        // console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id
            message.innerText = `Welcome! You selected ${e.target.id}`
          
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id
             message.innerText = `Welcome! You selected ${e.target.id}`
        } 
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id
             message.innerText = `Welcome! You selected ${e.target.id}`
        } 
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id
             message.innerText = `Welcome! You selected ${e.target.id}`
        }
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id
             message.innerText = `Welcome! You selected ${e.target.id}`
        }
        

    })
    
})