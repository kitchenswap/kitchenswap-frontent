(this["webpackJsonpkitchenswap-frontend"]=this["webpackJsonpkitchenswap-frontend"]||[]).push([[0],{111:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var c,r,i,o=n(0),a=n.n(o),s=n(83),j=n.n(s),l=n(34),d=n(122),b=n(149),u=n(123),x=n(18),h=n(5),O=n(1),f="https://data.kitchenswap.finance",p={dexUrls:[],tokenLogos:[],dexPools:[]},g=a.a.createContext(),m=function(e){var t=e.children,n=Object(o.useState)(p),c=Object(h.a)(n,2),r=c[0],i=c[1];Object(o.useEffect)((function(){Promise.all([fetch("".concat(f,"/dex-pools.json")).then((function(e){return e.json()})),fetch("".concat(f,"/dex-urls.json")).then((function(e){return e.json()})),fetch("".concat(f,"/token-logos.json")).then((function(e){return e.json()}))]).then((function(e){var t=Object(h.a)(e,3),n=t[0],c=t[1],o=t[2];i(Object(x.a)(Object(x.a)({},r),{},{dexPools:n,dexUrls:c,tokenLogos:o}))}))}),[]);var a={dexUrls:r.dexUrls,dexPools:r.dexPools,tokenLogos:r.tokenLogos,setDexData:i};return Object(O.jsx)(g.Provider,{value:a,children:t})},k={initialColorMode:window.localStorage.getItem("chakra-ui-color-mode")||"light",useSystemColorMode:!1},v=Object(d.a)({config:k}),y=function(e){var t=e.children;return Object(O.jsx)(m,{children:Object(O.jsx)(l.a,{children:Object(O.jsxs)(b.a,{theme:v,children:[Object(O.jsx)(u.a,{initialColorMode:v.config.initialColorMode}),t]})})})},w=(n(111),n(13)),C=n(127),T=n(35),S=n(124),M=n(36),z=n(93),E={sm:"1em",md:"2em",xl:"3em"},L=M.a.div(c||(c=Object(T.a)(['\n  font-family: "Baloo Chettan 2", sans-serif;\n  color: ',";\n\n  ","\n"],['\n  font-family: "Baloo Chettan\\ 2", sans-serif;\n  color: ',";\n\n  ","\n"])),(function(e){return"dark"===e.$colorMode?"#fff":"#fd3f92"}),(function(e){var t=E[e.$size]||E.sm,n=e.$greyscale?"filter: grayscale(100%)":"";return"\n      font-size: ".concat(t,";\n      ").concat(n,";\n    ")})),D=function(e){var t=e.size,n=e.greyscale,c=void 0!==n&&n,r=Object(z.b)().colorMode;return Object(O.jsxs)(L,{$colorMode:r,$size:t,$greyscale:c,children:[Object(O.jsx)("b",{children:"kitchen"}),"swap"]})},P=M.a.div(r||(r=Object(T.a)(["\n  padding-top: 25%;\n"]))),I=function(){return Object(O.jsx)(S.a,{children:Object(O.jsx)(P,{children:Object(O.jsx)(D,{size:"xl"})})})},R=n(126),F=n(125),A=n(128),N=n(129),U=n(130),$=n(133),_=n(131),q=n(135),B=n(136),Y=n(137),G=n(132),H=n(134),J=n(138),V=n(150),W=function(){var e=Object(o.useContext)(g).tokenLogos;return void 0===e?[]:e},K=M.a.div(i||(i=Object(T.a)(["\n  display: flex;\n  align-items: center;\n"]))),Q={md:"20px",xl:"25px"},X=function(e){var t=e.token,n=e.size,c=void 0===n?"md":n,r=(W().find((function(e){return e.symbol===t}))||{}).thumb,i=Q[c]||Q.md;return Object(O.jsxs)(K,{children:[Object(O.jsx)(V.a,{src:r,alt:t,fallbackSrc:'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"><ellipse ry="12" rx="12" cy="12" cx="12" fill="lightgrey"/></svg>',borderRadius:"full",boxSize:i,mr:"2"}),Object(O.jsx)(F.a,{fontSize:c,children:t})]})},Z=function(){var e=Object(o.useState)(window.scrollY),t=Object(h.a)(e,2),n=t[0],c=t[1];Object(o.useEffect)((function(){return window.scrollY!==n&&(c(window.scrollY),window.scrollTo(0,0)),function(){window.scrollY!==n&&window.scrollTo(0,n)}}),[])},ee=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],c=n.length,r=c,i=[];for(t=0;t<r;t++)e=Math.floor(Math.random()*c),i.push(n[e]),n.splice(e,1),c=n.length;for(t=0;t<r;t++)n[t]=i[t];return n},te=function(){var e=Object(o.useContext)(g).dexPools,t=void 0===e?[]:e;return Object(o.useMemo)((function(){return function(){var e=[];return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach((function(t){var n=t.id,c=t.value,r=new Set;c.forEach((function(t){var c="".concat(n,"_").concat(t.stakeToken,"_").concat(t.earnToken);r.has(c)||e.push(Object(x.a)(Object(x.a)({},t),{},{formattedTotalLiquidity:(new Intl.NumberFormat).format(parseInt(t.totalLiquidity,10)),formattedAPR:t.APR.toFixed(2),formattedDepositFee:(t.depositFee||0).toFixed(2),depositFee:t.depositFee||0,dex:n,key:c})),r.add(c)}))})),ee(e),e}(t)}),[t])},ne=function(){var e=Object(o.useContext)(g).dexUrls;return void 0===e?[]:e},ce=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t={},n=("?"===e[0]?e.substr(1):e).split("&"),c=0;c<n.length;c++){var r=n[c].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]||"")}return t},re=function(e){var t=e.onClose;return Object(O.jsxs)(S.a,{py:"16",flexDirection:"column",children:[Object(O.jsx)(R.a,{size:"3xl",py:"4",children:"Pair not found"}),Object(O.jsx)(F.a,{fontSize:"sm",onClick:t,className:"cursor-pointer",children:"Go back to the list"})]})},ie=function(e){var t=e.onClose,n=e.children;return Object(O.jsxs)(C.a,{children:[Object(O.jsxs)(A.a,{my:"2",children:[Object(O.jsx)(N.a,{children:Object(O.jsx)(U.a,{icon:Object(O.jsx)(G.a,{}),"aria-label":"Back",variant:"outline",onClick:t})}),Object(O.jsx)($.a,{}),Object(O.jsx)(N.a,{children:Object(O.jsx)(U.a,{icon:Object(O.jsx)(H.a,{}),"aria-label":"Close",variant:"outline",onClick:t})})]}),Object(O.jsx)(N.a,{py:"8",children:n})]})},oe=function(){Z();var e=te(),t=ne(),n=Object(w.h)(),c=n.stakeToken,r=n.earnToken,i=Object(w.f)(),a=Object(w.g)().search,s=ce(a).dex,j=void 0===s?"":s,l=function(){if(i.length)return i.goBack();i.push("/")};Object(o.useEffect)((function(){var e=function(e){return 27===e.keyCode&&l()};return window.document.addEventListener("keydown",e),function(){window.document.removeEventListener("keydown",e)}}),[]);var d=e.find((function(e){return e.stakeToken===c&&e.earnToken===r&&!(j.length>0&&e.dex!==j)}));if(0===e.length)return Object(O.jsx)(ie,{onClose:l,children:Object(O.jsx)(_.a,{})});if(!d)return Object(O.jsx)(ie,{onClose:l,children:Object(O.jsx)(re,{onClose:l})});var b=(t.find((function(e){return e.id===d.dex}))||{}).url,u=void 0===b?"":b,x=d.formattedDepositFee,h=d.formattedAPR,f=d.formattedTotalLiquidity;return Object(O.jsxs)(ie,{onClose:l,children:[Object(O.jsxs)(q.a,{spacing:"3em",children:[Object(O.jsx)(q.b,{children:Object(O.jsxs)(B.a,{children:[Object(O.jsx)(B.b,{children:"Stake"}),Object(O.jsx)(B.c,{children:Object(O.jsx)(X,{token:c,size:"xl"})})]})}),Object(O.jsx)(q.b,{children:Object(O.jsxs)(B.a,{children:[Object(O.jsx)(B.b,{children:"Earn"}),Object(O.jsx)(B.c,{children:Object(O.jsx)(X,{token:r,size:"xl"})})]})})]}),Object(O.jsxs)(q.a,{spacing:"3em",children:[Object(O.jsx)(q.b,{children:Object(O.jsxs)(B.a,{children:[Object(O.jsx)(B.b,{children:"Deposit Fee"}),Object(O.jsxs)(B.c,{children:[x,"%"]})]})}),Object(O.jsx)(q.b,{children:Object(O.jsxs)(B.a,{children:[Object(O.jsx)(B.b,{children:"TLV"}),Object(O.jsxs)(B.c,{children:["$",f]})]})}),Object(O.jsx)(q.b,{children:Object(O.jsxs)(B.a,{children:[Object(O.jsx)(B.b,{children:"APR"}),Object(O.jsxs)(B.c,{children:[h,"%"]})]})})]}),Object(O.jsx)(q.a,{spacing:"3em",children:Object(O.jsx)(q.b,{children:Object(O.jsxs)(B.a,{children:[Object(O.jsx)(B.b,{children:"Available at"}),Object(O.jsx)(B.c,{children:Object(O.jsx)(Y.a,{href:u,isExternal:!0,children:Object(O.jsxs)(F.a,{casing:"capitalize",children:[d.dex," ",Object(O.jsx)(J.a,{m:"2px"})]})})})]})})})]})},ae=n(26),se=n(8),je=n(139),le=n(151),de=n(143),be=n(148),ue=n(140),xe=n(141),he=n(142),Oe=n(144),fe=n(145),pe=n(88),ge=n.n(pe);var me,ke,ve=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0px",n=Object(o.useState)(!1),c=Object(h.a)(n,2),r=c[0],i=c[1];return Object(o.useEffect)((function(){var n=new IntersectionObserver((function(e){var t=Object(h.a)(e,1)[0];i(t.isIntersecting)}),{rootMargin:t});return e.current&&n.observe(e.current),function(){e.current&&n.unobserve(e.current)}}),[]),r},ye=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},we=function(e){var t=e.end,n=e.formattingFn,c=e.decimals,r=void 0===c?0:c,i=e.quiet,a=void 0!==i&&i,s=e.prefix,j=e.suffix,l=Object(o.useState)({start:t}),d=Object(h.a)(l,2),b=d[0],u=d[1],x=Object(o.useRef)(),f=Object(o.useRef)(),p=ve(f),g=function(){var e=ye(1,3),n=ye(0,2),c=(Math.random()<.5?-1:1)*ye(0,3)/Math.pow(10,r),i=t-c;i<0&&(i=0),u({start:i,delay:e,duration:n})},m=function e(){a||g(),x.current=setTimeout((function(){e()}),ye(1e4,15e3))};return Object(o.useEffect)((function(){p?m():clearTimeout(x.current)}),[p]),Object(o.useEffect)((function(){return function(){clearTimeout(x.current)}}),[]),Object(O.jsx)("div",{ref:f,children:Object(O.jsx)(ge.a,{start:b.start,end:t,decimals:r,duration:b.duration,delay:b.delay,formattingFn:n,prefix:s,suffix:j})})},Ce=n(91),Te=function(e){var t=(W().find((function(t){return t.symbol===e.children}))||{}).thumb;return Object(O.jsx)(Ce.a,Object(x.a)(Object(x.a)({},e),{},{leftIcon:Object(O.jsx)(V.a,{src:t,alt:e.children,fallbackSrc:'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"><ellipse ry="12" rx="12" cy="12" cx="12" fill="lightgrey"/></svg>',borderRadius:"full"})}))},Se=Object(M.a)(je.a)(me||(me=Object(T.a)(["\n  & tbody tr {\n    &:hover {\n      background-color: ",";\n    }\n  }\n"])),(function(e){return e.$hoverColor})),Me=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(parseInt(e,10))},ze="stakeToken",Ee="earnToken",Le="totalLiquidity",De="APR",Pe="DESC",Ie="ASC",Re=function(e){var t=e.field,n=e.sorting,c=ue.a;return t===n.field&&n.direction===Ie&&(c=xe.a),t===n.field&&n.direction===Pe&&(c=he.a),Object(O.jsx)(c,{})},Fe=Object(M.a)(A.a)(ke||(ke=Object(T.a)(["\n  justify-content: space-between;\n  & > * {\n    width: 50%;\n  }\n\n  @media (max-width: 600px) {\n    & {\n      flex-direction: column;\n    }\n    & > * {\n      width: 100%;\n    }\n  }\n"]))),Ae=function(e){var t=e.onSort,n=e.sorting;return Object(O.jsxs)(je.h,{children:[Object(O.jsx)(je.f,{children:Object(O.jsxs)(Fe,{children:[Object(O.jsxs)(N.a,{py:"2",className:"cursor-pointer",onClick:function(){return t(ze)},children:["Stake token"," ",Object(O.jsx)(Re,{field:ze,sorting:n})]}),Object(O.jsxs)(N.a,{py:"2",className:"cursor-pointer",onClick:function(){return t(Ee)},children:["Earn token"," ",Object(O.jsx)(Re,{field:Ee,sorting:n})]})]})}),Object(O.jsx)(je.f,{isNumeric:!0,children:Object(O.jsxs)(Fe,{children:[Object(O.jsxs)(N.a,{py:"2",className:"cursor-pointer",onClick:function(){return t(Le)},children:["TLV ",Object(O.jsx)(Re,{field:Le,sorting:n})]}),Object(O.jsxs)(N.a,{py:"2",className:"cursor-pointer",onClick:function(){return t(De)},children:["APR ",Object(O.jsx)(Re,{field:De,sorting:n})]})]})})]})},Ne=function(e){var t=e.filters,n=e.onChange,c=Object(z.c)("white","gray.800"),r=t.stakeToken,i=t.earnToken,o=function(e){return n(Object(x.a)(Object(x.a)({},t),{},Object(se.a)({},e.target.name,e.target.value)))},a=function(e){return n(Object(x.a)(Object(x.a)({},t),{},Object(se.a)({},e,"")))};return Object(O.jsxs)(A.a,{style:{position:"sticky",top:0},bg:c,my:"2",zIndex:"3",children:[Object(O.jsx)(N.a,{py:"4",children:Object(O.jsxs)(le.a,{children:[Object(O.jsx)(de.a,{pointerEvents:"none",children:Object(O.jsx)(Oe.a,{color:"gray.300"})}),Object(O.jsx)(be.a,{type:"text",placeholder:"Stake Token",value:r,name:"stakeToken",onChange:o,tabIndex:"1"}),r.length>0&&Object(O.jsx)(de.b,{children:Object(O.jsx)(U.a,{variant:"ghost",onClick:function(){return a("stakeToken")},"aria-label":"Clear",icon:Object(O.jsx)(fe.a,{}),size:"sm",colorScheme:"blue"})})]})}),Object(O.jsx)($.a,{px:"2"}),Object(O.jsx)(N.a,{py:"4",children:Object(O.jsxs)(le.a,{children:[Object(O.jsx)(de.a,{pointerEvents:"none",children:Object(O.jsx)(Oe.a,{color:"gray.300"})}),Object(O.jsx)(be.a,{type:"text",placeholder:"Earn Token",value:i,name:"earnToken",onChange:o,tabIndex:"2"}),i.length>0&&Object(O.jsx)(de.b,{children:Object(O.jsx)(U.a,{variant:"ghost",onClick:function(){return a("earnToken")},"aria-label":"Clear",icon:Object(O.jsx)(fe.a,{}),size:"sm",colorScheme:"blue"})})]})})]})},Ue=function(){var e=Object(w.f)(),t=Object(w.i)().isExact,n=te(),c=Object(z.c)("#ebf8ff","#2A4365"),r=Object(o.useState)({stakeToken:"",earnToken:""}),i=Object(h.a)(r,2),a=i[0],s=i[1],j=Object(o.useState)({field:null,direction:null}),l=Object(h.a)(j,2),d=l[0],b=l[1],u=function(e,t,n){n[t]!==a[t]&&(e.stopPropagation(),s(Object(x.a)(Object(x.a)({},a),{},Object(se.a)({},t,n[t]))))},f=function(e){return d.field===e&&d.direction===Ie?b({}):d.field===e&&d.direction===Pe?b({direction:Ie,field:e}):void b({direction:Pe,field:e})},p=Object(o.useMemo)((function(){var e=Object(ae.a)(n).filter((function(e){var t=e.stakeToken,n=e.earnToken;return!(a.stakeToken.length>0&&-1===t.toLowerCase().indexOf(a.stakeToken.toLowerCase()))&&!(a.earnToken.length>0&&-1===n.toLowerCase().indexOf(a.earnToken.toLowerCase()))}));return d.field&&(d.field===ze||d.field===Ee?e.sort((function(e,t){return e[d.field]<t[d.field]?-1:e[d.field]>t[d.field]?1:0})):e.sort((function(e,t){return t[d.field]-e[d.field]})),d.direction===Ie&&e.reverse()),e}),[n,a,d]);return t&&0===p.length?Object(O.jsx)(_.a,{}):Object(O.jsxs)("div",{style:{display:t?"block":"none"},children:[Object(O.jsx)(Ne,{filters:a,onChange:s}),Object(O.jsxs)(Se,{variant:"simple",$isExactMatch:t,$hoverColor:c,children:[Object(O.jsx)(je.b,{children:"Don't forget to DYOR"}),Object(O.jsx)(je.g,{children:Object(O.jsx)(Ae,{onSort:f,sorting:d})}),Object(O.jsx)(je.c,{children:p.map((function(t){return Object(O.jsxs)(je.h,{className:"cursor-pointer",onClick:function(){return function(t){var c=t.dex,r=t.stakeToken,i=t.earnToken,o=n.some((function(e){return e.dex!==c&&e.stakeToken===r&&e.earnToken===i}))?"?dex=".concat(c):"",a="/pair/".concat(r,"/").concat(i).concat(o);e.push(a)}(t)},children:[Object(O.jsx)(je.d,{children:Object(O.jsxs)(Fe,{children:[Object(O.jsx)(N.a,{py:"2",children:Object(O.jsx)(Te,{variant:"outline",width:"120px",onClick:function(e){return u(e,"stakeToken",t)},children:t.stakeToken})}),Object(O.jsx)(N.a,{py:"2",children:Object(O.jsx)(Te,{variant:"outline",width:"120px",onClick:function(e){return u(e,"earnToken",t)},children:t.earnToken})})]})}),Object(O.jsx)(je.d,{isNumeric:!0,children:Object(O.jsxs)(Fe,{textAlign:"align-right",children:[Object(O.jsx)(N.a,{py:"2",height:"56px",lineHeight:"46px",children:Object(O.jsx)(we,{end:t.totalLiquidity,decimals:0,formattingFn:Me})}),Object(O.jsx)(N.a,{py:"2",height:"56px",lineHeight:"46px",children:Object(O.jsx)(we,{end:t.APR,decimals:2,suffix:"%"})})]})})]},t.key)}))}),Object(O.jsx)(je.e,{children:Object(O.jsx)(Ae,{onSort:f,sorting:d})})]})]})},$e=n(146),_e=n(147),qe=function(e){var t=e.className,n=Object(z.b)(),c=n.colorMode,r=n.toggleColorMode,i="light"===c?$e.a:_e.a;return Object(O.jsx)(U.a,{variant:"outline",onClick:r,"aria-label":"Toggle ".concat("light"===c?"Dark":"Light"),icon:Object(O.jsx)(i,{}),className:t})},Be=function(){return Object(O.jsxs)(A.a,{my:"2",children:[Object(O.jsx)(N.a,{py:"4",children:Object(O.jsx)(l.b,{to:"/",children:Object(O.jsx)(D,{size:"md"})})}),Object(O.jsx)($.a,{px:"2"}),Object(O.jsx)(N.a,{py:"4",children:Object(O.jsx)(qe,{})})]})},Ye=function(){return Object(O.jsx)(S.a,{children:Object(O.jsxs)(A.a,{py:"12",flexWrap:"wrap",children:[Object(O.jsx)(N.a,{p:"8",children:Object(O.jsx)(l.b,{to:"/",children:Object(O.jsx)(D,{greyscale:!0})})}),Object(O.jsx)(N.a,{p:"8",children:Object(O.jsx)(F.a,{fontSize:"sm",casing:"uppercase",children:Object(O.jsx)("a",{href:"https://twitter.com/kitchen_swap",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})})}),Object(O.jsx)(N.a,{p:"8",children:Object(O.jsx)(F.a,{fontSize:"sm",casing:"uppercase",children:Object(O.jsx)("a",{href:"https://medium.com/@kitchenswap",target:"_blank",rel:"noopener noreferrer",children:"MEDIUM"})})}),Object(O.jsx)(N.a,{p:"8",children:Object(O.jsx)(F.a,{fontSize:"sm",casing:"uppercase",children:Object(O.jsx)("a",{href:"https://docs.kitchenswap.finance/",target:"_blank",rel:"noopener noreferrer",children:"DOCS"})})}),Object(O.jsx)(N.a,{p:"8",children:Object(O.jsx)(F.a,{fontSize:"sm",casing:"uppercase",children:Object(O.jsx)("a",{href:"https://docs.kitchenswap.finance//roadmap",target:"_blank",rel:"noopener noreferrer",children:"ROADMAP"})})})]})})},Ge=function(){return Object(O.jsxs)(C.a,{style:{maxWidth:"1200px",display:"flex",flexDirection:"column",height:"100%"},children:[Object(O.jsx)(Be,{}),Object(O.jsxs)("div",{style:{display:"flex",flexDirection:"column",flexGrow:1},children:[Object(O.jsx)(Ue,{})," ",Object(O.jsxs)(w.c,{children:[Object(O.jsx)(w.a,{path:"/pair/:stakeToken/:earnToken",children:Object(O.jsx)(oe,{})}),Object(O.jsx)(w.a,{path:"/about",children:Object(O.jsx)(I,{})})]})]}),Object(O.jsx)(Ye,{})]})};j.a.render(Object(O.jsx)(y,{children:Object(O.jsx)(Ge,{})}),document.getElementById("root"))}},[[116,1,2]]]);
//# sourceMappingURL=main.4fc47b6d.chunk.js.map