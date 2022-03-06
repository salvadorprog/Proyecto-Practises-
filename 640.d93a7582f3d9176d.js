"use strict";(self.webpackChunkPractises_Management=self.webpackChunkPractises_Management||[]).push([[640],{3958:(Z,u,r)=>{r.d(u,{K:()=>t});var g=r(520),m=r(2340),d=r(1223),h=r(5295);let t=(()=>{class c{constructor(l,p){this.http=l,this.auth=p,this.dni_user=""}getUser(){const l={headers:new g.WM({Authorization:`Bearer ${this.auth.getToken()}`})};return this.http.get(`${m.N.serverAddress}/person`,l)}getDni(){return this.dni_user}setDni(l){this.dni_user=l}}return c.\u0275fac=function(l){return new(l||c)(d.LFG(g.eN),d.LFG(h.e))},c.\u0275prov=d.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},5640:(Z,u,r)=>{r.r(u),r.d(u,{DashboardModule:()=>D});var g=r(4466),m=r(9808),d=r(5226),h=r.n(d),t=r(1223),c=r(2290),s=r(8118),l=r(5295),p=r(3958),b=r(6162);function _(i,n){1&i&&(t.TgZ(0,"div"),t.TgZ(1,"h3"),t._uU(2,"Centro"),t.qZA(),t.TgZ(3,"a",32),t._UZ(4,"i",33),t._uU(5," Mi centro "),t.qZA(),t.TgZ(6,"a",34),t._UZ(7,"i",35),t._uU(8," Buscar "),t.qZA(),t.TgZ(9,"a",36),t._UZ(10,"i",37),t._uU(11," Nuevo centro "),t.qZA(),t.TgZ(12,"h3"),t._uU(13,"Personas"),t.qZA(),t.TgZ(14,"a",38),t._UZ(15,"i",39),t._uU(16," Registrar persona "),t.qZA(),t.TgZ(17,"a",40),t._UZ(18,"i",41),t._uU(19," Gestionar personas "),t.qZA(),t.TgZ(20,"h3"),t._uU(21,"Estudiantes"),t.qZA(),t.TgZ(22,"a",42),t._UZ(23,"i",43),t._uU(24," Nueva matr\xedcula "),t.qZA(),t.TgZ(25,"a",44),t._UZ(26,"i",45),t._uU(27," Gestionar matr\xedculas "),t.qZA(),t.qZA())}function A(i,n){1&i&&(t.TgZ(0,"div"),t.TgZ(1,"h3"),t._uU(2,"Ciclos del centro"),t.qZA(),t.TgZ(3,"a",46),t._UZ(4,"i",47),t._uU(5," Ver ciclos "),t.qZA(),t.TgZ(6,"h3"),t._uU(7,"Empresas"),t.qZA(),t.TgZ(8,"a",48),t._UZ(9,"i",49),t._uU(10," Ver empresas "),t.qZA(),t.qZA())}function T(i,n){1&i&&(t.TgZ(0,"div"),t.TgZ(1,"h3"),t._uU(2,"Matr\xedculas"),t.qZA(),t.TgZ(3,"a",50),t._UZ(4,"i",47),t._uU(5," Mis matr\xedculas "),t.qZA(),t.TgZ(6,"h3"),t._uU(7,"Empresas"),t.qZA(),t.TgZ(8,"a",48),t._UZ(9,"i",49),t._uU(10," Ver empresas "),t.qZA(),t.TgZ(11,"a",51),t._UZ(12,"i",49),t._uU(13," Mi empresa "),t.qZA(),t.qZA())}function x(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div",17),t.TgZ(1,"div"),t.TgZ(2,"nav"),t.TgZ(3,"h3"),t.TgZ(4,"i",18),t.NdJ("click",function(){return t.CHM(e),t.oxw().menuToggle()}),t.qZA(),t.TgZ(5,"p",19),t._uU(6,"Dashboard"),t.qZA(),t.qZA(),t.TgZ(7,"img",20),t.NdJ("click",function(){return t.CHM(e),t.oxw().userToggle()}),t.qZA(),t.TgZ(8,"div",21),t.TgZ(9,"a",22),t.NdJ("click",function(){return t.CHM(e),t.oxw().changeVisiblityOfSettings()}),t._UZ(10,"i",15),t._uU(11," Ajustes "),t.qZA(),t.TgZ(12,"a",23),t.NdJ("click",function(){return t.CHM(e),t.oxw().changeVisiblityOfAccesibility()}),t._UZ(13,"i",24),t._uU(14," Accesibilidad "),t.qZA(),t.TgZ(15,"a",25),t.NdJ("click",function(){return t.CHM(e),t.oxw().exitConfirm()}),t._UZ(16,"i",26),t._uU(17," Cerrar sesi\xf3n "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",27),t.TgZ(19,"div",28),t.NdJ("click",function(){return t.CHM(e),t.oxw().closeMenus()}),t.TgZ(20,"router-outlet",29),t.NdJ("notification",function(a){return t.CHM(e),t.oxw().showMessage(a)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"div",30),t.YNc(22,_,28,0,"div",16),t.YNc(23,A,11,0,"div",16),t.YNc(24,T,14,0,"div",16),t._UZ(25,"a",31),t.qZA(),t.qZA()}if(2&i){const e=t.oxw();t.xp6(7),t.s9C("src",e.person.image&&""!=e.person.image?e.person.image:"assets/img/not_image.png",t.LSH),t.hYB("title","",e.person.name?e.person.name:"Sin nombre"," ",e.person.lastName?e.person.lastName:"Sin apellidos ",""),t.xp6(15),t.Q6J("ngIf","ROLE_ADMIN"==e.rol),t.xp6(1),t.Q6J("ngIf","ROLE_TEACHER"==e.rol||"ROLE_ADMIN"==e.rol),t.xp6(1),t.Q6J("ngIf","ROLE_STUDENT"==e.rol)}}function k(i,n){1&i&&t._UZ(0,"app-loading")}let f=(()=>{class i{constructor(e,o,a,v,C){this.toastService=e,this.route=o,this.router=a,this.auth=v,this.userService=C,this.administratorDefaultPage="administrator/centers/my-center",this.teacherDefaultPage="student/",this.studentDefaultPage="teacher/degrees/viewDegrees"}ngOnInit(){this.userService.getUser().subscribe({next:e=>{var o;switch(this.userService.setDni(e.dni),this.person=e,this.rol=null===(o=e.rol)||void 0===o?void 0:o.toString(),this.rol){case"ROLE_ADMIN":this.router.navigate([this.administratorDefaultPage],{relativeTo:this.route});break;case"ROLE_STUDENT":this.router.navigate([this.studentDefaultPage],{relativeTo:this.route});break;case"ROLE_TEACHER":this.router.navigate([this.teacherDefaultPage],{relativeTo:this.route})}},error:e=>{h().fire({icon:"error",title:"Oops...",text:null==e.error.mensaje?"Servidor no disponible":e.error.mensaje})}})}menuToggle(){var e,o;null===(e=document.querySelector("#menu"))||void 0===e||e.classList.toggle("close"),null===(o=document.querySelector("#optionsNav"))||void 0===o||o.classList.add("hidden")}userToggle(){var e,o;null===(e=document.querySelector("#optionsNav"))||void 0===e||e.classList.toggle("hidden"),null===(o=document.querySelector("#menu"))||void 0===o||o.classList.add("close")}closeMenus(){var e,o;null===(e=document.querySelector("#menu"))||void 0===e||e.classList.add("close"),null===(o=document.querySelector("#optionsNav"))||void 0===o||o.classList.add("hidden")}exitConfirm(){var e;null===(e=document.querySelector("#optionsNav"))||void 0===e||e.classList.add("hidden"),h().fire({title:"\xbfCerrar sesi\xf3n?",text:"Los cambios no guardados se perder\xe1n",icon:"warning",confirmButtonColor:"#3085d6",confirmButtonText:"Cerrar sesi\xf3n"}).then(o=>{o.isConfirmed&&(document.querySelector("html").classList.remove("gray"),document.querySelector("html").classList.remove("highConstrast"),this.auth.logout())})}changeVisiblityOfAccesibility(){document.querySelector("#accesibility").classList.toggle("noShow")}changeVisiblityOfSettings(){document.querySelector("#settings").classList.toggle("noShow")}changeGray(){document.querySelector("#btn-b").checked=!1,document.querySelector("html").classList.remove("highConstrast"),document.querySelector("html").classList.toggle("gray")}changeConstrast(){document.querySelector("#btn-a").checked=!1,document.querySelector("html").classList.remove("gray"),document.querySelector("html").classList.toggle("highConstrast")}showMessage(e){this.toastService.success("FF","",{progressBar:!0,progressAnimation:"increasing"})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(c._W),t.Y36(s.gz),t.Y36(s.F0),t.Y36(l.e),t.Y36(p.K))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-dashboard"]],decls:42,vars:2,consts:[["id","fullContainer",4,"ngIf"],["id","accesibility",1,"noShow"],["id","modal"],["id","close",3,"click"],[1,"fa-solid","fa-xmark"],[1,"fa-solid","fa-universal-access",2,"margin-right","0.5em"],[1,"option"],[1,"titleButton"],[1,"fa-solid","fa-eye-low-vision","c-primary"],[1,"switch"],["id","btn-a","type","checkbox",3,"click"],[1,"slider","round"],[1,"fa-solid","fa-arrow-turn-up","c-primary",2,"margin-left","0.3em","margin-right","0.2em"],["id","btn-b","type","checkbox",3,"click"],["id","settings",1,"noShow"],[1,"fa-solid","fa-gear"],[4,"ngIf"],["id","fullContainer"],["id","menuBurguer",1,"fa-solid","fa-bars",3,"click"],["id","title"],["id","user",3,"src","title","click"],["id","optionsNav",1,"hidden"],["alt","Muestra ajustes generales de la aplciaci\xf3n","title","Muestra ajustes generales de la aplciaci\xf3n",3,"click"],["alt","Accesibilidad","title","Accesibilidad",3,"click"],[1,"fa-solid","fa-universal-access"],["id","exit","alt","Salir de la aplicaci\xf3n","title","Salir de la aplicaci\xf3n",3,"click"],[1,"fa-solid","fa-arrow-right-from-bracket"],["id","content"],["id","router",3,"click"],[3,"notification"],["id","menu",1,"close"],["id","last-item"],["title","Mi centro","alt","Mi centro","routerLink","administrator/centers/my-center","routerLinkActive","activated"],[1,"fa-solid","fa-school"],["title","Buscar centros","alt","Buscar centros","routerLink","administrator/centers/find-centers","routerLinkActive","activated"],[1,"fa-solid","fa-magnifying-glass",2,"margin-right","2px"],["title","Nuevo centro","alt","Nuevo centro","routerLink","administrator/centers/new-center","routerLinkActive","activated"],[1,"fa-solid","fa-plus",2,"margin-right","4px"],["title","Registrar persona","alt","Registrar persona","routerLink","administrator/persons/new-person","routerLinkActive","activated"],[1,"fa-solid","fa-user-plus"],["title","Gestionar personas","alt","Gestionar personas","routerLinkActive","activated","routerLink","administrator/persons/management-persons"],[1,"fa-solid","fa-users-gear"],["alt","Nueva matr\xedcula","title","Nueva matr\xedcula","routerLinkActive","activated","routerLink","administrator/students/new-enrollment"],[1,"fa-solid","fa-square-plus",2,"margin-right","5px"],["alt","Eliminar matr\xedcula","title","Eliminar matr\xedcula","routerLinkActive","activated","routerLink","administrator/students/management-enrollments"],[1,"fa-solid","fa-graduation-cap",2,"margin-right","1px"],["alt","Ver ciclos","title","Ver ciclos","routerLinkActive","activated"],[1,"fa-solid","fa-chalkboard-user",2,"margin-right","3px"],["alt","Ver empresas","title","Ver empresas","routerLinkActive","activated"],[1,"fa-solid","fa-building",2,"margin-right","5px"],["alt","Mis matr\xedculas","title","Mis matr\xedculas","routerLinkActive","activated"],["alt","Mi empresa","title","Mi empresa","routerLinkActive","activated"]],template:function(e,o){1&e&&(t.YNc(0,x,26,6,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"a",3),t.NdJ("click",function(){return o.changeVisiblityOfAccesibility()}),t._UZ(4,"i",4),t.qZA(),t.TgZ(5,"h3"),t._UZ(6,"i",5),t._uU(7," Accesibilidad "),t.qZA(),t.TgZ(8,"div",6),t.TgZ(9,"p",7),t._UZ(10,"i",8),t._uU(11," Escala de grises "),t.qZA(),t.TgZ(12,"label",9),t.TgZ(13,"input",10),t.NdJ("click",function(){return o.changeGray()}),t.qZA(),t._UZ(14,"span",11),t.qZA(),t.qZA(),t.TgZ(15,"div",6),t.TgZ(16,"p",7),t._UZ(17,"i",12),t._uU(18," Alto constraste "),t.qZA(),t.TgZ(19,"label",9),t.TgZ(20,"input",13),t.NdJ("click",function(){return o.changeConstrast()}),t.qZA(),t._UZ(21,"span",11),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"div",14),t.TgZ(23,"div",2),t.TgZ(24,"a",3),t.NdJ("click",function(){return o.changeVisiblityOfSettings()}),t._UZ(25,"i",4),t.qZA(),t.TgZ(26,"h3"),t._UZ(27,"i",15),t._uU(28," Ajustes "),t.qZA(),t.TgZ(29,"div",6),t.TgZ(30,"p",7),t._uU(31,"Nombre"),t.qZA(),t.qZA(),t.TgZ(32,"div",6),t.TgZ(33,"p",7),t._uU(34,"Apellidos"),t.qZA(),t.qZA(),t.TgZ(35,"div",6),t.TgZ(36,"p",7),t._uU(37,"Color de la aplicaci\xf3n"),t.qZA(),t.TgZ(38,"label",9),t.TgZ(39,"input",13),t.NdJ("click",function(){return o.changeConstrast()}),t.qZA(),t._UZ(40,"span",11),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(41,k,1,0,"app-loading",16)),2&e&&(t.Q6J("ngIf",o.person),t.xp6(41),t.Q6J("ngIf",!o.person))},directives:[m.O5,s.lC,s.yS,s.Od,b.N],styles:['nav{color:#fff;background-color:#0000007b;padding:7px;font-feature-settings:"pcap";font-variant:petite-caps;padding-left:.7em!important;position:fixed;width:100%;-webkit-backdrop-filter:blur(7px);backdrop-filter:blur(7px);z-index:1}#menu,h3,#menuBurguer{transition:.5s}#router{margin-left:58px;position:relative;top:3.45em;z-index:0}#content{width:100%;height:100vh;display:block}#menu{top:3.45em;left:0;width:30%;display:inline-block;position:fixed;height:100vh;background-color:#0000007b;max-width:250px;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}#menuBurguer:hover{transform:rotate(180deg)}.close{left:-12em!important}.close i:hover{transform:rotate3d(1,1,1,5deg)}.activated{color:orange!important}.close h3{display:none!important}#menu i{float:right;position:relative;top:.6em;right:1em}#menu{display:inline-block;overflow:scroll}#menu:hover{cursor:row-resize}#menu::-webkit-scrollbar{width:0rem}#menu a{color:#ffffffc0;display:block;font-feature-settings:"pcap";font-variant:petite-caps;width:98.9%;height:2.5em;text-align:center;font-size:1em;line-height:2.5em}#menu a:hover{cursor:pointer;border-right:3px solid orange}#menu h3{font-size:1.1em;margin-left:1em;font-feature-settings:"smcp";font-variant:small-caps}h3{padding:.5em;color:#fff}#title{display:inline-block;margin-left:1em}#last-item:hover{cursor:default!important;border-right:none!important}@media (max-width: 840px){#menu{width:100%}}@media (max-width: 250px){.close{left:-20em!important}#router{margin-left:0!important}#optionsNav{width:100%}.hidden{margin-right:-17em!important}}nav>h3{display:inline-block}#user{border-radius:50%;height:2.4em;float:right;position:absolute;right:2em;top:.5em}#optionsNav{transition:.5s;display:inline-block;position:fixed;right:1em;background-color:#0000007b;top:3.45em}#optionsNav>*{display:block;font-size:.9em;color:#fff;text-align:left;margin-right:5px;padding:15px 20px}#optionsNav i{transition:1s}#optionsNav>*:hover{background-color:#0004!important;cursor:pointer;margin-right:0;border-right:5px solid orange}#optionsNav>*:hover i{color:orange;transform:rotate(360deg)}#exit:hover i{color:red!important;transform:rotate(-90deg)!important}#exit:hover{border-color:red!important}.hidden{position:absolute;margin-right:-10em}.gray{filter:grayscale()}#accesibility{transition:.5s;word-wrap:break-word;width:100%;height:100vh;top:0;position:fixed;z-index:10;text-align:center;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background-color:#0000007b}#accesibility #modal{width:70%;background-color:#ffffff29;max-width:40em;position:relative;margin-left:auto;margin-right:auto;top:30vh;padding-bottom:1em}#modal{border:1px solid rgb(124,124,124);transition:.5s}#accesibility h3{text-align:left;color:#fff;padding:1.5em}#close{font-feature-settings:"smcp";font-variant:small-caps;float:right;font-weight:700;width:2em;padding:.5em;transition:.3s;color:#fff}#close:hover{background-color:red}.switch{float:right;margin-right:14%;position:relative;width:60px;height:28px}.switch input{opacity:0;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#201f68;transition:.4s}.slider:before{position:absolute;content:"";height:20px;width:20px;left:4px;bottom:4px;background-color:#fff;transition:.4s}input:checked+.slider{background-color:#ff004c}input:focus+.slider{box-shadow:0 0 1px #ff004c}input:checked+.slider:before{transform:translate(26px)}.slider.round{border-radius:34px}.slider.round:before{border-radius:50%}.titleButton{float:left;margin-left:14%;color:#fff}@media (max-width: 420px){.titleButton{float:none;margin-left:unset!important;display:block!important}.option{height:4em!important}.switch{position:absolute;float:none;margin:.7em .7em .7em -1.5em}}.option{height:3em;display:block!important}.noShow #modal{transform:rotateX(90deg)}.noShow{visibility:hidden;z-index:-10}.highConstrast{filter:contrast(2)}#accesibility.noShow,#settings.noShow{opacity:0}#settings h3{text-align:left;color:#fff;padding:1.5em}#settings #modal{width:70%;background-color:#ffffff29;max-width:40em;position:relative;margin-left:auto;margin-right:auto;top:30vh;padding-bottom:1em}#settings{transition:.5s;word-wrap:break-word;width:100%;height:100vh;top:0;position:fixed;z-index:10;text-align:center;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background-color:#00000075}\n'],encapsulation:2}),i})();const y=[{path:"",component:f,children:[{path:"teacher",loadChildren:()=>r.e(900).then(r.bind(r,3900)).then(i=>i.TeacherFunctionsModule)},{path:"student",loadChildren:()=>r.e(557).then(r.bind(r,4557)).then(i=>i.StudentFunctionsModule)},{path:"administrator",loadChildren:()=>Promise.all([r.e(382),r.e(336)]).then(r.bind(r,5336)).then(i=>i.AdministratorFunctionsModule)}]}];let U=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[s.Bz.forChild(y)],s.Bz]}),i})(),D=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i,bootstrap:[f]}),i.\u0275inj=t.cJS({imports:[[m.ez,g.m,U]]}),i})()}}]);