(this.webpackJsonpdecon_admin=this.webpackJsonpdecon_admin||[]).push([[39],{1021:function(e,a,t){"use strict";var n=t(1),r=t(4),o=t(0),l=(t(2),t(3)),c=t(292),i=t(171),m=Object(i.a)(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),s=Object(i.a)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),d=t(22),u=Object(i.a)(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=t(7),h=t(6),b=o.createElement(s,null),f=o.createElement(m,null),v=o.createElement(u,null),E=o.forwardRef((function(e,a){var t=e.checkedIcon,i=void 0===t?b:t,m=e.classes,s=e.color,d=void 0===s?"secondary":s,u=e.icon,h=void 0===u?f:u,E=e.indeterminate,y=void 0!==E&&E,g=e.indeterminateIcon,k=void 0===g?v:g,x=e.inputProps,O=e.size,j=void 0===O?"medium":O,S=Object(r.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]);return o.createElement(c.a,Object(n.a)({type:"checkbox",classes:{root:Object(l.a)(m.root,m["color".concat(Object(p.a)(d))],y&&m.indeterminate),checked:m.checked,disabled:m.disabled},color:d,inputProps:Object(n.a)({"data-indeterminate":y},x),icon:o.cloneElement(y?k:h,{fontSize:"small"===j?"small":"default"}),checkedIcon:o.cloneElement(y?k:i,{fontSize:"small"===j?"small":"default"}),ref:a},S))}));a.a=Object(h.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(E)},1502:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(29),l=t(40),c=t(465),i=t(913),m=t(916),s=t(888),d=t(960),u=t(1024),p=t(118),h=t(891),b=t(887),f=t(289),v=t(111),E=t(44),y=t.n(E),g=t(76),k=t(31),x=t(43),O=t(3),j=t(951),S=t(952),_=t(905),B=t(1021),C=t(868),w=t(62),z=Object(c.a)((function(){return{root:{}}}));function I(e){var a=e.className,t=e.onSubmitSuccess,n=Object(k.a)(e,["className","onSubmitSuccess"]),o=z(),l=Object(x.c)();return r.a.createElement(S.a,{initialValues:{first_name:"",last_name:"",email:"",password:"",policy:!1},validationSchema:j.c().shape({first_name:j.e().max(255).required("First name is required"),last_name:j.e().max(255).required("Last name is required"),email:j.e().email("Must be a valid email").max(255).required("Email is required"),password:j.e().min(7).max(255).required("Password is required"),policy:j.b().oneOf([!0],"This field must be checked")}),onSubmit:function(){var e=Object(g.a)(y.a.mark((function e(a,n){var r,o,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setErrors,o=n.setStatus,c=n.setSubmitting,e.prev=1,e.next=4,l(Object(w.j)(a));case 4:t(),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(1),o({success:!1}),r({submit:e.t0.data}),c(!1);case 12:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var t=e.errors,l=e.handleBlur,c=e.handleChange,i=e.handleSubmit,d=e.isSubmitting,u=e.touched,h=e.values;return r.a.createElement("form",Object.assign({className:Object(O.a)(o.root,a),onSubmit:i},n),r.a.createElement(_.a,{error:Boolean(u.first_name&&t.first_name),fullWidth:!0,helperText:u.first_name&&t.first_name,label:"First Name",margin:"normal",name:"first_name",onBlur:l,onChange:c,type:"first_name",value:h.first_name,variant:"outlined"}),r.a.createElement(_.a,{error:Boolean(u.last_name&&t.last_name),fullWidth:!0,helperText:u.last_name&&t.last_name,label:"Last Name",margin:"normal",name:"last_name",onBlur:l,onChange:c,type:"last_name",value:h.last_name,variant:"outlined"}),r.a.createElement(_.a,{error:Boolean(u.email&&t.email),fullWidth:!0,helperText:u.email&&t.email,label:"Email Address",margin:"normal",name:"email",onBlur:l,onChange:c,type:"email",value:h.email,variant:"outlined"}),r.a.createElement(_.a,{error:Boolean(u.password&&t.password),fullWidth:!0,helperText:u.password&&t.password,label:"Password",margin:"normal",name:"password",onBlur:l,onChange:c,type:"password",value:h.password,variant:"outlined"}),r.a.createElement(m.a,{alignItems:"center",display:"flex",mt:2,ml:-1},r.a.createElement(B.a,{checked:h.policy,name:"policy",onChange:c}),r.a.createElement(p.a,{variant:"body2",color:"textSecondary"},"I have read the"," ",r.a.createElement(b.a,{component:"a",href:"#",color:"secondary"},"Terms and Conditions"))),Boolean(u.policy&&t.policy)&&r.a.createElement(C.a,{error:!0},t.policy),r.a.createElement(m.a,{mt:2},r.a.createElement(s.a,{color:"secondary",disabled:d,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Create account")))}))}I.default={onSubmitSuccess:function(){}};var q=I,H=Object(c.a)((function(e){return{root:{justifyContent:"center",backgroundColor:e.palette.background.dark,display:"flex",height:"100%",minHeight:"100%",flexDirection:"column",paddingBottom:80,paddingTop:80}}}));a.default=function(){var e=H(),a=Object(l.g)();return r.a.createElement(f.a,{className:e.root,title:"Register"},r.a.createElement(i.a,{maxWidth:"sm"},r.a.createElement(m.a,{mb:5,display:"flex",alignItems:"center"},r.a.createElement(o.a,{to:"/"},r.a.createElement(v.a,null)),r.a.createElement(s.a,{component:o.a,to:"/",className:e.backButton},"Back to home")),r.a.createElement(d.a,null,r.a.createElement(u.a,null,r.a.createElement(p.a,{gutterBottom:!0,variant:"h2",color:"textPrimary"},"Sign up"),r.a.createElement(p.a,{variant:"subtitle1"},"Sign up on the internal platform"),r.a.createElement(m.a,{mt:3},r.a.createElement(q,{onSubmitSuccess:function(){a.push("/app/dashboard")}})),r.a.createElement(m.a,{my:2},r.a.createElement(h.a,null)),r.a.createElement(b.a,{component:o.a,to:"/login",variant:"body2",color:"textSecondary"},"Have an account?")))))}}}]);
//# sourceMappingURL=39.1bbfaabb.chunk.js.map