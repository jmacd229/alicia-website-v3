import{r as m,dj as w,j as i,s as g,dk as D,cs as v,cr as E,dl as N,dh as z,d1 as F,cW as V,dm as $,q as A,dn as M,e as q,cD as G,cF as W,F as H,d6 as Q,m as X}from"./sanity.de8d7df8.js";var P,j,K,T,O;function p(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}const Y=["assetId","data","playbackId","status","thumbTime","filename"],ae=t=>V($(t)?t._ref:"",Y);function U(){return A({apiVersion:"2022-09-14"})}const R="secrets.mux";function B(t,e,n,s){const{signingKeyId:a,signingKeyPrivate:r}=function(d){const{projectId:c,dataset:u}=d.config();return w(async()=>{const o=await d.fetch(`*[_id == $_id][0]{
        token,
        secretKey,
        enableSignedUrls,
        signingKeyId,
        signingKeyPrivate
      }`,{_id:R});return{token:(o==null?void 0:o.token)||null,secretKey:(o==null?void 0:o.secretKey)||null,enableSignedUrls:Boolean(o==null?void 0:o.enableSignedUrls)||!1,signingKeyId:(o==null?void 0:o.signingKeyId)||null,signingKeyPrivate:(o==null?void 0:o.signingKeyPrivate)||null}},[Q,R,c,u])}(t);if(!a)throw new TypeError("Missing signingKeyId");if(!r)throw new TypeError("Missing signingKeyPrivate");const{default:l}=w(()=>X(()=>import("./sign.a05d5fee.js"),[]),["sanity-plugin-mux-input","jsonwebtoken-esm/sign"]);return l(s?JSON.parse(JSON.stringify(s,(d,c)=>c!=null?c:void 0)):{},atob(r),{algorithm:"RS256",keyid:a,audience:n,subject:e,noTimestamp:!0,expiresIn:"12h"})}function L(t){if(!(t!=null&&t.playbackId))throw console.error("Asset is missing a playbackId",{asset:t}),new TypeError("Missing playbackId");return t.playbackId}function b(t){var e,n,s,a;return(a=(s=(n=(e=t.data)==null?void 0:e.playback_ids)==null?void 0:n[0])==null?void 0:s.policy)!=null?a:"public"}function Z(t){let{asset:e,client:n,fit_mode:s,height:a,time:r=e.thumbTime,width:l}=t;const d={fit_mode:s,height:a,time:r,width:l},c=L(e);let u=new URLSearchParams(JSON.parse(JSON.stringify(d,(o,f)=>f!=null?f:void 0)));if(b(e)==="signed"){const o=B(n,c,"t",d);u=new URLSearchParams({token:o})}return"https://image.mux.com/".concat(c,"/thumbnail.png?").concat(u)}const h={aspect:16/9},C=m.exports.memo(function(t){let{alt:e,src:n,height:s,width:a,aspectRatio:r}=t;return w(async()=>{const l=new Image(a,s);l.decoding="async",l.src=n,await l.decode()},["sanity-plugin-mux-input","image",n]),i("img",{alt:e,src:n,height:s,width:a,style:{aspectRatio:r}})}),y=g(M)(P||(P=p([`
  img {
    object-fit: cover;
  }
`]))),J=t=>{let{solo:e}=t;return q(G,{space:1,style:{marginTop:e?"-1.35em":void 0,marginBottom:e?void 0:"0.35rem"},children:[i(W,{}),"Signed playback policy"]})},ee=t=>{let{asset:e,height:n,width:s,showTip:a}=t;const r=U(),l=Z({asset:e,client:r,height:n,width:s,fit_mode:"smartcrop"}),d=m.exports.useMemo(()=>a&&b(e)==="signed"?i(J,{solo:!0}):void 0,[e,a]);return i(y,{mediaDimensions:h,subtitle:d,title:i(H,{children:null}),media:i(C,{alt:"",src:l,height:n,width:s})})},re=m.exports.memo(function(t){let{asset:e,width:n,showTip:s}=t;const{ErrorBoundary:a,didCatch:r,error:l}=D(),d=Math.round(9*n/16),c=m.exports.useMemo(()=>s&&b(e)==="signed"?i(J,{}):void 0,[s,e]);return r?i(y,{subtitle:l.message,mediaDimensions:h,title:"Error when loading thumbnail",media:i(v,{radius:2,height:"fill",style:{position:"relative",width:"100%"},children:i(E,{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:0,left:0,right:0,bottom:0},children:i(N,{})})})}):i(a,{children:i(m.exports.Suspense,{fallback:i(y,{isPlaceholder:!0,title:"Loading thumbnail...",subtitle:c,mediaDimensions:h}),children:i(ee,{showTip:s,asset:e,height:d,width:n})})})}),te=g(M)(j||(j=p([`
  img {
    object-fit: contain;
  }
`]))),ie=t=>{let{asset:e,width:n}=t;const s=function(a){let{asset:r,client:l,height:d,width:c,start:u=r.thumbTime?Math.max(0,r.thumbTime-2.5):0,end:o=u+5,fps:f=15}=a;const x={height:d,width:c,start:u,end:o,fps:f},k=L(r);let I=new URLSearchParams(JSON.parse(JSON.stringify(x,(S,_)=>_!=null?_:void 0)));if(b(r)==="signed"){const S=B(l,k,"g",x);I=new URLSearchParams({token:S})}return"https://image.mux.com/".concat(k,"/animated.gif?").concat(I)}({asset:e,client:U(),width:n});return i(te,{withBorder:!1,mediaDimensions:h,media:i(C,{alt:"",src:s,width:n,aspectRatio:"16:9"})})},oe=m.exports.memo(function(t){let{asset:e,width:n}=t;const{ErrorBoundary:s,didCatch:a}=D();return a?null:i(s,{children:i(m.exports.Suspense,{fallback:i(ne,{children:i(y,{mediaDimensions:h,withBorder:!1,media:i(z,{muted:!0})})}),children:i(v,{height:"fill",tone:"transparent",children:i(ie,{asset:e,width:n})})})})}),ne=g(E)(K||(K=p([`
  backdrop-filter: blur(8px) brightness(0.5) saturate(2);
  mix-blend-mode: color-dodge;
`]))),le=g(F)(T||(T=p([`
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
`]))),de=g(v)(O||(O=p([`
  border-top: 1px solid var(--card-border-color);
  position: sticky;
  bottom: 0;
  z-index: 200;
`])));export{b as B,Z as E,de as F,re as M,U as O,ae as P,B as R,L as U,oe as V,R as _,le as q};
