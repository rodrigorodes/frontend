(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/logo.74052802.svg"},28:function(e,t,a){e.exports=a.p+"static/media/camera.6a6f4b6e.svg"},29:function(e,t,a){e.exports=a(60)},34:function(e,t,a){},53:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),o=(a(34),a(24)),u=a.n(o),s=a(9),i=a(6),m=a(4),p=a.n(m),d=a(7),b=a(5),h=a(25),f=a.n(h).a.create({baseURL:"http://localhost:3333"});var E=function(e){var t=e.history,a=Object(n.useState)(""),c=Object(b.a)(a,2),l=c[0],o=c[1];function u(){return(u=Object(d.a)(p.a.mark((function e(a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,f.post("/sessions",{email:l});case 3:n=e.sent,r=n.data._id,localStorage.setItem("user",r),t.push("/dashboard");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Ofer\xe7a ",r.a.createElement("strong",null,"spots")," para programadores e encontre",r.a.createElement("strong",null,"talentos")," para sua empresa"),r.a.createElement("form",{onSubmit:function(e){return u.apply(this,arguments)}},r.a.createElement("label",{htmlFor:"email"},"E-MAIL *"),r.a.createElement("input",{id:"email",type:"email",placeholder:"Seu melhor e-mail",value:l,onChange:function(e){return o(e.target.value)}}),r.a.createElement("button",{className:"btn",type:"submit"},"Entrar")))};a(53);function g(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("user"),e.next=3,f.get("/dashboard",{headers:{user_id:t}});case 3:a=e.sent,c(a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"spot-list"},a.map((function(e){return r.a.createElement("li",{key:e._id},r.a.createElement("header",{style:{backgroundImage:"url(".concat(e.thumbnail_url,")")}}),r.a.createElement("strong",null,e.company),r.a.createElement("span",null,e.price?"R$ ".concat(e.price,"/dia"):"GRATUITO"))}))),r.a.createElement(s.b,{to:"/new"},r.a.createElement("button",{className:"btn"},"Cadastrar novo spot")))}var v=a(28),O=a.n(v);a(59);function y(e){var t=e.history,a=Object(n.useState)(null),c=Object(b.a)(a,2),l=c[0],o=c[1],u=Object(n.useState)(""),s=Object(b.a)(u,2),i=s[0],m=s[1],h=Object(n.useState)(""),E=Object(b.a)(h,2),g=E[0],v=E[1],y=Object(n.useState)(""),j=Object(b.a)(y,2),S=j[0],w=j[1],I=Object(n.useMemo)((function(){return l?URL.createObjectURL(l):null}),[l]);function x(){return(x=Object(d.a)(p.a.mark((function e(a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=new FormData,r=localStorage.getItem("user"),n.append("thumbnail",l),n.append("company",i),n.append("techs",g),n.append("price",S),e.next=9,f.post("/spots",n,{headers:{user_id:r}});case 9:t.push("/dashboard");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("form",{onSubmit:function(e){return x.apply(this,arguments)}},r.a.createElement("label",{id:"thumbnail",style:{backgroundImage:"url(".concat(I,")")},className:l?"has-thumbnail":""},r.a.createElement("input",{type:"file",onChange:function(e){return o(e.target.files[0])}}),r.a.createElement("img",{src:O.a,alt:"Select img"})),r.a.createElement("label",{htmlFor:"company"},"EMPRESA *"),r.a.createElement("input",{id:"company",placeholder:"Sua empresa incr\xedvel",value:i,onChange:function(e){return m(e.target.value)}}),r.a.createElement("label",{htmlFor:"techs"},"TECNOLOGIAS * ",r.a.createElement("span",null,"(separadas por v\xedrgula)")),r.a.createElement("input",{id:"techs",placeholder:"Quais tecnologias usam?",value:g,onChange:function(e){return v(e.target.value)}}),r.a.createElement("label",{htmlFor:"price"},"VALOR DA DI\xc1RIA * ",r.a.createElement("span",null,"(em branco para GRATUITO)")),r.a.createElement("input",{id:"price",placeholder:"Valor cobrado por dia",value:S,onChange:function(e){return w(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"btn"},"Cadastrar"))}function j(){return r.a.createElement(s.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:E}),r.a.createElement(i.a,{path:"/dashboard",component:g}),r.a.createElement(i.a,{path:"/new",component:y})))}var S=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:u.a,alt:"AirCnc"}),r.a.createElement("div",{className:"content"},r.a.createElement(j,null)))};l.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.09ead938.chunk.js.map