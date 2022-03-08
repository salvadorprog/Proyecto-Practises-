"use strict";(self.webpackChunkPractises_Management=self.webpackChunkPractises_Management||[]).push([[966],{4966:(C,s,o)=>{o.r(s),o.d(s,{StudentsModule:()=>M});var a=o(9808),i=o(8118),c=o(7579),u=o(5226),g=o.n(u),t=o(1223),p=o(2340),h=o(5295),v=o(520);let f=(()=>{class e{constructor(n,l){this.auth=n,this.http=l}getAll(){return this.http.get(p.N.serverAddress+"/enrollment",this.auth.getHeadersToken())}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(h.e),t.LFG(v.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var m=o(5415);function Z(e,r){if(1&e&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.qZA()),2&e){const n=r.$implicit;t.xp6(2),t.Oqu(n.id),t.xp6(2),t.Oqu(n.date)}}let T=(()=>{class e{constructor(n){this.enrollmentService=n,this.enrollments=[],this.dtOptions={},this.dtTrigger=new c.x}ngOnInit(){this.enrollmentService.getAll().subscribe({next:n=>{this.enrollments=n,this.dtTrigger.next(this.enrollments)},error:n=>{g().fire({icon:"error",title:"Oops...",text:null==n.error.mensaje?"Servidor no disponible":n.error.mensaje})}})}ngOnDestroy(){this.dtTrigger.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-management-enrollments"]],decls:12,vars:3,consts:[[1,"container"],[1,"card","m-5","p-3"],[1,"card-body"],["datatable","",1,"table","table-bordered","table-striped","table-hover",3,"dtOptions","dtTrigger"],[4,"ngFor","ngForOf"]],template:function(n,l){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"table",3),t.TgZ(4,"thead"),t.TgZ(5,"tr"),t.TgZ(6,"th"),t._uU(7,"Identificador"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Fecha"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"tbody"),t.YNc(11,Z,5,2,"tr",4),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(3),t.Q6J("dtOptions",l.dtOptions)("dtTrigger",l.dtTrigger),t.xp6(8),t.Q6J("ngForOf",l.enrollments))},directives:[m.G,a.sg],styles:[""]}),e})(),A=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-new-enrollment"]],decls:2,vars:0,template:function(n,l){1&n&&(t.TgZ(0,"p"),t._uU(1,"new-enrollment works!"),t.qZA())},styles:[""]}),e})();var d=o(9269);const S=[{path:"management-enrollments",component:T,canActivate:[d.e]},{path:"new-enrollment",component:A,canActivate:[d.e]}];let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[i.Bz.forChild(S)],i.Bz]}),e})(),M=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.ez,y,m.T]]}),e})()}}]);