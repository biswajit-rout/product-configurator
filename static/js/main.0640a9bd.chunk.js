(this["webpackJsonpdesign-editor"]=this["webpackJsonpdesign-editor"]||[]).push([[0],{35:function(e){e.exports=JSON.parse('[{"product_name":"Tshirt","product_id":"P0001","description":"Product description","product_image":"","stage_url":"/product-configurator/product/svg/model1.svg","product_data":[{"category_name":"Neck","category_id":"cat001","category_subtype":[{"type":"image","name":"Image Type","item_list":[{"item_id":"0gsdgd01","item_url":"/product-configurator/product/image/img1.jpg"},{"item_id":"001d34","item_url":"/product-configurator/product/image/img2.jpg"},{"item_id":"00jsh431","item_url":"/product-configurator/product/image/img3.jpeg"}]},{"type":"pattern","name":"Pattern Type","item_list":[{"item_id":"0650134","item_url":"/product-configurator/product/pattern/patter4.jpeg"},{"item_id":"0650f134","item_url":"/product-configurator/product/pattern/patter5.jpeg"},{"item_id":"065013kghkhjk54","item_url":"/product-configurator/product/pattern/patter6.jpeg"},{"item_id":"06650f134","item_url":"/product-configurator/product/pattern/patter7.jpeg"},{"item_id":"06501354","item_url":"/product-configurator/product/pattern/patter8.jpeg"}]},{"type":"color","name":"Colors","item_list":[{"item_id":"002253234","item_color":"#f022b19e"},{"item_id":"0022rt32","item_color":"#2262f09e"},{"item_id":"0042232","item_color":"#e630139e"},{"item_id":"0022r32","item_color":"#3f51b5"},{"item_id":"00rtrt2232","item_color":"#607d8b"}]}]},{"category_name":"bottom","category_id":"cat002","category_subtype":[{"type":"image","name":"Image Type","item_list":[{"item_id":"0gsdgd01","item_url":"/product-configurator/product/image/img1.jpg"},{"item_id":"001d34","item_url":"/product-configurator/product/image/img2.jpg"},{"item_id":"00jsh431","item_url":"/product-configurator/product/image/img3.jpeg"}]},{"type":"pattern","name":"Pattern Type","item_list":[{"item_id":"0650134","item_url":"/product-configurator/product/pattern/patter4.jpeg"},{"item_id":"0650f134","item_url":"/product-configurator/product/pattern/patter5.jpeg"},{"item_id":"06501f354","item_url":"/product-configurator/product/pattern/patter6.jpeg"},{"item_id":"06650f134","item_url":"/product-configurator/product/pattern/patter7.jpeg"},{"item_id":"0650fsss1354","item_url":"/product-configurator/product/pattern/patter8.jpeg"}]},{"type":"color","name":"Colors","item_list":[{"item_id":"002253234","item_color":"#f022b19e"},{"item_id":"0022rt32","item_color":"#2262f09e"},{"item_id":"0042232","item_color":"#e630139e"},{"item_id":"0022r32","item_color":"#3f51b5"},{"item_id":"00rtrt2232","item_color":"#607d8b"}]}]}]}]')},44:function(e,t,r){},45:function(e,t,r){},68:function(e,t,r){},70:function(e,t,r){},74:function(e,t,r){"use strict";r.r(t);var i=r(0),n=r.n(i),c=r(9),a=r.n(c),o=(r(44),r.p,r(45),r(11)),s=r(18),d=r.n(s),l=r(14),u=(r(68),r(1)),m=function(e){Object(l.b)();var t=Object(i.useState)([]),r=Object(o.a)(t,2),n=r[0],c=r[1];Object(i.useEffect)((function(){console.log(e.productData),e.productData&&c(e.productData)}),[e.productData]);return Object(u.jsx)("div",{className:"col-sm-4 left-panel",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-sm-12 category-panel",children:n&&n.map((function(t){return Object(u.jsxs)("div",{className:"category-items",children:[Object(u.jsx)("h6",{className:"custom-header",children:t.category_name}),t.category_subtype&&t.category_subtype.map((function(r){return Object(u.jsxs)("div",{className:"subtypes",children:[Object(u.jsx)("div",{className:"subtype_type",children:r.name}),Object(u.jsx)("div",{className:"item-list",children:r&&r.item_list.map((function(i){return Object(u.jsx)("div",{onClick:function(){return n=i,c=t.category_id,a=r.type,console.log("done",n),void e.onItemSelect({item:n,category_id:c,type:a});var n,c,a},className:"img-panel",children:"color"===r.type?Object(u.jsx)("div",{className:"color-item",style:{backgroundColor:i.item_color}}):Object(u.jsx)("img",{src:i.item_url,alt:""})},i.item_id)}))})]},r.name)}))]},t.category_id)}))})})})},p=(r(70),r(6)),g=r.n(p),j=r(13),h=r.n(j),b=r(23),f=r(12),_="http://www.w3.org/2000/svg",v="http://www.w3.org/1999/xlink",x=function(e){var t=e.elem,r=e.id,i=e.x,n=e.y,c=e.width,a=e.height,o=e.preserveAspectRatio,s=e.patternUnits,d=e.href,l=document.createElementNS(_,t);return l.setAttribute("id",r),i&&l.setAttribute("x",i),n&&l.setAttribute("y",n),c&&l.setAttribute("width",c),a&&l.setAttribute("height",a),l.setAttribute("xmlns:xlink",v),o&&l.setAttribute("preserveAspectRatio",o),s&&l.setAttribute("patternUnits",s),d&&l.setAttributeNS(v,"xlink:href",d),l},O=function(e,t,r,i){if(!y(e)){var n=document.createElementNS(_,"defs");e.appendChild(n)}var c="pattern_"+t,a={elem:"pattern",width:"pattern"!=i?"100%":100,height:"pattern"!=i?"100%":100,id:c},o=x("pattern"!=i?a:Object(f.a)(Object(f.a)({},a),{patternUnits:"userSpaceOnUse"})),s=g()("[data-id=".concat(t,"]"))[0].getBBox(),d=s.width,l=s.height,u={elem:"image",href:r.url,x:0,y:0,width:"pattern"!=i?d:100,height:"pattern"!=i?l:100,preserveAspectRatio:"none"},m=x(u);o.appendChild(m),g()("#".concat(c))&&g()("#".concat(c)).remove(),y(e).appendChild(o),g()("[data-id=".concat(t,"]")).attr("fill","url(#".concat(c,")"))},y=function(e){return g()(e).find("defs")[0]},w=function(e){return g()(e).find("svg")[0]},C=function(){var e=Object(b.a)(h.a.mark((function e(t,r){var i,n,c,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=14;break}i=w(t).cloneNode(!0),n=i.getElementsByTagName("image"),c=0;case 4:if(!(c<n.length)){e.next=12;break}return e.next=7,N(n[c].getAttribute("xlink:href"));case 7:a=e.sent,n[c].setAttribute("xlink:href",a.result);case 9:c++,e.next=4;break;case 12:console.log(i),k(i,r);case 14:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(h.a.mark((function e(t,r){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){var i=new XMLHttpRequest;i.responseType="blob",i.onload=function(){var t=new FileReader;t.onloadend=function(){e(this)},t.readAsDataURL(i.response)},i.open("GET",t),i.send()})));case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),k=function(e,t){if(e){var r=URL.createObjectURL(new Blob([e.outerHTML],{type:"image/svg+xml"})),i=new Image;i.onload=function(){var e=document.createElement("canvas");e.height=500,e.width=500,e.getContext("2d").drawImage(i,0,0),t&&t(e.toDataURL("image/png"))},i.src=r}},S=r(77),A=r(78),T=function(e){return Object(u.jsxs)(S.a,Object(f.a)(Object(f.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(u.jsx)(S.a.Header,{closeButton:!0,children:Object(u.jsx)(S.a.Title,{id:"contained-modal-title-vcenter",children:"Modal heading"})}),Object(u.jsx)(S.a.Body,{children:e.children}),Object(u.jsx)(S.a.Footer,{children:Object(u.jsx)(A.a,{onClick:e.onHide,children:"Close"})})]}))},I=function(e){var t=Object(i.useState)(!1),r=Object(o.a)(t,2),n=r[0],c=r[1],a=Object(i.useRef)(null),s=Object(i.useState)(null),l=Object(o.a)(s,2),m=l[0],p=l[1];Object(i.useEffect)((function(){e.productSvg&&d.a.get(e.productSvg).then((function(e){console.log("Product SVG",e.data),function(e,t){if(t){var r=x({elem:"svg"});r.innerHTML=t;var i=x({elem:"svg",width:"500px",height:"500px"});g()(i).attr({xmlns:"http://www.w3.org/2000/svg","xmlns:se":"http://svg-edit.googlecode.com","xmlns:xlink":v}).append(x({elem:"g"})),g()(r).find("path").map((function(e,t){g()(t).removeAttr("class"),g()(i).find("g").append(t.cloneNode(!0))})),g()(e).html(i)}}(a.current,e.data)})).catch((function(e){console.log("error",e)}))}),[e.productSvg]),Object(i.useEffect)((function(){if(console.log(g()(".rightPanel"),e.selectItem),e.selectItem){var t=e.selectItem,r=t.item,i=t.category_id,n=t.type;if(console.log(g()("[data-id=".concat(i,"]"))),console.log(a),w(a.current))if(["pattern","image"].includes(n)){var c=new Image;c.onload=function(){console.log(this.height);var e={height:this.height,width:this.width,url:r.item_url};O(w(a.current),i,e,n)},c.src=r.item_url}else!function(e,t,r){var i="pattern_"+t;g()("#".concat(i))&&g()("#".concat(i)).remove(),g()("[data-id=".concat(t,"]")).attr("fill",r)}(w(a.current),i,r.item_color)}return function(){}}),[e.selectItem,e.productSvg]);return Object(u.jsxs)("div",{className:"col-sm-8 rightPanel",children:[Object(u.jsx)("div",{className:"rightPanel__editorPanel",children:Object(u.jsx)("div",{className:"designContainer",ref:a,children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"500",version:"1.1",width:"500",x:"0px",y:"0px",viewBox:"0 0 500 500",children:Object(u.jsxs)("g",{children:[Object(u.jsx)("path",{"data-id":"cat001",fill:"red",stroke:"#0000ff",d:"M248.7,381.2C227.2,380.8,197.79999999999998,380.09999999999997,171.29999999999998,380C136.89999999999998,379.9,65.19999999999999,384,48.499999999999986,381.8C31.699999999999985,379.6,24.299999999999986,372.6,24.699999999999985,349.1S26.799999999999986,323.70000000000005,28.899999999999984,301C30.999999999999986,278.4,40.29999999999998,272.6,61.29999999999998,269C67.99999999999999,267.9,133.5,261.9,160.79999999999998,252.8C188.1,243.70000000000002,218.39999999999998,225.3,242.29999999999998,213.20000000000002C244.39999999999998,212.10000000000002,246.6,211.00000000000003,248.79999999999998,209.8L248.7,381.2Z",transform:"matrix(1,0,0,1,-21,-208)"}),Object(u.jsx)("path",{"data-id":"cat002",fill:"blue",stroke:"#000000",d:"M251.3,381.2C272.8,380.8,302.2,380.09999999999997,328.70000000000005,380C363.1,379.9,434.80000000000007,384,451.50000000000006,381.8C468.30000000000007,379.6,475.70000000000005,372.6,475.30000000000007,349.1S473.20000000000005,323.70000000000005,471.1000000000001,301C469.00000000000006,278.4,459.7000000000001,272.6,438.7000000000001,269C432.0000000000001,267.9,366.5000000000001,261.9,339.2000000000001,252.8C311.9000000000001,243.70000000000002,281.6000000000001,225.3,257.7000000000001,213.20000000000002C255.6000000000001,212.10000000000002,253.4000000000001,211.00000000000003,251.2000000000001,209.8L251.3,381.2Z",transform:"matrix(1,0,0,1,-21,-208)"})]})})})}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){C(a.current,(function(e){p(e),c(!0)}))},children:"Capture"}),Object(u.jsx)(T,{show:n,onHide:function(){return c(!1)},children:Object(u.jsx)("div",{className:"capture-img-area text-center",children:Object(u.jsx)("img",{src:m})})})]})},P=r(35),D=function(){var e=Object(i.useState)(null),t=Object(o.a)(e,2),r=t[0],n=t[1],c=P[0];return Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(m,{productData:c.product_data,onItemSelect:function(e){n(e)}}),Object(u.jsx)(I,{productSvg:c.stage_url,selectItem:r})]})})};var L=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h3",{className:"text-center",children:"T-Shirt Designer"}),Object(u.jsx)(D,{})]})},R=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,79)).then((function(t){var r=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;r(e),i(e),n(e),c(e),a(e)}))},B=(r(73),r(20)),E=r(36),M=r(37),U=r.n(M),F=r(38),H={productData:null},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;t.type,t.payload;return e},G=Object(B.combineReducers)({product:J}),Z=[U.a,F.a],q=Object(B.createStore)(G,Object(E.composeWithDevTools)(B.applyMiddleware.apply(void 0,Z)));a.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(l.a,{store:q,children:Object(u.jsx)(L,{})})}),document.getElementById("root")),R()}},[[74,1,2]]]);
//# sourceMappingURL=main.0640a9bd.chunk.js.map
