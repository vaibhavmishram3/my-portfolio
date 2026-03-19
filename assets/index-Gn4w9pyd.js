(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))s(p);new MutationObserver(p=>{for(const b of p)if(b.type==="childList")for(const h of b.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function u(p){const b={};return p.integrity&&(b.integrity=p.integrity),p.referrerPolicy&&(b.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?b.credentials="include":p.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function s(p){if(p.ep)return;p.ep=!0;const b=u(p);fetch(p.href,b)}})();function z0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Uc={exports:{}},Dn={};var n0;function vh(){if(n0)return Dn;n0=1;var r=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function u(s,p,b){var h=null;if(b!==void 0&&(h=""+b),p.key!==void 0&&(h=""+p.key),"key"in p){b={};for(var w in p)w!=="key"&&(b[w]=p[w])}else b=p;return p=b.ref,{$$typeof:r,type:s,key:h,ref:p!==void 0?p:null,props:b}}return Dn.Fragment=c,Dn.jsx=u,Dn.jsxs=u,Dn}var i0;function xh(){return i0||(i0=1,Uc.exports=vh()),Uc.exports}var f=xh(),kc={exports:{}},I={};var r0;function yh(){if(r0)return I;r0=1;var r=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),h=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),B=Symbol.iterator;function L(y){return y===null||typeof y!="object"?null:(y=B&&y[B]||y["@@iterator"],typeof y=="function"?y:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,k={};function Y(y,U,X){this.props=y,this.context=U,this.refs=k,this.updater=X||z}Y.prototype.isReactComponent={},Y.prototype.setState=function(y,U){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,U,"setState")},Y.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function J(){}J.prototype=Y.prototype;function Z(y,U,X){this.props=y,this.context=U,this.refs=k,this.updater=X||z}var se=Z.prototype=new J;se.constructor=Z,H(se,Y.prototype),se.isPureReactComponent=!0;var ce=Array.isArray;function ye(){}var F={H:null,A:null,T:null,S:null},Me=Object.prototype.hasOwnProperty;function Ze(y,U,X){var Q=X.ref;return{$$typeof:r,type:y,key:U,ref:Q!==void 0?Q:null,props:X}}function Rt(y,U){return Ze(y.type,U,y.props)}function mt(y){return typeof y=="object"&&y!==null&&y.$$typeof===r}function Je(y){var U={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(X){return U[X]})}var Ct=/\/+/g;function ht(y,U){return typeof y=="object"&&y!==null&&y.key!=null?Je(""+y.key):U.toString(36)}function _e(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(ye,ye):(y.status="pending",y.then(function(U){y.status==="pending"&&(y.status="fulfilled",y.value=U)},function(U){y.status==="pending"&&(y.status="rejected",y.reason=U)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function C(y,U,X,Q,P){var ae=typeof y;(ae==="undefined"||ae==="boolean")&&(y=null);var pe=!1;if(y===null)pe=!0;else switch(ae){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(y.$$typeof){case r:case c:pe=!0;break;case O:return pe=y._init,C(pe(y._payload),U,X,Q,P)}}if(pe)return P=P(y),pe=Q===""?"."+ht(y,0):Q,ce(P)?(X="",pe!=null&&(X=pe.replace(Ct,"$&/")+"/"),C(P,U,X,"",function(Yl){return Yl})):P!=null&&(mt(P)&&(P=Rt(P,X+(P.key==null||y&&y.key===P.key?"":(""+P.key).replace(Ct,"$&/")+"/")+pe)),U.push(P)),1;pe=0;var We=Q===""?".":Q+":";if(ce(y))for(var Oe=0;Oe<y.length;Oe++)Q=y[Oe],ae=We+ht(Q,Oe),pe+=C(Q,U,X,ae,P);else if(Oe=L(y),typeof Oe=="function")for(y=Oe.call(y),Oe=0;!(Q=y.next()).done;)Q=Q.value,ae=We+ht(Q,Oe++),pe+=C(Q,U,X,ae,P);else if(ae==="object"){if(typeof y.then=="function")return C(_e(y),U,X,Q,P);throw U=String(y),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return pe}function q(y,U,X){if(y==null)return y;var Q=[],P=0;return C(y,Q,"","",function(ae){return U.call(X,ae,P++)}),Q}function $(y){if(y._status===-1){var U=y._result;U=U(),U.then(function(X){(y._status===0||y._status===-1)&&(y._status=1,y._result=X)},function(X){(y._status===0||y._status===-1)&&(y._status=2,y._result=X)}),y._status===-1&&(y._status=0,y._result=U)}if(y._status===1)return y._result.default;throw y._result}var ge=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)},Se={map:q,forEach:function(y,U,X){q(y,function(){U.apply(this,arguments)},X)},count:function(y){var U=0;return q(y,function(){U++}),U},toArray:function(y){return q(y,function(U){return U})||[]},only:function(y){if(!mt(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return I.Activity=E,I.Children=Se,I.Component=Y,I.Fragment=u,I.Profiler=p,I.PureComponent=Z,I.StrictMode=s,I.Suspense=m,I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,I.__COMPILER_RUNTIME={__proto__:null,c:function(y){return F.H.useMemoCache(y)}},I.cache=function(y){return function(){return y.apply(null,arguments)}},I.cacheSignal=function(){return null},I.cloneElement=function(y,U,X){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var Q=H({},y.props),P=y.key;if(U!=null)for(ae in U.key!==void 0&&(P=""+U.key),U)!Me.call(U,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&U.ref===void 0||(Q[ae]=U[ae]);var ae=arguments.length-2;if(ae===1)Q.children=X;else if(1<ae){for(var pe=Array(ae),We=0;We<ae;We++)pe[We]=arguments[We+2];Q.children=pe}return Ze(y.type,P,Q)},I.createContext=function(y){return y={$$typeof:h,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:b,_context:y},y},I.createElement=function(y,U,X){var Q,P={},ae=null;if(U!=null)for(Q in U.key!==void 0&&(ae=""+U.key),U)Me.call(U,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(P[Q]=U[Q]);var pe=arguments.length-2;if(pe===1)P.children=X;else if(1<pe){for(var We=Array(pe),Oe=0;Oe<pe;Oe++)We[Oe]=arguments[Oe+2];P.children=We}if(y&&y.defaultProps)for(Q in pe=y.defaultProps,pe)P[Q]===void 0&&(P[Q]=pe[Q]);return Ze(y,ae,P)},I.createRef=function(){return{current:null}},I.forwardRef=function(y){return{$$typeof:w,render:y}},I.isValidElement=mt,I.lazy=function(y){return{$$typeof:O,_payload:{_status:-1,_result:y},_init:$}},I.memo=function(y,U){return{$$typeof:g,type:y,compare:U===void 0?null:U}},I.startTransition=function(y){var U=F.T,X={};F.T=X;try{var Q=y(),P=F.S;P!==null&&P(X,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(ye,ge)}catch(ae){ge(ae)}finally{U!==null&&X.types!==null&&(U.types=X.types),F.T=U}},I.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},I.use=function(y){return F.H.use(y)},I.useActionState=function(y,U,X){return F.H.useActionState(y,U,X)},I.useCallback=function(y,U){return F.H.useCallback(y,U)},I.useContext=function(y){return F.H.useContext(y)},I.useDebugValue=function(){},I.useDeferredValue=function(y,U){return F.H.useDeferredValue(y,U)},I.useEffect=function(y,U){return F.H.useEffect(y,U)},I.useEffectEvent=function(y){return F.H.useEffectEvent(y)},I.useId=function(){return F.H.useId()},I.useImperativeHandle=function(y,U,X){return F.H.useImperativeHandle(y,U,X)},I.useInsertionEffect=function(y,U){return F.H.useInsertionEffect(y,U)},I.useLayoutEffect=function(y,U){return F.H.useLayoutEffect(y,U)},I.useMemo=function(y,U){return F.H.useMemo(y,U)},I.useOptimistic=function(y,U){return F.H.useOptimistic(y,U)},I.useReducer=function(y,U,X){return F.H.useReducer(y,U,X)},I.useRef=function(y){return F.H.useRef(y)},I.useState=function(y){return F.H.useState(y)},I.useSyncExternalStore=function(y,U,X){return F.H.useSyncExternalStore(y,U,X)},I.useTransition=function(){return F.H.useTransition()},I.version="19.2.4",I}var o0;function Kc(){return o0||(o0=1,kc.exports=yh()),kc.exports}var T=Kc();const Ra=z0(T);var Hc={exports:{}},Un={},Bc={exports:{}},Lc={};var c0;function Sh(){return c0||(c0=1,(function(r){function c(C,q){var $=C.length;C.push(q);e:for(;0<$;){var ge=$-1>>>1,Se=C[ge];if(0<p(Se,q))C[ge]=q,C[$]=Se,$=ge;else break e}}function u(C){return C.length===0?null:C[0]}function s(C){if(C.length===0)return null;var q=C[0],$=C.pop();if($!==q){C[0]=$;e:for(var ge=0,Se=C.length,y=Se>>>1;ge<y;){var U=2*(ge+1)-1,X=C[U],Q=U+1,P=C[Q];if(0>p(X,$))Q<Se&&0>p(P,X)?(C[ge]=P,C[Q]=$,ge=Q):(C[ge]=X,C[U]=$,ge=U);else if(Q<Se&&0>p(P,$))C[ge]=P,C[Q]=$,ge=Q;else break e}}return q}function p(C,q){var $=C.sortIndex-q.sortIndex;return $!==0?$:C.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;r.unstable_now=function(){return b.now()}}else{var h=Date,w=h.now();r.unstable_now=function(){return h.now()-w}}var m=[],g=[],O=1,E=null,B=3,L=!1,z=!1,H=!1,k=!1,Y=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function se(C){for(var q=u(g);q!==null;){if(q.callback===null)s(g);else if(q.startTime<=C)s(g),q.sortIndex=q.expirationTime,c(m,q);else break;q=u(g)}}function ce(C){if(H=!1,se(C),!z)if(u(m)!==null)z=!0,ye||(ye=!0,Je());else{var q=u(g);q!==null&&_e(ce,q.startTime-C)}}var ye=!1,F=-1,Me=5,Ze=-1;function Rt(){return k?!0:!(r.unstable_now()-Ze<Me)}function mt(){if(k=!1,ye){var C=r.unstable_now();Ze=C;var q=!0;try{e:{z=!1,H&&(H=!1,J(F),F=-1),L=!0;var $=B;try{t:{for(se(C),E=u(m);E!==null&&!(E.expirationTime>C&&Rt());){var ge=E.callback;if(typeof ge=="function"){E.callback=null,B=E.priorityLevel;var Se=ge(E.expirationTime<=C);if(C=r.unstable_now(),typeof Se=="function"){E.callback=Se,se(C),q=!0;break t}E===u(m)&&s(m),se(C)}else s(m);E=u(m)}if(E!==null)q=!0;else{var y=u(g);y!==null&&_e(ce,y.startTime-C),q=!1}}break e}finally{E=null,B=$,L=!1}q=void 0}}finally{q?Je():ye=!1}}}var Je;if(typeof Z=="function")Je=function(){Z(mt)};else if(typeof MessageChannel<"u"){var Ct=new MessageChannel,ht=Ct.port2;Ct.port1.onmessage=mt,Je=function(){ht.postMessage(null)}}else Je=function(){Y(mt,0)};function _e(C,q){F=Y(function(){C(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(C){C.callback=null},r.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Me=0<C?Math.floor(1e3/C):5},r.unstable_getCurrentPriorityLevel=function(){return B},r.unstable_next=function(C){switch(B){case 1:case 2:case 3:var q=3;break;default:q=B}var $=B;B=q;try{return C()}finally{B=$}},r.unstable_requestPaint=function(){k=!0},r.unstable_runWithPriority=function(C,q){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var $=B;B=C;try{return q()}finally{B=$}},r.unstable_scheduleCallback=function(C,q,$){var ge=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ge+$:ge):$=ge,C){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=$+Se,C={id:O++,callback:q,priorityLevel:C,startTime:$,expirationTime:Se,sortIndex:-1},$>ge?(C.sortIndex=$,c(g,C),u(m)===null&&C===u(g)&&(H?(J(F),F=-1):H=!0,_e(ce,$-ge))):(C.sortIndex=Se,c(m,C),z||L||(z=!0,ye||(ye=!0,Je()))),C},r.unstable_shouldYield=Rt,r.unstable_wrapCallback=function(C){var q=B;return function(){var $=B;B=q;try{return C.apply(this,arguments)}finally{B=$}}}})(Lc)),Lc}var s0;function Eh(){return s0||(s0=1,Bc.exports=Sh()),Bc.exports}var Yc={exports:{}},Ke={};var u0;function wh(){if(u0)return Ke;u0=1;var r=Kc();function c(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)g+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var s={d:{f:u,r:function(){throw Error(c(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},p=Symbol.for("react.portal");function b(m,g,O){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:E==null?null:""+E,children:m,containerInfo:g,implementation:O}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ke.createPortal=function(m,g){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(c(299));return b(m,g,null,O)},Ke.flushSync=function(m){var g=h.T,O=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=g,s.p=O,s.d.f()}},Ke.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},Ke.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ke.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var O=g.as,E=w(O,g.crossOrigin),B=typeof g.integrity=="string"?g.integrity:void 0,L=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;O==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:B,fetchPriority:L}):O==="script"&&s.d.X(m,{crossOrigin:E,integrity:B,fetchPriority:L,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Ke.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var O=w(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:O,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},Ke.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var O=g.as,E=w(O,g.crossOrigin);s.d.L(m,O,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Ke.preloadModule=function(m,g){if(typeof m=="string")if(g){var O=w(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:O,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},Ke.requestFormReset=function(m){s.d.r(m)},Ke.unstable_batchedUpdates=function(m,g){return m(g)},Ke.useFormState=function(m,g,O){return h.H.useFormState(m,g,O)},Ke.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ke.version="19.2.4",Ke}var f0;function jh(){if(f0)return Yc.exports;f0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(c){console.error(c)}}return r(),Yc.exports=wh(),Yc.exports}var d0;function zh(){if(d0)return Un;d0=1;var r=Eh(),c=Kc(),u=jh();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(b(e)!==e)throw Error(s(188))}function g(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return m(n),e;if(i===l)return m(n),t;i=i.sibling}throw Error(s(188))}if(a.return!==l.return)a=n,l=i;else{for(var o=!1,d=n.child;d;){if(d===a){o=!0,a=n,l=i;break}if(d===l){o=!0,l=n,a=i;break}d=d.sibling}if(!o){for(d=i.child;d;){if(d===a){o=!0,a=i,l=n;break}if(d===l){o=!0,l=i,a=n;break}d=d.sibling}if(!o)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function O(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=O(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,B=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),Ze=Symbol.for("react.activity"),Rt=Symbol.for("react.memo_cache_sentinel"),mt=Symbol.iterator;function Je(e){return e===null||typeof e!="object"?null:(e=mt&&e[mt]||e["@@iterator"],typeof e=="function"?e:null)}var Ct=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case Y:return"Profiler";case k:return"StrictMode";case ce:return"Suspense";case ye:return"SuspenseList";case Ze:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case z:return"Portal";case Z:return e.displayName||"Context";case J:return(e._context.displayName||"Context")+".Consumer";case se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:ht(e.type)||"Memo";case Me:t=e._payload,e=e._init;try{return ht(e(t))}catch{}}return null}var _e=Array.isArray,C=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ge=[],Se=-1;function y(e){return{current:e}}function U(e){0>Se||(e.current=ge[Se],ge[Se]=null,Se--)}function X(e,t){Se++,ge[Se]=e.current,e.current=t}var Q=y(null),P=y(null),ae=y(null),pe=y(null);function We(e,t){switch(X(ae,t),X(P,e),X(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ad(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ad(t),e=Td(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(Q),X(Q,e)}function Oe(){U(Q),U(P),U(ae)}function Yl(e){e.memoizedState!==null&&X(pe,e);var t=Q.current,a=Td(t,e.type);t!==a&&(X(P,e),X(Q,a))}function Xn(e){P.current===e&&(U(Q),U(P)),pe.current===e&&(U(pe),On._currentValue=$)}var gr,as;function _a(e){if(gr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);gr=t&&t[1]||"",as=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gr+e+as}var br=!1;function vr(e,t){if(!e||br)return"";br=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(M){var A=M}Reflect.construct(e,[],D)}else{try{D.call()}catch(M){A=M}e.call(D.prototype)}}else{try{throw Error()}catch(M){A=M}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(M){if(M&&A&&typeof M.stack=="string")return[M.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),o=i[0],d=i[1];if(o&&d){var v=o.split(`
`),N=d.split(`
`);for(n=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;n<N.length&&!N[n].includes("DetermineComponentFrameRoot");)n++;if(l===v.length||n===N.length)for(l=v.length-1,n=N.length-1;1<=l&&0<=n&&v[l]!==N[n];)n--;for(;1<=l&&0<=n;l--,n--)if(v[l]!==N[n]){if(l!==1||n!==1)do if(l--,n--,0>n||v[l]!==N[n]){var R=`
`+v[l].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=l&&0<=n);break}}}finally{br=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_a(a):""}function W0(e,t){switch(e.tag){case 26:case 27:case 5:return _a(e.type);case 16:return _a("Lazy");case 13:return e.child!==t&&t!==null?_a("Suspense Fallback"):_a("Suspense");case 19:return _a("SuspenseList");case 0:case 15:return vr(e.type,!1);case 11:return vr(e.type.render,!1);case 1:return vr(e.type,!0);case 31:return _a("Activity");default:return""}}function ls(e){try{var t="",a=null;do t+=W0(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var xr=Object.prototype.hasOwnProperty,yr=r.unstable_scheduleCallback,Sr=r.unstable_cancelCallback,$0=r.unstable_shouldYield,F0=r.unstable_requestPaint,nt=r.unstable_now,I0=r.unstable_getCurrentPriorityLevel,ns=r.unstable_ImmediatePriority,is=r.unstable_UserBlockingPriority,Gn=r.unstable_NormalPriority,P0=r.unstable_LowPriority,rs=r.unstable_IdlePriority,ep=r.log,tp=r.unstable_setDisableYieldValue,ql=null,it=null;function ra(e){if(typeof ep=="function"&&tp(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(ql,e)}catch{}}var rt=Math.clz32?Math.clz32:np,ap=Math.log,lp=Math.LN2;function np(e){return e>>>=0,e===0?32:31-(ap(e)/lp|0)|0}var Qn=256,Vn=262144,Zn=4194304;function Da(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Jn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var d=l&134217727;return d!==0?(l=d&~i,l!==0?n=Da(l):(o&=d,o!==0?n=Da(o):a||(a=d&~e,a!==0&&(n=Da(a))))):(d=l&~i,d!==0?n=Da(d):o!==0?n=Da(o):a||(a=l&~e,a!==0&&(n=Da(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Xl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ip(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function os(){var e=Zn;return Zn<<=1,(Zn&62914560)===0&&(Zn=4194304),e}function Er(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Gl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rp(e,t,a,l,n,i){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,v=e.expirationTimes,N=e.hiddenUpdates;for(a=o&~a;0<a;){var R=31-rt(a),D=1<<R;d[R]=0,v[R]=-1;var A=N[R];if(A!==null)for(N[R]=null,R=0;R<A.length;R++){var M=A[R];M!==null&&(M.lane&=-536870913)}a&=~D}l!==0&&cs(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function cs(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-rt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function ss(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-rt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function us(e,t){var a=t&-t;return a=(a&42)!==0?1:wr(a),(a&(e.suspendedLanes|t))!==0?0:a}function wr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function jr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fs(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Fd(e.type))}function ds(e,t){var a=q.p;try{return q.p=e,t()}finally{q.p=a}}var oa=Math.random().toString(36).slice(2),qe="__reactFiber$"+oa,Fe="__reactProps$"+oa,el="__reactContainer$"+oa,zr="__reactEvents$"+oa,op="__reactListeners$"+oa,cp="__reactHandles$"+oa,ps="__reactResources$"+oa,Ql="__reactMarker$"+oa;function Nr(e){delete e[qe],delete e[Fe],delete e[zr],delete e[op],delete e[cp]}function tl(e){var t=e[qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[el]||a[qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Ud(e);e!==null;){if(a=e[qe])return a;e=Ud(e)}return t}e=a,a=e.parentNode}return null}function al(e){if(e=e[qe]||e[el]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function ll(e){var t=e[ps];return t||(t=e[ps]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Le(e){e[Ql]=!0}var ms=new Set,hs={};function Ua(e,t){nl(e,t),nl(e+"Capture",t)}function nl(e,t){for(hs[e]=t,e=0;e<t.length;e++)ms.add(t[e])}var sp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gs={},bs={};function up(e){return xr.call(bs,e)?!0:xr.call(gs,e)?!1:sp.test(e)?bs[e]=!0:(gs[e]=!0,!1)}function Kn(e,t,a){if(up(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Wn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Yt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fp(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ar(e){if(!e._valueTracker){var t=vs(e)?"checked":"value";e._valueTracker=fp(e,t,""+e[t])}}function xs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=vs(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function $n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var dp=/[\n"\\]/g;function bt(e){return e.replace(dp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Tr(e,t,a,l,n,i,o,d){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+gt(t)):e.value!==""+gt(t)&&(e.value=""+gt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Mr(e,o,gt(t)):a!=null?Mr(e,o,gt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+gt(d):e.removeAttribute("name")}function ys(e,t,a,l,n,i,o,d){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ar(e);return}a=a!=null?""+gt(a):"",t=t!=null?""+gt(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=d?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Ar(e)}function Mr(e,t,a){t==="number"&&$n(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function il(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+gt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Ss(e,t,a){if(t!=null&&(t=""+gt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+gt(a):""}function Es(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(s(92));if(_e(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=gt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Ar(e)}function rl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var pp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ws(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||pp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function js(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&ws(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&ws(e,i,t[i])}function Or(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fn(e){return hp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qt(){}var Rr=null;function Cr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ol=null,cl=null;function zs(e){var t=al(e);if(t&&(e=t.stateNode)){var a=e[Fe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Tr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+bt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Fe]||null;if(!n)throw Error(s(90));Tr(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&xs(l)}break e;case"textarea":Ss(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&il(e,!!a.multiple,t,!1)}}}var _r=!1;function Ns(e,t,a){if(_r)return e(t,a);_r=!0;try{var l=e(t);return l}finally{if(_r=!1,(ol!==null||cl!==null)&&(Bi(),ol&&(t=ol,e=cl,cl=ol=null,zs(t),e)))for(t=0;t<e.length;t++)zs(e[t])}}function Zl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Fe]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dr=!1;if(Xt)try{var Jl={};Object.defineProperty(Jl,"passive",{get:function(){Dr=!0}}),window.addEventListener("test",Jl,Jl),window.removeEventListener("test",Jl,Jl)}catch{Dr=!1}var ca=null,Ur=null,In=null;function As(){if(In)return In;var e,t=Ur,a=t.length,l,n="value"in ca?ca.value:ca.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var o=a-e;for(l=1;l<=o&&t[a-l]===n[i-l];l++);return In=n.slice(e,1<l?1-l:void 0)}function Pn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ei(){return!0}function Ts(){return!1}function Ie(e){function t(a,l,n,i,o){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ei:Ts,this.isPropagationStopped=Ts,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ei)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ei)},persist:function(){},isPersistent:ei}),t}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ti=Ie(ka),Kl=E({},ka,{view:0,detail:0}),gp=Ie(Kl),kr,Hr,Wl,ai=E({},Kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wl&&(Wl&&e.type==="mousemove"?(kr=e.screenX-Wl.screenX,Hr=e.screenY-Wl.screenY):Hr=kr=0,Wl=e),kr)},movementY:function(e){return"movementY"in e?e.movementY:Hr}}),Ms=Ie(ai),bp=E({},ai,{dataTransfer:0}),vp=Ie(bp),xp=E({},Kl,{relatedTarget:0}),Br=Ie(xp),yp=E({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Sp=Ie(yp),Ep=E({},ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wp=Ie(Ep),jp=E({},ka,{data:0}),Os=Ie(jp),zp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Np={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ap={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ap[e])?!!t[e]:!1}function Lr(){return Tp}var Mp=E({},Kl,{key:function(e){if(e.key){var t=zp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Np[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lr,charCode:function(e){return e.type==="keypress"?Pn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Op=Ie(Mp),Rp=E({},ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rs=Ie(Rp),Cp=E({},Kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lr}),_p=Ie(Cp),Dp=E({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Up=Ie(Dp),kp=E({},ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hp=Ie(kp),Bp=E({},ka,{newState:0,oldState:0}),Lp=Ie(Bp),Yp=[9,13,27,32],Yr=Xt&&"CompositionEvent"in window,$l=null;Xt&&"documentMode"in document&&($l=document.documentMode);var qp=Xt&&"TextEvent"in window&&!$l,Cs=Xt&&(!Yr||$l&&8<$l&&11>=$l),_s=" ",Ds=!1;function Us(e,t){switch(e){case"keyup":return Yp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ks(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sl=!1;function Xp(e,t){switch(e){case"compositionend":return ks(t);case"keypress":return t.which!==32?null:(Ds=!0,_s);case"textInput":return e=t.data,e===_s&&Ds?null:e;default:return null}}function Gp(e,t){if(sl)return e==="compositionend"||!Yr&&Us(e,t)?(e=As(),In=Ur=ca=null,sl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cs&&t.locale!=="ko"?null:t.data;default:return null}}var Qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qp[e.type]:t==="textarea"}function Bs(e,t,a,l){ol?cl?cl.push(l):cl=[l]:ol=l,t=Vi(t,"onChange"),0<t.length&&(a=new ti("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Fl=null,Il=null;function Vp(e){Sd(e,0)}function li(e){var t=Vl(e);if(xs(t))return e}function Ls(e,t){if(e==="change")return t}var Ys=!1;if(Xt){var qr;if(Xt){var Xr="oninput"in document;if(!Xr){var qs=document.createElement("div");qs.setAttribute("oninput","return;"),Xr=typeof qs.oninput=="function"}qr=Xr}else qr=!1;Ys=qr&&(!document.documentMode||9<document.documentMode)}function Xs(){Fl&&(Fl.detachEvent("onpropertychange",Gs),Il=Fl=null)}function Gs(e){if(e.propertyName==="value"&&li(Il)){var t=[];Bs(t,Il,e,Cr(e)),Ns(Vp,t)}}function Zp(e,t,a){e==="focusin"?(Xs(),Fl=t,Il=a,Fl.attachEvent("onpropertychange",Gs)):e==="focusout"&&Xs()}function Jp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return li(Il)}function Kp(e,t){if(e==="click")return li(t)}function Wp(e,t){if(e==="input"||e==="change")return li(t)}function $p(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:$p;function Pl(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!xr.call(t,n)||!ot(e[n],t[n]))return!1}return!0}function Qs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vs(e,t){var a=Qs(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Qs(a)}}function Zs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Js(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$n(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=$n(e.document)}return t}function Gr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Fp=Xt&&"documentMode"in document&&11>=document.documentMode,ul=null,Qr=null,en=null,Vr=!1;function Ks(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vr||ul==null||ul!==$n(l)||(l=ul,"selectionStart"in l&&Gr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),en&&Pl(en,l)||(en=l,l=Vi(Qr,"onSelect"),0<l.length&&(t=new ti("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=ul)))}function Ha(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var fl={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},Zr={},Ws={};Xt&&(Ws=document.createElement("div").style,"AnimationEvent"in window||(delete fl.animationend.animation,delete fl.animationiteration.animation,delete fl.animationstart.animation),"TransitionEvent"in window||delete fl.transitionend.transition);function Ba(e){if(Zr[e])return Zr[e];if(!fl[e])return e;var t=fl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ws)return Zr[e]=t[a];return e}var $s=Ba("animationend"),Fs=Ba("animationiteration"),Is=Ba("animationstart"),Ip=Ba("transitionrun"),Pp=Ba("transitionstart"),em=Ba("transitioncancel"),Ps=Ba("transitionend"),eu=new Map,Jr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jr.push("scrollEnd");function At(e,t){eu.set(e,t),Ua(t,[e])}var ni=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},vt=[],dl=0,Kr=0;function ii(){for(var e=dl,t=Kr=dl=0;t<e;){var a=vt[t];vt[t++]=null;var l=vt[t];vt[t++]=null;var n=vt[t];vt[t++]=null;var i=vt[t];if(vt[t++]=null,l!==null&&n!==null){var o=l.pending;o===null?n.next=n:(n.next=o.next,o.next=n),l.pending=n}i!==0&&tu(a,n,i)}}function ri(e,t,a,l){vt[dl++]=e,vt[dl++]=t,vt[dl++]=a,vt[dl++]=l,Kr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Wr(e,t,a,l){return ri(e,t,a,l),oi(e)}function La(e,t){return ri(e,null,null,t),oi(e)}function tu(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-rt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function oi(e){if(50<wn)throw wn=0,ic=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pl={};function tm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,a,l){return new tm(e,t,a,l)}function $r(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gt(e,t){var a=e.alternate;return a===null?(a=ct(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function au(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ci(e,t,a,l,n,i){var o=0;if(l=e,typeof e=="function")$r(e)&&(o=1);else if(typeof e=="string")o=rh(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ze:return e=ct(31,a,t,n),e.elementType=Ze,e.lanes=i,e;case H:return Ya(a.children,n,i,t);case k:o=8,n|=24;break;case Y:return e=ct(12,a,t,n|2),e.elementType=Y,e.lanes=i,e;case ce:return e=ct(13,a,t,n),e.elementType=ce,e.lanes=i,e;case ye:return e=ct(19,a,t,n),e.elementType=ye,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Z:o=10;break e;case J:o=9;break e;case se:o=11;break e;case F:o=14;break e;case Me:o=16,l=null;break e}o=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return t=ct(o,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ya(e,t,a,l){return e=ct(7,e,l,t),e.lanes=a,e}function Fr(e,t,a){return e=ct(6,e,null,t),e.lanes=a,e}function lu(e){var t=ct(18,null,null,0);return t.stateNode=e,t}function Ir(e,t,a){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var nu=new WeakMap;function xt(e,t){if(typeof e=="object"&&e!==null){var a=nu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ls(t)},nu.set(e,t),t)}return{value:e,source:t,stack:ls(t)}}var ml=[],hl=0,si=null,tn=0,yt=[],St=0,sa=null,_t=1,Dt="";function Qt(e,t){ml[hl++]=tn,ml[hl++]=si,si=e,tn=t}function iu(e,t,a){yt[St++]=_t,yt[St++]=Dt,yt[St++]=sa,sa=e;var l=_t;e=Dt;var n=32-rt(l)-1;l&=~(1<<n),a+=1;var i=32-rt(t)+n;if(30<i){var o=n-n%5;i=(l&(1<<o)-1).toString(32),l>>=o,n-=o,_t=1<<32-rt(t)+n|a<<n|l,Dt=i+e}else _t=1<<i|a<<n|l,Dt=e}function Pr(e){e.return!==null&&(Qt(e,1),iu(e,1,0))}function eo(e){for(;e===si;)si=ml[--hl],ml[hl]=null,tn=ml[--hl],ml[hl]=null;for(;e===sa;)sa=yt[--St],yt[St]=null,Dt=yt[--St],yt[St]=null,_t=yt[--St],yt[St]=null}function ru(e,t){yt[St++]=_t,yt[St++]=Dt,yt[St++]=sa,_t=t.id,Dt=t.overflow,sa=e}var Xe=null,we=null,oe=!1,ua=null,Et=!1,to=Error(s(519));function fa(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw an(xt(t,e)),to}function ou(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[qe]=e,t[Fe]=l,a){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(a=0;a<zn.length;a++)ne(zn[a],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),ys(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),Es(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||zd(t.textContent,a)?(l.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),l.onScroll!=null&&ne("scroll",t),l.onScrollEnd!=null&&ne("scrollend",t),l.onClick!=null&&(t.onclick=qt),t=!0):t=!1,t||fa(e,!0)}function cu(e){for(Xe=e.return;Xe;)switch(Xe.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Xe=Xe.return}}function gl(e){if(e!==Xe)return!1;if(!oe)return cu(e),oe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||yc(e.type,e.memoizedProps)),a=!a),a&&we&&fa(e),cu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));we=Dd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));we=Dd(e)}else t===27?(t=we,za(e.type)?(e=zc,zc=null,we=e):we=t):we=Xe?jt(e.stateNode.nextSibling):null;return!0}function qa(){we=Xe=null,oe=!1}function ao(){var e=ua;return e!==null&&(at===null?at=e:at.push.apply(at,e),ua=null),e}function an(e){ua===null?ua=[e]:ua.push(e)}var lo=y(null),Xa=null,Vt=null;function da(e,t,a){X(lo,t._currentValue),t._currentValue=a}function Zt(e){e._currentValue=lo.current,U(lo)}function no(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function io(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var o=n.child;i=i.firstContext;e:for(;i!==null;){var d=i;i=n;for(var v=0;v<t.length;v++)if(d.context===t[v]){i.lanes|=a,d=i.alternate,d!==null&&(d.lanes|=a),no(i.return,a,e),l||(o=null);break e}i=d.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(s(341));o.lanes|=a,i=o.alternate,i!==null&&(i.lanes|=a),no(o,a,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function bl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var d=n.type;ot(n.pendingProps.value,o.value)||(e!==null?e.push(d):e=[d])}}else if(n===pe.current){if(o=n.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(On):e=[On])}n=n.return}e!==null&&io(t,e,a,l),t.flags|=262144}function ui(e){for(e=e.firstContext;e!==null;){if(!ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ga(e){Xa=e,Vt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ge(e){return su(Xa,e)}function fi(e,t){return Xa===null&&Ga(e),su(e,t)}function su(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Vt===null){if(e===null)throw Error(s(308));Vt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vt=Vt.next=t;return a}var am=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},lm=r.unstable_scheduleCallback,nm=r.unstable_NormalPriority,De={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ro(){return{controller:new am,data:new Map,refCount:0}}function ln(e){e.refCount--,e.refCount===0&&lm(nm,function(){e.controller.abort()})}var nn=null,oo=0,vl=0,xl=null;function im(e,t){if(nn===null){var a=nn=[];oo=0,vl=fc(),xl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return oo++,t.then(uu,uu),t}function uu(){if(--oo===0&&nn!==null){xl!==null&&(xl.status="fulfilled");var e=nn;nn=null,vl=0,xl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function rm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var fu=C.S;C.S=function(e,t){Wf=nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&im(e,t),fu!==null&&fu(e,t)};var Qa=y(null);function co(){var e=Qa.current;return e!==null?e:Ee.pooledCache}function di(e,t){t===null?X(Qa,Qa.current):X(Qa,t.pool)}function du(){var e=co();return e===null?null:{parent:De._currentValue,pool:e}}var yl=Error(s(460)),so=Error(s(474)),pi=Error(s(542)),mi={then:function(){}};function pu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function mu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(qt,qt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gu(e),e;default:if(typeof t.status=="string")t.then(qt,qt);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gu(e),e}throw Za=t,yl}}function Va(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Za=a,yl):a}}var Za=null;function hu(){if(Za===null)throw Error(s(459));var e=Za;return Za=null,e}function gu(e){if(e===yl||e===pi)throw Error(s(483))}var Sl=null,rn=0;function hi(e){var t=rn;return rn+=1,Sl===null&&(Sl=[]),mu(Sl,e,t)}function on(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function gi(e,t){throw t.$$typeof===B?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function bu(e){function t(S,x){if(e){var j=S.deletions;j===null?(S.deletions=[x],S.flags|=16):j.push(x)}}function a(S,x){if(!e)return null;for(;x!==null;)t(S,x),x=x.sibling;return null}function l(S){for(var x=new Map;S!==null;)S.key!==null?x.set(S.key,S):x.set(S.index,S),S=S.sibling;return x}function n(S,x){return S=Gt(S,x),S.index=0,S.sibling=null,S}function i(S,x,j){return S.index=j,e?(j=S.alternate,j!==null?(j=j.index,j<x?(S.flags|=67108866,x):j):(S.flags|=67108866,x)):(S.flags|=1048576,x)}function o(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function d(S,x,j,_){return x===null||x.tag!==6?(x=Fr(j,S.mode,_),x.return=S,x):(x=n(x,j),x.return=S,x)}function v(S,x,j,_){var K=j.type;return K===H?R(S,x,j.props.children,_,j.key):x!==null&&(x.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Me&&Va(K)===x.type)?(x=n(x,j.props),on(x,j),x.return=S,x):(x=ci(j.type,j.key,j.props,null,S.mode,_),on(x,j),x.return=S,x)}function N(S,x,j,_){return x===null||x.tag!==4||x.stateNode.containerInfo!==j.containerInfo||x.stateNode.implementation!==j.implementation?(x=Ir(j,S.mode,_),x.return=S,x):(x=n(x,j.children||[]),x.return=S,x)}function R(S,x,j,_,K){return x===null||x.tag!==7?(x=Ya(j,S.mode,_,K),x.return=S,x):(x=n(x,j),x.return=S,x)}function D(S,x,j){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Fr(""+x,S.mode,j),x.return=S,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case L:return j=ci(x.type,x.key,x.props,null,S.mode,j),on(j,x),j.return=S,j;case z:return x=Ir(x,S.mode,j),x.return=S,x;case Me:return x=Va(x),D(S,x,j)}if(_e(x)||Je(x))return x=Ya(x,S.mode,j,null),x.return=S,x;if(typeof x.then=="function")return D(S,hi(x),j);if(x.$$typeof===Z)return D(S,fi(S,x),j);gi(S,x)}return null}function A(S,x,j,_){var K=x!==null?x.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return K!==null?null:d(S,x,""+j,_);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case L:return j.key===K?v(S,x,j,_):null;case z:return j.key===K?N(S,x,j,_):null;case Me:return j=Va(j),A(S,x,j,_)}if(_e(j)||Je(j))return K!==null?null:R(S,x,j,_,null);if(typeof j.then=="function")return A(S,x,hi(j),_);if(j.$$typeof===Z)return A(S,x,fi(S,j),_);gi(S,j)}return null}function M(S,x,j,_,K){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return S=S.get(j)||null,d(x,S,""+_,K);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case L:return S=S.get(_.key===null?j:_.key)||null,v(x,S,_,K);case z:return S=S.get(_.key===null?j:_.key)||null,N(x,S,_,K);case Me:return _=Va(_),M(S,x,j,_,K)}if(_e(_)||Je(_))return S=S.get(j)||null,R(x,S,_,K,null);if(typeof _.then=="function")return M(S,x,j,hi(_),K);if(_.$$typeof===Z)return M(S,x,j,fi(x,_),K);gi(x,_)}return null}function G(S,x,j,_){for(var K=null,ue=null,V=x,te=x=0,re=null;V!==null&&te<j.length;te++){V.index>te?(re=V,V=null):re=V.sibling;var fe=A(S,V,j[te],_);if(fe===null){V===null&&(V=re);break}e&&V&&fe.alternate===null&&t(S,V),x=i(fe,x,te),ue===null?K=fe:ue.sibling=fe,ue=fe,V=re}if(te===j.length)return a(S,V),oe&&Qt(S,te),K;if(V===null){for(;te<j.length;te++)V=D(S,j[te],_),V!==null&&(x=i(V,x,te),ue===null?K=V:ue.sibling=V,ue=V);return oe&&Qt(S,te),K}for(V=l(V);te<j.length;te++)re=M(V,S,te,j[te],_),re!==null&&(e&&re.alternate!==null&&V.delete(re.key===null?te:re.key),x=i(re,x,te),ue===null?K=re:ue.sibling=re,ue=re);return e&&V.forEach(function(Oa){return t(S,Oa)}),oe&&Qt(S,te),K}function W(S,x,j,_){if(j==null)throw Error(s(151));for(var K=null,ue=null,V=x,te=x=0,re=null,fe=j.next();V!==null&&!fe.done;te++,fe=j.next()){V.index>te?(re=V,V=null):re=V.sibling;var Oa=A(S,V,fe.value,_);if(Oa===null){V===null&&(V=re);break}e&&V&&Oa.alternate===null&&t(S,V),x=i(Oa,x,te),ue===null?K=Oa:ue.sibling=Oa,ue=Oa,V=re}if(fe.done)return a(S,V),oe&&Qt(S,te),K;if(V===null){for(;!fe.done;te++,fe=j.next())fe=D(S,fe.value,_),fe!==null&&(x=i(fe,x,te),ue===null?K=fe:ue.sibling=fe,ue=fe);return oe&&Qt(S,te),K}for(V=l(V);!fe.done;te++,fe=j.next())fe=M(V,S,te,fe.value,_),fe!==null&&(e&&fe.alternate!==null&&V.delete(fe.key===null?te:fe.key),x=i(fe,x,te),ue===null?K=fe:ue.sibling=fe,ue=fe);return e&&V.forEach(function(bh){return t(S,bh)}),oe&&Qt(S,te),K}function xe(S,x,j,_){if(typeof j=="object"&&j!==null&&j.type===H&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case L:e:{for(var K=j.key;x!==null;){if(x.key===K){if(K=j.type,K===H){if(x.tag===7){a(S,x.sibling),_=n(x,j.props.children),_.return=S,S=_;break e}}else if(x.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Me&&Va(K)===x.type){a(S,x.sibling),_=n(x,j.props),on(_,j),_.return=S,S=_;break e}a(S,x);break}else t(S,x);x=x.sibling}j.type===H?(_=Ya(j.props.children,S.mode,_,j.key),_.return=S,S=_):(_=ci(j.type,j.key,j.props,null,S.mode,_),on(_,j),_.return=S,S=_)}return o(S);case z:e:{for(K=j.key;x!==null;){if(x.key===K)if(x.tag===4&&x.stateNode.containerInfo===j.containerInfo&&x.stateNode.implementation===j.implementation){a(S,x.sibling),_=n(x,j.children||[]),_.return=S,S=_;break e}else{a(S,x);break}else t(S,x);x=x.sibling}_=Ir(j,S.mode,_),_.return=S,S=_}return o(S);case Me:return j=Va(j),xe(S,x,j,_)}if(_e(j))return G(S,x,j,_);if(Je(j)){if(K=Je(j),typeof K!="function")throw Error(s(150));return j=K.call(j),W(S,x,j,_)}if(typeof j.then=="function")return xe(S,x,hi(j),_);if(j.$$typeof===Z)return xe(S,x,fi(S,j),_);gi(S,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,x!==null&&x.tag===6?(a(S,x.sibling),_=n(x,j),_.return=S,S=_):(a(S,x),_=Fr(j,S.mode,_),_.return=S,S=_),o(S)):a(S,x)}return function(S,x,j,_){try{rn=0;var K=xe(S,x,j,_);return Sl=null,K}catch(V){if(V===yl||V===pi)throw V;var ue=ct(29,V,null,S.mode);return ue.lanes=_,ue.return=S,ue}}}var Ja=bu(!0),vu=bu(!1),pa=!1;function uo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ha(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(de&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=oi(e),tu(e,null,a),t}return ri(e,l,t,a),oi(e)}function cn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ss(e,a)}}function po(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=o:i=i.next=o,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var mo=!1;function sn(){if(mo){var e=xl;if(e!==null)throw e}}function un(e,t,a,l){mo=!1;var n=e.updateQueue;pa=!1;var i=n.firstBaseUpdate,o=n.lastBaseUpdate,d=n.shared.pending;if(d!==null){n.shared.pending=null;var v=d,N=v.next;v.next=null,o===null?i=N:o.next=N,o=v;var R=e.alternate;R!==null&&(R=R.updateQueue,d=R.lastBaseUpdate,d!==o&&(d===null?R.firstBaseUpdate=N:d.next=N,R.lastBaseUpdate=v))}if(i!==null){var D=n.baseState;o=0,R=N=v=null,d=i;do{var A=d.lane&-536870913,M=A!==d.lane;if(M?(ie&A)===A:(l&A)===A){A!==0&&A===vl&&(mo=!0),R!==null&&(R=R.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var G=e,W=d;A=t;var xe=a;switch(W.tag){case 1:if(G=W.payload,typeof G=="function"){D=G.call(xe,D,A);break e}D=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=W.payload,A=typeof G=="function"?G.call(xe,D,A):G,A==null)break e;D=E({},D,A);break e;case 2:pa=!0}}A=d.callback,A!==null&&(e.flags|=64,M&&(e.flags|=8192),M=n.callbacks,M===null?n.callbacks=[A]:M.push(A))}else M={lane:A,tag:d.tag,payload:d.payload,callback:d.callback,next:null},R===null?(N=R=M,v=D):R=R.next=M,o|=A;if(d=d.next,d===null){if(d=n.shared.pending,d===null)break;M=d,d=M.next,M.next=null,n.lastBaseUpdate=M,n.shared.pending=null}}while(!0);R===null&&(v=D),n.baseState=v,n.firstBaseUpdate=N,n.lastBaseUpdate=R,i===null&&(n.shared.lanes=0),ya|=o,e.lanes=o,e.memoizedState=D}}function xu(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function yu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)xu(a[e],t)}var El=y(null),bi=y(0);function Su(e,t){e=ta,X(bi,e),X(El,t),ta=e|t.baseLanes}function ho(){X(bi,ta),X(El,El.current)}function go(){ta=bi.current,U(El),U(bi)}var st=y(null),wt=null;function ga(e){var t=e.alternate;X(Re,Re.current&1),X(st,e),wt===null&&(t===null||El.current!==null||t.memoizedState!==null)&&(wt=e)}function bo(e){X(Re,Re.current),X(st,e),wt===null&&(wt=e)}function Eu(e){e.tag===22?(X(Re,Re.current),X(st,e),wt===null&&(wt=e)):ba()}function ba(){X(Re,Re.current),X(st,st.current)}function ut(e){U(st),wt===e&&(wt=null),U(Re)}var Re=y(0);function vi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||wc(a)||jc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jt=0,ee=null,be=null,Ue=null,xi=!1,wl=!1,Ka=!1,yi=0,fn=0,jl=null,om=0;function Ae(){throw Error(s(321))}function vo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ot(e[a],t[a]))return!1;return!0}function xo(e,t,a,l,n,i){return Jt=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?rf:Do,Ka=!1,i=a(l,n),Ka=!1,wl&&(i=ju(t,a,l,n)),wu(e),i}function wu(e){C.H=mn;var t=be!==null&&be.next!==null;if(Jt=0,Ue=be=ee=null,xi=!1,fn=0,jl=null,t)throw Error(s(300));e===null||ke||(e=e.dependencies,e!==null&&ui(e)&&(ke=!0))}function ju(e,t,a,l){ee=e;var n=0;do{if(wl&&(jl=null),fn=0,wl=!1,25<=n)throw Error(s(301));if(n+=1,Ue=be=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}C.H=of,i=t(a,l)}while(wl);return i}function cm(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?dn(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(ee.flags|=1024),t}function yo(){var e=yi!==0;return yi=0,e}function So(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Eo(e){if(xi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}xi=!1}Jt=0,Ue=be=ee=null,wl=!1,fn=yi=0,jl=null}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ee.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Ce(){if(be===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Ue===null?ee.memoizedState:Ue.next;if(t!==null)Ue=t,be=e;else{if(e===null)throw ee.alternate===null?Error(s(467)):Error(s(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ue===null?ee.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Si(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dn(e){var t=fn;return fn+=1,jl===null&&(jl=[]),e=mu(jl,e,t),t=ee,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?rf:Do),e}function Ei(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return dn(e);if(e.$$typeof===Z)return Ge(e)}throw Error(s(438,String(e)))}function wo(e){var t=null,a=ee.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ee.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Si(),ee.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Rt;return t.index++,a}function Kt(e,t){return typeof t=="function"?t(e):t}function wi(e){var t=Ce();return jo(t,be,e)}function jo(e,t,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var o=n.next;n.next=i.next,i.next=o}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var d=o=null,v=null,N=t,R=!1;do{var D=N.lane&-536870913;if(D!==N.lane?(ie&D)===D:(Jt&D)===D){var A=N.revertLane;if(A===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),D===vl&&(R=!0);else if((Jt&A)===A){N=N.next,A===vl&&(R=!0);continue}else D={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},v===null?(d=v=D,o=i):v=v.next=D,ee.lanes|=A,ya|=A;D=N.action,Ka&&a(i,D),i=N.hasEagerState?N.eagerState:a(i,D)}else A={lane:D,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},v===null?(d=v=A,o=i):v=v.next=A,ee.lanes|=D,ya|=D;N=N.next}while(N!==null&&N!==t);if(v===null?o=i:v.next=d,!ot(i,e.memoizedState)&&(ke=!0,R&&(a=xl,a!==null)))throw a;e.memoizedState=i,e.baseState=o,e.baseQueue=v,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function zo(e){var t=Ce(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do i=e(i,o.action),o=o.next;while(o!==n);ot(i,t.memoizedState)||(ke=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function zu(e,t,a){var l=ee,n=Ce(),i=oe;if(i){if(a===void 0)throw Error(s(407));a=a()}else a=t();var o=!ot((be||n).memoizedState,a);if(o&&(n.memoizedState=a,ke=!0),n=n.queue,To(Tu.bind(null,l,n,e),[e]),n.getSnapshot!==t||o||Ue!==null&&Ue.memoizedState.tag&1){if(l.flags|=2048,zl(9,{destroy:void 0},Au.bind(null,l,n,a,t),null),Ee===null)throw Error(s(349));i||(Jt&127)!==0||Nu(l,t,a)}return a}function Nu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ee.updateQueue,t===null?(t=Si(),ee.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Au(e,t,a,l){t.value=a,t.getSnapshot=l,Mu(t)&&Ou(e)}function Tu(e,t,a){return a(function(){Mu(t)&&Ou(e)})}function Mu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ot(e,a)}catch{return!0}}function Ou(e){var t=La(e,2);t!==null&&lt(t,e,2)}function No(e){var t=$e();if(typeof e=="function"){var a=e;if(e=a(),Ka){ra(!0);try{a()}finally{ra(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},t}function Ru(e,t,a,l){return e.baseState=a,jo(e,be,typeof l=="function"?l:Kt)}function sm(e,t,a,l,n){if(Ni(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};C.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Cu(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Cu(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=C.T,o={};C.T=o;try{var d=a(n,l),v=C.S;v!==null&&v(o,d),_u(e,t,d)}catch(N){Ao(e,t,N)}finally{i!==null&&o.types!==null&&(i.types=o.types),C.T=i}}else try{i=a(n,l),_u(e,t,i)}catch(N){Ao(e,t,N)}}function _u(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Du(e,t,l)},function(l){return Ao(e,t,l)}):Du(e,t,a)}function Du(e,t,a){t.status="fulfilled",t.value=a,Uu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Cu(e,a)))}function Ao(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Uu(t),t=t.next;while(t!==l)}e.action=null}function Uu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ku(e,t){return t}function Hu(e,t){if(oe){var a=Ee.formState;if(a!==null){e:{var l=ee;if(oe){if(we){t:{for(var n=we,i=Et;n.nodeType!==8;){if(!i){n=null;break t}if(n=jt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){we=jt(n.nextSibling),l=n.data==="F!";break e}}fa(l)}l=!1}l&&(t=a[0])}}return a=$e(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ku,lastRenderedState:t},a.queue=l,a=af.bind(null,ee,l),l.dispatch=a,l=No(!1),i=_o.bind(null,ee,!1,l.queue),l=$e(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=sm.bind(null,ee,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Bu(e){var t=Ce();return Lu(t,be,e)}function Lu(e,t,a){if(t=jo(e,t,ku)[0],e=wi(Kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=dn(t)}catch(o){throw o===yl?pi:o}else l=t;t=Ce();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ee.flags|=2048,zl(9,{destroy:void 0},um.bind(null,n,a),null)),[l,i,e]}function um(e,t){e.action=t}function Yu(e){var t=Ce(),a=be;if(a!==null)return Lu(t,a,e);Ce(),t=t.memoizedState,a=Ce();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function zl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ee.updateQueue,t===null&&(t=Si(),ee.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function qu(){return Ce().memoizedState}function ji(e,t,a,l){var n=$e();ee.flags|=e,n.memoizedState=zl(1|t,{destroy:void 0},a,l===void 0?null:l)}function zi(e,t,a,l){var n=Ce();l=l===void 0?null:l;var i=n.memoizedState.inst;be!==null&&l!==null&&vo(l,be.memoizedState.deps)?n.memoizedState=zl(t,i,a,l):(ee.flags|=e,n.memoizedState=zl(1|t,i,a,l))}function Xu(e,t){ji(8390656,8,e,t)}function To(e,t){zi(2048,8,e,t)}function fm(e){ee.flags|=4;var t=ee.updateQueue;if(t===null)t=Si(),ee.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Gu(e){var t=Ce().memoizedState;return fm({ref:t,nextImpl:e}),function(){if((de&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Qu(e,t){return zi(4,2,e,t)}function Vu(e,t){return zi(4,4,e,t)}function Zu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ju(e,t,a){a=a!=null?a.concat([e]):null,zi(4,4,Zu.bind(null,t,e),a)}function Mo(){}function Ku(e,t){var a=Ce();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&vo(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Wu(e,t){var a=Ce();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&vo(t,l[1]))return l[0];if(l=e(),Ka){ra(!0);try{e()}finally{ra(!1)}}return a.memoizedState=[l,t],l}function Oo(e,t,a){return a===void 0||(Jt&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Ff(),ee.lanes|=e,ya|=e,a)}function $u(e,t,a,l){return ot(a,t)?a:El.current!==null?(e=Oo(e,a,l),ot(e,t)||(ke=!0),e):(Jt&42)===0||(Jt&1073741824)!==0&&(ie&261930)===0?(ke=!0,e.memoizedState=a):(e=Ff(),ee.lanes|=e,ya|=e,t)}function Fu(e,t,a,l,n){var i=q.p;q.p=i!==0&&8>i?i:8;var o=C.T,d={};C.T=d,_o(e,!1,t,a);try{var v=n(),N=C.S;if(N!==null&&N(d,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var R=rm(v,l);pn(e,t,R,pt(e))}else pn(e,t,l,pt(e))}catch(D){pn(e,t,{then:function(){},status:"rejected",reason:D},pt())}finally{q.p=i,o!==null&&d.types!==null&&(o.types=d.types),C.T=o}}function dm(){}function Ro(e,t,a,l){if(e.tag!==5)throw Error(s(476));var n=Iu(e).queue;Fu(e,n,t,$,a===null?dm:function(){return Pu(e),a(l)})}function Iu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:$},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Pu(e){var t=Iu(e);t.next===null&&(t=e.alternate.memoizedState),pn(e,t.next.queue,{},pt())}function Co(){return Ge(On)}function ef(){return Ce().memoizedState}function tf(){return Ce().memoizedState}function pm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=pt();e=ma(a);var l=ha(t,e,a);l!==null&&(lt(l,t,a),cn(l,t,a)),t={cache:ro()},e.payload=t;return}t=t.return}}function mm(e,t,a){var l=pt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ni(e)?lf(t,a):(a=Wr(e,t,a,l),a!==null&&(lt(a,e,l),nf(a,t,l)))}function af(e,t,a){var l=pt();pn(e,t,a,l)}function pn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ni(e))lf(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,d=i(o,a);if(n.hasEagerState=!0,n.eagerState=d,ot(d,o))return ri(e,t,n,0),Ee===null&&ii(),!1}catch{}if(a=Wr(e,t,n,l),a!==null)return lt(a,e,l),nf(a,t,l),!0}return!1}function _o(e,t,a,l){if(l={lane:2,revertLane:fc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ni(e)){if(t)throw Error(s(479))}else t=Wr(e,a,l,2),t!==null&&lt(t,e,2)}function Ni(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function lf(e,t){wl=xi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function nf(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ss(e,a)}}var mn={readContext:Ge,use:Ei,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useLayoutEffect:Ae,useInsertionEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useSyncExternalStore:Ae,useId:Ae,useHostTransitionStatus:Ae,useFormState:Ae,useActionState:Ae,useOptimistic:Ae,useMemoCache:Ae,useCacheRefresh:Ae};mn.useEffectEvent=Ae;var rf={readContext:Ge,use:Ei,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:Xu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ji(4194308,4,Zu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ji(4194308,4,e,t)},useInsertionEffect:function(e,t){ji(4,2,e,t)},useMemo:function(e,t){var a=$e();t=t===void 0?null:t;var l=e();if(Ka){ra(!0);try{e()}finally{ra(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=$e();if(a!==void 0){var n=a(t);if(Ka){ra(!0);try{a(t)}finally{ra(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=mm.bind(null,ee,e),[l.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:function(e){e=No(e);var t=e.queue,a=af.bind(null,ee,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Mo,useDeferredValue:function(e,t){var a=$e();return Oo(a,e,t)},useTransition:function(){var e=No(!1);return e=Fu.bind(null,ee,e.queue,!0,!1),$e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ee,n=$e();if(oe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),Ee===null)throw Error(s(349));(ie&127)!==0||Nu(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Xu(Tu.bind(null,l,i,e),[e]),l.flags|=2048,zl(9,{destroy:void 0},Au.bind(null,l,i,a,t),null),a},useId:function(){var e=$e(),t=Ee.identifierPrefix;if(oe){var a=Dt,l=_t;a=(l&~(1<<32-rt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=yi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=om++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Co,useFormState:Hu,useActionState:Hu,useOptimistic:function(e){var t=$e();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=_o.bind(null,ee,!0,a),a.dispatch=t,[e,t]},useMemoCache:wo,useCacheRefresh:function(){return $e().memoizedState=pm.bind(null,ee)},useEffectEvent:function(e){var t=$e(),a={impl:e};return t.memoizedState=a,function(){if((de&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Do={readContext:Ge,use:Ei,useCallback:Ku,useContext:Ge,useEffect:To,useImperativeHandle:Ju,useInsertionEffect:Qu,useLayoutEffect:Vu,useMemo:Wu,useReducer:wi,useRef:qu,useState:function(){return wi(Kt)},useDebugValue:Mo,useDeferredValue:function(e,t){var a=Ce();return $u(a,be.memoizedState,e,t)},useTransition:function(){var e=wi(Kt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:dn(e),t]},useSyncExternalStore:zu,useId:ef,useHostTransitionStatus:Co,useFormState:Bu,useActionState:Bu,useOptimistic:function(e,t){var a=Ce();return Ru(a,be,e,t)},useMemoCache:wo,useCacheRefresh:tf};Do.useEffectEvent=Gu;var of={readContext:Ge,use:Ei,useCallback:Ku,useContext:Ge,useEffect:To,useImperativeHandle:Ju,useInsertionEffect:Qu,useLayoutEffect:Vu,useMemo:Wu,useReducer:zo,useRef:qu,useState:function(){return zo(Kt)},useDebugValue:Mo,useDeferredValue:function(e,t){var a=Ce();return be===null?Oo(a,e,t):$u(a,be.memoizedState,e,t)},useTransition:function(){var e=zo(Kt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:dn(e),t]},useSyncExternalStore:zu,useId:ef,useHostTransitionStatus:Co,useFormState:Yu,useActionState:Yu,useOptimistic:function(e,t){var a=Ce();return be!==null?Ru(a,be,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:wo,useCacheRefresh:tf};of.useEffectEvent=Gu;function Uo(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ko={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=pt(),n=ma(l);n.payload=t,a!=null&&(n.callback=a),t=ha(e,n,l),t!==null&&(lt(t,e,l),cn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=pt(),n=ma(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ha(e,n,l),t!==null&&(lt(t,e,l),cn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=pt(),l=ma(a);l.tag=2,t!=null&&(l.callback=t),t=ha(e,l,a),t!==null&&(lt(t,e,a),cn(t,e,a))}};function cf(e,t,a,l,n,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,o):t.prototype&&t.prototype.isPureReactComponent?!Pl(a,l)||!Pl(n,i):!0}function sf(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&ko.enqueueReplaceState(t,t.state,null)}function Wa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function uf(e){ni(e)}function ff(e){console.error(e)}function df(e){ni(e)}function Ai(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function pf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Ho(e,t,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){Ai(e,t)},a}function mf(e){return e=ma(e),e.tag=3,e}function hf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){pf(t,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){pf(t,a,l),typeof n!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function hm(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&bl(t,a,n,!0),a=st.current,a!==null){switch(a.tag){case 31:case 13:return wt===null?Li():a.alternate===null&&Te===0&&(Te=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===mi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),cc(e,l,n)),!1;case 22:return a.flags|=65536,l===mi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),cc(e,l,n)),!1}throw Error(s(435,a.tag))}return cc(e,l,n),Li(),!1}if(oe)return t=st.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==to&&(e=Error(s(422),{cause:l}),an(xt(e,a)))):(l!==to&&(t=Error(s(423),{cause:l}),an(xt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=xt(l,a),n=Ho(e.stateNode,l,n),po(e,n),Te!==4&&(Te=2)),!1;var i=Error(s(520),{cause:l});if(i=xt(i,a),En===null?En=[i]:En.push(i),Te!==4&&(Te=2),t===null)return!0;l=xt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Ho(a.stateNode,l,e),po(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Sa===null||!Sa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=mf(n),hf(n,e,a,l),po(a,n),!1}a=a.return}while(a!==null);return!1}var Bo=Error(s(461)),ke=!1;function Qe(e,t,a,l){t.child=e===null?vu(t,null,a,l):Ja(t,e.child,a,l)}function gf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var o={};for(var d in l)d!=="ref"&&(o[d]=l[d])}else o=l;return Ga(t),l=xo(e,t,a,o,i,n),d=yo(),e!==null&&!ke?(So(e,t,n),Wt(e,t,n)):(oe&&d&&Pr(t),t.flags|=1,Qe(e,t,l,n),t.child)}function bf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!$r(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,vf(e,t,i,l,n)):(e=ci(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Zo(e,n)){var o=i.memoizedProps;if(a=a.compare,a=a!==null?a:Pl,a(o,l)&&e.ref===t.ref)return Wt(e,t,n)}return t.flags|=1,e=Gt(i,l),e.ref=t.ref,e.return=t,t.child=e}function vf(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Pl(i,l)&&e.ref===t.ref)if(ke=!1,t.pendingProps=l=i,Zo(e,n))(e.flags&131072)!==0&&(ke=!0);else return t.lanes=e.lanes,Wt(e,t,n)}return Lo(e,t,a,l,n)}function xf(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return yf(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&di(t,i!==null?i.cachePool:null),i!==null?Su(t,i):ho(),Eu(t);else return l=t.lanes=536870912,yf(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(di(t,i.cachePool),Su(t,i),ba(),t.memoizedState=null):(e!==null&&di(t,null),ho(),ba());return Qe(e,t,n,a),t.child}function hn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function yf(e,t,a,l,n){var i=co();return i=i===null?null:{parent:De._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&di(t,null),ho(),Eu(t),e!==null&&bl(e,t,l,!0),t.childLanes=n,null}function Ti(e,t){return t=Oi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Sf(e,t,a){return Ja(t,e.child,null,a),e=Ti(t,t.pendingProps),e.flags|=2,ut(t),t.memoizedState=null,e}function gm(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(oe){if(l.mode==="hidden")return e=Ti(t,l),t.lanes=536870912,hn(null,e);if(bo(t),(e=we)?(e=_d(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa!==null?{id:_t,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},a=lu(e),a.return=t,t.child=a,Xe=t,we=null)):e=null,e===null)throw fa(t);return t.lanes=536870912,null}return Ti(t,l)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(bo(t),n)if(t.flags&256)t.flags&=-257,t=Sf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(ke||bl(e,t,a,!1),n=(a&e.childLanes)!==0,ke||n){if(l=Ee,l!==null&&(o=us(l,a),o!==0&&o!==i.retryLane))throw i.retryLane=o,La(e,o),lt(l,e,o),Bo;Li(),t=Sf(e,t,a)}else e=i.treeContext,we=jt(o.nextSibling),Xe=t,oe=!0,ua=null,Et=!1,e!==null&&ru(t,e),t=Ti(t,l),t.flags|=4096;return t}return e=Gt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Mi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Lo(e,t,a,l,n){return Ga(t),a=xo(e,t,a,l,void 0,n),l=yo(),e!==null&&!ke?(So(e,t,n),Wt(e,t,n)):(oe&&l&&Pr(t),t.flags|=1,Qe(e,t,a,n),t.child)}function Ef(e,t,a,l,n,i){return Ga(t),t.updateQueue=null,a=ju(t,l,a,n),wu(e),l=yo(),e!==null&&!ke?(So(e,t,i),Wt(e,t,i)):(oe&&l&&Pr(t),t.flags|=1,Qe(e,t,a,i),t.child)}function wf(e,t,a,l,n){if(Ga(t),t.stateNode===null){var i=pl,o=a.contextType;typeof o=="object"&&o!==null&&(i=Ge(o)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ko,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},uo(t),o=a.contextType,i.context=typeof o=="object"&&o!==null?Ge(o):pl,i.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Uo(t,a,o,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&ko.enqueueReplaceState(i,i.state,null),un(t,l,i,n),sn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var d=t.memoizedProps,v=Wa(a,d);i.props=v;var N=i.context,R=a.contextType;o=pl,typeof R=="object"&&R!==null&&(o=Ge(R));var D=a.getDerivedStateFromProps;R=typeof D=="function"||typeof i.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,R||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d||N!==o)&&sf(t,i,l,o),pa=!1;var A=t.memoizedState;i.state=A,un(t,l,i,n),sn(),N=t.memoizedState,d||A!==N||pa?(typeof D=="function"&&(Uo(t,a,D,l),N=t.memoizedState),(v=pa||cf(t,a,v,l,A,N,o))?(R||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=N),i.props=l,i.state=N,i.context=o,l=v):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,fo(e,t),o=t.memoizedProps,R=Wa(a,o),i.props=R,D=t.pendingProps,A=i.context,N=a.contextType,v=pl,typeof N=="object"&&N!==null&&(v=Ge(N)),d=a.getDerivedStateFromProps,(N=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==D||A!==v)&&sf(t,i,l,v),pa=!1,A=t.memoizedState,i.state=A,un(t,l,i,n),sn();var M=t.memoizedState;o!==D||A!==M||pa||e!==null&&e.dependencies!==null&&ui(e.dependencies)?(typeof d=="function"&&(Uo(t,a,d,l),M=t.memoizedState),(R=pa||cf(t,a,R,l,A,M,v)||e!==null&&e.dependencies!==null&&ui(e.dependencies))?(N||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,M,v),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,M,v)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=M),i.props=l,i.state=M,i.context=v,l=R):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Mi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Ja(t,e.child,null,n),t.child=Ja(t,null,a,n)):Qe(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Wt(e,t,n),e}function jf(e,t,a,l){return qa(),t.flags|=256,Qe(e,t,a,l),t.child}var Yo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qo(e){return{baseLanes:e,cachePool:du()}}function Xo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=dt),e}function zf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(Re.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(n?ga(t):ba(),(e=we)?(e=_d(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa!==null?{id:_t,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},a=lu(e),a.return=t,t.child=a,Xe=t,we=null)):e=null,e===null)throw fa(t);return jc(e)?t.lanes=32:t.lanes=536870912,null}var d=l.children;return l=l.fallback,n?(ba(),n=t.mode,d=Oi({mode:"hidden",children:d},n),l=Ya(l,n,a,null),d.return=t,l.return=t,d.sibling=l,t.child=d,l=t.child,l.memoizedState=qo(a),l.childLanes=Xo(e,o,a),t.memoizedState=Yo,hn(null,l)):(ga(t),Go(t,d))}var v=e.memoizedState;if(v!==null&&(d=v.dehydrated,d!==null)){if(i)t.flags&256?(ga(t),t.flags&=-257,t=Qo(e,t,a)):t.memoizedState!==null?(ba(),t.child=e.child,t.flags|=128,t=null):(ba(),d=l.fallback,n=t.mode,l=Oi({mode:"visible",children:l.children},n),d=Ya(d,n,a,null),d.flags|=2,l.return=t,d.return=t,l.sibling=d,t.child=l,Ja(t,e.child,null,a),l=t.child,l.memoizedState=qo(a),l.childLanes=Xo(e,o,a),t.memoizedState=Yo,t=hn(null,l));else if(ga(t),jc(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var N=o.dgst;o=N,l=Error(s(419)),l.stack="",l.digest=o,an({value:l,source:null,stack:null}),t=Qo(e,t,a)}else if(ke||bl(e,t,a,!1),o=(a&e.childLanes)!==0,ke||o){if(o=Ee,o!==null&&(l=us(o,a),l!==0&&l!==v.retryLane))throw v.retryLane=l,La(e,l),lt(o,e,l),Bo;wc(d)||Li(),t=Qo(e,t,a)}else wc(d)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,we=jt(d.nextSibling),Xe=t,oe=!0,ua=null,Et=!1,e!==null&&ru(t,e),t=Go(t,l.children),t.flags|=4096);return t}return n?(ba(),d=l.fallback,n=t.mode,v=e.child,N=v.sibling,l=Gt(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,N!==null?d=Gt(N,d):(d=Ya(d,n,a,null),d.flags|=2),d.return=t,l.return=t,l.sibling=d,t.child=l,hn(null,l),l=t.child,d=e.child.memoizedState,d===null?d=qo(a):(n=d.cachePool,n!==null?(v=De._currentValue,n=n.parent!==v?{parent:v,pool:v}:n):n=du(),d={baseLanes:d.baseLanes|a,cachePool:n}),l.memoizedState=d,l.childLanes=Xo(e,o,a),t.memoizedState=Yo,hn(e.child,l)):(ga(t),a=e.child,e=a.sibling,a=Gt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Go(e,t){return t=Oi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Oi(e,t){return e=ct(22,e,null,t),e.lanes=0,e}function Qo(e,t,a){return Ja(t,e.child,null,a),e=Go(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),no(e.return,t,a)}function Vo(e,t,a,l,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=n,o.treeForkCount=i)}function Af(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var o=Re.current,d=(o&2)!==0;if(d?(o=o&1|2,t.flags|=128):o&=1,X(Re,o),Qe(e,t,l,a),l=oe?tn:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nf(e,a,t);else if(e.tag===19)Nf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&vi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Vo(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&vi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Vo(t,!0,a,null,i,l);break;case"together":Vo(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Wt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ya|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(bl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=Gt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Gt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Zo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ui(e)))}function bm(e,t,a){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),da(t,De,e.memoizedState.cache),qa();break;case 27:case 5:Yl(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:da(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,bo(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ga(t),t.flags|=128,null):(a&t.child.childLanes)!==0?zf(e,t,a):(ga(t),e=Wt(e,t,a),e!==null?e.sibling:null);ga(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(bl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Af(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),X(Re,Re.current),l)break;return null;case 22:return t.lanes=0,xf(e,t,a,t.pendingProps);case 24:da(t,De,e.memoizedState.cache)}return Wt(e,t,a)}function Tf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ke=!0;else{if(!Zo(e,a)&&(t.flags&128)===0)return ke=!1,bm(e,t,a);ke=(e.flags&131072)!==0}else ke=!1,oe&&(t.flags&1048576)!==0&&iu(t,tn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Va(t.elementType),t.type=e,typeof e=="function")$r(e)?(l=Wa(e,l),t.tag=1,t=wf(null,t,e,l,a)):(t.tag=0,t=Lo(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===se){t.tag=11,t=gf(null,t,e,l,a);break e}else if(n===F){t.tag=14,t=bf(null,t,e,l,a);break e}}throw t=ht(e)||e,Error(s(306,t,""))}}return t;case 0:return Lo(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Wa(l,t.pendingProps),wf(e,t,l,n,a);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(s(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,fo(e,t),un(t,l,null,a);var o=t.memoizedState;if(l=o.cache,da(t,De,l),l!==i.cache&&io(t,[De],a,!0),sn(),l=o.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=jf(e,t,l,a);break e}else if(l!==n){n=xt(Error(s(424)),t),an(n),t=jf(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,we=jt(e.firstChild),Xe=t,oe=!0,ua=null,Et=!0,a=vu(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(qa(),l===n){t=Wt(e,t,a);break e}Qe(e,t,l,a)}t=t.child}return t;case 26:return Mi(e,t),e===null?(a=Ld(t.type,null,t.pendingProps,null))?t.memoizedState=a:oe||(a=t.type,e=t.pendingProps,l=Zi(ae.current).createElement(a),l[qe]=t,l[Fe]=e,Ve(l,a,e),Le(l),t.stateNode=l):t.memoizedState=Ld(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Yl(t),e===null&&oe&&(l=t.stateNode=kd(t.type,t.pendingProps,ae.current),Xe=t,Et=!0,n=we,za(t.type)?(zc=n,we=jt(l.firstChild)):we=n),Qe(e,t,t.pendingProps.children,a),Mi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((n=l=we)&&(l=Jm(l,t.type,t.pendingProps,Et),l!==null?(t.stateNode=l,Xe=t,we=jt(l.firstChild),Et=!1,n=!0):n=!1),n||fa(t)),Yl(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,yc(n,i)?l=null:o!==null&&yc(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=xo(e,t,cm,null,null,a),On._currentValue=n),Mi(e,t),Qe(e,t,l,a),t.child;case 6:return e===null&&oe&&((e=a=we)&&(a=Km(a,t.pendingProps,Et),a!==null?(t.stateNode=a,Xe=t,we=null,e=!0):e=!1),e||fa(t)),null;case 13:return zf(e,t,a);case 4:return We(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ja(t,null,l,a):Qe(e,t,l,a),t.child;case 11:return gf(e,t,t.type,t.pendingProps,a);case 7:return Qe(e,t,t.pendingProps,a),t.child;case 8:return Qe(e,t,t.pendingProps.children,a),t.child;case 12:return Qe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,da(t,t.type,l.value),Qe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ga(t),n=Ge(n),l=l(n),t.flags|=1,Qe(e,t,l,a),t.child;case 14:return bf(e,t,t.type,t.pendingProps,a);case 15:return vf(e,t,t.type,t.pendingProps,a);case 19:return Af(e,t,a);case 31:return gm(e,t,a);case 22:return xf(e,t,a,t.pendingProps);case 24:return Ga(t),l=Ge(De),e===null?(n=co(),n===null&&(n=Ee,i=ro(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},uo(t),da(t,De,n)):((e.lanes&a)!==0&&(fo(e,t),un(t,null,null,a),sn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),da(t,De,l)):(l=i.cache,da(t,De,l),l!==n.cache&&io(t,[De],a,!0))),Qe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function $t(e){e.flags|=4}function Jo(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(td())e.flags|=8192;else throw Za=mi,so}else e.flags&=-16777217}function Mf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Qd(t))if(td())e.flags|=8192;else throw Za=mi,so}function Ri(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?os():536870912,e.lanes|=t,Ml|=t)}function gn(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function vm(e,t,a){var l=t.pendingProps;switch(eo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return je(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Zt(De),Oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(gl(t)?$t(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ao())),je(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?($t(t),i!==null?(je(t),Mf(t,i)):(je(t),Jo(t,n,null,l,a))):i?i!==e.memoizedState?($t(t),je(t),Mf(t,i)):(je(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&$t(t),je(t),Jo(t,n,e,l,a)),null;case 27:if(Xn(t),a=ae.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&$t(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return je(t),null}e=Q.current,gl(t)?ou(t):(e=kd(n,l,a),t.stateNode=e,$t(t))}return je(t),null;case 5:if(Xn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&$t(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return je(t),null}if(i=Q.current,gl(t))ou(t);else{var o=Zi(ae.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?o.createElement(n,{is:l.is}):o.createElement(n)}}i[qe]=t,i[Fe]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(Ve(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&$t(t)}}return je(t),Jo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&$t(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(e=ae.current,gl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Xe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[qe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||zd(e.nodeValue,a)),e||fa(t,!0)}else e=Zi(e).createTextNode(l),e[qe]=t,t.stateNode=e}return je(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=gl(t),a!==null){if(e===null){if(!l)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[qe]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),e=!1}else a=ao(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ut(t),t):(ut(t),null);if((t.flags&128)!==0)throw Error(s(558))}return je(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=gl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(s(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[qe]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),n=!1}else n=ao(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ut(t),t):(ut(t),null)}return ut(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ri(t,t.updateQueue),je(t),null);case 4:return Oe(),e===null&&hc(t.stateNode.containerInfo),je(t),null;case 10:return Zt(t.type),je(t),null;case 19:if(U(Re),l=t.memoizedState,l===null)return je(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)gn(l,!1);else{if(Te!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=vi(e),i!==null){for(t.flags|=128,gn(l,!1),e=i.updateQueue,t.updateQueue=e,Ri(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)au(a,e),a=a.sibling;return X(Re,Re.current&1|2),oe&&Qt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&nt()>ki&&(t.flags|=128,n=!0,gn(l,!1),t.lanes=4194304)}else{if(!n)if(e=vi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ri(t,e),gn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!oe)return je(t),null}else 2*nt()-l.renderingStartTime>ki&&a!==536870912&&(t.flags|=128,n=!0,gn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=nt(),e.sibling=null,a=Re.current,X(Re,n?a&1|2:a&1),oe&&Qt(t,l.treeForkCount),e):(je(t),null);case 22:case 23:return ut(t),go(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),a=t.updateQueue,a!==null&&Ri(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&U(Qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Zt(De),je(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function xm(e,t){switch(eo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zt(De),Oe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Xn(t),null;case 31:if(t.memoizedState!==null){if(ut(t),t.alternate===null)throw Error(s(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ut(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(Re),null;case 4:return Oe(),null;case 10:return Zt(t.type),null;case 22:case 23:return ut(t),go(),e!==null&&U(Qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zt(De),null;case 25:return null;default:return null}}function Of(e,t){switch(eo(t),t.tag){case 3:Zt(De),Oe();break;case 26:case 27:case 5:Xn(t);break;case 4:Oe();break;case 31:t.memoizedState!==null&&ut(t);break;case 13:ut(t);break;case 19:U(Re);break;case 10:Zt(t.type);break;case 22:case 23:ut(t),go(),e!==null&&U(Qa);break;case 24:Zt(De)}}function bn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,o=a.inst;l=i(),o.destroy=l}a=a.next}while(a!==n)}}catch(d){he(t,t.return,d)}}function va(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var o=l.inst,d=o.destroy;if(d!==void 0){o.destroy=void 0,n=t;var v=a,N=d;try{N()}catch(R){he(n,v,R)}}}l=l.next}while(l!==i)}}catch(R){he(t,t.return,R)}}function Rf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{yu(t,a)}catch(l){he(e,e.return,l)}}}function Cf(e,t,a){a.props=Wa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){he(e,t,l)}}function vn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){he(e,t,n)}}function Ut(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){he(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){he(e,t,n)}else a.current=null}function _f(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){he(e,e.return,n)}}function Ko(e,t,a){try{var l=e.stateNode;qm(l,e.type,a,t),l[Fe]=t}catch(n){he(e,e.return,n)}}function Df(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&za(e.type)||e.tag===4}function Wo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Df(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $o(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=qt));else if(l!==4&&(l===27&&za(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for($o(e,t,a),e=e.sibling;e!==null;)$o(e,t,a),e=e.sibling}function Ci(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ci(e,t,a),e=e.sibling;e!==null;)Ci(e,t,a),e=e.sibling}function Uf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ve(t,l,a),t[qe]=e,t[Fe]=a}catch(i){he(e,e.return,i)}}var Ft=!1,He=!1,Fo=!1,kf=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function ym(e,t){if(e=e.containerInfo,vc=Pi,e=Js(e),Gr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var o=0,d=-1,v=-1,N=0,R=0,D=e,A=null;t:for(;;){for(var M;D!==a||n!==0&&D.nodeType!==3||(d=o+n),D!==i||l!==0&&D.nodeType!==3||(v=o+l),D.nodeType===3&&(o+=D.nodeValue.length),(M=D.firstChild)!==null;)A=D,D=M;for(;;){if(D===e)break t;if(A===a&&++N===n&&(d=o),A===i&&++R===l&&(v=o),(M=D.nextSibling)!==null)break;D=A,A=D.parentNode}D=M}a=d===-1||v===-1?null:{start:d,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(xc={focusedElem:e,selectionRange:a},Pi=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var G=Wa(a.type,n);e=l.getSnapshotBeforeUpdate(G,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(W){he(a,a.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Ec(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ec(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function Hf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Pt(e,a),l&4&&bn(5,a);break;case 1:if(Pt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){he(a,a.return,o)}else{var n=Wa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){he(a,a.return,o)}}l&64&&Rf(a),l&512&&vn(a,a.return);break;case 3:if(Pt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{yu(e,t)}catch(o){he(a,a.return,o)}}break;case 27:t===null&&l&4&&Uf(a);case 26:case 5:Pt(e,a),t===null&&l&4&&_f(a),l&512&&vn(a,a.return);break;case 12:Pt(e,a);break;case 31:Pt(e,a),l&4&&Yf(e,a);break;case 13:Pt(e,a),l&4&&qf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Mm.bind(null,a),Wm(e,a))));break;case 22:if(l=a.memoizedState!==null||Ft,!l){t=t!==null&&t.memoizedState!==null||He,n=Ft;var i=He;Ft=l,(He=t)&&!i?ea(e,a,(a.subtreeFlags&8772)!==0):Pt(e,a),Ft=n,He=i}break;case 30:break;default:Pt(e,a)}}function Bf(e){var t=e.alternate;t!==null&&(e.alternate=null,Bf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Nr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,Pe=!1;function It(e,t,a){for(a=a.child;a!==null;)Lf(e,t,a),a=a.sibling}function Lf(e,t,a){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(ql,a)}catch{}switch(a.tag){case 26:He||Ut(a,t),It(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||Ut(a,t);var l=ze,n=Pe;za(a.type)&&(ze=a.stateNode,Pe=!1),It(e,t,a),An(a.stateNode),ze=l,Pe=n;break;case 5:He||Ut(a,t);case 6:if(l=ze,n=Pe,ze=null,It(e,t,a),ze=l,Pe=n,ze!==null)if(Pe)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(a.stateNode)}catch(i){he(a,t,i)}else try{ze.removeChild(a.stateNode)}catch(i){he(a,t,i)}break;case 18:ze!==null&&(Pe?(e=ze,Rd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Hl(e)):Rd(ze,a.stateNode));break;case 4:l=ze,n=Pe,ze=a.stateNode.containerInfo,Pe=!0,It(e,t,a),ze=l,Pe=n;break;case 0:case 11:case 14:case 15:va(2,a,t),He||va(4,a,t),It(e,t,a);break;case 1:He||(Ut(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Cf(a,t,l)),It(e,t,a);break;case 21:It(e,t,a);break;case 22:He=(l=He)||a.memoizedState!==null,It(e,t,a),He=l;break;default:It(e,t,a)}}function Yf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hl(e)}catch(a){he(t,t.return,a)}}}function qf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hl(e)}catch(a){he(t,t.return,a)}}function Sm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new kf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new kf),t;default:throw Error(s(435,e.tag))}}function _i(e,t){var a=Sm(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Om.bind(null,e,l);l.then(n,n)}})}function et(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,o=t,d=o;e:for(;d!==null;){switch(d.tag){case 27:if(za(d.type)){ze=d.stateNode,Pe=!1;break e}break;case 5:ze=d.stateNode,Pe=!1;break e;case 3:case 4:ze=d.stateNode.containerInfo,Pe=!0;break e}d=d.return}if(ze===null)throw Error(s(160));Lf(i,o,n),ze=null,Pe=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Xf(t,e),t=t.sibling}var Tt=null;function Xf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:et(t,e),tt(e),l&4&&(va(3,e,e.return),bn(3,e),va(5,e,e.return));break;case 1:et(t,e),tt(e),l&512&&(He||a===null||Ut(a,a.return)),l&64&&Ft&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Tt;if(et(t,e),tt(e),l&512&&(He||a===null||Ut(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ql]||i[qe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ve(i,l,a),i[qe]=e,Le(i),l=i;break e;case"link":var o=Xd("link","href",n).get(l+(a.href||""));if(o){for(var d=0;d<o.length;d++)if(i=o[d],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(d,1);break t}}i=n.createElement(l),Ve(i,l,a),n.head.appendChild(i);break;case"meta":if(o=Xd("meta","content",n).get(l+(a.content||""))){for(d=0;d<o.length;d++)if(i=o[d],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(d,1);break t}}i=n.createElement(l),Ve(i,l,a),n.head.appendChild(i);break;default:throw Error(s(468,l))}i[qe]=e,Le(i),l=i}e.stateNode=l}else Gd(n,e.type,e.stateNode);else e.stateNode=qd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Gd(n,e.type,e.stateNode):qd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Ko(e,e.memoizedProps,a.memoizedProps)}break;case 27:et(t,e),tt(e),l&512&&(He||a===null||Ut(a,a.return)),a!==null&&l&4&&Ko(e,e.memoizedProps,a.memoizedProps);break;case 5:if(et(t,e),tt(e),l&512&&(He||a===null||Ut(a,a.return)),e.flags&32){n=e.stateNode;try{rl(n,"")}catch(G){he(e,e.return,G)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Ko(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Fo=!0);break;case 6:if(et(t,e),tt(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(G){he(e,e.return,G)}}break;case 3:if(Wi=null,n=Tt,Tt=Ji(t.containerInfo),et(t,e),Tt=n,tt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Hl(t.containerInfo)}catch(G){he(e,e.return,G)}Fo&&(Fo=!1,Gf(e));break;case 4:l=Tt,Tt=Ji(e.stateNode.containerInfo),et(t,e),tt(e),Tt=l;break;case 12:et(t,e),tt(e);break;case 31:et(t,e),tt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,_i(e,l)));break;case 13:et(t,e),tt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ui=nt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,_i(e,l)));break;case 22:n=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,N=Ft,R=He;if(Ft=N||n,He=R||v,et(t,e),He=R,Ft=N,tt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||v||Ft||He||$a(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(i=v.stateNode,n)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=v.stateNode;var D=v.memoizedProps.style,A=D!=null&&D.hasOwnProperty("display")?D.display:null;d.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(G){he(v,v.return,G)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=n?"":v.memoizedProps}catch(G){he(v,v.return,G)}}}else if(t.tag===18){if(a===null){v=t;try{var M=v.stateNode;n?Cd(M,!0):Cd(v.stateNode,!1)}catch(G){he(v,v.return,G)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,_i(e,a))));break;case 19:et(t,e),tt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,_i(e,l)));break;case 30:break;case 21:break;default:et(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Df(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var n=a.stateNode,i=Wo(e);Ci(e,i,n);break;case 5:var o=a.stateNode;a.flags&32&&(rl(o,""),a.flags&=-33);var d=Wo(e);Ci(e,d,o);break;case 3:case 4:var v=a.stateNode.containerInfo,N=Wo(e);$o(e,N,v);break;default:throw Error(s(161))}}catch(R){he(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Gf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Pt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Hf(e,t.alternate,t),t=t.sibling}function $a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:va(4,t,t.return),$a(t);break;case 1:Ut(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Cf(t,t.return,a),$a(t);break;case 27:An(t.stateNode);case 26:case 5:Ut(t,t.return),$a(t);break;case 22:t.memoizedState===null&&$a(t);break;case 30:$a(t);break;default:$a(t)}e=e.sibling}}function ea(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:ea(n,i,a),bn(4,i);break;case 1:if(ea(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(N){he(l,l.return,N)}if(l=i,n=l.updateQueue,n!==null){var d=l.stateNode;try{var v=n.shared.hiddenCallbacks;if(v!==null)for(n.shared.hiddenCallbacks=null,n=0;n<v.length;n++)xu(v[n],d)}catch(N){he(l,l.return,N)}}a&&o&64&&Rf(i),vn(i,i.return);break;case 27:Uf(i);case 26:case 5:ea(n,i,a),a&&l===null&&o&4&&_f(i),vn(i,i.return);break;case 12:ea(n,i,a);break;case 31:ea(n,i,a),a&&o&4&&Yf(n,i);break;case 13:ea(n,i,a),a&&o&4&&qf(n,i);break;case 22:i.memoizedState===null&&ea(n,i,a),vn(i,i.return);break;case 30:break;default:ea(n,i,a)}t=t.sibling}}function Io(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ln(a))}function Po(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ln(e))}function Mt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qf(e,t,a,l),t=t.sibling}function Qf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(e,t,a,l),n&2048&&bn(9,t);break;case 1:Mt(e,t,a,l);break;case 3:Mt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ln(e)));break;case 12:if(n&2048){Mt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,d=i.onPostCommit;typeof d=="function"&&d(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){he(t,t.return,v)}}else Mt(e,t,a,l);break;case 31:Mt(e,t,a,l);break;case 13:Mt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?Mt(e,t,a,l):xn(e,t):i._visibility&2?Mt(e,t,a,l):(i._visibility|=2,Nl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Io(o,t);break;case 24:Mt(e,t,a,l),n&2048&&Po(t.alternate,t);break;default:Mt(e,t,a,l)}}function Nl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,d=a,v=l,N=o.flags;switch(o.tag){case 0:case 11:case 15:Nl(i,o,d,v,n),bn(8,o);break;case 23:break;case 22:var R=o.stateNode;o.memoizedState!==null?R._visibility&2?Nl(i,o,d,v,n):xn(i,o):(R._visibility|=2,Nl(i,o,d,v,n)),n&&N&2048&&Io(o.alternate,o);break;case 24:Nl(i,o,d,v,n),n&&N&2048&&Po(o.alternate,o);break;default:Nl(i,o,d,v,n)}t=t.sibling}}function xn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:xn(a,l),n&2048&&Io(l.alternate,l);break;case 24:xn(a,l),n&2048&&Po(l.alternate,l);break;default:xn(a,l)}t=t.sibling}}var yn=8192;function Al(e,t,a){if(e.subtreeFlags&yn)for(e=e.child;e!==null;)Vf(e,t,a),e=e.sibling}function Vf(e,t,a){switch(e.tag){case 26:Al(e,t,a),e.flags&yn&&e.memoizedState!==null&&oh(a,Tt,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,a);break;case 3:case 4:var l=Tt;Tt=Ji(e.stateNode.containerInfo),Al(e,t,a),Tt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=yn,yn=16777216,Al(e,t,a),yn=l):Al(e,t,a));break;default:Al(e,t,a)}}function Zf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Sn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ye=l,Kf(l,e)}Zf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Jf(e),e=e.sibling}function Jf(e){switch(e.tag){case 0:case 11:case 15:Sn(e),e.flags&2048&&va(9,e,e.return);break;case 3:Sn(e);break;case 12:Sn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Di(e)):Sn(e);break;default:Sn(e)}}function Di(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ye=l,Kf(l,e)}Zf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:va(8,t,t.return),Di(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Di(t));break;default:Di(t)}e=e.sibling}}function Kf(e,t){for(;Ye!==null;){var a=Ye;switch(a.tag){case 0:case 11:case 15:va(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ln(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ye=l;else e:for(a=e;Ye!==null;){l=Ye;var n=l.sibling,i=l.return;if(Bf(l),l===a){Ye=null;break e}if(n!==null){n.return=i,Ye=n;break e}Ye=i}}}var Em={getCacheForType:function(e){var t=Ge(De),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ge(De).controller.signal}},wm=typeof WeakMap=="function"?WeakMap:Map,de=0,Ee=null,le=null,ie=0,me=0,ft=null,xa=!1,Tl=!1,ec=!1,ta=0,Te=0,ya=0,Fa=0,tc=0,dt=0,Ml=0,En=null,at=null,ac=!1,Ui=0,Wf=0,ki=1/0,Hi=null,Sa=null,Be=0,Ea=null,Ol=null,aa=0,lc=0,nc=null,$f=null,wn=0,ic=null;function pt(){return(de&2)!==0&&ie!==0?ie&-ie:C.T!==null?fc():fs()}function Ff(){if(dt===0)if((ie&536870912)===0||oe){var e=Vn;Vn<<=1,(Vn&3932160)===0&&(Vn=262144),dt=e}else dt=536870912;return e=st.current,e!==null&&(e.flags|=32),dt}function lt(e,t,a){(e===Ee&&(me===2||me===9)||e.cancelPendingCommit!==null)&&(Rl(e,0),wa(e,ie,dt,!1)),Gl(e,a),((de&2)===0||e!==Ee)&&(e===Ee&&((de&2)===0&&(Fa|=a),Te===4&&wa(e,ie,dt,!1)),kt(e))}function If(e,t,a){if((de&6)!==0)throw Error(s(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Xl(e,t),n=l?Nm(e,t):oc(e,t,!0),i=l;do{if(n===0){Tl&&!l&&wa(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!jm(a)){n=oc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var d=e;n=En;var v=d.current.memoizedState.isDehydrated;if(v&&(Rl(d,o).flags|=256),o=oc(d,o,!1),o!==2){if(ec&&!v){d.errorRecoveryDisabledLanes|=i,Fa|=i,n=4;break e}i=at,at=n,i!==null&&(at===null?at=i:at.push.apply(at,i))}n=o}if(i=!1,n!==2)continue}}if(n===1){Rl(e,0),wa(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:wa(l,t,dt,!xa);break e;case 2:at=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(n=Ui+300-nt(),10<n)){if(wa(l,t,dt,!xa),Jn(l,0,!0)!==0)break e;aa=t,l.timeoutHandle=Md(Pf.bind(null,l,a,at,Hi,ac,t,dt,Fa,Ml,xa,i,"Throttled",-0,0),n);break e}Pf(l,a,at,Hi,ac,t,dt,Fa,Ml,xa,i,null,-0,0)}}break}while(!0);kt(e)}function Pf(e,t,a,l,n,i,o,d,v,N,R,D,A,M){if(e.timeoutHandle=-1,D=t.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},Vf(t,i,D);var G=(i&62914560)===i?Ui-nt():(i&4194048)===i?Wf-nt():0;if(G=ch(D,G),G!==null){aa=i,e.cancelPendingCommit=G(od.bind(null,e,t,i,a,l,n,o,d,v,R,D,null,A,M)),wa(e,i,o,!N);return}}od(e,t,i,a,l,n,o,d,v)}function jm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ot(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wa(e,t,a,l){t&=~tc,t&=~Fa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-rt(n),o=1<<i;l[i]=-1,n&=~o}a!==0&&cs(e,a,t)}function Bi(){return(de&6)===0?(jn(0),!1):!0}function rc(){if(le!==null){if(me===0)var e=le.return;else e=le,Vt=Xa=null,Eo(e),Sl=null,rn=0,e=le;for(;e!==null;)Of(e.alternate,e),e=e.return;le=null}}function Rl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Qm(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),aa=0,rc(),Ee=e,le=a=Gt(e.current,null),ie=t,me=0,ft=null,xa=!1,Tl=Xl(e,t),ec=!1,Ml=dt=tc=Fa=ya=Te=0,at=En=null,ac=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-rt(l),i=1<<n;t|=e[n],l&=~i}return ta=t,ii(),a}function ed(e,t){ee=null,C.H=mn,t===yl||t===pi?(t=hu(),me=3):t===so?(t=hu(),me=4):me=t===Bo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ft=t,le===null&&(Te=1,Ai(e,xt(t,e.current)))}function td(){var e=st.current;return e===null?!0:(ie&4194048)===ie?wt===null:(ie&62914560)===ie||(ie&536870912)!==0?e===wt:!1}function ad(){var e=C.H;return C.H=mn,e===null?mn:e}function ld(){var e=C.A;return C.A=Em,e}function Li(){Te=4,xa||(ie&4194048)!==ie&&st.current!==null||(Tl=!0),(ya&134217727)===0&&(Fa&134217727)===0||Ee===null||wa(Ee,ie,dt,!1)}function oc(e,t,a){var l=de;de|=2;var n=ad(),i=ld();(Ee!==e||ie!==t)&&(Hi=null,Rl(e,t)),t=!1;var o=Te;e:do try{if(me!==0&&le!==null){var d=le,v=ft;switch(me){case 8:rc(),o=6;break e;case 3:case 2:case 9:case 6:st.current===null&&(t=!0);var N=me;if(me=0,ft=null,Cl(e,d,v,N),a&&Tl){o=0;break e}break;default:N=me,me=0,ft=null,Cl(e,d,v,N)}}zm(),o=Te;break}catch(R){ed(e,R)}while(!0);return t&&e.shellSuspendCounter++,Vt=Xa=null,de=l,C.H=n,C.A=i,le===null&&(Ee=null,ie=0,ii()),o}function zm(){for(;le!==null;)nd(le)}function Nm(e,t){var a=de;de|=2;var l=ad(),n=ld();Ee!==e||ie!==t?(Hi=null,ki=nt()+500,Rl(e,t)):Tl=Xl(e,t);e:do try{if(me!==0&&le!==null){t=le;var i=ft;t:switch(me){case 1:me=0,ft=null,Cl(e,t,i,1);break;case 2:case 9:if(pu(i)){me=0,ft=null,id(t);break}t=function(){me!==2&&me!==9||Ee!==e||(me=7),kt(e)},i.then(t,t);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:pu(i)?(me=0,ft=null,id(t)):(me=0,ft=null,Cl(e,t,i,7));break;case 5:var o=null;switch(le.tag){case 26:o=le.memoizedState;case 5:case 27:var d=le;if(o?Qd(o):d.stateNode.complete){me=0,ft=null;var v=d.sibling;if(v!==null)le=v;else{var N=d.return;N!==null?(le=N,Yi(N)):le=null}break t}}me=0,ft=null,Cl(e,t,i,5);break;case 6:me=0,ft=null,Cl(e,t,i,6);break;case 8:rc(),Te=6;break e;default:throw Error(s(462))}}Am();break}catch(R){ed(e,R)}while(!0);return Vt=Xa=null,C.H=l,C.A=n,de=a,le!==null?0:(Ee=null,ie=0,ii(),Te)}function Am(){for(;le!==null&&!$0();)nd(le)}function nd(e){var t=Tf(e.alternate,e,ta);e.memoizedProps=e.pendingProps,t===null?Yi(e):le=t}function id(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Ef(a,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=Ef(a,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:Eo(t);default:Of(a,t),t=le=au(t,ta),t=Tf(a,t,ta)}e.memoizedProps=e.pendingProps,t===null?Yi(e):le=t}function Cl(e,t,a,l){Vt=Xa=null,Eo(t),Sl=null,rn=0;var n=t.return;try{if(hm(e,n,t,a,ie)){Te=1,Ai(e,xt(a,e.current)),le=null;return}}catch(i){if(n!==null)throw le=n,i;Te=1,Ai(e,xt(a,e.current)),le=null;return}t.flags&32768?(oe||l===1?e=!0:Tl||(ie&536870912)!==0?e=!1:(xa=e=!0,(l===2||l===9||l===3||l===6)&&(l=st.current,l!==null&&l.tag===13&&(l.flags|=16384))),rd(t,e)):Yi(t)}function Yi(e){var t=e;do{if((t.flags&32768)!==0){rd(t,xa);return}e=t.return;var a=vm(t.alternate,t,ta);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Te===0&&(Te=5)}function rd(e,t){do{var a=xm(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);Te=6,le=null}function od(e,t,a,l,n,i,o,d,v){e.cancelPendingCommit=null;do qi();while(Be!==0);if((de&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=Kr,rp(e,a,i,o,d,v),e===Ee&&(le=Ee=null,ie=0),Ol=t,Ea=e,aa=a,lc=i,nc=n,$f=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Rm(Gn,function(){return dd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=C.T,C.T=null,n=q.p,q.p=2,o=de,de|=4;try{ym(e,t,a)}finally{de=o,q.p=n,C.T=l}}Be=1,cd(),sd(),ud()}}function cd(){if(Be===1){Be=0;var e=Ea,t=Ol,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null;var l=q.p;q.p=2;var n=de;de|=4;try{Xf(t,e);var i=xc,o=Js(e.containerInfo),d=i.focusedElem,v=i.selectionRange;if(o!==d&&d&&d.ownerDocument&&Zs(d.ownerDocument.documentElement,d)){if(v!==null&&Gr(d)){var N=v.start,R=v.end;if(R===void 0&&(R=N),"selectionStart"in d)d.selectionStart=N,d.selectionEnd=Math.min(R,d.value.length);else{var D=d.ownerDocument||document,A=D&&D.defaultView||window;if(A.getSelection){var M=A.getSelection(),G=d.textContent.length,W=Math.min(v.start,G),xe=v.end===void 0?W:Math.min(v.end,G);!M.extend&&W>xe&&(o=xe,xe=W,W=o);var S=Vs(d,W),x=Vs(d,xe);if(S&&x&&(M.rangeCount!==1||M.anchorNode!==S.node||M.anchorOffset!==S.offset||M.focusNode!==x.node||M.focusOffset!==x.offset)){var j=D.createRange();j.setStart(S.node,S.offset),M.removeAllRanges(),W>xe?(M.addRange(j),M.extend(x.node,x.offset)):(j.setEnd(x.node,x.offset),M.addRange(j))}}}}for(D=[],M=d;M=M.parentNode;)M.nodeType===1&&D.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<D.length;d++){var _=D[d];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Pi=!!vc,xc=vc=null}finally{de=n,q.p=l,C.T=a}}e.current=t,Be=2}}function sd(){if(Be===2){Be=0;var e=Ea,t=Ol,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=C.T,C.T=null;var l=q.p;q.p=2;var n=de;de|=4;try{Hf(e,t.alternate,t)}finally{de=n,q.p=l,C.T=a}}Be=3}}function ud(){if(Be===4||Be===3){Be=0,F0();var e=Ea,t=Ol,a=aa,l=$f;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Be=5:(Be=0,Ol=Ea=null,fd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Sa=null),jr(a),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(ql,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=C.T,n=q.p,q.p=2,C.T=null;try{for(var i=e.onRecoverableError,o=0;o<l.length;o++){var d=l[o];i(d.value,{componentStack:d.stack})}}finally{C.T=t,q.p=n}}(aa&3)!==0&&qi(),kt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===ic?wn++:(wn=0,ic=e):wn=0,jn(0)}}function fd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ln(t)))}function qi(){return cd(),sd(),ud(),dd()}function dd(){if(Be!==5)return!1;var e=Ea,t=lc;lc=0;var a=jr(aa),l=C.T,n=q.p;try{q.p=32>a?32:a,C.T=null,a=nc,nc=null;var i=Ea,o=aa;if(Be=0,Ol=Ea=null,aa=0,(de&6)!==0)throw Error(s(331));var d=de;if(de|=4,Jf(i.current),Qf(i,i.current,o,a),de=d,jn(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(ql,i)}catch{}return!0}finally{q.p=n,C.T=l,fd(e,t)}}function pd(e,t,a){t=xt(a,t),t=Ho(e.stateNode,t,2),e=ha(e,t,2),e!==null&&(Gl(e,2),kt(e))}function he(e,t,a){if(e.tag===3)pd(e,e,a);else for(;t!==null;){if(t.tag===3){pd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Sa===null||!Sa.has(l))){e=xt(a,e),a=mf(2),l=ha(t,a,2),l!==null&&(hf(a,l,t,e),Gl(l,2),kt(l));break}}t=t.return}}function cc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new wm;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(ec=!0,n.add(a),e=Tm.bind(null,e,t,a),t.then(e,e))}function Tm(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ee===e&&(ie&a)===a&&(Te===4||Te===3&&(ie&62914560)===ie&&300>nt()-Ui?(de&2)===0&&Rl(e,0):tc|=a,Ml===ie&&(Ml=0)),kt(e)}function md(e,t){t===0&&(t=os()),e=La(e,t),e!==null&&(Gl(e,t),kt(e))}function Mm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),md(e,a)}function Om(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(t),md(e,a)}function Rm(e,t){return yr(e,t)}var Xi=null,_l=null,sc=!1,Gi=!1,uc=!1,ja=0;function kt(e){e!==_l&&e.next===null&&(_l===null?Xi=_l=e:_l=_l.next=e),Gi=!0,sc||(sc=!0,_m())}function jn(e,t){if(!uc&&Gi){uc=!0;do for(var a=!1,l=Xi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var o=l.suspendedLanes,d=l.pingedLanes;i=(1<<31-rt(42|e)+1)-1,i&=n&~(o&~d),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,vd(l,i))}else i=ie,i=Jn(l,l===Ee?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Xl(l,i)||(a=!0,vd(l,i));l=l.next}while(a);uc=!1}}function Cm(){hd()}function hd(){Gi=sc=!1;var e=0;ja!==0&&Gm()&&(e=ja);for(var t=nt(),a=null,l=Xi;l!==null;){var n=l.next,i=gd(l,t);i===0?(l.next=null,a===null?Xi=n:a.next=n,n===null&&(_l=a)):(a=l,(e!==0||(i&3)!==0)&&(Gi=!0)),l=n}Be!==0&&Be!==5||jn(e),ja!==0&&(ja=0)}function gd(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-rt(i),d=1<<o,v=n[o];v===-1?((d&a)===0||(d&l)!==0)&&(n[o]=ip(d,t)):v<=t&&(e.expiredLanes|=d),i&=~d}if(t=Ee,a=ie,a=Jn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(me===2||me===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Sr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Xl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Sr(l),jr(a)){case 2:case 8:a=is;break;case 32:a=Gn;break;case 268435456:a=rs;break;default:a=Gn}return l=bd.bind(null,e),a=yr(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Sr(l),e.callbackPriority=2,e.callbackNode=null,2}function bd(e,t){if(Be!==0&&Be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(qi()&&e.callbackNode!==a)return null;var l=ie;return l=Jn(e,e===Ee?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(If(e,l,t),gd(e,nt()),e.callbackNode!=null&&e.callbackNode===a?bd.bind(null,e):null)}function vd(e,t){if(qi())return null;If(e,t,!0)}function _m(){Vm(function(){(de&6)!==0?yr(ns,Cm):hd()})}function fc(){if(ja===0){var e=vl;e===0&&(e=Qn,Qn<<=1,(Qn&261888)===0&&(Qn=256)),ja=e}return ja}function xd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fn(""+e)}function yd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Dm(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=xd((n[Fe]||null).action),o=l.submitter;o&&(t=(t=o[Fe]||null)?xd(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var d=new ti("action","action",null,l,n);e.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ja!==0){var v=o?yd(n,o):new FormData(n);Ro(a,{pending:!0,data:v,method:n.method,action:i},null,v)}}else typeof i=="function"&&(d.preventDefault(),v=o?yd(n,o):new FormData(n),Ro(a,{pending:!0,data:v,method:n.method,action:i},i,v))},currentTarget:n}]})}}for(var dc=0;dc<Jr.length;dc++){var pc=Jr[dc],Um=pc.toLowerCase(),km=pc[0].toUpperCase()+pc.slice(1);At(Um,"on"+km)}At($s,"onAnimationEnd"),At(Fs,"onAnimationIteration"),At(Is,"onAnimationStart"),At("dblclick","onDoubleClick"),At("focusin","onFocus"),At("focusout","onBlur"),At(Ip,"onTransitionRun"),At(Pp,"onTransitionStart"),At(em,"onTransitionCancel"),At(Ps,"onTransitionEnd"),nl("onMouseEnter",["mouseout","mouseover"]),nl("onMouseLeave",["mouseout","mouseover"]),nl("onPointerEnter",["pointerout","pointerover"]),nl("onPointerLeave",["pointerout","pointerover"]),Ua("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ua("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ua("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ua("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ua("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ua("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zn));function Sd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var o=l.length-1;0<=o;o--){var d=l[o],v=d.instance,N=d.currentTarget;if(d=d.listener,v!==i&&n.isPropagationStopped())break e;i=d,n.currentTarget=N;try{i(n)}catch(R){ni(R)}n.currentTarget=null,i=v}else for(o=0;o<l.length;o++){if(d=l[o],v=d.instance,N=d.currentTarget,d=d.listener,v!==i&&n.isPropagationStopped())break e;i=d,n.currentTarget=N;try{i(n)}catch(R){ni(R)}n.currentTarget=null,i=v}}}}function ne(e,t){var a=t[zr];a===void 0&&(a=t[zr]=new Set);var l=e+"__bubble";a.has(l)||(Ed(t,e,2,!1),a.add(l))}function mc(e,t,a){var l=0;t&&(l|=4),Ed(a,e,l,t)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function hc(e){if(!e[Qi]){e[Qi]=!0,ms.forEach(function(a){a!=="selectionchange"&&(Hm.has(a)||mc(a,!1,e),mc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qi]||(t[Qi]=!0,mc("selectionchange",!1,t))}}function Ed(e,t,a,l){switch(Fd(t)){case 2:var n=fh;break;case 8:n=dh;break;default:n=Oc}a=n.bind(null,t,a,e),n=void 0,!Dr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function gc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var d=l.stateNode.containerInfo;if(d===n)break;if(o===4)for(o=l.return;o!==null;){var v=o.tag;if((v===3||v===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;d!==null;){if(o=tl(d),o===null)return;if(v=o.tag,v===5||v===6||v===26||v===27){l=i=o;continue e}d=d.parentNode}}l=l.return}Ns(function(){var N=i,R=Cr(a),D=[];e:{var A=eu.get(e);if(A!==void 0){var M=ti,G=e;switch(e){case"keypress":if(Pn(a)===0)break e;case"keydown":case"keyup":M=Op;break;case"focusin":G="focus",M=Br;break;case"focusout":G="blur",M=Br;break;case"beforeblur":case"afterblur":M=Br;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Ms;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=vp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=_p;break;case $s:case Fs:case Is:M=Sp;break;case Ps:M=Up;break;case"scroll":case"scrollend":M=gp;break;case"wheel":M=Hp;break;case"copy":case"cut":case"paste":M=wp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Rs;break;case"toggle":case"beforetoggle":M=Lp}var W=(t&4)!==0,xe=!W&&(e==="scroll"||e==="scrollend"),S=W?A!==null?A+"Capture":null:A;W=[];for(var x=N,j;x!==null;){var _=x;if(j=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||j===null||S===null||(_=Zl(x,S),_!=null&&W.push(Nn(x,_,j))),xe)break;x=x.return}0<W.length&&(A=new M(A,G,null,a,R),D.push({event:A,listeners:W}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",A&&a!==Rr&&(G=a.relatedTarget||a.fromElement)&&(tl(G)||G[el]))break e;if((M||A)&&(A=R.window===R?R:(A=R.ownerDocument)?A.defaultView||A.parentWindow:window,M?(G=a.relatedTarget||a.toElement,M=N,G=G?tl(G):null,G!==null&&(xe=b(G),W=G.tag,G!==xe||W!==5&&W!==27&&W!==6)&&(G=null)):(M=null,G=N),M!==G)){if(W=Ms,_="onMouseLeave",S="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(W=Rs,_="onPointerLeave",S="onPointerEnter",x="pointer"),xe=M==null?A:Vl(M),j=G==null?A:Vl(G),A=new W(_,x+"leave",M,a,R),A.target=xe,A.relatedTarget=j,_=null,tl(R)===N&&(W=new W(S,x+"enter",G,a,R),W.target=j,W.relatedTarget=xe,_=W),xe=_,M&&G)t:{for(W=Bm,S=M,x=G,j=0,_=S;_;_=W(_))j++;_=0;for(var K=x;K;K=W(K))_++;for(;0<j-_;)S=W(S),j--;for(;0<_-j;)x=W(x),_--;for(;j--;){if(S===x||x!==null&&S===x.alternate){W=S;break t}S=W(S),x=W(x)}W=null}else W=null;M!==null&&wd(D,A,M,W,!1),G!==null&&xe!==null&&wd(D,xe,G,W,!0)}}e:{if(A=N?Vl(N):window,M=A.nodeName&&A.nodeName.toLowerCase(),M==="select"||M==="input"&&A.type==="file")var ue=Ls;else if(Hs(A))if(Ys)ue=Wp;else{ue=Jp;var V=Zp}else M=A.nodeName,!M||M.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?N&&Or(N.elementType)&&(ue=Ls):ue=Kp;if(ue&&(ue=ue(e,N))){Bs(D,ue,a,R);break e}V&&V(e,A,N),e==="focusout"&&N&&A.type==="number"&&N.memoizedProps.value!=null&&Mr(A,"number",A.value)}switch(V=N?Vl(N):window,e){case"focusin":(Hs(V)||V.contentEditable==="true")&&(ul=V,Qr=N,en=null);break;case"focusout":en=Qr=ul=null;break;case"mousedown":Vr=!0;break;case"contextmenu":case"mouseup":case"dragend":Vr=!1,Ks(D,a,R);break;case"selectionchange":if(Fp)break;case"keydown":case"keyup":Ks(D,a,R)}var te;if(Yr)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else sl?Us(e,a)&&(re="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(Cs&&a.locale!=="ko"&&(sl||re!=="onCompositionStart"?re==="onCompositionEnd"&&sl&&(te=As()):(ca=R,Ur="value"in ca?ca.value:ca.textContent,sl=!0)),V=Vi(N,re),0<V.length&&(re=new Os(re,e,null,a,R),D.push({event:re,listeners:V}),te?re.data=te:(te=ks(a),te!==null&&(re.data=te)))),(te=qp?Xp(e,a):Gp(e,a))&&(re=Vi(N,"onBeforeInput"),0<re.length&&(V=new Os("onBeforeInput","beforeinput",null,a,R),D.push({event:V,listeners:re}),V.data=te)),Dm(D,e,N,a,R)}Sd(D,t)})}function Nn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Vi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Zl(e,a),n!=null&&l.unshift(Nn(e,n,i)),n=Zl(e,t),n!=null&&l.push(Nn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Bm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function wd(e,t,a,l,n){for(var i=t._reactName,o=[];a!==null&&a!==l;){var d=a,v=d.alternate,N=d.stateNode;if(d=d.tag,v!==null&&v===l)break;d!==5&&d!==26&&d!==27||N===null||(v=N,n?(N=Zl(a,i),N!=null&&o.unshift(Nn(a,N,v))):n||(N=Zl(a,i),N!=null&&o.push(Nn(a,N,v)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var Lm=/\r\n?/g,Ym=/\u0000|\uFFFD/g;function jd(e){return(typeof e=="string"?e:""+e).replace(Lm,`
`).replace(Ym,"")}function zd(e,t){return t=jd(t),jd(e)===t}function ve(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||rl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&rl(e,""+l);break;case"className":Wn(e,"class",l);break;case"tabIndex":Wn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Wn(e,a,l);break;case"style":js(e,l,i);break;case"data":if(t!=="object"){Wn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Fn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ve(e,t,"name",n.name,n,null),ve(e,t,"formEncType",n.formEncType,n,null),ve(e,t,"formMethod",n.formMethod,n,null),ve(e,t,"formTarget",n.formTarget,n,null)):(ve(e,t,"encType",n.encType,n,null),ve(e,t,"method",n.method,n,null),ve(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Fn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=qt);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Fn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Kn(e,"popover",l);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Kn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=mp.get(a)||a,Kn(e,a,l))}}function bc(e,t,a,l,n,i){switch(a){case"style":js(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?rl(e,l):(typeof l=="number"||typeof l=="bigint")&&rl(e,""+l);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"onClick":l!=null&&(e.onclick=qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hs.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Fe]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Kn(e,a,l)}}}function Ve(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var o=a[i];if(o!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ve(e,t,i,o,a,null)}}n&&ve(e,t,"srcSet",a.srcSet,a,null),l&&ve(e,t,"src",a.src,a,null);return;case"input":ne("invalid",e);var d=i=o=n=null,v=null,N=null;for(l in a)if(a.hasOwnProperty(l)){var R=a[l];if(R!=null)switch(l){case"name":n=R;break;case"type":o=R;break;case"checked":v=R;break;case"defaultChecked":N=R;break;case"value":i=R;break;case"defaultValue":d=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(137,t));break;default:ve(e,t,l,R,a,null)}}ys(e,i,d,v,N,o,n,!1);return;case"select":ne("invalid",e),l=o=i=null;for(n in a)if(a.hasOwnProperty(n)&&(d=a[n],d!=null))switch(n){case"value":i=d;break;case"defaultValue":o=d;break;case"multiple":l=d;default:ve(e,t,n,d,a,null)}t=i,a=o,e.multiple=!!l,t!=null?il(e,!!l,t,!1):a!=null&&il(e,!!l,a,!0);return;case"textarea":ne("invalid",e),i=n=l=null;for(o in a)if(a.hasOwnProperty(o)&&(d=a[o],d!=null))switch(o){case"value":l=d;break;case"defaultValue":n=d;break;case"children":i=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:ve(e,t,o,d,a,null)}Es(e,l,n,i);return;case"option":for(v in a)a.hasOwnProperty(v)&&(l=a[v],l!=null)&&(v==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":ve(e,t,v,l,a,null));return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(l=0;l<zn.length;l++)ne(zn[l],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in a)if(a.hasOwnProperty(N)&&(l=a[N],l!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ve(e,t,N,l,a,null)}return;default:if(Or(t)){for(R in a)a.hasOwnProperty(R)&&(l=a[R],l!==void 0&&bc(e,t,R,l,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(l=a[d],l!=null&&ve(e,t,d,l,a,null))}function qm(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,o=null,d=null,v=null,N=null,R=null;for(M in a){var D=a[M];if(a.hasOwnProperty(M)&&D!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":v=D;default:l.hasOwnProperty(M)||ve(e,t,M,null,l,D)}}for(var A in l){var M=l[A];if(D=a[A],l.hasOwnProperty(A)&&(M!=null||D!=null))switch(A){case"type":i=M;break;case"name":n=M;break;case"checked":N=M;break;case"defaultChecked":R=M;break;case"value":o=M;break;case"defaultValue":d=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(137,t));break;default:M!==D&&ve(e,t,A,M,l,D)}}Tr(e,o,d,v,N,R,i,n);return;case"select":M=o=d=A=null;for(i in a)if(v=a[i],a.hasOwnProperty(i)&&v!=null)switch(i){case"value":break;case"multiple":M=v;default:l.hasOwnProperty(i)||ve(e,t,i,null,l,v)}for(n in l)if(i=l[n],v=a[n],l.hasOwnProperty(n)&&(i!=null||v!=null))switch(n){case"value":A=i;break;case"defaultValue":d=i;break;case"multiple":o=i;default:i!==v&&ve(e,t,n,i,l,v)}t=d,a=o,l=M,A!=null?il(e,!!a,A,!1):!!l!=!!a&&(t!=null?il(e,!!a,t,!0):il(e,!!a,a?[]:"",!1));return;case"textarea":M=A=null;for(d in a)if(n=a[d],a.hasOwnProperty(d)&&n!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:ve(e,t,d,null,l,n)}for(o in l)if(n=l[o],i=a[o],l.hasOwnProperty(o)&&(n!=null||i!=null))switch(o){case"value":A=n;break;case"defaultValue":M=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==i&&ve(e,t,o,n,l,i)}Ss(e,A,M);return;case"option":for(var G in a)A=a[G],a.hasOwnProperty(G)&&A!=null&&!l.hasOwnProperty(G)&&(G==="selected"?e.selected=!1:ve(e,t,G,null,l,A));for(v in l)A=l[v],M=a[v],l.hasOwnProperty(v)&&A!==M&&(A!=null||M!=null)&&(v==="selected"?e.selected=A&&typeof A!="function"&&typeof A!="symbol":ve(e,t,v,A,l,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in a)A=a[W],a.hasOwnProperty(W)&&A!=null&&!l.hasOwnProperty(W)&&ve(e,t,W,null,l,A);for(N in l)if(A=l[N],M=a[N],l.hasOwnProperty(N)&&A!==M&&(A!=null||M!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,t));break;default:ve(e,t,N,A,l,M)}return;default:if(Or(t)){for(var xe in a)A=a[xe],a.hasOwnProperty(xe)&&A!==void 0&&!l.hasOwnProperty(xe)&&bc(e,t,xe,void 0,l,A);for(R in l)A=l[R],M=a[R],!l.hasOwnProperty(R)||A===M||A===void 0&&M===void 0||bc(e,t,R,A,l,M);return}}for(var S in a)A=a[S],a.hasOwnProperty(S)&&A!=null&&!l.hasOwnProperty(S)&&ve(e,t,S,null,l,A);for(D in l)A=l[D],M=a[D],!l.hasOwnProperty(D)||A===M||A==null&&M==null||ve(e,t,D,A,l,M)}function Nd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Xm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,o=n.initiatorType,d=n.duration;if(i&&d&&Nd(o)){for(o=0,d=n.responseEnd,l+=1;l<a.length;l++){var v=a[l],N=v.startTime;if(N>d)break;var R=v.transferSize,D=v.initiatorType;R&&Nd(D)&&(v=v.responseEnd,o+=R*(v<d?1:(d-N)/(v-N)))}if(--l,t+=8*(i+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var vc=null,xc=null;function Zi(e){return e.nodeType===9?e:e.ownerDocument}function Ad(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Td(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function yc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sc=null;function Gm(){var e=window.event;return e&&e.type==="popstate"?e===Sc?!1:(Sc=e,!0):(Sc=null,!1)}var Md=typeof setTimeout=="function"?setTimeout:void 0,Qm=typeof clearTimeout=="function"?clearTimeout:void 0,Od=typeof Promise=="function"?Promise:void 0,Vm=typeof queueMicrotask=="function"?queueMicrotask:typeof Od<"u"?function(e){return Od.resolve(null).then(e).catch(Zm)}:Md;function Zm(e){setTimeout(function(){throw e})}function za(e){return e==="head"}function Rd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Hl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")An(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,An(a);for(var i=a.firstChild;i;){var o=i.nextSibling,d=i.nodeName;i[Ql]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=o}}else a==="body"&&An(e.ownerDocument.body);a=n}while(a);Hl(t)}function Cd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Ec(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ec(a),Nr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Jm(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ql])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=jt(e.nextSibling),e===null)break}return null}function Km(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=jt(e.nextSibling),e===null))return null;return e}function _d(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=jt(e.nextSibling),e===null))return null;return e}function wc(e){return e.data==="$?"||e.data==="$~"}function jc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Wm(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var zc=null;function Dd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return jt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Ud(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function kd(e,t,a){switch(t=Zi(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function An(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Nr(e)}var zt=new Map,Hd=new Set;function Ji(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var la=q.d;q.d={f:$m,r:Fm,D:Im,C:Pm,L:eh,m:th,X:lh,S:ah,M:nh};function $m(){var e=la.f(),t=Bi();return e||t}function Fm(e){var t=al(e);t!==null&&t.tag===5&&t.type==="form"?Pu(t):la.r(e)}var Dl=typeof document>"u"?null:document;function Bd(e,t,a){var l=Dl;if(l&&typeof t=="string"&&t){var n=bt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Hd.has(n)||(Hd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ve(t,"link",e),Le(t),l.head.appendChild(t)))}}function Im(e){la.D(e),Bd("dns-prefetch",e,null)}function Pm(e,t){la.C(e,t),Bd("preconnect",e,t)}function eh(e,t,a){la.L(e,t,a);var l=Dl;if(l&&e&&t){var n='link[rel="preload"][as="'+bt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+bt(a.imageSizes)+'"]')):n+='[href="'+bt(e)+'"]';var i=n;switch(t){case"style":i=Ul(e);break;case"script":i=kl(e)}zt.has(i)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),zt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Tn(i))||t==="script"&&l.querySelector(Mn(i))||(t=l.createElement("link"),Ve(t,"link",e),Le(t),l.head.appendChild(t)))}}function th(e,t){la.m(e,t);var a=Dl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+bt(l)+'"][href="'+bt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=kl(e)}if(!zt.has(i)&&(e=E({rel:"modulepreload",href:e},t),zt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Mn(i)))return}l=a.createElement("link"),Ve(l,"link",e),Le(l),a.head.appendChild(l)}}}function ah(e,t,a){la.S(e,t,a);var l=Dl;if(l&&e){var n=ll(l).hoistableStyles,i=Ul(e);t=t||"default";var o=n.get(i);if(!o){var d={loading:0,preload:null};if(o=l.querySelector(Tn(i)))d.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=zt.get(i))&&Nc(e,a);var v=o=l.createElement("link");Le(v),Ve(v,"link",e),v._p=new Promise(function(N,R){v.onload=N,v.onerror=R}),v.addEventListener("load",function(){d.loading|=1}),v.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Ki(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:d},n.set(i,o)}}}function lh(e,t){la.X(e,t);var a=Dl;if(a&&e){var l=ll(a).hoistableScripts,n=kl(e),i=l.get(n);i||(i=a.querySelector(Mn(n)),i||(e=E({src:e,async:!0},t),(t=zt.get(n))&&Ac(e,t),i=a.createElement("script"),Le(i),Ve(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function nh(e,t){la.M(e,t);var a=Dl;if(a&&e){var l=ll(a).hoistableScripts,n=kl(e),i=l.get(n);i||(i=a.querySelector(Mn(n)),i||(e=E({src:e,async:!0,type:"module"},t),(t=zt.get(n))&&Ac(e,t),i=a.createElement("script"),Le(i),Ve(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Ld(e,t,a,l){var n=(n=ae.current)?Ji(n):null;if(!n)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ul(a.href),a=ll(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ul(a.href);var i=ll(n).hoistableStyles,o=i.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=n.querySelector(Tn(e)))&&!i._p&&(o.instance=i,o.state.loading=5),zt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},zt.set(e,a),i||ih(n,e,a,o.state))),t&&l===null)throw Error(s(528,""));return o}if(t&&l!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=kl(a),a=ll(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ul(e){return'href="'+bt(e)+'"'}function Tn(e){return'link[rel="stylesheet"]['+e+"]"}function Yd(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function ih(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ve(t,"link",a),Le(t),e.head.appendChild(t))}function kl(e){return'[src="'+bt(e)+'"]'}function Mn(e){return"script[async]"+e}function qd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+bt(a.href)+'"]');if(l)return t.instance=l,Le(l),l;var n=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Le(l),Ve(l,"style",n),Ki(l,a.precedence,e),t.instance=l;case"stylesheet":n=Ul(a.href);var i=e.querySelector(Tn(n));if(i)return t.state.loading|=4,t.instance=i,Le(i),i;l=Yd(a),(n=zt.get(n))&&Nc(l,n),i=(e.ownerDocument||e).createElement("link"),Le(i);var o=i;return o._p=new Promise(function(d,v){o.onload=d,o.onerror=v}),Ve(i,"link",l),t.state.loading|=4,Ki(i,a.precedence,e),t.instance=i;case"script":return i=kl(a.src),(n=e.querySelector(Mn(i)))?(t.instance=n,Le(n),n):(l=a,(n=zt.get(i))&&(l=E({},a),Ac(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Le(n),Ve(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ki(l,a.precedence,e));return t.instance}function Ki(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,o=0;o<l.length;o++){var d=l[o];if(d.dataset.precedence===t)i=d;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Nc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ac(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Wi=null;function Xd(e,t,a){if(Wi===null){var l=new Map,n=Wi=new Map;n.set(a,l)}else n=Wi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Ql]||i[qe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var d=l.get(o);d?d.push(i):l.set(o,[i])}}return l}function Gd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function rh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Qd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function oh(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Ul(l.href),i=t.querySelector(Tn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=$i.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Le(i);return}i=t.ownerDocument||t,l=Yd(l),(n=zt.get(n))&&Nc(l,n),i=i.createElement("link"),Le(i);var o=i;o._p=new Promise(function(d,v){o.onload=d,o.onerror=v}),Ve(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=$i.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Tc=0;function ch(e,t){return e.stylesheets&&e.count===0&&Ii(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Ii(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Tc===0&&(Tc=62500*Xm());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ii(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Tc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function $i(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ii(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fi=null;function Ii(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fi=new Map,t.forEach(sh,e),Fi=null,$i.call(e))}function sh(e,t){if(!(t.state.loading&4)){var a=Fi.get(e);if(a)var l=a.get(null);else{a=new Map,Fi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var o=n[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}n=t.instance,o=n.getAttribute("data-precedence"),i=a.get(o)||l,i===l&&a.set(null,n),a.set(o,n),this.count++,l=$i.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var On={$$typeof:Z,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function uh(e,t,a,l,n,i,o,d,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Er(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Er(0),this.hiddenUpdates=Er(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function Vd(e,t,a,l,n,i,o,d,v,N,R,D){return e=new uh(e,t,a,o,v,N,R,D,d),t=1,i===!0&&(t|=24),i=ct(3,null,null,t),e.current=i,i.stateNode=e,t=ro(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},uo(i),e}function Zd(e){return e?(e=pl,e):pl}function Jd(e,t,a,l,n,i){n=Zd(n),l.context===null?l.context=n:l.pendingContext=n,l=ma(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ha(e,l,t),a!==null&&(lt(a,e,t),cn(a,e,t))}function Kd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Mc(e,t){Kd(e,t),(e=e.alternate)&&Kd(e,t)}function Wd(e){if(e.tag===13||e.tag===31){var t=La(e,67108864);t!==null&&lt(t,e,67108864),Mc(e,67108864)}}function $d(e){if(e.tag===13||e.tag===31){var t=pt();t=wr(t);var a=La(e,t);a!==null&&lt(a,e,t),Mc(e,t)}}var Pi=!0;function fh(e,t,a,l){var n=C.T;C.T=null;var i=q.p;try{q.p=2,Oc(e,t,a,l)}finally{q.p=i,C.T=n}}function dh(e,t,a,l){var n=C.T;C.T=null;var i=q.p;try{q.p=8,Oc(e,t,a,l)}finally{q.p=i,C.T=n}}function Oc(e,t,a,l){if(Pi){var n=Rc(l);if(n===null)gc(e,t,l,er,a),Id(e,l);else if(mh(n,e,t,a,l))l.stopPropagation();else if(Id(e,l),t&4&&-1<ph.indexOf(e)){for(;n!==null;){var i=al(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Da(i.pendingLanes);if(o!==0){var d=i;for(d.pendingLanes|=2,d.entangledLanes|=2;o;){var v=1<<31-rt(o);d.entanglements[1]|=v,o&=~v}kt(i),(de&6)===0&&(ki=nt()+500,jn(0))}}break;case 31:case 13:d=La(i,2),d!==null&&lt(d,i,2),Bi(),Mc(i,2)}if(i=Rc(l),i===null&&gc(e,t,l,er,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else gc(e,t,l,null,a)}}function Rc(e){return e=Cr(e),Cc(e)}var er=null;function Cc(e){if(er=null,e=tl(e),e!==null){var t=b(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=h(t),e!==null)return e;e=null}else if(a===31){if(e=w(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return er=e,null}function Fd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(I0()){case ns:return 2;case is:return 8;case Gn:case P0:return 32;case rs:return 268435456;default:return 32}default:return 32}}var _c=!1,Na=null,Aa=null,Ta=null,Rn=new Map,Cn=new Map,Ma=[],ph="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Id(e,t){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Ta=null;break;case"pointerover":case"pointerout":Rn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(t.pointerId)}}function _n(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=al(t),t!==null&&Wd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function mh(e,t,a,l,n){switch(t){case"focusin":return Na=_n(Na,e,t,a,l,n),!0;case"dragenter":return Aa=_n(Aa,e,t,a,l,n),!0;case"mouseover":return Ta=_n(Ta,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Rn.set(i,_n(Rn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Cn.set(i,_n(Cn.get(i)||null,e,t,a,l,n)),!0}return!1}function Pd(e){var t=tl(e.target);if(t!==null){var a=b(t);if(a!==null){if(t=a.tag,t===13){if(t=h(a),t!==null){e.blockedOn=t,ds(e.priority,function(){$d(a)});return}}else if(t===31){if(t=w(a),t!==null){e.blockedOn=t,ds(e.priority,function(){$d(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Rc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Rr=l,a.target.dispatchEvent(l),Rr=null}else return t=al(a),t!==null&&Wd(t),e.blockedOn=a,!1;t.shift()}return!0}function e0(e,t,a){tr(e)&&a.delete(t)}function hh(){_c=!1,Na!==null&&tr(Na)&&(Na=null),Aa!==null&&tr(Aa)&&(Aa=null),Ta!==null&&tr(Ta)&&(Ta=null),Rn.forEach(e0),Cn.forEach(e0)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,_c||(_c=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,hh)))}var lr=null;function t0(e){lr!==e&&(lr=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){lr===e&&(lr=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Cc(l||a)===null)continue;break}var i=al(a);i!==null&&(e.splice(t,3),t-=3,Ro(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Hl(e){function t(v){return ar(v,e)}Na!==null&&ar(Na,e),Aa!==null&&ar(Aa,e),Ta!==null&&ar(Ta,e),Rn.forEach(t),Cn.forEach(t);for(var a=0;a<Ma.length;a++){var l=Ma[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)Pd(a),a.blockedOn===null&&Ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],o=n[Fe]||null;if(typeof i=="function")o||t0(a);else if(o){var d=null;if(i&&i.hasAttribute("formAction")){if(n=i,o=i[Fe]||null)d=o.formAction;else if(Cc(n)!==null)continue}else d=o.action;typeof d=="function"?a[l+1]=d:(a.splice(l,3),l-=3),t0(a)}}}function a0(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Dc(e){this._internalRoot=e}nr.prototype.render=Dc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,l=pt();Jd(a,l,e,t,null,null)},nr.prototype.unmount=Dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jd(e.current,2,null,e,null,null),Bi(),t[el]=null}};function nr(e){this._internalRoot=e}nr.prototype.unstable_scheduleHydration=function(e){if(e){var t=fs();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ma.length&&t!==0&&t<Ma[a].priority;a++);Ma.splice(a,0,e),a===0&&Pd(e)}};var l0=c.version;if(l0!=="19.2.4")throw Error(s(527,l0,"19.2.4"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(t),e=e!==null?O(e):null,e=e===null?null:e.stateNode,e};var gh={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ir=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ir.isDisabled&&ir.supportsFiber)try{ql=ir.inject(gh),it=ir}catch{}}return Un.createRoot=function(e,t){if(!p(e))throw Error(s(299));var a=!1,l="",n=uf,i=ff,o=df;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Vd(e,1,!1,null,null,a,l,null,n,i,o,a0),e[el]=t.current,hc(e),new Dc(t)},Un.hydrateRoot=function(e,t,a){if(!p(e))throw Error(s(299));var l=!1,n="",i=uf,o=ff,d=df,v=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),t=Vd(e,1,!0,t,a??null,l,n,v,i,o,d,a0),t.context=Zd(null),a=t.current,l=pt(),l=wr(l),n=ma(l),n.callback=null,ha(a,n,l),a=l,t.current.lanes=a,Gl(t,a),kt(t),e[el]=t.current,hc(e),new nr(t)},Un.version="19.2.4",Un}var p0;function Nh(){if(p0)return Hc.exports;p0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(c){console.error(c)}}return r(),Hc.exports=zh(),Hc.exports}var Ah=Nh();const Th=z0(Ah);var m0="popstate";function h0(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function Mh(r={}){function c(p,b){let{pathname:h="/",search:w="",hash:m=""}=Pa(p.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),Zc("",{pathname:h,search:w,hash:m},b.state&&b.state.usr||null,b.state&&b.state.key||"default")}function u(p,b){let h=p.document.querySelector("base"),w="";if(h&&h.getAttribute("href")){let m=p.location.href,g=m.indexOf("#");w=g===-1?m:m.slice(0,g)}return w+"#"+(typeof b=="string"?b:Bn(b))}function s(p,b){Ot(p.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(b)})`)}return Rh(c,u,s,r)}function Ne(r,c){if(r===!1||r===null||typeof r>"u")throw new Error(c)}function Ot(r,c){if(!r){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Oh(){return Math.random().toString(36).substring(2,10)}function g0(r,c){return{usr:r.state,key:r.key,idx:c,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Zc(r,c,u=null,s,p){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof c=="string"?Pa(c):c,state:u,key:c&&c.key||s||Oh(),unstable_mask:p}}function Bn({pathname:r="/",search:c="",hash:u=""}){return c&&c!=="?"&&(r+=c.charAt(0)==="?"?c:"?"+c),u&&u!=="#"&&(r+=u.charAt(0)==="#"?u:"#"+u),r}function Pa(r){let c={};if(r){let u=r.indexOf("#");u>=0&&(c.hash=r.substring(u),r=r.substring(0,u));let s=r.indexOf("?");s>=0&&(c.search=r.substring(s),r=r.substring(0,s)),r&&(c.pathname=r)}return c}function Rh(r,c,u,s={}){let{window:p=document.defaultView,v5Compat:b=!1}=s,h=p.history,w="POP",m=null,g=O();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function O(){return(h.state||{idx:null}).idx}function E(){w="POP";let k=O(),Y=k==null?null:k-g;g=k,m&&m({action:w,location:H.location,delta:Y})}function B(k,Y){w="PUSH";let J=h0(k)?k:Zc(H.location,k,Y);u&&u(J,k),g=O()+1;let Z=g0(J,g),se=H.createHref(J.unstable_mask||J);try{h.pushState(Z,"",se)}catch(ce){if(ce instanceof DOMException&&ce.name==="DataCloneError")throw ce;p.location.assign(se)}b&&m&&m({action:w,location:H.location,delta:1})}function L(k,Y){w="REPLACE";let J=h0(k)?k:Zc(H.location,k,Y);u&&u(J,k),g=O();let Z=g0(J,g),se=H.createHref(J.unstable_mask||J);h.replaceState(Z,"",se),b&&m&&m({action:w,location:H.location,delta:0})}function z(k){return Ch(k)}let H={get action(){return w},get location(){return r(p,h)},listen(k){if(m)throw new Error("A history only accepts one active listener");return p.addEventListener(m0,E),m=k,()=>{p.removeEventListener(m0,E),m=null}},createHref(k){return c(p,k)},createURL:z,encodeLocation(k){let Y=z(k);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:B,replace:L,go(k){return h.go(k)}};return H}function Ch(r,c=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(u,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Bn(r);return s=s.replace(/ $/,"%20"),!c&&s.startsWith("//")&&(s=u+s),new URL(s,u)}function N0(r,c,u="/"){return _h(r,c,u,!1)}function _h(r,c,u,s){let p=typeof c=="string"?Pa(c):c,b=ia(p.pathname||"/",u);if(b==null)return null;let h=A0(r);Dh(h);let w=null;for(let m=0;w==null&&m<h.length;++m){let g=Vh(b);w=Gh(h[m],g,s)}return w}function A0(r,c=[],u=[],s="",p=!1){let b=(h,w,m=p,g)=>{let O={relativePath:g===void 0?h.path||"":g,caseSensitive:h.caseSensitive===!0,childrenIndex:w,route:h};if(O.relativePath.startsWith("/")){if(!O.relativePath.startsWith(s)&&m)return;Ne(O.relativePath.startsWith(s),`Absolute route path "${O.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),O.relativePath=O.relativePath.slice(s.length)}let E=Bt([s,O.relativePath]),B=u.concat(O);h.children&&h.children.length>0&&(Ne(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),A0(h.children,c,B,E,m)),!(h.path==null&&!h.index)&&c.push({path:E,score:qh(E,h.index),routesMeta:B})};return r.forEach((h,w)=>{if(h.path===""||!h.path?.includes("?"))b(h,w);else for(let m of T0(h.path))b(h,w,!0,m)}),c}function T0(r){let c=r.split("/");if(c.length===0)return[];let[u,...s]=c,p=u.endsWith("?"),b=u.replace(/\?$/,"");if(s.length===0)return p?[b,""]:[b];let h=T0(s.join("/")),w=[];return w.push(...h.map(m=>m===""?b:[b,m].join("/"))),p&&w.push(...h),w.map(m=>r.startsWith("/")&&m===""?"/":m)}function Dh(r){r.sort((c,u)=>c.score!==u.score?u.score-c.score:Xh(c.routesMeta.map(s=>s.childrenIndex),u.routesMeta.map(s=>s.childrenIndex)))}var Uh=/^:[\w-]+$/,kh=3,Hh=2,Bh=1,Lh=10,Yh=-2,b0=r=>r==="*";function qh(r,c){let u=r.split("/"),s=u.length;return u.some(b0)&&(s+=Yh),c&&(s+=Hh),u.filter(p=>!b0(p)).reduce((p,b)=>p+(Uh.test(b)?kh:b===""?Bh:Lh),s)}function Xh(r,c){return r.length===c.length&&r.slice(0,-1).every((s,p)=>s===c[p])?r[r.length-1]-c[c.length-1]:0}function Gh(r,c,u=!1){let{routesMeta:s}=r,p={},b="/",h=[];for(let w=0;w<s.length;++w){let m=s[w],g=w===s.length-1,O=b==="/"?c:c.slice(b.length)||"/",E=sr({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},O),B=m.route;if(!E&&g&&u&&!s[s.length-1].route.index&&(E=sr({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},O)),!E)return null;Object.assign(p,E.params),h.push({params:p,pathname:Bt([b,E.pathname]),pathnameBase:Wh(Bt([b,E.pathnameBase])),route:B}),E.pathnameBase!=="/"&&(b=Bt([b,E.pathnameBase]))}return h}function sr(r,c){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[u,s]=Qh(r.path,r.caseSensitive,r.end),p=c.match(u);if(!p)return null;let b=p[0],h=b.replace(/(.)\/+$/,"$1"),w=p.slice(1);return{params:s.reduce((g,{paramName:O,isOptional:E},B)=>{if(O==="*"){let z=w[B]||"";h=b.slice(0,b.length-z.length).replace(/(.)\/+$/,"$1")}const L=w[B];return E&&!L?g[O]=void 0:g[O]=(L||"").replace(/%2F/g,"/"),g},{}),pathname:b,pathnameBase:h,pattern:r}}function Qh(r,c=!1,u=!0){Ot(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],p="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,w,m,g,O)=>{if(s.push({paramName:w,isOptional:m!=null}),m){let E=O.charAt(g+h.length);return E&&E!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),p+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?p+="\\/*$":r!==""&&r!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,c?void 0:"i"),s]}function Vh(r){try{return r.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Ot(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),r}}function ia(r,c){if(c==="/")return r;if(!r.toLowerCase().startsWith(c.toLowerCase()))return null;let u=c.endsWith("/")?c.length-1:c.length,s=r.charAt(u);return s&&s!=="/"?null:r.slice(u)||"/"}var Zh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Jh(r,c="/"){let{pathname:u,search:s="",hash:p=""}=typeof r=="string"?Pa(r):r,b;return u?(u=u.replace(/\/\/+/g,"/"),u.startsWith("/")?b=v0(u.substring(1),"/"):b=v0(u,c)):b=c,{pathname:b,search:$h(s),hash:Fh(p)}}function v0(r,c){let u=c.replace(/\/+$/,"").split("/");return r.split("/").forEach(p=>{p===".."?u.length>1&&u.pop():p!=="."&&u.push(p)}),u.length>1?u.join("/"):"/"}function qc(r,c,u,s){return`Cannot include a '${r}' character in a manually specified \`to.${c}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Kh(r){return r.filter((c,u)=>u===0||c.route.path&&c.route.path.length>0)}function M0(r){let c=Kh(r);return c.map((u,s)=>s===c.length-1?u.pathname:u.pathnameBase)}function Wc(r,c,u,s=!1){let p;typeof r=="string"?p=Pa(r):(p={...r},Ne(!p.pathname||!p.pathname.includes("?"),qc("?","pathname","search",p)),Ne(!p.pathname||!p.pathname.includes("#"),qc("#","pathname","hash",p)),Ne(!p.search||!p.search.includes("#"),qc("#","search","hash",p)));let b=r===""||p.pathname==="",h=b?"/":p.pathname,w;if(h==null)w=u;else{let E=c.length-1;if(!s&&h.startsWith("..")){let B=h.split("/");for(;B[0]==="..";)B.shift(),E-=1;p.pathname=B.join("/")}w=E>=0?c[E]:"/"}let m=Jh(p,w),g=h&&h!=="/"&&h.endsWith("/"),O=(b||h===".")&&u.endsWith("/");return!m.pathname.endsWith("/")&&(g||O)&&(m.pathname+="/"),m}var Bt=r=>r.join("/").replace(/\/\/+/g,"/"),Wh=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),$h=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Fh=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Ih=class{constructor(r,c,u,s=!1){this.status=r,this.statusText=c||"",this.internal=s,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function Ph(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function eg(r){return r.map(c=>c.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var O0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function R0(r,c){let u=r;if(typeof u!="string"||!Zh.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let s=u,p=!1;if(O0)try{let b=new URL(window.location.href),h=u.startsWith("//")?new URL(b.protocol+u):new URL(u),w=ia(h.pathname,c);h.origin===b.origin&&w!=null?u=w+h.search+h.hash:p=!0}catch{Ot(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:p,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var C0=["POST","PUT","PATCH","DELETE"];new Set(C0);var tg=["GET",...C0];new Set(tg);var Ll=T.createContext(null);Ll.displayName="DataRouter";var dr=T.createContext(null);dr.displayName="DataRouterState";var ag=T.createContext(!1),_0=T.createContext({isTransitioning:!1});_0.displayName="ViewTransition";var lg=T.createContext(new Map);lg.displayName="Fetchers";var ng=T.createContext(null);ng.displayName="Await";var Nt=T.createContext(null);Nt.displayName="Navigation";var Ln=T.createContext(null);Ln.displayName="Location";var Lt=T.createContext({outlet:null,matches:[],isDataRoute:!1});Lt.displayName="Route";var $c=T.createContext(null);$c.displayName="RouteError";var D0="REACT_ROUTER_ERROR",ig="REDIRECT",rg="ROUTE_ERROR_RESPONSE";function og(r){if(r.startsWith(`${D0}:${ig}:{`))try{let c=JSON.parse(r.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function cg(r){if(r.startsWith(`${D0}:${rg}:{`))try{let c=JSON.parse(r.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new Ih(c.status,c.statusText,c.data)}catch{}}function sg(r,{relative:c}={}){Ne(Yn(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:s}=T.useContext(Nt),{hash:p,pathname:b,search:h}=qn(r,{relative:c}),w=b;return u!=="/"&&(w=b==="/"?u:Bt([u,b])),s.createHref({pathname:w,search:h,hash:p})}function Yn(){return T.useContext(Ln)!=null}function Ca(){return Ne(Yn(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Ln).location}var U0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function k0(r){T.useContext(Nt).static||T.useLayoutEffect(r)}function ug(){let{isDataRoute:r}=T.useContext(Lt);return r?zg():fg()}function fg(){Ne(Yn(),"useNavigate() may be used only in the context of a <Router> component.");let r=T.useContext(Ll),{basename:c,navigator:u}=T.useContext(Nt),{matches:s}=T.useContext(Lt),{pathname:p}=Ca(),b=JSON.stringify(M0(s)),h=T.useRef(!1);return k0(()=>{h.current=!0}),T.useCallback((m,g={})=>{if(Ot(h.current,U0),!h.current)return;if(typeof m=="number"){u.go(m);return}let O=Wc(m,JSON.parse(b),p,g.relative==="path");r==null&&c!=="/"&&(O.pathname=O.pathname==="/"?c:Bt([c,O.pathname])),(g.replace?u.replace:u.push)(O,g.state,g)},[c,u,b,p,r])}var dg=T.createContext(null);function pg(r){let c=T.useContext(Lt).outlet;return T.useMemo(()=>c&&T.createElement(dg.Provider,{value:r},c),[c,r])}function qn(r,{relative:c}={}){let{matches:u}=T.useContext(Lt),{pathname:s}=Ca(),p=JSON.stringify(M0(u));return T.useMemo(()=>Wc(r,JSON.parse(p),s,c==="path"),[r,p,s,c])}function mg(r,c){return H0(r,c)}function H0(r,c,u){Ne(Yn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=T.useContext(Nt),{matches:p}=T.useContext(Lt),b=p[p.length-1],h=b?b.params:{},w=b?b.pathname:"/",m=b?b.pathnameBase:"/",g=b&&b.route;{let k=g&&g.path||"";L0(w,!g||k.endsWith("*")||k.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${w}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)}let O=Ca(),E;if(c){let k=typeof c=="string"?Pa(c):c;Ne(m==="/"||k.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${k.pathname}" was given in the \`location\` prop.`),E=k}else E=O;let B=E.pathname||"/",L=B;if(m!=="/"){let k=m.replace(/^\//,"").split("/");L="/"+B.replace(/^\//,"").split("/").slice(k.length).join("/")}let z=N0(r,{pathname:L});Ot(g||z!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Ot(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=xg(z&&z.map(k=>Object.assign({},k,{params:Object.assign({},h,k.params),pathname:Bt([m,s.encodeLocation?s.encodeLocation(k.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?m:Bt([m,s.encodeLocation?s.encodeLocation(k.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathnameBase])})),p,u);return c&&H?T.createElement(Ln.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...E},navigationType:"POP"}},H):H}function hg(){let r=jg(),c=Ph(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),u=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:s},b={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:b},"ErrorBoundary")," or"," ",T.createElement("code",{style:b},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},c),u?T.createElement("pre",{style:p},u):null,h)}var gg=T.createElement(hg,null),B0=class extends T.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,c){return c.location!==r.location||c.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:c.error,location:c.location,revalidation:r.revalidation||c.revalidation}}componentDidCatch(r,c){this.props.onError?this.props.onError(r,c):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const u=cg(r.digest);u&&(r=u)}let c=r!==void 0?T.createElement(Lt.Provider,{value:this.props.routeContext},T.createElement($c.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?T.createElement(bg,{error:r},c):c}};B0.contextType=ag;var Xc=new WeakMap;function bg({children:r,error:c}){let{basename:u}=T.useContext(Nt);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let s=og(c.digest);if(s){let p=Xc.get(c);if(p)throw p;let b=R0(s.location,u);if(O0&&!Xc.get(c))if(b.isExternal||s.reloadDocument)window.location.href=b.absoluteURL||b.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(b.to,{replace:s.replace}));throw Xc.set(c,h),h}return T.createElement("meta",{httpEquiv:"refresh",content:`0;url=${b.absoluteURL||b.to}`})}}return r}function vg({routeContext:r,match:c,children:u}){let s=T.useContext(Ll);return s&&s.static&&s.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=c.route.id),T.createElement(Lt.Provider,{value:r},u)}function xg(r,c=[],u){let s=u?.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(c.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let p=r,b=s?.errors;if(b!=null){let O=p.findIndex(E=>E.route.id&&b?.[E.route.id]!==void 0);Ne(O>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(b).join(",")}`),p=p.slice(0,Math.min(p.length,O+1))}let h=!1,w=-1;if(u&&s){h=s.renderFallback;for(let O=0;O<p.length;O++){let E=p[O];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(w=O),E.route.id){let{loaderData:B,errors:L}=s,z=E.route.loader&&!B.hasOwnProperty(E.route.id)&&(!L||L[E.route.id]===void 0);if(E.route.lazy||z){u.isStatic&&(h=!0),w>=0?p=p.slice(0,w+1):p=[p[0]];break}}}}let m=u?.onError,g=s&&m?(O,E)=>{m(O,{location:s.location,params:s.matches?.[0]?.params??{},unstable_pattern:eg(s.matches),errorInfo:E})}:void 0;return p.reduceRight((O,E,B)=>{let L,z=!1,H=null,k=null;s&&(L=b&&E.route.id?b[E.route.id]:void 0,H=E.route.errorElement||gg,h&&(w<0&&B===0?(L0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),z=!0,k=null):w===B&&(z=!0,k=E.route.hydrateFallbackElement||null)));let Y=c.concat(p.slice(0,B+1)),J=()=>{let Z;return L?Z=H:z?Z=k:E.route.Component?Z=T.createElement(E.route.Component,null):E.route.element?Z=E.route.element:Z=O,T.createElement(vg,{match:E,routeContext:{outlet:O,matches:Y,isDataRoute:s!=null},children:Z})};return s&&(E.route.ErrorBoundary||E.route.errorElement||B===0)?T.createElement(B0,{location:s.location,revalidation:s.revalidation,component:H,error:L,children:J(),routeContext:{outlet:null,matches:Y,isDataRoute:!0},onError:g}):J()},null)}function Fc(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yg(r){let c=T.useContext(Ll);return Ne(c,Fc(r)),c}function Sg(r){let c=T.useContext(dr);return Ne(c,Fc(r)),c}function Eg(r){let c=T.useContext(Lt);return Ne(c,Fc(r)),c}function Ic(r){let c=Eg(r),u=c.matches[c.matches.length-1];return Ne(u.route.id,`${r} can only be used on routes that contain a unique "id"`),u.route.id}function wg(){return Ic("useRouteId")}function jg(){let r=T.useContext($c),c=Sg("useRouteError"),u=Ic("useRouteError");return r!==void 0?r:c.errors?.[u]}function zg(){let{router:r}=yg("useNavigate"),c=Ic("useNavigate"),u=T.useRef(!1);return k0(()=>{u.current=!0}),T.useCallback(async(p,b={})=>{Ot(u.current,U0),u.current&&(typeof p=="number"?await r.navigate(p):await r.navigate(p,{fromRouteId:c,...b}))},[r,c])}var x0={};function L0(r,c,u){!c&&!x0[r]&&(x0[r]=!0,Ot(!1,u))}T.memo(Ng);function Ng({routes:r,future:c,state:u,isStatic:s,onError:p}){return H0(r,void 0,{state:u,isStatic:s,onError:p})}function Ag(r){return pg(r.context)}function Ia(r){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Tg({basename:r="/",children:c=null,location:u,navigationType:s="POP",navigator:p,static:b=!1,unstable_useTransitions:h}){Ne(!Yn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let w=r.replace(/^\/*/,"/"),m=T.useMemo(()=>({basename:w,navigator:p,static:b,unstable_useTransitions:h,future:{}}),[w,p,b,h]);typeof u=="string"&&(u=Pa(u));let{pathname:g="/",search:O="",hash:E="",state:B=null,key:L="default",unstable_mask:z}=u,H=T.useMemo(()=>{let k=ia(g,w);return k==null?null:{location:{pathname:k,search:O,hash:E,state:B,key:L,unstable_mask:z},navigationType:s}},[w,g,O,E,B,L,s,z]);return Ot(H!=null,`<Router basename="${w}"> is not able to match the URL "${g}${O}${E}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:T.createElement(Nt.Provider,{value:m},T.createElement(Ln.Provider,{children:c,value:H}))}function Mg({children:r,location:c}){return mg(Jc(r),c)}function Jc(r,c=[]){let u=[];return T.Children.forEach(r,(s,p)=>{if(!T.isValidElement(s))return;let b=[...c,p];if(s.type===T.Fragment){u.push.apply(u,Jc(s.props.children,b));return}Ne(s.type===Ia,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||b.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Jc(s.props.children,b)),u.push(h)}),u}var or="get",cr="application/x-www-form-urlencoded";function pr(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function Og(r){return pr(r)&&r.tagName.toLowerCase()==="button"}function Rg(r){return pr(r)&&r.tagName.toLowerCase()==="form"}function Cg(r){return pr(r)&&r.tagName.toLowerCase()==="input"}function _g(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Dg(r,c){return r.button===0&&(!c||c==="_self")&&!_g(r)}var rr=null;function Ug(){if(rr===null)try{new FormData(document.createElement("form"),0),rr=!1}catch{rr=!0}return rr}var kg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gc(r){return r!=null&&!kg.has(r)?(Ot(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cr}"`),null):r}function Hg(r,c){let u,s,p,b,h;if(Rg(r)){let w=r.getAttribute("action");s=w?ia(w,c):null,u=r.getAttribute("method")||or,p=Gc(r.getAttribute("enctype"))||cr,b=new FormData(r)}else if(Og(r)||Cg(r)&&(r.type==="submit"||r.type==="image")){let w=r.form;if(w==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||w.getAttribute("action");if(s=m?ia(m,c):null,u=r.getAttribute("formmethod")||w.getAttribute("method")||or,p=Gc(r.getAttribute("formenctype"))||Gc(w.getAttribute("enctype"))||cr,b=new FormData(w,r),!Ug()){let{name:g,type:O,value:E}=r;if(O==="image"){let B=g?`${g}.`:"";b.append(`${B}x`,"0"),b.append(`${B}y`,"0")}else g&&b.append(g,E)}}else{if(pr(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=or,s=null,p=cr,h=r}return b&&p==="text/plain"&&(h=b,b=void 0),{action:s,method:u.toLowerCase(),encType:p,formData:b,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Pc(r,c){if(r===!1||r===null||typeof r>"u")throw new Error(c)}function Bg(r,c,u,s){let p=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return u?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${s}`:p.pathname=`${p.pathname}.${s}`:p.pathname==="/"?p.pathname=`_root.${s}`:c&&ia(p.pathname,c)==="/"?p.pathname=`${c.replace(/\/$/,"")}/_root.${s}`:p.pathname=`${p.pathname.replace(/\/$/,"")}.${s}`,p}async function Lg(r,c){if(r.id in c)return c[r.id];try{let u=await import(r.module);return c[r.id]=u,u}catch(u){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Yg(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function qg(r,c,u){let s=await Promise.all(r.map(async p=>{let b=c.routes[p.route.id];if(b){let h=await Lg(b,u);return h.links?h.links():[]}return[]}));return Vg(s.flat(1).filter(Yg).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function y0(r,c,u,s,p,b){let h=(m,g)=>u[g]?m.route.id!==u[g].route.id:!0,w=(m,g)=>u[g].pathname!==m.pathname||u[g].route.path?.endsWith("*")&&u[g].params["*"]!==m.params["*"];return b==="assets"?c.filter((m,g)=>h(m,g)||w(m,g)):b==="data"?c.filter((m,g)=>{let O=s.routes[m.route.id];if(!O||!O.hasLoader)return!1;if(h(m,g)||w(m,g))return!0;if(m.route.shouldRevalidate){let E=m.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function Xg(r,c,{includeHydrateFallback:u}={}){return Gg(r.map(s=>{let p=c.routes[s.route.id];if(!p)return[];let b=[p.module];return p.clientActionModule&&(b=b.concat(p.clientActionModule)),p.clientLoaderModule&&(b=b.concat(p.clientLoaderModule)),u&&p.hydrateFallbackModule&&(b=b.concat(p.hydrateFallbackModule)),p.imports&&(b=b.concat(p.imports)),b}).flat(1))}function Gg(r){return[...new Set(r)]}function Qg(r){let c={},u=Object.keys(r).sort();for(let s of u)c[s]=r[s];return c}function Vg(r,c){let u=new Set;return new Set(c),r.reduce((s,p)=>{let b=JSON.stringify(Qg(p));return u.has(b)||(u.add(b),s.push({key:b,link:p})),s},[])}function Y0(){let r=T.useContext(Ll);return Pc(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Zg(){let r=T.useContext(dr);return Pc(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var es=T.createContext(void 0);es.displayName="FrameworkContext";function q0(){let r=T.useContext(es);return Pc(r,"You must render this element inside a <HydratedRouter> element"),r}function Jg(r,c){let u=T.useContext(es),[s,p]=T.useState(!1),[b,h]=T.useState(!1),{onFocus:w,onBlur:m,onMouseEnter:g,onMouseLeave:O,onTouchStart:E}=c,B=T.useRef(null);T.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let H=Y=>{Y.forEach(J=>{h(J.isIntersecting)})},k=new IntersectionObserver(H,{threshold:.5});return B.current&&k.observe(B.current),()=>{k.disconnect()}}},[r]),T.useEffect(()=>{if(s){let H=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(H)}}},[s]);let L=()=>{p(!0)},z=()=>{p(!1),h(!1)};return u?r!=="intent"?[b,B,{}]:[b,B,{onFocus:kn(w,L),onBlur:kn(m,z),onMouseEnter:kn(g,L),onMouseLeave:kn(O,z),onTouchStart:kn(E,L)}]:[!1,B,{}]}function kn(r,c){return u=>{r&&r(u),u.defaultPrevented||c(u)}}function Kg({page:r,...c}){let{router:u}=Y0(),s=T.useMemo(()=>N0(u.routes,r,u.basename),[u.routes,r,u.basename]);return s?T.createElement($g,{page:r,matches:s,...c}):null}function Wg(r){let{manifest:c,routeModules:u}=q0(),[s,p]=T.useState([]);return T.useEffect(()=>{let b=!1;return qg(r,c,u).then(h=>{b||p(h)}),()=>{b=!0}},[r,c,u]),s}function $g({page:r,matches:c,...u}){let s=Ca(),{future:p,manifest:b,routeModules:h}=q0(),{basename:w}=Y0(),{loaderData:m,matches:g}=Zg(),O=T.useMemo(()=>y0(r,c,g,b,s,"data"),[r,c,g,b,s]),E=T.useMemo(()=>y0(r,c,g,b,s,"assets"),[r,c,g,b,s]),B=T.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let H=new Set,k=!1;if(c.forEach(J=>{let Z=b.routes[J.route.id];!Z||!Z.hasLoader||(!O.some(se=>se.route.id===J.route.id)&&J.route.id in m&&h[J.route.id]?.shouldRevalidate||Z.hasClientLoader?k=!0:H.add(J.route.id))}),H.size===0)return[];let Y=Bg(r,w,p.unstable_trailingSlashAwareDataRequests,"data");return k&&H.size>0&&Y.searchParams.set("_routes",c.filter(J=>H.has(J.route.id)).map(J=>J.route.id).join(",")),[Y.pathname+Y.search]},[w,p.unstable_trailingSlashAwareDataRequests,m,s,b,O,c,r,h]),L=T.useMemo(()=>Xg(E,b),[E,b]),z=Wg(E);return T.createElement(T.Fragment,null,B.map(H=>T.createElement("link",{key:H,rel:"prefetch",as:"fetch",href:H,...u})),L.map(H=>T.createElement("link",{key:H,rel:"modulepreload",href:H,...u})),z.map(({key:H,link:k})=>T.createElement("link",{key:H,nonce:u.nonce,...k,crossOrigin:k.crossOrigin??u.crossOrigin})))}function Fg(...r){return c=>{r.forEach(u=>{typeof u=="function"?u(c):u!=null&&(u.current=c)})}}var Ig=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ig&&(window.__reactRouterVersion="7.13.1")}catch{}function Pg({basename:r,children:c,unstable_useTransitions:u,window:s}){let p=T.useRef();p.current==null&&(p.current=Mh({window:s,v5Compat:!0}));let b=p.current,[h,w]=T.useState({action:b.action,location:b.location}),m=T.useCallback(g=>{u===!1?w(g):T.startTransition(()=>w(g))},[u]);return T.useLayoutEffect(()=>b.listen(m),[b,m]),T.createElement(Tg,{basename:r,children:c,location:h.location,navigationType:h.action,navigator:b,unstable_useTransitions:u})}var X0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ht=T.forwardRef(function({onClick:c,discover:u="render",prefetch:s="none",relative:p,reloadDocument:b,replace:h,unstable_mask:w,state:m,target:g,to:O,preventScrollReset:E,viewTransition:B,unstable_defaultShouldRevalidate:L,...z},H){let{basename:k,navigator:Y,unstable_useTransitions:J}=T.useContext(Nt),Z=typeof O=="string"&&X0.test(O),se=R0(O,k);O=se.to;let ce=sg(O,{relative:p}),ye=Ca(),F=null;if(w){let _e=Wc(w,[],ye.unstable_mask?ye.unstable_mask.pathname:"/",!0);k!=="/"&&(_e.pathname=_e.pathname==="/"?k:Bt([k,_e.pathname])),F=Y.createHref(_e)}let[Me,Ze,Rt]=Jg(s,z),mt=ab(O,{replace:h,unstable_mask:w,state:m,target:g,preventScrollReset:E,relative:p,viewTransition:B,unstable_defaultShouldRevalidate:L,unstable_useTransitions:J});function Je(_e){c&&c(_e),_e.defaultPrevented||mt(_e)}let Ct=!(se.isExternal||b),ht=T.createElement("a",{...z,...Rt,href:(Ct?F:void 0)||se.absoluteURL||ce,onClick:Ct?Je:c,ref:Fg(H,Ze),target:g,"data-discover":!Z&&u==="render"?"true":void 0});return Me&&!Z?T.createElement(T.Fragment,null,ht,T.createElement(Kg,{page:ce})):ht});Ht.displayName="Link";var Bl=T.forwardRef(function({"aria-current":c="page",caseSensitive:u=!1,className:s="",end:p=!1,style:b,to:h,viewTransition:w,children:m,...g},O){let E=qn(h,{relative:g.relative}),B=Ca(),L=T.useContext(dr),{navigator:z,basename:H}=T.useContext(Nt),k=L!=null&&ob(E)&&w===!0,Y=z.encodeLocation?z.encodeLocation(E).pathname:E.pathname,J=B.pathname,Z=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;u||(J=J.toLowerCase(),Z=Z?Z.toLowerCase():null,Y=Y.toLowerCase()),Z&&H&&(Z=ia(Z,H)||Z);const se=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let ce=J===Y||!p&&J.startsWith(Y)&&J.charAt(se)==="/",ye=Z!=null&&(Z===Y||!p&&Z.startsWith(Y)&&Z.charAt(Y.length)==="/"),F={isActive:ce,isPending:ye,isTransitioning:k},Me=ce?c:void 0,Ze;typeof s=="function"?Ze=s(F):Ze=[s,ce?"active":null,ye?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let Rt=typeof b=="function"?b(F):b;return T.createElement(Ht,{...g,"aria-current":Me,className:Ze,ref:O,style:Rt,to:h,viewTransition:w},typeof m=="function"?m(F):m)});Bl.displayName="NavLink";var eb=T.forwardRef(({discover:r="render",fetcherKey:c,navigate:u,reloadDocument:s,replace:p,state:b,method:h=or,action:w,onSubmit:m,relative:g,preventScrollReset:O,viewTransition:E,unstable_defaultShouldRevalidate:B,...L},z)=>{let{unstable_useTransitions:H}=T.useContext(Nt),k=ib(),Y=rb(w,{relative:g}),J=h.toLowerCase()==="get"?"get":"post",Z=typeof w=="string"&&X0.test(w),se=ce=>{if(m&&m(ce),ce.defaultPrevented)return;ce.preventDefault();let ye=ce.nativeEvent.submitter,F=ye?.getAttribute("formmethod")||h,Me=()=>k(ye||ce.currentTarget,{fetcherKey:c,method:F,navigate:u,replace:p,state:b,relative:g,preventScrollReset:O,viewTransition:E,unstable_defaultShouldRevalidate:B});H&&u!==!1?T.startTransition(()=>Me()):Me()};return T.createElement("form",{ref:z,method:J,action:Y,onSubmit:s?m:se,...L,"data-discover":!Z&&r==="render"?"true":void 0})});eb.displayName="Form";function tb(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function G0(r){let c=T.useContext(Ll);return Ne(c,tb(r)),c}function ab(r,{target:c,replace:u,unstable_mask:s,state:p,preventScrollReset:b,relative:h,viewTransition:w,unstable_defaultShouldRevalidate:m,unstable_useTransitions:g}={}){let O=ug(),E=Ca(),B=qn(r,{relative:h});return T.useCallback(L=>{if(Dg(L,c)){L.preventDefault();let z=u!==void 0?u:Bn(E)===Bn(B),H=()=>O(r,{replace:z,unstable_mask:s,state:p,preventScrollReset:b,relative:h,viewTransition:w,unstable_defaultShouldRevalidate:m});g?T.startTransition(()=>H()):H()}},[E,O,B,u,s,p,c,r,b,h,w,m,g])}var lb=0,nb=()=>`__${String(++lb)}__`;function ib(){let{router:r}=G0("useSubmit"),{basename:c}=T.useContext(Nt),u=wg(),s=r.fetch,p=r.navigate;return T.useCallback(async(b,h={})=>{let{action:w,method:m,encType:g,formData:O,body:E}=Hg(b,c);if(h.navigate===!1){let B=h.fetcherKey||nb();await s(B,u,h.action||w,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:O,body:E,formMethod:h.method||m,formEncType:h.encType||g,flushSync:h.flushSync})}else await p(h.action||w,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:O,body:E,formMethod:h.method||m,formEncType:h.encType||g,replace:h.replace,state:h.state,fromRouteId:u,flushSync:h.flushSync,viewTransition:h.viewTransition})},[s,p,c,u])}function rb(r,{relative:c}={}){let{basename:u}=T.useContext(Nt),s=T.useContext(Lt);Ne(s,"useFormAction must be used inside a RouteContext");let[p]=s.matches.slice(-1),b={...qn(r||".",{relative:c})},h=Ca();if(r==null){b.search=h.search;let w=new URLSearchParams(b.search),m=w.getAll("index");if(m.some(O=>O==="")){w.delete("index"),m.filter(E=>E).forEach(E=>w.append("index",E));let O=w.toString();b.search=O?`?${O}`:""}}return(!r||r===".")&&p.route.index&&(b.search=b.search?b.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(b.pathname=b.pathname==="/"?u:Bt([u,b.pathname])),Bn(b)}function ob(r,{relative:c}={}){let u=T.useContext(_0);Ne(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=G0("useViewTransitionState"),p=qn(r,{relative:c});if(!u.isTransitioning)return!1;let b=ia(u.currentLocation.pathname,s)||u.currentLocation.pathname,h=ia(u.nextLocation.pathname,s)||u.nextLocation.pathname;return sr(p.pathname,h)!=null||sr(p.pathname,b)!=null}const cb=()=>{const[r,c]=T.useState(!1),[u,s]=T.useState(!1),[p,b]=T.useState(null);T.useRef(null);const h=T.useRef(null),w=[{name:"Home",to:"/",code:"00"},{name:"Projects",to:"/projects",code:"01"},{name:"Skills",to:"/skills",code:"02"},{name:"About",to:"/about",code:"03"},{name:"Contact",to:"/contact",code:"04"}];return T.useEffect(()=>{const m=()=>s(window.scrollY>20);return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]),f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsxs("nav",{className:`nav-shell ${u?"scrolled":""}`,children:[f.jsx("div",{className:"nav-scanline"}),f.jsxs("div",{className:"nav-inner",children:[f.jsxs(Bl,{to:"/",className:"nav-logo",children:[f.jsx("span",{className:"nav-logo-bracket",children:"["}),f.jsxs("div",{children:[f.jsxs("span",{className:"nav-logo-text",children:["VM",f.jsx("span",{className:"nav-logo-dot"})]}),f.jsx("span",{className:"nav-logo-sub",children:"v2.0 · neural"})]}),f.jsx("span",{className:"nav-logo-bracket",children:"]"})]}),f.jsx("ul",{className:"nav-links",ref:h,children:w.map((m,g)=>f.jsx("li",{className:"nav-item",children:f.jsxs(Bl,{to:m.to,className:({isActive:O})=>`nav-link-btn${O?" active":""}`,children:[f.jsx("span",{className:"link-code",children:m.code}),m.name]})},m.name))}),f.jsxs("div",{className:"nav-cta",children:[f.jsxs("div",{className:"nav-status",children:[f.jsx("span",{className:"nav-status-dot"}),"Available"]}),f.jsxs(Bl,{to:"/contact",className:"nav-hire-btn",children:["Hire Me",f.jsx("span",{className:"hire-arrow",children:"→"})]})]}),f.jsx("button",{className:"nav-mobile-btn",onClick:()=>c(!r),"aria-label":"Toggle menu",children:f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:r?f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"4",y1:"4",x2:"16",y2:"16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),f.jsx("line",{x1:"16",y1:"4",x2:"4",y2:"16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}):f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"3",y1:"6",x2:"17",y2:"6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),f.jsx("line",{x1:"3",y1:"10",x2:"13",y2:"10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),f.jsx("line",{x1:"3",y1:"14",x2:"17",y2:"14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})})]}),f.jsxs("div",{className:`nav-mobile-panel${r?" open":""}`,children:[w.map(m=>f.jsxs(Bl,{to:m.to,onClick:()=>c(!1),className:({isActive:g})=>`mobile-link${g?" active":""}`,children:[f.jsx("span",{children:m.name}),f.jsxs("span",{className:"mobile-link-code",children:["_",m.code]})]},m.name)),f.jsx("div",{className:"mobile-divider"}),f.jsx(Bl,{to:"/contact",onClick:()=>c(!1),className:"mobile-hire",children:"Hire Me →"}),f.jsxs("div",{className:"mobile-footer",children:[f.jsx("span",{className:"mobile-footer-dot"}),"SYS_ONLINE · OPEN_TO_WORK"]})]})]})]})};var Q0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},S0=Ra.createContext&&Ra.createContext(Q0),sb=["attr","size","title"];function ub(r,c){if(r==null)return{};var u,s,p=fb(r,c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(r);for(s=0;s<b.length;s++)u=b[s],c.indexOf(u)===-1&&{}.propertyIsEnumerable.call(r,u)&&(p[u]=r[u])}return p}function fb(r,c){if(r==null)return{};var u={};for(var s in r)if({}.hasOwnProperty.call(r,s)){if(c.indexOf(s)!==-1)continue;u[s]=r[s]}return u}function ur(){return ur=Object.assign?Object.assign.bind():function(r){for(var c=1;c<arguments.length;c++){var u=arguments[c];for(var s in u)({}).hasOwnProperty.call(u,s)&&(r[s]=u[s])}return r},ur.apply(null,arguments)}function E0(r,c){var u=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);c&&(s=s.filter(function(p){return Object.getOwnPropertyDescriptor(r,p).enumerable})),u.push.apply(u,s)}return u}function fr(r){for(var c=1;c<arguments.length;c++){var u=arguments[c]!=null?arguments[c]:{};c%2?E0(Object(u),!0).forEach(function(s){db(r,s,u[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(u)):E0(Object(u)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(u,s))})}return r}function db(r,c,u){return(c=pb(c))in r?Object.defineProperty(r,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[c]=u,r}function pb(r){var c=mb(r,"string");return typeof c=="symbol"?c:c+""}function mb(r,c){if(typeof r!="object"||!r)return r;var u=r[Symbol.toPrimitive];if(u!==void 0){var s=u.call(r,c);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(r)}function V0(r){return r&&r.map((c,u)=>Ra.createElement(c.tag,fr({key:u},c.attr),V0(c.child)))}function mr(r){return c=>Ra.createElement(hb,ur({attr:fr({},r.attr)},c),V0(r.child))}function hb(r){var c=u=>{var{attr:s,size:p,title:b}=r,h=ub(r,sb),w=p||u.size||"1em",m;return u.className&&(m=u.className),r.className&&(m=(m?m+" ":"")+r.className),Ra.createElement("svg",ur({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,s,h,{className:m,style:fr(fr({color:r.color||u.color},u.style),r.style),height:w,width:w,xmlns:"http://www.w3.org/2000/svg"}),b&&Ra.createElement("title",null,b),r.children)};return S0!==void 0?Ra.createElement(S0.Consumer,null,u=>c(u)):c(Q0)}function Z0(r){return mr({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(r)}function J0(r){return mr({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(r)}function ts(r){return mr({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(r)}function gb(r){return mr({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(r)}const bb=()=>{const r=new Date().getFullYear(),c=[{name:"Home",to:"/",code:"00"},{name:"Projects",to:"/projects",code:"01"},{name:"Skills",to:"/skills",code:"02"},{name:"About",to:"/about",code:"03"},{name:"Contact",to:"/contact",code:"04"}],u=[{icon:f.jsx(ts,{}),href:"https://github.com/vaibhavmishram3",label:"GitHub",handle:"@vaibhavmishram3"},{icon:f.jsx(J0,{}),href:"https://www.linkedin.com/in/vaibhavmishram3/",label:"LinkedIn",handle:"vaibhavmishram3"},{icon:f.jsx(Z0,{}),href:"https://wa.me/+918302979123",label:"WhatsApp",handle:"+91 83029 79123"}],s=[{key:"SPECIALIZATION",val:"AI & ML"},{key:"STACK",val:"Python · React · Node"},{key:"STATUS",val:"OPEN_TO_WORK"},{key:"VERSION",val:"v2.0.26"}];return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsxs("footer",{className:"ft-root",children:[f.jsx("div",{className:"ft-scanline"}),f.jsxs("div",{className:"ft-grid",children:[f.jsxs("div",{className:"ft-brand",children:[f.jsxs(Ht,{to:"/",className:"ft-logo",children:[f.jsx("span",{className:"ft-logo-bracket",children:"["}),f.jsxs("span",{className:"ft-logo-name",children:["VM",f.jsx("span",{className:"ft-logo-dot"})]}),f.jsx("span",{className:"ft-logo-bracket",children:"]"})]}),f.jsx("p",{className:"ft-bio",children:"Passionate AI & Machine Learning developer building intelligent, data-driven applications with scalable and efficient software architecture."}),f.jsx("div",{className:"ft-specs",children:s.map(p=>f.jsxs("div",{className:"ft-spec-row",children:[f.jsx("span",{className:"ft-spec-key",children:p.key}),f.jsx("span",{className:"ft-spec-sep",children:":"}),f.jsx("span",{className:`ft-spec-val${p.val==="OPEN_TO_WORK"?" online":""}`,children:p.val})]},p.key))})]}),f.jsxs("div",{children:[f.jsx("div",{className:"ft-col-head",children:"Navigation"}),f.jsx("ul",{className:"ft-nav-list",children:c.map(p=>f.jsx("li",{className:"ft-nav-item",children:f.jsxs(Ht,{to:p.to,children:[p.name,f.jsxs("span",{className:"ft-nav-code",children:["_",p.code]})]})},p.name))})]}),f.jsxs("div",{children:[f.jsx("div",{className:"ft-col-head",children:"Connect"}),f.jsx("div",{className:"ft-social-list",children:u.map(p=>f.jsxs("a",{href:p.href,target:"_blank",rel:"noreferrer",className:"ft-social-card",children:[f.jsx("span",{className:"ft-social-icon",children:p.icon}),f.jsxs("div",{className:"ft-social-info",children:[f.jsx("span",{className:"ft-social-label",children:p.label}),f.jsx("span",{className:"ft-social-handle",children:p.handle})]}),f.jsx("span",{className:"ft-social-arrow",children:"→"})]},p.label))})]})]}),f.jsx("div",{className:"ft-bottom",children:f.jsxs("div",{className:"ft-bottom-inner",children:[f.jsxs("span",{className:"ft-copy",children:["© ",r," ",f.jsx("span",{children:"Vaibhav Mishra"}),". All rights reserved."]}),f.jsxs("div",{className:"ft-status-row",children:[f.jsxs("div",{className:"ft-status-pill",children:[f.jsx("span",{className:"ft-status-pill-dot"}),"Sys online"]}),f.jsxs("span",{className:"ft-build",children:["BUILD_",r," · NEURAL_v2"]})]})]})})]})]})},vb=()=>{const r=T.useRef(null);return T.useEffect(()=>{const c=r.current,u=c.getContext("2d");let s;const p=()=>{c.width=window.innerWidth,c.height=window.innerHeight};p(),window.addEventListener("resize",p);const h=Array.from({length:65},()=>({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,vx:(Math.random()-.5)*.38,vy:(Math.random()-.5)*.38,r:Math.random()*1.8+.8,pulse:Math.random()*Math.PI*2})),w=()=>{u.clearRect(0,0,c.width,c.height),h.forEach(m=>{m.x+=m.vx,m.y+=m.vy,m.pulse+=.022,(m.x<0||m.x>c.width)&&(m.vx*=-1),(m.y<0||m.y>c.height)&&(m.vy*=-1)});for(let m=0;m<h.length;m++)for(let g=m+1;g<h.length;g++){const O=h[m].x-h[g].x,E=h[m].y-h[g].y,B=Math.sqrt(O*O+E*E);if(B<155){const L=(1-B/155)*.22,z=(Math.sin(h[m].pulse)+1)/2;u.beginPath(),u.moveTo(h[m].x,h[m].y),u.lineTo(h[g].x,h[g].y),u.strokeStyle=`rgba(0,210,255,${L*(.5+z*.5)})`,u.lineWidth=.55,u.stroke()}}h.forEach(m=>{const g=(Math.sin(m.pulse)+1)/2,O=m.r+g*1.4,E=u.createRadialGradient(m.x,m.y,0,m.x,m.y,O*4);E.addColorStop(0,`rgba(0,230,255,${.75+g*.25})`),E.addColorStop(.4,"rgba(0,150,220,0.35)"),E.addColorStop(1,"rgba(0,0,0,0)"),u.beginPath(),u.arc(m.x,m.y,O*4,0,Math.PI*2),u.fillStyle=E,u.fill(),u.beginPath(),u.arc(m.x,m.y,O,0,Math.PI*2),u.fillStyle=`rgba(180,240,255,${.65+g*.35})`,u.fill()}),s=requestAnimationFrame(w)};return w(),()=>{cancelAnimationFrame(s),window.removeEventListener("resize",p)}},[]),f.jsx("canvas",{ref:r,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0,opacity:.32,pointerEvents:"none"}})},xb=()=>f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
    `}),f.jsx(vb,{}),f.jsx("div",{id:"layout-grid-overlay"}),f.jsx("div",{id:"layout-vignette"}),f.jsxs("div",{id:"layout-content",children:[f.jsx(cb,{}),f.jsx("main",{id:"layout-main",children:f.jsx(Ag,{})}),f.jsx(bb,{})]})]}),w0=(r,c,u,s)=>{r.style.transition=`${c} ${u}ms ${s}`},na=(r,c,u)=>Math.min(Math.max(r,c),u);class yb{constructor(c,u){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=h=>{const{width:w,height:m}=h,g=Math.sqrt(w**2+m**2);return{width:g,height:g}},this.setSize=h=>{const w=this.calculateGlareSize(h);this.glareEl.style.width=`${w.width}px`,this.glareEl.style.height=`${w.height}px`},this.update=(h,w,m,g)=>{this.updateAngle(h,w.glareReverse),this.updateOpacity(h,w,m,g)},this.updateAngle=(h,w)=>{const{xPercentage:m,yPercentage:g}=h,O=180/Math.PI,E=m?Math.atan2(g,-m)*O:0;this.glareAngle=E-(w?180:0)},this.updateOpacity=(h,w,m,g)=>{const{xPercentage:O,yPercentage:E}=h,{glarePosition:B,glareReverse:L,glareMaxOpacity:z}=w,H=m?-1:1,k=g?-1:1,Y=L?-1:1;let J=0;switch(B){case"top":J=-O*H*Y;break;case"right":J=E*k*Y;break;case"bottom":case void 0:J=O*H*Y;break;case"left":J=-E*k*Y;break;case"all":J=Math.hypot(O,E)}const Z=na(J,0,100);this.glareOpacity=Z*z/100},this.render=h=>{const{glareColor:w}=h;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${w} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const s={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:u,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},p=this.calculateGlareSize(c),b={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${p.width}px`,height:`${p.height}px`};Object.assign(this.glareWrapperEl.style,s),Object.assign(this.glareEl.style,b)}}class Sb{constructor(){this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(c,u)=>{this.updateTilt(c,u),this.updateTiltManualInput(c,u),this.updateTiltReverse(u),this.updateTiltLimits(u)},this.updateTilt=(c,u)=>{const{xPercentage:s,yPercentage:p}=c,{tiltMaxAngleX:b,tiltMaxAngleY:h}=u;this.tiltAngleX=s*b/100,this.tiltAngleY=p*h/100*-1},this.updateTiltManualInput=(c,u)=>{const{tiltAngleXManual:s,tiltAngleYManual:p,tiltMaxAngleX:b,tiltMaxAngleY:h}=u;(s!==null||p!==null)&&(this.tiltAngleX=s!==null?s:0,this.tiltAngleY=p!==null?p:0,c.xPercentage=100*this.tiltAngleX/b,c.yPercentage=100*this.tiltAngleY/h)},this.updateTiltReverse=c=>{const u=c.tiltReverse?-1:1;this.tiltAngleX=u*this.tiltAngleX,this.tiltAngleY=u*this.tiltAngleY},this.updateTiltLimits=c=>{const{tiltAxis:u}=c;this.tiltAngleX=na(this.tiltAngleX,-90,90),this.tiltAngleY=na(this.tiltAngleY,-90,90),u&&(this.tiltAngleX=u==="x"?this.tiltAngleX:0,this.tiltAngleY=u==="y"?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=c=>{const{tiltMaxAngleX:u,tiltMaxAngleY:s}=c;this.tiltAngleXPercentage=this.tiltAngleX/u*100,this.tiltAngleYPercentage=this.tiltAngleY/s*100},this.render=c=>{c.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const Eb={scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1,tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null,glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"};class hr extends T.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=async()=>{if(!window.DeviceOrientationEvent)return;const c=DeviceOrientationEvent.requestPermission;if(typeof c=="function")return void(await c()==="granted"&&window.addEventListener("deviceorientation",this.onMove));window.addEventListener("deviceorientation",this.onMove)},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=c=>{this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(c),this.update(c.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=c=>{const{onEnter:u}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),u&&u({event:c})},this.onMove=c=>{this.mainLoop(c),this.emitOnMove(c)},this.onLeave=c=>{const{onLeave:u}=this.props;if(this.setTransitions(),u&&u({event:c}),this.props.reset){const s=new CustomEvent("autoreset");this.onMove(s)}},this.processInput=c=>{const{scale:u}=this.props;switch(c.type){case"mousemove":this.wrapperEl.clientPosition.x=c.pageX,this.wrapperEl.clientPosition.y=c.pageY,this.wrapperEl.scale=u;break;case"touchmove":this.wrapperEl.clientPosition.x=c.touches[0].pageX,this.wrapperEl.clientPosition.y=c.touches[0].pageY,this.wrapperEl.scale=u;break;case"deviceorientation":this.processInputDeviceOrientation(c),this.wrapperEl.scale=u;break;case"autoreset":{const{tiltAngleXInitial:s,tiltAngleYInitial:p,tiltMaxAngleX:b,tiltMaxAngleY:h}=this.props,w=p/h*100;this.wrapperEl.clientPosition.xPercentage=na(s/b*100,-100,100),this.wrapperEl.clientPosition.yPercentage=na(w,-100,100),this.wrapperEl.scale=1;break}}},this.processInputDeviceOrientation=c=>{if(!c.gamma||!c.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:u,tiltMaxAngleY:s}=this.props,p=c.gamma;this.wrapperEl.clientPosition.xPercentage=c.beta/u*100,this.wrapperEl.clientPosition.yPercentage=p/s*100,this.wrapperEl.clientPosition.xPercentage=na(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=na(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=c=>{const{tiltEnable:u,flipVertically:s,flipHorizontally:p}=this.props;c!=="autoreset"&&c!=="deviceorientation"&&c!=="propChange"&&this.updateClientInput(),u&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,s,p)},this.updateClientInput=()=>{const{trackOnWindow:c}=this.props;let u,s;if(c){const{x:p,y:b}=this.wrapperEl.clientPosition;u=b/window.innerHeight*200-100,s=p/window.innerWidth*200-100}else{const{size:{width:p,height:b,left:h,top:w},clientPosition:{x:m,y:g}}=this.wrapperEl;u=(g-w)/b*200-100,s=(m-h)/p*200-100}this.wrapperEl.clientPosition.xPercentage=na(u,-100,100),this.wrapperEl.clientPosition.yPercentage=na(s,-100,100)},this.updateFlip=()=>{const{flipVertically:c,flipHorizontally:u}=this.props;c&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),u&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new Sb,this.initGlare(),this.setSize(),this.addEventListeners(),typeof CustomEvent>"u")return;const c=new CustomEvent("autoreset");this.mainLoop(c);const u=new CustomEvent("initial");this.emitOnMove(u)}componentWillUnmount(){this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const c=new CustomEvent("propChange");this.mainLoop(c),this.emitOnMove(c)}addEventListeners(){const{trackOnWindow:c,gyroscope:u}=this.props;window.addEventListener("resize",this.setSize),c&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),u&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:c,gyroscope:u}=this.props;window.removeEventListener("resize",this.setSize),c&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),u&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const c=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=c.left+window.scrollX,this.wrapperEl.size.top=c.top+window.scrollY}initGlare(){const{glareEnable:c,glareBorderRadius:u}=this.props;c&&(this.glare=new yb(this.wrapperEl.size,u),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(c){const{onMove:u}=this.props;if(!u)return;let s=0,p=0;this.glare&&(s=this.glare.glareAngle,p=this.glare.glareOpacity),u({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:s,glareOpacity:p,event:c})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:c}=this.props;this.wrapperEl.node.style.transform+=`perspective(${c}px) `}renderScale(){const{scale:c}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${c},${c},${c})`}setTransitions(){const{transitionSpeed:c,transitionEasing:u}=this.props;w0(this.wrapperEl.node,"all",c,u),this.glare&&w0(this.glare.glareEl,"opacity",c,u)}render(){const{children:c,className:u,style:s}=this.props;return f.jsx("div",{ref:p=>{this.wrapperEl.node=p},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:u,style:s,children:c})}}hr.defaultProps=Eb;const K0="/my-portfolio/assets/ProfileImg-g0nOuxvm.jpg",wb=()=>{const r=T.useRef(null);return T.useEffect(()=>{const c=r.current,u=c.getContext("2d");let s;const p=()=>{c.width=window.innerWidth,c.height=window.innerHeight};p(),window.addEventListener("resize",p);const h=Array.from({length:60},()=>({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:Math.random()*2+1,pulse:Math.random()*Math.PI*2})),w=()=>{u.clearRect(0,0,c.width,c.height),h.forEach(m=>{m.x+=m.vx,m.y+=m.vy,m.pulse+=.025,(m.x<0||m.x>c.width)&&(m.vx*=-1),(m.y<0||m.y>c.height)&&(m.vy*=-1)});for(let m=0;m<h.length;m++)for(let g=m+1;g<h.length;g++){const O=h[m].x-h[g].x,E=h[m].y-h[g].y,B=Math.sqrt(O*O+E*E);if(B<160){const L=(1-B/160)*.25,z=(Math.sin(h[m].pulse)+1)/2;u.beginPath(),u.moveTo(h[m].x,h[m].y),u.lineTo(h[g].x,h[g].y),u.strokeStyle=`rgba(0, 210, 255, ${L*(.5+z*.5)})`,u.lineWidth=.6,u.stroke()}}h.forEach(m=>{const g=(Math.sin(m.pulse)+1)/2,O=m.r+g*1.5,E=u.createRadialGradient(m.x,m.y,0,m.x,m.y,O*4);E.addColorStop(0,`rgba(0, 230, 255, ${.8+g*.2})`),E.addColorStop(.4,"rgba(0, 150, 220, 0.4)"),E.addColorStop(1,"rgba(0,0,0,0)"),u.beginPath(),u.arc(m.x,m.y,O*4,0,Math.PI*2),u.fillStyle=E,u.fill(),u.beginPath(),u.arc(m.x,m.y,O,0,Math.PI*2),u.fillStyle=`rgba(180, 240, 255, ${.7+g*.3})`,u.fill()}),s=requestAnimationFrame(w)};return w(),()=>{cancelAnimationFrame(s),window.removeEventListener("resize",p)}},[]),f.jsx("canvas",{ref:r,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0,opacity:.35,pointerEvents:"none"}})},jb=()=>{const r=["MODEL ACCURACY: 97.4%","EPOCH 128/128","LOSS: 0.0031","GRADIENT DESCENT ▼","TRAINING COMPLETE","NEURAL WEIGHTS LOADED","BATCH SIZE: 64","LEARNING RATE: 0.001","F1 SCORE: 0.96"];return f.jsx("div",{style:{overflow:"hidden",borderTop:"1px solid rgba(0,210,255,0.15)",borderBottom:"1px solid rgba(0,210,255,0.15)",padding:"10px 0",position:"relative",zIndex:1},children:f.jsx("div",{style:{display:"flex",gap:"64px",animation:"ticker 22s linear infinite",whiteSpace:"nowrap",width:"max-content"},children:[...r,...r].map((c,u)=>f.jsxs("span",{style:{fontSize:"10px",letterSpacing:"0.18em",color:"rgba(0,210,255,0.5)",fontFamily:"'JetBrains Mono', monospace",fontWeight:500},children:[f.jsx("span",{style:{color:"rgba(0,210,255,0.25)",marginRight:"12px"},children:"◆"}),c]},u))})})},zb=()=>{const[r,c]=T.useState(""),u="MCA (AI & ML) · Web Developer · Python & C++";T.useEffect(()=>{let h=0;const w=setInterval(()=>{c(u.slice(0,h)),h++,h>u.length&&clearInterval(w)},40);return()=>clearInterval(w)},[]);const s=[{title:"AI-Based Student Performance Prediction",description:"ML model predicting academic outcomes using behavioral and academic datasets with 94% accuracy.",tag:"Machine Learning",icon:"🧠",metric:"94% Accuracy",num:"01"},{title:"Weather Forecast Website",description:"Real-time forecasting with live API integration, predictive modeling and dynamic visualizations.",tag:"Web Dev",icon:"🌐",metric:"Live API",num:"02"},{title:"Expense Tracker",description:"Full-stack app with secure auth, analytics dashboard, and intelligent spending pattern detection.",tag:"Full Stack",icon:"⚡",metric:"Full Stack",num:"03"}],p=[{value:"10+",label:"Projects",sub:"Completed"},{value:"2+",label:"Years",sub:"Learning"},{value:"8+",label:"Tech Stack",sub:"Mastered"},{value:"100%",label:"Dedication",sub:"Always"}],b=[{name:"React",color:"#61dafb"},{name:"Node.js",color:"#68d391"},{name:"Python",color:"#ffd43b"},{name:"MongoDB",color:"#47a248"},{name:"AI / ML",color:"#00d2ff"},{name:"C++",color:"#f08080"}];return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsxs("div",{className:"ai-root",children:[f.jsx(wb,{}),f.jsxs("section",{className:"ai-hero",children:[f.jsxs("div",{children:[f.jsx("div",{className:"terminal-label fu d1",children:"sys.init() → portfolio_v2.execute()"}),f.jsxs("h1",{className:"ai-name fu d2",children:["VAIBHAV",f.jsx("span",{className:"last",children:"MISHRA"})]}),f.jsxs("div",{className:"ai-typewriter fu d3",children:[f.jsx("span",{children:r}),f.jsx("span",{className:"cursor-blink"})]}),f.jsx("p",{className:"ai-bio fu d3",children:"Building intelligent systems at the intersection of data, algorithms, and real-world engineering. Specializing in machine learning pipelines, responsive web architectures, and scalable backend systems."}),f.jsx("div",{className:"tech-row fu d4",children:b.map((h,w)=>f.jsxs("span",{className:"tech-pill",children:[f.jsx("span",{className:"tech-dot",style:{background:h.color}}),h.name]},w))}),f.jsxs("div",{className:"ai-btns fu d5",children:[f.jsx(Ht,{to:"/projects",className:"btn-glow primary",children:"View Projects"}),f.jsx(Ht,{to:"/contact",className:"btn-glow secondary",children:"Contact Me"})]})]}),f.jsx("div",{className:"ai-img-col fu d3",children:f.jsx(hr,{glareEnable:!0,glareMaxOpacity:.08,scale:1.03,tiltMaxAngleX:8,tiltMaxAngleY:8,transitionSpeed:1500,children:f.jsxs("div",{className:"profile-wrap",children:[f.jsx("div",{className:"corner corner-tl"}),f.jsx("div",{className:"corner corner-tr"}),f.jsx("div",{className:"corner corner-bl"}),f.jsx("div",{className:"corner corner-br"}),f.jsxs("div",{className:"profile-img-box",children:[f.jsx("img",{src:K0,alt:"Vaibhav Mishra"}),f.jsxs("div",{className:"profile-status",children:[f.jsxs("div",{className:"status-row",children:[f.jsx("span",{className:"status-dot"}),"SYSTEM: ONLINE"]}),f.jsx("div",{className:"status-row",style:{color:"rgba(0,255,220,0.6)"},children:"STATUS: OPEN TO WORK"})]})]})]})})})]}),f.jsx(jb,{}),f.jsx("section",{className:"ai-stats",children:f.jsx("div",{className:"ai-stats-inner",children:p.map((h,w)=>f.jsxs("div",{className:"stat-cell",children:[f.jsxs("div",{className:"stat-val",children:[h.value.replace(/\D/g,""),f.jsx("span",{className:"ac",children:h.value.replace(/\d/g,"")})]}),f.jsxs("div",{className:"stat-lbl",children:[h.label," · ",h.sub]})]},w))})}),f.jsxs("section",{className:"ai-projects",children:[f.jsxs("div",{className:"sec-head",children:[f.jsxs("h2",{className:"sec-title",children:[f.jsx("span",{className:"dim",children:"// FEATURED_WORK"}),"PROJECTS"]}),f.jsx(Ht,{to:"/projects",className:"sec-link",children:"ALL_PROJECTS →"})]}),f.jsx("div",{className:"proj-grid",children:s.map((h,w)=>f.jsxs("div",{className:"proj-card",children:[f.jsxs("div",{className:"proj-top",children:[f.jsx("span",{className:"proj-icon",children:h.icon}),f.jsx("span",{className:"proj-metric",children:h.metric})]}),f.jsxs("div",{className:"proj-tag",children:["[ ",h.tag," ]"]}),f.jsx("h3",{className:"proj-title",children:h.title}),f.jsx("p",{className:"proj-desc",children:h.description}),f.jsx("div",{className:"proj-num-bg",children:h.num})]},w))}),f.jsxs("div",{className:"cta-row",children:[f.jsx("div",{className:"cta-line"}),f.jsx(Ht,{to:"/projects",className:"btn-glow primary",children:"EXPLORE_ALL( )"}),f.jsx("div",{className:"cta-line"})]})]})]})]})},Qc=[{title:"My Portfolio",description:"Modern responsive developer portfolio built using React, Tailwind CSS, and smooth animations.",tech:["React","Tailwind CSS","Vite"],github:"https://github.com/vaibhavmishram3/my-portfolio",live:"https://vaibhavmishram3.github.io/my-portfolio/",category:"Web Dev"},{title:"Camonk Blog App",description:"High-performance blog application built with React, TypeScript, and TanStack Query with a modern dual-pane UI.",tech:["React","TypeScript","TanStack Query","Tailwind CSS"],github:"https://github.com/vaibhavmishram3/camonk-interview",live:"#",category:"Web Dev"},{title:"C++ Programs Collection",description:"Collection of C++ programs covering data structures, algorithms, and problem-solving techniques.",tech:["C++"],github:"https://github.com/vaibhavmishram3/C-Program",live:"#",category:"DSA"},{title:"GeoClimate AI",description:"AI-based climate analysis project using Python for environmental data processing and prediction.",tech:["Python","Machine Learning"],github:"https://github.com/vaibhavmishram3/GeoClimateAI",live:"#",category:"AI / ML"},{title:"Python ChatBot",description:"AI chatbot built using Python capable of handling predefined queries and responses.",tech:["Python"],github:"https://github.com/vaibhavmishram3/ChatBot",live:"#",category:"AI / ML"},{title:"Hackathon Project 2025",description:"Innovative hackathon project built with modern technologies focusing on performance and UI/UX.",tech:["TypeScript","React"],github:"https://github.com/vaibhavmishram3/Hackathon-Project-2025",live:"#",category:"Web Dev"},{title:"GitHub Profile Repo",description:"Custom GitHub profile repository showcasing personal info, stats, and highlights.",tech:["Markdown"],github:"https://github.com/vaibhavmishram3/vaibhavmishram3",live:"#",category:"Other"},{title:"mattOS",description:"JavaScript-based experimental OS-like interface simulating desktop experience in the browser.",tech:["JavaScript","HTML","CSS"],github:"https://github.com/vaibhavmishram3/mattOS",live:"#",category:"Web Dev"},{title:"ProGame",description:"Single-page gaming application built using React and React Router with smooth navigation.",tech:["React","React Router","CSS"],github:"https://github.com/vaibhavmishram3/progame",live:"https://vaibhavmishram3.github.io/progame/",category:"Web Dev"},{title:"New Portfolio",description:"Updated personal portfolio showcasing projects, skills, and achievements.",tech:["HTML","CSS","JavaScript"],github:"https://github.com/vaibhavmishram3/NewPortfolio",live:"https://vaibhavmishram3.github.io/NewPortfolio/",category:"Web Dev"},{title:"YouTube Clone",description:"Frontend clone of YouTube UI built using HTML, CSS, and JavaScript.",tech:["HTML","CSS","JavaScript"],github:"https://github.com/vaibhavmishram3/youtube_clone",live:"https://vaibhavmishram3.github.io/youtube_clone/",category:"Web Dev"},{title:"Tic Tac Toe Game",description:"Interactive Tic-Tac-Toe game built with JavaScript featuring dynamic gameplay.",tech:["JavaScript","HTML","CSS"],github:"https://github.com/vaibhavmishram3/TikTakToe",live:"#",category:"Web Dev"},{title:"Weather App",description:"Weather forecasting app that displays real-time weather data using APIs.",tech:["JavaScript","API","HTML","CSS"],github:"https://github.com/vaibhavmishram3/WeatherApp",live:"https://vaibhavmishram3.github.io/WeatherApp/",category:"Web Dev"},{title:"MonkeyType Clone",description:"Typing speed test application inspired by MonkeyType with customizable UI and performance tracking.",tech:["TypeScript","Web App"],github:"https://github.com/vaibhavmishram3/monkeytype",live:"#",category:"Web Dev"},{title:"Portfolio (Old)",description:"Earlier version of personal portfolio showcasing basic frontend skills.",tech:["HTML","CSS"],github:"https://github.com/vaibhavmishram3/Portfolio",live:"#",category:"Web Dev"},{title:"CodSoft Projects",description:"Collection of projects completed during CodSoft internship.",tech:["HTML","CSS","JavaScript"],github:"https://github.com/vaibhavmishram3/CODSOFT",live:"#",category:"Other"},{title:"Coffee Website",description:"Responsive coffee shop landing page with modern UI design.",tech:["HTML","CSS"],github:"https://github.com/vaibhavmishram3/CoffeeWebPage",live:"#",category:"Web Dev"},{title:"Bharat Intern Projects",description:"Projects developed during Bharat Intern program focusing on frontend development.",tech:["HTML","CSS","JavaScript"],github:"https://github.com/vaibhavmishram3/BharatIntern",live:"#",category:"Other"}],Nb=["All","AI / ML","Web Dev","DSA","Other"],j0={React:"#61dafb",TypeScript:"#3178c6",Python:"#ffd43b","Machine Learning":"#00d2ff","C++":"#f08080",JavaScript:"#f7df1e","Tailwind CSS":"#38bdf8",HTML:"#e44d26",CSS:"#264de4",Vite:"#646cff","React Router":"#ca4245",API:"#00ffe0",Markdown:"#aaa","TanStack Query":"#ff4154","Web App":"#a78bfa",default:"rgba(0,210,255,0.6)"},Ab=()=>{const[r,c]=T.useState("All"),u=r==="All"?Qc:Qc.filter(s=>s.category===r);return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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

        /* empty state */
        .pj-empty {
          grid-column: 1/-1;
          text-align: center; padding: 80px 0;
          color: rgba(0,210,255,0.2);
          font-size: 12px; letter-spacing: 0.15em;
        }
      `}),f.jsxs("div",{className:"pj-root",children:[f.jsxs("section",{className:"pj-header",children:[f.jsx("div",{className:"pj-eyebrow",children:"project_index.load()"}),f.jsxs("h1",{className:"pj-title",children:["MY ",f.jsx("span",{className:"cx",children:"PROJECTS"})]}),f.jsx("p",{className:"pj-subtitle",children:"A collection of projects showcasing my development skills, AI/ML research, and problem-solving across diverse domains."}),f.jsxs("div",{className:"pj-count",children:["TOTAL_REPOS: ",f.jsx("span",{children:Qc.length}),"  ·  FILTERED: ",f.jsx("span",{children:u.length})]}),f.jsx("div",{className:"pj-header-line"})]}),f.jsxs("div",{className:"pj-filters",children:[f.jsx("span",{className:"pj-filter-label",children:"filter:"}),Nb.map(s=>f.jsx("button",{className:`pj-filter-btn${r===s?" active":""}`,onClick:()=>c(s),children:s},s))]}),f.jsx("section",{className:"pj-grid-wrap",children:f.jsxs("div",{className:"pj-grid",children:[u.length===0&&f.jsx("div",{className:"pj-empty",children:"// NO_RESULTS_FOUND"}),u.map((s,p)=>f.jsxs("div",{className:"pj-card",style:{animationDelay:`${p*.045}s`},children:[f.jsx("span",{className:"pj-card-index",children:String(p+1).padStart(2,"0")}),f.jsxs("div",{className:"pj-card-cat",children:["[ ",s.category," ]"]}),f.jsx("h3",{className:"pj-card-title",children:s.title}),f.jsx("p",{className:"pj-card-desc",children:s.description}),f.jsx("div",{className:"pj-tech-row",children:s.tech.map((b,h)=>f.jsxs("span",{className:"pj-tech-pill",children:[f.jsx("span",{className:"pj-tech-dot",style:{background:j0[b]||j0.default}}),b]},h))}),f.jsx("div",{className:"pj-card-divider"}),f.jsxs("div",{className:"pj-card-actions",children:[f.jsxs("a",{href:s.github,target:"_blank",rel:"noreferrer",className:"pj-action-link",children:[f.jsx(ts,{style:{fontSize:11}}),"Code"]}),f.jsxs("a",{href:s.live,target:"_blank",rel:"noreferrer",className:`pj-action-link${s.live==="#"?" disabled":""}`,children:[f.jsx(gb,{style:{fontSize:10}}),"Live"]})]})]},s.title))]})})]})]})},Hn=[{category:"Programming Languages",code:"01",icon:"⌨",items:[{name:"Python",level:90,color:"#ffd43b"},{name:"C",level:72,color:"#a8b9cc"},{name:"C++",level:78,color:"#f08080"},{name:"Java",level:65,color:"#f89820"}]},{category:"Frontend",code:"02",icon:"◈",items:[{name:"HTML",level:92,color:"#e44d26"},{name:"CSS",level:88,color:"#264de4"},{name:"JavaScript",level:85,color:"#f7df1e"},{name:"React.js",level:87,color:"#61dafb"}]},{category:"Data Analysis & ML",code:"03",icon:"🧠",items:[{name:"Pandas",level:83,color:"#150458"},{name:"NumPy",level:80,color:"#4dabcf"},{name:"Matplotlib",level:75,color:"#11557c"},{name:"Seaborn",level:72,color:"#4c72b0"},{name:"Scikit-learn",level:78,color:"#f89939"}]},{category:"Databases",code:"04",icon:"◉",items:[{name:"MySQL",level:80,color:"#4479a1"},{name:"MongoDB",level:76,color:"#47a248"}]},{category:"Core Concepts",code:"05",icon:"⬡",items:[{name:"OOP",level:88,color:"#00d2ff"},{name:"DSA",level:80,color:"#00ffe0"},{name:"DBMS",level:75,color:"#a78bfa"}]},{category:"Tools & Env",code:"06",icon:"⚙",items:[{name:"VS Code",level:95,color:"#007acc"},{name:"Git",level:85,color:"#f05032"},{name:"GitHub",level:88,color:"#e0e0e0"},{name:"Jupyter Notebook",level:82,color:"#f37726"}]}],Tb=({name:r,level:c,color:u})=>f.jsx(hr,{glareEnable:!0,glareMaxOpacity:.06,scale:1.03,tiltMaxAngleX:10,tiltMaxAngleY:10,transitionSpeed:1200,children:f.jsxs("div",{className:"sk-card",children:[f.jsxs("div",{className:"sk-card-top",children:[f.jsx("span",{className:"sk-card-dot",style:{background:u,boxShadow:`0 0 8px ${u}60`}}),f.jsx("span",{className:"sk-card-name",children:r}),f.jsxs("span",{className:"sk-card-pct",children:[c,"%"]})]}),f.jsx("div",{className:"sk-bar-bg",children:f.jsx("div",{className:"sk-bar-fill",style:{width:`${c}%`,background:`linear-gradient(90deg, ${u}99, ${u})`,boxShadow:`0 0 8px ${u}55`}})})]})}),Mb=()=>f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
    `}),f.jsxs("div",{className:"sk-root",children:[f.jsxs("section",{className:"sk-header",children:[f.jsx("div",{className:"sk-eyebrow",children:"skill_matrix.render()"}),f.jsxs("h1",{className:"sk-title",children:["MY ",f.jsx("span",{className:"cx",children:"SKILLS"})]}),f.jsx("p",{className:"sk-subtitle",children:"Technologies, frameworks, and tools I use to engineer intelligent systems and scalable applications."}),f.jsxs("div",{className:"sk-meta",children:[f.jsxs("span",{children:["CATEGORIES: ",f.jsx("span",{children:Hn.length})]}),f.jsx("span",{className:"sk-meta-sep",children:"·"}),f.jsxs("span",{children:["TOTAL_SKILLS: ",f.jsx("span",{children:Hn.reduce((r,c)=>r+c.items.length,0)})]}),f.jsx("span",{className:"sk-meta-sep",children:"·"}),f.jsxs("span",{children:["AVG_PROFICIENCY: ",f.jsxs("span",{children:[Math.round(Hn.flatMap(r=>r.items).reduce((r,c)=>r+c.level,0)/Hn.flatMap(r=>r.items).length),"%"]})]})]}),f.jsx("div",{className:"sk-scan-line"})]}),f.jsx("div",{className:"sk-stats-bar",children:[{val:"6+",lbl:"Skill Categories"},{val:"25+",lbl:"Technologies"},{val:"83%",lbl:"Avg Proficiency"},{val:"2+",lbl:"Years Experience"}].map((r,c)=>f.jsxs("div",{className:"sk-stat",children:[f.jsxs("div",{className:"sk-stat-val",children:[r.val.replace(/\D/g,""),f.jsx("span",{className:"ac",children:r.val.replace(/\d/g,"")})]}),f.jsx("div",{className:"sk-stat-lbl",children:r.lbl})]},c))}),Hn.map((r,c)=>f.jsxs("section",{className:"sk-section",style:{animationDelay:`${.1+c*.08}s`},children:[f.jsxs("div",{className:"sk-section-head",children:[f.jsx("span",{className:"sk-section-icon",children:r.icon}),f.jsx("span",{className:"sk-section-title",children:r.category}),f.jsx("div",{className:"sk-section-line"}),f.jsxs("span",{className:"sk-section-code",children:["_",r.code]})]}),f.jsx("div",{className:"sk-grid",children:r.items.map((u,s)=>f.jsx(Tb,{...u},u.name))})]},r.category)),f.jsx("div",{className:"sk-bottom"})]})]}),Ob=[{year:"2021",title:"BCA — University of Rajasthan",sub:"Bachelor of Computer Applications",desc:"Built a strong foundation in programming, data structures, and software engineering fundamentals.",tag:"EDUCATION",color:"#00d2ff"},{year:"2023",title:"Internships & Certifications",sub:"CodSoft · Bharat Intern",desc:"Completed frontend development internships, building real-world projects and sharpening UI engineering skills.",tag:"EXPERIENCE",color:"#00ffe0"},{year:"2024",title:"Full Stack Projects",sub:"React · Node.js · MongoDB",desc:"Engineered AI-powered systems, REST APIs, dashboards, and responsive web platforms with scalable architecture.",tag:"DEVELOPMENT",color:"#a78bfa"},{year:"2025",title:"MCA — JECRC University",sub:"AI & Machine Learning",desc:"Specializing in Artificial Intelligence, ML pipelines, data science, and scalable software engineering.",tag:"CURRENT",color:"#ffd43b",active:!0},{year:"2027+",title:"AI-Driven Software Engineer",sub:"Future Vision",desc:"Aspiring to architect large-scale intelligent systems that solve real-world problems with measurable impact.",tag:"VISION",color:"#f08080"}],Rb=[{key:"DEGREE",val:"MCA (AI & ML)"},{key:"UNIVERSITY",val:"JECRC University"},{key:"FOCUS",val:"AI · ML · Full Stack"},{key:"LOCATION",val:"Rajasthan, India"},{key:"EXPERIENCE",val:"2+ Years"},{key:"STATUS",val:"OPEN_TO_WORK",highlight:!0}],Cb=()=>f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
    `}),f.jsxs("div",{className:"ab-root",children:[f.jsxs("section",{className:"ab-header",children:[f.jsx("div",{className:"ab-eyebrow ab-fu ab-d1",children:"profile.load() → identity.render()"}),f.jsxs("h1",{className:"ab-title ab-fu ab-d2",children:["ABOUT ",f.jsx("span",{className:"cx",children:"ME"})]}),f.jsx("p",{className:"ab-subtitle ab-fu ab-d3",children:"Passionate AI & Machine Learning developer engineering intelligent, data-driven systems with scalable and efficient software architecture."}),f.jsx("div",{className:"ab-scan-line"})]}),f.jsxs("section",{className:"ab-bio",children:[f.jsx("div",{className:"ab-img-col ab-fu ab-d2",children:f.jsx(hr,{glareEnable:!0,glareMaxOpacity:.07,scale:1.03,tiltMaxAngleX:8,tiltMaxAngleY:8,transitionSpeed:1400,children:f.jsxs("div",{className:"ab-profile-wrap",children:[f.jsx("div",{className:"ab-corner ab-corner-tl"}),f.jsx("div",{className:"ab-corner ab-corner-tr"}),f.jsx("div",{className:"ab-corner ab-corner-bl"}),f.jsx("div",{className:"ab-corner ab-corner-br"}),f.jsxs("div",{className:"ab-img-box",children:[f.jsx("img",{src:K0,alt:"Vaibhav Mishra"}),f.jsxs("div",{className:"ab-img-status",children:[f.jsxs("div",{className:"ab-status-row",children:[f.jsx("span",{className:"ab-status-dot"}),"IDENTITY: VERIFIED"]}),f.jsx("div",{className:"ab-status-row",style:{color:"rgba(0,255,220,0.6)"},children:"MODE: BUILDER"})]})]})]})})}),f.jsxs("div",{className:"ab-text-col ab-fu ab-d3",children:[f.jsx("div",{className:"ab-name",children:"VAIBHAV MISHRA"}),f.jsx("div",{className:"ab-name-sub",children:"AI & ML Developer · Full Stack Engineer"}),f.jsx("p",{className:"ab-para",children:"A dedicated Full Stack Developer with a strong passion for building responsive, scalable, and high-performance web applications. I solve real-world problems using modern technologies like React, Node.js, and MongoDB."}),f.jsx("p",{className:"ab-para",children:"My goal is to create meaningful digital experiences that are fast, accessible, and visually precise. I continuously learn and adapt to emerging technologies to stay at the cutting edge of the industry."}),f.jsx("div",{className:"ab-specs ab-fu ab-d4",children:Rb.map(r=>f.jsxs("div",{className:"ab-spec-row",children:[f.jsx("span",{className:"ab-spec-key",children:r.key}),f.jsx("span",{className:"ab-spec-sep",children:":"}),f.jsx("span",{className:`ab-spec-val${r.highlight?" hl":""}`,children:r.val})]},r.key))}),f.jsxs("div",{className:"ab-btns ab-fu ab-d5",children:[f.jsx(Ht,{to:"/projects",className:"ab-btn-primary",children:"View Projects"}),f.jsx(Ht,{to:"/contact",className:"ab-btn-secondary",children:"Contact Me"})]})]})]}),f.jsx("section",{className:"ab-journey",children:f.jsxs("div",{className:"ab-journey-inner",children:[f.jsxs("div",{className:"ab-sec-head",children:[f.jsxs("h2",{className:"ab-sec-title",children:["MY ",f.jsx("span",{className:"cx",children:"JOURNEY"})]}),f.jsx("div",{className:"ab-sec-line"}),f.jsx("span",{className:"ab-sec-code",children:"// timeline"})]}),f.jsx("div",{className:"ab-timeline",children:Ob.map((r,c)=>f.jsxs("div",{className:"ab-tl-item",style:{animationDelay:`${.1+c*.12}s`},children:[f.jsx("span",{className:"ab-tl-year-marker",children:r.year}),f.jsx("div",{className:`ab-tl-dot${r.active?" active-dot":""}`,style:{background:r.color,boxShadow:`0 0 10px ${r.color}88`}}),f.jsxs("div",{className:`ab-tl-card${r.active?" active-card":""}`,children:[f.jsxs("div",{className:"ab-tl-top",children:[f.jsx("span",{className:"ab-tl-year",children:r.year}),f.jsx("span",{className:"ab-tl-tag",style:{color:r.color,border:`1px solid ${r.color}44`,background:`${r.color}0f`},children:r.tag})]}),f.jsx("div",{className:"ab-tl-title",children:r.title}),f.jsx("div",{className:"ab-tl-sub",children:r.sub}),f.jsx("div",{className:"ab-tl-desc",children:r.desc})]})]},c))})]})})]})]}),_b=[{icon:"◎",label:"Email",value:"vaibhavmishram3@gmail.com",sub:"Response within 24h",href:"mailto:vaibhavmishram3@gmail.com",color:"#00d2ff",code:"01"},{icon:"◈",label:"Location",value:"Rajasthan, India",sub:"IST (UTC+5:30)",href:null,color:"#00ffe0",code:"02"},{icon:"⬡",label:"Availability",value:"Open to Work",sub:"Internships · Freelance · Full-time",href:null,color:"#ffd43b",code:"03",highlight:!0}],Db=[{icon:f.jsx(ts,{}),href:"https://github.com/vaibhavmishram3",label:"GitHub"},{icon:f.jsx(J0,{}),href:"https://www.linkedin.com/in/vaibhavmishram3/",label:"LinkedIn"},{icon:f.jsx(Z0,{}),href:"https://wa.me/+918302979123",label:"WhatsApp"}],Ub=()=>{const[r,c]=T.useState({name:"",email:"",message:""}),[u,s]=T.useState("idle"),[p,b]=T.useState(null),h=m=>c({...r,[m.target.name]:m.target.value}),w=async m=>{m.preventDefault(),s("sending");try{(await fetch("https://formspree.io/f/mnqekeqg",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(r)})).ok?(s("sent"),c({name:"",email:"",message:""})):s("error")}catch{s("error")}};return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsxs("div",{className:"ct-root",children:[f.jsxs("section",{className:"ct-header",children:[f.jsx("div",{className:"ct-eyebrow ct-fu ct-d1",children:"connection.init() → handshake.start()"}),f.jsxs("h1",{className:"ct-title ct-fu ct-d2",children:["GET IN ",f.jsx("span",{className:"cx",children:"TOUCH"})]}),f.jsx("p",{className:"ct-subtitle ct-fu ct-d3",children:"Have a project in mind or want to collaborate? Transmit a message and I'll respond within 24h."}),f.jsx("div",{className:"ct-scan-line"})]}),f.jsxs("section",{className:"ct-main",children:[f.jsxs("div",{className:"ct-left ct-fu ct-d3",children:[_b.map(m=>{const g=m.href?"a":"div";return f.jsxs(g,{className:"ct-info-card",...m.href?{href:m.href}:{},children:[f.jsxs("div",{className:"ct-info-top",children:[f.jsxs("div",{className:"ct-info-icon-label",children:[f.jsx("span",{className:"ct-info-icon",style:{color:m.color,filter:`drop-shadow(0 0 5px ${m.color}88)`},children:m.icon}),f.jsx("span",{className:"ct-info-label",style:{color:m.color},children:m.label})]}),f.jsxs("span",{className:"ct-info-code",children:["_",m.code]})]}),f.jsx("div",{className:"ct-info-value",children:m.value}),f.jsx("div",{className:`ct-info-sub${m.highlight?" hl":""}`,children:m.sub})]},m.code)}),f.jsx("div",{className:"ct-social-strip",children:Db.map(m=>f.jsxs("a",{href:m.href,target:"_blank",rel:"noreferrer",className:"ct-social-btn",children:[m.icon,f.jsx("span",{children:m.label})]},m.label))})]}),f.jsxs("div",{className:"ct-form-wrap ct-fu ct-d4",children:[f.jsxs("div",{className:"ct-form-head",children:[f.jsx("span",{className:"ct-form-title",children:"// TRANSMIT_MESSAGE"}),f.jsx("span",{className:"ct-form-status-dot"})]}),f.jsxs("form",{name:"contactForm",action:"https://formspree.io/f/mnqekeqg",method:"POST",onSubmit:w,children:[f.jsx("input",{type:"hidden",name:"bot-field"}),f.jsxs("div",{className:"ct-field",children:[f.jsx("label",{className:"ct-label",children:"Sender_Name"}),f.jsx("input",{className:"ct-input",type:"text",name:"name",value:r.name,onChange:h,placeholder:"Your name",required:!0,onFocus:()=>b("name"),onBlur:()=>b(null)})]}),f.jsxs("div",{className:"ct-field",children:[f.jsx("label",{className:"ct-label",children:"Sender_Email"}),f.jsx("input",{className:"ct-input",type:"email",name:"email",value:r.email,onChange:h,placeholder:"your@email.com",required:!0,onFocus:()=>b("email"),onBlur:()=>b(null)})]}),f.jsxs("div",{className:"ct-field",children:[f.jsx("label",{className:"ct-label",children:"Message_Payload"}),f.jsx("textarea",{className:"ct-textarea",name:"message",rows:5,value:r.message,onChange:h,placeholder:"Describe your project or inquiry...",required:!0,onFocus:()=>b("message"),onBlur:()=>b(null)})]}),f.jsx("button",{type:"submit",className:"ct-submit",disabled:u==="sending",children:u==="sending"?f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"ct-spinner"})," TRANSMITTING..."]}):u==="sent"?"✓ MESSAGE_SENT":"SEND_MESSAGE( ) →"}),u==="sent"&&f.jsxs("div",{className:"ct-feedback success",children:[f.jsx("span",{children:"✓"}),"TRANSMISSION_COMPLETE · I'll respond within 24h."]}),u==="error"&&f.jsxs("div",{className:"ct-feedback error",children:[f.jsx("span",{children:"✗"}),"TRANSMISSION_FAILED · Please try again or email directly."]})]})]})]})]})]})},kb=()=>f.jsx(Mg,{children:f.jsxs(Ia,{element:f.jsx(xb,{}),children:[f.jsx(Ia,{path:"/",element:f.jsx(zb,{})}),f.jsx(Ia,{path:"/projects",element:f.jsx(Ab,{})}),f.jsx(Ia,{path:"/skills",element:f.jsx(Mb,{})}),f.jsx(Ia,{path:"/about",element:f.jsx(Cb,{})}),f.jsx(Ia,{path:"/contact",element:f.jsx(Ub,{})})]})}),Hb=()=>{const r=T.useRef(null);return T.useEffect(()=>{const c=r.current,u=c.getContext("2d");let s;const p=()=>{const h=Math.min(window.innerWidth*.55,300);c.width=h,c.height=h};p(),window.addEventListener("resize",p);const b=()=>{const h=c.width,w=h/2,m=h/2;u.clearRect(0,0,h,h),c._nodes||(c._nodes=Array.from({length:26},(z,H)=>{const k=H/26*Math.PI*2,Y=h*.2+Math.random()*h*.17;return{x:w+Math.cos(k)*Y,y:m+Math.sin(k)*Y,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,r:Math.random()*1.5+.7,pulse:Math.random()*Math.PI*2}}));const g=c._nodes;g.forEach(z=>{z.x+=z.vx,z.y+=z.vy,z.pulse+=.028;const H=z.x-w,k=z.y-m,Y=Math.sqrt(H*H+k*k);(Y>h*.41||Y<h*.13)&&(z.vx*=-1,z.vy*=-1)});for(let z=0;z<g.length;z++)for(let H=z+1;H<g.length;H++){const k=g[z].x-g[H].x,Y=g[z].y-g[H].y,J=Math.sqrt(k*k+Y*Y),Z=h*.32;if(J<Z){const se=(1-J/Z)*.26,ce=(Math.sin(g[z].pulse)+1)/2;u.beginPath(),u.moveTo(g[z].x,g[z].y),u.lineTo(g[H].x,g[H].y),u.strokeStyle=`rgba(0,210,255,${se*(.4+ce*.6)})`,u.lineWidth=.5,u.stroke()}}g.forEach(z=>{const H=(Math.sin(z.pulse)+1)/2,k=z.r+H*1.3,Y=u.createRadialGradient(z.x,z.y,0,z.x,z.y,k*5);Y.addColorStop(0,`rgba(0,230,255,${.8+H*.2})`),Y.addColorStop(.4,"rgba(0,150,220,0.28)"),Y.addColorStop(1,"rgba(0,0,0,0)"),u.beginPath(),u.arc(z.x,z.y,k*5,0,Math.PI*2),u.fillStyle=Y,u.fill(),u.beginPath(),u.arc(z.x,z.y,k,0,Math.PI*2),u.fillStyle=`rgba(200,245,255,${.65+H*.35})`,u.fill()});const O=Date.now()*.002,E=(Math.sin(O)+1)/2,B=h*.09+E*h*.025,L=u.createRadialGradient(w,m,0,w,m,B);L.addColorStop(0,`rgba(0,255,224,${.55+E*.4})`),L.addColorStop(.45,`rgba(0,210,255,${.18+E*.18})`),L.addColorStop(1,"rgba(0,0,0,0)"),u.beginPath(),u.arc(w,m,B,0,Math.PI*2),u.fillStyle=L,u.fill(),u.beginPath(),u.arc(w,m,h*.013+E*h*.007,0,Math.PI*2),u.fillStyle=`rgba(0,255,224,${.92+E*.08})`,u.fill(),s=requestAnimationFrame(b)};return b(),()=>{cancelAnimationFrame(s),window.removeEventListener("resize",p)}},[]),f.jsx("canvas",{ref:r,style:{display:"block",width:"min(55vw,300px)",height:"min(55vw,300px)"}})},Vc=[{txt:"Initializing neural runtime",pct:0},{txt:"Loading model weights",pct:18},{txt:"Mounting component tree",pct:36},{txt:"Calibrating UI renderer",pct:55},{txt:"Syncing data pipelines",pct:74},{txt:"System ready",pct:92}],Bb=({onComplete:r})=>{const[c,u]=T.useState(0),[s,p]=T.useState(0),[b,h]=T.useState(""),[w,m]=T.useState([]),[g,O]=T.useState(!1);T.useRef(0);const E=T.useRef(null);T.useEffect(()=>{const L=E.current;if(!L)return;const z=L.getContext("2d");let H;const k=340;L.width=k,L.height=k;const Y=k/2,J=k/2;let Z=0;const se=()=>{z.clearRect(0,0,k,k),Z+=.008,z.save(),z.translate(Y,J),z.rotate(Z),z.beginPath(),z.arc(0,0,155,0,Math.PI*2),z.setLineDash([4,12]),z.strokeStyle="rgba(0,210,255,0.12)",z.lineWidth=1,z.stroke(),z.restore(),z.save(),z.translate(Y,J),z.rotate(-Z*1.5),z.beginPath(),z.arc(0,0,130,0,Math.PI*2),z.setLineDash([2,18]),z.strokeStyle="rgba(0,255,224,0.09)",z.lineWidth=1,z.stroke(),z.restore(),z.save(),z.translate(Y,J),z.rotate(Z*2.5),z.beginPath(),z.arc(0,0,155,0,Math.PI*.6),z.setLineDash([]),z.strokeStyle="rgba(0,210,255,0.45)",z.lineWidth=1.5,z.stroke(),z.restore(),z.save(),z.translate(Y,J),z.rotate(-Z*1.8),z.beginPath(),z.arc(0,0,130,Math.PI*.3,Math.PI*.9),z.setLineDash([]),z.strokeStyle="rgba(0,255,224,0.3)",z.lineWidth=1,z.stroke(),z.restore();for(let ce=0;ce<4;ce++){const ye=Z*2.5+ce/4*Math.PI*2;z.save(),z.translate(Y+Math.cos(ye)*155,J+Math.sin(ye)*155),z.rotate(ye),z.fillRect(-1,-4,2,8),z.fillStyle="rgba(0,210,255,0.7)",z.restore()}H=requestAnimationFrame(se)};return se(),()=>cancelAnimationFrame(H)},[]),T.useEffect(()=>{const L=setInterval(()=>{u(z=>{if(z>=100)return clearInterval(L),100;const H=z<25?.5:z<70?1.8:z<92?.75:.2;return Math.min(z+H,100)})},28);return()=>clearInterval(L)},[]),T.useEffect(()=>{const L=Vc.findLastIndex(z=>c>=z.pct);L!==s&&L>=0&&(m(z=>[...z,Vc[s].txt]),p(L),h(""))},[c]),T.useEffect(()=>{const L=Vc[s]?.txt||"";let z=0;const H=setInterval(()=>{h(L.slice(0,z)),z++,z>L.length&&clearInterval(H)},24);return()=>clearInterval(H)},[s]),T.useEffect(()=>{if(c>=100){const L=setTimeout(()=>{O(!0),setTimeout(()=>r?.(),800)},600);return()=>clearTimeout(L)}},[c]);const B=Math.floor(c);return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsx("div",{className:`ldr${g?" out":""}`,children:f.jsxs("div",{className:"ldr-inner",children:[f.jsxs("div",{className:"ldr-visual",children:[f.jsx("canvas",{className:"ldr-ring-canvas",ref:E}),f.jsx("div",{className:"ldr-corner tl"}),f.jsx("div",{className:"ldr-corner tr"}),f.jsx("div",{className:"ldr-corner bl"}),f.jsx("div",{className:"ldr-corner br"}),f.jsx("div",{className:"ldr-canvas-scan"}),f.jsx(Hb,{})]}),f.jsxs("div",{className:"ldr-logo-wrap",children:[f.jsxs("div",{className:"ldr-logo-name",children:["VAIBHAV",f.jsx("span",{className:"ldr-logo-dot"})]}),f.jsx("div",{className:"ldr-logo-sub",children:"Neural Portfolio · v2.0"})]}),f.jsxs("div",{className:"ldr-progress",children:[f.jsxs("div",{className:"ldr-prog-top",children:[f.jsx("span",{className:"ldr-prog-label",children:"SYSTEM_BOOT"}),f.jsxs("div",{className:"ldr-prog-row",children:[f.jsxs("div",{className:"ldr-prog-status",children:[f.jsx("span",{className:"ldr-status-dot"}),B<100?"LOADING":"READY"]}),f.jsxs("span",{className:"ldr-prog-pct",children:[B,"%"]})]})]}),f.jsx("div",{className:"ldr-bar-outer",children:f.jsx("div",{className:"ldr-bar-fill",style:{width:`${B}%`},children:f.jsx("div",{className:"ldr-bar-tip"})})}),f.jsx("div",{className:"ldr-bar-marks",children:Array.from({length:11},(L,z)=>f.jsx("div",{className:`ldr-bar-mark${B>=z*10?" lit":""}`},z))})]}),f.jsxs("div",{className:"ldr-terminal",children:[f.jsxs("div",{className:"ldr-term-head",children:[f.jsx("span",{className:"ldr-term-dot r"}),f.jsx("span",{className:"ldr-term-dot y"}),f.jsx("span",{className:"ldr-term-dot g"}),f.jsx("span",{className:"ldr-term-title",children:"stdout · boot.log"})]}),f.jsxs("div",{className:"ldr-term-body",children:[w.slice(-2).map((L,z)=>f.jsx("div",{className:"ldr-log-done",children:L},z)),f.jsxs("div",{className:"ldr-log-active",children:[b,f.jsx("span",{className:"ldr-cursor"})]})]})]}),f.jsxs("div",{className:"ldr-meta",children:[f.jsxs("span",{className:"ldr-meta-item",children:["BUILD_",f.jsx("span",{children:new Date().getFullYear()})]}),f.jsx("span",{className:"ldr-meta-item",children:"MCA_AI&ML"}),f.jsxs("span",{className:"ldr-meta-item",children:["RAJASTHAN_",f.jsx("span",{children:"IN"})]})]})]})})]})},Lb=()=>{const[r,c]=T.useState(!1);return f.jsxs(f.Fragment,{children:[!r&&f.jsx(Bb,{onComplete:()=>c(!0)}),f.jsx("div",{style:{visibility:r?"visible":"hidden"},children:f.jsx(Pg,{children:f.jsx(kb,{})})})]})};Th.createRoot(document.getElementById("root")).render(f.jsx(Ra.StrictMode,{children:f.jsx(Lb,{})}));
