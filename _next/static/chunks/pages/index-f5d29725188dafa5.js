(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4369)}])},4369:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),a=n(9008),s=n.n(a),i=n(7294),l=n(4848),o=n.n(l);function u(){let[e,t]=(0,i.useState)(""),[n,a]=(0,i.useState)(""),[l,u]=(0,i.useState)(""),[c,d]=(0,i.useState)("");async function h(r){r.preventDefault();try{let s=await fetch("/api/generate-diet",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({calories:e,numMeals:n,foods:l})}),i=await s.json();if(200!==s.status)throw i.error||Error("Request failed with status ".concat(s.status));d(i.result),t(""),a(""),u("")}catch(o){console.error(o),alert(o.message)}}return(0,r.jsxs)("div",{children:[(0,r.jsx)(s(),{children:(0,r.jsx)("title",{children:"Generador de dieta"})}),(0,r.jsxs)("main",{className:o().main,children:[(0,r.jsx)("h1",{children:"Generador de dieta"}),(0,r.jsxs)("form",{onSubmit:h,children:[(0,r.jsx)("label",{htmlFor:"calories",children:"Calor\xedas:"}),(0,r.jsx)("input",{type:"number",name:"calories",placeholder:"Ej: 2000",value:e,onChange:e=>t(e.target.value),required:!0}),(0,r.jsx)("label",{htmlFor:"numMeals",children:"N\xfamero de comidas:"}),(0,r.jsx)("input",{type:"number",name:"numMeals",placeholder:"Ej: 3",value:n,onChange:e=>a(e.target.value),required:!0}),(0,r.jsx)("label",{htmlFor:"foods",children:"Alimentos:"}),(0,r.jsx)("input",{type:"text",name:"foods",placeholder:"Ej: pollo, arroz, br\xf3coli",value:l,onChange:e=>u(e.target.value),required:!0}),(0,r.jsx)("input",{type:"submit",value:"Generar dieta"})]}),c&&(0,r.jsx)("div",{className:o().result,children:c})]}),"Elaborado por Oscar Alatrista"]})}},4848:function(e){e.exports={main:"index_main__3wZvj",icon:"index_icon__CgRrC",result:"index_result__66e57"}},9008:function(e,t,n){e.exports=n(3121)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);