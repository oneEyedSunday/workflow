(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"Mp++":function(l,n,u){"use strict";u.d(n,"a",function(){return e});class e{constructor(){this.size=1}ngOnInit(){this.style=`font-size: ${this.size}em`}}},QBcP:function(l,n,u){"use strict";var e=u("8Y7J");class t{constructor(l){this._sanitizer=l}transform(l){return this._sanitizer.bypassSecurityTrustStyle(l)}}var r=u("cUpR");u("Mp++"),u.d(n,"a",function(){return i}),u.d(n,"b",function(){return o});var i=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function o(l){return e["\u0275vid"](0,[e["\u0275pid"](0,t,[r.b]),(l()(),e["\u0275eld"](1,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,2,"span",[],[[1,"style",2]],null,null,null,null)),e["\u0275ppd"](3,1),(l()(),e["\u0275eld"](4,0,null,null,0,"i",[["class","fa fa-spin fa-spinner"]],null,null,null,null,null))],null,function(l,n){var u=n.component,t=e["\u0275unv"](n,2,0,l(n,3,0,e["\u0275nov"](n,0),u.style));l(n,2,0,t)})}},r0o6:function(l,n,u){"use strict";u.d(n,"a",function(){return r});var e=u("NXyV"),t=u("EY2u");function r(l,n=t.a,u=t.a){return Object(e.a)(()=>l()?n:u)}},r7Hy:function(l,n,u){"use strict";class e{constructor(l){this.name=l?l.name:"",this.tasks=l?l.tasks:[],l&&l.order&&(this.order=l.order)}}class t{constructor(l){this.summary=l?l.summary:"",this.users=l?l.users:[],this.groups=l?l.groups:[],this.form=l?l.form:null,this.stage=l?l.stage:new e,this.document=l?l.document:null,this.id=l?l.id:null}}class r{constructor(){this.filename=""}}class i{constructor(l){l&&(this.description=l.description,this.group_name=l.group_name,this.hasPrivilege=l.hasPrivilege)}}u.d(n,"d",function(){return t}),u.d(n,"c",function(){return e}),u.d(n,"a",function(){return r}),u.d(n,"b",function(){return i})},yI65:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var r=u("pMnS"),i=u("SVse"),o=u("s7LF"),a=u("r7Hy");class d{constructor(){this.formSubmitted=new e.EventEmitter}submitForm(){this.formSubmitted.emit(this.group),this.submitting=!0}ngOnChanges(l){l&&l.errored.currentValue&&(this.submitting=!1)}}var s=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function c(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Group Name is required"]))],null,null)}function p(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,c)),e["\u0275did"](2,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,null==e["\u0275nov"](n.parent,9).errors?null:e["\u0275nov"](n.parent,9).errors.required)},null)}function g(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Group Description is required"]))],null,null)}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,g)),e["\u0275did"](2,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,null==e["\u0275nov"](n.parent,23).errors?null:e["\u0275nov"](n.parent,23).errors.required)},null)}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"span",[["class","fa fa-spin fa-spinner"]],null,null,null,null,null))],null,null)}function m(l){return e["\u0275vid"](2,[(l()(),e["\u0275eld"](0,0,null,null,50,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,r=l.component;return"submit"===n&&(t=!1!==e["\u0275nov"](l,2).onSubmit(u)&&t),"reset"===n&&(t=!1!==e["\u0275nov"](l,2).onReset()&&t),"ngSubmit"===n&&(t=!1!==r.submitForm()&&t),t},null,null)),e["\u0275did"](1,16384,null,0,o.v,[],null,null),e["\u0275did"](2,4210688,[["groupForm",4]],0,o.m,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e["\u0275prd"](2048,null,o.c,null,[o.m]),e["\u0275did"](4,16384,null,0,o.l,[[4,o.c]],null,null),(l()(),e["\u0275eld"](5,0,null,null,13,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,1,"label",[["class","col-form-label col-sm-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Name"])),(l()(),e["\u0275eld"](8,0,null,null,10,"div",[["class","col-sm-10"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,[["name",1]],null,7,"input",[["class","form-control"],["name","group_name"],["placeholder","Group Name"],["required",""],["type","text"]],[[2,"is-invalid",null],[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,r=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,10)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,10).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,10)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,10)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(r.group.group_name=u)&&t),t},null,null)),e["\u0275did"](10,16384,null,0,o.d,[e.Renderer2,e.ElementRef,[2,o.a]],null,null),e["\u0275did"](11,16384,null,0,o.r,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,o.h,function(l){return[l]},[o.r]),e["\u0275prd"](1024,null,o.i,function(l){return[l]},[o.d]),e["\u0275did"](14,671744,null,0,o.n,[[2,o.c],[6,o.h],[8,null],[6,o.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,o.j,null,[o.n]),e["\u0275did"](16,16384,null,0,o.k,[[4,o.j]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,p)),e["\u0275did"](18,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](19,0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](20,0,null,null,1,"label",[["class","col-form-label col-sm-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Description"])),(l()(),e["\u0275eld"](22,0,null,null,11,"div",[["class","col-sm-10"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,[["description",1]],null,8,"textarea",[["class","form-control"],["name","description"],["placeholder","Group Description"],["required",""],["rows","10"]],[[2,"is-invalid",null],[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,r=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,24)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,24).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,24)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,24)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(r.group.description=u)&&t),t},null,null)),e["\u0275did"](24,16384,null,0,o.d,[e.Renderer2,e.ElementRef,[2,o.a]],null,null),e["\u0275did"](25,16384,null,0,o.r,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,o.h,function(l){return[l]},[o.r]),e["\u0275prd"](1024,null,o.i,function(l){return[l]},[o.d]),e["\u0275did"](28,671744,null,0,o.n,[[2,o.c],[6,o.h],[8,null],[6,o.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,o.j,null,[o.n]),e["\u0275did"](30,16384,null,0,o.k,[[4,o.j]],null,null),(l()(),e["\u0275ted"](-1,null,["            "])),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](33,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](34,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](35,0,null,null,9,"div",[["class","col-sm-10"]],null,null,null,null,null)),(l()(),e["\u0275eld"](36,0,null,null,8,"div",[["class","form-check"]],null,null,null,null,null)),(l()(),e["\u0275eld"](37,0,null,null,5,"input",[["class","form-check-input"],["name","hasPrivilege"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var t=!0,r=l.component;return"change"===n&&(t=!1!==e["\u0275nov"](l,38).onChange(u.target.checked)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,38).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(r.group.hasPrivilege=u)&&t),t},null,null)),e["\u0275did"](38,16384,null,0,o.b,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,o.i,function(l){return[l]},[o.b]),e["\u0275did"](40,671744,null,0,o.n,[[2,o.c],[8,null],[8,null],[6,o.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,o.j,null,[o.n]),e["\u0275did"](42,16384,null,0,o.k,[[4,o.j]],null,null),(l()(),e["\u0275eld"](43,0,null,null,1,"label",[["class","form-check-label"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Administrative Privileges "])),(l()(),e["\u0275eld"](45,0,null,null,5,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](46,0,null,null,4,"div",[["class","col-sm-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](47,0,null,null,3,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](49,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,[" Save "]))],function(l,n){var u=n.component;l(n,11,0,""),l(n,14,0,"group_name",u.group.group_name),l(n,18,0,e["\u0275nov"](n,2).submitted&&e["\u0275nov"](n,2).invalid),l(n,25,0,""),l(n,28,0,"description",u.group.description),l(n,33,0,e["\u0275nov"](n,2).submitted&&e["\u0275nov"](n,2).invalid),l(n,40,0,"hasPrivilege",u.group.hasPrivilege),l(n,49,0,u.submitting)},function(l,n){var u=n.component;l(n,0,0,e["\u0275nov"](n,4).ngClassUntouched,e["\u0275nov"](n,4).ngClassTouched,e["\u0275nov"](n,4).ngClassPristine,e["\u0275nov"](n,4).ngClassDirty,e["\u0275nov"](n,4).ngClassValid,e["\u0275nov"](n,4).ngClassInvalid,e["\u0275nov"](n,4).ngClassPending),l(n,9,0,e["\u0275nov"](n,9).dirty&&e["\u0275nov"](n,9).invalid,e["\u0275nov"](n,11).required?"":null,e["\u0275nov"](n,16).ngClassUntouched,e["\u0275nov"](n,16).ngClassTouched,e["\u0275nov"](n,16).ngClassPristine,e["\u0275nov"](n,16).ngClassDirty,e["\u0275nov"](n,16).ngClassValid,e["\u0275nov"](n,16).ngClassInvalid,e["\u0275nov"](n,16).ngClassPending),l(n,23,0,e["\u0275nov"](n,23).dirty&&e["\u0275nov"](n,23).invalid,e["\u0275nov"](n,25).required?"":null,e["\u0275nov"](n,30).ngClassUntouched,e["\u0275nov"](n,30).ngClassTouched,e["\u0275nov"](n,30).ngClassPristine,e["\u0275nov"](n,30).ngClassDirty,e["\u0275nov"](n,30).ngClassValid,e["\u0275nov"](n,30).ngClassInvalid,e["\u0275nov"](n,30).ngClassPending),l(n,37,0,e["\u0275nov"](n,42).ngClassUntouched,e["\u0275nov"](n,42).ngClassTouched,e["\u0275nov"](n,42).ngClassPristine,e["\u0275nov"](n,42).ngClassDirty,e["\u0275nov"](n,42).ngClassValid,e["\u0275nov"](n,42).ngClassInvalid,e["\u0275nov"](n,42).ngClassPending),l(n,47,0,u.submitting)})}var h=u("QBcP"),b=u("Mp++"),I=u("r0o6"),C=u("LRne"),y=u("z6cu"),R=u("eIep"),k=u("vkgz"),w=u("JIr8");u("dwS2");class _{constructor(l,n,u){this._actRoute=l,this._router=n,this._groupsSvc=u}ngOnInit(){this._actRoute.data.pipe(Object(R.a)(l=>(this.editing=l.edit,Object(I.a)(()=>this.editing,this.getGroup(),Object(C.a)(new a.b)))),Object(k.a)(l=>this.group=l),Object(w.a)(this.handleError)).subscribe()}getGroup(){return this._actRoute.paramMap.pipe(Object(R.a)(l=>{if(isNaN(+l.get("groupId")))throw new Error("Invalid group id");return this._groupsSvc.fetchGroup(+l.get("groupId"))}))}handleError(l){return Object(y.a)(l)}handleGroupUpdatedEvent(l){this.groupError=!1,l.id?this.updateGroup(l):this.createGroup(l)}createGroup(l){this._groupsSvc.createGroup(l).subscribe(l=>this._router.navigate(["/organizations/groups",l.id]),()=>this.passErrorToGroupForm())}updateGroup(l){this._groupsSvc.updateGroup(l.id,l).subscribe(l=>this._router.navigate(["organizations/groups",l.id]),()=>this.passErrorToGroupForm())}passErrorToGroupForm(l){this.groupError=!0}}var N=u("iInd"),G=u("NzaM"),T=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function S(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-group-form",[],null,[[null,"formSubmitted"]],function(l,n,u){var e=!0;return"formSubmitted"===n&&(e=!1!==l.component.handleGroupUpdatedEvent(u)&&e),e},m,s)),e["\u0275did"](1,573440,null,0,d,[],{group:[0,"group"],errored:[1,"errored"]},{formSubmitted:"formSubmitted"})],function(l,n){var u=n.component;l(n,1,0,u.group,u.groupError)},null)}function V(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-loader",[],null,null,null,h.b,h.a)),e["\u0275did"](1,114688,null,0,b.a,[],{size:[0,"size"]},null)],function(l,n){l(n,1,0,5)},null)}function O(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,8,"div",[["class","my-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,7,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,6,"div",[["class","card mx-auto"],["style","max-width: 500px"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275ted"](4,null,[" "," Group "])),(l()(),e["\u0275eld"](5,0,null,null,3,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,S)),e["\u0275did"](7,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e["\u0275and"](0,[["spinner",2]],null,0,null,V))],function(l,n){l(n,7,0,n.component.group,e["\u0275nov"](n,8))},function(l,n){l(n,4,0,n.component.editing?"Update ":" Create ")})}function P(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-group-create-update",[],null,null,null,O,T)),e["\u0275did"](1,114688,null,0,_,[N.a,N.k,G.a],null,null)],function(l,n){l(n,1,0)},null)}var E=e["\u0275ccf"]("app-group-create-update",_,P,{},{},[]),j=u("wliG");class L{}var x=e["\u0275crt"]({encapsulation:0,styles:[j.a],data:{}});function F(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"a",[["style","color: inherit"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,1).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](1,671744,null,0,N.n,[N.k,N.a,i.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](2,null,["",""]))],function(l,n){l(n,1,0,e["\u0275inlineInterpolate"](1,"/organizations/groups/",n.component.group.id,""))},function(l,n){var u=n.component;l(n,0,0,e["\u0275nov"](n,1).target,e["\u0275nov"](n,1).href),l(n,2,0,u.group.group_name)})}function z(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.group.group_name)})}function M(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,F)),e["\u0275did"](2,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,z)),e["\u0275did"](4,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.hasPrivilege),l(n,4,0,!u.hasPrivilege)},null)}function U(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,1).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](1,671744,null,0,N.n,[N.k,N.a,i.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](2,null,[" "," "]))],function(l,n){l(n,1,0,e["\u0275inlineInterpolate"](1,"/organizations/groups/",n.component.group.id,""))},function(l,n){var u=n.component;l(n,0,0,e["\u0275nov"](n,1).target,e["\u0275nov"](n,1).href);var t=null;l(n,2,0,null==u.group.group_name?null:null==(t=u.group.group_name.substr(0,2))?null:t.toLowerCase())})}function K(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){var u=n.component,e=null;l(n,1,0,null==u.group.group_name?null:null==(e=u.group.group_name.substr(0,2))?null:e.toLowerCase())})}function q(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,8,"div",[["class","d-flex flex-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,5,"div",[["class","group--card__widget"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,4,"span",[["class",""]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,U)),e["\u0275did"](4,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,K)),e["\u0275did"](6,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](7,0,null,null,1,"div",[["class","ml-2 group--card__description"]],null,null,null,null,null)),(l()(),e["\u0275ted"](8,null,[" "," "]))],function(l,n){var u=n.component;l(n,4,0,u.hasPrivilege),l(n,6,0,!u.hasPrivilege)},function(l,n){l(n,8,0,n.component.group.description)})}function D(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","group--card__add"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,3,"span",[["title","Add Group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,2,"a",[["routerLink","/organizations/groups/new"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,3).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](3,671744,null,0,N.n,[N.k,N.a,i.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](4,0,null,null,0,"i",[["class","fa fa-plus"]],null,null,null,null,null))],function(l,n){l(n,3,0,"/organizations/groups/new")},function(l,n){l(n,2,0,e["\u0275nov"](n,3).target,e["\u0275nov"](n,3).href)})}function A(l){return e["\u0275vid"](2,[(l()(),e["\u0275eld"](0,0,null,null,10,"div",[["class","card"]],null,null,null,null,null)),e["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](2,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](3,{"d-none":0}),(l()(),e["\u0275and"](16777216,null,null,1,null,M)),e["\u0275did"](5,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](6,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,q)),e["\u0275did"](8,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,D)),e["\u0275did"](10,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component,e=l(n,3,0,!u.hasPrivilege&&!u.group);l(n,2,0,"card",e),l(n,5,0,null==u.group?null:u.group.group_name),l(n,8,0,u.group),l(n,10,0,!u.group&&u.hasPrivilege)},null)}var $=u("nYR2"),J=(u("cw8b"),u("Keex"));class Y extends J.a{constructor(l,n){super(n),this._groupsSvc=l}ngOnInit(){this.getGroups()}getGroups(){this.loading=!0,this._groupsSvc.fetchGroups().pipe(Object($.a)(()=>this.loading=!1)).subscribe(l=>{this.groups=l,this.groupsAndIcon=[...l,null]},()=>this.loading=!1)}}var B=u("jGGy"),H=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function Q(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"span",[["style","cursor: pointer"],["title","Add Group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"a",[["routerLink","new"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,2).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](2,671744,null,0,N.n,[N.k,N.a,i.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](3,0,null,null,0,"i",[["class","fa fa-plus"]],null,null,null,null,null))],function(l,n){l(n,2,0,"new")},function(l,n){l(n,1,0,e["\u0275nov"](n,2).target,e["\u0275nov"](n,2).href)})}function W(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","col-md-6 col-lg-3 col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"app-group-description-card",[],null,null,null,A,x)),e["\u0275did"](2,49152,null,0,L,[],{group:[0,"group"],hasPrivilege:[1,"hasPrivilege"]},null)],function(l,n){l(n,2,0,n.context.$implicit,n.component.hasPrivilege)},null)}function X(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,W)),e["\u0275did"](2,278528,null,0,i.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275and"](0,null,null,0))],function(l,n){l(n,2,0,n.component.groupsAndIcon)},null)}function Z(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-loader",[],null,null,null,h.b,h.a)),e["\u0275did"](1,114688,null,0,b.a,[],{size:[0,"size"]},null)],function(l,n){l(n,1,0,5)},null)}function ll(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"p",[["class","lead"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" No Groups yet "]))],null,null)}function nl(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","screen--mask"],["style","margin-top: -8%"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,Z)),e["\u0275did"](2,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,ll)),e["\u0275did"](4,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.loading),l(n,4,0,!u.loading&&u.groups)},null)}function ul(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,13,"div",[["class","my-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,12,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Groups "])),(l()(),e["\u0275eld"](4,0,null,null,1,"span",[["class","badge badge-rounded badge-secondary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,["",""])),(l()(),e["\u0275ted"](-1,null,[" \xa0 "])),(l()(),e["\u0275and"](16777216,null,null,1,null,Q)),e["\u0275did"](8,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](9,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,X)),e["\u0275did"](11,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,nl)),e["\u0275did"](13,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,8,0,!u.loading&&!(null!=u.groups&&u.groups.length)&&u.hasPrivilege),l(n,11,0,!u.loading),l(n,13,0,!(null!=u.groups&&u.groups.length)||u.loading)},function(l,n){var u=n.component;l(n,5,0,(null==u.groups?null:u.groups.length)||0)})}function el(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-group-list",[],null,null,null,ul,H)),e["\u0275did"](1,114688,null,0,Y,[G.a,B.a],null,null)],function(l,n){l(n,1,0)},null)}var tl=e["\u0275ccf"]("app-group-list",Y,el,{},{},[]),rl=u("d8Z/");class il{constructor(l,n,u,e,t){this._route=l,this._router=n,this._groupSvc=u,this._usersSvc=e,this._modal=t,this.loading=!0,this.users=[]}get usersNotInGroup(){return this.users.filter(l=>this.group.usertogroups.findIndex(n=>n.user_obj===l.email)<0)}ngOnInit(){this.fetchUsers(),this._route.data.pipe(Object(R.a)(l=>(this.editing=l.edit,this.getGroup())),Object(k.a)(l=>this.group=l),Object(k.a)(()=>this.loading=!1),Object(k.a)(()=>window.feather.replace()),Object(k.a)(()=>this.forceFeather()),Object(w.a)(this.handleError)).subscribe()}forceFeather(){rl.replace(),setTimeout(()=>{rl.replace(),window.feather.replace()},30),Promise.resolve().then(()=>{window.feather.replace(),window.feather.replace()})}getGroup(){return this._route.paramMap.pipe(Object(R.a)(l=>{if(isNaN(+l.get("groupId")))throw new Error("Invalid group id");return this._groupSvc.fetchGroup(+l.get("groupId"))}))}fetchUsers(){this._usersSvc.fetchAllUsers().subscribe(l=>{this.users=l})}removeUserFromGroup(l){this._groupSvc.removeUserFromGroup(l).subscribe(()=>{const n=(this.group.usertogroups||[]).findIndex(n=>n.id===l);n>-1&&this.group.usertogroups.splice(n,1)})}addUser(l){l=parseInt(l,10),this.submitting=!0,this._groupSvc.addUserToGroups(this.group.id,l).subscribe(()=>{this.submitting=!1,this._modal.dismissAll();const n=this.users.find(n=>n.id===l);n&&this.group.usertogroups.push(n)},()=>{this.submitting=!1})}openModal(l){this._modal.open(l,{keyboard:!1,backdrop:"static"})}handleError(l){return Object(y.a)(l)}}var ol=u("B6ex"),al=u("G0yt"),dl=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function sl(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,5,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"span",[["class","py-2 float-left"]],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,["#"," ",""])),(l()(),e["\u0275eld"](3,0,null,null,2,"button",[["class","btn btn-small btn-link muted-link float-right"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.removeUserFromGroup(l.context.$implicit.id)&&e),e},null,null)),(l()(),e["\u0275eld"](4,0,null,null,0,"span",[["data-feather","user-x"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Remove "]))],null,function(l,n){l(n,2,0,n.context.index+1,n.context.$implicit.user_obj||n.context.$implicit.email)})}function cl(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"ul",[["class","list-group"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,sl)),e["\u0275did"](2,278528,null,0,i.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.group.usertogroups)},null)}function pl(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[["class","text-muted font-italic"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["There are no members in this group"]))],null,null)}function gl(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,25,null,null,null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,14,"div",[["class","col-sm-12 col-md-5 offset-md-1 my-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,13,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275ted"](4,null,["",""])),(l()(),e["\u0275eld"](5,0,null,null,1,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275ted"](6,null,[" "," "])),(l()(),e["\u0275eld"](7,0,null,null,8,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,3,"a",[["class","btn btn-small btn-link muted-link"],["routerLink","edit"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,9).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](9,671744,null,0,N.n,[N.k,N.a,i.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](10,0,null,null,0,"span",[["data-feather","edit"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Group "])),(l()(),e["\u0275eld"](12,0,null,null,3,"div",[["class","float-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,2,"button",[["class","btn btn-small btn-sm btn-link muted-link"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openModal(e["\u0275nov"](l.parent,7))&&t),t},null,null)),(l()(),e["\u0275eld"](14,0,null,null,0,"span",[["class","fa fa-user-plus"],["data-feather","user-plus"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Member "])),(l()(),e["\u0275eld"](16,0,null,null,9,"div",[["class","col-sm-12 col-md-5 offset-md-1 my-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,8,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Group Members"])),(l()(),e["\u0275eld"](20,0,null,null,5,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,cl)),e["\u0275did"](22,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](23,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,pl)),e["\u0275did"](25,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,9,0,"edit"),l(n,22,0,null==u.group.usertogroups?null:u.group.usertogroups.length),l(n,25,0,!(null!=u.group.usertogroups&&u.group.usertogroups.length))},function(l,n){var u=n.component;l(n,4,0,u.group.group_name),l(n,6,0,u.group.description||"No Description"),l(n,8,0,e["\u0275nov"](n,9).target,e["\u0275nov"](n,9).href)})}function fl(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","screen--mask"],["style","margin-top: -8%"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"app-loader",[],null,null,null,h.b,h.a)),e["\u0275did"](2,114688,null,0,b.a,[],{size:[0,"size"]},null)],function(l,n){l(n,2,0,5)},null)}function vl(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"option",[],[[1,"value",0]],null,null,null,null)),e["\u0275did"](1,147456,null,0,o.o,[e.ElementRef,e.Renderer2,[8,null]],null,null),e["\u0275did"](2,147456,null,0,o.u,[e.ElementRef,e.Renderer2,[8,null]],null,null),(l()(),e["\u0275ted"](3,null,[""," ",""]))],null,function(l,n){l(n,0,0,n.context.$implicit.id),l(n,3,0,n.context.$implicit.first_name,n.context.$implicit.last_name)})}function ml(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"i",[["class","fa fa-spin fa-spinner"]],null,null,null,null,null))],null,null)}function hl(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,5,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"h4",[["class","modal-title"],["id","modal-basic-title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Add User to Group"])),(l()(),e["\u0275eld"](3,0,null,null,2,"button",[["aria-label","Close"],["class","close"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.context.$implicit.dismiss("Cross click")&&e),e},null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\xd7"])),(l()(),e["\u0275eld"](6,0,null,null,21,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,20,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e["\u0275nov"](l,9).onSubmit(u)&&t),"reset"===n&&(t=!1!==e["\u0275nov"](l,9).onReset()&&t),t},null,null)),e["\u0275did"](8,16384,null,0,o.v,[],null,null),e["\u0275did"](9,4210688,null,0,o.m,[[8,null],[8,null]],null,null),e["\u0275prd"](2048,null,o.c,null,[o.m]),e["\u0275did"](11,16384,null,0,o.l,[[4,o.c]],null,null),(l()(),e["\u0275eld"](12,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["User"])),(l()(),e["\u0275eld"](15,0,[["selectedUser",1]],null,6,"select",[["class","form-control"],["ngbAutofocus",""],["placeholder","Select User"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,3,"option",[["value",""]],null,null,null,null,null)),e["\u0275did"](17,147456,null,0,o.o,[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),e["\u0275did"](18,147456,null,0,o.u,[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](-1,null,["--Select a User--"])),(l()(),e["\u0275and"](16777216,null,null,1,null,vl)),e["\u0275did"](21,278528,null,0,i.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](22,0,null,null,5,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,4,"button",[["class","btn btn-primary"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addUser(null==e["\u0275nov"](l,15)?null:e["\u0275nov"](l,15).value)&&t),t},null,null)),(l()(),e["\u0275eld"](24,0,null,null,0,"span",[["data-feather","user-plus"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,ml)),e["\u0275did"](26,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,[" Save "]))],function(l,n){var u=n.component;l(n,17,0,""),l(n,18,0,""),l(n,21,0,u.usersNotInGroup),l(n,26,0,u.submitting)},function(l,n){var u=n.component;l(n,7,0,e["\u0275nov"](n,11).ngClassUntouched,e["\u0275nov"](n,11).ngClassTouched,e["\u0275nov"](n,11).ngClassPristine,e["\u0275nov"](n,11).ngClassDirty,e["\u0275nov"](n,11).ngClassValid,e["\u0275nov"](n,11).ngClassInvalid,e["\u0275nov"](n,11).ngClassPending),l(n,23,0,u.submitting)})}function bl(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,6,"div",[["class","my-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,5,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,gl)),e["\u0275did"](4,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,fl)),e["\u0275did"](6,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](0,[["addusermodal",2]],null,0,null,hl))],function(l,n){var u=n.component;l(n,4,0,!u.loading),l(n,6,0,u.loading)},null)}function Il(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-group-view",[],null,null,null,bl,dl)),e["\u0275did"](1,114688,null,0,il,[N.a,N.k,G.a,ol.a,al.y],null,null)],function(l,n){l(n,1,0)},null)}var Cl=e["\u0275ccf"]("app-group-view",il,Il,{},{},[]),yl=u("IheW"),Rl=u("yqzj");u("2qGb");const kl={edit:!1},wl={edit:!0},_l={edit:!0};class Nl{}var Gl=u("PCNd"),Tl=u("gCkh");u.d(n,"OrganizationModuleNgFactory",function(){return Sl});var Sl=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,E,tl,Cl]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,i.NgLocalization,i.NgLocaleLocalization,[e.LOCALE_ID,[2,i["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,o.t,o.t,[]),e["\u0275mpd"](4608,G.a,G.a,[yl.c,B.a,Rl.a]),e["\u0275mpd"](4608,ol.a,ol.a,[yl.c,B.a,Rl.a]),e["\u0275mpd"](1073742336,i.CommonModule,i.CommonModule,[]),e["\u0275mpd"](1073742336,o.s,o.s,[]),e["\u0275mpd"](1073742336,o.f,o.f,[]),e["\u0275mpd"](1073742336,N.o,N.o,[[2,N.t],[2,N.k]]),e["\u0275mpd"](1073742336,Nl,Nl,[]),e["\u0275mpd"](1073742336,Gl.a,Gl.a,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,N.i,function(){return[[{path:"groups/new",component:_,data:kl,canActivate:[Tl.a]},{path:"groups",component:Y},{path:"groups/:groupId",component:il,data:wl},{path:"groups/:groupId/edit",component:_,data:_l,canActivate:[Tl.a]}]]},[])])})}}]);