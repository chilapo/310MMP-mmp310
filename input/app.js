const submitButton = document.getElementById("submit");
const nameInput = document.getElementById("name");
const bioInput = document.getElementById("bio");
const boroughSelect = document.getElementById("borough");
console.log("submitButton");


submit.onclick = function(event){
    //console.log(event);
    //console.log(this);
    //console.log("you clicked me!!");
    //console.log(nameInput.value);
    //console.log(bioInput);
    //console.log(boroughSelect.value);
   const message = document.createElement("p");
    message.textContent = "Hello, "
                            + nameInput.value
                            + " from "
                            + boroughSelect.value
                            + " welcome  to my website."
    document.body.appendChild(message);
};
