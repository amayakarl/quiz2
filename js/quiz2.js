$('#ReadMoreHaiku').click(function (e) {
    $('#haiku').toggleClass('d-none')
    $('#haikuLess').toggleClass('d-none')
    $(this).toggleClass('d-none')
})

$('#haikuLess').click(function (e) {
    $('#haiku').toggleClass('d-none')
    $('#ReadMoreHaiku').toggleClass('d-none')
    $(this).toggleClass('d-none')
})
$('#haiku').parent().hover(function (e) {
        $(this).css('background-color', 'green')
    },
    function (e) {
        $(this).css('background-color', '')
    }
)

/// JS form validation, ran out of time, couldn't test my code properly

var validationErrors={
    name:'Please enter a name',
    email:'Please enter a valid email in the form of example@email.com',
    message:'Please enter a message'
}



function validateName(name){
    return (name.trim().length > 0)
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validateMessage(message){
    return (name.trim().length > 0)
}

function showError($el, errorFor){
    $el.parent().append(`<p class="text-danger">
        ${validationErrors[errorFor]}
    </p>`)
}

$('form').submit(function(e){
    if(!validateName($('[name="name"]').val())){
        e.preventDefault()
        showError($('[name="name"]'),'name')
    }
    else if(!validateEmail($('[name="email"]').val())){
        e.preventDefault()
        showError($('[name="email"]'),'email')
    }
    else if(!validateMessage($('[name="message"]').val())){
        e.preventDefault()
        showError($('[name="message"]'),'message')
    }
})