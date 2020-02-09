jQuery(document).ready(function($) {

$(".ajax-contact-form").submit(function() {
var str = $(this).serialize();

$.ajax({
type: "POST",
url: "http://127.0.0.1:8080/contacts/contact.php",
data: str,
success: function(msg) {
if(msg == 'OK') {
result = '<p>Ваше сообщение отправлено</p>';
$(".fields").hide();
} else {
result = msg;
}
$('.note').html(result);
}
});
return false;
});
});