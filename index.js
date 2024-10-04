import{a as w,S as v,i as m}from"./assets/vendor-CRCB-GUD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const q="https://pixabay.com/api/",S="46290699-f987c2a4595ee60b837e9e9f4";async function f(e,o=1){try{return(await w.get(q,{params:{key:S,q:e,image_type:"photo",page:o,per_page:15,orientation:"horizontal",safesearch:"true"}})).data}catch(t){throw console.log(t),t}}function y(e){const o=document.querySelector(".gallery"),t=e.hits.map(l=>`<li class="gallery-query">
      <a class="gallery-link" href="${l.largeImageURL}">
        <img class="gallery-img"
          src="${l.webformatURL}"
          data-source="${l.largeImageURL}"
          alt="${l.tags}"
          width="360"  onclick="return false">
        <ul class="gallery-descr">
          <li class="gallery-item">
            <p class="gallery-item-descr">Likes</p>
            <p class="gallery-value">${l.likes}</p>
          </li>
          <li class="gallery-item">
            <p class="gallery-item-descr">Views</p>
            <p class="gallery-value">${l.views}</p>
          </li>
          <li class="gallery-item">
            <p class="gallery-item-descr">Comments</p>
            <p class="gallery-value">${l.comments}</p>
          </li>
          <li class="gallery-item">
            <p class="gallery-item-descr">Downloads</p>
            <p class="gallery-value">${l.downloads}</p>
          </li>
        </ul>
      </a>
    </li>`).join("");o.insertAdjacentHTML("beforeend",t)}function p(){document.querySelector(".loader").classList.remove("visually-hidden")}function a(){document.querySelector(".loader").classList.add("visually-hidden")}function b(){document.querySelector(".load-more").classList.remove("visually-hidden")}function M(){document.querySelector(".load-more").classList.add("visually-hidden")}const u=document.querySelector(".search-form"),C=document.querySelector(".gallery");let h=null,n=1;const i=15,P=document.querySelector(".load-more");let d="";u.addEventListener("submit",async e=>{e.preventDefault();const o=u.elements.query.value.trim().toLowerCase();if(o===""){g("Sorry, there are no images matching your search query. Please try again!");return}C.innerHTML="",u.elements.query.value="",n=1,d=o;try{p();const t=await f(d,n,i);y(t),h=new v(".gallery a").refresh(),a(),L(t.hits.length,t.totalHits)}catch{a(),g("Something went wrong. Please try again!")}});P.addEventListener("click",async()=>{n+=1;try{p();const e=await f(d,n,i);if(e.hits.length===0){E("No more images found."),a();return}y(e),h.refresh(),a(),L(e.hits.length,e.totalHits),x()}catch{a(),g("Error loading images. Please try again!")}});function x(){const{height:e}=document.querySelector(".gallery-query").getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}function L(e,o){e>=i&&n*i<o?b():M()}function g(e){m.error({title:"",message:e,position:"topRight",backgroundColor:"#EF4040",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"})}function E(e){m.info({title:"",message:e,position:"topRight",backgroundColor:"#2196F3",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"})}
//# sourceMappingURL=index.js.map
