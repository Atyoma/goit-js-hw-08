import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('.feedback-form input');
const textareaRef = document.querySelector('.feedback-form textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';

const formData = {};

formRef.addEventListener('submit', saveMessage);
formRef.addEventListener('input', throttle(onTextareaInput, 500));

leavesData();

function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
  console.log(formData);
}
// textareaRef.addEventListener('input', throttle(onTextareaInput, 500));
// inputRef.addEventListener('input', throttle(onTextareaInput, 500));

function leavesData() {
  const savedMessage = localStorage.getItem(LOCALSTORAGE_KEY);
  console.log(savedMessage);
  JSON.parse(savedMessage);
  if (savedMessage) {
    console.log(savedMessage);
    // console.log(Object.values(savedMessage));
    savedMessage.email = inputRef.value;
    savedMessage.message = textareaRef.value;
  }
}

function saveMessage(evt) {
  evt.preventDefault();
  //   localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
  //   updateOutput();
  formRef.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  console.log('отправлено');
}

// function updateOutput() {
//   output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || '';
// }
// console.log(textareaRef);
// console.log(inputRef);
// console.log(formRef);
