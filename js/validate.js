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
        first_name: "First Name cannot be empty",
        last_name: "Last Name cannot be empty",
        email: {
            empty: "Email cannot be empty",
            wrongFormat: "Looks like this is not an email"
        },
        password: {
            empty: "Password cannot be empty",
        }
    }

    checkFirstName();
    checkLastName();

    checkEmail();
    checkPassword();

}



const showFirstNameError = (text) => {
    // fNameError.appendChild.textContent = errorText.first_name;
    fNameError.innerHTML = text;
    fNameOutline.classList.add('error', 'changePadding');
    fNameErrorIcon.classList.add('invalid');
    fNameError.classList.add('invalid');
    // fNameError.style.display = "block"

    console.log(fNameError)

    // hidefirstNameError();
    fNameOutline.addEventListener("keydown", firstNameFocusHandler)
}

const showLastNameError = (text) => {
    lNameError.innerHTML = text;
    lNameOutline.classList.add('error', 'changePadding');
    lNameErrorIcon.classList.add('invalid');
    lNameError.classList.add('invalid');

    // hidelastNameError();
    lNameOutline.addEventListener("keydown", lastNameFocusHandler, false)


}

const showEmailError = (text) => {
    emailError.innerHTML = text;
    emailOutline.classList.add('error', 'changePadding');
    emailErrorIcon.classList.add('invalid');
    emailError.classList.add('invalid');

    // hideEmailError();
    emailOutline.addEventListener("keydown", emailFocusHandler)
}

const showPasswordError = (text) => {
    pwdError.innerHTML = text;
    pwdOutline.classList.add('error', 'changePadding');
    pwdErrorIcon.classList.add('invalid');
    pwdError.classList.add('invalid');

    // hidePasswordError();
    pwdOutline.addEventListener("keydown", passwordFocusHandler, false)


}

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


const isRequired = value => value == '' ? false : true;

const checkFirstName = () => {
    !isRequired(firstName.value) && (
        showFirstNameError(errorText.first_name)
    )
    // : hidefirstNameError()



}

const checkLastName = () => {
    !isRequired(lastName.value) && (
        showLastNameError(errorText.last_name)
    )
    // : hidelastNameError()

}

function validateEmail(emailAddr) {
    const re = /\S+@\S+\.\S+/;

    // const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailAddr).toLowerCase());
}

const checkEmail = () => {
    !email.value ? showEmailError(errorText.email.empty)
        : !(validateEmail(signUpForm.email))
        && showEmailError(errorText.email.wrongFormat)
    // : emailOutline.addEventListener("keydown", emailFocusHandler);
}

// const checkPassword = () => {
//     !pwd.value && showPasswordError(errorText.password.empty);

// }
const isPasswordSecure = (pwd) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(pwd);
};

const checkPassword = () => {
    !pwd.value ? showPasswordError(errorText.password.empty)
        : !(isPasswordSecure(signUpForm.password))
        && showPasswordError('wrong format')

}

const debounce = (fn, delay = 500) => {
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


// formInput.addEventListener("mouseover", evt => {
//     if (evt.formInput == 0) {
//         firstNameFocusHandler;
//     }
//     else if (evt.formInput == 1) {
//         lastNameFocusHandler
//     }


// })

// const hidefirstNameError = ([value]) => {
//     displayTimeInMs = 6000;
//     value = firstName.value
//     setTimeout(() => {
//         fNameError.remove(), displayTimeInMs
//     });
//     setTimeout(() => fNameOutline.classList.remove('error', 'changePadding'), displayTimeInMs);
//     setTimeout(() => fNameErrorIcon.classList.remove('invalid'), displayTimeInMs);
// }

// const hidelastNameError = () => {
//     displayTimeInMs = 6000;
//     setTimeout(() => {
//         lNameError.remove(), displayTimeInMs
//     });
//     setTimeout(() => lNameOutline.classList.remove('error', 'changePadding'), displayTimeInMs);
//     setTimeout(() => lNameErrorIcon.classList.remove('invalid'), displayTimeInMs);
// }

// const hideEmailError = () => {
//     displayTimeInMs = 6000;
//     setTimeout(() => {
//         emailError.remove(), displayTimeInMs
//     });
//     setTimeout(() => emailOutline.classList.remove('error', 'changePadding'), displayTimeInMs);
//     setTimeout(() => emailErrorIcon.classList.remove('invalid'), displayTimeInMs);
// }

// const hidePasswordError = () => {
//     displayTimeInMs = 6000;
//     setTimeout(() => {
//         pwdError.remove(), displayTimeInMs
//     });
//     setTimeout(() => pwdOutline.classList.remove('error', 'changePadding'), displayTimeInMs);
//     setTimeout(() => pwdErrorIcon.classList.remove('invalid'), displayTimeInMs);

// }
