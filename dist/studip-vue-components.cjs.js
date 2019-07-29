/*!
 * @studip/vue-components v0.1.4
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
  name: 'studip-icon',
  props: {
    alt: {
      type: String,
      "default": ''
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
    }
  },
  computed: {
    altAttr: function altAttr() {
      return typeof this.alt === 'string' ? this.alt : '';
    },
    classNames: function classNames() {
      return "icon-role-".concat(this.role, " icon-shape-").concat(this.shape);
    },
    src: function src() {
      return "".concat(this.$studipAssetsPath, "/images/icons/").concat(roleToColor(this.role), "/").concat(shapeToPath(this.shape), ".svg");
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
    "class": _vm.classNames,
    attrs: {
      "width": _vm.size,
      "height": _vm.size,
      "src": _vm.src,
      "alt": _vm.altAttr
    }
  });
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
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

/* script */

/* template */
var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('ul', {
    attrs: {
      "id": "barTopMenu",
      "role": "navigation"
    }
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = undefined;
/* scoped */

var __vue_scope_id__$3 = undefined;
/* module identifier */

var __vue_module_identifier__$3 = undefined;
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

var StudipHeaderNavigation = normalizeComponent_1({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, {}, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, undefined, undefined);

//
var script$3 = {
  computed: {
    hasBadge: function hasBadge() {
      return this.badgeNumber !== null;
    },
    id: function id() {
      return "nav_TODO_path";
    }
  },
  props: {
    active: {
      type: Boolean,
      "default": false
    },
    badgeNumber: {
      type: Number
    },
    description: {
      type: String
    },
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  components: {
    StudipIcon: StudipIcon
  }
};

/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('li', {
    "class": {
      active: _vm.active
    },
    attrs: {
      "id": _vm.id
    }
  }, [_c('a', {
    attrs: {
      "href": _vm.url,
      "title": _vm.description,
      "data-badge": _vm.badgeNumber
    }
  }, [_vm.icon ? _c('studip-icon', {
    staticClass: "headericon original",
    attrs: {
      "shape": _vm.icon,
      "alt": "",
      "title": "",
      "role": "navigation"
    }
  }) : _vm._e(), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "navtitle"
  }, [_vm._v(" " + _vm._s(_vm.label) + " ")])], 1)]);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = undefined;
/* scoped */

var __vue_scope_id__$4 = undefined;
/* module identifier */

var __vue_module_identifier__$4 = undefined;
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

var StudipHeaderNavigationItem = normalizeComponent_1({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$3, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, undefined, undefined);

//
//
//
//
//
//
var script$4 = {
  props: {
    active: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    label: {
      type: String,
      required: true
    },
    url: {
      type: String
    }
  },
  computed: {
    id: function id() {
      return "link-".concat(btoa(this.url));
    },
    classObject: function classObject() {
      return {
        active: this.active
      };
    }
  }
};

/* script */
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('li', {
    "class": _vm.classObject,
    attrs: {
      "id": _vm.id
    }
  }, [_vm.disabled ? _c('span') : _c('a', {
    attrs: {
      "href": _vm.url
    }
  }, [_vm._v(_vm._s(_vm.label))])]);
};

var __vue_staticRenderFns__$5 = [];
/* style */

var __vue_inject_styles__$5 = undefined;
/* scoped */

var __vue_scope_id__$5 = undefined;
/* module identifier */

var __vue_module_identifier__$5 = undefined;
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

var StudipSidebarLinksElement = normalizeComponent_1({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$4, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
var script$5 = {
  props: {
    id: {
      type: String
    },
    title: {
      type: String,
      required: true
    }
  }
};

/* script */
var __vue_script__$5 = script$5;
/* template */

var __vue_render__$6 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "sidebar-widget",
    attrs: {
      "id": _vm.id
    }
  }, [_c('div', {
    staticClass: "sidebar-widget-header"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "sidebar-widget-content"
  }, [_c('ul', {
    staticClass: "widget-list widget-links sidebar-views"
  }, [_vm._t("default")], 2)])]);
};

var __vue_staticRenderFns__$6 = [];
/* style */

var __vue_inject_styles__$6 = undefined;
/* scoped */

var __vue_scope_id__$6 = undefined;
/* module identifier */

var __vue_module_identifier__$6 = undefined;
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject */

/* style inject SSR */

var StudipSidebarLinksWidget = normalizeComponent_1({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$5, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, undefined, undefined);

//
var script$6 = {
  props: {
    img: {
      type: String,
      "default": 'home'
    }
  },
  computed: {
    imgSrc: function imgSrc() {
      return "".concat(this.$studipAssetsPath, "/images/sidebar/").concat(this.img, "-sidebar.png");
    }
  }
};

/* script */
var __vue_script__$6 = script$6;
/* template */

var __vue_render__$7 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "sidebar-image"
  }, [_c('img', {
    attrs: {
      "src": _vm.imgSrc,
      "alt": ""
    }
  })]);
};

var __vue_staticRenderFns__$7 = [];
/* style */

var __vue_inject_styles__$7 = undefined;
/* scoped */

var __vue_scope_id__$7 = undefined;
/* module identifier */

var __vue_module_identifier__$7 = undefined;
/* functional template */

var __vue_is_functional_template__$7 = false;
/* style inject */

/* style inject SSR */

var StudipSidebarImage = normalizeComponent_1({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$6, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, undefined, undefined);

//
var script$7 = {
  name: 'StudipSidebar',
  props: {
    url: {
      type: String,
      required: false,
      "default": 'javascript:(void)0'
    }
  },
  components: {
    StudipSidebarImage: StudipSidebarImage
  }
};

/* script */
var __vue_script__$7 = script$7;
/* template */

var __vue_render__$8 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    attrs: {
      "id": "layout-sidebar"
    }
  }, [_c('section', {
    staticClass: "sidebar"
  }, [_c('studip-sidebar-image'), _vm._v(" "), _vm._t("default", [_vm._v("sidebar widgets")])], 2)]);
};

var __vue_staticRenderFns__$8 = [];
/* style */

var __vue_inject_styles__$8 = undefined;
/* scoped */

var __vue_scope_id__$8 = "data-v-fcf5ec52";
/* module identifier */

var __vue_module_identifier__$8 = undefined;
/* functional template */

var __vue_is_functional_template__$8 = false;
/* style inject */

/* style inject SSR */

var StudipSidebar = normalizeComponent_1({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$7, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, undefined, undefined);

/* script */

/* template */
var __vue_render__$9 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('ul', {
    attrs: {
      "id": "tabs",
      "role": "navigation"
    }
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$9 = [];
/* style */

var __vue_inject_styles__$9 = undefined;
/* scoped */

var __vue_scope_id__$9 = undefined;
/* module identifier */

var __vue_module_identifier__$9 = undefined;
/* functional template */

var __vue_is_functional_template__$9 = false;
/* style inject */

/* style inject SSR */

var StudipTabs = normalizeComponent_1({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, {}, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, undefined, undefined);

//
var script$8 = {
  props: {
    active: {
      type: Boolean,
      "default": false
    },
    badgeNumber: {
      type: Number
    },
    description: {
      type: String
    },
    enabled: {
      type: Boolean,
      "default": true
    },
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      "default": true
    }
  },
  computed: {
    hasBadge: function hasBadge() {
      return this.badgeNumber !== null;
    },
    id: function id() {
      return "todo";
    }
  },
  components: {
    StudipIcon: StudipIcon
  }
};

/* script */
var __vue_script__$8 = script$8;
/* template */

var __vue_render__$a = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.visible ? _c('li', {
    "class": {
      current: _vm.active
    },
    attrs: {
      "id": _vm.id
    }
  }, [_vm.enabled ? _c('a', {
    "class": {
      badge: _vm.hasBadge
    },
    attrs: {
      "href": _vm.url,
      "title": _vm.description,
      "data-badge": _vm.badgeNumber
    }
  }, [_vm.icon ? _c('studip-icon', {
    staticClass: "tab-icon",
    attrs: {
      "shape": _vm.icon,
      "alt": _vm.description
    }
  }) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "tab-title",
    attrs: {
      "title": _vm.description
    }
  }, [_vm._v("\n            " + _vm._s(_vm.label) + "\n        ")])], 1) : _c('span', {
    staticClass: "quiet tab-title"
  }, [_vm.icon ? _c('studip-icon', {
    staticClass: "tab-icon",
    attrs: {
      "shape": _vm.icon,
      "alt": _vm.description
    }
  }) : _vm._e(), _vm._v("\n        " + _vm._s(_vm.label) + "\n    ")], 1)]) : _vm._e();
};

var __vue_staticRenderFns__$a = [];
/* style */

var __vue_inject_styles__$a = undefined;
/* scoped */

var __vue_scope_id__$a = undefined;
/* module identifier */

var __vue_module_identifier__$a = undefined;
/* functional template */

var __vue_is_functional_template__$a = false;
/* style inject */

/* style inject SSR */

var StudipTab = normalizeComponent_1({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$a, __vue_script__$8, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, undefined, undefined);

var index = {
  install: function install(Vue, options) {
    Vue.component("studip-button", StudipButton);
    Vue.component("studip-icon", StudipIcon);
    Vue.component("studip-link-button", StudipLinkButton);
    Vue.component("studip-header-navigation", StudipHeaderNavigation);
    Vue.component("studip-header-navigation-item", StudipHeaderNavigationItem);
    Vue.component("studip-sidebar", StudipSidebar);
    Vue.component("studip-sidebar-links-widget", StudipSidebarLinksWidget);
    Vue.component("studip-sidebar-links-element", StudipSidebarLinksElement);
    Vue.component("studip-tabs", StudipTabs);
    Vue.component("studip-tab", StudipTab);
    Vue.prototype.$studipAssetsUrl = options.studipAssetsUrl || '';
  }
};

module.exports = index;
