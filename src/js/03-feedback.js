import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('.feedback-form input');
const textareaRef = document.querySelector('.feedback-form textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';

const formData = {};

formRef.addEventListener('submit', saveData);
inputRef.addEventListener('input', throttle(onFormInput, 500));
textareaRef.addEventListener('input', throttle(onFormInput, 500));

leavesData();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
  //   console.log(formData);
}

function leavesData() {
  const savedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (!savedMessage) return;

  inputRef.value = savedMessage.email || '';
  textareaRef.value = savedMessage.message || '';
}

function saveData(evt) {
  evt.preventDefault();
  formRef.reset();
  console.log('Oтправлено:', JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
