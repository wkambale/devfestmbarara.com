"use strict";(self["webpackChunkdevfestmbarara_com"]=self["webpackChunkdevfestmbarara_com"]||[]).push([[720],{2139:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var o=n(4437),s=n(6035),a=n(6080),i=n(4791),r=n(380),l=n(1050),c=n(4987);const p=(0,c.Z)((0,i.d)("expansionPanels","v-expansion-panel","v-expansion-panels"),(0,r.J)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return(0,a.Z)({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},(0,l.z9)(this))}});var u=n(3422),h=n(4449),d=n(8914),v=(0,c.Z)(h.Z,d.Z,(0,r.f)("expansionPanel","v-expansion-panel-content","v-expansion-panel"));const f=v.extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(e,t){var n=this;e&&(this.isBooted=!0),null==t?this.isActive=e:this.$nextTick((function(){return n.isActive=e}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var t=this;return e(u.Fx,this.showLazyContent((function(){return[e("div",t.setBackgroundColor(t.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:t.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},(0,l.z9)(t,"default",{open:t.isActive}))])]})))}});var g=n(1012),m=n(3176),x=(0,c.Z)(d.Z,(0,r.f)("expansionPanel","v-expansion-panel-header","v-expansion-panel"));const b=x.extend().extend({name:"v-expansion-panel-header",directives:{ripple:m.Z},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=(0,l.z9)(this,"actions",{open:this.isActive})||[this.$createElement(g.Z,this.expandIcon)];return this.$createElement(u.Z5,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var t=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:(0,a.Z)((0,a.Z)({},this.$listeners),{},{click:this.onClick,mousedown:function(){return t.hasMousedown=!0},mouseup:function(){return t.hasMousedown=!1}})}),[(0,l.z9)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}});n(4944),n(3792),n(9753);var y=n(9477),G=n(6596);const w=y.y.extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return(0,a.Z)((0,a.Z)({},y.y.options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&(0,G.fK)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&(0,G.fK)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,t){var n=this.getValue(e,t),o=this.getValue(e,t+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(o)}}});var D=n(3551),C=n(5294),A=function(){var e=this,t=e._self._c;return t(D.Z,[t(s.Z,{staticClass:"google-font",attrs:{fluid:""}},[t(C.Z,{attrs:{justify:"start",align:"start"}},[t(o.Z,{attrs:{md:"8"}},[t("p",{staticClass:"google-font gdg-heading mb-0 grey--text text--darken-4"},[e._v(" Frequently asked questions ")]),t("p",{staticClass:"my-0 mb-8 h1-subheading"},[e._v(" Need Answers? Everything you need to know ")]),t(w,{staticStyle:{"border-radius":"15px"},attrs:{flat:"",accordion:""}},e._l(e.faqsData,(function(n,o){return t(p,{key:o,staticClass:"px-0 mx-0",staticStyle:{"border-bottom":"1px solid #eeeeee"}},[t(b,{staticClass:"px-5"},[t("p",{staticClass:"google-font",staticStyle:{"font-size":"110%",margin:"auto"}},[e._v(" "+e._s(n.question)+" ")])]),t(f,{staticClass:"grey lighten-4"},[t("p",{staticClass:"google-font text-left my-0 mt-5",staticStyle:{"font-size":"100%"},domProps:{innerHTML:e._s(n.answer)}})])],1)})),1)],1)],1)],1)],1)},k=[];const P=JSON.parse('[{"question":"What is DevFest?","answer":"DevFest is an annual decentralized tech conference hosted by the Google Developer Groups (GDG) community. GDGs host these events around the globe.<br><br>DevFest 2023 marks the 11th year of DevFest and represents the beginning of the second decade of the GDG community. Through DevFest, you can continue to explore how Google\'s suite of developer tools can expand the impact of local tech professionals and developers like you around the world.<br><br>Whether you\'re passionate about finding new opportunities, elevating your knowledge on the latest Google developer tools, or exploring how to use Google technologies to generate social and economic impact, DevFest offers an amazing platform for developers to connect locally, learn, and build on Google\'s tools."},{"question":"What is Google Developer Groups (GDG)?","answer":"Google Developer Groups (GDG) is the largest developer community in the world. Over 1000+ GDGs exist in 140+ countries around the globe. The program helps developers connect with one another and learn about building products on all Google platforms.<br><br>Each GDG is a local community hub of professional developers who share expertise and passion for Google\'s developer technology.<br><br>GDG communities coordinate community activities centered around helping developers learn, connect, and grow while building a strong sense of belonging to the local and global Google Developer Groups community."},{"question":"When will DevFest Mbarara 2024 happen?","answer":"The DevFest Mbarara 2024 will happen on November 23, 2024, with events happening through the end of the year."},{"question":"How can I become a member of Google Developer Group?","answer":"Visit the <a href=\'https://gdg.community.dev/\'>GDG Event Platform</a> or <a href=\'https://developers.google.com/community/devfest#find-a-devfest-community-near-you\'>use the map tool</a> to find a Google Developer Group chapter near you. Visit each Google Developer Group\'s page to find more information about the group, events, and how to join."},{"question":"What is unique about DevFest?","answer":"DevFest is the GDG program\'s annual globally distributed conference. Different from a meetup or speaker session, DevFests events cover multiple topics and offer a suite of activities that aim to help local developers come together to learn, build and understand the full suite of Google\'s developer tools.<br><br>DevFest events happen during the second part of the year and offer a way to engage with new content from various Google product teams."},{"question":"What technologies might I use at a DevFest?","answer":"Contact a GDG chapter near you to see speaking opportunities."},{"question":"How can I stay informed?","answer":"Follow GDG Cloud Mbarara on <a href=\'https://x.com/gdgcloudmbarara\'>X</a>. The best way to stay updated is to search the Google Developer Group page for the nearest community to you."}]'),Z={name:"FAQPage",data:function(){return{faqsData:P}}},B=Z;var F=n(1001),_=(0,F.Z)(B,A,k,!1,null,null,null);const I=_.exports}}]);