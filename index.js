// rating
const allStars = document.querySelectorAll('.star');

allStars.forEach((star, i) =>{
    star.onclick = function(){
        let current_star_level = i + 1;

        allStars.forEach((star, j) =>{
            if(current_star_level >= j+1)
            {
                star.innerHTML = '&#9733';
            } else {
                star.innerHTML = '&#9734';
            }
        })
    }
})

//form
const nameInput=document.querySelector("#name");
const email =document.querySelector("#email");
const message =document.querySelector("#message");
const success=document.querySelector("#success");
const errorNodes=document.querySelector(".error");

function validateForm(){
    clearMessages();
    let errorFlag = false;

    if(nameInput.ariaValueMax.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(message.value.length < 1){
        errorNodes[2].innerText = "Please enter suggestion";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){
        success.innerText = "Success";
    }
}

function clearMessages(){
    for(let i = 0;i< errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

function emailIsValid(email){
let pattern = /\S+@\S+\.\S+/;
return pattern.test(email);
}