this.wp=this.wp||{},this.wp.mediaUtils=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=383)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},13:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return i}))},14:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},15:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(31),i=n(7);function o(e,t){return!t||"object"!==Object(r.a)(t)&&"function"!=typeof t?Object(i.a)(e):t}},16:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},17:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return i}))},18:function(e,t,n){"use strict";var r=n(35);function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return i}))},19:function(e,t,n){"use strict";var r=n(32);var i=n(33);function o(e,t){return Object(r.a)(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}}(e,t)||Object(i.a)()}n.d(t,"a",(function(){return o}))},2:function(e,t){!function(){e.exports=this.lodash}()},23:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},31:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return r}))},32:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return r}))},33:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}n.d(t,"a",(function(){return r}))},35:function(e,t,n){"use strict";function r(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}n.d(t,"a",(function(){return r}))},383:function(e,t,n){"use strict";n.r(t);var r=n(14),i=n(13),o=n(15),a=n(16),u=n(7),c=n(17),l=n(2),s=n(0),f=n(1),p=window.wp,d=function(e){return Object(l.pick)(e,["sizes","mime","type","subtype","id","url","alt","link","caption"])},b=function(e){return p.media.query({order:"ASC",orderby:"post__in",post__in:e,posts_per_page:-1,query:!0,type:"image"})},m=function(e){function t(e){var n,i=e.allowedTypes,c=e.gallery,l=void 0!==c&&c,s=e.unstableFeaturedImageFlow,d=void 0!==s&&s,b=e.modalClass,m=e.multiple,y=void 0!==m&&m,h=e.title,v=void 0===h?Object(f.__)("Select or Upload Media"):h;if(Object(r.a)(this,t),(n=Object(o.a)(this,Object(a.a)(t).apply(this,arguments))).openModal=n.openModal.bind(Object(u.a)(n)),n.onOpen=n.onOpen.bind(Object(u.a)(n)),n.onSelect=n.onSelect.bind(Object(u.a)(n)),n.onUpdate=n.onUpdate.bind(Object(u.a)(n)),n.onClose=n.onClose.bind(Object(u.a)(n)),l)n.buildAndSetGalleryFrame();else{var O={title:v,multiple:y};i&&(O.library={type:i}),n.frame=p.media(O)}return b&&n.frame.$el.addClass(b),d&&n.buildAndSetFeatureImageFrame(),n.initializeListeners(),n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"initializeListeners",value:function(){this.frame.on("select",this.onSelect),this.frame.on("update",this.onUpdate),this.frame.on("open",this.onOpen),this.frame.on("close",this.onClose)}},{key:"buildAndSetGalleryFrame",value:function(){var e=this.props,t=e.addToGallery,n=void 0!==t&&t,r=e.allowedTypes,i=e.multiple,o=void 0!==i&&i,a=e.value,u=void 0===a?null:a;if(u!==this.lastGalleryValue){var c;this.lastGalleryValue=u,this.frame&&this.frame.remove(),c=n?"gallery-library":u?"gallery-edit":"gallery",this.GalleryDetailsMediaFrame||(this.GalleryDetailsMediaFrame=p.media.view.MediaFrame.Post.extend({createStates:function(){this.states.add([new p.media.controller.Library({id:"gallery",title:p.media.view.l10n.createGalleryTitle,priority:40,toolbar:"main-gallery",filterable:"uploaded",multiple:"add",editable:!1,library:p.media.query(Object(l.defaults)({type:"image"},this.options.library))}),new p.media.controller.GalleryEdit({library:this.options.selection,editing:this.options.editing,menu:"gallery",displaySettings:!1,multiple:!0}),new p.media.controller.GalleryAdd])}}));var s=b(u),f=new p.media.model.Selection(s.models,{props:s.props.toJSON(),multiple:o});this.frame=new this.GalleryDetailsMediaFrame({mimeType:r,state:c,multiple:o,selection:f,editing:!!u}),p.media.frame=this.frame,this.initializeListeners()}}},{key:"buildAndSetFeatureImageFrame",value:function(){var e=p.media.view.MediaFrame.Select.extend({featuredImageToolbar:function(e){this.createSelectToolbar(e,{text:p.media.view.l10n.setFeaturedImage,state:this.options.state})},createStates:function(){this.on("toolbar:create:featured-image",this.featuredImageToolbar,this),this.states.add([new p.media.controller.FeaturedImage])}}),t=b(this.props.value),n=new p.media.model.Selection(t.models,{props:t.props.toJSON()});this.frame=new e({mimeType:this.props.allowedTypes,state:"featured-image",multiple:this.props.multiple,selection:n,editing:!!this.props.value}),p.media.frame=this.frame}},{key:"componentWillUnmount",value:function(){this.frame.remove()}},{key:"onUpdate",value:function(e){var t=this.props,n=t.onSelect,r=t.multiple,i=void 0!==r&&r,o=this.frame.state(),a=e||o.get("selection");a&&a.models.length&&n(i?a.models.map((function(e){return d(e.toJSON())})):d(a.models[0].toJSON()))}},{key:"onSelect",value:function(){var e=this.props,t=e.onSelect,n=e.multiple,r=void 0!==n&&n,i=this.frame.state().get("selection").toJSON();t(r?i:i[0])}},{key:"onOpen",value:function(){if(this.updateCollection(),this.props.value){if(!this.props.gallery){var e=this.frame.state().get("selection");Object(l.castArray)(this.props.value).forEach((function(t){e.add(p.media.attachment(t))}))}b(Object(l.castArray)(this.props.value)).more()}}},{key:"onClose",value:function(){var e=this.props.onClose;e&&e()}},{key:"updateCollection",value:function(){var e=this.frame.content.get();if(e&&e.collection){var t=e.collection;t.toArray().forEach((function(e){return e.trigger("destroy",e)})),t.mirroring._hasMore=!0,t.more()}}},{key:"openModal",value:function(){this.props.gallery&&this.props.value&&this.props.value.length>0&&this.buildAndSetGalleryFrame(),this.frame.open()}},{key:"render",value:function(){return this.props.render({open:this.openModal})}}]),t}(s.Component),y=n(23),h=n.n(y),v=n(6),O=n(47),j=n(18),g=n(19),w=n(40),S=n.n(w),_=n(41);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e){return e?Object(l.flatMap)(e,(function(e,t){var n=e.split("/"),r=Object(g.a)(n,1)[0],i=t.split("|");return[e].concat(Object(j.a)(Object(l.map)(i,(function(e){return"".concat(r,"/").concat(e)}))))})):e}function T(e){return E.apply(this,arguments)}function E(){return(E=Object(O.a)(h.a.mark((function e(t){var n,r,i,o,a,u,c,p,d,b,m,y,v,O,g,w,S,x,T,E,A,F,I,C,G,U,L,D,z;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.allowedTypes,r=t.additionalData,i=void 0===r?{}:r,o=t.filesList,a=t.maxUploadFileSize,u=t.onError,c=void 0===u?l.noop:u,p=t.onFileChange,d=t.wpAllowedMimeTypes,b=void 0===d?null:d,m=Object(j.a)(o),y=[],v=function(e,t){Object(_.revokeBlobURL)(Object(l.get)(y,[e,"url"])),y[e]=t,p(Object(l.compact)(y))},O=function(e){return!n||Object(l.some)(n,(function(t){return Object(l.includes)(t,"/")?t===e:Object(l.startsWith)(e,"".concat(t,"/"))}))},g=P(b),w=function(e){return Object(l.includes)(g,e)},S=function(e){e.message=[Object(s.createElement)("strong",{key:"filename"},e.file.name),": ",e.message],c(e)},x=[],T=!0,E=!1,A=void 0,e.prev=12,F=m[Symbol.iterator]();case 14:if(T=(I=F.next()).done){e.next=34;break}if(C=I.value,!g||w(C.type)){e.next=19;break}return S({code:"MIME_TYPE_NOT_ALLOWED_FOR_USER",message:Object(f.__)("Sorry, this file type is not permitted for security reasons."),file:C}),e.abrupt("continue",31);case 19:if(O(C.type)){e.next=22;break}return S({code:"MIME_TYPE_NOT_SUPPORTED",message:Object(f.__)("Sorry, this file type is not supported here."),file:C}),e.abrupt("continue",31);case 22:if(!(a&&C.size>a)){e.next=25;break}return S({code:"SIZE_ABOVE_LIMIT",message:Object(f.__)("This file exceeds the maximum upload size for this site."),file:C}),e.abrupt("continue",31);case 25:if(!(C.size<=0)){e.next=28;break}return S({code:"EMPTY_FILE",message:Object(f.__)("This file is empty."),file:C}),e.abrupt("continue",31);case 28:x.push(C),y.push({url:Object(_.createBlobURL)(C)}),p(y);case 31:T=!0,e.next=14;break;case 34:e.next=40;break;case 36:e.prev=36,e.t0=e.catch(12),E=!0,A=e.t0;case 40:e.prev=40,e.prev=41,T||null==F.return||F.return();case 43:if(e.prev=43,!E){e.next=46;break}throw A;case 46:return e.finish(43);case 47:return e.finish(40);case 48:G=0;case 49:if(!(G<x.length)){e.next=68;break}return U=x[G],e.prev=51,e.next=54,M(U,i);case 54:L=e.sent,D=k({},Object(l.omit)(L,["alt_text","source_url"]),{alt:L.alt_text,caption:Object(l.get)(L,["caption","raw"],""),title:L.title.raw,url:L.source_url}),v(G,D),e.next=65;break;case 59:e.prev=59,e.t1=e.catch(51),v(G,null),z=void 0,z=Object(l.has)(e.t1,["message"])?Object(l.get)(e.t1,["message"]):Object(f.sprintf)(Object(f.__)("Error while uploading file %s to the media library."),U.name),c({code:"GENERAL",message:z,file:U});case 65:++G,e.next=49;break;case 68:case"end":return e.stop()}}),e,null,[[12,36,40,48],[41,,43,47],[51,59]])})))).apply(this,arguments)}function M(e,t){var n=new window.FormData;return n.append("file",e,e.name||e.type.replace("/",".")),Object(l.forEach)(t,(function(e,t){return n.append(t,e)})),S()({path:"/wp/v2/media",body:n,method:"POST"})}n.d(t,"MediaUpload",(function(){return m})),n.d(t,"uploadMedia",(function(){return T}))},40:function(e,t){!function(){e.exports=this.wp.apiFetch}()},41:function(e,t){!function(){e.exports=this.wp.blob}()},47:function(e,t,n){"use strict";function r(e,t,n,r,i,o,a){try{var u=e[o](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function u(e){r(a,i,o,u,c,"next",e)}function c(e){r(a,i,o,u,c,"throw",e)}u(void 0)}))}}n.d(t,"a",(function(){return i}))},6:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},7:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))}});