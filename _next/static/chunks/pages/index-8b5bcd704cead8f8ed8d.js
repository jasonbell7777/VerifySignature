(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2274:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var s=t(5893),i=t(7757),a=t.n(i),r=t(2137),c=t(9008),l=t(3151),o=t.n(l),d=t(367),u=t.n(d),h=t(1664),x="Verify bitcoin address signature online",m="Verify bitcoin address online";function _(e){var n=e.children,t=e.home;return(0,s.jsxs)("div",{className:o().container,children:[(0,s.jsxs)(c.default,{children:[(0,s.jsx)("link",{rel:"icon",href:"favicon.ico"}),(0,s.jsx)("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),(0,s.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/".concat(encodeURI(m),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),(0,s.jsx)("meta",{name:"og:title",content:m}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,s.jsx)("header",{className:o().header,children:t?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("h1",{className:u().heading2Xl,children:x})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("h2",{className:u().headingLg,children:(0,s.jsx)(h.default,{href:"/",children:(0,s.jsx)("a",{className:u().colorInherit,children:x})})})})}),(0,s.jsx)("main",{children:n}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("footer",{className:"footer mt-auto py-3 bg-light",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("span",{className:"text-muted",children:["This page works offline. ",(0,s.jsx)("a",{href:"https://github.com/BlueWallet/VerifySignature",target:"_blank",children:"Fork me on Github!"})]})," ",(0,s.jsx)("br",{})]})})]})}var f=t(5723),g=t(7294),j=t(1163),v=t(7790),p=t.n(v),b=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",{});case 2:return e.next=4,fetch("https://blockstream.info/api/address/".concat(n));case 4:return t=e.sent,e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function N(){var e,n,t=(0,j.useRouter)(),i=t.query,a=i.a,r=i.m,l=i.s,o=(0,g.useState)(""),d=o[0],h=o[1],x=(0,g.useState)(""),v=x[0],N=x[1],w=(0,g.useState)(""),k=w[0],y=w[1],S=(0,g.useState)(!1),F=S[0],C=S[1],T=(0,f.ZP)("".concat(d),b),X=T.data;T.error;(0,g.useEffect)((function(){E()}),[d,v,k]),(0,g.useEffect)((function(){a&&h(String(a)),r&&N(String(r)),l&&y(String(l)),E()}),[a,r,l]);var E=function(){C(!1);try{t.push("/?a=".concat(d,"&m=").concat(v,"&s=").concat(k),null,{shallow:!0});var e=p().verify(v,d,k,null,!0);console.log({message:v,address:d,signature:k,verified:e}),C(e)}catch(n){console.warn(n.message)}};return(0,s.jsxs)(_,{home:!0,children:[(0,s.jsx)(c.default,{children:(0,s.jsx)("title",{children:m})}),(0,s.jsx)("section",{className:"".concat(u().headingMd," ").concat(u().padding1px),children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),E()},children:[(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col",children:"address:"}),(0,s.jsx)("div",{className:"col",children:(0,s.jsx)("input",{type:"text",size:29,value:d,onChange:function(e){return h(e.target.value)}})})]}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col",children:"message:"}),(0,s.jsx)("div",{className:"col",children:(0,s.jsx)("textarea",{rows:5,cols:30,value:v,onChange:function(e){return N(e.target.value)}})})]}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col",children:"signature:"}),(0,s.jsx)("div",{className:"col",children:(0,s.jsx)("textarea",{rows:5,cols:30,value:k,onChange:function(e){return y(e.target.value)}})})]})]}),(0,s.jsx)("br",{}),(null===X||void 0===X?void 0:X.chain_stats)&&(0,s.jsxs)("span",{children:["address has ",(0,s.jsxs)("i",{children:[((null===X||void 0===X||null===(e=X.chain_stats)||void 0===e?void 0:e.funded_txo_sum)-(null===X||void 0===X||null===(n=X.chain_stats)||void 0===n?void 0:n.spent_txo_sum))/1e8," BTC"]})]}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),F&&(0,s.jsx)("b",{children:"Signature verified!"})||(0,s.jsx)("i",{children:"Signature not verified"})]})})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2274)}])},3151:function(e){e.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",backToHome:"layout_backToHome__1vZsp"}},367:function(e){e.exports={heading2Xl:"utils_heading2Xl__1I65m",headingXl:"utils_headingXl__1XecN",headingLg:"utils_headingLg__de7p0",headingMd:"utils_headingMd__3de6G",borderCircle:"utils_borderCircle__13qdJ",colorInherit:"utils_colorInherit__3Gudf",padding1px:"utils_padding1px__oCny8",list:"utils_list__S7_pe",listItem:"utils_listItem__2eJpJ",lightText:"utils_lightText__12Ckm"}},9214:function(){},5568:function(){},2361:function(){},4616:function(){},2644:function(){}},function(e){e.O(0,[246,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);