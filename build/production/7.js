(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ SiderContext; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(11);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/BarsOutlined.js
// This icon file is generated automatically.
var BarsOutlined_BarsOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "0 0 1024 1024",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"
      }
    }]
  },
  "name": "bars",
  "theme": "outlined"
};
/* harmony default export */ var asn_BarsOutlined = (BarsOutlined_BarsOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 8 modules
var AntdIcon = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/BarsOutlined.js
 // GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY





var icons_BarsOutlined_BarsOutlined = function BarsOutlined(props, ref) {
  return /*#__PURE__*/react["createElement"](AntdIcon["a" /* default */], Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, props), {}, {
    ref: ref,
    icon: asn_BarsOutlined
  }));
};

icons_BarsOutlined_BarsOutlined.displayName = 'BarsOutlined';
/* harmony default export */ var icons_BarsOutlined = (/*#__PURE__*/react["forwardRef"](icons_BarsOutlined_BarsOutlined));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__(266);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LeftOutlined.js + 1 modules
var LeftOutlined = __webpack_require__(296);

// EXTERNAL MODULE: ./node_modules/antd/es/layout/layout.js
var layout = __webpack_require__(287);

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var context = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/antd/es/_util/isNumeric.js
var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

/* harmony default export */ var _util_isNumeric = (isNumeric);
// CONCATENATED MODULE: ./node_modules/antd/es/layout/Sider.js




var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











var dimensionMaxMap = {
  xs: '479.98px',
  sm: '575.98px',
  md: '767.98px',
  lg: '991.98px',
  xl: '1199.98px',
  xxl: '1599.98px'
};
var SiderContext = /*#__PURE__*/react["createContext"]({});

var generateId = function () {
  var i = 0;
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    i += 1;
    return "".concat(prefix).concat(i);
  };
}();

var Sider = /*#__PURE__*/react["forwardRef"](function (_a, ref) {
  var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      trigger = _a.trigger,
      children = _a.children,
      _a$defaultCollapsed = _a.defaultCollapsed,
      defaultCollapsed = _a$defaultCollapsed === void 0 ? false : _a$defaultCollapsed,
      _a$theme = _a.theme,
      theme = _a$theme === void 0 ? 'dark' : _a$theme,
      _a$style = _a.style,
      style = _a$style === void 0 ? {} : _a$style,
      _a$collapsible = _a.collapsible,
      collapsible = _a$collapsible === void 0 ? false : _a$collapsible,
      _a$reverseArrow = _a.reverseArrow,
      reverseArrow = _a$reverseArrow === void 0 ? false : _a$reverseArrow,
      _a$width = _a.width,
      width = _a$width === void 0 ? 200 : _a$width,
      _a$collapsedWidth = _a.collapsedWidth,
      collapsedWidth = _a$collapsedWidth === void 0 ? 80 : _a$collapsedWidth,
      zeroWidthTriggerStyle = _a.zeroWidthTriggerStyle,
      breakpoint = _a.breakpoint,
      onCollapse = _a.onCollapse,
      onBreakpoint = _a.onBreakpoint,
      props = __rest(_a, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]);

  var _useContext = Object(react["useContext"])(layout["d" /* LayoutContext */]),
      siderHook = _useContext.siderHook;

  var _useState = Object(react["useState"])('collapsed' in props ? props.collapsed : defaultCollapsed),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      below = _useState4[0],
      setBelow = _useState4[1];

  Object(react["useEffect"])(function () {
    if ('collapsed' in props) {
      setCollapsed(props.collapsed);
    }
  }, [props.collapsed]);

  var handleSetCollapsed = function handleSetCollapsed(value, type) {
    if (!('collapsed' in props)) {
      setCollapsed(value);
    }

    onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(value, type);
  }; // ========================= Responsive =========================


  var responsiveHandlerRef = Object(react["useRef"])();

  responsiveHandlerRef.current = function (mql) {
    setBelow(mql.matches);
    onBreakpoint === null || onBreakpoint === void 0 ? void 0 : onBreakpoint(mql.matches);

    if (collapsed !== mql.matches) {
      handleSetCollapsed(mql.matches, 'responsive');
    }
  };

  Object(react["useEffect"])(function () {
    function responsiveHandler(mql) {
      return responsiveHandlerRef.current(mql);
    }

    var mql;

    if (typeof window !== 'undefined') {
      var _window = window,
          matchMedia = _window.matchMedia;

      if (matchMedia && breakpoint && breakpoint in dimensionMaxMap) {
        mql = matchMedia("(max-width: ".concat(dimensionMaxMap[breakpoint], ")"));

        try {
          mql.addEventListener('change', responsiveHandler);
        } catch (error) {
          mql.addListener(responsiveHandler);
        }

        responsiveHandler(mql);
      }
    }

    return function () {
      try {
        mql === null || mql === void 0 ? void 0 : mql.removeEventListener('change', responsiveHandler);
      } catch (error) {
        mql === null || mql === void 0 ? void 0 : mql.removeListener(responsiveHandler);
      }
    };
  }, []);
  Object(react["useEffect"])(function () {
    var uniqueId = generateId('ant-sider-');
    siderHook.addSider(uniqueId);
    return function () {
      return siderHook.removeSider(uniqueId);
    };
  }, []);

  var toggle = function toggle() {
    handleSetCollapsed(!collapsed, 'clickTrigger');
  };

  var _useContext2 = Object(react["useContext"])(context["b" /* ConfigContext */]),
      getPrefixCls = _useContext2.getPrefixCls;

  var renderSider = function renderSider() {
    var _classNames;

    var prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
    var divProps = Object(omit["a" /* default */])(props, ['collapsed']);
    var rawWidth = collapsed ? collapsedWidth : width; // use "px" as fallback unit for width

    var siderWidth = _util_isNumeric(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth); // special trigger when collapsedWidth == 0

    var zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? /*#__PURE__*/react["createElement"]("span", {
      onClick: toggle,
      className: classnames_default()("".concat(prefixCls, "-zero-width-trigger"), "".concat(prefixCls, "-zero-width-trigger-").concat(reverseArrow ? 'right' : 'left')),
      style: zeroWidthTriggerStyle
    }, trigger || /*#__PURE__*/react["createElement"](icons_BarsOutlined, null)) : null;
    var iconObj = {
      expanded: reverseArrow ? /*#__PURE__*/react["createElement"](RightOutlined["a" /* default */], null) : /*#__PURE__*/react["createElement"](LeftOutlined["a" /* default */], null),
      collapsed: reverseArrow ? /*#__PURE__*/react["createElement"](LeftOutlined["a" /* default */], null) : /*#__PURE__*/react["createElement"](RightOutlined["a" /* default */], null)
    };
    var status = collapsed ? 'collapsed' : 'expanded';
    var defaultTrigger = iconObj[status];
    var triggerDom = trigger !== null ? zeroWidthTrigger || /*#__PURE__*/react["createElement"]("div", {
      className: "".concat(prefixCls, "-trigger"),
      onClick: toggle,
      style: {
        width: siderWidth
      }
    }, trigger || defaultTrigger) : null;

    var divStyle = Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, style), {
      flex: "0 0 ".concat(siderWidth),
      maxWidth: siderWidth,
      minWidth: siderWidth,
      width: siderWidth
    });

    var siderCls = classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(theme), (_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-collapsed"), !!collapsed), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-has-trigger"), collapsible && trigger !== null && !zeroWidthTrigger), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-below"), !!below), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-zero-width"), parseFloat(siderWidth) === 0), _classNames), className);
    return /*#__PURE__*/react["createElement"]("aside", Object(esm_extends["a" /* default */])({
      className: siderCls
    }, divProps, {
      style: divStyle,
      ref: ref
    }), /*#__PURE__*/react["createElement"]("div", {
      className: "".concat(prefixCls, "-children")
    }, children), collapsible || below && zeroWidthTrigger ? triggerDom : null);
  };

  return /*#__PURE__*/react["createElement"](SiderContext.Provider, {
    value: {
      siderCollapsed: collapsed
    }
  }, renderSider());
});
Sider.displayName = 'Sider';
/* harmony default export */ var layout_Sider = __webpack_exports__["b"] = (Sider);

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/RightOutlined.js
// This icon file is generated automatically.
var RightOutlined_RightOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
      }
    }]
  },
  "name": "right",
  "theme": "outlined"
};
/* harmony default export */ var asn_RightOutlined = (RightOutlined_RightOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 8 modules
var AntdIcon = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js
 // GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY





var icons_RightOutlined_RightOutlined = function RightOutlined(props, ref) {
  return /*#__PURE__*/react["createElement"](AntdIcon["a" /* default */], Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, props), {}, {
    ref: ref,
    icon: asn_RightOutlined
  }));
};

icons_RightOutlined_RightOutlined.displayName = 'RightOutlined';
/* harmony default export */ var icons_RightOutlined = __webpack_exports__["a"] = (/*#__PURE__*/react["forwardRef"](icons_RightOutlined_RightOutlined));

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LayoutContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Content; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26);





var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var LayoutContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createContext"]({
  siderHook: {
    addSider: function addSider() {
      return null;
    },
    removeSider: function removeSider() {
      return null;
    }
  }
});

function generator(_ref) {
  var suffixCls = _ref.suffixCls,
      tagName = _ref.tagName,
      displayName = _ref.displayName;
  return function (BasicComponent) {
    var Adapter = function Adapter(props) {
      var _React$useContext = react__WEBPACK_IMPORTED_MODULE_4__["useContext"](_config_provider__WEBPACK_IMPORTED_MODULE_6__[/* ConfigContext */ "b"]),
          getPrefixCls = _React$useContext.getPrefixCls;

      var customizePrefixCls = props.prefixCls;
      var prefixCls = getPrefixCls(suffixCls, customizePrefixCls);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](BasicComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
        prefixCls: prefixCls,
        tagName: tagName
      }, props));
    };

    Adapter.displayName = displayName;
    return Adapter;
  };
}

var Basic = function Basic(props) {
  var prefixCls = props.prefixCls,
      className = props.className,
      children = props.children,
      tagName = props.tagName,
      others = __rest(props, ["prefixCls", "className", "children", "tagName"]);

  var classString = classnames__WEBPACK_IMPORTED_MODULE_5___default()(prefixCls, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](tagName, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
    className: classString
  }, others), children);
};

var BasicLayout = function BasicLayout(props) {
  var _classNames;

  var _React$useContext2 = react__WEBPACK_IMPORTED_MODULE_4__["useContext"](_config_provider__WEBPACK_IMPORTED_MODULE_6__[/* ConfigContext */ "b"]),
      direction = _React$useContext2.direction;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__["useState"]([]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_React$useState, 2),
      siders = _React$useState2[0],
      setSiders = _React$useState2[1];

  var prefixCls = props.prefixCls,
      className = props.className,
      children = props.children,
      hasSider = props.hasSider,
      Tag = props.tagName,
      others = __rest(props, ["prefixCls", "className", "children", "hasSider", "tagName"]);

  var classString = classnames__WEBPACK_IMPORTED_MODULE_5___default()(prefixCls, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_classNames, "".concat(prefixCls, "-has-sider"), typeof hasSider === 'boolean' ? hasSider : siders.length > 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](LayoutContext.Provider, {
    value: {
      siderHook: {
        addSider: function addSider(id) {
          setSiders(function (prev) {
            return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(prev), [id]);
          });
        },
        removeSider: function removeSider(id) {
          setSiders(function (prev) {
            return prev.filter(function (currentId) {
              return currentId !== id;
            });
          });
        }
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
    className: classString
  }, others), children));
};

var Layout = generator({
  suffixCls: 'layout',
  tagName: 'section',
  displayName: 'Layout'
})(BasicLayout);
var Header = generator({
  suffixCls: 'layout-header',
  tagName: 'header',
  displayName: 'Header'
})(Basic);
var Footer = generator({
  suffixCls: 'layout-footer',
  tagName: 'footer',
  displayName: 'Footer'
})(Basic);
var Content = generator({
  suffixCls: 'layout-content',
  tagName: 'main',
  displayName: 'Content'
})(Basic);

/* harmony default export */ __webpack_exports__["e"] = (Layout);

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 2 modules
var createSuper = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/rc-menu/es/index.js + 24 modules
var es = __webpack_require__(248);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(11);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__(265);

// CONCATENATED MODULE: ./node_modules/antd/es/menu/MenuContext.js

var MenuContext = /*#__PURE__*/Object(react["createContext"])({
  prefixCls: '',
  firstLevel: true,
  inlineCollapsed: false
});
/* harmony default export */ var menu_MenuContext = (MenuContext);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(94);

// CONCATENATED MODULE: ./node_modules/antd/es/menu/SubMenu.js








function SubMenu(props) {
  var _a;

  var popupClassName = props.popupClassName,
      icon = props.icon,
      title = props.title;
  var context = react["useContext"](menu_MenuContext);
  var prefixCls = context.prefixCls,
      inlineCollapsed = context.inlineCollapsed,
      antdMenuTheme = context.antdMenuTheme;
  var parentPath = Object(es["g" /* useFullPath */])();
  var titleNode;

  if (!icon) {
    titleNode = inlineCollapsed && !parentPath.length && title && typeof title === 'string' ? /*#__PURE__*/react["createElement"]("div", {
      className: "".concat(prefixCls, "-inline-collapsed-noicon")
    }, title.charAt(0)) : /*#__PURE__*/react["createElement"]("span", {
      className: "".concat(prefixCls, "-title-content")
    }, title);
  } else {
    // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
    // ref: https://github.com/ant-design/ant-design/pull/23456
    var titleIsSpan = Object(reactNode["b" /* isValidElement */])(title) && title.type === 'span';
    titleNode = /*#__PURE__*/react["createElement"](react["Fragment"], null, Object(reactNode["a" /* cloneElement */])(icon, {
      className: classnames_default()(Object(reactNode["b" /* isValidElement */])(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : '', "".concat(prefixCls, "-item-icon"))
    }), titleIsSpan ? title : /*#__PURE__*/react["createElement"]("span", {
      className: "".concat(prefixCls, "-title-content")
    }, title));
  }

  return /*#__PURE__*/react["createElement"](menu_MenuContext.Provider, {
    value: Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, context), {
      firstLevel: false
    })
  }, /*#__PURE__*/react["createElement"](es["e" /* SubMenu */], Object(esm_extends["a" /* default */])({}, Object(omit["a" /* default */])(props, ['icon']), {
    title: titleNode,
    popupClassName: classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(antdMenuTheme), popupClassName)
  })));
}

/* harmony default export */ var menu_SubMenu = (SubMenu);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 1 modules
var tooltip = __webpack_require__(264);

// EXTERNAL MODULE: ./node_modules/antd/es/layout/Sider.js + 3 modules
var Sider = __webpack_require__(263);

// CONCATENATED MODULE: ./node_modules/antd/es/menu/MenuItem.js







var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










var MenuItem_MenuItem = /*#__PURE__*/function (_React$Component) {
  Object(inherits["a" /* default */])(MenuItem, _React$Component);

  var _super = Object(createSuper["a" /* default */])(MenuItem);

  function MenuItem() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, MenuItem);

    _this = _super.apply(this, arguments);

    _this.renderItem = function (_ref) {
      var _classNames;

      var siderCollapsed = _ref.siderCollapsed;

      var _a;

      var _this$context = _this.context,
          prefixCls = _this$context.prefixCls,
          firstLevel = _this$context.firstLevel,
          inlineCollapsed = _this$context.inlineCollapsed,
          direction = _this$context.direction;
      var _this$props = _this.props,
          className = _this$props.className,
          children = _this$props.children;

      var _b = _this.props,
          title = _b.title,
          icon = _b.icon,
          danger = _b.danger,
          rest = __rest(_b, ["title", "icon", "danger"]);

      var tooltipTitle = title;

      if (typeof title === 'undefined') {
        tooltipTitle = firstLevel ? children : '';
      } else if (title === false) {
        tooltipTitle = '';
      }

      var tooltipProps = {
        title: tooltipTitle
      };

      if (!siderCollapsed && !inlineCollapsed) {
        tooltipProps.title = null; // Reset `visible` to fix control mode tooltip display not correct
        // ref: https://github.com/ant-design/ant-design/issues/16742

        tooltipProps.visible = false;
      }

      var childrenLength = Object(toArray["a" /* default */])(children).length;
      return /*#__PURE__*/react["createElement"](tooltip["a" /* default */], Object(esm_extends["a" /* default */])({}, tooltipProps, {
        placement: direction === 'rtl' ? 'left' : 'right',
        overlayClassName: "".concat(prefixCls, "-inline-collapsed-tooltip")
      }), /*#__PURE__*/react["createElement"](es["b" /* Item */], Object(esm_extends["a" /* default */])({}, rest, {
        className: classnames_default()((_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-item-danger"), danger), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-item-only-child"), (icon ? childrenLength + 1 : childrenLength) === 1), _classNames), className),
        title: typeof title === 'string' ? title : undefined
      }), Object(reactNode["a" /* cloneElement */])(icon, {
        className: classnames_default()(Object(reactNode["b" /* isValidElement */])(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : '', "".concat(prefixCls, "-item-icon"))
      }), _this.renderItemChildren(inlineCollapsed)));
    };

    return _this;
  }

  Object(createClass["a" /* default */])(MenuItem, [{
    key: "renderItemChildren",
    value: function renderItemChildren(inlineCollapsed) {
      var _this$context2 = this.context,
          prefixCls = _this$context2.prefixCls,
          firstLevel = _this$context2.firstLevel;
      var _this$props2 = this.props,
          icon = _this$props2.icon,
          children = _this$props2.children;
      var wrapNode = /*#__PURE__*/react["createElement"]("span", {
        className: "".concat(prefixCls, "-title-content")
      }, children); // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
      // ref: https://github.com/ant-design/ant-design/pull/23456

      if (!icon || Object(reactNode["b" /* isValidElement */])(children) && children.type === 'span') {
        if (children && inlineCollapsed && firstLevel && typeof children === 'string') {
          return /*#__PURE__*/react["createElement"]("div", {
            className: "".concat(prefixCls, "-inline-collapsed-noicon")
          }, children.charAt(0));
        }
      }

      return wrapNode;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react["createElement"](Sider["a" /* SiderContext */].Consumer, null, this.renderItem);
    }
  }]);

  return MenuItem;
}(react["Component"]);


MenuItem_MenuItem.contextType = menu_MenuContext;
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var config_provider_context = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/antd/es/_util/devWarning.js
var devWarning = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(258);

// CONCATENATED MODULE: ./node_modules/antd/es/menu/index.js






var menu_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};















var menu_InternalMenu = /*#__PURE__*/function (_React$Component) {
  Object(inherits["a" /* default */])(InternalMenu, _React$Component);

  var _super = Object(createSuper["a" /* default */])(InternalMenu);

  function InternalMenu(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, InternalMenu);

    _this = _super.call(this, props);

    _this.renderMenu = function (_ref) {
      var getPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls,
          direction = _ref.direction;
      var rootPrefixCls = getPrefixCls();

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          theme = _a.theme,
          expandIcon = _a.expandIcon,
          restProps = menu_rest(_a, ["prefixCls", "className", "theme", "expandIcon"]);

      var passedProps = Object(omit["a" /* default */])(restProps, ['siderCollapsed', 'collapsedWidth']);

      var inlineCollapsed = _this.getInlineCollapsed();

      var defaultMotions = {
        horizontal: {
          motionName: "".concat(rootPrefixCls, "-slide-up")
        },
        inline: motion["a" /* default */],
        other: {
          motionName: "".concat(rootPrefixCls, "-zoom-big")
        }
      };
      var prefixCls = getPrefixCls('menu', customizePrefixCls);
      var menuClassName = classnames_default()("".concat(prefixCls, "-").concat(theme), className);
      return /*#__PURE__*/react["createElement"](menu_MenuContext.Provider, {
        value: {
          prefixCls: prefixCls,
          inlineCollapsed: inlineCollapsed || false,
          antdMenuTheme: theme,
          direction: direction,
          firstLevel: true
        }
      }, /*#__PURE__*/react["createElement"](es["f" /* default */], Object(esm_extends["a" /* default */])({
        getPopupContainer: getPopupContainer,
        overflowedIndicator: /*#__PURE__*/react["createElement"](EllipsisOutlined["a" /* default */], null),
        overflowedIndicatorPopupClassName: "".concat(prefixCls, "-").concat(theme)
      }, passedProps, {
        inlineCollapsed: inlineCollapsed,
        className: menuClassName,
        prefixCls: prefixCls,
        direction: direction,
        defaultMotions: defaultMotions,
        expandIcon: Object(reactNode["a" /* cloneElement */])(expandIcon, {
          className: "".concat(prefixCls, "-submenu-expand-icon")
        })
      })));
    };

    Object(devWarning["a" /* default */])(!('inlineCollapsed' in props && props.mode !== 'inline'), 'Menu', '`inlineCollapsed` should only be used when `mode` is inline.');
    Object(devWarning["a" /* default */])(!(props.siderCollapsed !== undefined && 'inlineCollapsed' in props), 'Menu', '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.');
    return _this;
  }

  Object(createClass["a" /* default */])(InternalMenu, [{
    key: "getInlineCollapsed",
    value: function getInlineCollapsed() {
      var _this$props = this.props,
          inlineCollapsed = _this$props.inlineCollapsed,
          siderCollapsed = _this$props.siderCollapsed;

      if (siderCollapsed !== undefined) {
        return siderCollapsed;
      }

      return inlineCollapsed;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react["createElement"](config_provider_context["a" /* ConfigConsumer */], null, this.renderMenu);
    }
  }]);

  return InternalMenu;
}(react["Component"]);

menu_InternalMenu.defaultProps = {
  theme: 'light' // or dark

}; // We should keep this as ref-able

var menu_Menu = /*#__PURE__*/function (_React$Component2) {
  Object(inherits["a" /* default */])(Menu, _React$Component2);

  var _super2 = Object(createSuper["a" /* default */])(Menu);

  function Menu() {
    Object(classCallCheck["a" /* default */])(this, Menu);

    return _super2.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(Menu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react["createElement"](Sider["a" /* SiderContext */].Consumer, null, function (context) {
        return /*#__PURE__*/react["createElement"](menu_InternalMenu, Object(esm_extends["a" /* default */])({}, _this2.props, context));
      });
    }
  }]);

  return Menu;
}(react["Component"]);

menu_Menu.Divider = es["a" /* Divider */];
menu_Menu.Item = MenuItem_MenuItem;
menu_Menu.SubMenu = menu_SubMenu;
menu_Menu.ItemGroup = es["c" /* ItemGroup */];
/* harmony default export */ var menu = __webpack_exports__["a"] = (menu_Menu);

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/LeftOutlined.js
// This icon file is generated automatically.
var LeftOutlined_LeftOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
      }
    }]
  },
  "name": "left",
  "theme": "outlined"
};
/* harmony default export */ var asn_LeftOutlined = (LeftOutlined_LeftOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 8 modules
var AntdIcon = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/LeftOutlined.js
 // GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY





var icons_LeftOutlined_LeftOutlined = function LeftOutlined(props, ref) {
  return /*#__PURE__*/react["createElement"](AntdIcon["a" /* default */], Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, props), {}, {
    ref: ref,
    icon: asn_LeftOutlined
  }));
};

icons_LeftOutlined_LeftOutlined.displayName = 'LeftOutlined';
/* harmony default export */ var icons_LeftOutlined = __webpack_exports__["a"] = (/*#__PURE__*/react["forwardRef"](icons_LeftOutlined_LeftOutlined));

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"sider":"sider-1-PYV"};

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/antd/es/layout/layout.js
var layout = __webpack_require__(287);

// EXTERNAL MODULE: ./node_modules/antd/es/layout/Sider.js + 3 modules
var Sider = __webpack_require__(263);

// CONCATENATED MODULE: ./node_modules/antd/es/layout/index.js


var Layout = layout["e" /* default */];
Layout.Header = layout["c" /* Header */];
Layout.Footer = layout["b" /* Footer */];
Layout.Content = layout["a" /* Content */];
Layout.Sider = Sider["b" /* default */];
/* harmony default export */ var es_layout = (Layout);
// EXTERNAL MODULE: ./src/libs/util.js
var util = __webpack_require__(96);

// EXTERNAL MODULE: ./src/libs/request.js + 1 modules
var request = __webpack_require__(99);

// CONCATENATED MODULE: ./src/pages/Main/pages.jsx
// 路由path与页面组件的映射关系

/* harmony default export */ var Main_pages = ({
  '/shopManage': /*#__PURE__*/Object(react["lazy"])(() => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, 389))),
  //门店列表
  '/salesmanManage': /*#__PURE__*/Object(react["lazy"])(() => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, 391))),
  //销售员列表
  '/salesCustManage': /*#__PURE__*/Object(react["lazy"])(() => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, 392))),
  //销售客户员列表
  '/orderManage': /*#__PURE__*/Object(react["lazy"])(() => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, 394))) //订单管理

});
// EXTERNAL MODULE: ./src/components/Sidebar/index.css
var Sidebar = __webpack_require__(370);
var Sidebar_default = /*#__PURE__*/__webpack_require__.n(Sidebar);

// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 3 modules
var es_menu = __webpack_require__(293);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/MenuOutlined.js
// This icon file is generated automatically.
var MenuOutlined_MenuOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
      }
    }]
  },
  "name": "menu",
  "theme": "outlined"
};
/* harmony default export */ var asn_MenuOutlined = (MenuOutlined_MenuOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 8 modules
var AntdIcon = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/MenuOutlined.js
 // GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY





var icons_MenuOutlined_MenuOutlined = function MenuOutlined(props, ref) {
  return /*#__PURE__*/react["createElement"](AntdIcon["a" /* default */], Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, props), {}, {
    ref: ref,
    icon: asn_MenuOutlined
  }));
};

icons_MenuOutlined_MenuOutlined.displayName = 'MenuOutlined';
/* harmony default export */ var icons_MenuOutlined = (/*#__PURE__*/react["forwardRef"](icons_MenuOutlined_MenuOutlined));
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(62);

// CONCATENATED MODULE: ./src/components/Sidebar/index.jsx




const {
  Sider: Sidebar_Sider
} = es_layout;
const {
  SubMenu
} = es_menu["a" /* default */];

/* harmony default export */ var components_Sidebar = (class extends react["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let {
      menus,
      location,
      paths,
      pages
    } = this.props;
    let sks = paths ? Object.keys(paths).filter(path => RegExp(path).test(location.pathname)) : [];
    if (!location.oks) location.oks = sks.length ? sks : false;
    return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(Sidebar_Sider, {
      className: Sidebar_default.a.sider,
      collapsible: true,
      width: 200,
      style: {
        background: '#fff'
      }
    }, menus && /*#__PURE__*/react_default.a.createElement(es_menu["a" /* default */], {
      selectedKeys: sks,
      openKeys: location.oks,
      mode: "inline",
      theme: "dark",
      inlineIndent: 12,
      onOpenChange: oks => {
        location.oks = oks;
        this.forceUpdate();
      }
    }, menus.map(menu => {
      let getMenuItem = menu => /*#__PURE__*/react_default.a.createElement(es_menu["a" /* default */].Item, {
        icon: /*#__PURE__*/react_default.a.createElement(icons_MenuOutlined, null),
        key: menu.path
      }, pages[menu.path] ? /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* Link */], {
        to: menu.path
      }, menu.title) : menu.title);

      return menu.subMenus.length ? /*#__PURE__*/react_default.a.createElement(SubMenu, {
        icon: /*#__PURE__*/react_default.a.createElement(icons_MenuOutlined, null),
        key: menu.path,
        title: menu.title
      }, menu.subMenus.map(menu => getMenuItem(menu))) : getMenuItem(menu);
    }))));
  }

});
;
// CONCATENATED MODULE: ./src/pages/Main/index.jsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const {
  Content
} = es_layout;




const Error = /*#__PURE__*/Object(react["lazy"])(() => __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, 388)));
/* harmony default export */ var Main = __webpack_exports__["default"] = (class extends react["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      paths: {},
      // 以path为键的菜单数据
      menus: [],
      // 用来创建菜单栏的数据
      routes: [] // 用来创建菜单相关的react路由的数据

    };
  }

  componentDidMount() {
    // 菜单集合
    let newMenu = [{
      id: "1",
      title: "门店列表",
      url: "/shopManage"
    }, {
      id: "2",
      title: "销售员列表",
      url: "/salesmanManage"
    }, {
      id: "3",
      title: "销售员客户列表",
      url: "/salesCustManage"
    }, {
      id: "4",
      title: "订单管理",
      url: "/orderManage"
    }];
    let obj = Object(util["b" /* getMenus */])(newMenu, Main_pages);
    this.setState(obj, () => this.redirect());
  }

  componentDidUpdate() {
    this.redirect();
  }

  redirect() {
    let {
      history,
      location
    } = this.props;
    let {
      menus
    } = this.state;
    let p = location.pathname;

    if (p === '/' || p === '/Main') {
      history.replace(menus[0].path);
    }
  }

  render() {
    let {
      menus,
      paths,
      routes
    } = this.state;
    let {
      location
    } = this.props;
    return /*#__PURE__*/react_default.a.createElement(es_layout, {
      style: {
        height: '100%'
      }
    }, /*#__PURE__*/react_default.a.createElement(components_Sidebar, {
      location: location,
      menus: menus,
      paths: paths,
      pages: Main_pages
    }), /*#__PURE__*/react_default.a.createElement(Content, {
      style: {
        background: '#fff',
        borderLeft: '1px solid #f0f2f5'
      }
    }, routes && routes.length ? /*#__PURE__*/react_default.a.createElement(react["Suspense"], {
      fallback: /*#__PURE__*/react_default.a.createElement("div", null, "Loading...")
    }, /*#__PURE__*/react_default.a.createElement(react_router["c" /* Switch */], null, /*#__PURE__*/react_default.a.createElement(react_router["a" /* Route */], {
      exact: true,
      path: "/"
    }, "\u540E\u53F0\u7BA1\u7406"), routes.map(route => {
      let {
        Page
      } = route;

      let render = props => /*#__PURE__*/react_default.a.createElement(Page, _extends({}, props, {
        pages: Main_pages
      }));

      return /*#__PURE__*/react_default.a.createElement(react_router["a" /* Route */], {
        key: route.id,
        path: route.path,
        render: render
      });
    }), /*#__PURE__*/react_default.a.createElement(react_router["a" /* Route */], null, /*#__PURE__*/react_default.a.createElement(Error, {
      paths: paths,
      pages: Main_pages,
      location: location
    })))) : '正在获取菜单...'));
  }

});
;

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export base64 */
/* unused harmony export getBase64 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return removeUndefined; });
/* unused harmony export saltEncrypt */
/* unused harmony export toString */
/* unused harmony export compareVersion */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return saveBlob; });
/* unused harmony export getNavs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMenus; });
/* unused harmony export getTabs */
/* unused harmony export getFirstPath */
/* unused harmony export isNum */
/* unused harmony export getUniqKey */
/* unused harmony export addUniqKeys */
/* unused harmony export prefixInteger */
/* unused harmony export toMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatDate; });
/* unused harmony export newToDecimal */
/* harmony import */ var crypto_js_sha256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(267);
/* harmony import */ var crypto_js_sha256__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js_sha256__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(268);
/* harmony import */ var crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(269);
/* harmony import */ var crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(270);
/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js_md5__WEBPACK_IMPORTED_MODULE_3__);




const keyPrefix = crypto_js_md5__WEBPACK_IMPORTED_MODULE_3___default()(Math.random() + '').toString();
let keyCount = 0; // Base64加密解密封装

const base64 = {
  encode(str) {
    let wordArray = crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_2___default.a.parse(str);
    return crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(wordArray);
  },

  decode(str) {
    let parsedWordArray = crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_1___default.a.parse(str);
    return parsedWordArray.toString(crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_2___default.a);
  }

}; // Base64加密解密封装

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = error => reject(error);
  });
}
; // 移除一个对象中的undefined

function removeUndefined(obj) {
  Object.keys(obj).forEach(key => {
    if (obj[key] === undefined) delete obj[key];
  });
  return obj;
}
; // 盐加密

function saltEncrypt(txt, salt) {
  let txt1 = crypto_js_sha256__WEBPACK_IMPORTED_MODULE_0___default()(txt).toString();
  let txt2 = txt1 + salt;
  let txt3 = crypto_js_sha256__WEBPACK_IMPORTED_MODULE_0___default()(txt2).toString();
  return txt3;
}
; // 将一个变量转为字符串

function toString(val) {
  if (typeof val == 'string') return val;
  if (val.message) return val.message;
  let str = val.toString();
  if (str == '[object Object]') return JSON.stringify(val);
  return str;
} // 版本号比较

function compareVersion(v1, v2) {
  // 如果v1比v2大，则返回true
  let v1_arr = v1.split('.');
  let v2_arr = v2.split('.');
  let delta;
  v1_arr.forEach((str1, i) => {
    if (delta) return;
    let str2 = v2_arr[i];
    delta = str1 - str2;
  });
  return delta > 0;
} // 保存blob到文件

function saveBlob(res) {
  let blob = new Blob([res], {
    type: "application/vnd.ms-excel"
  });
  let resUrl = URL.createObjectURL(blob);
  let link = document.createElement("a");
  link.style.display = "none";
  link.href = resUrl;
  link.setAttribute("download", new Date().getTime() + ".xls");
  document.body.appendChild(link);
  link.click();
} // 加工后台传回的导航数据，生成新的导航数据

function getNavs(arr, pages) {
  // arr 原始导航数据 pages 前端path与页面的映射数据
  let paths = {}; // 以path为键的导航和菜单数据

  let navs = []; // 用来创建导航栏的数据

  let routes = []; // 用来创建react路由的数据

  arr.forEach(item => {
    let path = item.url;
    let Page = pages[path]; // 填写paths

    paths[path] = item; // 填写navs

    navs.push({
      path,
      title: item.title
    }); // 填写routes

    Page && routes.push({
      path,
      Page,
      id: item.id
    });
  });
  return {
    paths,
    navs,
    routes
  };
} // 加工后台传回的菜单数据，生成新的菜单数据

function getMenus(arr, pages) {
  // arr 原始菜单数据 pages 前端path与页面的映射数据
  let paths = {}; // 以path为键的菜单数据

  let menus = []; // 用来创建菜单栏的数据

  let routes = []; // 用来创建菜单相关的react路由的数据

  let fill = (item, menus) => {
    // 填写paths, menus, routes
    let path = item.url;
    let Page = pages[path]; // 填写paths

    paths[path] = item; // 填写menus

    let subMenus = [];
    menus.push({
      path,
      title: item.title,
      icon: item.icon,
      subMenus
    }); // 填写routes

    Page && routes.push({
      path,
      Page,
      id: item.id,
      tabs: item.tabs || []
    });
    return subMenus;
  };

  arr.forEach(fst => {
    let secMenus = fill(fst, menus);

    if (fst.secs) {
      fst.secs.forEach(sec => {
        let tabMenus = fill(sec, secMenus);
        if (sec.tabs) sec.tabs.forEach(tab => {
          fill(tab, tabMenus);
        });
      });
    }

    ;
  });
  return {
    paths,
    menus,
    routes
  };
} // 加工后台传回的TAB数据，生成新的TAB数据

function getTabs(arr, pages) {
  // arr 原始TAB数据 pages 前端path与页面的映射数据
  let paths = {}; // 以path为键的TAB数据

  let tabs = []; // 用来创建TAB的数据

  let routes = []; // 用来创建react路由的数据

  arr.forEach(item => {
    let path = item.url;
    let Page = pages[path]; // 填写paths

    paths[path] = item; // 填写tabs

    tabs.push({
      path,
      title: item.title
    }); // 填写routes

    Page && routes.push({
      path,
      Page,
      id: item.id
    });
  });
  return {
    paths,
    tabs,
    routes
  };
} // 获取菜单中第一个可以跳转的path

function getFirstPath(menus, pages) {
  // menus 加工后的菜单数据 pages 前端path与页面的映射数据
  return menus.reduce((pre, cur) => {
    if (!pre) {
      if (pages[cur.path]) {
        pre = cur.path;
      } else if (cur.subMenus.length) {
        pre = getFirstPath(cur.subMenus, pages);
      }
    }

    return pre;
  }, false);
} // 判断一个值是否为数字

const isNum = value => value === '' || value === null ? false : !isNaN(value); // 获取一个唯一的key

const getUniqKey = () => keyPrefix + keyCount++; // 给一个由对象组成的数据中的每个对象添加一个唯一的key属性，并返回原数组引用

const addUniqKeys = arr => {
  arr.forEach(item => !item.key && (item.key = getUniqKey()));
  return arr;
}; // num传入的数字，n需要的字符长度

const prefixInteger = (num, n) => {
  return (Array(n).join(0) + num).slice(-n);
}; //数组转对象

function toMap(arr, idField) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i][idField]] = arr[i];
  }

  return obj;
} //时间格式化

function formatDate(date, fmt) {
  if (date === undefined) {
    return '';
  }

  if (typeof date === 'number') {
    date = new Date(date);
  }

  var o = {
    "M+": date.getMonth() + 1,
    //月份
    "d+": date.getDate(),
    //日
    "h+": date.getHours(),
    //小时
    "m+": date.getMinutes(),
    //分
    "s+": date.getSeconds(),
    //秒
    "q+": Math.floor((date.getMonth() + 3) / 3),
    //季度
    "S": date.getMilliseconds() //毫秒

  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));

  for (var k in o) if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));

  return fmt;
}
/*  数据两位小数去零  */

function newToDecimal(x) {
  let n = parseFloat(x);

  if (isNaN(n)) {
    return false;
  }

  let f = Math.round(x * 100) / 100;
  let s = f.toString();
  let rs = s.indexOf('.');

  if (rs < 0) {
    rs = s.length;
    s += '.';
  }

  while (s.length <= rs + 1) {
    s += '0';
  }

  return s;
}

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ post; });

// UNUSED EXPORTS: ajax, get, abortAll, getCurXhr, getHeaders

// CONCATENATED MODULE: ./src/libs/config.js
// 后台业务接口前缀
const apiRoot = {
  local: 'http://10.200.100.4:8080/',
  // 局域网环境
  develop: 'http://10.200.100.4:8080/',
  // 联调环境
  production: 'https://channel-ue30.shuyun.com/' // 生产环境

}["production"];
// EXTERNAL MODULE: ./src/libs/util.js
var util = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 3 modules
var message = __webpack_require__(72);

// CONCATENATED MODULE: ./src/libs/request.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const XHR = XMLHttpRequest; // 因为mock会改写原生的XMLHttpRequest，在改写前先保存原生的XMLHttpRequest

const xhrs = {};
let count = 0;
let curXhr;
const ajax = option => {
  let defOption = {
    root: apiRoot,
    timeout: 100000,
    method: 'GET',
    url: '',
    param: {},
    responseType: 'text'
  };

  let {
    root,
    timeout,
    method,
    url,
    param,
    responseType
  } = _objectSpread(_objectSpread({}, defOption), option);

  url = /^http/i.test(url) ? url : root + url;
  return new Promise((resolve, reject) => {
    let xhr = curXhr = root == 'http://mock.com/' ? new XMLHttpRequest() : new XHR();
    let xhrID = count++;
    xhrs[xhrID] = xhr;
    xhr.open(method, url);
    xhr.timeout = timeout;
    let headers = getHeaders();
    Object.keys(headers).forEach(key => xhr.setRequestHeader(key, headers[key]));
     false && false;
    xhr.send(param.constructor.name == 'FormData' ? param : JSON.stringify(Object(util["c" /* removeUndefined */])(param)));
    xhr.responseType = responseType;

    xhr.onload = function () {
      let res = this.response;

      if (url === (/^http/i.test("login/getSaltPoss") ? "login/getSaltPoss" : root + "login/getSaltPoss")) {
        resolve(res);
      }

      try {
        res = JSON.parse(res);
      } catch (e) {}

      if (false) {}

      delete xhrs[xhrID];

      if (this.status >= 200 && this.status < 400) {
        if (responseType == 'blob') {
          switch (res.type) {
            case 'application/octet-stream':
              let name = this.getResponseHeader('content-disposition').split('filename=')[1];
              res.name = decodeURIComponent(name);
              resolve(res);
              break;

            case 'application/json':
              res.text().then(d => {
                res.json = JSON.parse(d);
                resolve(res);
              }).catch(reject);
              break;

            default:
              resolve(res);
          }
        } else {
          if (res.errorCode == null) {
            resolve(res);
          } else {
            /*如果是员工未登录*/
            if (res.errorCode == "60004") {
              window.parent.postMessage({
                type: 'logout'
              }, '*');
              return;
            }

            message["b" /* default */].error(res.message || "内部服务器错误");
          }
        }
      } else {
        reject(`${method} ${url} ${this.status} (${this.statusText})`);
      }
    };

    xhr.onerror = function () {
      console.group();
      console.timeEnd(xhrID + '号请求耗时');
      console.log(`请求url：${url}`);
      console.log(`请求method：${method}`);
      console.log(`请求param：`, param);
      console.error('网络异常');
      console.groupEnd();
      delete xhrs[xhrID];
      reject('网络异常');
    };

    xhr.onabort = function () {
      console.group();
      console.timeEnd(xhrID + '号请求耗时');
      console.log(`请求url：${url}`);
      console.log(`请求method：${method}`);
      console.log(`请求param：`, param);
      console.error('abort request');
      console.groupEnd();
      delete xhrs[xhrID];
      reject('abort request');
    };

    xhr.ontimeout = function () {
      console.group();
      console.timeEnd(xhrID + '号请求耗时');
      console.log(`请求url：${url}`);
      console.log(`请求method：${method}`);
      console.log(`请求param：`, param);
      console.error(`请求超时`);
      console.groupEnd();
      delete xhrs[xhrID];
      reject('请求超时');
    };
  });
};
const post = option => {
  return ajax(_objectSpread({
    method: 'POST'
  }, option));
};
const get = option => {
  let opt = typeof option == 'string' ? {
    url: option
  } : option;
  return ajax(_objectSpread({
    method: 'GET'
  }, opt));
};
const abortAll = () => {
  Object.keys(xhrs).forEach(id => xhrs[id].abort());
}; // 在发出一个请求后，立即调用该方法可以同步获取该请求的xhr对象，可以用来进行之后的取消该请求的操作

const getCurXhr = () => curXhr;
const getHeaders = () => {
  return {
    "content-type": "application/json; charset=utf-8" // "accept": "application/json, text/javascript, */*",

  };
};

/***/ })

}]);