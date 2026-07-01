(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const b of m)if(b.type==="childList")for(const g of b.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&u(g)}).observe(document,{childList:!0,subtree:!0});function c(m){const b={};return m.integrity&&(b.integrity=m.integrity),m.referrerPolicy&&(b.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?b.credentials="include":m.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function u(m){if(m.ep)return;m.ep=!0;const b=c(m);fetch(m.href,b)}})();function z0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Us={exports:{}},Dn={};var l0;function xh(){if(l0)return Dn;l0=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(u,m,b){var g=null;if(b!==void 0&&(g=""+b),m.key!==void 0&&(g=""+m.key),"key"in m){b={};for(var j in m)j!=="key"&&(b[j]=m[j])}else b=m;return m=b.ref,{$$typeof:r,type:u,key:g,ref:m!==void 0?m:null,props:b}}return Dn.Fragment=s,Dn.jsx=c,Dn.jsxs=c,Dn}var n0;function vh(){return n0||(n0=1,Us.exports=xh()),Us.exports}var f=vh(),ks={exports:{}},I={};var i0;function yh(){if(i0)return I;i0=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),g=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),U=Symbol.iterator;function L(y){return y===null||typeof y!="object"?null:(y=U&&y[U]||y["@@iterator"],typeof y=="function"?y:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,H={};function Y(y,k,X){this.props=y,this.context=k,this.refs=H,this.updater=X||E}Y.prototype.isReactComponent={},Y.prototype.setState=function(y,k){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,k,"setState")},Y.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function J(){}J.prototype=Y.prototype;function Z(y,k,X){this.props=y,this.context=k,this.refs=H,this.updater=X||E}var ce=Z.prototype=new J;ce.constructor=Z,B(ce,Y.prototype),ce.isPureReactComponent=!0;var se=Array.isArray;function ye(){}var F={H:null,A:null,T:null,S:null},Te=Object.prototype.hasOwnProperty;function Ze(y,k,X){var Q=X.ref;return{$$typeof:r,type:y,key:k,ref:Q!==void 0?Q:null,props:X}}function Rt(y,k){return Ze(y.type,k,y.props)}function mt(y){return typeof y=="object"&&y!==null&&y.$$typeof===r}function Je(y){var k={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(X){return k[X]})}var _t=/\/+/g;function ht(y,k){return typeof y=="object"&&y!==null&&y.key!=null?Je(""+y.key):k.toString(36)}function Ce(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(ye,ye):(y.status="pending",y.then(function(k){y.status==="pending"&&(y.status="fulfilled",y.value=k)},function(k){y.status==="pending"&&(y.status="rejected",y.reason=k)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function _(y,k,X,Q,P){var ae=typeof y;(ae==="undefined"||ae==="boolean")&&(y=null);var pe=!1;if(y===null)pe=!0;else switch(ae){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(y.$$typeof){case r:case s:pe=!0;break;case T:return pe=y._init,_(pe(y._payload),k,X,Q,P)}}if(pe)return P=P(y),pe=Q===""?"."+ht(y,0):Q,se(P)?(X="",pe!=null&&(X=pe.replace(_t,"$&/")+"/"),_(P,k,X,"",function(Yl){return Yl})):P!=null&&(mt(P)&&(P=Rt(P,X+(P.key==null||y&&y.key===P.key?"":(""+P.key).replace(_t,"$&/")+"/")+pe)),k.push(P)),1;pe=0;var $e=Q===""?".":Q+":";if(se(y))for(var Oe=0;Oe<y.length;Oe++)Q=y[Oe],ae=$e+ht(Q,Oe),pe+=_(Q,k,X,ae,P);else if(Oe=L(y),typeof Oe=="function")for(y=Oe.call(y),Oe=0;!(Q=y.next()).done;)Q=Q.value,ae=$e+ht(Q,Oe++),pe+=_(Q,k,X,ae,P);else if(ae==="object"){if(typeof y.then=="function")return _(Ce(y),k,X,Q,P);throw k=String(y),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return pe}function q(y,k,X){if(y==null)return y;var Q=[],P=0;return _(y,Q,"","",function(ae){return k.call(X,ae,P++)}),Q}function W(y){if(y._status===-1){var k=y._result;k=k(),k.then(function(X){(y._status===0||y._status===-1)&&(y._status=1,y._result=X)},function(X){(y._status===0||y._status===-1)&&(y._status=2,y._result=X)}),y._status===-1&&(y._status=0,y._result=k)}if(y._status===1)return y._result.default;throw y._result}var ge=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)},Se={map:q,forEach:function(y,k,X){q(y,function(){k.apply(this,arguments)},X)},count:function(y){var k=0;return q(y,function(){k++}),k},toArray:function(y){return q(y,function(k){return k})||[]},only:function(y){if(!mt(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return I.Activity=S,I.Children=Se,I.Component=Y,I.Fragment=c,I.Profiler=m,I.PureComponent=Z,I.StrictMode=u,I.Suspense=p,I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,I.__COMPILER_RUNTIME={__proto__:null,c:function(y){return F.H.useMemoCache(y)}},I.cache=function(y){return function(){return y.apply(null,arguments)}},I.cacheSignal=function(){return null},I.cloneElement=function(y,k,X){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var Q=B({},y.props),P=y.key;if(k!=null)for(ae in k.key!==void 0&&(P=""+k.key),k)!Te.call(k,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&k.ref===void 0||(Q[ae]=k[ae]);var ae=arguments.length-2;if(ae===1)Q.children=X;else if(1<ae){for(var pe=Array(ae),$e=0;$e<ae;$e++)pe[$e]=arguments[$e+2];Q.children=pe}return Ze(y.type,P,Q)},I.createContext=function(y){return y={$$typeof:g,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:b,_context:y},y},I.createElement=function(y,k,X){var Q,P={},ae=null;if(k!=null)for(Q in k.key!==void 0&&(ae=""+k.key),k)Te.call(k,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(P[Q]=k[Q]);var pe=arguments.length-2;if(pe===1)P.children=X;else if(1<pe){for(var $e=Array(pe),Oe=0;Oe<pe;Oe++)$e[Oe]=arguments[Oe+2];P.children=$e}if(y&&y.defaultProps)for(Q in pe=y.defaultProps,pe)P[Q]===void 0&&(P[Q]=pe[Q]);return Ze(y,ae,P)},I.createRef=function(){return{current:null}},I.forwardRef=function(y){return{$$typeof:j,render:y}},I.isValidElement=mt,I.lazy=function(y){return{$$typeof:T,_payload:{_status:-1,_result:y},_init:W}},I.memo=function(y,k){return{$$typeof:h,type:y,compare:k===void 0?null:k}},I.startTransition=function(y){var k=F.T,X={};F.T=X;try{var Q=y(),P=F.S;P!==null&&P(X,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(ye,ge)}catch(ae){ge(ae)}finally{k!==null&&X.types!==null&&(k.types=X.types),F.T=k}},I.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},I.use=function(y){return F.H.use(y)},I.useActionState=function(y,k,X){return F.H.useActionState(y,k,X)},I.useCallback=function(y,k){return F.H.useCallback(y,k)},I.useContext=function(y){return F.H.useContext(y)},I.useDebugValue=function(){},I.useDeferredValue=function(y,k){return F.H.useDeferredValue(y,k)},I.useEffect=function(y,k){return F.H.useEffect(y,k)},I.useEffectEvent=function(y){return F.H.useEffectEvent(y)},I.useId=function(){return F.H.useId()},I.useImperativeHandle=function(y,k,X){return F.H.useImperativeHandle(y,k,X)},I.useInsertionEffect=function(y,k){return F.H.useInsertionEffect(y,k)},I.useLayoutEffect=function(y,k){return F.H.useLayoutEffect(y,k)},I.useMemo=function(y,k){return F.H.useMemo(y,k)},I.useOptimistic=function(y,k){return F.H.useOptimistic(y,k)},I.useReducer=function(y,k,X){return F.H.useReducer(y,k,X)},I.useRef=function(y){return F.H.useRef(y)},I.useState=function(y){return F.H.useState(y)},I.useSyncExternalStore=function(y,k,X){return F.H.useSyncExternalStore(y,k,X)},I.useTransition=function(){return F.H.useTransition()},I.version="19.2.4",I}var r0;function Js(){return r0||(r0=1,ks.exports=yh()),ks.exports}var N=Js();const Ra=z0(N);var Hs={exports:{}},Un={},Ls={exports:{}},Bs={};var o0;function Sh(){return o0||(o0=1,(function(r){function s(_,q){var W=_.length;_.push(q);e:for(;0<W;){var ge=W-1>>>1,Se=_[ge];if(0<m(Se,q))_[ge]=q,_[W]=Se,W=ge;else break e}}function c(_){return _.length===0?null:_[0]}function u(_){if(_.length===0)return null;var q=_[0],W=_.pop();if(W!==q){_[0]=W;e:for(var ge=0,Se=_.length,y=Se>>>1;ge<y;){var k=2*(ge+1)-1,X=_[k],Q=k+1,P=_[Q];if(0>m(X,W))Q<Se&&0>m(P,X)?(_[ge]=P,_[Q]=W,ge=Q):(_[ge]=X,_[k]=W,ge=k);else if(Q<Se&&0>m(P,W))_[ge]=P,_[Q]=W,ge=Q;else break e}}return q}function m(_,q){var W=_.sortIndex-q.sortIndex;return W!==0?W:_.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;r.unstable_now=function(){return b.now()}}else{var g=Date,j=g.now();r.unstable_now=function(){return g.now()-j}}var p=[],h=[],T=1,S=null,U=3,L=!1,E=!1,B=!1,H=!1,Y=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function ce(_){for(var q=c(h);q!==null;){if(q.callback===null)u(h);else if(q.startTime<=_)u(h),q.sortIndex=q.expirationTime,s(p,q);else break;q=c(h)}}function se(_){if(B=!1,ce(_),!E)if(c(p)!==null)E=!0,ye||(ye=!0,Je());else{var q=c(h);q!==null&&Ce(se,q.startTime-_)}}var ye=!1,F=-1,Te=5,Ze=-1;function Rt(){return H?!0:!(r.unstable_now()-Ze<Te)}function mt(){if(H=!1,ye){var _=r.unstable_now();Ze=_;var q=!0;try{e:{E=!1,B&&(B=!1,J(F),F=-1),L=!0;var W=U;try{t:{for(ce(_),S=c(p);S!==null&&!(S.expirationTime>_&&Rt());){var ge=S.callback;if(typeof ge=="function"){S.callback=null,U=S.priorityLevel;var Se=ge(S.expirationTime<=_);if(_=r.unstable_now(),typeof Se=="function"){S.callback=Se,ce(_),q=!0;break t}S===c(p)&&u(p),ce(_)}else u(p);S=c(p)}if(S!==null)q=!0;else{var y=c(h);y!==null&&Ce(se,y.startTime-_),q=!1}}break e}finally{S=null,U=W,L=!1}q=void 0}}finally{q?Je():ye=!1}}}var Je;if(typeof Z=="function")Je=function(){Z(mt)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,ht=_t.port2;_t.port1.onmessage=mt,Je=function(){ht.postMessage(null)}}else Je=function(){Y(mt,0)};function Ce(_,q){F=Y(function(){_(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(_){_.callback=null},r.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Te=0<_?Math.floor(1e3/_):5},r.unstable_getCurrentPriorityLevel=function(){return U},r.unstable_next=function(_){switch(U){case 1:case 2:case 3:var q=3;break;default:q=U}var W=U;U=q;try{return _()}finally{U=W}},r.unstable_requestPaint=function(){H=!0},r.unstable_runWithPriority=function(_,q){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var W=U;U=_;try{return q()}finally{U=W}},r.unstable_scheduleCallback=function(_,q,W){var ge=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ge+W:ge):W=ge,_){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=W+Se,_={id:T++,callback:q,priorityLevel:_,startTime:W,expirationTime:Se,sortIndex:-1},W>ge?(_.sortIndex=W,s(h,_),c(p)===null&&_===c(h)&&(B?(J(F),F=-1):B=!0,Ce(se,W-ge))):(_.sortIndex=Se,s(p,_),E||L||(E=!0,ye||(ye=!0,Je()))),_},r.unstable_shouldYield=Rt,r.unstable_wrapCallback=function(_){var q=U;return function(){var W=U;U=q;try{return _.apply(this,arguments)}finally{U=W}}}})(Bs)),Bs}var s0;function Eh(){return s0||(s0=1,Ls.exports=Sh()),Ls.exports}var Ys={exports:{}},Ke={};var c0;function wh(){if(c0)return Ke;c0=1;var r=Js();function s(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)h+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(s(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},m=Symbol.for("react.portal");function b(p,h,T){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:S==null?null:""+S,children:p,containerInfo:h,implementation:T}}var g=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Ke.createPortal=function(p,h){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(s(299));return b(p,h,null,T)},Ke.flushSync=function(p){var h=g.T,T=u.p;try{if(g.T=null,u.p=2,p)return p()}finally{g.T=h,u.p=T,u.d.f()}},Ke.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(p,h))},Ke.prefetchDNS=function(p){typeof p=="string"&&u.d.D(p)},Ke.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var T=h.as,S=j(T,h.crossOrigin),U=typeof h.integrity=="string"?h.integrity:void 0,L=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;T==="style"?u.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:U,fetchPriority:L}):T==="script"&&u.d.X(p,{crossOrigin:S,integrity:U,fetchPriority:L,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ke.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var T=j(h.as,h.crossOrigin);u.d.M(p,{crossOrigin:T,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&u.d.M(p)},Ke.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var T=h.as,S=j(T,h.crossOrigin);u.d.L(p,T,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ke.preloadModule=function(p,h){if(typeof p=="string")if(h){var T=j(h.as,h.crossOrigin);u.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:T,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else u.d.m(p)},Ke.requestFormReset=function(p){u.d.r(p)},Ke.unstable_batchedUpdates=function(p,h){return p(h)},Ke.useFormState=function(p,h,T){return g.H.useFormState(p,h,T)},Ke.useFormStatus=function(){return g.H.useHostTransitionStatus()},Ke.version="19.2.4",Ke}var u0;function jh(){if(u0)return Ys.exports;u0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),Ys.exports=wh(),Ys.exports}var f0;function zh(){if(f0)return Un;f0=1;var r=Eh(),s=Js(),c=jh();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(b(e)!==e)throw Error(u(188))}function h(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return p(n),e;if(i===l)return p(n),t;i=i.sibling}throw Error(u(188))}if(a.return!==l.return)a=n,l=i;else{for(var o=!1,d=n.child;d;){if(d===a){o=!0,a=n,l=i;break}if(d===l){o=!0,l=n,a=i;break}d=d.sibling}if(!o){for(d=i.child;d;){if(d===a){o=!0,a=i,l=n;break}if(d===l){o=!0,l=i,a=n;break}d=d.sibling}if(!o)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,U=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),Ze=Symbol.for("react.activity"),Rt=Symbol.for("react.memo_cache_sentinel"),mt=Symbol.iterator;function Je(e){return e===null||typeof e!="object"?null:(e=mt&&e[mt]||e["@@iterator"],typeof e=="function"?e:null)}var _t=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_t?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case Y:return"Profiler";case H:return"StrictMode";case se:return"Suspense";case ye:return"SuspenseList";case Ze:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case Z:return e.displayName||"Context";case J:return(e._context.displayName||"Context")+".Consumer";case ce:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:ht(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return ht(e(t))}catch{}}return null}var Ce=Array.isArray,_=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ge=[],Se=-1;function y(e){return{current:e}}function k(e){0>Se||(e.current=ge[Se],ge[Se]=null,Se--)}function X(e,t){Se++,ge[Se]=e.current,e.current=t}var Q=y(null),P=y(null),ae=y(null),pe=y(null);function $e(e,t){switch(X(ae,t),X(P,e),X(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Nd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Nd(t),e=Ad(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}k(Q),X(Q,e)}function Oe(){k(Q),k(P),k(ae)}function Yl(e){e.memoizedState!==null&&X(pe,e);var t=Q.current,a=Ad(t,e.type);t!==a&&(X(P,e),X(Q,a))}function Xn(e){P.current===e&&(k(Q),k(P)),pe.current===e&&(k(pe),On._currentValue=W)}var gr,tc;function Ca(e){if(gr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);gr=t&&t[1]||"",tc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gr+e+tc}var br=!1;function xr(e,t){if(!e||br)return"";br=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(O){var M=O}Reflect.construct(e,[],D)}else{try{D.call()}catch(O){M=O}e.call(D.prototype)}}else{try{throw Error()}catch(O){M=O}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(O){if(O&&M&&typeof O.stack=="string")return[O.stack,M.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),o=i[0],d=i[1];if(o&&d){var x=o.split(`
`),A=d.split(`
`);for(n=l=0;l<x.length&&!x[l].includes("DetermineComponentFrameRoot");)l++;for(;n<A.length&&!A[n].includes("DetermineComponentFrameRoot");)n++;if(l===x.length||n===A.length)for(l=x.length-1,n=A.length-1;1<=l&&0<=n&&x[l]!==A[n];)n--;for(;1<=l&&0<=n;l--,n--)if(x[l]!==A[n]){if(l!==1||n!==1)do if(l--,n--,0>n||x[l]!==A[n]){var R=`
`+x[l].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=l&&0<=n);break}}}finally{br=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ca(a):""}function $0(e,t){switch(e.tag){case 26:case 27:case 5:return Ca(e.type);case 16:return Ca("Lazy");case 13:return e.child!==t&&t!==null?Ca("Suspense Fallback"):Ca("Suspense");case 19:return Ca("SuspenseList");case 0:case 15:return xr(e.type,!1);case 11:return xr(e.type.render,!1);case 1:return xr(e.type,!0);case 31:return Ca("Activity");default:return""}}function ac(e){try{var t="",a=null;do t+=$0(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var vr=Object.prototype.hasOwnProperty,yr=r.unstable_scheduleCallback,Sr=r.unstable_cancelCallback,W0=r.unstable_shouldYield,F0=r.unstable_requestPaint,nt=r.unstable_now,I0=r.unstable_getCurrentPriorityLevel,lc=r.unstable_ImmediatePriority,nc=r.unstable_UserBlockingPriority,Gn=r.unstable_NormalPriority,P0=r.unstable_LowPriority,ic=r.unstable_IdlePriority,ep=r.log,tp=r.unstable_setDisableYieldValue,ql=null,it=null;function ra(e){if(typeof ep=="function"&&tp(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(ql,e)}catch{}}var rt=Math.clz32?Math.clz32:np,ap=Math.log,lp=Math.LN2;function np(e){return e>>>=0,e===0?32:31-(ap(e)/lp|0)|0}var Qn=256,Vn=262144,Zn=4194304;function Da(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Jn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var d=l&134217727;return d!==0?(l=d&~i,l!==0?n=Da(l):(o&=d,o!==0?n=Da(o):a||(a=d&~e,a!==0&&(n=Da(a))))):(d=l&~i,d!==0?n=Da(d):o!==0?n=Da(o):a||(a=l&~e,a!==0&&(n=Da(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Xl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ip(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rc(){var e=Zn;return Zn<<=1,(Zn&62914560)===0&&(Zn=4194304),e}function Er(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Gl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rp(e,t,a,l,n,i){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,x=e.expirationTimes,A=e.hiddenUpdates;for(a=o&~a;0<a;){var R=31-rt(a),D=1<<R;d[R]=0,x[R]=-1;var M=A[R];if(M!==null)for(A[R]=null,R=0;R<M.length;R++){var O=M[R];O!==null&&(O.lane&=-536870913)}a&=~D}l!==0&&oc(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function oc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-rt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function sc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-rt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function cc(e,t){var a=t&-t;return a=(a&42)!==0?1:wr(a),(a&(e.suspendedLanes|t))!==0?0:a}function wr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function jr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function uc(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Wd(e.type))}function fc(e,t){var a=q.p;try{return q.p=e,t()}finally{q.p=a}}var oa=Math.random().toString(36).slice(2),qe="__reactFiber$"+oa,Fe="__reactProps$"+oa,el="__reactContainer$"+oa,zr="__reactEvents$"+oa,op="__reactListeners$"+oa,sp="__reactHandles$"+oa,dc="__reactResources$"+oa,Ql="__reactMarker$"+oa;function Nr(e){delete e[qe],delete e[Fe],delete e[zr],delete e[op],delete e[sp]}function tl(e){var t=e[qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[el]||a[qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Dd(e);e!==null;){if(a=e[qe])return a;e=Dd(e)}return t}e=a,a=e.parentNode}return null}function al(e){if(e=e[qe]||e[el]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function ll(e){var t=e[dc];return t||(t=e[dc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Be(e){e[Ql]=!0}var pc=new Set,mc={};function Ua(e,t){nl(e,t),nl(e+"Capture",t)}function nl(e,t){for(mc[e]=t,e=0;e<t.length;e++)pc.add(t[e])}var cp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hc={},gc={};function up(e){return vr.call(gc,e)?!0:vr.call(hc,e)?!1:cp.test(e)?gc[e]=!0:(hc[e]=!0,!1)}function Kn(e,t,a){if(up(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function $n(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Yt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fp(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ar(e){if(!e._valueTracker){var t=bc(e)?"checked":"value";e._valueTracker=fp(e,t,""+e[t])}}function xc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=bc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Wn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var dp=/[\n"\\]/g;function bt(e){return e.replace(dp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Mr(e,t,a,l,n,i,o,d){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+gt(t)):e.value!==""+gt(t)&&(e.value=""+gt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Tr(e,o,gt(t)):a!=null?Tr(e,o,gt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+gt(d):e.removeAttribute("name")}function vc(e,t,a,l,n,i,o,d){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ar(e);return}a=a!=null?""+gt(a):"",t=t!=null?""+gt(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=d?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Ar(e)}function Tr(e,t,a){t==="number"&&Wn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function il(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+gt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function yc(e,t,a){if(t!=null&&(t=""+gt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+gt(a):""}function Sc(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(Ce(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=gt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Ar(e)}function rl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var pp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ec(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||pp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function wc(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Ec(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Ec(e,i,t[i])}function Or(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fn(e){return hp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qt(){}var Rr=null;function _r(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ol=null,sl=null;function jc(e){var t=al(e);if(t&&(e=t.stateNode)){var a=e[Fe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Mr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+bt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Fe]||null;if(!n)throw Error(u(90));Mr(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&xc(l)}break e;case"textarea":yc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&il(e,!!a.multiple,t,!1)}}}var Cr=!1;function zc(e,t,a){if(Cr)return e(t,a);Cr=!0;try{var l=e(t);return l}finally{if(Cr=!1,(ol!==null||sl!==null)&&(Li(),ol&&(t=ol,e=sl,sl=ol=null,jc(t),e)))for(t=0;t<e.length;t++)jc(e[t])}}function Zl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Fe]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dr=!1;if(Xt)try{var Jl={};Object.defineProperty(Jl,"passive",{get:function(){Dr=!0}}),window.addEventListener("test",Jl,Jl),window.removeEventListener("test",Jl,Jl)}catch{Dr=!1}var sa=null,Ur=null,In=null;function Nc(){if(In)return In;var e,t=Ur,a=t.length,l,n="value"in sa?sa.value:sa.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var o=a-e;for(l=1;l<=o&&t[a-l]===n[i-l];l++);return In=n.slice(e,1<l?1-l:void 0)}function Pn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ei(){return!0}function Ac(){return!1}function Ie(e){function t(a,l,n,i,o){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ei:Ac,this.isPropagationStopped=Ac,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ei)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ei)},persist:function(){},isPersistent:ei}),t}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ti=Ie(ka),Kl=S({},ka,{view:0,detail:0}),gp=Ie(Kl),kr,Hr,$l,ai=S({},Kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Br,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$l&&($l&&e.type==="mousemove"?(kr=e.screenX-$l.screenX,Hr=e.screenY-$l.screenY):Hr=kr=0,$l=e),kr)},movementY:function(e){return"movementY"in e?e.movementY:Hr}}),Mc=Ie(ai),bp=S({},ai,{dataTransfer:0}),xp=Ie(bp),vp=S({},Kl,{relatedTarget:0}),Lr=Ie(vp),yp=S({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Sp=Ie(yp),Ep=S({},ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wp=Ie(Ep),jp=S({},ka,{data:0}),Tc=Ie(jp),zp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Np={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ap={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ap[e])?!!t[e]:!1}function Br(){return Mp}var Tp=S({},Kl,{key:function(e){if(e.key){var t=zp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Np[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Br,charCode:function(e){return e.type==="keypress"?Pn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Op=Ie(Tp),Rp=S({},ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oc=Ie(Rp),_p=S({},Kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Br}),Cp=Ie(_p),Dp=S({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Up=Ie(Dp),kp=S({},ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hp=Ie(kp),Lp=S({},ka,{newState:0,oldState:0}),Bp=Ie(Lp),Yp=[9,13,27,32],Yr=Xt&&"CompositionEvent"in window,Wl=null;Xt&&"documentMode"in document&&(Wl=document.documentMode);var qp=Xt&&"TextEvent"in window&&!Wl,Rc=Xt&&(!Yr||Wl&&8<Wl&&11>=Wl),_c=" ",Cc=!1;function Dc(e,t){switch(e){case"keyup":return Yp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cl=!1;function Xp(e,t){switch(e){case"compositionend":return Uc(t);case"keypress":return t.which!==32?null:(Cc=!0,_c);case"textInput":return e=t.data,e===_c&&Cc?null:e;default:return null}}function Gp(e,t){if(cl)return e==="compositionend"||!Yr&&Dc(e,t)?(e=Nc(),In=Ur=sa=null,cl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rc&&t.locale!=="ko"?null:t.data;default:return null}}var Qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qp[e.type]:t==="textarea"}function Hc(e,t,a,l){ol?sl?sl.push(l):sl=[l]:ol=l,t=Vi(t,"onChange"),0<t.length&&(a=new ti("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Fl=null,Il=null;function Vp(e){yd(e,0)}function li(e){var t=Vl(e);if(xc(t))return e}function Lc(e,t){if(e==="change")return t}var Bc=!1;if(Xt){var qr;if(Xt){var Xr="oninput"in document;if(!Xr){var Yc=document.createElement("div");Yc.setAttribute("oninput","return;"),Xr=typeof Yc.oninput=="function"}qr=Xr}else qr=!1;Bc=qr&&(!document.documentMode||9<document.documentMode)}function qc(){Fl&&(Fl.detachEvent("onpropertychange",Xc),Il=Fl=null)}function Xc(e){if(e.propertyName==="value"&&li(Il)){var t=[];Hc(t,Il,e,_r(e)),zc(Vp,t)}}function Zp(e,t,a){e==="focusin"?(qc(),Fl=t,Il=a,Fl.attachEvent("onpropertychange",Xc)):e==="focusout"&&qc()}function Jp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return li(Il)}function Kp(e,t){if(e==="click")return li(t)}function $p(e,t){if(e==="input"||e==="change")return li(t)}function Wp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:Wp;function Pl(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!vr.call(t,n)||!ot(e[n],t[n]))return!1}return!0}function Gc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qc(e,t){var a=Gc(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gc(a)}}function Vc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Wn(e.document)}return t}function Gr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Fp=Xt&&"documentMode"in document&&11>=document.documentMode,ul=null,Qr=null,en=null,Vr=!1;function Jc(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vr||ul==null||ul!==Wn(l)||(l=ul,"selectionStart"in l&&Gr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),en&&Pl(en,l)||(en=l,l=Vi(Qr,"onSelect"),0<l.length&&(t=new ti("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=ul)))}function Ha(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var fl={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},Zr={},Kc={};Xt&&(Kc=document.createElement("div").style,"AnimationEvent"in window||(delete fl.animationend.animation,delete fl.animationiteration.animation,delete fl.animationstart.animation),"TransitionEvent"in window||delete fl.transitionend.transition);function La(e){if(Zr[e])return Zr[e];if(!fl[e])return e;var t=fl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Kc)return Zr[e]=t[a];return e}var $c=La("animationend"),Wc=La("animationiteration"),Fc=La("animationstart"),Ip=La("transitionrun"),Pp=La("transitionstart"),em=La("transitioncancel"),Ic=La("transitionend"),Pc=new Map,Jr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jr.push("scrollEnd");function At(e,t){Pc.set(e,t),Ua(t,[e])}var ni=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xt=[],dl=0,Kr=0;function ii(){for(var e=dl,t=Kr=dl=0;t<e;){var a=xt[t];xt[t++]=null;var l=xt[t];xt[t++]=null;var n=xt[t];xt[t++]=null;var i=xt[t];if(xt[t++]=null,l!==null&&n!==null){var o=l.pending;o===null?n.next=n:(n.next=o.next,o.next=n),l.pending=n}i!==0&&eu(a,n,i)}}function ri(e,t,a,l){xt[dl++]=e,xt[dl++]=t,xt[dl++]=a,xt[dl++]=l,Kr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function $r(e,t,a,l){return ri(e,t,a,l),oi(e)}function Ba(e,t){return ri(e,null,null,t),oi(e)}function eu(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-rt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function oi(e){if(50<wn)throw wn=0,is=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pl={};function tm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,a,l){return new tm(e,t,a,l)}function Wr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gt(e,t){var a=e.alternate;return a===null?(a=st(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function tu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function si(e,t,a,l,n,i){var o=0;if(l=e,typeof e=="function")Wr(e)&&(o=1);else if(typeof e=="string")o=rh(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ze:return e=st(31,a,t,n),e.elementType=Ze,e.lanes=i,e;case B:return Ya(a.children,n,i,t);case H:o=8,n|=24;break;case Y:return e=st(12,a,t,n|2),e.elementType=Y,e.lanes=i,e;case se:return e=st(13,a,t,n),e.elementType=se,e.lanes=i,e;case ye:return e=st(19,a,t,n),e.elementType=ye,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Z:o=10;break e;case J:o=9;break e;case ce:o=11;break e;case F:o=14;break e;case Te:o=16,l=null;break e}o=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=st(o,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ya(e,t,a,l){return e=st(7,e,l,t),e.lanes=a,e}function Fr(e,t,a){return e=st(6,e,null,t),e.lanes=a,e}function au(e){var t=st(18,null,null,0);return t.stateNode=e,t}function Ir(e,t,a){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var lu=new WeakMap;function vt(e,t){if(typeof e=="object"&&e!==null){var a=lu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ac(t)},lu.set(e,t),t)}return{value:e,source:t,stack:ac(t)}}var ml=[],hl=0,ci=null,tn=0,yt=[],St=0,ca=null,Ct=1,Dt="";function Qt(e,t){ml[hl++]=tn,ml[hl++]=ci,ci=e,tn=t}function nu(e,t,a){yt[St++]=Ct,yt[St++]=Dt,yt[St++]=ca,ca=e;var l=Ct;e=Dt;var n=32-rt(l)-1;l&=~(1<<n),a+=1;var i=32-rt(t)+n;if(30<i){var o=n-n%5;i=(l&(1<<o)-1).toString(32),l>>=o,n-=o,Ct=1<<32-rt(t)+n|a<<n|l,Dt=i+e}else Ct=1<<i|a<<n|l,Dt=e}function Pr(e){e.return!==null&&(Qt(e,1),nu(e,1,0))}function eo(e){for(;e===ci;)ci=ml[--hl],ml[hl]=null,tn=ml[--hl],ml[hl]=null;for(;e===ca;)ca=yt[--St],yt[St]=null,Dt=yt[--St],yt[St]=null,Ct=yt[--St],yt[St]=null}function iu(e,t){yt[St++]=Ct,yt[St++]=Dt,yt[St++]=ca,Ct=t.id,Dt=t.overflow,ca=e}var Xe=null,we=null,oe=!1,ua=null,Et=!1,to=Error(u(519));function fa(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw an(vt(t,e)),to}function ru(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[qe]=e,t[Fe]=l,a){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(a=0;a<zn.length;a++)ne(zn[a],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),vc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),Sc(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||jd(t.textContent,a)?(l.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),l.onScroll!=null&&ne("scroll",t),l.onScrollEnd!=null&&ne("scrollend",t),l.onClick!=null&&(t.onclick=qt),t=!0):t=!1,t||fa(e,!0)}function ou(e){for(Xe=e.return;Xe;)switch(Xe.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Xe=Xe.return}}function gl(e){if(e!==Xe)return!1;if(!oe)return ou(e),oe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ys(e.type,e.memoizedProps)),a=!a),a&&we&&fa(e),ou(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));we=Cd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));we=Cd(e)}else t===27?(t=we,za(e.type)?(e=zs,zs=null,we=e):we=t):we=Xe?jt(e.stateNode.nextSibling):null;return!0}function qa(){we=Xe=null,oe=!1}function ao(){var e=ua;return e!==null&&(at===null?at=e:at.push.apply(at,e),ua=null),e}function an(e){ua===null?ua=[e]:ua.push(e)}var lo=y(null),Xa=null,Vt=null;function da(e,t,a){X(lo,t._currentValue),t._currentValue=a}function Zt(e){e._currentValue=lo.current,k(lo)}function no(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function io(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var o=n.child;i=i.firstContext;e:for(;i!==null;){var d=i;i=n;for(var x=0;x<t.length;x++)if(d.context===t[x]){i.lanes|=a,d=i.alternate,d!==null&&(d.lanes|=a),no(i.return,a,e),l||(o=null);break e}i=d.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(u(341));o.lanes|=a,i=o.alternate,i!==null&&(i.lanes|=a),no(o,a,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function bl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(u(387));if(o=o.memoizedProps,o!==null){var d=n.type;ot(n.pendingProps.value,o.value)||(e!==null?e.push(d):e=[d])}}else if(n===pe.current){if(o=n.alternate,o===null)throw Error(u(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(On):e=[On])}n=n.return}e!==null&&io(t,e,a,l),t.flags|=262144}function ui(e){for(e=e.firstContext;e!==null;){if(!ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ga(e){Xa=e,Vt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ge(e){return su(Xa,e)}function fi(e,t){return Xa===null&&Ga(e),su(e,t)}function su(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Vt===null){if(e===null)throw Error(u(308));Vt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vt=Vt.next=t;return a}var am=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},lm=r.unstable_scheduleCallback,nm=r.unstable_NormalPriority,De={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ro(){return{controller:new am,data:new Map,refCount:0}}function ln(e){e.refCount--,e.refCount===0&&lm(nm,function(){e.controller.abort()})}var nn=null,oo=0,xl=0,vl=null;function im(e,t){if(nn===null){var a=nn=[];oo=0,xl=fs(),vl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return oo++,t.then(cu,cu),t}function cu(){if(--oo===0&&nn!==null){vl!==null&&(vl.status="fulfilled");var e=nn;nn=null,xl=0,vl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function rm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var uu=_.S;_.S=function(e,t){Kf=nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&im(e,t),uu!==null&&uu(e,t)};var Qa=y(null);function so(){var e=Qa.current;return e!==null?e:Ee.pooledCache}function di(e,t){t===null?X(Qa,Qa.current):X(Qa,t.pool)}function fu(){var e=so();return e===null?null:{parent:De._currentValue,pool:e}}var yl=Error(u(460)),co=Error(u(474)),pi=Error(u(542)),mi={then:function(){}};function du(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(qt,qt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hu(e),e;default:if(typeof t.status=="string")t.then(qt,qt);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hu(e),e}throw Za=t,yl}}function Va(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Za=a,yl):a}}var Za=null;function mu(){if(Za===null)throw Error(u(459));var e=Za;return Za=null,e}function hu(e){if(e===yl||e===pi)throw Error(u(483))}var Sl=null,rn=0;function hi(e){var t=rn;return rn+=1,Sl===null&&(Sl=[]),pu(Sl,e,t)}function on(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function gi(e,t){throw t.$$typeof===U?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function gu(e){function t(w,v){if(e){var z=w.deletions;z===null?(w.deletions=[v],w.flags|=16):z.push(v)}}function a(w,v){if(!e)return null;for(;v!==null;)t(w,v),v=v.sibling;return null}function l(w){for(var v=new Map;w!==null;)w.key!==null?v.set(w.key,w):v.set(w.index,w),w=w.sibling;return v}function n(w,v){return w=Gt(w,v),w.index=0,w.sibling=null,w}function i(w,v,z){return w.index=z,e?(z=w.alternate,z!==null?(z=z.index,z<v?(w.flags|=67108866,v):z):(w.flags|=67108866,v)):(w.flags|=1048576,v)}function o(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function d(w,v,z,C){return v===null||v.tag!==6?(v=Fr(z,w.mode,C),v.return=w,v):(v=n(v,z),v.return=w,v)}function x(w,v,z,C){var K=z.type;return K===B?R(w,v,z.props.children,C,z.key):v!==null&&(v.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Te&&Va(K)===v.type)?(v=n(v,z.props),on(v,z),v.return=w,v):(v=si(z.type,z.key,z.props,null,w.mode,C),on(v,z),v.return=w,v)}function A(w,v,z,C){return v===null||v.tag!==4||v.stateNode.containerInfo!==z.containerInfo||v.stateNode.implementation!==z.implementation?(v=Ir(z,w.mode,C),v.return=w,v):(v=n(v,z.children||[]),v.return=w,v)}function R(w,v,z,C,K){return v===null||v.tag!==7?(v=Ya(z,w.mode,C,K),v.return=w,v):(v=n(v,z),v.return=w,v)}function D(w,v,z){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Fr(""+v,w.mode,z),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case L:return z=si(v.type,v.key,v.props,null,w.mode,z),on(z,v),z.return=w,z;case E:return v=Ir(v,w.mode,z),v.return=w,v;case Te:return v=Va(v),D(w,v,z)}if(Ce(v)||Je(v))return v=Ya(v,w.mode,z,null),v.return=w,v;if(typeof v.then=="function")return D(w,hi(v),z);if(v.$$typeof===Z)return D(w,fi(w,v),z);gi(w,v)}return null}function M(w,v,z,C){var K=v!==null?v.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return K!==null?null:d(w,v,""+z,C);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case L:return z.key===K?x(w,v,z,C):null;case E:return z.key===K?A(w,v,z,C):null;case Te:return z=Va(z),M(w,v,z,C)}if(Ce(z)||Je(z))return K!==null?null:R(w,v,z,C,null);if(typeof z.then=="function")return M(w,v,hi(z),C);if(z.$$typeof===Z)return M(w,v,fi(w,z),C);gi(w,z)}return null}function O(w,v,z,C,K){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return w=w.get(z)||null,d(v,w,""+C,K);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case L:return w=w.get(C.key===null?z:C.key)||null,x(v,w,C,K);case E:return w=w.get(C.key===null?z:C.key)||null,A(v,w,C,K);case Te:return C=Va(C),O(w,v,z,C,K)}if(Ce(C)||Je(C))return w=w.get(z)||null,R(v,w,C,K,null);if(typeof C.then=="function")return O(w,v,z,hi(C),K);if(C.$$typeof===Z)return O(w,v,z,fi(v,C),K);gi(v,C)}return null}function G(w,v,z,C){for(var K=null,ue=null,V=v,te=v=0,re=null;V!==null&&te<z.length;te++){V.index>te?(re=V,V=null):re=V.sibling;var fe=M(w,V,z[te],C);if(fe===null){V===null&&(V=re);break}e&&V&&fe.alternate===null&&t(w,V),v=i(fe,v,te),ue===null?K=fe:ue.sibling=fe,ue=fe,V=re}if(te===z.length)return a(w,V),oe&&Qt(w,te),K;if(V===null){for(;te<z.length;te++)V=D(w,z[te],C),V!==null&&(v=i(V,v,te),ue===null?K=V:ue.sibling=V,ue=V);return oe&&Qt(w,te),K}for(V=l(V);te<z.length;te++)re=O(V,w,te,z[te],C),re!==null&&(e&&re.alternate!==null&&V.delete(re.key===null?te:re.key),v=i(re,v,te),ue===null?K=re:ue.sibling=re,ue=re);return e&&V.forEach(function(Oa){return t(w,Oa)}),oe&&Qt(w,te),K}function $(w,v,z,C){if(z==null)throw Error(u(151));for(var K=null,ue=null,V=v,te=v=0,re=null,fe=z.next();V!==null&&!fe.done;te++,fe=z.next()){V.index>te?(re=V,V=null):re=V.sibling;var Oa=M(w,V,fe.value,C);if(Oa===null){V===null&&(V=re);break}e&&V&&Oa.alternate===null&&t(w,V),v=i(Oa,v,te),ue===null?K=Oa:ue.sibling=Oa,ue=Oa,V=re}if(fe.done)return a(w,V),oe&&Qt(w,te),K;if(V===null){for(;!fe.done;te++,fe=z.next())fe=D(w,fe.value,C),fe!==null&&(v=i(fe,v,te),ue===null?K=fe:ue.sibling=fe,ue=fe);return oe&&Qt(w,te),K}for(V=l(V);!fe.done;te++,fe=z.next())fe=O(V,w,te,fe.value,C),fe!==null&&(e&&fe.alternate!==null&&V.delete(fe.key===null?te:fe.key),v=i(fe,v,te),ue===null?K=fe:ue.sibling=fe,ue=fe);return e&&V.forEach(function(bh){return t(w,bh)}),oe&&Qt(w,te),K}function ve(w,v,z,C){if(typeof z=="object"&&z!==null&&z.type===B&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case L:e:{for(var K=z.key;v!==null;){if(v.key===K){if(K=z.type,K===B){if(v.tag===7){a(w,v.sibling),C=n(v,z.props.children),C.return=w,w=C;break e}}else if(v.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Te&&Va(K)===v.type){a(w,v.sibling),C=n(v,z.props),on(C,z),C.return=w,w=C;break e}a(w,v);break}else t(w,v);v=v.sibling}z.type===B?(C=Ya(z.props.children,w.mode,C,z.key),C.return=w,w=C):(C=si(z.type,z.key,z.props,null,w.mode,C),on(C,z),C.return=w,w=C)}return o(w);case E:e:{for(K=z.key;v!==null;){if(v.key===K)if(v.tag===4&&v.stateNode.containerInfo===z.containerInfo&&v.stateNode.implementation===z.implementation){a(w,v.sibling),C=n(v,z.children||[]),C.return=w,w=C;break e}else{a(w,v);break}else t(w,v);v=v.sibling}C=Ir(z,w.mode,C),C.return=w,w=C}return o(w);case Te:return z=Va(z),ve(w,v,z,C)}if(Ce(z))return G(w,v,z,C);if(Je(z)){if(K=Je(z),typeof K!="function")throw Error(u(150));return z=K.call(z),$(w,v,z,C)}if(typeof z.then=="function")return ve(w,v,hi(z),C);if(z.$$typeof===Z)return ve(w,v,fi(w,z),C);gi(w,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,v!==null&&v.tag===6?(a(w,v.sibling),C=n(v,z),C.return=w,w=C):(a(w,v),C=Fr(z,w.mode,C),C.return=w,w=C),o(w)):a(w,v)}return function(w,v,z,C){try{rn=0;var K=ve(w,v,z,C);return Sl=null,K}catch(V){if(V===yl||V===pi)throw V;var ue=st(29,V,null,w.mode);return ue.lanes=C,ue.return=w,ue}}}var Ja=gu(!0),bu=gu(!1),pa=!1;function uo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ha(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(de&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=oi(e),eu(e,null,a),t}return ri(e,l,t,a),oi(e)}function sn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,sc(e,a)}}function po(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=o:i=i.next=o,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var mo=!1;function cn(){if(mo){var e=vl;if(e!==null)throw e}}function un(e,t,a,l){mo=!1;var n=e.updateQueue;pa=!1;var i=n.firstBaseUpdate,o=n.lastBaseUpdate,d=n.shared.pending;if(d!==null){n.shared.pending=null;var x=d,A=x.next;x.next=null,o===null?i=A:o.next=A,o=x;var R=e.alternate;R!==null&&(R=R.updateQueue,d=R.lastBaseUpdate,d!==o&&(d===null?R.firstBaseUpdate=A:d.next=A,R.lastBaseUpdate=x))}if(i!==null){var D=n.baseState;o=0,R=A=x=null,d=i;do{var M=d.lane&-536870913,O=M!==d.lane;if(O?(ie&M)===M:(l&M)===M){M!==0&&M===xl&&(mo=!0),R!==null&&(R=R.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var G=e,$=d;M=t;var ve=a;switch($.tag){case 1:if(G=$.payload,typeof G=="function"){D=G.call(ve,D,M);break e}D=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=$.payload,M=typeof G=="function"?G.call(ve,D,M):G,M==null)break e;D=S({},D,M);break e;case 2:pa=!0}}M=d.callback,M!==null&&(e.flags|=64,O&&(e.flags|=8192),O=n.callbacks,O===null?n.callbacks=[M]:O.push(M))}else O={lane:M,tag:d.tag,payload:d.payload,callback:d.callback,next:null},R===null?(A=R=O,x=D):R=R.next=O,o|=M;if(d=d.next,d===null){if(d=n.shared.pending,d===null)break;O=d,d=O.next,O.next=null,n.lastBaseUpdate=O,n.shared.pending=null}}while(!0);R===null&&(x=D),n.baseState=x,n.firstBaseUpdate=A,n.lastBaseUpdate=R,i===null&&(n.shared.lanes=0),ya|=o,e.lanes=o,e.memoizedState=D}}function xu(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function vu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)xu(a[e],t)}var El=y(null),bi=y(0);function yu(e,t){e=ta,X(bi,e),X(El,t),ta=e|t.baseLanes}function ho(){X(bi,ta),X(El,El.current)}function go(){ta=bi.current,k(El),k(bi)}var ct=y(null),wt=null;function ga(e){var t=e.alternate;X(Re,Re.current&1),X(ct,e),wt===null&&(t===null||El.current!==null||t.memoizedState!==null)&&(wt=e)}function bo(e){X(Re,Re.current),X(ct,e),wt===null&&(wt=e)}function Su(e){e.tag===22?(X(Re,Re.current),X(ct,e),wt===null&&(wt=e)):ba()}function ba(){X(Re,Re.current),X(ct,ct.current)}function ut(e){k(ct),wt===e&&(wt=null),k(Re)}var Re=y(0);function xi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ws(a)||js(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jt=0,ee=null,be=null,Ue=null,vi=!1,wl=!1,Ka=!1,yi=0,fn=0,jl=null,om=0;function Ae(){throw Error(u(321))}function xo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ot(e[a],t[a]))return!1;return!0}function vo(e,t,a,l,n,i){return Jt=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?nf:Do,Ka=!1,i=a(l,n),Ka=!1,wl&&(i=wu(t,a,l,n)),Eu(e),i}function Eu(e){_.H=mn;var t=be!==null&&be.next!==null;if(Jt=0,Ue=be=ee=null,vi=!1,fn=0,jl=null,t)throw Error(u(300));e===null||ke||(e=e.dependencies,e!==null&&ui(e)&&(ke=!0))}function wu(e,t,a,l){ee=e;var n=0;do{if(wl&&(jl=null),fn=0,wl=!1,25<=n)throw Error(u(301));if(n+=1,Ue=be=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}_.H=rf,i=t(a,l)}while(wl);return i}function sm(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?dn(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(ee.flags|=1024),t}function yo(){var e=yi!==0;return yi=0,e}function So(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Eo(e){if(vi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vi=!1}Jt=0,Ue=be=ee=null,wl=!1,fn=yi=0,jl=null}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ee.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function _e(){if(be===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Ue===null?ee.memoizedState:Ue.next;if(t!==null)Ue=t,be=e;else{if(e===null)throw ee.alternate===null?Error(u(467)):Error(u(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ue===null?ee.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Si(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dn(e){var t=fn;return fn+=1,jl===null&&(jl=[]),e=pu(jl,e,t),t=ee,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?nf:Do),e}function Ei(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return dn(e);if(e.$$typeof===Z)return Ge(e)}throw Error(u(438,String(e)))}function wo(e){var t=null,a=ee.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ee.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Si(),ee.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Rt;return t.index++,a}function Kt(e,t){return typeof t=="function"?t(e):t}function wi(e){var t=_e();return jo(t,be,e)}function jo(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var o=n.next;n.next=i.next,i.next=o}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var d=o=null,x=null,A=t,R=!1;do{var D=A.lane&-536870913;if(D!==A.lane?(ie&D)===D:(Jt&D)===D){var M=A.revertLane;if(M===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),D===xl&&(R=!0);else if((Jt&M)===M){A=A.next,M===xl&&(R=!0);continue}else D={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},x===null?(d=x=D,o=i):x=x.next=D,ee.lanes|=M,ya|=M;D=A.action,Ka&&a(i,D),i=A.hasEagerState?A.eagerState:a(i,D)}else M={lane:D,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},x===null?(d=x=M,o=i):x=x.next=M,ee.lanes|=D,ya|=D;A=A.next}while(A!==null&&A!==t);if(x===null?o=i:x.next=d,!ot(i,e.memoizedState)&&(ke=!0,R&&(a=vl,a!==null)))throw a;e.memoizedState=i,e.baseState=o,e.baseQueue=x,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function zo(e){var t=_e(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do i=e(i,o.action),o=o.next;while(o!==n);ot(i,t.memoizedState)||(ke=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function ju(e,t,a){var l=ee,n=_e(),i=oe;if(i){if(a===void 0)throw Error(u(407));a=a()}else a=t();var o=!ot((be||n).memoizedState,a);if(o&&(n.memoizedState=a,ke=!0),n=n.queue,Mo(Au.bind(null,l,n,e),[e]),n.getSnapshot!==t||o||Ue!==null&&Ue.memoizedState.tag&1){if(l.flags|=2048,zl(9,{destroy:void 0},Nu.bind(null,l,n,a,t),null),Ee===null)throw Error(u(349));i||(Jt&127)!==0||zu(l,t,a)}return a}function zu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ee.updateQueue,t===null?(t=Si(),ee.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Nu(e,t,a,l){t.value=a,t.getSnapshot=l,Mu(t)&&Tu(e)}function Au(e,t,a){return a(function(){Mu(t)&&Tu(e)})}function Mu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ot(e,a)}catch{return!0}}function Tu(e){var t=Ba(e,2);t!==null&&lt(t,e,2)}function No(e){var t=We();if(typeof e=="function"){var a=e;if(e=a(),Ka){ra(!0);try{a()}finally{ra(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},t}function Ou(e,t,a,l){return e.baseState=a,jo(e,be,typeof l=="function"?l:Kt)}function cm(e,t,a,l,n){if(Ni(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};_.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Ru(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Ru(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=_.T,o={};_.T=o;try{var d=a(n,l),x=_.S;x!==null&&x(o,d),_u(e,t,d)}catch(A){Ao(e,t,A)}finally{i!==null&&o.types!==null&&(i.types=o.types),_.T=i}}else try{i=a(n,l),_u(e,t,i)}catch(A){Ao(e,t,A)}}function _u(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Cu(e,t,l)},function(l){return Ao(e,t,l)}):Cu(e,t,a)}function Cu(e,t,a){t.status="fulfilled",t.value=a,Du(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ru(e,a)))}function Ao(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Du(t),t=t.next;while(t!==l)}e.action=null}function Du(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Uu(e,t){return t}function ku(e,t){if(oe){var a=Ee.formState;if(a!==null){e:{var l=ee;if(oe){if(we){t:{for(var n=we,i=Et;n.nodeType!==8;){if(!i){n=null;break t}if(n=jt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){we=jt(n.nextSibling),l=n.data==="F!";break e}}fa(l)}l=!1}l&&(t=a[0])}}return a=We(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Uu,lastRenderedState:t},a.queue=l,a=tf.bind(null,ee,l),l.dispatch=a,l=No(!1),i=Co.bind(null,ee,!1,l.queue),l=We(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=cm.bind(null,ee,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Hu(e){var t=_e();return Lu(t,be,e)}function Lu(e,t,a){if(t=jo(e,t,Uu)[0],e=wi(Kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=dn(t)}catch(o){throw o===yl?pi:o}else l=t;t=_e();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ee.flags|=2048,zl(9,{destroy:void 0},um.bind(null,n,a),null)),[l,i,e]}function um(e,t){e.action=t}function Bu(e){var t=_e(),a=be;if(a!==null)return Lu(t,a,e);_e(),t=t.memoizedState,a=_e();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function zl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ee.updateQueue,t===null&&(t=Si(),ee.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Yu(){return _e().memoizedState}function ji(e,t,a,l){var n=We();ee.flags|=e,n.memoizedState=zl(1|t,{destroy:void 0},a,l===void 0?null:l)}function zi(e,t,a,l){var n=_e();l=l===void 0?null:l;var i=n.memoizedState.inst;be!==null&&l!==null&&xo(l,be.memoizedState.deps)?n.memoizedState=zl(t,i,a,l):(ee.flags|=e,n.memoizedState=zl(1|t,i,a,l))}function qu(e,t){ji(8390656,8,e,t)}function Mo(e,t){zi(2048,8,e,t)}function fm(e){ee.flags|=4;var t=ee.updateQueue;if(t===null)t=Si(),ee.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Xu(e){var t=_e().memoizedState;return fm({ref:t,nextImpl:e}),function(){if((de&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Gu(e,t){return zi(4,2,e,t)}function Qu(e,t){return zi(4,4,e,t)}function Vu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zu(e,t,a){a=a!=null?a.concat([e]):null,zi(4,4,Vu.bind(null,t,e),a)}function To(){}function Ju(e,t){var a=_e();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&xo(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Ku(e,t){var a=_e();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&xo(t,l[1]))return l[0];if(l=e(),Ka){ra(!0);try{e()}finally{ra(!1)}}return a.memoizedState=[l,t],l}function Oo(e,t,a){return a===void 0||(Jt&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Wf(),ee.lanes|=e,ya|=e,a)}function $u(e,t,a,l){return ot(a,t)?a:El.current!==null?(e=Oo(e,a,l),ot(e,t)||(ke=!0),e):(Jt&42)===0||(Jt&1073741824)!==0&&(ie&261930)===0?(ke=!0,e.memoizedState=a):(e=Wf(),ee.lanes|=e,ya|=e,t)}function Wu(e,t,a,l,n){var i=q.p;q.p=i!==0&&8>i?i:8;var o=_.T,d={};_.T=d,Co(e,!1,t,a);try{var x=n(),A=_.S;if(A!==null&&A(d,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var R=rm(x,l);pn(e,t,R,pt(e))}else pn(e,t,l,pt(e))}catch(D){pn(e,t,{then:function(){},status:"rejected",reason:D},pt())}finally{q.p=i,o!==null&&d.types!==null&&(o.types=d.types),_.T=o}}function dm(){}function Ro(e,t,a,l){if(e.tag!==5)throw Error(u(476));var n=Fu(e).queue;Wu(e,n,t,W,a===null?dm:function(){return Iu(e),a(l)})}function Fu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Iu(e){var t=Fu(e);t.next===null&&(t=e.alternate.memoizedState),pn(e,t.next.queue,{},pt())}function _o(){return Ge(On)}function Pu(){return _e().memoizedState}function ef(){return _e().memoizedState}function pm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=pt();e=ma(a);var l=ha(t,e,a);l!==null&&(lt(l,t,a),sn(l,t,a)),t={cache:ro()},e.payload=t;return}t=t.return}}function mm(e,t,a){var l=pt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ni(e)?af(t,a):(a=$r(e,t,a,l),a!==null&&(lt(a,e,l),lf(a,t,l)))}function tf(e,t,a){var l=pt();pn(e,t,a,l)}function pn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ni(e))af(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,d=i(o,a);if(n.hasEagerState=!0,n.eagerState=d,ot(d,o))return ri(e,t,n,0),Ee===null&&ii(),!1}catch{}if(a=$r(e,t,n,l),a!==null)return lt(a,e,l),lf(a,t,l),!0}return!1}function Co(e,t,a,l){if(l={lane:2,revertLane:fs(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ni(e)){if(t)throw Error(u(479))}else t=$r(e,a,l,2),t!==null&&lt(t,e,2)}function Ni(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function af(e,t){wl=vi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function lf(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,sc(e,a)}}var mn={readContext:Ge,use:Ei,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useLayoutEffect:Ae,useInsertionEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useSyncExternalStore:Ae,useId:Ae,useHostTransitionStatus:Ae,useFormState:Ae,useActionState:Ae,useOptimistic:Ae,useMemoCache:Ae,useCacheRefresh:Ae};mn.useEffectEvent=Ae;var nf={readContext:Ge,use:Ei,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:qu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ji(4194308,4,Vu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ji(4194308,4,e,t)},useInsertionEffect:function(e,t){ji(4,2,e,t)},useMemo:function(e,t){var a=We();t=t===void 0?null:t;var l=e();if(Ka){ra(!0);try{e()}finally{ra(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=We();if(a!==void 0){var n=a(t);if(Ka){ra(!0);try{a(t)}finally{ra(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=mm.bind(null,ee,e),[l.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:function(e){e=No(e);var t=e.queue,a=tf.bind(null,ee,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:To,useDeferredValue:function(e,t){var a=We();return Oo(a,e,t)},useTransition:function(){var e=No(!1);return e=Wu.bind(null,ee,e.queue,!0,!1),We().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ee,n=We();if(oe){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Ee===null)throw Error(u(349));(ie&127)!==0||zu(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,qu(Au.bind(null,l,i,e),[e]),l.flags|=2048,zl(9,{destroy:void 0},Nu.bind(null,l,i,a,t),null),a},useId:function(){var e=We(),t=Ee.identifierPrefix;if(oe){var a=Dt,l=Ct;a=(l&~(1<<32-rt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=yi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=om++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:_o,useFormState:ku,useActionState:ku,useOptimistic:function(e){var t=We();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Co.bind(null,ee,!0,a),a.dispatch=t,[e,t]},useMemoCache:wo,useCacheRefresh:function(){return We().memoizedState=pm.bind(null,ee)},useEffectEvent:function(e){var t=We(),a={impl:e};return t.memoizedState=a,function(){if((de&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Do={readContext:Ge,use:Ei,useCallback:Ju,useContext:Ge,useEffect:Mo,useImperativeHandle:Zu,useInsertionEffect:Gu,useLayoutEffect:Qu,useMemo:Ku,useReducer:wi,useRef:Yu,useState:function(){return wi(Kt)},useDebugValue:To,useDeferredValue:function(e,t){var a=_e();return $u(a,be.memoizedState,e,t)},useTransition:function(){var e=wi(Kt)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:dn(e),t]},useSyncExternalStore:ju,useId:Pu,useHostTransitionStatus:_o,useFormState:Hu,useActionState:Hu,useOptimistic:function(e,t){var a=_e();return Ou(a,be,e,t)},useMemoCache:wo,useCacheRefresh:ef};Do.useEffectEvent=Xu;var rf={readContext:Ge,use:Ei,useCallback:Ju,useContext:Ge,useEffect:Mo,useImperativeHandle:Zu,useInsertionEffect:Gu,useLayoutEffect:Qu,useMemo:Ku,useReducer:zo,useRef:Yu,useState:function(){return zo(Kt)},useDebugValue:To,useDeferredValue:function(e,t){var a=_e();return be===null?Oo(a,e,t):$u(a,be.memoizedState,e,t)},useTransition:function(){var e=zo(Kt)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:dn(e),t]},useSyncExternalStore:ju,useId:Pu,useHostTransitionStatus:_o,useFormState:Bu,useActionState:Bu,useOptimistic:function(e,t){var a=_e();return be!==null?Ou(a,be,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:wo,useCacheRefresh:ef};rf.useEffectEvent=Xu;function Uo(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:S({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ko={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=pt(),n=ma(l);n.payload=t,a!=null&&(n.callback=a),t=ha(e,n,l),t!==null&&(lt(t,e,l),sn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=pt(),n=ma(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ha(e,n,l),t!==null&&(lt(t,e,l),sn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=pt(),l=ma(a);l.tag=2,t!=null&&(l.callback=t),t=ha(e,l,a),t!==null&&(lt(t,e,a),sn(t,e,a))}};function of(e,t,a,l,n,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,o):t.prototype&&t.prototype.isPureReactComponent?!Pl(a,l)||!Pl(n,i):!0}function sf(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&ko.enqueueReplaceState(t,t.state,null)}function $a(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=S({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function cf(e){ni(e)}function uf(e){console.error(e)}function ff(e){ni(e)}function Ai(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function df(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Ho(e,t,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){Ai(e,t)},a}function pf(e){return e=ma(e),e.tag=3,e}function mf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){df(t,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){df(t,a,l),typeof n!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function hm(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&bl(t,a,n,!0),a=ct.current,a!==null){switch(a.tag){case 31:case 13:return wt===null?Bi():a.alternate===null&&Me===0&&(Me=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===mi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),ss(e,l,n)),!1;case 22:return a.flags|=65536,l===mi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),ss(e,l,n)),!1}throw Error(u(435,a.tag))}return ss(e,l,n),Bi(),!1}if(oe)return t=ct.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==to&&(e=Error(u(422),{cause:l}),an(vt(e,a)))):(l!==to&&(t=Error(u(423),{cause:l}),an(vt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=vt(l,a),n=Ho(e.stateNode,l,n),po(e,n),Me!==4&&(Me=2)),!1;var i=Error(u(520),{cause:l});if(i=vt(i,a),En===null?En=[i]:En.push(i),Me!==4&&(Me=2),t===null)return!0;l=vt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Ho(a.stateNode,l,e),po(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Sa===null||!Sa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=pf(n),mf(n,e,a,l),po(a,n),!1}a=a.return}while(a!==null);return!1}var Lo=Error(u(461)),ke=!1;function Qe(e,t,a,l){t.child=e===null?bu(t,null,a,l):Ja(t,e.child,a,l)}function hf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var o={};for(var d in l)d!=="ref"&&(o[d]=l[d])}else o=l;return Ga(t),l=vo(e,t,a,o,i,n),d=yo(),e!==null&&!ke?(So(e,t,n),$t(e,t,n)):(oe&&d&&Pr(t),t.flags|=1,Qe(e,t,l,n),t.child)}function gf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Wr(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,bf(e,t,i,l,n)):(e=si(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Zo(e,n)){var o=i.memoizedProps;if(a=a.compare,a=a!==null?a:Pl,a(o,l)&&e.ref===t.ref)return $t(e,t,n)}return t.flags|=1,e=Gt(i,l),e.ref=t.ref,e.return=t,t.child=e}function bf(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Pl(i,l)&&e.ref===t.ref)if(ke=!1,t.pendingProps=l=i,Zo(e,n))(e.flags&131072)!==0&&(ke=!0);else return t.lanes=e.lanes,$t(e,t,n)}return Bo(e,t,a,l,n)}function xf(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return vf(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&di(t,i!==null?i.cachePool:null),i!==null?yu(t,i):ho(),Su(t);else return l=t.lanes=536870912,vf(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(di(t,i.cachePool),yu(t,i),ba(),t.memoizedState=null):(e!==null&&di(t,null),ho(),ba());return Qe(e,t,n,a),t.child}function hn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function vf(e,t,a,l,n){var i=so();return i=i===null?null:{parent:De._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&di(t,null),ho(),Su(t),e!==null&&bl(e,t,l,!0),t.childLanes=n,null}function Mi(e,t){return t=Oi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function yf(e,t,a){return Ja(t,e.child,null,a),e=Mi(t,t.pendingProps),e.flags|=2,ut(t),t.memoizedState=null,e}function gm(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(oe){if(l.mode==="hidden")return e=Mi(t,l),t.lanes=536870912,hn(null,e);if(bo(t),(e=we)?(e=_d(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ca!==null?{id:Ct,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},a=au(e),a.return=t,t.child=a,Xe=t,we=null)):e=null,e===null)throw fa(t);return t.lanes=536870912,null}return Mi(t,l)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(bo(t),n)if(t.flags&256)t.flags&=-257,t=yf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(ke||bl(e,t,a,!1),n=(a&e.childLanes)!==0,ke||n){if(l=Ee,l!==null&&(o=cc(l,a),o!==0&&o!==i.retryLane))throw i.retryLane=o,Ba(e,o),lt(l,e,o),Lo;Bi(),t=yf(e,t,a)}else e=i.treeContext,we=jt(o.nextSibling),Xe=t,oe=!0,ua=null,Et=!1,e!==null&&iu(t,e),t=Mi(t,l),t.flags|=4096;return t}return e=Gt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ti(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Bo(e,t,a,l,n){return Ga(t),a=vo(e,t,a,l,void 0,n),l=yo(),e!==null&&!ke?(So(e,t,n),$t(e,t,n)):(oe&&l&&Pr(t),t.flags|=1,Qe(e,t,a,n),t.child)}function Sf(e,t,a,l,n,i){return Ga(t),t.updateQueue=null,a=wu(t,l,a,n),Eu(e),l=yo(),e!==null&&!ke?(So(e,t,i),$t(e,t,i)):(oe&&l&&Pr(t),t.flags|=1,Qe(e,t,a,i),t.child)}function Ef(e,t,a,l,n){if(Ga(t),t.stateNode===null){var i=pl,o=a.contextType;typeof o=="object"&&o!==null&&(i=Ge(o)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ko,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},uo(t),o=a.contextType,i.context=typeof o=="object"&&o!==null?Ge(o):pl,i.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Uo(t,a,o,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&ko.enqueueReplaceState(i,i.state,null),un(t,l,i,n),cn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var d=t.memoizedProps,x=$a(a,d);i.props=x;var A=i.context,R=a.contextType;o=pl,typeof R=="object"&&R!==null&&(o=Ge(R));var D=a.getDerivedStateFromProps;R=typeof D=="function"||typeof i.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,R||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d||A!==o)&&sf(t,i,l,o),pa=!1;var M=t.memoizedState;i.state=M,un(t,l,i,n),cn(),A=t.memoizedState,d||M!==A||pa?(typeof D=="function"&&(Uo(t,a,D,l),A=t.memoizedState),(x=pa||of(t,a,x,l,M,A,o))?(R||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=A),i.props=l,i.state=A,i.context=o,l=x):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,fo(e,t),o=t.memoizedProps,R=$a(a,o),i.props=R,D=t.pendingProps,M=i.context,A=a.contextType,x=pl,typeof A=="object"&&A!==null&&(x=Ge(A)),d=a.getDerivedStateFromProps,(A=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==D||M!==x)&&sf(t,i,l,x),pa=!1,M=t.memoizedState,i.state=M,un(t,l,i,n),cn();var O=t.memoizedState;o!==D||M!==O||pa||e!==null&&e.dependencies!==null&&ui(e.dependencies)?(typeof d=="function"&&(Uo(t,a,d,l),O=t.memoizedState),(R=pa||of(t,a,R,l,M,O,x)||e!==null&&e.dependencies!==null&&ui(e.dependencies))?(A||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,O,x),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,O,x)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=O),i.props=l,i.state=O,i.context=x,l=R):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ti(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Ja(t,e.child,null,n),t.child=Ja(t,null,a,n)):Qe(e,t,a,n),t.memoizedState=i.state,e=t.child):e=$t(e,t,n),e}function wf(e,t,a,l){return qa(),t.flags|=256,Qe(e,t,a,l),t.child}var Yo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qo(e){return{baseLanes:e,cachePool:fu()}}function Xo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=dt),e}function jf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(Re.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(n?ga(t):ba(),(e=we)?(e=_d(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ca!==null?{id:Ct,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},a=au(e),a.return=t,t.child=a,Xe=t,we=null)):e=null,e===null)throw fa(t);return js(e)?t.lanes=32:t.lanes=536870912,null}var d=l.children;return l=l.fallback,n?(ba(),n=t.mode,d=Oi({mode:"hidden",children:d},n),l=Ya(l,n,a,null),d.return=t,l.return=t,d.sibling=l,t.child=d,l=t.child,l.memoizedState=qo(a),l.childLanes=Xo(e,o,a),t.memoizedState=Yo,hn(null,l)):(ga(t),Go(t,d))}var x=e.memoizedState;if(x!==null&&(d=x.dehydrated,d!==null)){if(i)t.flags&256?(ga(t),t.flags&=-257,t=Qo(e,t,a)):t.memoizedState!==null?(ba(),t.child=e.child,t.flags|=128,t=null):(ba(),d=l.fallback,n=t.mode,l=Oi({mode:"visible",children:l.children},n),d=Ya(d,n,a,null),d.flags|=2,l.return=t,d.return=t,l.sibling=d,t.child=l,Ja(t,e.child,null,a),l=t.child,l.memoizedState=qo(a),l.childLanes=Xo(e,o,a),t.memoizedState=Yo,t=hn(null,l));else if(ga(t),js(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var A=o.dgst;o=A,l=Error(u(419)),l.stack="",l.digest=o,an({value:l,source:null,stack:null}),t=Qo(e,t,a)}else if(ke||bl(e,t,a,!1),o=(a&e.childLanes)!==0,ke||o){if(o=Ee,o!==null&&(l=cc(o,a),l!==0&&l!==x.retryLane))throw x.retryLane=l,Ba(e,l),lt(o,e,l),Lo;ws(d)||Bi(),t=Qo(e,t,a)}else ws(d)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,we=jt(d.nextSibling),Xe=t,oe=!0,ua=null,Et=!1,e!==null&&iu(t,e),t=Go(t,l.children),t.flags|=4096);return t}return n?(ba(),d=l.fallback,n=t.mode,x=e.child,A=x.sibling,l=Gt(x,{mode:"hidden",children:l.children}),l.subtreeFlags=x.subtreeFlags&65011712,A!==null?d=Gt(A,d):(d=Ya(d,n,a,null),d.flags|=2),d.return=t,l.return=t,l.sibling=d,t.child=l,hn(null,l),l=t.child,d=e.child.memoizedState,d===null?d=qo(a):(n=d.cachePool,n!==null?(x=De._currentValue,n=n.parent!==x?{parent:x,pool:x}:n):n=fu(),d={baseLanes:d.baseLanes|a,cachePool:n}),l.memoizedState=d,l.childLanes=Xo(e,o,a),t.memoizedState=Yo,hn(e.child,l)):(ga(t),a=e.child,e=a.sibling,a=Gt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Go(e,t){return t=Oi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Oi(e,t){return e=st(22,e,null,t),e.lanes=0,e}function Qo(e,t,a){return Ja(t,e.child,null,a),e=Go(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),no(e.return,t,a)}function Vo(e,t,a,l,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=n,o.treeForkCount=i)}function Nf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var o=Re.current,d=(o&2)!==0;if(d?(o=o&1|2,t.flags|=128):o&=1,X(Re,o),Qe(e,t,l,a),l=oe?tn:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zf(e,a,t);else if(e.tag===19)zf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&xi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Vo(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&xi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Vo(t,!0,a,null,i,l);break;case"together":Vo(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function $t(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ya|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(bl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Gt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Gt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Zo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ui(e)))}function bm(e,t,a){switch(t.tag){case 3:$e(t,t.stateNode.containerInfo),da(t,De,e.memoizedState.cache),qa();break;case 27:case 5:Yl(t);break;case 4:$e(t,t.stateNode.containerInfo);break;case 10:da(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,bo(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ga(t),t.flags|=128,null):(a&t.child.childLanes)!==0?jf(e,t,a):(ga(t),e=$t(e,t,a),e!==null?e.sibling:null);ga(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(bl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Nf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),X(Re,Re.current),l)break;return null;case 22:return t.lanes=0,xf(e,t,a,t.pendingProps);case 24:da(t,De,e.memoizedState.cache)}return $t(e,t,a)}function Af(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ke=!0;else{if(!Zo(e,a)&&(t.flags&128)===0)return ke=!1,bm(e,t,a);ke=(e.flags&131072)!==0}else ke=!1,oe&&(t.flags&1048576)!==0&&nu(t,tn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Va(t.elementType),t.type=e,typeof e=="function")Wr(e)?(l=$a(e,l),t.tag=1,t=Ef(null,t,e,l,a)):(t.tag=0,t=Bo(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===ce){t.tag=11,t=hf(null,t,e,l,a);break e}else if(n===F){t.tag=14,t=gf(null,t,e,l,a);break e}}throw t=ht(e)||e,Error(u(306,t,""))}}return t;case 0:return Bo(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=$a(l,t.pendingProps),Ef(e,t,l,n,a);case 3:e:{if($e(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,fo(e,t),un(t,l,null,a);var o=t.memoizedState;if(l=o.cache,da(t,De,l),l!==i.cache&&io(t,[De],a,!0),cn(),l=o.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=wf(e,t,l,a);break e}else if(l!==n){n=vt(Error(u(424)),t),an(n),t=wf(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,we=jt(e.firstChild),Xe=t,oe=!0,ua=null,Et=!0,a=bu(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(qa(),l===n){t=$t(e,t,a);break e}Qe(e,t,l,a)}t=t.child}return t;case 26:return Ti(e,t),e===null?(a=Ld(t.type,null,t.pendingProps,null))?t.memoizedState=a:oe||(a=t.type,e=t.pendingProps,l=Zi(ae.current).createElement(a),l[qe]=t,l[Fe]=e,Ve(l,a,e),Be(l),t.stateNode=l):t.memoizedState=Ld(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Yl(t),e===null&&oe&&(l=t.stateNode=Ud(t.type,t.pendingProps,ae.current),Xe=t,Et=!0,n=we,za(t.type)?(zs=n,we=jt(l.firstChild)):we=n),Qe(e,t,t.pendingProps.children,a),Ti(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((n=l=we)&&(l=Jm(l,t.type,t.pendingProps,Et),l!==null?(t.stateNode=l,Xe=t,we=jt(l.firstChild),Et=!1,n=!0):n=!1),n||fa(t)),Yl(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ys(n,i)?l=null:o!==null&&ys(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=vo(e,t,sm,null,null,a),On._currentValue=n),Ti(e,t),Qe(e,t,l,a),t.child;case 6:return e===null&&oe&&((e=a=we)&&(a=Km(a,t.pendingProps,Et),a!==null?(t.stateNode=a,Xe=t,we=null,e=!0):e=!1),e||fa(t)),null;case 13:return jf(e,t,a);case 4:return $e(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ja(t,null,l,a):Qe(e,t,l,a),t.child;case 11:return hf(e,t,t.type,t.pendingProps,a);case 7:return Qe(e,t,t.pendingProps,a),t.child;case 8:return Qe(e,t,t.pendingProps.children,a),t.child;case 12:return Qe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,da(t,t.type,l.value),Qe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ga(t),n=Ge(n),l=l(n),t.flags|=1,Qe(e,t,l,a),t.child;case 14:return gf(e,t,t.type,t.pendingProps,a);case 15:return bf(e,t,t.type,t.pendingProps,a);case 19:return Nf(e,t,a);case 31:return gm(e,t,a);case 22:return xf(e,t,a,t.pendingProps);case 24:return Ga(t),l=Ge(De),e===null?(n=so(),n===null&&(n=Ee,i=ro(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},uo(t),da(t,De,n)):((e.lanes&a)!==0&&(fo(e,t),un(t,null,null,a),cn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),da(t,De,l)):(l=i.cache,da(t,De,l),l!==n.cache&&io(t,[De],a,!0))),Qe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Wt(e){e.flags|=4}function Jo(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(ed())e.flags|=8192;else throw Za=mi,co}else e.flags&=-16777217}function Mf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Gd(t))if(ed())e.flags|=8192;else throw Za=mi,co}function Ri(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?rc():536870912,e.lanes|=t,Tl|=t)}function gn(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function xm(e,t,a){var l=t.pendingProps;switch(eo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return je(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Zt(De),Oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(gl(t)?Wt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ao())),je(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Wt(t),i!==null?(je(t),Mf(t,i)):(je(t),Jo(t,n,null,l,a))):i?i!==e.memoizedState?(Wt(t),je(t),Mf(t,i)):(je(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Wt(t),je(t),Jo(t,n,e,l,a)),null;case 27:if(Xn(t),a=ae.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return je(t),null}e=Q.current,gl(t)?ru(t):(e=Ud(n,l,a),t.stateNode=e,Wt(t))}return je(t),null;case 5:if(Xn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return je(t),null}if(i=Q.current,gl(t))ru(t);else{var o=Zi(ae.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?o.createElement(n,{is:l.is}):o.createElement(n)}}i[qe]=t,i[Fe]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(Ve(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Wt(t)}}return je(t),Jo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=ae.current,gl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Xe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[qe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||jd(e.nodeValue,a)),e||fa(t,!0)}else e=Zi(e).createTextNode(l),e[qe]=t,t.stateNode=e}return je(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=gl(t),a!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[qe]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),e=!1}else a=ao(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ut(t),t):(ut(t),null);if((t.flags&128)!==0)throw Error(u(558))}return je(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=gl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(u(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[qe]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),n=!1}else n=ao(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ut(t),t):(ut(t),null)}return ut(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ri(t,t.updateQueue),je(t),null);case 4:return Oe(),e===null&&hs(t.stateNode.containerInfo),je(t),null;case 10:return Zt(t.type),je(t),null;case 19:if(k(Re),l=t.memoizedState,l===null)return je(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)gn(l,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=xi(e),i!==null){for(t.flags|=128,gn(l,!1),e=i.updateQueue,t.updateQueue=e,Ri(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)tu(a,e),a=a.sibling;return X(Re,Re.current&1|2),oe&&Qt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&nt()>ki&&(t.flags|=128,n=!0,gn(l,!1),t.lanes=4194304)}else{if(!n)if(e=xi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ri(t,e),gn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!oe)return je(t),null}else 2*nt()-l.renderingStartTime>ki&&a!==536870912&&(t.flags|=128,n=!0,gn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=nt(),e.sibling=null,a=Re.current,X(Re,n?a&1|2:a&1),oe&&Qt(t,l.treeForkCount),e):(je(t),null);case 22:case 23:return ut(t),go(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),a=t.updateQueue,a!==null&&Ri(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&k(Qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Zt(De),je(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function vm(e,t){switch(eo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zt(De),Oe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Xn(t),null;case 31:if(t.memoizedState!==null){if(ut(t),t.alternate===null)throw Error(u(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ut(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return k(Re),null;case 4:return Oe(),null;case 10:return Zt(t.type),null;case 22:case 23:return ut(t),go(),e!==null&&k(Qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zt(De),null;case 25:return null;default:return null}}function Tf(e,t){switch(eo(t),t.tag){case 3:Zt(De),Oe();break;case 26:case 27:case 5:Xn(t);break;case 4:Oe();break;case 31:t.memoizedState!==null&&ut(t);break;case 13:ut(t);break;case 19:k(Re);break;case 10:Zt(t.type);break;case 22:case 23:ut(t),go(),e!==null&&k(Qa);break;case 24:Zt(De)}}function bn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,o=a.inst;l=i(),o.destroy=l}a=a.next}while(a!==n)}}catch(d){he(t,t.return,d)}}function xa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var o=l.inst,d=o.destroy;if(d!==void 0){o.destroy=void 0,n=t;var x=a,A=d;try{A()}catch(R){he(n,x,R)}}}l=l.next}while(l!==i)}}catch(R){he(t,t.return,R)}}function Of(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{vu(t,a)}catch(l){he(e,e.return,l)}}}function Rf(e,t,a){a.props=$a(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){he(e,t,l)}}function xn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){he(e,t,n)}}function Ut(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){he(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){he(e,t,n)}else a.current=null}function _f(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){he(e,e.return,n)}}function Ko(e,t,a){try{var l=e.stateNode;qm(l,e.type,a,t),l[Fe]=t}catch(n){he(e,e.return,n)}}function Cf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&za(e.type)||e.tag===4}function $o(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wo(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=qt));else if(l!==4&&(l===27&&za(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Wo(e,t,a),e=e.sibling;e!==null;)Wo(e,t,a),e=e.sibling}function _i(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(_i(e,t,a),e=e.sibling;e!==null;)_i(e,t,a),e=e.sibling}function Df(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ve(t,l,a),t[qe]=e,t[Fe]=a}catch(i){he(e,e.return,i)}}var Ft=!1,He=!1,Fo=!1,Uf=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function ym(e,t){if(e=e.containerInfo,xs=Pi,e=Zc(e),Gr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var o=0,d=-1,x=-1,A=0,R=0,D=e,M=null;t:for(;;){for(var O;D!==a||n!==0&&D.nodeType!==3||(d=o+n),D!==i||l!==0&&D.nodeType!==3||(x=o+l),D.nodeType===3&&(o+=D.nodeValue.length),(O=D.firstChild)!==null;)M=D,D=O;for(;;){if(D===e)break t;if(M===a&&++A===n&&(d=o),M===i&&++R===l&&(x=o),(O=D.nextSibling)!==null)break;D=M,M=D.parentNode}D=O}a=d===-1||x===-1?null:{start:d,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(vs={focusedElem:e,selectionRange:a},Pi=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var G=$a(a.type,n);e=l.getSnapshotBeforeUpdate(G,i),l.__reactInternalSnapshotBeforeUpdate=e}catch($){he(a,a.return,$)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Es(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Es(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function kf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Pt(e,a),l&4&&bn(5,a);break;case 1:if(Pt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){he(a,a.return,o)}else{var n=$a(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){he(a,a.return,o)}}l&64&&Of(a),l&512&&xn(a,a.return);break;case 3:if(Pt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{vu(e,t)}catch(o){he(a,a.return,o)}}break;case 27:t===null&&l&4&&Df(a);case 26:case 5:Pt(e,a),t===null&&l&4&&_f(a),l&512&&xn(a,a.return);break;case 12:Pt(e,a);break;case 31:Pt(e,a),l&4&&Bf(e,a);break;case 13:Pt(e,a),l&4&&Yf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Tm.bind(null,a),$m(e,a))));break;case 22:if(l=a.memoizedState!==null||Ft,!l){t=t!==null&&t.memoizedState!==null||He,n=Ft;var i=He;Ft=l,(He=t)&&!i?ea(e,a,(a.subtreeFlags&8772)!==0):Pt(e,a),Ft=n,He=i}break;case 30:break;default:Pt(e,a)}}function Hf(e){var t=e.alternate;t!==null&&(e.alternate=null,Hf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Nr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,Pe=!1;function It(e,t,a){for(a=a.child;a!==null;)Lf(e,t,a),a=a.sibling}function Lf(e,t,a){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(ql,a)}catch{}switch(a.tag){case 26:He||Ut(a,t),It(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||Ut(a,t);var l=ze,n=Pe;za(a.type)&&(ze=a.stateNode,Pe=!1),It(e,t,a),An(a.stateNode),ze=l,Pe=n;break;case 5:He||Ut(a,t);case 6:if(l=ze,n=Pe,ze=null,It(e,t,a),ze=l,Pe=n,ze!==null)if(Pe)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(a.stateNode)}catch(i){he(a,t,i)}else try{ze.removeChild(a.stateNode)}catch(i){he(a,t,i)}break;case 18:ze!==null&&(Pe?(e=ze,Od(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Hl(e)):Od(ze,a.stateNode));break;case 4:l=ze,n=Pe,ze=a.stateNode.containerInfo,Pe=!0,It(e,t,a),ze=l,Pe=n;break;case 0:case 11:case 14:case 15:xa(2,a,t),He||xa(4,a,t),It(e,t,a);break;case 1:He||(Ut(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Rf(a,t,l)),It(e,t,a);break;case 21:It(e,t,a);break;case 22:He=(l=He)||a.memoizedState!==null,It(e,t,a),He=l;break;default:It(e,t,a)}}function Bf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hl(e)}catch(a){he(t,t.return,a)}}}function Yf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hl(e)}catch(a){he(t,t.return,a)}}function Sm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Uf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Uf),t;default:throw Error(u(435,e.tag))}}function Ci(e,t){var a=Sm(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Om.bind(null,e,l);l.then(n,n)}})}function et(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,o=t,d=o;e:for(;d!==null;){switch(d.tag){case 27:if(za(d.type)){ze=d.stateNode,Pe=!1;break e}break;case 5:ze=d.stateNode,Pe=!1;break e;case 3:case 4:ze=d.stateNode.containerInfo,Pe=!0;break e}d=d.return}if(ze===null)throw Error(u(160));Lf(i,o,n),ze=null,Pe=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)qf(t,e),t=t.sibling}var Mt=null;function qf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:et(t,e),tt(e),l&4&&(xa(3,e,e.return),bn(3,e),xa(5,e,e.return));break;case 1:et(t,e),tt(e),l&512&&(He||a===null||Ut(a,a.return)),l&64&&Ft&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Mt;if(et(t,e),tt(e),l&512&&(He||a===null||Ut(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ql]||i[qe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ve(i,l,a),i[qe]=e,Be(i),l=i;break e;case"link":var o=qd("link","href",n).get(l+(a.href||""));if(o){for(var d=0;d<o.length;d++)if(i=o[d],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(d,1);break t}}i=n.createElement(l),Ve(i,l,a),n.head.appendChild(i);break;case"meta":if(o=qd("meta","content",n).get(l+(a.content||""))){for(d=0;d<o.length;d++)if(i=o[d],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(d,1);break t}}i=n.createElement(l),Ve(i,l,a),n.head.appendChild(i);break;default:throw Error(u(468,l))}i[qe]=e,Be(i),l=i}e.stateNode=l}else Xd(n,e.type,e.stateNode);else e.stateNode=Yd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Xd(n,e.type,e.stateNode):Yd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Ko(e,e.memoizedProps,a.memoizedProps)}break;case 27:et(t,e),tt(e),l&512&&(He||a===null||Ut(a,a.return)),a!==null&&l&4&&Ko(e,e.memoizedProps,a.memoizedProps);break;case 5:if(et(t,e),tt(e),l&512&&(He||a===null||Ut(a,a.return)),e.flags&32){n=e.stateNode;try{rl(n,"")}catch(G){he(e,e.return,G)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Ko(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Fo=!0);break;case 6:if(et(t,e),tt(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(G){he(e,e.return,G)}}break;case 3:if($i=null,n=Mt,Mt=Ji(t.containerInfo),et(t,e),Mt=n,tt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Hl(t.containerInfo)}catch(G){he(e,e.return,G)}Fo&&(Fo=!1,Xf(e));break;case 4:l=Mt,Mt=Ji(e.stateNode.containerInfo),et(t,e),tt(e),Mt=l;break;case 12:et(t,e),tt(e);break;case 31:et(t,e),tt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ci(e,l)));break;case 13:et(t,e),tt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ui=nt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ci(e,l)));break;case 22:n=e.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,A=Ft,R=He;if(Ft=A||n,He=R||x,et(t,e),He=R,Ft=A,tt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||x||Ft||He||Wa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){x=a=t;try{if(i=x.stateNode,n)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=x.stateNode;var D=x.memoizedProps.style,M=D!=null&&D.hasOwnProperty("display")?D.display:null;d.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(G){he(x,x.return,G)}}}else if(t.tag===6){if(a===null){x=t;try{x.stateNode.nodeValue=n?"":x.memoizedProps}catch(G){he(x,x.return,G)}}}else if(t.tag===18){if(a===null){x=t;try{var O=x.stateNode;n?Rd(O,!0):Rd(x.stateNode,!1)}catch(G){he(x,x.return,G)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ci(e,a))));break;case 19:et(t,e),tt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ci(e,l)));break;case 30:break;case 21:break;default:et(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Cf(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var n=a.stateNode,i=$o(e);_i(e,i,n);break;case 5:var o=a.stateNode;a.flags&32&&(rl(o,""),a.flags&=-33);var d=$o(e);_i(e,d,o);break;case 3:case 4:var x=a.stateNode.containerInfo,A=$o(e);Wo(e,A,x);break;default:throw Error(u(161))}}catch(R){he(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Xf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Pt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)kf(e,t.alternate,t),t=t.sibling}function Wa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:xa(4,t,t.return),Wa(t);break;case 1:Ut(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Rf(t,t.return,a),Wa(t);break;case 27:An(t.stateNode);case 26:case 5:Ut(t,t.return),Wa(t);break;case 22:t.memoizedState===null&&Wa(t);break;case 30:Wa(t);break;default:Wa(t)}e=e.sibling}}function ea(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:ea(n,i,a),bn(4,i);break;case 1:if(ea(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(A){he(l,l.return,A)}if(l=i,n=l.updateQueue,n!==null){var d=l.stateNode;try{var x=n.shared.hiddenCallbacks;if(x!==null)for(n.shared.hiddenCallbacks=null,n=0;n<x.length;n++)xu(x[n],d)}catch(A){he(l,l.return,A)}}a&&o&64&&Of(i),xn(i,i.return);break;case 27:Df(i);case 26:case 5:ea(n,i,a),a&&l===null&&o&4&&_f(i),xn(i,i.return);break;case 12:ea(n,i,a);break;case 31:ea(n,i,a),a&&o&4&&Bf(n,i);break;case 13:ea(n,i,a),a&&o&4&&Yf(n,i);break;case 22:i.memoizedState===null&&ea(n,i,a),xn(i,i.return);break;case 30:break;default:ea(n,i,a)}t=t.sibling}}function Io(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ln(a))}function Po(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ln(e))}function Tt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gf(e,t,a,l),t=t.sibling}function Gf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Tt(e,t,a,l),n&2048&&bn(9,t);break;case 1:Tt(e,t,a,l);break;case 3:Tt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ln(e)));break;case 12:if(n&2048){Tt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,d=i.onPostCommit;typeof d=="function"&&d(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){he(t,t.return,x)}}else Tt(e,t,a,l);break;case 31:Tt(e,t,a,l);break;case 13:Tt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?Tt(e,t,a,l):vn(e,t):i._visibility&2?Tt(e,t,a,l):(i._visibility|=2,Nl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Io(o,t);break;case 24:Tt(e,t,a,l),n&2048&&Po(t.alternate,t);break;default:Tt(e,t,a,l)}}function Nl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,d=a,x=l,A=o.flags;switch(o.tag){case 0:case 11:case 15:Nl(i,o,d,x,n),bn(8,o);break;case 23:break;case 22:var R=o.stateNode;o.memoizedState!==null?R._visibility&2?Nl(i,o,d,x,n):vn(i,o):(R._visibility|=2,Nl(i,o,d,x,n)),n&&A&2048&&Io(o.alternate,o);break;case 24:Nl(i,o,d,x,n),n&&A&2048&&Po(o.alternate,o);break;default:Nl(i,o,d,x,n)}t=t.sibling}}function vn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:vn(a,l),n&2048&&Io(l.alternate,l);break;case 24:vn(a,l),n&2048&&Po(l.alternate,l);break;default:vn(a,l)}t=t.sibling}}var yn=8192;function Al(e,t,a){if(e.subtreeFlags&yn)for(e=e.child;e!==null;)Qf(e,t,a),e=e.sibling}function Qf(e,t,a){switch(e.tag){case 26:Al(e,t,a),e.flags&yn&&e.memoizedState!==null&&oh(a,Mt,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,a);break;case 3:case 4:var l=Mt;Mt=Ji(e.stateNode.containerInfo),Al(e,t,a),Mt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=yn,yn=16777216,Al(e,t,a),yn=l):Al(e,t,a));break;default:Al(e,t,a)}}function Vf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Sn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ye=l,Jf(l,e)}Vf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zf(e),e=e.sibling}function Zf(e){switch(e.tag){case 0:case 11:case 15:Sn(e),e.flags&2048&&xa(9,e,e.return);break;case 3:Sn(e);break;case 12:Sn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Di(e)):Sn(e);break;default:Sn(e)}}function Di(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ye=l,Jf(l,e)}Vf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:xa(8,t,t.return),Di(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Di(t));break;default:Di(t)}e=e.sibling}}function Jf(e,t){for(;Ye!==null;){var a=Ye;switch(a.tag){case 0:case 11:case 15:xa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ln(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ye=l;else e:for(a=e;Ye!==null;){l=Ye;var n=l.sibling,i=l.return;if(Hf(l),l===a){Ye=null;break e}if(n!==null){n.return=i,Ye=n;break e}Ye=i}}}var Em={getCacheForType:function(e){var t=Ge(De),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ge(De).controller.signal}},wm=typeof WeakMap=="function"?WeakMap:Map,de=0,Ee=null,le=null,ie=0,me=0,ft=null,va=!1,Ml=!1,es=!1,ta=0,Me=0,ya=0,Fa=0,ts=0,dt=0,Tl=0,En=null,at=null,as=!1,Ui=0,Kf=0,ki=1/0,Hi=null,Sa=null,Le=0,Ea=null,Ol=null,aa=0,ls=0,ns=null,$f=null,wn=0,is=null;function pt(){return(de&2)!==0&&ie!==0?ie&-ie:_.T!==null?fs():uc()}function Wf(){if(dt===0)if((ie&536870912)===0||oe){var e=Vn;Vn<<=1,(Vn&3932160)===0&&(Vn=262144),dt=e}else dt=536870912;return e=ct.current,e!==null&&(e.flags|=32),dt}function lt(e,t,a){(e===Ee&&(me===2||me===9)||e.cancelPendingCommit!==null)&&(Rl(e,0),wa(e,ie,dt,!1)),Gl(e,a),((de&2)===0||e!==Ee)&&(e===Ee&&((de&2)===0&&(Fa|=a),Me===4&&wa(e,ie,dt,!1)),kt(e))}function Ff(e,t,a){if((de&6)!==0)throw Error(u(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Xl(e,t),n=l?Nm(e,t):os(e,t,!0),i=l;do{if(n===0){Ml&&!l&&wa(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!jm(a)){n=os(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var d=e;n=En;var x=d.current.memoizedState.isDehydrated;if(x&&(Rl(d,o).flags|=256),o=os(d,o,!1),o!==2){if(es&&!x){d.errorRecoveryDisabledLanes|=i,Fa|=i,n=4;break e}i=at,at=n,i!==null&&(at===null?at=i:at.push.apply(at,i))}n=o}if(i=!1,n!==2)continue}}if(n===1){Rl(e,0),wa(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:wa(l,t,dt,!va);break e;case 2:at=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(n=Ui+300-nt(),10<n)){if(wa(l,t,dt,!va),Jn(l,0,!0)!==0)break e;aa=t,l.timeoutHandle=Md(If.bind(null,l,a,at,Hi,as,t,dt,Fa,Tl,va,i,"Throttled",-0,0),n);break e}If(l,a,at,Hi,as,t,dt,Fa,Tl,va,i,null,-0,0)}}break}while(!0);kt(e)}function If(e,t,a,l,n,i,o,d,x,A,R,D,M,O){if(e.timeoutHandle=-1,D=t.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},Qf(t,i,D);var G=(i&62914560)===i?Ui-nt():(i&4194048)===i?Kf-nt():0;if(G=sh(D,G),G!==null){aa=i,e.cancelPendingCommit=G(rd.bind(null,e,t,i,a,l,n,o,d,x,R,D,null,M,O)),wa(e,i,o,!A);return}}rd(e,t,i,a,l,n,o,d,x)}function jm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ot(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wa(e,t,a,l){t&=~ts,t&=~Fa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-rt(n),o=1<<i;l[i]=-1,n&=~o}a!==0&&oc(e,a,t)}function Li(){return(de&6)===0?(jn(0),!1):!0}function rs(){if(le!==null){if(me===0)var e=le.return;else e=le,Vt=Xa=null,Eo(e),Sl=null,rn=0,e=le;for(;e!==null;)Tf(e.alternate,e),e=e.return;le=null}}function Rl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Qm(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),aa=0,rs(),Ee=e,le=a=Gt(e.current,null),ie=t,me=0,ft=null,va=!1,Ml=Xl(e,t),es=!1,Tl=dt=ts=Fa=ya=Me=0,at=En=null,as=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-rt(l),i=1<<n;t|=e[n],l&=~i}return ta=t,ii(),a}function Pf(e,t){ee=null,_.H=mn,t===yl||t===pi?(t=mu(),me=3):t===co?(t=mu(),me=4):me=t===Lo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ft=t,le===null&&(Me=1,Ai(e,vt(t,e.current)))}function ed(){var e=ct.current;return e===null?!0:(ie&4194048)===ie?wt===null:(ie&62914560)===ie||(ie&536870912)!==0?e===wt:!1}function td(){var e=_.H;return _.H=mn,e===null?mn:e}function ad(){var e=_.A;return _.A=Em,e}function Bi(){Me=4,va||(ie&4194048)!==ie&&ct.current!==null||(Ml=!0),(ya&134217727)===0&&(Fa&134217727)===0||Ee===null||wa(Ee,ie,dt,!1)}function os(e,t,a){var l=de;de|=2;var n=td(),i=ad();(Ee!==e||ie!==t)&&(Hi=null,Rl(e,t)),t=!1;var o=Me;e:do try{if(me!==0&&le!==null){var d=le,x=ft;switch(me){case 8:rs(),o=6;break e;case 3:case 2:case 9:case 6:ct.current===null&&(t=!0);var A=me;if(me=0,ft=null,_l(e,d,x,A),a&&Ml){o=0;break e}break;default:A=me,me=0,ft=null,_l(e,d,x,A)}}zm(),o=Me;break}catch(R){Pf(e,R)}while(!0);return t&&e.shellSuspendCounter++,Vt=Xa=null,de=l,_.H=n,_.A=i,le===null&&(Ee=null,ie=0,ii()),o}function zm(){for(;le!==null;)ld(le)}function Nm(e,t){var a=de;de|=2;var l=td(),n=ad();Ee!==e||ie!==t?(Hi=null,ki=nt()+500,Rl(e,t)):Ml=Xl(e,t);e:do try{if(me!==0&&le!==null){t=le;var i=ft;t:switch(me){case 1:me=0,ft=null,_l(e,t,i,1);break;case 2:case 9:if(du(i)){me=0,ft=null,nd(t);break}t=function(){me!==2&&me!==9||Ee!==e||(me=7),kt(e)},i.then(t,t);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:du(i)?(me=0,ft=null,nd(t)):(me=0,ft=null,_l(e,t,i,7));break;case 5:var o=null;switch(le.tag){case 26:o=le.memoizedState;case 5:case 27:var d=le;if(o?Gd(o):d.stateNode.complete){me=0,ft=null;var x=d.sibling;if(x!==null)le=x;else{var A=d.return;A!==null?(le=A,Yi(A)):le=null}break t}}me=0,ft=null,_l(e,t,i,5);break;case 6:me=0,ft=null,_l(e,t,i,6);break;case 8:rs(),Me=6;break e;default:throw Error(u(462))}}Am();break}catch(R){Pf(e,R)}while(!0);return Vt=Xa=null,_.H=l,_.A=n,de=a,le!==null?0:(Ee=null,ie=0,ii(),Me)}function Am(){for(;le!==null&&!W0();)ld(le)}function ld(e){var t=Af(e.alternate,e,ta);e.memoizedProps=e.pendingProps,t===null?Yi(e):le=t}function nd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Sf(a,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=Sf(a,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:Eo(t);default:Tf(a,t),t=le=tu(t,ta),t=Af(a,t,ta)}e.memoizedProps=e.pendingProps,t===null?Yi(e):le=t}function _l(e,t,a,l){Vt=Xa=null,Eo(t),Sl=null,rn=0;var n=t.return;try{if(hm(e,n,t,a,ie)){Me=1,Ai(e,vt(a,e.current)),le=null;return}}catch(i){if(n!==null)throw le=n,i;Me=1,Ai(e,vt(a,e.current)),le=null;return}t.flags&32768?(oe||l===1?e=!0:Ml||(ie&536870912)!==0?e=!1:(va=e=!0,(l===2||l===9||l===3||l===6)&&(l=ct.current,l!==null&&l.tag===13&&(l.flags|=16384))),id(t,e)):Yi(t)}function Yi(e){var t=e;do{if((t.flags&32768)!==0){id(t,va);return}e=t.return;var a=xm(t.alternate,t,ta);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Me===0&&(Me=5)}function id(e,t){do{var a=vm(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);Me=6,le=null}function rd(e,t,a,l,n,i,o,d,x){e.cancelPendingCommit=null;do qi();while(Le!==0);if((de&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=Kr,rp(e,a,i,o,d,x),e===Ee&&(le=Ee=null,ie=0),Ol=t,Ea=e,aa=a,ls=i,ns=n,$f=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Rm(Gn,function(){return fd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=_.T,_.T=null,n=q.p,q.p=2,o=de,de|=4;try{ym(e,t,a)}finally{de=o,q.p=n,_.T=l}}Le=1,od(),sd(),cd()}}function od(){if(Le===1){Le=0;var e=Ea,t=Ol,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null;var l=q.p;q.p=2;var n=de;de|=4;try{qf(t,e);var i=vs,o=Zc(e.containerInfo),d=i.focusedElem,x=i.selectionRange;if(o!==d&&d&&d.ownerDocument&&Vc(d.ownerDocument.documentElement,d)){if(x!==null&&Gr(d)){var A=x.start,R=x.end;if(R===void 0&&(R=A),"selectionStart"in d)d.selectionStart=A,d.selectionEnd=Math.min(R,d.value.length);else{var D=d.ownerDocument||document,M=D&&D.defaultView||window;if(M.getSelection){var O=M.getSelection(),G=d.textContent.length,$=Math.min(x.start,G),ve=x.end===void 0?$:Math.min(x.end,G);!O.extend&&$>ve&&(o=ve,ve=$,$=o);var w=Qc(d,$),v=Qc(d,ve);if(w&&v&&(O.rangeCount!==1||O.anchorNode!==w.node||O.anchorOffset!==w.offset||O.focusNode!==v.node||O.focusOffset!==v.offset)){var z=D.createRange();z.setStart(w.node,w.offset),O.removeAllRanges(),$>ve?(O.addRange(z),O.extend(v.node,v.offset)):(z.setEnd(v.node,v.offset),O.addRange(z))}}}}for(D=[],O=d;O=O.parentNode;)O.nodeType===1&&D.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<D.length;d++){var C=D[d];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}Pi=!!xs,vs=xs=null}finally{de=n,q.p=l,_.T=a}}e.current=t,Le=2}}function sd(){if(Le===2){Le=0;var e=Ea,t=Ol,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=_.T,_.T=null;var l=q.p;q.p=2;var n=de;de|=4;try{kf(e,t.alternate,t)}finally{de=n,q.p=l,_.T=a}}Le=3}}function cd(){if(Le===4||Le===3){Le=0,F0();var e=Ea,t=Ol,a=aa,l=$f;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Le=5:(Le=0,Ol=Ea=null,ud(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Sa=null),jr(a),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(ql,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=_.T,n=q.p,q.p=2,_.T=null;try{for(var i=e.onRecoverableError,o=0;o<l.length;o++){var d=l[o];i(d.value,{componentStack:d.stack})}}finally{_.T=t,q.p=n}}(aa&3)!==0&&qi(),kt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===is?wn++:(wn=0,is=e):wn=0,jn(0)}}function ud(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ln(t)))}function qi(){return od(),sd(),cd(),fd()}function fd(){if(Le!==5)return!1;var e=Ea,t=ls;ls=0;var a=jr(aa),l=_.T,n=q.p;try{q.p=32>a?32:a,_.T=null,a=ns,ns=null;var i=Ea,o=aa;if(Le=0,Ol=Ea=null,aa=0,(de&6)!==0)throw Error(u(331));var d=de;if(de|=4,Zf(i.current),Gf(i,i.current,o,a),de=d,jn(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(ql,i)}catch{}return!0}finally{q.p=n,_.T=l,ud(e,t)}}function dd(e,t,a){t=vt(a,t),t=Ho(e.stateNode,t,2),e=ha(e,t,2),e!==null&&(Gl(e,2),kt(e))}function he(e,t,a){if(e.tag===3)dd(e,e,a);else for(;t!==null;){if(t.tag===3){dd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Sa===null||!Sa.has(l))){e=vt(a,e),a=pf(2),l=ha(t,a,2),l!==null&&(mf(a,l,t,e),Gl(l,2),kt(l));break}}t=t.return}}function ss(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new wm;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(es=!0,n.add(a),e=Mm.bind(null,e,t,a),t.then(e,e))}function Mm(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ee===e&&(ie&a)===a&&(Me===4||Me===3&&(ie&62914560)===ie&&300>nt()-Ui?(de&2)===0&&Rl(e,0):ts|=a,Tl===ie&&(Tl=0)),kt(e)}function pd(e,t){t===0&&(t=rc()),e=Ba(e,t),e!==null&&(Gl(e,t),kt(e))}function Tm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),pd(e,a)}function Om(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),pd(e,a)}function Rm(e,t){return yr(e,t)}var Xi=null,Cl=null,cs=!1,Gi=!1,us=!1,ja=0;function kt(e){e!==Cl&&e.next===null&&(Cl===null?Xi=Cl=e:Cl=Cl.next=e),Gi=!0,cs||(cs=!0,Cm())}function jn(e,t){if(!us&&Gi){us=!0;do for(var a=!1,l=Xi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var o=l.suspendedLanes,d=l.pingedLanes;i=(1<<31-rt(42|e)+1)-1,i&=n&~(o&~d),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,bd(l,i))}else i=ie,i=Jn(l,l===Ee?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Xl(l,i)||(a=!0,bd(l,i));l=l.next}while(a);us=!1}}function _m(){md()}function md(){Gi=cs=!1;var e=0;ja!==0&&Gm()&&(e=ja);for(var t=nt(),a=null,l=Xi;l!==null;){var n=l.next,i=hd(l,t);i===0?(l.next=null,a===null?Xi=n:a.next=n,n===null&&(Cl=a)):(a=l,(e!==0||(i&3)!==0)&&(Gi=!0)),l=n}Le!==0&&Le!==5||jn(e),ja!==0&&(ja=0)}function hd(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-rt(i),d=1<<o,x=n[o];x===-1?((d&a)===0||(d&l)!==0)&&(n[o]=ip(d,t)):x<=t&&(e.expiredLanes|=d),i&=~d}if(t=Ee,a=ie,a=Jn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(me===2||me===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Sr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Xl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Sr(l),jr(a)){case 2:case 8:a=nc;break;case 32:a=Gn;break;case 268435456:a=ic;break;default:a=Gn}return l=gd.bind(null,e),a=yr(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Sr(l),e.callbackPriority=2,e.callbackNode=null,2}function gd(e,t){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(qi()&&e.callbackNode!==a)return null;var l=ie;return l=Jn(e,e===Ee?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ff(e,l,t),hd(e,nt()),e.callbackNode!=null&&e.callbackNode===a?gd.bind(null,e):null)}function bd(e,t){if(qi())return null;Ff(e,t,!0)}function Cm(){Vm(function(){(de&6)!==0?yr(lc,_m):md()})}function fs(){if(ja===0){var e=xl;e===0&&(e=Qn,Qn<<=1,(Qn&261888)===0&&(Qn=256)),ja=e}return ja}function xd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fn(""+e)}function vd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Dm(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=xd((n[Fe]||null).action),o=l.submitter;o&&(t=(t=o[Fe]||null)?xd(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var d=new ti("action","action",null,l,n);e.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ja!==0){var x=o?vd(n,o):new FormData(n);Ro(a,{pending:!0,data:x,method:n.method,action:i},null,x)}}else typeof i=="function"&&(d.preventDefault(),x=o?vd(n,o):new FormData(n),Ro(a,{pending:!0,data:x,method:n.method,action:i},i,x))},currentTarget:n}]})}}for(var ds=0;ds<Jr.length;ds++){var ps=Jr[ds],Um=ps.toLowerCase(),km=ps[0].toUpperCase()+ps.slice(1);At(Um,"on"+km)}At($c,"onAnimationEnd"),At(Wc,"onAnimationIteration"),At(Fc,"onAnimationStart"),At("dblclick","onDoubleClick"),At("focusin","onFocus"),At("focusout","onBlur"),At(Ip,"onTransitionRun"),At(Pp,"onTransitionStart"),At(em,"onTransitionCancel"),At(Ic,"onTransitionEnd"),nl("onMouseEnter",["mouseout","mouseover"]),nl("onMouseLeave",["mouseout","mouseover"]),nl("onPointerEnter",["pointerout","pointerover"]),nl("onPointerLeave",["pointerout","pointerover"]),Ua("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ua("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ua("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ua("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ua("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ua("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zn));function yd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var o=l.length-1;0<=o;o--){var d=l[o],x=d.instance,A=d.currentTarget;if(d=d.listener,x!==i&&n.isPropagationStopped())break e;i=d,n.currentTarget=A;try{i(n)}catch(R){ni(R)}n.currentTarget=null,i=x}else for(o=0;o<l.length;o++){if(d=l[o],x=d.instance,A=d.currentTarget,d=d.listener,x!==i&&n.isPropagationStopped())break e;i=d,n.currentTarget=A;try{i(n)}catch(R){ni(R)}n.currentTarget=null,i=x}}}}function ne(e,t){var a=t[zr];a===void 0&&(a=t[zr]=new Set);var l=e+"__bubble";a.has(l)||(Sd(t,e,2,!1),a.add(l))}function ms(e,t,a){var l=0;t&&(l|=4),Sd(a,e,l,t)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function hs(e){if(!e[Qi]){e[Qi]=!0,pc.forEach(function(a){a!=="selectionchange"&&(Hm.has(a)||ms(a,!1,e),ms(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qi]||(t[Qi]=!0,ms("selectionchange",!1,t))}}function Sd(e,t,a,l){switch(Wd(t)){case 2:var n=fh;break;case 8:n=dh;break;default:n=Os}a=n.bind(null,t,a,e),n=void 0,!Dr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function gs(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var d=l.stateNode.containerInfo;if(d===n)break;if(o===4)for(o=l.return;o!==null;){var x=o.tag;if((x===3||x===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;d!==null;){if(o=tl(d),o===null)return;if(x=o.tag,x===5||x===6||x===26||x===27){l=i=o;continue e}d=d.parentNode}}l=l.return}zc(function(){var A=i,R=_r(a),D=[];e:{var M=Pc.get(e);if(M!==void 0){var O=ti,G=e;switch(e){case"keypress":if(Pn(a)===0)break e;case"keydown":case"keyup":O=Op;break;case"focusin":G="focus",O=Lr;break;case"focusout":G="blur",O=Lr;break;case"beforeblur":case"afterblur":O=Lr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Mc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=xp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Cp;break;case $c:case Wc:case Fc:O=Sp;break;case Ic:O=Up;break;case"scroll":case"scrollend":O=gp;break;case"wheel":O=Hp;break;case"copy":case"cut":case"paste":O=wp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Oc;break;case"toggle":case"beforetoggle":O=Bp}var $=(t&4)!==0,ve=!$&&(e==="scroll"||e==="scrollend"),w=$?M!==null?M+"Capture":null:M;$=[];for(var v=A,z;v!==null;){var C=v;if(z=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||z===null||w===null||(C=Zl(v,w),C!=null&&$.push(Nn(v,C,z))),ve)break;v=v.return}0<$.length&&(M=new O(M,G,null,a,R),D.push({event:M,listeners:$}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",M&&a!==Rr&&(G=a.relatedTarget||a.fromElement)&&(tl(G)||G[el]))break e;if((O||M)&&(M=R.window===R?R:(M=R.ownerDocument)?M.defaultView||M.parentWindow:window,O?(G=a.relatedTarget||a.toElement,O=A,G=G?tl(G):null,G!==null&&(ve=b(G),$=G.tag,G!==ve||$!==5&&$!==27&&$!==6)&&(G=null)):(O=null,G=A),O!==G)){if($=Mc,C="onMouseLeave",w="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&($=Oc,C="onPointerLeave",w="onPointerEnter",v="pointer"),ve=O==null?M:Vl(O),z=G==null?M:Vl(G),M=new $(C,v+"leave",O,a,R),M.target=ve,M.relatedTarget=z,C=null,tl(R)===A&&($=new $(w,v+"enter",G,a,R),$.target=z,$.relatedTarget=ve,C=$),ve=C,O&&G)t:{for($=Lm,w=O,v=G,z=0,C=w;C;C=$(C))z++;C=0;for(var K=v;K;K=$(K))C++;for(;0<z-C;)w=$(w),z--;for(;0<C-z;)v=$(v),C--;for(;z--;){if(w===v||v!==null&&w===v.alternate){$=w;break t}w=$(w),v=$(v)}$=null}else $=null;O!==null&&Ed(D,M,O,$,!1),G!==null&&ve!==null&&Ed(D,ve,G,$,!0)}}e:{if(M=A?Vl(A):window,O=M.nodeName&&M.nodeName.toLowerCase(),O==="select"||O==="input"&&M.type==="file")var ue=Lc;else if(kc(M))if(Bc)ue=$p;else{ue=Jp;var V=Zp}else O=M.nodeName,!O||O.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?A&&Or(A.elementType)&&(ue=Lc):ue=Kp;if(ue&&(ue=ue(e,A))){Hc(D,ue,a,R);break e}V&&V(e,M,A),e==="focusout"&&A&&M.type==="number"&&A.memoizedProps.value!=null&&Tr(M,"number",M.value)}switch(V=A?Vl(A):window,e){case"focusin":(kc(V)||V.contentEditable==="true")&&(ul=V,Qr=A,en=null);break;case"focusout":en=Qr=ul=null;break;case"mousedown":Vr=!0;break;case"contextmenu":case"mouseup":case"dragend":Vr=!1,Jc(D,a,R);break;case"selectionchange":if(Fp)break;case"keydown":case"keyup":Jc(D,a,R)}var te;if(Yr)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else cl?Dc(e,a)&&(re="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(Rc&&a.locale!=="ko"&&(cl||re!=="onCompositionStart"?re==="onCompositionEnd"&&cl&&(te=Nc()):(sa=R,Ur="value"in sa?sa.value:sa.textContent,cl=!0)),V=Vi(A,re),0<V.length&&(re=new Tc(re,e,null,a,R),D.push({event:re,listeners:V}),te?re.data=te:(te=Uc(a),te!==null&&(re.data=te)))),(te=qp?Xp(e,a):Gp(e,a))&&(re=Vi(A,"onBeforeInput"),0<re.length&&(V=new Tc("onBeforeInput","beforeinput",null,a,R),D.push({event:V,listeners:re}),V.data=te)),Dm(D,e,A,a,R)}yd(D,t)})}function Nn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Vi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Zl(e,a),n!=null&&l.unshift(Nn(e,n,i)),n=Zl(e,t),n!=null&&l.push(Nn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Lm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ed(e,t,a,l,n){for(var i=t._reactName,o=[];a!==null&&a!==l;){var d=a,x=d.alternate,A=d.stateNode;if(d=d.tag,x!==null&&x===l)break;d!==5&&d!==26&&d!==27||A===null||(x=A,n?(A=Zl(a,i),A!=null&&o.unshift(Nn(a,A,x))):n||(A=Zl(a,i),A!=null&&o.push(Nn(a,A,x)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var Bm=/\r\n?/g,Ym=/\u0000|\uFFFD/g;function wd(e){return(typeof e=="string"?e:""+e).replace(Bm,`
`).replace(Ym,"")}function jd(e,t){return t=wd(t),wd(e)===t}function xe(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||rl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&rl(e,""+l);break;case"className":$n(e,"class",l);break;case"tabIndex":$n(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":$n(e,a,l);break;case"style":wc(e,l,i);break;case"data":if(t!=="object"){$n(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Fn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&xe(e,t,"name",n.name,n,null),xe(e,t,"formEncType",n.formEncType,n,null),xe(e,t,"formMethod",n.formMethod,n,null),xe(e,t,"formTarget",n.formTarget,n,null)):(xe(e,t,"encType",n.encType,n,null),xe(e,t,"method",n.method,n,null),xe(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Fn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=qt);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Fn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Kn(e,"popover",l);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Kn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=mp.get(a)||a,Kn(e,a,l))}}function bs(e,t,a,l,n,i){switch(a){case"style":wc(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?rl(e,l):(typeof l=="number"||typeof l=="bigint")&&rl(e,""+l);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"onClick":l!=null&&(e.onclick=qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Fe]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Kn(e,a,l)}}}function Ve(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var o=a[i];if(o!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:xe(e,t,i,o,a,null)}}n&&xe(e,t,"srcSet",a.srcSet,a,null),l&&xe(e,t,"src",a.src,a,null);return;case"input":ne("invalid",e);var d=i=o=n=null,x=null,A=null;for(l in a)if(a.hasOwnProperty(l)){var R=a[l];if(R!=null)switch(l){case"name":n=R;break;case"type":o=R;break;case"checked":x=R;break;case"defaultChecked":A=R;break;case"value":i=R;break;case"defaultValue":d=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,t));break;default:xe(e,t,l,R,a,null)}}vc(e,i,d,x,A,o,n,!1);return;case"select":ne("invalid",e),l=o=i=null;for(n in a)if(a.hasOwnProperty(n)&&(d=a[n],d!=null))switch(n){case"value":i=d;break;case"defaultValue":o=d;break;case"multiple":l=d;default:xe(e,t,n,d,a,null)}t=i,a=o,e.multiple=!!l,t!=null?il(e,!!l,t,!1):a!=null&&il(e,!!l,a,!0);return;case"textarea":ne("invalid",e),i=n=l=null;for(o in a)if(a.hasOwnProperty(o)&&(d=a[o],d!=null))switch(o){case"value":l=d;break;case"defaultValue":n=d;break;case"children":i=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(u(91));break;default:xe(e,t,o,d,a,null)}Sc(e,l,n,i);return;case"option":for(x in a)a.hasOwnProperty(x)&&(l=a[x],l!=null)&&(x==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":xe(e,t,x,l,a,null));return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(l=0;l<zn.length;l++)ne(zn[l],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in a)if(a.hasOwnProperty(A)&&(l=a[A],l!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:xe(e,t,A,l,a,null)}return;default:if(Or(t)){for(R in a)a.hasOwnProperty(R)&&(l=a[R],l!==void 0&&bs(e,t,R,l,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(l=a[d],l!=null&&xe(e,t,d,l,a,null))}function qm(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,o=null,d=null,x=null,A=null,R=null;for(O in a){var D=a[O];if(a.hasOwnProperty(O)&&D!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":x=D;default:l.hasOwnProperty(O)||xe(e,t,O,null,l,D)}}for(var M in l){var O=l[M];if(D=a[M],l.hasOwnProperty(M)&&(O!=null||D!=null))switch(M){case"type":i=O;break;case"name":n=O;break;case"checked":A=O;break;case"defaultChecked":R=O;break;case"value":o=O;break;case"defaultValue":d=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(u(137,t));break;default:O!==D&&xe(e,t,M,O,l,D)}}Mr(e,o,d,x,A,R,i,n);return;case"select":O=o=d=M=null;for(i in a)if(x=a[i],a.hasOwnProperty(i)&&x!=null)switch(i){case"value":break;case"multiple":O=x;default:l.hasOwnProperty(i)||xe(e,t,i,null,l,x)}for(n in l)if(i=l[n],x=a[n],l.hasOwnProperty(n)&&(i!=null||x!=null))switch(n){case"value":M=i;break;case"defaultValue":d=i;break;case"multiple":o=i;default:i!==x&&xe(e,t,n,i,l,x)}t=d,a=o,l=O,M!=null?il(e,!!a,M,!1):!!l!=!!a&&(t!=null?il(e,!!a,t,!0):il(e,!!a,a?[]:"",!1));return;case"textarea":O=M=null;for(d in a)if(n=a[d],a.hasOwnProperty(d)&&n!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:xe(e,t,d,null,l,n)}for(o in l)if(n=l[o],i=a[o],l.hasOwnProperty(o)&&(n!=null||i!=null))switch(o){case"value":M=n;break;case"defaultValue":O=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==i&&xe(e,t,o,n,l,i)}yc(e,M,O);return;case"option":for(var G in a)M=a[G],a.hasOwnProperty(G)&&M!=null&&!l.hasOwnProperty(G)&&(G==="selected"?e.selected=!1:xe(e,t,G,null,l,M));for(x in l)M=l[x],O=a[x],l.hasOwnProperty(x)&&M!==O&&(M!=null||O!=null)&&(x==="selected"?e.selected=M&&typeof M!="function"&&typeof M!="symbol":xe(e,t,x,M,l,O));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in a)M=a[$],a.hasOwnProperty($)&&M!=null&&!l.hasOwnProperty($)&&xe(e,t,$,null,l,M);for(A in l)if(M=l[A],O=a[A],l.hasOwnProperty(A)&&M!==O&&(M!=null||O!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,t));break;default:xe(e,t,A,M,l,O)}return;default:if(Or(t)){for(var ve in a)M=a[ve],a.hasOwnProperty(ve)&&M!==void 0&&!l.hasOwnProperty(ve)&&bs(e,t,ve,void 0,l,M);for(R in l)M=l[R],O=a[R],!l.hasOwnProperty(R)||M===O||M===void 0&&O===void 0||bs(e,t,R,M,l,O);return}}for(var w in a)M=a[w],a.hasOwnProperty(w)&&M!=null&&!l.hasOwnProperty(w)&&xe(e,t,w,null,l,M);for(D in l)M=l[D],O=a[D],!l.hasOwnProperty(D)||M===O||M==null&&O==null||xe(e,t,D,M,l,O)}function zd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Xm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,o=n.initiatorType,d=n.duration;if(i&&d&&zd(o)){for(o=0,d=n.responseEnd,l+=1;l<a.length;l++){var x=a[l],A=x.startTime;if(A>d)break;var R=x.transferSize,D=x.initiatorType;R&&zd(D)&&(x=x.responseEnd,o+=R*(x<d?1:(d-A)/(x-A)))}if(--l,t+=8*(i+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xs=null,vs=null;function Zi(e){return e.nodeType===9?e:e.ownerDocument}function Nd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ad(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ys(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ss=null;function Gm(){var e=window.event;return e&&e.type==="popstate"?e===Ss?!1:(Ss=e,!0):(Ss=null,!1)}var Md=typeof setTimeout=="function"?setTimeout:void 0,Qm=typeof clearTimeout=="function"?clearTimeout:void 0,Td=typeof Promise=="function"?Promise:void 0,Vm=typeof queueMicrotask=="function"?queueMicrotask:typeof Td<"u"?function(e){return Td.resolve(null).then(e).catch(Zm)}:Md;function Zm(e){setTimeout(function(){throw e})}function za(e){return e==="head"}function Od(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Hl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")An(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,An(a);for(var i=a.firstChild;i;){var o=i.nextSibling,d=i.nodeName;i[Ql]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=o}}else a==="body"&&An(e.ownerDocument.body);a=n}while(a);Hl(t)}function Rd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Es(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Es(a),Nr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Jm(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ql])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=jt(e.nextSibling),e===null)break}return null}function Km(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=jt(e.nextSibling),e===null))return null;return e}function _d(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=jt(e.nextSibling),e===null))return null;return e}function ws(e){return e.data==="$?"||e.data==="$~"}function js(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $m(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var zs=null;function Cd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return jt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Dd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Ud(e,t,a){switch(t=Zi(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function An(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Nr(e)}var zt=new Map,kd=new Set;function Ji(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var la=q.d;q.d={f:Wm,r:Fm,D:Im,C:Pm,L:eh,m:th,X:lh,S:ah,M:nh};function Wm(){var e=la.f(),t=Li();return e||t}function Fm(e){var t=al(e);t!==null&&t.tag===5&&t.type==="form"?Iu(t):la.r(e)}var Dl=typeof document>"u"?null:document;function Hd(e,t,a){var l=Dl;if(l&&typeof t=="string"&&t){var n=bt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),kd.has(n)||(kd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ve(t,"link",e),Be(t),l.head.appendChild(t)))}}function Im(e){la.D(e),Hd("dns-prefetch",e,null)}function Pm(e,t){la.C(e,t),Hd("preconnect",e,t)}function eh(e,t,a){la.L(e,t,a);var l=Dl;if(l&&e&&t){var n='link[rel="preload"][as="'+bt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+bt(a.imageSizes)+'"]')):n+='[href="'+bt(e)+'"]';var i=n;switch(t){case"style":i=Ul(e);break;case"script":i=kl(e)}zt.has(i)||(e=S({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),zt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Mn(i))||t==="script"&&l.querySelector(Tn(i))||(t=l.createElement("link"),Ve(t,"link",e),Be(t),l.head.appendChild(t)))}}function th(e,t){la.m(e,t);var a=Dl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+bt(l)+'"][href="'+bt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=kl(e)}if(!zt.has(i)&&(e=S({rel:"modulepreload",href:e},t),zt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Tn(i)))return}l=a.createElement("link"),Ve(l,"link",e),Be(l),a.head.appendChild(l)}}}function ah(e,t,a){la.S(e,t,a);var l=Dl;if(l&&e){var n=ll(l).hoistableStyles,i=Ul(e);t=t||"default";var o=n.get(i);if(!o){var d={loading:0,preload:null};if(o=l.querySelector(Mn(i)))d.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},a),(a=zt.get(i))&&Ns(e,a);var x=o=l.createElement("link");Be(x),Ve(x,"link",e),x._p=new Promise(function(A,R){x.onload=A,x.onerror=R}),x.addEventListener("load",function(){d.loading|=1}),x.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Ki(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:d},n.set(i,o)}}}function lh(e,t){la.X(e,t);var a=Dl;if(a&&e){var l=ll(a).hoistableScripts,n=kl(e),i=l.get(n);i||(i=a.querySelector(Tn(n)),i||(e=S({src:e,async:!0},t),(t=zt.get(n))&&As(e,t),i=a.createElement("script"),Be(i),Ve(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function nh(e,t){la.M(e,t);var a=Dl;if(a&&e){var l=ll(a).hoistableScripts,n=kl(e),i=l.get(n);i||(i=a.querySelector(Tn(n)),i||(e=S({src:e,async:!0,type:"module"},t),(t=zt.get(n))&&As(e,t),i=a.createElement("script"),Be(i),Ve(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Ld(e,t,a,l){var n=(n=ae.current)?Ji(n):null;if(!n)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ul(a.href),a=ll(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ul(a.href);var i=ll(n).hoistableStyles,o=i.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=n.querySelector(Mn(e)))&&!i._p&&(o.instance=i,o.state.loading=5),zt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},zt.set(e,a),i||ih(n,e,a,o.state))),t&&l===null)throw Error(u(528,""));return o}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=kl(a),a=ll(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Ul(e){return'href="'+bt(e)+'"'}function Mn(e){return'link[rel="stylesheet"]['+e+"]"}function Bd(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function ih(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ve(t,"link",a),Be(t),e.head.appendChild(t))}function kl(e){return'[src="'+bt(e)+'"]'}function Tn(e){return"script[async]"+e}function Yd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+bt(a.href)+'"]');if(l)return t.instance=l,Be(l),l;var n=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Be(l),Ve(l,"style",n),Ki(l,a.precedence,e),t.instance=l;case"stylesheet":n=Ul(a.href);var i=e.querySelector(Mn(n));if(i)return t.state.loading|=4,t.instance=i,Be(i),i;l=Bd(a),(n=zt.get(n))&&Ns(l,n),i=(e.ownerDocument||e).createElement("link"),Be(i);var o=i;return o._p=new Promise(function(d,x){o.onload=d,o.onerror=x}),Ve(i,"link",l),t.state.loading|=4,Ki(i,a.precedence,e),t.instance=i;case"script":return i=kl(a.src),(n=e.querySelector(Tn(i)))?(t.instance=n,Be(n),n):(l=a,(n=zt.get(i))&&(l=S({},a),As(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Be(n),Ve(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ki(l,a.precedence,e));return t.instance}function Ki(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,o=0;o<l.length;o++){var d=l[o];if(d.dataset.precedence===t)i=d;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ns(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function As(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var $i=null;function qd(e,t,a){if($i===null){var l=new Map,n=$i=new Map;n.set(a,l)}else n=$i,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Ql]||i[qe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var d=l.get(o);d?d.push(i):l.set(o,[i])}}return l}function Xd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function rh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Gd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function oh(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Ul(l.href),i=t.querySelector(Mn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Wi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Be(i);return}i=t.ownerDocument||t,l=Bd(l),(n=zt.get(n))&&Ns(l,n),i=i.createElement("link"),Be(i);var o=i;o._p=new Promise(function(d,x){o.onload=d,o.onerror=x}),Ve(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Wi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ms=0;function sh(e,t){return e.stylesheets&&e.count===0&&Ii(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Ii(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ms===0&&(Ms=62500*Xm());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ii(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ms?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Wi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ii(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fi=null;function Ii(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fi=new Map,t.forEach(ch,e),Fi=null,Wi.call(e))}function ch(e,t){if(!(t.state.loading&4)){var a=Fi.get(e);if(a)var l=a.get(null);else{a=new Map,Fi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var o=n[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}n=t.instance,o=n.getAttribute("data-precedence"),i=a.get(o)||l,i===l&&a.set(null,n),a.set(o,n),this.count++,l=Wi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var On={$$typeof:Z,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function uh(e,t,a,l,n,i,o,d,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Er(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Er(0),this.hiddenUpdates=Er(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function Qd(e,t,a,l,n,i,o,d,x,A,R,D){return e=new uh(e,t,a,o,x,A,R,D,d),t=1,i===!0&&(t|=24),i=st(3,null,null,t),e.current=i,i.stateNode=e,t=ro(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},uo(i),e}function Vd(e){return e?(e=pl,e):pl}function Zd(e,t,a,l,n,i){n=Vd(n),l.context===null?l.context=n:l.pendingContext=n,l=ma(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ha(e,l,t),a!==null&&(lt(a,e,t),sn(a,e,t))}function Jd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ts(e,t){Jd(e,t),(e=e.alternate)&&Jd(e,t)}function Kd(e){if(e.tag===13||e.tag===31){var t=Ba(e,67108864);t!==null&&lt(t,e,67108864),Ts(e,67108864)}}function $d(e){if(e.tag===13||e.tag===31){var t=pt();t=wr(t);var a=Ba(e,t);a!==null&&lt(a,e,t),Ts(e,t)}}var Pi=!0;function fh(e,t,a,l){var n=_.T;_.T=null;var i=q.p;try{q.p=2,Os(e,t,a,l)}finally{q.p=i,_.T=n}}function dh(e,t,a,l){var n=_.T;_.T=null;var i=q.p;try{q.p=8,Os(e,t,a,l)}finally{q.p=i,_.T=n}}function Os(e,t,a,l){if(Pi){var n=Rs(l);if(n===null)gs(e,t,l,er,a),Fd(e,l);else if(mh(n,e,t,a,l))l.stopPropagation();else if(Fd(e,l),t&4&&-1<ph.indexOf(e)){for(;n!==null;){var i=al(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Da(i.pendingLanes);if(o!==0){var d=i;for(d.pendingLanes|=2,d.entangledLanes|=2;o;){var x=1<<31-rt(o);d.entanglements[1]|=x,o&=~x}kt(i),(de&6)===0&&(ki=nt()+500,jn(0))}}break;case 31:case 13:d=Ba(i,2),d!==null&&lt(d,i,2),Li(),Ts(i,2)}if(i=Rs(l),i===null&&gs(e,t,l,er,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else gs(e,t,l,null,a)}}function Rs(e){return e=_r(e),_s(e)}var er=null;function _s(e){if(er=null,e=tl(e),e!==null){var t=b(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===31){if(e=j(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return er=e,null}function Wd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(I0()){case lc:return 2;case nc:return 8;case Gn:case P0:return 32;case ic:return 268435456;default:return 32}default:return 32}}var Cs=!1,Na=null,Aa=null,Ma=null,Rn=new Map,_n=new Map,Ta=[],ph="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fd(e,t){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":Rn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(t.pointerId)}}function Cn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=al(t),t!==null&&Kd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function mh(e,t,a,l,n){switch(t){case"focusin":return Na=Cn(Na,e,t,a,l,n),!0;case"dragenter":return Aa=Cn(Aa,e,t,a,l,n),!0;case"mouseover":return Ma=Cn(Ma,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Rn.set(i,Cn(Rn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,_n.set(i,Cn(_n.get(i)||null,e,t,a,l,n)),!0}return!1}function Id(e){var t=tl(e.target);if(t!==null){var a=b(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,fc(e.priority,function(){$d(a)});return}}else if(t===31){if(t=j(a),t!==null){e.blockedOn=t,fc(e.priority,function(){$d(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Rs(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Rr=l,a.target.dispatchEvent(l),Rr=null}else return t=al(a),t!==null&&Kd(t),e.blockedOn=a,!1;t.shift()}return!0}function Pd(e,t,a){tr(e)&&a.delete(t)}function hh(){Cs=!1,Na!==null&&tr(Na)&&(Na=null),Aa!==null&&tr(Aa)&&(Aa=null),Ma!==null&&tr(Ma)&&(Ma=null),Rn.forEach(Pd),_n.forEach(Pd)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,Cs||(Cs=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,hh)))}var lr=null;function e0(e){lr!==e&&(lr=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){lr===e&&(lr=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(_s(l||a)===null)continue;break}var i=al(a);i!==null&&(e.splice(t,3),t-=3,Ro(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Hl(e){function t(x){return ar(x,e)}Na!==null&&ar(Na,e),Aa!==null&&ar(Aa,e),Ma!==null&&ar(Ma,e),Rn.forEach(t),_n.forEach(t);for(var a=0;a<Ta.length;a++){var l=Ta[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ta.length&&(a=Ta[0],a.blockedOn===null);)Id(a),a.blockedOn===null&&Ta.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],o=n[Fe]||null;if(typeof i=="function")o||e0(a);else if(o){var d=null;if(i&&i.hasAttribute("formAction")){if(n=i,o=i[Fe]||null)d=o.formAction;else if(_s(n)!==null)continue}else d=o.action;typeof d=="function"?a[l+1]=d:(a.splice(l,3),l-=3),e0(a)}}}function t0(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Ds(e){this._internalRoot=e}nr.prototype.render=Ds.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=pt();Zd(a,l,e,t,null,null)},nr.prototype.unmount=Ds.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zd(e.current,2,null,e,null,null),Li(),t[el]=null}};function nr(e){this._internalRoot=e}nr.prototype.unstable_scheduleHydration=function(e){if(e){var t=uc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ta.length&&t!==0&&t<Ta[a].priority;a++);Ta.splice(a,0,e),a===0&&Id(e)}};var a0=s.version;if(a0!=="19.2.4")throw Error(u(527,a0,"19.2.4"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=h(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var gh={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ir=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ir.isDisabled&&ir.supportsFiber)try{ql=ir.inject(gh),it=ir}catch{}}return Un.createRoot=function(e,t){if(!m(e))throw Error(u(299));var a=!1,l="",n=cf,i=uf,o=ff;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Qd(e,1,!1,null,null,a,l,null,n,i,o,t0),e[el]=t.current,hs(e),new Ds(t)},Un.hydrateRoot=function(e,t,a){if(!m(e))throw Error(u(299));var l=!1,n="",i=cf,o=uf,d=ff,x=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.formState!==void 0&&(x=a.formState)),t=Qd(e,1,!0,t,a??null,l,n,x,i,o,d,t0),t.context=Vd(null),a=t.current,l=pt(),l=wr(l),n=ma(l),n.callback=null,ha(a,n,l),a=l,t.current.lanes=a,Gl(t,a),kt(t),e[el]=t.current,hs(e),new nr(t)},Un.version="19.2.4",Un}var d0;function Nh(){if(d0)return Hs.exports;d0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),Hs.exports=zh(),Hs.exports}var Ah=Nh();const Mh=z0(Ah);var p0="popstate";function m0(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function Th(r={}){function s(m,b){let{pathname:g="/",search:j="",hash:p=""}=Pa(m.location.hash.substring(1));return!g.startsWith("/")&&!g.startsWith(".")&&(g="/"+g),Vs("",{pathname:g,search:j,hash:p},b.state&&b.state.usr||null,b.state&&b.state.key||"default")}function c(m,b){let g=m.document.querySelector("base"),j="";if(g&&g.getAttribute("href")){let p=m.location.href,h=p.indexOf("#");j=h===-1?p:p.slice(0,h)}return j+"#"+(typeof b=="string"?b:Ln(b))}function u(m,b){Ot(m.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(b)})`)}return Rh(s,c,u,r)}function Ne(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function Ot(r,s){if(!r){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Oh(){return Math.random().toString(36).substring(2,10)}function h0(r,s){return{usr:r.state,key:r.key,idx:s,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Vs(r,s,c=null,u,m){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof s=="string"?Pa(s):s,state:c,key:s&&s.key||u||Oh(),unstable_mask:m}}function Ln({pathname:r="/",search:s="",hash:c=""}){return s&&s!=="?"&&(r+=s.charAt(0)==="?"?s:"?"+s),c&&c!=="#"&&(r+=c.charAt(0)==="#"?c:"#"+c),r}function Pa(r){let s={};if(r){let c=r.indexOf("#");c>=0&&(s.hash=r.substring(c),r=r.substring(0,c));let u=r.indexOf("?");u>=0&&(s.search=r.substring(u),r=r.substring(0,u)),r&&(s.pathname=r)}return s}function Rh(r,s,c,u={}){let{window:m=document.defaultView,v5Compat:b=!1}=u,g=m.history,j="POP",p=null,h=T();h==null&&(h=0,g.replaceState({...g.state,idx:h},""));function T(){return(g.state||{idx:null}).idx}function S(){j="POP";let H=T(),Y=H==null?null:H-h;h=H,p&&p({action:j,location:B.location,delta:Y})}function U(H,Y){j="PUSH";let J=m0(H)?H:Vs(B.location,H,Y);c&&c(J,H),h=T()+1;let Z=h0(J,h),ce=B.createHref(J.unstable_mask||J);try{g.pushState(Z,"",ce)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;m.location.assign(ce)}b&&p&&p({action:j,location:B.location,delta:1})}function L(H,Y){j="REPLACE";let J=m0(H)?H:Vs(B.location,H,Y);c&&c(J,H),h=T();let Z=h0(J,h),ce=B.createHref(J.unstable_mask||J);g.replaceState(Z,"",ce),b&&p&&p({action:j,location:B.location,delta:0})}function E(H){return _h(H)}let B={get action(){return j},get location(){return r(m,g)},listen(H){if(p)throw new Error("A history only accepts one active listener");return m.addEventListener(p0,S),p=H,()=>{m.removeEventListener(p0,S),p=null}},createHref(H){return s(m,H)},createURL:E,encodeLocation(H){let Y=E(H);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:U,replace:L,go(H){return g.go(H)}};return B}function _h(r,s=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(c,"No window.location.(origin|href) available to create URL");let u=typeof r=="string"?r:Ln(r);return u=u.replace(/ $/,"%20"),!s&&u.startsWith("//")&&(u=c+u),new URL(u,c)}function N0(r,s,c="/"){return Ch(r,s,c,!1)}function Ch(r,s,c,u){let m=typeof s=="string"?Pa(s):s,b=ia(m.pathname||"/",c);if(b==null)return null;let g=A0(r);Dh(g);let j=null;for(let p=0;j==null&&p<g.length;++p){let h=Vh(b);j=Gh(g[p],h,u)}return j}function A0(r,s=[],c=[],u="",m=!1){let b=(g,j,p=m,h)=>{let T={relativePath:h===void 0?g.path||"":h,caseSensitive:g.caseSensitive===!0,childrenIndex:j,route:g};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(u)&&p)return;Ne(T.relativePath.startsWith(u),`Absolute route path "${T.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(u.length)}let S=Lt([u,T.relativePath]),U=c.concat(T);g.children&&g.children.length>0&&(Ne(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),A0(g.children,s,U,S,p)),!(g.path==null&&!g.index)&&s.push({path:S,score:qh(S,g.index),routesMeta:U})};return r.forEach((g,j)=>{if(g.path===""||!g.path?.includes("?"))b(g,j);else for(let p of M0(g.path))b(g,j,!0,p)}),s}function M0(r){let s=r.split("/");if(s.length===0)return[];let[c,...u]=s,m=c.endsWith("?"),b=c.replace(/\?$/,"");if(u.length===0)return m?[b,""]:[b];let g=M0(u.join("/")),j=[];return j.push(...g.map(p=>p===""?b:[b,p].join("/"))),m&&j.push(...g),j.map(p=>r.startsWith("/")&&p===""?"/":p)}function Dh(r){r.sort((s,c)=>s.score!==c.score?c.score-s.score:Xh(s.routesMeta.map(u=>u.childrenIndex),c.routesMeta.map(u=>u.childrenIndex)))}var Uh=/^:[\w-]+$/,kh=3,Hh=2,Lh=1,Bh=10,Yh=-2,g0=r=>r==="*";function qh(r,s){let c=r.split("/"),u=c.length;return c.some(g0)&&(u+=Yh),s&&(u+=Hh),c.filter(m=>!g0(m)).reduce((m,b)=>m+(Uh.test(b)?kh:b===""?Lh:Bh),u)}function Xh(r,s){return r.length===s.length&&r.slice(0,-1).every((u,m)=>u===s[m])?r[r.length-1]-s[s.length-1]:0}function Gh(r,s,c=!1){let{routesMeta:u}=r,m={},b="/",g=[];for(let j=0;j<u.length;++j){let p=u[j],h=j===u.length-1,T=b==="/"?s:s.slice(b.length)||"/",S=cr({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},T),U=p.route;if(!S&&h&&c&&!u[u.length-1].route.index&&(S=cr({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},T)),!S)return null;Object.assign(m,S.params),g.push({params:m,pathname:Lt([b,S.pathname]),pathnameBase:$h(Lt([b,S.pathnameBase])),route:U}),S.pathnameBase!=="/"&&(b=Lt([b,S.pathnameBase]))}return g}function cr(r,s){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[c,u]=Qh(r.path,r.caseSensitive,r.end),m=s.match(c);if(!m)return null;let b=m[0],g=b.replace(/(.)\/+$/,"$1"),j=m.slice(1);return{params:u.reduce((h,{paramName:T,isOptional:S},U)=>{if(T==="*"){let E=j[U]||"";g=b.slice(0,b.length-E.length).replace(/(.)\/+$/,"$1")}const L=j[U];return S&&!L?h[T]=void 0:h[T]=(L||"").replace(/%2F/g,"/"),h},{}),pathname:b,pathnameBase:g,pattern:r}}function Qh(r,s=!1,c=!0){Ot(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let u=[],m="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,j,p,h,T)=>{if(u.push({paramName:j,isOptional:p!=null}),p){let S=T.charAt(h+g.length);return S&&S!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(u.push({paramName:"*"}),m+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?m+="\\/*$":r!==""&&r!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,s?void 0:"i"),u]}function Vh(r){try{return r.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Ot(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),r}}function ia(r,s){if(s==="/")return r;if(!r.toLowerCase().startsWith(s.toLowerCase()))return null;let c=s.endsWith("/")?s.length-1:s.length,u=r.charAt(c);return u&&u!=="/"?null:r.slice(c)||"/"}var Zh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Jh(r,s="/"){let{pathname:c,search:u="",hash:m=""}=typeof r=="string"?Pa(r):r,b;return c?(c=c.replace(/\/\/+/g,"/"),c.startsWith("/")?b=b0(c.substring(1),"/"):b=b0(c,s)):b=s,{pathname:b,search:Wh(u),hash:Fh(m)}}function b0(r,s){let c=s.replace(/\/+$/,"").split("/");return r.split("/").forEach(m=>{m===".."?c.length>1&&c.pop():m!=="."&&c.push(m)}),c.length>1?c.join("/"):"/"}function qs(r,s,c,u){return`Cannot include a '${r}' character in a manually specified \`to.${s}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Kh(r){return r.filter((s,c)=>c===0||s.route.path&&s.route.path.length>0)}function T0(r){let s=Kh(r);return s.map((c,u)=>u===s.length-1?c.pathname:c.pathnameBase)}function Ks(r,s,c,u=!1){let m;typeof r=="string"?m=Pa(r):(m={...r},Ne(!m.pathname||!m.pathname.includes("?"),qs("?","pathname","search",m)),Ne(!m.pathname||!m.pathname.includes("#"),qs("#","pathname","hash",m)),Ne(!m.search||!m.search.includes("#"),qs("#","search","hash",m)));let b=r===""||m.pathname==="",g=b?"/":m.pathname,j;if(g==null)j=c;else{let S=s.length-1;if(!u&&g.startsWith("..")){let U=g.split("/");for(;U[0]==="..";)U.shift(),S-=1;m.pathname=U.join("/")}j=S>=0?s[S]:"/"}let p=Jh(m,j),h=g&&g!=="/"&&g.endsWith("/"),T=(b||g===".")&&c.endsWith("/");return!p.pathname.endsWith("/")&&(h||T)&&(p.pathname+="/"),p}var Lt=r=>r.join("/").replace(/\/\/+/g,"/"),$h=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Wh=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Fh=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Ih=class{constructor(r,s,c,u=!1){this.status=r,this.statusText=s||"",this.internal=u,c instanceof Error?(this.data=c.toString(),this.error=c):this.data=c}};function Ph(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function eg(r){return r.map(s=>s.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var O0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function R0(r,s){let c=r;if(typeof c!="string"||!Zh.test(c))return{absoluteURL:void 0,isExternal:!1,to:c};let u=c,m=!1;if(O0)try{let b=new URL(window.location.href),g=c.startsWith("//")?new URL(b.protocol+c):new URL(c),j=ia(g.pathname,s);g.origin===b.origin&&j!=null?c=j+g.search+g.hash:m=!0}catch{Ot(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:m,to:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var _0=["POST","PUT","PATCH","DELETE"];new Set(_0);var tg=["GET",..._0];new Set(tg);var Bl=N.createContext(null);Bl.displayName="DataRouter";var dr=N.createContext(null);dr.displayName="DataRouterState";var ag=N.createContext(!1),C0=N.createContext({isTransitioning:!1});C0.displayName="ViewTransition";var lg=N.createContext(new Map);lg.displayName="Fetchers";var ng=N.createContext(null);ng.displayName="Await";var Nt=N.createContext(null);Nt.displayName="Navigation";var Bn=N.createContext(null);Bn.displayName="Location";var Bt=N.createContext({outlet:null,matches:[],isDataRoute:!1});Bt.displayName="Route";var $s=N.createContext(null);$s.displayName="RouteError";var D0="REACT_ROUTER_ERROR",ig="REDIRECT",rg="ROUTE_ERROR_RESPONSE";function og(r){if(r.startsWith(`${D0}:${ig}:{`))try{let s=JSON.parse(r.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function sg(r){if(r.startsWith(`${D0}:${rg}:{`))try{let s=JSON.parse(r.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new Ih(s.status,s.statusText,s.data)}catch{}}function cg(r,{relative:s}={}){Ne(Yn(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:u}=N.useContext(Nt),{hash:m,pathname:b,search:g}=qn(r,{relative:s}),j=b;return c!=="/"&&(j=b==="/"?c:Lt([c,b])),u.createHref({pathname:j,search:g,hash:m})}function Yn(){return N.useContext(Bn)!=null}function _a(){return Ne(Yn(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(Bn).location}var U0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function k0(r){N.useContext(Nt).static||N.useLayoutEffect(r)}function ug(){let{isDataRoute:r}=N.useContext(Bt);return r?zg():fg()}function fg(){Ne(Yn(),"useNavigate() may be used only in the context of a <Router> component.");let r=N.useContext(Bl),{basename:s,navigator:c}=N.useContext(Nt),{matches:u}=N.useContext(Bt),{pathname:m}=_a(),b=JSON.stringify(T0(u)),g=N.useRef(!1);return k0(()=>{g.current=!0}),N.useCallback((p,h={})=>{if(Ot(g.current,U0),!g.current)return;if(typeof p=="number"){c.go(p);return}let T=Ks(p,JSON.parse(b),m,h.relative==="path");r==null&&s!=="/"&&(T.pathname=T.pathname==="/"?s:Lt([s,T.pathname])),(h.replace?c.replace:c.push)(T,h.state,h)},[s,c,b,m,r])}var dg=N.createContext(null);function pg(r){let s=N.useContext(Bt).outlet;return N.useMemo(()=>s&&N.createElement(dg.Provider,{value:r},s),[s,r])}function qn(r,{relative:s}={}){let{matches:c}=N.useContext(Bt),{pathname:u}=_a(),m=JSON.stringify(T0(c));return N.useMemo(()=>Ks(r,JSON.parse(m),u,s==="path"),[r,m,u,s])}function mg(r,s){return H0(r,s)}function H0(r,s,c){Ne(Yn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=N.useContext(Nt),{matches:m}=N.useContext(Bt),b=m[m.length-1],g=b?b.params:{},j=b?b.pathname:"/",p=b?b.pathnameBase:"/",h=b&&b.route;{let H=h&&h.path||"";B0(j,!h||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${j}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let T=_a(),S;if(s){let H=typeof s=="string"?Pa(s):s;Ne(p==="/"||H.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${H.pathname}" was given in the \`location\` prop.`),S=H}else S=T;let U=S.pathname||"/",L=U;if(p!=="/"){let H=p.replace(/^\//,"").split("/");L="/"+U.replace(/^\//,"").split("/").slice(H.length).join("/")}let E=N0(r,{pathname:L});Ot(h||E!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Ot(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=vg(E&&E.map(H=>Object.assign({},H,{params:Object.assign({},g,H.params),pathname:Lt([p,u.encodeLocation?u.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?p:Lt([p,u.encodeLocation?u.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),m,c);return s&&B?N.createElement(Bn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...S},navigationType:"POP"}},B):B}function hg(){let r=jg(),s=Ph(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),c=r instanceof Error?r.stack:null,u="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:u},b={padding:"2px 4px",backgroundColor:u},g=null;return console.error("Error handled by React Router default ErrorBoundary:",r),g=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:b},"ErrorBoundary")," or"," ",N.createElement("code",{style:b},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},s),c?N.createElement("pre",{style:m},c):null,g)}var gg=N.createElement(hg,null),L0=class extends N.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,s){return s.location!==r.location||s.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:s.error,location:s.location,revalidation:r.revalidation||s.revalidation}}componentDidCatch(r,s){this.props.onError?this.props.onError(r,s):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const c=sg(r.digest);c&&(r=c)}let s=r!==void 0?N.createElement(Bt.Provider,{value:this.props.routeContext},N.createElement($s.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?N.createElement(bg,{error:r},s):s}};L0.contextType=ag;var Xs=new WeakMap;function bg({children:r,error:s}){let{basename:c}=N.useContext(Nt);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let u=og(s.digest);if(u){let m=Xs.get(s);if(m)throw m;let b=R0(u.location,c);if(O0&&!Xs.get(s))if(b.isExternal||u.reloadDocument)window.location.href=b.absoluteURL||b.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(b.to,{replace:u.replace}));throw Xs.set(s,g),g}return N.createElement("meta",{httpEquiv:"refresh",content:`0;url=${b.absoluteURL||b.to}`})}}return r}function xg({routeContext:r,match:s,children:c}){let u=N.useContext(Bl);return u&&u.static&&u.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=s.route.id),N.createElement(Bt.Provider,{value:r},c)}function vg(r,s=[],c){let u=c?.state;if(r==null){if(!u)return null;if(u.errors)r=u.matches;else if(s.length===0&&!u.initialized&&u.matches.length>0)r=u.matches;else return null}let m=r,b=u?.errors;if(b!=null){let T=m.findIndex(S=>S.route.id&&b?.[S.route.id]!==void 0);Ne(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(b).join(",")}`),m=m.slice(0,Math.min(m.length,T+1))}let g=!1,j=-1;if(c&&u){g=u.renderFallback;for(let T=0;T<m.length;T++){let S=m[T];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(j=T),S.route.id){let{loaderData:U,errors:L}=u,E=S.route.loader&&!U.hasOwnProperty(S.route.id)&&(!L||L[S.route.id]===void 0);if(S.route.lazy||E){c.isStatic&&(g=!0),j>=0?m=m.slice(0,j+1):m=[m[0]];break}}}}let p=c?.onError,h=u&&p?(T,S)=>{p(T,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:eg(u.matches),errorInfo:S})}:void 0;return m.reduceRight((T,S,U)=>{let L,E=!1,B=null,H=null;u&&(L=b&&S.route.id?b[S.route.id]:void 0,B=S.route.errorElement||gg,g&&(j<0&&U===0?(B0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,H=null):j===U&&(E=!0,H=S.route.hydrateFallbackElement||null)));let Y=s.concat(m.slice(0,U+1)),J=()=>{let Z;return L?Z=B:E?Z=H:S.route.Component?Z=N.createElement(S.route.Component,null):S.route.element?Z=S.route.element:Z=T,N.createElement(xg,{match:S,routeContext:{outlet:T,matches:Y,isDataRoute:u!=null},children:Z})};return u&&(S.route.ErrorBoundary||S.route.errorElement||U===0)?N.createElement(L0,{location:u.location,revalidation:u.revalidation,component:B,error:L,children:J(),routeContext:{outlet:null,matches:Y,isDataRoute:!0},onError:h}):J()},null)}function Ws(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yg(r){let s=N.useContext(Bl);return Ne(s,Ws(r)),s}function Sg(r){let s=N.useContext(dr);return Ne(s,Ws(r)),s}function Eg(r){let s=N.useContext(Bt);return Ne(s,Ws(r)),s}function Fs(r){let s=Eg(r),c=s.matches[s.matches.length-1];return Ne(c.route.id,`${r} can only be used on routes that contain a unique "id"`),c.route.id}function wg(){return Fs("useRouteId")}function jg(){let r=N.useContext($s),s=Sg("useRouteError"),c=Fs("useRouteError");return r!==void 0?r:s.errors?.[c]}function zg(){let{router:r}=yg("useNavigate"),s=Fs("useNavigate"),c=N.useRef(!1);return k0(()=>{c.current=!0}),N.useCallback(async(m,b={})=>{Ot(c.current,U0),c.current&&(typeof m=="number"?await r.navigate(m):await r.navigate(m,{fromRouteId:s,...b}))},[r,s])}var x0={};function B0(r,s,c){!s&&!x0[r]&&(x0[r]=!0,Ot(!1,c))}N.memo(Ng);function Ng({routes:r,future:s,state:c,isStatic:u,onError:m}){return H0(r,void 0,{state:c,isStatic:u,onError:m})}function Ag(r){return pg(r.context)}function Ia(r){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Mg({basename:r="/",children:s=null,location:c,navigationType:u="POP",navigator:m,static:b=!1,unstable_useTransitions:g}){Ne(!Yn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let j=r.replace(/^\/*/,"/"),p=N.useMemo(()=>({basename:j,navigator:m,static:b,unstable_useTransitions:g,future:{}}),[j,m,b,g]);typeof c=="string"&&(c=Pa(c));let{pathname:h="/",search:T="",hash:S="",state:U=null,key:L="default",unstable_mask:E}=c,B=N.useMemo(()=>{let H=ia(h,j);return H==null?null:{location:{pathname:H,search:T,hash:S,state:U,key:L,unstable_mask:E},navigationType:u}},[j,h,T,S,U,L,u,E]);return Ot(B!=null,`<Router basename="${j}"> is not able to match the URL "${h}${T}${S}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:N.createElement(Nt.Provider,{value:p},N.createElement(Bn.Provider,{children:s,value:B}))}function Tg({children:r,location:s}){return mg(Zs(r),s)}function Zs(r,s=[]){let c=[];return N.Children.forEach(r,(u,m)=>{if(!N.isValidElement(u))return;let b=[...s,m];if(u.type===N.Fragment){c.push.apply(c,Zs(u.props.children,b));return}Ne(u.type===Ia,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!u.props.index||!u.props.children,"An index route cannot have child routes.");let g={id:u.props.id||b.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(g.children=Zs(u.props.children,b)),c.push(g)}),c}var or="get",sr="application/x-www-form-urlencoded";function pr(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function Og(r){return pr(r)&&r.tagName.toLowerCase()==="button"}function Rg(r){return pr(r)&&r.tagName.toLowerCase()==="form"}function _g(r){return pr(r)&&r.tagName.toLowerCase()==="input"}function Cg(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Dg(r,s){return r.button===0&&(!s||s==="_self")&&!Cg(r)}var rr=null;function Ug(){if(rr===null)try{new FormData(document.createElement("form"),0),rr=!1}catch{rr=!0}return rr}var kg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gs(r){return r!=null&&!kg.has(r)?(Ot(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sr}"`),null):r}function Hg(r,s){let c,u,m,b,g;if(Rg(r)){let j=r.getAttribute("action");u=j?ia(j,s):null,c=r.getAttribute("method")||or,m=Gs(r.getAttribute("enctype"))||sr,b=new FormData(r)}else if(Og(r)||_g(r)&&(r.type==="submit"||r.type==="image")){let j=r.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||j.getAttribute("action");if(u=p?ia(p,s):null,c=r.getAttribute("formmethod")||j.getAttribute("method")||or,m=Gs(r.getAttribute("formenctype"))||Gs(j.getAttribute("enctype"))||sr,b=new FormData(j,r),!Ug()){let{name:h,type:T,value:S}=r;if(T==="image"){let U=h?`${h}.`:"";b.append(`${U}x`,"0"),b.append(`${U}y`,"0")}else h&&b.append(h,S)}}else{if(pr(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=or,u=null,m=sr,g=r}return b&&m==="text/plain"&&(g=b,b=void 0),{action:u,method:c.toLowerCase(),encType:m,formData:b,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Is(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function Lg(r,s,c,u){let m=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return c?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${u}`:m.pathname=`${m.pathname}.${u}`:m.pathname==="/"?m.pathname=`_root.${u}`:s&&ia(m.pathname,s)==="/"?m.pathname=`${s.replace(/\/$/,"")}/_root.${u}`:m.pathname=`${m.pathname.replace(/\/$/,"")}.${u}`,m}async function Bg(r,s){if(r.id in s)return s[r.id];try{let c=await import(r.module);return s[r.id]=c,c}catch(c){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Yg(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function qg(r,s,c){let u=await Promise.all(r.map(async m=>{let b=s.routes[m.route.id];if(b){let g=await Bg(b,c);return g.links?g.links():[]}return[]}));return Vg(u.flat(1).filter(Yg).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function v0(r,s,c,u,m,b){let g=(p,h)=>c[h]?p.route.id!==c[h].route.id:!0,j=(p,h)=>c[h].pathname!==p.pathname||c[h].route.path?.endsWith("*")&&c[h].params["*"]!==p.params["*"];return b==="assets"?s.filter((p,h)=>g(p,h)||j(p,h)):b==="data"?s.filter((p,h)=>{let T=u.routes[p.route.id];if(!T||!T.hasLoader)return!1;if(g(p,h)||j(p,h))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Xg(r,s,{includeHydrateFallback:c}={}){return Gg(r.map(u=>{let m=s.routes[u.route.id];if(!m)return[];let b=[m.module];return m.clientActionModule&&(b=b.concat(m.clientActionModule)),m.clientLoaderModule&&(b=b.concat(m.clientLoaderModule)),c&&m.hydrateFallbackModule&&(b=b.concat(m.hydrateFallbackModule)),m.imports&&(b=b.concat(m.imports)),b}).flat(1))}function Gg(r){return[...new Set(r)]}function Qg(r){let s={},c=Object.keys(r).sort();for(let u of c)s[u]=r[u];return s}function Vg(r,s){let c=new Set;return new Set(s),r.reduce((u,m)=>{let b=JSON.stringify(Qg(m));return c.has(b)||(c.add(b),u.push({key:b,link:m})),u},[])}function Y0(){let r=N.useContext(Bl);return Is(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Zg(){let r=N.useContext(dr);return Is(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Ps=N.createContext(void 0);Ps.displayName="FrameworkContext";function q0(){let r=N.useContext(Ps);return Is(r,"You must render this element inside a <HydratedRouter> element"),r}function Jg(r,s){let c=N.useContext(Ps),[u,m]=N.useState(!1),[b,g]=N.useState(!1),{onFocus:j,onBlur:p,onMouseEnter:h,onMouseLeave:T,onTouchStart:S}=s,U=N.useRef(null);N.useEffect(()=>{if(r==="render"&&g(!0),r==="viewport"){let B=Y=>{Y.forEach(J=>{g(J.isIntersecting)})},H=new IntersectionObserver(B,{threshold:.5});return U.current&&H.observe(U.current),()=>{H.disconnect()}}},[r]),N.useEffect(()=>{if(u){let B=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(B)}}},[u]);let L=()=>{m(!0)},E=()=>{m(!1),g(!1)};return c?r!=="intent"?[b,U,{}]:[b,U,{onFocus:kn(j,L),onBlur:kn(p,E),onMouseEnter:kn(h,L),onMouseLeave:kn(T,E),onTouchStart:kn(S,L)}]:[!1,U,{}]}function kn(r,s){return c=>{r&&r(c),c.defaultPrevented||s(c)}}function Kg({page:r,...s}){let{router:c}=Y0(),u=N.useMemo(()=>N0(c.routes,r,c.basename),[c.routes,r,c.basename]);return u?N.createElement(Wg,{page:r,matches:u,...s}):null}function $g(r){let{manifest:s,routeModules:c}=q0(),[u,m]=N.useState([]);return N.useEffect(()=>{let b=!1;return qg(r,s,c).then(g=>{b||m(g)}),()=>{b=!0}},[r,s,c]),u}function Wg({page:r,matches:s,...c}){let u=_a(),{future:m,manifest:b,routeModules:g}=q0(),{basename:j}=Y0(),{loaderData:p,matches:h}=Zg(),T=N.useMemo(()=>v0(r,s,h,b,u,"data"),[r,s,h,b,u]),S=N.useMemo(()=>v0(r,s,h,b,u,"assets"),[r,s,h,b,u]),U=N.useMemo(()=>{if(r===u.pathname+u.search+u.hash)return[];let B=new Set,H=!1;if(s.forEach(J=>{let Z=b.routes[J.route.id];!Z||!Z.hasLoader||(!T.some(ce=>ce.route.id===J.route.id)&&J.route.id in p&&g[J.route.id]?.shouldRevalidate||Z.hasClientLoader?H=!0:B.add(J.route.id))}),B.size===0)return[];let Y=Lg(r,j,m.unstable_trailingSlashAwareDataRequests,"data");return H&&B.size>0&&Y.searchParams.set("_routes",s.filter(J=>B.has(J.route.id)).map(J=>J.route.id).join(",")),[Y.pathname+Y.search]},[j,m.unstable_trailingSlashAwareDataRequests,p,u,b,T,s,r,g]),L=N.useMemo(()=>Xg(S,b),[S,b]),E=$g(S);return N.createElement(N.Fragment,null,U.map(B=>N.createElement("link",{key:B,rel:"prefetch",as:"fetch",href:B,...c})),L.map(B=>N.createElement("link",{key:B,rel:"modulepreload",href:B,...c})),E.map(({key:B,link:H})=>N.createElement("link",{key:B,nonce:c.nonce,...H,crossOrigin:H.crossOrigin??c.crossOrigin})))}function Fg(...r){return s=>{r.forEach(c=>{typeof c=="function"?c(s):c!=null&&(c.current=s)})}}var Ig=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ig&&(window.__reactRouterVersion="7.13.1")}catch{}function Pg({basename:r,children:s,unstable_useTransitions:c,window:u}){let m=N.useRef();m.current==null&&(m.current=Th({window:u,v5Compat:!0}));let b=m.current,[g,j]=N.useState({action:b.action,location:b.location}),p=N.useCallback(h=>{c===!1?j(h):N.startTransition(()=>j(h))},[c]);return N.useLayoutEffect(()=>b.listen(p),[b,p]),N.createElement(Mg,{basename:r,children:s,location:g.location,navigationType:g.action,navigator:b,unstable_useTransitions:c})}var X0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ht=N.forwardRef(function({onClick:s,discover:c="render",prefetch:u="none",relative:m,reloadDocument:b,replace:g,unstable_mask:j,state:p,target:h,to:T,preventScrollReset:S,viewTransition:U,unstable_defaultShouldRevalidate:L,...E},B){let{basename:H,navigator:Y,unstable_useTransitions:J}=N.useContext(Nt),Z=typeof T=="string"&&X0.test(T),ce=R0(T,H);T=ce.to;let se=cg(T,{relative:m}),ye=_a(),F=null;if(j){let Ce=Ks(j,[],ye.unstable_mask?ye.unstable_mask.pathname:"/",!0);H!=="/"&&(Ce.pathname=Ce.pathname==="/"?H:Lt([H,Ce.pathname])),F=Y.createHref(Ce)}let[Te,Ze,Rt]=Jg(u,E),mt=a1(T,{replace:g,unstable_mask:j,state:p,target:h,preventScrollReset:S,relative:m,viewTransition:U,unstable_defaultShouldRevalidate:L,unstable_useTransitions:J});function Je(Ce){s&&s(Ce),Ce.defaultPrevented||mt(Ce)}let _t=!(ce.isExternal||b),ht=N.createElement("a",{...E,...Rt,href:(_t?F:void 0)||ce.absoluteURL||se,onClick:_t?Je:s,ref:Fg(B,Ze),target:h,"data-discover":!Z&&c==="render"?"true":void 0});return Te&&!Z?N.createElement(N.Fragment,null,ht,N.createElement(Kg,{page:se})):ht});Ht.displayName="Link";var Ll=N.forwardRef(function({"aria-current":s="page",caseSensitive:c=!1,className:u="",end:m=!1,style:b,to:g,viewTransition:j,children:p,...h},T){let S=qn(g,{relative:h.relative}),U=_a(),L=N.useContext(dr),{navigator:E,basename:B}=N.useContext(Nt),H=L!=null&&o1(S)&&j===!0,Y=E.encodeLocation?E.encodeLocation(S).pathname:S.pathname,J=U.pathname,Z=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;c||(J=J.toLowerCase(),Z=Z?Z.toLowerCase():null,Y=Y.toLowerCase()),Z&&B&&(Z=ia(Z,B)||Z);const ce=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let se=J===Y||!m&&J.startsWith(Y)&&J.charAt(ce)==="/",ye=Z!=null&&(Z===Y||!m&&Z.startsWith(Y)&&Z.charAt(Y.length)==="/"),F={isActive:se,isPending:ye,isTransitioning:H},Te=se?s:void 0,Ze;typeof u=="function"?Ze=u(F):Ze=[u,se?"active":null,ye?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let Rt=typeof b=="function"?b(F):b;return N.createElement(Ht,{...h,"aria-current":Te,className:Ze,ref:T,style:Rt,to:g,viewTransition:j},typeof p=="function"?p(F):p)});Ll.displayName="NavLink";var e1=N.forwardRef(({discover:r="render",fetcherKey:s,navigate:c,reloadDocument:u,replace:m,state:b,method:g=or,action:j,onSubmit:p,relative:h,preventScrollReset:T,viewTransition:S,unstable_defaultShouldRevalidate:U,...L},E)=>{let{unstable_useTransitions:B}=N.useContext(Nt),H=i1(),Y=r1(j,{relative:h}),J=g.toLowerCase()==="get"?"get":"post",Z=typeof j=="string"&&X0.test(j),ce=se=>{if(p&&p(se),se.defaultPrevented)return;se.preventDefault();let ye=se.nativeEvent.submitter,F=ye?.getAttribute("formmethod")||g,Te=()=>H(ye||se.currentTarget,{fetcherKey:s,method:F,navigate:c,replace:m,state:b,relative:h,preventScrollReset:T,viewTransition:S,unstable_defaultShouldRevalidate:U});B&&c!==!1?N.startTransition(()=>Te()):Te()};return N.createElement("form",{ref:E,method:J,action:Y,onSubmit:u?p:ce,...L,"data-discover":!Z&&r==="render"?"true":void 0})});e1.displayName="Form";function t1(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function G0(r){let s=N.useContext(Bl);return Ne(s,t1(r)),s}function a1(r,{target:s,replace:c,unstable_mask:u,state:m,preventScrollReset:b,relative:g,viewTransition:j,unstable_defaultShouldRevalidate:p,unstable_useTransitions:h}={}){let T=ug(),S=_a(),U=qn(r,{relative:g});return N.useCallback(L=>{if(Dg(L,s)){L.preventDefault();let E=c!==void 0?c:Ln(S)===Ln(U),B=()=>T(r,{replace:E,unstable_mask:u,state:m,preventScrollReset:b,relative:g,viewTransition:j,unstable_defaultShouldRevalidate:p});h?N.startTransition(()=>B()):B()}},[S,T,U,c,u,m,s,r,b,g,j,p,h])}var l1=0,n1=()=>`__${String(++l1)}__`;function i1(){let{router:r}=G0("useSubmit"),{basename:s}=N.useContext(Nt),c=wg(),u=r.fetch,m=r.navigate;return N.useCallback(async(b,g={})=>{let{action:j,method:p,encType:h,formData:T,body:S}=Hg(b,s);if(g.navigate===!1){let U=g.fetcherKey||n1();await u(U,c,g.action||j,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:T,body:S,formMethod:g.method||p,formEncType:g.encType||h,flushSync:g.flushSync})}else await m(g.action||j,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:T,body:S,formMethod:g.method||p,formEncType:g.encType||h,replace:g.replace,state:g.state,fromRouteId:c,flushSync:g.flushSync,viewTransition:g.viewTransition})},[u,m,s,c])}function r1(r,{relative:s}={}){let{basename:c}=N.useContext(Nt),u=N.useContext(Bt);Ne(u,"useFormAction must be used inside a RouteContext");let[m]=u.matches.slice(-1),b={...qn(r||".",{relative:s})},g=_a();if(r==null){b.search=g.search;let j=new URLSearchParams(b.search),p=j.getAll("index");if(p.some(T=>T==="")){j.delete("index"),p.filter(S=>S).forEach(S=>j.append("index",S));let T=j.toString();b.search=T?`?${T}`:""}}return(!r||r===".")&&m.route.index&&(b.search=b.search?b.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(b.pathname=b.pathname==="/"?c:Lt([c,b.pathname])),Ln(b)}function o1(r,{relative:s}={}){let c=N.useContext(C0);Ne(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=G0("useViewTransitionState"),m=qn(r,{relative:s});if(!c.isTransitioning)return!1;let b=ia(c.currentLocation.pathname,u)||c.currentLocation.pathname,g=ia(c.nextLocation.pathname,u)||c.nextLocation.pathname;return cr(m.pathname,g)!=null||cr(m.pathname,b)!=null}const s1=()=>{const[r,s]=N.useState(!1),[c,u]=N.useState(!1),[m,b]=N.useState(null);N.useRef(null);const g=N.useRef(null),j=[{name:"Home",to:"/",code:"00"},{name:"Projects",to:"/projects",code:"01"},{name:"Skills",to:"/skills",code:"02"},{name:"About",to:"/about",code:"03"},{name:"Contact",to:"/contact",code:"04"}];return N.useEffect(()=>{const p=()=>u(window.scrollY>20);return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]),f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@400;500&display=swap');

        :root {
          --cyan: #00d2ff;
          --teal: #00ffe0;
          --bg-nav: rgba(2, 12, 20, 0.85);
          --border-nav: rgba(0, 210, 255, 0.15);
          --muted-nav: rgba(150, 220, 240, 0.45);
          --text-nav: rgba(200, 240, 255, 0.85);
        }

        @keyframes navFadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blinkNav {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes glowPulseNav {
          0%, 100% { box-shadow: 0 0 12px rgba(0,210,255,0.25), inset 0 0 12px rgba(0,210,255,0.05); }
          50%       { box-shadow: 0 0 24px rgba(0,210,255,0.5), inset 0 0 20px rgba(0,210,255,0.1); }
        }
        @keyframes scanNav {
          from { transform: translateX(-100%); }
          to   { transform: translateX(400%); }
        }
        @keyframes mobileSlide {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Nav shell ── */
        .nav-shell {
          position: fixed;
          top: 0; width: 100%;
          z-index: 50;
          transition: all 0.4s ease;
          animation: navFadeIn 0.6s ease forwards;
          font-family: 'JetBrains Mono', monospace;
        }
        .nav-shell.scrolled {
          background: var(--bg-nav);
          backdrop-filter: blur(20px) saturate(1.4);
          border-bottom: 1px solid var(--border-nav);
          box-shadow: 0 4px 40px rgba(0, 0, 0, 0.6), 0 1px 0 rgba(0,210,255,0.08);
        }
        .nav-shell:not(.scrolled) {
          background: transparent;
          border-bottom: 1px solid transparent;
        }

        /* Scan line at bottom of nav */
        .nav-scanline {
          position: absolute;
          bottom: 0; left: 0; right: 0; height: 1px;
          overflow: hidden;
          pointer-events: none;
        }
        .nav-scanline::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 25%;
          height: 100%;
          background: linear-gradient(90deg, transparent, var(--cyan), transparent);
          animation: scanNav 5s ease-in-out infinite;
          opacity: 0.4;
        }

        /* ── Inner layout ── */
        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }
        @media (max-width: 768px) {
          .nav-inner { padding: 0 24px; }
        }

        /* ── Logo ── */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          position: relative;
        }
        .nav-logo-bracket {
          font-family: 'JetBrains Mono', monospace;
          font-size: 16px;
          color: rgba(0,210,255,0.3);
          font-weight: 400;
          line-height: 1;
        }
        .nav-logo-text {
          font-family: 'Orbitron', monospace;
          font-size: 16px;
          font-weight: 900;
          letter-spacing: 0.12em;
          color: #fff;
          text-shadow: 0 0 20px rgba(0,210,255,0.5);
        }
        .nav-logo-dot {
          display: inline-block;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--cyan);
          margin-left: 2px;
          vertical-align: middle;
          animation: blinkNav 2s ease-in-out infinite;
          box-shadow: 0 0 8px var(--cyan);
        }
        .nav-logo-sub {
          font-size: 8px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(0,210,255,0.35);
          display: block;
          margin-top: -2px;
          font-weight: 400;
        }

        /* ── Desktop links ── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
        }
        @media (max-width: 768px) { .nav-links { display: none; } }

        .nav-item {
          position: relative;
        }
        .nav-link-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 8px 14px;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 500;
          color: var(--muted-nav);
          text-decoration: none;
          border-radius: 4px;
          border: 1px solid transparent;
          position: relative;
          overflow: hidden;
          transition: all 0.25s ease;
        }
        .nav-link-btn .link-code {
          font-size: 9px;
          color: rgba(0,210,255,0.25);
          font-weight: 400;
          transition: color 0.25s;
        }
        .nav-link-btn:hover,
        .nav-link-btn.active {
          color: var(--cyan);
          border-color: rgba(0,210,255,0.2);
          background: rgba(0,210,255,0.06);
        }
        .nav-link-btn:hover .link-code,
        .nav-link-btn.active .link-code {
          color: rgba(0,210,255,0.5);
        }
        /* Shimmer on hover */
        .nav-link-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(0,210,255,0.08) 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 0.4s ease;
        }
        .nav-link-btn:hover::before { transform: translateX(100%); }

        /* Active indicator dot */
        .nav-link-btn.active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 6px var(--cyan);
        }

        /* ── CTA ── */
        .nav-cta {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        @media (max-width: 768px) { .nav-cta { display: none; } }

        .nav-status {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 9px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(0,255,220,0.5);
          font-weight: 500;
        }
        .nav-status-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--teal);
          box-shadow: 0 0 5px var(--teal);
          animation: blinkNav 1.5s ease-in-out infinite;
        }

        .nav-hire-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 22px;
          font-family: 'Orbitron', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--cyan);
          border: 1px solid var(--cyan);
          border-radius: 4px;
          background: rgba(0,210,255,0.05);
          overflow: hidden;
          animation: glowPulseNav 3s ease-in-out infinite;
          transition: all 0.3s;
        }
        .nav-hire-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,210,255,0.15), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .nav-hire-btn:hover::before { opacity: 1; }
        .nav-hire-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 0 30px rgba(0,210,255,0.4);
        }
        .hire-arrow {
          font-size: 14px;
          transition: transform 0.3s;
          display: inline-block;
        }
        .nav-hire-btn:hover .hire-arrow { transform: translateX(3px); }

        /* ── Mobile toggle ── */
        .nav-mobile-btn {
          display: none;
          background: rgba(0,210,255,0.05);
          border: 1px solid rgba(0,210,255,0.2);
          border-radius: 4px;
          padding: 8px;
          cursor: pointer;
          color: var(--cyan);
          transition: all 0.2s;
        }
        .nav-mobile-btn:hover {
          background: rgba(0,210,255,0.12);
          box-shadow: 0 0 12px rgba(0,210,255,0.2);
        }
        @media (max-width: 768px) { .nav-mobile-btn { display: flex; align-items: center; } }

        /* ── Mobile menu ── */
        .nav-mobile-panel {
          display: none;
          flex-direction: column;
          background: rgba(2, 10, 20, 0.98);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(0,210,255,0.12);
          border-bottom: 1px solid rgba(0,210,255,0.12);
          gap: 4px;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.45s cubic-bezier(0.4,0,0.2,1), padding 0.3s ease;
        }
        .nav-mobile-panel.open {
          display: flex;
          max-height: 500px;
          padding: 20px 24px 24px;
        }
        @media (max-width: 768px) {
          .nav-mobile-panel { display: flex; }
        }

        .mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-radius: 4px;
          border: 1px solid transparent;
          text-decoration: none;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted-nav);
          transition: all 0.2s;
          animation: mobileSlide 0.3s ease forwards;
          opacity: 0;
        }
        .mobile-link:nth-child(1) { animation-delay: 0.05s; }
        .mobile-link:nth-child(2) { animation-delay: 0.1s; }
        .mobile-link:nth-child(3) { animation-delay: 0.15s; }
        .mobile-link:nth-child(4) { animation-delay: 0.2s; }
        .mobile-link:nth-child(5) { animation-delay: 0.25s; }
        .mobile-link:hover,
        .mobile-link.active {
          color: var(--cyan);
          border-color: rgba(0,210,255,0.2);
          background: rgba(0,210,255,0.06);
        }
        .mobile-link-code {
          font-size: 9px;
          color: rgba(0,210,255,0.25);
        }
        .mobile-link.active .mobile-link-code {
          color: rgba(0,210,255,0.5);
        }

        .mobile-divider {
          height: 1px;
          background: rgba(0,210,255,0.08);
          margin: 10px 0;
        }

        .mobile-hire {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px;
          font-family: 'Orbitron', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--cyan);
          border: 1px solid var(--cyan);
          border-radius: 4px;
          background: rgba(0,210,255,0.05);
          transition: all 0.3s;
          margin-top: 6px;
          animation: mobileSlide 0.3s 0.3s ease forwards;
          opacity: 0;
        }
        .mobile-hire:hover {
          background: rgba(0,210,255,0.12);
          box-shadow: 0 0 20px rgba(0,210,255,0.3);
        }

        .mobile-footer {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px 0;
          font-size: 9px;
          letter-spacing: 0.12em;
          color: rgba(0,210,255,0.2);
          animation: mobileSlide 0.3s 0.35s ease forwards;
          opacity: 0;
        }
        .mobile-footer-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--teal);
          animation: blinkNav 1.5s ease-in-out infinite;
        }
      `}),f.jsxs("nav",{className:`nav-shell ${c?"scrolled":""}`,children:[f.jsx("div",{className:"nav-scanline"}),f.jsxs("div",{className:"nav-inner",children:[f.jsxs(Ll,{to:"/",className:"nav-logo",children:[f.jsx("span",{className:"nav-logo-bracket",children:"["}),f.jsxs("div",{children:[f.jsxs("span",{className:"nav-logo-text",children:["VM",f.jsx("span",{className:"nav-logo-dot"})]}),f.jsx("span",{className:"nav-logo-sub",children:"v2.0 · neural"})]}),f.jsx("span",{className:"nav-logo-bracket",children:"]"})]}),f.jsx("ul",{className:"nav-links",ref:g,children:j.map((p,h)=>f.jsx("li",{className:"nav-item",children:f.jsxs(Ll,{to:p.to,className:({isActive:T})=>`nav-link-btn${T?" active":""}`,children:[f.jsx("span",{className:"link-code",children:p.code}),p.name]})},p.name))}),f.jsxs("div",{className:"nav-cta",children:[f.jsxs("div",{className:"nav-status",children:[f.jsx("span",{className:"nav-status-dot"}),"Available"]}),f.jsxs(Ll,{to:"/contact",className:"nav-hire-btn",children:["Hire Me",f.jsx("span",{className:"hire-arrow",children:"→"})]})]}),f.jsx("button",{className:"nav-mobile-btn",onClick:()=>s(!r),"aria-label":"Toggle menu",children:f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:r?f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"4",y1:"4",x2:"16",y2:"16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),f.jsx("line",{x1:"16",y1:"4",x2:"4",y2:"16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}):f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"3",y1:"6",x2:"17",y2:"6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),f.jsx("line",{x1:"3",y1:"10",x2:"13",y2:"10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),f.jsx("line",{x1:"3",y1:"14",x2:"17",y2:"14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})})]}),f.jsxs("div",{className:`nav-mobile-panel${r?" open":""}`,children:[j.map(p=>f.jsxs(Ll,{to:p.to,onClick:()=>s(!1),className:({isActive:h})=>`mobile-link${h?" active":""}`,children:[f.jsx("span",{children:p.name}),f.jsxs("span",{className:"mobile-link-code",children:["_",p.code]})]},p.name)),f.jsx("div",{className:"mobile-divider"}),f.jsx(Ll,{to:"/contact",onClick:()=>s(!1),className:"mobile-hire",children:"Hire Me →"}),f.jsxs("div",{className:"mobile-footer",children:[f.jsx("span",{className:"mobile-footer-dot"}),"SYS_ONLINE · OPEN_TO_WORK"]})]})]})]})};var Q0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},y0=Ra.createContext&&Ra.createContext(Q0),c1=["attr","size","title"];function u1(r,s){if(r==null)return{};var c,u,m=f1(r,s);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(r);for(u=0;u<b.length;u++)c=b[u],s.indexOf(c)===-1&&{}.propertyIsEnumerable.call(r,c)&&(m[c]=r[c])}return m}function f1(r,s){if(r==null)return{};var c={};for(var u in r)if({}.hasOwnProperty.call(r,u)){if(s.indexOf(u)!==-1)continue;c[u]=r[u]}return c}function ur(){return ur=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var u in c)({}).hasOwnProperty.call(c,u)&&(r[u]=c[u])}return r},ur.apply(null,arguments)}function S0(r,s){var c=Object.keys(r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);s&&(u=u.filter(function(m){return Object.getOwnPropertyDescriptor(r,m).enumerable})),c.push.apply(c,u)}return c}function fr(r){for(var s=1;s<arguments.length;s++){var c=arguments[s]!=null?arguments[s]:{};s%2?S0(Object(c),!0).forEach(function(u){d1(r,u,c[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(c)):S0(Object(c)).forEach(function(u){Object.defineProperty(r,u,Object.getOwnPropertyDescriptor(c,u))})}return r}function d1(r,s,c){return(s=p1(s))in r?Object.defineProperty(r,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[s]=c,r}function p1(r){var s=m1(r,"string");return typeof s=="symbol"?s:s+""}function m1(r,s){if(typeof r!="object"||!r)return r;var c=r[Symbol.toPrimitive];if(c!==void 0){var u=c.call(r,s);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(r)}function V0(r){return r&&r.map((s,c)=>Ra.createElement(s.tag,fr({key:c},s.attr),V0(s.child)))}function mr(r){return s=>Ra.createElement(h1,ur({attr:fr({},r.attr)},s),V0(r.child))}function h1(r){var s=c=>{var{attr:u,size:m,title:b}=r,g=u1(r,c1),j=m||c.size||"1em",p;return c.className&&(p=c.className),r.className&&(p=(p?p+" ":"")+r.className),Ra.createElement("svg",ur({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,u,g,{className:p,style:fr(fr({color:r.color||c.color},c.style),r.style),height:j,width:j,xmlns:"http://www.w3.org/2000/svg"}),b&&Ra.createElement("title",null,b),r.children)};return y0!==void 0?Ra.createElement(y0.Consumer,null,c=>s(c)):s(Q0)}function Z0(r){return mr({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(r)}function J0(r){return mr({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(r)}function ec(r){return mr({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(r)}function g1(r){return mr({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(r)}const b1=()=>{const r=new Date().getFullYear(),s=[{name:"Home",to:"/",code:"00"},{name:"Projects",to:"/projects",code:"01"},{name:"Skills",to:"/skills",code:"02"},{name:"About",to:"/about",code:"03"},{name:"Contact",to:"/contact",code:"04"}],c=[{icon:f.jsx(ec,{}),href:"https://github.com/vaibhavmishram3",label:"GitHub",handle:"@vaibhavmishram3"},{icon:f.jsx(J0,{}),href:"https://www.linkedin.com/in/vaibhavmishram3/",label:"LinkedIn",handle:"vaibhavmishram3"},{icon:f.jsx(Z0,{}),href:"https://wa.me/+918302979123",label:"WhatsApp",handle:"+91 83029 79123"}],u=[{key:"SPECIALIZATION",val:"AI & ML"},{key:"STACK",val:"Python · React · Node"},{key:"STATUS",val:"OPEN_TO_WORK"},{key:"VERSION",val:"v2.0.26"}];return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@400;500&display=swap');

        .ft-root {
          background: #020c14;
          border-top: 1px solid rgba(0,210,255,0.12);
          font-family: 'JetBrains Mono', monospace;
          position: relative;
          overflow: hidden;
        }

        /* grid background */
        .ft-root::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,210,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,210,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        /* top scan line */
        .ft-scanline {
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          overflow: hidden;
        }
        .ft-scanline::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 30%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0,210,255,0.5), transparent);
          animation: ftScan 6s ease-in-out infinite;
        }
        @keyframes ftScan {
          from { transform: translateX(-100%); }
          to   { transform: translateX(430%); }
        }
        @keyframes ftBlink {
          0%,100% { opacity:1; } 50% { opacity:0; }
        }
        @keyframes ftFadeUp {
          from { opacity:0; transform: translateY(16px); }
          to   { opacity:1; transform: translateY(0); }
        }
        @keyframes ftGlow {
          0%,100% { box-shadow: 0 0 10px rgba(0,210,255,0.15); }
          50%      { box-shadow: 0 0 24px rgba(0,210,255,0.4); }
        }

        /* ── Main grid ── */
        .ft-grid {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 72px 48px 56px;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 48px;
        }
        @media (max-width: 1024px) {
          .ft-grid { grid-template-columns: 1fr 1fr; padding: 56px 32px 48px; }
        }
        @media (max-width: 600px) {
          .ft-grid { grid-template-columns: 1fr; padding: 48px 24px 40px; }
        }

        /* ── Brand col ── */
        .ft-brand {}
        .ft-logo {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 20px;
          text-decoration: none;
        }
        .ft-logo-bracket {
          font-family: 'JetBrains Mono', monospace;
          font-size: 18px; color: rgba(0,210,255,0.25);
        }
        .ft-logo-name {
          font-family: 'Orbitron', monospace;
          font-size: 18px; font-weight: 900;
          letter-spacing: 0.1em; color: #fff;
          text-shadow: 0 0 20px rgba(0,210,255,0.4);
        }
        .ft-logo-dot {
          display: inline-block;
          width: 6px; height: 6px; border-radius: 50%;
          background: #00d2ff; margin-left: 1px;
          vertical-align: middle;
          animation: ftBlink 2s ease-in-out infinite;
          box-shadow: 0 0 8px #00d2ff;
        }

        .ft-bio {
          font-size: 12px; line-height: 1.9;
          color: rgba(150,220,240,0.45); font-weight: 400;
          border-left: 2px solid rgba(0,210,255,0.12);
          padding-left: 14px;
          margin-bottom: 24px;
        }

        /* spec table */
        .ft-specs {
          display: flex; flex-direction: column; gap: 6px;
        }
        .ft-spec-row {
          display: flex; align-items: center; gap: 8px;
          font-size: 10px; letter-spacing: 0.1em;
        }
        .ft-spec-key {
          color: rgba(0,210,255,0.3); font-weight: 400;
          min-width: 120px;
        }
        .ft-spec-sep { color: rgba(0,210,255,0.15); }
        .ft-spec-val { color: rgba(200,240,255,0.6); }
        .ft-spec-val.online { color: #00ffe0; }

        /* ── Col headers ── */
        .ft-col-head {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(0,210,255,0.35);
          margin-bottom: 20px;
          display: flex; align-items: center; gap: 8px;
        }
        .ft-col-head::before {
          content: '//';
          color: rgba(0,210,255,0.18);
        }

        /* ── Nav links ── */
        .ft-nav-list {
          list-style: none; display: flex; flex-direction: column; gap: 4px;
        }
        .ft-nav-item a {
          display: flex; align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          font-size: 11px; letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(150,220,240,0.45);
          text-decoration: none;
          border: 1px solid transparent;
          border-radius: 3px;
          transition: all 0.22s;
        }
        .ft-nav-item a:hover {
          color: #00d2ff;
          border-color: rgba(0,210,255,0.18);
          background: rgba(0,210,255,0.05);
          padding-left: 16px;
        }
        .ft-nav-code {
          font-size: 9px; color: rgba(0,210,255,0.2);
          transition: color 0.22s;
        }
        .ft-nav-item a:hover .ft-nav-code { color: rgba(0,210,255,0.45); }

        /* ── Social cards ── */
        .ft-social-list {
          display: flex; flex-direction: column; gap: 8px;
        }
        .ft-social-card {
          display: flex; align-items: center; gap: 12px;
          padding: 10px 14px;
          border: 1px solid rgba(0,210,255,0.1);
          border-radius: 4px;
          text-decoration: none;
          background: rgba(0,210,255,0.03);
          transition: all 0.25s;
          position: relative; overflow: hidden;
        }
        .ft-social-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,210,255,0.4), transparent);
          opacity: 0; transition: opacity 0.25s;
        }
        .ft-social-card:hover::before { opacity: 1; }
        .ft-social-card:hover {
          border-color: rgba(0,210,255,0.35);
          background: rgba(0,210,255,0.07);
          transform: translateX(4px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          animation: ftGlow 2s ease-in-out infinite;
        }
        .ft-social-icon {
          font-size: 15px; color: #00d2ff;
          filter: drop-shadow(0 0 4px rgba(0,210,255,0.4));
          flex-shrink: 0;
        }
        .ft-social-info { display: flex; flex-direction: column; gap: 1px; }
        .ft-social-label {
          font-size: 10px; letter-spacing: 0.12em;
          text-transform: uppercase; color: rgba(200,240,255,0.7);
          font-weight: 500;
        }
        .ft-social-handle {
          font-size: 9px; color: rgba(0,210,255,0.35);
          letter-spacing: 0.06em;
        }
        .ft-social-arrow {
          margin-left: auto; font-size: 12px;
          color: rgba(0,210,255,0.2);
          transition: all 0.25s;
        }
        .ft-social-card:hover .ft-social-arrow {
          color: #00d2ff; transform: translateX(3px);
        }

        /* ── Bottom bar ── */
        .ft-bottom {
          position: relative; z-index: 1;
          border-top: 1px solid rgba(0,210,255,0.08);
        }
        .ft-bottom-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 18px 48px;
          display: flex; align-items: center;
          justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        @media (max-width: 600px) {
          .ft-bottom-inner { padding: 16px 24px; flex-direction: column; text-align: center; }
        }

        .ft-copy {
          font-size: 10px; letter-spacing: 0.1em;
          color: rgba(0,210,255,0.2);
        }
        .ft-copy span { color: rgba(0,210,255,0.4); }

        .ft-status-row {
          display: flex; align-items: center; gap: 16px;
        }
        .ft-status-pill {
          display: flex; align-items: center; gap: 5px;
          font-size: 9px; letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(0,255,220,0.45);
          border: 1px solid rgba(0,255,220,0.12);
          padding: 4px 10px; border-radius: 100px;
        }
        .ft-status-pill-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: #00ffe0;
          animation: ftBlink 1.8s ease-in-out infinite;
          box-shadow: 0 0 4px #00ffe0;
        }
        .ft-build {
          font-size: 9px; letter-spacing: 0.1em;
          color: rgba(0,210,255,0.18);
        }
      `}),f.jsxs("footer",{className:"ft-root",children:[f.jsx("div",{className:"ft-scanline"}),f.jsxs("div",{className:"ft-grid",children:[f.jsxs("div",{className:"ft-brand",children:[f.jsxs(Ht,{to:"/",className:"ft-logo",children:[f.jsx("span",{className:"ft-logo-bracket",children:"["}),f.jsxs("span",{className:"ft-logo-name",children:["VM",f.jsx("span",{className:"ft-logo-dot"})]}),f.jsx("span",{className:"ft-logo-bracket",children:"]"})]}),f.jsx("p",{className:"ft-bio",children:"Passionate AI & Machine Learning developer building intelligent, data-driven applications with scalable and efficient software architecture."}),f.jsx("div",{className:"ft-specs",children:u.map(m=>f.jsxs("div",{className:"ft-spec-row",children:[f.jsx("span",{className:"ft-spec-key",children:m.key}),f.jsx("span",{className:"ft-spec-sep",children:":"}),f.jsx("span",{className:`ft-spec-val${m.val==="OPEN_TO_WORK"?" online":""}`,children:m.val})]},m.key))})]}),f.jsxs("div",{children:[f.jsx("div",{className:"ft-col-head",children:"Navigation"}),f.jsx("ul",{className:"ft-nav-list",children:s.map(m=>f.jsx("li",{className:"ft-nav-item",children:f.jsxs(Ht,{to:m.to,children:[m.name,f.jsxs("span",{className:"ft-nav-code",children:["_",m.code]})]})},m.name))})]}),f.jsxs("div",{children:[f.jsx("div",{className:"ft-col-head",children:"Connect"}),f.jsx("div",{className:"ft-social-list",children:c.map(m=>f.jsxs("a",{href:m.href,target:"_blank",rel:"noreferrer",className:"ft-social-card",children:[f.jsx("span",{className:"ft-social-icon",children:m.icon}),f.jsxs("div",{className:"ft-social-info",children:[f.jsx("span",{className:"ft-social-label",children:m.label}),f.jsx("span",{className:"ft-social-handle",children:m.handle})]}),f.jsx("span",{className:"ft-social-arrow",children:"→"})]},m.label))})]})]}),f.jsx("div",{className:"ft-bottom",children:f.jsxs("div",{className:"ft-bottom-inner",children:[f.jsxs("span",{className:"ft-copy",children:["© ",r," ",f.jsx("span",{children:"Vaibhav Mishra"}),". All rights reserved."]}),f.jsxs("div",{className:"ft-status-row",children:[f.jsxs("div",{className:"ft-status-pill",children:[f.jsx("span",{className:"ft-status-pill-dot"}),"Sys online"]}),f.jsxs("span",{className:"ft-build",children:["BUILD_",r," · NEURAL_v2"]})]})]})})]})]})},x1=()=>{const r=N.useRef(null);return N.useEffect(()=>{const s=r.current,c=s.getContext("2d");let u;const m=()=>{s.width=window.innerWidth,s.height=window.innerHeight};m(),window.addEventListener("resize",m);const g=Array.from({length:65},()=>({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,vx:(Math.random()-.5)*.38,vy:(Math.random()-.5)*.38,r:Math.random()*1.8+.8,pulse:Math.random()*Math.PI*2})),j=()=>{c.clearRect(0,0,s.width,s.height),g.forEach(p=>{p.x+=p.vx,p.y+=p.vy,p.pulse+=.022,(p.x<0||p.x>s.width)&&(p.vx*=-1),(p.y<0||p.y>s.height)&&(p.vy*=-1)});for(let p=0;p<g.length;p++)for(let h=p+1;h<g.length;h++){const T=g[p].x-g[h].x,S=g[p].y-g[h].y,U=Math.sqrt(T*T+S*S);if(U<155){const L=(1-U/155)*.22,E=(Math.sin(g[p].pulse)+1)/2;c.beginPath(),c.moveTo(g[p].x,g[p].y),c.lineTo(g[h].x,g[h].y),c.strokeStyle=`rgba(0,210,255,${L*(.5+E*.5)})`,c.lineWidth=.55,c.stroke()}}g.forEach(p=>{const h=(Math.sin(p.pulse)+1)/2,T=p.r+h*1.4,S=c.createRadialGradient(p.x,p.y,0,p.x,p.y,T*4);S.addColorStop(0,`rgba(0,230,255,${.75+h*.25})`),S.addColorStop(.4,"rgba(0,150,220,0.35)"),S.addColorStop(1,"rgba(0,0,0,0)"),c.beginPath(),c.arc(p.x,p.y,T*4,0,Math.PI*2),c.fillStyle=S,c.fill(),c.beginPath(),c.arc(p.x,p.y,T,0,Math.PI*2),c.fillStyle=`rgba(180,240,255,${.65+h*.35})`,c.fill()}),u=requestAnimationFrame(j)};return j(),()=>{cancelAnimationFrame(u),window.removeEventListener("resize",m)}},[]),f.jsx("canvas",{ref:r,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0,opacity:.32,pointerEvents:"none"}})},v1=()=>f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@400;500&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

      html, body {
        background: #020c14;
        min-height: 100%;
        overflow-x: hidden;
      }

      /* Dot-grid overlay — sits above canvas, below content */
      #layout-grid-overlay {
        position: fixed;
        inset: 0;
        background-image:
          linear-gradient(rgba(0,210,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,210,255,0.025) 1px, transparent 1px);
        background-size: 60px 60px;
        pointer-events: none;
        z-index: 1;
      }

      /* Radial vignette — subtle depth at edges */
      #layout-vignette {
        position: fixed;
        inset: 0;
        background: radial-gradient(
          ellipse at 50% 50%,
          transparent 40%,
          rgba(2,12,20,0.55) 100%
        );
        pointer-events: none;
        z-index: 1;
      }

      /* All page content sits above overlays */
      #layout-content {
        position: relative;
        z-index: 2;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }

      #layout-main {
        flex: 1;
      }

      /* Strip any bg that individual pages might set
         (they all set background: #020c14 which is fine,
          but ::before grid overlays would double-up — 
          we neutralise them here) */
      .ai-root::before,
      .ab-root::before,
      .sk-root::before,
      .pj-root::before,
      .ct-root::before {
        display: none !important;
      }

      /* Also remove fixed bg from individual page roots
         since Layout now owns the background */
      .ai-root,
      .ab-root,
      .sk-root,
      .pj-root,
      .ct-root {
        background: transparent !important;
      }
    `}),f.jsx(x1,{}),f.jsx("div",{id:"layout-grid-overlay"}),f.jsx("div",{id:"layout-vignette"}),f.jsxs("div",{id:"layout-content",children:[f.jsx(s1,{}),f.jsx("main",{id:"layout-main",children:f.jsx(Ag,{})}),f.jsx(b1,{})]})]}),E0=(r,s,c,u)=>{r.style.transition=`${s} ${c}ms ${u}`},na=(r,s,c)=>Math.min(Math.max(r,s),c);class y1{constructor(s,c){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=g=>{const{width:j,height:p}=g,h=Math.sqrt(j**2+p**2);return{width:h,height:h}},this.setSize=g=>{const j=this.calculateGlareSize(g);this.glareEl.style.width=`${j.width}px`,this.glareEl.style.height=`${j.height}px`},this.update=(g,j,p,h)=>{this.updateAngle(g,j.glareReverse),this.updateOpacity(g,j,p,h)},this.updateAngle=(g,j)=>{const{xPercentage:p,yPercentage:h}=g,T=180/Math.PI,S=p?Math.atan2(h,-p)*T:0;this.glareAngle=S-(j?180:0)},this.updateOpacity=(g,j,p,h)=>{const{xPercentage:T,yPercentage:S}=g,{glarePosition:U,glareReverse:L,glareMaxOpacity:E}=j,B=p?-1:1,H=h?-1:1,Y=L?-1:1;let J=0;switch(U){case"top":J=-T*B*Y;break;case"right":J=S*H*Y;break;case"bottom":case void 0:J=T*B*Y;break;case"left":J=-S*H*Y;break;case"all":J=Math.hypot(T,S)}const Z=na(J,0,100);this.glareOpacity=Z*E/100},this.render=g=>{const{glareColor:j}=g;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${j} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const u={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:c,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},m=this.calculateGlareSize(s),b={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${m.width}px`,height:`${m.height}px`};Object.assign(this.glareWrapperEl.style,u),Object.assign(this.glareEl.style,b)}}class S1{constructor(){this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(s,c)=>{this.updateTilt(s,c),this.updateTiltManualInput(s,c),this.updateTiltReverse(c),this.updateTiltLimits(c)},this.updateTilt=(s,c)=>{const{xPercentage:u,yPercentage:m}=s,{tiltMaxAngleX:b,tiltMaxAngleY:g}=c;this.tiltAngleX=u*b/100,this.tiltAngleY=m*g/100*-1},this.updateTiltManualInput=(s,c)=>{const{tiltAngleXManual:u,tiltAngleYManual:m,tiltMaxAngleX:b,tiltMaxAngleY:g}=c;(u!==null||m!==null)&&(this.tiltAngleX=u!==null?u:0,this.tiltAngleY=m!==null?m:0,s.xPercentage=100*this.tiltAngleX/b,s.yPercentage=100*this.tiltAngleY/g)},this.updateTiltReverse=s=>{const c=s.tiltReverse?-1:1;this.tiltAngleX=c*this.tiltAngleX,this.tiltAngleY=c*this.tiltAngleY},this.updateTiltLimits=s=>{const{tiltAxis:c}=s;this.tiltAngleX=na(this.tiltAngleX,-90,90),this.tiltAngleY=na(this.tiltAngleY,-90,90),c&&(this.tiltAngleX=c==="x"?this.tiltAngleX:0,this.tiltAngleY=c==="y"?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=s=>{const{tiltMaxAngleX:c,tiltMaxAngleY:u}=s;this.tiltAngleXPercentage=this.tiltAngleX/c*100,this.tiltAngleYPercentage=this.tiltAngleY/u*100},this.render=s=>{s.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const E1={scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1,tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null,glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"};class hr extends N.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=async()=>{if(!window.DeviceOrientationEvent)return;const s=DeviceOrientationEvent.requestPermission;if(typeof s=="function")return void(await s()==="granted"&&window.addEventListener("deviceorientation",this.onMove));window.addEventListener("deviceorientation",this.onMove)},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=s=>{this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(s),this.update(s.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=s=>{const{onEnter:c}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),c&&c({event:s})},this.onMove=s=>{this.mainLoop(s),this.emitOnMove(s)},this.onLeave=s=>{const{onLeave:c}=this.props;if(this.setTransitions(),c&&c({event:s}),this.props.reset){const u=new CustomEvent("autoreset");this.onMove(u)}},this.processInput=s=>{const{scale:c}=this.props;switch(s.type){case"mousemove":this.wrapperEl.clientPosition.x=s.pageX,this.wrapperEl.clientPosition.y=s.pageY,this.wrapperEl.scale=c;break;case"touchmove":this.wrapperEl.clientPosition.x=s.touches[0].pageX,this.wrapperEl.clientPosition.y=s.touches[0].pageY,this.wrapperEl.scale=c;break;case"deviceorientation":this.processInputDeviceOrientation(s),this.wrapperEl.scale=c;break;case"autoreset":{const{tiltAngleXInitial:u,tiltAngleYInitial:m,tiltMaxAngleX:b,tiltMaxAngleY:g}=this.props,j=m/g*100;this.wrapperEl.clientPosition.xPercentage=na(u/b*100,-100,100),this.wrapperEl.clientPosition.yPercentage=na(j,-100,100),this.wrapperEl.scale=1;break}}},this.processInputDeviceOrientation=s=>{if(!s.gamma||!s.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:c,tiltMaxAngleY:u}=this.props,m=s.gamma;this.wrapperEl.clientPosition.xPercentage=s.beta/c*100,this.wrapperEl.clientPosition.yPercentage=m/u*100,this.wrapperEl.clientPosition.xPercentage=na(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=na(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=s=>{const{tiltEnable:c,flipVertically:u,flipHorizontally:m}=this.props;s!=="autoreset"&&s!=="deviceorientation"&&s!=="propChange"&&this.updateClientInput(),c&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,u,m)},this.updateClientInput=()=>{const{trackOnWindow:s}=this.props;let c,u;if(s){const{x:m,y:b}=this.wrapperEl.clientPosition;c=b/window.innerHeight*200-100,u=m/window.innerWidth*200-100}else{const{size:{width:m,height:b,left:g,top:j},clientPosition:{x:p,y:h}}=this.wrapperEl;c=(h-j)/b*200-100,u=(p-g)/m*200-100}this.wrapperEl.clientPosition.xPercentage=na(c,-100,100),this.wrapperEl.clientPosition.yPercentage=na(u,-100,100)},this.updateFlip=()=>{const{flipVertically:s,flipHorizontally:c}=this.props;s&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),c&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new S1,this.initGlare(),this.setSize(),this.addEventListeners(),typeof CustomEvent>"u")return;const s=new CustomEvent("autoreset");this.mainLoop(s);const c=new CustomEvent("initial");this.emitOnMove(c)}componentWillUnmount(){this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const s=new CustomEvent("propChange");this.mainLoop(s),this.emitOnMove(s)}addEventListeners(){const{trackOnWindow:s,gyroscope:c}=this.props;window.addEventListener("resize",this.setSize),s&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),c&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:s,gyroscope:c}=this.props;window.removeEventListener("resize",this.setSize),s&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),c&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const s=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=s.left+window.scrollX,this.wrapperEl.size.top=s.top+window.scrollY}initGlare(){const{glareEnable:s,glareBorderRadius:c}=this.props;s&&(this.glare=new y1(this.wrapperEl.size,c),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(s){const{onMove:c}=this.props;if(!c)return;let u=0,m=0;this.glare&&(u=this.glare.glareAngle,m=this.glare.glareOpacity),c({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:u,glareOpacity:m,event:s})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:s}=this.props;this.wrapperEl.node.style.transform+=`perspective(${s}px) `}renderScale(){const{scale:s}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${s},${s},${s})`}setTransitions(){const{transitionSpeed:s,transitionEasing:c}=this.props;E0(this.wrapperEl.node,"all",s,c),this.glare&&E0(this.glare.glareEl,"opacity",s,c)}render(){const{children:s,className:c,style:u}=this.props;return f.jsx("div",{ref:m=>{this.wrapperEl.node=m},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:c,style:u,children:s})}}hr.defaultProps=E1;const K0="/my-portfolio/assets/ProfileImg-cvfvZNOW.webp",w1=()=>{const r=N.useRef(null);return N.useEffect(()=>{const s=r.current,c=s.getContext("2d");let u;const m=()=>{s.width=window.innerWidth,s.height=window.innerHeight};m(),window.addEventListener("resize",m);const g=Array.from({length:60},()=>({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:Math.random()*2+1,pulse:Math.random()*Math.PI*2})),j=()=>{c.clearRect(0,0,s.width,s.height),g.forEach(p=>{p.x+=p.vx,p.y+=p.vy,p.pulse+=.025,(p.x<0||p.x>s.width)&&(p.vx*=-1),(p.y<0||p.y>s.height)&&(p.vy*=-1)});for(let p=0;p<g.length;p++)for(let h=p+1;h<g.length;h++){const T=g[p].x-g[h].x,S=g[p].y-g[h].y,U=Math.sqrt(T*T+S*S);if(U<160){const L=(1-U/160)*.25,E=(Math.sin(g[p].pulse)+1)/2;c.beginPath(),c.moveTo(g[p].x,g[p].y),c.lineTo(g[h].x,g[h].y),c.strokeStyle=`rgba(0, 210, 255, ${L*(.5+E*.5)})`,c.lineWidth=.6,c.stroke()}}g.forEach(p=>{const h=(Math.sin(p.pulse)+1)/2,T=p.r+h*1.5,S=c.createRadialGradient(p.x,p.y,0,p.x,p.y,T*4);S.addColorStop(0,`rgba(0, 230, 255, ${.8+h*.2})`),S.addColorStop(.4,"rgba(0, 150, 220, 0.4)"),S.addColorStop(1,"rgba(0,0,0,0)"),c.beginPath(),c.arc(p.x,p.y,T*4,0,Math.PI*2),c.fillStyle=S,c.fill(),c.beginPath(),c.arc(p.x,p.y,T,0,Math.PI*2),c.fillStyle=`rgba(180, 240, 255, ${.7+h*.3})`,c.fill()}),u=requestAnimationFrame(j)};return j(),()=>{cancelAnimationFrame(u),window.removeEventListener("resize",m)}},[]),f.jsx("canvas",{ref:r,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0,opacity:.35,pointerEvents:"none"}})},j1=()=>{const r=["MODEL ACCURACY: 97.4%","EPOCH 128/128","LOSS: 0.0031","GRADIENT DESCENT ▼","TRAINING COMPLETE","NEURAL WEIGHTS LOADED","BATCH SIZE: 64","LEARNING RATE: 0.001","F1 SCORE: 0.96"];return f.jsx("div",{style:{overflow:"hidden",borderTop:"1px solid rgba(0,210,255,0.15)",borderBottom:"1px solid rgba(0,210,255,0.15)",padding:"10px 0",position:"relative",zIndex:1},children:f.jsx("div",{style:{display:"flex",gap:"64px",animation:"ticker 22s linear infinite",whiteSpace:"nowrap",width:"max-content"},children:[...r,...r].map((s,c)=>f.jsxs("span",{style:{fontSize:"10px",letterSpacing:"0.18em",color:"rgba(0,210,255,0.5)",fontFamily:"'JetBrains Mono', monospace",fontWeight:500},children:[f.jsx("span",{style:{color:"rgba(0,210,255,0.25)",marginRight:"12px"},children:"◆"}),s]},c))})})},z1=()=>{const[r,s]=N.useState(""),[c,u]=N.useState(null),[m,b]=N.useState(!0),[g,j]=N.useState(null),p="MCA (AI & ML) · Web Developer · Python & C++";N.useEffect(()=>{let U=0;const L=setInterval(()=>{s(p.slice(0,U)),U++,U>p.length&&clearInterval(L)},40);return()=>clearInterval(L)},[]),N.useEffect(()=>{(async()=>{try{b(!0),j(null),console.log("🔄 Fetching LeetCode stats from API...");const L=await fetch("https://alfa-leetcode-api.onrender.com/vaibhavmishram3/solved",{method:"GET",cache:"no-cache"});if(console.log("📡 Response status:",L.status),!L.ok)throw new Error(`API returned ${L.status}`);const E=await L.json();if(console.log("✅ LeetCode data received:",E),E&&typeof E.solvedProblem=="number")u({total:E.solvedProblem,easy:E.easySolved||0,medium:E.mediumSolved||0,hard:E.hardSolved||0,attempting:E.attemptedProblems||0,totalEasy:E.totalEasy||951,totalMedium:E.totalMedium||2077,totalHard:E.totalHard||949}),console.log("✅ LeetCode stats loaded successfully");else throw new Error("Invalid data structure from API")}catch(L){console.error("❌ API fetch failed:",L.message),console.log("📌 Using fallback hardcoded stats..."),u({total:92,easy:61,medium:28,hard:3,attempting:6,totalEasy:951,totalMedium:2077,totalHard:949}),j("Using cached data")}finally{b(!1)}})()},[]);const h=[{title:"AI-Based Student Performance Prediction",description:"ML model predicting academic outcomes using behavioral and academic datasets with 94% accuracy.",tag:"Machine Learning",icon:"🧠",metric:"94% Accuracy",num:"01"},{title:"Weather Forecast Website",description:"Real-time forecasting with live API integration, predictive modeling and dynamic visualizations.",tag:"Web Dev",icon:"🌐",metric:"Live API",num:"02"},{title:"Expense Tracker",description:"Full-stack app with secure auth, analytics dashboard, and intelligent spending pattern detection.",tag:"Full Stack",icon:"⚡",metric:"Full Stack",num:"03"}],T=[{value:"10+",label:"Projects",sub:"Completed"},{value:"2+",label:"Years",sub:"Learning"},{value:"8+",label:"Tech Stack",sub:"Mastered"},{value:"100%",label:"Dedication",sub:"Always"}],S=[{name:"React",color:"#61dafb"},{name:"Node.js",color:"#68d391"},{name:"Python",color:"#ffd43b"},{name:"MongoDB",color:"#47a248"},{name:"AI / ML",color:"#00d2ff"},{name:"C++",color:"#f08080"}];return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;1,300&family=JetBrains+Mono:wght@400;500&display=swap');

        :root {
          --bg: #020c14;
          --bg2: #041320;
          --cyan: #00d2ff;
          --cyan-dim: rgba(0,210,255,0.12);
          --cyan-mid: rgba(0,210,255,0.35);
          --teal: #00ffe0;
          --muted: rgba(150,220,240,0.45);
          --text: rgba(200,240,255,0.9);
          --border: rgba(0,210,255,0.15);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .ai-root {
          background: var(--bg);
          min-height: 100vh;
          color: var(--text);
          font-family: 'IBM Plex Mono', monospace;
          overflow-x: hidden;
          padding-top: 80px;
          position: relative;
        }

        .ai-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,210,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,210,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 0;
          pointer-events: none;
        }

        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(0,210,255,0.2); }
          50%       { box-shadow: 0 0 40px rgba(0,210,255,0.5), 0 0 80px rgba(0,210,255,0.15); }
        }

        .fu { animation: fadeUp 0.8s ease forwards; opacity: 0; }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.25s; }
        .d3 { animation-delay: 0.4s; }
        .d4 { animation-delay: 0.55s; }
        .d5 { animation-delay: 0.7s; }

        /* ── Hero ── */
        .ai-hero {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 48px 100px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .ai-hero { grid-template-columns: 1fr; padding: 48px 24px 72px; gap: 48px; }
          .ai-img-col { display: flex; justify-content: center; }
        }

        .terminal-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--cyan);
          margin-bottom: 20px;
          letter-spacing: 0.1em;
        }
        .terminal-label::before {
          content: '▶';
          font-size: 9px;
          color: var(--teal);
        }

        .ai-name {
          font-family: 'Orbitron', monospace;
          font-size: clamp(36px, 5.5vw, 72px);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.01em;
          color: #fff;
          text-shadow: 0 0 40px rgba(0,210,255,0.4);
          margin-bottom: 8px;
        }
        .ai-name .last {
          display: block;
          background: linear-gradient(90deg, var(--cyan) 0%, var(--teal) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 20px rgba(0,210,255,0.5));
        }

        .ai-typewriter {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--muted);
          margin-bottom: 32px;
          min-height: 20px;
        }
        .cursor-blink {
          display: inline-block;
          width: 8px;
          height: 14px;
          background: var(--cyan);
          margin-left: 2px;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }

        .ai-bio {
          font-size: 13px;
          line-height: 1.9;
          color: rgba(160,220,240,0.6);
          max-width: 480px;
          margin-bottom: 36px;
          font-weight: 300;
          border-left: 2px solid var(--border);
          padding-left: 20px;
        }

        .tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 40px;
        }
        .tech-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          font-size: 11px;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.06em;
          border-radius: 4px;
          border: 1px solid rgba(0,210,255,0.2);
          background: rgba(0,210,255,0.05);
          color: var(--text);
          transition: all 0.2s;
          cursor: default;
        }
        .tech-pill:hover {
          border-color: var(--cyan);
          background: rgba(0,210,255,0.1);
          box-shadow: 0 0 12px rgba(0,210,255,0.2);
        }
        .tech-dot { width: 6px; height: 6px; border-radius: 50%; }

        .ai-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn-glow {
          padding: 14px 32px;
          font-family: 'Orbitron', monospace;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.3s;
          display: inline-block;
        }
        .btn-glow.primary {
          background: linear-gradient(135deg, rgba(0,210,255,0.15), rgba(0,255,220,0.1));
          border: 1px solid var(--cyan);
          color: var(--cyan);
          animation: glowPulse 3s ease-in-out infinite;
        }
        .btn-glow.primary:hover {
          background: linear-gradient(135deg, rgba(0,210,255,0.3), rgba(0,255,220,0.2));
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(0,210,255,0.5);
        }
        .btn-glow.secondary {
          background: transparent;
          border: 1px solid rgba(0,210,255,0.2);
          color: var(--muted);
        }
        .btn-glow.secondary:hover {
          border-color: rgba(0,210,255,0.5);
          color: var(--text);
          transform: translateY(-2px);
        }

        /* ── Profile card ── */
        .profile-wrap {
          position: relative;
          width: 300px;
          animation: floatY 5s ease-in-out infinite;
        }
        .corner {
          position: absolute;
          width: 20px; height: 20px;
          z-index: 3;
        }
        .corner-tl { top: -6px; left: -6px; border-top: 2px solid var(--cyan); border-left: 2px solid var(--cyan); }
        .corner-tr { top: -6px; right: -6px; border-top: 2px solid var(--cyan); border-right: 2px solid var(--cyan); }
        .corner-bl { bottom: -6px; left: -6px; border-bottom: 2px solid var(--cyan); border-left: 2px solid var(--cyan); }
        .corner-br { bottom: -6px; right: -6px; border-bottom: 2px solid var(--cyan); border-right: 2px solid var(--cyan); }

        .profile-img-box {
          width: 300px; height: 360px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border);
          position: relative;
          background: var(--bg2);
        }
        .profile-img-box img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top;
          display: block;
          filter: saturate(0.7) brightness(0.85);
          mix-blend-mode: luminosity;
        }
        .profile-img-box::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(0,30,50,0.8) 100%);
        }
        .profile-img-box::before {
          content: '';
          position: absolute; inset: 0;
          background: repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(0,210,255,0.03) 2px, rgba(0,210,255,0.03) 4px
          );
          z-index: 1;
          pointer-events: none;
        }
        .profile-status {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 16px;
          z-index: 2;
          display: flex; flex-direction: column; gap: 4px;
        }
        .status-row {
          display: flex; align-items: center; gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; color: var(--cyan); letter-spacing: 0.08em;
        }
        .status-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--teal);
          animation: blink 1.5s ease-in-out infinite;
        }

        /* ── Stats ── */
        .ai-stats {
          position: relative; z-index: 1;
          background: linear-gradient(90deg, rgba(0,210,255,0.04), rgba(0,255,220,0.02), rgba(0,210,255,0.04));
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .ai-stats-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 48px;
          display: grid; grid-template-columns: repeat(4,1fr);
        }
        @media (max-width: 768px) {
          .ai-stats-inner { grid-template-columns: repeat(2,1fr); padding: 0 24px; }
        }
        .stat-cell {
          padding: 36px 24px;
          border-right: 1px solid var(--border);
          position: relative; overflow: hidden;
          transition: background 0.3s;
        }
        .stat-cell:last-child { border-right: none; }
        .stat-cell::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, var(--cyan-mid), transparent);
          transform: scaleX(0); transition: transform 0.4s;
        }
        .stat-cell:hover::after { transform: scaleX(1); }
        .stat-cell:hover { background: rgba(0,210,255,0.04); }
        .stat-val {
          font-family: 'Orbitron', monospace;
          font-size: 36px; font-weight: 900;
          color: #fff;
          text-shadow: 0 0 20px rgba(0,210,255,0.5);
          line-height: 1; letter-spacing: -0.01em;
        }
        .stat-val .ac { color: var(--cyan); }
        .stat-lbl {
          font-size: 10px; letter-spacing: 0.15em;
          text-transform: uppercase; color: var(--muted); margin-top: 6px;
          font-family: 'JetBrains Mono', monospace;
        }

        /* ── Projects ── */
        .ai-projects {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 100px 48px;
        }
        @media (max-width: 768px) { .ai-projects { padding: 72px 24px; } }

        .sec-head {
          display: flex; align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 48px; flex-wrap: wrap; gap: 16px;
        }
        .sec-title {
          font-family: 'Orbitron', monospace;
          font-size: clamp(22px, 3.5vw, 38px);
          font-weight: 900; color: #fff;
          text-shadow: 0 0 30px rgba(0,210,255,0.3);
          letter-spacing: 0.02em;
        }
        .sec-title .dim {
          color: rgba(0,210,255,0.4); font-size: 0.6em;
          display: block; margin-bottom: 4px; letter-spacing: 0.15em;
          font-weight: 400;
        }
        .sec-link {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--cyan);
          text-decoration: none;
          display: flex; align-items: center; gap: 6px;
          transition: gap 0.2s;
          border-bottom: 1px solid transparent; padding-bottom: 2px;
        }
        .sec-link:hover { gap: 12px; border-bottom-color: var(--cyan); }

        .proj-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 16px;
        }
        @media (max-width: 900px) { .proj-grid { grid-template-columns: 1fr; } }

        .proj-card {
          border: 1px solid var(--border);
          border-radius: 6px; padding: 32px 28px;
          background: rgba(0,20,35,0.6);
          backdrop-filter: blur(8px);
          position: relative; overflow: hidden;
          transition: all 0.35s ease;
        }
        .proj-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, var(--cyan-mid), transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .proj-card:hover::before { opacity: 1; }
        .proj-card:hover {
          border-color: rgba(0,210,255,0.4);
          transform: translateY(-6px);
          background: rgba(0,25,45,0.8);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(0,210,255,0.08);
        }

        .proj-top {
          display: flex; align-items: center;
          justify-content: space-between; margin-bottom: 20px;
        }
        .proj-icon { font-size: 28px; filter: drop-shadow(0 0 8px rgba(0,210,255,0.4)); }
        .proj-metric {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.1em;
          color: var(--teal);
          border: 1px solid rgba(0,255,220,0.25);
          padding: 3px 10px; border-radius: 100px;
        }
        .proj-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; text-transform: uppercase;
          letter-spacing: 0.18em; color: var(--cyan);
          margin-bottom: 10px;
        }
        .proj-title {
          font-family: 'Orbitron', monospace;
          font-size: 14px; font-weight: 700; color: #fff;
          margin-bottom: 12px; letter-spacing: 0.01em; line-height: 1.4;
        }
        .proj-desc {
          font-size: 12px; line-height: 1.8;
          color: var(--muted); font-weight: 300;
        }
        .proj-num-bg {
          position: absolute; bottom: -10px; right: -5px;
          font-family: 'Orbitron', monospace;
          font-size: 80px; font-weight: 900;
          color: rgba(0,210,255,0.04); line-height: 1;
          pointer-events: none; letter-spacing: -0.04em;
          transition: color 0.3s;
        }
        .proj-card:hover .proj-num-bg { color: rgba(0,210,255,0.07); }

        .cta-row {
          margin-top: 48px; display: flex;
          align-items: center; gap: 20px;
        }
        .cta-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, var(--border), transparent);
        }

        /* ── LeetCode Section ── */
        .leetcode-section {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 80px 48px;
        }
        @media (max-width: 768px) { .leetcode-section { padding: 56px 24px; } }

        .leetcode-card {
          border: 2px solid var(--cyan);
          border-radius: 8px;
          padding: 48px;
          background: linear-gradient(135deg, rgba(0,210,255,0.08), rgba(0,255,220,0.04));
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
          animation: fadeUp 0.8s ease forwards;
          opacity: 0;
          animation-delay: 0.3s;
        }
        @media (max-width: 768px) {
          .leetcode-card {
            flex-direction: column;
            text-align: center;
            padding: 32px;
          }
        }

        .leetcode-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--cyan), transparent);
          opacity: 0.5;
        }

        .leetcode-content {
          flex: 1;
        }

        .leetcode-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--cyan);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .leetcode-label::before {
          content: '◆';
          font-size: 8px;
        }

        .leetcode-stat {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 16px;
        }

        .leetcode-number {
          font-family: 'Orbitron', monospace;
          font-size: 56px;
          font-weight: 900;
          color: var(--cyan);
          text-shadow: 0 0 30px rgba(0,210,255,0.6);
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .leetcode-desc {
          font-size: 13px;
          line-height: 1.8;
          color: rgba(160,220,240,0.65);
          max-width: 400px;
        }

        .leetcode-links {
          display: flex;
          gap: 16px;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .leetcode-link {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--teal);
          text-decoration: none;
          padding: 6px 14px;
          border: 1px solid rgba(0,255,220,0.3);
          border-radius: 4px;
          transition: all 0.2s;
        }

        .leetcode-link:hover {
          border-color: var(--teal);
          background: rgba(0,255,220,0.1);
          box-shadow: 0 0 15px rgba(0,255,220,0.2);
        }

        .leetcode-visual {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .leetcode-icon {
          font-size: 64px;
          filter: drop-shadow(0 0 15px rgba(0,210,255,0.5));
          animation: floatY 4s ease-in-out infinite;
        }

        .leetcode-badge {
          font-family: 'Orbitron', monospace;
          font-size: 12px;
          font-weight: 700;
          color: var(--teal);
          background: rgba(0,255,220,0.15);
          border: 1px solid rgba(0,255,220,0.3);
          padding: 8px 16px;
          border-radius: 4px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .leetcode-stats-breakdown {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid rgba(0,210,255,0.2);
        }

        .difficulty-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
        }

        .difficulty-label {
          font-size: 9px;
          color: var(--muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-family: 'JetBrains Mono', monospace;
        }

        .difficulty-easy { color: #50c878; }
        .difficulty-medium { color: #ffa500; }
        .difficulty-hard { color: #ff6b6b; }
        .difficulty-attempting { color: var(--cyan); }

        .difficulty-number {
          font-family: 'Orbitron', monospace;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
        }

        .difficulty-total {
          font-size: 10px;
          color: rgba(160,220,240,0.5);
          font-family: 'JetBrains Mono', monospace;
        }
      `}),f.jsxs("div",{className:"ai-root",children:[f.jsx(w1,{}),f.jsxs("section",{className:"ai-hero",children:[f.jsxs("div",{children:[f.jsx("div",{className:"terminal-label fu d1",children:"sys.init() → portfolio_v2.execute()"}),f.jsxs("h1",{className:"ai-name fu d2",children:["VAIBHAV",f.jsx("span",{className:"last",children:"MISHRA"})]}),f.jsxs("div",{className:"ai-typewriter fu d3",children:[f.jsx("span",{children:r}),f.jsx("span",{className:"cursor-blink"})]}),f.jsx("p",{className:"ai-bio fu d3",children:"Building intelligent systems at the intersection of data, algorithms, and real-world engineering. Specializing in machine learning pipelines, responsive web architectures, and scalable backend systems."}),f.jsx("div",{className:"tech-row fu d4",children:S.map((U,L)=>f.jsxs("span",{className:"tech-pill",children:[f.jsx("span",{className:"tech-dot",style:{background:U.color}}),U.name]},L))}),f.jsxs("div",{className:"ai-btns fu d5",children:[f.jsx(Ht,{to:"/projects",className:"btn-glow primary",children:"View Projects"}),f.jsx(Ht,{to:"/contact",className:"btn-glow secondary",children:"Contact Me"})]})]}),f.jsx("div",{className:"ai-img-col fu d3",children:f.jsx(hr,{glareEnable:!0,glareMaxOpacity:.08,scale:1.03,tiltMaxAngleX:8,tiltMaxAngleY:8,transitionSpeed:1500,children:f.jsxs("div",{className:"profile-wrap",children:[f.jsx("div",{className:"corner corner-tl"}),f.jsx("div",{className:"corner corner-tr"}),f.jsx("div",{className:"corner corner-bl"}),f.jsx("div",{className:"corner corner-br"}),f.jsxs("div",{className:"profile-img-box",children:[f.jsx("img",{src:K0,alt:"Vaibhav Mishra"}),f.jsxs("div",{className:"profile-status",children:[f.jsxs("div",{className:"status-row",children:[f.jsx("span",{className:"status-dot"}),"SYSTEM: ONLINE"]}),f.jsx("div",{className:"status-row",style:{color:"rgba(0,255,220,0.6)"},children:"STATUS: OPEN TO WORK"})]})]})]})})})]}),f.jsx(j1,{}),f.jsx("section",{className:"ai-stats",children:f.jsx("div",{className:"ai-stats-inner",children:T.map((U,L)=>f.jsxs("div",{className:"stat-cell",children:[f.jsxs("div",{className:"stat-val",children:[U.value.replace(/\D/g,""),f.jsx("span",{className:"ac",children:U.value.replace(/\d/g,"")})]}),f.jsxs("div",{className:"stat-lbl",children:[U.label," · ",U.sub]})]},L))})}),f.jsx("section",{className:"leetcode-section",children:f.jsxs("div",{className:"leetcode-card",children:[f.jsxs("div",{className:"leetcode-content",children:[f.jsx("div",{className:"leetcode-label",children:"LeetCode Achievement"}),f.jsx("div",{className:"leetcode-stat",children:f.jsx("div",{className:"leetcode-number",children:m?"...":c?.total||"0"})}),f.jsx("p",{className:"leetcode-desc",children:"Problems solved on LeetCode. Strengthening problem-solving skills across algorithms, data structures, and system design patterns."}),c&&!m&&f.jsxs("div",{className:"leetcode-stats-breakdown",children:[f.jsxs("div",{className:"difficulty-stat",children:[f.jsx("div",{className:"difficulty-label difficulty-easy",children:"Easy"}),f.jsx("div",{className:"difficulty-number",children:c.easy||0}),f.jsxs("div",{className:"difficulty-total",children:["/ ",c.totalEasy||951]})]}),f.jsxs("div",{className:"difficulty-stat",children:[f.jsx("div",{className:"difficulty-label difficulty-medium",children:"Medium"}),f.jsx("div",{className:"difficulty-number",children:c.medium||0}),f.jsxs("div",{className:"difficulty-total",children:["/ ",c.totalMedium||2077]})]}),f.jsxs("div",{className:"difficulty-stat",children:[f.jsx("div",{className:"difficulty-label difficulty-hard",children:"Hard"}),f.jsx("div",{className:"difficulty-number",children:c.hard||0}),f.jsxs("div",{className:"difficulty-total",children:["/ ",c.totalHard||949]})]}),f.jsxs("div",{className:"difficulty-stat",children:[f.jsx("div",{className:"difficulty-label difficulty-attempting",children:"Attempting"}),f.jsx("div",{className:"difficulty-number",children:c.attempting||0}),f.jsx("div",{className:"difficulty-total",children:"problems"})]})]}),g&&!m&&f.jsxs("div",{style:{fontSize:"11px",color:"rgba(255,107,107,0.7)",marginTop:"12px",padding:"8px",border:"1px solid rgba(255,107,107,0.3)",borderRadius:"4px",fontFamily:"'IBM Plex Mono', monospace"},children:["⚠️ Unable to fetch stats: ",g]}),f.jsx("div",{className:"leetcode-links",children:f.jsx("a",{href:"https://leetcode.com/u/vaibhavmishram3/",target:"_blank",rel:"noopener noreferrer",className:"leetcode-link",children:"View Profile →"})})]}),f.jsxs("div",{className:"leetcode-visual",children:[f.jsx("div",{className:"leetcode-icon",children:"💻"}),f.jsx("div",{className:"leetcode-badge",children:"Active Solver"})]})]})}),f.jsxs("section",{className:"ai-projects",children:[f.jsxs("div",{className:"sec-head",children:[f.jsxs("h2",{className:"sec-title",children:[f.jsx("span",{className:"dim",children:"// FEATURED_WORK"}),"PROJECTS"]}),f.jsx(Ht,{to:"/projects",className:"sec-link",children:"ALL_PROJECTS →"})]}),f.jsx("div",{className:"proj-grid",children:h.map((U,L)=>f.jsxs("div",{className:"proj-card",children:[f.jsxs("div",{className:"proj-top",children:[f.jsx("span",{className:"proj-icon",children:U.icon}),f.jsx("span",{className:"proj-metric",children:U.metric})]}),f.jsxs("div",{className:"proj-tag",children:["[ ",U.tag," ]"]}),f.jsx("h3",{className:"proj-title",children:U.title}),f.jsx("p",{className:"proj-desc",children:U.description}),f.jsx("div",{className:"proj-num-bg",children:U.num})]},L))}),f.jsxs("div",{className:"cta-row",children:[f.jsx("div",{className:"cta-line"}),f.jsx(Ht,{to:"/projects",className:"btn-glow primary",children:"EXPLORE_ALL( )"}),f.jsx("div",{className:"cta-line"})]})]})]})]})},w0="vaibhavmishram3";function N1(r){if(!r)return"Other";const s=["JavaScript","TypeScript","HTML","CSS","Vue","PHP"],c=["Python","Jupyter Notebook","R"],u=["C++","C","Java"];return s.includes(r)?"Web Dev":c.includes(r)?"AI / ML":u.includes(r)?"DSA":"Other"}const A1=["All","AI / ML","Web Dev","DSA","Other"],j0={React:"#61dafb",TypeScript:"#3178c6",Python:"#ffd43b","Machine Learning":"#00d2ff","C++":"#f08080",JavaScript:"#f7df1e","Tailwind CSS":"#38bdf8",HTML:"#e44d26",CSS:"#264de4",Vite:"#646cff","React Router":"#ca4245",API:"#00ffe0",Markdown:"#aaa","TanStack Query":"#ff4154","Web App":"#a78bfa",default:"rgba(0,210,255,0.6)"},M1=()=>{const[r,s]=N.useState("All"),[c,u]=N.useState([]),[m,b]=N.useState(!0),[g,j]=N.useState(null);N.useEffect(()=>{let h=!1;async function T(){try{b(!0),j(null);const S=await fetch(`https://api.github.com/users/${w0}/repos?per_page=100&sort=updated`,{headers:{Accept:"application/vnd.github.v3+json"}});if(!S.ok)throw new Error(`GitHub API error: ${S.status}`);const U=await S.json();console.log("Fetched repos:",U);const L=U.filter(E=>!E.fork).map(E=>({title:E.name,description:E.description||"No description provided",tech:E.language?[E.language]:[],github:E.html_url,live:E.homepage||(E.has_pages?`https://${w0}.github.io/${E.name}/`:"#"),category:N1(E.language),stars:E.stargazers_count,updatedAt:E.updated_at})).sort((E,B)=>new Date(B.updatedAt)-new Date(E.updatedAt));console.log("Mapped projects:",L),h||u(L)}catch(S){console.error("Error fetching repos:",S),h||j(S.message)}finally{h||b(!1)}}return T(),()=>{h=!0}},[]);const p=r==="All"?c:c.filter(h=>h.category===r);return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@400;500&display=swap');

        :root {
          --cyan: #00d2ff;
          --teal: #00ffe0;
          --bg: #020c14;
          --border: rgba(0,210,255,0.13);
          --muted: rgba(150,220,240,0.45);
          --text: rgba(200,240,255,0.88);
        }

        * { box-sizing: border-box; }

        .pj-root {
          background: var(--bg);
          min-height: 100vh;
          color: var(--text);
          font-family: 'JetBrains Mono', monospace;
          padding-top: 80px;
          position: relative;
          overflow-x: hidden;
        }
        .pj-root::before {
          content: '';
          position: fixed; inset: 0;
          background-image:
            linear-gradient(rgba(0,210,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,210,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none; z-index: 0;
        }

        @keyframes pjFadeUp {
          from { opacity:0; transform: translateY(24px); }
          to   { opacity:1; transform: translateY(0); }
        }
        @keyframes pjBlink {
          0%,100% { opacity:1; } 50% { opacity:0; }
        }
        @keyframes pjScan {
          from { transform: translateX(-100%); }
          to   { transform: translateX(500%); }
        }
        @keyframes pjCardIn {
          from { opacity:0; transform: translateY(18px) scale(0.98); }
          to   { opacity:1; transform: translateY(0) scale(1); }
        }
        @keyframes pjSpin {
          to { transform: rotate(360deg); }
        }

        /* ── Header ── */
        .pj-header {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 72px 48px 0;
          text-align: center;
        }
        @media (max-width: 600px) { .pj-header { padding: 56px 24px 0; } }

        .pj-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 10px; letter-spacing: 0.2em;
          text-transform: uppercase; color: rgba(0,210,255,0.4);
          margin-bottom: 20px;
          animation: pjFadeUp 0.6s ease forwards;
        }
        .pj-eyebrow::before { content: '//'; color: rgba(0,210,255,0.2); }

        .pj-title {
          font-family: 'Orbitron', monospace;
          font-size: clamp(32px, 5vw, 64px);
          font-weight: 900;
          letter-spacing: 0.02em;
          color: #fff;
          text-shadow: 0 0 40px rgba(0,210,255,0.35);
          line-height: 1.05;
          margin-bottom: 16px;
          animation: pjFadeUp 0.6s 0.1s ease forwards; opacity: 0;
        }
        .pj-title .cx { color: var(--cyan); }

        .pj-subtitle {
          font-size: 12px; line-height: 1.9;
          color: var(--muted); max-width: 560px;
          margin: 0 auto 12px;
          animation: pjFadeUp 0.6s 0.2s ease forwards; opacity: 0;
        }

        .pj-count {
          font-size: 10px; letter-spacing: 0.15em;
          color: rgba(0,210,255,0.3);
          animation: pjFadeUp 0.6s 0.25s ease forwards; opacity: 0;
        }
        .pj-count span { color: var(--cyan); }

        /* scan line under header */
        .pj-header-line {
          position: relative; height: 1px;
          margin: 40px auto 0; max-width: 400px;
          background: rgba(0,210,255,0.08); overflow: hidden;
        }
        .pj-header-line::after {
          content: '';
          position: absolute; top:0; left:0;
          width: 35%; height: 100%;
          background: linear-gradient(90deg, transparent, var(--cyan), transparent);
          animation: pjScan 3s ease-in-out infinite;
        }

        /* ── Filters ── */
        .pj-filters {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 40px 48px 0;
          display: flex; align-items: center;
          gap: 8px; flex-wrap: wrap;
          animation: pjFadeUp 0.6s 0.3s ease forwards; opacity: 0;
        }
        @media (max-width: 600px) { .pj-filters { padding: 32px 24px 0; } }

        .pj-filter-label {
          font-size: 9px; letter-spacing: 0.18em;
          text-transform: uppercase; color: rgba(0,210,255,0.25);
          margin-right: 8px;
        }
        .pj-filter-btn {
          padding: 7px 16px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: 3px;
          border: 1px solid rgba(0,210,255,0.15);
          background: transparent;
          color: var(--muted);
          cursor: pointer;
          transition: all 0.22s;
        }
        .pj-filter-btn:hover {
          border-color: rgba(0,210,255,0.35);
          color: var(--cyan);
          background: rgba(0,210,255,0.06);
        }
        .pj-filter-btn.active {
          border-color: var(--cyan);
          color: var(--cyan);
          background: rgba(0,210,255,0.1);
          box-shadow: 0 0 12px rgba(0,210,255,0.2);
        }

        /* ── Grid ── */
        .pj-grid-wrap {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 40px 48px 100px;
        }
        @media (max-width: 600px) { .pj-grid-wrap { padding: 32px 24px 80px; } }

        .pj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        @media (max-width: 1024px) { .pj-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 640px)  { .pj-grid { grid-template-columns: 1fr; } }

        /* ── Card ── */
        .pj-card {
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 28px 24px 22px;
          background: rgba(0,18,32,0.6);
          backdrop-filter: blur(8px);
          position: relative; overflow: hidden;
          transition: all 0.3s ease;
          display: flex; flex-direction: column;
          animation: pjCardIn 0.5s ease forwards;
          opacity: 0;
        }
        .pj-card:hover {
          border-color: rgba(0,210,255,0.38);
          transform: translateY(-5px);
          background: rgba(0,24,42,0.85);
          box-shadow: 0 16px 48px rgba(0,0,0,0.5), 0 0 24px rgba(0,210,255,0.07);
        }
        /* top glow edge */
        .pj-card::before {
          content: '';
          position: absolute; top:0; left:0; right:0; height:1px;
          background: linear-gradient(90deg, transparent, rgba(0,210,255,0.4), transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .pj-card:hover::before { opacity: 1; }

        /* index watermark */
        .pj-card-index {
          position: absolute; top: 12px; right: 16px;
          font-family: 'Orbitron', monospace;
          font-size: 11px; font-weight: 700;
          color: rgba(0,210,255,0.08);
          letter-spacing: 0.1em;
          transition: color 0.3s;
        }
        .pj-card:hover .pj-card-index { color: rgba(0,210,255,0.18); }

        .pj-card-cat {
          font-size: 9px; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--cyan);
          margin-bottom: 10px; font-weight: 500;
        }

        .pj-card-title {
          font-family: 'Orbitron', monospace;
          font-size: 13px; font-weight: 700;
          color: #fff; margin-bottom: 10px;
          line-height: 1.4; letter-spacing: 0.01em;
        }

        .pj-card-desc {
          font-size: 11px; line-height: 1.85;
          color: var(--muted); font-weight: 400;
          flex: 1; margin-bottom: 18px;
        }

        /* tech pills */
        .pj-tech-row {
          display: flex; flex-wrap: wrap; gap: 6px;
          margin-bottom: 18px;
        }
        .pj-tech-pill {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 3px 9px;
          font-size: 9px; letter-spacing: 0.08em;
          border-radius: 3px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          color: rgba(200,240,255,0.55);
          transition: all 0.2s;
        }
        .pj-card:hover .pj-tech-pill {
          border-color: rgba(0,210,255,0.15);
        }
        .pj-tech-dot {
          width: 5px; height: 5px; border-radius: 50%;
          flex-shrink: 0;
        }

        /* stars badge */
        .pj-stars {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 9px; color: rgba(255,215,100,0.7);
        }

        /* divider */
        .pj-card-divider {
          height: 1px;
          background: rgba(0,210,255,0.07);
          margin-bottom: 16px;
        }

        /* action row */
        .pj-card-actions {
          display: flex; align-items: center; gap: 16px;
        }
        .pj-action-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 10px; letter-spacing: 0.1em;
          text-transform: uppercase; text-decoration: none;
          color: var(--muted);
          padding: 6px 12px;
          border: 1px solid rgba(0,210,255,0.1);
          border-radius: 3px;
          transition: all 0.22s;
        }
        .pj-action-link:hover {
          color: var(--cyan);
          border-color: rgba(0,210,255,0.35);
          background: rgba(0,210,255,0.06);
          box-shadow: 0 0 10px rgba(0,210,255,0.15);
        }
        .pj-action-link.disabled {
          opacity: 0.25; pointer-events: none;
        }

        /* empty / loading / error states */
        .pj-empty {
          grid-column: 1/-1;
          text-align: center; padding: 80px 0;
          color: rgba(0,210,255,0.2);
          font-size: 12px; letter-spacing: 0.15em;
        }
        .pj-loader {
          grid-column: 1/-1;
          display: flex; flex-direction: column; align-items: center;
          gap: 16px;
          padding: 80px 0;
          color: rgba(0,210,255,0.4);
          font-size: 11px; letter-spacing: 0.15em;
        }
        .pj-spinner {
          width: 28px; height: 28px;
          border: 2px solid rgba(0,210,255,0.15);
          border-top-color: var(--cyan);
          border-radius: 50%;
          animation: pjSpin 0.8s linear infinite;
        }
        .pj-error {
          grid-column: 1/-1;
          text-align: center; padding: 60px 24px;
          color: rgba(255,100,100,0.7);
          font-size: 11px; letter-spacing: 0.1em; line-height: 1.8;
        }
      `}),f.jsxs("div",{className:"pj-root",children:[f.jsxs("section",{className:"pj-header",children:[f.jsx("div",{className:"pj-eyebrow",children:"project_index.load()"}),f.jsxs("h1",{className:"pj-title",children:["MY ",f.jsx("span",{className:"cx",children:"PROJECTS"})]}),f.jsx("p",{className:"pj-subtitle",children:"A collection of projects showcasing my development skills, AI/ML research, and problem-solving across diverse domains."}),f.jsxs("div",{className:"pj-count",children:["TOTAL_REPOS: ",f.jsx("span",{children:c.length}),"  ·  FILTERED: ",f.jsx("span",{children:p.length})]}),f.jsx("div",{className:"pj-header-line"})]}),f.jsxs("div",{className:"pj-filters",children:[f.jsx("span",{className:"pj-filter-label",children:"filter:"}),A1.map(h=>f.jsx("button",{className:`pj-filter-btn${r===h?" active":""}`,onClick:()=>s(h),children:h},h))]}),f.jsx("section",{className:"pj-grid-wrap",children:f.jsxs("div",{className:"pj-grid",children:[m&&f.jsxs("div",{className:"pj-loader",children:[f.jsx("div",{className:"pj-spinner"}),"FETCHING_REPOS_FROM_GITHUB..."]}),!m&&g&&f.jsxs("div",{className:"pj-error",children:["// FAILED_TO_LOAD_REPOS: ",g,f.jsx("br",{}),"(GitHub API may be rate-limited — try again shortly)"]}),!m&&!g&&p.length===0&&f.jsx("div",{className:"pj-empty",children:"// NO_RESULTS_FOUND"}),!m&&!g&&p.map((h,T)=>f.jsxs("div",{className:"pj-card",style:{animationDelay:`${T*.045}s`},children:[f.jsx("span",{className:"pj-card-index",children:String(T+1).padStart(2,"0")}),f.jsxs("div",{className:"pj-card-cat",children:["[ ",h.category," ]"]}),f.jsx("h3",{className:"pj-card-title",children:h.title}),f.jsx("p",{className:"pj-card-desc",children:h.description}),f.jsxs("div",{className:"pj-tech-row",children:[h.tech.map((S,U)=>f.jsxs("span",{className:"pj-tech-pill",children:[f.jsx("span",{className:"pj-tech-dot",style:{background:j0[S]||j0.default}}),S]},U)),h.stars>0&&f.jsxs("span",{className:"pj-stars",children:["★ ",h.stars]})]}),f.jsx("div",{className:"pj-card-divider"}),f.jsxs("div",{className:"pj-card-actions",children:[f.jsxs("a",{href:h.github,target:"_blank",rel:"noreferrer",className:"pj-action-link",children:[f.jsx(ec,{style:{fontSize:11}}),"Code"]}),f.jsxs("a",{href:h.live,target:"_blank",rel:"noreferrer",className:`pj-action-link${h.live==="#"?" disabled":""}`,children:[f.jsx(g1,{style:{fontSize:10}}),"Live"]})]})]},h.title))]})})]})]})},Hn=[{category:"Programming Languages",code:"01",icon:"⌨",items:[{name:"Python",level:90,color:"#ffd43b"},{name:"C",level:72,color:"#a8b9cc"},{name:"C++",level:78,color:"#f08080"},{name:"Java",level:65,color:"#f89820"}]},{category:"Frontend",code:"02",icon:"◈",items:[{name:"HTML",level:92,color:"#e44d26"},{name:"CSS",level:88,color:"#264de4"},{name:"JavaScript",level:85,color:"#f7df1e"},{name:"React.js",level:87,color:"#61dafb"}]},{category:"Data Analysis & ML",code:"03",icon:"🧠",items:[{name:"Pandas",level:83,color:"#150458"},{name:"NumPy",level:80,color:"#4dabcf"},{name:"Matplotlib",level:75,color:"#11557c"},{name:"Seaborn",level:72,color:"#4c72b0"},{name:"Scikit-learn",level:78,color:"#f89939"}]},{category:"Databases",code:"04",icon:"◉",items:[{name:"MySQL",level:80,color:"#4479a1"},{name:"MongoDB",level:76,color:"#47a248"}]},{category:"Core Concepts",code:"05",icon:"⬡",items:[{name:"OOP",level:88,color:"#00d2ff"},{name:"DSA",level:80,color:"#00ffe0"},{name:"DBMS",level:75,color:"#a78bfa"}]},{category:"Tools & Env",code:"06",icon:"⚙",items:[{name:"VS Code",level:95,color:"#007acc"},{name:"Git",level:85,color:"#f05032"},{name:"GitHub",level:88,color:"#e0e0e0"},{name:"Jupyter Notebook",level:82,color:"#f37726"}]}],T1=({name:r,level:s,color:c})=>f.jsx(hr,{glareEnable:!0,glareMaxOpacity:.06,scale:1.03,tiltMaxAngleX:10,tiltMaxAngleY:10,transitionSpeed:1200,children:f.jsxs("div",{className:"sk-card",children:[f.jsxs("div",{className:"sk-card-top",children:[f.jsx("span",{className:"sk-card-dot",style:{background:c,boxShadow:`0 0 8px ${c}60`}}),f.jsx("span",{className:"sk-card-name",children:r}),f.jsxs("span",{className:"sk-card-pct",children:[s,"%"]})]}),f.jsx("div",{className:"sk-bar-bg",children:f.jsx("div",{className:"sk-bar-fill",style:{width:`${s}%`,background:`linear-gradient(90deg, ${c}99, ${c})`,boxShadow:`0 0 8px ${c}55`}})})]})}),O1=()=>f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@400;500&display=swap');

      :root {
        --cyan: #00d2ff;
        --teal: #00ffe0;
        --bg: #020c14;
        --border: rgba(0,210,255,0.13);
        --muted: rgba(150,220,240,0.45);
        --text: rgba(200,240,255,0.88);
      }
      * { box-sizing: border-box; }

      .sk-root {
        background: var(--bg);
        min-height: 100vh;
        color: var(--text);
        font-family: 'JetBrains Mono', monospace;
        padding-top: 80px;
        position: relative;
        overflow-x: hidden;
      }
      .sk-root::before {
        content: '';
        position: fixed; inset: 0;
        background-image:
          linear-gradient(rgba(0,210,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,210,255,0.025) 1px, transparent 1px);
        background-size: 60px 60px;
        pointer-events: none; z-index: 0;
      }

      @keyframes skFadeUp {
        from { opacity:0; transform:translateY(20px); }
        to   { opacity:1; transform:translateY(0); }
      }
      @keyframes skScan {
        from { transform: translateX(-100%); }
        to   { transform: translateX(500%); }
      }
      @keyframes skBlink {
        0%,100% { opacity:1; } 50% { opacity:0; }
      }
      @keyframes skBarIn {
        from { width: 0 !important; }
      }

      /* ── Header ── */
      .sk-header {
        position: relative; z-index: 1;
        max-width: 1280px; margin: 0 auto;
        padding: 72px 48px 0;
        text-align: center;
      }
      @media (max-width:600px) { .sk-header { padding: 56px 24px 0; } }

      .sk-eyebrow {
        display: inline-flex; align-items: center; gap: 8px;
        font-size: 10px; letter-spacing: 0.2em;
        text-transform: uppercase; color: rgba(0,210,255,0.4);
        margin-bottom: 20px;
        animation: skFadeUp 0.6s ease forwards;
      }
      .sk-eyebrow::before { content: '//'; color: rgba(0,210,255,0.2); }

      .sk-title {
        font-family: 'Orbitron', monospace;
        font-size: clamp(30px, 5vw, 62px);
        font-weight: 900; letter-spacing: 0.02em;
        color: #fff;
        text-shadow: 0 0 40px rgba(0,210,255,0.35);
        margin-bottom: 16px;
        animation: skFadeUp 0.6s 0.1s ease forwards; opacity: 0;
      }
      .sk-title .cx { color: var(--cyan); }

      .sk-subtitle {
        font-size: 12px; line-height: 1.9;
        color: var(--muted); max-width: 520px;
        margin: 0 auto 12px;
        animation: skFadeUp 0.6s 0.2s ease forwards; opacity: 0;
      }

      /* stats row */
      .sk-meta {
        display: inline-flex; align-items: center; gap: 24px;
        font-size: 10px; letter-spacing: 0.12em;
        color: rgba(0,210,255,0.3);
        margin-top: 8px;
        animation: skFadeUp 0.6s 0.25s ease forwards; opacity: 0;
      }
      .sk-meta span { color: var(--cyan); }
      .sk-meta-sep { color: rgba(0,210,255,0.15); }

      /* scan line */
      .sk-scan-line {
        position: relative; height: 1px;
        margin: 40px auto 0; max-width: 400px;
        background: rgba(0,210,255,0.08); overflow: hidden;
      }
      .sk-scan-line::after {
        content: '';
        position: absolute; top:0; left:0;
        width: 35%; height: 100%;
        background: linear-gradient(90deg, transparent, var(--cyan), transparent);
        animation: skScan 3s ease-in-out infinite;
      }

      /* ── Section block ── */
      .sk-section {
        position: relative; z-index: 1;
        max-width: 1280px; margin: 0 auto;
        padding: 60px 48px 0;
        animation: skFadeUp 0.6s ease forwards; opacity: 0;
      }
      @media (max-width:600px) { .sk-section { padding: 48px 24px 0; } }

      .sk-section-head {
        display: flex; align-items: center; gap: 16px;
        margin-bottom: 28px;
      }
      .sk-section-icon {
        font-size: 18px;
        filter: drop-shadow(0 0 6px rgba(0,210,255,0.5));
      }
      .sk-section-title {
        font-family: 'Orbitron', monospace;
        font-size: 14px; font-weight: 700;
        letter-spacing: 0.1em; text-transform: uppercase;
        color: #fff; text-shadow: 0 0 16px rgba(0,210,255,0.3);
      }
      .sk-section-code {
        font-size: 9px; letter-spacing: 0.15em;
        color: rgba(0,210,255,0.25);
        border: 1px solid rgba(0,210,255,0.1);
        padding: 3px 8px; border-radius: 3px;
        margin-left: auto;
      }
      .sk-section-line {
        flex: 1;
        height: 1px;
        background: linear-gradient(90deg, rgba(0,210,255,0.2), transparent);
      }

      .sk-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
      }
      @media (max-width:1024px) { .sk-grid { grid-template-columns: repeat(3,1fr); } }
      @media (max-width:768px)  { .sk-grid { grid-template-columns: repeat(2,1fr); } }
      @media (max-width:480px)  { .sk-grid { grid-template-columns: 1fr; } }

      /* ── Skill card ── */
      .sk-card {
        padding: 18px 18px 16px;
        border: 1px solid var(--border);
        border-radius: 6px;
        background: rgba(0,18,32,0.65);
        backdrop-filter: blur(8px);
        transition: all 0.28s ease;
        cursor: default;
        position: relative; overflow: hidden;
      }
      .sk-card::before {
        content: '';
        position: absolute; top:0; left:0; right:0; height:1px;
        background: linear-gradient(90deg, transparent, rgba(0,210,255,0.35), transparent);
        opacity: 0; transition: opacity 0.28s;
      }
      .sk-card:hover::before { opacity: 1; }
      .sk-card:hover {
        border-color: rgba(0,210,255,0.32);
        background: rgba(0,24,42,0.85);
        transform: translateY(-3px);
        box-shadow: 0 12px 32px rgba(0,0,0,0.45), 0 0 18px rgba(0,210,255,0.06);
      }

      .sk-card-top {
        display: flex; align-items: center; gap: 8px;
        margin-bottom: 12px;
      }
      .sk-card-dot {
        width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
      }
      .sk-card-name {
        font-size: 11px; letter-spacing: 0.08em;
        font-weight: 500; color: rgba(200,240,255,0.85);
        flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }
      .sk-card-pct {
        font-family: 'Orbitron', monospace;
        font-size: 10px; font-weight: 700;
        color: var(--cyan);
        flex-shrink: 0;
      }

      /* progress bar */
      .sk-bar-bg {
        height: 3px; border-radius: 2px;
        background: rgba(0,210,255,0.08);
        overflow: hidden;
      }
      .sk-bar-fill {
        height: 100%; border-radius: 2px;
        animation: skBarIn 1.2s cubic-bezier(0.4,0,0.2,1) forwards;
      }

      /* ── Bottom spacer ── */
      .sk-bottom { height: 100px; }

      /* ── Aggregate stats bar ── */
      .sk-stats-bar {
        position: relative; z-index: 1;
        max-width: 1280px; margin: 72px auto 0;
        padding: 0 48px;
        display: grid; grid-template-columns: repeat(4,1fr);
        border: 1px solid var(--border);
        border-radius: 6px;
        background: rgba(0,18,32,0.5);
        backdrop-filter: blur(8px);
        animation: skFadeUp 0.6s 0.4s ease forwards; opacity: 0;
      }
      @media (max-width:768px) {
        .sk-stats-bar { grid-template-columns: repeat(2,1fr); padding: 0 24px; }
      }
      .sk-stat {
        padding: 28px 20px;
        border-right: 1px solid var(--border);
        transition: background 0.25s;
      }
      .sk-stat:last-child { border-right: none; }
      .sk-stat:hover { background: rgba(0,210,255,0.03); }
      .sk-stat-val {
        font-family: 'Orbitron', monospace;
        font-size: 28px; font-weight: 900;
        color: #fff; line-height: 1;
        text-shadow: 0 0 16px rgba(0,210,255,0.4);
        margin-bottom: 4px;
      }
      .sk-stat-val .ac { color: var(--cyan); }
      .sk-stat-lbl {
        font-size: 9px; letter-spacing: 0.15em;
        text-transform: uppercase; color: var(--muted);
      }
    `}),f.jsxs("div",{className:"sk-root",children:[f.jsxs("section",{className:"sk-header",children:[f.jsx("div",{className:"sk-eyebrow",children:"skill_matrix.render()"}),f.jsxs("h1",{className:"sk-title",children:["MY ",f.jsx("span",{className:"cx",children:"SKILLS"})]}),f.jsx("p",{className:"sk-subtitle",children:"Technologies, frameworks, and tools I use to engineer intelligent systems and scalable applications."}),f.jsxs("div",{className:"sk-meta",children:[f.jsxs("span",{children:["CATEGORIES: ",f.jsx("span",{children:Hn.length})]}),f.jsx("span",{className:"sk-meta-sep",children:"·"}),f.jsxs("span",{children:["TOTAL_SKILLS: ",f.jsx("span",{children:Hn.reduce((r,s)=>r+s.items.length,0)})]}),f.jsx("span",{className:"sk-meta-sep",children:"·"}),f.jsxs("span",{children:["AVG_PROFICIENCY: ",f.jsxs("span",{children:[Math.round(Hn.flatMap(r=>r.items).reduce((r,s)=>r+s.level,0)/Hn.flatMap(r=>r.items).length),"%"]})]})]}),f.jsx("div",{className:"sk-scan-line"})]}),f.jsx("div",{className:"sk-stats-bar",children:[{val:"6+",lbl:"Skill Categories"},{val:"25+",lbl:"Technologies"},{val:"83%",lbl:"Avg Proficiency"},{val:"2+",lbl:"Years Experience"}].map((r,s)=>f.jsxs("div",{className:"sk-stat",children:[f.jsxs("div",{className:"sk-stat-val",children:[r.val.replace(/\D/g,""),f.jsx("span",{className:"ac",children:r.val.replace(/\d/g,"")})]}),f.jsx("div",{className:"sk-stat-lbl",children:r.lbl})]},s))}),Hn.map((r,s)=>f.jsxs("section",{className:"sk-section",style:{animationDelay:`${.1+s*.08}s`},children:[f.jsxs("div",{className:"sk-section-head",children:[f.jsx("span",{className:"sk-section-icon",children:r.icon}),f.jsx("span",{className:"sk-section-title",children:r.category}),f.jsx("div",{className:"sk-section-line"}),f.jsxs("span",{className:"sk-section-code",children:["_",r.code]})]}),f.jsx("div",{className:"sk-grid",children:r.items.map((c,u)=>f.jsx(T1,{...c},c.name))})]},r.category)),f.jsx("div",{className:"sk-bottom"})]})]}),R1=[{year:"2021",title:"BCA — University of Rajasthan",sub:"Bachelor of Computer Applications",desc:"Built a strong foundation in programming, data structures, and software engineering fundamentals.",tag:"EDUCATION",color:"#00d2ff"},{year:"2023",title:"Internships & Certifications",sub:"CodSoft · Bharat Intern",desc:"Completed frontend development internships, building real-world projects and sharpening UI engineering skills.",tag:"EXPERIENCE",color:"#00ffe0"},{year:"2024",title:"Full Stack Projects",sub:"React · Node.js · MongoDB",desc:"Engineered AI-powered systems, REST APIs, dashboards, and responsive web platforms with scalable architecture.",tag:"DEVELOPMENT",color:"#a78bfa"},{year:"2025",title:"MCA — JECRC University",sub:"AI & Machine Learning",desc:"Specializing in Artificial Intelligence, ML pipelines, data science, and scalable software engineering.",tag:"CURRENT",color:"#ffd43b",active:!0},{year:"2027+",title:"AI-Driven Software Engineer",sub:"Future Vision",desc:"Aspiring to architect large-scale intelligent systems that solve real-world problems with measurable impact.",tag:"VISION",color:"#f08080"}],_1=[{key:"DEGREE",val:"MCA (AI & ML)"},{key:"UNIVERSITY",val:"JECRC University"},{key:"FOCUS",val:"AI · ML · Full Stack"},{key:"LOCATION",val:"Rajasthan, India"},{key:"EXPERIENCE",val:"2+ Years"},{key:"STATUS",val:"OPEN_TO_WORK",highlight:!0}],C1=()=>f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@400;500&display=swap');

      * { box-sizing: border-box; }

      .ab-root {
        background: var(--bg, #020c14);
        min-height: 100vh;
        color: var(--text, rgba(200,240,255,0.9));
        font-family: 'JetBrains Mono', monospace;
        padding-top: 80px;
        position: relative;
        overflow-x: hidden;
      }

      @keyframes abFadeUp {
        from { opacity:0; transform:translateY(22px); }
        to   { opacity:1; transform:translateY(0); }
      }
      @keyframes abBlink  { 0%,100%{opacity:1} 50%{opacity:0} }
      @keyframes abScan   { from{transform:translateX(-100%)} to{transform:translateX(500%)} }
      @keyframes abFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
      @keyframes abPulse  {
        0%,100%{box-shadow:0 0 0 0 rgba(0,210,255,0)}
        50%    {box-shadow:0 0 0 6px rgba(0,210,255,0.08)}
      }

      .ab-fu { animation:abFadeUp .7s ease forwards; opacity:0; }
      .ab-d1 { animation-delay:.10s; }
      .ab-d2 { animation-delay:.22s; }
      .ab-d3 { animation-delay:.34s; }
      .ab-d4 { animation-delay:.46s; }
      .ab-d5 { animation-delay:.58s; }

      /* ── HEADER ── */
      .ab-header {
        position:relative; z-index:1;
        max-width:1280px; margin:0 auto;
        padding: clamp(40px,6vw,72px) clamp(20px,5vw,48px) 0;
        text-align:center;
      }

      .ab-eyebrow {
        display:inline-flex; align-items:center; gap:8px;
        font-size: clamp(9px,2vw,10px); letter-spacing:.2em;
        text-transform:uppercase;
        color: var(--text-faint, rgba(0,210,255,0.4));
        margin-bottom:20px;
      }
      .ab-eyebrow::before { content:'//'; color:var(--text-faint, rgba(0,210,255,0.2)); }

      .ab-title {
        font-family:'Orbitron',monospace;
        font-size: clamp(28px,7vw,62px);
        font-weight:900; letter-spacing:.02em;
        color: var(--heading, #fff);
        text-shadow:0 0 40px rgba(0,210,255,0.35);
        margin-bottom:16px;
        line-height:1.1;
      }
      .ab-title .cx { color:var(--cyan, #00d2ff); }

      .ab-subtitle {
        font-size: clamp(11px,2.5vw,12px); line-height:1.9;
        color: var(--text-dim, rgba(150,220,240,0.45));
        max-width:540px; margin:0 auto;
      }

      .ab-scan-line {
        position:relative; height:1px;
        margin:40px auto 0; max-width:400px;
        background:rgba(0,210,255,0.08); overflow:hidden;
      }
      .ab-scan-line::after {
        content:''; position:absolute; top:0; left:0;
        width:35%; height:100%;
        background:linear-gradient(90deg,transparent,var(--cyan,#00d2ff),transparent);
        animation:abScan 3s ease-in-out infinite;
      }

      /* ── BIO ── */
      .ab-bio {
        position:relative; z-index:1;
        max-width:1280px; margin:0 auto;
        padding: clamp(40px,6vw,72px) clamp(20px,5vw,48px);
        display:grid;
        grid-template-columns: auto 1fr;
        gap: clamp(32px,5vw,72px);
        align-items:center;
      }
      @media(max-width:860px) {
        .ab-bio {
          grid-template-columns:1fr;
          gap:40px;
        }
        .ab-img-col { display:flex; justify-content:center; }
      }

      /* Profile image */
      .ab-profile-wrap {
        position:relative;
        animation:abFloat 5s ease-in-out infinite;
        display:inline-block;
      }

      .ab-corner {
        position:absolute; z-index:3;
        width: clamp(14px,3vw,18px);
        height: clamp(14px,3vw,18px);
      }
      .ab-corner-tl { top:-5px; left:-5px; border-top:2px solid var(--cyan,#00d2ff); border-left:2px solid var(--cyan,#00d2ff); }
      .ab-corner-tr { top:-5px; right:-5px; border-top:2px solid var(--cyan,#00d2ff); border-right:2px solid var(--cyan,#00d2ff); }
      .ab-corner-bl { bottom:-5px; left:-5px; border-bottom:2px solid var(--cyan,#00d2ff); border-left:2px solid var(--cyan,#00d2ff); }
      .ab-corner-br { bottom:-5px; right:-5px; border-bottom:2px solid var(--cyan,#00d2ff); border-right:2px solid var(--cyan,#00d2ff); }

      .ab-img-box {
        width: clamp(220px, 40vw, 280px);
        height: clamp(270px, 48vw, 340px);
        border-radius:8px; overflow:hidden;
        border:1px solid var(--border, rgba(0,210,255,0.13));
        position:relative;
        background: var(--bg2, #041320);
      }
      .ab-img-box img {
        width:100%; height:100%;
        object-fit:cover; object-position:top;
        display:block;
        filter:saturate(0.7) brightness(0.85);
        mix-blend-mode:luminosity;
      }
      .ab-img-box::after {
        content:''; position:absolute; inset:0;
        background:linear-gradient(to bottom,transparent 50%,rgba(0,30,50,0.85) 100%);
      }
      .ab-img-box::before {
        content:''; position:absolute; inset:0;
        background:repeating-linear-gradient(
          0deg,transparent,transparent 2px,
          rgba(0,210,255,0.03) 2px,rgba(0,210,255,0.03) 4px
        );
        z-index:1; pointer-events:none;
      }
      .ab-img-status {
        position:absolute; bottom:0; left:0; right:0;
        padding:14px; z-index:2;
        display:flex; flex-direction:column; gap:3px;
      }
      .ab-status-row {
        display:flex; align-items:center; gap:6px;
        font-size: clamp(8px,2vw,9px); letter-spacing:.1em;
        color:var(--cyan,#00d2ff);
      }
      .ab-status-dot {
        width:5px; height:5px; border-radius:50%;
        background:var(--teal,#00ffe0);
        animation:abBlink 1.5s ease-in-out infinite;
        box-shadow:0 0 5px var(--teal,#00ffe0);
        flex-shrink:0;
      }

      /* Text col */
      .ab-name {
        font-family:'Orbitron',monospace;
        font-size: clamp(20px,4vw,36px);
        font-weight:900; letter-spacing:.04em;
        color: var(--heading,#fff);
        text-shadow:0 0 24px rgba(0,210,255,0.3);
        margin-bottom:6px;
        word-break:break-word;
      }
      .ab-name-sub {
        font-size: clamp(9px,2vw,10px); letter-spacing:.18em;
        text-transform:uppercase;
        color:var(--cyan,#00d2ff);
        margin-bottom:28px;
      }

      .ab-para {
        font-size: clamp(11px,2.5vw,12px); line-height:1.95;
        color: var(--text-dim,rgba(150,220,240,0.45));
        font-weight:400;
        border-left:2px solid var(--border,rgba(0,210,255,0.12));
        padding-left:16px;
        margin-bottom:16px;
      }

      /* Spec table */
      .ab-specs {
        display:grid;
        grid-template-columns: repeat(2,1fr);
        gap:6px 24px;
        margin:28px 0 32px;
        padding: clamp(14px,3vw,20px);
        border:1px solid var(--border,rgba(0,210,255,0.13));
        border-radius:6px;
        background:var(--card-bg,rgba(0,210,255,0.03));
      }
      @media(max-width:480px) {
        .ab-specs { grid-template-columns:1fr; }
      }

      .ab-spec-row {
        display:flex; align-items:flex-start; gap:6px;
        font-size: clamp(9px,2vw,10px); letter-spacing:.08em;
        flex-wrap:wrap;
      }
      .ab-spec-key {
        color:var(--text-faint,rgba(0,210,255,0.3));
        min-width:80px; flex-shrink:0;
      }
      .ab-spec-sep { color:var(--text-faint,rgba(0,210,255,0.15)); }
      .ab-spec-val { color:var(--text-dim,rgba(200,240,255,0.6)); word-break:break-word; }
      .ab-spec-val.hl { color:var(--teal,#00ffe0); }

      .ab-btns { display:flex; gap:10px; flex-wrap:wrap; }

      .ab-btn-primary {
        padding: clamp(10px,2vw,12px) clamp(18px,3vw,28px);
        font-family:'Orbitron',monospace;
        font-size: clamp(10px,2.2vw,11px); font-weight:700;
        letter-spacing:.1em; text-transform:uppercase;
        text-decoration:none; border-radius:4px;
        color:var(--btn-primary-text,#00d2ff);
        border:1px solid var(--btn-primary-border,#00d2ff);
        background:var(--btn-primary-bg,rgba(0,210,255,0.07));
        transition:all .25s;
        animation:abPulse 3s ease-in-out infinite;
        display:inline-block;
      }
      .ab-btn-primary:hover {
        background:rgba(0,210,255,0.16);
        box-shadow:0 0 24px rgba(0,210,255,0.35);
        transform:translateY(-2px);
      }
      .ab-btn-secondary {
        padding: clamp(10px,2vw,12px) clamp(18px,3vw,28px);
        font-family:'Orbitron',monospace;
        font-size: clamp(10px,2.2vw,11px); font-weight:700;
        letter-spacing:.1em; text-transform:uppercase;
        text-decoration:none; border-radius:4px;
        color:var(--btn-secondary-text,rgba(150,220,240,0.55));
        border:1px solid var(--btn-secondary-border,rgba(0,210,255,0.15));
        background:var(--btn-secondary-bg,transparent);
        transition:all .25s;
        display:inline-block;
      }
      .ab-btn-secondary:hover {
        border-color:rgba(0,210,255,0.4);
        color:var(--text,rgba(200,240,255,0.9));
        transform:translateY(-2px);
      }

      /* ── JOURNEY / TIMELINE ── */
      .ab-journey {
        position:relative; z-index:1;
        border-top:1px solid var(--border,rgba(0,210,255,0.08));
        padding: clamp(48px,7vw,80px) 0 clamp(60px,8vw,100px);
      }
      .ab-journey-inner {
        max-width:1280px; margin:0 auto;
        padding:0 clamp(20px,5vw,48px);
      }

      .ab-sec-head {
        display:flex; align-items:center; gap:14px;
        margin-bottom: clamp(32px,5vw,56px);
        flex-wrap:wrap;
      }
      .ab-sec-title {
        font-family:'Orbitron',monospace;
        font-size: clamp(20px,4vw,32px);
        font-weight:900;
        color:var(--heading,#fff);
        text-shadow:0 0 20px rgba(0,210,255,0.3);
        letter-spacing:.03em;
      }
      .ab-sec-title .cx { color:var(--cyan,#00d2ff); }
      .ab-sec-line {
        flex:1; min-width:30px; height:1px;
        background:linear-gradient(90deg,rgba(0,210,255,0.2),transparent);
      }
      .ab-sec-code {
        font-size: clamp(8px,2vw,9px); letter-spacing:.15em;
        color:var(--text-faint,rgba(0,210,255,0.2));
        border:1px solid var(--border,rgba(0,210,255,0.1));
        padding:3px 8px; border-radius:3px;
        white-space:nowrap;
      }

      /* Timeline wrapper — responsive padding */
      .ab-timeline {
        position:relative;
        padding-left: clamp(36px,8vw,64px);
      }
      .ab-timeline::before {
        content:'';
        position:absolute;
        left: clamp(11px,3.5vw,15px);
        top:8px; bottom:8px; width:1px;
        background:linear-gradient(to bottom,
          transparent,
          var(--timeline-line,rgba(0,210,255,0.25)) 10%,
          var(--timeline-line,rgba(0,210,255,0.25)) 90%,
          transparent
        );
      }

      .ab-tl-item {
        position:relative;
        padding:0 0 clamp(28px,5vw,48px) clamp(16px,4vw,24px);
        animation:abFadeUp .6s ease forwards; opacity:0;
      }
      .ab-tl-item:last-child { padding-bottom:0; }

      .ab-tl-dot {
        position:absolute;
        left: clamp(-28px,-6vw,-24px);
        top:4px;
        width: clamp(10px,2.5vw,12px);
        height: clamp(10px,2.5vw,12px);
        border-radius:50%;
        border:2px solid var(--bg,#020c14);
        z-index:2;
        transition:box-shadow .3s;
        flex-shrink:0;
      }
      .ab-tl-item:hover .ab-tl-dot {
        box-shadow:0 0 0 4px rgba(0,210,255,0.12);
      }
      .ab-tl-dot.active-dot { animation:abBlink 2s ease-in-out infinite; }

      /* Year marker — hide on very small screens */
      .ab-tl-year-marker {
        position:absolute;
        left: clamp(-68px,-14vw,-52px);
        top:2px;
        font-family:'Orbitron',monospace;
        font-size: clamp(7px,1.8vw,9px); font-weight:700;
        letter-spacing:.1em;
        color:var(--text-faint,rgba(0,210,255,0.25));
        text-align:right;
        width: clamp(36px,8vw,44px);
        white-space:nowrap;
      }
      @media(max-width:480px) { .ab-tl-year-marker { display:none; } }

      .ab-tl-card {
        padding: clamp(16px,3vw,24px) clamp(16px,3vw,28px);
        border:1px solid var(--border,rgba(0,210,255,0.13));
        border-radius:6px;
        background:var(--card-bg,rgba(0,18,32,0.6));
        backdrop-filter:blur(8px);
        position:relative; overflow:hidden;
        transition:all .28s ease;
      }
      .ab-tl-card::before {
        content:''; position:absolute; top:0; left:0; right:0; height:1px;
        background:linear-gradient(90deg,transparent,rgba(0,210,255,0.4),transparent);
        opacity:0; transition:opacity .28s;
      }
      .ab-tl-card:hover::before { opacity:1; }
      .ab-tl-card:hover {
        border-color:var(--border-hover,rgba(0,210,255,0.32));
        background:var(--card-hover,rgba(0,24,42,0.85));
        transform:translateX(4px);
        box-shadow:0 8px 32px rgba(0,0,0,0.4);
      }
      .ab-tl-card.active-card {
        border-color:rgba(0,210,255,0.25);
        background:rgba(0,25,42,0.7);
      }

      .ab-tl-top {
        display:flex; align-items:center;
        justify-content:space-between;
        margin-bottom:10px;
        flex-wrap:wrap; gap:8px;
      }
      .ab-tl-year {
        font-family:'Orbitron',monospace;
        font-size: clamp(10px,2.2vw,11px); font-weight:700;
        letter-spacing:.12em;
        color:var(--text-faint,rgba(200,240,255,0.4));
      }
      .ab-tl-tag {
        font-size: clamp(8px,2vw,9px); letter-spacing:.18em;
        text-transform:uppercase;
        padding:3px 10px; border-radius:100px;
        font-weight:500; white-space:nowrap;
      }
      .ab-tl-title {
        font-family:'Orbitron',monospace;
        font-size: clamp(12px,2.8vw,14px); font-weight:700;
        color:var(--heading,#fff);
        margin-bottom:4px; letter-spacing:.01em;
        line-height:1.35;
        word-break:break-word;
      }
      .ab-tl-sub {
        font-size: clamp(9px,2vw,10px); letter-spacing:.1em;
        color:var(--text-dim,rgba(150,220,240,0.45));
        margin-bottom:10px;
      }
      .ab-tl-desc {
        font-size: clamp(10px,2.2vw,11px); line-height:1.85;
        color:var(--text-dim,rgba(150,220,240,0.45)); font-weight:400;
      }
    `}),f.jsxs("div",{className:"ab-root",children:[f.jsxs("section",{className:"ab-header",children:[f.jsx("div",{className:"ab-eyebrow ab-fu ab-d1",children:"profile.load() → identity.render()"}),f.jsxs("h1",{className:"ab-title ab-fu ab-d2",children:["ABOUT ",f.jsx("span",{className:"cx",children:"ME"})]}),f.jsx("p",{className:"ab-subtitle ab-fu ab-d3",children:"Passionate AI & Machine Learning developer engineering intelligent, data-driven systems with scalable and efficient software architecture."}),f.jsx("div",{className:"ab-scan-line"})]}),f.jsxs("section",{className:"ab-bio",children:[f.jsx("div",{className:"ab-img-col ab-fu ab-d2",children:f.jsx(hr,{glareEnable:!0,glareMaxOpacity:.07,scale:1.03,tiltMaxAngleX:8,tiltMaxAngleY:8,transitionSpeed:1400,children:f.jsxs("div",{className:"ab-profile-wrap",children:[f.jsx("div",{className:"ab-corner ab-corner-tl"}),f.jsx("div",{className:"ab-corner ab-corner-tr"}),f.jsx("div",{className:"ab-corner ab-corner-bl"}),f.jsx("div",{className:"ab-corner ab-corner-br"}),f.jsxs("div",{className:"ab-img-box",children:[f.jsx("img",{src:K0,alt:"Vaibhav Mishra"}),f.jsxs("div",{className:"ab-img-status",children:[f.jsxs("div",{className:"ab-status-row",children:[f.jsx("span",{className:"ab-status-dot"}),"IDENTITY: VERIFIED"]}),f.jsx("div",{className:"ab-status-row",style:{color:"rgba(0,255,220,0.6)"},children:"MODE: BUILDER"})]})]})]})})}),f.jsxs("div",{children:[f.jsx("h2",{className:"text-3xl font-bold mb-6",children:"I'm Vaibhav Mishra"}),f.jsx("p",{className:"text-gray-400 leading-relaxed mb-6",children:"I am a dedicated Full Stack Developer with a strong passion for building responsive, scalable, and high-performance web applications. I enjoy solving real-world problems using modern technologies like React, Node.js, and MongoDB."}),f.jsx("p",{className:"ab-para",children:"My goal is to create meaningful digital experiences that are fast, accessible, and visually precise. I continuously learn and adapt to emerging technologies to stay at the cutting edge of the industry."}),f.jsx("div",{className:"ab-specs ab-fu ab-d4",children:_1.map(r=>f.jsxs("div",{className:"ab-spec-row",children:[f.jsx("span",{className:"ab-spec-key",children:r.key}),f.jsx("span",{className:"ab-spec-sep",children:":"}),f.jsx("span",{className:`ab-spec-val${r.highlight?" hl":""}`,children:r.val})]},r.key))}),f.jsxs("div",{className:"ab-btns ab-fu ab-d5",children:[f.jsx(Ht,{to:"/projects",className:"ab-btn-primary",children:"View Projects"}),f.jsx(Ht,{to:"/contact",className:"ab-btn-secondary",children:"Contact Me"})]})]})]}),f.jsx("section",{className:"ab-journey",children:f.jsxs("div",{className:"ab-journey-inner",children:[f.jsxs("div",{className:"ab-sec-head",children:[f.jsxs("h2",{className:"ab-sec-title",children:["MY ",f.jsx("span",{className:"cx",children:"JOURNEY"})]}),f.jsx("div",{className:"ab-sec-line"}),f.jsx("span",{className:"ab-sec-code",children:"// timeline"})]}),f.jsx("div",{className:"ab-timeline",children:R1.map((r,s)=>f.jsxs("div",{className:"ab-tl-item",style:{animationDelay:`${.1+s*.12}s`},children:[f.jsx("span",{className:"ab-tl-year-marker",children:r.year}),f.jsx("div",{className:`ab-tl-dot${r.active?" active-dot":""}`,style:{background:r.color,boxShadow:`0 0 10px ${r.color}88`}}),f.jsxs("div",{className:`ab-tl-card${r.active?" active-card":""}`,children:[f.jsxs("div",{className:"ab-tl-top",children:[f.jsx("span",{className:"ab-tl-year",children:r.year}),f.jsx("span",{className:"ab-tl-tag",style:{color:r.color,border:`1px solid ${r.color}44`,background:`${r.color}0f`},children:r.tag})]}),f.jsx("div",{className:"ab-tl-title",children:r.title}),f.jsx("div",{className:"ab-tl-sub",children:r.sub}),f.jsx("div",{className:"ab-tl-desc",children:r.desc})]})]},s))})]})})]})]}),D1=[{icon:"◎",label:"Email",value:"vaibhavmishram3@gmail.com",sub:"Response within 24h",href:"mailto:vaibhavmishram3@gmail.com",color:"#00d2ff",code:"01"},{icon:"◈",label:"Location",value:"Rajasthan, India",sub:"IST (UTC+5:30)",href:null,color:"#00ffe0",code:"02"},{icon:"⬡",label:"Availability",value:"Open to Work",sub:"Internships · Freelance · Full-time",href:null,color:"#ffd43b",code:"03",highlight:!0}],U1=[{icon:f.jsx(ec,{}),href:"https://github.com/vaibhavmishram3",label:"GitHub"},{icon:f.jsx(J0,{}),href:"https://www.linkedin.com/in/vaibhavmishram3/",label:"LinkedIn"},{icon:f.jsx(Z0,{}),href:`https://wa.me/${"+918302979123".replace(/\D/g,"")}`,label:"WhatsApp"}],k1=()=>{const[r,s]=N.useState({name:"",email:"",message:""}),[c,u]=N.useState("idle"),[m,b]=N.useState(null),g=p=>s({...r,[p.target.name]:p.target.value}),j=async p=>{p.preventDefault(),u("sending");try{(await fetch("https://formspree.io/f/mnqekeqg",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(r)})).ok?(u("sent"),s({name:"",email:"",message:""})):u("error")}catch{u("error")}};return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@400;500&display=swap');

        :root {
          --cyan: #00d2ff;
          --teal: #00ffe0;
          --bg: #020c14;
          --border: rgba(0,210,255,0.13);
          --muted: rgba(150,220,240,0.45);
          --text: rgba(200,240,255,0.88);
        }
        * { box-sizing: border-box; }

        .ct-root {
          background: var(--bg);
          min-height: 100vh;
          color: var(--text);
          font-family: 'JetBrains Mono', monospace;
          padding-top: 80px;
          position: relative;
          overflow-x: hidden;
        }
        .ct-root::before {
          content: '';
          position: fixed; inset: 0;
          background-image:
            linear-gradient(rgba(0,210,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,210,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none; z-index: 0;
        }

        @keyframes ctFadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes ctBlink {
          0%,100% { opacity:1; } 50% { opacity:0; }
        }
        @keyframes ctScan {
          from { transform: translateX(-100%); }
          to   { transform: translateX(500%); }
        }
        @keyframes ctGlow {
          0%,100% { box-shadow: 0 0 12px rgba(0,210,255,0.2); }
          50%      { box-shadow: 0 0 28px rgba(0,210,255,0.5), 0 0 60px rgba(0,210,255,0.1); }
        }
        @keyframes ctSpin {
          to { transform: rotate(360deg); }
        }

        .ct-fu { animation: ctFadeUp 0.7s ease forwards; opacity: 0; }
        .ct-d1 { animation-delay: 0.1s; }
        .ct-d2 { animation-delay: 0.22s; }
        .ct-d3 { animation-delay: 0.34s; }
        .ct-d4 { animation-delay: 0.46s; }
        .ct-d5 { animation-delay: 0.58s; }

        /* ── Header ── */
        .ct-header {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 72px 48px 0;
          text-align: center;
        }
        @media (max-width:600px) { .ct-header { padding: 56px 24px 0; } }

        .ct-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 10px; letter-spacing: 0.2em;
          text-transform: uppercase; color: rgba(0,210,255,0.4);
          margin-bottom: 20px;
        }
        .ct-eyebrow::before { content: '//'; color: rgba(0,210,255,0.2); }

        .ct-title {
          font-family: 'Orbitron', monospace;
          font-size: clamp(28px, 5vw, 62px);
          font-weight: 900; letter-spacing: 0.02em;
          color: #fff;
          text-shadow: 0 0 40px rgba(0,210,255,0.35);
          margin-bottom: 16px;
        }
        .ct-title .cx { color: var(--cyan); }

        .ct-subtitle {
          font-size: 12px; line-height: 1.9;
          color: var(--muted); max-width: 480px;
          margin: 0 auto;
        }

        .ct-scan-line {
          position: relative; height: 1px;
          margin: 40px auto 0; max-width: 400px;
          background: rgba(0,210,255,0.08); overflow: hidden;
        }
        .ct-scan-line::after {
          content: '';
          position: absolute; top:0; left:0;
          width: 35%; height: 100%;
          background: linear-gradient(90deg, transparent, var(--cyan), transparent);
          animation: ctScan 3s ease-in-out infinite;
        }

        /* ── Main grid ── */
        .ct-main {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 64px 48px 100px;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 40px;
          align-items: start;
        }
        @media (max-width:900px) {
          .ct-main { grid-template-columns: 1fr; padding: 48px 24px 80px; }
        }

        /* ── Left col ── */
        .ct-left { display: flex; flex-direction: column; gap: 12px; }

        /* Info cards */
        .ct-info-card {
          padding: 22px 24px;
          border: 1px solid var(--border);
          border-radius: 6px;
          background: rgba(0,18,32,0.6);
          backdrop-filter: blur(8px);
          position: relative; overflow: hidden;
          transition: all 0.28s ease;
          text-decoration: none;
          display: block;
        }
        .ct-info-card::before {
          content: '';
          position: absolute; top:0; left:0; right:0; height:1px;
          background: linear-gradient(90deg, transparent, rgba(0,210,255,0.4), transparent);
          opacity: 0; transition: opacity 0.28s;
        }
        .ct-info-card:hover::before { opacity: 1; }
        .ct-info-card:hover {
          border-color: rgba(0,210,255,0.3);
          background: rgba(0,24,42,0.85);
          transform: translateX(4px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }

        .ct-info-top {
          display: flex; align-items: center;
          justify-content: space-between; margin-bottom: 8px;
        }
        .ct-info-icon-label {
          display: flex; align-items: center; gap: 8px;
        }
        .ct-info-icon {
          font-size: 16px;
          filter: drop-shadow(0 0 5px rgba(0,210,255,0.5));
        }
        .ct-info-label {
          font-size: 9px; letter-spacing: 0.18em;
          text-transform: uppercase; font-weight: 500;
        }
        .ct-info-code {
          font-size: 9px; color: rgba(0,210,255,0.2);
          letter-spacing: 0.1em;
        }
        .ct-info-value {
          font-family: 'Orbitron', monospace;
          font-size: 13px; font-weight: 700;
          color: #fff; margin-bottom: 3px;
          letter-spacing: 0.02em;
        }
        .ct-info-sub {
          font-size: 10px; letter-spacing: 0.06em;
          color: var(--muted);
        }
        .ct-info-sub.hl {
          color: var(--teal);
          animation: ctBlink 2.5s ease-in-out infinite;
        }

        /* Social strip */
        .ct-social-strip {
          display: flex; gap: 8px; margin-top: 4px;
        }
        .ct-social-btn {
          flex: 1;
          display: flex; align-items: center; justify-content: center; gap: 6px;
          padding: 10px;
          border: 1px solid rgba(0,210,255,0.12);
          border-radius: 4px;
          background: rgba(0,210,255,0.03);
          color: var(--muted);
          text-decoration: none;
          font-size: 11px; letter-spacing: 0.06em;
          transition: all 0.22s;
        }
        .ct-social-btn:hover {
          border-color: var(--cyan);
          color: var(--cyan);
          background: rgba(0,210,255,0.08);
          box-shadow: 0 0 12px rgba(0,210,255,0.15);
          transform: translateY(-2px);
        }
        .ct-social-btn svg { font-size: 14px; }

        /* ── Form col ── */
        .ct-form-wrap {
          padding: 36px 32px;
          border: 1px solid var(--border);
          border-radius: 6px;
          background: rgba(0,18,32,0.65);
          backdrop-filter: blur(10px);
          position: relative; overflow: hidden;
        }
        /* top scan */
        .ct-form-wrap::before {
          content: '';
          position: absolute; top:0; left:0; right:0; height:1px;
          background: linear-gradient(90deg, transparent, rgba(0,210,255,0.5), transparent);
          animation: ctScan 5s ease-in-out infinite;
        }

        .ct-form-head {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 28px;
        }
        .ct-form-title {
          font-family: 'Orbitron', monospace;
          font-size: 13px; font-weight: 700;
          letter-spacing: 0.1em; color: #fff;
          text-shadow: 0 0 12px rgba(0,210,255,0.3);
        }
        .ct-form-status-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--teal);
          box-shadow: 0 0 6px var(--teal);
          animation: ctBlink 1.8s ease-in-out infinite;
          margin-left: auto;
        }

        /* field */
        .ct-field { margin-bottom: 20px; }
        .ct-label {
          display: flex; align-items: center; gap: 6px;
          font-size: 9px; letter-spacing: 0.18em;
          text-transform: uppercase; color: rgba(0,210,255,0.35);
          margin-bottom: 8px;
        }
        .ct-label::before { content: '_'; color: rgba(0,210,255,0.2); }

        .ct-input,
        .ct-textarea {
          width: 100%;
          background: rgba(0,10,20,0.8);
          border: 1px solid rgba(0,210,255,0.12);
          border-radius: 4px;
          padding: 12px 16px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px; letter-spacing: 0.04em;
          color: var(--text);
          outline: none;
          transition: all 0.25s;
          resize: none;
          display: block;
        }
        .ct-input::placeholder,
        .ct-textarea::placeholder {
          color: rgba(0,210,255,0.15);
          font-size: 11px;
        }
        .ct-input:focus,
        .ct-textarea:focus {
          border-color: rgba(0,210,255,0.45);
          background: rgba(0,15,28,0.9);
          box-shadow: 0 0 0 2px rgba(0,210,255,0.08),
                      inset 0 0 16px rgba(0,210,255,0.03);
        }

        /* submit */
        .ct-submit {
          width: 100%;
          padding: 14px;
          font-family: 'Orbitron', monospace;
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          border: 1px solid var(--cyan);
          border-radius: 4px;
          background: rgba(0,210,255,0.08);
          color: var(--cyan);
          cursor: pointer;
          transition: all 0.28s;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          animation: ctGlow 3s ease-in-out infinite;
          margin-top: 8px;
        }
        .ct-submit:hover:not(:disabled) {
          background: rgba(0,210,255,0.18);
          box-shadow: 0 0 32px rgba(0,210,255,0.4);
          transform: translateY(-2px);
        }
        .ct-submit:disabled {
          opacity: 0.6; cursor: not-allowed; animation: none;
        }
        .ct-spinner {
          width: 14px; height: 14px;
          border: 1.5px solid rgba(0,210,255,0.3);
          border-top-color: var(--cyan);
          border-radius: 50%;
          animation: ctSpin 0.7s linear infinite;
        }

        /* success / error */
        .ct-feedback {
          margin-top: 16px; padding: 12px 16px;
          border-radius: 4px;
          font-size: 11px; letter-spacing: 0.1em;
          display: flex; align-items: center; gap: 8px;
        }
        .ct-feedback.success {
          border: 1px solid rgba(0,255,224,0.25);
          background: rgba(0,255,224,0.05);
          color: var(--teal);
        }
        .ct-feedback.error {
          border: 1px solid rgba(255,100,100,0.25);
          background: rgba(255,100,100,0.05);
          color: rgba(255,160,160,0.8);
        }
      `}),f.jsxs("div",{className:"ct-root",children:[f.jsxs("section",{className:"ct-header",children:[f.jsx("div",{className:"ct-eyebrow ct-fu ct-d1",children:"connection.init() → handshake.start()"}),f.jsxs("h1",{className:"ct-title ct-fu ct-d2",children:["GET IN ",f.jsx("span",{className:"cx",children:"TOUCH"})]}),f.jsx("p",{className:"ct-subtitle ct-fu ct-d3",children:"Have a project in mind or want to collaborate? Transmit a message and I'll respond within 24h."}),f.jsx("div",{className:"ct-scan-line"})]}),f.jsxs("section",{className:"ct-main",children:[f.jsxs("div",{className:"ct-left ct-fu ct-d3",children:[D1.map(p=>{const h=p.href?"a":"div";return f.jsxs(h,{className:"ct-info-card",...p.href?{href:p.href}:{},children:[f.jsxs("div",{className:"ct-info-top",children:[f.jsxs("div",{className:"ct-info-icon-label",children:[f.jsx("span",{className:"ct-info-icon",style:{color:p.color,filter:`drop-shadow(0 0 5px ${p.color}88)`},children:p.icon}),f.jsx("span",{className:"ct-info-label",style:{color:p.color},children:p.label})]}),f.jsxs("span",{className:"ct-info-code",children:["_",p.code]})]}),f.jsx("div",{className:"ct-info-value",children:p.value}),f.jsx("div",{className:`ct-info-sub${p.highlight?" hl":""}`,children:p.sub})]},p.code)}),f.jsx("div",{className:"ct-social-strip",children:U1.map(p=>f.jsxs("a",{href:p.href,target:"_blank",rel:"noreferrer",className:"ct-social-btn",children:[p.icon,f.jsx("span",{children:p.label})]},p.label))})]}),f.jsxs("div",{className:"ct-form-wrap ct-fu ct-d4",children:[f.jsxs("div",{className:"ct-form-head",children:[f.jsx("span",{className:"ct-form-title",children:"// TRANSMIT_MESSAGE"}),f.jsx("span",{className:"ct-form-status-dot"})]}),f.jsxs("form",{name:"contactForm",action:"https://formspree.io/f/mnqekeqg",method:"POST",onSubmit:j,children:[f.jsx("input",{type:"hidden",name:"bot-field"}),f.jsxs("div",{className:"ct-field",children:[f.jsx("label",{className:"ct-label",children:"Sender_Name"}),f.jsx("input",{className:"ct-input",type:"text",name:"name",value:r.name,onChange:g,placeholder:"Your name",required:!0,onFocus:()=>b("name"),onBlur:()=>b(null)})]}),f.jsxs("div",{className:"ct-field",children:[f.jsx("label",{className:"ct-label",children:"Sender_Email"}),f.jsx("input",{className:"ct-input",type:"email",name:"email",value:r.email,onChange:g,placeholder:"your@email.com",required:!0,onFocus:()=>b("email"),onBlur:()=>b(null)})]}),f.jsxs("div",{className:"ct-field",children:[f.jsx("label",{className:"ct-label",children:"Message_Payload"}),f.jsx("textarea",{className:"ct-textarea",name:"message",rows:5,value:r.message,onChange:g,placeholder:"Describe your project or inquiry...",required:!0,onFocus:()=>b("message"),onBlur:()=>b(null)})]}),f.jsx("button",{type:"submit",className:"ct-submit",disabled:c==="sending",children:c==="sending"?f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"ct-spinner"})," TRANSMITTING..."]}):c==="sent"?"✓ MESSAGE_SENT":"SEND_MESSAGE( ) →"}),c==="sent"&&f.jsxs("div",{className:"ct-feedback success",children:[f.jsx("span",{children:"✓"}),"TRANSMISSION_COMPLETE · I'll respond within 24h."]}),c==="error"&&f.jsxs("div",{className:"ct-feedback error",children:[f.jsx("span",{children:"✗"}),"TRANSMISSION_FAILED · Please try again or email directly."]})]})]})]})]})]})},H1=()=>f.jsx(Tg,{children:f.jsxs(Ia,{element:f.jsx(v1,{}),children:[f.jsx(Ia,{path:"/",element:f.jsx(z1,{})}),f.jsx(Ia,{path:"/projects",element:f.jsx(M1,{})}),f.jsx(Ia,{path:"/skills",element:f.jsx(O1,{})}),f.jsx(Ia,{path:"/about",element:f.jsx(C1,{})}),f.jsx(Ia,{path:"/contact",element:f.jsx(k1,{})})]})}),L1=()=>{const r=N.useRef(null);return N.useEffect(()=>{const s=r.current,c=s.getContext("2d");let u;const m=()=>{const g=Math.min(window.innerWidth*.55,300);s.width=g,s.height=g};m(),window.addEventListener("resize",m);const b=()=>{const g=s.width,j=g/2,p=g/2;c.clearRect(0,0,g,g),s._nodes||(s._nodes=Array.from({length:26},(E,B)=>{const H=B/26*Math.PI*2,Y=g*.2+Math.random()*g*.17;return{x:j+Math.cos(H)*Y,y:p+Math.sin(H)*Y,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,r:Math.random()*1.5+.7,pulse:Math.random()*Math.PI*2}}));const h=s._nodes;h.forEach(E=>{E.x+=E.vx,E.y+=E.vy,E.pulse+=.028;const B=E.x-j,H=E.y-p,Y=Math.sqrt(B*B+H*H);(Y>g*.41||Y<g*.13)&&(E.vx*=-1,E.vy*=-1)});for(let E=0;E<h.length;E++)for(let B=E+1;B<h.length;B++){const H=h[E].x-h[B].x,Y=h[E].y-h[B].y,J=Math.sqrt(H*H+Y*Y),Z=g*.32;if(J<Z){const ce=(1-J/Z)*.26,se=(Math.sin(h[E].pulse)+1)/2;c.beginPath(),c.moveTo(h[E].x,h[E].y),c.lineTo(h[B].x,h[B].y),c.strokeStyle=`rgba(0,210,255,${ce*(.4+se*.6)})`,c.lineWidth=.5,c.stroke()}}h.forEach(E=>{const B=(Math.sin(E.pulse)+1)/2,H=E.r+B*1.3,Y=c.createRadialGradient(E.x,E.y,0,E.x,E.y,H*5);Y.addColorStop(0,`rgba(0,230,255,${.8+B*.2})`),Y.addColorStop(.4,"rgba(0,150,220,0.28)"),Y.addColorStop(1,"rgba(0,0,0,0)"),c.beginPath(),c.arc(E.x,E.y,H*5,0,Math.PI*2),c.fillStyle=Y,c.fill(),c.beginPath(),c.arc(E.x,E.y,H,0,Math.PI*2),c.fillStyle=`rgba(200,245,255,${.65+B*.35})`,c.fill()});const T=Date.now()*.002,S=(Math.sin(T)+1)/2,U=g*.09+S*g*.025,L=c.createRadialGradient(j,p,0,j,p,U);L.addColorStop(0,`rgba(0,255,224,${.55+S*.4})`),L.addColorStop(.45,`rgba(0,210,255,${.18+S*.18})`),L.addColorStop(1,"rgba(0,0,0,0)"),c.beginPath(),c.arc(j,p,U,0,Math.PI*2),c.fillStyle=L,c.fill(),c.beginPath(),c.arc(j,p,g*.013+S*g*.007,0,Math.PI*2),c.fillStyle=`rgba(0,255,224,${.92+S*.08})`,c.fill(),u=requestAnimationFrame(b)};return b(),()=>{cancelAnimationFrame(u),window.removeEventListener("resize",m)}},[]),f.jsx("canvas",{ref:r,style:{display:"block",width:"min(55vw,300px)",height:"min(55vw,300px)"}})},Qs=[{txt:"Initializing neural runtime",pct:0},{txt:"Loading model weights",pct:18},{txt:"Mounting component tree",pct:36},{txt:"Calibrating UI renderer",pct:55},{txt:"Syncing data pipelines",pct:74},{txt:"System ready",pct:92}],B1=({onComplete:r})=>{const[s,c]=N.useState(0),[u,m]=N.useState(0),[b,g]=N.useState(""),[j,p]=N.useState([]),[h,T]=N.useState(!1);N.useRef(0);const S=N.useRef(null);N.useEffect(()=>{const L=S.current;if(!L)return;const E=L.getContext("2d");let B;const H=340;L.width=H,L.height=H;const Y=H/2,J=H/2;let Z=0;const ce=()=>{E.clearRect(0,0,H,H),Z+=.008,E.save(),E.translate(Y,J),E.rotate(Z),E.beginPath(),E.arc(0,0,155,0,Math.PI*2),E.setLineDash([4,12]),E.strokeStyle="rgba(0,210,255,0.12)",E.lineWidth=1,E.stroke(),E.restore(),E.save(),E.translate(Y,J),E.rotate(-Z*1.5),E.beginPath(),E.arc(0,0,130,0,Math.PI*2),E.setLineDash([2,18]),E.strokeStyle="rgba(0,255,224,0.09)",E.lineWidth=1,E.stroke(),E.restore(),E.save(),E.translate(Y,J),E.rotate(Z*2.5),E.beginPath(),E.arc(0,0,155,0,Math.PI*.6),E.setLineDash([]),E.strokeStyle="rgba(0,210,255,0.45)",E.lineWidth=1.5,E.stroke(),E.restore(),E.save(),E.translate(Y,J),E.rotate(-Z*1.8),E.beginPath(),E.arc(0,0,130,Math.PI*.3,Math.PI*.9),E.setLineDash([]),E.strokeStyle="rgba(0,255,224,0.3)",E.lineWidth=1,E.stroke(),E.restore();for(let se=0;se<4;se++){const ye=Z*2.5+se/4*Math.PI*2;E.save(),E.translate(Y+Math.cos(ye)*155,J+Math.sin(ye)*155),E.rotate(ye),E.fillRect(-1,-4,2,8),E.fillStyle="rgba(0,210,255,0.7)",E.restore()}B=requestAnimationFrame(ce)};return ce(),()=>cancelAnimationFrame(B)},[]),N.useEffect(()=>{const L=setInterval(()=>{c(E=>{if(E>=100)return clearInterval(L),100;const B=E<25?.5:E<70?1.8:E<92?.75:.2;return Math.min(E+B,100)})},28);return()=>clearInterval(L)},[]),N.useEffect(()=>{const L=Qs.findLastIndex(E=>s>=E.pct);L!==u&&L>=0&&(p(E=>[...E,Qs[u].txt]),m(L),g(""))},[s]),N.useEffect(()=>{const L=Qs[u]?.txt||"";let E=0;const B=setInterval(()=>{g(L.slice(0,E)),E++,E>L.length&&clearInterval(B)},24);return()=>clearInterval(B)},[u]),N.useEffect(()=>{if(s>=100){const L=setTimeout(()=>{T(!0),setTimeout(()=>r?.(),800)},600);return()=>clearTimeout(L)}},[s]);const U=Math.floor(s);return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ldr {
          position: fixed; inset: 0; z-index: 9999;
          background: #020c14;
          display: flex; align-items: center; justify-content: center;
          font-family: 'JetBrains Mono', monospace;
          overflow: hidden;
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .ldr.out { opacity: 0; transform: scale(1.06); pointer-events: none; }

        /* grid */
        .ldr::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,210,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,210,255,0.028) 1px, transparent 1px);
          background-size: 56px 56px;
          pointer-events: none;
        }
        /* vignette */
        .ldr::after {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(2,12,20,0.82) 100%);
          pointer-events: none;
        }

        @keyframes lFadeUp   { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        @keyframes lBlink    { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes lScan     { from{transform:translateX(-100%)} to{transform:translateX(500%)} }
        @keyframes lCorner   { 0%,100%{opacity:.35} 50%{opacity:1} }
        @keyframes lShimmer  { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes lPulse    { 0%,100%{box-shadow:0 0 16px rgba(0,210,255,.22)} 50%{box-shadow:0 0 40px rgba(0,210,255,.55),0 0 80px rgba(0,210,255,.12)} }
        @keyframes lFloat    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }

        .ldr-inner {
          position: relative; z-index: 1;
          display: flex; flex-direction: column; align-items: center;
          gap: clamp(12px,2.5vw,24px);
          padding: clamp(20px,4vw,40px);
          animation: lFadeUp .6s ease forwards;
          width: 100%;
          max-width: 440px;
        }

        /* ── Visual core ── */
        .ldr-visual {
          position: relative;
          width: min(55vw,300px); height: min(55vw,300px);
          flex-shrink: 0;
          animation: lFloat 5s ease-in-out infinite;
        }

        /* ring canvas behind */
        .ldr-ring-canvas {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          width: 340px; height: 340px;
          pointer-events: none;
          opacity: 0.9;
        }

        /* neural canvas */
        .ldr-canvas { position: relative; z-index: 2; display: block; }

        /* HUD corners */
        .ldr-corner {
          position: absolute; width: clamp(14px,3vw,22px); height: clamp(14px,3vw,22px);
          z-index: 3; animation: lCorner 2.2s ease-in-out infinite;
        }
        .ldr-corner.tl { top:-4px; left:-4px; border-top:2px solid #00d2ff; border-left:2px solid #00d2ff; }
        .ldr-corner.tr { top:-4px; right:-4px; border-top:2px solid #00d2ff; border-right:2px solid #00d2ff; }
        .ldr-corner.bl { bottom:-4px; left:-4px; border-bottom:2px solid #00d2ff; border-left:2px solid #00d2ff; }
        .ldr-corner.br { bottom:-4px; right:-4px; border-bottom:2px solid #00d2ff; border-right:2px solid #00d2ff; }

        /* scan across canvas */
        .ldr-canvas-scan {
          position: absolute; top:50%; left:0; right:0;
          height:1px; overflow:hidden; z-index:4; pointer-events:none;
        }
        .ldr-canvas-scan::after {
          content:''; position:absolute; top:0; left:0;
          width:40%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(0,210,255,.55),transparent);
          animation: lScan 2.8s ease-in-out infinite;
        }

        /* ── Logo ── */
        .ldr-logo-wrap {
          text-align: center;
          animation: lFadeUp .6s .12s ease forwards; opacity: 0;
        }
        .ldr-logo-name {
          font-family: 'Orbitron', monospace;
          font-size: clamp(18px, 5vw, 26px);
          font-weight: 900; letter-spacing: .1em;
          color: #fff;
          text-shadow: 0 0 30px rgba(0,210,255,.5);
          line-height: 1;
        }
        .ldr-logo-dot {
          display: inline-block; width: clamp(6px,1.5vw,8px); height: clamp(6px,1.5vw,8px);
          border-radius: 50%; background: #00d2ff;
          margin-left: 2px; vertical-align: middle;
          box-shadow: 0 0 10px #00d2ff;
          animation: lBlink 1.6s ease-in-out infinite;
        }
        .ldr-logo-sub {
          font-size: clamp(8px,2vw,10px); letter-spacing: .22em;
          text-transform: uppercase; color: rgba(0,210,255,.28);
          margin-top: 5px;
        }

        /* ── Progress ── */
        .ldr-progress {
          width: 100%;
          animation: lFadeUp .6s .22s ease forwards; opacity: 0;
        }
        .ldr-prog-top {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 8px;
        }
        .ldr-prog-label {
          font-size: clamp(8px,2vw,9px); letter-spacing: .18em;
          text-transform: uppercase; color: rgba(0,210,255,.3);
        }
        .ldr-prog-row {
          display: flex; align-items: center; gap: 8px;
        }
        .ldr-prog-pct {
          font-family: 'Orbitron', monospace;
          font-size: clamp(11px,3vw,14px); font-weight: 700;
          color: #00d2ff;
          text-shadow: 0 0 12px rgba(0,210,255,.6);
          min-width: 3ch; text-align: right;
        }
        .ldr-prog-status {
          display: flex; align-items: center; gap: 4px;
          font-size: clamp(7px,1.8vw,9px); letter-spacing: .12em;
          color: rgba(0,255,224,.45);
        }
        .ldr-status-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #00ffe0; box-shadow: 0 0 5px #00ffe0;
          animation: lBlink 1.3s ease-in-out infinite;
        }

        .ldr-bar-outer {
          width: 100%; height: 4px;
          background: rgba(0,210,255,.07);
          border-radius: 2px; overflow: hidden;
          position: relative;
          box-shadow: 0 0 0 1px rgba(0,210,255,.06);
        }
        .ldr-bar-fill {
          height: 100%; border-radius: 2px;
          background: linear-gradient(90deg, rgba(0,150,220,.5), #00d2ff, #00ffe0, #00d2ff);
          background-size: 200% 100%;
          animation: lShimmer 1.6s linear infinite, lPulse 3s ease-in-out infinite;
          transition: width .1s ease;
          position: relative;
        }
        .ldr-bar-tip {
          position: absolute; top: 50%; right: 0;
          transform: translate(50%, -50%);
          width: clamp(7px,2vw,10px); height: clamp(7px,2vw,10px);
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 10px #00d2ff, 0 0 20px rgba(0,210,255,.7);
        }

        /* segment marks */
        .ldr-bar-marks {
          display: flex; justify-content: space-between;
          margin-top: 5px; padding: 0 1px;
        }
        .ldr-bar-mark {
          width: 1px; height: 4px;
          background: rgba(0,210,255,.15);
        }
        .ldr-bar-mark.lit { background: rgba(0,210,255,.5); }

        /* ── Terminal ── */
        .ldr-terminal {
          width: 100%;
          border: 1px solid rgba(0,210,255,.1);
          border-radius: 5px;
          background: rgba(0,10,22,.7);
          backdrop-filter: blur(8px);
          overflow: hidden;
          animation: lFadeUp .6s .32s ease forwards; opacity: 0;
        }
        .ldr-term-head {
          display: flex; align-items: center; gap: 6px;
          padding: clamp(6px,1.5vw,9px) clamp(10px,2.5vw,14px);
          border-bottom: 1px solid rgba(0,210,255,.08);
          background: rgba(0,210,255,.03);
          position: relative; overflow: hidden;
        }
        .ldr-term-head::after {
          content:'';
          position:absolute; top:0; left:0; right:0; height:1px;
          background:linear-gradient(90deg,transparent,rgba(0,210,255,.4),transparent);
          animation: lScan 4s ease-in-out infinite;
        }
        .ldr-term-dot { width:5px; height:5px; border-radius:50%; }
        .ldr-term-dot.r { background:#ff5f56; }
        .ldr-term-dot.y { background:#ffbd2e; }
        .ldr-term-dot.g { background:#27c93f; }
        .ldr-term-title {
          margin-left: auto;
          font-size: clamp(8px,2vw,9px); letter-spacing:.14em;
          color: rgba(0,210,255,.25); text-transform: uppercase;
        }

        .ldr-term-body {
          padding: clamp(8px,2vw,12px) clamp(10px,2.5vw,14px);
          min-height: clamp(60px,12vw,80px);
          display: flex; flex-direction: column; gap: 3px;
        }
        .ldr-log-done {
          font-size: clamp(9px,2.2vw,10px); letter-spacing:.05em;
          color: rgba(0,210,255,.22); line-height: 1.6;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .ldr-log-done::before { content:'✓  '; color: rgba(0,255,224,.3); }
        .ldr-log-active {
          font-size: clamp(9px,2.2vw,10px); letter-spacing:.05em;
          color: rgba(0,210,255,.75); line-height: 1.6;
          min-height: 18px;
        }
        .ldr-log-active::before { content:'›  '; color:#00d2ff; }
        .ldr-cursor {
          display:inline-block; width:clamp(5px,1.5vw,7px); height:clamp(10px,2.5vw,13px);
          background:#00d2ff; margin-left:1px; vertical-align:middle;
          animation: lBlink .75s step-end infinite;
        }

        /* ── Bottom meta ── */
        .ldr-meta {
          display: flex; align-items: center; justify-content: space-between;
          width: 100%;
          animation: lFadeUp .6s .4s ease forwards; opacity: 0;
        }
        .ldr-meta-item {
          font-size: clamp(7px,1.8vw,9px); letter-spacing:.12em;
          text-transform: uppercase; color: rgba(0,210,255,.18);
        }
        .ldr-meta-item span { color: rgba(0,210,255,.38); }
      `}),f.jsx("div",{className:`ldr${h?" out":""}`,children:f.jsxs("div",{className:"ldr-inner",children:[f.jsxs("div",{className:"ldr-visual",children:[f.jsx("canvas",{className:"ldr-ring-canvas",ref:S}),f.jsx("div",{className:"ldr-corner tl"}),f.jsx("div",{className:"ldr-corner tr"}),f.jsx("div",{className:"ldr-corner bl"}),f.jsx("div",{className:"ldr-corner br"}),f.jsx("div",{className:"ldr-canvas-scan"}),f.jsx(L1,{})]}),f.jsxs("div",{className:"ldr-logo-wrap",children:[f.jsxs("div",{className:"ldr-logo-name",children:["VAIBHAV",f.jsx("span",{className:"ldr-logo-dot"})]}),f.jsx("div",{className:"ldr-logo-sub",children:"Neural Portfolio · v2.0"})]}),f.jsxs("div",{className:"ldr-progress",children:[f.jsxs("div",{className:"ldr-prog-top",children:[f.jsx("span",{className:"ldr-prog-label",children:"SYSTEM_BOOT"}),f.jsxs("div",{className:"ldr-prog-row",children:[f.jsxs("div",{className:"ldr-prog-status",children:[f.jsx("span",{className:"ldr-status-dot"}),U<100?"LOADING":"READY"]}),f.jsxs("span",{className:"ldr-prog-pct",children:[U,"%"]})]})]}),f.jsx("div",{className:"ldr-bar-outer",children:f.jsx("div",{className:"ldr-bar-fill",style:{width:`${U}%`},children:f.jsx("div",{className:"ldr-bar-tip"})})}),f.jsx("div",{className:"ldr-bar-marks",children:Array.from({length:11},(L,E)=>f.jsx("div",{className:`ldr-bar-mark${U>=E*10?" lit":""}`},E))})]}),f.jsxs("div",{className:"ldr-terminal",children:[f.jsxs("div",{className:"ldr-term-head",children:[f.jsx("span",{className:"ldr-term-dot r"}),f.jsx("span",{className:"ldr-term-dot y"}),f.jsx("span",{className:"ldr-term-dot g"}),f.jsx("span",{className:"ldr-term-title",children:"stdout · boot.log"})]}),f.jsxs("div",{className:"ldr-term-body",children:[j.slice(-2).map((L,E)=>f.jsx("div",{className:"ldr-log-done",children:L},E)),f.jsxs("div",{className:"ldr-log-active",children:[b,f.jsx("span",{className:"ldr-cursor"})]})]})]}),f.jsxs("div",{className:"ldr-meta",children:[f.jsxs("span",{className:"ldr-meta-item",children:["BUILD_",f.jsx("span",{children:new Date().getFullYear()})]}),f.jsx("span",{className:"ldr-meta-item",children:"MCA_AI&ML"}),f.jsxs("span",{className:"ldr-meta-item",children:["RAJASTHAN_",f.jsx("span",{children:"IN"})]})]})]})})]})},Y1=()=>{const[r,s]=N.useState(!1);return f.jsxs(f.Fragment,{children:[!r&&f.jsx(B1,{onComplete:()=>s(!0)}),f.jsx("div",{style:{visibility:r?"visible":"hidden"},children:f.jsx(Pg,{children:f.jsx(H1,{})})})]})};Mh.createRoot(document.getElementById("root")).render(f.jsx(Ra.StrictMode,{children:f.jsx(Y1,{})}));
