(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e,n){t.exports=n(30)},23:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),i=(n(23),n(1)),u=n(4),l=n(12),d=n(3),s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],f={city:null,days:[]},y=function(t){return Array.from(Array(5).keys()).map(function(e){return{temperature:m(e,t),dayName:E(e,t),dayOffset:e}})},m=function(t,e){return Math.round(e.list[8*t].main.temp)},E=function(t,e){return s[new Date(1e3*e.list[8*t].dt).getDay()]},p=function(t,e){return e.list.filter(function(e){return s[new Date(1e3*e.dt).getDay()]===t}).map(function(t){return{time:t.dt_txt,temperature:t.main.temp}})},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_FORECAST":return Object(d.a)({},t,{city:e.data.city.name,days:y(e.data),loading:!1,_coreData:e.data});case"SWITCH_TO_DAY":return Object(d.a)({},t,{days:[{temperature:m(e.day.dayOffset,t._coreData),dayName:E(e.day.dayOffset,t._coreData),dayOffset:e.day.dayOffset}],dayDetails:p(e.day.dayName,t._coreData)});case"SWITCH_TO_FULL_FORECAST":return Object(d.a)({},t,{dayDetails:null,days:y(t._coreData),loading:!1});case"SET_LOADING":return Object(d.a)({},t,{loading:!0});case"REMOVE_LOADING":return Object(d.a)({},t,{loading:!1});default:return t}},b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,g=Object(u.c)({forecast:O}),h=function(){return Object(u.e)(g,{},b(Object(u.a)(l.a)))},_=n(13),D=n(14),v=n(16),C=n(15),w=n(17),N=function(t){var e=t.onClick;return r.a.createElement("div",{className:"back-button",onClick:e},"Go Back to the full 5 day forecast")},S=function(t){var e=t.action,n=t.data,a=new URL("".concat("https://api.openweathermap.org/data/2.5/").concat(e)),r=Object(d.a)({},n,{appid:"7d55c4d6a93e6feeca80fb7e60445421",units:"metric"});return a.search=new URLSearchParams(r),fetch(a).then(function(t){if(t.ok)return t.json().then(function(t){return t});throw new Error("Network Error")}).catch(function(t){throw new Error("Network Error")})},j={getForecastByCoords:function(t){return S({action:"forecast",data:{lat:t.lat,lon:t.lon}})},getForecastByCity:function(t){return S({action:"forecast",data:{q:t}})}},T=function(t){return{type:"SET_FORECAST",data:t}},k=Object(i.b)(null,function(t){return{onClick:function(){return t({type:"SWITCH_TO_FULL_FORECAST"})}}})(N),L=function(t,e){"Enter"===e.key&&t(e.target.value)},A=function(t){var e=t.onCityEntered;return r.a.createElement("div",{className:"input"},r.a.createElement("input",{type:"text",placeholder:"Enter a city and hit Enter",onKeyPress:L.bind(null,e)}))},I=Object(i.b)(null,function(t){return{onCityEntered:function(e){return t((n=e,function(t){return t({type:"SET_LOADING"}),j.getForecastByCity(n).then(function(e){t(T(e))}).catch(function(e){t({type:"REMOVE_LOADING"}),alert("Error fetching data for ".concat(n," city"))})}));var n}}})(A),R=function(t){var e=t.details;return r.a.createElement("ul",{className:"details"},e.map(function(t){return r.a.createElement("li",{key:t.time},r.a.createElement("span",null,t.time),r.a.createElement("span",null,t.temperature,"\xb0 C"))}))},F=function(t){var e=t.data,n=t.dayDetails,a=t.onDayClick;return r.a.createElement("li",{onClick:a.bind(void 0,e)},r.a.createElement("div",{className:"header"},e.dayName),n?r.a.createElement(R,{details:n}):r.a.createElement("div",{className:"content"},e.temperature,"\xb0 C"))},G=Object(i.b)(function(t){return{dayDetails:t.forecast.dayDetails}},function(t){return{onDayClick:function(e){return t(function(t){return{type:"SWITCH_TO_DAY",day:t}}(e))}}})(F),M=function(t){var e=t.days;return r.a.createElement("ul",null,e.map(function(t,e){return r.a.createElement(G,{data:t,key:e})}))},B=Object(i.b)(function(t){return{days:t.forecast.days}},null)(M),U=function(t){var e=t.city;return r.a.createElement("div",{className:"message"},"Showing a forecast for ",r.a.createElement("strong",null,e||"..."))},W=Object(i.b)(function(t){return{city:t.forecast.city}},null)(U),H=function(){return r.a.createElement("div",{className:"loading"},"Loading...")},P=function(t){function e(){var t,n;Object(_.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(v.a)(this,(t=Object(C.a)(e)).call.apply(t,[this].concat(c)))).render=function(){return r.a.createElement("div",{className:"container"},n.props.isLoading?r.a.createElement(H,null):null,n.props.isSingleDay?r.a.createElement(k,null):r.a.createElement(I,null),r.a.createElement(W,null),r.a.createElement(B,null))},n}return Object(w.a)(e,t),Object(D.a)(e,[{key:"componentDidMount",value:function(){var t=this;navigator.geolocation.getCurrentPosition(function(e){t.props.onGeolocationRetrieved({lat:e.coords.latitude,lon:e.coords.longitude})},function(t){alert("no position available"),console.error(t)})}}]),e}(a.Component),V=Object(i.b)(function(t){return{isSingleDay:!!t.forecast.dayDetails,isLoading:t.forecast.loading}},function(t){return{onGeolocationRetrieved:function(e){return t(function(t){return function(e){return e({type:"SET_LOADING"}),j.getForecastByCoords(t).then(function(t){e(T(t))}).catch(function(t){e({type:"REMOVE_LOADING"}),alert("Error fetching data by coordinates")})}}(e))}}})(P),x=h(),J=function(){return r.a.createElement(i.a,{store:x},r.a.createElement(V,null))};o.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.14c48bd1.chunk.js.map