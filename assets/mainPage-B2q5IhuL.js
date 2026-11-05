import"./footer-q6ABgMIE.js";const p="https://sheetdb.io/api/v1/u210mg6493w5w";async function b(n){const a=document.querySelector(".daymessage"),r=document.querySelector(".submessage"),c=document.querySelector(".extraparg");if(a){a.innerHTML=`
    <span data-lang="th">${n.th}</span>
    <span data-lang="en">${n.en}</span>
  `;try{const h=await(await fetch(p)).json(),l={};h.forEach(e=>{e.key&&(l[e.key.trim().toLowerCase()]=e)});const s=l.h1;if(s){const e=s.th?s.th.trim():"",t=s.en?s.en.trim():"";(e!==""||t!=="")&&(a.innerHTML=`
          <span data-lang="th">${e!==""?e:n.th}</span>
          <span data-lang="en">${t!==""?t:n.en}</span>
        `)}const o=l.h2;if(r&&o){const e=o.th?o.th.trim():"",t=o.en?o.en.trim():"";e!==""||t!==""?(r.innerHTML=`
          <span data-lang="th">${e}</span>
          <span data-lang="en">${t}</span>
        `,r.style.display="block"):r.style.display="none"}const i=l.p;if(c&&i){const e=i.th?i.th.trim():"",t=i.en?i.en.trim():"";e!==""||t!==""?(c.innerHTML=`
          <span data-lang="th">${e}</span>
          <span data-lang="en">${t}</span>
        `,c.style.display="block"):c.style.display="none"}}catch(d){console.error("Could not fetch Google Sheet, falling back to schedule:",d)}}}const u=new Date().getDay(),m={0:{th:"วันนี้วันอาทิตย์<br>เปิด 20:00-00:00",en:"Today is Sunday<br>Open 20:00-00:00"},1:{th:"วันนี้วันจันทร์<br>เปิด 20:00-00:00",en:"Today is Monday<br>Open 20:00-00:00"},2:{th:"วันนี้วันอังคาร<br>เปิด 20:00-00:00",en:"Today is Tuesday<br>Open 20:00-00:00"},3:{th:"วันนี้วันพุธ<br>เปิด 20:00-00:00",en:"Today is Wednesday<br>Open 20:00-00:00"},4:{th:"วันนี้วันพฤหัสฯ<br>เปิด 20:00-00:00",en:"Today is Thursday<br>Open 20:00-00:00"},5:{th:"วันนี้วันศุกร์<br>เปิด 20:00-00:00",en:"Today is Friday<br>Open 20:00-00:00"},6:{th:"วันนี้วันเสาร์<br>ร้านหยุด",en:"Today is Saturday<br>Closed"}},g=m[u]||{th:"วันนี้วันร้านปิด T_T",en:"Shop is closed today T_T"};b(g);function y(){let n=document.querySelector(".timetablediv"),a=n.getAttribute("data-visible");n.setAttribute("data-visible",a==="false"?"true":"false")}document.querySelector(".timetabletrigger").onclick=y;document.querySelector(".btn-close-timetable").onclick=y;
