(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(30)},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),u=n.n(o),c=n(5),l=n(4),i=n(15),s="INCREMENT",v="DECREMENT",d="CHANGE_STEP",m=Object(l.combineReducers)({value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return e+t.payload;case v:return e-t.payload;default:return e}},step:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{value:5,label:5},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return t.payload;default:return e}}}),p=Object(l.createStore)(m,{},Object(i.devToolsEnhancer)()),f=n(6),E=n.n(f),b=Object(c.b)(function(e){return{value:e.value,step:e.step.value}},function(e){return{onIncrement:function(t){return e({type:s,payload:t})},onDecrement:function(t){return e({type:v,payload:t})}}})(function(e){var t=e.step,n=e.value,a=e.onIncrement,o=e.onDecrement;return r.a.createElement("div",{className:E.a.container},r.a.createElement("button",{type:"button",className:E.a.button,onClick:function(){return o(t)}},"\u2212"),r.a.createElement("div",{className:E.a.value},n," minutes"),r.a.createElement("button",{type:"button",className:E.a.button,onClick:function(){return a(t)}},"+"))}),_=n(17),g=[{value:5,label:5},{value:10,label:10},{value:15,label:15}],y=Object(c.b)(function(e){return{value:e.step}},function(e){return{onChange:function(t){return e(function(e){return{type:d,payload:e}}(t))}}})(function(e){var t=e.value,n=e.onChange;return r.a.createElement("div",{style:{width:400}},r.a.createElement(_.a,{options:g,value:t,onChange:n}))});console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/react-group-5",REACT_APP_API_KEY_3:"fgdfgdfgd",REACT_APP_API:"abcdef"}));var h={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"100vh"},C=function(){return r.a.createElement("div",{style:h},r.a.createElement(b,null),r.a.createElement(y,null))};n(29);u.a.render(r.a.createElement(c.a,{store:p},r.a.createElement(C,null)),document.getElementById("root"))},6:function(e,t,n){e.exports={container:"Timer_container__6sJJ1",value:"Timer_value__VgYHr",actions:"Timer_actions__1OMRn",button:"Timer_button__2sgge"}}},[[18,1,2]]]);
//# sourceMappingURL=main.ea305cd1.chunk.js.map