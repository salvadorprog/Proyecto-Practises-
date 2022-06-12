"use strict";(self.webpackChunkPractises_Management=self.webpackChunkPractises_Management||[]).push([[592],{164:(g,l,o)=>{o.d(l,{m:()=>a});var e=o(2340),n=o(1223),h=o(3958),d=o(5295),u=o(520);let a=(()=>{class c{constructor(t,r,s){this.userService=t,this.authService=r,this.http=s}getAllBusiness(){return this.http.get(e.N.serverAddress+"/business/",this.authService.getHeadersToken())}getBusinessByName(t){return this.http.get(e.N.serverAddress+"/location/business/?name="+t,this.authService.getHeadersToken())}getAllLocations(){return this.http.get(e.N.serverAddress+"/location/business/",this.authService.getHeadersToken())}}return c.\u0275fac=function(t){return new(t||c)(n.LFG(h.K),n.LFG(d.e),n.LFG(u.eN))},c.\u0275prov=n.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},9207:(g,l,o)=>{o.d(l,{F:()=>a});var e=o(2340),n=o(1223),h=o(3958),d=o(5295),u=o(520);let a=(()=>{class c{constructor(t,r,s){this.userService=t,this.authService=r,this.http=s}getCenterOfAdministrator(){return this.http.get(e.N.serverAddress+"/administrator/"+this.userService.getDni()+"/school",this.authService.getHeadersToken())}getAllCenters(){return this.http.get(e.N.serverAddress+"/school/",this.authService.getHeadersToken())}getCentersByName(t){return this.http.get(e.N.serverAddress+"/school/?name="+t,this.authService.getHeadersToken())}getAllLocations(){return this.http.get(e.N.serverAddress+"/location/schools",this.authService.getHeadersToken())}createCenter(t){return this.http.post(e.N.serverAddress+"/school",t,this.authService.getHeadersToken())}setLocation(t,r){return this.http.post(e.N.serverAddress+"/school/"+t.id+"/location",r,this.authService.getHeadersToken())}setCurrentAdministrator(t){return this.http.post(e.N.serverAddress+"/administrator/"+this.userService.getDni()+"/school",t,this.authService.getHeadersToken())}briefing(t){return this.http.get(e.N.serverAddress+"/school/"+t.id+"/briefing",this.authService.getHeadersToken())}getUbication(t){return this.http.get(e.N.serverAddress+"/school/"+t.id+"/location",this.authService.getHeadersToken())}updateLocation(t){return this.http.put(e.N.serverAddress+"/school/"+t.id+"/location",t.location,this.authService.getHeadersToken())}updateCenter(t){return this.http.put(e.N.serverAddress+"/school/"+t.id,t,this.authService.getHeadersToken())}getMovementsBySchool(t){return this.http.get(e.N.serverAddress+"/school/"+t.id+"/movement",this.authService.getHeadersToken())}deleteAllMovement(t){return this.http.delete(e.N.serverAddress+"/school/"+t.id+"/movement",this.authService.getHeadersToken())}getTemperature(t){return this.http.get(e.N.serverAddress+"/school/"+t.id+"/reg-temp",this.authService.getHeadersToken())}}return c.\u0275fac=function(t){return new(t||c)(n.LFG(h.K),n.LFG(d.e),n.LFG(u.eN))},c.\u0275prov=n.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},9976:(g,l,o)=>{o.d(l,{Y:()=>c});var e=o(520),n=o(1223),h=o(2340);let d=(()=>{class i{constructor(r){this.http=r}upload(r){const s=new FormData;s.append("file",r);const p=new e.aW("POST",`${h.N.serverFileAddress}/upload`,s,{reportProgress:!0,responseType:"json"});return this.http.request(p)}}return i.\u0275fac=function(r){return new(r||i)(n.LFG(e.eN))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var u=o(9808);function a(i,t){if(1&i&&(n.TgZ(0,"p",4),n._uU(1),n.qZA()),2&i){const r=n.oxw();n.xp6(1),n.hij("",r.progress," %")}}let c=(()=>{class i{constructor(r){this.fileService=r,this.textToShow="",this.fileName=new n.vpe,this.progress=0,this.message=""}ngOnInit(){}selectFile(r){this.selectedFiles=r.target.files,this.upload()}upload(){if(this.progress=0,this.selectedFiles){const r=this.selectedFiles.item(0);r&&(this.currentFile=r,this.fileService.upload(this.currentFile).subscribe({next:s=>{s.type===e.dt.UploadProgress?this.progress=Math.round(100*s.loaded/s.total):s instanceof e.Zn&&(console.log(s),this.fileName.emit(s.body.id))},error:s=>{console.log(s),this.progress=0,this.message=s.error&&s.error.message?s.error.message:"Error al subir",this.currentFile=void 0}})),this.selectedFiles=void 0}}}return i.\u0275fac=function(r){return new(r||i)(n.Y36(d))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-file-upload"]],inputs:{textToShow:"textToShow"},outputs:{fileName:"fileName"},decls:5,vars:2,consts:[[1,"custom-input-file","col-md-6","col-sm-6","col-xs-6"],["type","file","accept",".bmp,.jpg,.png",1,"input-file",3,"change"],["src","assets/img/upload.png"],["id","progress",4,"ngIf"],["id","progress"]],template:function(r,s){1&r&&(n.TgZ(0,"div",0),n.TgZ(1,"input",1),n.NdJ("change",function(v){return s.selectFile(v)}),n.qZA(),n._uU(2),n._UZ(3,"img",2),n.YNc(4,a,2,1,"p",3),n.qZA()),2&r&&(n.xp6(2),n.hij(" ",s.textToShow," "),n.xp6(2),n.Q6J("ngIf",0!=s.progress))},directives:[u.O5],styles:[".custom-input-file[_ngcontent-%COMP%]{background-color:#f6f6f6;cursor:pointer;margin:0 auto;border:1px dashed grey;overflow:hidden;position:relative;text-align:center;width:100%;height:100%}.custom-input-file[_ngcontent-%COMP%]   .input-file[_ngcontent-%COMP%]{border:10000px solid transparent;cursor:pointer;font-size:10000px;margin:0;opacity:0;outline:0 none;padding:0;position:absolute;right:-1000px;top:-1000px}.input-file[_ngcontent-%COMP%]{z-index:10}img[_ngcontent-%COMP%]{width:70px;margin-top:20px;animation-duration:2s;animation-name:animate;margin-bottom:20px;animation-iteration-count:infinite}div[_ngcontent-%COMP%]{display:flex;flex-direction:column;border-radius:5px;align-items:center;justify-content:center;padding:20px}@keyframes animate{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}"]}),i})()},2864:(g,l,o)=>{o.d(l,{B:()=>u});var e=o(1223),n=o(164),h=o(9808);function d(a,c){if(1&a){const i=e.EpF();e.TgZ(0,"div",4),e.NdJ("click",function(){const s=e.CHM(i).$implicit;return e.oxw().select(s.cif)}),e._UZ(1,"img",5),e.TgZ(2,"p"),e._uU(3),e.qZA(),e.qZA()}if(2&a){const i=c.$implicit;e.xp6(1),e.s9C("src",i.image,e.LSH),e.xp6(2),e.Oqu(i.name)}}let u=(()=>{class a{constructor(i){this.businessSvr=i,this.business=[],this.cif=new e.vpe}ngOnInit(){this.businessSvr.getAllBusiness().subscribe({next:i=>{this.business=i},error:()=>{}})}select(i){this.cif.emit(i)}}return a.\u0275fac=function(i){return new(i||a)(e.Y36(n.m))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-select-business"]],outputs:{cif:"cif"},decls:6,vars:1,consts:[["id","businessDiv"],["id","search"],["id","businessDivs"],["class","business",3,"click",4,"ngFor","ngForOf"],[1,"business",3,"click"],[3,"src"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"p"),e._uU(2,"Seleccione empresa"),e.qZA(),e._UZ(3,"div",1),e.TgZ(4,"div",2),e.YNc(5,d,4,2,"div",3),e.qZA(),e.qZA()),2&i&&(e.xp6(5),e.Q6J("ngForOf",t.business))},directives:[h.sg],styles:["#businessDiv[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:nth-child(1){font-size:20px;margin-top:29px;margin-left:30px}#businessDiv[_ngcontent-%COMP%]{height:94%}#businessDivs[_ngcontent-%COMP%]{margin-top:10px;height:92%;overflow:auto}.business[_ngcontent-%COMP%]{height:66px;width:100%;display:flex;flex-direction:row;flex-wrap:wrap;align-content:center;align-items:center;transition:.2s;padding-left:12%}.business[_ngcontent-%COMP%]:hover{background-color:#dfdfdf}.business[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:nth-child(2){margin-left:20px}.business[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]:nth-child(1){width:56px;height:39px}"]}),a})()},2360:(g,l,o)=>{o.d(l,{A:()=>i});var e=o(1223),n=o(2340),h=o(520),d=o(5295);let u=(()=>{class t{constructor(s,p){this.http=s,this.authService=p}getAllTeachers(){return this.http.get(n.N.serverAddress+"/teacher/",this.authService.getHeadersToken())}}return t.\u0275fac=function(s){return new(s||t)(e.LFG(h.eN),e.LFG(d.e))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var a=o(9808);function c(t,r){if(1&t){const s=e.EpF();e.TgZ(0,"div",3),e.NdJ("click",function(){const m=e.CHM(s).$implicit;return e.oxw().select(m.dni)}),e._UZ(1,"img",4),e.TgZ(2,"p"),e._uU(3),e.qZA(),e.qZA()}if(2&t){const s=r.$implicit;e.xp6(1),e.s9C("src",s.image,e.LSH),e.xp6(2),e.Oqu(s.name)}}let i=(()=>{class t{constructor(s){this.teacherSrv=s,this.dni=new e.vpe}ngOnInit(){this.teacherSrv.getAllTeachers().subscribe({next:s=>{this.teachers=s},error:s=>{console.log(s)}})}select(s){this.dni.emit(s)}}return t.\u0275fac=function(s){return new(s||t)(e.Y36(u))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-select-teacher"]],outputs:{dni:"dni"},decls:5,vars:1,consts:[["id","businessDiv"],["id","businessDivs"],["class","business",3,"click",4,"ngFor","ngForOf"],[1,"business",3,"click"],[3,"src"]],template:function(s,p){1&s&&(e.TgZ(0,"div",0),e.TgZ(1,"p"),e._uU(2,"Seleccione profesor"),e.qZA(),e.TgZ(3,"div",1),e.YNc(4,c,4,2,"div",2),e.qZA(),e.qZA()),2&s&&(e.xp6(4),e.Q6J("ngForOf",p.teachers))},directives:[a.sg],styles:["#businessDiv[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:nth-child(1){font-size:20px;margin-top:29px;margin-left:30px}#businessDiv[_ngcontent-%COMP%]{height:94%}#businessDivs[_ngcontent-%COMP%]{margin-top:10px;height:92%;overflow:auto}.business[_ngcontent-%COMP%]{height:66px;width:100%;display:flex;flex-direction:row;flex-wrap:wrap;align-content:center;align-items:center;transition:.2s;padding-left:12%}.business[_ngcontent-%COMP%]:hover{background-color:#dfdfdf}.business[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:nth-child(2){margin-left:20px}.business[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]:nth-child(1){width:56px;height:39px}"]}),t})()}}]);