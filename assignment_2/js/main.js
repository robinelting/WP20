function validateForm(ev){
    ev.preventDefault();
    let firstname = document.getElementById('firstname');
    if (!firstname.checkValidity()) {
        document.getElementById('form-alert').innerHTML = 'Incorrect'
    }
    let lastname = document.getElementById('lastname');
    if (!lastname.checkValidity()) {
        document.getElementById('feedback2').innerHTML = 'Incorrect'
    }
    let age = document.getElementById('age');
    if (!age.checkValidity()) {
        document.getElementById('feedback3').innerHTML = 'Incorrect'
    }
    let city = document.getElementById('city');
    if (!city.checkValidity()) {
        document.getElementById('feedback4').innerHTML = 'Incorrect'
    }
    let email = document.getElementById('email');
    if (!email.checkValidity()) {
        document.getElementById('feedback5').innerHTML = 'Incorrect'
    }
    let phonenumber = document.getElementById('phonenumber');
    if (!phonenumber.checkValidity()) {
        document.getElementById('feedback6').innerHTML = 'Incorrect'
    }
}

function writeFormData(ev){
    ev.preventDefault();
    let FormData = {
        firstname : document.getElementById('firstname').value,
        lastname : document.getElementById('lastname').value,
        age : document.getElementById('age').value,
        city : document.getElementById('city').value,
        email : document.getElementById('email').value,
        phonenumber : document.getElementById('phonenumber')
    }
    console.log(FormData)

}

function eraseFormData(ev){
    ev.preventDefault();
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('age').value = '';
    document.getElementById('city').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phonenumber').value = '';

    $('#form-alert').hide();
    $('#form-content').hide();

}


$(function() {
    $('button.submit').click(writeFormData); // Create Javascript object with form data
    $('button.submit').click(validateForm); // Validate the form
    $('button.erase').click(eraseFormData); // Erase form field values and hide form-content and form-alert
    $('#link-tab').click(function () {
        $('div.tab-content').toggle();
    }); // Toggle the Link tab
    $('#contact-tab').click(function () {
        $('#contact').show();
    }); // Show the Contact content
});