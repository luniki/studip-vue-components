/*!
 * @studip/vue-components v0.1.0
 * (c) luniki
 * Released under the GPLv2 License.
 */
'use strict';

//
//
//
//
var script = {
  name: 'StudipButton',
  props: {
    disabled: {
      type: Boolean,
      "default": false
    },
    name: {
      type: String,
      required: true
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', {
    staticClass: "button",
    attrs: {
      "type": "submit",
      "disabled": _vm.disabled,
      "name": _vm.name
    }
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = "data-v-f50c4694";
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

var StudipButton = normalizeComponent_1({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

//
//
//
//
var rolesToColors = {
  'info': 'black',
  'clickable': 'blue',
  'accept': 'green',
  'status-green': 'green',
  'inactive': 'grey',
  'navigation': 'blue',
  'new': 'red',
  'attention': 'red',
  'status-red': 'red',
  'info_alt': 'white',
  'sort': 'yellow',
  'status-yellow': 'yellow'
};

function roleToColor(role) {
  return rolesToColors[role] || rolesToColors['clickable'];
}

function shapeToPath(shape) {
  return shape.split('+').reverse().join('/');
}

var script$1 = {
  name: 'Icon',
  props: {
    alt: {
      type: String
    },
    role: {
      "default": 'clickable',
      validator: function validator(value) {
        return rolesToColors.hasOwnProperty(value);
      }
    },
    shape: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      "default": 16
    },
    title: {
      type: String
    }
  },
  computed: {
    alt: function alt() {
      return this.alt || this.title || '';
    },
    src: function src() {
      return "/images/icons/".concat(roleToColor(this.role), "/").concat(shapeToPath(this.shape), ".svg");
    }
  }
};

/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('img', {
    attrs: {
      "width": _vm.size,
      "height": _vm.size,
      "src": _vm.src
    }
  });
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = "data-v-e52fc8ea";
/* module identifier */

var __vue_module_identifier__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

var StudipIcon = normalizeComponent_1({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, undefined, undefined);

//
//
//
//
var script$2 = {
  name: 'StudipLinkButton',
  props: {
    url: {
      type: String,
      required: false,
      "default": 'javascript:(void)0'
    }
  }
};

/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('a', {
    staticClass: "button",
    attrs: {
      "tabindex": "0",
      "href": _vm.url
    }
  }, [_vm._t("default", [_vm._v("Submit")])], 2);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = "data-v-035d8646";
/* module identifier */

var __vue_module_identifier__$2 = undefined;
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

var StudipLinkButton = normalizeComponent_1({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, undefined, undefined);

var index = {
  install: function install(Vue, options) {
    Vue.component("studip-button", StudipButton);
    Vue.component("studip-icon", StudipIcon);
    Vue.component("studip-link-button", StudipLinkButton); // Vue.component("studip-button", StudipButton);
  }
};

module.exports = index;
