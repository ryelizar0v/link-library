(this["webpackJsonplink-library"]=this["webpackJsonplink-library"]||[]).push([[0],{267:function(e,t,n){e.exports=n(562)},380:function(e,t){},394:function(e,t){},396:function(e,t){},562:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(9),i=n.n(l),c=n(11),o=n(606),u=n(631),m=n(609),s=n(611),d=n(106),f=n.n(d),g=n(251),p=n.n(g),b=n(252),E=n.n(b),v=n(250),h=n.n(v),k=n(10),w=Object(o.a)((function(e){return{bottomBar:{position:"fixed",bottom:0,background:"#f0f0f0",margin:0,padding:0,width:"100%",zIndex:100,transition:"transform 0.3s ease-in-out",borderRadius:"".concat(e.spacing(1),"px ").concat(e.spacing(1),"px 0 0")},bottomBarShown:{transform:"translate3d(0,0,0)"},bottomBarHidden:{transform:"translate3d(0,100%,0)"}}}));var j=function(e){var t=w(),n=Object(k.f)(),a=r.a.useState(""),l=Object(c.a)(a,2),i=l[0],o=l[1];return r.a.createElement(m.a,{value:i,onChange:function(t,a){n.push("/link-library/".concat(a)),o(a),e.onChange(a)},className:"".concat(t.bottomBar," ").concat(t.bottomBarShown)},r.a.createElement(s.a,{label:"Home",value:"",icon:r.a.createElement(h.a,null)}),r.a.createElement(s.a,{label:"Favorites",value:"favorites",icon:r.a.createElement(p.a,null)}),r.a.createElement(s.a,{label:"Collection",value:"collection",icon:r.a.createElement(f.a,null)}),r.a.createElement(s.a,{label:"Settings",value:"settings",icon:r.a.createElement(E.a,null)}))},O=n(612),y=n(613),x=n(78),S=n(253),_=n.n(S),C=Object(o.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,display:"flex",flexDirection:"column",alignItems:"flex-start",textTransform:"uppercase"}}}));var I=function(e){var t=C();return r.a.createElement(O.a,{position:"fixed"},r.a.createElement(y.a,null,r.a.createElement(_.a,{style:{marginRight:8}}),r.a.createElement("div",{className:t.title},r.a.createElement(x.a,{variant:"h6"},e.title))))},z=n(38),B=n(627),L=n(52),N=n.n(L),F=n(614),R=n(615),H=n(618),T=n(617),D=n(616),G=n(108),A=n.n(G),W=n(107),J=n.n(W),U=n(619),q=n(153),P=n.n(q);n(338);P.a.initializeApp({apiKey:"AIzaSyBaF7HPX0cehZsg5R1uaPwn-g-c8lO35Tk",authDomain:"link-library-5cfc6.firebaseapp.com",databaseURL:"https://link-library-5cfc6.firebaseio.com",projectId:"link-library-5cfc6",storageBucket:"link-library-5cfc6.appspot.com",messagingSenderId:"405205691939",appId:"1:405205691939:web:a040686ea827173f210b96",measurementId:"G-3J7Y752GEE"});var K=P.a,X=Object(o.a)((function(e){return{cardContainer:{background:"#c0c0c0",width:"100%"},cardContent:{lineHeight:1.25}}}));var Y=function(e){var t=X(),n=function(e){var t=e.match(/^https?:\/\/(www.)?([^/?#]+)(?:[/?#]|$)/i);return t&&t[2]}(e.url);return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{className:t.cardContainer},r.a.createElement(R.a,null,""!==e.img?r.a.createElement(D.a,{component:"img",alt:"Image",image:e.img,title:"cat"}):"",r.a.createElement(T.a,null,r.a.createElement(x.a,{variant:"overline"},n),r.a.createElement(x.a,{className:t.cardContent,variant:"subtitle1",gutterBottom:!0},e.title),r.a.createElement(x.a,{className:t.cardContent,variant:"caption",gutterBottom:!0},e.url))),r.a.createElement(H.a,null,r.a.createElement(U.a,{size:"small",color:"primary"},r.a.createElement(J.a,null)),r.a.createElement(U.a,{size:"small",color:"primary",onClick:function(t){return n=e.contentId,void K.firestore().collection("links").doc(n).delete().then((function(){return console.log("Success")})).catch((function(e){return console.error("Error removing document: ",e)}));var n}},r.a.createElement(A.a,null)))))},Z=n(626),$=n(632),M=n(634),Q=n(625),V=n(622),ee=n(621),te=n(620),ne=n(256),ae=n.n(ne),re=n(624),le=n(254),ie=n.n(le),ce=n(255),oe=n.n(ce),ue=Object(o.a)((function(e){return{fabAdd:{position:"fixed",bottom:e.spacing(8),right:e.spacing(2),zIndex:1e3},formHolder:{position:"fixed",width:"100%",bottom:0,padding:"".concat(e.spacing(3),"px ").concat(e.spacing(2),"px"),borderRadius:"".concat(e.spacing(1),"px ").concat(e.spacing(1),"px 0 0"),background:"#999",zIndex:5,transition:"transform 0.3s ease-in-out"},formShown:{transform:"translate3d(0,0,0)"},formHidden:{transform:"translate3d(0,100%,0)"},formInput:{width:"100%",margin:"".concat(e.spacing(1),"px 0")},formTitle:{display:"flex",alignItems:"center",textTransform:"uppercase",paddingBottom:e.spacing(1)},buttonHolder:{margin:"".concat(e.spacing(1),"px 0")},formButton:{marginRight:"".concat(e.spacing(1),"px")}}}));function me(e){var t=ue(),n=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=K.firestore().collection("collections").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(z.a)({folder_id:e.id},e.data())}));r(t)}));return function(){return e()}}),[]),n}(),l=Object(a.useState)(!1),i=Object(c.a)(l,2),o=i[0],u=i[1];console.log(n);var m=function(){u(!1)},s=Object(a.useState)(""),d=Object(c.a)(s,2),f=d[0],g=d[1],p=Object(a.useState)(""),b=Object(c.a)(p,2),E=b[0],v=b[1],h=Object(a.useState)(""),k=Object(c.a)(h,2),w=k[0],j=k[1],O=Object(a.useState)(""),y=Object(c.a)(O,2),x=y[0],S=y[1],_=Object(a.useState)(""),C=Object(c.a)(_,2),I=C[0],B=C[1];return r.a.createElement("div",null,r.a.createElement(te.a,{color:"primary","aria-label":"add",className:t.fabAdd,onClick:function(){u(!0)}},r.a.createElement(ae.a,null)),r.a.createElement(M.a,{open:o,onClose:m,"aria-labelledby":"form-dialog-title"},r.a.createElement("form",{onSubmit:function(t){switch(t.preventDefault(),e.mode){case"collection":K.firestore().collection("collections").add({folder_name:x,folder_desc:I});break;default:ie.a.get("https://cors-anywhere.herokuapp.com/"+w).then((function(e){console.log(e.data);var t=oe.a.load(e.data),n=t("meta[property='og:image']").attr("content");void 0===n&&(n=t("meta[property='twitter:image']").attr("content")),void 0===n&&t("img").each((function(e,t){/^https:\/\//.test(t.attribs.src)&&(n=t.attribs.src)})),void 0===n&&(n=""),K.firestore().collection("links").add({link_title:t("title")[0].children[0].data,link_url:w,folder_id:f,link_img:n}).then((function(){return alert("Link successfully added")})).catch((function(e){return console.error("Error adding to database: ",e)}))}))}g("0"),v(""),j(""),S(""),B(""),u(!1)}},r.a.createElement(ee.a,{id:"form-dialog-title"},"Add new ","collection"===e.mode?e.mode:"link"),r.a.createElement(V.a,null,"collection"===e.mode?r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{required:!0,className:t.formInput,id:"collection-name",label:"Collection name",variant:"outlined",value:x,onChange:function(e){S(e.target.value)},size:"small"}),r.a.createElement($.a,{multiline:!0,className:t.formInput,id:"collection-desc",label:"Collection description",variant:"outlined",value:I,onChange:function(e){B(e.target.value)},size:"small"})):r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{multiline:!0,className:t.formInput,id:"link-title",label:"Link title",variant:"outlined",value:E,onChange:function(e){v(e.target.value)},size:"small",helperText:"Type your own title"}),r.a.createElement($.a,{required:!0,type:"url",className:t.formInput,id:"link-url",label:"Link URL",variant:"outlined",size:"small",value:w,onChange:function(e){j(e.target.value)},helperText:"URL must start with http:// or https://"}),r.a.createElement($.a,{className:t.formInput,id:"link-in-folder-id",select:!0,label:"Collection",value:f,onChange:function(e){g(e.target.value)},variant:"outlined",size:"small"},n.map((function(e){return r.a.createElement(re.a,{key:e.folder_id,value:e.folder_id},e.folder_name)}))))),r.a.createElement(Q.a,null,r.a.createElement(Z.a,{type:"submit",color:"primary"},"Save"),r.a.createElement(Z.a,{onClick:m,color:"primary"},"Cancel")))))}var se=Object(o.a)((function(e){return{root:{flexGrow:1,width:"calc(100vw - ".concat(e.spacing(2),"px)"),marginLeft:e.spacing(1),marginRight:e.spacing(1),marginTop:e.spacing(9),marginBottom:e.spacing(16)}}}));var de=function(){var e=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=K.firestore().collection("links").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(z.a)({link_id:e.id},e.data())}));r(t)}));return function(){return e()}}),[]),n}(),t=se(),n=e.map((function(e){return r.a.createElement(B.a,{item:!0,key:e.link_id},r.a.createElement(Y,{contentId:e.link_id,title:e.link_title,url:e.link_url,img:e.link_img}))})),l=function(){var e=Object(a.useState)({width:void 0,height:void 0}),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{title:"Link library"}),r.a.createElement("div",{className:t.root},r.a.createElement(N.a,{monitorImagesLoaded:!0,columnWidth:l.width<321?"100%":l.width<426?"50%":l.width<769?"33.3333333%":l.width<1025?"25%":"20%"},n)),r.a.createElement(me,{mode:"link"}))},fe=n(623),ge=n(563),pe=n(628),be=n(630),Ee=n(629),ve=n(635);var he=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{title:"Favorites"}))};var ke=function(e){var t=function(e){var t=Object(a.useState)([]),n=Object(c.a)(t,2),r=n[0],l=n[1];return console.log("useDetails: ",e),Object(a.useEffect)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;K.firestore().collection("links").where("folder_id","==",t).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(z.a)({link_id:e.id},e.data())}));l(t)}))}),[]),console.log("useDetails: ",r),r}(e.id);console.log("Folder: ",t);var n=t.map((function(e){return r.a.createElement(B.a,{item:!0,key:e.link_id},r.a.createElement(Y,{contentId:e.link_id,title:e.link_title,url:e.link_url,img:e.link_img}))})),l=function(){var e=Object(a.useState)({width:void 0,height:void 0}),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{monitorImagesLoaded:!0,columnWidth:l.width<321?"100%":l.width<426?"50%":l.width<769?"33.3333333%":l.width<1025?"25%":"20%"},n))},we=n(53),je=Object(o.a)((function(e){return{root:{flexGrow:1,width:"calc(100vw - ".concat(e.spacing(2),"px)"),marginLeft:e.spacing(1),marginRight:e.spacing(1),marginTop:e.spacing(9),marginBottom:e.spacing(16)},demo:{backgroundColor:e.palette.background.paper},title:{margin:e.spacing(4,0,2)},folderDefault:{position:"relative",top:"100%",background:"red",transition:"transform 0.3s ease-in"},folderHidden:{transform:"translate3d(-100%,0,0)"},folderShown:{transform:"translate3d(0,0,0)"},link:{textDecoration:"none"}}}));function Oe(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],r=t[1],l=je(),i=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=K.firestore().collection("collections").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(z.a)({folder_id:e.id},e.data())}));r(t)}));return function(){return e()}}),[]),n}(),o=Object(k.g)(),u=(o.path,o.url,i.map((function(e){return a.createElement(B.a,{item:!0},a.createElement(we.b,{className:l.link,to:"/link-library/collection/folder",key:e.folder_id},a.createElement(ge.a,{button:!0,onClick:function(t){return r(e.folder_id)}},a.createElement(pe.a,null,a.createElement(ve.a,null,a.createElement(f.a,null))),a.createElement(Ee.a,{primary:e.folder_name,secondary:e.folder_desc}),a.createElement(be.a,null,a.createElement(U.a,{edge:"end","aria-label":"edit"},a.createElement(J.a,null)),a.createElement(U.a,{edge:"end","aria-label":"delete",onClick:function(t){return n=e.folder_id,void K.firestore().collection("collections").doc(n).delete().then((function(){return console.log("Success")})).catch((function(e){return console.error("Error removing document: ",e)}));var n}},a.createElement(A.a,null))))))})));return a.createElement(a.Fragment,null,a.createElement(we.a,null,a.createElement(I,{title:"Collection"}),a.createElement("div",{className:l.root},a.createElement(k.c,null,a.createElement(k.a,{exact:!0,path:"/link-library/collection",render:function(){return a.createElement(fe.a,{className:l.demo},a.createElement(N.a,{columnWidth:"100%"},u))}}),a.createElement(k.a,{path:"/link-library/collection/folder"},a.createElement(ke,{id:n}))))),a.createElement(me,{mode:"collection"}))}var ye=Object(o.a)((function(e){return{root:{flexGrow:1,width:"calc(100vw - ".concat(e.spacing(2),"px)"),marginLeft:e.spacing(1),marginRight:e.spacing(1),marginTop:e.spacing(9),marginBottom:e.spacing(16)}}}));var xe=function(){ye();var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(we.a,null,r.a.createElement(u.a,null),r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/link-library"},r.a.createElement(de,null)),r.a.createElement(k.a,{path:"/link-library/favorites"},r.a.createElement(he,null)),r.a.createElement(k.a,{path:"/link-library/collection"},r.a.createElement(Oe,null)),r.a.createElement(k.a,{path:"/link-library/settings"},r.a.createElement(he,null))),r.a.createElement(j,{value:n,onChange:l})))};i.a.render(r.a.createElement(xe,null),document.getElementById("root"))}},[[267,1,2]]]);
//# sourceMappingURL=main.0aabe87a.chunk.js.map