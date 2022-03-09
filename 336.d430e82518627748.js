"use strict";(self.webpackChunkPractises_Management=self.webpackChunkPractises_Management||[]).push([[336],{4189:(T,u,i)=>{i.r(u),i.d(u,{CentersModule:()=>D});var m=i(9808),f=i(8118),t=i(1223),p=i(5226),l=i.n(p),h=i(3630),_=i(3958),M=i(7206);function c(e,r){1&e&&(t.TgZ(0,"h1",19),t._uU(1,"Elija un centro"),t.qZA())}function C(e,r){1&e&&(t.TgZ(0,"h1",19),t._uU(1,"Centros educativos"),t.qZA())}function v(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"input",20),t.NdJ("keyup",function(s){return t.CHM(n),t.oxw().find(s)}),t.qZA()}}function P(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"a",25),t.NdJ("click",function(s){return t.CHM(n),t.oxw(2).setSchool(s)}),t._uU(1," Administrar "),t.qZA()}}function S(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"a",25),t.NdJ("click",function(s){return t.CHM(n),t.oxw(2).getInfo(s)}),t._uU(1," Informaci\xf3n "),t.qZA()}}function b(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div",21),t.NdJ("contextmenu",function(s){return t.CHM(n),t.oxw().updateMenuData(s)}),t._UZ(1,"img",22),t.TgZ(2,"div",23),t.TgZ(3,"h4"),t.TgZ(4,"b"),t._uU(5),t.qZA(),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.qZA(),t.YNc(8,P,2,0,"a",24),t.YNc(9,S,2,0,"a",24),t.qZA(),t.qZA()}if(2&e){const n=r.$implicit,o=t.oxw();t.s9C("id",n.id),t.xp6(1),t.s9C("src",n.image?n.image:"assets/img/noPhotoSchool.jpg",t.LSH),t.xp6(4),t.Oqu(n.name),t.xp6(2),t.Oqu(n.address),t.xp6(1),t.Q6J("ngIf",o.setSchoolMode),t.xp6(1),t.Q6J("ngIf",!o.setSchoolMode)}}function y(e,r){1&e&&(t.TgZ(0,"p"),t._uU(1,"Actualmente no administras ning\xfan centro, elige cual deseas administrar"),t.qZA())}function w(e,r){if(1&e&&(t.TgZ(0,"div",26),t._UZ(1,"img",27),t.TgZ(2,"h1"),t._uU(3,"No se han encontrado centros"),t.qZA(),t.YNc(4,y,2,0,"p",28),t.qZA()),2&e){const n=t.oxw();t.xp6(4),t.Q6J("ngIf",n.setSchoolMode)}}function F(e,r){1&e&&(t.TgZ(0,"p",29),t._uU(1,"Sin administradores"),t.qZA())}function I(e,r){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"p",30),t._UZ(2,"i",31),t._uU(3),t.qZA(),t._UZ(4,"br"),t.qZA()),2&e){const n=r.$implicit;t.xp6(3),t.AsE(" ",n.name," - ",n.telefone," ")}}let A=(()=>{class e{constructor(n){this.centersService=n,this.setSchoolMode=!1,this.emitSchool=new t.vpe,this.idSchoolForMenu=""}ngOnInit(){var n,o;this.getAllCenters(),null===(n=document.querySelector("#schoolsElements"))||void 0===n||n.addEventListener("contextmenu",s=>{s.preventDefault(),s.target===document.querySelector("#schoolsElements")?this.hiddenMenu():this.showMenu()}),null===(o=document.querySelector("#schoolsElements"))||void 0===o||o.addEventListener("contextmenu",s=>{this.menu.style.top=s.clientY+"px",this.menu.style.left=s.clientX+"px"}),this.menu=document.querySelector("#context-menu")}updateMenuData(n){this.idSchoolForMenu=n.currentTarget.getAttribute("id")+""}hiddenMenu(){this.menu.classList.add("minimized"),setTimeout(()=>{this.menu.style.display="none"},100)}showMenu(){this.menu.style.display="inline-block",setTimeout(()=>{this.menu.classList.remove("minimized")},100)}find(n){let o=n.target.value.trim();0==o.length?this.getAllCenters():this.getAllCentersByName(o)}setSchool(n){var o,s;let a;a="string"==typeof n?n:(null===(s=null===(o=n.target.parentElement)||void 0===o?void 0:o.parentElement)||void 0===s?void 0:s.getAttribute("id"))+"",this.centersService.getCenter(a).subscribe({next:g=>{l().fire({title:"Introduzca la contrase\xf1a",input:"password",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Administrar",cancelButtonText:"Cancelar",cancelButtonColor:"transparent",showLoaderOnConfirm:!0,preConfirm:O=>{M.MD5(O).toString()!=g.password&&l().showValidationMessage("Contrase\xf1a incorrecta")},allowOutsideClick:()=>!l().isLoading()}).then(O=>{O.isConfirmed&&this.centersService.setCenter(a).subscribe({next:x=>{this.emitSchool.emit(x)},error:x=>{this.message(x.error.mensaje)}})})},error:g=>{this.message(g.error.mensaje)}})}getAllCentersByName(n){this.centersService.getAllByName(n).subscribe({next:o=>{this.schools=o},error:o=>{this.schools=[],this.message(o.error.mensaje)}})}getAllCenters(){this.centersService.getAll().subscribe({next:n=>{null==this.findEnable&&(this.findEnable=!!n),this.schools=n},error:n=>{this.message(n.error.mensaje)}})}message(n){l().fire({icon:"error",title:"Oops...",text:null==n?"Servidor no disponible":n})}getInfo(n){var o,s;let a;this.changeVisiblityOfInfo(),a="string"==typeof n?n:(null===(s=null===(o=n.target.parentElement)||void 0===o?void 0:o.parentElement)||void 0===s?void 0:s.getAttribute("id"))+"",this.centersService.getAdministratorsFromCenter(a).subscribe({next:g=>{this.adminInfo=g},error:g=>{this.adminInfo=[]}})}changeVisiblityOfInfo(){document.querySelector("#information").classList.toggle("noShow")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(h.w))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-find-centers"]],inputs:{setSchoolMode:"setSchoolMode"},outputs:{emitSchool:"emitSchool"},decls:29,vars:7,consts:[["id","find",3,"click"],["id","schools"],["class","title",4,"ngIf"],["id","search","autocomplete","off","placeholder","Buscar","type","text",3,"keyup",4,"ngIf"],["id","schoolsElements"],["class","school",3,"id","contextmenu",4,"ngFor","ngForOf"],["id","no-content",4,"ngIf"],["id","context-menu"],[1,"item"],[1,"fa-solid","fa-circle-info"],[1,"item",3,"click"],[1,"fa-solid","fa-bars-progress"],["id","information",1,"noShow"],["id","modal"],["id","close",3,"click"],[1,"fa-solid","fa-xmark"],["id","admins"],["id","noAdmins",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"title"],["id","search","autocomplete","off","placeholder","Buscar","type","text",3,"keyup"],[1,"school",3,"id","contextmenu"],["alt","Avatar",2,"width","100%",3,"src"],[1,"container"],[3,"click",4,"ngIf"],[3,"click"],["id","no-content"],["src","assets/img/school.png"],[4,"ngIf"],["id","noAdmins"],[1,"name"],[1,"fa-solid","fa-user","c-primary"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return o.hiddenMenu()}),t.TgZ(1,"div",1),t.TgZ(2,"div"),t.YNc(3,c,2,0,"h1",2),t.YNc(4,C,2,0,"h1",2),t.YNc(5,v,1,0,"input",3),t._UZ(6,"br"),t.qZA(),t.TgZ(7,"div",4),t.YNc(8,b,10,6,"div",5),t.qZA(),t.qZA(),t.YNc(9,w,5,1,"div",6),t.TgZ(10,"div",7),t.TgZ(11,"div",8),t.TgZ(12,"p"),t._UZ(13,"i",9),t._uU(14," Informaci\xf3n "),t.qZA(),t.qZA(),t.TgZ(15,"div",10),t.NdJ("click",function(){return o.setSchool(o.idSchoolForMenu)}),t.TgZ(16,"p"),t._UZ(17,"i",11),t._uU(18," Administrar "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",12),t.TgZ(20,"div",13),t.TgZ(21,"a",14),t.NdJ("click",function(){return o.changeVisiblityOfInfo()}),t._UZ(22,"i",15),t.qZA(),t.TgZ(23,"h3"),t._UZ(24,"i",9),t._uU(25," Administradores "),t.qZA(),t.TgZ(26,"div",16),t.YNc(27,F,2,0,"p",17),t.YNc(28,I,5,2,"div",18),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(3),t.Q6J("ngIf",o.setSchoolMode&&o.findEnable),t.xp6(1),t.Q6J("ngIf",!o.setSchoolMode&&o.findEnable),t.xp6(1),t.Q6J("ngIf",o.findEnable),t.xp6(3),t.Q6J("ngForOf",o.schools),t.xp6(1),t.Q6J("ngIf",!o.schools),t.xp6(18),t.Q6J("ngIf",o.adminInfo&&0==o.adminInfo.length),t.xp6(1),t.Q6J("ngForOf",o.adminInfo))},directives:[m.O5,m.sg],styles:['#no-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;height:100%;font-feature-settings:"smcp";font-variant:small-caps;font-size:.8em;text-shadow:2px 2px 6px black;color:#fff;margin-top:20vh;margin-left:5vw;margin-right:5vw}.school[_ngcontent-%COMP%]:hover{box-shadow:0 8px 16px #0003}.container[_ngcontent-%COMP%]{padding:2px 16px}#no-content[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:80%;position:relative;top:-5%;max-width:300px}#no-content[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:1.2em;width:24%;position:relative;top:1%}#schools[_ngcontent-%COMP%]{text-align:center;width:100%}#no-content[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{margin-top:2%}.school[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:60%}.school[_ngcontent-%COMP%]{border-radius:2%;box-shadow:0 4px 8px #0003;transition:.3s;display:inline-block;background-color:#00000081;height:19em;margin:1em;color:#fff;width:40%;min-width:200px;overflow:hidden;max-width:250px;transition:.5s;animation-name:introSchool;animation-duration:.5s}@keyframes introSchool{0%{opacity:0}to{opacity:1}}.container[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%]{text-align:left;font-size:1.1em;padding:.6em}.container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{background-color:#fff;color:#000;padding:10px 50px;position:relative;top:1.2em}.container[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{text-align:left;padding-left:5%;color:#d0d0d0;font-size:.8em;position:relative;top:-.5em}@media (max-width: 1000px){#no-content[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{width:40%}}@media (max-width: 600px){#no-content[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{width:70%}.school[_ngcontent-%COMP%]{margin:5%}.container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{position:relative!important;width:100%;left:-3.5%}.container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:0%!important}}#search[_ngcontent-%COMP%]:focus{outline:none}#search[_ngcontent-%COMP%]{background-color:#00000057;margin-top:-10%;border:none;border-radius:5px;padding:10px 5%;text-align:center;position:relative;top:-.5em;width:40%;max-width:320px;margin-bottom:.5em;color:#fff}#search[_ngcontent-%COMP%]::placeholder{color:#d6d6d6}#context-menu[_ngcontent-%COMP%]{position:fixed;z-index:1000;border-radius:7px;width:158px;background-color:#00000081;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);transition:.4s;overflow:hidden;transform:rotateX(0);display:none}.minimized[_ngcontent-%COMP%]{transform:rotateX(90deg)!important}#context-menu[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:10px 20px;font-size:15px;color:#fff}#context-menu[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{border-radius:7px;background-color:#6363634b!important}#context-menu[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:inline-block;margin-right:5px;color:var(--color)}#context-menu[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin:2px 0;border-color:#555}#modal[_ngcontent-%COMP%]{width:70%;background-color:#ffffff29;max-width:40em;border:1px solid rgb(211,211,211);top:30vh;padding-bottom:1em;transition:.5s;max-width:22em}.noShow[_ngcontent-%COMP%]   #modal[_ngcontent-%COMP%]{transform:rotateX(90deg)}.noShow[_ngcontent-%COMP%]{visibility:hidden;z-index:-10}#information.noShow[_ngcontent-%COMP%]{opacity:0}#information[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;color:#fff;padding:1.5em}#information[_ngcontent-%COMP%]{background-color:#00000058;transition:.5s;width:100%!important;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);height:100vh;top:0;left:0;right:0;position:fixed;z-index:200;display:flex;justify-content:center;align-items:center;text-align:center}#admins[_ngcontent-%COMP%]{color:#fff}.name[_ngcontent-%COMP%]{margin-bottom:2%}@media (max-width: 700px){#modal[_ngcontent-%COMP%]{margin-left:12%}}#noAdmins[_ngcontent-%COMP%]{margin-bottom:4%}']}),e})();function q(e,r){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"p"),t._uU(2),t.qZA(),t.qZA()),2&e){const n=r.$implicit;t.xp6(2),t.Oqu(n.name)}}function N(e,r){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"p"),t._uU(2),t.qZA(),t.qZA()),2&e){const n=r.$implicit;t.xp6(2),t.Oqu(n.name)}}function U(e,r){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"h1",2),t._uU(2),t.qZA(),t.TgZ(3,"div",3),t._UZ(4,"img",4),t.TgZ(5,"p"),t._uU(6),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.qZA(),t.qZA(),t.TgZ(9,"div"),t.TgZ(10,"h2"),t._uU(11,"Administradores"),t.qZA(),t.YNc(12,q,3,1,"div",5),t.qZA(),t.TgZ(13,"div"),t.TgZ(14,"h2"),t._uU(15,"Ciclos"),t.qZA(),t.YNc(16,N,3,1,"div",5),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(2),t.Oqu(n.currentSchool.name),t.xp6(2),t.s9C("src",n.currentSchool.image?n.currentSchool.image:"assets/img/noPhotoSchool.jpg",t.LSH),t.xp6(2),t.hij("Direcci\xf3n: ",n.currentSchool.address,""),t.xp6(2),t.hij("Identificador: ",n.currentSchool.id,""),t.xp6(4),t.Q6J("ngForOf",n.currentSchool.administrators),t.xp6(4),t.Q6J("ngForOf",n.currentSchool.professionalDegrees)}}function J(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"app-find-centers",6),t.NdJ("emitSchool",function(s){return t.CHM(n),t.oxw().settedSchool(s)}),t.qZA()}2&e&&t.Q6J("setSchoolMode",!0)}let E=(()=>{class e{constructor(n,o){this.centerService=n,this.userService=o,this.notification=new t.vpe}ngOnInit(){this.centerService.getMyCenter(this.userService.getDni()).subscribe({next:n=>{this.currentSchool=n,this.getAditionalInfoCenter(),this.centerService.setIdSchool(this.currentSchool.id)},error:()=>{l().fire({position:"top-end",icon:"success",title:"\xa1Bienvenido!",text:"Para comenzar, elige la escuela que administras",showConfirmButton:!1,timer:5e3})}})}settedSchool(n){this.notification.emit("Centro asignado correctamente"),this.currentSchool=n,this.getAditionalInfoCenter(),this.centerService.setIdSchool(n.id)}getAditionalInfoCenter(){this.centerService.getAdministratorsFromCenter(this.currentSchool.id+"").subscribe({next:n=>{this.currentSchool.administrators=n},error:n=>{}}),this.centerService.getProfessionalDegreesFromCenter(this.currentSchool.id+"").subscribe({next:n=>{this.currentSchool.professionalDegrees=n},error:n=>{}})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(h.w),t.Y36(_.K))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-my-center"]],outputs:{notification:"notification"},decls:2,vars:2,consts:[[4,"ngIf"],[3,"setSchoolMode","emitSchool",4,"ngIf"],[1,"title"],["id","center"],[3,"src"],[4,"ngFor","ngForOf"],[3,"setSchoolMode","emitSchool"]],template:function(n,o){1&n&&(t.YNc(0,U,17,6,"div",0),t.YNc(1,J,1,1,"app-find-centers",1)),2&n&&(t.Q6J("ngIf",o.currentSchool),t.xp6(1),t.Q6J("ngIf",!o.currentSchool))},directives:[m.O5,m.sg,A],styles:["#center[_ngcontent-%COMP%]{color:#fff;text-align:center}#center[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100vh}.title[_ngcontent-%COMP%]{text-align:center;color:#fff}"]}),e})();var d=i(2382);function Y(e,r){1&e&&(t.TgZ(0,"p"),t._uU(1,"Indique el nombre del centro"),t.qZA())}function z(e,r){1&e&&(t.TgZ(0,"p"),t._uU(1,"Indique la direcci\xf3n del centro"),t.qZA())}function B(e,r){1&e&&(t.TgZ(0,"p"),t._uU(1,"Indique una contrase\xf1a con un m\xednimo de 8 car\xe1cteres"),t.qZA())}let k=(()=>{class e{constructor(n,o){this.formBuilder=n,this.centersService=o}ngOnInit(){this.buildForm()}buildForm(){this.form=this.formBuilder.group({name:["",{validators:[d.kI.required]}],address:["",{validators:[d.kI.required]}],password:["",{validators:[d.kI.required,d.kI.minLength(8)]}]})}send(){this.centersService.newCenter(this.form.value).subscribe({next:n=>{l().fire("Centro creado",`Se ha creado el centro ${n.name}`,"success")},error:n=>{l().fire({icon:"error",title:"Oops...",text:null==n.error.message?"Servidor no disponible":n.error.message})}})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.qu),t.Y36(h.w))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-new-center"]],decls:22,vars:5,consts:[["id","container"],[1,"title"],["id","msform",3,"formGroup","submit"],["for","name"],["type","text","id","name","formControlName","name"],[4,"ngIf"],["for","address"],["type","text","id","address","formControlName","address"],["for","password"],["type","password","id","password","formControlName","password"],["type","submit","value","Crear",3,"disabled"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"h1",1),t._uU(2,"Nuevo centro"),t.qZA(),t.TgZ(3,"form",2),t.NdJ("submit",function(){return o.send()}),t.TgZ(4,"h3"),t._uU(5,"1. Datos del centro"),t.qZA(),t.TgZ(6,"div"),t.TgZ(7,"label",3),t._uU(8,"Nombre"),t.qZA(),t._UZ(9,"input",4),t.YNc(10,Y,2,0,"p",5),t.qZA(),t.TgZ(11,"div"),t.TgZ(12,"label",6),t._uU(13,"Direcci\xf3n"),t.qZA(),t._UZ(14,"input",7),t.YNc(15,z,2,0,"p",5),t.qZA(),t.TgZ(16,"div"),t.TgZ(17,"label",8),t._uU(18,"Contrase\xf1a"),t.qZA(),t._UZ(19,"input",9),t.YNc(20,B,2,0,"p",5),t.qZA(),t._UZ(21,"input",10),t.qZA(),t.qZA()),2&n&&(t.xp6(3),t.Q6J("formGroup",o.form),t.xp6(7),t.Q6J("ngIf",o.form.controls.name.invalid&&o.form.controls.name.touched),t.xp6(5),t.Q6J("ngIf",o.form.controls.address.invalid&&o.form.controls.address.touched),t.xp6(5),t.Q6J("ngIf",o.form.controls.password.invalid&&o.form.controls.password.touched),t.xp6(1),t.Q6J("disabled",o.form.invalid))},directives:[d._Y,d.JL,d.sg,d.Fj,d.JJ,d.u,m.O5],styles:['#container[_ngcontent-%COMP%]{height:auto;width:100%}label[_ngcontent-%COMP%]{color:#fff}div[_ngcontent-%COMP%]{text-align:center}form[_ngcontent-%COMP%]{display:inline-block;margin:0!important;height:70vh}#msform[_ngcontent-%COMP%]{width:400px;margin:50px auto;text-align:center;position:relative}#progressbar[_ngcontent-%COMP%]{overflow:hidden;counter-reset:step;position:absolute;bottom:0}#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none;color:#fff;font-feature-settings:"smcp";font-variant:small-caps;font-size:.8em;width:33.33%;float:left;position:relative}#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:counter(step);counter-increment:step;width:30px;line-height:30px;display:block;font-size:10px;color:#333;background:white;border-radius:3px;margin:0 auto 5px}#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after{content:"";width:100%;height:2px;background:white;position:absolute;left:-50%;top:9px;z-index:-1}#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after{content:none}#progressbar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:before, #progressbar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:after{background:var(--color);color:#fff}']}),e})();var Z=i(9269);const Q=[{path:"my-center",component:E,canActivate:[Z.e]},{path:"find-centers",component:A,canActivate:[Z.e]},{path:"new-center",component:k,canActivate:[Z.e]}];let j=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[f.Bz.forChild(Q)],f.Bz]}),e})(),D=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[m.ez,j,d.UX]]}),e})()},5336:(T,u,i)=>{i.r(u),i.d(u,{AdministratorFunctionsModule:()=>M});var m=i(9808),f=i(8118),t=i(9269),p=i(1223);const l=[{path:"centers",loadChildren:()=>Promise.resolve().then(i.bind(i,4189)).then(c=>c.CentersModule),canActivate:[t.e]},{path:"persons",loadChildren:()=>i.e(77).then(i.bind(i,1077)).then(c=>c.PersonsModule),canActivate:[t.e]},{path:"students",loadChildren:()=>i.e(966).then(i.bind(i,4966)).then(c=>c.StudentsModule),canActivate:[t.e]},{path:"degrees",loadChildren:()=>i.e(362).then(i.bind(i,1362)).then(c=>c.DegreesModule),canActivate:[t.e]},{path:"business",loadChildren:()=>i.e(156).then(i.bind(i,156)).then(c=>c.BusinessModule),canActivate:[t.e]}];let h=(()=>{class c{}return c.\u0275fac=function(v){return new(v||c)},c.\u0275mod=p.oAB({type:c}),c.\u0275inj=p.cJS({imports:[[f.Bz.forChild(l)],f.Bz]}),c})();var _=i(4189);let M=(()=>{class c{}return c.\u0275fac=function(v){return new(v||c)},c.\u0275mod=p.oAB({type:c}),c.\u0275inj=p.cJS({imports:[[m.ez,h,_.CentersModule]]}),c})()}}]);