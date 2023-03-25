const STORAGE_KEY = 'feedback-form-state';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  inputEl: document.querySelector('input'),
  textareaEl: document.querySelector('textarea'),
};

refs.formEl.addEventListener('submit', onFormElSubmit);
refs.inputEl.addEventListener('input', onInputElInput);
refs.textareaEl.addEventListener('input', onTextareaInput);

checkStorage();

function checkStorage() {
  const savedInfo = getCurrentObj(STORAGE_KEY);
  console.log(savedInfo);
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

function onInputElInput(e) {
  const currentObj = getCurrentObj(STORAGE_KEY);
  currentObj.email = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentObj));
}

function onTextareaInput(e) {
  const currentObj = getCurrentObj(STORAGE_KEY);
  currentObj.message = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentObj));
}

function onFormElSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(getCurrentObj(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
}
