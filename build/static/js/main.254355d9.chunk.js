(this.webpackJsonpmyreactapp=this.webpackJsonpmyreactapp||[]).push([[0],{11:function(e,a,t){e.exports=t(23)},23:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(7),s=t.n(l),i=(t(3),t(8)),c=t.n(i),o=t(2),u=t.n(o),m=t(4),d=t(1),f=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)};var p=function(e){var a=e.type,t=e.name,l=e.label,s=e.value,i=e.onChange,c=Object(r.useState)("inactive"),o=Object(d.a)(c,2),u=o[0],m=o[1],p=Object(r.useState)(!1),b=Object(d.a)(p,2),v=b[0],h=b[1],y=Object(r.useState)(!0),E=Object(d.a)(y,2),g=E[0],j=E[1],O=function(e,a){h(!1),j(!1),"email"===e?f(a)?j(!0):j(!1):console.log("")};return n.a.createElement("div",{type:a,label:l,className:"active"===u?"raisely-text-input active-input":"raisely-text-input"},n.a.createElement("label",{className:"raisely-label",htmlFor:t},l),n.a.createElement("div",{className:v||"email"===a&&!1===g?"raisely-invalid-input raisely-invalid":"raisely-invalid-input"},n.a.createElement("span",{className:"raisely-invalid-input-text"},"email"!==a||""===s?"This field is required":!1===g?"Incorrect email format (e.g. text@text.com)":"This field is required"),n.a.createElement("svg",{className:"raisely-error-icon",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true"},n.a.createElement("path",{d:"M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"}))),n.a.createElement("input",{type:a,label:t,name:t,autoComplete:"off",value:s,onChange:function(e){return i(e.target.value)},onFocus:function(){return m("active")},onBlur:function(e){return function(e,a){m("inactive"),""===e?h(!0):O(a,e)}(e.target.value,a)},required:!0}))};var b=function(e){var a=e.id,t=e.disabled;return n.a.createElement("button",{id:a,type:"submit",className:t?"raisely-button-disabled":""},"Sign Up")},v=t(5),h=t.n(v),y=t(9),E=t.n(y);var g=function(e){var a=e.id,t=e.mail,r=e.disabled,l=e.disableMailAlert;return n.a.createElement("div",{id:a,className:r?"form-alert":"form-alert alert-enabled"},n.a.createElement("div",{className:"alert-icon"},n.a.createElement(h.a,{animation:E.a,strokeColor:"rgb(95, 64, 210)"})),n.a.createElement("h1",{className:"alert-text-header"},"Oops!"),n.a.createElement("p",{className:"alert-text"},"It seems like the email address you provided ",n.a.createElement("br",null),"has been already registered!"),n.a.createElement("div",{className:"alert-mail"},t),n.a.createElement("div",{className:"alert-button",onClick:l},"Use a different email address"))},j=t(10),O=t.n(j);var N=function(e){var a=e.mail,t=e.disabled,r=e.disableSuccessAlert;return n.a.createElement("div",{className:t?"form-alert form-alert-s":"form-alert form-alert-s alert-enabled"},n.a.createElement("div",{className:"alert-icon"},n.a.createElement(h.a,{animation:O.a,strokeColor:"rgb(95, 64, 210)"})),n.a.createElement("h1",{className:"alert-text-header"},"Awesome!"),n.a.createElement("p",{className:"alert-text"},"You have successfully signed up with ",n.a.createElement("br",null)," the following email address"),n.a.createElement("div",{className:"alert-mail"},a),n.a.createElement("div",{className:"alert-button",onClick:r},"Log in"))},x=function(){var e=Object(m.a)(u.a.mark((function e(a){var t,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={campaignUuid:"46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",data:{email:a}},e.next=3,fetch("https://api.raisely.com/v3/check-user",{method:"post",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(t)});case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return","OK"===n.data.status);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),S=function(){var e=Object(m.a)(u.a.mark((function e(a,t,r,n){var l,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l={campaignUuid:"46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",data:{firstName:a,lastName:t,email:r,password:n}},e.next=3,fetch("https://api.raisely.com/v3/signup",{method:"post",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(l)});case 3:return s=e.sent,e.next=6,s.json();case 6:return i=e.sent,e.abrupt("return",!!i.data.status&&("ACTIVE"===i.data.status&&i));case 8:case"end":return e.stop()}}),e)})));return function(a,t,r,n){return e.apply(this,arguments)}}();var w=function(e){var a=e.formId,t=Object(r.useState)(""),l=Object(d.a)(t,2),s=l[0],i=l[1],c=Object(r.useState)(""),o=Object(d.a)(c,2),v=o[0],h=o[1],y=Object(r.useState)(""),E=Object(d.a)(y,2),j=E[0],O=E[1],w=Object(r.useState)(""),C=Object(d.a)(w,2),k=C[0],A=C[1],I=Object(r.useState)(!0),z=Object(d.a)(I,2),L=z[0],M=z[1],T=Object(r.useState)(!1),J=Object(d.a)(T,2),U=J[0],q=J[1],B=Object(r.useState)(!0),F=Object(d.a)(B,2),Z=F[0],D=F[1],K=Object(r.useState)(!0),P=Object(d.a)(K,2),R=P[0],V=P[1];Object(r.useEffect)((function(){!function(e,a,t,r){return""!==e&&""!==a&&""!==t&&""!==r&&f(t)}(s,v,j,k)?M(!0):M(!1)}),[s,v,j,k]);var Y=function(){q(!0),D(!1)},$=function(){var e=Object(m.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),D(!0),e.next=4,x(j);case 4:if(!e.sent){e.next=11;break}return e.next=7,S(s,v,j,k);case 7:e.sent?(q(!0),V(!1)):Y(),e.next=12;break;case 11:Y();case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"raisely-container"},n.a.createElement("form",{id:a,onSubmit:$,className:U?"raisely-form-disabled":""},n.a.createElement("h1",{className:"raisely-form-heading"},"Login to Raisely"),n.a.createElement(p,{type:"text",name:"firstName",label:"First Name",value:s,onChange:i}),n.a.createElement(p,{type:"text",name:"lastName",label:"Last Name",value:v,onChange:h}),n.a.createElement(p,{type:"email",name:"email",label:"Email",value:j,onChange:O}),n.a.createElement(p,{type:"password",name:"password",label:"Password",value:k,onChange:A}),n.a.createElement(b,{id:"raisely-form-submit",disabled:L})),n.a.createElement(g,{mail:j,disabled:Z,disableMailAlert:function(){D(!0),q(!1)}}),n.a.createElement(N,{mail:j,disabled:R,disableSuccessAlert:function(){V(!0),q(!1)}}))};var C=function(){return n.a.createElement("div",{id:"raisely-signup-form"},n.a.createElement("img",{src:c.a,id:"raisely-form-logo",alt:"raisely-logo"}),n.a.createElement(w,{formId:"raisely-form"}))},k=document.getElementById("root");s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),k)},3:function(e,a,t){},8:function(e,a,t){e.exports=t.p+"static/media/logo.2af286bf.png"}},[[11,1,2]]]);
//# sourceMappingURL=main.254355d9.chunk.js.map