// import throttle from 'lodash.throttle';

// const formRef = document.querySelector('.feedback-form');
// const inputRef = document.querySelector('.feedback-form input');
// const textareaRef = document.querySelector('.feedback-form textarea');

// const LOCALSTORAGE_KEY = 'feedback-form-state';

// const formData = {};

// formRef.addEventListener('submit', saveMessage);
// formRef.addEventListener('input', throttle(onTextareaInput, 500));

// leavesData();

// function onTextareaInput(e) {
//   formData[e.target.name] = e.target.value;

//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
//   console.log(formData);
// }

// function leavesData() {
//   const savedMessage = localStorage.getItem(LOCALSTORAGE_KEY);
//   console.log(savedMessage);
//   JSON.parse(savedMessage);
//   if (savedMessage) {
//     console.log(savedMessage);
//     // console.log(Object.values(savedMessage));
//     savedMessage.email = inputRef.value;
//     savedMessage.message = textareaRef.value;
//   }
// }

// function saveMessage(evt) {
//   evt.preventDefault();
//   formRef.reset();
//   localStorage.removeItem(LOCALSTORAGE_KEY);
//   console.log('отправлено');
// }

import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('.feedback-form input');
const textareaRef = document.querySelector('.feedback-form textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';

const formData = {};

formRef.addEventListener('submit', saveData);
formRef.addEventListener('input', throttle(onFormInput, 500));

leavesData();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
  console.log(formData);
}

function leavesData() {
  const savedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (!savedMessage) return;

  console.log(savedMessage);
  inputRef.value = savedMessage.email || '';
  textareaRef.value = savedMessage.message || '';
}

function saveData(evt) {
  evt.preventDefault();
  formRef.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  console.log('отправлено');
}
