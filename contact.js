
// Listen for form submit

document.getElementById('contactform').addEventListener('submit', submitForm);
function submitForm(e){
    e.preventDefault();

    // Get values
    var name = getInputValue('name');
    var company = getInputValue('company');
    var email = getInputValue('email');
    var phone = getInputValue('phone');
    var message = getInputValue('message');
  
    saveMessage(name, company, email, phone,message);


}

// Function to get frorm values

function getInputValue(id){
    return document.getElementById(id).value;
}

//save the message to firebase

function saveMessage(name,company,email,phone,message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name:name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}