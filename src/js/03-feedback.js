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

const currentObj = getCurrentObj(STORAGE_KEY);
console.dir(e.target);
if (e.target.nodeName === 'INPUT' || e.target.nodeName === 'TEXTAREA') {
  currentObj[e.target.name] = e.target.value;
}
localStorage.setItem(STORAGE_KEY, JSON.stringify(currentObj));

// ===============================================================
// function onFormElInput() {
//   const currentObj = getCurrentObj(STORAGE_KEY);
//   currentObj.email = refs.inputEl.value;
//   currentObj.message = refs.textareaEl.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(currentObj));
// }

/* =====================   FormData   =========================== */
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

function onFormElSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(getCurrentObj(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
}
