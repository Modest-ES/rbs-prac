(()=>{"use strict";var n={115:(n,e,t)=>{t.d(e,{A:()=>d});var i=t(601),a=t.n(i),o=t(314),r=t.n(o)()(a());r.push([n.id,"@keyframes hover-over {\n    0% {\n        background: rgb(80, 80, 80);\n    }\n    50% {\n        background: rgb(110, 110, 110);\n    }\n    100% {\n        background: rgb(80, 80, 80);\n    }\n}\n\n@keyframes gradient {\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n}\n\n@keyframes shining {\n\t0% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n}\n\n@keyframes load-animation-rotate {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    outline: none;\n    font-family: 'Montserrat', 'Roboto', system-ui, sans-serif;\n    box-sizing: border-box;\n}\n\nhtml {\n    scroll-behavior: smooth;\n}\n\nbody {\n    background: rgb(20, 20, 20);\n    /* background: linear-gradient(45deg, rgb(35, 104, 237), rgb(20, 20, 20) 19%, rgb(35, 35, 35) 50%, rgb(20, 20, 20) 79%, rgb(35, 104, 237)); */\n    background-attachment: fixed;\n    background-size: 400% 400%;\n    animation: gradient 35s ease infinite;\n    height: 100vh;\n    padding: 0;\n    margin: 0;\n    height: 100%;\n}\n\nbutton {\n    background: 0;\n    border: 0;\n    cursor: pointer;\n}\n\na {\n    text-decoration: none;\n}\n\np {\n    font-size: 14px;\n    font-family: 'Montserrat';\n    color: white;\n}\n\n.load-animation,\n.load-animation div,\n.load-animation div:after {\n  box-sizing: border-box;\n}\n.load-animation {\n  display: block;\n  color: rgb(35, 104, 237);\n  width: 40px;\n  height: 40px;\n  position: fixed;\n  top: 2%;\n  left: 2%;\n  /* transform: translate(-50%, -50%); */\n  z-index: 0;\n}\n.load-animation div {\n  animation: load-animation-rotate 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 40px 40px;\n}\n.load-animation div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 7.2px;\n  height: 7.2px;\n  border-radius: 50%;\n  background: currentColor;\n  margin: -3.6px 0 0 -3.6px;\n}\n.load-animation div:nth-child(1) {\n  animation-delay: -0.036s;\n}\n.load-animation div:nth-child(1):after {\n  top: 62.62742px;\n  left: 62.62742px;\n}\n.load-animation div:nth-child(2) {\n  animation-delay: -0.072s;\n}\n.load-animation div:nth-child(2):after {\n  top: 67.71281px;\n  left: 56px;\n}\n.load-animation div:nth-child(3) {\n  animation-delay: -0.108s;\n}\n.load-animation div:nth-child(3):after {\n  top: 70.90963px;\n  left: 48.28221px;\n}\n.load-animation div:nth-child(4) {\n  animation-delay: -0.144s;\n}\n.load-animation div:nth-child(4):after {\n  top: 72px;\n  left: 40px;\n}\n.load-animation div:nth-child(5) {\n  animation-delay: -0.18s;\n}\n.load-animation div:nth-child(5):after {\n  top: 70.90963px;\n  left: 31.71779px;\n}\n.load-animation div:nth-child(6) {\n  animation-delay: -0.216s;\n}\n.load-animation div:nth-child(6):after {\n  top: 67.71281px;\n  left: 24px;\n}\n.load-animation div:nth-child(7) {\n  animation-delay: -0.252s;\n}\n.load-animation div:nth-child(7):after {\n  top: 62.62742px;\n  left: 17.37258px;\n}\n.load-animation div:nth-child(8) {\n  animation-delay: -0.288s;\n}\n.load-animation div:nth-child(8):after {\n  top: 56px;\n  left: 12.28719px;\n}\n\n.display-none {\n    display: none !important;\n}\n\n.main-shell {\n    z-index: 1;\n    width: 80%;\n    margin: 2vh 10%;\n    height: 96vh;\n    padding: 10px;\n    background: linear-gradient(-45deg, rgb(40, 40, 40), rgb(70, 70, 70));\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 6px;\n    margin-bottom: 15px;\n}\n\n.left-side, .right-side {\n    display: flex;\n    align-items: center;\n}\n\n.left-side {\n    justify-content: flex-start;\n    margin-right: 10px;\n}\n\n.right-side {\n    justify-content: flex-end;\n}\n\n.btn-back {\n    margin-right: 6px;\n    color: white;\n    transition: 0.2s;\n}\n\n.btn-back img {\n    background-color: rgb(85, 85, 85);\n    border-radius: 100%;\n    transition: 0.2s;\n    width: 20px;\n    height: 20px;\n    padding: 10px;\n    box-sizing: content-box;\n}\n\n.btn-back:hover img {\n    transform: scale(1.04);\n    background: rgb(110, 110, 110);\n}\n\n.blocked-btn {\n    cursor:not-allowed;\n    pointer-events: none;\n}\n\n.blocked-btn img {\n    background-color: rgba(251, 47, 47, 0.3);\n}\n\n.blocked-btn:hover img {\n    background: rgba(251, 47, 47, 0.5) !important;\n}\n\nh2 {\n    font-family: 'Roboto';\n    font-size: 14px;\n    color: white;\n    word-break: break-all;\n}\n\n.loadtime {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n}\n\n.btn-sort {\n    display: flex;\n    align-items: center;\n    color: white;\n    margin-left: 10px;\n}\n\n.btn-sort img {\n    background-color: rgb(85, 85, 85);\n    border-radius: 100%;\n    transition: 0.2s;\n    width: 20px;\n    height: 20px;\n    padding: 10px;\n    margin-left: 5px;\n    box-sizing: content-box;\n}\n\n.btn-sort:hover img {\n    transform: scale(1.04);\n    background: rgb(110, 110, 110);\n}\n\n.btn-stats {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    overflow-y: auto;\n    flex-grow: 1;\n    padding: 1%;\n}\n\n.error-message {\n    background: rgba(251, 47, 47, 0.3);\n}\n\n.error-message, .null-element {\n    border-radius: 20px;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n}\n\n.error-message img, .null-element img {\n    width: 20px;\n    height: 20px;\n}\n\n.error-message p, .null-element p {\n    font-family: 'Montserrat';\n    font-size: 12px;\n    word-break: break-all;\n    margin-left: 5px;\n}\n\n.null-element {\n    background: rgba(254, 185, 22, 0.3);\n}\n\n.fileline, .statline {\n    background: rgb(80, 80, 80);\n    margin-bottom: 10px;\n    padding: 5px;\n    border-radius: 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    transition: 0.2s ease;\n    cursor: pointer;\n}\n\n.fileline:hover, .statline:hover {\n    transform: scale(1.01);\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);\n    background: linear-gradient(45deg, rgb(100, 100, 100) 0%, rgb(100, 100, 100) 47%, rgb(155, 155, 155) 50%, rgb(100, 100, 100) 53%, rgb(100, 100, 100) 100%);\n    background-size: 500% 500%;\n    animation: shining 3s ease infinite;\n}\n\n.file-type {\n    display: flex;\n    align-items: center;\n}\n\n.file-type img {\n    margin-right: 3px;\n    width: 20px;\n    height: 20px;\n}\n\n.file-type, .file-size {\n    width: 14%;\n}\n\n.file-name {\n    width: 70%;\n    word-break: break-all;\n}\n\n.c-id {\n    width: 3%;\n    padding-left: 5px;\n}\n\n.c-path, .c-size, .c-elapsed-time, .c-date {\n    word-break: break-all;\n}\n\n.c-path {\n    width: 53%;\n}\n\n.c-size {\n    width: 9%;\n}\n\n.c-elapsed-time {\n    width: 11%;\n}\n\n.c-date {\n    width: 20%;\n}\n\nfooter {\n    margin-top: 5px;\n}\n\n@media (max-width: 1000px) {\n    .main-shell {\n        width: 94%;\n        margin-left: 3%;\n    }\n}\n\n@media (max-width: 900px) {\n    .c-id, .c-path, .c-size, .c-elapsed-time, .c-date {\n        font-size: 12px;\n    }\n}\n\n@media (max-width: 560px) {\n    header p, header h2, .file-name, .file-size, .file-type p {\n        font-size: 12px;\n    }\n    \n    .file-type {\n        width: 20%;\n    }\n\n    .file-name {\n        width: 64%;\n    }\n}\n\n@media (max-width: 430px) {\n    .statline {\n        flex-direction: column;\n    }\n    .c-id, .c-path, .c-size, .c-elapsed-time, .c-date {\n        width: 98%;\n        display: flex;\n        justify-content: center;\n    }\n}\n\n@media (max-width: 370px) {\n    .file-type p {\n        display: none;\n    }\n\n    .right-side {\n        flex-direction: column;\n    }\n\n    .btn-back img, .btn-sort img {\n        padding: 5px;\n    }\n\n    .btn-back img {\n        margin-left: 0;\n    }\n\n    .btn-back img, .btn-sort img {\n        width: 15px;\n        height: 15px;\n    }\n\n    .file-name {\n        width: 69%;\n    }\n\n    .file-size {\n        width: 19%;\n    }\n\n    .file-type {\n        width: 10%;\n    }\n}\n\n@media (max-width: 300px) {\n    header h2 {\n        font-size: 10px;\n    } \n}",""]);const d=r},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(i)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(r[l]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);i&&r[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),e.push(c))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var o={},r=[],d=0;d<n.length;d++){var l=n[d],s=i.base?l[0]+i.base:l[0],c=o[s]||0,m="".concat(s," ").concat(c);o[s]=c+1;var p=t(m),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var u=a(h,i);i.byIndex=d,e.splice(d,0,{identifier:m,updater:u,references:1})}r.push(m)}return r}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=i(n=n||[],a=a||{});return function(n){n=n||[];for(var r=0;r<o.length;r++){var d=t(o[r]);e[d].references--}for(var l=i(n,a),s=0;s<o.length;s++){var c=t(o[s]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}o=l}}},659:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,a&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={id:i,exports:{}};return n[i](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),i=t(825),a=t.n(i),o=t(659),r=t.n(o),d=t(56),l=t.n(d),s=t(540),c=t.n(s),m=t(113),p=t.n(m),h=t(115),u={};u.styleTagTransform=p(),u.setAttributes=l(),u.insert=r().bind(null,"head"),u.domAPI=a(),u.insertStyleElement=c(),e()(h.A,u),h.A&&h.A.locals&&h.A.locals;class g{constructor(n){this.mainShellElement=document.getElementById("directory-info"),this.controller=n}displayLoadElement(){}hideLoadElement(){}displayDirectoryData(n,e){if(this.mainShellElement){this.mainShellElement.innerHTML="";const t=this.createHeaderElement(n,e);this.mainShellElement.appendChild(t);const i=this.createContentElement(n);this.mainShellElement.appendChild(i);const a=this.createFooterElement();this.mainShellElement.appendChild(a)}}createHeaderElement(n,e){const t=document.createElement("header"),i=this.createLeftSideElement(n,e);t.appendChild(i);const a=this.createRightSideElement(n,e);return t.appendChild(a),t}createLeftSideElement(n,e){const t=document.createElement("div");t.classList.add("left-side");const i=document.createElement("button");i.classList.add("btn-back");const a=new URLSearchParams(window.location.search);"/home"==a.get("root")&&i.classList.add("blocked-btn"),i.addEventListener("click",(()=>this.controller.onBtnBackClicked()));const o=document.createElement("img");o.src="ui/img/leftarrow.png",o.alt="Back",o.title="/home"==a.get("root")?"/home is the main directory":"Return to the previous directory",i.appendChild(o),t.appendChild(i);const r=document.createElement("a");r.classList.add("btn-stats"),r.href=`http://localhost:80/uistats.php?root=${n.RootPath}&sort=${e}`;const d=document.createElement("button");d.classList.add("btn-back");const l=document.createElement("img");l.src="ui/img/stats.png",l.alt="Stats",l.title="Посмотреть статистику",d.appendChild(l),r.appendChild(d),t.appendChild(r);const s=document.createElement("h2");return s.textContent=`Root: ${n.RootPath}`,t.appendChild(s),t}createRightSideElement(n,e){const t=document.createElement("div");t.classList.add("right-side");const i=document.createElement("div");i.classList.add("loadtime");const a=document.createElement("p");a.textContent="Loadtime:",i.appendChild(a);const o=document.createElement("p");if(o.textContent=n.Duration,i.appendChild(o),t.appendChild(i),0==n.Status){const n=document.createElement("button");n.classList.add("btn-sort"),n.addEventListener("click",(()=>this.controller.onBtnSortClicked()));const i=document.createElement("p");i.textContent="Sorting:",n.appendChild(i);const a=document.createElement("img");a.src="asc"==e?"ui/img/sortasc.png":"ui/img/sortdesc.png",a.alt=e,a.title="asc"==e?"Ascending":"Descending",n.appendChild(a),t.appendChild(n)}return t}createContentElement(n){const e=document.createElement("div");if(e.classList.add("content"),0!=n.Status){const t=this.createErrorElement(n);e.appendChild(t)}if(null==n.FilesList){const n=this.createNullElement();e.appendChild(n)}else n.FilesList.forEach((n=>{const t=this.createFilelineElement(n);e.appendChild(t)}));return e}createErrorElement(n){const e=document.createElement("div");e.classList.add("error-message");const t=document.createElement("img");t.src="ui/img/error.png",t.alt="Error",t.title=n.ErrorMessage,e.appendChild(t);const i=document.createElement("p");return i.textContent=n.ErrorMessage,e.appendChild(i),e}createNullElement(){const n=document.createElement("div");n.classList.add("null-element");const e=document.createElement("img");e.src="ui/img/warning.png",e.alt="Warning",e.title="Текущая директория пустая",n.appendChild(e);const t=document.createElement("p");return t.textContent="Текущая директория пустая",n.appendChild(t),n}createFilelineElement(n){const e=document.createElement("div");e.classList.add("fileline"),"Folder"==n.FileType&&e.addEventListener("click",(()=>this.controller.onFilelineClicked(n)));const t=document.createElement("div");t.classList.add("file-type");const i=document.createElement("img");i.src="Folder"==n.FileType?"ui/img/folder.png":"ui/img/file.png",i.alt=n.FileType,i.title=n.FileType,i.width=20,i.height=20,t.appendChild(i);const a=document.createElement("p");a.textContent=n.FileType,t.appendChild(a),e.appendChild(t);const o=document.createElement("p");o.classList.add("file-name"),o.textContent=n.FileName,e.appendChild(o);const r=document.createElement("p");return r.classList.add("file-size"),r.textContent=n.FileSizeString,e.appendChild(r),e}createFooterElement(){const n=document.createElement("footer"),e=document.createElement("p");return e.textContent="® File Scanner 2024",n.appendChild(e),n}}const f=new class{constructor(){this.data=null}verifyUrlParameters(){const n=new URLSearchParams(window.location.search),e=document.getElementById("load-animation");if(e&&(e.style.opacity="1"),!n.has("sort")){const n=new URL(window.location.href);n.searchParams.set("sort","asc"),window.location.href=n.toString()}if(!n.has("root")){const n=new URL(window.location.href);n.searchParams.set("root","/home"),window.location.href=n.toString()}}getSortParameter(){return new URLSearchParams(window.location.search).get("sort")||""}constructUrl(){const n=new URLSearchParams(window.location.search),e=n.get("sort"),t=n.get("root");let i="./files";return t&&(i+=`?root=${t}`),i+=e?`&sort=${e}`:"&sort=asc",i}fetchData(n){return e=this,t=void 0,a=function*(){console.log("URL : ",n);try{const e=yield fetch(n),t=yield e.json();this.data=t;const i=document.getElementById("load-animation");i&&(i.style.opacity="0")}catch(n){console.error("Error fetching the directory data : ",n)}},new((i=void 0)||(i=Promise))((function(n,o){function r(n){try{l(a.next(n))}catch(n){o(n)}}function d(n){try{l(a.throw(n))}catch(n){o(n)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(n){n(t)}))).then(r,d)}l((a=a.apply(e,t||[])).next())}));var e,t,i,a}},b=new class{constructor(n){this.model=n,this.view=new g(this)}loadDirectoryData(){this.view.displayLoadElement(),this.model.verifyUrlParameters(),this.model.fetchData(this.model.constructUrl()).then((()=>{this.view.displayDirectoryData(this.model.data,this.model.getSortParameter())})),this.view.hideLoadElement()}onBtnBackClicked(){const n=new URLSearchParams(window.location.search),e=n.get("root").lastIndexOf("/"),t=n.get("root").substring(0,e),i=`${window.location.pathname}?root=${t||n.get("root")}&sort=${n.get("sort")}`;window.history.pushState({path:i},"",i),this.loadDirectoryData()}onBtnSortClicked(){const n=new URLSearchParams(window.location.search);let e=n.get("sort");e="desc"===e?"asc":"desc";const t=`${window.location.pathname}?root=${n.get("root")}&sort=${e}`;window.history.pushState({path:t},"",t),this.loadDirectoryData()}onFilelineClicked(n){const e=new URLSearchParams(window.location.search),t=`${window.location.pathname}?root=${e.get("root")}/${n.FileName}&sort=${e.get("sort")}`;window.history.pushState({path:t},"",t),this.loadDirectoryData()}}(f);b.loadDirectoryData()})()})();