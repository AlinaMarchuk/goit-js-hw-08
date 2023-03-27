import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  inputEl: document.querySelector('input'),
  textareaEl: document.querySelector('textarea'),
};

refs.formEl.addEventListener('submit', onFormElSubmit);
refs.formEl.addEventListener('input', throttle(onFormElInput, 500));

checkStorage();

function checkStorage() {
  const savedInfo = getCurrentObj(STORAGE_KEY);
  if (savedInfo.email) {
    refs.inputEl.value = savedInfo.email;
  }
  if (savedInfo.message) {
    refs.textareaEl.value = savedInfo.message;
  }
}

function getCurrentObj(key) {
  try {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    } else return {};
  } catch (error) {
    console.log(error.message);
  }
}

function onFormElInput(e) {
  const currentObj = getCurrentObj(STORAGE_KEY);
  if (e.target.nodeName === 'INPUT') {
    currentObj.email = e.target.value;
  }
  if (e.target.nodeName === 'TEXTAREA') {
    currentObj.message = e.target.value;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentObj));
}

// function onFormElInput(e) {
//   const formData = new FormData(refs.formEl);
//   const data = {};
//   for (const [key, value] of formData.entries()) {
//     data[key] = value;
//   }

//   const currentObj = getCurrentObj(STORAGE_KEY);
//   currentObj.email = data.email;
//   currentObj.message = data.message;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(currentObj));
// }

function onFormElSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(getCurrentObj(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
}
