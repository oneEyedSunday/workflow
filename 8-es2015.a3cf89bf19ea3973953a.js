(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"Mp++":function(l,n,u){"use strict";u.d(n,"a",function(){return e});class e{constructor(){this.size=1}ngOnInit(){this.style=`font-size: ${this.size}em`}}},QBcP:function(l,n,u){"use strict";var e=u("8Y7J");class t{constructor(l){this._sanitizer=l}transform(l){return this._sanitizer.bypassSecurityTrustStyle(l)}}var o=u("cUpR");u("Mp++"),u.d(n,"a",function(){return r}),u.d(n,"b",function(){return i});var r=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function i(l){return e["\u0275vid"](0,[e["\u0275pid"](0,t,[o.b]),(l()(),e["\u0275eld"](1,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,2,"span",[],[[1,"style",2]],null,null,null,null)),e["\u0275ppd"](3,1),(l()(),e["\u0275eld"](4,0,null,null,0,"i",[["class","fa fa-spin fa-spinner"]],null,null,null,null,null))],null,function(l,n){var u=n.component,t=e["\u0275unv"](n,2,0,l(n,3,0,e["\u0275nov"](n,0),u.style));l(n,2,0,t)})}},r0o6:function(l,n,u){"use strict";u.d(n,"a",function(){return o});var e=u("NXyV"),t=u("EY2u");function o(l,n=t.a,u=t.a){return Object(e.a)(()=>l()?n:u)}},yI65:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var o=u("pMnS"),r=u("SVse"),i=u("s7LF"),a=u("r7Hy");class d{constructor(){this.formSubmitted=new e.EventEmitter}submitForm(){this.formSubmitted.emit(this.group),this.submitting=!0}ngOnChanges(l){l&&l.errored.currentValue&&(this.submitting=!1)}}var s=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function c(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Group Name is required"]))],null,null)}function p(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,c)),e["\u0275did"](2,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,null==e["\u0275nov"](n.parent,9).errors?null:e["\u0275nov"](n.parent,9).errors.required)},null)}function g(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Group Description is required"]))],null,null)}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,g)),e["\u0275did"](2,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,null==e["\u0275nov"](n.parent,23).errors?null:e["\u0275nov"](n.parent,23).errors.required)},null)}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"span",[["class","fa fa-spin fa-spinner"]],null,null,null,null,null))],null,null)}function m(l){return e["\u0275vid"](2,[(l()(),e["\u0275eld"](0,0,null,null,39,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,o=l.component;return"submit"===n&&(t=!1!==e["\u0275nov"](l,2).onSubmit(u)&&t),"reset"===n&&(t=!1!==e["\u0275nov"](l,2).onReset()&&t),"ngSubmit"===n&&(t=!1!==o.submitForm()&&t),t},null,null)),e["\u0275did"](1,16384,null,0,i.s,[],null,null),e["\u0275did"](2,4210688,[["groupForm",4]],0,i.k,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e["\u0275prd"](2048,null,i.b,null,[i.k]),e["\u0275did"](4,16384,null,0,i.j,[[4,i.b]],null,null),(l()(),e["\u0275eld"](5,0,null,null,13,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,1,"label",[["class","col-form-label col-sm-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Name"])),(l()(),e["\u0275eld"](8,0,null,null,10,"div",[["class","col-sm-10"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,[["name",1]],null,7,"input",[["class","form-control"],["name","group_name"],["placeholder","Group Name"],["required",""],["type","text"]],[[2,"is-invalid",null],[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,10)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,10).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,10)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,10)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.group.group_name=u)&&t),t},null,null)),e["\u0275did"](10,16384,null,0,i.c,[e.Renderer2,e.ElementRef,[2,i.a]],null,null),e["\u0275did"](11,16384,null,0,i.o,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,i.f,function(l){return[l]},[i.o]),e["\u0275prd"](1024,null,i.g,function(l){return[l]},[i.c]),e["\u0275did"](14,671744,null,0,i.l,[[2,i.b],[6,i.f],[8,null],[6,i.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,i.h,null,[i.l]),e["\u0275did"](16,16384,null,0,i.i,[[4,i.h]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,p)),e["\u0275did"](18,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](19,0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](20,0,null,null,1,"label",[["class","col-form-label col-sm-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Description"])),(l()(),e["\u0275eld"](22,0,null,null,11,"div",[["class","col-sm-10"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,[["description",1]],null,8,"textarea",[["class","form-control"],["name","group_name"],["placeholder","Group Description"],["required",""],["rows","10"]],[[2,"is-invalid",null],[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,24)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,24).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,24)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,24)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.group.description=u)&&t),t},null,null)),e["\u0275did"](24,16384,null,0,i.c,[e.Renderer2,e.ElementRef,[2,i.a]],null,null),e["\u0275did"](25,16384,null,0,i.o,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,i.f,function(l){return[l]},[i.o]),e["\u0275prd"](1024,null,i.g,function(l){return[l]},[i.c]),e["\u0275did"](28,671744,null,0,i.l,[[2,i.b],[6,i.f],[8,null],[6,i.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,i.h,null,[i.l]),e["\u0275did"](30,16384,null,0,i.i,[[4,i.h]],null,null),(l()(),e["\u0275ted"](-1,null,["            "])),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](33,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](34,0,null,null,5,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](35,0,null,null,4,"div",[["class","col-sm-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](36,0,null,null,3,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](38,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,[" Save "]))],function(l,n){var u=n.component;l(n,11,0,""),l(n,14,0,"group_name",u.group.group_name),l(n,18,0,e["\u0275nov"](n,2).submitted&&e["\u0275nov"](n,2).invalid),l(n,25,0,""),l(n,28,0,"group_name",u.group.description),l(n,33,0,e["\u0275nov"](n,2).submitted&&e["\u0275nov"](n,2).invalid),l(n,38,0,u.submitting)},function(l,n){var u=n.component;l(n,0,0,e["\u0275nov"](n,4).ngClassUntouched,e["\u0275nov"](n,4).ngClassTouched,e["\u0275nov"](n,4).ngClassPristine,e["\u0275nov"](n,4).ngClassDirty,e["\u0275nov"](n,4).ngClassValid,e["\u0275nov"](n,4).ngClassInvalid,e["\u0275nov"](n,4).ngClassPending),l(n,9,0,e["\u0275nov"](n,9).dirty&&e["\u0275nov"](n,9).invalid,e["\u0275nov"](n,11).required?"":null,e["\u0275nov"](n,16).ngClassUntouched,e["\u0275nov"](n,16).ngClassTouched,e["\u0275nov"](n,16).ngClassPristine,e["\u0275nov"](n,16).ngClassDirty,e["\u0275nov"](n,16).ngClassValid,e["\u0275nov"](n,16).ngClassInvalid,e["\u0275nov"](n,16).ngClassPending),l(n,23,0,e["\u0275nov"](n,23).dirty&&e["\u0275nov"](n,23).invalid,e["\u0275nov"](n,25).required?"":null,e["\u0275nov"](n,30).ngClassUntouched,e["\u0275nov"](n,30).ngClassTouched,e["\u0275nov"](n,30).ngClassPristine,e["\u0275nov"](n,30).ngClassDirty,e["\u0275nov"](n,30).ngClassValid,e["\u0275nov"](n,30).ngClassInvalid,e["\u0275nov"](n,30).ngClassPending),l(n,36,0,u.submitting)})}var h=u("QBcP"),b=u("Mp++"),_=u("r0o6"),C=u("LRne"),I=u("z6cu"),y=u("eIep"),w=u("vkgz"),R=u("JIr8");u("dwS2");class O{constructor(l,n,u){this._actRoute=l,this._router=n,this._groupsSvc=u}ngOnInit(){this._actRoute.data.pipe(Object(y.a)(l=>(this.editing=l.edit,Object(_.a)(()=>this.editing,this.getGroup(),Object(C.a)(new a.b)))),Object(w.a)(l=>this.group=l),Object(R.a)(this.handleError)).subscribe()}getGroup(){return this._actRoute.paramMap.pipe(Object(y.a)(l=>{if(isNaN(+l.get("groupId")))throw new Error("Invalid group id");return this._groupsSvc.fetchGroup(+l.get("groupId"))}))}handleError(l){return Object(I.a)(l)}handleGroupUpdatedEvent(l){this.groupError=!1,l.id?this.updateGroup(l):this.createGroup(l)}createGroup(l){this._groupsSvc.createGroup(l).subscribe(l=>this._router.navigate(["/organizations/groups",l.id]),()=>this.passErrorToGroupForm())}updateGroup(l){this._groupsSvc.updateGroup(l.id,l).subscribe(l=>this._router.navigate(["organizations/groups",l.id]),()=>this.passErrorToGroupForm())}passErrorToGroupForm(l){this.groupError=!0}}var M=u("iInd"),k=u("NzaM"),G=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function P(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-group-form",[],null,[[null,"formSubmitted"]],function(l,n,u){var e=!0;return"formSubmitted"===n&&(e=!1!==l.component.handleGroupUpdatedEvent(u)&&e),e},m,s)),e["\u0275did"](1,573440,null,0,d,[],{group:[0,"group"],errored:[1,"errored"]},{formSubmitted:"formSubmitted"})],function(l,n){var u=n.component;l(n,1,0,u.group,u.groupError)},null)}function N(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-loader",[],null,null,null,h.b,h.a)),e["\u0275did"](1,114688,null,0,b.a,[],{size:[0,"size"]},null)],function(l,n){l(n,1,0,5)},null)}function S(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,8,"div",[["class","my-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,7,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,6,"div",[["class","card mx-auto"],["style","max-width: 500px"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275ted"](4,null,[" "," Group "])),(l()(),e["\u0275eld"](5,0,null,null,3,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,P)),e["\u0275did"](7,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e["\u0275and"](0,[["spinner",2]],null,0,null,N))],function(l,n){l(n,7,0,n.component.group,e["\u0275nov"](n,8))},function(l,n){l(n,4,0,n.component.editing?"Update ":" Create ")})}function T(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-group-create-update",[],null,null,null,S,G)),e["\u0275did"](1,114688,null,0,O,[M.a,M.k,k.a],null,null)],function(l,n){l(n,1,0)},null)}var z=e["\u0275ccf"]("app-group-create-update",O,T,{},{},[]);class x{}var E=e["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;padding:1em 0}.group--card__description[_ngcontent-%COMP%]{max-height:200px;overflow-y:hidden;text-overflow:ellipsis}.group--card__widget[_ngcontent-%COMP%]{height:70px;width:7em;min-width:70px}.group--card__widget[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:3em;color:#fff;background:#6279}.group--card__widget[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border-radius:5px;padding:2px 5px;color:inherit;background:inherit}.group--card__widget[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .group--card__widget[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-within, .group--card__widget[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}.group--card__add[_ngcontent-%COMP%]{flex:1;max-height:100px;height:100px;display:flex;align-items:center;justify-content:center}.group--card__add[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:3em;cursor:pointer}"]],data:{}});function V(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.group.group_name)})}function L(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,7,"div",[["class","d-flex flex-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,4,"div",[["class","group--card__widget"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,3,"span",[["class",""]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,4).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](4,671744,null,0,M.n,[M.k,M.a,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](5,null,[" "," "])),(l()(),e["\u0275eld"](6,0,null,null,1,"div",[["class","ml-2 group--card__description"]],null,null,null,null,null)),(l()(),e["\u0275ted"](7,null,[" "," "]))],function(l,n){l(n,4,0,e["\u0275inlineInterpolate"](1,"/organizations/groups/",n.component.group.id,""))},function(l,n){var u=n.component;l(n,3,0,e["\u0275nov"](n,4).target,e["\u0275nov"](n,4).href);var t=null;l(n,5,0,null==u.group.group_name?null:null==(t=u.group.group_name.substr(0,2))?null:t.toLowerCase()),l(n,7,0,u.group.description)})}function q(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","group--card__add"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,3,"span",[["title","Add Group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,2,"a",[["routerLink","/organizations/groups/new"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,3).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](3,671744,null,0,M.n,[M.k,M.a,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](4,0,null,null,0,"i",[["class","fa fa-plus"]],null,null,null,null,null))],function(l,n){l(n,3,0,"/organizations/groups/new")},function(l,n){l(n,2,0,e["\u0275nov"](n,3).target,e["\u0275nov"](n,3).href)})}function F(l){return e["\u0275vid"](2,[(l()(),e["\u0275eld"](0,0,null,null,7,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,V)),e["\u0275did"](2,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](3,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,L)),e["\u0275did"](5,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,q)),e["\u0275did"](7,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,null==u.group?null:u.group.group_name),l(n,5,0,u.group),l(n,7,0,!u.group)},null)}var j=u("nYR2");class D{constructor(l){this._groupsSvc=l}ngOnInit(){this.getGroups()}getGroups(){this.loading=!0,this._groupsSvc.fetchGroups().pipe(Object(j.a)(()=>this.loading=!1)).subscribe(l=>{this.groups=l,this.groupsAndIcon=[...l,null]},()=>this.loading=!1)}}var K=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function A(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"span",[["style","cursor: pointer"],["title","Add Group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"a",[["routerLink","new"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,2).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](2,671744,null,0,M.n,[M.k,M.a,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](3,0,null,null,0,"i",[["class","fa fa-plus"]],null,null,null,null,null))],function(l,n){l(n,2,0,"new")},function(l,n){l(n,1,0,e["\u0275nov"](n,2).target,e["\u0275nov"](n,2).href)})}function U(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","col-md-6 col-lg-3 col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"app-group-description-card",[],null,null,null,F,E)),e["\u0275did"](2,49152,null,0,x,[],{group:[0,"group"]},null)],function(l,n){l(n,2,0,n.context.$implicit)},null)}function J(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,U)),e["\u0275did"](2,278528,null,0,r.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275and"](0,null,null,0))],function(l,n){l(n,2,0,n.component.groupsAndIcon)},null)}function Y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-loader",[],null,null,null,h.b,h.a)),e["\u0275did"](1,114688,null,0,b.a,[],{size:[0,"size"]},null)],function(l,n){l(n,1,0,5)},null)}function B(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"p",[["class","lead"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" No Groups yet "]))],null,null)}function Q(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","screen--mask"],["style","margin-top: -8%"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,Y)),e["\u0275did"](2,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,B)),e["\u0275did"](4,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.loading),l(n,4,0,!u.loading&&u.groups)},null)}function $(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,13,"div",[["class","my-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,12,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Groups "])),(l()(),e["\u0275eld"](4,0,null,null,1,"span",[["class","badge badge-rounded badge-secondary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,["",""])),(l()(),e["\u0275ted"](-1,null,[" \xa0 "])),(l()(),e["\u0275and"](16777216,null,null,1,null,A)),e["\u0275did"](8,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](9,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,J)),e["\u0275did"](11,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,Q)),e["\u0275did"](13,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,8,0,!(u.loading||null!=u.groups&&u.groups.length)),l(n,11,0,!u.loading),l(n,13,0,!(null!=u.groups&&u.groups.length)||u.loading)},function(l,n){var u=n.component;l(n,5,0,(null==u.groups?null:u.groups.length)||0)})}function H(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-group-list",[],null,null,null,$,K)),e["\u0275did"](1,114688,null,0,D,[k.a],null,null)],function(l,n){l(n,1,0)},null)}var W=e["\u0275ccf"]("app-group-list",D,H,{},{},[]);class X{ngOnInit(){}}var Z=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function ll(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Group Description & Members go here"])),(l()(),e["\u0275eld"](2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["First Group Description"])),(l()(),e["\u0275eld"](4,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Then, list members, with options to remove them"])),(l()(),e["\u0275eld"](6,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Then, a CTA to add"])),(l()(),e["\u0275eld"](8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["CTA may open up a modal, unsure as of now"]))],null,null)}function nl(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-group-view",[],null,null,null,ll,Z)),e["\u0275did"](1,114688,null,0,X,[],null,null)],function(l,n){l(n,1,0)},null)}var ul=e["\u0275ccf"]("app-group-view",X,nl,{},{},[]),el=u("IheW"),tl=u("jGGy"),ol=u("yqzj");const rl={edit:!1},il={edit:!0},al={edit:!0};class dl{}var sl=u("PCNd");u.d(n,"OrganizationModuleNgFactory",function(){return cl});var cl=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,z,W,ul]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[e.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,i.q,i.q,[]),e["\u0275mpd"](4608,k.a,k.a,[el.c,tl.a,ol.a]),e["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),e["\u0275mpd"](1073742336,i.p,i.p,[]),e["\u0275mpd"](1073742336,i.e,i.e,[]),e["\u0275mpd"](1073742336,M.o,M.o,[[2,M.t],[2,M.k]]),e["\u0275mpd"](1073742336,dl,dl,[]),e["\u0275mpd"](1073742336,sl.a,sl.a,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,M.i,function(){return[[{path:"groups/new",component:O,data:rl},{path:"groups",component:D},{path:"groups/:groupId",component:X,data:il},{path:"groups/:groupId/edit",component:O,data:al}]]},[])])})}}]);