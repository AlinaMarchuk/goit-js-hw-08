!function(){var e="feedback-form-state",t={formEl:document.querySelector(".feedback-form"),inputEl:document.querySelector("input"),textareaEl:document.querySelector("textarea")};function a(e){try{return localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):{}}catch(e){console.log(e.message)}}t.formEl.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset(),console.log(a(e)),localStorage.removeItem(e)})),t.inputEl.addEventListener("input",(function(t){var r=a(e);r.email=t.target.value,localStorage.setItem(e,JSON.stringify(r))})),t.textareaEl.addEventListener("input",(function(t){var r=a(e);r.message=t.target.value,localStorage.setItem(e,JSON.stringify(r))})),function(){var r=a(e);console.log(r),r.email&&(t.inputEl.value=r.email);r.message&&(t.textareaEl.value=r.message)}()}();
//# sourceMappingURL=03-feedback.e364c09b.js.map
