(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7NRU":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var r=u("pMnS"),o=u("QBcP"),i=u("Mp++"),s=u("SVse");class a{constructor(){this.formSaveSuccessEvent=new e.EventEmitter}ngOnInit(){window.document.addEventListener("workflow-form-saved",l=>{const{detail:n}=l;n.data&&this.formSaveSuccessEvent.emit(n.data)},!1)}ngOnChanges(l){l&&l.srcDoc.currentValue&&(this.refFormBuilder.nativeElement.srcdoc=this.srcDoc,this.refFormBuilder.nativeElement.src="")}}var d=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function c(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-loader",[],null,null,null,o.b,o.a)),e["\u0275did"](1,114688,null,0,i.a,[],{size:[0,"size"]},null)],function(l,n){l(n,1,0,3)},null)}function f(l){return e["\u0275vid"](0,[e["\u0275qud"](671088640,1,{refFormBuilder:0}),(l()(),e["\u0275eld"](1,0,null,null,6,"div",[["class","d-flex justify-content-center align-items-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,[[1,0],["formBuilder",1]],null,3,"iframe",[["frameborder","0"],["src",""],["style","min-height: 600px; overflow: auto; width: 100%;"]],null,null,null,null,null)),e["\u0275prd"](512,null,s["\u0275NgClassImpl"],s["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](4,278528,null,0,s.NgClass,[s["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),e["\u0275pod"](5,{"d-none":0}),(l()(),e["\u0275and"](16777216,null,null,1,null,c)),e["\u0275did"](7,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component,e=l(n,5,0,!u.srcDoc);l(n,4,0,e),l(n,7,0,!u.srcDoc)},null)}var m=u("9AJC"),p=u("G0yt"),g=u("r0o6"),v=u("cw8b"),h=u("eIep"),I=u("vkgz"),w=u("JIr8");u("apLq"),u("dwS2");class b{constructor(l,n,u,e,t){this._builder=l,this._route=n,this._formSvc=u,this._usersSvc=e,this.router=t,this.users=[]}ngOnInit(){this.getUsers(),this._route.data.pipe(Object(h.a)(l=>(this.existing=l.edit,Object(g.a)(()=>this.existing,this.getFormTemplate(),this._builder.createFormTemplate()))),Object(I.a)(l=>this._workflow_src_doc=l),Object(w.a)(l=>this.router.navigate(["/forms"]))).subscribe(),window.WORKFLOW_TOKEN=v.a.getToken()}handleSuccessfulSubmission(l){const n=["forms"];this.existing||n.push(`${l.id}`),this.router.navigate(n)}getFormTemplate(){return this._route.paramMap.pipe(Object(h.a)(l=>{if(isNaN(+l.get("formId")))throw new Error("Invalid form Id");return this.getResponses(+l.get("formId")),this._builder.fetchFormTemplate(+l.get("formId"))}))}getResponses(l){this._formSvc.getFormResponse(l).subscribe(l=>this.formResponses=l)}getUsers(){this._usersSvc.fetchAllUsers().subscribe(l=>{this.users=l})}getUserName(l){if(!l)return"No One";const n=this.users.find(n=>n.id===l);return n?`${n.first_name} ${n.last_name}`:"Unknown"}}var R=u("1BjP"),y=u("iInd"),_=u("edmw"),C=u("B6ex"),S=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function N(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"app-forms-builder",[],null,[[null,"formSaveSuccessEvent"]],function(l,n,u){var e=!0;return"formSaveSuccessEvent"===n&&(e=!1!==l.component.handleSuccessfulSubmission(u)&&e),e},f,d)),e["\u0275did"](3,638976,null,0,a,[],{srcDoc:[0,"srcDoc"]},{formSaveSuccessEvent:"formSaveSuccessEvent"})],function(l,n){l(n,3,0,n.component._workflow_src_doc)},null)}function F(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""])),e["\u0275pid"](0,s.JsonPipe,[])],null,function(l,n){l(n,1,0,e["\u0275unv"](n,1,0,e["\u0275nov"](n,2).transform(n.parent.context.$implicit.response)))})}function O(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[["class","text-muted font-italic"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Unable to get response"]))],null,null)}function k(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,15,"div",[["class","card my-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,14,"div",[["class","list-group-flush my-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,4,"div",[["class","list-group-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Answered: "])),(l()(),e["\u0275ted"](5,null,[" "," "])),e["\u0275ppd"](6,2),(l()(),e["\u0275eld"](7,0,null,null,4,"div",[["class","list-group-item"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,F)),e["\u0275did"](9,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,O)),e["\u0275did"](11,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](12,0,null,null,3,"div",[["class","list-group-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Member: "])),(l()(),e["\u0275ted"](15,null,[" "," "]))],function(l,n){l(n,9,0,n.context.$implicit.response),l(n,11,0,!n.context.$implicit.response)},function(l,n){var u=n.component,t=e["\u0275unv"](n,5,0,l(n,6,0,e["\u0275nov"](n.parent.parent,0),n.context.$implicit.created_date,"long"));l(n,5,0,t),l(n,15,0,u.getUserName(n.context.$implicit.user))})}function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[["class","font-italic text-muted"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Couldnt get form responses"]))],null,null)}function T(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[["class","font-italic text-muted"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["No responses yet"]))],null,null)}function D(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","card justify-content-center align-items-center"],["style","min-height: 300px"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,E)),e["\u0275did"](2,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,T)),e["\u0275did"](4,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,!u.formResponses),l(n,4,0,!(null!=u.formResponses&&u.formResponses.length)&&u.formResponses)},null)}function V(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,k)),e["\u0275did"](3,278528,null,0,s.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,D)),e["\u0275did"](5,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,u.formResponses),l(n,5,0,!u.formResponses||!(null!=u.formResponses&&u.formResponses.length))},null)}function x(l){return e["\u0275vid"](0,[e["\u0275pid"](0,s.DatePipe,[e.LOCALE_ID]),(l()(),e["\u0275eld"](1,0,null,null,16,"div",[["class","my-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,15,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,14,"ngb-tabset",[],null,null,null,m.c,m.b)),e["\u0275did"](4,2146304,null,1,p.Q,[p.R],{destroyOnHide:[0,"destroyOnHide"]},null),e["\u0275qud"](603979776,1,{tabs:1}),(l()(),e["\u0275eld"](6,0,null,null,5,"ngb-tab",[["title","Form Builder"]],null,null,null,null,null)),e["\u0275did"](7,2113536,[[1,4]],2,p.O,[],{title:[0,"title"]},null),e["\u0275qud"](603979776,2,{titleTpls:1}),e["\u0275qud"](603979776,3,{contentTpls:1}),(l()(),e["\u0275and"](0,null,null,1,null,N)),e["\u0275did"](11,16384,[[3,4]],0,p.P,[e.TemplateRef],null,null),(l()(),e["\u0275eld"](12,0,null,null,5,"ngb-tab",[["title","Responses"]],null,null,null,null,null)),e["\u0275did"](13,2113536,[[1,4]],2,p.O,[],{title:[0,"title"]},null),e["\u0275qud"](603979776,4,{titleTpls:1}),e["\u0275qud"](603979776,5,{contentTpls:1}),(l()(),e["\u0275and"](0,null,null,1,null,V)),e["\u0275did"](17,16384,[[5,4]],0,p.P,[e.TemplateRef],null,null)],function(l,n){l(n,4,0,!1),l(n,7,0,"Form Builder"),l(n,13,0,"Responses")},null)}function L(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-forms-create-update",[],null,null,null,x,S)),e["\u0275did"](1,114688,null,0,b,[R.a,y.a,_.a,C.a,y.k],null,null)],function(l,n){l(n,1,0)},null)}var j=e["\u0275ccf"]("app-forms-create-update",b,L,{},{},[]);class B{constructor(){this.formSaveSuccessEvent=new e.EventEmitter}ngOnInit(){window.document.addEventListener("user-submitted-workflow-form",l=>{console.log(l),this.formSaveSuccessEvent.emit()},!1)}ngOnChanges(l){l&&l.srcDoc.currentValue&&(this.refFormBuilder.nativeElement.srcdoc=this.srcDoc,this.refFormBuilder.nativeElement.src="")}}var K=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function M(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-loader",[],null,null,null,o.b,o.a)),e["\u0275did"](1,114688,null,0,i.a,[],{size:[0,"size"]},null)],function(l,n){l(n,1,0,3)},null)}function q(l){return e["\u0275vid"](0,[e["\u0275qud"](671088640,1,{refFormBuilder:0}),(l()(),e["\u0275eld"](1,0,null,null,6,"div",[["class","d-flex justify-content-center align-items-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,[[1,0],["formBuilder",1]],null,3,"iframe",[["frameborder","0"],["src",""],["style","min-height: 600px; overflow: auto; width: 100%;"]],null,null,null,null,null)),e["\u0275prd"](512,null,s["\u0275NgClassImpl"],s["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](4,278528,null,0,s.NgClass,[s["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),e["\u0275pod"](5,{"d-none":0}),(l()(),e["\u0275and"](16777216,null,null,1,null,M)),e["\u0275did"](7,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component,e=l(n,5,0,!u.srcDoc);l(n,4,0,e),l(n,7,0,!u.srcDoc)},null)}class z{constructor(l,n,u){this._builder=l,this._route=n,this.router=u}ngOnInit(){const{referrer:l}=document,{location:n}=window;l&&l!==n.href&&(this.referrer=l.replace(n.origin,"")),this.getForm().pipe(Object(I.a)(l=>this._workflow_src_doc=l),Object(w.a)(l=>this.router.navigate(["forms"]))).subscribe(),window.WORKFLOW_TOKEN=v.a.getToken()}handleSuccessfulSubmission(){this.router.navigate(["process"])}return(){return this.referrer?this.router.navigateByUrl(this.referrer):this.router.navigate(["forms"])}getForm(){return this._route.paramMap.pipe(Object(h.a)(l=>{if(isNaN(+l.get("formId")))throw new Error("Invalid form Id");return this._builder.renderForm(+l.get("formId"))}))}}var P=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function U(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,7,"div",[["class","my-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,6,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Fill Form"])),(l()(),e["\u0275eld"](5,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,1,"app-forms-viewer",[],null,[[null,"formSaveSuccessEvent"]],function(l,n,u){var e=!0;return"formSaveSuccessEvent"===n&&(e=!1!==l.component.handleSuccessfulSubmission()&&e),e},q,K)),e["\u0275did"](7,638976,null,0,B,[],{srcDoc:[0,"srcDoc"]},{formSaveSuccessEvent:"formSaveSuccessEvent"})],function(l,n){l(n,7,0,n.component._workflow_src_doc)},null)}function $(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-forms-view",[],null,null,null,U,P)),e["\u0275did"](1,114688,null,0,z,[R.a,y.a,y.k],null,null)],function(l,n){l(n,1,0)},null)}var A=e["\u0275ccf"]("app-forms-view",z,$,{},{},[]);class J{}var W=e["\u0275crt"]({encapsulation:0,styles:["[_nghost-%COMP%] {\n            display: block;\n            padding: 1em 0;\n        }\n\n        a[_ngcontent-%COMP%] { color: inherit }\n        .form__name[_ngcontent-%COMP%] {\n            white-space: nowrap;\n        }"],data:{}});function G(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.form.description)})}function H(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[["class","font-italic"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["No Description"]))],null,null)}function Q(l){return e["\u0275vid"](2,[(l()(),e["\u0275eld"](0,0,null,null,12,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,4,"div",[["class","card-header"],["style","overflow-x: hidden; text-overflow: ellipsis;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,3,"span",[["class","form__name"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,4).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](4,671744,null,0,y.n,[y.k,y.a,s.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](5,null,["",""])),(l()(),e["\u0275eld"](6,0,null,null,6,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Description"])),(l()(),e["\u0275and"](16777216,null,null,1,null,G)),e["\u0275did"](10,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,H)),e["\u0275did"](12,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,4,0,e["\u0275inlineInterpolate"](1,"/forms/",u.form.id,"")),l(n,10,0,u.form.description),l(n,12,0,!u.form.description)},function(l,n){var u=n.component;l(n,3,0,e["\u0275nov"](n,4).target,e["\u0275nov"](n,4).href),l(n,5,0,u.form.form_name)})}var Y=u("nYR2");class X{constructor(l){this._formsSvc=l}ngOnInit(){this.getForms()}getForms(){this.loading=!0,this._formsSvc.getForms().pipe(Object(Y.a)(()=>this.loading=!1)).subscribe(l=>this.forms=l,()=>this.loading=!1)}}var Z=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function ll(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"span",[["style","cursor: pointer"],["title","Add Form"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"a",[["routerLink","new"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,2).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](2,671744,null,0,y.n,[y.k,y.a,s.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](3,0,null,null,0,"i",[["class","fa fa-plus"]],null,null,null,null,null))],function(l,n){l(n,2,0,"new")},function(l,n){l(n,1,0,e["\u0275nov"](n,2).target,e["\u0275nov"](n,2).href)})}function nl(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","col-md-6 col-lg-3 col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"app-form-card",[],null,null,null,Q,W)),e["\u0275did"](2,49152,null,0,J,[],{form:[0,"form"]},null)],function(l,n){l(n,2,0,n.context.$implicit)},null)}function ul(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,nl)),e["\u0275did"](2,278528,null,0,s.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275and"](0,null,null,0))],function(l,n){l(n,2,0,n.component.forms)},null)}function el(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-loader",[],null,null,null,o.b,o.a)),e["\u0275did"](1,114688,null,0,i.a,[],{size:[0,"size"]},null)],function(l,n){l(n,1,0,5)},null)}function tl(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"p",[["class","lead"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" No Forms yet "]))],null,null)}function rl(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","screen--mask"],["style","margin-top: -8%"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,el)),e["\u0275did"](2,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,tl)),e["\u0275did"](4,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.loading),l(n,4,0,!u.loading&&u.forms)},null)}function ol(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,13,"div",[["class","my-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,12,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Forms "])),(l()(),e["\u0275eld"](4,0,null,null,1,"span",[["class","badge badge-rounded badge-secondary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,["",""])),(l()(),e["\u0275ted"](-1,null,[" \xa0 "])),(l()(),e["\u0275and"](16777216,null,null,1,null,ll)),e["\u0275did"](8,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](9,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,ul)),e["\u0275did"](11,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,rl)),e["\u0275did"](13,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,8,0,!u.loading),l(n,11,0,!u.loading),l(n,13,0,!(null!=u.forms&&u.forms.length)||u.loading)},function(l,n){var u=n.component;l(n,5,0,(null==u.forms?null:u.forms.length)||0)})}function il(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-forms-list",[],null,null,null,ol,Z)),e["\u0275did"](1,114688,null,0,X,[_.a],null,null)],function(l,n){l(n,1,0)},null)}var sl=e["\u0275ccf"]("app-forms-list",X,il,{},{},[]),al=u("s7LF"),dl=u("IheW"),cl=u("yqzj"),fl=u("jGGy"),ml=u("PCNd"),pl=u("alHs");const gl={edit:!1},vl={edit:!0};class hl{}u.d(n,"WorkflowFormsModuleNgFactory",function(){return Il});var Il=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,j,A,sl]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[e.LOCALE_ID,[2,s["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,al.r,al.r,[]),e["\u0275mpd"](4608,al.d,al.d,[]),e["\u0275mpd"](4608,R.a,R.a,[dl.c,cl.a]),e["\u0275mpd"](4608,_.a,_.a,[dl.c,fl.a,cl.a]),e["\u0275mpd"](4608,C.a,C.a,[dl.c,fl.a,cl.a]),e["\u0275mpd"](1073742336,s.CommonModule,s.CommonModule,[]),e["\u0275mpd"](1073742336,al.q,al.q,[]),e["\u0275mpd"](1073742336,al.e,al.e,[]),e["\u0275mpd"](1073742336,al.o,al.o,[]),e["\u0275mpd"](1073742336,ml.a,ml.a,[]),e["\u0275mpd"](1073742336,pl.b,pl.b,[]),e["\u0275mpd"](1073742336,p.S,p.S,[]),e["\u0275mpd"](1073742336,y.o,y.o,[[2,y.t],[2,y.k]]),e["\u0275mpd"](1073742336,hl,hl,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,y.i,function(){return[[{path:"new",component:b,data:gl},{path:"view/:formId",component:z},{path:"",component:X},{path:":formId",component:b,data:vl}]]},[]),e["\u0275mpd"](256,pl.a,{modules:pl.c},[])])})}}]);