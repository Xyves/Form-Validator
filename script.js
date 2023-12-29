
// const form = document.querySelector("form")
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     validateForm()
//     const pass1 = document.querySelector("#password").value;
//     const pass2 = document.querySelector("#password-comfirm").value;
//     console.log(pass1);
//     console.log(pass2);
//     console.log(pass1)
//     console.log(typeof(pass1))
//     Validator()
// //  if(pass1)
// })
// const validateForm = ()=>{
//     const pass1 = document.querySelector("#password").value;
//     const pass2 = document.querySelector("#password-comfirm").value;
//     if(pass1 !== pass2){
//             alert("Passwords don't match")
//     }
// }



const APP = {
    init(){
        APP.addEventListeners();
        if(APP.addEventListeners){
            console.log("Well done mate!")
        }
    },
    addEventListeners(){
        const form = document.querySelector("form")
        let email= document.querySelector("#email")
        let country = document.querySelector("#countries")
        let zipcode = document.querySelector("#zipcode")
        let password1 = document.querySelector("#password")
        let password2 = document.querySelector("#passwordComfirm")
    form.addEventListener("submit",APP.validate)
        email.addEventListener("change",APP.testEmail)
        country.addEventListener("change",APP.testCountry)
        zipcode.addEventListener("change",APP.testZip)
        password1.addEventListener("change",APP.testPassword1)
        password2.addEventListener("change",APP.testPassword2)
    },
    validate(e){
        e.preventDefault()
        
        const isValid = [
            APP.testEmail(),
            APP.testCountry(),
            APP.testZip(),
            APP.testPassword1(),
            APP.testPassword2()
        ].every(result => result === true);

        // If all validations pass, submit the form
        if (isValid) {
           form.submit();
        }
    },
    testEmail(e){
        let email = e.target
        email.setCustomValidity("")
        let current = email.checkValidity()
        console.log("Current:",current)
        if(current){
            let regex = new RegExp("/^\S+@\S+\.\S+$/") 
            if(!regex.test(email.value)){
                console.log("Password is wrong")
            }
            return current

        }
    },
    testCountry(e){
        let country = e.target
        var value = country.options[country.selectedIndex].value;
        country.setCustomValidity("")
        let current = country.checkValidity()
        if(current){
            if(value !== ""|| value === null){
                console.log("current:",current)
            }
            return current


            
        }
    },
    testZip(e){
        let zip = e.target
        zip.setCustomValidity("")
        let current = zip.checkValidity()
        console.log("Current:",current)
        if(current){
            let regex = new RegExp("^\d{2}-\d{3}$") 
            if(regex.test(zip.value ===false)){
                console.log("Current:",current)
            }
            return current

            }

    },
    testPassword1(e){
        let password = e.target;
        password.setCustomValidity("")
        let current = password.checkValidity()
        console.log("Current:",current)
        console.log(password.validity)
        if(current){
            let regex = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")
            if (!regex.test(password.value)) {
                console.log("Password is wrong");
            }
            return current

        }
    },
    testPassword2(e){
        let password2 = e.target;
        password2.setCustomValidity("")
        let current = password2.checkValidity()
        console.log("Current:",current)
           if(current){
            let regex = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")
            if(regex.test(password2.value   === false)){
                console.log("Password is wrong")
            }
            else{
                console.log("Good")
            }
            return current

    }
}
}
document.addEventListener("DOMContentLoaded",APP.init)
