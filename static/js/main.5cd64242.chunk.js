(this["webpackJsonpjs-smaller-img"]=this["webpackJsonpjs-smaller-img"]||[]).push([[0],{121:function(e,n,a){},123:function(e,n,a){},124:function(e,n,a){"use strict";a.r(n);a(66);var r=a(6),t=a.n(r),o=a(58),c=a.n(o),i=(a(121),a(35)),l=a.n(i),s=a(59),u=a(60),m=a(61),d=a(63),g=a(62),f=a(64);a(123);var p=function(e){function n(e){var a;return Object(u.a)(this,n),(a=Object(d.a)(this,Object(g.a)(n).call(this,e))).reduceImage=function(e){var n=e.target.result;console.log("arrayBuffer --\x3e ",n),console.log("new Uint8Array(arrayBuffer) --\x3e ",new Uint8Array(n)),console.log("undefined --\x3e"),console.log(new Uint8Array(n).reduce);var a=btoa(new Uint8Array(n).reduce((function(e,n){return e+String.fromCharCode(n)}),""));console.log("base64String"),console.log(a)},a.handleImageUpload=function(){var e=Object(s.a)(l.a.mark((function e(n){var r,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.target.files[0],(t=new FileReader).onload=a.reduceImage,t.readAsArrayBuffer(r);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),a.state={originalImgSize:"",reducedImgSize:"",imageSrc:"",smallerImgSrc:""},a}return Object(f.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return t.a.createElement("div",{className:"App"},t.a.createElement("header",{className:"App-header"},t.a.createElement("p",null,"IE11 test"),t.a.createElement("input",{type:"file",accept:"image/*;capture=camera",onChange:this.handleImageUpload})))}}]),n}(t.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(t.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},65:function(e,n,a){e.exports=a(124)}},[[65,1,2]]]);
//# sourceMappingURL=main.5cd64242.chunk.js.map