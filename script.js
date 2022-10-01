
const divCheckbox = document.querySelector('.checkbox');

function showPassword(e) {
    const prevElSib = e.currentTarget.previousElementSibling
    const inputPassword = prevElSib.querySelector('input');

    if (inputPassword.type === 'password') {
        inputPassword.type = 'text';
        if (inputPassword.value.length < 6) {
            alert('Your password should consist of minimum 6 characters')
        }
    } else if (inputPassword.type === 'text'){
        inputPassword.type = 'password';
    }
};

divCheckbox.addEventListener('change', showPassword, true)










//***************************************************** */
//  für mich 
//***************************************************** */
//  mit Erklärungen und if-Bedingung, statt ternary-Operator
// function showPassword(e) {
//     const prevElSib = e.currentTarget.previousElementSibling
//     const inputPassword = prevElSib.querySelector('input')
    
    
//     // console.log(e);                         //  Event => change
//     // console.log(e.target);                  //  input => checkbox
//     // console.log(e.currentTarget);           //  divCheckbox
//     // console.log(e.target.previousSibling);  //  textNode => enter
//     // console.log(prevElSib);                 //  div mit input-feld für passwort
    

// const check = inputPassword.type === 'password' ? (inputPassword.type = 'text') : (inputPassword.type = 'password')

// ODER: if-Bedingung
    
//     if (inputPassword.type === 'password') {
//         inputPassword.type = 'text';
//     } else if (inputPassword.type === 'text'){
//         inputPassword.type = 'password';
//     }
    
// };

//***************************************************** */
//  Hard-Coding

// const inputPassword = form.querySelector('#password');
// const checkbox = form.querySelector('#showPassword');

// function showPassword2() {

//     if (inputPassword.type === 'password') {
//         inputPassword.type = 'text';
//     } else if (inputPassword.type === 'text'){
//         inputPassword.type = 'password';
//     }
// };

// checkbox.addEventListener('click', showPassword2)