import{_ as g}from"./P0B_YbIo.js";import{_ as f}from"./BD3wXIuA.js";import{c as k,f as r,g as _,h as e,k as o,w as s,i as a,N as m,j as p,n as h,m as v,M as x,F as b}from"./CKSXDZdU.js";const N={class:"header"},y={class:"menu-desktop"},C={class:"menu-mobile"},$={__name:"Header",setup(c){const t=k(!1),i=()=>{t.value=!t.value,document.body.classList.toggle("is-open",t.value)},l=()=>{t.value=!1,document.body.classList.remove("is-open")};return(z,n)=>{const d=g,u=f;return r(),_("header",null,[e("div",N,[o(u,{to:"/","aria-label":"Retour à la page d'accueil"},{default:s(()=>[o(d,{src:"/img/build/logo.svg",alt:"Logo du site Quentin Fonteneau",class:"logo",width:"320",height:"46"})]),_:1}),e("div",y,[e("nav",null,[e("ul",null,[e("li",null,[o(u,{to:"/projets"},{default:s(()=>n[0]||(n[0]=[a("Projets")])),_:1})]),e("li",null,[o(u,{to:"/a-propos"},{default:s(()=>n[1]||(n[1]=[a("À propos")])),_:1})])])]),o(u,{to:"/contact",class:"btn"},{default:s(()=>n[2]||(n[2]=[a("Me contacter")])),_:1})]),e("div",C,[t.value?p("",!0):(r(),m(d,{key:0,class:"menu-icon__open active",src:"/img/build/menu_open.svg",onClick:i,alt:"Ouvrir le menu",width:"48",height:"32"})),t.value?(r(),m(d,{key:1,class:"menu-icon__close active",src:"/img/build/menu_close.svg",onClick:i,alt:"Fermer le menu",width:"48",height:"32"})):p("",!0),e("nav",{class:h({"is-open":t.value})},[e("ul",null,[e("li",null,[o(u,{to:"/projets",onClick:l},{default:s(()=>n[3]||(n[3]=[a("Projets")])),_:1})]),e("li",null,[o(u,{to:"/a-propos",onClick:l},{default:s(()=>n[4]||(n[4]=[a("À propos")])),_:1})]),e("li",null,[o(u,{to:"/contact",onClick:l},{default:s(()=>n[5]||(n[5]=[a("Me contacter")])),_:1})])])],2)])])])}}},w={},F={class:"footer"},L={class:"footer__first"},M={class:"footer__second"},j={style:{display:"none !important"}};function B(c,t){const i=g,l=f;return r(),_("footer",null,[e("div",F,[e("div",L,[o(l,{to:"/","aria-label":"Retour à la page d'accueil"},{default:s(()=>[o(i,{src:"/img/build/logo.svg",alt:"Logo du site Quentin Fonteneau",class:"logo",width:"320",height:"46"})]),_:1}),o(i,{loading:"lazy",src:"/img/build/linkedin.svg",class:"linkedin",alt:"Logo linkedin",width:"40",height:"40"})]),e("div",M,[e("ul",j,[e("li",null,[o(l,{to:"/"},{default:s(()=>t[0]||(t[0]=[a("Mentions légales")])),_:1})]),e("li",null,[o(l,{to:"/"},{default:s(()=>t[1]||(t[1]=[a("Plan du site")])),_:1})])]),t[2]||(t[2]=e("span",{class:"copyright"},"© Quentin Fonteneau - 2024",-1))])])])}const V=v(w,[["render",B]]),P={};function Q(c,t){const i=$,l=V;return r(),_(b,null,[o(i),x(c.$slots,"default"),o(l)],64)}const R=v(P,[["render",Q]]);export{R as default};
