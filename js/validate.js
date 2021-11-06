const signUpForm = document.querySelector('.subscription-trial-form');
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector("#email");
const pwd = document.querySelector("#password");

formInput = document.querySelector("input");
// console.log(formInput);

const fNameError = document.querySelector('#fName');
const lNameError = document.querySelector('#lName');
const emailError = document.querySelector('#emaiL');
const pwdError = document.querySelector('#pwd');

// console.log(fNameError);


const fNameOutline = document.querySelector("#fname-box");
const lNameOutline = document.querySelector("#lname-box");
const emailOutline = document.querySelector("#email-box");
const pwdOutline = document.querySelector("#pwd-box");

const nameOutline = document.querySelectorAll(".form-input-box")
const errorIcon = document.querySelectorAll(".warning-icon");
const fNameErrorIcon = document.querySelector("#fname-icon");
const lNameErrorIcon = document.querySelector("#lname-icon");
const emailErrorIcon = document.querySelector("#email-icon");
const pwdErrorIcon = document.querySelector("#pwd-icon");




signUpForm.addEventListener('submit', submitHandler);

function submitHandler(evt) {
    evt.preventDefault();

    errorText = {
        first_name: {
            empty: "First Name cannot be empty",
            wrongFormat: {
                less: "First Name should be greater than 2 characters",
                greater: "First Name should be at most 12 characters",
                input_type: "First Name should only contain alphabets"
            },
        },
        last_name: {
            empty: "Last Name cannot be empty",
            wrongFormat: {
                less: "Last Name should be greater than 2 characters",
                greater: "Last Name should be at most 12 characters",
                input_type: "Last Name should only contain alphabets"
            },
        },
        email: {
            empty: "Email cannot be empty",
            wrongFormat: "Looks like this is not an email"
        },
        password: {
            empty: "Password cannot be empty",
            wrongFormat: "Password should be atleast 8 alphanumeric characters, including special characters (!, @, #, $, %, ^, &, *)"
        }
    }

    checkFirstName();
    checkLastName();

    checkEmail();
    checkPassword();

}


// FUNCTIONS TO DISPLAY ERROR FEEDBACK

const showFirstNameError = (text) => {
    fNameError.innerHTML = text;
    fNameOutline.classList.add('error', 'changePadding');
    fNameErrorIcon.classList.add('invalid');
    fNameError.classList.add('invalid');
}

const showLastNameError = (text) => {
    lNameError.innerHTML = text;
    lNameOutline.classList.add('error', 'changePadding');
    lNameErrorIcon.classList.add('invalid');
    lNameError.classList.add('invalid');
}

const showEmailError = (text) => {
    emailError.innerHTML = text;
    emailOutline.classList.add('error', 'changePadding');
    emailErrorIcon.classList.add('invalid');
    emailError.classList.add('invalid');

}

const showPasswordError = (text) => {
    pwdError.innerHTML = text;
    pwdOutline.classList.add('error', 'changePadding');
    pwdErrorIcon.classList.add('invalid');
    pwdError.classList.add('invalid');
}


// FUNCTIONS TO HIDE ERROR FEEDBACK ON INPUT EVENT

const firstNameFocusHandler = () => {
    fNameOutline.classList.remove('error', 'changePadding');
    fNameErrorIcon.classList.remove("invalid");
    fNameError.classList.remove('invalid');

}

const lastNameFocusHandler = () => {
    lNameOutline.classList.remove('error', 'changePadding')
    lNameErrorIcon.classList.remove("invalid")
    lNameError.classList.remove('invalid');

}

const emailFocusHandler = () => {
    emailOutline.classList.remove('error', 'changePadding')
    emailErrorIcon.classList.remove("invalid")
    emailError.classList.remove('invalid');

}

const passwordFocusHandler = () => {
    pwdOutline.classList.remove('error', 'changePadding')
    pwdErrorIcon.classList.remove("invalid")
    pwdError.classList.remove('invalid');

}

// VALIDATION FUNCTIONS - CHECK VALIDITY FORMATS

const isRequired = (value) => !value ? false : true;

const lowerLimit = (length, minChar = 2) => {
    // if character is smaller than lower limit
    if (length < minChar) {
        return true;
    }
    return false;
}

// if character is less than larger limit
const higherLimit = (length, maxChar = 12) => {
    if (length > maxChar) {
        return true;
    }
    return false;
}

function onlyAlphabets(name) {
    const letters = /^[A-Za-z]+$/;
    return letters.test(String(name.value.trim()).toLowerCase());
}

const checkFirstName = () => {
    const charLength = firstName.value.length;
    if (!isRequired(firstName.value.trim())) {
        showFirstNameError(errorText.first_name.empty)
    }
    else if (lowerLimit(charLength)) {
        showFirstNameError(errorText.first_name.wrongFormat.less);
    }
    else if (higherLimit(charLength)) {
        showFirstNameError(errorText.first_name.wrongFormat.greater)
    }
    else if (!(onlyAlphabets(firstName))) {
        showFirstNameError(errorText.first_name.wrongFormat.input_type);
    }

    firstName.addEventListener("input", firstNameFocusHandler);

}

const checkLastName = () => {
    const charLength = lastName.value.length;
    if (!isRequired(lastName.value.trim())) {
        showLastNameError(errorText.last_name.empty)
    }
    else if (lowerLimit(charLength)) {
        showLastNameError(errorText.last_name.wrongFormat.less)
    }
    else if (higherLimit(charLength)) {
        showLastNameError(errorText.last_name.wrongFormat.greater)
    }
    else if (!(onlyAlphabets(lastName))) {
        showLastNameError(errorText.last_name.wrongFormat.input_type);
    }

    lastName.addEventListener("input", lastNameFocusHandler);
}



function validateEmail(emailAddr) {
    // const re = /\S+@\S+\.\S+/;

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailAddr).toLowerCase());
}

const checkEmail = () => {
    if (!isRequired(email.value.trim())) {
        showEmailError(errorText.email.empty)
    }
    else if (!(validateEmail(signUpForm.email.value.trim()))) {
        showEmailError(errorText.email.wrongFormat)
    }
    email.addEventListener("input", emailFocusHandler);
}


const isPasswordSecure = (pwd) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(pwd);
};

const checkPassword = () => {
    if (!isRequired(pwd.value.trim())) {
        showPasswordError(errorText.password.empty)
    }
    else if (!(isPasswordSecure(signUpForm.password.value.trim()))) {
        {

            showPasswordError(errorText.password.wrongFormat)
        }
        pwd.addEventListener("input", passwordFocusHandler);

    }
}

const debounce = (fn, delay = 600) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'firstname':
            checkFirstName();
            break;
        case 'lastname':
            checkLastName();
        case 'email':
            checkEmail();
        case 'password':
            checkPassword();
    }
}));

