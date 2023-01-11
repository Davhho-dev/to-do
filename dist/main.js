(()=>{"use strict";function e(e){const t=document.querySelector(".project-task-list"),o=document.querySelectorAll(".project-task");for(let e=0;e<o.length;e++)t.removeChild(document.querySelector(".project-task"));e.forEach((e=>{const o=document.createElement("div");o.classList.add("project-task");const c=document.createElement("div");c.classList.add("project-task-left");const d=document.createElement("div");d.classList.add("checkbox");const r=document.createElement("p");r.classList.add("project-task-desc"),r.textContent=e,c.appendChild(d),c.appendChild(r),o.appendChild(c),o.appendChild(n());const l=document.querySelector(".add-task");return t.insertBefore(o,l)}))}function t(e){!function(){const e=document.querySelector(".project-task-list"),t=document.querySelectorAll(".project-task");for(let n=0;n<t.length;n++)e.removeChild(document.querySelector(".project-task"))}(),document.querySelector(".main-hd").textContent=e.title,document.querySelector(".main-hd-desc").textContent=e.description,document.querySelector(".main-hd-date-user").textContent=e.dueDate;const t=document.querySelector(".main-hd-priority-user");t.textContent=e.priority,t.style.color=function(e){return"Low"===e?"green":"Medium"===e?"yellow":"red"}(e.priority)}function n(){const e=document.createElement("div");e.classList.add("project-btn");const t=document.createElement("span"),n=document.createElement("span");return t.classList.add("material-icons-outlined"),t.classList.add("edit"),n.classList.add("material-icons-outlined"),n.classList.add("delete"),t.textContent="edit",n.textContent="delete",e.appendChild(t),e.appendChild(n),e}let o=[];let c=[];document.querySelector(".add-project").addEventListener("click",(()=>{!function(){const e=document.querySelector(".project-modal");e.showModal(),document.querySelector(".project-close").addEventListener("click",(()=>{e.close()}))}()})),function(){const e=document.querySelector(".project-form"),c=document.querySelector(".project-modal");e.addEventListener("submit",(d=>{d.preventDefault();const r=document.getElementById("title"),l=document.getElementById("description"),s=document.getElementById("due-date");let i="Low";document.getElementById("medium").checked?i="Medium":document.getElementById("high").checked&&(i="High");const u=((e,t,n,o)=>({title:e,description:t,dueDate:n,priority:o}))(r.value,l.value,s.value,i);return o.push(u),function(e){const t=document.querySelector(".project-list");t.textContent="",e.forEach((e=>{const o=document.createElement("div");o.classList.add("new-project-con");const c=document.createElement("p");c.classList.add("project-title"),c.textContent=e.title,o.appendChild(c),o.appendChild(n()),t.appendChild(o)}))}(o),t(u),c.close(),e.reset(),o}))}(),function(){const t=document.querySelector(".task-form"),n=document.querySelector(".task-modal"),o=document.querySelector(".main-hd");t.addEventListener("submit",(d=>{d.preventDefault();const r=document.getElementById("task-description");if(function(e){if(0===c.length)return!1;for(let t=0;t<c.length;t++)if(c[t].project===e)return!0}(o.textContent)){const t=c.findIndex((e=>e.project===o.textContent));c[t].description.push(r.value),e(c[t].description)}else{const t=((e,t)=>({project:e,description:t}))(o.textContent,[r.value]);c.push(t);const n=c.findIndex((e=>e.project===o.textContent));e(c[n].description)}return n.close(),t.reset(),c}))}(),document.querySelectorAll(".project-list").forEach((n=>{n.addEventListener("click",(n=>{const d=n.target.childNodes[0].childNodes[0].textContent,r=o.findIndex((e=>e.title===d));t(o[r]);const l=c.findIndex((e=>e.project===d));-1!==l&&e(c[l].description)}))})),document.querySelector(".add-task").addEventListener("click",(()=>{!function(){const e=document.querySelector(".task-modal");e.showModal(),document.querySelector(".task-close").addEventListener("click",(t=>{e.close()}))}()})),document.querySelector(".completed-tab").addEventListener("click",(e=>{const t=e.target.innerText;var n;n=t,document.querySelector(".completed-tab .material-icons-outlined").innerText="Completed\nexpand_more"===n||"expand_more"===n?"expand_less":"expand_more",function(e){const t=document.querySelector(".completed-list");"Completed\nexpand_more"===e||"expand_more"===e?(document.querySelectorAll(".user-project").forEach((e=>{e.addEventListener("mouseover",(()=>{e.setAttribute("style","background-color: rgba(255, 255, 255, 0.296); border-radius: 5px;")})),e.addEventListener("mouseout",(()=>{e.style.background="none"}))})),t.classList.remove("hidden")):t.classList.add("hidden")}(t)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLElBR012RCxTQUFTQyxjQUFjLGtCQUMvQmtDLGlCQUFpQixTQUFVSyxJQUNwQyxNQUFNMEIsRUFBWTFCLEVBQUV1QixPQUFPRyxVSGhCL0IsSUFBcUJDLElHa0JERCxFSGpCRWxFLFNBQVNDLGNBQWMsMkNBQzREaUUsVUFBL0UsMkJBQW5CQyxHQUFrRSxnQkFBbkJBLEVBQStELGNBQy9FLGNBbkJ0QyxTQUE4QkQsR0FDMUIsTUFBTWxCLEVBQWdCaEQsU0FBU0MsY0FBYyxtQkFDNUIsMkJBQWRpRSxHQUF3RCxnQkFBZEEsR0FDcEJsRSxTQUFTRyxpQkFBaUIsaUJBQ2xDSSxTQUFTMEMsSUFDbEJBLEVBQVFkLGlCQUFpQixhQUFhLEtBQ2xDYyxFQUFRbUIsYUFBYSxRQUFTLG9FQUFvRSxJQUV0R25CLEVBQVFkLGlCQUFpQixZQUFZLEtBQ2pDYyxFQUFRdEIsTUFBTTBDLFdBQWEsTUFBTSxHQUNuQyxJQUVDckIsRUFBY3RDLFVBQVU0RCxPQUFPLFdBQzdCdEIsRUFBY3RDLFVBQVVDLElBQUksU0FDN0MsQ0dxQlE0RCxDQUFxQkwsRUFJekIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBkaXNwbGF5Q29tcGxldGVkTGlzdChpbm5lclRleHQpIHtcbiAgICBjb25zdCBjb21wbGV0ZWRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wbGV0ZWQtbGlzdFwiKTtcbiAgICBpZihpbm5lclRleHQgPT09IFwiQ29tcGxldGVkXFxuZXhwYW5kX21vcmVcIiB8fCBpbm5lclRleHQgPT09IFwiZXhwYW5kX21vcmVcIikge1xuICAgICAgICBjb25zdCBwcm9qZWN0SG92ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVzZXItcHJvamVjdFwiKTtcbiAgICAgICAgcHJvamVjdEhvdmVyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yOTYpOyBib3JkZXItcmFkaXVzOiA1cHg7XCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJub25lXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZExpc3QuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9ZWxzZSByZXR1cm4gY29tcGxldGVkTGlzdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VBcnJvdyhhcnJvd0RpcmVjdGlvbikge1xuICAgIGNvbnN0IGFycm93SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcGxldGVkLXRhYiAubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgaWYoYXJyb3dEaXJlY3Rpb24gPT09IFwiQ29tcGxldGVkXFxuZXhwYW5kX21vcmVcIiB8fCBhcnJvd0RpcmVjdGlvbiA9PT0gXCJleHBhbmRfbW9yZVwiKSByZXR1cm4gYXJyb3dJY29uLmlubmVyVGV4dCA9IFwiZXhwYW5kX2xlc3NcIlxuICAgIGVsc2UgcmV0dXJuIGFycm93SWNvbi5pbm5lclRleHQgPSBcImV4cGFuZF9tb3JlXCI7XG59XG5cbmZ1bmN0aW9uIGFkZFRvUHJvamVjdExpc3QoYXJyKSB7XG4gICAgY29uc3QgY29tcGxldGVkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpO1xuICAgIGNvbXBsZXRlZExpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuZXctcHJvamVjdC1jb25cIik7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGVcIik7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0QnV0dG9ucygpKTtcbiAgICAgICAgY29tcGxldGVkTGlzdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Q29udGFpbmVyKTtcbiAgICB9KVxuICAgIHJldHVybiBjb21wbGV0ZWRMaXN0O1xufVxuXG5mdW5jdGlvbiBhZGRUb1Rhc2tMaXN0KGFycikge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRhc2stbGlzdFwiKTtcbiAgICBjb25zdCBwcm9qZWN0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC10YXNrXCIpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0VGFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICB0YXNrTGlzdC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGFza1wiKSk7XG4gICAgfVxuICAgIGFyci5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBwcm9qZWN0LmRlc2NyaXB0aW9uLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBwcm9qZWN0VGFzay5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YXNrXCIpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRhc2tMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHByb2plY3RUYXNrTGVmdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YXNrLWxlZnRcIik7XG4gICAgICAgICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YXNrLWRlc2NcIik7XG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgICAgICAgcHJvamVjdFRhc2tMZWZ0LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICAgICAgICAgIHByb2plY3RUYXNrTGVmdC5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgcHJvamVjdFRhc2suYXBwZW5kQ2hpbGQocHJvamVjdFRhc2tMZWZ0KTtcbiAgICAgICAgICAgIHByb2plY3RUYXNrLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RCdXR0b25zKCkpO1xuICAgICAgICAgICAgY29uc3QgYWRkVGFza2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XG4gICAgICAgICAgICB0YXNrTGlzdC5pbnNlcnRCZWZvcmUocHJvamVjdFRhc2ssIGFkZFRhc2tidG4pO1xuICAgICAgICAgICAgcmV0dXJuIHRhc2tMaXN0O1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2soYXJyKSB7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGFzay1saXN0XCIpO1xuICAgIGNvbnN0IHByb2plY3RUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LXRhc2tcIik7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RUYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRhc2tMaXN0LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10YXNrXCIpKTtcbiAgICB9XG4gICAgYXJyLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdFRhc2suY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YXNrJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RUYXNrTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RUYXNrTGVmdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YXNrLWxlZnRcIik7XG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YXNrLWRlc2NcIik7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2s7XG4gICAgICAgIHByb2plY3RUYXNrTGVmdC5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgICAgIHByb2plY3RUYXNrTGVmdC5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICAgICAgICBwcm9qZWN0VGFzay5hcHBlbmRDaGlsZChwcm9qZWN0VGFza0xlZnQpO1xuICAgICAgICBwcm9qZWN0VGFzay5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0QnV0dG9ucygpKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XG4gICAgICAgIHJldHVybiB0YXNrTGlzdC5pbnNlcnRCZWZvcmUocHJvamVjdFRhc2ssIGFkZFRhc2tCdG4pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdChwcm9qZWN0T2JqKSB7XG4gICAgY2xlYXJUYXNrTGlzdCgpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1oZFwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0T2JqLnRpdGxlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWhkLWRlc2NcIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0T2JqLmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4taGQtZGF0ZS11c2VyXCIpO1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSBwcm9qZWN0T2JqLmR1ZURhdGU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4taGQtcHJpb3JpdHktdXNlclwiKTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHByb2plY3RPYmoucHJpb3JpdHk7XG4gICAgcHJpb3JpdHkuc3R5bGUuY29sb3IgPSBjaGFuZ2VQcmlvcml0eUNvbG9yKHByb2plY3RPYmoucHJpb3JpdHkpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VQcmlvcml0eUNvbG9yKHByaW9yaXR5KSB7XG4gICAgaWYocHJpb3JpdHkgPT09IFwiTG93XCIpIHJldHVybiBcImdyZWVuXCI7XG4gICAgZWxzZSBpZihwcmlvcml0eSA9PT0gXCJNZWRpdW1cIikgcmV0dXJuIFwieWVsbG93XCI7XG4gICAgZWxzZSByZXR1cm4gXCJyZWRcIjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idG5cIik7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVwiKTtcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJlZGl0XCI7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcbiAgICBwcm9qZWN0QnRuLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIHByb2plY3RCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICByZXR1cm4gcHJvamVjdEJ0bjtcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrTGlzdCgpIHtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10YXNrLWxpc3RcIik7XG4gICAgY29uc3QgcHJvamVjdFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtdGFza1wiKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdFRhc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGFza0xpc3QucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRhc2tcIikpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza0xpc3Q7XG59XG5cbmV4cG9ydCB7ZGlzcGxheUNvbXBsZXRlZExpc3QsIGNoYW5nZUFycm93LCBhZGRUb1Byb2plY3RMaXN0LCBkaXNwbGF5UHJvamVjdCwgZGlzcGxheVRhc2t9OyIsImltcG9ydCB7IGFkZFRvUHJvamVjdExpc3QsIGRpc3BsYXlQcm9qZWN0IH0gZnJvbSBcIi4vVUlcIjtcblxubGV0IHByb2plY3RBcnIgPSBbXTtcblxuZnVuY3Rpb24gcHJvamVjdE1vZGFsKCkge1xuICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RhbFwiKTtcbiAgICBwcm9qZWN0TW9kYWwuc2hvd01vZGFsKCk7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY2xvc2VcIik7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvamVjdE1vZGFsLmNsb3NlKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2plY3RNb2RhbDtcbn1cblxuZnVuY3Rpb24gcHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xuICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RhbFwiKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIik7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGVcIik7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IFwiTG93XCI7XG4gICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVkaXVtXCIpLmNoZWNrZWQpIHByaW9yaXR5ID0gXCJNZWRpdW1cIjtcbiAgICAgICAgZWxzZSBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2hcIikuY2hlY2tlZCkgcHJpb3JpdHkgPSBcIkhpZ2hcIjtcbiAgICAgICAgZWxzZSBwcmlvcml0eTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHVzZXJQcm9qZWN0KHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkpO1xuICAgICAgICBwcm9qZWN0QXJyLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIGFkZFRvUHJvamVjdExpc3QocHJvamVjdEFycik7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICBwcm9qZWN0TW9kYWwuY2xvc2UoKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0QXJyKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RBcnI7XG4gICAgfSk7XG59XG5cbmNvbnN0IHVzZXJQcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHl9O1xufSBcblxuXG5leHBvcnQge3Byb2plY3RNb2RhbCwgcHJvamVjdEZvcm0sIHByb2plY3RBcnJ9OyIsImltcG9ydCB7IGFkZFRvVGFza0xpc3QsIGRpc3BsYXlUYXNrIH0gZnJvbSBcIi4vVUlcIjtcblxubGV0IHRhc2tBcnIgPSBbXTtcblxuZnVuY3Rpb24gdGFza01vZGFsKCkge1xuICAgIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1tb2RhbFwiKTtcbiAgICB0YXNrTW9kYWwuc2hvd01vZGFsKCk7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY2xvc2VcIik7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIHRhc2tNb2RhbC5jbG9zZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiB0YXNrTW9kYWw7XG59XG5cbmZ1bmN0aW9uIHRhc2tGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybVwiKTtcbiAgICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbW9kYWxcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4taGRcIik7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGlmKCFjaGVja1Rhc2tBcnJheSh0aXRsZS50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB1c2VyVGFzayh0aXRsZS50ZXh0Q29udGVudCwgW2Rlc2NyaXB0aW9uLnZhbHVlXSk7XG4gICAgICAgICAgICB0YXNrQXJyLnB1c2gobmV3VGFzayk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSB0YXNrQXJyLmZpbmRJbmRleCh0YXNrID0+IHRhc2sucHJvamVjdCA9PT0gdGl0bGUudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgZGlzcGxheVRhc2sodGFza0Fycltwcm9qZWN0SW5kZXhdLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gdGFza0Fyci5maW5kSW5kZXgodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHRpdGxlLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIHRhc2tBcnJbcHJvamVjdEluZGV4XS5kZXNjcmlwdGlvbi5wdXNoKGRlc2NyaXB0aW9uLnZhbHVlKTsgXG4gICAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrQXJyW3Byb2plY3RJbmRleF0uZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFkZFRvVGFza0xpc3QodGFza0Fycik7XG4gICAgICAgIHRhc2tNb2RhbC5jbG9zZSgpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2tBcnIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrQXJyWzBdLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRhc2tBcnI7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY2hlY2tUYXNrQXJyYXkodGl0bGUpIHtcbiAgICBpZih0YXNrQXJyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIGZvcihsZXQgeCA9IDA7IHggPCB0YXNrQXJyLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGlmKHRhc2tBcnJbeF0ucHJvamVjdCA9PT0gdGl0bGUpIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuY29uc3QgdXNlclRhc2sgPSAocHJvamVjdCwgZGVzY3JpcHRpb24pID0+IHtcbiAgICByZXR1cm4ge3Byb2plY3QsIGRlc2NyaXB0aW9ufTtcbn0gXG5cbmV4cG9ydCB7dGFza01vZGFsLCB0YXNrRm9ybSwgdGFza0Fycn07IiwiaW1wb3J0IHsgcHJvamVjdE1vZGFsLCBwcm9qZWN0Rm9ybSwgcHJvamVjdEFycn0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgdGFza01vZGFsLCB0YXNrRm9ybSwgdGFza0FyciB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IGRpc3BsYXlDb21wbGV0ZWRMaXN0LCBjaGFuZ2VBcnJvdywgZGlzcGxheVByb2plY3QsIGRpc3BsYXlUYXNrfSBmcm9tIFwiLi9VSVwiO1xuXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwcm9qZWN0TW9kYWwoKTtcbn0pO1xuXG5wcm9qZWN0Rm9ybSgpO1xudGFza0Zvcm0oKTtcblxuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtbGlzdFwiKTtcbnByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBlLnRhcmdldC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RBcnIuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC50aXRsZSA9PT0gcHJvamVjdFRpdGxlKTtcbiAgICAgICAgZGlzcGxheVByb2plY3QocHJvamVjdEFycltwcm9qZWN0SW5kZXhdKTtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gdGFza0Fyci5maW5kSW5kZXgodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHByb2plY3RUaXRsZSk7XG4gICAgICAgIGlmKHRhc2tJbmRleCAhPT0gLTEpIGRpc3BsYXlUYXNrKHRhc2tBcnJbdGFza0luZGV4XS5kZXNjcmlwdGlvbik7XG4gICAgICAgIC8vIGlmKHRhc2tBcnIpIGRpc3BsYXlUYXNrKHRhc2tBcnJbdGFza0luZGV4XS5kZXNjcmlwdGlvbik7XG4gICAgfSlcbn0pXG5cblxuY29uc3QgYWRkVGFza2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XG5hZGRUYXNrYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza01vZGFsKCk7XG59KTtcblxuY29uc3QgY29tcGxldGVkVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wbGV0ZWQtdGFiXCIpO1xuY29tcGxldGVkVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IGlubmVyVGV4dCA9IGUudGFyZ2V0LmlubmVyVGV4dDtcbiAgICBpZihpbm5lclRleHQgPT09IFwiQ29tcGxldGVkXFxuZXhwYW5kX21vcmVcIiB8fCBpbm5lclRleHQgPT09IFwiZXhwYW5kX21vcmVcIikge1xuICAgICAgICBjaGFuZ2VBcnJvdyhpbm5lclRleHQpO1xuICAgICAgICBkaXNwbGF5Q29tcGxldGVkTGlzdChpbm5lclRleHQpO1xuICAgIH1lbHNlIHtcbiAgICAgICAgY2hhbmdlQXJyb3coaW5uZXJUZXh0KTtcbiAgICAgICAgZGlzcGxheUNvbXBsZXRlZExpc3QoaW5uZXJUZXh0KTtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkaXNwbGF5VGFzayIsImFyciIsInRhc2tMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJvamVjdFRhc2siLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsInJlbW92ZUNoaWxkIiwiZm9yRWFjaCIsInRhc2siLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicHJvamVjdFRhc2tMZWZ0IiwiY2hlY2tCb3giLCJ0YXNrRGVzY3JpcHRpb24iLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlUHJvamVjdEJ1dHRvbnMiLCJhZGRUYXNrQnRuIiwiaW5zZXJ0QmVmb3JlIiwiZGlzcGxheVByb2plY3QiLCJwcm9qZWN0T2JqIiwiY2xlYXJUYXNrTGlzdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJzdHlsZSIsImNvbG9yIiwiY2hhbmdlUHJpb3JpdHlDb2xvciIsInByb2plY3RCdG4iLCJlZGl0QnRuIiwiZGVsZXRlQnRuIiwicHJvamVjdEFyciIsInRhc2tBcnIiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvamVjdE1vZGFsIiwic2hvd01vZGFsIiwiY2xvc2UiLCJmb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGVja2VkIiwibmV3UHJvamVjdCIsInVzZXJQcm9qZWN0IiwidmFsdWUiLCJwdXNoIiwiY29tcGxldGVkTGlzdCIsInByb2plY3QiLCJuZXdQcm9qZWN0Q29udGFpbmVyIiwicHJvamVjdFRpdGxlIiwiYWRkVG9Qcm9qZWN0TGlzdCIsInJlc2V0IiwicHJvamVjdEZvcm0iLCJ0YXNrTW9kYWwiLCJ4IiwiY2hlY2tUYXNrQXJyYXkiLCJwcm9qZWN0SW5kZXgiLCJmaW5kSW5kZXgiLCJuZXdUYXNrIiwidXNlclRhc2siLCJ0YXNrRm9ybSIsInRhcmdldCIsImNoaWxkTm9kZXMiLCJ0YXNrSW5kZXgiLCJpbm5lclRleHQiLCJhcnJvd0RpcmVjdGlvbiIsInNldEF0dHJpYnV0ZSIsImJhY2tncm91bmQiLCJyZW1vdmUiLCJkaXNwbGF5Q29tcGxldGVkTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=