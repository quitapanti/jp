import"./footer-q6ABgMIE.js";const b="https://docs.google.com/spreadsheets/d/e/2PACX-1vSOSWf3Jt6z4frxQXcaI6k1xyPdJLFzhxIP-azYXLFQdumbrBuHTJcdACH_ln3WhKcpLP7syScyUhlG/pub?output=csv";function g(n){const a=[];let o="",c=!1;for(let l=0;l<n.length;l++){const r=n[l];r==='"'?c=!c:r===","&&!c?(a.push(o.trim().replace(/^["']|["']$/g,"")),o=""):o+=r}return a.push(o.trim().replace(/^["']|["']$/g,"")),a}async function m(n){const a=document.querySelector(".daymessage"),o=document.querySelector(".submessage"),c=document.querySelector(".extraparg");if(a){a.innerHTML=`
    <span data-lang="th">${n.th}</span>
    <span data-lang="en">${n.en}</span>
  `;try{const r=await(await fetch(b)).text(),s={},d=r.split(`
`);for(let e=1;e<d.length;e++){const t=d[e].trim();if(!t)continue;const i=g(t);if(i.length>=3){const h=i[0].toLowerCase(),u=i[1],y=i[2];s[h]={th:u,en:y}}}if(s.h1){const e=s.h1.th,t=s.h1.en;(e!==""||t!=="")&&(a.innerHTML=`
          <span data-lang="th">${e!==""?e:n.th}</span>
          <span data-lang="en">${t!==""?t:n.en}</span>
        `)}if(o&&s.h2){const e=s.h2.th,t=s.h2.en;e!==""||t!==""?(o.innerHTML=`
          <span data-lang="th">${e}</span>
          <span data-lang="en">${t}</span>
        `,o.style.display="block"):o.style.display="none"}if(c&&s.p){const e=s.p.th,t=s.p.en;e!==""||t!==""?(c.innerHTML=`
          <span data-lang="th">${e}</span>
          <span data-lang="en">${t}</span>
        `,c.style.display="block"):c.style.display="none"}}catch(l){console.error("Could not fetch published CSV, falling back to schedule:",l)}}}const T=new Date().getDay(),f={0:{th:"วันนี้วันอาทิตย์<br>เปิด 20:00-00:00",en:"Today is Sunday<br>Open 20:00-00:00"},1:{th:"วันนี้วันจันทร์<br>เปิด 20:00-00:00",en:"Today is Monday<br>Open 20:00-00:00"},2:{th:"วันนี้วันอังคาร<br>เปิด 20:00-00:00",en:"Today is Tuesday<br>Open 20:00-00:00"},3:{th:"วันนี้วันพุธ<br>เปิด 20:00-00:00",en:"Today is Wednesday<br>Open 20:00-00:00"},4:{th:"วันนี้วันพฤหัสฯ<br>เปิด 20:00-00:00",en:"Today is Thursday<br>Open 20:00-00:00"},5:{th:"วันนี้วันศุกร์<br>เปิด 20:00-00:00",en:"Today is Friday<br>Open 20:00-00:00"},6:{th:"วันนี้วันเสาร์<br>ร้านหยุด",en:"Today is Saturday<br>Closed"}},S=f[T]||{th:"วันนี้วันร้านปิด T_T",en:"Shop is closed today T_T"};m(S);function p(){let n=document.querySelector(".timetablediv"),a=n.getAttribute("data-visible");n.setAttribute("data-visible",a==="false"?"true":"false")}document.querySelector(".timetabletrigger").onclick=p;document.querySelector(".btn-close-timetable").onclick=p;
