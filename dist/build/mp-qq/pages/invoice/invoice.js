(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/invoice/invoice"],{"0661":function(t,n,e){"use strict";e.r(n);var i=e("d7a6"),o=e("cd26");for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);e("62b8");var r=e("2877"),a=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=a.exports},"5c84":function(t,n,e){"use strict";(function(t){e("6cdc"),e("921b");i(e("66fd"));var n=i(e("0661"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("a821")["createPage"])},"62b8":function(t,n,e){"use strict";var i=e("da58"),o=e.n(i);o.a},a234:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=c(e("a34a")),o=e("802d");function c(t){return t&&t.__esModule?t:{default:t}}function r(t){return s(t)||u(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function s(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}function f(t,n,e,i,o,c,r){try{var a=t[c](r),u=a.value}catch(s){return void e(s)}a.done?n(u):Promise.resolve(u).then(i,o)}function l(t){return function(){var n=this,e=arguments;return new Promise((function(i,o){var c=t.apply(n,e);function r(t){f(c,i,o,r,a,"next",t)}function a(t){f(c,i,o,r,a,"throw",t)}r(void 0)}))}}var d=function(){return e.e("components/empty").then(e.bind(null,"d138"))},v=function(){return e.e("components/rf-load-more/rf-load-more").then(e.bind(null,"f97d"))},h={components:{empty:d,rfLoadMore:v},data:function(){return{timeOutEvent:0,source:0,invoiceList:[],page:1,loadingType:"more"}},onShow:function(){this.initData()},onLoad:function(t){this.source=t.source},onPullDownRefresh:function(){this.page=1,this.invoiceList.length=0,this.getInvoiceList("refresh")},onReachBottom:function(){this.page++,this.getInvoiceList()},methods:{goTouchStart:function(n){var e=this;clearTimeout(this.timeOutEvent),this.timeOutEvent=0,this.timeOutEvent=setTimeout((function(){t.showModal({content:"确定要删除该收货地址吗",success:function(t){t.confirm&&e.$del("".concat(o.invoiceDel,"?id=").concat(n)).then((function(t){e.getInvoiceList()}))}})}),500)},goTouchEnd:function(){clearTimeout(this.timeOutEvent),this.timeOutEvent},goTouchMove:function(){clearTimeout(this.timeOutEvent),this.timeOutEvent=0},initData:function(){this.getInvoiceList()},getInvoiceList:function(){var n=l(i.default.mark((function n(){var e=this;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.showLoading({title:"加载中..."}),n.next=3,this.$get("".concat(o.invoiceList),{page:this.page}).then((function(t){e.loadingType=10===t.data.length?"more":"nomore",e.invoiceList=[].concat(r(e.invoiceList),r(t.data))})).catch((function(t){console.log(t)}));case 3:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),checkAddress:function(n){1==this.source&&(this.$api.prePage().invoiceItem=n,t.navigateBack())},addInvoice:function(n,e){t.navigateTo({url:"/pages/invoice/invoiceManage?type=".concat(n,"&id=").concat(e&&e.id||void 0)})},refreshList:function(t,n){this.invoiceList.unshift(t)}}};n.default=h}).call(this,e("a821")["default"])},cd26:function(t,n,e){"use strict";e.r(n);var i=e("a234"),o=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);n["default"]=o.a},d7a6:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.invoiceList,(function(n,e){var i=parseInt(n.is_default,10),o=parseInt(n.type,10);return{$orig:t.__get_orig(n),m0:i,m1:o}})));t.$mp.data=Object.assign({},{$root:{l0:e}})},o=[];e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return o}))},da58:function(t,n,e){}},[["5c84","common/runtime","common/vendor"]]]);