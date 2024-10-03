import{a as y,i as a,S as h}from"./assets/vendor-CRCB-GUD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const w="https://pixabay.com/api/",L="46290699-f987c2a4595ee60b837e9e9f4";async function g(l,e=1){try{return(await y.get(w,{params:{key:L,q:l,image_type:"photo",page:e,per_page:15,orientation:"horizontal",safesearch:"true"}})).data}catch(o){throw console.log(o),o}}function d(l){const e=document.querySelector(".gallery"),o=l.hits.map(t=>`<li class="gallery-query">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img class="gallery-img"
          src="${t.webformatURL}"
          data-source="${t.largeImageURL}"
          alt="${t.tags}"
          width="360"  onclick="return false">
        <ul class="gallery-descr">
          <li class="gallery-item">
            <p class="gallery-item-descr">Likes</p>
            <p class="gallery-value">${t.likes}</p>
          </li>
          <li class="gallery-item">
            <p class="gallery-item-descr">Views</p>
            <p class="gallery-value">${t.views}</p>
          </li>
          <li class="gallery-item">
            <p class="gallery-item-descr">Comments</p>
            <p class="gallery-value">${t.comments}</p>
          </li>
          <li class="gallery-item">
            <p class="gallery-item-descr">Downloads</p>
            <p class="gallery-value">${t.downloads}</p>
          </li>
        </ul>
      </a>
    </li>`).join("");e.insertAdjacentHTML("beforeend",o)}function m(){document.querySelector(".loader").classList.remove("visually-hidden")}function u(){document.querySelector(".loader").classList.add("visually-hidden")}const f=document.querySelector(".search-form"),C=document.querySelector(".gallery");let p=null,i=1;const n=15,b=document.querySelector(".load-more");f.addEventListener("submit",async l=>{l.preventDefault();const e=f.elements.query.value.trim().toLowerCase();if(e===""){a.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"});return}C.innerHTML="",i=1;try{m();const o=await g(e,i,n);d(o),p=new h(".gallery a").refresh(),u(),o.hits.length>=n?showMore():hideMore(),o.totalHits===0&&(u(),a.warning({title:"",message:"No images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"}))}catch(o){console.log(o),a.error({title:"",message:"Something went wrong. Please try again!",position:"topRight",backgroundColor:"#EF4040",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"})}});b.addEventListener("click",async()=>{i+=1;const l=f.elements.query.value.trim().toLowerCase();try{m();const e=await g(l,i,n);d(e),p.refresh(),u(),e.hits.length<n&&(hideMore(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#2196F3",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"}))}catch(e){console.log(e),a.error({message:"Something went wrong. Please try again!",position:"topRight",backgroundColor:"#EF4040",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"})}});
//# sourceMappingURL=index.js.map
