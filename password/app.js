// characters for password 

const alpha =  "uadygfbpyadsbvyba";

// rules 
    // password lenght
// user clicks on buttom
const btn = document.getElementById('generate');
btn.onclick = generatePassword;

const message = document.getElementById('password');
const passwordLenghtInput = document.getElementById('lenght');


// generate password

function generatePassword(){
    let password = "";
   let lenght = passwordLenghtInput.value;
    
    for (let i = 0 ; i < 10 ; i++) {
         password += Math.floor[Math.random() *  alpha.length]
         
    }
    
   // console.log(password);
    
    
    // display password
    
    message.textContent = password;
}

// display password