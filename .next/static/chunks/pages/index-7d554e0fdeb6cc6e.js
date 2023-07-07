(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,a){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],a=0;a<arguments.length;a++){var t=arguments[a];if(t){var s=typeof t;if("string"===s||"number"===s)e.push(t);else if(Array.isArray(t)){if(t.length){var i=l.apply(null,t);i&&e.push(i)}}else if("object"===s){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var r in t)n.call(t,r)&&t[r]&&e.push(r)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0!==(t=(function(){return l}).apply(a,[]))&&(e.exports=t)}()},8312:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(567)}])},567:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return f}});var n=t(5893),l=t(7294),s=t(9008),i=t.n(s);t(4494);var r=t(4184),o=t.n(r);let c=["as","disabled"];function m({tagName:e,disabled:a,href:t,target:n,rel:l,role:s,onClick:i,tabIndex:r=0,type:o}){e||(e=null!=t||null!=n||null!=l?"a":"button");let c={tagName:e};if("button"===e)return[{type:o||"button",disabled:a},c];let m=n=>{var l;if(!a&&("a"!==e||(l=t)&&"#"!==l.trim())||n.preventDefault(),a){n.stopPropagation();return}null==i||i(n)};return"a"===e&&(t||(t="#"),a&&(t=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:a?void 0:r,href:t,target:"a"===e?n:void 0,"aria-disabled":a||void 0,rel:"a"===e?l:void 0,onClick:m,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),m(e))}},c]}let d=l.forwardRef((e,a)=>{let{as:t,disabled:l}=e,s=function(e,a){if(null==e)return{};var t,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,c),[i,{tagName:r}]=m(Object.assign({tagName:t,disabled:l},s));return(0,n.jsx)(r,Object.assign({},s,i,{ref:a}))});d.displayName="Button";let h=l.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:u,Provider:p}=h,x=l.forwardRef(({as:e,bsPrefix:a,variant:t="primary",size:s,active:i=!1,disabled:r=!1,className:c,...d},u)=>{let p=function(e,a){let{prefixes:t}=(0,l.useContext)(h);return e||t[a]||a}(a,"btn"),[x,{tagName:f}]=m({tagName:e,disabled:r,...d});return(0,n.jsx)(f,{...x,...d,ref:u,disabled:r,className:o()(c,p,i&&"active",t&&`${p}-${t}`,s&&`${p}-${s}`,d.href&&r&&"disabled")})});function f(){let[e,a]=(0,l.useState)({}),[t,s]=(0,l.useState)(""),[r,o]=(0,l.useState)(""),[c,m]=(0,l.useState)(""),[d,h]=(0,l.useState)(!1),[u,p]=(0,l.useState)(!1),f=async e=>{e.preventDefault(),p(!0),a({name:e.target.name.value,email:e.target.email.value,message:e.target.message.value}),s(e.target.name.value),o(e.target.email.value),m(e.target.message.value)},v=async()=>{await fetch("api/contact",{method:"POST",headers:{Accept:"application/json, text/plain","Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>{200===e.status&&(p(!1),h(!0))})};return u?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:"内容を確認 - Contact App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("div",{className:"container mt-5",children:[(0,n.jsx)("h2",{className:"md-3",children:"内容を確認"}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)("label",{htmlFor:"name",className:"form-label",children:"お名前"}),(0,n.jsx)("input",{type:"text",id:"name",className:"form-control",value:t,"aria-label":"readonly",readOnly:!0})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)("label",{htmlFor:"email",className:"form-label",children:"メールアドレス"}),(0,n.jsx)("input",{type:"text",id:"email",className:"form-control",value:r,"aria-label":"readonly",readOnly:!0})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)("label",{htmlFor:"message",className:"form-label",children:"お問い合わせ内容"}),(0,n.jsx)("textarea",{id:"message",className:"form-control",value:c,"aria-label":"readonly",style:{height:"200px"},readOnly:!0})]}),(0,n.jsxs)(x,{variant:"danger",onClick:v,children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-envelope",viewBox:"0 0 16 16",children:(0,n.jsx)("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"})}),(0,n.jsx)("span",{className:"ms-2",children:"送信"})]})]})]}):d?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:"Contact App - Aroma"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("div",{className:"container mt-5",children:[(0,n.jsx)("h2",{className:"md-3",children:"Confirmation"}),(0,n.jsx)("div",{className:"alert alert-success",role:"alert",children:"お問い合わせを受け付けました。ありがとうございます！"}),(0,n.jsx)(x,{variant:"primary",onClick:()=>{h(!1),p(!1)},children:"別のお問い合わせをする"})]})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:"Contact App - Aroma"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("div",{className:"container mt-5",children:[(0,n.jsx)("h2",{className:"md-3",children:"Next.js Gmail App"}),(0,n.jsxs)("form",{onSubmit:f,children:[(0,n.jsxs)("div",{className:"mb-3 form-floating",children:[(0,n.jsx)("input",{type:"text",id:"name",required:!0,className:"form-control",placeholder:"山田　太郎"}),(0,n.jsx)("label",{htmlFor:"name",children:"お名前"})]}),(0,n.jsxs)("div",{className:"mb-3 form-floating",children:[(0,n.jsx)("input",{type:"email",id:"email",required:!0,className:"form-control",placeholder:"mail@example.com"}),(0,n.jsx)("label",{htmlFor:"email",children:"メールアドレス"})]}),(0,n.jsxs)("div",{className:"mb-3 form-floating",children:[(0,n.jsx)("textarea",{name:"message",id:"message",className:"form-control",required:!0,placeholder:"テキスト",style:{height:"200px"}}),(0,n.jsx)("label",{htmlFor:"message",children:"お問い合わせ内容"})]}),(0,n.jsxs)("button",{className:"btn btn-primary",type:"submit",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-envelope",viewBox:"0 0 16 16",children:(0,n.jsx)("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"})}),(0,n.jsx)("span",{className:"ps-2",children:"確認画面へ"})]})]})]})]})}x.displayName="Button"},4494:function(){},9008:function(e,a,t){e.exports=t(2636)}},function(e){e.O(0,[942,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);