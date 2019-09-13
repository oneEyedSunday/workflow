(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1BjP":function(t,e,r){"use strict";r.d(e,"a",function(){return s});var n=r("AytR"),o=(r("yqzj"),r("JIr8"));class s{constructor(t,e){this.http=t,this.url=n.a.API_URL+"/process/formbuilder/org",this.handleError=e.createHandleError("Form Builder")}createFormTemplate(){return this.http.get(`${this.url}/1/create/`,{responseType:"text"}).pipe(Object(o.a)(this.handleError("Failed to Init Form Template",null)))}fetchFormTemplate(t){return this.http.get(`${this.url}/1/update/${t}`,{responseType:"text"}).pipe(Object(o.a)(this.handleError("Failed to Get Form Template",null)))}renderForm(t){return this.http.get(`${this.url}/1/view/${t}/`,{responseType:"text"}).pipe(Object(o.a)(this.handleError("Failed to fetch form",null)))}}},"7JiG":function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r("AytR"),o=(r("yqzj"),r("lJxs")),s=r("JIr8");r("cw8b");class i{constructor(t,e,r){this.http=t,this.auth=e,this.url=n.a.API_URL,this.handleError=r.createHandleError("Documents")}fetchDocuments(){return this.http.get(this.url+"/process/document").pipe(Object(o.a)(t=>t),Object(s.a)(this.handleError("Fetch Documents",null)))}getDocumentById(t){return this.http.get(this.url+"/process/document/"+t).pipe(Object(o.a)(t=>t),Object(s.a)(this.handleError("Fetch Document",null)))}addDocument(t){const{filename:e,description:r,link:n}=t;return this.http.post(this.url+"/process/document/",{link:n,organization:1,user:this.auth.currentUserValue.id,filename:e,description:r,documenttasks:[]})}notifyEngine(t){return this.http.post(`${this.url}/process/processflow/`,{id:t}).pipe(Object(s.a)(this.handleError("Failed to acknowledge receipt",null)))}}},B6ex:function(t,e,r){"use strict";r.d(e,"a",function(){return s}),r("r7Hy");var n=r("AytR"),o=(r("yqzj"),r("JIr8"));r("cw8b");class s{constructor(t,e,r){this.http=t,this.auth=e,this.url=n.a.API_URL+"/account/allusers/",this.handleError=r.createHandleError("Users")}fetchAllUsers(){return this.http.get(this.url).pipe(Object(o.a)(this.handleError("Fetch Users failed",null)))}}},NzaM:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var n=r("AytR"),o=(r("yqzj"),r("JIr8"));r("cw8b");class s{constructor(t,e,r){this.http=t,this.auth=e,this.url=n.a.API_URL+"/org/groups/",this.handleError=r.createHandleError("Groups")}fetchGroups(){return this.http.get(this.url).pipe(Object(o.a)(this.handleError("Fetch Groups",null)))}fetchGroup(t){return this.http.get(`${this.url}${t}`).pipe(Object(o.a)(this.handleError("Fetch Group",null)))}createGroup(t){const{description:e,group_name:r}=t;return this.http.post(this.url,{organization:1,description:e,group_name:r}).pipe(Object(o.a)(this.handleError("Create Group",null)))}updateGroup(t,e){const{id:r,organization:n,description:s,group_name:i}=e;return this.http.post(`${this.url}/${t}`,{id:r,organization:n,description:s,group_name:i}).pipe(Object(o.a)(this.handleError("Update Group",null)))}addUserToGroups(t,e){return this.http.post(`${n.a.API_URL}/org/joingroup/`,{user_obj:e,org:1,grp:t}).pipe(Object(o.a)(this.handleError("Failed to Add User to Group",null)))}removeUserFromGroup(t){return this.http.delete(`${n.a.API_URL}/org/removeuserfromgroup/${t}`).pipe(Object(o.a)(this.handleError("Failed to Remove from Group")))}}},apLq:function(t,e,r){"use strict";r("1BjP"),r("edmw")},cum5:function(t,e,r){"use strict";r("7JiG")},dwS2:function(t,e,r){"use strict";r("NzaM"),r("B6ex")},edmw:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var n=r("AytR"),o=(r("yqzj"),r("JIr8"));r("cw8b");class s{constructor(t,e,r){this.http=t,this.auth=e,this.url=n.a.API_URL+"/process/form/",this.handleError=r.createHandleError("Form Builder")}getForms(){return this.http.get(this.url).pipe(Object(o.a)(this.handleError("Fetch Forms",null)))}getFormResponses(){return this.http.get(`${this.url}formresponse/`).pipe(Object(o.a)(this.handleError("Failed to get Form responses",null)))}getFormResponse(t){return this.http.get(`${n.a.API_URL}/process/formbuilder/org/1/view/${t}/responses/`).pipe(Object(o.a)(this.handleError("Failed to get Form responses",null)))}notifyEngine(t){return this.http.post(`${n.a.API_URL}/process/processflow/`,{id:t}).pipe(Object(o.a)(this.handleError("Failed to acknowledge receipt",null)))}}},wliG:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var n=["[_nghost-%COMP%]{display:block;padding:1em 0}.group--card__description[_ngcontent-%COMP%]{max-height:200px;overflow-y:hidden;text-overflow:ellipsis}.group--card__widget[_ngcontent-%COMP%]{height:70px;width:7em;min-width:70px}.group--card__widget[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:3em;color:#fff;background:#6279}.group--card__widget[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border-radius:5px;padding:2px 5px;color:inherit;background:inherit}.group--card__widget[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .group--card__widget[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-within, .group--card__widget[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}.group--card__add[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1;max-height:100px;height:100px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.group--card__add[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:3em;cursor:pointer}"]}}]);