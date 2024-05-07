"use strict";(self.webpackChunkstore_of_stylish_clothes=self.webpackChunkstore_of_stylish_clothes||[]).push([[741],{7741:(e,r,o)=>{o.r(r),o.d(r,{default:()=>I});var n,s,l,a=o(2791),i=o(9434),t=o(4116),c=o(456),d=o(2506),h=o(8711),u=o(1453),m=o(6397),x=o(9982),j=o(8126),p=o(168),v=o(545),g=o(2700),f=o(306);const w=(0,v.ZP)(f.vw)(n||(n=(0,p.Z)([""]))),b=(0,v.ZP)(f.Gq)(s||(s=(0,p.Z)([""]))),y=(0,v.ZP)(g.z)(l||(l=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 125px;\n\n  color: ",";\n  background: ",";\n  font-family: ",";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: normal;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 12px;\n  transform: scale(1);\n\n  cursor: pointer;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  transition: ",";\n\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n    transition: transform 0.5s;\n    border: 2px solid ",";\n    color: ",";\n    background: transparent;\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: auto;\n    transform: none;\n    transition: none;\n  }\n\n  @media screen and (min-width: ",") {\n    width: 180px;\n  }\n"])),j.Z.colors.white,j.Z.colors.brown4,j.Z.fonts[0],j.Z.transition[0],j.Z.colors.brown4,j.Z.colors.brown4,j.Z.breakpoints.desktop);var C=o(9230),Z=o(3329);const P=()=>{const{t:e}=(0,C.$G)(),[r,o]=(0,a.useState)(!0),[n,s]=(0,a.useState)(!1),[l,t]=(0,a.useState)(!1),[c,p]=(0,a.useState)(!1),v=(0,i.I0)(),g=(0,d.TA)({initialValues:{name:"",email:"",password:"",confirmPassword:"",phone:"",location:""},validationSchema:m.Z.registerSchema,onSubmit:(e,r)=>{(e=>{let{values:r}=e;p(!0);const{name:o,email:n,password:s,phone:l,location:a}=r;v((0,x.z2)({userName:o,email:n,password:s,phone:l,location:a})),p(!1)})({values:e,action:r})}}),P=!!(g.errors.email&&g.touched.email||g.errors.password&&g.touched.password||g.errors.confirmPassword&&g.touched.confirmPassword||""===g.values.email||""===g.values.confirmPassword),I=(e,r)=>e?"".concat(r?j.Z.colors.red:j.Z.colors.darkGreen):null;return(0,Z.jsx)(f.hj,{children:(0,Z.jsx)(f.Yb,{children:(0,Z.jsx)(d.J9,{validationSchema:m.Z.registerSchema,children:(0,Z.jsxs)(b,{onSubmit:g.handleSubmit,autoComplete:"off",children:[(0,Z.jsx)(w,{children:e("Register")}),r&&(0,Z.jsxs)("div",{children:[(0,Z.jsx)(f.II,{style:{borderColor:I(g.values.email,g.errors.email)},name:"email",type:"email",value:g.values.email,validate:m.Z.registerSchema.email,onChange:g.handleChange,onBlur:g.handleBlur}),g.values.email?g.errors.email?(0,Z.jsx)(f.F1,{color:j.Z.colors.red}):(0,Z.jsx)(f.gq,{color:j.Z.colors.green1}):null,g.errors.email&&g.touched.email?(0,Z.jsx)(f.Tv,{children:g.errors.email}):null,(0,Z.jsx)(f.Dr,{className:"floating-label",children:e("Email")})]}),r&&(0,Z.jsxs)("div",{children:[(0,Z.jsx)(f.II,{style:{borderColor:I(g.values.password,g.errors.password)},name:"password",type:n?"text":"password",onChange:g.handleChange,value:g.values.password,onBlur:g.handleBlur}),(0,Z.jsx)(f.gW,{onClick:()=>{s(!n)},children:n?(0,Z.jsx)(h.r,{}):(0,Z.jsx)(u.r,{})}),g.errors.password&&g.touched.password?(0,Z.jsx)(f.Tv,{children:g.errors.password}):null,(0,Z.jsx)(f.Dr,{className:"floating-label",children:e("Password")})]}),r&&(0,Z.jsxs)("div",{children:[(0,Z.jsx)(f.II,{style:{borderColor:I(g.values.confirmPassword,g.errors.confirmPassword)},name:"confirmPassword",type:l?"text":"password",onChange:g.handleChange,value:g.values.confirmPassword,onBlur:g.handleBlur}),(0,Z.jsx)(f.gW,{onClick:()=>{t(!l)},children:l?(0,Z.jsx)(h.r,{}):(0,Z.jsx)(u.r,{})}),g.errors.confirmPassword&&g.touched.confirmPassword?(0,Z.jsx)(f.Tv,{children:g.errors.confirmPassword}):null,(0,Z.jsx)(f.Dr,{className:"floating-label",children:e("Confirm Password")})]}),r&&(0,Z.jsxs)(f._D,{children:[(0,Z.jsx)(f.un,{type:"button",onClick:()=>{o(!1)},disabled:P,children:e("Next")}),(0,Z.jsxs)(f.cu,{children:[(0,Z.jsx)("span",{children:e("Already have an account?")}),(0,Z.jsx)(f.Fg,{to:"/signin",children:e("Sign In")})]})]}),!r&&(0,Z.jsxs)("div",{children:[(0,Z.jsx)(f.II,{style:{borderColor:I(g.values.name,g.errors.name)},name:"name",type:"text",onChange:g.handleChange,value:g.values.name,onBlur:g.handleBlur}),g.values.name?g.errors.name?(0,Z.jsx)(f.F1,{color:j.Z.colors.red}):(0,Z.jsx)(f.gq,{color:j.Z.colors.green1}):null,g.errors.name&&g.touched.name?(0,Z.jsx)(f.Tv,{children:g.errors.name}):null,(0,Z.jsx)(f.Dr,{className:"floating-label",children:e("Name")})]}),!r&&(0,Z.jsxs)("div",{children:[(0,Z.jsx)(f.II,{style:{borderColor:I(g.values.location,g.errors.location)},name:"location",type:"text",value:g.values.location,onBlur:g.handleBlur,onChange:e=>{g.handleChange(e)}}),g.values.location?g.errors.location?(0,Z.jsx)(f.F1,{color:j.Z.colors.red}):(0,Z.jsx)(f.gq,{color:j.Z.colors.green1}):null,g.errors.location&&g.touched.location?(0,Z.jsx)(f.Tv,{children:g.errors.location}):null,(0,Z.jsx)(f.Dr,{className:"floating-label",children:e("Location, region")})]}),!r&&(0,Z.jsxs)("div",{children:[(0,Z.jsx)(f.II,{style:{borderColor:I(g.values.phone,g.errors.phone)},id:"phone",type:"phone",onChange:g.handleChange,value:g.values.phone,onBlur:g.handleBlur,name:"phone"}),g.values.phone?g.errors.phone?(0,Z.jsx)(f.F1,{color:j.Z.colors.red}):(0,Z.jsx)(f.gq,{color:j.Z.colors.green1}):null,g.errors.phone&&g.touched.phone?(0,Z.jsx)(f.Tv,{children:g.errors.phone}):null,(0,Z.jsx)(f.Dr,{className:"floating-label",children:e("Phone")})]}),!r&&(0,Z.jsxs)(f._D,{children:[(0,Z.jsx)(y,{type:"button","aria-label":"back button",onClick:()=>{o(!0)},children:e("Back")}),(0,Z.jsx)(f.un,{type:"submit","aria-label":"submit registration",children:c?"Loading":e("Register")}),(0,Z.jsxs)(f.cu,{children:[(0,Z.jsx)("span",{children:e("Already have an account?")})," ",(0,Z.jsx)(f.Fg,{to:"/signin",children:e("Sign In")})]})]})]})})})})},I=()=>{const e=(0,i.I0)();return window.scrollTo({top:0,left:0,behavior:"smooth"}),(0,a.useEffect)((()=>{e((0,c.X)({headerBottom:"addHeaderBottom"}))}),[]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(t.H,{title:"Register",description:"Register your account"}),(0,Z.jsx)(P,{})]})}}}]);
//# sourceMappingURL=741.f51ca5ae.chunk.js.map