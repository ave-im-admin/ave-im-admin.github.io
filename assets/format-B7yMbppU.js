import{k as K,a8 as g,aC as h,N as z,aa as i,P as E,br as Z,M as q,d as G,R as W,o as l,z as m,bs as J,A as Q,aw as U,W as X,h as w,r as Y,c as R,n as C,bt as ee,T as y,av as oe,ar as re,bu as ne,bv as te,bw as se,bx as le,e as ie,at as ae,y as A,aA as ce,Z as c}from"./index-B24gGUKh.js";var de={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"};function fe(o){const{lineHeight:e,borderRadius:d,fontWeightStrong:p,baseColor:s,dividerColor:b,actionColor:_,textColor1:f,textColor2:n,closeColorHover:u,closeColorPressed:v,closeIconColor:x,closeIconColorHover:I,closeIconColorPressed:t,infoColor:r,successColor:S,warningColor:P,errorColor:T,fontSize:k}=o;return{...de,fontSize:k,lineHeight:e,titleFontWeight:p,borderRadius:d,border:`1px solid ${b}`,color:_,titleTextColor:f,iconColor:n,contentTextColor:n,closeBorderRadius:d,closeColorHover:u,closeColorPressed:v,closeIconColor:x,closeIconColorHover:I,closeIconColorPressed:t,borderInfo:`1px solid ${g(s,h(r,{alpha:.25}))}`,colorInfo:g(s,h(r,{alpha:.08})),titleTextColorInfo:f,iconColorInfo:r,contentTextColorInfo:n,closeColorHoverInfo:u,closeColorPressedInfo:v,closeIconColorInfo:x,closeIconColorHoverInfo:I,closeIconColorPressedInfo:t,borderSuccess:`1px solid ${g(s,h(S,{alpha:.25}))}`,colorSuccess:g(s,h(S,{alpha:.08})),titleTextColorSuccess:f,iconColorSuccess:S,contentTextColorSuccess:n,closeColorHoverSuccess:u,closeColorPressedSuccess:v,closeIconColorSuccess:x,closeIconColorHoverSuccess:I,closeIconColorPressedSuccess:t,borderWarning:`1px solid ${g(s,h(P,{alpha:.33}))}`,colorWarning:g(s,h(P,{alpha:.08})),titleTextColorWarning:f,iconColorWarning:P,contentTextColorWarning:n,closeColorHoverWarning:u,closeColorPressedWarning:v,closeIconColorWarning:x,closeIconColorHoverWarning:I,closeIconColorPressedWarning:t,borderError:`1px solid ${g(s,h(T,{alpha:.25}))}`,colorError:g(s,h(T,{alpha:.08})),titleTextColorError:f,iconColorError:T,contentTextColorError:n,closeColorHoverError:u,closeColorPressedError:v,closeIconColorError:x,closeIconColorHoverError:I,closeIconColorPressedError:t}}const ue={common:K,self:fe};var ge=z("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[i("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),E("closable",[z("alert-body",[i("title",`
 padding-right: 24px;
 `)])]),i("icon",{color:"var(--n-icon-color)"}),z("alert-body",{padding:"var(--n-padding)"},[i("title",{color:"var(--n-title-text-color)"}),i("content",{color:"var(--n-content-text-color)"})]),Z({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),i("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),i("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),E("show-icon",[z("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),E("right-adjust",[z("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),z("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[i("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[q("& +",[i("content",{marginTop:"9px"})])]),i("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),i("icon",{transition:"color .3s var(--n-bezier)"})]);const he={...W.props,title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function};var be=G({name:"Alert",inheritAttrs:!1,props:he,slots:Object,setup(o){const{mergedClsPrefixRef:e,mergedBorderedRef:d,inlineThemeDisabled:p,mergedRtlRef:s}=Q(o),b=W("Alert","-alert",ge,ue,o,e),_=U("Alert",s,e),f=w(()=>{const{common:{cubicBezierEaseInOut:t},self:r}=b.value,{fontSize:S,borderRadius:P,titleFontWeight:T,lineHeight:k,iconSize:B,iconMargin:$,iconMarginRtl:H,closeIconSize:M,closeBorderRadius:L,closeSize:N,closeMargin:F,closeMarginRtl:V,padding:j}=r,{type:a}=o,{left:D,right:O}=ce($);return{"--n-bezier":t,"--n-color":r[c("color",a)],"--n-close-icon-size":M,"--n-close-border-radius":L,"--n-close-color-hover":r[c("closeColorHover",a)],"--n-close-color-pressed":r[c("closeColorPressed",a)],"--n-close-icon-color":r[c("closeIconColor",a)],"--n-close-icon-color-hover":r[c("closeIconColorHover",a)],"--n-close-icon-color-pressed":r[c("closeIconColorPressed",a)],"--n-icon-color":r[c("iconColor",a)],"--n-border":r[c("border",a)],"--n-title-text-color":r[c("titleTextColor",a)],"--n-content-text-color":r[c("contentTextColor",a)],"--n-line-height":k,"--n-border-radius":P,"--n-font-size":S,"--n-title-font-weight":T,"--n-icon-size":B,"--n-icon-margin":$,"--n-icon-margin-rtl":H,"--n-close-size":N,"--n-close-margin":F,"--n-close-margin-rtl":V,"--n-padding":j,"--n-icon-margin-left":D,"--n-icon-margin-right":O}}),n=p?X("alert",w(()=>o.type[0]),f,o):void 0,u=Y(!0),v=()=>{const{onAfterLeave:t,onAfterHide:r}=o;t&&t(),r&&r()};return{rtlEnabled:_,mergedClsPrefix:e,mergedBordered:d,visible:u,handleCloseClick:()=>{var t;Promise.resolve((t=o.onClose)==null?void 0:t.call(o)).then(r=>{r!==!1&&(u.value=!1)})},handleAfterLeave:()=>{v()},mergedTheme:b,cssVars:p?void 0:f,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var o;return(o=this.onRender)==null||o.call(this),l(),m(J,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:d}=this,p={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?(l(),R("div",A({key:1},A(this.$attrs,p)),[C(()=>this.closable&&(l(),m(ee,{clsPrefix:e,class:y(`${e}-alert__close`),onClick:this.handleCloseClick},null,8,["clsPrefix","class","onClick"]))),C(()=>this.bordered&&(l(),R("div",{class:y(`${e}-alert__border`)},null,2))),C(()=>this.showIcon&&(l(),R("div",{class:y(`${e}-alert__icon`),"aria-hidden":"true"},[C(()=>oe(d.icon,()=>[(l(),m(re,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return l(),m(le,{key:3});case"info":return l(),m(se,{key:4});case"warning":return l(),m(te,{key:5});case"error":return l(),m(ne,{key:6});default:return null}}},1032,["clsPrefix"]))]))],2))),ie("div",{class:y([`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`])},[C(()=>ae(d.header,s=>{const b=s||this.title;return b?(l(),R("div",{key:2,class:y(`${e}-alert-body__title`)},[C(()=>b)],2)):null})),C(()=>d.default&&(l(),R("div",{class:y(`${e}-alert-body__content`)},[C(()=>d.default())],2)))],2)],16)):null}},1032,["onAfterLeave"])}});function ve(o){if(!o)return"—";const e=new Date(o);return Number.isNaN(e.getTime())?o:e.toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}function me(o){return new Intl.NumberFormat("zh-CN").format(o)}function pe(o,e="操作失败"){return o instanceof Error&&o.message?o.message:e}export{be as A,me as a,pe as e,ve as f};
