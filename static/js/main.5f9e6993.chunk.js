(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,r){e.exports=r.p+"static/media/logo.5d5d9eef.svg"},132:function(e,t,r){},140:function(e,t,r){"use strict";r.r(t);var n,o=r(0),a=r.n(o),c=r(7),s=r.n(c),i=(r(60),r(45)),u=r(46),l=r(47),p=r(53),d=r(48),f=r(54),m=r(26),h=r.n(m),v=(r(131),r(132),[{name:"Abbie",code:function(){return"rock"}},{name:"Andrew",code:function(){return"paper"}},{name:"Elizabeth",code:function(){var e=Math.random();return e<.33?"rock":e<.66?"paper":"scissors"}},{name:"Rohit",code:function(){return"scissors"}},{name:"Thomas",code:function(e){var t=e.totalScores.rock,r=e.totalScores.paper,n=t+r+e.totalScores.scissors;if(0===n)return"rock";var o=Math.random();return o<t/n?"paper":o<t/n+r/n?"scissors":"rock"}}]),y=r(51),k=r(52),b=r(5),w=r(49),S=r.n(w),g=r(50),E=(n={},Object(b.a)(n,"rock","\ud83e\udd18"),Object(b.a)(n,"paper","\ud83d\udcf0"),Object(b.a)(n,"scissors","\u2702"),n),j=function(e,t){var r=t;return"rock"===r?e.scissors-e.paper:"paper"===r?e.rock-e.scissors:"scissors"===t?e.paper-e.rock:void 0},O=function(e){var t=e.names,r=e.results,n=function(e,t){var r=t.roundScores,n=[],o=!0,a=!1,c=void 0;try{for(var s,i=e[Symbol.iterator]();!(o=(s=i.next()).done);o=!0){var u=s.value,l=[u],p=0,d=!0,f=!1,m=void 0;try{for(var h,v=t.roundChoices.entries()[Symbol.iterator]();!(d=(h=v.next()).done);d=!0){var y=h.value,b=Object(k.a)(y,2),w=b[0],S=b[1][u],g=E[S],O=j(r[w],S);p+=O;var C=O>0?"+":"";l.push("".concat(g," (").concat(C).concat(O,")"))}}catch(x){f=!0,m=x}finally{try{d||null==v.return||v.return()}finally{if(f)throw m}}l.push(p),n.push(l)}}catch(x){a=!0,c=x}finally{try{o||null==i.return||i.return()}finally{if(a)throw c}}return n}(t,r);n.sort(function(e,t){return t[t.length-1]-e[e.length-1]});var o=["Name"].concat(Object(y.a)(S()(1,1+r.roundChoices.length)),["Total"]);return a.a.createElement(g.a,null,a.a.createElement("thead",null,a.a.createElement("tr",null,o.map(function(e){return a.a.createElement("td",null,e)}))),n.map(function(e){return a.a.createElement("tr",{key:e[0]},e.map(function(e){return a.a.createElement("td",null,e)}))}))},C={entries:v,results:{totalScores:{rock:0,paper:0,scissors:0},roundScores:[],roundChoices:[]}},x=function(e){function t(){var e,r;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state=h()(C),r.getTotalScores=function(e,t){return{rock:e.rock+t.rock,scissors:e.scissors+t.scissors,paper:e.paper+t.paper}},r.playRound=function(){var e=r.state,t=e.entries,n=e.results,o={rock:0,paper:0,scissors:0},a={},c=!0,s=!1,u=void 0;try{for(var l,p=t[Symbol.iterator]();!(c=(l=p.next()).done);c=!0){var d=l.value,f=d.code(n);a[d.name]=f,o[f]++}}catch(m){s=!0,u=m}finally{try{c||null==p.return||p.return()}finally{if(s)throw u}}r.setState(function(e){return Object(i.a)({},e,{results:{totalScores:r.getTotalScores(e.results.totalScores,o),roundChoices:e.results.roundChoices.concat(a),roundScores:e.results.roundScores.concat(o)}})})},r.play=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;e>0&&(r.playRound(),setTimeout(function(){return r.play(e-1)},1e3))},r.reset=function(){var e=h()(C);r.setState(e)},r}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement("button",{onClick:function(){return e.play()}},"Play"),a.a.createElement("button",{onClick:this.reset},"Reset"),a.a.createElement(O,{results:this.state.results,names:this.state.entries.map(function(e){return e.name})}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},55:function(e,t,r){e.exports=r(140)},60:function(e,t,r){}},[[55,2,1]]]);
//# sourceMappingURL=main.5f9e6993.chunk.js.map