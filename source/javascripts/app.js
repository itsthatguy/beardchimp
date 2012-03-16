jQuery(document).ready(function($) {

  emailField = $('#mce-EMAIL')
  theForm = $('#the-form')
  thanks = $('#thanks')

  // post form data
  function submitForm(eventObject) {
    var $form = $(eventObject.target);
    var formAction = $form.attr("action")
    $.post(formAction, $form.serialize(), 'json')
    return false
  }

  function validate(e) {
    console.log('boo')
    var email = emailField.val()
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if (re.test(email)) {
      // valid
      submitForm(e)
      theForm.animate({opacity: 0}, 400)
      thanks.delay(400).animate({opacity: 1}, 400)
      //setTimeout( function() {
      //  thanks.addClass('thanks')
      //  centerWrap.hide()
      //}, 1000)
    }
    else {
      // invalid
      var message = 'Oops.. a valid email address is required.'
      $('.info').addClass('invalid').text(message).css('opacity', 0).animate({opacity: 1}, 400)
      // emailField.addClass('shake')
      //setTimeout( function() {
      //  emailField.removeClass('shake')
      //}, 1000)
    }
    return false
  }

  $("form").submit(validate)
  
  console.log('boom')
})
