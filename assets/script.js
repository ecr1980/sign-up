const form = document.getElementById('form');
const message = document.getElementById('password-message');

function confirm_password() {
  if (document.getElementById('confirm').value == "" || document.getElementById('confirm').value == null) {
    message.innerHTML = ""
    document.getElementById("submit-button").disabled = true;
  }

  else if (document.getElementById('password').value == document.getElementById('confirm').value) {
    message.style.color='green';
    message.innerHTML = "matches password";
    document.getElementById("submit-button").disabled = false;
    return true;
  }
  else {
  message.style.color='red';
  message.innerHTML = "does not match password";
  document.getElementById("submit-button").disabled = true;
  return false;
  }
}
