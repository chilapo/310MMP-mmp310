/*
    html element references

*/


const submitButtom = document.getElementById("submit");
const exclamationInput =document.getElementById("exclamation");
const adverbInput =document.getElementById("adverb");
const nounInput =document.getElementById("noun");
const adjectiveInput =document.getElementById("adjective");

/*

    listen for button press
*/

submitButtom.onclick = function() {
        /*
            get all the words, generate  our story
        
        */   
    
        const messsage = document.createElement("p");
        messsage.textContent = exclamationInput.value
                                +   "he said"
                                +   adverbInput.value
                                +   " as he jumped into his convertible "
                                +   nounInput.value
                                +   " and dorve off with his "
                                +   adjectiveInput.value
                                +   " wife "
        document.body.appendChild(messsage);         
            

};