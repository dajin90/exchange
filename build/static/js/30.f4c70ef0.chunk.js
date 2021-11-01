(this.webpackJsonpdecon_admin=this.webpackJsonpdecon_admin||[]).push([[30],{1489:function(e,a,t){"use strict";t.r(a);var r=t(27),n=t(0),l=t.n(n),i=t(465),o=t(913),c=t(916),s=t(8),m=t(289),u=t(930),d=t(11),f=t(12),p=t(44),h=t.n(p),b=t(76),v=t(31),E=t(3),g=t(951),x=t(952),y=t(121),j=t(888),O=t(960),k=t(1024),_=t(914),C=t(905),B=t(118),N=t(910),S=Object(i.a)((function(){return{root:{}}}));var w=function(e){var a=e.className,t=e.worker,r=Object(v.a)(e,["className","worker"]),n=S(),i=Object(y.useSnackbar)().enqueueSnackbar;return l.a.createElement(x.a,{initialValues:{address:t.address||"",email:t.email||"",first_name:t.first_name||"",last_name:t.last_name||"",phone:t.phone||"",state:t.state||"",city:t.city||"",verified:t.verified||!1},validationSchema:g.c().shape({address:g.e().max(255),email:g.e().email("Must be a valid email").max(255).required("Email is required"),first_name:g.e().max(255).required("First Name is required"),last_name:g.e().max(255).required("Last Name is required"),phone:g.e().max(15),state:g.e().max(255),city:g.e().max(255),verified:g.a()}),onSubmit:function(){var e=Object(b.a)(h.a.mark((function e(a,r){var n,o,c,m,u,p,b,v,E,g,x;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.resetForm,n=r.setErrors,o=r.setStatus,c=r.setSubmitting,m=a.first_name,u=a.last_name,p=a.email,b=a.phone,v=a.state,E=a.city,g=a.address,x=a.verified,s.a.put("".concat(d.a,"/").concat(f.i.UPDATE,"/").concat(t._id),{first_name:m,last_name:u,email:p,phone:b,state:v,city:E,address:g,verified:x}).then((function(){o({success:!0}),c(!1),i("Customer updated",{variant:"success",action:l.a.createElement(j.a,null,"Customer updated")})})).catch((function(e){o({success:!1}),n({submit:e.message}),c(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var t=e.errors,i=e.handleBlur,o=e.handleChange,s=e.handleSubmit,m=e.isSubmitting,u=e.touched,d=e.values;return l.a.createElement("form",Object.assign({className:Object(E.a)(n.root,a),onSubmit:s},r),l.a.createElement(O.a,null,l.a.createElement(k.a,null,l.a.createElement(_.a,{container:!0,spacing:3},l.a.createElement(_.a,{item:!0,md:6,xs:12},l.a.createElement(C.a,{error:Boolean(u.email&&t.email),fullWidth:!0,helperText:u.email&&t.email,label:"Email address",name:"email",onBlur:i,onChange:o,required:!0,value:d.email,variant:"outlined"})),l.a.createElement(_.a,{item:!0,md:3,xs:6},l.a.createElement(C.a,{error:Boolean(u.first_name&&t.first_name),fullWidth:!0,helperText:u.first_name&&t.first_name,label:"First name",name:"first_name",onBlur:i,onChange:o,required:!0,value:d.first_name,variant:"outlined"})),l.a.createElement(_.a,{item:!0,md:3,xs:6},l.a.createElement(C.a,{error:Boolean(u.last_name&&t.last_name),fullWidth:!0,helperText:u.last_name&&t.last_name,label:"Last name",name:"last_name",onBlur:i,onChange:o,required:!0,value:d.last_name,variant:"outlined"})),l.a.createElement(_.a,{item:!0,md:6,xs:12},l.a.createElement(C.a,{error:Boolean(u.phone&&t.phone),fullWidth:!0,helperText:u.phone&&t.phone,label:"Phone",name:"phone",onBlur:i,onChange:o,value:d.phone,variant:"outlined"})),l.a.createElement(_.a,{item:!0,md:6,xs:12},l.a.createElement(C.a,{error:Boolean(u.state&&t.state),fullWidth:!0,helperText:u.state&&t.state,label:"State/Region",name:"state",onBlur:i,onChange:o,value:d.state,variant:"outlined"})),l.a.createElement(_.a,{item:!0,md:6,xs:12},l.a.createElement(C.a,{error:Boolean(u.city&&t.city),fullWidth:!0,helperText:u.city&&t.city,label:"City",name:"city",onBlur:i,onChange:o,value:d.city,variant:"outlined"})),l.a.createElement(_.a,{item:!0,md:6,xs:12},l.a.createElement(C.a,{error:Boolean(u.address&&t.address),fullWidth:!0,helperText:u.address&&t.address,label:"Address",name:"address",onBlur:i,onChange:o,value:d.address,variant:"outlined"})),l.a.createElement(_.a,{item:!0}),l.a.createElement(_.a,{item:!0,md:6,xs:12},l.a.createElement(B.a,{variant:"h5",color:"textPrimary"},"Email Verified"),l.a.createElement(B.a,{variant:"body2",color:"textSecondary"},"Disabling this will automatically send the user a verification email"),l.a.createElement(N.a,{checked:d.verified,color:"secondary",edge:"start",name:"verified",onChange:o,value:d.verified}))),l.a.createElement(c.a,{mt:2},l.a.createElement(j.a,{variant:"contained",color:"secondary",type:"submit",disabled:m},"Update Worker")))))}))},W=t(29),T=t(936),q=t(887),P=t(928),R=t.n(P),z=Object(i.a)((function(){return{root:{}}}));var L=function(e){var a=e.className,t=Object(v.a)(e,["className"]),r=z();return l.a.createElement("div",Object.assign({className:Object(E.a)(r.root,a)},t),l.a.createElement(T.a,{separator:l.a.createElement(R.a,{fontSize:"small"}),"aria-label":"breadcrumb"},l.a.createElement(q.a,{variant:"body1",color:"inherit",to:"/app",component:W.a},"Dashboard"),l.a.createElement(q.a,{variant:"body1",color:"inherit",to:"/app/workers",component:W.a},"Workers"),l.a.createElement(B.a,{variant:"body1",color:"textPrimary"},"Edit")),l.a.createElement(B.a,{variant:"h3",color:"textPrimary"},"Edit Worker"))},M=Object(i.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(e){var a=M(),t=Object(u.a)(),i=Object(n.useState)(),p=Object(r.a)(i,2),h=p[0],b=p[1],v=e.match.params.workerId,E=Object(n.useCallback)((function(){s.a.get("".concat(d.a,"/").concat(f.i.GET,"/").concat(v)).then((function(e){t.current&&b(e.data.worker)}))}),[t]);return Object(n.useEffect)((function(){E()}),[E]),h?l.a.createElement(m.a,{className:a.root,title:"Worker Edit"},l.a.createElement(o.a,{maxWidth:"lg"},l.a.createElement(L,null),l.a.createElement(c.a,{mt:3},l.a.createElement(w,{worker:h})))):null}},928:function(e,a,t){"use strict";var r=t(85);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(0)),l=(0,r(t(92)).default)(n.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");a.default=l},930:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var r=t(0);function n(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},936:function(e,a,t){"use strict";var r=t(1),n=t(65),l=t(4),i=t(0),o=(t(93),t(2),t(3)),c=t(6),s=t(118),m=t(22),u=t(171),d=Object(u.a)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),f=t(288);var p=Object(c.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(m.c)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var a=e.classes,t=Object(l.a)(e,["classes"]);return i.createElement(f.a,Object(r.a)({component:"li",className:a.root,focusRipple:!0},t),i.createElement(d,{className:a.icon}))}));var h=i.forwardRef((function(e,a){var t=e.children,c=e.classes,m=e.className,u=e.component,d=void 0===u?"nav":u,f=e.expandText,h=void 0===f?"Show path":f,b=e.itemsAfterCollapse,v=void 0===b?1:b,E=e.itemsBeforeCollapse,g=void 0===E?1:E,x=e.maxItems,y=void 0===x?8:x,j=e.separator,O=void 0===j?"/":j,k=Object(l.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),_=i.useState(!1),C=_[0],B=_[1],N=i.Children.toArray(t).filter((function(e){return i.isValidElement(e)})).map((function(e,a){return i.createElement("li",{className:c.li,key:"child-".concat(a)},e)}));return i.createElement(s.a,Object(r.a)({ref:a,component:d,color:"textSecondary",className:Object(o.a)(c.root,m)},k),i.createElement("ol",{className:c.ol},function(e,a,t){return e.reduce((function(r,n,l){return l<e.length-1?r=r.concat(n,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(l),className:a},t)):r.push(n),r}),[])}(C||y&&N.length<=y?N:function(e){return g+v>=e.length?e:[].concat(Object(n.a)(e.slice(0,g)),[i.createElement(p,{"aria-label":h,key:"ellipsis",onClick:function(){B(!0)}})],Object(n.a)(e.slice(e.length-v,e.length)))}(N),c.separator,O)))}));a.a=Object(c.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(h)}}]);
//# sourceMappingURL=30.f4c70ef0.chunk.js.map