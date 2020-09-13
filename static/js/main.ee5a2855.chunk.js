(this["webpackJsonplink-library"]=this["webpackJsonplink-library"]||[]).push([[0],{290:function(e,t,a){e.exports=a(589)},406:function(e,t){},420:function(e,t){},422:function(e,t){},589:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(11),r=a.n(l),c=a(6),i=a(654),s=a(628),d=a(630),u=a(625),m=a(109),f=a.n(m),g=a(263),p=a.n(g),b=a(262),E=a.n(b),h=a(12),v=Object(u.a)((function(e){return{bottomBar:{position:"fixed",bottom:0,background:e.palette.primary.main,margin:0,padding:0,width:"100vw",zIndex:100}}}));var k=function(e){var t=v(),a=Object(h.f)(),l=Object(n.useState)(e.value),r=Object(c.a)(l,2),i=r[0],u=r[1];return a.listen((function(e,t){"POP"===t&&u(e.pathname.replace("/",""))})),o.a.createElement(s.a,{value:i,onChange:function(t,n){a.push("/".concat(n)),u(n),e.onChange(n)},className:t.bottomBar},o.a.createElement(d.a,{label:"Home",value:"",icon:o.a.createElement(E.a,null)}),o.a.createElement(d.a,{label:"Collection",value:"collection",icon:o.a.createElement(f.a,null)}),o.a.createElement(d.a,{label:"Discover",value:"discover",icon:o.a.createElement(p.a,null)}))},O=a(631),j=a(632),y=a(79),C=a(264),w=a.n(C),S=a(265),_=a.n(S),I=a(633),N=Object(u.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,display:"flex",flexDirection:"column",alignItems:"flex-start",textTransform:"uppercase"}}})),x=function(e){var t=N();return o.a.createElement(O.a,{position:"fixed",style:{zIndex:1e4}},o.a.createElement(j.a,null,o.a.createElement(w.a,{style:{marginRight:8}}),o.a.createElement("div",{className:t.title},o.a.createElement(y.a,{variant:"h5"},e.title)),o.a.createElement(I.a,{style:{padding:0},onClick:e.onToggleTheme},o.a.createElement(_.a,{style:{color:"#fff"}}))))},T=a(26),z=a(273),A=a(165),L=a.n(A);a(300);L.a.initializeApp({apiKey:"AIzaSyBaF7HPX0cehZsg5R1uaPwn-g-c8lO35Tk",authDomain:"link-library-5cfc6.firebaseapp.com",databaseURL:"https://link-library-5cfc6.firebaseio.com",projectId:"link-library-5cfc6",storageBucket:"link-library-5cfc6.appspot.com",messagingSenderId:"405205691939",appId:"1:405205691939:web:a040686ea827173f210b96",measurementId:"G-3J7Y752GEE"});var R=L.a,B=a(647),F=a(648),H=a(640),W=a(110),D=a.n(W),q=a(634),U=a(635),M=a(636),P=a(637),G=a(638),$=a(112),J=a.n($),K=a(111),Q=a.n(K),V=a(267),X=a.n(V),Y=a(268),Z=a.n(Y),ee=a(113),te=a.n(ee),ae=a(266),ne=Object(u.a)((function(e){return{cardContainer:{background:e.palette.background.paper,width:"100%",height:"100%",borderColor:e.palette.primary.light,borderRadius:e.spacing(1)},cardContent:{lineHeight:1.25,textOverflow:"ellipsis"}}}));var oe=function(e){var t=ne(),a=function(e){var t=e.match(/^https?:\/\/(www.)?([^/?#]+)(?:[/?#]|$)/i);return t&&t[2]}(e.url),n={link_title:e.title,link_url:e.url,folder_id:e.folder,link_img:e.img,date_added:e.date_added};return o.a.createElement(q.a,{variant:"outlined",className:t.cardContainer},o.a.createElement(U.a,null,"None"!==e.img?o.a.createElement(M.a,{component:"img",alt:e.img,image:e.img,title:e.title,height:100}):"",o.a.createElement(P.a,null,o.a.createElement(y.a,{variant:"overline"},a),o.a.createElement(y.a,{className:t.cardContent,variant:"subtitle1",gutterBottom:!0},e.title),o.a.createElement(y.a,{noWrap:!0,className:t.cardContent,variant:"caption",gutterBottom:!0},e.url))),o.a.createElement(G.a,null,o.a.createElement(I.a,{size:"small",color:"primary",onClick:function(){return e.onClickEdit(Object(T.a)({docId:e.contentId},n))}},o.a.createElement(Q.a,null)),o.a.createElement(I.a,{size:"small",color:"primary",onClick:function(){return t=e.contentId,a=e.onClickDelete,void R.firestore().collection("links").doc(t).delete().then((function(){a("Link successfully deleted",n),console.log("Success")})).catch((function(e){a("Error deleting link",n),console.error("Error removing document: ",e)}));var t,a}},o.a.createElement(J.a,null)),o.a.createElement(ae.CopyToClipboard,{text:e.url,onCopy:function(){return e.onLinkCopy("Link URL copied to clipboard")}},o.a.createElement(I.a,{size:"small",color:"primary"},o.a.createElement(X.a,null))),o.a.createElement(I.a,{size:"small",color:"primary",onClick:function(t){t.preventDefault(),window.open(e.url,"_blank")}},o.a.createElement(Z.a,null)),o.a.createElement(I.a,{size:"small",color:"primary",disabled:!0,onClick:function(){return e.onClickEdit(Object(T.a)({docId:e.contentId},n))}},o.a.createElement(te.a,null))))},le=a(658),re=a(42),ce=a.n(re),ie=a(655),se=a(657),de=a(643),ue=a(642),me=a(641),fe=a(269),ge=a.n(fe),pe=a(646),be=a(119),Ee=a.n(be),he=a(639),ve=a(57),ke=a.n(ve),Oe=a(114),je=a.n(Oe),ye=a(115),Ce=a.n(ye),we=Object(u.a)((function(e){return{fabAdd:{position:"fixed",bottom:e.spacing(9),right:e.spacing(2),zIndex:1e3},formInput:{width:"100%",margin:e.spacing(1,0)},root:{padding:e.spacing(8,0,18,0),background:e.palette.background.paper},icon:{marginRight:e.spacing(1)},bottomAppBar:{top:"auto",bottom:0},snackBar:{position:"fixed",bottom:e.spacing(18)}}})),Se=o.a.forwardRef((function(e,t){return o.a.createElement(he.a,Object.assign({direction:"left",ref:t},e))}));function _e(e){console.log("FORM DIALOG PROPS: ",e);var t=we(),a=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){var e=R.firestore().collection("collections").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(T.a)({folder_id:e.id},e.data())}));o(t)}));return function(){return e()}}),[]),a}(),l=Object(n.useState)(!1),r=Object(c.a)(l,2),i=r[0],s=r[1],d=Object(n.useState)(!1),u=Object(c.a)(d,2),m=u[0],f=u[1],g=Object(n.useState)(""),p=Object(c.a)(g,2),b=p[0],E=p[1],h=Object(n.useState)(""),v=Object(c.a)(h,2),k=v[0],y=v[1],C=Object(n.useState)(""),w=Object(c.a)(C,2),S=w[0],_=w[1],N=Object(n.useState)(e.defaultFolder),x=Object(c.a)(N,2),z=x[0],A=x[1],L=Object(n.useState)(""),B=Object(c.a)(L,2),F=B[0],W=B[1],D=Object(n.useState)(""),q=Object(c.a)(D,2),U=q[0],M=q[1],P=Object(n.useState)(""),G=Object(c.a)(P,2),$=G[0],J=G[1],K=function(){V(),f(!1),s(!1)},Q=function(){f(!1)};function V(){A(e.defaultFolder),W(""),M(""),y(""),_("")}var X=function(e){ke.a.get("https://cors-anywhere.herokuapp.com/"+e).then((function(e){console.log(e.data);var t=je.a.load(e.data),a=t("meta[property='og:title']").attr("content");void 0===a&&(a=t("title")[0].children[0].data),void 0===a&&(a="");var n=t("meta[property='og:image']").attr("content");void 0===n&&(n=t("meta[property='twitter:image']").attr("content")),void 0===n&&t("img").each((function(e,t){/^https:\/\//.test(t.attribs.src)&&(n=t.attribs.src)})),void 0===n&&(n=""),J(n),W(a),f(!1)})).catch((function(e){console.log("THIS IS ERROR: ",e),E("Link invalid or not found")}))},Y=function(){return o.a.createElement(O.a,{position:"fixed",color:"secondary",className:t.bottomAppBar},o.a.createElement(j.a,null,o.a.createElement(H.a,{onClick:K},o.a.createElement(Ce.a,{className:t.icon})," Cancel")))};return o.a.createElement("div",null,o.a.createElement(me.a,{color:"secondary","aria-label":"add",className:t.fabAdd,onClick:function(){return s(!0)}},o.a.createElement(ge.a,null)),o.a.createElement(se.a,{fullScreen:!0,open:i,TransitionComponent:Se,"aria-labelledby":"form-dialog-title"},o.a.createElement("form",{onSubmit:function(t){switch(t.preventDefault(),e.mode){case"collection":R.firestore().collection("collections").add({folder_name:k,folder_desc:S}).then((function(){e.onAdd("Collection successfully created"),console.log("Collection successfully added")})).catch((function(t){e.onAdd("Error creating collection"),console.error("Error adding collection: ",t)}));break;default:R.firestore().collection("links").add({link_title:F,link_url:U,folder_id:z,link_img:$,date_added:new Date}).then((function(){e.onAdd("Link successfully added"),console.log("Link successfully added")})).catch((function(t){e.onAdd("Error adding link: ",t),console.error("Error adding to database: ",t)}))}V(),s(!1)}},o.a.createElement("div",{className:t.root},o.a.createElement(ue.a,{id:"form-dialog-title"},"Add new ","collection"===e.mode?e.mode:"link"),o.a.createElement(de.a,null,"collection"===e.mode?o.a.createElement(o.a.Fragment,null,o.a.createElement(ie.a,{required:!0,multiline:!0,autoFocus:!0,className:t.formInput,id:"collection-name",label:"Collection name",variant:"outlined",value:k,onChange:function(e){return y(e.target.value)},size:"small"}),o.a.createElement(ie.a,{multiline:!0,className:t.formInput,id:"collection-desc",label:"Collection description",variant:"outlined",value:S,onChange:function(e){return _(e.target.value)},size:"small"})):o.a.createElement(o.a.Fragment,null,o.a.createElement(ie.a,{multiline:!0,className:t.formInput,id:"link-title",label:"Link title",variant:"outlined",value:F,onChange:function(e){return W(e.target.value)},size:"small"}),o.a.createElement(ie.a,{required:!0,multiline:!0,autoFocus:!0,type:"url",className:t.formInput,id:"link-url",label:"Link URL",variant:"outlined",size:"small",value:U,onChange:function(e){M(e.target.value),f(!0),E("Getting link details..."),X(void 0!==e.target.value?e.target.value:"")}}),o.a.createElement(ie.a,{className:t.formInput,id:"link-in-folder-id",select:!0,label:"Collection",value:z,onChange:function(e){return A(e.target.value)},variant:"outlined",size:"small"},a.map((function(e){return o.a.createElement(pe.a,{key:e.folder_id,value:e.folder_id},e.folder_name)})))))),o.a.createElement(me.a,{color:"secondary","aria-label":"add",className:t.fabAdd,type:"submit",variant:"extended"},o.a.createElement(Ee.a,{className:t.icon})," Save")),o.a.createElement(le.a,{className:t.snackBar,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:m,autoHideDuration:5e3,onClose:Q,message:b,action:o.a.createElement(o.a.Fragment,null,o.a.createElement(I.a,{size:"small","aria-label":"close",color:"inherit",onClick:Q},o.a.createElement(ce.a,{fontSize:"small"})))}),o.a.createElement(Y,null)))}var Ie=Object(u.a)((function(e){return{fabAdd:{position:"fixed",bottom:e.spacing(9),right:e.spacing(2),zIndex:1e3},formInput:{width:"100%",margin:e.spacing(1,0)},root:{padding:e.spacing(8,0,18,0)},icon:{marginRight:e.spacing(1)},bottomAppBar:{top:"auto",bottom:0},snackBar:{position:"fixed",bottom:e.spacing(18)}}})),Ne=o.a.forwardRef((function(e,t){return o.a.createElement(he.a,Object.assign({direction:"left",ref:t},e))}));var xe=function(e){var t=Ie(),a=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){var e=R.firestore().collection("collections").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(T.a)({folder_id:e.id},e.data())}));o(t)}));return function(){return e()}}),[]),a}(),l=function(){oe(),K(!1),Y(!1),e.onClose(!1)},r=Object(n.useState)(e.folder_id),i=Object(c.a)(r,2),s=i[0],d=i[1],u=Object(n.useState)(e.link_title),m=Object(c.a)(u,2),f=m[0],g=m[1],p=Object(n.useState)(e.link_url),b=Object(c.a)(p,2),E=b[0],h=b[1],v=Object(n.useState)(e.link_img),k=Object(c.a)(v,2),y=k[0],C=k[1],w=Object(n.useState)(e.docId),S=Object(c.a)(w,2),_=S[0],N=S[1],x=Object(n.useState)(e.collection_id),z=Object(c.a)(x,2),A=z[0],L=z[1],B=Object(n.useState)(e.folder_name),F=Object(c.a)(B,2),W=F[0],D=F[1],q=Object(n.useState)(e.folder_desc),U=Object(c.a)(q,2),M=U[0],P=U[1],G=Object(n.useState)(!1),$=Object(c.a)(G,2),J=$[0],K=$[1],Q=Object(n.useState)(!1),V=Object(c.a)(Q,2),X=V[0],Y=V[1],Z=Object(n.useState)(""),ee=Object(c.a)(Z,2),te=ee[0],ae=ee[1];Object(n.useEffect)((function(){d(e.folder_id),g(e.link_title),h(e.link_url),C(e.link_img),N(e.docId),K(e.edit),L(e.collection_id),D(e.folder_name),P(e.folder_desc)}),[e.folder_id,e.link_title,e.link_url,e.link_img,e.edit,e.docId,e.collection_id,e.folder_name,e.folder_desc]);var ne=function(){Y(!1)};function oe(){d(s),g(""),h(""),D(""),P("")}var re=function(e){ke.a.get("https://cors-anywhere.herokuapp.com/"+e).then((function(e){console.log(e.data);var t=je.a.load(e.data),a=t("meta[property='og:title']").attr("content");void 0===a&&(a=t("title")[0].children[0].data),void 0===a&&(a="");var n=t("meta[property='og:image']").attr("content");void 0===n&&(n=t("meta[property='twitter:image']").attr("content")),void 0===n&&t("img").each((function(e,t){/^https:\/\//.test(t.attribs.src)&&(n=t.attribs.src)})),void 0===n&&(n=""),C(n),g(a),Y(!1)})).catch((function(e){console.log("THIS IS ERROR: ",e),ae("Link invalid or not found")}))},fe=function(){return o.a.createElement(O.a,{position:"fixed",color:"secondary",className:t.bottomAppBar},o.a.createElement(j.a,null,o.a.createElement(H.a,{onClick:l},o.a.createElement(Ce.a,{className:t.icon})," Cancel")))};return o.a.createElement("div",null,o.a.createElement(se.a,{fullScreen:!0,open:J,TransitionComponent:Ne,"aria-labelledby":"form-dialog-title"},o.a.createElement("form",{onSubmit:function(t){switch(t.preventDefault(),e.mode){case"collection":R.firestore().collection("collections").doc(A).update({folder_name:W,folder_desc:M}).then((function(){e.onUpdate("Collection successfully updated"),console.log("Collection successfully updated")})).catch((function(t){e.onUpdate("Error updating collection"),console.error("Error adding collection: ",t)}));break;default:R.firestore().collection("links").doc(_).update({link_title:f,link_url:E,folder_id:s,link_img:y,date_added:new Date}).then((function(){e.onAdd("Link successfully updated"),console.log("Link successfully updated")})).catch((function(t){e.onAdd("Error updating link: ",t),console.error("Error updating link on database: ",t)}))}oe(),K(!1)}},o.a.createElement("div",{className:t.root},o.a.createElement(ue.a,{id:"form-dialog-title"},"Edit ","collection"===e.mode?e.mode:"link"),o.a.createElement(de.a,null,"collection"===e.mode?o.a.createElement(o.a.Fragment,null,o.a.createElement(ie.a,{required:!0,multiline:!0,autoFocus:!0,className:t.formInput,id:"collection-name",label:"Collection name",variant:"outlined",value:W,onChange:function(e){D(e.target.value)},size:"small"}),o.a.createElement(ie.a,{multiline:!0,className:t.formInput,id:"collection-desc",label:"Collection description",variant:"outlined",value:M,onChange:function(e){P(e.target.value)},size:"small"})):o.a.createElement(o.a.Fragment,null,o.a.createElement(ie.a,{multiline:!0,className:t.formInput,id:"link-title",label:"Link title",variant:"outlined",value:f,onChange:function(e){g(e.target.value)},size:"small"}),o.a.createElement(ie.a,{required:!0,multiline:!0,autoFocus:!0,type:"url",className:t.formInput,id:"link-url",label:"Link URL",variant:"outlined",size:"small",value:E,onChange:function(e){h(e.target.value),Y(!0),ae("Getting link details..."),re(void 0!==e.target.value?e.target.value:"")},helperText:"URL must start with http:// or https://"}),o.a.createElement(ie.a,{className:t.formInput,id:"link-in-folder-id",select:!0,label:"Collection",value:s,onChange:function(e){d(e.target.value)},variant:"outlined",size:"small"},a.map((function(e){return o.a.createElement(pe.a,{key:e.folder_id,value:e.folder_id},e.folder_name)})))))),o.a.createElement(me.a,{color:"secondary","aria-label":"add",className:t.fabAdd,type:"submit",variant:"extended"},o.a.createElement(Ee.a,{className:t.icon})," Save")),o.a.createElement(le.a,{className:t.snackBar,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:X,autoHideDuration:5e3,onClose:ne,message:te,action:o.a.createElement(o.a.Fragment,null,o.a.createElement(I.a,{size:"small","aria-label":"close",color:"inherit",onClick:ne},o.a.createElement(ce.a,{fontSize:"small"})))}),o.a.createElement(fe,null)))},Te=Object(u.a)((function(e){return{root:{flexGrow:1,width:"calc(100vw - ".concat(e.spacing(2),"px)"),margin:e.spacing(9,1,18,1)},folderNameHeader:{background:e.palette.background.paper,position:"sticky",top:e.spacing(7),zIndex:5,paddingTop:e.spacing(2)},snackBar:{position:"fixed",bottom:e.spacing(18)}}}));var ze=function(e){var t=e.id,a=e.name,l=Object(z.a)(e,["id","name"]),r=Te(),i=Object(n.useState)(!1),s=Object(c.a)(i,2),d=s[0],u=s[1],m=Object(n.useState)(!1),f=Object(c.a)(m,2),g=f[0],p=f[1],b=Object(n.useState)(""),E=Object(c.a)(b,2),h=E[0],v=E[1],k=Object(n.useState)(!0),O=Object(c.a)(k,2),j=O[0],C=O[1],w=Object(n.useState)({}),S=Object(c.a)(w,2),_=S[0],N=S[1],x=function(e,t){u(!0),p(!1),v(e),N(t),C(!0)},A=function(e){C(!1),u(!0),v(e),p(!1)},L=function(e,t){"clickaway"!==t&&u(!1)},W=function(e){u(!1),setTimeout((function(){C(!1),u(!0),v(e)}))},q=function(e){p(!0),N(e),console.log("EDIT THIS: ",e)},U=function(e,t){var a=Object(n.useState)([]),o=Object(c.a)(a,2),l=o[0],r=o[1];return Object(n.useEffect)((function(){var a=R.firestore().collection("links");return!0===t?a.orderBy("date_added","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(T.a)({link_id:e.id},e.data())}));r(t)})):a.where("folder_id","==",e).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(T.a)({link_id:e.id},e.data())}));r(t)})),function(){return a}}),[e,t]),console.log("Function useDetails() in Folder.js called"),l}(t,l.fetchAll).map((function(e){return o.a.createElement(B.a,{item:!0,key:e.link_id},o.a.createElement(oe,{contentId:e.link_id,title:e.link_title,url:e.link_url,img:e.link_img,folder:e.folder_id,date_added:e.date_added,onClickDelete:x,onClickEdit:q,onLinkCopy:W}))})),M=function(){var e=Object(n.useState)({width:void 0,height:void 0}),t=Object(c.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){function e(){o({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}();return o.a.createElement(o.a.Fragment,null,void 0===l.showHeader?o.a.createElement(F.a,{className:r.folderNameHeader},o.a.createElement(y.a,{variant:"h6",gutterBottom:!0},a)):"",o.a.createElement("div",{className:r.root},o.a.createElement(D.a,{monitorImagesLoaded:!0,columnWidth:M.width<=320?M.width-16:160,gutterWidth:8,gutterHeight:8},U),o.a.createElement(le.a,{className:r.snackBar,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:d,autoHideDuration:5e3,onClose:L,message:h,action:o.a.createElement(o.a.Fragment,null,j?o.a.createElement(H.a,{color:"inherit","aria-label":"undro-delete",onClick:function(){R.firestore().collection("links").add(_).then((function(){return console.log("Link delete undone")})).catch((function(e){return console.error("Error encountered: ",e)})),u(!1),setTimeout((function(){u(!0),C(!1),v("Link restored")}),500)}},"Undo"):"",o.a.createElement(I.a,{size:"small","aria-label":"close",color:"inherit",onClick:L},o.a.createElement(ce.a,{fontSize:"small"})))})),o.a.createElement(_e,{mode:"link",onAdd:A,defaultFolder:t}),o.a.createElement(xe,Object.assign({mode:"link",onAdd:A,onClose:p,edit:g},_)))},Ae=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(x,{title:"Link library",onToggleTheme:e.onToggleTheme}),o.a.createElement(ze,{id:"3ppmoaOw6ANJk10oWmhh",fetchAll:!0,showHeader:!1}))},Le=a(590),Re=a(649),Be=a(659),Fe=a(650),He=a(276),We=a(645),De=a(271),qe=a.n(De),Ue=a(270),Me=a.n(Ue),Pe=a(120),Ge=(a(588),Object(u.a)((function(e){return{root:{flexGrow:1,width:"calc(100vw - ".concat(e.spacing(4),"px)"),margin:e.spacing(9,2,18,2),zIndex:0},title:{margin:e.spacing(4,0,2)},bottomAppBar:{top:"auto",bottom:0},avatar:{backgroundColor:e.palette.secondary.main},folderIcon:{color:e.palette.primary.main},swipeRightContainer:{display:"flex",alignItems:"center",height:"100%",width:"100%",background:"#ef5350",justifyContent:"flex-start"},swipeRightAction:{display:"flex",alignItems:"center",color:"#fff",alignContent:"flex-start"},swipeIcon:{margin:e.spacing(0,1)},swipeLeftContainer:{display:"flex",alignItems:"center",height:"100%",width:"100%",background:"#1976d2",justifyContent:"flex-end"},swipeLeftAction:{display:"flex",alignItems:"center",color:"#fff",alignContent:"flex-end"},snackBar:{position:"fixed",bottom:e.spacing(18)},listItem:{background:e.palette.background.paper}}}))),$e=o.a.forwardRef((function(e,t){return o.a.createElement(he.a,Object.assign({direction:"left",ref:t},e))}));var Je=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),l=a[0],r=a[1],i=Object(n.useState)(!1),s=Object(c.a)(i,2),d=s[0],u=s[1],m=Object(n.useState)(""),g=Object(c.a)(m,2),p=g[0],b=g[1],E=Object(n.useState)(!1),h=Object(c.a)(E,2),v=h[0],k=h[1],C=Object(n.useState)(""),w=Object(c.a)(C,2),S=w[0],_=w[1],N=Object(n.useState)(""),z=Object(c.a)(N,2),A=z[0],L=z[1],F=Object(n.useState)(""),W=Object(c.a)(F,2),q=W[0],U=W[1],M=Object(n.useState)(!1),P=Object(c.a)(M,2),G=P[0],$=P[1],K=Ge(),V=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){var e=R.firestore().collection("collections").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(T.a)({folder_id:e.id},e.data())}));o(t)}));return function(){return e()}}),[]),a}(),X=function(e,t){"clickaway"!==t&&(r(!1),u(!1))},Y=function(e,t){_(e),L(t),r(!0)},Z=function(e,t,a){_(e),L(t),U(a),function(e){R.firestore().collection("collections").doc(e).delete().then((function(){return console.log("Collection successfully deleted")})).catch((function(e){return console.error("Error removing document: ",e)}))}(e),k(!0),$(!1),b("Collection successfully deleted"),u(!0)},ee=V.map((function(e){return o.a.createElement(B.a,{item:!0,key:e.folder_id},o.a.createElement(Pe.SwipeableListItem,{swipeLeft:{content:o.a.createElement("div",{className:K.swipeLeftContainer},o.a.createElement("div",{className:K.swipeLeftAction},o.a.createElement(y.a,{variant:"subtitle2"},"Edit"),o.a.createElement(Q.a,{fontSize:"large",className:K.swipeIcon}))),action:function(){return t=e.folder_id,a=e.folder_name,n=e.folder_desc,_(t),L(a),U(n),void $(!0);var t,a,n},actionAnimation:Pe.ActionAnimations.RETURN},swipeRight:{content:o.a.createElement("div",{className:K.swipeRightContainer},o.a.createElement("div",{className:K.swipeRightAction},o.a.createElement(J.a,{fontSize:"large",className:K.swipeIcon}),o.a.createElement(y.a,{variant:"subtitle2"},"Delete"))),action:function(){return Z(e.folder_id,e.folder_name,e.folder_desc)},actionAnimation:Pe.ActionAnimations.REMOVE},blockSwipe:void 0!==e.editable},o.a.createElement(Le.a,{className:K.listItem,onClick:function(){return Y(e.folder_id,e.folder_name)}},o.a.createElement(Re.a,null,o.a.createElement(Be.a,{className:K.avatar},o.a.createElement(f.a,{className:K.folderIcon}))),o.a.createElement(Fe.a,{primary:o.a.createElement(y.a,{variant:"subtitle1"},e.folder_name),secondary:e.folder_desc}))))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(x,{title:"Collection",onToggleTheme:e.onToggleTheme}),o.a.createElement("div",{className:K.root},o.a.createElement(He.a,{variant:"outlined",style:{borderRadius:8}},o.a.createElement(We.a,null,o.a.createElement(D.a,{columnWidth:"100%",gutterWidth:8,gutterHeight:0},ee))),o.a.createElement(se.a,{fullScreen:!0,open:l,TransitionComponent:$e},o.a.createElement(ze,{id:S,name:A}),o.a.createElement(O.a,{position:"fixed",color:"secondary",className:K.bottomAppBar},o.a.createElement(j.a,null,o.a.createElement(I.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:X},o.a.createElement(Me.a,null)),o.a.createElement(I.a,{color:"inherit"},o.a.createElement(qe.a,null)),o.a.createElement(I.a,{edge:"end",color:"inherit"},o.a.createElement(te.a,null)))))),o.a.createElement(le.a,{className:K.snackBar,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:d,onClose:X,autoHideDuration:5e3,message:p,action:o.a.createElement(o.a.Fragment,null,v?o.a.createElement(H.a,{color:"secondary","aria-label":"undo-delete",onClick:function(){u(!1),k(!1),R.firestore().collection("collections").doc(S).set({folder_name:A,folder_desc:q}).then((function(){console.log("Collection restored"),setTimeout((function(){u(!0),b("Collection restored")}),300)})).catch((function(e){console.error("Error restoring collection: ",e)}))}},"Undo"):"",o.a.createElement(I.a,{size:"small","aria-label":"close",color:"inherit",onClick:function(){u(!1)}},o.a.createElement(ce.a,{fontSize:"small"})))}),o.a.createElement(_e,{mode:"collection",onAdd:function(e){k(!1),b(e),console.log({message:e}),u(!0)}}),o.a.createElement(xe,{mode:"collection",edit:G,onClose:$,onUpdate:function(e){b(e),console.log({message:e}),u(!0),$(!1)},collection_id:S,folder_name:A,folder_desc:q}))},Ke=a(651),Qe=a(652),Ve=Object(u.a)((function(e){return{gridListHolder:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden"},gridList:{flexWrap:"nowrap",padding:e.spacing(0,2,1,2)},discoverHeader:{padding:e.spacing(0,2)},containerWrapper:{margin:e.spacing(2,0)}}})),Xe=function(e){var t=e.title,a=e.query,l=Ve(),r=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),o=t[0],l=t[1];return Object(n.useEffect)((function(){var e=ke.a.get("https://api.currentsapi.services/v1/"+a+"apiKey=-V2Sp7WAWXtgTlbqlnRQiPwCaBnSviDzx2nzkIOmxAs1QHEl").then((function(e){console.log({res:e}),l(e.data.news)})).catch((function(e){console.log({err:e})}));return function(){return e}}),[]),o}().map((function(e){return o.a.createElement(Ke.a,{key:e.url},o.a.createElement(oe,{title:e.title,url:e.url,img:e.image}))}));return o.a.createElement("div",{className:l.containerWrapper},o.a.createElement("div",{className:l.discoverHeader},o.a.createElement(y.a,{variant:"h6",gutterBottom:!0},t)),o.a.createElement("div",{className:l.gridListHolder},o.a.createElement(Qe.a,{className:l.gridList,cols:1.5,cellHeight:"auto",spacing:8},r)))},Ye=Object(u.a)((function(e){return{root:{width:"100%",margin:e.spacing(9,0)},gridListHolder:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden"},gridList:{flexWrap:"nowrap",padding:e.spacing(0,1)}}})),Ze=function(e){var t=Ye();return o.a.createElement(o.a.Fragment,null,o.a.createElement(x,{title:"Discover",onToggleTheme:e.onToggleTheme}),o.a.createElement("div",{className:t.root},o.a.createElement(Xe,{title:"Philippines News",query:"latest-news?country=ph&"}),o.a.createElement(Xe,{title:"World News",query:"latest-news?language=en&"}),o.a.createElement(Xe,{title:"Politics",query:"search?category=politics&"}),o.a.createElement(Xe,{title:"Technology",query:"search?category=technology&"}),o.a.createElement(Xe,{title:"Gadgets",query:"search?category=gadgets&"}),o.a.createElement(Xe,{title:"Science",query:"search?category=science&"})))},et=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(Ze,null))},tt=a(162),at=a(653),nt=a(272),ot=Object(nt.a)({palette:{background:{default:"#dadada"},primary:{light:"#e0e0e0",main:"#37474f",dark:"#102027",contrastText:"#fff"},secondary:{light:"#ffffa6",main:"#dce775",dark:"#a8b545",contrastText:"#000"}},typography:{fontSize:12,subtitle1:{fontWeight:700,color:"#37474f"},h5:{fontWeight:900,letterSpacing:"0.04rem"},h6:{fontWeight:900,color:"#37474f",letterSpacing:"0.03rem",textTransform:"uppercase"}},overrides:{MuiBottomNavigationAction:{root:{color:"#62727b","&$selected":{color:"#dce775"}}}}}),lt=Object(nt.a)({palette:{background:{default:"#424242",paper:"#333"},primary:{light:"#484848",main:"#212121",dark:"#000000",contrastText:"#fff"},secondary:{light:"#ffffa6",main:"#dce775",dark:"#a8b545",contrastText:"#000"}},typography:{fontSize:12,subtitle1:{fontWeight:700,color:"#fff"},overline:{color:"#fff8"},caption:{color:"#fff8"},h5:{fontWeight:900,letterSpacing:"0.04rem"},h6:{fontWeight:900,color:"#fff",letterSpacing:"0.03rem",textTransform:"uppercase"}},overrides:{MuiBottomNavigationAction:{root:{color:"#616161","&$selected":{color:"#dce775"}}},MuiIconButton:{colorPrimary:{color:"#fff"}},MuiListItemText:{secondary:{color:"#ff8"}},MuiOutlinedInput:{root:{color:"#fff","& $notchedOutline":{borderColor:"#ff8"},"&$focused $notchedOutline":{borderColor:"#dce775",borderWidth:2}}},MuiFormLabel:{root:{color:"#fff8","&$focused":{color:"#dce775"}}},MuiMenuItem:{root:{color:"#fff"}}}});var rt=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),s=Object(c.a)(r,2),d=s[0],u=s[1],m=function(){u(!d)};return o.a.createElement(at.a,{theme:d?lt:ot},o.a.createElement(i.a,null),o.a.createElement(tt.a,{basename:"/link-library"},o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/"},o.a.createElement(Ae,{onToggleTheme:m})),o.a.createElement(h.a,{path:"/discover"},o.a.createElement(Ze,{onToggleTheme:m})),o.a.createElement(h.a,{path:"/collection"},o.a.createElement(Je,{onToggleTheme:m})),o.a.createElement(h.a,{path:"/settings"},o.a.createElement(et,{onToggleTheme:m}))),o.a.createElement(k,{value:a,onChange:l})))};r.a.render(o.a.createElement(rt,null),document.getElementById("root"))}},[[290,1,2]]]);
//# sourceMappingURL=main.ee5a2855.chunk.js.map