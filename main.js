(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>m});var o=t(601),r=t.n(o),d=t(314),a=t.n(d),c=t(417),i=t.n(c),l=new URL(t(193),t.b),s=new URL(t(227),t.b),p=new URL(t(869),t.b),u=a()(r()),f=i()(l),h=i()(s),g=i()(p);u.push([n.id,`@font-face {\n  font-family: "inter";\n  src: url(${f});\n}\n\n@font-face {\n  font-family: "ktf-roadbrush";\n  src: url(${h});\n}\n\n@font-face {\n  font-family: "norse-bold";\n  src: url(${g});\n}\n\n:root {\n  --clr-1: #1992d2;\n  --clr-2: #facc15;\n  --clr-3: #e2e8f0;\n  --clr-4: #fff;\n  --clr-5: #000;\n  --clr-6: #9e9e9e;\n  height: 100%;\n}\n\n*:not(dialog) {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nbody > .dropdown {\n  background-color: var(--clr-1);\n  padding: 0;\n  width: 300px;\n  height: 100%;\n}\n\n.header {\n  font-family: "ktf-roadbrush";\n  font-size: 2rem;\n  color: var(--clr-4);\n  padding: 8px 0 16px 8px;\n}\n\n.add-project {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 0 8px;\n}\n\ndialog {\n  border-radius: 8px;\n  border: none;\n  box-shadow: 2px 2px 10px;\n}\n\nform {\n  display: grid;\n  gap: 16px;\n}\n\nlabel {\n  font-size: 1rem;\n  font-family: "inter";\n}\n\ninput {\n  width: 100%;\n  padding: 6px 12px;\n  border-radius: 5px;\n  border: none;\n  font-size: 1rem;\n  font-family: "inter";\n  background-color: var(--clr-3);\n}\n\ninput:focus {\n  outline: none;\n  box-shadow: 2px 2px 8px;\n}\n\nselect {\n  width: 100%;\n  font-size: 1rem;\n  font-family: "inter";\n  border-radius: 8px;\n  border: none;\n  padding: 6px 12px;\n}\n\n.submit-btn {\n  width: 100%;\n  padding: 6px 12px;\n  border: none;\n  font-size: 1rem;\n  font-family: "inter";\n  font-style: italic;\n  background-color: var(--clr-6);\n}\n\nbutton {\n  border-radius: 5px;\n}\n\n.add-project > button,\n.add-project > input {\n  padding: 4px 8px;\n}\n\n.add-project > button {\n  border: none;\n  font-size: 0.75rem;\n  font-family: "inter";\n  background-color: var(--clr-4);\n  color: var(--clr-1);\n}\n\nbutton:active {\n  opacity: 0.5;\n}\n\n.submit-btn:hover {\n  box-shadow: 2px 2px 8px;\n}\n.projects {\n  padding: 32px 8px 0 8px;\n  display: flex;\n  flex-direction: column;\n}\n\n.projects > button {\n  padding: 5px;\n  border: none;\n  background-color: var(--clr-1);\n  color: var(--clr-4);\n  font-size: 1rem;\n  font-family: "inter";\n  white-space: nowrap;\n  text-align: left;\n  line-height: 1.5rem;\n}\n\n.projects > button:hover {\n  background-color: rgb(255 255 255 / 0.5);\n}\n\n.todos-container {\n  flex-grow: 1;\n  background-color: var(--clr-3);\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.add-todo-btn {\n  position: fixed;\n  bottom: 60px;\n  right: 12px;\n}\n\n.add-todo-btn > button {\n  width: 50px;\n  height: 50px;\n  border: none;\n  border-radius: 50%;\n  background-color: var(--clr-1);\n  color: var(--clr-4);\n  font-size: 1.5rem;\n  font-family: "inter";\n}\n\n.add-todo-btn > button:active {\n  opacity: 0.5;\n}\n\n.todo {\n  padding: 16px;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr 1fr;\n  align-items: start;\n  gap: 8px;\n  background-color: var(--clr-4);\n  border-radius: 8px;\n  border-left: 8px solid var(--clr-2);\n  box-shadow: 2px 2px 6px;\n}\n\n.todo > div {\n  display: grid;\n  gap: 8px;\n}\n\n.edit-btn {\n  position: relative;\n  justify-self: end;\n}\n\n.toggle-dropdown > button {\n  background-color: var(--clr-4);\n  border: none;\n}\n\n.toggle-dropdown img {\n  width: 30px;\n  height: 30px;\n  transform: rotate(90deg);\n}\n\n.dropdown {\n  position: absolute;\n  box-shadow: 0px 2px 6px #000;\n}\n\n.edit-btn > .dropdown {\n  top: 30px;\n  background-color: var(--clr-3);\n  border-radius: 2px;\n}\n\n.dropdown > button {\n  border: none;\n  border-radius: 2px;\n  padding: 4px;\n  width: 100%;\n  text-align: left;\n  font-family: 'inter';\n  background-color: var(--clr-4);\n}\n\n.dropdown > button:hover {\n  background-color: rgb(255 255 255 / .5);\n}\n\n.col > h3 {\n  font-family: "ktf-roadbrush";\n}\n\n.col > p {\n  color: var(--clr-6);\n  font-family: "inter";\n  word-break: break-word;\n}\n\n.edit-btn {\n  grid-column: 4/5;\n}\n\n.projects > .selected-project-btn {\n  background-color: var(--clr-4);\n  color: var(--clr-1);\n}\n\nfooter {\n  background-color: var(--clr-2);\n  display: flex;\n  align-items: center;\n}\n\nfooter > p {\n  font-size: 1rem;\n  font-family: "ktf-roadbrush";\n}\n\nfooter a {\n  color: #000;\n  display: inline-flex;\n  gap: 5px;\n}\n\nfooter img {\n  width: 1rem;\n  height: 1rem;\n  align-self: center;\n}\n\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--clr-1);\n  color: var(--clr-4);\n}\n\n.page-header,\nfooter {\n  padding: 12px;\n}\n\n.page-header button {\n  border: none;\n  width: 2.5em;\n  height: 2.5em;\n}\n\n.hide {\n  display: none;\n}\n\nbutton img {\n  width: 2.5em;\n  height: 2.5em;\n}\n\nh1 {\n  font-family: "norse-bold";\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n.page-header > div {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.page-header > div > img {\n  width: 2.5em;\n  height: 2.5em;\n}\n`,""]);const m=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,d){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(a[i]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&a[s[0]]||(void 0!==d&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=d),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var d={},a=[],c=0;c<n.length;c++){var i=n[c],l=o.base?i[0]+o.base:i[0],s=d[l]||0,p="".concat(l," ").concat(s);d[l]=s+1;var u=t(p),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var d=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<d.length;a++){var c=t(d[a]);e[c].references--}for(var i=o(n,r),l=0;l<d.length;l++){var s=t(d[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}d=i}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var d=t.sourceMap;d&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},193:(n,e,t)=>{n.exports=t.p+"e9b898342ed8036ee8ea.otf"},227:(n,e,t)=>{n.exports=t.p+"add5c592288cf79f386a.ttf"},869:(n,e,t)=>{n.exports=t.p+"5efe60ef5042faec1224.otf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var d=e[o]={id:o,exports:{}};return n[o](d,d.exports,t),d.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),r=t.n(o),d=t(825),a=t.n(d),c=t(659),i=t.n(c),l=t(56),s=t.n(l),p=t(540),u=t.n(p),f=t(113),h=t.n(f),g=t(365),m={};m.styleTagTransform=h(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=u(),r()(g.A,m),g.A&&g.A.locals&&g.A.locals;const b=t.p+"f8eef05dc778623061a7.svg";class v{constructor(n,e,t,o){this.todo=n,this.description=e,this.priority=t,this.dueDate=o}}function x(){return localStorage.getItem("projects")?JSON.parse(localStorage.getItem("projects")):{Today:[],currentProject:"Today",dynamicInfo:{}}}function y(n){localStorage.setItem("projects",JSON.stringify(n))}function C(n){n.classList.toggle("hide")}const w=document.querySelector(".add-project>button"),k=document.querySelector(".add-project>input"),E=document.querySelector(".projects>button"),j=document.querySelector(".projects"),S=document.querySelector(".todos-container"),T=document.querySelector("dialog"),A=document.querySelectorAll("dialog input"),L=document.querySelector("select"),B=document.querySelector(".add-todo-btn"),P=document.querySelector("body>.dropdown"),I=document.querySelector(".page-header button"),q=document.querySelector(".close-menu"),N={handleCloseForAdding:()=>{const n=[],e=L.value;for(const e of A)n.push(e.value);const[t,o,r]=n,d=x();d[d.currentProject].push(new v(t,o,e,r)),y(d),$.renderTodos(),T.removeEventListener("close",N.handleCloseForAdding)},handleAddTodoBtnClick:()=>{$.showDialogForAddingTodo(),T.addEventListener("close",N.handleCloseForAdding)},handleEditBtnClick:n=>{const e=x();e.dynamicInfo.editTodoIndex=+n.target.parentNode.parentNode.getAttribute("data-index"),y(e),$.showEditDialog(),T.addEventListener("close",N.handleCloseForEditing)},handleCloseForEditing:()=>{const n=x(),e=n[n.currentProject][n.dynamicInfo.editTodoIndex];let t=0;for(const n in e)"priority"!==n?(e[n]=A[t].value,t++):e[n]=L.value;y(n),$.renderTodos(),T.removeEventListener("close",N.handleCloseForEditing)},handleAddProjectBtnClick:()=>{if(k.value.length>3){const n=x();n[k.value]=[],y(n),$.createProjectBtn()}},handleProjectBtnClick:n=>{const e=x();e.currentProject=n.target.textContent.slice(2),y(e),$.changeColorsOfSelectedProjectBtn(),$.renderTodos()},handleDeletelBtnClick:n=>{const e=x(),t=+n.target.parentNode.parentNode.parentNode.getAttribute("data-index");e[e.currentProject].splice(t,1),y(e),$.renderTodos()},handleShowSidebarBtnClick:()=>{C(P),$.toggleSidebarControlBtn()},handleCloseSidebarBtnClick:()=>{C(P),$.toggleSidebarControlBtn()},handleToggleDropdownBtnClick:n=>{const e=n.currentTarget.parentNode.nextSibling;var t;t=e,document.querySelectorAll(".edit-btn>.dropdown").forEach((n=>{n!==t&&n.setAttribute("class","dropdown hide")})),C(e)}},$=function(){const n=()=>{const n=x();document.querySelectorAll(".projects>button").forEach((e=>{e.textContent.slice(2)===n.currentProject?e.setAttribute("class","selected-project-btn"):e.setAttribute("class","")}))};return{renderTodos:()=>{(()=>{for(;S.firstChild;)S.removeChild(S.firstChild)})();let n=0;const e=x();for(const t of e[e.currentProject]){const e=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),d=document.createElement("div"),a=document.createElement("button"),c=document.createElement("img"),i=document.createElement("button"),l=document.createElement("button");e.classList.add("todo"),e.setAttribute("data-index",n),n++,o.classList.add("edit-btn");for(const n in t){const o=document.createElement("div"),r=document.createElement("h3"),d=document.createElement("p");o.classList.add("col"),r.textContent=`${n[0].toUpperCase()}${n.slice(1)}`,"dueDate"===n&&(r.textContent=`${n[0].toUpperCase()}${n.slice(1,3)}-${n.slice(3)}`),d.textContent=t[n],o.appendChild(r),o.appendChild(d),e.appendChild(o)}a.addEventListener("click",N.handleToggleDropdownBtnClick),i.textContent="Edit",i.addEventListener("click",N.handleEditBtnClick),l.textContent="Delete",l.addEventListener("click",N.handleDeletelBtnClick),c.setAttribute("src",b),a.appendChild(c),r.appendChild(a),d.appendChild(i),d.appendChild(l),r.classList.add("toggle-dropdown"),d.classList.add("dropdown","hide"),o.appendChild(r),o.appendChild(d),e.appendChild(o),S.appendChild(e)}},showEditDialog:()=>{const n=x(),e=n[n.currentProject][n.dynamicInfo.editTodoIndex];let t=0;for(const n in e)"priority"!==n?(A[t].value=e[n],t++):T.querySelectorAll("option").forEach((t=>{t.value===e[n]&&(t.selected=!0)}));T.showModal()},createProjectBtn:()=>{const n=document.createElement("button");n.textContent=`# ${k.value}`,n.addEventListener("click",N.handleProjectBtnClick),k.value="",j.appendChild(n)},restoreProjectsBtns:()=>{const e=x();for(const n in e){if("Today"===n||"currentProject"===n||"dynamicInfo"===n)continue;const e=document.createElement("button");e.textContent=`# ${n}`,e.addEventListener("click",N.handleProjectBtnClick),j.appendChild(e)}n()},changeColorsOfSelectedProjectBtn:n,toggleSidebarControlBtn:()=>{I.classList.toggle("hide"),q.classList.toggle("hide")},showDialogForAddingTodo:()=>{A.forEach((n=>{n.value=""})),T.querySelector("option").selected=!0,T.showModal()}}}();B.addEventListener("click",N.handleAddTodoBtnClick),w.addEventListener("click",N.handleAddProjectBtnClick),E.addEventListener("click",N.handleProjectBtnClick),window.addEventListener("load",(()=>{$.restoreProjectsBtns(),$.renderTodos()})),I.addEventListener("click",N.handleShowSidebarBtnClick),q.addEventListener("click",N.handleCloseSidebarBtnClick)})();