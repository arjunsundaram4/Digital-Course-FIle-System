this.wp=this.wp||{},this.wp.editWidgets=function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=370)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.wp.blocks}()},13:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return c}))},14:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},15:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(31),c=n(7);function o(e,t){return!t||"object"!==Object(r.a)(t)&&"function"!=typeof t?Object(c.a)(e):t}},16:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},17:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return c}))},19:function(e,t,n){"use strict";var r=n(32);var c=n(33);function o(e,t){return Object(r.a)(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,c=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){c=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(c)throw o}}return n}}(e,t)||Object(c.a)()}n.d(t,"a",(function(){return o}))},2:function(e,t){!function(){e.exports=this.lodash}()},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(39);function c(e,t){if(null==e)return{};var n,c,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},3:function(e,t){!function(){e.exports=this.wp.components}()},30:function(e,t){!function(){e.exports=this.wp.hooks}()},31:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return r}))},32:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return r}))},33:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}n.d(t,"a",(function(){return r}))},370:function(e,t,n){"use strict";n.r(t);var r=n(0),c=(n(92),n(67)),o=n(30),i=n(60);Object(o.addFilter)("editor.MediaUpload","core/edit-widgets/replace-media-upload",(function(){return i.MediaUpload}));var a=n(19),l=n(1),u=n(3),s=n(5),d=Object(u.createSlotFill)("EditWidgetsInserter"),b=d.Fill,f=d.Slot,p=b;p.Slot=function(){return Object(r.createElement)(f,{bubblesVirtually:!0})};var O=p,j=n(2),m=n(4);var g=function(){var e=Object(m.useSelect)((function(e){var t=e("core"),n=t.hasEditsForEntityRecord,r=t.isSavingEntityRecord,c=(0,t.getEntityRecords)("root","widgetArea"),o=Object(j.map)(c,(function(e){return e.id}));return{editedWidgetAreaIds:Object(j.filter)(o,(function(e){return n("root","widgetArea",e)})),isSaving:Object(j.some)(o,(function(e){return r("root","widgetArea",e)}))}}),[]),t=e.editedWidgetAreaIds,n=e.isSaving,c=Object(m.useDispatch)("core").saveEditedEntityRecord,o=Object(r.useCallback)((function(){Object(j.forEach)(t,(function(e){c("root","widgetArea",e)}))}),[t]);return Object(r.createElement)(u.Button,{isPrimary:!0,isBusy:n,"aria-disabled":n,onClick:n?void 0:o,disabled:0===t.length},Object(l.__)("Update"))};var w=function(){return Object(r.createElement)("div",{className:"edit-widgets-header",role:"region","aria-label":Object(l.__)("Widgets screen top bar"),tabIndex:"-1"},Object(r.createElement)(u.NavigableMenu,null,Object(r.createElement)(O.Slot,null)),Object(r.createElement)("h1",{className:"edit-widgets-header__title"},Object(l.__)("Block Areas")," ",Object(l.__)("(experimental)")),Object(r.createElement)("div",{className:"edit-widgets-header__actions"},Object(r.createElement)(g,null)))},y=Object(u.createSlotFill)("EditWidgetsBlockSidebar"),v=y.Fill,E=y.Slot;function h(){return Object(r.createElement)("div",{className:"edit-widgets-sidebar",role:"region","aria-label":Object(l.__)("Widgets advanced settings"),tabIndex:"-1"},Object(r.createElement)(u.Panel,{header:Object(l.__)("Block Areas")},Object(r.createElement)(E,{bubblesVirtually:!0})))}h.Inspector=v;var S=h,k=n(8),_=n(6),A=n(20),P=n(10),B=n(14),x=n(13),R=n(15),I=n(16),N=n(17),z=function(e){function t(){return Object(B.a)(this,t),Object(R.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(x.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.hasSelectedBlock,r=t.onBlockSelected,c=t.isSelectedArea,o=t.clearSelectedBlock;n&&!e.hasSelectedBlock&&r(),!c&&e.isSelectedArea&&o()}},{key:"render",value:function(){return null}}]),t}(r.Component),M=Object(k.compose)([Object(m.withSelect)((function(e){return{hasSelectedBlock:(0,e("core/block-editor").hasSelectedBlock)()}})),Object(m.withDispatch)((function(e){return{clearSelectedBlock:e("core/block-editor").clearSelectedBlock}}))])(z);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(_.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(e){var t=e.id,n=e.blockEditorSettings,c=e.initialOpen,o=e.isSelectedArea,a=e.onBlockSelected,l=Object(m.useSelect)((function(e){var n=e("core"),r=n.canUser,c=(0,n.getEditedEntityRecord)("root","widgetArea",t),o=Object(j.get)(c,["content"],"");return{blocks:c&&c.blocks,rawContent:o.raw?o.raw:o,widgetAreaName:c&&c.name,hasUploadPermissions:Object(j.defaultTo)(r("create","media"),!0)}}),[t]),d=l.blocks,b=l.widgetAreaName,f=l.hasUploadPermissions,p=l.rawContent,g=Object(m.useDispatch)("core").editEntityRecord,w=Object(r.useCallback)((function(e){g("root","widgetArea",t,{blocks:e})}),[g,t]),y=Object(r.useCallback)((function(e){g("root","widgetArea",t,{blocks:e,content:Object(P.serialize)(e)})}),[g,t]),v=Object(r.useMemo)((function(){return function(e,t){return t?D({},e,{mediaUpload:function(t){var n=t.onError,r=Object(A.a)(t,["onError"]);Object(i.uploadMedia)(D({wpAllowedMimeTypes:e.allowedMimeTypes,onError:function(e){var t=e.message;return n(t)}},r))}}):e}(n,f)}),[n,f]);return Object(r.useEffect)((function(){d||w(Object(P.parse)(p))}),[d,w,p]),Object(r.createElement)(u.Panel,{className:"edit-widgets-widget-area"},Object(r.createElement)(u.PanelBody,{title:b,initialOpen:c},Object(r.createElement)("div",{onFocus:function(e){e.stopPropagation(),e.preventDefault()}},Object(r.createElement)(s.BlockEditorProvider,{value:d,onInput:y,onChange:w,settings:v},o&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)(O,null,Object(r.createElement)(s.Inserter,null)),Object(r.createElement)(s.BlockEditorKeyboardShortcuts,null)),Object(r.createElement)(M,{isSelectedArea:o,onBlockSelected:a}),Object(r.createElement)(S.Inspector,null,Object(r.createElement)(s.BlockInspector,{showNoBlockSelectedMessage:!1})),Object(r.createElement)("div",{className:"editor-styles-wrapper"},Object(r.createElement)(s.WritingFlow,null,Object(r.createElement)(s.ObserveTyping,null,Object(r.createElement)(s.BlockList,{className:"edit-widgets-main-block-list",renderAppender:s.ButtonBlockerAppender}))))))))},T=[];var W=Object(k.compose)([Object(m.withSelect)((function(e){return{areas:(0,e("core").getEntityRecords)("root","widgetArea")||T}}))])((function(e){var t=e.areas,n=e.blockEditorSettings,c=e.selectedArea,o=e.setSelectedArea;return t.map((function(e,t){var i=e.id;return Object(r.createElement)(F,{isSelectedArea:t===c,onBlockSelected:function(){return o(t)},blockEditorSettings:n,key:i,id:i,initialOpen:0===t})}))}));var U=function(){var e=Object(m.useSelect)((function(e){return{notices:e("core/notices").getNotices()}}),[]).notices,t=Object(j.filter)(e,{type:"snackbar"}),n=Object(m.useDispatch)("core/notices").removeNotice;return Object(r.createElement)(u.SnackbarList,{notices:t,className:"edit-widgets-notices__snackbar",onRemove:n})};var L=Object(u.navigateRegions)((function(e){var t=e.blockEditorSettings,n=Object(r.useState)(null),c=Object(a.a)(n,2),o=c[0],i=c[1];return Object(r.createElement)(u.SlotFillProvider,null,Object(r.createElement)(u.DropZoneProvider,null,Object(r.createElement)(s.BlockEditorKeyboardShortcuts.Register,null),Object(r.createElement)(w,null),Object(r.createElement)(S,null),Object(r.createElement)(U,null),Object(r.createElement)("div",{className:"edit-widgets-layout__content",role:"region","aria-label":Object(l.__)("Widgets screen content"),tabIndex:"-1",onFocus:function(){i(null)}},Object(r.createElement)(W,{selectedArea:o,setSelectedArea:i,blockEditorSettings:t})),Object(r.createElement)(u.Popover.Slot,null)))}));var H=function(e){var t=e.settings;return Object(r.createElement)(L,{blockEditorSettings:t})},q=function(){var e=window.wp.data.select("core"),t=e.getEntityRecords,n=e.getEditedEntityRecord;return t("root","widgetArea").reduce((function(e,t){var r=t.id;return e[r]=n("root","widgetArea",r).blocks,e}),{})},J=Object(j.throttle)((function(e,t){var n=document.querySelector("#customize-preview > iframe");if(n&&n.contentDocument){var r=n.contentDocument.querySelector('[data-customize-partial-placement-context*=\'"sidebar_id":"'.concat(e,"\"']"));r&&(r.innerHTML=Object(P.serialize)(t),r.parentElement.innerHTML=r.outerHTML)}}),1e3),K=Object(j.throttle)((function(e){var t=document.getElementById("_customize-input-gutenberg_widget_blocks");t&&(t.value=JSON.stringify(Object.keys(e).reduce((function(t,n){return t[n]=Object(P.serialize)(e[n]),t}),{})),t.dispatchEvent(new window.Event("change")))}),1e3);if(window.wp&&window.wp.customize&&window.wp.data){var V=!1;window.wp.customize.bind("ready",(function(){return window.wp.customize.previewer.bind("ready",(function(){if(!V){var e,t,n,r;V=!0;try{e=JSON.parse(document.getElementById("_customize-input-gutenberg_widget_blocks").value),e=Object.keys(e).reduce((function(t,n){return t[n]=Object(P.parse)(e[n]),t}),{})}catch(t){e={}}(t=function(){return window.wp.data.select("core").hasFinishedResolution("getEntityRecords",["root","widgetArea"])},n=!0,r=function(){return window.wp.data.select("core").getEntityRecords("root","widgetArea")},new Promise((function(e){if(r(),t()!==n)var c=window.wp.data.subscribe((function(){t()===n&&(c(),e())}));else e()}))).then((function(){Object.keys(e).forEach((function(t){window.wp.data.dispatch("core").editEntityRecord("root","widgetArea",t,{content:Object(P.serialize)(e[t]),blocks:e[t]})})),e=q(),window.wp.data.subscribe((function(){for(var t=q(),n=!1,r=0,c=Object.keys(t);r<c.length;r++){var o=c[r];e[o]!==t[o]&&(J(o,t[o]),n=!0)}n&&K(t),e=t}))}))}}))}))}var Z=Object(u.navigateRegions)((function(e){var t=e.settings,n=Object(r.useState)(null),c=Object(a.a)(n,2),o=c[0],i=c[1];return Object(r.createElement)(u.SlotFillProvider,null,Object(r.createElement)("div",{className:"edit-widgets-customizer-edit-widgets-initializer__content",role:"region","aria-label":Object(l.__)("Widgets screen content"),tabIndex:"-1"},Object(r.createElement)(W,{selectedArea:o,setSelectedArea:i,blockEditorSettings:t})),Object(r.createElement)(u.Popover.Slot,null))}));function G(e,t){Object(c.registerCoreBlocks)(),Object(c.__experimentalRegisterExperimentalCoreBlocks)(t),Object(r.render)(Object(r.createElement)(H,{settings:t}),document.getElementById(e))}function Q(e,t){Object(c.registerCoreBlocks)(),Object(c.__experimentalRegisterExperimentalCoreBlocks)(t),Object(r.render)(Object(r.createElement)(Z,{settings:t}),document.getElementById(e))}n.d(t,"initialize",(function(){return G})),n.d(t,"customizerInitialize",(function(){return Q}))},39:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}n.d(t,"a",(function(){return r}))},4:function(e,t){!function(){e.exports=this.wp.data}()},5:function(e,t){!function(){e.exports=this.wp.blockEditor}()},6:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},60:function(e,t){!function(){e.exports=this.wp.mediaUtils}()},67:function(e,t){!function(){e.exports=this.wp.blockLibrary}()},7:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},8:function(e,t){!function(){e.exports=this.wp.compose}()},92:function(e,t){!function(){e.exports=this.wp.notices}()}});