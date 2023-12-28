
const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    validateForm()
    const pass1 = document.querySelector("#password").value;
    const pass2 = document.querySelector("#password-comfirm").value;
    console.log(pass1);
    console.log(pass2);
    console.log(pass1)
    console.log(typeof(pass1))
    Validator()
//  if(pass1)
})
const validateForm = ()=>{
    const pass1 = document.querySelector("#password").value;
    const pass2 = document.querySelector("#password-comfirm").value;
    if(pass1 !== pass2){
            alert("Passwords don't match")
    }
}
window.addEventListener("DOMContentLoaded",validatemyForm())
const validatemyForm = ()=>{

}
const APP = {
    init(){
        APP.addEventListeners();
    
    },
    addEventListeners(){
        const form = document.querySelector("form")
        let email= document.querySelector("#email")
        let country = document.querySelector("#countries")
        let zipcode = document.querySelector("#zipcode")
        let password1 = document.querySelector("#password")
        let password2= document.querySelector("password-comfirm")
    }
}