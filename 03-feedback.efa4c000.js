function t(e){return e&&e.__esModule?e.default:e}var n,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof o&&o&&o.Object===Object&&o,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function v(e,t,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function E(e){return c=e,f=setTimeout(S,t),l?v(e):a}function T(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function S(){var e=p();if(T(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-u);return s?g(n,i-(e-c)):n}(e))}function h(e){return f=void 0,d&&o?v(e):(o=r=void 0,a)}function j(){var e=p(),n=T(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return E(u);if(s)return f=setTimeout(S,t),v(u)}return void 0===f&&(f=setTimeout(S,t)),a}return t=y(t)||0,b(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(y(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),j.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},j.flush=function(){return void 0===f?a:h(p())},j}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}n=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const E={formEl:document.querySelector(".feedback-form"),inputEl:document.querySelector("input"),textareaEl:document.querySelector("textarea")};function T(e){try{return localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):{}}catch(e){console.log(e.message)}}E.formEl.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(T("feedback-form-state")),localStorage.removeItem("feedback-form-state")})),E.formEl.addEventListener("input",t(n)(onFormElInput,500)),function(){const e=T("feedback-form-state");e.email&&(E.inputEl.value=e.email);e.message&&(E.textareaEl.value=e.message)}();const S=T("feedback-form-state");console.dir(e.target),"INPUT"!==e.target.nodeName&&"TEXTAREA"!==e.target.nodeName||(S[e.target.name]=e.target.value),localStorage.setItem("feedback-form-state",JSON.stringify(S));
//# sourceMappingURL=03-feedback.efa4c000.js.map