(this.webpackJsonpdecon_admin=this.webpackJsonpdecon_admin||[]).push([[27],{1155:function(e,a,t){"use strict";var n=t(85);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),c=(0,n(t(92)).default)(l.default.createElement("path",{d:"M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5zM19 19.09H5V4.91h14v14.18zM6 15h12v2H6zm0-4h12v2H6zm0-4h12v2H6z"}),"ReceiptOutlined");a.default=c},1232:function(e,a,t){"use strict";var n=t(1),l=t(4),c=t(0),r=(t(2),t(3)),o=t(6),i=c.forwardRef((function(e,a){var t=e.disableSpacing,o=void 0!==t&&t,i=e.classes,s=e.className,m=Object(l.a)(e,["disableSpacing","classes","className"]);return c.createElement("div",Object(n.a)({className:Object(r.a)(i.root,s,!o&&i.spacing),ref:a},m))}));a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(i)},1484:function(e,a,t){"use strict";t.r(a);var n=t(27),l=t(0),c=t.n(l),r=t(43),o=t(8),i=t(11),s=t(12),m=t(465),u=t(913),d=t(916),p=t(914),E=t(289),b=t(31),f=t(29),g=t(3),v=(t(936),t(887)),h=(t(118),t(888));t(215),t(993),t(928),Object(m.a)((function(e){return{root:{},actionIcon:{marginRight:e.spacing(1)}}}));var j=t(145),O=t.n(j),y=t(960),N=t(989),k=t(891),w=t(1027),C=t(1031),x=t(1029),L=t(1030),P=t(1232),_=t(1155),T=t.n(_),M=Object(m.a)((function(e){return{root:{marginTop:e.spacing(2)},actionIcon:{marginRight:e.spacing(1)}}})),z=["Canceled","Completed","Rejected"];var R=function(e){var a=e.customer,t=e.className,r=Object(b.a)(e,["customer","className"]),o=M(),i=Object(l.useState)(z[0]),s=Object(n.a)(i,2);return s[0],s[1],a?c.a.createElement(y.a,Object.assign({className:Object(g.a)(o.root,t)},r),c.a.createElement(N.a,{title:"Customer info"}),c.a.createElement(k.a,null),c.a.createElement(w.a,null,c.a.createElement(C.a,null,c.a.createElement(x.a,null,c.a.createElement(L.a,null,"Customer"),c.a.createElement(L.a,null,c.a.createElement(v.a,{component:f.a,to:"/app/customers/".concat(a._id,"/edit")},"".concat(a.first_name," ").concat(a.last_name)))),c.a.createElement(x.a,null,c.a.createElement(L.a,null,"State"),c.a.createElement(L.a,null,c.a.createElement("div",null,a.state))),c.a.createElement(x.a,null,c.a.createElement(L.a,null,"City"),c.a.createElement(L.a,null,a.city)),c.a.createElement(x.a,null,c.a.createElement(L.a,null,"Address"),c.a.createElement(L.a,null,a.address)))),c.a.createElement(P.a,null,c.a.createElement(h.a,null,c.a.createElement(T.a,{className:o.actionIcon}),"Edit"))):null},S=t(174),H=t.n(S),I=t(1028),D=t(1503),Y=Object(m.a)((function(){return{root:{}}}));var J=function(e){var a=e.check_list,t=e.className,n=Object(b.a)(e,["check_list","className"]),l=Y();return a?c.a.createElement(y.a,Object.assign({className:Object(g.a)(l.root,t)},n),c.a.createElement(N.a,{title:"Check List"}),c.a.createElement(k.a,null),c.a.createElement(H.a,null,c.a.createElement(d.a,{minWidth:700},c.a.createElement(w.a,null,c.a.createElement(I.a,null,c.a.createElement(x.a,null,c.a.createElement(L.a,null,"Description"))),c.a.createElement(C.a,null,a&&a.map((function(e){return c.a.createElement(x.a,{key:e._id},c.a.createElement(L.a,null,e.description),c.a.createElement(L.a,null,e.currency))})))))),c.a.createElement(D.a,{component:"div",count:a.length,onChangePage:function(){},onChangeRowsPerPage:function(){},page:0,rowsPerPage:5,rowsPerPageOptions:[5,10,25]})):null},W=t(40),A=Object(m.a)((function(e){return{root:{},actionIcon:{marginRight:e.spacing(1)}}})),B=["Canceled","Completed","Rejected"];var V=function(e){var a=e.job,t=e.className,r=Object(b.a)(e,["job","className"]),o=A(),i=Object(W.g)(),s=Object(l.useState)(B[0]),m=Object(n.a)(s,2);return m[0],m[1],a?c.a.createElement(y.a,Object.assign({className:Object(g.a)(o.root,t)},r),c.a.createElement(N.a,{title:"Overview"}),c.a.createElement(k.a,null),c.a.createElement(w.a,null,c.a.createElement(C.a,null,c.a.createElement(x.a,null,c.a.createElement(L.a,null,"Title"),c.a.createElement(L.a,null,c.a.createElement("div",null,a.title))),c.a.createElement(x.a,null,c.a.createElement(L.a,null,"Description"),c.a.createElement(L.a,null,c.a.createElement("div",null,a.description))),a.service&&c.a.createElement(x.a,null,c.a.createElement(L.a,null,"Service"),c.a.createElement(L.a,null,c.a.createElement(v.a,{component:f.a,to:"/app/services/".concat(a.service._id)},a.service?a.service.title:""))),c.a.createElement(x.a,null,c.a.createElement(L.a,null,"Location"),c.a.createElement(L.a,null,c.a.createElement("div",null,a.address))),c.a.createElement(x.a,null,c.a.createElement(L.a,null,"Zip Code"),c.a.createElement(L.a,null,c.a.createElement("div",null,a.zip_code))),c.a.createElement(x.a,null,c.a.createElement(L.a,null,"Created Date"),c.a.createElement(L.a,null,O()(a.created_at).format("DD/MM/YYYY HH:MM"))))),c.a.createElement(P.a,null,c.a.createElement(h.a,{onClick:function(){i.push("/app/jobs/".concat(a._id,"/edit"))}},c.a.createElement(T.a,{className:o.actionIcon}),"Edit"))):null},G=Object(m.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(e){var a=G(),t=(Object(r.c)(),e.match.params.jobId),m=Object(l.useState)(null),b=Object(n.a)(m,2),f=b[0],g=b[1];return Object(l.useEffect)((function(){o.a.get("".concat(i.a,"/").concat(s.d.GET,"/").concat(t)).then((function(e){g(e.data.job)}))}),[]),f?c.a.createElement(E.a,{className:a.root,title:"Job Detail"},c.a.createElement(u.a,{maxWidth:!1},c.a.createElement(d.a,{mt:2},c.a.createElement(p.a,{container:!0,spacing:3,mt:2},f.customer&&c.a.createElement(p.a,{item:!0,md:4,xl:3,xs:12},c.a.createElement(V,{job:f}),c.a.createElement(R,{customer:f.customer})),c.a.createElement(p.a,{item:!0,md:8,xl:9,xs:12},c.a.createElement(J,{check_list:f.check_list})))))):null}},989:function(e,a,t){"use strict";var n=t(1),l=t(4),c=t(0),r=(t(2),t(3)),o=t(6),i=t(118),s=c.forwardRef((function(e,a){var t=e.action,o=e.avatar,s=e.classes,m=e.className,u=e.component,d=void 0===u?"div":u,p=e.disableTypography,E=void 0!==p&&p,b=e.subheader,f=e.subheaderTypographyProps,g=e.title,v=e.titleTypographyProps,h=Object(l.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),j=g;null==j||j.type===i.a||E||(j=c.createElement(i.a,Object(n.a)({variant:o?"body2":"h5",className:s.title,component:"span",display:"block"},v),j));var O=b;return null==O||O.type===i.a||E||(O=c.createElement(i.a,Object(n.a)({variant:o?"body2":"body1",className:s.subheader,color:"textSecondary",component:"span",display:"block"},f),O)),c.createElement(d,Object(n.a)({className:Object(r.a)(s.root,m),ref:a},h),o&&c.createElement("div",{className:s.avatar},o),c.createElement("div",{className:s.content},j,O),t&&c.createElement("div",{className:s.action},t))}));a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(s)},993:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(2),r=t.n(c);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=function(e){var a=e.color,t=e.size,n=i(e,["color","size"]);return l.a.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),l.a.createElement("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),l.a.createElement("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))};s.propTypes={color:r.a.string,size:r.a.oneOfType([r.a.string,r.a.number])},s.defaultProps={color:"currentColor",size:"24"},a.a=s}}]);
//# sourceMappingURL=27.fe7c8dfb.chunk.js.map