!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,i,a,u,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function T(e){return c=e,f=setTimeout(j,t),d?y(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function j(){var e=p();if(S(e))return h(e);f=setTimeout(j,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function h(e){return f=void 0,m&&r?y(e):(r=i=void 0,u)}function O(){var e=p(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return T(l);if(s)return f=setTimeout(j,t),y(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=E(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(E(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},O.flush=function(){return void 0===f?u:h(p())},O}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function E(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var T="feedback-form-state",S={formEl:document.querySelector(".feedback-form"),inputEl:document.querySelector("input"),textareaEl:document.querySelector("textarea")};function j(e){try{return localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):{}}catch(e){console.log(e.message)}}S.formEl.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(j(T)),localStorage.removeItem(T)})),S.formEl.addEventListener("input",e(t)((function(e){var t=j(T);"INPUT"===e.target.nodeName&&(t.email=e.target.value);"TEXTAREA"===e.target.nodeName&&(t.message=e.target.value);localStorage.setItem(T,JSON.stringify(t))}),500)),function(){var e=j(T);e.email&&(S.inputEl.value=e.email);e.message&&(S.textareaEl.value=e.message)}()}();
//# sourceMappingURL=03-feedback.5e930ad9.js.map