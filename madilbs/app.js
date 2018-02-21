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
    
    const message = document.createElement("p");
    document.body.appendChild(message);
    
    const message1 = document.createElement("p");
    document.body.appendChild(message1);
    
       if (exclamationInput.value) {
		message.textContent = exclamationInput.value
							+ " he said "
							+ adverbInput.value
							+ " as he jumped into his convertible "
							+ nounInput.value
							+ " and drove off with his "
							+ adjectiveInput.value
							+ " wife."

    }else {
		message1.textContent = "You forgot to add an exclamation!";	
	}
    
    
    const message2 = document.createElement("p");
	document.body.appendChild(message2);
    
     if (adverbInput.value) {
		message.textContent = exclamationInput.value
							+ " he said "
							+ adverbInput.value
							+ " as he jumped into his convertible "
							+ nounInput.value
							+ " and drove off with his "
							+ adjectiveInput.value
							+ " wife."
	} else {
		message2.textContent = "You forgot to add an adverb!";	
	}
    
    const message3 = document.createElement("p");
	document.body.appendChild(message3);
    
     if (nounInput.value) {
		message.textContent = exclamationInput.value
							+ " he said "
							+ adverbInput.value
							+ " as he jumped into his convertible "
							+ nounInput.value
							+ " and drove off with his "
							+ adjectiveInput.value
							+ " wife."
	} else {
		message3.textContent = "You forgot to add an noun!";	
	}
    
    const message4 = document.createElement("p");
	document.body.appendChild(message4);
    const message5 = document.createElement("p");
	document.body.appendChild(message5);
     if (adjectiveInput.value) {
		message.textContent = exclamationInput.value
							+ " he said "
							+ adverbInput.value
							+ " as he jumped into his convertible "
							+ nounInput.value
							+ " and drove off with his "
							+ adjectiveInput.value
							+ " wife."
	} else {
		message4.textContent = "You forgot to add an adjective!";	
	}
     if  (adjectiveInput.value = exclamationInput.value){
        message5.textContent = "Opss you cant write the same anwser";
    }
    
    

};