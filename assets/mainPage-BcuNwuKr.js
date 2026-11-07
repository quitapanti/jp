import"./footer-BM29fPF8.js";const S="https://docs.google.com/spreadsheets/d/e/2PACX-1vSOSWf3Jt6z4frxQXcaI6k1xyPdJLFzhxIP-azYXLFQdumbrBuHTJcdACH_ln3WhKcpLP7syScyUhlG/pub?output=csv";function L(t){const a=[];let o="",l=!1;for(let n=0;n<t.length;n++){const s=t[n];s==='"'?l=!l:s===","&&!l?(a.push(o.trim().replace(/^["']|["']$/g,"")),o=""):o+=s}return a.push(o.trim().replace(/^["']|["']$/g,"")),a}async function $(t){const a=document.querySelector(".skeleton-loader"),o=document.querySelector(".actual-content"),l=document.querySelector(".daymessage"),n=document.querySelector(".submessage"),s=document.querySelector(".extraparg");if(!l)return;const i=()=>{a&&(a.style.display="none"),o&&(o.style.opacity="1")};try{const u=await(await fetch(S)).text(),e={},h=u.split(`
`);for(let c=1;c<h.length;c++){const p=h[c].trim();if(!p)continue;const r=L(p);if(r.length>=3){const f=r[0].toLowerCase(),m=r[1],T=r[2];e[f]={th:m,en:T}}}const b=e.h1&&e.h1.th!==""?e.h1.th:t.th,g=e.h1&&e.h1.en!==""?e.h1.en:t.en;l.innerHTML=`
      <span data-lang="th">${b}</span>
      <span data-lang="en">${g}</span>
    `,n&&(e.h2&&(e.h2.th!==""||e.h2.en!=="")?(n.innerHTML=`
          <span data-lang="th">${e.h2.th}</span>
          <span data-lang="en">${e.h2.en}</span>
        `,n.style.display="block"):n.style.display="none"),s&&(e.p&&(e.p.th!==""||e.p.en!=="")?(s.innerHTML=`
          <span data-lang="th">${e.p.th}</span>
          <span data-lang="en">${e.p.en}</span>
        `,s.style.display="block"):s.style.display="none"),i()}catch(d){console.error("Could not fetch CSV, applying default schedule:",d),l.innerHTML=`
      <span data-lang="th">${t.th}</span>
      <span data-lang="en">${t.en}</span>
    `,n&&(n.style.display="none"),s&&(s.style.display="none"),i()}}const C=new Date().getDay(),k={0:{th:"วันนี้วันอาทิตย์<br>เปิด 20:00-00:00",en:"Today is Sunday<br>Open 20:00-00:00"},1:{th:"วันนี้วันจันทร์<br>เปิด 20:00-00:00",en:"Today is Monday<br>Open 20:00-00:00"},2:{th:"วันนี้วันอังคาร<br>เปิด 20:00-00:00",en:"Today is Tuesday<br>Open 20:00-00:00"},3:{th:"วันนี้วันพุธ<br>เปิด 20:00-00:00",en:"Today is Wednesday<br>Open 20:00-00:00"},4:{th:"วันนี้วันพฤหัสฯ<br>เปิด 20:00-00:00",en:"Today is Thursday<br>Open 20:00-00:00"},5:{th:"วันนี้วันศุกร์<br>เปิด 20:00-00:00",en:"Today is Friday<br>Open 20:00-00:00"},6:{th:"วันนี้วันเสาร์<br>ร้านหยุด",en:"Today is Saturday<br>Closed"}},q=k[C]||{th:"วันนี้วันร้านปิด T_T",en:"Shop is closed today T_T"};$(q);function y(){let t=document.querySelector(".timetablediv"),a=t.getAttribute("data-visible");t.setAttribute("data-visible",a==="false"?"true":"false")}document.querySelector(".timetabletrigger").onclick=y;document.querySelector(".btn-close-timetable").onclick=y;
