(this["webpackJsonptaxes-fe"]=this["webpackJsonptaxes-fe"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},103:function(e,t,c){},133:function(e,t,c){},135:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(18),r=c.n(s),o=(c(100),c(101),c(68)),i=c.n(o),l=c(82),j=c(14),u=c(153),d=c(141),b=c(142),h=c(84),p=c(149),O=c(87),x=c(94),m=c(143),f=c(88),y=c(152),g=c(144),v=c(145),C=c(148),k=c(146),S=(c(103),c.p+"static/media/stripe_logo.1fd88ea7.svg"),N=c(45),q=c.n(N),I=c(9),L=c(2);var w=function(e){var t=e.stripePromise,c=Object(I.k)(),n=Object(a.useState)("2020"),s=Object(j.a)(n,2),r=s[0],o=s[1],N=Object(a.useState)(""),w=Object(j.a)(N,2),T=w[0],F=w[1],G=Object(a.useState)(""),B=Object(j.a)(G,2),E=B[0],P=B[1],_=Object(a.useState)([]),A=Object(j.a)(_,2),D=A[0],R=A[1],U=Object(a.useState)(""),Y=Object(j.a)(U,2),K=Y[0],M=Y[1],H=Object(a.useState)(!1),J=Object(j.a)(H,2),z=J[0],$=J[1],Q=Object(a.useState)(!1),V=Object(j.a)(Q,2),W=V[0],X=V[1],Z=Object(a.useState)(!1),ee=Object(j.a)(Z,2),te=ee[0],ce=ee[1],ae=Object(a.useState)(""),ne=Object(j.a)(ae,2),se=ne[0],re=ne[1],oe=Object(a.useState)(!1),ie=Object(j.a)(oe,2),le=ie[0],je=ie[1],ue=Object(a.useState)(""),de=Object(j.a)(ue,2),be=de[0],he=de[1],pe=function(){return""!==r&&""!==T&&D.length>0&&z&&""!==K},Oe=function(){var e=Object(l.a)(i.a.mark((function e(){var a,n,s,o,l,j,u,d,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!W){e.next=2;break}return e.abrupt("return");case 2:for(he(""),X(!0),ce(!0),a=new FormData,n=document.querySelector("#statements"),s=0;s<n.files.length;s++)a.append("statements",n.files[s]);return a.append("type",T),a.append("year",r),a.append("email",E),a.append("fullName",K),a.append("coupon",se),e.prev=13,e.next=16,t;case 16:return o=e.sent,l="https://taxes-api.digitools-it.com",e.next=20,q.a.post("".concat(l,"/api/statements/upload"),a,{headers:{"Content-Type":"multipart/form-data"}});case 20:if(j=e.sent,u=j.data.request_id,le){e.next=33;break}return e.next=25,q.a.post("".concat(l,"/api/payments/create-checkout-session"),{request_id:u});case 25:return d=e.sent,b=d.data.id,e.next=29,o.redirectToCheckout({sessionId:b});case 29:e.sent.error&&c.push("/checkout?success=false&request_id="+u),e.next=34;break;case 33:c.push("/checkout?success=true&coupon=".concat(se,"&request_id=").concat(u));case 34:e.next=42;break;case 36:if(e.prev=36,e.t0=e.catch(13),!(e.t0.response&&e.t0.response.data&&e.t0.response.data.description)){e.next=41;break}return he(e.t0.response.data.description),e.abrupt("return");case 41:c.push("/checkout?success=false");case 42:return e.prev=42,X(!1),ce(!1),e.finish(42);case 46:case"end":return e.stop()}}),e,null,[[13,36,42,46]])})));return function(){return e.apply(this,arguments)}}();return Object(L.jsxs)(d.a,{fluid:!0,id:"upload-container",children:[Object(L.jsx)(b.a,{className:"justify-content-md-center",children:Object(L.jsx)(h.a,{"justify-content-md-center":!0,sm:15,children:Object(L.jsxs)(p.a,{children:[Object(L.jsx)(p.a.Group,{className:"text-center",children:Object(L.jsx)(O.a,{children:Object(L.jsx)("h4",{children:"Submit new request"})})}),Object(L.jsxs)(p.a.Group,{controlId:"formUploadYear",id:"form-group-year-dd",children:[Object(L.jsx)(p.a.Label,{className:"text-start",children:"Select year"}),Object(L.jsx)(x.a,{children:Object(L.jsx)(m.a,{title:""!==r?r:"select",variant:"outline-dark",id:"dropdown-year",onSelect:function(e){o(e)},children:Object(L.jsx)(x.a.Item,{eventKey:"2020",children:"2020"})})})]}),Object(L.jsxs)(p.a.Group,{controlId:"formUploadType",children:[Object(L.jsx)(p.a.Label,{className:"text-start",children:"Select type"}),Object(L.jsx)(x.a,{children:Object(L.jsxs)(m.a,{title:""!==T?T:"select",variant:"outline-dark",id:"dropdown-type",onSelect:function(e){F(e)},children:[Object(L.jsx)(x.a.Item,{eventKey:"revolut",children:"revolut"}),Object(L.jsx)(x.a.Item,{eventKey:"etoro",children:"etoro"})]})})]}),Object(L.jsxs)(p.a.Group,{controlId:"formUploadStatements",children:[Object(L.jsx)(p.a.Label,{className:"text-start",children:"Select statements"}),Object(L.jsx)(p.a.File,{onChange:function(e){for(var t=[],c=0;c<e.target.files.length;c++)t.push(e.target.files[c].name);R(t)},label:0===D.length?"nothing selected":1===D.length?"1 file selected":D.length+" files selected",id:"statements",type:"file",name:"statements",multiple:!0,custom:!0}),0===D.length?Object(L.jsxs)(p.a.Text,{muted:!0,children:["Tax calculations will be applied on selected files for ",r]}):D.map((function(e,t){return Object(L.jsx)(p.a.Text,{muted:!0,children:e},t)}))]}),Object(L.jsxs)(p.a.Group,{controlId:"formFullName",id:"form-group-full-name",children:[Object(L.jsx)(p.a.Label,{className:"text-start",children:"Name"}),Object(L.jsx)(p.a.Control,{type:"input",placeholder:"Enter name",onChange:function(e){M(e.target.value),console.log(e.target.value)}})]}),Object(L.jsxs)(p.a.Group,{controlId:"formEmail",id:"form-group-email-id",children:[Object(L.jsx)(p.a.Label,{className:"text-start",children:"Email"}),Object(L.jsx)(p.a.Control,{type:"input",placeholder:"example@domain.com",onChange:function(e){P(e.target.value);var t=new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);null!=e.target.value&&$(t.test(e.target.value.toLowerCase()))}}),Object(L.jsx)(p.a.Text,{muted:!0,children:"You will receive your report on the provided email"})]}),Object(L.jsxs)(p.a.Group,{controlId:"formCoupon",id:"form-group-coupon",children:[Object(L.jsx)(p.a.Label,{className:"text-start",children:"Coupon"}),Object(L.jsx)(p.a.Control,{type:"input",placeholder:"Enter coupon if available",value:se,onChange:function(e){se.length+(e.target.value.length-se.length)>36||(Object(u.a)(e.target.value)?je(!0):je(!1),re(e.target.value),he(""))}}),Object(L.jsx)(p.a.Text,{muted:!0,children:"You will skip payments is it's a valid code"})]}),Object(L.jsxs)(p.a.Group,{controlId:"formSubmitButton",id:"form-group-submit-btn-id",children:[pe()&&le?Object(L.jsx)(f.a,{title:"submit",variant:"success",onClick:Oe,block:!0,children:"Submit"}):pe()?Object(L.jsxs)(f.a,{title:"submit",className:"btn-outline-dark",onClick:Oe,style:{color:"#FFF",backgroundColor:"#5433FF",cursor:"pointer"},children:["Submit and checkout with",Object(L.jsx)(v.a,{className:"align-content-end",src:S})]}):Object(L.jsx)(y.a,{placement:"top",delay:{show:250,hide:400},overlay:Object(L.jsx)(g.a,{children:"Select statements, type and input your name and email to submit"}),children:Object(L.jsxs)(f.a,{title:"submit",className:"btn-outline-dark",style:{color:"#FFF",backgroundColor:"#5433FF"},children:["Submit and checkout with",Object(L.jsx)(v.a,{className:"align-content-end",src:S})]})}),Object(L.jsx)(O.a,{className:"text-danger",children:be})]})]})})}),Object(L.jsx)(C.a,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:te,children:Object(L.jsx)(C.a.Header,{children:Object(L.jsxs)(C.a.Title,{id:"contained-modal-title-vcenter",children:["Processing request \xa0",Object(L.jsx)(k.a,{animation:"border",role:"status",children:Object(L.jsx)("span",{className:"sr-only",children:"Loading..."})})]})})})]})},T=c(151),F=c(150),G=c(89),B=c(90),E=(c(130),c(30)),P=c(24),_=c(91),A=c(92),D=c(95),R=c(93),U=c(86),Y=c(147),K=c(85),M=c(49),H="Copy",J="Copied",z=function(e){Object(D.a)(c,e);var t=Object(R.a)(c);function c(){var e;Object(_.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).requestId=e.props.requestId,e.state={coupon:"",requestCopyButtonLabel:H,couponCopyButtonLabel:H},e.handleRequestIDCopyClick=function(){e.setState(Object(P.a)(Object(P.a)({},e.state),{},{requestCopyButtonLabel:J})),setTimeout((function(){return e.setState(Object(P.a)(Object(P.a)({},e.state),{},{requestCopyButtonLabel:H}))}),500)},e.handleCouponCopyClick=function(){e.setState(Object(P.a)(Object(P.a)({},e.state),{},{couponCopyButtonLabel:J})),setTimeout((function(){return e.setState(Object(P.a)(Object(P.a)({},e.state),{},{couponCopyButtonLabel:H}))}),500)},e}return Object(A.a)(c,[{key:"componentDidMount",value:function(){var e=this;q.a.post("".concat("https://taxes-api.digitools-it.com","/api/payments/obtain-coupon"),{request_id:this.requestId}).then((function(t){var c=t.data.coupon;""!==e.state.coupon&&""===c||e.setState(Object(P.a)(Object(P.a)({},e.state),{},{coupon:c}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.props.history;return Object(L.jsxs)(p.a,{children:[Object(L.jsx)(p.a.Group,{children:Object(L.jsx)(O.a,{className:"text-center",children:Object(L.jsx)("h4",{children:"Your request was processed successfully and a report is on its way to your mailbox"})})}),Object(L.jsx)("br",{}),Object(L.jsxs)(p.a.Group,{children:[Object(L.jsx)(U.a,{children:"Request ID"}),Object(L.jsxs)(Y.a,{className:"mb-2",children:[Object(L.jsx)(K.a,{value:this.requestId,disabled:!0,className:"text-center",placeholder:""}),Object(L.jsx)(Y.a.Append,{children:Object(L.jsx)(M.CopyToClipboard,{text:this.requestId,children:Object(L.jsx)(f.a,{disabled:null==this.requestId||""===this.requestId,variant:"outline-secondary",onClick:this.handleRequestIDCopyClick,children:this.state.requestCopyButtonLabel})})})]})]}),Object(L.jsx)("br",{}),Object(L.jsxs)(p.a.Group,{children:[Object(L.jsx)(U.a,{children:"Coupon code"}),Object(L.jsxs)(Y.a,{className:"mb-2",children:[Object(L.jsx)(K.a,{value:this.state.coupon,disabled:!0,className:"text-center",placeholder:""}),Object(L.jsx)(Y.a.Append,{children:Object(L.jsx)(M.CopyToClipboard,{text:this.state.coupon,children:Object(L.jsx)(f.a,{disabled:""===this.state.coupon,variant:"outline-secondary",onClick:this.handleCouponCopyClick,children:this.state.couponCopyButtonLabel})})})]})]}),Object(L.jsx)("br",{}),Object(L.jsx)("br",{}),Object(L.jsx)(f.a,{block:!0,onClick:function(){return e.push("/")},children:"Try again"})]})}}]),c}(n.a.Component),$=Object(I.o)(z);var Q=function(e){var t=e.requestId,c=Object(I.k)(),n="Copy",s=Object(a.useState)(n),r=Object(j.a)(s,2),o=r[0],i=r[1],l="nikolov@digitools-it.com";return null!=t&&""!==t.trim(" ")?Object(L.jsxs)(p.a,{children:[Object(L.jsx)(p.a.Group,{children:Object(L.jsx)(O.a,{className:"text-center",children:Object(L.jsx)("h4",{children:"Unfortunately, we could not process your payment"})})}),Object(L.jsx)("br",{}),Object(L.jsxs)(p.a.Group,{children:[Object(L.jsxs)(Y.a,{className:"mb-2",children:[Object(L.jsx)(K.a,{value:t,disabled:!0,className:"text-center",placeholder:""}),Object(L.jsx)(Y.a.Append,{children:Object(L.jsx)(M.CopyToClipboard,{text:t,children:Object(L.jsx)(f.a,{variant:"outline-secondary",onClick:function(){i("Copied"),setTimeout((function(){return i(n)}),500)},children:o})})})]}),Object(L.jsxs)(O.a,{children:["Above is your request ID. Please try submitting another request or send this to ",Object(L.jsx)("a",{href:"mailto:"+l,className:"border-bottom",children:l})," and ask for details"]})]}),Object(L.jsx)("br",{}),Object(L.jsx)("br",{}),Object(L.jsx)(f.a,{block:!0,onClick:function(){return c.push("/")},children:"Try again"})]}):Object(L.jsxs)(p.a,{children:[Object(L.jsx)(p.a.Group,{children:Object(L.jsx)(O.a,{className:"text-center",children:Object(L.jsx)("h4",{children:"Your request failed"})})}),Object(L.jsx)("br",{}),Object(L.jsx)(p.a.Group,{children:Object(L.jsxs)("p",{children:["You were not charged for this operation. If this happened more than once please contact ",Object(L.jsx)("a",{href:"mailto:"+l,className:"border-bottom",children:l})," for more details. Sorry for the inconvenience."]})}),Object(L.jsx)("br",{}),Object(L.jsx)("br",{}),Object(L.jsx)(b.a,{md:15,className:"justify-content-md-center",children:Object(L.jsx)(f.a,{onClick:function(){return c.push("/")},children:"Try again"})})]})};c(133);var V=function(){var e=new URLSearchParams(Object(I.l)().search),t=e.get("request_id"),c=e.get("success");return Object(L.jsx)(d.a,{fluid:!0,id:"checkout-container",children:Object(L.jsx)(b.a,{className:"justify-content-md-center",children:Object(L.jsx)(h.a,{className:"justify-content-md-center",md:7,sm:15,children:"true"===c?Object(L.jsx)($,{requestId:t}):Object(L.jsx)(Q,{requestId:t})})})})},W=c(64),X=Object(G.loadStripe)("pk_test_AM0EATSk4K1O8P8NtUf4BEc9");var Z=function(){return Object(L.jsx)(E.HashRouter,{children:Object(L.jsxs)("div",{className:"App",children:[Object(L.jsx)(T.a,{bg:"dark",variant:"dark",sticky:"top",children:Object(L.jsxs)(F.a,{className:"mr-auto",children:[Object(L.jsx)(W.LinkContainer,{to:"/",children:Object(L.jsx)(F.a.Link,{href:"",children:"Submit statements"})}),Object(L.jsx)(W.LinkContainer,{to:"/",children:Object(L.jsx)(F.a.Link,{href:"",children:"Instructions"})}),Object(L.jsx)(W.LinkContainer,{to:"/checkout",children:Object(L.jsx)(F.a.Link,{href:"",children:"Pricing"})})]})}),Object(L.jsx)(I.g,{children:Object(L.jsxs)(d.a,{children:[Object(L.jsx)(I.d,{path:"/",exact:!0,children:Object(L.jsx)(B.Elements,{stripe:X,children:Object(L.jsx)(w,{stripePromise:X})})}),Object(L.jsx)(I.d,{path:"/checkout",children:Object(L.jsx)(V,{})})]})})]})})},ee=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,154)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(L.jsx)(n.a.StrictMode,{children:Object(L.jsx)(Z,{})}),document.getElementById("root")),ee()}},[[135,1,2]]]);
//# sourceMappingURL=main.a9a27a0f.chunk.js.map