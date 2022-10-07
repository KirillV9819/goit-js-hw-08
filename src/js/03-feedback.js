import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form');

const btnSubmit = document.querySelector('button');

feedbackFormRef.addEventListener("input", throttle(onFeedbackFormInput, 500));

feedbackFormRef.addEventListener("submit", onFeedbackFormSubmit);

btnSubmit.addEventListener("click", onFeedbackFormSubmit);

const {
  elements: { email, message },
} = feedbackFormRef;

checkStorage();

function onFeedbackFormInput() {
  const elementsValue = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem("feedback-form-state", JSON.stringify(elementsValue));
}

function checkStorage() {
  const obj = JSON.parse(localStorage.getItem("feedback-form-state"));

  if (obj) {
    email.value = obj.email;
    message.value = obj.message;
  }
}

function onFeedbackFormSubmit(evt) {
  evt.preventDefault();

  if ( email.value !== "" && message.value !== "") {
    localStorage.removeItem("feedback-form-state");

  console.log({
    email: email.value,
    message: message.value,
  });
  feedbackFormRef.reset();
  };
  
}
