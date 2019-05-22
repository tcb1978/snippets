<form class="newsletter-form__form" action="/contact/news-sign-up">
  <label class="newsletter-form__label" for="newsletterForm">News Sign-Up</label>
  <input type="text" id="newsletterForm" class="newsletter-form__input" name="email" placeholder="EMAIL">
  <input type="submit" class="newsletter-form__input--button" value="SIGN UP">
</form>


<script>
  $(document).ready(function () {
    var url = window.location.href;
    var queryString = url.substring(url.indexOf('?') + 1);
    var email = queryString.replace(/email=(.*)%40(.*)/, '$1@$2');
    console.log(email, location.host)
    if (~email.indexOf(location.host)) {
      $('#email').val('');
    } else {
      $('#email').val(email);
    }
  });
</script>