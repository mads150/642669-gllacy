var button = document.querySelector(".forwarding-button");

var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var namefield = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("namefield");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    namefield.value = storage;
    email.focus();
  } else {
    namefield.focus();
  }

});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!namefield.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("namefield", namefield.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
