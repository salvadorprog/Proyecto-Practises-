"use strict";(self.webpackChunkPractises_Management=self.webpackChunkPractises_Management||[]).push([[156],{156:(I,u,r)=>{r.r(u),r.d(u,{BusinessModule:()=>T});var a=r(9808),m=r(8118),t=r(2382),l=r(5226),d=r.n(l),e=r(1223);var f=r(520),p=r(5295);let v=(()=>{class s{constructor(n,o){this.http=n,this.auth=o}newBusiness(n){return this.http.post("https://practises-management.herokuapp.com/business",n,this.auth.getHeadersToken())}}return s.\u0275fac=function(n){return new(n||s)(e.LFG(f.eN),e.LFG(p.e))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();function h(s,i){1&s&&(e.TgZ(0,"p"),e._uU(1,"Indique el nombre de la empresa"),e.qZA())}function g(s,i){1&s&&(e.TgZ(0,"p"),e._uU(1,"Indique el cif de la empresa"),e.qZA())}function B(s,i){1&s&&(e.TgZ(0,"p"),e._uU(1,"Indique un n\xfamero de estudiantes v\xe1lido"),e.qZA())}const A=[{path:"new-business",component:(()=>{class s{constructor(n,o){this.formBuilder=n,this.businessService=o}ngOnInit(){this.buildForm()}buildForm(){this.form=this.formBuilder.group({cif:["",{validators:[t.kI.required,t.kI.maxLength(9),t.kI.minLength(9)]}],name:["",{validators:[t.kI.required]}],numberOfStudents:["",{validators:[t.kI.required,t.kI.min(0)]}]})}send(){this.businessService.newBusiness(this.form.value).subscribe({next:n=>{d().fire("Empresa creado",`Se ha creado la empresa ${n.name}`,"success")},error:n=>{d().fire({icon:"error",title:"Oops...",text:null==n.error.message?"Ya existe una empresa con este cif":n.error.message})}})}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(t.qu),e.Y36(v))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-new-business"]],decls:16,vars:5,consts:[["id","container"],[1,"title"],["id","msform",3,"formGroup","submit"],["placeholder","Nombre","type","text","id","name","formControlName","name"],[4,"ngIf"],["placeholder","Cif","type","text","id","cif","formControlName","cif"],["type","number","min","0","id","numberOfStudents","formControlName","numberOfStudents"],["type","submit","value","Crear",3,"disabled"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"h1",1),e._uU(2,"Nueva empresa"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("submit",function(){return o.send()}),e.TgZ(4,"h3"),e._uU(5,"Datos de la empresa"),e.qZA(),e.TgZ(6,"div"),e._UZ(7,"input",3),e.YNc(8,h,2,0,"p",4),e.qZA(),e.TgZ(9,"div"),e._UZ(10,"input",5),e.YNc(11,g,2,0,"p",4),e.qZA(),e.TgZ(12,"div"),e._UZ(13,"input",6),e.YNc(14,B,2,0,"p",4),e.qZA(),e._UZ(15,"input",7),e.qZA(),e.qZA()),2&n&&(e.xp6(3),e.Q6J("formGroup",o.form),e.xp6(5),e.Q6J("ngIf",o.form.controls.name.invalid&&o.form.controls.name.touched),e.xp6(3),e.Q6J("ngIf",o.form.controls.cif.invalid&&o.form.controls.cif.touched),e.xp6(3),e.Q6J("ngIf",o.form.controls.cif.invalid&&o.form.controls.cif.touched),e.xp6(1),e.Q6J("disabled",o.form.invalid))},directives:[t._Y,t.JL,t.sg,t.Fj,t.JJ,t.u,a.O5,t.qQ,t.wV],styles:[""]}),s})(),canActivate:[r(9269).e]}];let C=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[m.Bz.forChild(A)],m.Bz]}),s})(),T=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[a.ez,C,t.u5,t.UX]]}),s})()}}]);