(()=>{"use strict";let e=[];document.querySelector(".add-project").addEventListener("click",(()=>{!function(){const e=document.querySelector(".project-modal");e.showModal(),document.querySelector(".project-close").addEventListener("click",(()=>{e.close()}))}()})),function(){const t=document.querySelector(".project-form"),n=document.querySelector(".project-modal");t.addEventListener("submit",(o=>{o.preventDefault();const d=document.getElementById("title"),c=document.getElementById("description"),r=document.getElementById("due-date");let l="Low";document.getElementById("medium").checked?l="Medium":document.getElementById("high").checked&&(l="High");const s=((e,t,n,o)=>({title:e,description:t,dueDate:n,priority:o}))(d.value,c.value,r.value,l);e.push(s),function(e){const t=document.querySelector(".project-list");t.textContent="",e.forEach((e=>{const n=document.createElement("div");n.classList.add("new-project-con");const o=document.createElement("p");o.classList.add("project-title"),o.textContent=e.title,n.appendChild(o),n.appendChild(function(){const e=document.createElement("div");e.classList.add("project-btn");const t=document.createElement("span"),n=document.createElement("span");return t.classList.add("material-icons-outlined"),t.classList.add("edit"),n.classList.add("material-icons-outlined"),n.classList.add("delete"),t.textContent="edit",n.textContent="delete",e.appendChild(t),e.appendChild(n),e}()),t.appendChild(n)}))}(e),function(e){document.querySelector(".main-hd").textContent=e.title,document.querySelector(".main-hd-desc").textContent=e.description,document.querySelector(".main-hd-date-user").textContent=e.dueDate;const t=document.querySelector(".main-hd-priority-user");t.textContent=e.priority,t.style.color=function(e){return"Low"===e?"green":"Medium"===e?"yellow":"red"}(e.priority)}(s),n.close(),t.reset(),console.log(e)}))}(),document.querySelector(".add-task").addEventListener("click",(()=>{!function(){const e=document.querySelector(".task-modal");e.showModal(),document.querySelector(".task-close").addEventListener("click",(t=>{e.close()}))}()})),document.querySelector(".completed-tab").addEventListener("click",(e=>{const t=e.target.innerText;var n;n=t,document.querySelector(".completed-tab .material-icons-outlined").innerText="Completed\nexpand_more"===n||"expand_more"===n?"expand_less":"expand_more",function(e){const t=document.querySelector(".completed-list");"Completed\nexpand_more"===e||"expand_more"===e?(document.querySelectorAll(".user-project").forEach((e=>{e.addEventListener("mouseover",(()=>{e.setAttribute("style","background-color: rgba(255, 255, 255, 0.296); border-radius: 5px;")})),e.addEventListener("mouseout",(()=>{e.style.background="none"}))})),t.classList.remove("hidden")):t.classList.add("hidden")}(t)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkMsaUJBQWlCLFNBQVVLLElBQ3BDLE1BQU1zQyxFQUFZdEMsRUFBRXVDLE9BQU9ELFVDRi9CLElBQXFCRSxJRElERixFQ0hFN0MsU0FBU0MsY0FBYywyQ0FDNEQ0QyxVQUEvRSwyQkFBbkJFLEdBQWtFLGdCQUFuQkEsRUFBK0QsY0FDL0UsY0FuQnRDLFNBQThCRixHQUMxQixNQUFNekIsRUFBZ0JwQixTQUFTQyxjQUFjLG1CQUM1QiwyQkFBZDRDLEdBQXdELGdCQUFkQSxHQUNwQjdDLFNBQVNnRCxpQkFBaUIsaUJBQ2xDMUIsU0FBU0MsSUFDbEJBLEVBQVFyQixpQkFBaUIsYUFBYSxLQUNsQ3FCLEVBQVEwQixhQUFhLFFBQVMsb0VBQW9FLElBRXRHMUIsRUFBUXJCLGlCQUFpQixZQUFZLEtBQ2pDcUIsRUFBUWEsTUFBTWMsV0FBYSxNQUFNLEdBQ25DLElBRUM5QixFQUFjTSxVQUFVeUIsT0FBTyxXQUM3Qi9CLEVBQWNNLFVBQVVDLElBQUksU0FDN0MsQ0RPUXlCLENBQXFCUCxFQUl6QixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZFRvUHJvamVjdExpc3QsIGRpc3BsYXlQcm9qZWN0IH0gZnJvbSBcIi4vVUlcIjtcblxubGV0IHByb2plY3RBcnIgPSBbXTtcblxuZnVuY3Rpb24gcHJvamVjdE1vZGFsKCkge1xuICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RhbFwiKTtcbiAgICBwcm9qZWN0TW9kYWwuc2hvd01vZGFsKCk7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY2xvc2VcIik7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvamVjdE1vZGFsLmNsb3NlKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2plY3RNb2RhbDtcbn1cblxuZnVuY3Rpb24gcHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xuICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RhbFwiKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIik7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGVcIik7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IFwiTG93XCI7XG4gICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVkaXVtXCIpLmNoZWNrZWQpIHByaW9yaXR5ID0gXCJNZWRpdW1cIjtcbiAgICAgICAgZWxzZSBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2hcIikuY2hlY2tlZCkgcHJpb3JpdHkgPSBcIkhpZ2hcIjtcbiAgICAgICAgZWxzZSBwcmlvcml0eTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHVzZXJQcm9qZWN0KHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkpO1xuICAgICAgICBwcm9qZWN0QXJyLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIGFkZFRvUHJvamVjdExpc3QocHJvamVjdEFycik7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICBwcm9qZWN0TW9kYWwuY2xvc2UoKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyKTtcbiAgICB9KTtcbn1cblxuY29uc3QgdXNlclByb2plY3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eX07XG59IFxuXG5cbmV4cG9ydCB7cHJvamVjdE1vZGFsLCBwcm9qZWN0Rm9ybX07IiwiaW1wb3J0IHsgcHJvamVjdE1vZGFsLCBwcm9qZWN0Rm9ybSB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHRhc2tNb2RhbCB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IGRpc3BsYXlDb21wbGV0ZWRMaXN0LCBjaGFuZ2VBcnJvdyB9IGZyb20gXCIuL1VJXCI7XG5cbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RNb2RhbCgpO1xufSk7XG5cbnByb2plY3RGb3JtKCk7XG5cbmNvbnN0IGFkZFRhc2tidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xuYWRkVGFza2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tNb2RhbCgpO1xufSk7XG5cbmNvbnN0IGNvbXBsZXRlZFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcGxldGVkLXRhYlwiKTtcbmNvbXBsZXRlZFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCBpbm5lclRleHQgPSBlLnRhcmdldC5pbm5lclRleHQ7XG4gICAgaWYoaW5uZXJUZXh0ID09PSBcIkNvbXBsZXRlZFxcbmV4cGFuZF9tb3JlXCIgfHwgaW5uZXJUZXh0ID09PSBcImV4cGFuZF9tb3JlXCIpIHtcbiAgICAgICAgY2hhbmdlQXJyb3coaW5uZXJUZXh0KTtcbiAgICAgICAgZGlzcGxheUNvbXBsZXRlZExpc3QoaW5uZXJUZXh0KTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIGNoYW5nZUFycm93KGlubmVyVGV4dCk7XG4gICAgICAgIGRpc3BsYXlDb21wbGV0ZWRMaXN0KGlubmVyVGV4dCk7XG4gICAgfVxufSk7XG4iLCJmdW5jdGlvbiBkaXNwbGF5Q29tcGxldGVkTGlzdChpbm5lclRleHQpIHtcbiAgICBjb25zdCBjb21wbGV0ZWRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wbGV0ZWQtbGlzdFwiKTtcbiAgICBpZihpbm5lclRleHQgPT09IFwiQ29tcGxldGVkXFxuZXhwYW5kX21vcmVcIiB8fCBpbm5lclRleHQgPT09IFwiZXhwYW5kX21vcmVcIikge1xuICAgICAgICBjb25zdCBwcm9qZWN0SG92ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVzZXItcHJvamVjdFwiKTtcbiAgICAgICAgcHJvamVjdEhvdmVyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yOTYpOyBib3JkZXItcmFkaXVzOiA1cHg7XCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJub25lXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZExpc3QuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9ZWxzZSByZXR1cm4gY29tcGxldGVkTGlzdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VBcnJvdyhhcnJvd0RpcmVjdGlvbikge1xuICAgIGNvbnN0IGFycm93SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcGxldGVkLXRhYiAubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgaWYoYXJyb3dEaXJlY3Rpb24gPT09IFwiQ29tcGxldGVkXFxuZXhwYW5kX21vcmVcIiB8fCBhcnJvd0RpcmVjdGlvbiA9PT0gXCJleHBhbmRfbW9yZVwiKSByZXR1cm4gYXJyb3dJY29uLmlubmVyVGV4dCA9IFwiZXhwYW5kX2xlc3NcIlxuICAgIGVsc2UgcmV0dXJuIGFycm93SWNvbi5pbm5lclRleHQgPSBcImV4cGFuZF9tb3JlXCI7XG59XG5cbmZ1bmN0aW9uIGFkZFRvUHJvamVjdExpc3QoYXJyKSB7XG4gICAgY29uc3QgY29tcGxldGVkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpO1xuICAgIGNvbXBsZXRlZExpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuZXctcHJvamVjdC1jb25cIik7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGVcIik7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0QnV0dG9ucygpKTtcbiAgICAgICAgY29tcGxldGVkTGlzdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Q29udGFpbmVyKTtcbiAgICB9KVxuICAgIHJldHVybiBjb21wbGV0ZWRMaXN0O1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdChwcm9qZWN0T2JqKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWhkXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3RPYmoudGl0bGU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4taGQtZGVzY1wiKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3RPYmouZGVzY3JpcHRpb247XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1oZC1kYXRlLXVzZXJcIik7XG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IHByb2plY3RPYmouZHVlRGF0ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1oZC1wcmlvcml0eS11c2VyXCIpO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gcHJvamVjdE9iai5wcmlvcml0eTtcbiAgICBwcmlvcml0eS5zdHlsZS5jb2xvciA9IGNoYW5nZVByaW9yaXR5Q29sb3IocHJvamVjdE9iai5wcmlvcml0eSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5Q29sb3IocHJpb3JpdHkpIHtcbiAgICBpZihwcmlvcml0eSA9PT0gXCJMb3dcIikgcmV0dXJuIFwiZ3JlZW5cIjtcbiAgICBlbHNlIGlmKHByaW9yaXR5ID09PSBcIk1lZGl1bVwiKSByZXR1cm4gXCJ5ZWxsb3dcIjtcbiAgICBlbHNlIHJldHVybiBcInJlZFwiO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0QnV0dG9ucygpIHtcbiAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ0blwiKTtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcImVkaXRcIjtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xuICAgIHByb2plY3RCdG4uYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgcHJvamVjdEJ0bi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgIHJldHVybiBwcm9qZWN0QnRuO1xufVxuXG5leHBvcnQge2Rpc3BsYXlDb21wbGV0ZWRMaXN0LCBjaGFuZ2VBcnJvdywgYWRkVG9Qcm9qZWN0TGlzdCwgZGlzcGxheVByb2plY3R9OyIsImZ1bmN0aW9uIHRhc2tNb2RhbCgpIHtcbiAgICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbW9kYWxcIik7XG4gICAgdGFza01vZGFsLnNob3dNb2RhbCgpO1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNsb3NlXCIpO1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICB0YXNrTW9kYWwuY2xvc2UoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFza01vZGFsO1xufVxuXG5leHBvcnQge3Rhc2tNb2RhbH07Il0sIm5hbWVzIjpbInByb2plY3RBcnIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvamVjdE1vZGFsIiwic2hvd01vZGFsIiwiY2xvc2UiLCJmb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGl0bGUiLCJnZXRFbGVtZW50QnlJZCIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwiY2hlY2tlZCIsIm5ld1Byb2plY3QiLCJ1c2VyUHJvamVjdCIsInZhbHVlIiwicHVzaCIsImFyciIsImNvbXBsZXRlZExpc3QiLCJ0ZXh0Q29udGVudCIsImZvckVhY2giLCJwcm9qZWN0IiwibmV3UHJvamVjdENvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJwcm9qZWN0VGl0bGUiLCJhcHBlbmRDaGlsZCIsInByb2plY3RCdG4iLCJlZGl0QnRuIiwiZGVsZXRlQnRuIiwiY3JlYXRlUHJvamVjdEJ1dHRvbnMiLCJhZGRUb1Byb2plY3RMaXN0IiwicHJvamVjdE9iaiIsInN0eWxlIiwiY29sb3IiLCJjaGFuZ2VQcmlvcml0eUNvbG9yIiwiZGlzcGxheVByb2plY3QiLCJyZXNldCIsImNvbnNvbGUiLCJsb2ciLCJwcm9qZWN0Rm9ybSIsInRhc2tNb2RhbCIsImlubmVyVGV4dCIsInRhcmdldCIsImFycm93RGlyZWN0aW9uIiwicXVlcnlTZWxlY3RvckFsbCIsInNldEF0dHJpYnV0ZSIsImJhY2tncm91bmQiLCJyZW1vdmUiLCJkaXNwbGF5Q29tcGxldGVkTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=