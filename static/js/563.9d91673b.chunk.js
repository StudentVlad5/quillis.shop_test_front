"use strict";(self.webpackChunkstore_of_stylish_clothes=self.webpackChunkstore_of_stylish_clothes||[]).push([[563],{4160:(e,t,s)=>{s.r(t),s.d(t,{default:()=>L});var a=s(2791),r=s(7689),i=s(4116),l=(s(5909),s(9434)),n=s(456),c=s(1087),o=s(9230),g=s(8835),d=s(8661),u=s(5728),m=s(266),h=s(9816),p=s(8917),y=s(8966),f=s(2877),x=s(8352),w=s(9474),P=s(5993),j=s(1481),v=s(8081),S=s(5785),k=s(3329);let A=12;const b=()=>{const[e,t]=(0,c.lr)(),[s,r]=(0,a.useState)({}),[i,l]=(0,a.useState)([]),[n,b]=(0,a.useState)(!1),[L,_]=(0,a.useState)(null),[z,C]=(0,a.useState)(0),[E,T]=(0,a.useState)((0,y.L2)("page")?(0,y.L2)("page"):1),{selectedLanguage:W,selectedCurrency:F}=(0,a.useContext)(S.X);let Q;Q=(0,y.L2)("filters")?(0,y.L2)("filters"):{man_woman:[],category:[],maxPrice:"5000",minPrice:"0",product:[],sizes:[],page:E,perPage:A,currency:F,selectedLanguage:W};const[q,B]=(0,a.useState)([]),[I,R]=(0,a.useState)(Q),[Y,O]=(0,a.useState)(""),[N,G]=(0,a.useState)((0,y.L2)("sort")?(0,y.L2)("sort"):""),{t:H}=(0,o.$G)(),M=t=>{e.set("page",t),(0,y.RY)("page",t),T(t)},D=e=>{const t=(0,y.L2)("filters")[e];t&&t.forEach((e=>{const t=document.querySelectorAll('label[data-key="'.concat(e,'"]'));null===t||void 0===t||t.forEach((e=>e.classList.add("active_label")))}))};(0,a.useEffect)((()=>{const s=(0,y.L2)("filters"),a={};e.getAll("man_woman")&&"null"!=e.getAll("man_woman")&&void 0!==e.getAll("man_woman")&&""!==e.getAll("man_woman")?a.man_woman=e.get("man_woman"):s.man_woman?a.man_woman=s.man_woman:a.man_woman=[],e.getAll("category")&&"null"!=e.getAll("category")&&void 0!==e.getAll("category")&&""!==e.getAll("category")?a.category=e.get("category"):null!==s&&void 0!==s&&s.category?a.category=null===s||void 0===s?void 0:s.category:a.category=[],e.getAll("product")&&"null"!=e.getAll("product")&&void 0!==e.getAll("product")&&""!==e.getAll("product")?a.product=e.get("product"):null!==s&&void 0!==s&&s.product?a.product=null===s||void 0===s?void 0:s.product:a.product=[],e.getAll("sizes")&&"null"!=e.getAll("sizes")&&void 0!==e.getAll("sizes")&&""!==e.getAll("sizes")?a.sizes=e.get("sizes"):null!==s&&void 0!==s&&s.sizes?a.sizes=null===s||void 0===s?void 0:s.sizes:a.sizes=[],e.get("minPrice")?a.minPrice=e.get("minPrice"):null!==s&&void 0!==s&&s.minPrice?a.minPrice=null===s||void 0===s?void 0:s.minPrice:a.minPrice="",e.get("maxPrice")?a.maxPrice=e.get("maxPrice"):null!==s&&void 0!==s&&s.maxPrice?a.maxPrice=null===s||void 0===s?void 0:s.maxPrice:a.maxPrice="",e.get("page")?a.page=e.get("page"):(0,y.L2)("page")?a.page=(0,y.L2)("page"):a.page=E,e.get("perPage")?a.perPage=e.get("perPage"):a.perPage=A,e.get("currency")?a.currency=e.get("currency"):a.currency=F,e.get("selectedLanguage")?a.selectedLanguage=e.get("selectedLanguage"):a.selectedLanguage=W,e.get("sort")?a.sort=e.get("sort"):a.sort="",t(a)}),[]),(0,a.useEffect)((()=>{V(),e.size>0&&async function(){b(!0);try{const{data:t}=await(0,p.rQ)("/shop/discounts?".concat(e));if(!t)return(0,x.NI)(H("Whoops, something went wrong"));l(t.catalog),C(Math.ceil(t.total/A)),(t.total+A)/(A*E)<1&&M(1),J(),D("man_woman"),D("category"),D("product"),D("sizes")}catch(L){_(L)}finally{b(!1)}}()}),[H,E,A,e,F,W]),(0,a.useEffect)((()=>{!async function(){b(!0);try{const{data:e}=await(0,p.rQ)("/category");if(!e)return(0,x.NI)(H("Whoops, something went wrong"));r(e)}catch(L){_(L)}finally{b(!1)}}()}),[W]);const[U,X]=(0,a.useState)(!1),[Z,$]=(0,a.useState)(!1),J=()=>{const e=(0,y.L2)("filters");B([...e.category,...e.man_woman,...e.product,...e.sizes])},V=()=>{let s=Object.fromEntries(e);""!==I.man_woman&&(s.man_woman=I.man_woman),""!==I.category&&(s.category=I.category),""!==I.product&&(s.product=I.product),""!==I.sizes&&(s.sizes=I.sizes),""!==I.minPrice&&(s.minPrice=I.minPrice),""!==I.maxPrice&&(s.maxPrice=I.maxPrice),""!==I.page&&(s.page=E),""!==I.perPage&&(s.perPage=A),""!==I.currency&&(s.currency=F),""!==I.sort&&(s.sort=N),""!==I.selectedLanguage&&(s.selectedLanguage=W),t(s)};return console.log("searchParams",e.size),(0,k.jsxs)(w.uC,{children:[(0,k.jsxs)(w.Wt,{children:[(0,k.jsxs)(w.Q0,{children:[(0,k.jsx)(w.Cw,{$primary:!0,children:H("Shop")}),(0,k.jsxs)(w.X6,{children:[(0,k.jsx)(w.Gg,{children:(0,k.jsxs)(w.A1,{children:[(0,k.jsxs)(w.fS,{onClick:()=>{X((e=>!e)),$(!1)},children:[(0,k.jsx)("span",{children:H("SORT BY")}),(0,k.jsx)(w.a5,{type:"button","aria-label":"switch to open sort list","aria-expanded":"false",children:(0,k.jsx)(P.r,{})})]}),U&&(0,k.jsx)(g.j,{sort:N,setSort:G})]})}),(0,k.jsxs)(w.l6,{children:[(0,k.jsxs)(w.fS,{onClick:()=>{$((e=>!e)),X(!1)},children:[(0,k.jsx)("span",{children:H("FILTER BY")}),(0,k.jsx)(w.a5,{type:"button","aria-label":"switch to open filter list","aria-expanded":"false",children:(0,k.jsx)(P.r,{})})]}),Z&&(0,k.jsx)(w.kZ,{children:(0,k.jsx)(d.G,{filterState:s,setParams:V,filters:I,setFilters:R,setSearchParams:t,searchParams:e,selectedLanguage:W})})]})]})]}),Y&&(0,k.jsxs)(w.sZ,{children:[(0,k.jsxs)("span",{children:[H("Search results"),":"]})," ",Y,(0,k.jsx)(j.r,{"data-key":"search",onClick:()=>{O(""),e.delete("search")}})]}),(0,k.jsx)(w.tW,{children:q&&q.map(((e,t)=>(0,k.jsxs)("label",{"data-key":e,children:[(0,k.jsx)("span",{children:e}),(0,k.jsx)(j.r,{"data-key":e,onClick:e=>(e=>{const t=e.currentTarget.dataset.key,s=q.filter((e=>e!==t));B(s);const a=(0,y.L2)("filters"),r=Object.entries(a);for(const[l,n]of r){const e=[l,n];if(0!==e[1].length){if(Array.isArray(e[1])){const s=e[1].findIndex((e=>e===t));s>-1&&(e[1].splice(s,1),(0,y.RY)("filters",{...a,[e[0]]:e[1]}),R((t=>({...t,[e[0]]:e[1]}))),V())}Array.isArray(e[1])||("minPrice"==e[0]&&((0,y.RY)("filters",{...a,minPrice:"0"}),R((e=>({...e,minPrice:"0"}))),V()),"maxPrice"==e[0]&&((0,y.RY)("filters",{...a,maxPrice:"5000"}),R((e=>({...e,maxPrice:"5000"}))),V()))}}const i=document.querySelectorAll('label[data-key="'.concat(t,'"]'));null===i||void 0===i||i.forEach((e=>e.classList.remove("active_label")))})(e)})]},t)))}),(0,k.jsxs)(w.T5,{onClick:()=>{X(!1),$(!1)},children:[(0,k.jsx)(w.Px,{children:(0,k.jsx)(d.G,{filterState:s,setParams:V,filters:I,setFilters:R,setSearchParams:t,selectedLanguage:W})}),(0,k.jsxs)(w.zc,{children:[n?(0,f.j)():(0,f.l)(),L&&(0,x.NI)(H("Whoops, something went wrong")),i.length>0&&!L&&(0,k.jsx)(m.O,{products:i}),(0,k.jsx)(h.t,{totalPage:z,changePage:M,page:E}),0===i.length&&!n&&!L&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(v.s0,{style:{textAlign:"center"},children:H("Nothing found for these parameters...")}),(0,k.jsx)(v.s0,{style:{textAlign:"center"},children:H("Please, try to clear filter")})]})]})]})]}),(0,k.jsx)(u.f,{})]})},L=()=>{const e=(0,r.TH)(),t=(0,l.I0)();return window.scrollTo({top:0,left:0,behavior:"smooth"}),(0,a.useEffect)((()=>{t((0,n.T)())}),[e]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(i.H,{title:"Discounts",description_ua:"\u041d\u0430\u0439\u043a\u0440\u0430\u0449\u0438\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d \u043d\u0430\u0439\u043a\u0440\u0430\u0449\u043e\u0433\u043e \u043e\u0434\u044f\u0433\u0443 \u0442\u0430 \u0432\u0437\u0443\u0442\u0442\u044f, \u0430\u043a\u0441\u0435\u0441\u0443\u0430\u0440\u0456\u0432 \u0442\u043e\u0449\u043e \u0432 \u0404\u0432\u0440\u043e\u043f\u0456. \u0412\u0456\u0434\u043e\u043c\u0456 \u0431\u0440\u0435\u043d\u0434\u0438, \u043d\u0430\u0439\u043a\u0440\u0430\u0449\u0430 \u044f\u043a\u0456\u0441\u0442\u044c, \u0448\u0432\u0438\u0434\u043a\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430. \u0412\u0438 \u0431\u0443\u0434\u0435\u0442\u0435 \u0437\u0430\u0434\u043e\u0432\u043e\u043b\u0435\u043d\u0456 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u043c \u0456 \u043e\u0431\u0441\u043b\u0443\u0433\u043e\u0432\u0443\u0432\u0430\u043d\u043d\u044f\u043c. \u0412\u0456\u0434 \u043f\u0435\u0440\u0448\u043e\u0433\u043e \u043f\u0440\u043e\u0434\u0430\u0436\u0443 \u0434\u043e \u043f\u043e\u0432\u043d\u043e\u0433\u043e \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0443 \u0442\u0430 \u0432\u0441\u0435 \u043c\u0456\u0436 \u043d\u0438\u043c\u0438. \u041f\u043e\u0447\u043d\u0456\u0442\u044c \u0441\u044c\u043e\u0433\u043e\u0434\u043d\u0456! \u0428\u0432\u0438\u0434\u043a\u043e \u0442\u0430 \u043b\u0435\u0433\u043a\u043e. \u0412\u0441\u0435, \u0449\u043e \u0432\u0430\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e. \u0417\u0430\u043f\u043e\u0431\u0456\u0433\u0430\u043d\u043d\u044f \u0448\u0430\u0445\u0440\u0430\u0439\u0441\u0442\u0432\u0443. \u0411\u0435\u0437\u043f\u0435\u0447\u043d\u0438\u0439 \u043a\u043e\u0448\u0438\u043a \u0434\u043b\u044f \u043f\u043e\u043a\u0443\u043f\u043e\u043a.",keywords_ua:"quillis, Quillis, Quil, quil, \u043c\u0430\u0433\u0430\u0437\u0438\u043d, \u043d\u0430\u0439\u043a\u0440\u0430\u0449\u0435, \u043e\u0434\u044f\u0433, \u0432\u0437\u0443\u0442\u0442\u044f, \u0430\u043a\u0441\u0435\u0441\u0443\u0430\u0440\u0438, \u0431\u0440\u0435\u043d\u0434, \u044f\u043a\u0456\u0441\u0442\u044c, \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430, \u0448\u0432\u0438\u0434\u043a\u043e, \u0437\u0430\u0434\u043e\u0432\u043e\u043b\u0435\u043d\u0438\u0439, \u0442\u043e\u0432\u0430\u0440\u0438, \u043f\u043e\u0441\u043b\u0443\u0433\u0430, \u0414\u0438\u0432\u043e\u0432\u0438\u0436\u043d\u043e, \u041e\u0433\u043e\u043b\u043e\u0448\u0435\u043d\u043d\u044f, \u0423\u0433\u043e\u0434\u0430, \u0412\u0438\u043a\u043b\u0438\u043a, \u041f\u043e\u0440\u0456\u0432\u043d\u044f\u0439\u0442\u0435, \u041b\u0435\u0433\u043a\u043e, \u041f\u043e\u0441\u043f\u0456\u0448\u0430\u0439\u0442\u0435, \u041f\u043e\u043b\u0456\u043f\u0448\u0435\u043d\u043d\u044f, \u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0454\u043c\u043e, \u041c\u0430\u0433\u0456\u044f, \u0417\u0430\u0440\u0430\u0437, \u041f\u0440\u043e\u043f\u043e\u0437\u0438\u0446\u0456\u044f, \u0428\u0432\u0438\u0434\u043a\u0438\u0439, \u0427\u0443\u0434\u043e\u0432\u0438\u0439, \u0420\u0435\u0432\u043e\u043b\u044e\u0446\u0456\u0439\u043d\u0438\u0439, \u0421\u0435\u043d\u0441\u0430\u0446\u0456\u0439\u043d\u0438\u0439, \u041f\u0440\u0438\u0433\u043e\u043b\u043e\u043c\u0448\u043b\u0438\u0432\u0438\u0439, \u0420\u0430\u043f\u0442\u043e\u0432\u043e, \u0420\u043e\u0437\u0448\u0443\u043a, \u0412\u0438\u043f\u0430\u0434\u043a\u043e\u0432\u0438\u0439, \u041e\u0434\u044f\u0433, \u041e\u0444\u0456\u0446\u0456\u0439\u043d\u0438\u0439, \u041e\u0434\u044f\u0433, \u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u0438\u0439 \u043e\u0434\u044f\u0433, \u0412\u0435\u0440\u0445\u043d\u0456\u0439 \u043e\u0434\u044f\u0433, \u041e\u0434\u044f\u0433 \u0434\u043b\u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0432\u0456\u0434\u043f\u043e\u0447\u0438\u043d\u043a\u0443, \u041e\u0434\u044f\u0433 \u0434\u043b\u044f \u0441\u043d\u0443, \u041a\u0443\u043f\u0430\u043b\u044c\u043d\u0438\u043a\u0438, \u0415\u0442\u043d\u0456\u0447\u043d\u0438\u0439, \u041e\u0434\u044f\u0433, \u0414\u043b\u044f \u0432\u0430\u0433\u0456\u0442\u043d\u0438\u0445, \u0411\u0456\u0437\u043d\u0435\u0441, \u0423\u043d\u0456\u0444\u043e\u0440\u043c\u0430, \u0412\u0435\u0447\u0456\u0440\u043d\u0456\u0439 \u043e\u0434\u044f\u0433 , \u0412\u0456\u043d\u0442\u0430\u0436\u043d\u0438\u0439 \u043e\u0434\u044f\u0433, \u0414\u0438\u0437\u0430\u0439\u043d\u0435\u0440, \u0415\u0442\u0438\u043a\u0435\u0442\u043a\u0430, \u0410\u043a\u0441\u0435\u0441\u0443\u0430\u0440\u0438, \u0412\u0437\u0443\u0442\u0442\u044f, \u0420\u043e\u0431\u043e\u0447\u0438\u0439 \u043e\u0434\u044f\u0433, \u0420\u044e\u043a\u0437\u0430\u043a\u0438, \u041f\u043e\u044f\u0441\u0438, \u0441\u0443\u043c\u043a\u0438, \u041d\u0430\u043f\u043b\u0456\u0447\u043d\u0456 \u0441\u0443\u043c\u043a\u0438, \u041a\u0435\u043f\u043a\u0438, \u043f\u0430\u043d\u0441\u044c\u043a\u0456, \u0428\u043a\u0430\u0440\u043f\u0435\u0442\u043a\u0438, \u0420\u0435\u043c\u0435\u043d\u0456, \u0428\u043a\u0430\u0440\u043f\u0435\u0442\u043a\u0438, \u043e\u043a\u0443\u043b\u044f\u0440\u0438, \u0440\u0443\u043a\u0430\u0432\u0438\u0447\u043a\u0438, \u043d\u0430\u043a\u043b\u0435\u0439\u043a\u0438, \u0433\u0430\u043c\u0430\u043d\u0446\u0456, \u0417\u0438\u043c\u043e\u0432\u0456 \u0448\u0430\u043f\u043a\u0438, \u0448\u0430\u0440\u0444\u0438, \u0448\u0430\u043f\u043a\u0438, \u0428\u0430\u0440\u0444\u0438, \u0440\u0443\u043a\u0430\u0432\u0438\u0447\u043a\u0438, \u0412\u0435\u0440\u0445\u043d\u0456\u0439 \u043e\u0434\u044f\u0433, \u041f\u043e\u043b\u043e, \u0424\u0443\u0442\u0431\u043e\u043b\u043a\u0438, \u0411\u043e\u0434\u0456, \u041d\u0438\u0436\u043d\u044f \u0431\u0456\u043b\u0438\u0437\u043d\u0430, \u0425\u0443\u0434\u0456, \u0441\u0432\u0456\u0442\u0448\u043e\u0442\u0438, \u0441\u0432\u0435\u0442\u0440\u0438, \u041a\u0443\u0440\u0442\u043a\u0438, \u0421\u043e\u0440\u043e\u0447\u043a\u0438, \u0422\u043e\u043b\u0441\u0442\u043e\u0432\u043a\u0430, \u0442\u043e\u043b\u0441\u0442\u043e\u0432\u043a\u0438, \u0428\u0442\u0430\u043d\u0438, \u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u0456 \u043a\u043e\u0441\u0442\u044e\u043c\u0438, \u0422\u043e\u043f\u0438, \u0441\u0443\u043a\u043d\u0456, \u0441\u043f\u0456\u0434\u043d\u0438\u0446\u0456, \u043a\u043e\u0441\u0442\u044e\u043c\u0438, \u0428\u043e\u0440\u0442\u0438, \u043b\u0456\u0442\u043d\u0456 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0438, \u043a\u0443\u043f\u0430\u043b\u044c\u043d\u0438\u043a\u0438, \u043a\u0440\u043e\u0441\u0456\u0432\u043a\u0438, \u041a\u0435\u0434\u0438 , \u0417\u0438\u043c\u043e\u0432\u0435 \u0432\u0437\u0443\u0442\u0442\u044f",description:"The best store of the best clothes and shoes, accessories, etc in Europe. Famous brands, best quality, fast delivery. You will be satisfied with the product and service. From first sale to full scale, and everything in between. Get started today! Quick & Easy. Everything You Need. Fraud Prevention. Secure Shopping Cart.",keywords:"quillis, Quillis, Quil, quil, store, best, clothes, shoes, accessories, brand, quality, delivery, fast, satisfied, goods, service, Amazing, Announcing, Bargain, Challenge, Compare, Easy, Hurry, Improvement, Introducing, Magic, Now, Offer, Quick, Remarkable, Revolutionary, Sensational, Startling, Suddenly, Wanted, Casual, Wear, Formal, Attire,  Sportswear, Outerwear, Activewear, Sleepwear, Swimwear,  Ethnic, Clothing, Maternity, Business, Uniform, Evening Wear, Vintage Clothing,  Designer, Label, Accessories, Footwear, Workwear, Backpacks, Belt, bags, Shoulder bags, Caps, gentlemen, Socks, Belts, Socks, glasses, gloves, stickers, wallets, Winter hats, scarves, hats, Scarves, gloves, Outerwear, Polos, T-shirts, Body,Underwear, Hoodies, sweatshirts, sweaters, Jackets, Shirts, Sweatshirt, hoodies, Pants, Tracksuits, Tops, dresses, skirts, suits, Shorts, summer sets, swimwear, sneakers, Sneakers, Winter shoes"}),(0,k.jsx)(b,{})]})}}}]);
//# sourceMappingURL=563.9d91673b.chunk.js.map