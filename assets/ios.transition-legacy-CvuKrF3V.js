System.register(["./index-legacy-Dej7-HCf.js"],(function(t,e){"use strict";var o,n;return{setters:[t=>{o=t.m,n=t.n}],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
const e=t=>document.querySelector(`${t}.ion-cloned-element`),r=t("shadow",(t=>t.shadowRoot||t)),a=t=>{const e="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),o="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=e){const t=e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=t?t.querySelector(o):null}return t.querySelector(o)},l=(t,e)=>{const o="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs");let n=[];if(null!=o){const t=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=t&&(n=t.querySelectorAll("ion-buttons"))}else n=t.querySelectorAll("ion-buttons");for(const r of n){const t=r.closest("ion-header"),o=t&&!t.classList.contains("header-collapse-condense-inactive"),n=r.querySelector("ion-back-button"),a=r.classList.contains("buttons-collapse"),l="start"===r.slot||""===r.slot;if(null!==n&&l&&(a&&o&&e||!a))return n}return null},s=(t,n,a,l,s,i,d,f,m)=>{var y,u;const p=n?`calc(100% - ${s.right+4}px)`:s.left-4+"px",b=n?"right":"left",g=n?"left":"right",S=n?"right":"left";let h=1,$=1,x=`scale(${$})`;const q="scale(1)";if(i&&d){const t=(null===(y=i.textContent)||void 0===y?void 0:y.trim())===(null===(u=f.textContent)||void 0===u?void 0:u.trim());h=m.width/d.width,$=(m.height-c)/d.height,x=t?`scale(${h}, ${$})`:`scale(${$})`}const T=r(l).querySelector("ion-icon").getBoundingClientRect(),X=n?T.width/2-(T.right-s.right)+"px":s.left-T.width/2+"px",E=n?`-${window.innerWidth-s.right}px`:`${s.left}px`,A=`${m.top}px`,v=`${s.top}px`,C=a?[{offset:0,transform:`translate3d(${E}, ${v}, 0)`},{offset:1,transform:`translate3d(${X}, ${A}, 0)`}]:[{offset:0,transform:`translate3d(${X}, ${A}, 0)`},{offset:1,transform:`translate3d(${E}, ${v}, 0)`}],w=a?[{offset:0,opacity:1,transform:q},{offset:1,opacity:0,transform:x}]:[{offset:0,opacity:0,transform:x},{offset:1,opacity:1,transform:q}],k=a?[{offset:0,opacity:1,transform:"scale(1)"},{offset:.2,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:0,transform:"scale(0.6)"}]:[{offset:0,opacity:0,transform:"scale(0.6)"},{offset:.6,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:1,transform:"scale(1)"}],B=o(),P=o(),R=o(),W=e("ion-back-button"),L=r(W).querySelector(".button-text"),N=r(W).querySelector("ion-icon");W.text=l.text,W.mode=l.mode,W.icon=l.icon,W.color=l.color,W.disabled=l.disabled,W.style.setProperty("display","block"),W.style.setProperty("position","fixed"),P.addElement(N),B.addElement(L),R.addElement(W),R.beforeStyles({position:"absolute",top:"0px",[S]:"0px"}).beforeAddWrite((()=>{l.style.setProperty("display","none"),W.style.setProperty(b,p)})).afterAddWrite((()=>{l.style.setProperty("display",""),W.style.setProperty("display","none"),W.style.removeProperty(b)})).keyframes(C),B.beforeStyles({"transform-origin":`${b} top`}).keyframes(w),P.beforeStyles({"transform-origin":`${g} center`}).keyframes(k),t.addAnimation([B,P,R])},i=(t,n,r,a,l,s,i,d,f)=>{var m,y;const u=n?"right":"left",p=n?`calc(100% - ${l.right}px)`:`${l.left}px`,b=`${l.top}px`;let g=n?`-${window.innerWidth-i.right-8}px`:`${i.x+8}px`,S=.5;const h="scale(1)";let $=`scale(${S})`;if(d&&f){g=n?`-${window.innerWidth-f.right-8}px`:f.x-8+"px";const t=(null===(m=d.textContent)||void 0===m?void 0:m.trim())===(null===(y=a.textContent)||void 0===y?void 0:y.trim()),e=f.width/s.width;S=f.height/(s.height-c),$=t?`scale(${e}, ${S})`:`scale(${S})`}const x=i.top+i.height/2-l.height*S/2+"px",q=r?[{offset:0,opacity:0,transform:`translate3d(${g}, ${x}, 0) ${$}`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(0px, ${b}, 0) ${h}`}]:[{offset:0,opacity:.99,transform:`translate3d(0px, ${b}, 0) ${h}`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${g}, ${x}, 0) ${$}`}],T=e("ion-title"),X=o();T.innerText=a.innerText,T.size=a.size,T.color=a.color,X.addElement(T),X.beforeStyles({"transform-origin":`${u} top`,height:`${l.height}px`,display:"",position:"relative",[u]:p}).beforeAddWrite((()=>{a.style.setProperty("opacity","0")})).afterAddWrite((()=>{a.style.setProperty("opacity",""),T.style.setProperty("display","none")})).keyframes(q),t.addAnimation(X)},c=(t("iosTransitionAnimation",((t,e)=>{var c;try{const d="cubic-bezier(0.32,0.72,0,1)",f="opacity",m="transform",y="0%",u=.8,p="rtl"===t.ownerDocument.dir,b=p?"-99.5%":"99.5%",g=p?"33%":"-33%",S=e.enteringEl,h=e.leavingEl,$="back"===e.direction,x=S.querySelector(":scope > ion-content"),q=S.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),T=S.querySelectorAll(":scope > ion-header > ion-toolbar"),X=o(),E=o();if(X.addElement(S).duration((null!==(c=e.duration)&&void 0!==c?c:0)||540).easing(e.easing||d).fill("both").beforeRemoveClass("ion-page-invisible"),h&&null!=t){const e=o();e.addElement(t),X.addAnimation(e)}if(x||0!==T.length||0!==q.length?(E.addElement(x),E.addElement(q)):E.addElement(S.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),X.addAnimation(E),$?E.beforeClearStyles([f]).fromTo("transform",`translateX(${g})`,`translateX(${y})`).fromTo(f,u,1):E.beforeClearStyles([f]).fromTo("transform",`translateX(${b})`,`translateX(${y})`),x){const t=r(x).querySelector(".transition-effect");if(t){const e=t.querySelector(".transition-cover"),n=t.querySelector(".transition-shadow"),r=o(),a=o(),l=o();r.addElement(t).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),a.addElement(e).beforeClearStyles([f]).fromTo(f,0,.1),l.addElement(n).beforeClearStyles([f]).fromTo(f,.03,.7),r.addAnimation([a,l]),E.addAnimation([r])}}const A=S.querySelector("ion-header.header-collapse-condense"),{forward:v,backward:C}=((t,e,o,n,c)=>{const d=l(n,o),f=a(c),m=a(n),y=l(c,o),u=null!==d&&null!==f&&!o,p=null!==m&&null!==y&&o;if(u){const n=f.getBoundingClientRect(),a=d.getBoundingClientRect(),l=r(d).querySelector(".button-text"),c=null==l?void 0:l.getBoundingClientRect(),m=r(f).querySelector(".toolbar-title").getBoundingClientRect();i(t,e,o,f,n,m,a,l,c),s(t,e,o,d,a,l,c,f,m)}else if(p){const n=m.getBoundingClientRect(),a=y.getBoundingClientRect(),l=r(y).querySelector(".button-text"),c=null==l?void 0:l.getBoundingClientRect(),d=r(m).querySelector(".toolbar-title").getBoundingClientRect();i(t,e,o,m,n,d,a,l,c),s(t,e,o,y,a,l,c,m,d)}return{forward:u,backward:p}})(X,p,$,S,h);if(T.forEach((t=>{const e=o();e.addElement(t),X.addAnimation(e);const n=o();n.addElement(t.querySelector("ion-title"));const a=o(),l=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),s=t.closest("ion-header"),i=null==s?void 0:s.classList.contains("header-collapse-condense-inactive");let c;c=$?l.filter((t=>{const e=t.classList.contains("buttons-collapse");return e&&!i||!e})):l.filter((t=>!t.classList.contains("buttons-collapse"))),a.addElement(c);const d=o();d.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const m=o();m.addElement(r(t).querySelector(".toolbar-background"));const u=o(),S=t.querySelector("ion-back-button");if(S&&u.addElement(S),e.addAnimation([n,a,d,m,u]),a.fromTo(f,.01,1),d.fromTo(f,.01,1),$)i||n.fromTo("transform",`translateX(${g})`,`translateX(${y})`).fromTo(f,.01,1),d.fromTo("transform",`translateX(${g})`,`translateX(${y})`),u.fromTo(f,.01,1);else if(A||n.fromTo("transform",`translateX(${b})`,`translateX(${y})`).fromTo(f,.01,1),d.fromTo("transform",`translateX(${b})`,`translateX(${y})`),m.beforeClearStyles([f,"transform"]),(null==s?void 0:s.translucent)?m.fromTo("transform",p?"translateX(-100%)":"translateX(100%)","translateX(0px)"):m.fromTo(f,.01,"var(--opacity)"),v||u.fromTo(f,.01,1),S&&!v){const t=o();t.addElement(r(S).querySelector(".button-text")).fromTo("transform",p?"translateX(-100px)":"translateX(100px)","translateX(0px)"),e.addAnimation(t)}})),h){const t=o(),e=h.querySelector(":scope > ion-content"),a=h.querySelectorAll(":scope > ion-header > ion-toolbar"),l=h.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(e||0!==a.length||0!==l.length?(t.addElement(e),t.addElement(l)):t.addElement(h.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),X.addAnimation(t),$){t.beforeClearStyles([f]).fromTo("transform",`translateX(${y})`,p?"translateX(-100%)":"translateX(100%)");const e=n(h);X.afterAddWrite((()=>{"normal"===X.getDirection()&&e.style.setProperty("display","none")}))}else t.fromTo("transform",`translateX(${y})`,`translateX(${g})`).fromTo(f,1,u);if(e){const n=r(e).querySelector(".transition-effect");if(n){const e=n.querySelector(".transition-cover"),r=n.querySelector(".transition-shadow"),a=o(),l=o(),s=o();a.addElement(n).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),l.addElement(e).beforeClearStyles([f]).fromTo(f,.1,0),s.addElement(r).beforeClearStyles([f]).fromTo(f,.7,.03),a.addAnimation([l,s]),t.addAnimation([a])}}a.forEach((t=>{const e=o();e.addElement(t);const n=o();n.addElement(t.querySelector("ion-title"));const a=o(),l=t.querySelectorAll("ion-buttons,[menuToggle]"),s=t.closest("ion-header"),i=null==s?void 0:s.classList.contains("header-collapse-condense-inactive"),c=Array.from(l).filter((t=>{const e=t.classList.contains("buttons-collapse");return e&&!i||!e}));a.addElement(c);const d=o(),u=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");u.length>0&&d.addElement(u);const b=o();b.addElement(r(t).querySelector(".toolbar-background"));const S=o(),h=t.querySelector("ion-back-button");if(h&&S.addElement(h),e.addAnimation([n,a,d,S,b]),X.addAnimation(e),S.fromTo(f,.99,0),a.fromTo(f,.99,0),d.fromTo(f,.99,0),$){if(i||n.fromTo("transform",`translateX(${y})`,p?"translateX(-100%)":"translateX(100%)").fromTo(f,.99,0),d.fromTo("transform",`translateX(${y})`,p?"translateX(-100%)":"translateX(100%)"),b.beforeClearStyles([f,"transform"]),(null==s?void 0:s.translucent)?b.fromTo("transform","translateX(0px)",p?"translateX(-100%)":"translateX(100%)"):b.fromTo(f,"var(--opacity)",0),h&&!C){const t=o();t.addElement(r(h).querySelector(".button-text")).fromTo("transform",`translateX(${y})`,`translateX(${(p?-124:124)+"px"})`),e.addAnimation(t)}}else i||n.fromTo("transform",`translateX(${y})`,`translateX(${g})`).fromTo(f,.99,0).afterClearStyles([m,f]),d.fromTo("transform",`translateX(${y})`,`translateX(${g})`).afterClearStyles([m,f]),S.afterClearStyles([f]),n.afterClearStyles([f]),a.afterClearStyles([f])}))}return X}catch(d){throw d}})),10)}}}));
