(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{WHHo:function(t,e,a){"use strict";a.r(e),a.d(e,"AuthorModule",function(){return tt});var c=a("tyNb"),i=a("umRm"),o=a("+0xr"),r=a("M9IT"),s=a("Dh3D"),n=a("nYR2"),b=a("KMDt"),m=a("0IaG"),l=a("3Pt+"),d=a("fXoL"),u=a("iiaH"),h=a("73Qm"),p=a("Qzba"),f=a("7U+1"),C=a("Wp6s"),g=a("kmnG"),E=a("qFsG"),S=a("ofXK"),R=a("bTqV"),T=a("NFeN"),D=a("sYmb");function O(t,e){1&t&&(d.Ub(0,"mat-error"),d.Ec(1),d.hc(2,"translate"),d.Tb()),2&t&&(d.Cb(1),d.Gc(" ",d.ic(2,1,"SYSTEM.RECORD.VALIDATION.NAME_REQUIRED")," "))}const U=function(){return{length:"64"}};function w(t,e){1&t&&(d.Ub(0,"mat-error"),d.Ec(1),d.hc(2,"translate"),d.Tb()),2&t&&(d.Cb(1),d.Gc(" ",d.jc(2,1,"SYSTEM.RECORD.VALIDATION.LENGTH_MAX",d.oc(4,U)),""))}function A(t,e){1&t&&(d.Ub(0,"mat-error"),d.Ec(1),d.hc(2,"translate"),d.Tb()),2&t&&(d.Cb(1),d.Gc(" ",d.ic(2,1,"SYSTEM.RECORD.VALIDATION.LAST_NAME_REQUIRED")," "))}function I(t,e){1&t&&(d.Ub(0,"mat-error"),d.Ec(1),d.hc(2,"translate"),d.Tb()),2&t&&(d.Cb(1),d.Gc(" ",d.jc(2,1,"SYSTEM.RECORD.VALIDATION.LENGTH_MAX",d.oc(4,U)),""))}let v=(()=>{class t{constructor(t,e,a,c,i,o){this.dialogRef=t,this.dataService=a,this.translatorService=c,this.customEventService=i,this.fb=o,this.isRequesting=!1,this.subs=new b.a,this.hasError=(t,e)=>this.dataFRM.controls[t].hasError(e),this.data=e,console.log(this.data),this.createEmptyForm(),this.data.editMode&&this.getRecordById()}ngOnInit(){}ngOnDestroy(){this.subs.unsubscribe()}createEmptyForm(){this.dataFRM=this.fb.group({id:0,name:[null,l.q.compose([l.q.required,l.q.maxLength(64)])],lastName:[null,l.q.compose([l.q.required,l.q.maxLength(64)])]})}getRecordById(){this.isRequesting=!0,this.subs.add(this.dataService.getAny(`/api/author/${this.data.itemId}`).pipe(Object(n.a)(()=>{this.isRequesting=!1})).subscribe(t=>{this.author=t,this.dataFRM.patchValue(this.author)},t=>{}))}onClose(){this.dialogRef.close()}saveData(){console.log(this.dataFRM.value),(this.data.editMode?this.dataService.put("/api/author",this.dataFRM.value):this.dataService.post("/api/author",this.dataFRM.value)).pipe(Object(n.a)(()=>{this.isRequesting=!1})).subscribe(t=>{t&&(this.customEventService.publish("author-updated"),this.onClose())})}}return t.\u0275fac=function(e){return new(e||t)(d.Ob(m.f),d.Ob(m.a),d.Ob(u.a),d.Ob(h.a),d.Ob(p.a),d.Ob(l.d))},t.\u0275cmp=d.Ib({type:t,selectors:[["app-edit-author"]],decls:31,vars:19,consts:[[3,"title"],["novalidate","","autocomplete","off",1,"main-form",3,"formGroup"],["appearance","outline"],["matInput","","type","text","formControlName","name","id","name","required","","maxlength","64",1,"form-control"],[4,"ngIf"],["matInput","","type","text","formControlName","lastName","id","lastName","required","","maxlength","64",1,"form-control"],["align","end"],["mat-raised-button","","color","primary","tabindex","1",3,"disabled","click"],["type","button","mat-raised-button","","color","warn",3,"click"]],template:function(t,e){1&t&&(d.Ub(0,"app-dialog-widget",0),d.Ub(1,"form",1),d.Ub(2,"mat-card"),d.Ub(3,"mat-card-content"),d.Ub(4,"mat-form-field",2),d.Ub(5,"mat-label"),d.Ec(6),d.hc(7,"translate"),d.Tb(),d.Pb(8,"input",3),d.Cc(9,O,3,3,"mat-error",4),d.Cc(10,w,3,5,"mat-error",4),d.Tb(),d.Pb(11,"br"),d.Ub(12,"mat-form-field",2),d.Ub(13,"mat-label"),d.Ec(14),d.hc(15,"translate"),d.Tb(),d.Pb(16,"input",5),d.Cc(17,A,3,3,"mat-error",4),d.Cc(18,I,3,5,"mat-error",4),d.Tb(),d.Pb(19,"br"),d.Tb(),d.Ub(20,"mat-card-actions",6),d.Ub(21,"button",7),d.cc("click",function(){return e.saveData()}),d.Ub(22,"mat-icon"),d.Ec(23,"save"),d.Tb(),d.Ec(24),d.hc(25,"translate"),d.Tb(),d.Ub(26,"button",8),d.cc("click",function(){return e.onClose()}),d.Ub(27,"mat-icon"),d.Ec(28,"clear"),d.Tb(),d.Ec(29),d.hc(30,"translate"),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb()),2&t&&(d.mc("title",e.data.editMode?"AUTHOR.EDIT":"AUTHOR.ADD"),d.Cb(1),d.mc("formGroup",e.dataFRM),d.Cb(5),d.Fc(d.ic(7,11,"AUTHOR.FIELDS.NAME")),d.Cb(3),d.mc("ngIf",e.hasError("name","required")),d.Cb(1),d.mc("ngIf",e.hasError("name","maxlength")),d.Cb(4),d.Fc(d.ic(15,13,"AUTHOR.FIELDS.LAST_NAME")),d.Cb(3),d.mc("ngIf",e.hasError("lastName","required")),d.Cb(1),d.mc("ngIf",e.hasError("lastName","maxlength")),d.Cb(3),d.mc("disabled",!e.dataFRM.valid||e.isRequesting),d.Cb(3),d.Gc(" ",d.ic(25,15,"SYSTEM.RECORD.SAVE")," "),d.Cb(5),d.Gc(" ",d.ic(30,17,"SYSTEM.RECORD.CANCEL")," "))},directives:[f.a,l.r,l.m,l.f,C.a,C.c,g.c,g.f,E.b,l.c,l.l,l.e,l.p,l.h,S.l,C.b,R.a,T.a,g.b],pipes:[D.c],styles:[""]}),t})();var M=a("dRJ3"),y=a("bv9b"),N=a("e8Yk"),q=a("znSr"),F=a("FwHD");function H(t,e){1&t&&d.Pb(0,"mat-progress-bar",18)}function L(t,e){1&t&&(d.Ub(0,"mat-header-cell"),d.Ec(1),d.hc(2,"translate"),d.Tb()),2&t&&(d.Cb(1),d.Gc("",d.ic(2,1,"AUTHOR.FIELDS.NAME")," "))}function k(t,e){if(1&t&&(d.Ub(0,"mat-cell"),d.Ec(1),d.Tb()),2&t){const t=e.$implicit;d.Cb(1),d.Hc(" ",t.name," ",t.lastName," ")}}function G(t,e){1&t&&(d.Ub(0,"mat-header-cell"),d.Ec(1),d.hc(2,"translate"),d.Tb()),2&t&&(d.Cb(1),d.Gc("",d.ic(2,1,"AUTHOR.FIELDS.BOOKS")," "))}function x(t,e){if(1&t&&d.Pb(0,"app-tooltip",20),2&t){const t=d.gc().$implicit,e=d.gc();d.mc("msg",e.getBookNames(t.books))}}function P(t,e){if(1&t&&(d.Ub(0,"mat-cell"),d.Ec(1),d.Cc(2,x,1,1,"app-tooltip",19),d.Tb()),2&t){const t=e.$implicit;d.Cb(1),d.Gc(" ",t.books.length," "),d.Cb(1),d.mc("ngIf",t.books.length)}}function Y(t,e){1&t&&(d.Ub(0,"mat-header-cell"),d.Ec(1),d.hc(2,"translate"),d.Tb()),2&t&&(d.Cb(1),d.Gc("",d.ic(2,1,"SYSTEM.RECORD.RECORD_STATE")," "))}function j(t,e){if(1&t&&(d.Ub(0,"mat-cell"),d.Ec(1),d.Tb()),2&t){const t=e.$implicit;d.Cb(1),d.Gc(" ",t.recordState," ")}}function V(t,e){1&t&&(d.Ub(0,"mat-header-cell",21),d.Ec(1),d.hc(2,"translate"),d.Tb()),2&t&&(d.Cb(1),d.Gc(" ",d.ic(2,1,"SYSTEM.RECORD.UPDATED_ON"),""))}function _(t,e){if(1&t&&(d.Ub(0,"mat-cell",22),d.Ec(1),d.hc(2,"timeAgo"),d.Tb()),2&t){const t=e.$implicit;d.Cb(1),d.Gc(" ",d.ic(2,1,t.updatedAt)," ")}}function $(t,e){1&t&&(d.Ub(0,"mat-header-cell"),d.Ec(1),d.hc(2,"translate"),d.Tb()),2&t&&(d.Cb(1),d.Gc(" ",d.ic(2,1,"SYSTEM.RECORD.ACTIONS")," "))}function z(t,e){if(1&t){const t=d.Vb();d.Ub(0,"mat-cell"),d.Ub(1,"button",23),d.cc("click",function(){d.wc(t);const a=e.$implicit;return d.gc().editAuthor(a.id,!0)}),d.Ub(2,"mat-icon"),d.Ec(3,"create"),d.Tb(),d.Tb(),d.Tb()}}function B(t,e){1&t&&d.Pb(0,"mat-header-row")}function Q(t,e){1&t&&d.Pb(0,"mat-row")}function X(t,e){1&t&&d.Pb(0,"mat-row")}const J=function(){return[10,20,50,100,200,400,1e3]};let K=(()=>{class t{constructor(t,e,a){this.dataService=t,this.customEventService=e,this.dialog=a,this.dataSource=new o.l,this.isRequesting=!1,this.displayedColumns=["name","books","recordState","updatedAt","id"],this.subs=new b.a,this.authorList=[],this.searchTerm=""}ngOnInit(){this.loadData(),this.subs.add(this.customEventService.on("author-updated").subscribe(()=>this.loadData()),this.dataService.broadcastSearchTerms.subscribe(t=>{this.searchTerm=t,this.applyFilter()}))}ngOnDestroy(){this.subs.unsubscribe()}loadData(){this.isRequesting=!0,this.subs.add(this.dataService.getAny("/api/author").pipe(Object(n.a)(()=>{this.isRequesting=!1})).subscribe(t=>{this.authorList=t,this.dataSource.data=this.authorList,this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator,console.log(this.authorList)},t=>{}))}editAuthor(t,e=!1){const a=new m.c;a.data={itemId:t,editMode:e},a.autoFocus=!0,a.width="50%",this.dialog.open(v,a).afterClosed().subscribe(t=>{})}getBookNames(t){return t?t.map(t=>t.title).join(", "):""}applyFilter(){this.dataSource.filter=this.searchTerm.trim().toLowerCase()}}return t.\u0275fac=function(e){return new(e||t)(d.Ob(u.a),d.Ob(p.a),d.Ob(m.b))},t.\u0275cmp=d.Ib({type:t,selectors:[["app-author-home"]],viewQuery:function(t,e){if(1&t&&(d.Ic(r.a,1),d.Ic(s.a,1)),2&t){let t;d.tc(t=d.dc())&&(e.paginator=t.first),d.tc(t=d.dc())&&(e.sort=t.first)}},decls:27,vars:8,consts:[["mode","query",4,"ngIf"],["matSort","",3,"dataSource"],["table",""],["matColumnDef","name"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","books"],["matColumnDef","recordState"],["matColumnDef","updatedAt"],["mat-sort-header","","fxHide","","fxShow.gt-md","",4,"matHeaderCellDef"],["fxHide","","fxShow.gt-md","",4,"matCellDef"],["matColumnDef","id"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[4,"matRowDef","matRowDefColumns"],[4,"matNoDataRow"],["showFirstLastButtons","true",3,"pageSize","pageSizeOptions"],["paginator",""],["mat-fab","","color","primary",1,"fab-add-button",3,"click"],["mode","query"],[3,"msg",4,"ngIf"],[3,"msg"],["mat-sort-header","","fxHide","","fxShow.gt-md",""],["fxHide","","fxShow.gt-md",""],["mat-icon-button","",3,"click"]],template:function(t,e){1&t&&(d.Cc(0,H,1,0,"mat-progress-bar",0),d.Pb(1,"app-search-bar"),d.Ub(2,"mat-table",1,2),d.Sb(4,3),d.Cc(5,L,3,3,"mat-header-cell",4),d.Cc(6,k,2,2,"mat-cell",5),d.Rb(),d.Sb(7,6),d.Cc(8,G,3,3,"mat-header-cell",4),d.Cc(9,P,3,2,"mat-cell",5),d.Rb(),d.Sb(10,7),d.Cc(11,Y,3,3,"mat-header-cell",4),d.Cc(12,j,2,1,"mat-cell",5),d.Rb(),d.Sb(13,8),d.Cc(14,V,3,3,"mat-header-cell",9),d.Cc(15,_,3,3,"mat-cell",10),d.Rb(),d.Sb(16,11),d.Cc(17,$,3,3,"mat-header-cell",4),d.Cc(18,z,4,0,"mat-cell",5),d.Rb(),d.Cc(19,B,1,0,"mat-header-row",12),d.Cc(20,Q,1,0,"mat-row",13),d.Cc(21,X,1,0,"mat-row",14),d.Tb(),d.Pb(22,"mat-paginator",15,16),d.Ub(24,"button",17),d.cc("click",function(){return e.editAuthor()}),d.Ub(25,"mat-icon"),d.Ec(26,"add"),d.Tb(),d.Tb()),2&t&&(d.mc("ngIf",e.isRequesting),d.Cb(2),d.mc("dataSource",e.dataSource),d.Cb(17),d.mc("matHeaderRowDef",e.displayedColumns)("matHeaderRowDefSticky",!0),d.Cb(1),d.mc("matRowDefColumns",e.displayedColumns),d.Cb(2),d.mc("pageSize",10)("pageSizeOptions",d.oc(7,J)))},directives:[S.l,M.a,o.k,s.a,o.c,o.e,o.b,o.g,o.j,o.h,r.a,R.a,T.a,y.a,o.d,o.a,N.a,s.b,q.a,o.f,o.i],pipes:[D.c,F.a],styles:[""]}),t})();const W={routes:c.c.forChild([{path:"",component:i.a,children:[{path:"",component:K,children:[{path:"add",component:v},{path:"edit/:id",component:v}]},{path:"**",redirectTo:""}]}]),components:[K,v]};var Z=a("PCNd");let tt=(()=>{class t{static forRoot(){return{ngModule:t,providers:[]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Mb({type:t}),t.\u0275inj=d.Lb({imports:[[W.routes,Z.a]]}),t})()}}]);