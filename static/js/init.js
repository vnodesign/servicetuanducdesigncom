var offsetY=0,ticking=!1;function handleHeader(e){e>0?document.body.classList.add("has--scrolled"):document.body.classList.remove("has--scrolled")}window.addEventListener("scroll",(function(e){offsetY=window.scrollY,ticking||(window.requestAnimationFrame((function(){handleHeader(offsetY),ticking=!1})),ticking=!0)}));(function(){var t,e,i,n=function(t,e){return function(){return t.apply(e,arguments)}},o=[].indexOf||function(t){for(var e=0,i=this.length;i>e;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var i,n;for(i in e)n=e[i],null==t[i]&&(t[i]=n);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t}(),i=this.WeakMap||this.MozWeakMap||(i=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,i,n,o;for(e=i=0,n=(o=this.keys).length;n>i;e=++i)if(o[e]===t)return this.values[e]},t.prototype.set=function(t,e){var i,n,o,r;for(i=n=0,o=(r=this.keys).length;o>n;i=++n)if(r[i]===t)return void(this.values[i]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){}return t.notSupported=!0,t.prototype.observe=function(){},t}()),this.WOW=function(){function r(t){null==t&&(t={}),this.scrollCallback=n(this.scrollCallback,this),this.scrollHandler=n(this.scrollHandler,this),this.start=n(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),this.animationNameCache=new i}return r.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0},r.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():document.addEventListener("DOMContentLoaded",this.start),this.finished=[]},r.prototype.start=function(){var e,i,n,o;if(this.stopped=!1,this.boxes=function(){var t,i,n,o;for(o=[],t=0,i=(n=this.element.querySelectorAll("."+this.config.boxClass)).length;i>t;t++)e=n[t],o.push(e);return o}.call(this),this.all=function(){var t,i,n,o;for(o=[],t=0,i=(n=this.boxes).length;i>t;t++)e=n[t],o.push(e);return o}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else{for(i=0,n=(o=this.boxes).length;n>i;i++)e=o[i],this.applyStyle(e,!0);window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}return this.config.live?new t(function(t){return function(e){var i,n,o,r,s;for(s=[],o=0,r=e.length;r>o;o++)n=e[o],s.push(function(){var t,e,o,r;for(r=[],t=0,e=(o=n.addedNodes||[]).length;e>t;t++)i=o[t],r.push(this.doSync(i));return r}.call(t));return s}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},r.prototype.stop=function(){return this.stopped=!0,window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},r.prototype.sync=function(){return t.notSupported?this.doSync(this.element):void 0},r.prototype.doSync=function(t){var e,i,n,r,s;if(!this.stopped){if(null==t&&(t=this.element),1!==t.nodeType)return;for(s=[],i=0,n=(r=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass)).length;n>i;i++)e=r[i],o.call(this.all,e)<0?(this.applyStyle(e,!0),this.boxes.push(e),this.all.push(e),s.push(this.scrolled=!0)):s.push(void 0);return s}},r.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass},r.prototype.applyStyle=function(t,e){var i,n,o;return n=t.getAttribute("data-wow-duration"),i=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate(function(r){return function(){return r.customStyle(t,e,n,i,o)}}(this))},r.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},r.prototype.resetStyle=function(){var t,e,i,n,o;for(o=[],e=0,i=(n=this.boxes).length;i>e;e++)t=n[e],o.push(t.setAttribute("style","visibility: visible;"));return o},r.prototype.customStyle=function(t,e,i,n,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",i&&this.vendorSet(t.style,{animationDuration:i}),n&&this.vendorSet(t.style,{animationDelay:n}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},r.prototype.vendors=["moz","webkit"],r.prototype.vendorSet=function(t,e){var i,n,o,r;for(i in r=[],e)n=e[i],t[""+i]=n,r.push(function(){var e,r,s,a;for(a=[],e=0,r=(s=this.vendors).length;r>e;e++)o=s[e],a.push(t[""+o+i.charAt(0).toUpperCase()+i.substr(1)]=n);return a}.call(this));return r},r.prototype.vendorCSS=function(t,e){var i,n,o,r,s,a;for(i=(n=window.getComputedStyle(t)).getPropertyCSSValue(e),r=0,s=(a=this.vendors).length;s>r;r++)o=a[r],i=i||n.getPropertyCSSValue("-"+o+"-"+e);return i},r.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(i){e=window.getComputedStyle(t).getPropertyValue("animation-name")}return"none"===e?"":e},r.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},r.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},r.prototype.scrollHandler=function(){return this.scrolled=!0},r.prototype.scrollCallback=function(){var t;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,i,n,o;for(o=[],e=0,i=(n=this.boxes).length;i>e;e++)(t=n[e])&&(this.isVisible(t)?this.show(t):o.push(t));return o}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},r.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},r.prototype.isVisible=function(t){var e,i,n,o,r;return i=t.getAttribute("data-wow-offset")||this.config.offset,o=(r=window.pageYOffset)+Math.min(this.element.clientHeight,innerHeight)-i,e=(n=this.offsetTop(t))+t.clientHeight,o>=n&&e>=r},r.prototype.util=function(){return null!=this._util?this._util:this._util=new e},r.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},r}()}).call(this),(new WOW).init();