function u(e,t,n,i){var r=e.split("?"),o="";if(r.length>1)for(var d=r[1].split("&"),c=0;c<d.length;c++){var s=d[c].split("=");i&&s[0]===t||(""===o?o="?":o+="&",o+=s[0]+"="+s[1])}return""===o?o="?":o+="&",o+=t+"="+n,r[0]+o}function MonetbilCloseWidget(){return close?(close=!1,document.body.removeChild(document.getElementById("widgetMask")),document.body.removeChild(document.getElementById("widgetContainer")),void 0):void(close=!0)}!function(){var e={};e.isDOM=document.getElementById,e.isMz=e.isDOM&&"Netscape"===navigator.appName,e.isOp=e.isDOM&&window.opera,e.isOp7=e.isOp&&document.readyState,e.isIE=document.all&&!e.isOp,e.isIE6=e.isIE&&"string"!=typeof document.body.style.maxHeight,e.isNS4=document.layers,window.nav=e}(),function(){var $={};$.isDomObject=function(e){return e&&e.getElementsByTagName&&1},$.Event={add:function(e,t,n){return e.addEventListener&&e.addEventListener(t,n,!1),e.attachEvent&&e.attachEvent("on"+t,n),$.Event},remove:function(e,t,n){return e.removeEventListener&&e.removeEventListener(t,n,!1),e.detachEvent&&e.detachEvent("on"+t,n),$.Event}},$.Get={doc:function(){return document.documentElement||document.body},width:function(){return window.innerWidth||$.Get.doc().clientWidth},height:function(){return window.innerHeight||$.Get.doc().clientHeight},id:function(e){return nav.isDOM&&e&&document.getElementById(e)||null},tag:function(e,t){var n=$.Get.id(e);if(n)e=n;else if(!$.isDomObject(e))return[];return e.getElementsByTagName(t)},style:function(e,t,n){var i,r=$.Get.id(e);if(r)e=r;else if(!$.isDomObject(e))return null;return i=e.currentStyle?e.currentStyle[n]:window.getComputedStyle&&document.defaultView.getComputedStyle(e,null).getPropertyValue(t),parseInt(i)},rect:function(e){var t=$.Get.id(e);if(t)e=t;else if(!$.isDomObject(e))return{};var n=0,i=0,r=e.offsetLeft,o=e.offsetTop,d=e.offsetParent;for(nav.isOp&&!nav.isOp7?(n=e.style.pixelWidth,i=e.style.pixelHeight):nav.isNS4?(n=e.clip.width,i=e.clip.height):(n=e.offsetWidth,i=e.offsetHeight);d&&null!==d;)r+=d.offsetLeft,o+=d.offsetTop,d=d.offsetParent;return{width:n,height:i,left:r,top:o}}},$.Set={css:function(e,t,n){var i=$.Get.id(e);if(i)e=i;else if(!$.isDomObject(e))return!1;return e.style[t]=n,$.Set},opacity:function(e,t){var n=$.Get.id(e);if(n)e=n;else if(!$.isDomObject(e))return!1;return nav.isIE?e.style.filter="alpha(opacity="+100*t+")":(e.style.opacity=t,e.style["-moz-opacity"]=t,e.style["-khtml-opacity"]=t),$.Set},rect:function(a,w,h,l,t){var b=$.Get.id(a);if(b)a=b;else if(!$.isDomObject(a))return!1;with(a.style)width=w+"px",height=h+"px",left=l+"px",top=t+"px";return $.Set}},$.Insert={at:function(e,t,n){var i,r,o=$.isDomObject;return o(e)&&o(t)&&(i=t.childNodes,n>=0&&n<i.length&&(r=i[n],t.insertBefore(e,r))),$.Insert},before:function(e,t){var n=$.isDomObject;return n(e)&&n(t)&&t.parentNode.insertBefore(e,t),$.Insert},after:function(e,t){var n=$.isDomObject;return n(e)&&n(t)&&t.parentNode.insertBefore(e,t.nextSibling),$.Insert},first:function(e,t){var n=$.isDomObject;return n(e)&&n(t)&&t.insertBefore(e,t.firstChild),$.Insert},end:function(e,t){var n=$.isDomObject;return n(e)&&n(t)&&t.insertBefore(e,null),$.Insert}},window.Dom=$}(),function(){var e={};e.cancel=function(t){return t?(t.preventDefault&&t.preventDefault(),t.returnValue=!1,e):!1},e.stop=function(t){return t?(t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0,e):!1},e.cancelAll=function(t){return t?(e.stop(t),e.cancel(t),e):!1},e.get=function(e){if(!e)return{};{var t=e.button;Dom.Get.doc()}if(nav.isIE)switch(t){case 1:t=0;break;case 4:t=1;break;case 2:t=2}return{button:t,type:e.type,target:e.target||e.srcElement,key:e.which||e.keyCode,X:e.clientX,Y:e.clientY,sX:e.screenX,sY:e.screenY}},e.getButton=function(t){return e.get(t).button},e.getType=function(t){return e.get(t).type},e.getTarget=function(t){return e.get(t).target},e.getKey=function(t){return e.get(t).key},window.Event=e}(),document.write('<link rel="stylesheet" type="text/css" href="https://www.monetbil.com/widget/css/monetbil-frame.css" media="screen" />');var P=document.getElementById("monetbil-payment-widget");if(P){P.href=u(P.href,"parent",location.href,1);var close=!1;P.onclick=function(e){function t(){var e,t,n,i,r,t=Dom.Get,o=t.id("widgetMask"),d=t.id("widgetContainer"),c=t.rect(document.body),s=c.width,a=c.height,u=t.width(),n=t.height(),l=window.pageXOffset?window.pageXOffset:0,f=window.pageYOffset?window.pageYOffset:0;o&&d&&(e=t.rect(d),i=(u-400)/2,i=i>0?i:40,r=(n-502)/2,r=r>0?r:0,t=502+2*r,n=400+2*i,d.style.left=l+i+"px",d.style.top=f+r+"px",o.style.width=(n>s?n:s)+"px",o.style.height=(t>a?t:a)+"px",t=d.firstChild,t&&(t.style.width="100%",t.style.height="100%"))}var n,i=document.getElementById("widgetMask"),r=document.getElementById("widgetContainer");return Event.cancel(e),i||r?!0:(i=document.createElement("div"),i.id="widgetMask",r=document.createElement("div"),r.id="widgetContainer",r.innerHTML='<iframe name="widget-frame" id="widget-frame" src="'+this.href+'" frameborder="0"></iframe>',document.body.appendChild(i),document.body.appendChild(r),Dom.Set.opacity(i,.7),n=document.getElementById("widget-frame"),n.onload=MonetbilCloseWidget,Dom.Event.add(window,"resize",function(){t()}),Dom.Event.add(window,"scroll",function(){t()}),t(),!1)}}document.getElementById("monetbil-payment-widget").click();