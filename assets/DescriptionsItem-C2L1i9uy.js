import{k as H,a8 as z,M as v,N as e,a9 as K,P as T,aa as V,ab as Z,ac as q,d as N,R as G,G as J,o as g,c as h,n as d,m as C,T as s,e as I,H as Q,ad as U,A as X,W as Y,h as E,$ as ee,Z as j}from"./index-B24gGUKh.js";var oe={thPaddingBorderedSmall:"8px 12px",thPaddingBorderedMedium:"12px 16px",thPaddingBorderedLarge:"16px 24px",thPaddingSmall:"0",thPaddingMedium:"0",thPaddingLarge:"0",tdPaddingBorderedSmall:"8px 12px",tdPaddingBorderedMedium:"12px 16px",tdPaddingBorderedLarge:"16px 24px",tdPaddingSmall:"0 0 8px 0",tdPaddingMedium:"0 0 12px 0",tdPaddingLarge:"0 0 16px 0"};function re(t){const{tableHeaderColor:p,textColor2:b,textColor1:l,cardColor:n,modalColor:m,popoverColor:f,dividerColor:c,borderRadius:i,fontWeightStrong:a,lineHeight:P,fontSizeSmall:r,fontSizeMedium:y,fontSizeLarge:x}=t;return{...oe,lineHeight:P,fontSizeSmall:r,fontSizeMedium:y,fontSizeLarge:x,titleTextColor:l,thColor:z(n,p),thColorModal:z(m,p),thColorPopover:z(f,p),thTextColor:l,thFontWeight:a,tdTextColor:b,tdColor:n,tdColorModal:m,tdColorPopover:f,borderColor:z(n,c),borderColorModal:z(m,c),borderColorPopover:z(f,c),borderRadius:i}}const te={common:H,self:re};function F(t,p="default",b=[]){const{children:l}=t;if(l!==null&&typeof l=="object"&&!Array.isArray(l)){const n=l[p];if(typeof n=="function")return n()}return b}var ne=v([e("descriptions",{fontSize:"var(--n-font-size)"},[e("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[e("descriptions-table-header",{padding:"var(--n-th-padding)"}),e("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),K("bordered",[e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[v("&:last-child",[e("descriptions-table-content",{paddingBottom:0})])])])])]),T("left-label-placement",[e("descriptions-table-content",[v("> *",{verticalAlign:"top"})])]),T("left-label-align",[v("th",{textAlign:"left"})]),T("center-label-align",[v("th",{textAlign:"center"})]),T("right-label-align",[v("th",{textAlign:"right"})]),T("bordered",[e("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[e("descriptions-table",[e("descriptions-table-row",[v("&:not(:last-child)",[e("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),e("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[v("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-content",[v("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),e("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),e("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[e("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[e("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[e("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),e("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[V("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),V("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),Z(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),q(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]);const le="DESCRIPTION_ITEM_FLAG";function ie(t){return typeof t=="object"&&t&&!Array.isArray(t)?t.type&&t.type.DESCRIPTION_ITEM_FLAG:!1}const se=["colspan"],ae=["colspan"],de=["colspan"],ce=["colspan"],pe={...G.props,title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:String,bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]};var he=N({name:"Descriptions",props:pe,slots:Object,setup(t){const{mergedClsPrefixRef:p,inlineThemeDisabled:b,mergedComponentPropsRef:l}=X(t),n=E(()=>{var i,a;return t.size||((a=(i=l==null?void 0:l.value)==null?void 0:i.Descriptions)==null?void 0:a.size)||"medium"}),m=G("Descriptions","-descriptions",ne,te,t,p),f=E(()=>{const{bordered:i}=t,a=n.value,{common:{cubicBezierEaseInOut:P},self:{titleTextColor:r,thColor:y,thColorModal:x,thColorPopover:A,thTextColor:L,thFontWeight:o,tdTextColor:$,tdColor:O,tdColorModal:u,tdColorPopover:S,borderColor:_,borderColorModal:k,borderColorPopover:w,borderRadius:M,lineHeight:B,[j("fontSize",a)]:R,[j(i?"thPaddingBordered":"thPadding",a)]:D,[j(i?"tdPaddingBordered":"tdPadding",a)]:W}}=m.value;return{"--n-title-text-color":r,"--n-th-padding":D,"--n-td-padding":W,"--n-font-size":R,"--n-bezier":P,"--n-th-font-weight":o,"--n-line-height":B,"--n-th-text-color":L,"--n-td-text-color":$,"--n-th-color":y,"--n-th-color-modal":x,"--n-th-color-popover":A,"--n-td-color":O,"--n-td-color-modal":u,"--n-td-color-popover":S,"--n-border-radius":M,"--n-border-color":_,"--n-border-color-modal":k,"--n-border-color-popover":w}}),c=b?Y("descriptions",E(()=>{let i="";const{bordered:a}=t;return a&&(i+="a"),i+=n.value[0],i}),f,t):void 0;return{mergedClsPrefix:p,cssVars:b?void 0:f,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender,compitableColumn:ee(t,["columns","column"]),inlineThemeDisabled:b,mergedSize:n}},render(){const t=this.$slots.default,p=t?J(t()):[];p.length;const{contentClass:b,labelClass:l,compitableColumn:n,labelPlacement:m,labelAlign:f,mergedSize:c,bordered:i,title:a,cssVars:P,mergedClsPrefix:r,separator:y,onRender:x}=this;x==null||x();const A=p.filter(o=>ie(o)),L=A.reduce((o,$,O)=>{const u=$.props||{},S=A.length-1===O,_=["label"in u?u.label:F($,"label")],k=[F($)],w=u.span||1,M=o.span;o.span+=w;const B=u.labelStyle||u["label-style"]||this.labelStyle,R=u.contentStyle||u["content-style"]||this.contentStyle;if(m==="left")i?o.row.push((g(),h("th",{key:1,class:s([`${r}-descriptions-table-header`,l]),colspan:1,style:C(B)},[d(()=>_)],6)),(g(),h("td",{key:2,class:s([`${r}-descriptions-table-content`,b]),colspan:S?(n-M)*2+1:w*2-1,style:C(R)},[d(()=>k)],14,se))):o.row.push((g(),h("td",{key:3,class:s(`${r}-descriptions-table-content`),colspan:S?(n-M)*2:w*2},[I("span",{class:s([`${r}-descriptions-table-content__label`,l]),style:C(B)},[d(()=>[..._,y&&(g(),h("span",{key:4,class:s(`${r}-descriptions-separator`)},[d(()=>y)],2))])],6),I("span",{class:s([`${r}-descriptions-table-content__content`,b]),style:C(R)},[d(()=>k)],6)],10,ae)));else{const D=S?(n-M)*2:w*2;o.row.push((g(),h("th",{key:5,class:s([`${r}-descriptions-table-header`,l]),colspan:D,style:C(B)},[d(()=>_)],14,de))),o.secondRow.push((g(),h("td",{key:6,class:s([`${r}-descriptions-table-content`,b]),colspan:D,style:C(R)},[d(()=>k)],14,ce)))}return(o.span>=n||S)&&(o.span=0,o.row.length&&(o.rows.push(o.row),o.row=[]),m!=="left"&&o.secondRow.length&&(o.rows.push(o.secondRow),o.secondRow=[])),o},{span:0,row:[],secondRow:[],rows:[]}).rows.map(o=>(g(),h("tr",{class:s(`${r}-descriptions-table-row`)},[d(()=>o)],2)));return g(),h("div",{style:C(P),class:s([`${r}-descriptions`,this.themeClass,`${r}-descriptions--${m}-label-placement`,`${r}-descriptions--${f}-label-align`,`${r}-descriptions--${c}-size`,i&&`${r}-descriptions--bordered`])},[a||this.$slots.header?(g(),h("div",{key:0,class:s(`${r}-descriptions-header`)},[d(()=>a||Q(this,"header"))],2)):d(()=>null),I("div",{class:s(`${r}-descriptions-table-wrapper`)},[I("table",{class:s(`${r}-descriptions-table`)},[I("tbody",null,[d(()=>m==="top"&&(g(),h("tr",{class:s(`${r}-descriptions-table-row`),style:{visibility:"collapse"}},[d(()=>U(n*2,(g(),h("td"))))],2))),d(()=>L)])],2)],2)],6)}});const be={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]};var me=N({name:"DescriptionsItem",[le]:!0,props:be,slots:Object,render(){return null}});export{he as D,me as a};
