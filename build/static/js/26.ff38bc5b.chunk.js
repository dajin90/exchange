(this.webpackJsonpdecon_admin=this.webpackJsonpdecon_admin||[]).push([[26],{1477:function(e,a,t){"use strict";t.r(a);var n=t(27),l=t(0),c=t.n(l),r=t(465),o=t(913),i=t(916),m=t(1482),s=t(1469),u=t(891),E=t(289),d=t(8),b=t(930),f=t(11),g=t(12),p=t(31),j=t(29),h=t(3),O=t(914),v=t(936),y=t(887),N=t(118),k=t(888),S=t(215),C=t(993),x=t(928),w=t.n(x),W=Object(r.a)((function(e){return{root:{},actionIcon:{marginRight:e.spacing(1)}}}));var P=function(e){var a=e.className,t=e.worker,n=Object(p.a)(e,["className","worker"]),l=W();return c.a.createElement(O.a,Object.assign({container:!0,spacing:3,justify:"space-between",className:Object(h.a)(l.root,a)},n),c.a.createElement(O.a,{item:!0},c.a.createElement(v.a,{separator:c.a.createElement(w.a,{fontSize:"small"}),"aria-label":"breadcrumb"},c.a.createElement(y.a,{variant:"body1",color:"inherit",to:"/app",component:j.a},"Dashboard"),c.a.createElement(y.a,{variant:"body1",color:"inherit",to:"/app/workers",component:j.a},"Workers"),c.a.createElement(N.a,{variant:"body1",color:"textPrimary"},"Detail")),c.a.createElement(N.a,{variant:"h3",color:"textPrimary"},"".concat(t.first_name," ").concat(t.last_name))),c.a.createElement(O.a,{item:!0},c.a.createElement(k.a,{color:"secondary",variant:"contained",component:j.a,to:"/app/workers/".concat(t._id,"/edit")},c.a.createElement(S.a,{fontSize:"small",className:l.actionIcon},c.a.createElement(C.a,null)),"Edit")))},M=t(960),I=t(989),J=t(1027),R=t(1031),D=t(1029),_=t(1030),A=t(1236),Y=t.n(A),T=t(121),F=t(956),L=Object(r.a)((function(e){return{root:{},fontWeightMedium:{fontWeight:e.typography.fontWeightMedium},actionIcon:{marginRight:e.spacing(1)}}}));var z=function(e){var a=e.customer,t=e.className,n=Object(p.a)(e,["customer","className"]),l=L(),r=Object(T.useSnackbar)().enqueueSnackbar;return c.a.createElement(M.a,Object.assign({className:Object(h.a)(l.root,t)},n),c.a.createElement(I.a,{title:"Worker info"}),c.a.createElement(u.a,null),c.a.createElement(J.a,null,c.a.createElement(R.a,null,c.a.createElement(D.a,null,c.a.createElement(_.a,{className:l.fontWeightMedium},"Email"),c.a.createElement(_.a,null,c.a.createElement(N.a,{variant:"body2",color:"textSecondary"},a.email),c.a.createElement(F.a,{color:a.verified?"success":"error"},a.verified?"Email verified":"Email not verified"))),c.a.createElement(D.a,null,c.a.createElement(_.a,{className:l.fontWeightMedium},"Phone"),c.a.createElement(_.a,null,c.a.createElement(N.a,{variant:"body2",color:"textSecondary"},a.phone))),c.a.createElement(D.a,null,c.a.createElement(_.a,{className:l.fontWeightMedium},"State/Region"),c.a.createElement(_.a,null,c.a.createElement(N.a,{variant:"body2",color:"textSecondary"},a.state))),c.a.createElement(D.a,null,c.a.createElement(_.a,{className:l.fontWeightMedium},"City"),c.a.createElement(_.a,null,c.a.createElement(N.a,{variant:"body2",color:"textSecondary"},a.city))),c.a.createElement(D.a,null,c.a.createElement(_.a,{className:l.fontWeightMedium},"Address"),c.a.createElement(_.a,null,c.a.createElement(N.a,{variant:"body2",color:"textSecondary"},a.address))))),c.a.createElement(i.a,{p:1,display:"flex",flexDirection:"column",alignItems:"flex-start"},c.a.createElement(k.a,{onClick:function(){d.a.get("".concat(f.a,"/").concat(g.i.RESET_PASSWORD,"/").concat(a._id)).then((function(){r("Reset password",{variant:"success",action:c.a.createElement(k.a,null,"Success")})}))}},c.a.createElement(Y.a,{className:l.actionIcon}),"Reset & Send Password")))},B=t(145),H=t.n(B),q=t(1024);t(905),t(1237),Object(r.a)((function(e){return{root:{},actionIcon:{marginRight:e.spacing(1)},cell:{padding:e.spacing(1)}}}));var G=t(43),U=t(1150),K=t(165),Q=t(958),V=t(174),X=t.n(V),Z=t(17),$=t(28),ee=t(856),ae=t(1028),te=t(921),ne=t(1503),le=t(994),ce=t(975),re=t(995),oe=t(976),ie=t(942);var me=Object(r.a)((function(e){return{root:{},queryField:{width:500},statusField:{flexBasis:200},bulkOperations:{position:"relative"},bulkActions:{paddingLeft:4,paddingRight:4,marginTop:6,position:"absolute",width:"100%",zIndex:2,backgroundColor:e.palette.background.default},bulkAction:{marginLeft:e.spacing(2)},avatar:{backgroundColor:Z.a.red[500],color:Z.a.common.white}}}));function se(e){var a=e.className,t=e.jobs,r=e.customer,o=Object(p.a)(e,["className","jobs","customer"]),m=me(),s=Object(G.c)(),u=Object(l.useState)(0),E=Object(n.a)(u,2),d=E[0],b=E[1],f=Object(l.useState)(10),g=Object(n.a)(f,2),j=g[0],O=g[1],v=Object(l.useState)(!1),y=Object(n.a)(v,2),S=y[0],C=y[1],x=Object(l.useState)(null),w=Object(n.a)(x,2),W=w[0],P=w[1],I=Object($.a)(),A=Object(ee.a)(I.breakpoints.down("sm")),Y=function(e,a,t){return e.slice(a*t,a*t+t)}(t,d,j),T=function(){C(!1)};return c.a.createElement(M.a,Object.assign({className:Object(h.a)(m.root,a)},o),c.a.createElement(X.a,null,c.a.createElement(i.a,null,c.a.createElement(J.a,null,c.a.createElement(ae.a,null,c.a.createElement(D.a,null,c.a.createElement(_.a,null,"Name"),c.a.createElement(_.a,null,"Customer"),c.a.createElement(_.a,null,"Service"),c.a.createElement(_.a,null,"Sprint"),c.a.createElement(_.a,null,"Created at"))),c.a.createElement(R.a,null,Y.map((function(e){return c.a.createElement(D.a,{hover:!0,key:e._id},c.a.createElement(_.a,null,c.a.createElement(i.a,{display:"flex",alignItems:"center"},c.a.createElement(te.a,{className:m.avatar},Object(ie.a)("".concat(e.title))),c.a.createElement(i.a,{ml:2},c.a.createElement(N.a,{variant:"subtitle2",color:"textPrimary",underline:"none",onClick:function(){P(e._id),C(!0)}},"".concat(e.title))))),c.a.createElement(_.a,null,e.customer?"".concat(e.customer.first_name," ").concat(e.customer.last_name):""),c.a.createElement(_.a,null,e.service?e.service.title:"No Assigned"),c.a.createElement(_.a,null,e.sprint?e.sprint.title:"No Sprint"),c.a.createElement(_.a,null,H()(e.created_at).format("DD MMM YYYY")))})))))),c.a.createElement(ne.a,{component:"div",count:t.length,onChangePage:function(e,a){b(a)},onChangeRowsPerPage:function(e){O(e.target.value)},page:d,rowsPerPage:j,rowsPerPageOptions:[5,10,25]}),c.a.createElement(Q.a,{fullScreen:A,open:S,onClose:T,"aria-labelledby":"responsive-dialog-title"},c.a.createElement(le.a,{id:"responsive-dialog-title"},"Remove"),c.a.createElement(ce.a,null,c.a.createElement(re.a,null,"Are you going to assign this job to this worker?")),c.a.createElement(oe.a,null,c.a.createElement(k.a,{autoFocus:!0,onClick:function(){s(Object(K.e)(W,r)),C(!1)},color:"primary"},"Yes"),c.a.createElement(k.a,{onClick:T,color:"primary",autoFocus:!0},"No"))))}se.defaultProps={jobs:[]};var ue=se,Ee=Object(r.a)((function(e){return{root:{minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:100}}}));var de=function(e){var a=e.className,t=e.open,n=e.jobs,l=e.customer,r=e.onClose,o=Ee();return n?c.a.createElement(Q.a,{className:Object(h.a)(o.root,a),onClose:r,open:t,maxWidth:"md",fullWidth:!0},n&&c.a.createElement(i.a,{mt:3},c.a.createElement(ue,{jobs:n,customer:l}))):null},be=Object(r.a)((function(e){return{root:{},fontWeightMedium:{fontWeight:e.typography.fontWeightMedium},buttonIcon:{marginRight:e.spacing(1)}}}));var fe=function(e){var a=e.customer,t=e.finishedJob,r=e.activeJob,o=e.className,m=Object(p.a)(e,["customer","finishedJob","activeJob","className"]),s=be(),E=Object(G.c)(),d=Object(l.useState)(!1),b=Object(n.a)(d,2),f=b[0],g=b[1],j=Object(G.d)((function(e){return e.worker})).availableJobs;return Object(l.useEffect)((function(){E(Object(K.f)(a))}),[]),c.a.createElement(M.a,Object.assign({className:Object(h.a)(s.root,o)},m),c.a.createElement(I.a,{title:"Jobs Info"}),c.a.createElement(u.a,null),c.a.createElement(J.a,null,c.a.createElement(R.a,null,c.a.createElement(D.a,null,c.a.createElement(_.a,{className:s.fontWeightMedium},"Finished"),c.a.createElement(_.a,null,c.a.createElement(N.a,{variant:"body2",color:"textSecondary"},t))),c.a.createElement(D.a,null,c.a.createElement(_.a,{className:s.fontWeightMedium},"Active"),c.a.createElement(_.a,null,c.a.createElement(N.a,{variant:"body2",color:"textSecondary"},r))),c.a.createElement(D.a,null,c.a.createElement(_.a,{className:s.fontWeightMedium},"Last Active Job"),c.a.createElement(_.a,null,c.a.createElement(N.a,{variant:"body2",color:"textSecondary"},"Test job"))),c.a.createElement(D.a,null,c.a.createElement(_.a,{className:s.fontWeightMedium},"Last Activity"),c.a.createElement(_.a,null,c.a.createElement(N.a,{variant:"body2",color:"textSecondary"},"Added Room"))),c.a.createElement(D.a,null,c.a.createElement(_.a,{className:s.fontWeightMedium},"Last Active Date"),c.a.createElement(_.a,null,c.a.createElement(N.a,{variant:"body2",color:"textSecondary"},"0"))))),c.a.createElement(i.a,{p:1,display:"flex",flexDirection:"column",alignItems:"flex-start"},c.a.createElement(k.a,{onClick:function(){g(!0)}},c.a.createElement(U.a,{className:s.buttonIcon}),"Assign New Job")),c.a.createElement(de,{open:f,onClose:function(){g(!1)},jobs:j,customer:a}))},ge=t(40),pe=t(1238),je=t.n(pe),he=t(1239),Oe=t.n(he),ve=Object(r.a)((function(e){return{root:{},deleteAction:{color:e.palette.common.white,backgroundColor:e.palette.error.main,"&:hover":{backgroundColor:e.palette.error.dark}},actionIcon:{marginRight:e.spacing(1)}}}));var ye=function(e){var a=e.className,t=e.customerId,n=Object(p.a)(e,["className","customerId"]),l=ve(),r=Object(ge.g)(),o=Object(T.useSnackbar)().enqueueSnackbar;return c.a.createElement(M.a,Object.assign({className:Object(h.a)(l.root,a)},n),c.a.createElement(I.a,{title:"Other actions"}),c.a.createElement(u.a,null),c.a.createElement(q.a,null,c.a.createElement(i.a,{display:"flex",flexDirection:"column",alignItems:"flex-start"},c.a.createElement(k.a,null,c.a.createElement(je.a,{className:l.actionIcon}),"Disable Login")),c.a.createElement(i.a,{mt:1,mb:2},c.a.createElement(N.a,{variant:"body2",color:"textSecondary"},"Remove this worker\u2019s data if you don`t need him anymore, if not please be aware that what has been deleted can never brough back")),c.a.createElement(k.a,{className:l.deleteAction,onClick:function(){d.a.delete("".concat(f.a,"/").concat(g.i.DELETE,"/").concat(t)).then((function(){o("Worker remove",{variant:"success",action:c.a.createElement(k.a,{onClick:r.push("/app/workers")},"Customer removed")})}))}},c.a.createElement(Oe.a,{className:l.actionIcon}),"Delete Worker")))},Ne=Object(r.a)((function(){return{root:{}}}));var ke=function(e){var a=e.customer,t=e.finishedJob,n=e.activeJob,l=e.className,r=Object(p.a)(e,["customer","finishedJob","activeJob","className"]),o=Ne();return c.a.createElement(O.a,Object.assign({className:Object(h.a)(o.root,l),container:!0,spacing:3},r),c.a.createElement(O.a,{item:!0,lg:4,md:6,xl:3,xs:12},c.a.createElement(z,{customer:a})),c.a.createElement(O.a,{item:!0,lg:4,md:6,xl:3,xs:12},c.a.createElement(fe,{customer:a._id,finishedJob:t,activeJob:n})),c.a.createElement(O.a,{item:!0,lg:4,md:6,xl:3,xs:12},c.a.createElement(ye,{customerId:a._id})))},Se=t(961),Ce=Object(r.a)((function(){return{root:{}}}));var xe=function(e){var a=e.className,t=e.jobs,n=Object(p.a)(e,["className","jobs"]),l=Ce();return t?c.a.createElement("div",Object.assign({className:Object(h.a)(l.root,a)},n),c.a.createElement(M.a,null,c.a.createElement(I.a,{action:c.a.createElement(Se.a,null),title:"Jobs List"}),c.a.createElement(u.a,null),c.a.createElement(X.a,null,c.a.createElement(i.a,{minWidth:1150},c.a.createElement(J.a,null,c.a.createElement(ae.a,null,c.a.createElement(D.a,null,c.a.createElement(_.a,null,"Title"),c.a.createElement(_.a,null,"Description"),c.a.createElement(_.a,null,"Service"),c.a.createElement(_.a,null,"Status"),c.a.createElement(_.a,null,"Created at"))),c.a.createElement(R.a,null,t.map((function(e){return c.a.createElement(D.a,{key:e._id},c.a.createElement(_.a,null,e.title),c.a.createElement(_.a,null,e.description),c.a.createElement(_.a,null,e.service?e.service.name:""),c.a.createElement(_.a,null,e.sprint?e.sprint.name:""),c.a.createElement(_.a,null,H()(e.created_at).format("DD/MM/YYYY | HH:MM")))})))))),c.a.createElement(ne.a,{component:"div",count:t.length,onChangePage:function(){},onChangeRowsPerPage:function(){},page:0,rowsPerPage:5,rowsPerPageOptions:[5,10,25]}))):null},we=Object(r.a)((function(){return{root:{},methodCell:{width:100},statusCell:{width:64}}}));var We=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=we(),o=Object(b.a)(),m=Object(l.useState)(null),s=Object(n.a)(m,2),E=s[0],f=s[1],g=Object(l.useCallback)((function(){d.a.get("/api/management/customers/1/logs").then((function(e){o.current&&f(e.data.logs)}))}),[o]);return Object(l.useEffect)((function(){g()}),[g]),E?c.a.createElement("div",Object.assign({className:Object(h.a)(r.root,a)},t),c.a.createElement(M.a,null,c.a.createElement(I.a,{title:"Customer logs"}),c.a.createElement(u.a,null),c.a.createElement(X.a,null,c.a.createElement(i.a,{minWidth:1150},c.a.createElement(J.a,null,c.a.createElement(R.a,null,E.map((function(e){return c.a.createElement(D.a,{key:e.id},c.a.createElement(_.a,{className:r.methodCell},c.a.createElement(N.a,{variant:"h6",color:"textPrimary"},e.method)),c.a.createElement(_.a,{className:r.statusCell},c.a.createElement(F.a,{color:200===e.status?Z.a.green[600]:Z.a.red[600]},e.status)),c.a.createElement(_.a,null,e.route),c.a.createElement(_.a,null,e.desc),c.a.createElement(_.a,{align:"right"},e.IP),c.a.createElement(_.a,{align:"right"},H()(e.createdAt).format("YYYY/MM/DD | hh:mm:ss")))})))))))):null},Pe=Object(r.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(e){var a=Pe(),t=Object(b.a)(),r=Object(l.useState)(null),p=Object(n.a)(r,2),j=p[0],h=p[1],O=Object(l.useState)(null),v=Object(n.a)(O,2),y=v[0],N=v[1],k=Object(l.useState)(0),S=Object(n.a)(k,2),C=S[0],x=S[1],w=Object(l.useState)(0),W=Object(n.a)(w,2),M=W[0],I=W[1],J=Object(l.useState)("details"),R=Object(n.a)(J,2),D=R[0],_=R[1],A=e.match.params.workerId,Y=Object(l.useCallback)((function(){d.a.get("".concat(f.a,"/").concat(g.i.GET,"/").concat(A)).then((function(e){t.current&&(h(e.data.worker),N(e.data.jobs),x(e.data.finished_job),I(e.data.active_job))}))}),[t]);return Object(l.useEffect)((function(){Y()}),[Y]),j?c.a.createElement(E.a,{className:a.root,title:"Worker Details"},c.a.createElement(o.a,{maxWidth:!1},c.a.createElement(P,{worker:j}),c.a.createElement(i.a,{mt:3},c.a.createElement(m.a,{onChange:function(e,a){_(a)},scrollButtons:"auto",value:D,variant:"scrollable",textColor:"secondary",className:a.tabs},[{value:"details",label:"Details"},{value:"jobs",label:"Jobs"}].map((function(e){return c.a.createElement(s.a,{key:e.value,label:e.label,value:e.value})})))),c.a.createElement(u.a,null),c.a.createElement(i.a,{mt:3},"details"===D&&c.a.createElement(ke,{customer:j,finishedJob:C,activeJob:M}),"jobs"===D&&c.a.createElement(xe,{jobs:y}),"logs"===D&&c.a.createElement(We,null)))):null}},930:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0);function l(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},942:function(e,a,t){"use strict";a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},956:function(e,a,t){"use strict";var n=t(66),l=t(31),c=t(0),r=t.n(c),o=t(3),i=t(465),m=t(22),s=Object(i.a)((function(e){return{root:{fontFamily:e.typography.fontFamily,alignItems:"center",borderRadius:2,display:"inline-flex",flexGrow:0,whiteSpace:"nowrap",cursor:"default",flexShrink:0,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightMedium,height:20,justifyContent:"center",letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),textTransform:"uppercase"},primary:{color:e.palette.primary.main,backgroundColor:Object(m.d)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(m.d)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(m.d)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(m.d)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(m.d)(e.palette.warning.main,.08)}}}));function u(e){var a=e.className,t=e.color,c=e.children,i=(e.style,Object(l.a)(e,["className","color","children","style"])),m=s();return r.a.createElement("span",Object.assign({className:Object(o.a)(m.root,Object(n.a)({},m[t],t),a)},i),c)}u.defaultProps={className:"",color:"secondary"},a.a=u},961:function(e,a,t){"use strict";var n=t(27),l=t(0),c=t.n(l),r=t(465),o=t(895),i=t(862),m=t(492),s=t(894),u=t(1075),E=t(898),d=t(990),b=t.n(d),f=t(974),g=t.n(f),p=t(991),j=t.n(p),h=t(962),O=t.n(h),v=t(992),y=t.n(v),N=Object(r.a)((function(){return{menu:{width:256,maxWidth:"100%"}}}));a.a=Object(l.memo)((function(e){var a=N(),t=Object(l.useRef)(null),r=Object(l.useState)(!1),d=Object(n.a)(r,2),f=d[0],p=d[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{title:"More options"},c.a.createElement(i.a,Object.assign({},e,{onClick:function(){p(!0)},ref:t}),c.a.createElement(b.a,{fontSize:"small"}))),c.a.createElement(m.a,{anchorEl:t.current,anchorOrigin:{vertical:"top",horizontal:"left"},onClose:function(){p(!1)},open:f,PaperProps:{className:a.menu},transformOrigin:{vertical:"top",horizontal:"left"}},c.a.createElement(s.a,null,c.a.createElement(u.a,null,c.a.createElement(g.a,null)),c.a.createElement(E.a,{primary:"Import"})),c.a.createElement(s.a,null,c.a.createElement(u.a,null,c.a.createElement(j.a,null)),c.a.createElement(E.a,{primary:"Copy"})),c.a.createElement(s.a,null,c.a.createElement(u.a,null,c.a.createElement(O.a,null)),c.a.createElement(E.a,{primary:"Export"})),c.a.createElement(s.a,null,c.a.createElement(u.a,null,c.a.createElement(y.a,null)),c.a.createElement(E.a,{primary:"Achive"}))))}))}}]);
//# sourceMappingURL=26.ff38bc5b.chunk.js.map