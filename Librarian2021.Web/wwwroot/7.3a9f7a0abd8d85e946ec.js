(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{fj2Z:function(t,e,a){"use strict";a.r(e),a.d(e,"PersonModule",function(){return et});var c=a("PCNd"),r=a("tyNb"),o=a("umRm"),n=a("+0xr"),i=a("M9IT"),s=a("Dh3D"),b=a("nYR2"),m=a("KMDt"),l=a("0IaG"),d=a("3Pt+"),u=a("fXoL"),h=a("iiaH"),f=a("73Qm"),p=a("Qzba"),E=a("Wp6s"),C=a("kmnG"),S=a("qFsG"),R=a("ofXK"),T=a("bTqV"),D=a("NFeN"),g=a("sYmb");function N(t,e){1&t&&(u.Ub(0,"mat-error"),u.Ec(1),u.hc(2,"translate"),u.Tb()),2&t&&(u.Cb(1),u.Gc(" ",u.ic(2,1,"SYSTEM.RECORD.VALIDATION.NAME_REQUIRED")," "))}const I=function(){return{length:"64"}};function O(t,e){1&t&&(u.Ub(0,"mat-error"),u.Ec(1),u.hc(2,"translate"),u.Tb()),2&t&&(u.Cb(1),u.Gc(" ",u.jc(2,1,"SYSTEM.RECORD.VALIDATION.LENGTH_MAX",u.oc(4,I)),""))}function U(t,e){1&t&&(u.Ub(0,"mat-error"),u.Ec(1),u.hc(2,"translate"),u.Tb()),2&t&&(u.Cb(1),u.Gc(" ",u.ic(2,1,"SYSTEM.RECORD.VALIDATION.LAST_NAME_REQUIRED")," "))}function M(t,e){1&t&&(u.Ub(0,"mat-error"),u.Ec(1),u.hc(2,"translate"),u.Tb()),2&t&&(u.Cb(1),u.Gc(" ",u.jc(2,1,"SYSTEM.RECORD.VALIDATION.LENGTH_MAX",u.oc(4,I)),""))}function w(t,e){1&t&&(u.Ub(0,"mat-error"),u.Ec(1),u.hc(2,"translate"),u.Tb()),2&t&&(u.Cb(1),u.Gc(" ",u.ic(2,1,"SYSTEM.RECORD.VALIDATION.PHONE_NUMBER_REQUIRED")," "))}function A(t,e){1&t&&(u.Ub(0,"mat-error"),u.Ec(1),u.hc(2,"translate"),u.Tb()),2&t&&(u.Cb(1),u.Gc(" ",u.jc(2,1,"SYSTEM.RECORD.VALIDATION.LENGTH_MAX",u.oc(4,I)),""))}let v=(()=>{class t{constructor(t,e,a,c,r,o){this.dialogRef=t,this.dataService=a,this.translatorService=c,this.customEventService=r,this.fb=o,this.isRequesting=!1,this.subs=new m.a,this.hasError=(t,e)=>this.dataFRM.controls[t].hasError(e),this.data=e,console.log(this.data),this.createEmptyForm(),this.data.editMode&&this.getRecordById()}ngOnInit(){}ngOnDestroy(){this.subs.unsubscribe()}createEmptyForm(){this.dataFRM=this.fb.group({id:0,name:[null,d.q.compose([d.q.required,d.q.maxLength(64)])],lastName:[null,d.q.compose([d.q.required,d.q.maxLength(64)])],phoneNumber:[null,d.q.compose([d.q.required,d.q.maxLength(64)])],address:null})}getRecordById(){this.isRequesting=!0,this.subs.add(this.dataService.getAny(`/api/person/${this.data.itemId}`).pipe(Object(b.a)(()=>{this.isRequesting=!1})).subscribe(t=>{this.person=t,this.dataFRM.patchValue(this.person)},t=>{}))}onClose(){this.dialogRef.close()}saveData(){console.log(this.dataFRM.value),(this.data.editMode?this.dataService.put("/api/person",this.dataFRM.value):this.dataService.post("/api/person",this.dataFRM.value)).pipe(Object(b.a)(()=>{this.isRequesting=!1})).subscribe(t=>{t&&(this.customEventService.publish("person-updated"),this.onClose())})}}return t.\u0275fac=function(e){return new(e||t)(u.Ob(l.f),u.Ob(l.a),u.Ob(h.a),u.Ob(f.a),u.Ob(p.a),u.Ob(d.d))},t.\u0275cmp=u.Ib({type:t,selectors:[["app-edit-person"]],decls:45,vars:26,consts:[["novalidate","","autocomplete","off",1,"main-form",3,"formGroup"],["appearance","outline"],["matInput","","type","text","formControlName","name","id","name","required","","maxlength","64",1,"form-control"],[4,"ngIf"],["matInput","","type","text","formControlName","lastName","id","lastName","required","","maxlength","64",1,"form-control"],["matInput","","type","text","formControlName","phoneNumber","id","phoneNumber","required","","maxlength","64",1,"form-control"],["matInput","","type","text","formControlName","address","id","address",1,"form-control"],["align","end"],["mat-raised-button","","color","primary","tabindex","1",3,"disabled","click"],["type","button","mat-raised-button","","color","warn",3,"click"]],template:function(t,e){1&t&&(u.Ub(0,"mat-dialog-content"),u.Ub(1,"form",0),u.Ub(2,"mat-card"),u.Ub(3,"mat-card-content"),u.Ub(4,"mat-form-field",1),u.Ub(5,"mat-label"),u.Ec(6),u.hc(7,"translate"),u.Tb(),u.Pb(8,"input",2),u.Cc(9,N,3,3,"mat-error",3),u.Cc(10,O,3,5,"mat-error",3),u.Tb(),u.Pb(11,"br"),u.Ub(12,"mat-form-field",1),u.Ub(13,"mat-label"),u.Ec(14),u.hc(15,"translate"),u.Tb(),u.Pb(16,"input",4),u.Cc(17,U,3,3,"mat-error",3),u.Cc(18,M,3,5,"mat-error",3),u.Tb(),u.Pb(19,"br"),u.Ub(20,"mat-form-field",1),u.Ub(21,"mat-label"),u.Ec(22),u.hc(23,"translate"),u.Tb(),u.Pb(24,"input",5),u.Cc(25,w,3,3,"mat-error",3),u.Cc(26,A,3,5,"mat-error",3),u.Tb(),u.Pb(27,"br"),u.Ub(28,"mat-form-field",1),u.Ub(29,"mat-label"),u.Ec(30),u.hc(31,"translate"),u.Tb(),u.Pb(32,"input",6),u.Tb(),u.Pb(33,"br"),u.Tb(),u.Ub(34,"mat-card-actions",7),u.Ub(35,"button",8),u.cc("click",function(){return e.saveData()}),u.Ub(36,"mat-icon"),u.Ec(37,"save"),u.Tb(),u.Ec(38),u.hc(39,"translate"),u.Tb(),u.Ub(40,"button",9),u.cc("click",function(){return e.onClose()}),u.Ub(41,"mat-icon"),u.Ec(42,"clear"),u.Tb(),u.Ec(43),u.hc(44,"translate"),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb()),2&t&&(u.Cb(1),u.mc("formGroup",e.dataFRM),u.Cb(5),u.Fc(u.ic(7,14,"PERSON.FIELDS.NAME")),u.Cb(3),u.mc("ngIf",e.hasError("name","required")),u.Cb(1),u.mc("ngIf",e.hasError("name","maxlength")),u.Cb(4),u.Fc(u.ic(15,16,"PERSON.FIELDS.LAST_NAME")),u.Cb(3),u.mc("ngIf",e.hasError("lastName","required")),u.Cb(1),u.mc("ngIf",e.hasError("lastName","maxlength")),u.Cb(4),u.Fc(u.ic(23,18,"PERSON.FIELDS.PHONE_NUMBER")),u.Cb(3),u.mc("ngIf",e.hasError("phoneNumber","required")),u.Cb(1),u.mc("ngIf",e.hasError("phoneNumber","maxlength")),u.Cb(4),u.Fc(u.ic(31,20,"PERSON.FIELDS.ADDRESS")),u.Cb(5),u.mc("disabled",!e.dataFRM.valid||e.isRequesting),u.Cb(3),u.Gc(" ",u.ic(39,22,"SYSTEM.RECORD.SAVE")," "),u.Cb(5),u.Gc(" ",u.ic(44,24,"SYSTEM.RECORD.CANCEL")," "))},directives:[l.d,d.r,d.m,d.f,E.a,E.c,C.c,C.f,S.b,d.c,d.l,d.e,d.p,d.h,R.l,E.b,T.a,D.a,C.b],pipes:[g.c],styles:[""]}),t})();var q=a("bv9b"),P=a("znSr"),y=a("FwHD");function L(t,e){1&t&&u.Pb(0,"mat-progress-bar",19)}function G(t,e){1&t&&(u.Ub(0,"mat-header-cell"),u.Ec(1),u.hc(2,"translate"),u.Tb()),2&t&&(u.Cb(1),u.Gc("",u.ic(2,1,"PERSON.FIELDS.NAME")," "))}function F(t,e){if(1&t&&(u.Ub(0,"mat-cell"),u.Ec(1),u.Tb()),2&t){const t=e.$implicit;u.Cb(1),u.Hc(" ",t.name," ",t.lastName," ")}}function x(t,e){1&t&&(u.Ub(0,"mat-header-cell"),u.Ec(1),u.hc(2,"translate"),u.Tb()),2&t&&(u.Cb(1),u.Gc("",u.ic(2,1,"PERSON.FIELDS.PHONE_NUMBER")," "))}function H(t,e){if(1&t&&(u.Ub(0,"mat-cell"),u.Ec(1),u.Tb()),2&t){const t=e.$implicit;u.Cb(1),u.Gc(" ",t.phoneNumber," ")}}function k(t,e){1&t&&(u.Ub(0,"mat-header-cell"),u.Ec(1),u.hc(2,"translate"),u.Tb()),2&t&&(u.Cb(1),u.Gc("",u.ic(2,1,"PERSON.FIELDS.ADDRESS")," "))}function Y(t,e){if(1&t&&(u.Ub(0,"mat-cell"),u.Ec(1),u.Tb()),2&t){const t=e.$implicit;u.Cb(1),u.Gc(" ",t.address," ")}}function _(t,e){1&t&&(u.Ub(0,"mat-header-cell"),u.Ec(1),u.hc(2,"translate"),u.Tb()),2&t&&(u.Cb(1),u.Gc("",u.ic(2,1,"PERSON.FIELDS.BOOKS")," "))}function V(t,e){if(1&t&&(u.Ub(0,"mat-cell"),u.Ec(1),u.Tb()),2&t){const t=e.$implicit;u.Cb(1),u.Gc(" ",t.books.length," ")}}function j(t,e){1&t&&(u.Ub(0,"mat-header-cell"),u.Ec(1),u.hc(2,"translate"),u.Tb()),2&t&&(u.Cb(1),u.Gc("",u.ic(2,1,"SYSTEM.RECORD.RECORD_STATE")," "))}function $(t,e){if(1&t&&(u.Ub(0,"mat-cell"),u.Ec(1),u.Tb()),2&t){const t=e.$implicit;u.Cb(1),u.Gc(" ",t.recordState," ")}}function B(t,e){1&t&&(u.Ub(0,"mat-header-cell",20),u.Ec(1),u.hc(2,"translate"),u.Tb()),2&t&&(u.Cb(1),u.Gc(" ",u.ic(2,1,"SYSTEM.RECORD.UPDATED_ON"),""))}function Q(t,e){if(1&t&&(u.Ub(0,"mat-cell",21),u.Ec(1),u.hc(2,"timeAgo"),u.Tb()),2&t){const t=e.$implicit;u.Cb(1),u.Gc(" ",u.ic(2,1,t.updatedAt)," ")}}function X(t,e){1&t&&(u.Ub(0,"mat-header-cell",22),u.Ec(1),u.hc(2,"translate"),u.Tb()),2&t&&(u.Cb(1),u.Gc(" ",u.ic(2,1,"SYSTEM.RECORD.ACTIONS")," "))}function K(t,e){if(1&t){const t=u.Vb();u.Ub(0,"mat-cell"),u.Ub(1,"button",23),u.cc("click",function(){u.wc(t);const a=e.$implicit;return u.gc().editPerson(a.id,!0)}),u.Ub(2,"mat-icon"),u.Ec(3,"create"),u.Tb(),u.Tb(),u.Tb()}}function z(t,e){1&t&&u.Pb(0,"mat-header-row")}function J(t,e){1&t&&u.Pb(0,"mat-row")}function W(t,e){1&t&&u.Pb(0,"mat-row")}let Z=(()=>{class t{constructor(t,e,a){this.dataService=t,this.customEventService=e,this.dialog=a,this.isRequesting=!1,this.displayedColumns=["name","phoneNumber","address","books","recordState","updatedAt","id"],this.subs=new m.a,this.personList=[]}ngOnInit(){this.loadData(),this.subs.add(this.customEventService.on("person-updated").subscribe(()=>this.loadData()))}ngOnDestroy(){this.subs.unsubscribe()}loadData(){this.isRequesting=!0,this.subs.add(this.dataService.getAny("/api/person").pipe(Object(b.a)(()=>{this.isRequesting=!1})).subscribe(t=>{this.personList=t,this.dataSource=new n.l(this.personList),this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator,console.log(this.personList)},t=>{}))}editPerson(t,e=!1){const a=new l.c;a.data={itemId:t,editMode:e},a.autoFocus=!0,a.width="50%",this.dialog.open(v,a).afterClosed().subscribe(t=>{})}}return t.\u0275fac=function(e){return new(e||t)(u.Ob(h.a),u.Ob(p.a),u.Ob(l.b))},t.\u0275cmp=u.Ib({type:t,selectors:[["app-person-home"]],viewQuery:function(t,e){if(1&t&&(u.Ic(i.a,1),u.Ic(s.a,1)),2&t){let t;u.tc(t=u.dc())&&(e.paginator=t.first),u.tc(t=u.dc())&&(e.sort=t.first)}},decls:30,vars:5,consts:[["mode","query",4,"ngIf"],["matSort","",3,"dataSource"],["table",""],["matColumnDef","name"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","phoneNumber"],["matColumnDef","address"],["matColumnDef","books"],["matColumnDef","recordState"],["matColumnDef","updatedAt"],["mat-sort-header","","fxHide","","fxShow.gt-md","",4,"matHeaderCellDef"],["fxHide","","fxShow.gt-md","",4,"matCellDef"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[4,"matRowDef","matRowDefColumns"],[4,"matNoDataRow"],["mat-fab","","color","primary",1,"fab-add-button",3,"click"],["mode","query"],["mat-sort-header","","fxHide","","fxShow.gt-md",""],["fxHide","","fxShow.gt-md",""],["mat-sort-header",""],["mat-icon-button","",3,"click"]],template:function(t,e){1&t&&(u.Cc(0,L,1,0,"mat-progress-bar",0),u.Ub(1,"mat-table",1,2),u.Sb(3,3),u.Cc(4,G,3,3,"mat-header-cell",4),u.Cc(5,F,2,2,"mat-cell",5),u.Rb(),u.Sb(6,6),u.Cc(7,x,3,3,"mat-header-cell",4),u.Cc(8,H,2,1,"mat-cell",5),u.Rb(),u.Sb(9,7),u.Cc(10,k,3,3,"mat-header-cell",4),u.Cc(11,Y,2,1,"mat-cell",5),u.Rb(),u.Sb(12,8),u.Cc(13,_,3,3,"mat-header-cell",4),u.Cc(14,V,2,1,"mat-cell",5),u.Rb(),u.Sb(15,9),u.Cc(16,j,3,3,"mat-header-cell",4),u.Cc(17,$,2,1,"mat-cell",5),u.Rb(),u.Sb(18,10),u.Cc(19,B,3,3,"mat-header-cell",11),u.Cc(20,Q,3,3,"mat-cell",12),u.Rb(),u.Sb(21,13),u.Cc(22,X,3,3,"mat-header-cell",14),u.Cc(23,K,4,0,"mat-cell",5),u.Rb(),u.Cc(24,z,1,0,"mat-header-row",15),u.Cc(25,J,1,0,"mat-row",16),u.Cc(26,W,1,0,"mat-row",17),u.Tb(),u.Ub(27,"button",18),u.cc("click",function(){return e.editPerson()}),u.Ub(28,"mat-icon"),u.Ec(29,"add"),u.Tb(),u.Tb()),2&t&&(u.mc("ngIf",e.isRequesting),u.Cb(1),u.mc("dataSource",e.dataSource),u.Cb(23),u.mc("matHeaderRowDef",e.displayedColumns)("matHeaderRowDefSticky",!0),u.Cb(1),u.mc("matRowDefColumns",e.displayedColumns))},directives:[R.l,n.k,s.a,n.c,n.e,n.b,n.g,n.j,n.h,T.a,D.a,q.a,n.d,n.a,s.b,P.a,n.f,n.i],pipes:[g.c,y.a],styles:[""]}),t})();const tt={routes:r.c.forChild([{path:"",component:o.a,children:[{path:"",component:Z,children:[{path:"add",component:v},{path:"edit/:id",component:v}]},{path:"**",redirectTo:""}]}]),components:[Z,v]};let et=(()=>{class t{static forRoot(){return{ngModule:t,providers:[]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.Mb({type:t}),t.\u0275inj=u.Lb({imports:[[tt.routes,c.a]]}),t})()}}]);