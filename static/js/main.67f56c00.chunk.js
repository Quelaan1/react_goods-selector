(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var c=s(4),n=s.n(c),a=s(5),o=s(6),r=s(8),i=s(7),l=s(1),d=s.n(l),u=(s(13),s(14),s(3)),b=s.n(u),h=s(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(r.a)(s,e);var t=Object(i.a)(s);function s(){var e;Object(a.a)(this,s);for(var c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={selectedGoods:"Jam"},e.ClearButton=function(){e.setState({selectedGoods:""})},e}return Object(o.a)(s,[{key:"switcher",value:function(e){e===this.state.selectedGoods?this.setState({selectedGoods:""}):this.setState({selectedGoods:e})}},{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(h.jsxs)("main",{className:"section container",children:[Object(h.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[t?"".concat(t," is selected"):"No goods selected",t&&Object(h.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.ClearButton})]}),Object(h.jsx)("table",{className:"table",children:Object(h.jsx)("tbody",{children:j.map((function(s){return Object(h.jsxs)("tr",{"data-cy":"Good",className:b()({"has-background-success-light":t===s}),children:[Object(h.jsx)("td",{children:Object(h.jsx)("button",{"data-cy":t!==s?"AddButton":"RemoveButton",type:"button",className:b()({button:t!==s,"button is-info":t===s}),onClick:function(){return e.switcher(s)},children:t!==s?"+":"-"})}),Object(h.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:s})]},s)}))})})]})}}]),s}(d.a.Component);n.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.67f56c00.chunk.js.map