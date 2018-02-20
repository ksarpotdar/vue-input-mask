module.exports=function(t){function e(s){if(n[s])return n[s].exports;var i=n[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,s){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="dist/",e(e.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),i=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default=i.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),i=n.n(s),a=n(5),r=n(6),l=n(7),o=n.n(l),u={name:"input-mask",props:{mask:{type:String,required:!0},value:{type:String,default:null},maskChar:{type:String,default:void 0},formatChars:{type:Object,default:null},defaultValue:{type:[String,Number],default:""},alwaysShowMask:{type:Boolean,default:!1}},computed:{config:function(){return{mask:this.mask,maskChar:this.maskChar,formatChars:this.formatChars,defaultValue:this.defaultValue,alwaysShowMask:this.alwaysShowMask,value:this.value}}},data:function(){return{isAndroidBrowser:Object(a.isAndroidBrowser)(),isWindowsPhoneBrowser:Object(a.isWindowsPhoneBrowser)(),isAndroidFirefox:Object(a.isAndroidFirefox)(),lastCursorPos:null,backspaceOrDeleteRemoval:null,focused:!1,maskOptions:null,hasValue:!0,elValue:this.value}},created:function(){this.hasValue=null!=this.elValue,this.maskOptions=i()(this.mask,this.maskChar,this.formatChars),null==this.defaultValue&&(this.defaultValue=""),null==this.elValue&&(this.elValue=this.defaultValue),this.elValue=this.getStringValue(this.elValue),this.maskOptions.mask&&(this.alwaysShowMask||this.elValue)&&(this.elValue=Object(r.formatValue)(this.maskOptions,this.elValue),this.value!==this.elValue&&this.$emit("input",this.elValue))},mounted:function(){this.updateValue()},beforeUpdate:function(){this.updateValue()},methods:{updateValue:function(){this.maskOptions.mask&&this.getInputValue()!==this.elValue&&this.setInputValue(this.elValue)},getInputDOMNode:function(){return this.$refs.input},getInputValue:function(){var t=this.getInputDOMNode();return t?t.value:null},setInputValue:function(t){var e=this.getInputDOMNode();e&&(this.elValue=t,e.value=t)},getLeftEditablePos:function(t){for(var e=t;e>=0;--e)if(!Object(r.isPermanentChar)(this.maskOptions,e))return e;return null},getRightEditablePos:function(t){for(var e=this.maskOptions.mask,n=t;n<e.length;++n)if(!Object(r.isPermanentChar)(this.maskOptions,n))return n;return null},setCursorToEnd:function(){var t=Object(r.getFilledLength)(this.maskOptions,this.elValue),e=this.getRightEditablePos(t);null!==e&&this.setCursorPos(e)},setSelection:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.getInputDOMNode();if(n){var s=t+e;if("selectionStart"in n&&"selectionEnd"in n)n.selectionStart=t,n.selectionEnd=s;else{var i=n.createTextRange();i.collapse(!0),i.moveStart("character",t),i.moveEnd("character",s-t),i.select()}}},getSelection:function(){var t=this.getInputDOMNode(),e=0,n=0;if("selectionStart"in t&&"selectionEnd"in t)e=t.selectionStart,n=t.selectionEnd;else{var s=document.selection.createRange();s.parentElement()===t&&(e=-s.moveStart("character",-t.value.length),n=-s.moveEnd("character",-t.value.length))}return{start:e,end:n,length:n-e}},getCursorPos:function(){return this.getSelection().start},setCursorPos:function(t){var e=this;this.setSelection(t,0),o()(function(){e.setSelection(t,0)}),this.lastCursorPos=t},isFocused:function(){return this.focused},getStringValue:function(t){return t||0===t?t+"":""},onKeyDown:function(t){this.backspaceOrDeleteRemoval=null,this.$emit("keydown",t);var e=t.key,n=t.ctrlKey,s=t.metaKey,i=t.defaultPrevented;if(!(n||s||i||"Backspace"!==e&&"Delete"!==e)){var a=this.getSelection();if(!("Backspace"===e&&a.end>0||"Delete"===e&&this.elValue.length>a.start))return;this.backspaceOrDeleteRemoval={key:e,selection:this.getSelection()}}},onChange:function(t){var e=this,n=this.beforePasteState,s=this.maskOptions,i=s.mask,a=s.maskChar,l=s.lastEditablePos,u=s.prefix,h=this.getInputValue();if(n)return this.beforePasteState=null,void this.pasteText(n.value,h,n.selection,t);var c=this.elValue,f=this.getInputDOMNode();try{"function"==typeof f.matches&&f.matches(":-webkit-autofill")&&(c="")}catch(t){}var d,p,g=this.getSelection(),m=g.end,v=i.length,k=h.length,O=c.length;if(this.backspaceOrDeleteRemoval){var b="Delete"===this.backspaceOrDeleteRemoval.key;if(h=this.elValue,g=this.backspaceOrDeleteRemoval.selection,m=g.start,this.backspaceOrDeleteRemoval=null,g.length)h=Object(r.clearRange)(this.maskOptions,h,g.start,g.length);else if(g.start<u.length||!b&&g.start===u.length)m=u.length;else{var w=b?this.getRightEditablePos(m):this.getLeftEditablePos(m-1);null!==w&&(a||(h=h.substr(0,Object(r.getFilledLength)(this.maskOptions,h))),h=Object(r.clearRange)(this.maskOptions,h,w,1),m=w)}}else if(k>O){var V=k-O,R=g.end-V;p=h.substr(R,V),m=R<l&&(1!==V||p!==i[R])?this.getRightEditablePos(R):R,h=h.substr(0,R)+h.substr(R+V),d=Object(r.clearRange)(this.maskOptions,h,R,v-R),d=Object(r.insertString)(this.maskOptions,d,p,m),h=Object(r.insertString)(this.maskOptions,c,p,m),1!==V||m>=u.length&&m<l?(m=Math.max(Object(r.getFilledLength)(this.maskOptions,d),m))<l&&(m=this.getRightEditablePos(m)):m<l&&m++}else if(k<O){var C=v-k;p=h.substr(0,g.end);var x=p===c.substr(0,g.end);d=Object(r.clearRange)(this.maskOptions,c,g.end,C),a&&(h=Object(r.insertString)(this.maskOptions,d,p,0)),d=Object(r.clearRange)(this.maskOptions,d,g.end,v-g.end),d=Object(r.insertString)(this.maskOptions,d,p,0),x?m<u.length&&(m=u.length):(m=Math.max(Object(r.getFilledLength)(this.maskOptions,d),m))<l&&(m=this.getRightEditablePos(m))}h=Object(r.formatValue)(this.maskOptions,h),this.setInputValue(h),this.$emit("input",h),this.isWindowsPhoneBrowser?o()(function(){e.setSelection(m,0)}):this.setCursorPos(m)},onFocus:function(t){if(this.focused=!0,this.maskOptions.mask)if(this.elValue)Object(r.getFilledLength)(this.maskOptions,this.elValue)<this.maskOptions.mask.length&&this.setCursorToEnd();else{var e=this.maskOptions.prefix,n=Object(r.formatValue)(this.maskOptions,e),s=Object(r.formatValue)(this.maskOptions,n),i=s!==t.target.value;i&&(t.target.value=s),this.elValue=s,i&&this.$emit("input",n),this.setCursorToEnd()}this.$emit("focus",t)},onBlur:function(t){if(this.focused=!1,this.maskOptions.mask&&!this.props.alwaysShowMask&&Object(r.isEmpty)(this.maskOptions,this.elValue)){""!==this.getInputValue()&&(this.setInputValue(""),this.$emit("input",""))}this.$emit("blur",t)},onPaste:function(t){this.$emit("paste",t),t.defaultPrevented||(this.beforePasteState={value:this.getInputValue(),selection:this.getSelection()},this.setInputValue(""))},pasteText:function(t,e,n,s){var i=n.start;n.length&&(t=Object(r.clearRange)(this.maskOptions,t,i,n.length));var a=Object(r.getInsertStringLength)(this.maskOptions,t,e,i);t=Object(r.insertString)(this.maskOptions,t,e,i),i+=a,i=this.getRightEditablePos(i)||i,this.setInputValue(t),s&&this.$emit("input",s),this.setCursorPos(i)}}},h=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{ref:"input",on:{focus:t.onFocus,blur:t.onBlur,paste:t.onPaste,keydown:t.onKeyDown,input:function(e){if(!("button"in e)&&t._k(e.keyCode,"lazy",void 0,e.key))return null;t.onChange(e)}}})},c=[],f={render:h,staticRenderFns:c},d=f,p=n(2),g=p(u,d,!1,null,null,null);e.default=g.exports},function(t,e){t.exports=function(t,e,n,s,i,a){var r,l=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,l=t.default);var u="function"==typeof l?l.options:l;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId=i);var h;if(a?(h=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=h):s&&(h=s),h){var c=u.functional,f=c?u.render:u.beforeCreate;c?(u._injectStyles=h,u.render=function(t,e){return h.call(e),f(t,e)}):u.beforeCreate=f?[].concat(f,h):[h]}return{esModule:r,exports:l,options:u}}},function(t,e,n){"use strict";function s(t,e,n){if(void 0===e&&(e=i.defaultMaskChar),null==n&&(n=i.defaultCharsRules),!t||"string"!=typeof t)return{maskChar:e,charsRules:n,mask:null,prefix:null,lastEditablePos:null,permanents:[]};var s="",a="",r=[],l=!1,o=null;return t.split("").forEach(function(t){l||"\\"!==t?(l||!n[t]?(r.push(s.length),s.length===r.length-1&&(a+=t)):o=s.length+1,s+=t,l=!1):l=!0}),{maskChar:e,charsRules:n,prefix:a,mask:s,lastEditablePos:o,permanents:r}}e.__esModule=!0,e.default=s;var i=n(4);t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.defaultMaskChar=e.defaultCharsRules=void 0;var s={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};e.defaultCharsRules=s;e.defaultMaskChar="_"},function(t,e,n){"use strict";function s(){var t=new RegExp("windows","i"),e=new RegExp("firefox","i"),n=new RegExp("android","i"),s=navigator.userAgent;return!t.test(s)&&!e.test(s)&&n.test(s)}function i(){var t=new RegExp("windows","i"),e=new RegExp("phone","i"),n=navigator.userAgent;return t.test(n)&&e.test(n)}function a(){var t=new RegExp("windows","i"),e=new RegExp("firefox","i"),n=new RegExp("android","i"),s=navigator.userAgent;return!t.test(s)&&e.test(s)&&n.test(s)}function r(){var t=new RegExp("windows","i"),e=new RegExp("(ipod|iphone|ipad)","i"),n=navigator.userAgent;return!t.test(n)&&e.test(n)}e.__esModule=!0,e.isAndroidBrowser=s,e.isWindowsPhoneBrowser=i,e.isAndroidFirefox=a,e.isIOS=r},function(t,e,n){"use strict";function s(t,e){return-1!==t.permanents.indexOf(e)}function i(t,e,n){var i=t.mask,a=t.charsRules;if(!n)return!1;if(s(t,e))return i[e]===n;var r=i[e],l=a[r];return new RegExp(l).test(n)}function a(t,e){return e.split("").every(function(e,n){return s(t,n)||!i(t,n,e)})}function r(t,e){var n=t.maskChar,a=t.prefix;if(!n){for(;e.length>a.length&&s(t,e.length-1);)e=e.slice(0,e.length-1);return e.length}for(var r=a.length,l=e.length;l>=a.length;l--){var o=e[l];if(!s(t,l)&&i(t,l,o)){r=l+1;break}}return r}function l(t,e){return r(t,e)===t.mask.length}function o(t,e){var n=t.maskChar,i=t.mask,a=t.prefix;if(!n){for(e=h(t,"",e,0),e.length<a.length&&(e=a);e.length<i.length&&s(t,e.length);)e+=i[e.length];return e}if(e){return h(t,o(t,""),e,0)}for(var r=0;r<i.length;r++)s(t,r)?e+=i[r]:e+=n;return e}function u(t,e,n,i){var a=n+i,r=t.maskChar,l=t.mask,u=t.prefix,h=e.split("");if(!r){for(var c=a;c<h.length;c++)s(t,c)&&(h[c]="");return n=Math.max(u.length,n),h.splice(n,a-n),e=h.join(""),o(t,e)}return h.map(function(e,i){return i<n||i>=a?e:s(t,i)?l[i]:r}).join("")}function h(t,e,n,a){var r=t.mask,u=t.maskChar,h=t.prefix,c=n.split(""),f=l(t,e),d=function(e,n){return!s(t,e)||n===r[e]},p=function(e,n){return!u||!s(t,n)||e!==u};return!u&&a>e.length&&(e+=r.slice(e.length,a)),c.every(function(n){for(;!d(a,n);){if(a>=e.length&&(e+=r[a]),!p(n,a))return!0;if(++a>=r.length)return!1}return!i(t,a,n)&&n!==u||(a<e.length?u||f||a<h.length?e=e.slice(0,a)+n+e.slice(a+1):(e=e.slice(0,a)+n+e.slice(a),e=o(t,e)):u||(e+=n),++a<r.length)}),e}function c(t,e,n,a){var r=t.mask,l=t.maskChar,o=n.split(""),u=a,h=function(e,n){return!s(t,e)||n===r[e]};return o.every(function(e){for(;!h(a,e);)if(++a>=r.length)return!1;return(i(t,a,e)||e===l)&&a++,a<r.length}),a-u}e.__esModule=!0,e.isPermanentChar=s,e.isAllowedChar=i,e.isEmpty=a,e.getFilledLength=r,e.isFilled=l,e.formatValue=o,e.clearRange=u,e.insertString=h,e.getInsertStringLength=c},function(t,e,n){"use strict";function s(t){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(){return setTimeout(t,0)})(t)}e.__esModule=!0,e.default=s,t.exports=e.default}]);