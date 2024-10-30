(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>v});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),c=t(417),d=t.n(c),l=new URL(t(193),t.b),s=new URL(t(227),t.b),p=new URL(t(869),t.b),u=new URL(t(756),t.b),f=i()(r()),h=d()(l),g=d()(s),m=d()(p),b=d()(u);f.push([n.id,`@font-face {\n    font-family: 'inter';\n    src: url(${h});\n}\n\n@font-face {\n    font-family: 'ktf-roadbrush';\n    src: url(${g});\n}\n\n@font-face {\n    font-family: 'norse-bold';\n    src: url(${m});\n}\n\n@font-face {\n    font-family: 'knight-warrior';\n    src: url(${b});\n}\n\n:root {\n    --clr-1: #1992d2;\n    --clr-2: #facc15;\n    --clr-3: #e2e8f0;\n    --clr-4: #fff;\n    --clr-5: #000;\n    --clr-6: #9e9e9e;\n    height: 100%;\n}\n\n*:not(dialog) {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.sidebar {\n    background-color: var(--clr-1);\n    padding: 0;\n    width: 300px;\n}\n\n.header {\n    font-family: 'ktf-roadbrush';\n    font-size: 2rem;\n    color: var(--clr-4);\n    padding: 8px 0 16px 8px;\n}\n\n.add-project {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    padding: 0 8px;\n}\n\ndialog {\n    border-radius: 8px;\n    border: none;\n    box-shadow: 2px 2px 10px;\n}\n\nform {\n    display: grid;\n    gap: 16px;\n}\n\nlabel {\n    font-size: 1rem;\n    font-family: 'inter';\n}\n\ninput {\n    width: 100%;\n    padding: 6px 12px;\n    border-radius: 5px;\n    border: none;\n    font-size: 1rem;\n    font-family: 'inter';\n    background-color: var(--clr-3);\n}\n\ninput:focus {\n    outline: none;\n    box-shadow: 2px 2px 8px;\n}\n\nselect {\n    width: 100%;\n    font-size: 1rem;\n    font-family: 'inter';\n    border-radius: 8px;\n    border: none;\n    padding: 6px 12px;\n}\n\n.submit-btn {\n    width: 100%;\n    padding: 6px 12px;\n    border: none;\n    font-size: 1rem;\n    font-family: 'inter';\n    font-style: italic;\n    background-color: var(--clr-6);\n}\n\nbutton {\n    border-radius: 5px;\n}\n\n.add-project>button, .add-project>input {\n    padding: 4px 8px;\n}\n\n.add-project>button {\n    border: none;\n    font-size: 0.75rem;\n    font-family: 'inter';\n    background-color: var(--clr-4);\n    color: var(--clr-1);\n}\n\nbutton:active {\n    opacity: .5;\n}\n\n.submit-btn:hover, .todos-container button:hover {\n    box-shadow: 2px 2px 8px;\n}\n.projects {\n    padding: 32px 8px 0 8px;\n    display: flex;\n    flex-direction: column;\n}\n\n.projects>button {\n    padding: 5px;\n    border: none;\n    background-color: var(--clr-1);\n    color: var(--clr-4);\n    font-size: 1rem;\n    font-family: 'inter';\n    white-space: nowrap;\n    text-align: left;\n    line-height: 1.5rem;\n}\n\n.projects>button:hover {\n    background-color: rgb(255 255 255 / .5);\n}\n\n.todos-container {\n    flex-grow: 1;\n    background-color: var(--clr-3);\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.add-todo-btn {\n    position: fixed;\n    bottom: 60px;\n    right: 12px;\n}\n\n.add-todo-btn>button {\n    width: 50px;\n    height: 50px;\n    border: none;\n    border-radius: 50%;\n    background-color: var(--clr-1);\n    color: var(--clr-4);\n    font-size: 1.5rem;\n    font-family: 'inter';\n}\n\n.add-todo-btn>button:active {\n    opacity: .5;\n}\n\n.todo {\n    padding: 16px;\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr 1fr;\n    align-items: start;\n    gap: 8px;\n    background-color: var(--clr-4);\n    border-radius: 8px;\n    border-left: 8px solid var(--clr-2);\n    box-shadow: 2px 2px 6px;\n}\n\n.todo>div {\n    display: grid;\n    gap: 8px;\n}\n\n.todo>.edit-btn{\n    display: flex;\n    justify-content: flex-end;\n}\n\n.col>h3 {\n    font-family: 'ktf-roadbrush';\n}\n\n.col>p {\n    color: var(--clr-6);\n    font-family: 'inter';\n    word-break: break-word;\n}\n\n.edit-btn {\n    grid-column: 4/5;\n}\n\n.edit-btn>button {\n    padding: 4px 8px;\n    background-color: var(--clr-3);\n    font-family: 'inter';\n}\n\n.projects>.selected-project-btn {\n    background-color: var(--clr-4);\n    color: var(--clr-1);\n}\n\nfooter {\n    background-color: var(--clr-2);\n    display: flex;\n    align-items: center;\n}\n\nfooter>p {\n    font-size: 1rem;\n    font-family: 'knight-warrior';\n}\n\nfooter a {\n    color: #000;\n    display: inline-flex;\n    gap: 5px;\n}\n\nfooter img {\n    width: 1rem;\n    height: 1rem;\n    align-self: center;\n}\n\n.page-header {\n    display:flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--clr-1);\n    color: var(--clr-4);\n}\n\n.page-header, footer {\n    padding: 12px;\n}\n\n.page-header button {\n    border: none;\n    width: 2.5em;\n    height: 2.5em;\n}\n\n.hide {\n    display: none;\n}\n\nbutton img {\n    width: 2.5em;\n    height: 2.5em;\n}\n\nh1 {\n    font-family: 'norse-bold';\n}\n\ndialog.sidebar {\n    margin: 0;\n    height: 100%;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n.page-header>div {\n    display: flex;\n    align-items: center;\n    gap: 2px;\n}\n\n.page-header>div>img {\n    width: 2.5em;\n    height: 2.5em;\n}`,""]);const v=f},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],l=o.base?d[0]+o.base:d[0],s=a[l]||0,p="".concat(l," ").concat(s);a[l]=s+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=o(n,r),l=0;l<a.length;l++){var s=t(a[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=d}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},193:(n,e,t)=>{n.exports=t.p+"e9b898342ed8036ee8ea.otf"},227:(n,e,t)=>{n.exports=t.p+"add5c592288cf79f386a.ttf"},756:(n,e,t)=>{n.exports=t.p+"979de778d0ee610d4723.otf"},869:(n,e,t)=>{n.exports=t.p+"5efe60ef5042faec1224.otf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),r=t.n(o),a=t(825),i=t.n(a),c=t(659),d=t.n(c),l=t(56),s=t.n(l),p=t(540),u=t.n(p),f=t(113),h=t.n(f),g=t(365),m={};m.styleTagTransform=h(),m.setAttributes=s(),m.insert=d().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=u(),r()(g.A,m),g.A&&g.A.locals&&g.A.locals;class b{constructor(n,e,t,o){this.todo=n,this.description=e,this.priority=t,this.dueDate=o}}function v(){return localStorage.getItem("projects")?JSON.parse(localStorage.getItem("projects")):{Today:[],currentProject:"Today",dynamicInfo:{}}}function x(n){localStorage.setItem("projects",JSON.stringify(n))}const y=document.querySelector(".add-project>button"),C=document.querySelector(".add-project>input"),w=document.querySelector(".projects>button"),j=document.querySelector(".projects"),k=document.querySelector(".todos-container"),S=document.querySelector("dialog"),E=document.querySelectorAll("dialog input"),T=document.querySelector("select"),A=document.querySelector(".add-todo-btn"),P=document.querySelector(".sidebar"),B=document.querySelector(".page-header button"),L=document.querySelector(".close-menu"),I={handleCloseForAdding:()=>{const n=[],e=T.value;for(const e of E)n.push(e.value);const[t,o,r]=n,a=v();a[a.currentProject].push(new b(t,o,e,r)),x(a),q.renderTodos(),S.removeEventListener("close",I.handleCloseForAdding)},handleAddTodoBtnClick:()=>{q.showDialogForAddingTodo(),S.addEventListener("close",I.handleCloseForAdding)},handleEditBtnClick:n=>{const e=v();e.dynamicInfo.editTodoIndex=+n.target.parentNode.parentNode.getAttribute("data-index"),x(e),q.showEditDialog(),S.addEventListener("close",I.handleCloseForEditing)},handleCloseForEditing:()=>{const n=v(),e=n[n.currentProject][n.dynamicInfo.editTodoIndex];let t=0;for(const n in e)"priority"!==n?(e[n]=E[t].value,t++):e[n]=T.value;x(n),q.renderTodos(),S.removeEventListener("close",I.handleCloseForEditing)},handleAddProjectBtnClick:()=>{if(C.value.length>3){const n=v();n[C.value]=[],x(n),q.createProjectBtn()}},handleProjectBtnClick:n=>{const e=v();e.currentProject=n.target.textContent.slice(2),x(e),q.changeColorsOfSelectedProjectBtn(),q.renderTodos()},handleDeletelBtnClick:n=>{const e=v(),t=+n.target.parentNode.parentNode.getAttribute("data-index");e[e.currentProject].splice(t,1),x(e),q.renderTodos()},handleShowSidebarBtnClick:()=>{P.show(),q.toggleSidebarControlBtn()},handleCloseSidebarBtnClick:()=>{P.close(),q.toggleSidebarControlBtn()}},q=function(){const n=()=>{const n=v();document.querySelectorAll(".projects>button").forEach((e=>{e.textContent.slice(2)===n.currentProject?e.setAttribute("class","selected-project-btn"):e.setAttribute("class","")}))};return{renderTodos:()=>{(()=>{for(;k.firstChild;)k.removeChild(k.firstChild)})();let n=0;const e=v();for(const t of e[e.currentProject]){const e=document.createElement("div"),o=document.createElement("div"),r=document.createElement("button"),a=document.createElement("button");e.classList.add("todo"),e.setAttribute("data-index",n),n++,o.classList.add("edit-btn");for(const n in t){const o=document.createElement("div"),r=document.createElement("h3"),a=document.createElement("p");o.classList.add("col"),r.textContent=n[0].toUpperCase()+n.slice(1),"dueDate"===n&&(r.textContent=`${n[0].toUpperCase()}${n.slice(1,3)}-${n.slice(3)}`),a.textContent=t[n],o.appendChild(r),o.appendChild(a),e.appendChild(o)}r.textContent="Edit",r.addEventListener("click",I.handleEditBtnClick),a.textContent="Delete",a.addEventListener("click",I.handleDeletelBtnClick),o.appendChild(r),o.appendChild(a),e.appendChild(o),k.appendChild(e)}},showEditDialog:()=>{const n=v(),e=n[n.currentProject][n.dynamicInfo.editTodoIndex];let t=0;for(const n in e)"priority"!==n?(E[t].value=e[n],t++):S.querySelectorAll("option").forEach((t=>{t.value===e[n]&&(t.selected=!0)}));S.showModal()},createProjectBtn:()=>{const n=document.createElement("button");n.textContent="# "+C.value,n.addEventListener("click",I.handleProjectBtnClick),C.value="",j.appendChild(n)},restoreProjectsBtns:()=>{const e=v();for(const n in e){if("Today"===n||"currentProject"===n||"dynamicInfo"===n)continue;const e=document.createElement("button");e.textContent="# "+n,e.addEventListener("click",I.handleProjectBtnClick),j.appendChild(e)}n()},changeColorsOfSelectedProjectBtn:n,toggleSidebarControlBtn:()=>{B.classList.toggle("hide"),L.classList.toggle("hide")},showDialogForAddingTodo:()=>{E.forEach((n=>{n.value=""})),S.querySelector("option").selected=!0,S.showModal()}}}();A.addEventListener("click",I.handleAddTodoBtnClick),y.addEventListener("click",I.handleAddProjectBtnClick),w.addEventListener("click",I.handleProjectBtnClick),window.addEventListener("load",(()=>{q.restoreProjectsBtns(),q.renderTodos()})),B.addEventListener("click",I.handleShowSidebarBtnClick),L.addEventListener("click",I.handleCloseSidebarBtnClick)})();