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
    $('button.btn1').click(writeFormData); // Create Javascript object with form data
    //$('#submitButton').click(validateForm); // Validate the form
    $('button.btn2').click(eraseFormData); // Erase form field values and hide form-content and form-alert
    $('#link-tab').click(function () {
        $('div.tab-content').toggle();
    }); // Toggle the Link tab
    $('#contact-tab').click(function () {
        $('#contact').show();
    }); // Show the Contact content
});