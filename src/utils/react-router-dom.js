'use strict';
/**
 * react-router-dom 源码浅观
 * react-router-dom 包含了 react-router 的所有能力。
 * react-router-dom 本身只提供了和 dom 相关的四个组件，BrowserRouter、HashRouter、Link 和 NavLink。
 *
 */

/**
 * 工具函数 返回入参默认属性值或入参
 */
function _interopDefault(ex) {
    return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var reactRouter = require('react-router'); // react-router 库
var React = _interopDefault(require('react')); // react 库
var history = require('history'); // history 库
var PropTypes = _interopDefault(require('prop-types')); // 属性类型检测 库
var warning = _interopDefault(require('tiny-warning')); // 警告函数
var invariant = _interopDefault(require('tiny-invariant')); // 抛出异常

/**
 * 工具函数 拷贝入参对象到目标对象
 *
 */
function _extends() {
    _extends =
        Object.assign ||
        function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];

                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }

            return target;
        };

    return _extends.apply(this, arguments);
}

/**
 * 工具函数 原型链继承
 */
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}

/**
 * 工具函数 过滤对象属性
 */
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }

    return target;
}

/**
 * The public API for a <Router> that uses HTML5 history.
 * BrowserRouter 包装了<Router>
 */

var BrowserRouter =
    /*#__PURE__*/
    (function (_React$Component) {
        console.log(typeof _React$Component)
        _inheritsLoose(BrowserRouter, _React$Component); // BrowserRouter 继承 React.Component
        function BrowserRouter() {
            var _this;
            for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
            ) {
                args[_key] = arguments[_key];
            }
            _this =
                _React$Component.call.apply(
                    _React$Component,
                    [this].concat(args)
                ) || this;
            // createBrowserHistory 方法生成了 BrowserHistory 对象，作为传参传给了 Router 组件。
            _this.history = history.createBrowserHistory(_this.props);
            return _this;
        }

        var _proto = BrowserRouter.prototype;
        _proto.render = function render() {
            return React.createElement(reactRouter.Router, {
                history: this.history,
                children: this.props.children,
            });
        };
        return BrowserRouter;
    })(React.Component);

{
    BrowserRouter.propTypes = {
        basename: PropTypes.string,
        children: PropTypes.node,
        forceRefresh: PropTypes.bool,
        getUserConfirmation: PropTypes.func,
        keyLength: PropTypes.number,
    };

    BrowserRouter.prototype.componentDidMount = function () {
        warning(
            !this.props.history,
            '<BrowserRouter> ignores the history prop. To use a custom history, ' +
                'use `import { Router }` instead of `import { BrowserRouter as Router }`.'
        );
    };
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter =
    /*#__PURE__*/
    (function (_React$Component) {
        _inheritsLoose(HashRouter, _React$Component);

        function HashRouter() {
            var _this;

            for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
            ) {
                args[_key] = arguments[_key];
            }

            _this =
                _React$Component.call.apply(
                    _React$Component,
                    [this].concat(args)
                ) || this;
            _this.history = history.createHashHistory(_this.props);
            return _this;
        }

        var _proto = HashRouter.prototype;

        _proto.render = function render() {
            return React.createElement(reactRouter.Router, {
                history: this.history,
                children: this.props.children,
            });
        };

        return HashRouter;
    })(React.Component);

{
    HashRouter.propTypes = {
        basename: PropTypes.string,
        children: PropTypes.node,
        getUserConfirmation: PropTypes.func,
        hashType: PropTypes.oneOf(['hashbang', 'noslash', 'slash']),
    };

    HashRouter.prototype.componentDidMount = function () {
        warning(
            !this.props.history,
            '<HashRouter> ignores the history prop. To use a custom history, ' +
                'use `import { Router }` instead of `import { HashRouter as Router }`.'
        );
    };
}
/**
 * 工具函数 区分to入参类型
 */
var resolveToLocation = function resolveToLocation(to, currentLocation) {
    return typeof to === 'function' ? to(currentLocation) : to;
};

/**
 * 工具函数 区分to入参类型
 */
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
    return typeof to === 'string'
        ? history.createLocation(to, null, null, currentLocation)
        : to;
};

/**
 * 兼容 react15
 */
var forwardRefShim = function forwardRefShim(C) {
    return C;
};

var forwardRef = React.forwardRef; // 创建一个react组件

if (typeof forwardRef === 'undefined') {
    forwardRef = forwardRefShim; // forwardRef react 16 新增API
}

/**
 * 未知
 */
function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

/**
 * 创建一个有click事件的a标签
 * React.forwardRef((props, ref) => ())
 */
var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
    var innerRef = _ref.innerRef,
        navigate = _ref.navigate,
        _onClick = _ref.onClick,
        rest = _objectWithoutPropertiesLoose(_ref, [
            'innerRef',
            'navigate',
            'onClick',
        ]);

    var target = rest.target; // targen 属性生效

    var props = _extends({}, rest, {
        onClick: function onClick(event) {
            try {
                if (_onClick) _onClick(event);
            } catch (ex) {
                event.preventDefault();
                throw ex;
            }

            if (
                !event.defaultPrevented && // onClick prevented default onClick 事件中没有调用 preventedDefault
                event.button === 0 && // ignore everything but left clicks 点击的是左键
                (!target || target === '_self') && // let browser handle "target=_blank" etc. 没有 target 属性，或者是 target === "_self"
                !isModifiedEvent(event) // ignore clicks with modifier keys 点击的同时没有按下 alt shilf
            ) {
                event.preventDefault(); // 取消a标签默认动作 关闭href属性
                navigate(); //调用navigate 方法，这里是默认的跳转方法
            }
        },
    }); // React 15 compat

    if (forwardRefShim !== forwardRef) {
        props.ref = forwardedRef || innerRef;
    } else {
        props.ref = innerRef;
    }
    /* eslint-disable-next-line jsx-a11y/anchor-has-content */
    // Link 组件 增加了 click 事件的 a 标签
    return React.createElement('a', props);
});

{
    LinkAnchor.displayName = 'LinkAnchor';
}

/**
 * 包装LinkAnchor生成Link组件
 * ref = _temp === void 0 ? {} : _temp 即判断_temp是否为undefined, 是就回退为空对象。
 */

var Link = forwardRef(function (_ref2, forwardedRef) {
    var _ref2$component = _ref2.component,
        component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
        replace = _ref2.replace,
        to = _ref2.to,
        innerRef = _ref2.innerRef,
        rest = _objectWithoutPropertiesLoose(_ref2, [
            'component',
            'replace',
            'to',
            'innerRef',
        ]);

    return React.createElement(
        reactRouter.__RouterContext.Consumer, //reactRouter 提供的context
        null,
        function (context) {
            !context
                ? invariant(
                      false,
                      'You should not use <Link> outside a <Router>'
                  )
                : void 0;
            var history = context.history;// content中获得history对象
            var location = normalizeToLocation(
                resolveToLocation(to, context.location),
                context.location
            );// 规范 location
            var href = location ? history.createHref(location) : ''; //根据location生成href

            var props = _extends({}, rest, {
                href: href,
                navigate: function navigate() {
                    // navigate 中调用 histoy 接口的 replace 或者是 push 进行跳转
                    var location = resolveToLocation(to, context.location);
                    var method = replace ? history.replace : history.push;
                    method(location);
                },
            }); // React 15 compat

            if (forwardRefShim !== forwardRef) {
                props.ref = forwardedRef || innerRef;
            } else {
                props.innerRef = innerRef;
            }

            return React.createElement(component, props);
        }
    );
});

{
    var toType = PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.func,
    ]);
    var refType = PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.shape({
            current: PropTypes.any,
        }),
    ]);
    Link.displayName = 'Link';
    Link.propTypes = {
        innerRef: refType,
        onClick: PropTypes.func,
        replace: PropTypes.bool,
        target: PropTypes.string,
        to: toType.isRequired,
    };
}

var forwardRefShim$1 = function forwardRefShim(C) {
    return C;
};

var forwardRef$1 = React.forwardRef;

if (typeof forwardRef$1 === 'undefined') {
    forwardRef$1 = forwardRefShim$1;
}
/**
 * 工具函数 多个类名拼接成类名字符串
 */
function joinClassnames() {
    for (
        var _len = arguments.length, classnames = new Array(_len), _key = 0;
        _key < _len;
        _key++
    ) {
        classnames[_key] = arguments[_key];
    }

    return classnames
        .filter(function (i) {
            return i;
        })
        .join(' ');
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 * NavLink 就是 Link 的加强版，在 Link 的基础上封装了一些属性
 */

var NavLink = forwardRef$1(function (_ref, forwardedRef) {
    var _ref$ariaCurrent = _ref['aria-current'],
        ariaCurrent = _ref$ariaCurrent === void 0 ? 'page' : _ref$ariaCurrent,
        _ref$activeClassName = _ref.activeClassName,
        activeClassName =
            _ref$activeClassName === void 0 ? 'active' : _ref$activeClassName,
        activeStyle = _ref.activeStyle,
        classNameProp = _ref.className,
        exact = _ref.exact,
        isActiveProp = _ref.isActive,
        locationProp = _ref.location,
        sensitive = _ref.sensitive,
        strict = _ref.strict,
        styleProp = _ref.style,
        to = _ref.to,
        innerRef = _ref.innerRef,
        rest = _objectWithoutPropertiesLoose(_ref, [
            'aria-current',
            'activeClassName',
            'activeStyle',
            'className',
            'exact',
            'isActive',
            'location',
            'sensitive',
            'strict',
            'style',
            'to',
            'innerRef',
        ]);

    return React.createElement(
        reactRouter.__RouterContext.Consumer,
        null,
        function (context) {
            !context
                ? invariant(
                      false,
                      'You should not use <NavLink> outside a <Router>'
                  )
                : void 0;
            var currentLocation = locationProp || context.location;
            var toLocation = normalizeToLocation(
                resolveToLocation(to, currentLocation),
                currentLocation
            );
            var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

            var escapedPath =
                path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
            var match = escapedPath
                ? reactRouter.matchPath(currentLocation.pathname, {
                      path: escapedPath,
                      exact: exact,
                      sensitive: sensitive,
                      strict: strict,
                  })
                : null;
            var isActive = !!(isActiveProp
                ? isActiveProp(match, currentLocation)
                : match);// 链接是否处在活跃状态
            var className = isActive
                ? joinClassnames(classNameProp, activeClassName)
                : classNameProp;
            var style = isActive
                ? _extends({}, styleProp, {}, activeStyle)
                : styleProp;

            var props = _extends(
                {
                    'aria-current': (isActive && ariaCurrent) || null,
                    className: className,
                    style: style,
                    to: toLocation,
                },
                rest
            ); // React 15 compat

            if (forwardRefShim$1 !== forwardRef$1) {
                props.ref = forwardedRef || innerRef;
            } else {
                props.innerRef = innerRef;
            }

            return React.createElement(Link, props);
        }
    );
});

{
    NavLink.displayName = 'NavLink';
    var ariaCurrentType = PropTypes.oneOf([
        'page',
        'step',
        'location',
        'date',
        'time',
        'true',
    ]);
    NavLink.propTypes = _extends({}, Link.propTypes, {
        'aria-current': ariaCurrentType,
        activeClassName: PropTypes.string,
        activeStyle: PropTypes.object,
        className: PropTypes.string,
        exact: PropTypes.bool,
        isActive: PropTypes.func,
        location: PropTypes.object,
        sensitive: PropTypes.bool,
        strict: PropTypes.bool,
        style: PropTypes.object,
    });
}
/**
 * exports 对象 定义新的属性
 * react-router-dom 完全继承 react-router 的能力
 *
 */
Object.defineProperty(exports, 'MemoryRouter', {
    enumerable: true,
    get: function () {
        return reactRouter.MemoryRouter;
    },
});
Object.defineProperty(exports, 'Prompt', {
    enumerable: true,
    get: function () {
        return reactRouter.Prompt;
    },
});
Object.defineProperty(exports, 'Redirect', {
    enumerable: true,
    get: function () {
        return reactRouter.Redirect;
    },
});
Object.defineProperty(exports, 'Route', {
    enumerable: true,
    get: function () {
        return reactRouter.Route;
    },
});
Object.defineProperty(exports, 'Router', {
    enumerable: true,
    get: function () {
        return reactRouter.Router;
    },
});
Object.defineProperty(exports, 'StaticRouter', {
    enumerable: true,
    get: function () {
        return reactRouter.StaticRouter;
    },
});
Object.defineProperty(exports, 'Switch', {
    enumerable: true,
    get: function () {
        return reactRouter.Switch;
    },
});
Object.defineProperty(exports, 'generatePath', {
    enumerable: true,
    get: function () {
        return reactRouter.generatePath;
    },
});
Object.defineProperty(exports, 'matchPath', {
    enumerable: true,
    get: function () {
        return reactRouter.matchPath;
    },
});
Object.defineProperty(exports, 'useHistory', {
    enumerable: true,
    get: function () {
        return reactRouter.useHistory;
    },
});
Object.defineProperty(exports, 'useLocation', {
    enumerable: true,
    get: function () {
        return reactRouter.useLocation;
    },
});
Object.defineProperty(exports, 'useParams', {
    enumerable: true,
    get: function () {
        return reactRouter.useParams;
    },
});
Object.defineProperty(exports, 'useRouteMatch', {
    enumerable: true,
    get: function () {
        return reactRouter.useRouteMatch;
    },
});
Object.defineProperty(exports, 'withRouter', {
    enumerable: true,
    get: function () {
        return reactRouter.withRouter;
    },
});
/**
 * react-router-dom 新增四个API
 */
exports.BrowserRouter = BrowserRouter;
exports.HashRouter = HashRouter;
exports.Link = Link;
exports.NavLink = NavLink;
//# sourceMappingURL=react-router-dom.js.map
