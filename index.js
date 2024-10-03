import{a as p,i as a,S as h}from"./assets/vendor-CRCB-GUD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const L="https://pixabay.com/api/",w="46290699-f987c2a4595ee60b837e9e9f4";async function g(o,r=1){try{return(await p.get(L,{params:{key:w,q:o,image_type:"photo",page:r,per_page:15,orientation:"horizontal",safesearch:"true"}})).data}catch(t){throw console.log(t),t}}function f(o){const r=document.querySelector(".gallery"),t=o.hits.map(l=>`<li class="gallery-query">
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
    </li>`).join("");r.insertAdjacentHTML("beforeend",t)}function m(){document.querySelector(".loader").classList.remove("visually-hidden")}function i(){document.querySelector(".loader").classList.add("visually-hidden")}function v(){document.querySelector(".load-more").classList.remove("visually-hidden")}function C(){document.querySelector(".load-more").classList.add("visually-hidden")}const d=document.querySelector(".search-form"),q=document.querySelector(".gallery");let y=null,n=1;const u=15,b=document.querySelector(".load-more");d.addEventListener("submit",async o=>{o.preventDefault();const r=d.elements.query.value.trim().toLowerCase();if(r===""){a.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"});return}q.innerHTML="",n=1;try{m();const t=await g(r,n,u);f(t),y=new h(".gallery a").refresh(),i(),t.hits.length>=u?v():C(),t.totalHits===0&&(i(),a.warning({title:"",message:"No images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"}))}catch(t){console.log(t),a.error({title:"",message:"Something went wrong. Please try again!",position:"topRight",backgroundColor:"#EF4040",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"})}});function S(){const{height:o}=document.querySelector(".gallery-query").getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}b.addEventListener("click",async()=>{n+=1;const o=d.elements.query.value.trim().toLowerCase();try{m();const r=await g(o,n,u);if(r.hits.length===0){a.info({title:"",message:"No more images found.",position:"topRight",backgroundColor:"#2196F3",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"}),i();return}f(r),y.refresh(),i(),S()}catch{a.error({title:"",message:"Error loading images. Please try again!",position:"topRight",backgroundColor:"#EF4040",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"})}});
//# sourceMappingURL=index.js.map
