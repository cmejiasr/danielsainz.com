$("#contact-form").submit(function (e) {
      alert("Email functionality is not available, Please contact me to dsainzm@gmail.com or on my social networks");
      return;
      /*
       e.preventDefault();
       var name = $("#name").val();
       var email = $("#email").val();
       var subject = 'Email from DanielSainz.com';
       var message = $("#message").val();
       var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

       function isValidEmail(emailAddress) {
           var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
           return pattern.test(emailAddress);
       };
       if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
           $.ajax({
               type: "POST",
               url: "js/sendMail.php",
               data: dataString,
               success: function (d) {
                   $('.success').fadeIn(1000);
                   $('.error').fadeOut(500);

               }
           });
       }
       else {
           $('.error').fadeIn(1000);
           $('.success').fadeOut(500);
       }
       $("#name").val("");
       $("#message").val("");
       $("#email").val("");
       return false;
       */
   });
