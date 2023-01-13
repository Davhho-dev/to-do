(()=>{"use strict";function e(e){const t=document.querySelector(".project-list");return t.textContent="",e.forEach((e=>{const n=document.createElement("div");n.classList.add("new-project-con");const o=document.createElement("p");o.classList.add("project-title"),o.textContent=e.title,n.appendChild(o),n.appendChild(c()),t.appendChild(n)})),t}function t(e){const t=document.querySelector(".project-task-list");r(),e.forEach((e=>{const n=document.createElement("div");n.classList.add("project-task");const o=document.createElement("div");o.classList.add("project-task-left");const r=document.createElement("div");r.classList.add("checkbox");const d=document.createElement("p");d.classList.add("project-task-desc"),d.textContent=e,o.appendChild(r),o.appendChild(d),n.appendChild(o),n.appendChild(c());const l=document.querySelector(".add-task");return t.insertBefore(n,l)}))}function n(e){r(),document.querySelector(".main-hd").textContent=e.title,document.querySelector(".main-hd-desc").textContent=e.description,document.querySelector(".main-hd-date-user").textContent=e.dueDate;const t=document.querySelector(".main-hd-priority-user");t.textContent=e.priority,t.style.color=o(e.priority);for(const t of document.querySelectorAll(".project-title"))t.textContent.includes(e.title)?(t.setAttribute("style","color: white; opacity: 1;"),t.parentElement.style.backgroundColor="rgba(255, 255, 255, 0.296)"):(t.setAttribute("style","color: #EBEBEB; opacity: .5;"),t.parentElement.style.background="none")}function o(e){return"Low"===e?"green":"Medium"===e?"yellow":"red"}function c(){const e=document.createElement("div");e.classList.add("project-btn");const t=document.createElement("span"),n=document.createElement("span");return t.classList.add("material-icons-outlined"),t.classList.add("edit"),n.classList.add("material-icons-outlined"),n.classList.add("delete"),t.textContent="edit",n.textContent="delete",e.appendChild(t),e.appendChild(n),e}function r(){const e=document.querySelector(".project-task-list"),t=document.querySelectorAll(".project-task");for(let n=0;n<t.length;n++)e.removeChild(document.querySelector(".project-task"));return e}let d=[];let l=[];document.querySelector(".add-project").addEventListener("click",(()=>{!function(){const e=document.querySelector(".project-modal");e.showModal(),document.querySelector(".project-close").addEventListener("click",(()=>{e.close()}))}()})),function(){const t=document.querySelector(".project-form"),o=document.querySelector(".project-modal");t.addEventListener("submit",(c=>{c.preventDefault();const r=document.getElementById("title"),d=document.getElementById("description"),i=document.getElementById("due-date");let s="Low";document.querySelector(".project-modal #medium").checked?s="Medium":document.querySelector(".project-modal #high").checked&&(s="High");const u=((e,t,n,o)=>({title:e,description:t,dueDate:n,priority:o}))(r.value,d.value,i.value,s);return l.push(u),e(l),n(u),o.close(),t.reset(),l}))}(),function(){const e=document.querySelector(".task-form"),n=document.querySelector(".task-modal"),o=document.querySelector(".main-hd");e.addEventListener("submit",(c=>{c.preventDefault();const r=document.getElementById("task-description");if(function(e){if(0===d.length)return!1;for(let t=0;t<d.length;t++)if(d[t].project===e)return!0}(o.textContent)){const e=d.findIndex((e=>e.project===o.textContent));d[e].description.push(r.value),t(d[e].description)}else{const e=((e,t)=>({project:e,description:t}))(o.textContent,[r.value]);d.push(e);const n=d.findIndex((e=>e.project===o.textContent));t(d[n].description)}return n.close(),e.reset(),d}))}(),document.querySelectorAll(".project-list").forEach((e=>{e.addEventListener("click",(e=>{let o="";o="project-title"===e.target.classList.value||"new-project-con"===e.target.classList.value?e.target.childNodes[0].textContent:e.target.parentElement.parentElement.childNodes[0].textContent;const c=l.findIndex((e=>e.title===o));n(l[c]);const r=d.findIndex((e=>e.project===o));-1!==r&&t(d[r].description)}))})),document.querySelectorAll(".project-list").forEach((c=>{c.addEventListener("click",(c=>{if("material-icons-outlined edit"===c.target.classList.value){const o=c.target.parentElement.parentElement.childNodes[0].textContent,r=l.findIndex((e=>e.title===o));d.findIndex((e=>e.project===o)),!function(){const e=document.querySelector(".edit-modal");e.showModal(),document.querySelector(".edit-close").addEventListener("click",(()=>{e.close()}))}(),function(o){const c=document.querySelector(".edit-form"),r=document.querySelector(".edit-modal");c.addEventListener("submit",(i=>{i.preventDefault();const s=document.getElementById("edit-title");l[o].title=s.value;const u=document.getElementById("edit-description");l[o].description=u.value;const a=document.getElementById("edit-due-date");l[o].dueDate=a.value;let m="Low";var p,y;return document.querySelector(".edit-modal #medium").checked?m="Medium":document.querySelector(".edit-modal #high").checked&&(m="High"),l[o].priority=m,console.log("project-module"),console.log(l),e(l),n(l[o]),p=o,y=l[o].title,d[p].project=y,t(d[p].description),console.log(d[p]),r.close(),c.reset(),l}),{once:!0})}(r)}if("material-icons-outlined delete"===c.target.classList.value){const e=c.target.parentElement.parentElement.childNodes[0].textContent;r=l.findIndex((t=>t.title===e)),l.splice(r,1),document.querySelector(".project-list").removeChild(c.target.parentElement.parentElement),function(){if(0===l.length){const e=document.querySelector(".main-hd-con");return e.textContent="",e.style.paddingBottom="6.15rem",e}{document.querySelector(".main-hd").textContent=l[0].title,document.querySelector(".main-hd-desc").textContent=l[0].description,document.querySelector(".main-hd-date-user").textContent=l[0].dueDate;const e=document.querySelector(".main-hd-priority-user");e.textContent=l[0].priority,e.style.color=o(l[0].priority)}}()}var r}))})),document.querySelector(".add-task").addEventListener("click",(()=>{!function(){const e=document.querySelector(".task-modal");e.showModal(),document.querySelector(".task-close").addEventListener("click",(t=>{e.close()}))}()})),document.querySelector(".completed-tab").addEventListener("click",(e=>{const t=e.target.innerText;var n;n=t,document.querySelector(".completed-tab .material-icons-outlined").innerText="Completed\nexpand_more"===n||"expand_more"===n?"expand_less":"expand_more",function(e){const t=document.querySelector(".completed-list");"Completed\nexpand_more"===e||"expand_more"===e?(document.querySelectorAll(".user-project").forEach((e=>{e.addEventListener("mouseover",(()=>{e.setAttribute("style","background-color: rgba(255, 255, 255, 0.296); border-radius: 5px;")})),e.addEventListener("mouseout",(()=>{e.style.background="none"}))})),t.classList.remove("hidden")):t.classList.add("hidden")}(t)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFvQmUsRUFBVyxHQUFHbEIsU0FDN0QsQ0FDSixDR3BEWXdELEVBQ0osQ0R1QlIsSUFBdUJuQixDQ3ZCZixHQUNILElBR2NoRSxTQUFTQyxjQUFjLGFBQy9CNkMsaUJBQWlCLFNBQVMsTUZyRHJDLFdBQ0ksTUFBTWUsRUFBWTdELFNBQVNDLGNBQWMsZUFDekM0RCxFQUFVYixZQUNPaEQsU0FBU0MsY0FBYyxlQUMvQjZDLGlCQUFpQixTQUFVSyxJQUNoQ1UsRUFBVVosT0FBTyxHQUd6QixDRThDSVksRUFBVyxJQUdNN0QsU0FBU0MsY0FBYyxrQkFDL0I2QyxpQkFBaUIsU0FBVUssSUFDcEMsTUFBTWlDLEVBQVlqQyxFQUFFa0IsT0FBT2UsVUg3Qy9CLElBQXFCQyxJRytDREQsRUg5Q0VwRixTQUFTQyxjQUFjLDJDQUM0RG1GLFVBQS9FLDJCQUFuQkMsR0FBa0UsZ0JBQW5CQSxFQUErRCxjQUMvRSxjQW5CdEMsU0FBOEJELEdBQzFCLE1BQU1yRixFQUFnQkMsU0FBU0MsY0FBYyxtQkFDNUIsMkJBQWRtRixHQUF3RCxnQkFBZEEsR0FDcEJwRixTQUFTZ0MsaUJBQWlCLGlCQUNsQzdCLFNBQVNDLElBQ2xCQSxFQUFRMEMsaUJBQWlCLGFBQWEsS0FDbEMxQyxFQUFROEIsYUFBYSxRQUFTLG9FQUFvRSxJQUV0RzlCLEVBQVEwQyxpQkFBaUIsWUFBWSxLQUNqQzFDLEVBQVF3QixNQUFNUyxXQUFhLE1BQU0sR0FDbkMsSUFFQ3RDLEVBQWNRLFVBQVUrRSxPQUFPLFdBQzdCdkYsRUFBY1EsVUFBVUMsSUFBSSxTQUM3QyxDR2tEUStFLENBQXFCSCxFQUl6QixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb2plY3RBcnIgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmZ1bmN0aW9uIGRpc3BsYXlDb21wbGV0ZWRMaXN0KGlubmVyVGV4dCkge1xuICAgIGNvbnN0IGNvbXBsZXRlZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXBsZXRlZC1saXN0XCIpO1xuICAgIGlmKGlubmVyVGV4dCA9PT0gXCJDb21wbGV0ZWRcXG5leHBhbmRfbW9yZVwiIHx8IGlubmVyVGV4dCA9PT0gXCJleHBhbmRfbW9yZVwiKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RIb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudXNlci1wcm9qZWN0XCIpO1xuICAgICAgICBwcm9qZWN0SG92ZXIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI5Nik7IGJvcmRlci1yYWRpdXM6IDVweDtcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnN0eWxlLmJhY2tncm91bmQgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gY29tcGxldGVkTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH1lbHNlIHJldHVybiBjb21wbGV0ZWRMaXN0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUFycm93KGFycm93RGlyZWN0aW9uKSB7XG4gICAgY29uc3QgYXJyb3dJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wbGV0ZWQtdGFiIC5tYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICBpZihhcnJvd0RpcmVjdGlvbiA9PT0gXCJDb21wbGV0ZWRcXG5leHBhbmRfbW9yZVwiIHx8IGFycm93RGlyZWN0aW9uID09PSBcImV4cGFuZF9tb3JlXCIpIHJldHVybiBhcnJvd0ljb24uaW5uZXJUZXh0ID0gXCJleHBhbmRfbGVzc1wiXG4gICAgZWxzZSByZXR1cm4gYXJyb3dJY29uLmlubmVyVGV4dCA9IFwiZXhwYW5kX21vcmVcIjtcbn1cblxuZnVuY3Rpb24gYWRkVG9Qcm9qZWN0TGlzdChhcnIpIHtcbiAgICBjb25zdCBjb21wbGV0ZWRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIik7XG4gICAgY29tcGxldGVkTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgYXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5ldy1wcm9qZWN0LWNvblwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RCdXR0b25zKCkpO1xuICAgICAgICBjb21wbGV0ZWRMaXN0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RDb250YWluZXIpO1xuICAgIH0pXG4gICAgcmV0dXJuIGNvbXBsZXRlZExpc3Q7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKGFycikge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRhc2stbGlzdFwiKTtcbiAgICBjbGVhclRhc2tMaXN0KCk7XG4gICAgYXJyLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdFRhc2suY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YXNrJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RUYXNrTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RUYXNrTGVmdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YXNrLWxlZnRcIik7XG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YXNrLWRlc2NcIik7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2s7XG4gICAgICAgIHByb2plY3RUYXNrTGVmdC5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgICAgIHByb2plY3RUYXNrTGVmdC5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICAgICAgICBwcm9qZWN0VGFzay5hcHBlbmRDaGlsZChwcm9qZWN0VGFza0xlZnQpO1xuICAgICAgICBwcm9qZWN0VGFzay5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0QnV0dG9ucygpKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XG4gICAgICAgIHJldHVybiB0YXNrTGlzdC5pbnNlcnRCZWZvcmUocHJvamVjdFRhc2ssIGFkZFRhc2tCdG4pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdChwcm9qZWN0T2JqKSB7XG4gICAgY2xlYXJUYXNrTGlzdCgpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1oZFwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0T2JqLnRpdGxlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWhkLWRlc2NcIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0T2JqLmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4taGQtZGF0ZS11c2VyXCIpO1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSBwcm9qZWN0T2JqLmR1ZURhdGU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4taGQtcHJpb3JpdHktdXNlclwiKTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHByb2plY3RPYmoucHJpb3JpdHk7XG4gICAgcHJpb3JpdHkuc3R5bGUuY29sb3IgPSBjaGFuZ2VQcmlvcml0eUNvbG9yKHByb2plY3RPYmoucHJpb3JpdHkpO1xuXG4gICAgLy9pdGVyYXRlIHRocm91Z2ggcHJvamVjdCB0aXRsZSBlbGVtZW50IHRoYXQgY29udGFpbnMgcHJvamVjdCB0aXRsZVxuICAgIGZvciAoY29uc3QgYSBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtdGl0bGVcIikpIHtcbiAgICAgICAgaWYoYS50ZXh0Q29udGVudC5pbmNsdWRlcyhwcm9qZWN0T2JqLnRpdGxlKSkge1xuICAgICAgICAgICAgYS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImNvbG9yOiB3aGl0ZTsgb3BhY2l0eTogMTtcIik7XG4gICAgICAgICAgICBhLnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjk2KVwiO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBhLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiY29sb3I6ICNFQkVCRUI7IG9wYWNpdHk6IC41O1wiKTtcbiAgICAgICAgICAgIGEucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QoKSB7XG4gICAgaWYocHJvamVjdEFyci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWhkLWNvblwiKTtcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjYuMTVyZW1cIjtcbiAgICAgICAgcmV0dXJuIGhlYWRlckNvbnRhaW5lcjtcbiAgICB9ZWxzZSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1oZFwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdEFyclswXS50aXRsZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4taGQtZGVzY1wiKTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWhkLWRhdGUtdXNlclwiKTtcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHByb2plY3RBcnJbMF0uZHVlRGF0ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4taGQtcHJpb3JpdHktdXNlclwiKTtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyWzBdLnByaW9yaXR5O1xuICAgICAgICBwcmlvcml0eS5zdHlsZS5jb2xvciA9IGNoYW5nZVByaW9yaXR5Q29sb3IocHJvamVjdEFyclswXS5wcmlvcml0eSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VQcmlvcml0eUNvbG9yKHByaW9yaXR5KSB7XG4gICAgaWYocHJpb3JpdHkgPT09IFwiTG93XCIpIHJldHVybiBcImdyZWVuXCI7XG4gICAgZWxzZSBpZihwcmlvcml0eSA9PT0gXCJNZWRpdW1cIikgcmV0dXJuIFwieWVsbG93XCI7XG4gICAgZWxzZSByZXR1cm4gXCJyZWRcIjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idG5cIik7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVwiKTtcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJlZGl0XCI7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcbiAgICBwcm9qZWN0QnRuLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIHByb2plY3RCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICByZXR1cm4gcHJvamVjdEJ0bjtcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrTGlzdCgpIHtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10YXNrLWxpc3RcIik7XG4gICAgY29uc3QgcHJvamVjdFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtdGFza1wiKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdFRhc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGFza0xpc3QucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRhc2tcIikpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza0xpc3Q7XG59XG5cbmV4cG9ydCB7ZGlzcGxheUNvbXBsZXRlZExpc3QsIGNoYW5nZUFycm93LCBhZGRUb1Byb2plY3RMaXN0LCBkaXNwbGF5UHJvamVjdCwgZGlzcGxheVRhc2ssIHJlbW92ZVByb2plY3R9OyIsImltcG9ydCB7IGFkZFRvVGFza0xpc3QsIGRpc3BsYXlUYXNrIH0gZnJvbSBcIi4vVUlcIjtcblxubGV0IHRhc2tBcnIgPSBbXTtcblxuZnVuY3Rpb24gdGFza01vZGFsKCkge1xuICAgIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1tb2RhbFwiKTtcbiAgICB0YXNrTW9kYWwuc2hvd01vZGFsKCk7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY2xvc2VcIik7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIHRhc2tNb2RhbC5jbG9zZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiB0YXNrTW9kYWw7XG59XG5cbmZ1bmN0aW9uIHRhc2tGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybVwiKTtcbiAgICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbW9kYWxcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4taGRcIik7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGlmKCFjaGVja1Rhc2tBcnJheSh0aXRsZS50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB1c2VyVGFzayh0aXRsZS50ZXh0Q29udGVudCwgW2Rlc2NyaXB0aW9uLnZhbHVlXSk7XG4gICAgICAgICAgICB0YXNrQXJyLnB1c2gobmV3VGFzayk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSB0YXNrQXJyLmZpbmRJbmRleCh0YXNrID0+IHRhc2sucHJvamVjdCA9PT0gdGl0bGUudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgZGlzcGxheVRhc2sodGFza0Fycltwcm9qZWN0SW5kZXhdLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gdGFza0Fyci5maW5kSW5kZXgodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHRpdGxlLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIHRhc2tBcnJbcHJvamVjdEluZGV4XS5kZXNjcmlwdGlvbi5wdXNoKGRlc2NyaXB0aW9uLnZhbHVlKTsgXG4gICAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrQXJyW3Byb2plY3RJbmRleF0uZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFkZFRvVGFza0xpc3QodGFza0Fycik7XG4gICAgICAgIHRhc2tNb2RhbC5jbG9zZSgpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2tBcnIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrQXJyWzBdLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRhc2tBcnI7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFzayhpbmRleCwgbmV3VGl0bGUpIHtcbiAgICB0YXNrQXJyW2luZGV4XS5wcm9qZWN0ID0gbmV3VGl0bGU7XG4gICAgZGlzcGxheVRhc2sodGFza0FycltpbmRleF0uZGVzY3JpcHRpb24pO1xuICAgIGNvbnNvbGUubG9nKHRhc2tBcnJbaW5kZXhdKTtcbiAgICByZXR1cm4gdGFza0Fycjtcbn1cblxuZnVuY3Rpb24gY2hlY2tUYXNrQXJyYXkodGl0bGUpIHtcbiAgICBpZih0YXNrQXJyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIGZvcihsZXQgeCA9IDA7IHggPCB0YXNrQXJyLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGlmKHRhc2tBcnJbeF0ucHJvamVjdCA9PT0gdGl0bGUpIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuY29uc3QgdXNlclRhc2sgPSAocHJvamVjdCwgZGVzY3JpcHRpb24pID0+IHtcbiAgICByZXR1cm4ge3Byb2plY3QsIGRlc2NyaXB0aW9ufTtcbn0gXG5cbmV4cG9ydCB7dGFza01vZGFsLCB0YXNrRm9ybSwgdGFza0FyciwgdXBkYXRlVGFza307IiwiaW1wb3J0IHsgYWRkVG9Qcm9qZWN0TGlzdCwgZGlzcGxheVByb2plY3QgfSBmcm9tIFwiLi9VSVwiO1xuaW1wb3J0IHsgdXBkYXRlVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcblxubGV0IHByb2plY3RBcnIgPSBbXTtcblxuZnVuY3Rpb24gcHJvamVjdE1vZGFsKCkge1xuICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RhbFwiKTtcbiAgICBwcm9qZWN0TW9kYWwuc2hvd01vZGFsKCk7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY2xvc2VcIik7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvamVjdE1vZGFsLmNsb3NlKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2plY3RNb2RhbDtcbn1cblxuZnVuY3Rpb24gcHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xuICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RhbFwiKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIik7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGVcIik7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IFwiTG93XCI7XG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RhbCAjbWVkaXVtXCIpLmNoZWNrZWQpIHByaW9yaXR5ID0gXCJNZWRpdW1cIjtcbiAgICAgICAgZWxzZSBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbW9kYWwgI2hpZ2hcIikuY2hlY2tlZCkgcHJpb3JpdHkgPSBcIkhpZ2hcIjtcbiAgICAgICAgZWxzZSBwcmlvcml0eTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHVzZXJQcm9qZWN0KHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkpO1xuICAgICAgICBwcm9qZWN0QXJyLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIGFkZFRvUHJvamVjdExpc3QocHJvamVjdEFycik7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICBwcm9qZWN0TW9kYWwuY2xvc2UoKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0QXJyKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RBcnI7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRNb2RhbCgpIHtcbiAgICBjb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtbW9kYWxcIik7XG4gICAgZWRpdE1vZGFsLnNob3dNb2RhbCgpO1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWNsb3NlXCIpO1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGVkaXRNb2RhbC5jbG9zZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBlZGl0TW9kYWw7XG59XG5cbmZ1bmN0aW9uIGVkaXRGb3JtKHByb2plY3RJbmRleCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtZm9ybVwiKTtcbiAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtbW9kYWxcIik7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtdGl0bGVcIik7XG4gICAgICAgIHByb2plY3RBcnJbcHJvamVjdEluZGV4XS50aXRsZSA9IHRpdGxlLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgcHJvamVjdEFycltwcm9qZWN0SW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtZHVlLWRhdGVcIik7XG4gICAgICAgIHByb2plY3RBcnJbcHJvamVjdEluZGV4XS5kdWVEYXRlID0gZHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gXCJMb3dcIjtcbiAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LW1vZGFsICNtZWRpdW1cIikuY2hlY2tlZCkgcHJpb3JpdHkgPSBcIk1lZGl1bVwiO1xuICAgICAgICBlbHNlIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1tb2RhbCAjaGlnaFwiKS5jaGVja2VkKSBwcmlvcml0eSA9IFwiSGlnaFwiO1xuICAgICAgICBlbHNlIHByaW9yaXR5O1xuICAgICAgICBwcm9qZWN0QXJyW3Byb2plY3RJbmRleF0ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9qZWN0LW1vZHVsZVwiKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdEFycik7XG4gICAgICAgIGFkZFRvUHJvamVjdExpc3QocHJvamVjdEFycik7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3RBcnJbcHJvamVjdEluZGV4XSk7XG4gICAgICAgIHVwZGF0ZVRhc2socHJvamVjdEluZGV4LCBwcm9qZWN0QXJyW3Byb2plY3RJbmRleF0udGl0bGUpO1xuICAgICAgICBwcm9qZWN0TW9kYWwuY2xvc2UoKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICByZXR1cm4gcHJvamVjdEFycjtcbiAgICB9LCB7b25jZTogdHJ1ZX0pOyAvL3ByZXZlbnQgZm9ybSBmcm9tIHN1Ym1pdHRpbmcgdHdpY2Ugd2hlbiBlZGl0aW5nIG1vcmUgdGhhbiBvbmNlXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdEluZGV4KSB7XG4gICAgcmV0dXJuIHByb2plY3RBcnIuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG59XG5cbmNvbnN0IHVzZXJQcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHl9O1xufSBcblxuXG5leHBvcnQge3Byb2plY3RNb2RhbCwgcHJvamVjdEZvcm0sIHByb2plY3RBcnIsIGVkaXRNb2RhbCwgZWRpdEZvcm0sIGRlbGV0ZVByb2plY3R9OyIsImltcG9ydCB7IHByb2plY3RNb2RhbCwgcHJvamVjdEZvcm0sIHByb2plY3RBcnIsIGVkaXRNb2RhbCwgZWRpdEZvcm0sIGRlbGV0ZVByb2plY3R9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHRhc2tNb2RhbCwgdGFza0Zvcm0sIHRhc2tBcnIsIHVwZGF0ZVRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyBkaXNwbGF5Q29tcGxldGVkTGlzdCwgY2hhbmdlQXJyb3csIGRpc3BsYXlQcm9qZWN0LCBkaXNwbGF5VGFzaywgcmVtb3ZlUHJvamVjdH0gZnJvbSBcIi4vVUlcIjtcblxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcHJvamVjdE1vZGFsKCk7XG59KTtcblxucHJvamVjdEZvcm0oKTtcbnRhc2tGb3JtKCk7XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWxpc3RcIik7XG5wcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdEFycik7XG4gICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBcIlwiO1xuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QudmFsdWUgPT09IFwicHJvamVjdC10aXRsZVwiKSB7XG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUgPSBlLnRhcmdldC5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50O1xuICAgICAgICB9ZWxzZSBpZihlLnRhcmdldC5jbGFzc0xpc3QudmFsdWUgPT09IFwibmV3LXByb2plY3QtY29uXCIpIHtcbiAgICAgICAgICAgIHByb2plY3RUaXRsZSA9IGUudGFyZ2V0LmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQ7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RUaXRsZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RBcnIuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC50aXRsZSA9PT0gcHJvamVjdFRpdGxlKTtcbiAgICAgICAgZGlzcGxheVByb2plY3QocHJvamVjdEFycltwcm9qZWN0SW5kZXhdKTtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gdGFza0Fyci5maW5kSW5kZXgodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHByb2plY3RUaXRsZSk7XG4gICAgICAgIGlmKHRhc2tJbmRleCAhPT0gLTEpIGRpc3BsYXlUYXNrKHRhc2tBcnJbdGFza0luZGV4XS5kZXNjcmlwdGlvbik7XG4gICAgfSlcbn0pXG5cbmNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtbGlzdFwiKTtcbnByb2plY3RCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LnZhbHVlID09PSBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIGVkaXRcIikge1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RBcnIuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC50aXRsZSA9PT0gdGl0bGUpO1xuICAgICAgICAgICAgY29uc3QgdGFza0luZGV4ID0gdGFza0Fyci5maW5kSW5kZXgodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHRpdGxlKTtcbiAgICAgICAgICAgIGVkaXRNb2RhbCgpO1xuICAgICAgICAgICAgZWRpdEZvcm0ocHJvamVjdEluZGV4KTtcbiAgICAgICAgICAgIC8vIHVwZGF0ZVRhc2sodGFza0luZGV4LCB0aXRsZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluZGV4IG1vZHVsZVwiKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RBcnIpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdEFycltwcm9qZWN0SW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QudmFsdWUgPT09IFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgZGVsZXRlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0QXJyLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QudGl0bGUgPT09IHRpdGxlKTtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdEluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIik7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0QXJyKTtcbiAgICAgICAgfVxuICAgIH0pXG59KVxuXG5jb25zdCBhZGRUYXNrYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcbmFkZFRhc2tidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrTW9kYWwoKTtcbn0pO1xuXG5jb25zdCBjb21wbGV0ZWRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXBsZXRlZC10YWJcIik7XG5jb21wbGV0ZWRUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgaW5uZXJUZXh0ID0gZS50YXJnZXQuaW5uZXJUZXh0O1xuICAgIGlmKGlubmVyVGV4dCA9PT0gXCJDb21wbGV0ZWRcXG5leHBhbmRfbW9yZVwiIHx8IGlubmVyVGV4dCA9PT0gXCJleHBhbmRfbW9yZVwiKSB7XG4gICAgICAgIGNoYW5nZUFycm93KGlubmVyVGV4dCk7XG4gICAgICAgIGRpc3BsYXlDb21wbGV0ZWRMaXN0KGlubmVyVGV4dCk7XG4gICAgfWVsc2Uge1xuICAgICAgICBjaGFuZ2VBcnJvdyhpbm5lclRleHQpO1xuICAgICAgICBkaXNwbGF5Q29tcGxldGVkTGlzdChpbm5lclRleHQpO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbImFkZFRvUHJvamVjdExpc3QiLCJhcnIiLCJjb21wbGV0ZWRMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJmb3JFYWNoIiwicHJvamVjdCIsIm5ld1Byb2plY3RDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicHJvamVjdFRpdGxlIiwidGl0bGUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVByb2plY3RCdXR0b25zIiwiZGlzcGxheVRhc2siLCJ0YXNrTGlzdCIsImNsZWFyVGFza0xpc3QiLCJ0YXNrIiwicHJvamVjdFRhc2siLCJwcm9qZWN0VGFza0xlZnQiLCJjaGVja0JveCIsInRhc2tEZXNjcmlwdGlvbiIsImFkZFRhc2tCdG4iLCJpbnNlcnRCZWZvcmUiLCJkaXNwbGF5UHJvamVjdCIsInByb2plY3RPYmoiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsInN0eWxlIiwiY29sb3IiLCJjaGFuZ2VQcmlvcml0eUNvbG9yIiwiYSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmNsdWRlcyIsInNldEF0dHJpYnV0ZSIsInBhcmVudEVsZW1lbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kIiwicHJvamVjdEJ0biIsImVkaXRCdG4iLCJkZWxldGVCdG4iLCJpIiwibGVuZ3RoIiwicmVtb3ZlQ2hpbGQiLCJ0YXNrQXJyIiwicHJvamVjdEFyciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9qZWN0TW9kYWwiLCJzaG93TW9kYWwiLCJjbG9zZSIsImZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJnZXRFbGVtZW50QnlJZCIsImNoZWNrZWQiLCJuZXdQcm9qZWN0IiwidXNlclByb2plY3QiLCJ2YWx1ZSIsInB1c2giLCJyZXNldCIsInByb2plY3RGb3JtIiwidGFza01vZGFsIiwieCIsImNoZWNrVGFza0FycmF5IiwicHJvamVjdEluZGV4IiwiZmluZEluZGV4IiwibmV3VGFzayIsInVzZXJUYXNrIiwidGFza0Zvcm0iLCJ0YXJnZXQiLCJjaGlsZE5vZGVzIiwidGFza0luZGV4IiwiYnRuIiwiZWRpdE1vZGFsIiwiaW5kZXgiLCJuZXdUaXRsZSIsImNvbnNvbGUiLCJsb2ciLCJvbmNlIiwiZWRpdEZvcm0iLCJzcGxpY2UiLCJoZWFkZXJDb250YWluZXIiLCJwYWRkaW5nQm90dG9tIiwicmVtb3ZlUHJvamVjdCIsImlubmVyVGV4dCIsImFycm93RGlyZWN0aW9uIiwicmVtb3ZlIiwiZGlzcGxheUNvbXBsZXRlZExpc3QiXSwic291cmNlUm9vdCI6IiJ9