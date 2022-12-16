var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};define("dom",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.btnDeleteDeny=t.btnDeleteConfirm=t.deleteCatName=t.deleteCatDialog=t.btnAddCatDeny=t.btnAddCatConfirm=t.addCatMsgBox=t.addCatInputs=t.addCatDialog=t.noEntriesDialog=t.btnAddAction=t.btnEditActions=t.btnDeletetActions=t.catList=t.bgCover=void 0,t.bgCover=document.getElementById("bg-cover"),t.catList=document.getElementById("cat-list"),t.btnDeletetActions=document.getElementsByClassName("delete-action"),t.btnEditActions=document.getElementsByClassName("edit-action"),t.btnAddAction=document.getElementById("add-cat"),t.noEntriesDialog=document.getElementById("no-entries-dialog"),t.addCatDialog=document.getElementById("add-cat-interface-dialog"),t.addCatInputs={name:document.getElementById("add-new-cat-name-input"),color:document.getElementById("add-new-cat-color-input")},t.addCatMsgBox=document.getElementById("add-cat-msg-box"),t.btnAddCatConfirm=document.getElementById("add-cat-confirmed"),t.btnAddCatDeny=document.getElementById("add-cat-denied"),t.deleteCatDialog=document.getElementById("confirm-delete-dialog"),t.deleteCatName=document.getElementById("delete-cat-name"),t.btnDeleteConfirm=document.getElementById("delete-confirmed"),t.btnDeleteDeny=document.getElementById("delete-denied"),t.default={}}),define("helpers",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cat_validator=t.ucfirst=t.normalizeString=t.fallback_empty=t.fallbackEmpty=t.isEmpty=void 0;let n=e=>{if(e instanceof Object){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return JSON.stringify(e)===JSON.stringify({})}if(e instanceof Array)return 0==e.length;if(e instanceof String||"string"==typeof e)return""===e||null==e;if(null==e)return!0;throw TypeError("Undefined Object")};function i(e,n){return(0,t.isEmpty)(e)?n:e}t.isEmpty=n,t.fallbackEmpty=i,t.fallback_empty=i,t.normalizeString=function e(n,i="NFD"){return!n instanceof Number&&(0,t.isEmpty)(n)?"":String(n).normalize(i).trim()},t.ucfirst=function e(t){return t.substring(0,1).toUpperCase()+t.substring(1)},t.cat_validator={name:e=>/^([a-zA-Z ]{1,64})$/gi.test(e),color:e=>/^([a-zA-Z ]{1,64})$/gi.test(e)}}),define("components/cat-item",["require","exports","helpers"],function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=class e{constructor({name:e,color:t,id:n,lastModified:i}){this._data={name:e,color:t,id:n,lastModified:i},this._name=e,this._color=t,this._id=n,this.callbacks={edit(e){},remove(e){}},this.elements={name:document.createElement("td"),color:document.createElement("td"),count:document.createElement("td")},this.BASE=document.createElement("tr"),this.BASE.setAttribute("data-item-id",String(this._id))}get data(){return this._data}set_name(){this.elements.name.appendChild(document.createTextNode((0,n.ucfirst)(this._name))),this.BASE.appendChild(this.elements.name)}set_color(){this.elements.color.appendChild(document.createTextNode((0,n.ucfirst)(this._color))),this.BASE.appendChild(this.elements.color)}set_count(){this.BASE.appendChild(this.elements.count)}set numCount(e){this.elements.count.innerText=String(e)}set name(e){this.elements.name.innerText=(0,n.ucfirst)(e)}set color(e){this.elements.color.innerText=(0,n.ucfirst)(e)}set_action(){let e=document.createElement("td"),t=document.createElement("div"),n=document.createElement("button"),i=document.createElement("button");n.classList.add("action"),n.classList.add("edit-action"),n.classList.add("icon-pen"),n.setAttribute("data-item-id",String(this._id)),i.classList.add("action"),i.classList.add("delete-action"),i.classList.add("icon-trash"),i.setAttribute("data-item-id",String(this._id)),t.appendChild(n),t.appendChild(i),n.addEventListener("click",()=>this.callbacks.edit(this._id)),i.addEventListener("click",()=>this.callbacks.remove(this._id)),e.appendChild(t),this.BASE.appendChild(e)}set onedit(e){this.callbacks.edit=e}set onremove(e){this.callbacks.remove=e}get html(){return this.set_count(),this.set_name(),this.set_color(),this.set_action(),this.BASE}}}),define("connect/config",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={host:"https://stereoscopic-simila.000webhostapp.com/integration.php"}}),define("components/bg-cover",["require","exports","dom"],function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class i{constructor(){}zIndex(e){if(e<0)throw TypeError("zIndex cannot be lessthan 0");n.bgCover.style.zIndex=String(e)}static hide(){!(i.depth<=0)&&(i.depth=i.depth-1,i.__update())}static show(){i.depth=i.depth+1,i.__update()}static forceShow(){i.depth=1,i.__update()}static forceHide(){i.depth=0,i.__update()}static __update(){n.bgCover.setAttribute("data-status",0==i.depth?"hide":"show")}}t.default=i,i.depth=0}),define("components/confirm-delete-dialog",["require","exports","dom","helpers"],function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class s{constructor({name:e,id:t}){if(s.is_visible)throw Error("Close the dialog before reusing it");s.name_label.innerText=(0,i.ucfirst)(e),s.dialog.setAttribute("data-id",String(t)),s.dialog.setAttribute("data-status","hidden"),s.dialog.setAttribute("hidden","hidden"),s.btn_delete.addEventListener("click",()=>s.callbacks.confirm()),s.btn_deny.addEventListener("click",()=>s.callbacks.cancel())}show(){let e=s;e.is_visible=!0,e.dialog.removeAttribute("hidden"),e.dialog.setAttribute("data-status","visible")}hide(){let e=s;e.is_visible=!1,e.dialog.setAttribute("hidden","hidden"),e.dialog.setAttribute("data-status","hidden")}set onconfirm(e){s.callbacks.confirm=e}set ondeny(e){s.callbacks.cancel=e}}t.default=s,s.is_visible=!1,s.dialog=n.deleteCatDialog,s.name_label=n.deleteCatName,s.btn_delete=n.btnDeleteConfirm,s.btn_deny=n.btnDeleteDeny,s.callbacks={confirm(){},cancel(){}}}),define("connect/delete",["require","exports","connect/config"],function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=__importDefault(n),t.default=({name:e,color:t,id:i})=>new Promise((s,a)=>{let o=new FormData;o.append("name",e),o.append("color",t),o.append("mode","delete"),o.append("id",String(i));let d=new XMLHttpRequest;d.addEventListener("readystatechange",()=>{if(4==d.readyState){if(200==d.status){s(JSON.parse(d.responseText));return}a(d.status)}}),d.addEventListener("error",e=>a(e)),d.open("POST",n.default.host,!0),d.send(o)})}),define("components/error-dialog",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(){this.base=document.createElement("div"),this.cover=document.createElement("div"),this.isDestroyed=!1,this.no_close_btn=!1,this.base.style.position="fixed",this.base.style.zIndex="9999",this.base.style.padding="20px 10px 50px 10px",this.base.style.margin="0",this.base.style.backgroundColor="#f0f0f0",this.base.style.left="50%",this.base.style.top="50%",this.base.style.transform="translate(-50%, -50%)",this.base.style.border="1px solid rgb(172, 172, 174)",this.base.style.textAlign="center",this.base.style.borderRadius="14px",this.base.style.boxShadow="1px 4px 8px rgba(52, 52, 54, 0.2)",this.base.style.minHeight="200px",this.base.style.minWidth="200px",this.base.style.maxHeight="90vh",this.base.style.maxWidth="inherit",this.base.style.width="85%",this.base.style.overflowY="hidden",this.cover.style.backgroundColor="#000",this.cover.style.position="fixed",this.cover.style.zIndex="9998",this.cover.style.width="100vw",this.cover.style.height="100vh",this.cover.style.opacity="0.4"}remove(){this.base.remove(),this.cover.remove(),this.isDestroyed=!0}no_rm(){this.no_close_btn=!0}addCloseBtn(){let e=document.createElement("button");e.style.position="absolute",e.style.bottom="10px",e.style.left="50%",e.style.transform="translateX(-50%)",e.innerText="Close",e.style.width="90%",e.style.padding="5px",e.style.borderRadius="7px",e.style.border="none",e.style.backgroundColor="rgb(255, 105, 97)",e.style.color="rgb(242, 242, 247)",e.style.maxWidth="350px",e.addEventListener("click",()=>{this.remove()}),this.base.appendChild(e)}set msg(e){if(this.isDestroyed)throw TypeError("Cannot append new message. Please, reinitialize the object.");let t=document.createElement("p");t.style.margin="0",t.style.padding="4px",t.style.boxSizing="border-box",t.style.textAlign="left",t.style.textIndent="0",t.style.whiteSpace="normal",t.style.overflowY="scroll",t.style.color="var(--text-color)",t.appendChild(document.createTextNode(String(e))),this.base.append(t)}show(e=0){if(this.no_close_btn||this.addCloseBtn(),document.body.appendChild(this.cover),document.body.appendChild(this.base),0==e)return;let t,n;t=new Date().getTime();let i=window.setInterval(()=>{n=new Date().getTime(),this.isDestroyed&&clearInterval(i),!this.isDestroyed&&n-t>=e&&(this.fadeOut(this.remove.bind(this)),clearInterval(i))},10)}fadeOut(e){let t=new Date().getTime(),i,s=window.setInterval(()=>{(i=1-(new Date().getTime()-t)/n.fadeOutInterval)>=0?this.base.style.opacity=String(i.toFixed(4)):(this.base.style.opacity="0",(e||function(){})(),clearInterval(s))},1)}}t.default=n,n.fadeOutInterval=1e3}),define("components/edit-dialog",["require","exports","dom"],function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class i{constructor({name:e,id:t,color:n,lastModified:s}){let a=i;if(a.is_open||!a.is_destroyed)throw Error("Unable to reinitialize if there was an open dialog");a.is_destroyed=!1,a.dialog.setAttribute("hidden","hidden"),a.msgBox(!1),a.name_input.value=e,a.color_input.value=n,a.cancel_btn.addEventListener("click",a.cc_cancel),a.confirm_btn.addEventListener("click",a.cc_confirm)}static cc_cancel(){i.callbacks.cancel()}static cc_confirm(){let e=i.color_input.value,t=i.name_input.value;i.callbacks.confirm({color:e,name:t})}static msgBox(e){if("boolean"==typeof e){i.msg_dialog.style.display=e?"initial":"none";return}i.msg_dialog.innerText=String(e)}set_btn_names({confirm:e,cancel:t}){i.confirm_btn.innerText=e,i.cancel_btn.innerText=t}show(){let e=i;e.dialog.removeAttribute("hidden"),e.is_open=!0}hide(){let e=i;e.dialog.setAttribute("hidden","hidden"),e.is_open=!1}set onconfirm(e){i.callbacks.confirm=e}set oncancel(e){i.callbacks.cancel=e}cancel(){i.cc_cancel()}confirm(){i.cc_confirm()}destroy(){i.confirm_btn.innerText="",i.cancel_btn.innerText="",i.cancel_btn.removeEventListener("click",i.cc_cancel),i.confirm_btn.removeEventListener("click",i.cc_confirm),i.is_destroyed=!0}}t.default=i,i.dialog=n.addCatDialog,i.name_input=n.addCatInputs.name,i.color_input=n.addCatInputs.color,i.msg_dialog=n.addCatMsgBox,i.confirm_btn=n.btnAddCatConfirm,i.cancel_btn=n.btnAddCatDeny,i.is_open=!1,i.callbacks={confirm(){},cancel(){}},i.is_destroyed=!0}),define("connect/update",["require","exports","connect/config"],function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=__importDefault(n),t.default=({name:e,color:t,id:i})=>new Promise((s,a)=>{let o=new FormData;o.append("name",e),o.append("color",t),o.append("mode","modify"),o.append("id",String(i));let d=new XMLHttpRequest;d.addEventListener("readystatechange",()=>{if(4==d.readyState){if(200==d.status){s(JSON.parse(d.responseText));return}a(d.status)}}),d.addEventListener("error",e=>a(e)),d.open("POST",n.default.host,!0),d.send(o)})}),define("components/cat-table",["require","exports","components/cat-item","connect/config","helpers","dom","components/bg-cover","components/confirm-delete-dialog","connect/delete","components/error-dialog","components/edit-dialog","connect/update"],function(e,t,n,i,s,a,o,d,r,l,c,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=__importDefault(n),i=__importDefault(i),o=__importDefault(o),d=__importDefault(d),r=__importDefault(r),l=__importDefault(l),c=__importDefault(c),u=__importDefault(u);class m{constructor(){if(this.callbacks={error(){},update(){}},m.hasInit)throw Error("Unable to reinitialize CatTable")}event_add(e){m.items[e.id]=new n.default(e),m.items[e.id].onedit=this.event_edit_item.bind(this),m.items[e.id].onremove=this.event_delete_item.bind(this),a.catList.appendChild(m.items[e.id].html)}event_delete_item(e){let t=new d.default(m.items[e].data);o.default.show(),t.show();let n=!1;t.ondeny=()=>{n||(t.hide(),o.default.hide())},t.onconfirm=()=>{n=!0,(0,r.default)(m.items[e].data).then(e=>{if(n=!1,e.hasOwnProperty("mode")&&"delete"==e.mode&&"success"==e.status){t.hide(),o.default.hide();return}throw Error("Unexpected things happened")}).catch(e=>{if(n=!1,404==e.toString())return;let t=new l.default;t.msg=e.toString(),t.show(3e3)})}}event_edit_item(e){let t=new c.default(m.items[e].data),n=Object.assign({},m.items[e].data),i=!1;t.set_btn_names({confirm:"Update",cancel:"Cancel"}),o.default.show(),t.show(),t.oncancel=()=>{i||(t.hide(),o.default.hide(),t.destroy())},t.onconfirm=({name:e,color:a})=>{if(c.default.msgBox(!1),!(s.cat_validator.name(e)&&s.cat_validator.color(a))){c.default.msgBox("Fill up the form accordingly"),c.default.msgBox(!0);return}n.name=e,n.color=a,(0,u.default)(n).then(e=>{if(i=!1,e.hasOwnProperty("mode")&&"modify"==e.mode&&"success"==e.status){t.hide(),o.default.hide(),t.destroy();return}throw Error("Unexpected things happened")}).catch(e=>{i=!1;let t=new l.default;"404"==e.toString()?t.msg="Opsss... That item doesn't exists anymore":t.msg=e.toString(),t.show(3e3)})}}event_delete(e){m.items[e].html.remove(),delete m.items[e]}event_modify(e){m.items[e.id].name=(0,s.ucfirst)(e.name),m.items[e.id].color=(0,s.ucfirst)(e.color)}listen(){m.worker.addEventListener("message",e=>{switch(e.data.type){case"added":this.event_add(e.data.body.content),this.callbacks.update(e.data.body.content),this.update_num_list();break;case"modified":this.event_modify(e.data.body.content),this.callbacks.update(e.data.body.content);break;case"deleted":this.event_delete(e.data.body.id),this.callbacks.update(e.data.body.id),this.update_num_list();break;case"error":this.callbacks.error(e.data);break;default:m.worker.postMessage({type:"command",body:"stop"}),this.callbacks.error("Force Stop! Unexpected things happened"),console.error(e.data)}})}send_command(e){m.worker.postMessage({type:"command",body:e})}start(){m.worker.postMessage({type:"config",body:m.worker_config}),m.worker.postMessage({type:"command",body:"start"})}update_num_list(){Object.values(m.items).forEach((e,t)=>e.numCount=t+1)}set onupdate(e){this.callbacks.update=e}set onerror(e){this.callbacks.error=e}}t.default=m,m.worker=new Worker("./worker.js"),m.worker_config={interval:1e3,pulse:10,host:i.default.host,stop_on_error:!0},m.items={},m.hasInit=!1}),define("connect/send",["require","exports","connect/config"],function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=__importDefault(n),t.default=({name:e,color:t})=>new Promise((i,s)=>{let a=new FormData;a.append("name",e),a.append("color",t),a.append("mode","insert");let o=new XMLHttpRequest;o.addEventListener("readystatechange",()=>{if(4==o.readyState){if(200==o.status){i(JSON.parse(o.responseText));return}s(o.status)}}),o.addEventListener("error",e=>s(e)),o.open("POST",n.default.host,!0),o.send(a)})}),define("components/add-cat-dialog",["require","exports","components/edit-dialog","components/bg-cover","helpers","connect/send"],function(e,t,n,i,s,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=__importDefault(n),i=__importDefault(i),a=__importDefault(a);class o{constructor(){if(o.hasBeenCalled)throw Error("AddCat cannot be reinitiate");o.hasBeenCalled=!0}activate(){let e=new n.default({name:"",color:"",id:0,lastModified:""}),t=!1,s=()=>{t=!1};e.set_btn_names({confirm:"Insert",cancel:"Cancel"}),i.default.show(),e.show(),e.oncancel=()=>{t||(e.hide(),e.destroy(),i.default.hide())},e.onconfirm=({name:n,color:i})=>{t=!0,this.__verifyInputs({name:n,color:i,ed:e,oncomplete:s})}}__disable_inputs(){n.default.name_input.setAttribute("disabled","disable"),n.default.color_input.setAttribute("disabled","disable")}__enable_inputs(e){n.default.name_input.removeAttribute("disabled"),n.default.color_input.removeAttribute("disabled"),n.default.confirm_btn.classList.remove("on-progress"),(e||function(){})()}__verifyInputs(e){n.default.confirm_btn.innerText="",n.default.confirm_btn.classList.add("on-progress"),this.__disable_inputs();let t=(0,s.normalizeString)(e.name),i=(0,s.normalizeString)(e.color),o=s.cat_validator.name(t),d=s.cat_validator.color(i);if(!(o&&d)){n.default.msgBox(!0),n.default.msgBox("Oppsss... Either field cannot be empty and must contain only letters and/or dash '-'"),o?d||n.default.color_input.focus():n.default.name_input.focus(),this.__enable_inputs(e.oncomplete),n.default.confirm_btn.innerText="Insert";return}n.default.msgBox(!1),(0,a.default)({name:t,color:i}).then(t=>{this.__enable_inputs(e.oncomplete),t.hasOwnProperty("mode")&&"insert"==t.mode&&"success"==t.status?e.ed.cancel():n.default.msgBox("Please, fill up the form accordingly")}).catch(t=>{this.__enable_inputs(e.oncomplete),n.default.msgBox(t.toString())})}}t.default=o,o.hasBeenCalled=!1}),define("index",["require","exports","dom","components/cat-table","components/error-dialog","components/add-cat-dialog"],function(e,t,n,i,s,a){"use strict";if(Object.defineProperty(t,"__esModule",{value:!0}),i=__importDefault(i),s=__importDefault(s),a=__importDefault(a),window.Worker){let o=new i.default;o.start(),o.listen(),o.onerror=e=>{let t=new s.default;t.no_rm(),t.msg=e.type+": Does stop during runtime",t.msg=e.body,t.show(0)},document.addEventListener("visibilitychange",()=>{o.send_command(document.hidden?"pause":"resume")})}else{let d=new s.default;throw d.no_rm(),d.msg="Unable to run",d.msg="Web worker is not available",d.show(0),Error("Unable to start. Web worker is not available")}let r=new a.default;n.btnAddAction.addEventListener("click",()=>{r.activate()})}),define("connect/get-item",["require","exports","connect/config"],function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=__importDefault(n),t.default=e=>new Promise((t,i)=>{fetch(`${n.default.host}?id=${e}`,{method:"GET",cache:"no-cache"}).then(e=>e.json()).then(t).catch(i)})});
