var f=Object.defineProperty;var o=(t,e)=>f(t,"name",{value:e,configurable:!0});var i={lang:"en",currentCard:"",jsonContent:{}};var m;fetch("/content.json").then(t=>t.json()).then(t=>{m=t,i.jsonContent=m;let e=document.querySelectorAll(".card"),c=new URL(window.location.href).searchParams.get("card");c&&e.forEach(n=>{n.id===c&&n.click()})});function u(t){let e=m[t];if(!e)return;let r=e[i.lang],c=r?.content?.toString()||e.content?.toString()||"",n=r?.title?.toString()||e.title?.toString()||"",a=e.image?.toString()||"",d=e.banner?.toString()||"";g(c,t,n,a)}o(u,"updatePost");function g(t,e,r,c){let n=document.querySelector(".post__content"),a=document.querySelector(".post__title"),d=document.querySelector(".post__banner");n&&d&&a&&(n.innerHTML=t,n.id=e,a.innerHTML=r,d.src=c)}o(g,"updatePostElements");var p=document.querySelectorAll(".card"),l=document.querySelector(".post"),E=document.querySelector(".space__exit-btn"),s=null,v=null;function S(t){t.classList.remove("card--active"),t.classList.add("card--in-space"),i.currentCard=t.id,s&&(s.classList.remove("card--in-space"),s.classList.add("card--active")),s=t,v=t.parentElement?.parentElement,u(t.id),l?.classList.add("post--active")}o(S,"handleCardClick");p.forEach(t=>{t.addEventListener("click",()=>{S(t)})});E?.addEventListener("click",()=>{s?.classList.remove("card--in-space"),l?.classList.remove("post--active"),l&&(l.id=""),v?.classList.contains("card-folder--active")&&s?.classList.add("card--active"),s=null});var C=document.querySelectorAll(".card-folder");function L(t,e){t.querySelector(".card-folder__cards-container")?.querySelectorAll(".card")?.forEach(n=>{n.classList.contains("card--in-space")||n.classList.toggle("card--active",e)})}o(L,"changeFolderCardsState");function H(t){t.classList.toggle("card-folder--active"),L(t,t.classList.contains("card-folder--active"))}o(H,"onCardFolderClick");C.forEach(t=>{L(t,t.classList.contains("card-folder--active")),t.querySelector(".card-folder__cover")?.addEventListener("click",()=>{H(t)})});var T=document.querySelector(".nav"),y=document.querySelector(".nav__button");y?.addEventListener("click",()=>{T?.classList.toggle("nav--active")});