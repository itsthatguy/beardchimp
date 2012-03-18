jQuery(document).ready(function($) {

  var thanksObj = new Object
  ////////////////////////////////////////////////////////////
  // Thank you message: Edit the text in the following strings
  thanksObj.header = "Thanks, you rock!"
  thanksObj.message = "You should receive a confirmation email shortly.\
                      If you don&#x27;t see one, check your spam. If all else \
                      fails, try again in 10 minutes or email us: \
                      <a href='#'>scruffy@beardson.ly</a>"
  // END of Thank you message

  var thanksMessage = "<div class='content'><h2>" + thanksObj.header + "</h2><p>" + thanksObj.message  + "</p></div>"
  
  emailField = $('#mce-EMAIL')
  thanks = $('#thanks')
  subscribe = $('#subscribe')

  // post form data
  function submitForm(eventObject) {
    var $form = $(eventObject.target);
    var formAction = $form.attr("action")
    $.post(formAction, $form.serialize(), 'json')
    return false
  }

  function validate(e) {
    var email = emailField.val()
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if (re.test(email)) {
      // valid
      submitForm(e)
      subscribe.animate({opacity: 0}, 400)
      setTimeout( function() {
        thanks.show()
        thanks.html(thanksMessage)
        thanks.animate({opacity: 1}, 400)
      }, 400)
    }
    else {
      // invalid
      var message = 'Oops.. a valid email address is required.'
      $('.info').addClass('invalid').text(message).css('opacity', 0).animate({opacity: 1}, 400)
      //setTimeout( function() {
      //  emailField.removeClass('shake')
      //}, 1000)
    }
    return false
  }

  $("form").submit(validate)
  
})
