$(function() {
    $('.table1').hide();
    // Check name
    $('#name').keyup(function () {
        checkName();
    });
    // Check age
    $('#age').keyup(function () {
        checkAge();
    });
    // Check mail address
    $('#mail').keyup(function () {
        checkMail();
    });
    // Check place/residence
    $('#place').keyup(function () {
        checkPlace();
    });
    // Check all fields on submit
    $('#submit').click(function () {
        if (checkName() && checkAge() && checkMail() && checkPlace()) {
            $('form').submit();
        } else {
            alert('Please fill in the form correctly.')
        }
    });
    $('form').submit(function () {
        $('.table1').show();
    })
})

function checkName() {
    let name_input = $('#name');
    let current_value = name_input.val();
    let name_regexpr = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
    if (current_value.match(name_regexpr) && current_value !== '') {
        name_input.removeClass('is-invalid');
        name_input.addClass('is-valid');
        return true;
    } else {
        name_input.removeClass('is-valid');
        name_input.addClass('is-invalid');
        return false;
    }
}

function checkAge() {
    let age_input = $('#age');
    let current_value = age_input.val();
    let age_regexpr = "^[0-9]*$";
    if (current_value.match(age_regexpr) && current_value !== '') {
        age_input.removeClass('is-invalid');
        age_input.addClass('is-valid');
        return true;
    } else {
        age_input.removeClass('is-valid');
        age_input.addClass('is-invalid');
        return false;
    }
}

function checkMail() {
    let mail_input = $('#mail');
    let current_value = mail_input.val();
    let mail_regexpr = "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])";
    if (current_value.match(mail_regexpr) && current_value !== '') {
        mail_input.removeClass('is-invalid');
        mail_input.addClass('is-valid');
        return true;
    } else {
        mail_input.removeClass('is-valid');
        mail_input.addClass('is-invalid');
        return false;
    }
}

function checkPlace() {
    let place_input = $('#place');
    let current_value = place_input.val();
    let place_regexpr = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
    if (current_value.match(place_regexpr) && current_value !== '') {
        place_input.removeClass('is-invalid');
        place_input.addClass('is-valid');
        return true;
    } else {
        place_input.removeClass('is-valid');
        place_input.addClass('is-invalid');
        return false;
    }
}