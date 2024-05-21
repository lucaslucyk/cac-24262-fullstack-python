document.addEventListener('DOMContentLoaded', () => {


    const form = document.getElementById("formRegister");
    // console.log("form", form)

    const formControls = document.getElementsByClassName("form-control");

    const selectCountry = document.getElementsByName("country");

    const input = document.getElementsByTagName("input")

    const errorMsg = document.getElementsByClassName("form-error");


    const validateForm = (event) => {
        event.preventDefault();

        const firstName = document.getElementById("firstname")
        const email = document.getElementById("email")

        let isValid = true;


        if (firstName.value === "" || firstName.value === "hola") {

            isValid = false;
            // alert("El nombre es vacio o no es valido")

            errorMsg[0].classList.remove("hidden")
        }

        const pwd = document.getElementById("password")

        if (pwd.value.length < 8 ) {
            errorMsg[2].classList.remove("hidden")
        }
    }

    form.addEventListener("submit", validateForm)
});