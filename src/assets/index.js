var t=[],e=[];function n(n,r){if(n&&"undefined"!=typeof document){var s,o=!0===r.prepend?"prepend":"append",i=!0===r.singleTag,a="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(i){var l=t.indexOf(a);-1===l&&(l=t.push(a)-1,e[l]={}),s=e[l]&&e[l][o]?e[l][o]:e[l][o]=c()}else s=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),s.styleSheet?s.styleSheet.cssText+=n:s.appendChild(document.createTextNode(n))}function c(){var t=document.createElement("style");if(t.setAttribute("type","text/css"),r.attributes)for(var e=Object.keys(r.attributes),n=0;n<e.length;n++)t.setAttribute(e[n],r.attributes[e[n]]);var s="prepend"===o?"afterbegin":"beforeend";return a.insertAdjacentElement(s,t),t}}var r="svg {\n  width: 30px;\n  height: 30px;\n  fill: var(--color-icon);\n}\n";n(r,{});const s=document.createElement("template");s.innerHTML='<svg id="sg-icon-add" xmlns="http://www.w3.org/2000/svg" viewBox="-44 0 512 512">\r\n\t<path d="M468,293.57H248.57V513h-73.142V293.57H-44v-73.142h219.429V1h73.143v219.429H468V293.57z"/>\r\n</svg>\r\n\n<svg id="sg-icon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\n  <path d="M90.086 0.888l-40.086 40.086-40.086-40.086-9.026 9.026 40.086 40.086-40.086 40.086 9.026 9.026 40.086-40.086 40.086 40.086 9.026-9.026-40.086-40.086 40.086-40.086z"/>\n</svg>\n\n<svg id="sg-icon-exclamation-sign" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\n  <path d="M4.922 48.828q0-9.219 3.555-17.539t9.609-14.375 14.375-9.609 17.539-3.555 17.539 3.555 14.375 9.609 9.609 14.375 3.555 17.539-3.555 17.539-9.609 14.375-14.375 9.609-17.539 3.555-17.539-3.555-14.375-9.609-9.609-14.375-3.555-17.539zM38.75 29.219l4.531 23.594q0.313 1.563 1.68 2.695t2.93 1.133h4.219q1.563 0 2.93-1.133t1.68-2.695l4.531-23.594q0.313-1.563-0.625-2.695t-2.5-1.133h-16.172q-1.641 0-2.578 1.133t-0.625 2.695zM42.188 72.266h15.625v-7.813h-15.625v7.813z"/>\n</svg>\n\n<svg id="sg-icon-info-sign" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\n  <path d="M50.382 0.736c-27.365 0-49.549 22.184-49.549 49.55 0 27.364 22.184 49.547 49.549 49.547 27.365 0 49.548-22.183 49.548-49.547 0-27.366-22.183-49.55-49.548-49.55zM58.151 68.517c-3.74 5.613-7.544 9.941-13.944 9.941-4.369-0.712-6.163-3.843-5.214-7.031l8.233-27.269c0.198-0.668-0.135-1.381-0.744-1.594-0.609-0.214-1.799 0.576-2.829 1.702l-4.975 5.988c-0.136-1.003-0.014-2.667-0.014-3.337 3.74-5.612 9.88-10.044 14.046-10.044 3.962 0.407 5.833 3.571 5.144 7.050l-8.29 27.402c-0.111 0.62 0.216 1.246 0.779 1.444 0.609 0.213 1.89-0.576 2.92-1.703l4.975-5.988c0.136 1.002-0.087 2.769-0.087 3.439zM57.043 32.901c-3.149 0-5.701-2.291-5.701-5.671 0-3.378 2.552-5.669 5.701-5.669 3.148 0 5.701 2.291 5.701 5.669-0.001 3.381-2.553 5.671-5.701 5.671z"/>\n</svg>\n\n<svg id="sg-icon-minus-sign" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\n  <path d="M3.359 50q0-12.656 6.25-23.398t16.992-16.992 23.398-6.25 23.398 6.25 16.992 16.992 6.25 23.398-6.25 23.398-16.992 16.992-23.398 6.25-23.398-6.25-16.992-16.992-6.25-23.398zM26.563 57.813h46.875v-15.625h-46.875v15.625z"/>\n</svg>\n\n<svg id="sg-icon-ok-sign" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\n  <path d="M50,0.598C22.715,0.598,0.598,22.716,0.598,50c0,27.285,22.117,49.402,49.402,49.402\n\tc27.285,0,49.402-22.117,49.402-49.402C99.402,22.716,77.285,0.598,50,0.598z M41.882,72.961\n\tc-6.495-7.422-13.916-14.842-20.411-22.263l8.055-7.721l13.057,13.984L72.432,28.93l7.492,7.849\n\tc-12.99,12.063-25.049,24.125-38.039,36.186L41.882,72.961z"/>\n</svg>\n\n<svg id="sg-icon-question-sign" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\n  <path d="M50,0.708c-27.222,0-49.289,22.063-49.289,49.289c0,27.229,22.067,49.295,49.289,49.295\n\tc27.222,0,49.289-22.069,49.289-49.295C99.289,22.778,77.223,0.708,50,0.708z M56,79.273h-9.93V68.717H56V79.273z M68.146,44.188\n\tc-0.969,2.129-2.184,3.667-3.313,4.941c-1.256,1.414-2.363,2.753-6.168,5.996c-1.059,0.903-1.846,1.613-2.154,2.388\n\tc-0.313,0.775-0.484,2.46-0.512,5.046l-9.93,0.154v-5.706c0-1.91,0.389-3.419,1.161-4.519c0.774-1.101,2.47-2.663,5.089-4.687\n\tc4.002-3.071,6-6.323,6-9.759c0-2.59-0.783-4.648-2.344-6.168c-1.559-1.517-3.598-2.283-6.108-2.283\n\tc-5.805,0-9.225,4.009-10.266,12.039l-9.207-1.645c0.562-6.001,2.775-10.711,6.65-14.135c3.875-3.422,8.512-5.137,13.924-5.137\n\tc5.377,0,9.831,1.602,13.352,4.802c3.52,3.197,5.283,7.169,5.283,11.932c0.006,2.364-0.484,4.61-1.453,6.736L68.146,44.188z"/>\n</svg>\n\n<svg id="sg-icon-remove-sign" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\n  <path d="M50,0.349C22.577,0.349,0.349,22.577,0.349,50S22.577,99.651,50,99.651S99.651,77.423,99.651,50\n\tS77.423,0.349,50,0.349z M72.729,66.202c1.986,1.986,2.139,5.059,0.339,6.862c-1.802,1.804-4.875,1.651-6.86-0.335L50.004,56.524\n\tL33.797,72.729c-1.984,1.979-5.055,2.134-6.858,0.335c-1.802-1.801-1.647-4.876,0.337-6.862L43.479,50L27.275,33.797\n\tc-1.984-1.984-2.139-5.058-0.337-6.861c1.801-1.805,4.874-1.65,6.858,0.334l16.207,16.205L66.208,27.27\n\tc1.985-1.979,5.056-2.133,6.86-0.334c1.8,1.801,1.647,4.877-0.339,6.861L56.527,50L72.729,66.202z"/> \n</svg>\n';const o={XS:{width:15,height:15},S:{width:30,height:30},M:{width:50,height:50},L:{width:80,height:80}};class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.name=this.getAttribute("name"),this.color=this.getAttribute("color")||"var(--color-icon)",this.size=this.getAttribute("size")||"S"}connectedCallback(){this.render()}setCustomStyle(){return`\n      svg {\n        fill: ${this.color};\n        width: ${o[this.size].width}px;\n        height: ${o[this.size].height}px;\n      }\n    `}render(){const t=s.content.getElementById("sg-icon-"+this.name).outerHTML;this.shadowRoot.innerHTML=`\n    <style>\n      ${r.toString()}\n      ${this.setCustomStyle()}\n    </style>\n    ${t}`}}customElements.define("sg-icon",i);var a=":host {\r\n  --transition: background-color 0.5s linear;\r\n  --button-width: 100%;\r\n  --background: var(--color-blue);\r\n  --color: var(--color-white);\r\n  --padding: 1rem;\r\n  --font-size: 1rem;\r\n  --background-hover: var(--color-blue-dark);\r\n  --box-shadow: inset 0 -3px var(--color-blue-dark);\r\n  --border: none;\r\n}\r\n\r\nbutton {\r\n  background: var(--background);\r\n  color: var(--color);\r\n  padding: var(--padding);\r\n  font-size: var(--font-size);\r\n  width: var(--button-width);\r\n  border-radius: var(--radius);\r\n  cursor: var(--cursor-link);\r\n  box-shadow: var(--box-shadow);\r\n  border: var(--border);\r\n  transition: var(--transition);\r\n}\r\n\r\nbutton:hover {\r\n  background: var(--background-hover);\r\n}\r\n";n(a,{});class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),null!==this.getAttribute("id")&&(this.id=this.getAttribute("id")),this.className=this.getAttribute("class")||"sg-button"}handleClick(t){t.preventDefault(),t.stopPropagation(),console.log({id:this.id}),document.body.classList.toggle("dark");document.querySelector("sg-alert").setAttribute("theme","info")}setButton(){this.sgButton=this.shadowRoot.querySelector("button"),this.sgButton.addEventListener("click",this.handleClick.bind(this))}connectedCallback(){this.shadowRoot.innerHTML=`<style>${a.toString()}</style><button type="button"><slot>default</slot></button>\n`,this.setButton()}}customElements.define("sg-button",l);var c=":host {\r\n  --transition: background-color 0.5s linear;\r\n  --button-width: 150px;\r\n  --background: var(--color-blue);\r\n  --color: var(--color-white);\r\n  --padding: 1rem;\r\n  --font-size: 1rem;\r\n  --background-hover: var(--color-blue-dark);\r\n  --box-shadow: inset 0 -3px var(--color-blue-dark);\r\n  --border: none;\r\n  color: var(--color-text);\r\n}\r\n\r\n:host li::marker {\r\n  color: var(--color-main);\r\n}\r\n";n(c,{});class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),null!==this.getAttribute("id")&&(this.id=this.getAttribute("id")),this.className=this.getAttribute("class")||"sg-button",this.items=this.getAttribute("items")||[]}setList(){let t;try{return t=JSON.parse(this.items),`<ul>\n      ${t.map((t=>`<li>${t}</li>`)).join("")}\n      </ul>`}catch(t){return'<p class="error"><strong>Error</strong> : parsing string list</p>'}}connectedCallback(){this.shadowRoot.innerHTML=`<style>${c.toString()}</style>${this.setList()}`}}customElements.define("sg-list",h);var d="input {\r\n  border: 1px solid red;\r\n  color: red;\r\n  padding: 0.5rem 1rem;\r\n}\r\n";n(d,{});class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`<style>${d.toString()}</style><input name="firstname" type="text" value="test">\n`}}customElements.define("sg-input",g);var m=":host {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: stretch;\r\n  height: 100%;\r\n  justify-content: flex-start;\r\n}\r\n";n(m,{});var u=(t,e=""+template)=>e.replace(/%\s*(\w+?)\s*%/g,((e,n)=>t[n]||""));class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.activeItem=this.getAttribute("activeItem")}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`<style>${m.toString()}</style>${u({activeItem:this.activeItem},'<sg-menu-item label="Home" href="/"></sg-menu-item>\r\n<sg-menu-item label="Alert" href="/alert"></sg-menu-item>\r\n<sg-menu-item label="List" href="/list"></sg-menu-item>\r\n<sg-menu-item label="Button" href="/button"></sg-menu-item>\r\n<sg-menu-item label="Not found" href="/random"></sg-menu-item>\r\n')}`}}customElements.define("sg-menu",p);var v=":host {\r\n  display: flex;\r\n  align-items: stretch;\r\n}\r\n\r\n:host a {\r\n  color: var(--color-white);\r\n  text-decoration: none;\r\n  padding: clamp(0.5rem, 1vw, 1rem) clamp(0rem, 1vw, 1.2rem);\r\n  text-transform: uppercase;\r\n  font-size: clamp(0.8rem, 2vw, 1rem);\r\n  font-weight: 600;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n:host a:hover,\r\n:host a:focus {\r\n  color: var(--color-blue);\r\n}\r\n\r\n:host(.active) {\r\n  color: var(--color-blue);\r\n  background-color: var(--color-blue-light);\r\n}\r\n";n(v,{});class b extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.label=this.getAttribute("label"),this.href=this.getAttribute("href"),this.className=this.href+"/"===window.location.pathname?"active":""}connectedCallback(){console.log("location",window.location.pathname),this.shadowRoot.innerHTML=`<style>${v.toString()}</style>${u({href:this.href,className:this.className,label:this.label},'<a class="%className%" href="%href%">%label%</a>')}`}}customElements.define("sg-menu-item",b);var w=":host {\r\n  background-color: var(--color-white);\r\n  display: grid;\r\n  grid-template-columns: 100px 1fr 50px;\r\n  grid-template-areas: 'icon content close';\r\n  justify-items: start;\r\n  border-left: 3px solid var(--color-theme);\r\n  margin: 1rem auto;\r\n  padding: 1rem 0;\r\n}\r\n\r\nsg-icon {\r\n  grid-area: icon;\r\n  color: var(--color-theme);\r\n  font-size: 2rem;\r\n  justify-self: center;\r\n  display: flex;\r\n  line-height: 1;\r\n}\r\n\r\n.content {\r\n  grid-area: content;\r\n  display: flex;\r\n  flex-direction: column;\r\n  color: var(--color-theme);\r\n  justify-content: flex-start;\r\n  margin-top: 5px;\r\n}\r\n\r\nh4 {\r\n  margin: 0;\r\n  font-size: 1.1rem;\r\n  color: var(--color-theme);\r\n}\r\n\r\nbutton {\r\n  grid-area: close;\r\n  border: 0;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-self: center;\r\n  margin-top: 5px;\r\n}\r\n\r\nul {\r\n  margin-top: 0;\r\n}\r\n";n(w,{});class f extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.theme=this.getAttribute("theme"),this.title=this.getAttribute("title"),this.icon=this.getAttribute("icon")}static get observedAttributes(){return["theme","title","icon"]}attributeChangedCallback(t,e,n){"theme"===t&&e!==n&&this.updateTheme(n),"title"===t&&e!==n&&this.updateTitle(n),"icon"===t&&e!==n&&this.updateIcon(n)}updateTheme(t){this.theme=t,this.render()}updateTitle(t){this.title=t,this.render()}updateIcon(t){this.icon=t,this.render()}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`<style>\n    :host{\n      --color-theme: var(--color-${this.theme||"danger"});\n      --color-theme-light: var(--color-${this.theme||"danger"}-light);\n    }\n    ${w.toString()}</style>\n    ${u({title:this.title,icon:this.icon,iconColor:`var(--color-${this.theme||"danger"})`},'<sg-icon name="%icon%" size="S" color="%iconColor%"></sg-icon>\r\n<div class="content">\r\n  <h4 class="alert-title">%title%</h4>\r\n  <slot name="alert-content"></slot>\r\n</div>\r\n<button type="button" title="Fermer le message">\r\n  <sg-icon name="close" size="XS"></sg-icon>\r\n</button>\r\n')}`}}customElements.define("sg-alert",f);var x=":host {\r\n  color: var(--color-white);\r\n  display: flex;\r\n  align-items: center;\r\n  border-right: 1px solid var(--color-white);\r\n}\r\n\r\nimg {\r\n  width: clamp(30px, 5vw, 50px);\r\n  height: clamp(30px, 5vw, 50px);\r\n}\r\n\r\nstrong {\r\n  font-size: clamp(1rem, 2vw, 1.3rem);\r\n  padding: 0 1rem;\r\n  line-height: clamp(1rem, 2vw, 1.3rem);\r\n}\r\n";n(x,{});class y extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.src=this.getAttribute("src"),this.title=this.getAttribute("title"),this.alt=this.getAttribute("alt")}static get observedAttributes(){return["src","title","alt"]}attributeChangedCallback(t,e,n){"src"===t&&e!==n&&this.updateSrc(n),"title"===t&&e!==n&&this.updateTitle(n),"alt"===t&&e!==n&&this.updateAlt(n)}updateSrc(t){this.src=t,this.render()}updateTitle(t){this.title=t,this.render()}updateAlt(t){this.alt=t,this.render()}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`<style>${x.toString()}</style>${u({title:this.title,alt:this.alt,src:this.src},'<img alt="%alt%" src="%src%">\n<strong>%title%</strong>\n')}`}}customElements.define("sg-logo",y);var S=":host {\r\n  color: var(--color-white);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n}\r\n\r\nimg {\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\nstrong {\r\n  font-size: 1.3rem;\r\n  padding: 0 1rem;\r\n}\r\n";n(S,{});class M extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.src=this.getAttribute("src"),this.title=this.getAttribute("title"),this.alt=this.getAttribute("alt")}static get observedAttributes(){return["src","title","alt"]}attributeChangedCallback(t,e,n){"src"===t&&e!==n&&this.updateSrc(n),"title"===t&&e!==n&&this.updateTitle(n),"alt"===t&&e!==n&&this.updateAlt(n)}updateSrc(t){this.src=t,this.render()}updateTitle(t){this.title=t,this.render()}updateAlt(t){this.alt=t,this.render()}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`<style>${S.toString()}</style>${u({title:this.title,alt:this.alt,src:this.src},"<span>%title%</span>\n")}`}}customElements.define("sg-user",M);var k=":host {\r\n  display: block;\r\n  background-color: var(--color-main);\r\n}\r\n\r\n:host sg-container {\r\n  display: grid;\r\n  grid-template-columns: minmax(150px, max-content) 1fr minmax(\r\n      100px,\r\n      max-content\r\n    );\r\n  grid-gap: 10px;\r\n  align-items: center;\r\n}\r\n";n(k,{});const L=[{href:"/",label:"Accueil"},{href:"/about",label:"About"},{href:"/settings",label:"Settings"},{href:"/random",label:"Not found"}];class A extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.activeMenuItem=this.getAttribute("activeMenuItem"),this.title=this.getAttribute("title")||"title header"}connectedCallback(){const t=JSON.stringify(L).replace(/"/g,"'");this.shadowRoot.innerHTML=`<style>${k.toString()}</style>${u({title:this.title,activeItem:this.activeMenuItem,menuItems:t},'<sg-container>\r\n  <sg-logo title="Design System" src="/assets/img/logo.svg" alt="logo"></sg-logo>\r\n  <sg-menu activeitem="%activeItem%" items="%menuItems%"></sg-menu>\r\n  <sg-user title="Samuel Gomez" src="/assets/img/logo.svg" alt="logo"></sg-user>\r\n</sg-container>\r\n')}`}}customElements.define("sg-header",A);var T=":host {\r\n  max-width: var(--max-width);\r\n  margin: 0 auto;\r\n  display: block;\r\n}\r\n";n(T,{});class z extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`<style>${T.toString()}</style><slot></slot>\r\n`}}customElements.define("sg-container",z);var E=":host {\r\n  display: grid;\r\n  grid-template-rows: minmax(30px, auto) 1fr minmax(50px, auto);\r\n  grid-template-areas:\r\n    'header'\r\n    'content'\r\n    'footer';\r\n  height: 100vh;\r\n}\r\n\r\nheader {\r\n  grid-area: header;\r\n}\r\n\r\nsection {\r\n  grid-area: content;\r\n  background: var(--color-grey-5);\r\n}\r\n\r\nfooter {\r\n  grid-area: footer;\r\n}\r\n";n(E,{});class H extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`<style>${E.toString()}</style><header>\n  <slot name="header"></slot>\n</header>\n<section>\n  <slot name="content"></slot>\n</section>\n<footer>\n  <slot name="footer"></slot>\n</footer>\n`}}customElements.define("sg-layout",H);
