var sf = Object.defineProperty;
var of = (e, t, n) => t in e ? sf(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n;
var uo = (e, t, n) => of(e, typeof t != "symbol" ? t + "" : t, n);
(function() {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
	new MutationObserver(i => {
		for (const l of i)
			if (l.type === "childList")
				for (const s of l.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function n(i) {
		const l = {};
		return i.integrity && (l.integrity = i.integrity), i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? l.credentials = "include" : i.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l
	}

	function r(i) {
		if (i.ep) return;
		i.ep = !0;
		const l = n(i);
		fetch(i.href, l)
	}
})();

function Ma(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var $a = {
		exports: {}
	},
	Li = {},
	Da = {
		exports: {}
	},
	_ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr = Symbol.for("react.element"),
	af = Symbol.for("react.portal"),
	uf = Symbol.for("react.fragment"),
	cf = Symbol.for("react.strict_mode"),
	ff = Symbol.for("react.profiler"),
	df = Symbol.for("react.provider"),
	pf = Symbol.for("react.context"),
	hf = Symbol.for("react.forward_ref"),
	gf = Symbol.for("react.suspense"),
	mf = Symbol.for("react.memo"),
	vf = Symbol.for("react.lazy"),
	co = Symbol.iterator;

function yf(e) {
	return e === null || typeof e != "object" ? null : (e = co && e[co] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Aa = {
		isMounted: function() {
			return !1
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	},
	Ua = Object.assign,
	Va = {};

function jn(e, t, n) {
	this.props = e, this.context = t, this.refs = Va, this.updater = n || Aa
}
jn.prototype.isReactComponent = {};
jn.prototype.setState = function(e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
	this.updater.enqueueSetState(this, e, t, "setState")
};
jn.prototype.forceUpdate = function(e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Ba() {}
Ba.prototype = jn.prototype;

function gs(e, t, n) {
	this.props = e, this.context = t, this.refs = Va, this.updater = n || Aa
}
var ms = gs.prototype = new Ba;
ms.constructor = gs;
Ua(ms, jn.prototype);
ms.isPureReactComponent = !0;
var fo = Array.isArray,
	Ha = Object.prototype.hasOwnProperty,
	vs = {
		current: null
	},
	Ka = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};

function Wa(e, t, n) {
	var r, i = {},
		l = null,
		s = null;
	if (t != null)
		for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (l = "" + t.key), t) Ha.call(t, r) && !Ka.hasOwnProperty(r) && (i[r] = t[r]);
	var o = arguments.length - 2;
	if (o === 1) i.children = n;
	else if (1 < o) {
		for (var a = Array(o), u = 0; u < o; u++) a[u] = arguments[u + 2];
		i.children = a
	}
	if (e && e.defaultProps)
		for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
	return {
		$$typeof: gr,
		type: e,
		key: l,
		ref: s,
		props: i,
		_owner: vs.current
	}
}

function xf(e, t) {
	return {
		$$typeof: gr,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner
	}
}

function ys(e) {
	return typeof e == "object" && e !== null && e.$$typeof === gr
}

function wf(e) {
	var t = {
		"=": "=0",
		":": "=2"
	};
	return "$" + e.replace(/[=:]/g, function(n) {
		return t[n]
	})
}
var po = /\/+/g;

function Wi(e, t) {
	return typeof e == "object" && e !== null && e.key != null ? wf("" + e.key) : t.toString(36)
}

function Ur(e, t, n, r, i) {
	var l = typeof e;
	(l === "undefined" || l === "boolean") && (e = null);
	var s = !1;
	if (e === null) s = !0;
	else switch (l) {
		case "string":
		case "number":
			s = !0;
			break;
		case "object":
			switch (e.$$typeof) {
				case gr:
				case af:
					s = !0
			}
	}
	if (s) return s = e, i = i(s), e = r === "" ? "." + Wi(s, 0) : r, fo(i) ? (n = "", e != null && (n = e.replace(po, "$&/") + "/"), Ur(i, t, n, "", function(u) {
		return u
	})) : i != null && (ys(i) && (i = xf(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(po, "$&/") + "/") + e)), t.push(i)), 1;
	if (s = 0, r = r === "" ? "." : r + ":", fo(e))
		for (var o = 0; o < e.length; o++) {
			l = e[o];
			var a = r + Wi(l, o);
			s += Ur(l, t, n, a, i)
		} else if (a = yf(e), typeof a == "function")
			for (e = a.call(e), o = 0; !(l = e.next()).done;) l = l.value, a = r + Wi(l, o++), s += Ur(l, t, n, a, i);
		else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
	return s
}

function kr(e, t, n) {
	if (e == null) return e;
	var r = [],
		i = 0;
	return Ur(e, r, "", "", function(l) {
		return t.call(n, l, i++)
	}), r
}

function Sf(e) {
	if (e._status === -1) {
		var t = e._result;
		t = t(), t.then(function(n) {
			(e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
		}, function(n) {
			(e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
		}), e._status === -1 && (e._status = 0, e._result = t)
	}
	if (e._status === 1) return e._result.default;
	throw e._result
}
var fe = {
		current: null
	},
	Vr = {
		transition: null
	},
	kf = {
		ReactCurrentDispatcher: fe,
		ReactCurrentBatchConfig: Vr,
		ReactCurrentOwner: vs
	};

function Qa() {
	throw Error("act(...) is not supported in production builds of React.")
}
_.Children = {
	map: kr,
	forEach: function(e, t, n) {
		kr(e, function() {
			t.apply(this, arguments)
		}, n)
	},
	count: function(e) {
		var t = 0;
		return kr(e, function() {
			t++
		}), t
	},
	toArray: function(e) {
		return kr(e, function(t) {
			return t
		}) || []
	},
	only: function(e) {
		if (!ys(e)) throw Error("React.Children.only expected to receive a single React element child.");
		return e
	}
};
_.Component = jn;
_.Fragment = uf;
_.Profiler = ff;
_.PureComponent = gs;
_.StrictMode = cf;
_.Suspense = gf;
_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kf;
_.act = Qa;
_.cloneElement = function(e, t, n) {
	if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
	var r = Ua({}, e.props),
		i = e.key,
		l = e.ref,
		s = e._owner;
	if (t != null) {
		if (t.ref !== void 0 && (l = t.ref, s = vs.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
		for (a in t) Ha.call(t, a) && !Ka.hasOwnProperty(a) && (r[a] = t[a] === void 0 && o !== void 0 ? o[a] : t[a])
	}
	var a = arguments.length - 2;
	if (a === 1) r.children = n;
	else if (1 < a) {
		o = Array(a);
		for (var u = 0; u < a; u++) o[u] = arguments[u + 2];
		r.children = o
	}
	return {
		$$typeof: gr,
		type: e.type,
		key: i,
		ref: l,
		props: r,
		_owner: s
	}
};
_.createContext = function(e) {
	return e = {
		$$typeof: pf,
		_currentValue: e,
		_currentValue2: e,
		_threadCount: 0,
		Provider: null,
		Consumer: null,
		_defaultValue: null,
		_globalName: null
	}, e.Provider = {
		$$typeof: df,
		_context: e
	}, e.Consumer = e
};
_.createElement = Wa;
_.createFactory = function(e) {
	var t = Wa.bind(null, e);
	return t.type = e, t
};
_.createRef = function() {
	return {
		current: null
	}
};
_.forwardRef = function(e) {
	return {
		$$typeof: hf,
		render: e
	}
};
_.isValidElement = ys;
_.lazy = function(e) {
	return {
		$$typeof: vf,
		_payload: {
			_status: -1,
			_result: e
		},
		_init: Sf
	}
};
_.memo = function(e, t) {
	return {
		$$typeof: mf,
		type: e,
		compare: t === void 0 ? null : t
	}
};
_.startTransition = function(e) {
	var t = Vr.transition;
	Vr.transition = {};
	try {
		e()
	} finally {
		Vr.transition = t
	}
};
_.unstable_act = Qa;
_.useCallback = function(e, t) {
	return fe.current.useCallback(e, t)
};
_.useContext = function(e) {
	return fe.current.useContext(e)
};
_.useDebugValue = function() {};
_.useDeferredValue = function(e) {
	return fe.current.useDeferredValue(e)
};
_.useEffect = function(e, t) {
	return fe.current.useEffect(e, t)
};
_.useId = function() {
	return fe.current.useId()
};
_.useImperativeHandle = function(e, t, n) {
	return fe.current.useImperativeHandle(e, t, n)
};
_.useInsertionEffect = function(e, t) {
	return fe.current.useInsertionEffect(e, t)
};
_.useLayoutEffect = function(e, t) {
	return fe.current.useLayoutEffect(e, t)
};
_.useMemo = function(e, t) {
	return fe.current.useMemo(e, t)
};
_.useReducer = function(e, t, n) {
	return fe.current.useReducer(e, t, n)
};
_.useRef = function(e) {
	return fe.current.useRef(e)
};
_.useState = function(e) {
	return fe.current.useState(e)
};
_.useSyncExternalStore = function(e, t, n) {
	return fe.current.useSyncExternalStore(e, t, n)
};
_.useTransition = function() {
	return fe.current.useTransition()
};
_.version = "18.3.1";
Da.exports = _;
var T = Da.exports;
const et = Ma(T);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nf = T,
	Cf = Symbol.for("react.element"),
	jf = Symbol.for("react.fragment"),
	Ef = Object.prototype.hasOwnProperty,
	Lf = Nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Pf = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};

function Ya(e, t, n) {
	var r, i = {},
		l = null,
		s = null;
	n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (s = t.ref);
	for (r in t) Ef.call(t, r) && !Pf.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps)
		for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
	return {
		$$typeof: Cf,
		type: e,
		key: l,
		ref: s,
		props: i,
		_owner: Lf.current
	}
}
Li.Fragment = jf;
Li.jsx = Ya;
Li.jsxs = Ya;
$a.exports = Li;
var c = $a.exports,
	xl = {},
	Ja = {
		exports: {}
	},
	Ne = {},
	Ga = {
		exports: {}
	},
	Xa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
	function t(j, O) {
		var F = j.length;
		j.push(O);
		e: for (; 0 < F;) {
			var B = F - 1 >>> 1,
				b = j[B];
			if (0 < i(b, O)) j[B] = O, j[F] = b, F = B;
			else break e
		}
	}

	function n(j) {
		return j.length === 0 ? null : j[0]
	}

	function r(j) {
		if (j.length === 0) return null;
		var O = j[0],
			F = j.pop();
		if (F !== O) {
			j[0] = F;
			e: for (var B = 0, b = j.length, wr = b >>> 1; B < wr;) {
				var zt = 2 * (B + 1) - 1,
					Ki = j[zt],
					_t = zt + 1,
					Sr = j[_t];
				if (0 > i(Ki, F)) _t < b && 0 > i(Sr, Ki) ? (j[B] = Sr, j[_t] = F, B = _t) : (j[B] = Ki, j[zt] = F, B = zt);
				else if (_t < b && 0 > i(Sr, F)) j[B] = Sr, j[_t] = F, B = _t;
				else break e
			}
		}
		return O
	}

	function i(j, O) {
		var F = j.sortIndex - O.sortIndex;
		return F !== 0 ? F : j.id - O.id
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var l = performance;
		e.unstable_now = function() {
			return l.now()
		}
	} else {
		var s = Date,
			o = s.now();
		e.unstable_now = function() {
			return s.now() - o
		}
	}
	var a = [],
		u = [],
		p = 1,
		g = null,
		f = 3,
		v = !1,
		x = !1,
		w = !1,
		P = typeof setTimeout == "function" ? setTimeout : null,
		h = typeof clearTimeout == "function" ? clearTimeout : null,
		d = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

	function m(j) {
		for (var O = n(u); O !== null;) {
			if (O.callback === null) r(u);
			else if (O.startTime <= j) r(u), O.sortIndex = O.expirationTime, t(a, O);
			else break;
			O = n(u)
		}
	}

	function y(j) {
		if (w = !1, m(j), !x)
			if (n(a) !== null) x = !0, at(k);
			else {
				var O = n(u);
				O !== null && Gt(y, O.startTime - j)
			}
	}

	function k(j, O) {
		x = !1, w && (w = !1, h(L), L = -1), v = !0;
		var F = f;
		try {
			for (m(O), g = n(a); g !== null && (!(g.expirationTime > O) || j && !M());) {
				var B = g.callback;
				if (typeof B == "function") {
					g.callback = null, f = g.priorityLevel;
					var b = B(g.expirationTime <= O);
					O = e.unstable_now(), typeof b == "function" ? g.callback = b : g === n(a) && r(a), m(O)
				} else r(a);
				g = n(a)
			}
			if (g !== null) var wr = !0;
			else {
				var zt = n(u);
				zt !== null && Gt(y, zt.startTime - O), wr = !1
			}
			return wr
		} finally {
			g = null, f = F, v = !1
		}
	}
	var C = !1,
		N = null,
		L = -1,
		A = 5,
		z = -1;

	function M() {
		return !(e.unstable_now() - z < A)
	}

	function ye() {
		if (N !== null) {
			var j = e.unstable_now();
			z = j;
			var O = !0;
			try {
				O = N(!0, j)
			} finally {
				O ? Ve() : (C = !1, N = null)
			}
		} else C = !1
	}
	var Ve;
	if (typeof d == "function") Ve = function() {
		d(ye)
	};
	else if (typeof MessageChannel < "u") {
		var _e = new MessageChannel,
			Be = _e.port2;
		_e.port1.onmessage = ye, Ve = function() {
			Be.postMessage(null)
		}
	} else Ve = function() {
		P(ye, 0)
	};

	function at(j) {
		N = j, C || (C = !0, Ve())
	}

	function Gt(j, O) {
		L = P(function() {
			j(e.unstable_now())
		}, O)
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
		j.callback = null
	}, e.unstable_continueExecution = function() {
		x || v || (x = !0, at(k))
	}, e.unstable_forceFrameRate = function(j) {
		0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < j ? Math.floor(1e3 / j) : 5
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f
	}, e.unstable_getFirstCallbackNode = function() {
		return n(a)
	}, e.unstable_next = function(j) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var O = 3;
				break;
			default:
				O = f
		}
		var F = f;
		f = O;
		try {
			return j()
		} finally {
			f = F
		}
	}, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(j, O) {
		switch (j) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				break;
			default:
				j = 3
		}
		var F = f;
		f = j;
		try {
			return O()
		} finally {
			f = F
		}
	}, e.unstable_scheduleCallback = function(j, O, F) {
		var B = e.unstable_now();
		switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? B + F : B) : F = B, j) {
			case 1:
				var b = -1;
				break;
			case 2:
				b = 250;
				break;
			case 5:
				b = 1073741823;
				break;
			case 4:
				b = 1e4;
				break;
			default:
				b = 5e3
		}
		return b = F + b, j = {
			id: p++,
			callback: O,
			priorityLevel: j,
			startTime: F,
			expirationTime: b,
			sortIndex: -1
		}, F > B ? (j.sortIndex = F, t(u, j), n(a) === null && j === n(u) && (w ? (h(L), L = -1) : w = !0, Gt(y, F - B))) : (j.sortIndex = b, t(a, j), x || v || (x = !0, at(k))), j
	}, e.unstable_shouldYield = M, e.unstable_wrapCallback = function(j) {
		var O = f;
		return function() {
			var F = f;
			f = O;
			try {
				return j.apply(this, arguments)
			} finally {
				f = F
			}
		}
	}
})(Xa);
Ga.exports = Xa;
var Of = Ga.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ff = T,
	ke = Of;

function S(e) {
	for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
	return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Za = new Set,
	Zn = {};

function Yt(e, t) {
	yn(e, t), yn(e + "Capture", t)
}

function yn(e, t) {
	for (Zn[e] = t, e = 0; e < t.length; e++) Za.add(t[e])
}
var rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
	wl = Object.prototype.hasOwnProperty,
	Rf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	ho = {},
	go = {};

function zf(e) {
	return wl.call(go, e) ? !0 : wl.call(ho, e) ? !1 : Rf.test(e) ? go[e] = !0 : (ho[e] = !0, !1)
}

function _f(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
		default:
			return !1
	}
}

function Tf(e, t, n, r) {
	if (t === null || typeof t > "u" || _f(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null) switch (n.type) {
		case 3:
			return !t;
		case 4:
			return t === !1;
		case 5:
			return isNaN(t);
		case 6:
			return isNaN(t) || 1 > t
	}
	return !1
}

function de(e, t, n, r, i, l, s) {
	this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = s
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
	re[e] = new de(e, 0, !1, e, null, !1, !1)
});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"]
].forEach(function(e) {
	var t = e[0];
	re[t] = new de(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
	re[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
	re[e] = new de(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
	re[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
	re[e] = new de(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
	re[e] = new de(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
	re[e] = new de(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
	re[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var xs = /[\-:]([a-z])/g;

function ws(e) {
	return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
	var t = e.replace(xs, ws);
	re[t] = new de(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
	var t = e.replace(xs, ws);
	re[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
	var t = e.replace(xs, ws);
	re[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
	re[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
re.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
	re[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Ss(e, t, n, r) {
	var i = re.hasOwnProperty(t) ? re[t] : null;
	(i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Tf(t, n, i, r) && (n = null), r || i === null ? zf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var ot = Ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Nr = Symbol.for("react.element"),
	qt = Symbol.for("react.portal"),
	en = Symbol.for("react.fragment"),
	ks = Symbol.for("react.strict_mode"),
	Sl = Symbol.for("react.profiler"),
	ba = Symbol.for("react.provider"),
	qa = Symbol.for("react.context"),
	Ns = Symbol.for("react.forward_ref"),
	kl = Symbol.for("react.suspense"),
	Nl = Symbol.for("react.suspense_list"),
	Cs = Symbol.for("react.memo"),
	ct = Symbol.for("react.lazy"),
	eu = Symbol.for("react.offscreen"),
	mo = Symbol.iterator;

function Pn(e) {
	return e === null || typeof e != "object" ? null : (e = mo && e[mo] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Q = Object.assign,
	Qi;

function $n(e) {
	if (Qi === void 0) try {
		throw Error()
	} catch (n) {
		var t = n.stack.trim().match(/\n( *(at )?)/);
		Qi = t && t[1] || ""
	}
	return `
` + Qi + e
}
var Yi = !1;

function Ji(e, t) {
	if (!e || Yi) return "";
	Yi = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (t = function() {
					throw Error()
				}, Object.defineProperty(t.prototype, "props", {
					set: function() {
						throw Error()
					}
				}), typeof Reflect == "object" && Reflect.construct) {
				try {
					Reflect.construct(t, [])
				} catch (u) {
					var r = u
				}
				Reflect.construct(e, [], t)
			} else {
				try {
					t.call()
				} catch (u) {
					r = u
				}
				e.call(t.prototype)
			}
		else {
			try {
				throw Error()
			} catch (u) {
				r = u
			}
			e()
		}
	} catch (u) {
		if (u && r && typeof u.stack == "string") {
			for (var i = u.stack.split(`
`), l = r.stack.split(`
`), s = i.length - 1, o = l.length - 1; 1 <= s && 0 <= o && i[s] !== l[o];) o--;
			for (; 1 <= s && 0 <= o; s--, o--)
				if (i[s] !== l[o]) {
					if (s !== 1 || o !== 1)
						do
							if (s--, o--, 0 > o || i[s] !== l[o]) {
								var a = `
` + i[s].replace(" at new ", " at ");
								return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
							} while (1 <= s && 0 <= o);
					break
				}
		}
	} finally {
		Yi = !1, Error.prepareStackTrace = n
	}
	return (e = e ? e.displayName || e.name : "") ? $n(e) : ""
}

function If(e) {
	switch (e.tag) {
		case 5:
			return $n(e.type);
		case 16:
			return $n("Lazy");
		case 13:
			return $n("Suspense");
		case 19:
			return $n("SuspenseList");
		case 0:
		case 2:
		case 15:
			return e = Ji(e.type, !1), e;
		case 11:
			return e = Ji(e.type.render, !1), e;
		case 1:
			return e = Ji(e.type, !0), e;
		default:
			return ""
	}
}

function Cl(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case en:
			return "Fragment";
		case qt:
			return "Portal";
		case Sl:
			return "Profiler";
		case ks:
			return "StrictMode";
		case kl:
			return "Suspense";
		case Nl:
			return "SuspenseList"
	}
	if (typeof e == "object") switch (e.$$typeof) {
		case qa:
			return (e.displayName || "Context") + ".Consumer";
		case ba:
			return (e._context.displayName || "Context") + ".Provider";
		case Ns:
			var t = e.render;
			return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
		case Cs:
			return t = e.displayName || null, t !== null ? t : Cl(e.type) || "Memo";
		case ct:
			t = e._payload, e = e._init;
			try {
				return Cl(e(t))
			} catch {}
	}
	return null
}

function Mf(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return Cl(t);
		case 8:
			return t === ks ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t
	}
	return null
}

function jt(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return ""
	}
}

function tu(e) {
	var t = e.type;
	return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function $f(e) {
	var t = tu(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
		var i = n.get,
			l = n.set;
		return Object.defineProperty(e, t, {
			configurable: !0,
			get: function() {
				return i.call(this)
			},
			set: function(s) {
				r = "" + s, l.call(this, s)
			}
		}), Object.defineProperty(e, t, {
			enumerable: n.enumerable
		}), {
			getValue: function() {
				return r
			},
			setValue: function(s) {
				r = "" + s
			},
			stopTracking: function() {
				e._valueTracker = null, delete e[t]
			}
		}
	}
}

function Cr(e) {
	e._valueTracker || (e._valueTracker = $f(e))
}

function nu(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return e && (r = tu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function br(e) {
	if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
	try {
		return e.activeElement || e.body
	} catch {
		return e.body
	}
}

function jl(e, t) {
	var n = t.checked;
	return Q({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked
	})
}

function vo(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	n = jt(t.value != null ? t.value : n), e._wrapperState = {
		initialChecked: r,
		initialValue: n,
		controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
	}
}

function ru(e, t) {
	t = t.checked, t != null && Ss(e, "checked", t, !1)
}

function El(e, t) {
	ru(e, t);
	var n = jt(t.value),
		r = t.type;
	if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return
	}
	t.hasOwnProperty("value") ? Ll(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ll(e, t.type, jt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function yo(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type;
		if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
		t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
	}
	n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Ll(e, t, n) {
	(t !== "number" || br(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Dn = Array.isArray;

function dn(e, t, n, r) {
	if (e = e.options, t) {
		t = {};
		for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
		for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
	} else {
		for (n = "" + jt(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				e[i].selected = !0, r && (e[i].defaultSelected = !0);
				return
			}
			t !== null || e[i].disabled || (t = e[i])
		}
		t !== null && (t.selected = !0)
	}
}

function Pl(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
	return Q({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue
	})
}

function xo(e, t) {
	var n = t.value;
	if (n == null) {
		if (n = t.children, t = t.defaultValue, n != null) {
			if (t != null) throw Error(S(92));
			if (Dn(n)) {
				if (1 < n.length) throw Error(S(93));
				n = n[0]
			}
			t = n
		}
		t == null && (t = ""), n = t
	}
	e._wrapperState = {
		initialValue: jt(n)
	}
}

function iu(e, t) {
	var n = jt(t.value),
		r = jt(t.defaultValue);
	n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function wo(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function lu(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml"
	}
}

function Ol(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml" ? lu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var jr, su = function(e) {
	return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
		MSApp.execUnsafeLocalFunction(function() {
			return e(t, n, r, i)
		})
	} : e
}(function(e, t) {
	if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
	else {
		for (jr = jr || document.createElement("div"), jr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = jr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
		for (; t.firstChild;) e.appendChild(t.firstChild)
	}
});

function bn(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return
		}
	}
	e.textContent = t
}
var Vn = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	},
	Df = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vn).forEach(function(e) {
	Df.forEach(function(t) {
		t = t + e.charAt(0).toUpperCase() + e.substring(1), Vn[t] = Vn[e]
	})
});

function ou(e, t, n) {
	return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Vn.hasOwnProperty(e) && Vn[e] ? ("" + t).trim() : t + "px"
}

function au(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				i = ou(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
		}
}
var Af = Q({
	menuitem: !0
}, {
	area: !0,
	base: !0,
	br: !0,
	col: !0,
	embed: !0,
	hr: !0,
	img: !0,
	input: !0,
	keygen: !0,
	link: !0,
	meta: !0,
	param: !0,
	source: !0,
	track: !0,
	wbr: !0
});

function Fl(e, t) {
	if (t) {
		if (Af[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(S(60));
			if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61))
		}
		if (t.style != null && typeof t.style != "object") throw Error(S(62))
	}
}

function Rl(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1;
		default:
			return !0
	}
}
var zl = null;

function js(e) {
	return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var _l = null,
	pn = null,
	hn = null;

function So(e) {
	if (e = yr(e)) {
		if (typeof _l != "function") throw Error(S(280));
		var t = e.stateNode;
		t && (t = zi(t), _l(e.stateNode, e.type, t))
	}
}

function uu(e) {
	pn ? hn ? hn.push(e) : hn = [e] : pn = e
}

function cu() {
	if (pn) {
		var e = pn,
			t = hn;
		if (hn = pn = null, So(e), t)
			for (e = 0; e < t.length; e++) So(t[e])
	}
}

function fu(e, t) {
	return e(t)
}

function du() {}
var Gi = !1;

function pu(e, t, n) {
	if (Gi) return e(t, n);
	Gi = !0;
	try {
		return fu(e, t, n)
	} finally {
		Gi = !1, (pn !== null || hn !== null) && (du(), cu())
	}
}

function qn(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = zi(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			(r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
			break e;
		default:
			e = !1
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(S(231, t, typeof n));
	return n
}
var Tl = !1;
if (rt) try {
	var On = {};
	Object.defineProperty(On, "passive", {
		get: function() {
			Tl = !0
		}
	}), window.addEventListener("test", On, On), window.removeEventListener("test", On, On)
} catch {
	Tl = !1
}

function Uf(e, t, n, r, i, l, s, o, a) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u)
	} catch (p) {
		this.onError(p)
	}
}
var Bn = !1,
	qr = null,
	ei = !1,
	Il = null,
	Vf = {
		onError: function(e) {
			Bn = !0, qr = e
		}
	};

function Bf(e, t, n, r, i, l, s, o, a) {
	Bn = !1, qr = null, Uf.apply(Vf, arguments)
}

function Hf(e, t, n, r, i, l, s, o, a) {
	if (Bf.apply(this, arguments), Bn) {
		if (Bn) {
			var u = qr;
			Bn = !1, qr = null
		} else throw Error(S(198));
		ei || (ei = !0, Il = u)
	}
}

function Jt(e) {
	var t = e,
		n = e;
	if (e.alternate)
		for (; t.return;) t = t.return;
	else {
		e = t;
		do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
	}
	return t.tag === 3 ? n : null
}

function hu(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
	}
	return null
}

function ko(e) {
	if (Jt(e) !== e) throw Error(S(188))
}

function Kf(e) {
	var t = e.alternate;
	if (!t) {
		if (t = Jt(e), t === null) throw Error(S(188));
		return t !== e ? null : e
	}
	for (var n = e, r = t;;) {
		var i = n.return;
		if (i === null) break;
		var l = i.alternate;
		if (l === null) {
			if (r = i.return, r !== null) {
				n = r;
				continue
			}
			break
		}
		if (i.child === l.child) {
			for (l = i.child; l;) {
				if (l === n) return ko(i), e;
				if (l === r) return ko(i), t;
				l = l.sibling
			}
			throw Error(S(188))
		}
		if (n.return !== r.return) n = i, r = l;
		else {
			for (var s = !1, o = i.child; o;) {
				if (o === n) {
					s = !0, n = i, r = l;
					break
				}
				if (o === r) {
					s = !0, r = i, n = l;
					break
				}
				o = o.sibling
			}
			if (!s) {
				for (o = l.child; o;) {
					if (o === n) {
						s = !0, n = l, r = i;
						break
					}
					if (o === r) {
						s = !0, r = l, n = i;
						break
					}
					o = o.sibling
				}
				if (!s) throw Error(S(189))
			}
		}
		if (n.alternate !== r) throw Error(S(190))
	}
	if (n.tag !== 3) throw Error(S(188));
	return n.stateNode.current === n ? e : t
}

function gu(e) {
	return e = Kf(e), e !== null ? mu(e) : null
}

function mu(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null;) {
		var t = mu(e);
		if (t !== null) return t;
		e = e.sibling
	}
	return null
}
var vu = ke.unstable_scheduleCallback,
	No = ke.unstable_cancelCallback,
	Wf = ke.unstable_shouldYield,
	Qf = ke.unstable_requestPaint,
	J = ke.unstable_now,
	Yf = ke.unstable_getCurrentPriorityLevel,
	Es = ke.unstable_ImmediatePriority,
	yu = ke.unstable_UserBlockingPriority,
	ti = ke.unstable_NormalPriority,
	Jf = ke.unstable_LowPriority,
	xu = ke.unstable_IdlePriority,
	Pi = null,
	Ye = null;

function Gf(e) {
	if (Ye && typeof Ye.onCommitFiberRoot == "function") try {
		Ye.onCommitFiberRoot(Pi, e, void 0, (e.current.flags & 128) === 128)
	} catch {}
}
var De = Math.clz32 ? Math.clz32 : bf,
	Xf = Math.log,
	Zf = Math.LN2;

function bf(e) {
	return e >>>= 0, e === 0 ? 32 : 31 - (Xf(e) / Zf | 0) | 0
}
var Er = 64,
	Lr = 4194304;

function An(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e
	}
}

function ni(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = e.suspendedLanes,
		l = e.pingedLanes,
		s = n & 268435455;
	if (s !== 0) {
		var o = s & ~i;
		o !== 0 ? r = An(o) : (l &= s, l !== 0 && (r = An(l)))
	} else s = n & ~i, s !== 0 ? r = An(s) : l !== 0 && (r = An(l));
	if (r === 0) return 0;
	if (t !== 0 && t !== r && !(t & i) && (i = r & -r, l = t & -t, i >= l || i === 16 && (l & 4194240) !== 0)) return t;
	if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
		for (e = e.entanglements, t &= r; 0 < t;) n = 31 - De(t), i = 1 << n, r |= e[n], t &= ~i;
	return r
}

function qf(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1
	}
}

function ed(e, t) {
	for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
		var s = 31 - De(l),
			o = 1 << s,
			a = i[s];
		a === -1 ? (!(o & n) || o & r) && (i[s] = qf(o, t)) : a <= t && (e.expiredLanes |= o), l &= ~o
	}
}

function Ml(e) {
	return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function wu() {
	var e = Er;
	return Er <<= 1, !(Er & 4194240) && (Er = 64), e
}

function Xi(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t
}

function mr(e, t, n) {
	e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - De(t), e[t] = n
}

function td(e, t) {
	var n = e.pendingLanes & ~t;
	e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n;) {
		var i = 31 - De(n),
			l = 1 << i;
		t[i] = 0, r[i] = -1, e[i] = -1, n &= ~l
	}
}

function Ls(e, t) {
	var n = e.entangledLanes |= t;
	for (e = e.entanglements; n;) {
		var r = 31 - De(n),
			i = 1 << r;
		i & t | e[r] & t && (e[r] |= t), n &= ~i
	}
}
var $ = 0;

function Su(e) {
	return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var ku, Ps, Nu, Cu, ju, $l = !1,
	Pr = [],
	mt = null,
	vt = null,
	yt = null,
	er = new Map,
	tr = new Map,
	dt = [],
	nd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Co(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			mt = null;
			break;
		case "dragenter":
		case "dragleave":
			vt = null;
			break;
		case "mouseover":
		case "mouseout":
			yt = null;
			break;
		case "pointerover":
		case "pointerout":
			er.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			tr.delete(t.pointerId)
	}
}

function Fn(e, t, n, r, i, l) {
	return e === null || e.nativeEvent !== l ? (e = {
		blockedOn: t,
		domEventName: n,
		eventSystemFlags: r,
		nativeEvent: l,
		targetContainers: [i]
	}, t !== null && (t = yr(t), t !== null && Ps(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function rd(e, t, n, r, i) {
	switch (t) {
		case "focusin":
			return mt = Fn(mt, e, t, n, r, i), !0;
		case "dragenter":
			return vt = Fn(vt, e, t, n, r, i), !0;
		case "mouseover":
			return yt = Fn(yt, e, t, n, r, i), !0;
		case "pointerover":
			var l = i.pointerId;
			return er.set(l, Fn(er.get(l) || null, e, t, n, r, i)), !0;
		case "gotpointercapture":
			return l = i.pointerId, tr.set(l, Fn(tr.get(l) || null, e, t, n, r, i)), !0
	}
	return !1
}

function Eu(e) {
	var t = Mt(e.target);
	if (t !== null) {
		var n = Jt(t);
		if (n !== null) {
			if (t = n.tag, t === 13) {
				if (t = hu(n), t !== null) {
					e.blockedOn = t, ju(e.priority, function() {
						Nu(n)
					});
					return
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return
			}
		}
	}
	e.blockedOn = null
}

function Br(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length;) {
		var n = Dl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			zl = r, n.target.dispatchEvent(r), zl = null
		} else return t = yr(n), t !== null && Ps(t), e.blockedOn = n, !1;
		t.shift()
	}
	return !0
}

function jo(e, t, n) {
	Br(e) && n.delete(t)
}

function id() {
	$l = !1, mt !== null && Br(mt) && (mt = null), vt !== null && Br(vt) && (vt = null), yt !== null && Br(yt) && (yt = null), er.forEach(jo), tr.forEach(jo)
}

function Rn(e, t) {
	e.blockedOn === t && (e.blockedOn = null, $l || ($l = !0, ke.unstable_scheduleCallback(ke.unstable_NormalPriority, id)))
}

function nr(e) {
	function t(i) {
		return Rn(i, e)
	}
	if (0 < Pr.length) {
		Rn(Pr[0], e);
		for (var n = 1; n < Pr.length; n++) {
			var r = Pr[n];
			r.blockedOn === e && (r.blockedOn = null)
		}
	}
	for (mt !== null && Rn(mt, e), vt !== null && Rn(vt, e), yt !== null && Rn(yt, e), er.forEach(t), tr.forEach(t), n = 0; n < dt.length; n++) r = dt[n], r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < dt.length && (n = dt[0], n.blockedOn === null);) Eu(n), n.blockedOn === null && dt.shift()
}
var gn = ot.ReactCurrentBatchConfig,
	ri = !0;

function ld(e, t, n, r) {
	var i = $,
		l = gn.transition;
	gn.transition = null;
	try {
		$ = 1, Os(e, t, n, r)
	} finally {
		$ = i, gn.transition = l
	}
}

function sd(e, t, n, r) {
	var i = $,
		l = gn.transition;
	gn.transition = null;
	try {
		$ = 4, Os(e, t, n, r)
	} finally {
		$ = i, gn.transition = l
	}
}

function Os(e, t, n, r) {
	if (ri) {
		var i = Dl(e, t, n, r);
		if (i === null) sl(e, t, r, ii, n), Co(e, r);
		else if (rd(i, e, t, n, r)) r.stopPropagation();
		else if (Co(e, r), t & 4 && -1 < nd.indexOf(e)) {
			for (; i !== null;) {
				var l = yr(i);
				if (l !== null && ku(l), l = Dl(e, t, n, r), l === null && sl(e, t, r, ii, n), l === i) break;
				i = l
			}
			i !== null && r.stopPropagation()
		} else sl(e, t, r, null, n)
	}
}
var ii = null;

function Dl(e, t, n, r) {
	if (ii = null, e = js(r), e = Mt(e), e !== null)
		if (t = Jt(e), t === null) e = null;
		else if (n = t.tag, n === 13) {
		if (e = hu(t), e !== null) return e;
		e = null
	} else if (n === 3) {
		if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
		e = null
	} else t !== e && (e = null);
	return ii = e, null
}

function Lu(e) {
	switch (e) {
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "textInput":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeblur":
		case "afterblur":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart":
			return 1;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (Yf()) {
				case Es:
					return 1;
				case yu:
					return 4;
				case ti:
				case Jf:
					return 16;
				case xu:
					return 536870912;
				default:
					return 16
			}
		default:
			return 16
	}
}
var ht = null,
	Fs = null,
	Hr = null;

function Pu() {
	if (Hr) return Hr;
	var e, t = Fs,
		n = t.length,
		r, i = "value" in ht ? ht.value : ht.textContent,
		l = i.length;
	for (e = 0; e < n && t[e] === i[e]; e++);
	var s = n - e;
	for (r = 1; r <= s && t[n - r] === i[l - r]; r++);
	return Hr = i.slice(e, 1 < r ? 1 - r : void 0)
}

function Kr(e) {
	var t = e.keyCode;
	return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Or() {
	return !0
}

function Eo() {
	return !1
}

function Ce(e) {
	function t(n, r, i, l, s) {
		this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = l, this.target = s, this.currentTarget = null;
		for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(l) : l[o]);
		return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Or : Eo, this.isPropagationStopped = Eo, this
	}
	return Q(t.prototype, {
		preventDefault: function() {
			this.defaultPrevented = !0;
			var n = this.nativeEvent;
			n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Or)
		},
		stopPropagation: function() {
			var n = this.nativeEvent;
			n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Or)
		},
		persist: function() {},
		isPersistent: Or
	}), t
}
var En = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now()
		},
		defaultPrevented: 0,
		isTrusted: 0
	},
	Rs = Ce(En),
	vr = Q({}, En, {
		view: 0,
		detail: 0
	}),
	od = Ce(vr),
	Zi, bi, zn, Oi = Q({}, vr, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: zs,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== zn && (zn && e.type === "mousemove" ? (Zi = e.screenX - zn.screenX, bi = e.screenY - zn.screenY) : bi = Zi = 0, zn = e), Zi)
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : bi
		}
	}),
	Lo = Ce(Oi),
	ad = Q({}, Oi, {
		dataTransfer: 0
	}),
	ud = Ce(ad),
	cd = Q({}, vr, {
		relatedTarget: 0
	}),
	qi = Ce(cd),
	fd = Q({}, En, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}),
	dd = Ce(fd),
	pd = Q({}, En, {
		clipboardData: function(e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData
		}
	}),
	hd = Ce(pd),
	gd = Q({}, En, {
		data: 0
	}),
	Po = Ce(gd),
	md = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	},
	vd = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	},
	yd = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};

function xd(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = yd[e]) ? !!t[e] : !1
}

function zs() {
	return xd
}
var wd = Q({}, vr, {
		key: function(e) {
			if (e.key) {
				var t = md[e.key] || e.key;
				if (t !== "Unidentified") return t
			}
			return e.type === "keypress" ? (e = Kr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vd[e.keyCode] || "Unidentified" : ""
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: zs,
		charCode: function(e) {
			return e.type === "keypress" ? Kr(e) : 0
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
		},
		which: function(e) {
			return e.type === "keypress" ? Kr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
		}
	}),
	Sd = Ce(wd),
	kd = Q({}, Oi, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	}),
	Oo = Ce(kd),
	Nd = Q({}, vr, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: zs
	}),
	Cd = Ce(Nd),
	jd = Q({}, En, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}),
	Ed = Ce(jd),
	Ld = Q({}, Oi, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
		},
		deltaZ: 0,
		deltaMode: 0
	}),
	Pd = Ce(Ld),
	Od = [9, 13, 27, 32],
	_s = rt && "CompositionEvent" in window,
	Hn = null;
rt && "documentMode" in document && (Hn = document.documentMode);
var Fd = rt && "TextEvent" in window && !Hn,
	Ou = rt && (!_s || Hn && 8 < Hn && 11 >= Hn),
	Fo = " ",
	Ro = !1;

function Fu(e, t) {
	switch (e) {
		case "keyup":
			return Od.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1
	}
}

function Ru(e) {
	return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var tn = !1;

function Rd(e, t) {
	switch (e) {
		case "compositionend":
			return Ru(t);
		case "keypress":
			return t.which !== 32 ? null : (Ro = !0, Fo);
		case "textInput":
			return e = t.data, e === Fo && Ro ? null : e;
		default:
			return null
	}
}

function zd(e, t) {
	if (tn) return e === "compositionend" || !_s && Fu(e, t) ? (e = Pu(), Hr = Fs = ht = null, tn = !1, e) : null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which)
			}
			return null;
		case "compositionend":
			return Ou && t.locale !== "ko" ? null : t.data;
		default:
			return null
	}
}
var _d = {
	color: !0,
	date: !0,
	datetime: !0,
	"datetime-local": !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0
};

function zo(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!_d[e.type] : t === "textarea"
}

function zu(e, t, n, r) {
	uu(r), t = li(t, "onChange"), 0 < t.length && (n = new Rs("onChange", "change", null, n, r), e.push({
		event: n,
		listeners: t
	}))
}
var Kn = null,
	rr = null;

function Td(e) {
	Hu(e, 0)
}

function Fi(e) {
	var t = ln(e);
	if (nu(t)) return e
}

function Id(e, t) {
	if (e === "change") return t
}
var _u = !1;
if (rt) {
	var el;
	if (rt) {
		var tl = "oninput" in document;
		if (!tl) {
			var _o = document.createElement("div");
			_o.setAttribute("oninput", "return;"), tl = typeof _o.oninput == "function"
		}
		el = tl
	} else el = !1;
	_u = el && (!document.documentMode || 9 < document.documentMode)
}

function To() {
	Kn && (Kn.detachEvent("onpropertychange", Tu), rr = Kn = null)
}

function Tu(e) {
	if (e.propertyName === "value" && Fi(rr)) {
		var t = [];
		zu(t, rr, e, js(e)), pu(Td, t)
	}
}

function Md(e, t, n) {
	e === "focusin" ? (To(), Kn = t, rr = n, Kn.attachEvent("onpropertychange", Tu)) : e === "focusout" && To()
}

function $d(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown") return Fi(rr)
}

function Dd(e, t) {
	if (e === "click") return Fi(t)
}

function Ad(e, t) {
	if (e === "input" || e === "change") return Fi(t)
}

function Ud(e, t) {
	return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ue = typeof Object.is == "function" ? Object.is : Ud;

function ir(e, t) {
	if (Ue(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!wl.call(t, i) || !Ue(e[i], t[i])) return !1
	}
	return !0
}

function Io(e) {
	for (; e && e.firstChild;) e = e.firstChild;
	return e
}

function Mo(e, t) {
	var n = Io(e);
	e = 0;
	for (var r; n;) {
		if (n.nodeType === 3) {
			if (r = e + n.textContent.length, e <= t && r >= t) return {
				node: n,
				offset: t - e
			};
			e = r
		}
		e: {
			for (; n;) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e
				}
				n = n.parentNode
			}
			n = void 0
		}
		n = Io(n)
	}
}

function Iu(e, t) {
	return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Iu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Mu() {
	for (var e = window, t = br(); t instanceof e.HTMLIFrameElement;) {
		try {
			var n = typeof t.contentWindow.location.href == "string"
		} catch {
			n = !1
		}
		if (n) e = t.contentWindow;
		else break;
		t = br(e.document)
	}
	return t
}

function Ts(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Vd(e) {
	var t = Mu(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (t !== n && n && n.ownerDocument && Iu(n.ownerDocument.documentElement, n)) {
		if (r !== null && Ts(n)) {
			if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
			else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
				e = e.getSelection();
				var i = n.textContent.length,
					l = Math.min(r.start, i);
				r = r.end === void 0 ? l : Math.min(r.end, i), !e.extend && l > r && (i = r, r = l, l = i), i = Mo(n, l);
				var s = Mo(n, r);
				i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
			}
		}
		for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
			element: e,
			left: e.scrollLeft,
			top: e.scrollTop
		});
		for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
	}
}
var Bd = rt && "documentMode" in document && 11 >= document.documentMode,
	nn = null,
	Al = null,
	Wn = null,
	Ul = !1;

function $o(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	Ul || nn == null || nn !== br(r) || (r = nn, "selectionStart" in r && Ts(r) ? r = {
		start: r.selectionStart,
		end: r.selectionEnd
	} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
		anchorNode: r.anchorNode,
		anchorOffset: r.anchorOffset,
		focusNode: r.focusNode,
		focusOffset: r.focusOffset
	}), Wn && ir(Wn, r) || (Wn = r, r = li(Al, "onSelect"), 0 < r.length && (t = new Rs("onSelect", "select", null, t, n), e.push({
		event: t,
		listeners: r
	}), t.target = nn)))
}

function Fr(e, t) {
	var n = {};
	return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var rn = {
		animationend: Fr("Animation", "AnimationEnd"),
		animationiteration: Fr("Animation", "AnimationIteration"),
		animationstart: Fr("Animation", "AnimationStart"),
		transitionend: Fr("Transition", "TransitionEnd")
	},
	nl = {},
	$u = {};
rt && ($u = document.createElement("div").style, "AnimationEvent" in window || (delete rn.animationend.animation, delete rn.animationiteration.animation, delete rn.animationstart.animation), "TransitionEvent" in window || delete rn.transitionend.transition);

function Ri(e) {
	if (nl[e]) return nl[e];
	if (!rn[e]) return e;
	var t = rn[e],
		n;
	for (n in t)
		if (t.hasOwnProperty(n) && n in $u) return nl[e] = t[n];
	return e
}
var Du = Ri("animationend"),
	Au = Ri("animationiteration"),
	Uu = Ri("animationstart"),
	Vu = Ri("transitionend"),
	Bu = new Map,
	Do = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Pt(e, t) {
	Bu.set(e, t), Yt(t, [e])
}
for (var rl = 0; rl < Do.length; rl++) {
	var il = Do[rl],
		Hd = il.toLowerCase(),
		Kd = il[0].toUpperCase() + il.slice(1);
	Pt(Hd, "on" + Kd)
}
Pt(Du, "onAnimationEnd");
Pt(Au, "onAnimationIteration");
Pt(Uu, "onAnimationStart");
Pt("dblclick", "onDoubleClick");
Pt("focusin", "onFocus");
Pt("focusout", "onBlur");
Pt(Vu, "onTransitionEnd");
yn("onMouseEnter", ["mouseout", "mouseover"]);
yn("onMouseLeave", ["mouseout", "mouseover"]);
yn("onPointerEnter", ["pointerout", "pointerover"]);
yn("onPointerLeave", ["pointerout", "pointerover"]);
Yt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Yt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Yt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Yt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Yt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Yt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Un = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
	Wd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Un));

function Ao(e, t, n) {
	var r = e.type || "unknown-event";
	e.currentTarget = n, Hf(r, t, void 0, e), e.currentTarget = null
}

function Hu(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event;
		r = r.listeners;
		e: {
			var l = void 0;
			if (t)
				for (var s = r.length - 1; 0 <= s; s--) {
					var o = r[s],
						a = o.instance,
						u = o.currentTarget;
					if (o = o.listener, a !== l && i.isPropagationStopped()) break e;
					Ao(i, o, u), l = a
				} else
					for (s = 0; s < r.length; s++) {
						if (o = r[s], a = o.instance, u = o.currentTarget, o = o.listener, a !== l && i.isPropagationStopped()) break e;
						Ao(i, o, u), l = a
					}
		}
	}
	if (ei) throw e = Il, ei = !1, Il = null, e
}

function U(e, t) {
	var n = t[Wl];
	n === void 0 && (n = t[Wl] = new Set);
	var r = e + "__bubble";
	n.has(r) || (Ku(t, e, 2, !1), n.add(r))
}

function ll(e, t, n) {
	var r = 0;
	t && (r |= 4), Ku(n, e, r, t)
}
var Rr = "_reactListening" + Math.random().toString(36).slice(2);

function lr(e) {
	if (!e[Rr]) {
		e[Rr] = !0, Za.forEach(function(n) {
			n !== "selectionchange" && (Wd.has(n) || ll(n, !1, e), ll(n, !0, e))
		});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[Rr] || (t[Rr] = !0, ll("selectionchange", !1, t))
	}
}

function Ku(e, t, n, r) {
	switch (Lu(t)) {
		case 1:
			var i = ld;
			break;
		case 4:
			i = sd;
			break;
		default:
			i = Os
	}
	n = i.bind(null, t, n, e), i = void 0, !Tl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
		capture: !0,
		passive: i
	}) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
		passive: i
	}) : e.addEventListener(t, n, !1)
}

function sl(e, t, n, r, i) {
	var l = r;
	if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
		if (r === null) return;
		var s = r.tag;
		if (s === 3 || s === 4) {
			var o = r.stateNode.containerInfo;
			if (o === i || o.nodeType === 8 && o.parentNode === i) break;
			if (s === 4)
				for (s = r.return; s !== null;) {
					var a = s.tag;
					if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
					s = s.return
				}
			for (; o !== null;) {
				if (s = Mt(o), s === null) return;
				if (a = s.tag, a === 5 || a === 6) {
					r = l = s;
					continue e
				}
				o = o.parentNode
			}
		}
		r = r.return
	}
	pu(function() {
		var u = l,
			p = js(n),
			g = [];
		e: {
			var f = Bu.get(e);
			if (f !== void 0) {
				var v = Rs,
					x = e;
				switch (e) {
					case "keypress":
						if (Kr(n) === 0) break e;
					case "keydown":
					case "keyup":
						v = Sd;
						break;
					case "focusin":
						x = "focus", v = qi;
						break;
					case "focusout":
						x = "blur", v = qi;
						break;
					case "beforeblur":
					case "afterblur":
						v = qi;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						v = Lo;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						v = ud;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						v = Cd;
						break;
					case Du:
					case Au:
					case Uu:
						v = dd;
						break;
					case Vu:
						v = Ed;
						break;
					case "scroll":
						v = od;
						break;
					case "wheel":
						v = Pd;
						break;
					case "copy":
					case "cut":
					case "paste":
						v = hd;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						v = Oo
				}
				var w = (t & 4) !== 0,
					P = !w && e === "scroll",
					h = w ? f !== null ? f + "Capture" : null : f;
				w = [];
				for (var d = u, m; d !== null;) {
					m = d;
					var y = m.stateNode;
					if (m.tag === 5 && y !== null && (m = y, h !== null && (y = qn(d, h), y != null && w.push(sr(d, y, m)))), P) break;
					d = d.return
				}
				0 < w.length && (f = new v(f, x, null, n, p), g.push({
					event: f,
					listeners: w
				}))
			}
		}
		if (!(t & 7)) {
			e: {
				if (f = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", f && n !== zl && (x = n.relatedTarget || n.fromElement) && (Mt(x) || x[it])) break e;
				if ((v || f) && (f = p.window === p ? p : (f = p.ownerDocument) ? f.defaultView || f.parentWindow : window, v ? (x = n.relatedTarget || n.toElement, v = u, x = x ? Mt(x) : null, x !== null && (P = Jt(x), x !== P || x.tag !== 5 && x.tag !== 6) && (x = null)) : (v = null, x = u), v !== x)) {
					if (w = Lo, y = "onMouseLeave", h = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (w = Oo, y = "onPointerLeave", h = "onPointerEnter", d = "pointer"), P = v == null ? f : ln(v), m = x == null ? f : ln(x), f = new w(y, d + "leave", v, n, p), f.target = P, f.relatedTarget = m, y = null, Mt(p) === u && (w = new w(h, d + "enter", x, n, p), w.target = m, w.relatedTarget = P, y = w), P = y, v && x) t: {
						for (w = v, h = x, d = 0, m = w; m; m = Xt(m)) d++;
						for (m = 0, y = h; y; y = Xt(y)) m++;
						for (; 0 < d - m;) w = Xt(w),
						d--;
						for (; 0 < m - d;) h = Xt(h),
						m--;
						for (; d--;) {
							if (w === h || h !== null && w === h.alternate) break t;
							w = Xt(w), h = Xt(h)
						}
						w = null
					}
					else w = null;
					v !== null && Uo(g, f, v, w, !1), x !== null && P !== null && Uo(g, P, x, w, !0)
				}
			}
			e: {
				if (f = u ? ln(u) : window, v = f.nodeName && f.nodeName.toLowerCase(), v === "select" || v === "input" && f.type === "file") var k = Id;
				else if (zo(f))
					if (_u) k = Ad;
					else {
						k = $d;
						var C = Md
					}
				else(v = f.nodeName) && v.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = Dd);
				if (k && (k = k(e, u))) {
					zu(g, k, n, p);
					break e
				}
				C && C(e, f, u),
				e === "focusout" && (C = f._wrapperState) && C.controlled && f.type === "number" && Ll(f, "number", f.value)
			}
			switch (C = u ? ln(u) : window, e) {
				case "focusin":
					(zo(C) || C.contentEditable === "true") && (nn = C, Al = u, Wn = null);
					break;
				case "focusout":
					Wn = Al = nn = null;
					break;
				case "mousedown":
					Ul = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					Ul = !1, $o(g, n, p);
					break;
				case "selectionchange":
					if (Bd) break;
				case "keydown":
				case "keyup":
					$o(g, n, p)
			}
			var N;
			if (_s) e: {
				switch (e) {
					case "compositionstart":
						var L = "onCompositionStart";
						break e;
					case "compositionend":
						L = "onCompositionEnd";
						break e;
					case "compositionupdate":
						L = "onCompositionUpdate";
						break e
				}
				L = void 0
			}
			else tn ? Fu(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");L && (Ou && n.locale !== "ko" && (tn || L !== "onCompositionStart" ? L === "onCompositionEnd" && tn && (N = Pu()) : (ht = p, Fs = "value" in ht ? ht.value : ht.textContent, tn = !0)), C = li(u, L), 0 < C.length && (L = new Po(L, e, null, n, p), g.push({
				event: L,
				listeners: C
			}), N ? L.data = N : (N = Ru(n), N !== null && (L.data = N)))),
			(N = Fd ? Rd(e, n) : zd(e, n)) && (u = li(u, "onBeforeInput"), 0 < u.length && (p = new Po("onBeforeInput", "beforeinput", null, n, p), g.push({
				event: p,
				listeners: u
			}), p.data = N))
		}
		Hu(g, t)
	})
}

function sr(e, t, n) {
	return {
		instance: e,
		listener: t,
		currentTarget: n
	}
}

function li(e, t) {
	for (var n = t + "Capture", r = []; e !== null;) {
		var i = e,
			l = i.stateNode;
		i.tag === 5 && l !== null && (i = l, l = qn(e, n), l != null && r.unshift(sr(e, l, i)), l = qn(e, t), l != null && r.push(sr(e, l, i))), e = e.return
	}
	return r
}

function Xt(e) {
	if (e === null) return null;
	do e = e.return; while (e && e.tag !== 5);
	return e || null
}

function Uo(e, t, n, r, i) {
	for (var l = t._reactName, s = []; n !== null && n !== r;) {
		var o = n,
			a = o.alternate,
			u = o.stateNode;
		if (a !== null && a === r) break;
		o.tag === 5 && u !== null && (o = u, i ? (a = qn(n, l), a != null && s.unshift(sr(n, a, o))) : i || (a = qn(n, l), a != null && s.push(sr(n, a, o)))), n = n.return
	}
	s.length !== 0 && e.push({
		event: t,
		listeners: s
	})
}
var Qd = /\r\n?/g,
	Yd = /\u0000|\uFFFD/g;

function Vo(e) {
	return (typeof e == "string" ? e : "" + e).replace(Qd, `
`).replace(Yd, "")
}

function zr(e, t, n) {
	if (t = Vo(t), Vo(e) !== t && n) throw Error(S(425))
}

function si() {}
var Vl = null,
	Bl = null;

function Hl(e, t) {
	return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Kl = typeof setTimeout == "function" ? setTimeout : void 0,
	Jd = typeof clearTimeout == "function" ? clearTimeout : void 0,
	Bo = typeof Promise == "function" ? Promise : void 0,
	Gd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bo < "u" ? function(e) {
		return Bo.resolve(null).then(e).catch(Xd)
	} : Kl;

function Xd(e) {
	setTimeout(function() {
		throw e
	})
}

function ol(e, t) {
	var n = t,
		r = 0;
	do {
		var i = n.nextSibling;
		if (e.removeChild(n), i && i.nodeType === 8)
			if (n = i.data, n === "/$") {
				if (r === 0) {
					e.removeChild(i), nr(t);
					return
				}
				r--
			} else n !== "$" && n !== "$?" && n !== "$!" || r++;
		n = i
	} while (n);
	nr(t)
}

function xt(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
			if (t === "/$") return null
		}
	}
	return e
}

function Ho(e) {
	e = e.previousSibling;
	for (var t = 0; e;) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--
			} else n === "/$" && t++
		}
		e = e.previousSibling
	}
	return null
}
var Ln = Math.random().toString(36).slice(2),
	We = "__reactFiber$" + Ln,
	or = "__reactProps$" + Ln,
	it = "__reactContainer$" + Ln,
	Wl = "__reactEvents$" + Ln,
	Zd = "__reactListeners$" + Ln,
	bd = "__reactHandles$" + Ln;

function Mt(e) {
	var t = e[We];
	if (t) return t;
	for (var n = e.parentNode; n;) {
		if (t = n[it] || n[We]) {
			if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
				for (e = Ho(e); e !== null;) {
					if (n = e[We]) return n;
					e = Ho(e)
				}
			return t
		}
		e = n, n = e.parentNode
	}
	return null
}

function yr(e) {
	return e = e[We] || e[it], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function ln(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(S(33))
}

function zi(e) {
	return e[or] || null
}
var Ql = [],
	sn = -1;

function Ot(e) {
	return {
		current: e
	}
}

function V(e) {
	0 > sn || (e.current = Ql[sn], Ql[sn] = null, sn--)
}

function D(e, t) {
	sn++, Ql[sn] = e.current, e.current = t
}
var Et = {},
	oe = Ot(Et),
	ge = Ot(!1),
	Bt = Et;

function xn(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Et;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
	var i = {},
		l;
	for (l in n) i[l] = t[l];
	return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function me(e) {
	return e = e.childContextTypes, e != null
}

function oi() {
	V(ge), V(oe)
}

function Ko(e, t, n) {
	if (oe.current !== Et) throw Error(S(168));
	D(oe, t), D(ge, n)
}

function Wu(e, t, n) {
	var r = e.stateNode;
	if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
	r = r.getChildContext();
	for (var i in r)
		if (!(i in t)) throw Error(S(108, Mf(e) || "Unknown", i));
	return Q({}, n, r)
}

function ai(e) {
	return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Et, Bt = oe.current, D(oe, e), D(ge, ge.current), !0
}

function Wo(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(S(169));
	n ? (e = Wu(e, t, Bt), r.__reactInternalMemoizedMergedChildContext = e, V(ge), V(oe), D(oe, e)) : V(ge), D(ge, n)
}
var Ze = null,
	_i = !1,
	al = !1;

function Qu(e) {
	Ze === null ? Ze = [e] : Ze.push(e)
}

function qd(e) {
	_i = !0, Qu(e)
}

function Ft() {
	if (!al && Ze !== null) {
		al = !0;
		var e = 0,
			t = $;
		try {
			var n = Ze;
			for ($ = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0); while (r !== null)
			}
			Ze = null, _i = !1
		} catch (i) {
			throw Ze !== null && (Ze = Ze.slice(e + 1)), vu(Es, Ft), i
		} finally {
			$ = t, al = !1
		}
	}
	return null
}
var on = [],
	an = 0,
	ui = null,
	ci = 0,
	Ee = [],
	Le = 0,
	Ht = null,
	be = 1,
	qe = "";

function Tt(e, t) {
	on[an++] = ci, on[an++] = ui, ui = e, ci = t
}

function Yu(e, t, n) {
	Ee[Le++] = be, Ee[Le++] = qe, Ee[Le++] = Ht, Ht = e;
	var r = be;
	e = qe;
	var i = 32 - De(r) - 1;
	r &= ~(1 << i), n += 1;
	var l = 32 - De(t) + i;
	if (30 < l) {
		var s = i - i % 5;
		l = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, be = 1 << 32 - De(t) + i | n << i | r, qe = l + e
	} else be = 1 << l | n << i | r, qe = e
}

function Is(e) {
	e.return !== null && (Tt(e, 1), Yu(e, 1, 0))
}

function Ms(e) {
	for (; e === ui;) ui = on[--an], on[an] = null, ci = on[--an], on[an] = null;
	for (; e === Ht;) Ht = Ee[--Le], Ee[Le] = null, qe = Ee[--Le], Ee[Le] = null, be = Ee[--Le], Ee[Le] = null
}
var Se = null,
	we = null,
	H = !1,
	$e = null;

function Ju(e, t) {
	var n = Pe(5, null, null, 0);
	n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Qo(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Se = e, we = xt(t.firstChild), !0) : !1;
		case 6:
			return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Se = e, we = null, !0) : !1;
		case 13:
			return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ht !== null ? {
				id: be,
				overflow: qe
			} : null, e.memoizedState = {
				dehydrated: t,
				treeContext: n,
				retryLane: 1073741824
			}, n = Pe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Se = e, we = null, !0) : !1;
		default:
			return !1
	}
}

function Yl(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Jl(e) {
	if (H) {
		var t = we;
		if (t) {
			var n = t;
			if (!Qo(e, t)) {
				if (Yl(e)) throw Error(S(418));
				t = xt(n.nextSibling);
				var r = Se;
				t && Qo(e, t) ? Ju(r, n) : (e.flags = e.flags & -4097 | 2, H = !1, Se = e)
			}
		} else {
			if (Yl(e)) throw Error(S(418));
			e.flags = e.flags & -4097 | 2, H = !1, Se = e
		}
	}
}

function Yo(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
	Se = e
}

function _r(e) {
	if (e !== Se) return !1;
	if (!H) return Yo(e), H = !0, !1;
	var t;
	if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Hl(e.type, e.memoizedProps)), t && (t = we)) {
		if (Yl(e)) throw Gu(), Error(S(418));
		for (; t;) Ju(e, t), t = xt(t.nextSibling)
	}
	if (Yo(e), e.tag === 13) {
		if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
		e: {
			for (e = e.nextSibling, t = 0; e;) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							we = xt(e.nextSibling);
							break e
						}
						t--
					} else n !== "$" && n !== "$!" && n !== "$?" || t++
				}
				e = e.nextSibling
			}
			we = null
		}
	} else we = Se ? xt(e.stateNode.nextSibling) : null;
	return !0
}

function Gu() {
	for (var e = we; e;) e = xt(e.nextSibling)
}

function wn() {
	we = Se = null, H = !1
}

function $s(e) {
	$e === null ? $e = [e] : $e.push(e)
}
var ep = ot.ReactCurrentBatchConfig;

function _n(e, t, n) {
	if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
		if (n._owner) {
			if (n = n._owner, n) {
				if (n.tag !== 1) throw Error(S(309));
				var r = n.stateNode
			}
			if (!r) throw Error(S(147, e));
			var i = r,
				l = "" + e;
			return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(s) {
				var o = i.refs;
				s === null ? delete o[l] : o[l] = s
			}, t._stringRef = l, t)
		}
		if (typeof e != "string") throw Error(S(284));
		if (!n._owner) throw Error(S(290, e))
	}
	return e
}

function Tr(e, t) {
	throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Jo(e) {
	var t = e._init;
	return t(e._payload)
}

function Xu(e) {
	function t(h, d) {
		if (e) {
			var m = h.deletions;
			m === null ? (h.deletions = [d], h.flags |= 16) : m.push(d)
		}
	}

	function n(h, d) {
		if (!e) return null;
		for (; d !== null;) t(h, d), d = d.sibling;
		return null
	}

	function r(h, d) {
		for (h = new Map; d !== null;) d.key !== null ? h.set(d.key, d) : h.set(d.index, d), d = d.sibling;
		return h
	}

	function i(h, d) {
		return h = Nt(h, d), h.index = 0, h.sibling = null, h
	}

	function l(h, d, m) {
		return h.index = m, e ? (m = h.alternate, m !== null ? (m = m.index, m < d ? (h.flags |= 2, d) : m) : (h.flags |= 2, d)) : (h.flags |= 1048576, d)
	}

	function s(h) {
		return e && h.alternate === null && (h.flags |= 2), h
	}

	function o(h, d, m, y) {
		return d === null || d.tag !== 6 ? (d = gl(m, h.mode, y), d.return = h, d) : (d = i(d, m), d.return = h, d)
	}

	function a(h, d, m, y) {
		var k = m.type;
		return k === en ? p(h, d, m.props.children, y, m.key) : d !== null && (d.elementType === k || typeof k == "object" && k !== null && k.$$typeof === ct && Jo(k) === d.type) ? (y = i(d, m.props), y.ref = _n(h, d, m), y.return = h, y) : (y = Zr(m.type, m.key, m.props, null, h.mode, y), y.ref = _n(h, d, m), y.return = h, y)
	}

	function u(h, d, m, y) {
		return d === null || d.tag !== 4 || d.stateNode.containerInfo !== m.containerInfo || d.stateNode.implementation !== m.implementation ? (d = ml(m, h.mode, y), d.return = h, d) : (d = i(d, m.children || []), d.return = h, d)
	}

	function p(h, d, m, y, k) {
		return d === null || d.tag !== 7 ? (d = Ut(m, h.mode, y, k), d.return = h, d) : (d = i(d, m), d.return = h, d)
	}

	function g(h, d, m) {
		if (typeof d == "string" && d !== "" || typeof d == "number") return d = gl("" + d, h.mode, m), d.return = h, d;
		if (typeof d == "object" && d !== null) {
			switch (d.$$typeof) {
				case Nr:
					return m = Zr(d.type, d.key, d.props, null, h.mode, m), m.ref = _n(h, null, d), m.return = h, m;
				case qt:
					return d = ml(d, h.mode, m), d.return = h, d;
				case ct:
					var y = d._init;
					return g(h, y(d._payload), m)
			}
			if (Dn(d) || Pn(d)) return d = Ut(d, h.mode, m, null), d.return = h, d;
			Tr(h, d)
		}
		return null
	}

	function f(h, d, m, y) {
		var k = d !== null ? d.key : null;
		if (typeof m == "string" && m !== "" || typeof m == "number") return k !== null ? null : o(h, d, "" + m, y);
		if (typeof m == "object" && m !== null) {
			switch (m.$$typeof) {
				case Nr:
					return m.key === k ? a(h, d, m, y) : null;
				case qt:
					return m.key === k ? u(h, d, m, y) : null;
				case ct:
					return k = m._init, f(h, d, k(m._payload), y)
			}
			if (Dn(m) || Pn(m)) return k !== null ? null : p(h, d, m, y, null);
			Tr(h, m)
		}
		return null
	}

	function v(h, d, m, y, k) {
		if (typeof y == "string" && y !== "" || typeof y == "number") return h = h.get(m) || null, o(d, h, "" + y, k);
		if (typeof y == "object" && y !== null) {
			switch (y.$$typeof) {
				case Nr:
					return h = h.get(y.key === null ? m : y.key) || null, a(d, h, y, k);
				case qt:
					return h = h.get(y.key === null ? m : y.key) || null, u(d, h, y, k);
				case ct:
					var C = y._init;
					return v(h, d, m, C(y._payload), k)
			}
			if (Dn(y) || Pn(y)) return h = h.get(m) || null, p(d, h, y, k, null);
			Tr(d, y)
		}
		return null
	}

	function x(h, d, m, y) {
		for (var k = null, C = null, N = d, L = d = 0, A = null; N !== null && L < m.length; L++) {
			N.index > L ? (A = N, N = null) : A = N.sibling;
			var z = f(h, N, m[L], y);
			if (z === null) {
				N === null && (N = A);
				break
			}
			e && N && z.alternate === null && t(h, N), d = l(z, d, L), C === null ? k = z : C.sibling = z, C = z, N = A
		}
		if (L === m.length) return n(h, N), H && Tt(h, L), k;
		if (N === null) {
			for (; L < m.length; L++) N = g(h, m[L], y), N !== null && (d = l(N, d, L), C === null ? k = N : C.sibling = N, C = N);
			return H && Tt(h, L), k
		}
		for (N = r(h, N); L < m.length; L++) A = v(N, h, L, m[L], y), A !== null && (e && A.alternate !== null && N.delete(A.key === null ? L : A.key), d = l(A, d, L), C === null ? k = A : C.sibling = A, C = A);
		return e && N.forEach(function(M) {
			return t(h, M)
		}), H && Tt(h, L), k
	}

	function w(h, d, m, y) {
		var k = Pn(m);
		if (typeof k != "function") throw Error(S(150));
		if (m = k.call(m), m == null) throw Error(S(151));
		for (var C = k = null, N = d, L = d = 0, A = null, z = m.next(); N !== null && !z.done; L++, z = m.next()) {
			N.index > L ? (A = N, N = null) : A = N.sibling;
			var M = f(h, N, z.value, y);
			if (M === null) {
				N === null && (N = A);
				break
			}
			e && N && M.alternate === null && t(h, N), d = l(M, d, L), C === null ? k = M : C.sibling = M, C = M, N = A
		}
		if (z.done) return n(h, N), H && Tt(h, L), k;
		if (N === null) {
			for (; !z.done; L++, z = m.next()) z = g(h, z.value, y), z !== null && (d = l(z, d, L), C === null ? k = z : C.sibling = z, C = z);
			return H && Tt(h, L), k
		}
		for (N = r(h, N); !z.done; L++, z = m.next()) z = v(N, h, L, z.value, y), z !== null && (e && z.alternate !== null && N.delete(z.key === null ? L : z.key), d = l(z, d, L), C === null ? k = z : C.sibling = z, C = z);
		return e && N.forEach(function(ye) {
			return t(h, ye)
		}), H && Tt(h, L), k
	}

	function P(h, d, m, y) {
		if (typeof m == "object" && m !== null && m.type === en && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
			switch (m.$$typeof) {
				case Nr:
					e: {
						for (var k = m.key, C = d; C !== null;) {
							if (C.key === k) {
								if (k = m.type, k === en) {
									if (C.tag === 7) {
										n(h, C.sibling), d = i(C, m.props.children), d.return = h, h = d;
										break e
									}
								} else if (C.elementType === k || typeof k == "object" && k !== null && k.$$typeof === ct && Jo(k) === C.type) {
									n(h, C.sibling), d = i(C, m.props), d.ref = _n(h, C, m), d.return = h, h = d;
									break e
								}
								n(h, C);
								break
							} else t(h, C);
							C = C.sibling
						}
						m.type === en ? (d = Ut(m.props.children, h.mode, y, m.key), d.return = h, h = d) : (y = Zr(m.type, m.key, m.props, null, h.mode, y), y.ref = _n(h, d, m), y.return = h, h = y)
					}
					return s(h);
				case qt:
					e: {
						for (C = m.key; d !== null;) {
							if (d.key === C)
								if (d.tag === 4 && d.stateNode.containerInfo === m.containerInfo && d.stateNode.implementation === m.implementation) {
									n(h, d.sibling), d = i(d, m.children || []), d.return = h, h = d;
									break e
								} else {
									n(h, d);
									break
								}
							else t(h, d);
							d = d.sibling
						}
						d = ml(m, h.mode, y),
						d.return = h,
						h = d
					}
					return s(h);
				case ct:
					return C = m._init, P(h, d, C(m._payload), y)
			}
			if (Dn(m)) return x(h, d, m, y);
			if (Pn(m)) return w(h, d, m, y);
			Tr(h, m)
		}
		return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, d !== null && d.tag === 6 ? (n(h, d.sibling), d = i(d, m), d.return = h, h = d) : (n(h, d), d = gl(m, h.mode, y), d.return = h, h = d), s(h)) : n(h, d)
	}
	return P
}
var Sn = Xu(!0),
	Zu = Xu(!1),
	fi = Ot(null),
	di = null,
	un = null,
	Ds = null;

function As() {
	Ds = un = di = null
}

function Us(e) {
	var t = fi.current;
	V(fi), e._currentValue = t
}

function Gl(e, t, n) {
	for (; e !== null;) {
		var r = e.alternate;
		if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
		e = e.return
	}
}

function mn(e, t) {
	di = e, Ds = un = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (he = !0), e.firstContext = null)
}

function Fe(e) {
	var t = e._currentValue;
	if (Ds !== e)
		if (e = {
				context: e,
				memoizedValue: t,
				next: null
			}, un === null) {
			if (di === null) throw Error(S(308));
			un = e, di.dependencies = {
				lanes: 0,
				firstContext: e
			}
		} else un = un.next = e;
	return t
}
var $t = null;

function Vs(e) {
	$t === null ? $t = [e] : $t.push(e)
}

function bu(e, t, n, r) {
	var i = t.interleaved;
	return i === null ? (n.next = n, Vs(t)) : (n.next = i.next, i.next = n), t.interleaved = n, lt(e, r)
}

function lt(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
	return n.tag === 3 ? n.stateNode : null
}
var ft = !1;

function Bs(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: {
			pending: null,
			interleaved: null,
			lanes: 0
		},
		effects: null
	}
}

function qu(e, t) {
	e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
		baseState: e.baseState,
		firstBaseUpdate: e.firstBaseUpdate,
		lastBaseUpdate: e.lastBaseUpdate,
		shared: e.shared,
		effects: e.effects
	})
}

function tt(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null
	}
}

function wt(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (r = r.shared, I & 2) {
		var i = r.pending;
		return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, lt(e, n)
	}
	return i = r.interleaved, i === null ? (t.next = t, Vs(r)) : (t.next = i.next, i.next = t), r.interleaved = t, lt(e, n)
}

function Wr(e, t, n) {
	if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
		var r = t.lanes;
		r &= e.pendingLanes, n |= r, t.lanes = n, Ls(e, n)
	}
}

function Go(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && (r = r.updateQueue, n === r)) {
		var i = null,
			l = null;
		if (n = n.firstBaseUpdate, n !== null) {
			do {
				var s = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null
				};
				l === null ? i = l = s : l = l.next = s, n = n.next
			} while (n !== null);
			l === null ? i = l = t : l = l.next = t
		} else i = l = t;
		n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: l,
			shared: r.shared,
			effects: r.effects
		}, e.updateQueue = n;
		return
	}
	e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function pi(e, t, n, r) {
	var i = e.updateQueue;
	ft = !1;
	var l = i.firstBaseUpdate,
		s = i.lastBaseUpdate,
		o = i.shared.pending;
	if (o !== null) {
		i.shared.pending = null;
		var a = o,
			u = a.next;
		a.next = null, s === null ? l = u : s.next = u, s = a;
		var p = e.alternate;
		p !== null && (p = p.updateQueue, o = p.lastBaseUpdate, o !== s && (o === null ? p.firstBaseUpdate = u : o.next = u, p.lastBaseUpdate = a))
	}
	if (l !== null) {
		var g = i.baseState;
		s = 0, p = u = a = null, o = l;
		do {
			var f = o.lane,
				v = o.eventTime;
			if ((r & f) === f) {
				p !== null && (p = p.next = {
					eventTime: v,
					lane: 0,
					tag: o.tag,
					payload: o.payload,
					callback: o.callback,
					next: null
				});
				e: {
					var x = e,
						w = o;
					switch (f = t, v = n, w.tag) {
						case 1:
							if (x = w.payload, typeof x == "function") {
								g = x.call(v, g, f);
								break e
							}
							g = x;
							break e;
						case 3:
							x.flags = x.flags & -65537 | 128;
						case 0:
							if (x = w.payload, f = typeof x == "function" ? x.call(v, g, f) : x, f == null) break e;
							g = Q({}, g, f);
							break e;
						case 2:
							ft = !0
					}
				}
				o.callback !== null && o.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [o] : f.push(o))
			} else v = {
				eventTime: v,
				lane: f,
				tag: o.tag,
				payload: o.payload,
				callback: o.callback,
				next: null
			}, p === null ? (u = p = v, a = g) : p = p.next = v, s |= f;
			if (o = o.next, o === null) {
				if (o = i.shared.pending, o === null) break;
				f = o, o = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null
			}
		} while (!0);
		if (p === null && (a = g), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = p, t = i.shared.interleaved, t !== null) {
			i = t;
			do s |= i.lane, i = i.next; while (i !== t)
		} else l === null && (i.shared.lanes = 0);
		Wt |= s, e.lanes = s, e.memoizedState = g
	}
}

function Xo(e, t, n) {
	if (e = t.effects, t.effects = null, e !== null)
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback;
			if (i !== null) {
				if (r.callback = null, r = n, typeof i != "function") throw Error(S(191, i));
				i.call(r)
			}
		}
}
var xr = {},
	Je = Ot(xr),
	ar = Ot(xr),
	ur = Ot(xr);

function Dt(e) {
	if (e === xr) throw Error(S(174));
	return e
}

function Hs(e, t) {
	switch (D(ur, t), D(ar, e), D(Je, xr), e = t.nodeType, e) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Ol(null, "");
			break;
		default:
			e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ol(t, e)
	}
	V(Je), D(Je, t)
}

function kn() {
	V(Je), V(ar), V(ur)
}

function ec(e) {
	Dt(ur.current);
	var t = Dt(Je.current),
		n = Ol(t, e.type);
	t !== n && (D(ar, e), D(Je, n))
}

function Ks(e) {
	ar.current === e && (V(Je), V(ar))
}
var K = Ot(0);

function hi(e) {
	for (var t = e; t !== null;) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t
		} else if (t.child !== null) {
			t.child.return = t, t = t.child;
			continue
		}
		if (t === e) break;
		for (; t.sibling === null;) {
			if (t.return === null || t.return === e) return null;
			t = t.return
		}
		t.sibling.return = t.return, t = t.sibling
	}
	return null
}
var ul = [];

function Ws() {
	for (var e = 0; e < ul.length; e++) ul[e]._workInProgressVersionPrimary = null;
	ul.length = 0
}
var Qr = ot.ReactCurrentDispatcher,
	cl = ot.ReactCurrentBatchConfig,
	Kt = 0,
	W = null,
	X = null,
	q = null,
	gi = !1,
	Qn = !1,
	cr = 0,
	tp = 0;

function ie() {
	throw Error(S(321))
}

function Qs(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!Ue(e[n], t[n])) return !1;
	return !0
}

function Ys(e, t, n, r, i, l) {
	if (Kt = l, W = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Qr.current = e === null || e.memoizedState === null ? lp : sp, e = n(r, i), Qn) {
		l = 0;
		do {
			if (Qn = !1, cr = 0, 25 <= l) throw Error(S(301));
			l += 1, q = X = null, t.updateQueue = null, Qr.current = op, e = n(r, i)
		} while (Qn)
	}
	if (Qr.current = mi, t = X !== null && X.next !== null, Kt = 0, q = X = W = null, gi = !1, t) throw Error(S(300));
	return e
}

function Js() {
	var e = cr !== 0;
	return cr = 0, e
}

function Ke() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null
	};
	return q === null ? W.memoizedState = q = e : q = q.next = e, q
}

function Re() {
	if (X === null) {
		var e = W.alternate;
		e = e !== null ? e.memoizedState : null
	} else e = X.next;
	var t = q === null ? W.memoizedState : q.next;
	if (t !== null) q = t, X = e;
	else {
		if (e === null) throw Error(S(310));
		X = e, e = {
			memoizedState: X.memoizedState,
			baseState: X.baseState,
			baseQueue: X.baseQueue,
			queue: X.queue,
			next: null
		}, q === null ? W.memoizedState = q = e : q = q.next = e
	}
	return q
}

function fr(e, t) {
	return typeof t == "function" ? t(e) : t
}

function fl(e) {
	var t = Re(),
		n = t.queue;
	if (n === null) throw Error(S(311));
	n.lastRenderedReducer = e;
	var r = X,
		i = r.baseQueue,
		l = n.pending;
	if (l !== null) {
		if (i !== null) {
			var s = i.next;
			i.next = l.next, l.next = s
		}
		r.baseQueue = i = l, n.pending = null
	}
	if (i !== null) {
		l = i.next, r = r.baseState;
		var o = s = null,
			a = null,
			u = l;
		do {
			var p = u.lane;
			if ((Kt & p) === p) a !== null && (a = a.next = {
				lane: 0,
				action: u.action,
				hasEagerState: u.hasEagerState,
				eagerState: u.eagerState,
				next: null
			}), r = u.hasEagerState ? u.eagerState : e(r, u.action);
			else {
				var g = {
					lane: p,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				};
				a === null ? (o = a = g, s = r) : a = a.next = g, W.lanes |= p, Wt |= p
			}
			u = u.next
		} while (u !== null && u !== l);
		a === null ? s = r : a.next = o, Ue(r, t.memoizedState) || (he = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r
	}
	if (e = n.interleaved, e !== null) {
		i = e;
		do l = i.lane, W.lanes |= l, Wt |= l, i = i.next; while (i !== e)
	} else i === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch]
}

function dl(e) {
	var t = Re(),
		n = t.queue;
	if (n === null) throw Error(S(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		i = n.pending,
		l = t.memoizedState;
	if (i !== null) {
		n.pending = null;
		var s = i = i.next;
		do l = e(l, s.action), s = s.next; while (s !== i);
		Ue(l, t.memoizedState) || (he = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l
	}
	return [l, r]
}

function tc() {}

function nc(e, t) {
	var n = W,
		r = Re(),
		i = t(),
		l = !Ue(r.memoizedState, i);
	if (l && (r.memoizedState = i, he = !0), r = r.queue, Gs(lc.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || q !== null && q.memoizedState.tag & 1) {
		if (n.flags |= 2048, dr(9, ic.bind(null, n, r, i, t), void 0, null), ee === null) throw Error(S(349));
		Kt & 30 || rc(n, t, i)
	}
	return i
}

function rc(e, t, n) {
	e.flags |= 16384, e = {
		getSnapshot: t,
		value: n
	}, t = W.updateQueue, t === null ? (t = {
		lastEffect: null,
		stores: null
	}, W.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function ic(e, t, n, r) {
	t.value = n, t.getSnapshot = r, sc(t) && oc(e)
}

function lc(e, t, n) {
	return n(function() {
		sc(t) && oc(e)
	})
}

function sc(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !Ue(e, n)
	} catch {
		return !0
	}
}

function oc(e) {
	var t = lt(e, 1);
	t !== null && Ae(t, e, 1, -1)
}

function Zo(e) {
	var t = Ke();
	return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
		pending: null,
		interleaved: null,
		lanes: 0,
		dispatch: null,
		lastRenderedReducer: fr,
		lastRenderedState: e
	}, t.queue = e, e = e.dispatch = ip.bind(null, W, e), [t.memoizedState, e]
}

function dr(e, t, n, r) {
	return e = {
		tag: e,
		create: t,
		destroy: n,
		deps: r,
		next: null
	}, t = W.updateQueue, t === null ? (t = {
		lastEffect: null,
		stores: null
	}, W.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function ac() {
	return Re().memoizedState
}

function Yr(e, t, n, r) {
	var i = Ke();
	W.flags |= e, i.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r)
}

function Ti(e, t, n, r) {
	var i = Re();
	r = r === void 0 ? null : r;
	var l = void 0;
	if (X !== null) {
		var s = X.memoizedState;
		if (l = s.destroy, r !== null && Qs(r, s.deps)) {
			i.memoizedState = dr(t, n, l, r);
			return
		}
	}
	W.flags |= e, i.memoizedState = dr(1 | t, n, l, r)
}

function bo(e, t) {
	return Yr(8390656, 8, e, t)
}

function Gs(e, t) {
	return Ti(2048, 8, e, t)
}

function uc(e, t) {
	return Ti(4, 2, e, t)
}

function cc(e, t) {
	return Ti(4, 4, e, t)
}

function fc(e, t) {
	if (typeof t == "function") return e = e(), t(e),
		function() {
			t(null)
		};
	if (t != null) return e = e(), t.current = e,
		function() {
			t.current = null
		}
}

function dc(e, t, n) {
	return n = n != null ? n.concat([e]) : null, Ti(4, 4, fc.bind(null, t, e), n)
}

function Xs() {}

function pc(e, t) {
	var n = Re();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Qs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function hc(e, t) {
	var n = Re();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Qs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function gc(e, t, n) {
	return Kt & 21 ? (Ue(n, t) || (n = wu(), W.lanes |= n, Wt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, he = !0), e.memoizedState = n)
}

function np(e, t) {
	var n = $;
	$ = n !== 0 && 4 > n ? n : 4, e(!0);
	var r = cl.transition;
	cl.transition = {};
	try {
		e(!1), t()
	} finally {
		$ = n, cl.transition = r
	}
}

function mc() {
	return Re().memoizedState
}

function rp(e, t, n) {
	var r = kt(e);
	if (n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, vc(e)) yc(t, n);
	else if (n = bu(e, t, n, r), n !== null) {
		var i = ce();
		Ae(n, e, r, i), xc(n, t, r)
	}
}

function ip(e, t, n) {
	var r = kt(e),
		i = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
	if (vc(e)) yc(t, i);
	else {
		var l = e.alternate;
		if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
			var s = t.lastRenderedState,
				o = l(s, n);
			if (i.hasEagerState = !0, i.eagerState = o, Ue(o, s)) {
				var a = t.interleaved;
				a === null ? (i.next = i, Vs(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
				return
			}
		} catch {} finally {}
		n = bu(e, t, i, r), n !== null && (i = ce(), Ae(n, e, r, i), xc(n, t, r))
	}
}

function vc(e) {
	var t = e.alternate;
	return e === W || t !== null && t === W
}

function yc(e, t) {
	Qn = gi = !0;
	var n = e.pending;
	n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function xc(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		r &= e.pendingLanes, n |= r, t.lanes = n, Ls(e, n)
	}
}
var mi = {
		readContext: Fe,
		useCallback: ie,
		useContext: ie,
		useEffect: ie,
		useImperativeHandle: ie,
		useInsertionEffect: ie,
		useLayoutEffect: ie,
		useMemo: ie,
		useReducer: ie,
		useRef: ie,
		useState: ie,
		useDebugValue: ie,
		useDeferredValue: ie,
		useTransition: ie,
		useMutableSource: ie,
		useSyncExternalStore: ie,
		useId: ie,
		unstable_isNewReconciler: !1
	},
	lp = {
		readContext: Fe,
		useCallback: function(e, t) {
			return Ke().memoizedState = [e, t === void 0 ? null : t], e
		},
		useContext: Fe,
		useEffect: bo,
		useImperativeHandle: function(e, t, n) {
			return n = n != null ? n.concat([e]) : null, Yr(4194308, 4, fc.bind(null, t, e), n)
		},
		useLayoutEffect: function(e, t) {
			return Yr(4194308, 4, e, t)
		},
		useInsertionEffect: function(e, t) {
			return Yr(4, 2, e, t)
		},
		useMemo: function(e, t) {
			var n = Ke();
			return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
		},
		useReducer: function(e, t, n) {
			var r = Ke();
			return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: t
			}, r.queue = e, e = e.dispatch = rp.bind(null, W, e), [r.memoizedState, e]
		},
		useRef: function(e) {
			var t = Ke();
			return e = {
				current: e
			}, t.memoizedState = e
		},
		useState: Zo,
		useDebugValue: Xs,
		useDeferredValue: function(e) {
			return Ke().memoizedState = e
		},
		useTransition: function() {
			var e = Zo(!1),
				t = e[0];
			return e = np.bind(null, e[1]), Ke().memoizedState = e, [t, e]
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(e, t, n) {
			var r = W,
				i = Ke();
			if (H) {
				if (n === void 0) throw Error(S(407));
				n = n()
			} else {
				if (n = t(), ee === null) throw Error(S(349));
				Kt & 30 || rc(r, t, n)
			}
			i.memoizedState = n;
			var l = {
				value: n,
				getSnapshot: t
			};
			return i.queue = l, bo(lc.bind(null, r, l, e), [e]), r.flags |= 2048, dr(9, ic.bind(null, r, l, n, t), void 0, null), n
		},
		useId: function() {
			var e = Ke(),
				t = ee.identifierPrefix;
			if (H) {
				var n = qe,
					r = be;
				n = (r & ~(1 << 32 - De(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = cr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
			} else n = tp++, t = ":" + t + "r" + n.toString(32) + ":";
			return e.memoizedState = t
		},
		unstable_isNewReconciler: !1
	},
	sp = {
		readContext: Fe,
		useCallback: pc,
		useContext: Fe,
		useEffect: Gs,
		useImperativeHandle: dc,
		useInsertionEffect: uc,
		useLayoutEffect: cc,
		useMemo: hc,
		useReducer: fl,
		useRef: ac,
		useState: function() {
			return fl(fr)
		},
		useDebugValue: Xs,
		useDeferredValue: function(e) {
			var t = Re();
			return gc(t, X.memoizedState, e)
		},
		useTransition: function() {
			var e = fl(fr)[0],
				t = Re().memoizedState;
			return [e, t]
		},
		useMutableSource: tc,
		useSyncExternalStore: nc,
		useId: mc,
		unstable_isNewReconciler: !1
	},
	op = {
		readContext: Fe,
		useCallback: pc,
		useContext: Fe,
		useEffect: Gs,
		useImperativeHandle: dc,
		useInsertionEffect: uc,
		useLayoutEffect: cc,
		useMemo: hc,
		useReducer: dl,
		useRef: ac,
		useState: function() {
			return dl(fr)
		},
		useDebugValue: Xs,
		useDeferredValue: function(e) {
			var t = Re();
			return X === null ? t.memoizedState = e : gc(t, X.memoizedState, e)
		},
		useTransition: function() {
			var e = dl(fr)[0],
				t = Re().memoizedState;
			return [e, t]
		},
		useMutableSource: tc,
		useSyncExternalStore: nc,
		useId: mc,
		unstable_isNewReconciler: !1
	};

function Ie(e, t) {
	if (e && e.defaultProps) {
		t = Q({}, t), e = e.defaultProps;
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t
	}
	return t
}

function Xl(e, t, n, r) {
	t = e.memoizedState, n = n(r, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ii = {
	isMounted: function(e) {
		return (e = e._reactInternals) ? Jt(e) === e : !1
	},
	enqueueSetState: function(e, t, n) {
		e = e._reactInternals;
		var r = ce(),
			i = kt(e),
			l = tt(r, i);
		l.payload = t, n != null && (l.callback = n), t = wt(e, l, i), t !== null && (Ae(t, e, i, r), Wr(t, e, i))
	},
	enqueueReplaceState: function(e, t, n) {
		e = e._reactInternals;
		var r = ce(),
			i = kt(e),
			l = tt(r, i);
		l.tag = 1, l.payload = t, n != null && (l.callback = n), t = wt(e, l, i), t !== null && (Ae(t, e, i, r), Wr(t, e, i))
	},
	enqueueForceUpdate: function(e, t) {
		e = e._reactInternals;
		var n = ce(),
			r = kt(e),
			i = tt(n, r);
		i.tag = 2, t != null && (i.callback = t), t = wt(e, i, r), t !== null && (Ae(t, e, r, n), Wr(t, e, r))
	}
};

function qo(e, t, n, r, i, l, s) {
	return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, s) : t.prototype && t.prototype.isPureReactComponent ? !ir(n, r) || !ir(i, l) : !0
}

function wc(e, t, n) {
	var r = !1,
		i = Et,
		l = t.contextType;
	return typeof l == "object" && l !== null ? l = Fe(l) : (i = me(t) ? Bt : oe.current, r = t.contextTypes, l = (r = r != null) ? xn(e, i) : Et), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ii, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = l), t
}

function ea(e, t, n, r) {
	e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ii.enqueueReplaceState(t, t.state, null)
}

function Zl(e, t, n, r) {
	var i = e.stateNode;
	i.props = n, i.state = e.memoizedState, i.refs = {}, Bs(e);
	var l = t.contextType;
	typeof l == "object" && l !== null ? i.context = Fe(l) : (l = me(t) ? Bt : oe.current, i.context = xn(e, l)), i.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Xl(e, t, l, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ii.enqueueReplaceState(i, i.state, null), pi(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function Nn(e, t) {
	try {
		var n = "",
			r = t;
		do n += If(r), r = r.return; while (r);
		var i = n
	} catch (l) {
		i = `
Error generating stack: ` + l.message + `
` + l.stack
	}
	return {
		value: e,
		source: t,
		stack: i,
		digest: null
	}
}

function pl(e, t, n) {
	return {
		value: e,
		source: null,
		stack: n ?? null,
		digest: t ?? null
	}
}

function bl(e, t) {
	try {
		console.error(t.value)
	} catch (n) {
		setTimeout(function() {
			throw n
		})
	}
}
var ap = typeof WeakMap == "function" ? WeakMap : Map;

function Sc(e, t, n) {
	n = tt(-1, n), n.tag = 3, n.payload = {
		element: null
	};
	var r = t.value;
	return n.callback = function() {
		yi || (yi = !0, as = r), bl(e, t)
	}, n
}

function kc(e, t, n) {
	n = tt(-1, n), n.tag = 3;
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var i = t.value;
		n.payload = function() {
			return r(i)
		}, n.callback = function() {
			bl(e, t)
		}
	}
	var l = e.stateNode;
	return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
		bl(e, t), typeof r != "function" && (St === null ? St = new Set([this]) : St.add(this));
		var s = t.stack;
		this.componentDidCatch(t.value, {
			componentStack: s !== null ? s : ""
		})
	}), n
}

function ta(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new ap;
		var i = new Set;
		r.set(t, i)
	} else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
	i.has(n) || (i.add(n), e = kp.bind(null, e, t, n), t.then(e, e))
}

function na(e) {
	do {
		var t;
		if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
		e = e.return
	} while (e !== null);
	return null
}

function ra(e, t, n, r, i) {
	return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = tt(-1, 1), t.tag = 2, wt(n, t, 1))), n.lanes |= 1), e)
}
var up = ot.ReactCurrentOwner,
	he = !1;

function ue(e, t, n, r) {
	t.child = e === null ? Zu(t, null, n, r) : Sn(t, e.child, n, r)
}

function ia(e, t, n, r, i) {
	n = n.render;
	var l = t.ref;
	return mn(t, i), r = Ys(e, t, n, r, l, i), n = Js(), e !== null && !he ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, st(e, t, i)) : (H && n && Is(t), t.flags |= 1, ue(e, t, r, i), t.child)
}

function la(e, t, n, r, i) {
	if (e === null) {
		var l = n.type;
		return typeof l == "function" && !io(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Nc(e, t, l, r, i)) : (e = Zr(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
	}
	if (l = e.child, !(e.lanes & i)) {
		var s = l.memoizedProps;
		if (n = n.compare, n = n !== null ? n : ir, n(s, r) && e.ref === t.ref) return st(e, t, i)
	}
	return t.flags |= 1, e = Nt(l, r), e.ref = t.ref, e.return = t, t.child = e
}

function Nc(e, t, n, r, i) {
	if (e !== null) {
		var l = e.memoizedProps;
		if (ir(l, r) && e.ref === t.ref)
			if (he = !1, t.pendingProps = r = l, (e.lanes & i) !== 0) e.flags & 131072 && (he = !0);
			else return t.lanes = e.lanes, st(e, t, i)
	}
	return ql(e, t, n, r, i)
}

function Cc(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		l = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1)) t.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, D(fn, xe), xe |= n;
		else {
			if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
				baseLanes: e,
				cachePool: null,
				transitions: null
			}, t.updateQueue = null, D(fn, xe), xe |= e, null;
			t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, r = l !== null ? l.baseLanes : n, D(fn, xe), xe |= r
		}
	else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, D(fn, xe), xe |= r;
	return ue(e, t, i, n), t.child
}

function jc(e, t) {
	var n = t.ref;
	(e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function ql(e, t, n, r, i) {
	var l = me(n) ? Bt : oe.current;
	return l = xn(t, l), mn(t, i), n = Ys(e, t, n, r, l, i), r = Js(), e !== null && !he ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, st(e, t, i)) : (H && r && Is(t), t.flags |= 1, ue(e, t, n, i), t.child)
}

function sa(e, t, n, r, i) {
	if (me(n)) {
		var l = !0;
		ai(t)
	} else l = !1;
	if (mn(t, i), t.stateNode === null) Jr(e, t), wc(t, n, r), Zl(t, n, r, i), r = !0;
	else if (e === null) {
		var s = t.stateNode,
			o = t.memoizedProps;
		s.props = o;
		var a = s.context,
			u = n.contextType;
		typeof u == "object" && u !== null ? u = Fe(u) : (u = me(n) ? Bt : oe.current, u = xn(t, u));
		var p = n.getDerivedStateFromProps,
			g = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function";
		g || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== r || a !== u) && ea(t, s, r, u), ft = !1;
		var f = t.memoizedState;
		s.state = f, pi(t, r, s, i), a = t.memoizedState, o !== r || f !== a || ge.current || ft ? (typeof p == "function" && (Xl(t, n, p, r), a = t.memoizedState), (o = ft || qo(t, n, o, r, f, a, u)) ? (g || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = o) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
	} else {
		s = t.stateNode, qu(e, t), o = t.memoizedProps, u = t.type === t.elementType ? o : Ie(t.type, o), s.props = u, g = t.pendingProps, f = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = Fe(a) : (a = me(n) ? Bt : oe.current, a = xn(t, a));
		var v = n.getDerivedStateFromProps;
		(p = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== g || f !== a) && ea(t, s, r, a), ft = !1, f = t.memoizedState, s.state = f, pi(t, r, s, i);
		var x = t.memoizedState;
		o !== g || f !== x || ge.current || ft ? (typeof v == "function" && (Xl(t, n, v, r), x = t.memoizedState), (u = ft || qo(t, n, u, r, f, x, a) || !1) ? (p || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), s.props = r, s.state = x, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
	}
	return es(e, t, n, r, l, i)
}

function es(e, t, n, r, i, l) {
	jc(e, t);
	var s = (t.flags & 128) !== 0;
	if (!r && !s) return i && Wo(t, n, !1), st(e, t, l);
	r = t.stateNode, up.current = t;
	var o = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return t.flags |= 1, e !== null && s ? (t.child = Sn(t, e.child, null, l), t.child = Sn(t, null, o, l)) : ue(e, t, o, l), t.memoizedState = r.state, i && Wo(t, n, !0), t.child
}

function Ec(e) {
	var t = e.stateNode;
	t.pendingContext ? Ko(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ko(e, t.context, !1), Hs(e, t.containerInfo)
}

function oa(e, t, n, r, i) {
	return wn(), $s(i), t.flags |= 256, ue(e, t, n, r), t.child
}
var ts = {
	dehydrated: null,
	treeContext: null,
	retryLane: 0
};

function ns(e) {
	return {
		baseLanes: e,
		cachePool: null,
		transitions: null
	}
}

function Lc(e, t, n) {
	var r = t.pendingProps,
		i = K.current,
		l = !1,
		s = (t.flags & 128) !== 0,
		o;
	if ((o = s) || (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), o ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), D(K, i & 1), e === null) return Jl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, s = {
		mode: "hidden",
		children: s
	}, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = s) : l = Di(s, r, 0, null), e = Ut(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = ns(n), t.memoizedState = ts, e) : Zs(t, s));
	if (i = e.memoizedState, i !== null && (o = i.dehydrated, o !== null)) return cp(e, t, s, r, o, i, n);
	if (l) {
		l = r.fallback, s = t.mode, i = e.child, o = i.sibling;
		var a = {
			mode: "hidden",
			children: r.children
		};
		return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Nt(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), o !== null ? l = Nt(o, l) : (l = Ut(l, s, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, s = e.child.memoizedState, s = s === null ? ns(n) : {
			baseLanes: s.baseLanes | n,
			cachePool: null,
			transitions: s.transitions
		}, l.memoizedState = s, l.childLanes = e.childLanes & ~n, t.memoizedState = ts, r
	}
	return l = e.child, e = l.sibling, r = Nt(l, {
		mode: "visible",
		children: r.children
	}), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Zs(e, t) {
	return t = Di({
		mode: "visible",
		children: t
	}, e.mode, 0, null), t.return = e, e.child = t
}

function Ir(e, t, n, r) {
	return r !== null && $s(r), Sn(t, e.child, null, n), e = Zs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function cp(e, t, n, r, i, l, s) {
	if (n) return t.flags & 256 ? (t.flags &= -257, r = pl(Error(S(422))), Ir(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, i = t.mode, r = Di({
		mode: "visible",
		children: r.children
	}, i, 0, null), l = Ut(l, i, s, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && Sn(t, e.child, null, s), t.child.memoizedState = ns(s), t.memoizedState = ts, l);
	if (!(t.mode & 1)) return Ir(e, t, s, null);
	if (i.data === "$!") {
		if (r = i.nextSibling && i.nextSibling.dataset, r) var o = r.dgst;
		return r = o, l = Error(S(419)), r = pl(l, r, void 0), Ir(e, t, s, r)
	}
	if (o = (s & e.childLanes) !== 0, he || o) {
		if (r = ee, r !== null) {
			switch (s & -s) {
				case 4:
					i = 2;
					break;
				case 16:
					i = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					i = 32;
					break;
				case 536870912:
					i = 268435456;
					break;
				default:
					i = 0
			}
			i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== l.retryLane && (l.retryLane = i, lt(e, i), Ae(r, e, i, -1))
		}
		return ro(), r = pl(Error(S(421))), Ir(e, t, s, r)
	}
	return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Np.bind(null, e), i._reactRetry = t, null) : (e = l.treeContext, we = xt(i.nextSibling), Se = t, H = !0, $e = null, e !== null && (Ee[Le++] = be, Ee[Le++] = qe, Ee[Le++] = Ht, be = e.id, qe = e.overflow, Ht = t), t = Zs(t, r.children), t.flags |= 4096, t)
}

function aa(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), Gl(e.return, t, n)
}

function hl(e, t, n, r, i) {
	var l = e.memoizedState;
	l === null ? e.memoizedState = {
		isBackwards: t,
		rendering: null,
		renderingStartTime: 0,
		last: r,
		tail: n,
		tailMode: i
	} : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = i)
}

function Pc(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		l = r.tail;
	if (ue(e, t, r.children, n), r = K.current, r & 2) r = r & 1 | 2, t.flags |= 128;
	else {
		if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && aa(e, n, t);
			else if (e.tag === 19) aa(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue
			}
			if (e === t) break e;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break e;
				e = e.return
			}
			e.sibling.return = e.return, e = e.sibling
		}
		r &= 1
	}
	if (D(K, r), !(t.mode & 1)) t.memoizedState = null;
	else switch (i) {
		case "forwards":
			for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && hi(e) === null && (i = n), n = n.sibling;
			n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), hl(t, !1, i, n, l);
			break;
		case "backwards":
			for (n = null, i = t.child, t.child = null; i !== null;) {
				if (e = i.alternate, e !== null && hi(e) === null) {
					t.child = i;
					break
				}
				e = i.sibling, i.sibling = n, n = i, i = e
			}
			hl(t, !0, n, null, l);
			break;
		case "together":
			hl(t, !1, null, null, void 0);
			break;
		default:
			t.memoizedState = null
	}
	return t.child
}

function Jr(e, t) {
	!(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function st(e, t, n) {
	if (e !== null && (t.dependencies = e.dependencies), Wt |= t.lanes, !(n & t.childLanes)) return null;
	if (e !== null && t.child !== e.child) throw Error(S(153));
	if (t.child !== null) {
		for (e = t.child, n = Nt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Nt(e, e.pendingProps), n.return = t;
		n.sibling = null
	}
	return t.child
}

function fp(e, t, n) {
	switch (t.tag) {
		case 3:
			Ec(t), wn();
			break;
		case 5:
			ec(t);
			break;
		case 1:
			me(t.type) && ai(t);
			break;
		case 4:
			Hs(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value;
			D(fi, r._currentValue), r._currentValue = i;
			break;
		case 13:
			if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (D(K, K.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Lc(e, t, n) : (D(K, K.current & 1), e = st(e, t, n), e !== null ? e.sibling : null);
			D(K, K.current & 1);
			break;
		case 19:
			if (r = (n & t.childLanes) !== 0, e.flags & 128) {
				if (r) return Pc(e, t, n);
				t.flags |= 128
			}
			if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), D(K, K.current), r) break;
			return null;
		case 22:
		case 23:
			return t.lanes = 0, Cc(e, t, n)
	}
	return st(e, t, n)
}
var Oc, rs, Fc, Rc;
Oc = function(e, t) {
	for (var n = t.child; n !== null;) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			n.child.return = n, n = n.child;
			continue
		}
		if (n === t) break;
		for (; n.sibling === null;) {
			if (n.return === null || n.return === t) return;
			n = n.return
		}
		n.sibling.return = n.return, n = n.sibling
	}
};
rs = function() {};
Fc = function(e, t, n, r) {
	var i = e.memoizedProps;
	if (i !== r) {
		e = t.stateNode, Dt(Je.current);
		var l = null;
		switch (n) {
			case "input":
				i = jl(e, i), r = jl(e, r), l = [];
				break;
			case "select":
				i = Q({}, i, {
					value: void 0
				}), r = Q({}, r, {
					value: void 0
				}), l = [];
				break;
			case "textarea":
				i = Pl(e, i), r = Pl(e, r), l = [];
				break;
			default:
				typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = si)
		}
		Fl(n, r);
		var s;
		n = null;
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === "style") {
					var o = i[u];
					for (s in o) o.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
				} else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Zn.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
		for (u in r) {
			var a = r[u];
			if (o = i != null ? i[u] : void 0, r.hasOwnProperty(u) && a !== o && (a != null || o != null))
				if (u === "style")
					if (o) {
						for (s in o) !o.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
						for (s in a) a.hasOwnProperty(s) && o[s] !== a[s] && (n || (n = {}), n[s] = a[s])
					} else n || (l || (l = []), l.push(u, n)), n = a;
			else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, o = o ? o.__html : void 0, a != null && o !== a && (l = l || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (l = l || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Zn.hasOwnProperty(u) ? (a != null && u === "onScroll" && U("scroll", e), l || o === a || (l = [])) : (l = l || []).push(u, a))
		}
		n && (l = l || []).push("style", n);
		var u = l;
		(t.updateQueue = u) && (t.flags |= 4)
	}
};
Rc = function(e, t, n, r) {
	n !== r && (t.flags |= 4)
};

function Tn(e, t) {
	if (!H) switch (e.tailMode) {
		case "hidden":
			t = e.tail;
			for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
			n === null ? e.tail = null : n.sibling = null;
			break;
		case "collapsed":
			n = e.tail;
			for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
			r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
	}
}

function le(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
	else
		for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
	return e.subtreeFlags |= r, e.childLanes = n, t
}

function dp(e, t, n) {
	var r = t.pendingProps;
	switch (Ms(t), t.tag) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return le(t), null;
		case 1:
			return me(t.type) && oi(), le(t), null;
		case 3:
			return r = t.stateNode, kn(), V(ge), V(oe), Ws(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (_r(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, $e !== null && (fs($e), $e = null))), rs(e, t), le(t), null;
		case 5:
			Ks(t);
			var i = Dt(ur.current);
			if (n = t.type, e !== null && t.stateNode != null) Fc(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(S(166));
					return le(t), null
				}
				if (e = Dt(Je.current), _r(t)) {
					r = t.stateNode, n = t.type;
					var l = t.memoizedProps;
					switch (r[We] = t, r[or] = l, e = (t.mode & 1) !== 0, n) {
						case "dialog":
							U("cancel", r), U("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							U("load", r);
							break;
						case "video":
						case "audio":
							for (i = 0; i < Un.length; i++) U(Un[i], r);
							break;
						case "source":
							U("error", r);
							break;
						case "img":
						case "image":
						case "link":
							U("error", r), U("load", r);
							break;
						case "details":
							U("toggle", r);
							break;
						case "input":
							vo(r, l), U("invalid", r);
							break;
						case "select":
							r._wrapperState = {
								wasMultiple: !!l.multiple
							}, U("invalid", r);
							break;
						case "textarea":
							xo(r, l), U("invalid", r)
					}
					Fl(n, l), i = null;
					for (var s in l)
						if (l.hasOwnProperty(s)) {
							var o = l[s];
							s === "children" ? typeof o == "string" ? r.textContent !== o && (l.suppressHydrationWarning !== !0 && zr(r.textContent, o, e), i = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (l.suppressHydrationWarning !== !0 && zr(r.textContent, o, e), i = ["children", "" + o]) : Zn.hasOwnProperty(s) && o != null && s === "onScroll" && U("scroll", r)
						} switch (n) {
						case "input":
							Cr(r), yo(r, l, !0);
							break;
						case "textarea":
							Cr(r), wo(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof l.onClick == "function" && (r.onclick = si)
					}
					r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
				} else {
					s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = lu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
						is: r.is
					}) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[We] = t, e[or] = r, Oc(e, t, !1, !1), t.stateNode = e;
					e: {
						switch (s = Rl(n, r), n) {
							case "dialog":
								U("cancel", e), U("close", e), i = r;
								break;
							case "iframe":
							case "object":
							case "embed":
								U("load", e), i = r;
								break;
							case "video":
							case "audio":
								for (i = 0; i < Un.length; i++) U(Un[i], e);
								i = r;
								break;
							case "source":
								U("error", e), i = r;
								break;
							case "img":
							case "image":
							case "link":
								U("error", e), U("load", e), i = r;
								break;
							case "details":
								U("toggle", e), i = r;
								break;
							case "input":
								vo(e, r), i = jl(e, r), U("invalid", e);
								break;
							case "option":
								i = r;
								break;
							case "select":
								e._wrapperState = {
									wasMultiple: !!r.multiple
								}, i = Q({}, r, {
									value: void 0
								}), U("invalid", e);
								break;
							case "textarea":
								xo(e, r), i = Pl(e, r), U("invalid", e);
								break;
							default:
								i = r
						}
						Fl(n, i),
						o = i;
						for (l in o)
							if (o.hasOwnProperty(l)) {
								var a = o[l];
								l === "style" ? au(e, a) : l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && su(e, a)) : l === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && bn(e, a) : typeof a == "number" && bn(e, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Zn.hasOwnProperty(l) ? a != null && l === "onScroll" && U("scroll", e) : a != null && Ss(e, l, a, s))
							} switch (n) {
							case "input":
								Cr(e), yo(e, r, !1);
								break;
							case "textarea":
								Cr(e), wo(e);
								break;
							case "option":
								r.value != null && e.setAttribute("value", "" + jt(r.value));
								break;
							case "select":
								e.multiple = !!r.multiple, l = r.value, l != null ? dn(e, !!r.multiple, l, !1) : r.defaultValue != null && dn(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof i.onClick == "function" && (e.onclick = si)
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break e;
							case "img":
								r = !0;
								break e;
							default:
								r = !1
						}
					}
					r && (t.flags |= 4)
				}
				t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
			}
			return le(t), null;
		case 6:
			if (e && t.stateNode != null) Rc(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
				if (n = Dt(ur.current), Dt(Je.current), _r(t)) {
					if (r = t.stateNode, n = t.memoizedProps, r[We] = t, (l = r.nodeValue !== n) && (e = Se, e !== null)) switch (e.tag) {
						case 3:
							zr(r.nodeValue, n, (e.mode & 1) !== 0);
							break;
						case 5:
							e.memoizedProps.suppressHydrationWarning !== !0 && zr(r.nodeValue, n, (e.mode & 1) !== 0)
					}
					l && (t.flags |= 4)
				} else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[We] = t, t.stateNode = r
			}
			return le(t), null;
		case 13:
			if (V(K), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
				if (H && we !== null && t.mode & 1 && !(t.flags & 128)) Gu(), wn(), t.flags |= 98560, l = !1;
				else if (l = _r(t), r !== null && r.dehydrated !== null) {
					if (e === null) {
						if (!l) throw Error(S(318));
						if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(317));
						l[We] = t
					} else wn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
					le(t), l = !1
				} else $e !== null && (fs($e), $e = null), l = !0;
				if (!l) return t.flags & 65536 ? t : null
			}
			return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || K.current & 1 ? Z === 0 && (Z = 3) : ro())), t.updateQueue !== null && (t.flags |= 4), le(t), null);
		case 4:
			return kn(), rs(e, t), e === null && lr(t.stateNode.containerInfo), le(t), null;
		case 10:
			return Us(t.type._context), le(t), null;
		case 17:
			return me(t.type) && oi(), le(t), null;
		case 19:
			if (V(K), l = t.memoizedState, l === null) return le(t), null;
			if (r = (t.flags & 128) !== 0, s = l.rendering, s === null)
				if (r) Tn(l, !1);
				else {
					if (Z !== 0 || e !== null && e.flags & 128)
						for (e = t.child; e !== null;) {
							if (s = hi(e), s !== null) {
								for (t.flags |= 128, Tn(l, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) l = n, e = r, l.flags &= 14680066, s = l.alternate, s === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = s.childLanes, l.lanes = s.lanes, l.child = s.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = s.memoizedProps, l.memoizedState = s.memoizedState, l.updateQueue = s.updateQueue, l.type = s.type, e = s.dependencies, l.dependencies = e === null ? null : {
									lanes: e.lanes,
									firstContext: e.firstContext
								}), n = n.sibling;
								return D(K, K.current & 1 | 2), t.child
							}
							e = e.sibling
						}
					l.tail !== null && J() > Cn && (t.flags |= 128, r = !0, Tn(l, !1), t.lanes = 4194304)
				}
			else {
				if (!r)
					if (e = hi(s), e !== null) {
						if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Tn(l, !0), l.tail === null && l.tailMode === "hidden" && !s.alternate && !H) return le(t), null
					} else 2 * J() - l.renderingStartTime > Cn && n !== 1073741824 && (t.flags |= 128, r = !0, Tn(l, !1), t.lanes = 4194304);
				l.isBackwards ? (s.sibling = t.child, t.child = s) : (n = l.last, n !== null ? n.sibling = s : t.child = s, l.last = s)
			}
			return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = J(), t.sibling = null, n = K.current, D(K, r ? n & 1 | 2 : n & 1), t) : (le(t), null);
		case 22:
		case 23:
			return no(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? xe & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : le(t), null;
		case 24:
			return null;
		case 25:
			return null
	}
	throw Error(S(156, t.tag))
}

function pp(e, t) {
	switch (Ms(t), t.tag) {
		case 1:
			return me(t.type) && oi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
		case 3:
			return kn(), V(ge), V(oe), Ws(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
		case 5:
			return Ks(t), null;
		case 13:
			if (V(K), e = t.memoizedState, e !== null && e.dehydrated !== null) {
				if (t.alternate === null) throw Error(S(340));
				wn()
			}
			return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
		case 19:
			return V(K), null;
		case 4:
			return kn(), null;
		case 10:
			return Us(t.type._context), null;
		case 22:
		case 23:
			return no(), null;
		case 24:
			return null;
		default:
			return null
	}
}
var Mr = !1,
	se = !1,
	hp = typeof WeakSet == "function" ? WeakSet : Set,
	E = null;

function cn(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function") try {
			n(null)
		} catch (r) {
			Y(e, t, r)
		} else n.current = null
}

function is(e, t, n) {
	try {
		n()
	} catch (r) {
		Y(e, t, r)
	}
}
var ua = !1;

function gp(e, t) {
	if (Vl = ri, e = Mu(), Ts(e)) {
		if ("selectionStart" in e) var n = {
			start: e.selectionStart,
			end: e.selectionEnd
		};
		else e: {
			n = (n = e.ownerDocument) && n.defaultView || window;
			var r = n.getSelection && n.getSelection();
			if (r && r.rangeCount !== 0) {
				n = r.anchorNode;
				var i = r.anchorOffset,
					l = r.focusNode;
				r = r.focusOffset;
				try {
					n.nodeType, l.nodeType
				} catch {
					n = null;
					break e
				}
				var s = 0,
					o = -1,
					a = -1,
					u = 0,
					p = 0,
					g = e,
					f = null;
				t: for (;;) {
					for (var v; g !== n || i !== 0 && g.nodeType !== 3 || (o = s + i), g !== l || r !== 0 && g.nodeType !== 3 || (a = s + r), g.nodeType === 3 && (s += g.nodeValue.length), (v = g.firstChild) !== null;) f = g, g = v;
					for (;;) {
						if (g === e) break t;
						if (f === n && ++u === i && (o = s), f === l && ++p === r && (a = s), (v = g.nextSibling) !== null) break;
						g = f, f = g.parentNode
					}
					g = v
				}
				n = o === -1 || a === -1 ? null : {
					start: o,
					end: a
				}
			} else n = null
		}
		n = n || {
			start: 0,
			end: 0
		}
	} else n = null;
	for (Bl = {
			focusedElem: e,
			selectionRange: n
		}, ri = !1, E = t; E !== null;)
		if (t = E, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, E = e;
		else
			for (; E !== null;) {
				t = E;
				try {
					var x = t.alternate;
					if (t.flags & 1024) switch (t.tag) {
						case 0:
						case 11:
						case 15:
							break;
						case 1:
							if (x !== null) {
								var w = x.memoizedProps,
									P = x.memoizedState,
									h = t.stateNode,
									d = h.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Ie(t.type, w), P);
								h.__reactInternalSnapshotBeforeUpdate = d
							}
							break;
						case 3:
							var m = t.stateNode.containerInfo;
							m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
							break;
						case 5:
						case 6:
						case 4:
						case 17:
							break;
						default:
							throw Error(S(163))
					}
				} catch (y) {
					Y(t, t.return, y)
				}
				if (e = t.sibling, e !== null) {
					e.return = t.return, E = e;
					break
				}
				E = t.return
			}
	return x = ua, ua = !1, x
}

function Yn(e, t, n) {
	var r = t.updateQueue;
	if (r = r !== null ? r.lastEffect : null, r !== null) {
		var i = r = r.next;
		do {
			if ((i.tag & e) === e) {
				var l = i.destroy;
				i.destroy = void 0, l !== void 0 && is(t, n, l)
			}
			i = i.next
		} while (i !== r)
	}
}

function Mi(e, t) {
	if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
		var n = t = t.next;
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r()
			}
			n = n.next
		} while (n !== t)
	}
}

function ls(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n
		}
		typeof t == "function" ? t(e) : t.current = e
	}
}

function zc(e) {
	var t = e.alternate;
	t !== null && (e.alternate = null, zc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[We], delete t[or], delete t[Wl], delete t[Zd], delete t[bd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function _c(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function ca(e) {
	e: for (;;) {
		for (; e.sibling === null;) {
			if (e.return === null || _c(e.return)) return null;
			e = e.return
		}
		for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			e.child.return = e, e = e.child
		}
		if (!(e.flags & 2)) return e.stateNode
	}
}

function ss(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = si));
	else if (r !== 4 && (e = e.child, e !== null))
		for (ss(e, t, n), e = e.sibling; e !== null;) ss(e, t, n), e = e.sibling
}

function os(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && (e = e.child, e !== null))
		for (os(e, t, n), e = e.sibling; e !== null;) os(e, t, n), e = e.sibling
}
var te = null,
	Me = !1;

function ut(e, t, n) {
	for (n = n.child; n !== null;) Tc(e, t, n), n = n.sibling
}

function Tc(e, t, n) {
	if (Ye && typeof Ye.onCommitFiberUnmount == "function") try {
		Ye.onCommitFiberUnmount(Pi, n)
	} catch {}
	switch (n.tag) {
		case 5:
			se || cn(n, t);
		case 6:
			var r = te,
				i = Me;
			te = null, ut(e, t, n), te = r, Me = i, te !== null && (Me ? (e = te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : te.removeChild(n.stateNode));
			break;
		case 18:
			te !== null && (Me ? (e = te, n = n.stateNode, e.nodeType === 8 ? ol(e.parentNode, n) : e.nodeType === 1 && ol(e, n), nr(e)) : ol(te, n.stateNode));
			break;
		case 4:
			r = te, i = Me, te = n.stateNode.containerInfo, Me = !0, ut(e, t, n), te = r, Me = i;
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (!se && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
				i = r = r.next;
				do {
					var l = i,
						s = l.destroy;
					l = l.tag, s !== void 0 && (l & 2 || l & 4) && is(n, t, s), i = i.next
				} while (i !== r)
			}
			ut(e, t, n);
			break;
		case 1:
			if (!se && (cn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
				r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
			} catch (o) {
				Y(n, t, o)
			}
			ut(e, t, n);
			break;
		case 21:
			ut(e, t, n);
			break;
		case 22:
			n.mode & 1 ? (se = (r = se) || n.memoizedState !== null, ut(e, t, n), se = r) : ut(e, t, n);
			break;
		default:
			ut(e, t, n)
	}
}

function fa(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new hp), t.forEach(function(r) {
			var i = Cp.bind(null, e, r);
			n.has(r) || (n.add(r), r.then(i, i))
		})
	}
}

function Te(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			try {
				var l = e,
					s = t,
					o = s;
				e: for (; o !== null;) {
					switch (o.tag) {
						case 5:
							te = o.stateNode, Me = !1;
							break e;
						case 3:
							te = o.stateNode.containerInfo, Me = !0;
							break e;
						case 4:
							te = o.stateNode.containerInfo, Me = !0;
							break e
					}
					o = o.return
				}
				if (te === null) throw Error(S(160));
				Tc(l, s, i), te = null, Me = !1;
				var a = i.alternate;
				a !== null && (a.return = null), i.return = null
			} catch (u) {
				Y(i, t, u)
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null;) Ic(t, e), t = t.sibling
}

function Ic(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if (Te(t, e), He(e), r & 4) {
				try {
					Yn(3, e, e.return), Mi(3, e)
				} catch (w) {
					Y(e, e.return, w)
				}
				try {
					Yn(5, e, e.return)
				} catch (w) {
					Y(e, e.return, w)
				}
			}
			break;
		case 1:
			Te(t, e), He(e), r & 512 && n !== null && cn(n, n.return);
			break;
		case 5:
			if (Te(t, e), He(e), r & 512 && n !== null && cn(n, n.return), e.flags & 32) {
				var i = e.stateNode;
				try {
					bn(i, "")
				} catch (w) {
					Y(e, e.return, w)
				}
			}
			if (r & 4 && (i = e.stateNode, i != null)) {
				var l = e.memoizedProps,
					s = n !== null ? n.memoizedProps : l,
					o = e.type,
					a = e.updateQueue;
				if (e.updateQueue = null, a !== null) try {
					o === "input" && l.type === "radio" && l.name != null && ru(i, l), Rl(o, s);
					var u = Rl(o, l);
					for (s = 0; s < a.length; s += 2) {
						var p = a[s],
							g = a[s + 1];
						p === "style" ? au(i, g) : p === "dangerouslySetInnerHTML" ? su(i, g) : p === "children" ? bn(i, g) : Ss(i, p, g, u)
					}
					switch (o) {
						case "input":
							El(i, l);
							break;
						case "textarea":
							iu(i, l);
							break;
						case "select":
							var f = i._wrapperState.wasMultiple;
							i._wrapperState.wasMultiple = !!l.multiple;
							var v = l.value;
							v != null ? dn(i, !!l.multiple, v, !1) : f !== !!l.multiple && (l.defaultValue != null ? dn(i, !!l.multiple, l.defaultValue, !0) : dn(i, !!l.multiple, l.multiple ? [] : "", !1))
					}
					i[or] = l
				} catch (w) {
					Y(e, e.return, w)
				}
			}
			break;
		case 6:
			if (Te(t, e), He(e), r & 4) {
				if (e.stateNode === null) throw Error(S(162));
				i = e.stateNode, l = e.memoizedProps;
				try {
					i.nodeValue = l
				} catch (w) {
					Y(e, e.return, w)
				}
			}
			break;
		case 3:
			if (Te(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
				nr(t.containerInfo)
			} catch (w) {
				Y(e, e.return, w)
			}
			break;
		case 4:
			Te(t, e), He(e);
			break;
		case 13:
			Te(t, e), He(e), i = e.child, i.flags & 8192 && (l = i.memoizedState !== null, i.stateNode.isHidden = l, !l || i.alternate !== null && i.alternate.memoizedState !== null || (eo = J())), r & 4 && fa(e);
			break;
		case 22:
			if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (se = (u = se) || p, Te(t, e), se = u) : Te(t, e), He(e), r & 8192) {
				if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !p && e.mode & 1)
					for (E = e, p = e.child; p !== null;) {
						for (g = E = p; E !== null;) {
							switch (f = E, v = f.child, f.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									Yn(4, f, f.return);
									break;
								case 1:
									cn(f, f.return);
									var x = f.stateNode;
									if (typeof x.componentWillUnmount == "function") {
										r = f, n = f.return;
										try {
											t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount()
										} catch (w) {
											Y(r, n, w)
										}
									}
									break;
								case 5:
									cn(f, f.return);
									break;
								case 22:
									if (f.memoizedState !== null) {
										pa(g);
										continue
									}
							}
							v !== null ? (v.return = f, E = v) : pa(g)
						}
						p = p.sibling
					}
				e: for (p = null, g = e;;) {
					if (g.tag === 5) {
						if (p === null) {
							p = g;
							try {
								i = g.stateNode, u ? (l = i.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (o = g.stateNode, a = g.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, o.style.display = ou("display", s))
							} catch (w) {
								Y(e, e.return, w)
							}
						}
					} else if (g.tag === 6) {
						if (p === null) try {
							g.stateNode.nodeValue = u ? "" : g.memoizedProps
						} catch (w) {
							Y(e, e.return, w)
						}
					} else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
						g.child.return = g, g = g.child;
						continue
					}
					if (g === e) break e;
					for (; g.sibling === null;) {
						if (g.return === null || g.return === e) break e;
						p === g && (p = null), g = g.return
					}
					p === g && (p = null), g.sibling.return = g.return, g = g.sibling
				}
			}
			break;
		case 19:
			Te(t, e), He(e), r & 4 && fa(e);
			break;
		case 21:
			break;
		default:
			Te(t, e), He(e)
	}
}

function He(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null;) {
					if (_c(n)) {
						var r = n;
						break e
					}
					n = n.return
				}
				throw Error(S(160))
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (bn(i, ""), r.flags &= -33);
					var l = ca(e);
					os(e, l, i);
					break;
				case 3:
				case 4:
					var s = r.stateNode.containerInfo,
						o = ca(e);
					ss(e, o, s);
					break;
				default:
					throw Error(S(161))
			}
		}
		catch (a) {
			Y(e, e.return, a)
		}
		e.flags &= -3
	}
	t & 4096 && (e.flags &= -4097)
}

function mp(e, t, n) {
	E = e, Mc(e)
}

function Mc(e, t, n) {
	for (var r = (e.mode & 1) !== 0; E !== null;) {
		var i = E,
			l = i.child;
		if (i.tag === 22 && r) {
			var s = i.memoizedState !== null || Mr;
			if (!s) {
				var o = i.alternate,
					a = o !== null && o.memoizedState !== null || se;
				o = Mr;
				var u = se;
				if (Mr = s, (se = a) && !u)
					for (E = i; E !== null;) s = E, a = s.child, s.tag === 22 && s.memoizedState !== null ? ha(i) : a !== null ? (a.return = s, E = a) : ha(i);
				for (; l !== null;) E = l, Mc(l), l = l.sibling;
				E = i, Mr = o, se = u
			}
			da(e)
		} else i.subtreeFlags & 8772 && l !== null ? (l.return = i, E = l) : da(e)
	}
}

function da(e) {
	for (; E !== null;) {
		var t = E;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772) switch (t.tag) {
					case 0:
					case 11:
					case 15:
						se || Mi(5, t);
						break;
					case 1:
						var r = t.stateNode;
						if (t.flags & 4 && !se)
							if (n === null) r.componentDidMount();
							else {
								var i = t.elementType === t.type ? n.memoizedProps : Ie(t.type, n.memoizedProps);
								r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
							} var l = t.updateQueue;
						l !== null && Xo(t, l, r);
						break;
					case 3:
						var s = t.updateQueue;
						if (s !== null) {
							if (n = null, t.child !== null) switch (t.child.tag) {
								case 5:
									n = t.child.stateNode;
									break;
								case 1:
									n = t.child.stateNode
							}
							Xo(t, s, n)
						}
						break;
					case 5:
						var o = t.stateNode;
						if (n === null && t.flags & 4) {
							n = o;
							var a = t.memoizedProps;
							switch (t.type) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									a.autoFocus && n.focus();
									break;
								case "img":
									a.src && (n.src = a.src)
							}
						}
						break;
					case 6:
						break;
					case 4:
						break;
					case 12:
						break;
					case 13:
						if (t.memoizedState === null) {
							var u = t.alternate;
							if (u !== null) {
								var p = u.memoizedState;
								if (p !== null) {
									var g = p.dehydrated;
									g !== null && nr(g)
								}
							}
						}
						break;
					case 19:
					case 17:
					case 21:
					case 22:
					case 23:
					case 25:
						break;
					default:
						throw Error(S(163))
				}
				se || t.flags & 512 && ls(t)
			} catch (f) {
				Y(t, t.return, f)
			}
		}
		if (t === e) {
			E = null;
			break
		}
		if (n = t.sibling, n !== null) {
			n.return = t.return, E = n;
			break
		}
		E = t.return
	}
}

function pa(e) {
	for (; E !== null;) {
		var t = E;
		if (t === e) {
			E = null;
			break
		}
		var n = t.sibling;
		if (n !== null) {
			n.return = t.return, E = n;
			break
		}
		E = t.return
	}
}

function ha(e) {
	for (; E !== null;) {
		var t = E;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Mi(4, t)
					} catch (a) {
						Y(t, n, a)
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var i = t.return;
						try {
							r.componentDidMount()
						} catch (a) {
							Y(t, i, a)
						}
					}
					var l = t.return;
					try {
						ls(t)
					} catch (a) {
						Y(t, l, a)
					}
					break;
				case 5:
					var s = t.return;
					try {
						ls(t)
					} catch (a) {
						Y(t, s, a)
					}
			}
		} catch (a) {
			Y(t, t.return, a)
		}
		if (t === e) {
			E = null;
			break
		}
		var o = t.sibling;
		if (o !== null) {
			o.return = t.return, E = o;
			break
		}
		E = t.return
	}
}
var vp = Math.ceil,
	vi = ot.ReactCurrentDispatcher,
	bs = ot.ReactCurrentOwner,
	Oe = ot.ReactCurrentBatchConfig,
	I = 0,
	ee = null,
	G = null,
	ne = 0,
	xe = 0,
	fn = Ot(0),
	Z = 0,
	pr = null,
	Wt = 0,
	$i = 0,
	qs = 0,
	Jn = null,
	pe = null,
	eo = 0,
	Cn = 1 / 0,
	Xe = null,
	yi = !1,
	as = null,
	St = null,
	$r = !1,
	gt = null,
	xi = 0,
	Gn = 0,
	us = null,
	Gr = -1,
	Xr = 0;

function ce() {
	return I & 6 ? J() : Gr !== -1 ? Gr : Gr = J()
}

function kt(e) {
	return e.mode & 1 ? I & 2 && ne !== 0 ? ne & -ne : ep.transition !== null ? (Xr === 0 && (Xr = wu()), Xr) : (e = $, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Lu(e.type)), e) : 1
}

function Ae(e, t, n, r) {
	if (50 < Gn) throw Gn = 0, us = null, Error(S(185));
	mr(e, n, r), (!(I & 2) || e !== ee) && (e === ee && (!(I & 2) && ($i |= n), Z === 4 && pt(e, ne)), ve(e, r), n === 1 && I === 0 && !(t.mode & 1) && (Cn = J() + 500, _i && Ft()))
}

function ve(e, t) {
	var n = e.callbackNode;
	ed(e, t);
	var r = ni(e, e === ee ? ne : 0);
	if (r === 0) n !== null && No(n), e.callbackNode = null, e.callbackPriority = 0;
	else if (t = r & -r, e.callbackPriority !== t) {
		if (n != null && No(n), t === 1) e.tag === 0 ? qd(ga.bind(null, e)) : Qu(ga.bind(null, e)), Gd(function() {
			!(I & 6) && Ft()
		}), n = null;
		else {
			switch (Su(r)) {
				case 1:
					n = Es;
					break;
				case 4:
					n = yu;
					break;
				case 16:
					n = ti;
					break;
				case 536870912:
					n = xu;
					break;
				default:
					n = ti
			}
			n = Kc(n, $c.bind(null, e))
		}
		e.callbackPriority = t, e.callbackNode = n
	}
}

function $c(e, t) {
	if (Gr = -1, Xr = 0, I & 6) throw Error(S(327));
	var n = e.callbackNode;
	if (vn() && e.callbackNode !== n) return null;
	var r = ni(e, e === ee ? ne : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = wi(e, r);
	else {
		t = r;
		var i = I;
		I |= 2;
		var l = Ac();
		(ee !== e || ne !== t) && (Xe = null, Cn = J() + 500, At(e, t));
		do try {
			wp();
			break
		} catch (o) {
			Dc(e, o)
		}
		while (!0);
		As(), vi.current = l, I = i, G !== null ? t = 0 : (ee = null, ne = 0, t = Z)
	}
	if (t !== 0) {
		if (t === 2 && (i = Ml(e), i !== 0 && (r = i, t = cs(e, i))), t === 1) throw n = pr, At(e, 0), pt(e, r), ve(e, J()), n;
		if (t === 6) pt(e, r);
		else {
			if (i = e.current.alternate, !(r & 30) && !yp(i) && (t = wi(e, r), t === 2 && (l = Ml(e), l !== 0 && (r = l, t = cs(e, l))), t === 1)) throw n = pr, At(e, 0), pt(e, r), ve(e, J()), n;
			switch (e.finishedWork = i, e.finishedLanes = r, t) {
				case 0:
				case 1:
					throw Error(S(345));
				case 2:
					It(e, pe, Xe);
					break;
				case 3:
					if (pt(e, r), (r & 130023424) === r && (t = eo + 500 - J(), 10 < t)) {
						if (ni(e, 0) !== 0) break;
						if (i = e.suspendedLanes, (i & r) !== r) {
							ce(), e.pingedLanes |= e.suspendedLanes & i;
							break
						}
						e.timeoutHandle = Kl(It.bind(null, e, pe, Xe), t);
						break
					}
					It(e, pe, Xe);
					break;
				case 4:
					if (pt(e, r), (r & 4194240) === r) break;
					for (t = e.eventTimes, i = -1; 0 < r;) {
						var s = 31 - De(r);
						l = 1 << s, s = t[s], s > i && (i = s), r &= ~l
					}
					if (r = i, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vp(r / 1960)) - r, 10 < r) {
						e.timeoutHandle = Kl(It.bind(null, e, pe, Xe), r);
						break
					}
					It(e, pe, Xe);
					break;
				case 5:
					It(e, pe, Xe);
					break;
				default:
					throw Error(S(329))
			}
		}
	}
	return ve(e, J()), e.callbackNode === n ? $c.bind(null, e) : null
}

function cs(e, t) {
	var n = Jn;
	return e.current.memoizedState.isDehydrated && (At(e, t).flags |= 256), e = wi(e, t), e !== 2 && (t = pe, pe = n, t !== null && fs(t)), e
}

function fs(e) {
	pe === null ? pe = e : pe.push.apply(pe, e)
}

function yp(e) {
	for (var t = e;;) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && (n = n.stores, n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						l = i.getSnapshot;
					i = i.value;
					try {
						if (!Ue(l(), i)) return !1
					} catch {
						return !1
					}
				}
		}
		if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
		else {
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return !0;
				t = t.return
			}
			t.sibling.return = t.return, t = t.sibling
		}
	}
	return !0
}

function pt(e, t) {
	for (t &= ~qs, t &= ~$i, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
		var n = 31 - De(t),
			r = 1 << n;
		e[n] = -1, t &= ~r
	}
}

function ga(e) {
	if (I & 6) throw Error(S(327));
	vn();
	var t = ni(e, 0);
	if (!(t & 1)) return ve(e, J()), null;
	var n = wi(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = Ml(e);
		r !== 0 && (t = r, n = cs(e, r))
	}
	if (n === 1) throw n = pr, At(e, 0), pt(e, t), ve(e, J()), n;
	if (n === 6) throw Error(S(345));
	return e.finishedWork = e.current.alternate, e.finishedLanes = t, It(e, pe, Xe), ve(e, J()), null
}

function to(e, t) {
	var n = I;
	I |= 1;
	try {
		return e(t)
	} finally {
		I = n, I === 0 && (Cn = J() + 500, _i && Ft())
	}
}

function Qt(e) {
	gt !== null && gt.tag === 0 && !(I & 6) && vn();
	var t = I;
	I |= 1;
	var n = Oe.transition,
		r = $;
	try {
		if (Oe.transition = null, $ = 1, e) return e()
	} finally {
		$ = r, Oe.transition = n, I = t, !(I & 6) && Ft()
	}
}

function no() {
	xe = fn.current, V(fn)
}

function At(e, t) {
	e.finishedWork = null, e.finishedLanes = 0;
	var n = e.timeoutHandle;
	if (n !== -1 && (e.timeoutHandle = -1, Jd(n)), G !== null)
		for (n = G.return; n !== null;) {
			var r = n;
			switch (Ms(r), r.tag) {
				case 1:
					r = r.type.childContextTypes, r != null && oi();
					break;
				case 3:
					kn(), V(ge), V(oe), Ws();
					break;
				case 5:
					Ks(r);
					break;
				case 4:
					kn();
					break;
				case 13:
					V(K);
					break;
				case 19:
					V(K);
					break;
				case 10:
					Us(r.type._context);
					break;
				case 22:
				case 23:
					no()
			}
			n = n.return
		}
	if (ee = e, G = e = Nt(e.current, null), ne = xe = t, Z = 0, pr = null, qs = $i = Wt = 0, pe = Jn = null, $t !== null) {
		for (t = 0; t < $t.length; t++)
			if (n = $t[t], r = n.interleaved, r !== null) {
				n.interleaved = null;
				var i = r.next,
					l = n.pending;
				if (l !== null) {
					var s = l.next;
					l.next = i, r.next = s
				}
				n.pending = r
			} $t = null
	}
	return e
}

function Dc(e, t) {
	do {
		var n = G;
		try {
			if (As(), Qr.current = mi, gi) {
				for (var r = W.memoizedState; r !== null;) {
					var i = r.queue;
					i !== null && (i.pending = null), r = r.next
				}
				gi = !1
			}
			if (Kt = 0, q = X = W = null, Qn = !1, cr = 0, bs.current = null, n === null || n.return === null) {
				Z = 1, pr = t, G = null;
				break
			}
			e: {
				var l = e,
					s = n.return,
					o = n,
					a = t;
				if (t = ne, o.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
					var u = a,
						p = o,
						g = p.tag;
					if (!(p.mode & 1) && (g === 0 || g === 11 || g === 15)) {
						var f = p.alternate;
						f ? (p.updateQueue = f.updateQueue, p.memoizedState = f.memoizedState, p.lanes = f.lanes) : (p.updateQueue = null, p.memoizedState = null)
					}
					var v = na(s);
					if (v !== null) {
						v.flags &= -257, ra(v, s, o, l, t), v.mode & 1 && ta(l, u, t), t = v, a = u;
						var x = t.updateQueue;
						if (x === null) {
							var w = new Set;
							w.add(a), t.updateQueue = w
						} else x.add(a);
						break e
					} else {
						if (!(t & 1)) {
							ta(l, u, t), ro();
							break e
						}
						a = Error(S(426))
					}
				} else if (H && o.mode & 1) {
					var P = na(s);
					if (P !== null) {
						!(P.flags & 65536) && (P.flags |= 256), ra(P, s, o, l, t), $s(Nn(a, o));
						break e
					}
				}
				l = a = Nn(a, o),
				Z !== 4 && (Z = 2),
				Jn === null ? Jn = [l] : Jn.push(l),
				l = s;do {
					switch (l.tag) {
						case 3:
							l.flags |= 65536, t &= -t, l.lanes |= t;
							var h = Sc(l, a, t);
							Go(l, h);
							break e;
						case 1:
							o = a;
							var d = l.type,
								m = l.stateNode;
							if (!(l.flags & 128) && (typeof d.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (St === null || !St.has(m)))) {
								l.flags |= 65536, t &= -t, l.lanes |= t;
								var y = kc(l, o, t);
								Go(l, y);
								break e
							}
					}
					l = l.return
				} while (l !== null)
			}
			Vc(n)
		} catch (k) {
			t = k, G === n && n !== null && (G = n = n.return);
			continue
		}
		break
	} while (!0)
}

function Ac() {
	var e = vi.current;
	return vi.current = mi, e === null ? mi : e
}

function ro() {
	(Z === 0 || Z === 3 || Z === 2) && (Z = 4), ee === null || !(Wt & 268435455) && !($i & 268435455) || pt(ee, ne)
}

function wi(e, t) {
	var n = I;
	I |= 2;
	var r = Ac();
	(ee !== e || ne !== t) && (Xe = null, At(e, t));
	do try {
		xp();
		break
	} catch (i) {
		Dc(e, i)
	}
	while (!0);
	if (As(), I = n, vi.current = r, G !== null) throw Error(S(261));
	return ee = null, ne = 0, Z
}

function xp() {
	for (; G !== null;) Uc(G)
}

function wp() {
	for (; G !== null && !Wf();) Uc(G)
}

function Uc(e) {
	var t = Hc(e.alternate, e, xe);
	e.memoizedProps = e.pendingProps, t === null ? Vc(e) : G = t, bs.current = null
}

function Vc(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (e = t.return, t.flags & 32768) {
			if (n = pp(n, t), n !== null) {
				n.flags &= 32767, G = n;
				return
			}
			if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
			else {
				Z = 6, G = null;
				return
			}
		} else if (n = dp(n, t, xe), n !== null) {
			G = n;
			return
		}
		if (t = t.sibling, t !== null) {
			G = t;
			return
		}
		G = t = e
	} while (t !== null);
	Z === 0 && (Z = 5)
}

function It(e, t, n) {
	var r = $,
		i = Oe.transition;
	try {
		Oe.transition = null, $ = 1, Sp(e, t, n, r)
	} finally {
		Oe.transition = i, $ = r
	}
	return null
}

function Sp(e, t, n, r) {
	do vn(); while (gt !== null);
	if (I & 6) throw Error(S(327));
	n = e.finishedWork;
	var i = e.finishedLanes;
	if (n === null) return null;
	if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
	e.callbackNode = null, e.callbackPriority = 0;
	var l = n.lanes | n.childLanes;
	if (td(e, l), e === ee && (G = ee = null, ne = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || $r || ($r = !0, Kc(ti, function() {
			return vn(), null
		})), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
		l = Oe.transition, Oe.transition = null;
		var s = $;
		$ = 1;
		var o = I;
		I |= 4, bs.current = null, gp(e, n), Ic(n, e), Vd(Bl), ri = !!Vl, Bl = Vl = null, e.current = n, mp(n), Qf(), I = o, $ = s, Oe.transition = l
	} else e.current = n;
	if ($r && ($r = !1, gt = e, xi = i), l = e.pendingLanes, l === 0 && (St = null), Gf(n.stateNode), ve(e, J()), t !== null)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
			componentStack: i.stack,
			digest: i.digest
		});
	if (yi) throw yi = !1, e = as, as = null, e;
	return xi & 1 && e.tag !== 0 && vn(), l = e.pendingLanes, l & 1 ? e === us ? Gn++ : (Gn = 0, us = e) : Gn = 0, Ft(), null
}

function vn() {
	if (gt !== null) {
		var e = Su(xi),
			t = Oe.transition,
			n = $;
		try {
			if (Oe.transition = null, $ = 16 > e ? 16 : e, gt === null) var r = !1;
			else {
				if (e = gt, gt = null, xi = 0, I & 6) throw Error(S(331));
				var i = I;
				for (I |= 4, E = e.current; E !== null;) {
					var l = E,
						s = l.child;
					if (E.flags & 16) {
						var o = l.deletions;
						if (o !== null) {
							for (var a = 0; a < o.length; a++) {
								var u = o[a];
								for (E = u; E !== null;) {
									var p = E;
									switch (p.tag) {
										case 0:
										case 11:
										case 15:
											Yn(8, p, l)
									}
									var g = p.child;
									if (g !== null) g.return = p, E = g;
									else
										for (; E !== null;) {
											p = E;
											var f = p.sibling,
												v = p.return;
											if (zc(p), p === u) {
												E = null;
												break
											}
											if (f !== null) {
												f.return = v, E = f;
												break
											}
											E = v
										}
								}
							}
							var x = l.alternate;
							if (x !== null) {
								var w = x.child;
								if (w !== null) {
									x.child = null;
									do {
										var P = w.sibling;
										w.sibling = null, w = P
									} while (w !== null)
								}
							}
							E = l
						}
					}
					if (l.subtreeFlags & 2064 && s !== null) s.return = l, E = s;
					else e: for (; E !== null;) {
						if (l = E, l.flags & 2048) switch (l.tag) {
							case 0:
							case 11:
							case 15:
								Yn(9, l, l.return)
						}
						var h = l.sibling;
						if (h !== null) {
							h.return = l.return, E = h;
							break e
						}
						E = l.return
					}
				}
				var d = e.current;
				for (E = d; E !== null;) {
					s = E;
					var m = s.child;
					if (s.subtreeFlags & 2064 && m !== null) m.return = s, E = m;
					else e: for (s = d; E !== null;) {
						if (o = E, o.flags & 2048) try {
							switch (o.tag) {
								case 0:
								case 11:
								case 15:
									Mi(9, o)
							}
						} catch (k) {
							Y(o, o.return, k)
						}
						if (o === s) {
							E = null;
							break e
						}
						var y = o.sibling;
						if (y !== null) {
							y.return = o.return, E = y;
							break e
						}
						E = o.return
					}
				}
				if (I = i, Ft(), Ye && typeof Ye.onPostCommitFiberRoot == "function") try {
					Ye.onPostCommitFiberRoot(Pi, e)
				} catch {}
				r = !0
			}
			return r
		} finally {
			$ = n, Oe.transition = t
		}
	}
	return !1
}

function ma(e, t, n) {
	t = Nn(n, t), t = Sc(e, t, 1), e = wt(e, t, 1), t = ce(), e !== null && (mr(e, 1, t), ve(e, t))
}

function Y(e, t, n) {
	if (e.tag === 3) ma(e, e, n);
	else
		for (; t !== null;) {
			if (t.tag === 3) {
				ma(t, e, n);
				break
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (St === null || !St.has(r))) {
					e = Nn(n, e), e = kc(t, e, 1), t = wt(t, e, 1), e = ce(), t !== null && (mr(t, 1, e), ve(t, e));
					break
				}
			}
			t = t.return
		}
}

function kp(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t), t = ce(), e.pingedLanes |= e.suspendedLanes & n, ee === e && (ne & n) === n && (Z === 4 || Z === 3 && (ne & 130023424) === ne && 500 > J() - eo ? At(e, 0) : qs |= n), ve(e, t)
}

function Bc(e, t) {
	t === 0 && (e.mode & 1 ? (t = Lr, Lr <<= 1, !(Lr & 130023424) && (Lr = 4194304)) : t = 1);
	var n = ce();
	e = lt(e, t), e !== null && (mr(e, t, n), ve(e, n))
}

function Np(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Bc(e, n)
}

function Cp(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState;
			i !== null && (n = i.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(S(314))
	}
	r !== null && r.delete(t), Bc(e, n)
}
var Hc;
Hc = function(e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || ge.current) he = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return he = !1, fp(e, t, n);
			he = !!(e.flags & 131072)
		}
	else he = !1, H && t.flags & 1048576 && Yu(t, ci, t.index);
	switch (t.lanes = 0, t.tag) {
		case 2:
			var r = t.type;
			Jr(e, t), e = t.pendingProps;
			var i = xn(t, oe.current);
			mn(t, n), i = Ys(null, t, r, e, i, n);
			var l = Js();
			return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, me(r) ? (l = !0, ai(t)) : l = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Bs(t), i.updater = Ii, t.stateNode = i, i._reactInternals = t, Zl(t, r, e, n), t = es(null, t, r, !0, l, n)) : (t.tag = 0, H && l && Is(t), ue(null, t, i, n), t = t.child), t;
		case 16:
			r = t.elementType;
			e: {
				switch (Jr(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Ep(r), e = Ie(r, e), i) {
					case 0:
						t = ql(null, t, r, e, n);
						break e;
					case 1:
						t = sa(null, t, r, e, n);
						break e;
					case 11:
						t = ia(null, t, r, e, n);
						break e;
					case 14:
						t = la(null, t, r, Ie(r.type, e), n);
						break e
				}
				throw Error(S(306, r, ""))
			}
			return t;
		case 0:
			return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ie(r, i), ql(e, t, r, i, n);
		case 1:
			return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ie(r, i), sa(e, t, r, i, n);
		case 3:
			e: {
				if (Ec(t), e === null) throw Error(S(387));r = t.pendingProps,
				l = t.memoizedState,
				i = l.element,
				qu(e, t),
				pi(t, r, null, n);
				var s = t.memoizedState;
				if (r = s.element, l.isDehydrated)
					if (l = {
							element: r,
							isDehydrated: !1,
							cache: s.cache,
							pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
							transitions: s.transitions
						}, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
						i = Nn(Error(S(423)), t), t = oa(e, t, r, n, i);
						break e
					} else if (r !== i) {
					i = Nn(Error(S(424)), t), t = oa(e, t, r, n, i);
					break e
				} else
					for (we = xt(t.stateNode.containerInfo.firstChild), Se = t, H = !0, $e = null, n = Zu(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
				else {
					if (wn(), r === i) {
						t = st(e, t, n);
						break e
					}
					ue(e, t, r, n)
				}
				t = t.child
			}
			return t;
		case 5:
			return ec(t), e === null && Jl(t), r = t.type, i = t.pendingProps, l = e !== null ? e.memoizedProps : null, s = i.children, Hl(r, i) ? s = null : l !== null && Hl(r, l) && (t.flags |= 32), jc(e, t), ue(e, t, s, n), t.child;
		case 6:
			return e === null && Jl(t), null;
		case 13:
			return Lc(e, t, n);
		case 4:
			return Hs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Sn(t, null, r, n) : ue(e, t, r, n), t.child;
		case 11:
			return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ie(r, i), ia(e, t, r, i, n);
		case 7:
			return ue(e, t, t.pendingProps, n), t.child;
		case 8:
			return ue(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return ue(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (r = t.type._context, i = t.pendingProps, l = t.memoizedProps, s = i.value, D(fi, r._currentValue), r._currentValue = s, l !== null)
					if (Ue(l.value, s)) {
						if (l.children === i.children && !ge.current) {
							t = st(e, t, n);
							break e
						}
					} else
						for (l = t.child, l !== null && (l.return = t); l !== null;) {
							var o = l.dependencies;
							if (o !== null) {
								s = l.child;
								for (var a = o.firstContext; a !== null;) {
									if (a.context === r) {
										if (l.tag === 1) {
											a = tt(-1, n & -n), a.tag = 2;
											var u = l.updateQueue;
											if (u !== null) {
												u = u.shared;
												var p = u.pending;
												p === null ? a.next = a : (a.next = p.next, p.next = a), u.pending = a
											}
										}
										l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), Gl(l.return, n, t), o.lanes |= n;
										break
									}
									a = a.next
								}
							} else if (l.tag === 10) s = l.type === t.type ? null : l.child;
							else if (l.tag === 18) {
								if (s = l.return, s === null) throw Error(S(341));
								s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), Gl(s, n, t), s = l.sibling
							} else s = l.child;
							if (s !== null) s.return = l;
							else
								for (s = l; s !== null;) {
									if (s === t) {
										s = null;
										break
									}
									if (l = s.sibling, l !== null) {
										l.return = s.return, s = l;
										break
									}
									s = s.return
								}
							l = s
						}
				ue(e, t, i.children, n),
				t = t.child
			}
			return t;
		case 9:
			return i = t.type, r = t.pendingProps.children, mn(t, n), i = Fe(i), r = r(i), t.flags |= 1, ue(e, t, r, n), t.child;
		case 14:
			return r = t.type, i = Ie(r, t.pendingProps), i = Ie(r.type, i), la(e, t, r, i, n);
		case 15:
			return Nc(e, t, t.type, t.pendingProps, n);
		case 17:
			return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ie(r, i), Jr(e, t), t.tag = 1, me(r) ? (e = !0, ai(t)) : e = !1, mn(t, n), wc(t, r, i), Zl(t, r, i, n), es(null, t, r, !0, e, n);
		case 19:
			return Pc(e, t, n);
		case 22:
			return Cc(e, t, n)
	}
	throw Error(S(156, t.tag))
};

function Kc(e, t) {
	return vu(e, t)
}

function jp(e, t, n, r) {
	this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Pe(e, t, n, r) {
	return new jp(e, t, n, r)
}

function io(e) {
	return e = e.prototype, !(!e || !e.isReactComponent)
}

function Ep(e) {
	if (typeof e == "function") return io(e) ? 1 : 0;
	if (e != null) {
		if (e = e.$$typeof, e === Ns) return 11;
		if (e === Cs) return 14
	}
	return 2
}

function Nt(e, t) {
	var n = e.alternate;
	return n === null ? (n = Pe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
		lanes: t.lanes,
		firstContext: t.firstContext
	}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Zr(e, t, n, r, i, l) {
	var s = 2;
	if (r = e, typeof e == "function") io(e) && (s = 1);
	else if (typeof e == "string") s = 5;
	else e: switch (e) {
		case en:
			return Ut(n.children, i, l, t);
		case ks:
			s = 8, i |= 8;
			break;
		case Sl:
			return e = Pe(12, n, t, i | 2), e.elementType = Sl, e.lanes = l, e;
		case kl:
			return e = Pe(13, n, t, i), e.elementType = kl, e.lanes = l, e;
		case Nl:
			return e = Pe(19, n, t, i), e.elementType = Nl, e.lanes = l, e;
		case eu:
			return Di(n, i, l, t);
		default:
			if (typeof e == "object" && e !== null) switch (e.$$typeof) {
				case ba:
					s = 10;
					break e;
				case qa:
					s = 9;
					break e;
				case Ns:
					s = 11;
					break e;
				case Cs:
					s = 14;
					break e;
				case ct:
					s = 16, r = null;
					break e
			}
			throw Error(S(130, e == null ? e : typeof e, ""))
	}
	return t = Pe(s, n, t, i), t.elementType = e, t.type = r, t.lanes = l, t
}

function Ut(e, t, n, r) {
	return e = Pe(7, e, r, t), e.lanes = n, e
}

function Di(e, t, n, r) {
	return e = Pe(22, e, r, t), e.elementType = eu, e.lanes = n, e.stateNode = {
		isHidden: !1
	}, e
}

function gl(e, t, n) {
	return e = Pe(6, e, null, t), e.lanes = n, e
}

function ml(e, t, n) {
	return t = Pe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
		containerInfo: e.containerInfo,
		pendingChildren: null,
		implementation: e.implementation
	}, t
}

function Lp(e, t, n, r, i) {
	this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xi(0), this.expirationTimes = Xi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xi(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function lo(e, t, n, r, i, l, s, o, a) {
	return e = new Lp(e, t, n, o, a), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Pe(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
		element: r,
		isDehydrated: n,
		cache: null,
		transitions: null,
		pendingSuspenseBoundaries: null
	}, Bs(l), e
}

function Pp(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: qt,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n
	}
}

function Wc(e) {
	if (!e) return Et;
	e = e._reactInternals;
	e: {
		if (Jt(e) !== e || e.tag !== 1) throw Error(S(170));
		var t = e;do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (me(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e
					}
			}
			t = t.return
		} while (t !== null);
		throw Error(S(171))
	}
	if (e.tag === 1) {
		var n = e.type;
		if (me(n)) return Wu(e, n, t)
	}
	return t
}

function Qc(e, t, n, r, i, l, s, o, a) {
	return e = lo(n, r, !0, e, i, l, s, o, a), e.context = Wc(null), n = e.current, r = ce(), i = kt(n), l = tt(r, i), l.callback = t ?? null, wt(n, l, i), e.current.lanes = i, mr(e, i, r), ve(e, r), e
}

function Ai(e, t, n, r) {
	var i = t.current,
		l = ce(),
		s = kt(i);
	return n = Wc(n), t.context === null ? t.context = n : t.pendingContext = n, t = tt(l, s), t.payload = {
		element: e
	}, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = wt(i, t, s), e !== null && (Ae(e, i, s, l), Wr(e, i, s)), s
}

function Si(e) {
	if (e = e.current, !e.child) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode
	}
}

function va(e, t) {
	if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t
	}
}

function so(e, t) {
	va(e, t), (e = e.alternate) && va(e, t)
}

function Op() {
	return null
}
var Yc = typeof reportError == "function" ? reportError : function(e) {
	console.error(e)
};

function oo(e) {
	this._internalRoot = e
}
Ui.prototype.render = oo.prototype.render = function(e) {
	var t = this._internalRoot;
	if (t === null) throw Error(S(409));
	Ai(e, t, null, null)
};
Ui.prototype.unmount = oo.prototype.unmount = function() {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		Qt(function() {
			Ai(null, e, null, null)
		}), t[it] = null
	}
};

function Ui(e) {
	this._internalRoot = e
}
Ui.prototype.unstable_scheduleHydration = function(e) {
	if (e) {
		var t = Cu();
		e = {
			blockedOn: null,
			target: e,
			priority: t
		};
		for (var n = 0; n < dt.length && t !== 0 && t < dt[n].priority; n++);
		dt.splice(n, 0, e), n === 0 && Eu(e)
	}
};

function ao(e) {
	return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Vi(e) {
	return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function ya() {}

function Fp(e, t, n, r, i) {
	if (i) {
		if (typeof r == "function") {
			var l = r;
			r = function() {
				var u = Si(s);
				l.call(u)
			}
		}
		var s = Qc(t, r, e, 0, null, !1, !1, "", ya);
		return e._reactRootContainer = s, e[it] = s.current, lr(e.nodeType === 8 ? e.parentNode : e), Qt(), s
	}
	for (; i = e.lastChild;) e.removeChild(i);
	if (typeof r == "function") {
		var o = r;
		r = function() {
			var u = Si(a);
			o.call(u)
		}
	}
	var a = lo(e, 0, !1, null, null, !1, !1, "", ya);
	return e._reactRootContainer = a, e[it] = a.current, lr(e.nodeType === 8 ? e.parentNode : e), Qt(function() {
		Ai(t, a, n, r)
	}), a
}

function Bi(e, t, n, r, i) {
	var l = n._reactRootContainer;
	if (l) {
		var s = l;
		if (typeof i == "function") {
			var o = i;
			i = function() {
				var a = Si(s);
				o.call(a)
			}
		}
		Ai(t, s, e, i)
	} else s = Fp(n, t, e, i, r);
	return Si(s)
}
ku = function(e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = An(t.pendingLanes);
				n !== 0 && (Ls(t, n | 1), ve(t, J()), !(I & 6) && (Cn = J() + 500, Ft()))
			}
			break;
		case 13:
			Qt(function() {
				var r = lt(e, 1);
				if (r !== null) {
					var i = ce();
					Ae(r, e, 1, i)
				}
			}), so(e, 1)
	}
};
Ps = function(e) {
	if (e.tag === 13) {
		var t = lt(e, 134217728);
		if (t !== null) {
			var n = ce();
			Ae(t, e, 134217728, n)
		}
		so(e, 134217728)
	}
};
Nu = function(e) {
	if (e.tag === 13) {
		var t = kt(e),
			n = lt(e, t);
		if (n !== null) {
			var r = ce();
			Ae(n, e, t, r)
		}
		so(e, t)
	}
};
Cu = function() {
	return $
};
ju = function(e, t) {
	var n = $;
	try {
		return $ = e, t()
	} finally {
		$ = n
	}
};
_l = function(e, t, n) {
	switch (t) {
		case "input":
			if (El(e, n), t = n.name, n.type === "radio" && t != null) {
				for (n = e; n.parentNode;) n = n.parentNode;
				for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var i = zi(r);
						if (!i) throw Error(S(90));
						nu(r), El(r, i)
					}
				}
			}
			break;
		case "textarea":
			iu(e, n);
			break;
		case "select":
			t = n.value, t != null && dn(e, !!n.multiple, t, !1)
	}
};
fu = to;
du = Qt;
var Rp = {
		usingClientEntryPoint: !1,
		Events: [yr, ln, zi, uu, cu, to]
	},
	In = {
		findFiberByHostInstance: Mt,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom"
	},
	zp = {
		bundleType: In.bundleType,
		version: In.version,
		rendererPackageName: In.rendererPackageName,
		rendererConfig: In.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: ot.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(e) {
			return e = gu(e), e === null ? null : e.stateNode
		},
		findFiberByHostInstance: In.findFiberByHostInstance || Op,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var Dr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Dr.isDisabled && Dr.supportsFiber) try {
		Pi = Dr.inject(zp), Ye = Dr
	} catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rp;
Ne.createPortal = function(e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!ao(t)) throw Error(S(200));
	return Pp(e, t, null, n)
};
Ne.createRoot = function(e, t) {
	if (!ao(e)) throw Error(S(299));
	var n = !1,
		r = "",
		i = Yc;
	return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = lo(e, 1, !1, null, null, n, !1, r, i), e[it] = t.current, lr(e.nodeType === 8 ? e.parentNode : e), new oo(t)
};
Ne.findDOMNode = function(e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0) throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
	return e = gu(t), e = e === null ? null : e.stateNode, e
};
Ne.flushSync = function(e) {
	return Qt(e)
};
Ne.hydrate = function(e, t, n) {
	if (!Vi(t)) throw Error(S(200));
	return Bi(null, e, t, !0, n)
};
Ne.hydrateRoot = function(e, t, n) {
	if (!ao(e)) throw Error(S(405));
	var r = n != null && n.hydratedSources || null,
		i = !1,
		l = "",
		s = Yc;
	if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Qc(t, null, e, 1, n ?? null, i, !1, l, s), e[it] = t.current, lr(e), r)
		for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
	return new Ui(t)
};
Ne.render = function(e, t, n) {
	if (!Vi(t)) throw Error(S(200));
	return Bi(null, e, t, !1, n)
};
Ne.unmountComponentAtNode = function(e) {
	if (!Vi(e)) throw Error(S(40));
	return e._reactRootContainer ? (Qt(function() {
		Bi(null, null, e, !1, function() {
			e._reactRootContainer = null, e[it] = null
		})
	}), !0) : !1
};
Ne.unstable_batchedUpdates = to;
Ne.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
	if (!Vi(n)) throw Error(S(200));
	if (e == null || e._reactInternals === void 0) throw Error(S(38));
	return Bi(e, t, n, !1, r)
};
Ne.version = "18.3.1-next-f1338f8080-20240426";

function Jc() {
	if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
		__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jc)
	} catch (e) {
		console.error(e)
	}
}
Jc(), Ja.exports = Ne;
var _p = Ja.exports,
	xa = _p;
xl.createRoot = xa.createRoot, xl.hydrateRoot = xa.hydrateRoot;
const Gc = T.createContext({}),
	Rt = () => T.useContext(Gc),
	ki = () => !window.invokeNative,
	Tp = () => {};

function Ip() {
	const e = {
		weekday: "short",
		day: "numeric",
		month: "short",
		hour: "2-digit",
		minute: "2-digit",
		hour12: !1
	};
	return new Intl.DateTimeFormat("default", e).format(new Date)
}
var Xc = {
	exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
	(function() {
		var t = {}.hasOwnProperty;

		function n() {
			for (var l = "", s = 0; s < arguments.length; s++) {
				var o = arguments[s];
				o && (l = i(l, r(o)))
			}
			return l
		}

		function r(l) {
			if (typeof l == "string" || typeof l == "number") return l;
			if (typeof l != "object") return "";
			if (Array.isArray(l)) return n.apply(null, l);
			if (l.toString !== Object.prototype.toString && !l.toString.toString().includes("[native code]")) return l.toString();
			var s = "";
			for (var o in l) t.call(l, o) && l[o] && (s = i(s, o));
			return s
		}

		function i(l, s) {
			return s ? l ? l + " " + s : l + s : l
		}
		e.exports ? (n.default = n, e.exports = n) : window.classNames = n
	})()
})(Xc);
var Mp = Xc.exports;
const nt = Ma(Mp);

function $p() {
	if (console && console.warn) {
		for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
		Vt(t[0]) && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t)
	}
}
const wa = {};

function ds() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
	Vt(t[0]) && wa[t[0]] || (Vt(t[0]) && (wa[t[0]] = new Date), $p(...t))
}
const Zc = (e, t) => () => {
		if (e.isInitialized) t();
		else {
			const n = () => {
				setTimeout(() => {
					e.off("initialized", n)
				}, 0), t()
			};
			e.on("initialized", n)
		}
	},
	Sa = (e, t, n) => {
		e.loadNamespaces(t, Zc(e, n))
	},
	ka = (e, t, n, r) => {
		Vt(n) && (n = [n]), n.forEach(i => {
			e.options.ns.indexOf(i) < 0 && e.options.ns.push(i)
		}), e.loadLanguages(t, Zc(e, r))
	},
	Dp = function(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		const r = t.languages[0],
			i = t.options ? t.options.fallbackLng : !1,
			l = t.languages[t.languages.length - 1];
		if (r.toLowerCase() === "cimode") return !0;
		const s = (o, a) => {
			const u = t.services.backendConnector.state[`${o}|${a}`];
			return u === -1 || u === 2
		};
		return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !s(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || s(r, e) && (!i || s(l, e)))
	},
	Ap = function(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		return !t.languages || !t.languages.length ? (ds("i18n.languages were undefined or empty", t.languages), !0) : t.options.ignoreJSONStructure !== void 0 ? t.hasLoadedNamespace(e, {
			lng: n.lng,
			precheck: (i, l) => {
				if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && i.services.backendConnector.backend && i.isLanguageChangingTo && !l(i.isLanguageChangingTo, e)) return !1
			}
		}) : Dp(e, t, n)
	},
	Vt = e => typeof e == "string",
	Up = e => typeof e == "object" && e !== null,
	Vp = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
	Bp = {
		"&amp;": "&",
		"&#38;": "&",
		"&lt;": "<",
		"&#60;": "<",
		"&gt;": ">",
		"&#62;": ">",
		"&apos;": "'",
		"&#39;": "'",
		"&quot;": '"',
		"&#34;": '"',
		"&nbsp;": " ",
		"&#160;": " ",
		"&copy;": "©",
		"&#169;": "©",
		"&reg;": "®",
		"&#174;": "®",
		"&hellip;": "…",
		"&#8230;": "…",
		"&#x2F;": "/",
		"&#47;": "/"
	},
	Hp = e => Bp[e],
	Kp = e => e.replace(Vp, Hp);
let ps = {
	bindI18n: "languageChanged",
	bindI18nStore: "",
	transEmptyNodeValue: "",
	transSupportBasicHtmlNodes: !0,
	transWrapTextNodes: "",
	transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
	useSuspense: !0,
	unescape: Kp
};
const Wp = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		ps = {
			...ps,
			...e
		}
	},
	Qp = () => ps;
let bc;
const Yp = e => {
		bc = e
	},
	Jp = () => bc,
	Gp = {
		type: "3rdParty",
		init(e) {
			Wp(e.options.react), Yp(e)
		}
	},
	Xp = T.createContext();
class Zp {
	constructor() {
		uo(this, "getUsedNamespaces", () => Object.keys(this.usedNamespaces));
		this.usedNamespaces = {}
	}
	addUsedNamespaces(t) {
		t.forEach(n => {
			this.usedNamespaces[n] || (this.usedNamespaces[n] = !0)
		})
	}
}
const bp = (e, t) => {
		const n = T.useRef();
		return T.useEffect(() => {
			n.current = e
		}, [e, t]), n.current
	},
	qc = (e, t, n, r) => e.getFixedT(t, n, r),
	qp = (e, t, n, r) => T.useCallback(qc(e, t, n, r), [e, t, n, r]),
	Ge = function(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		const {
			i18n: n
		} = t, {
			i18n: r,
			defaultNS: i
		} = T.useContext(Xp) || {}, l = n || r || Jp();
		if (l && !l.reportNamespaces && (l.reportNamespaces = new Zp), !l) {
			ds("You will need to pass in an i18next instance by using initReactI18next");
			const y = (C, N) => Vt(N) ? N : Up(N) && Vt(N.defaultValue) ? N.defaultValue : Array.isArray(C) ? C[C.length - 1] : C,
				k = [y, {}, !1];
			return k.t = y, k.i18n = {}, k.ready = !1, k
		}
		l.options.react && l.options.react.wait !== void 0 && ds("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
		const s = {
				...Qp(),
				...l.options.react,
				...t
			},
			{
				useSuspense: o,
				keyPrefix: a
			} = s;
		let u = i || l.options && l.options.defaultNS;
		u = Vt(u) ? [u] : u || ["translation"], l.reportNamespaces.addUsedNamespaces && l.reportNamespaces.addUsedNamespaces(u);
		const p = (l.isInitialized || l.initializedStoreOnce) && u.every(y => Ap(y, l, s)),
			g = qp(l, t.lng || null, s.nsMode === "fallback" ? u : u[0], a),
			f = () => g,
			v = () => qc(l, t.lng || null, s.nsMode === "fallback" ? u : u[0], a),
			[x, w] = T.useState(f);
		let P = u.join();
		t.lng && (P = `${t.lng}${P}`);
		const h = bp(P),
			d = T.useRef(!0);
		T.useEffect(() => {
			const {
				bindI18n: y,
				bindI18nStore: k
			} = s;
			d.current = !0, !p && !o && (t.lng ? ka(l, t.lng, u, () => {
				d.current && w(v)
			}) : Sa(l, u, () => {
				d.current && w(v)
			})), p && h && h !== P && d.current && w(v);
			const C = () => {
				d.current && w(v)
			};
			return y && l && l.on(y, C), k && l && l.store.on(k, C), () => {
				d.current = !1, y && l && y.split(" ").forEach(N => l.off(N, C)), k && l && k.split(" ").forEach(N => l.store.off(N, C))
			}
		}, [l, P]), T.useEffect(() => {
			d.current && p && w(f)
		}, [l, a, p]);
		const m = [x, l, p];
		if (m.t = x, m.i18n = l, m.ready = p, p || !p && !o) return m;
		throw new Promise(y => {
			t.lng ? ka(l, t.lng, u, () => y()) : Sa(l, u, () => y())
		})
	},
	eh = ({
		children: e
	}) => {
		const {
			t
		} = Ge();
		return c.jsx("div", {
			className: nt("relative w-full h-full flex items-center justify-center", {
				"bg-dark/70": !ki()
			}),
			children: c.jsx("div", {
				className: "relative w-[90%] h-[90%] flex items-center justify-center overflow-hidden",
				children: c.jsx("div", {
					className: "relative w-full h-full flex items-center justify-center border-[8px] border-solid border-4B bg-4B rounded-[2.2rem] overflow-hidden",
					children: c.jsx("div", {
						className: "relative w-full h-full flex border-[10px] border-solid border-0B bg-0B rounded-[2.2rem] overflow-hidden",
						children: c.jsxs("div", {
							className: "relative flex flex-col w-full h-full overflow-hidden bg-cover",
							style: {
								backgroundImage: "url(images/ipad_bg.png)"
							},
							children: [c.jsxs("div", {
								className: "relative grid grid-cols-3 px-5 z-10",
								style: {
									background: "linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)"
								},
								children: [c.jsxs("ul", {
									className: "flex items-center gap-3 overflow-auto scrollbar-hide justify-start select-none whitespace-nowrap",
									children: [c.jsx("li", {
										className: "mr-1",
										children: c.jsx("svg", {
											width: "16",
											height: "18",
											viewBox: "0 0 13 14",
											fill: "none",
											xmlns: "http://www.w3.org/2000/svg",
											children: c.jsxs("g", {
												id: "Vector",
												children: [c.jsx("path", {
													d: "M12.9591 7.13851C12.9591 8.82742 12.3141 10.4472 11.166 11.6414C10.0179 12.8357 8.46068 13.5066 6.83699 13.5066C5.21329 13.5066 3.6561 12.8357 2.50798 11.6414C1.35985 10.4472 0.714844 8.82742 0.714844 7.13851L12.9591 7.13851Z",
													fill: "white"
												}), c.jsx("path", {
													d: "M7.13563 6.6235C7.13563 6.08882 7.03158 5.56706 6.83699 5.09748C6.74187 4.86795 6.62512 4.65089 6.48831 4.45089C6.43062 4.36655 6.36936 4.28524 6.30466 4.20731C5.95451 3.78559 5.52225 3.48548 5.05314 3.32957C4.80944 3.24857 4.55579 3.20649 4.29854 3.20649C3.54609 3.20649 2.82447 3.5665 2.29241 4.20731C1.76035 4.84813 1.46145 5.71726 1.46145 6.6235L7.13563 6.6235Z",
													fill: "white"
												}), c.jsx("path", {
													fillRule: "evenodd",
													clipRule: "evenodd",
													d: "M10.7583 0.178536C7.90583 0.0149824 6.46505 0.500213 4.6327 2.5067C5.45073 2.60278 6.22124 3.04943 6.8114 3.77763C7.62097 2.28613 8.74597 1.59462 11.1269 0.963751C11.2223 0.938473 11.274 0.811639 11.2303 0.706413L11.134 0.474515C11.0622 0.301582 10.9187 0.18773 10.7583 0.178536ZM7.22707 4.39173C7.59592 5.0478 7.81927 5.81837 7.87075 6.6235L12.2125 6.6235C12.2125 5.71726 11.9136 4.84813 11.3816 4.20731C10.8495 3.5665 10.1279 3.20649 9.37543 3.20649C8.62299 3.20649 7.90137 3.5665 7.36931 4.20731C7.31987 4.26686 7.27243 4.32838 7.22707 4.39173ZM6.48831 4.45089C6.62512 4.65089 6.74187 4.86795 6.83699 5.09748C7.03158 5.56706 7.13563 6.08882 7.13563 6.6235L6.53834 6.6235H1.46145C1.46145 5.71726 1.76035 4.84813 2.29241 4.20731C2.82447 3.5665 3.54609 3.20649 4.29854 3.20649C4.55579 3.20649 4.80944 3.24857 5.05314 3.32957C5.52225 3.48548 5.95451 3.78559 6.30466 4.20731C6.36936 4.28524 6.43062 4.36655 6.48831 4.45089Z",
													fill: "white"
												})]
											})
										})
									}), c.jsx("li", {
										children: c.jsx("h1", {
											className: "text-xs font-extrabold text-white",
											children: t("job_pad")
										})
									}), c.jsx("li", {
										children: c.jsx("h1", {
											className: "text-xs font-medium text-white",
											children: t("file")
										})
									}), c.jsx("li", {
										children: c.jsx("h1", {
											className: "text-xs font-medium text-white",
											children: t("order")
										})
									}), c.jsx("li", {
										children: c.jsx("h1", {
											className: "text-xs font-medium text-white",
											children: t("image")
										})
									}), c.jsx("li", {
										children: c.jsx("h1", {
											className: "text-xs font-medium text-white",
											children: t("history")
										})
									}), c.jsx("li", {
										children: c.jsx("h1", {
											className: "text-xs font-medium text-white",
											children: t("place_marks")
										})
									}), c.jsx("li", {
										children: c.jsx("h1", {
											className: "text-xs font-medium text-white",
											children: t("screen")
										})
									}), c.jsx("li", {
										children: c.jsx("h1", {
											className: "text-xs font-medium text-white",
											children: t("help")
										})
									})]
								}), c.jsx("div", {
									className: "relative bottom-[1px] flex justify-center",
									children: c.jsx("img", {
										src: "images/celtik.png",
										alt: "celtik"
									})
								}), c.jsx("ul", {
									className: "flex items-center justify-end gap-3 overflow-x-auto scrollbar-hide select-none",
									children: c.jsx("li", {
										children: c.jsx("h1", {
											className: "text-xs font-medium text-white whitespace-nowrap",
											children: Ip()
										})
									})
								})]
							}), c.jsx("div", {
								className: "relative w-full h-full overflow-hidden z-10",
								children: e
							})]
						})
					})
				})
			})
		})
	},
	th = () => {
		const {
			t: e
		} = Ge(), {
			setPage: t,
			setIsAppRunning: n
		} = Rt(), r = i => {
			i.preventDefault(), t("garbage"), n(!0)
		};
		return c.jsx(c.Fragment, {
			children: c.jsxs("div", {
				onClick: r,
				className: "flex flex-col items-center cursor-pointer",
				style: {
					width: "84px",
					height: "88px"
				},
				children: [c.jsx("div", {
					style: {
						width: "66px",
						height: "54px"
					},
					children: c.jsx("img", {
						src: "images/icons/folder.png",
						alt: "app-garbage"
					})
				}), c.jsx("div", {
					className: "text-center mt-1",
					children: c.jsx("h1", {
						className: "text-white text-xs font-bold",
						style: {
							textShadow: "0px 0px 1.6px rgba(0, 0, 0, 0.85)"
						},
						children: e("app_title")
					})
				})]
			})
		})
	},
	nh = () => {
		const {
			setPage: e,
			setIsAppRunning: t
		} = Rt(), {
			t: n
		} = Ge(), r = i => {
			i.preventDefault(), e("delivery"), t(!0)
		};
		return c.jsx(c.Fragment, {
			children: c.jsxs("div", {
				onClick: r,
				className: "flex flex-col items-center cursor-pointer",
				style: {
					width: "84px",
					height: "88px"
				},
				children: [c.jsx("div", {
					style: {
						width: "66px",
						height: "54px"
					},
					children: c.jsx("img", {
						src: "images/icons/folder.png",
						alt: "app-delivery"
					})
				}), c.jsx("div", {
					className: "text-center mt-1",
					children: c.jsx("h1", {
						className: "text-white text-xs font-bold",
						style: {
							textShadow: "0px 0px 1.6px rgba(0, 0, 0, 0.85)"
						},
						children: n("app_title_delivery")
					})
				})]
			})
		})
	},
	rh = () => {
		const {
			t: e
		} = Ge(), {
			setPage: t,
			setIsAppRunning: n
		} = Rt(), r = i => {
			i.preventDefault(), t("towtruck"), n(!0)
		};
		return c.jsx(c.Fragment, {
			children: c.jsxs("div", {
				onClick: r,
				className: "flex flex-col items-center cursor-pointer",
				style: {
					width: "84px",
					height: "88px"
				},
				children: [c.jsx("div", {
					style: {
						width: "66px",
						height: "54px"
					},
					children: c.jsx("img", {
						src: "images/icons/folder.png",
						alt: "app-delivery"
					})
				}), c.jsx("div", {
					className: "text-center mt-1",
					children: c.jsx("h1", {
						className: "text-white text-xs font-bold",
						style: {
							textShadow: "0px 0px 1.6px rgba(0, 0, 0, 0.85)"
						},
						children: e("app_title_towtruck")
					})
				})]
			})
		})
	},
	ih = ({
		children: e
	}) => {
		const {
			t
		} = Ge(), [n, r] = T.useState(!1), {
			setIsAppRunning: i
		} = Rt();
		return c.jsxs("div", {
			className: nt("w-full h-full flex flex-col transition-[padding]", {
				"p-8": !n
			}),
			children: [c.jsx("div", {
				className: nt("bg-black/85", {
					"rounded-t": !n
				}),
				children: c.jsxs("div", {
					className: "flex gap-2 p-3.5 items-center",
					children: [c.jsx("div", {
						onClick: () => i(!1),
						className: "w-3 h-3 rounded-full cursor-pointer",
						style: {
							backgroundColor: "#F35D55"
						}
					}), c.jsx("div", {
						className: "w-3 h-3 rounded-full",
						style: {
							backgroundColor: "#FEBC2E"
						}
					}), c.jsx("div", {
						onClick: () => r(!n),
						className: "w-3 h-3 rounded-full cursor-pointer",
						style: {
							backgroundColor: "#2BC840"
						}
					}), c.jsx("div", {
						className: "mx-2 w-[1px] h-4 flex-shrink-0 bg-white/20"
					}), c.jsx("div", {
						className: "mr-1",
						children: c.jsx("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							width: "8",
							height: "13",
							viewBox: "0 0 8 13",
							fill: "none",
							children: c.jsx("path", {
								d: "M6.5 1L1.35355 6.14645C1.15829 6.34171 1.15829 6.65829 1.35355 6.85355L6.5 12",
								stroke: "white",
								strokeOpacity: "0.18",
								strokeWidth: "2",
								strokeLinecap: "round"
							})
						})
					}), c.jsx("div", {
						className: "ml-1",
						children: c.jsx("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							width: "8",
							height: "13",
							viewBox: "0 0 8 13",
							fill: "none",
							children: c.jsx("path", {
								d: "M1 1L6.14645 6.14645C6.34171 6.34171 6.34171 6.65829 6.14645 6.85355L1 12",
								stroke: "white",
								strokeOpacity: "0.18",
								strokeWidth: "2",
								strokeLinecap: "round"
							})
						})
					}), c.jsx("div", {
						className: "mx-2 w-[1px] h-4 flex-shrink-0 bg-white/20"
					}), c.jsx("div", {
						children: c.jsx("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							width: "13",
							height: "14",
							viewBox: "0 0 13 14",
							fill: "none",
							children: c.jsx("path", {
								fillRule: "evenodd",
								clipRule: "evenodd",
								d: "M5.08939 11.0041C2.2786 11.0041 0 8.66391 0 5.77715C0 2.89039 2.2786 0.550205 5.08939 0.550205C7.90019 0.550205 10.1788 2.89039 10.1788 5.77715C10.1788 6.78953 9.89854 7.73468 9.41339 8.53526C9.48103 8.58012 9.54523 8.63235 9.60485 8.69197L12.338 11.4251C12.8197 11.9068 12.8197 12.6878 12.338 13.1695C11.8562 13.6512 11.0752 13.6512 10.5935 13.1695L7.86044 10.4364C7.80453 10.3805 7.7551 10.3205 7.71217 10.2575C6.94622 10.7314 6.04881 11.0041 5.08939 11.0041ZM5.08939 9.46259C3.10754 9.46259 1.50094 7.81256 1.50094 5.77715C1.50094 3.74174 3.10754 2.09171 5.08939 2.09171C7.07124 2.09171 8.67785 3.74174 8.67785 5.77715C8.67785 7.81256 7.07124 9.46259 5.08939 9.46259Z",
								fill: "white",
								fillOpacity: "0.18"
							})
						})
					}), c.jsx("div", {
						children: c.jsx("h1", {
							className: "text-white/20 text-xs font-bold select-none",
							children: t("search")
						})
					})]
				})
			}), c.jsx("div", {
				className: nt("bg-black/90 bg-cover bg-no-repeat bg-center transition-[border-radius] w-full h-full overflow-auto scrollbar-hide", {
					"rounded-b-[2rem]": !n
				}),
				style: {
					backgroundImage: "url(images/app_bg_effect.png)"
				},
				children: c.jsx(c.Fragment, {
					children: e
				})
			})]
		})
	};
var ef = {
		color: void 0,
		size: void 0,
		className: void 0,
		style: void 0,
		attr: void 0
	},
	Na = et.createContext && et.createContext(ef),
	Ct = function() {
		return Ct = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) {
				t = arguments[n];
				for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
			}
			return e
		}, Ct.apply(this, arguments)
	},
	lh = function(e, t) {
		var n = {};
		for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
		if (e != null && typeof Object.getOwnPropertySymbols == "function")
			for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
		return n
	};

function tf(e) {
	return e && e.map(function(t, n) {
		return et.createElement(t.tag, Ct({
			key: n
		}, t.attr), tf(t.child))
	})
}

function ze(e) {
	return function(t) {
		return et.createElement(sh, Ct({
			attr: Ct({}, e.attr)
		}, t), tf(e.child))
	}
}

function sh(e) {
	var t = function(n) {
		var r = e.attr,
			i = e.size,
			l = e.title,
			s = lh(e, ["attr", "size", "title"]),
			o = i || n.size || "1em",
			a;
		return n.className && (a = n.className), e.className && (a = (a ? a + " " : "") + e.className), et.createElement("svg", Ct({
			stroke: "currentColor",
			fill: "currentColor",
			strokeWidth: "0"
		}, n.attr, r, s, {
			className: a,
			style: Ct(Ct({
				color: e.color || n.color
			}, n.style), e.style),
			height: o,
			width: o,
			xmlns: "http://www.w3.org/2000/svg"
		}), l && et.createElement("title", null, l), e.children)
	};
	return Na !== void 0 ? et.createElement(Na.Consumer, null, function(n) {
		return t(n)
	}) : t(ef)
}

function oh(e) {
	return ze({
		tag: "svg",
		attr: {
			viewBox: "0 0 512 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"
			}
		}]
	})(e)
}

function ah(e) {
	return ze({
		tag: "svg",
		attr: {
			viewBox: "0 0 512 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M208 448V320h96v128h97.6V256H464L256 64 48 256h62.4v192z"
			}
		}]
	})(e)
}

function Ca(e) {
	return ze({
		tag: "svg",
		attr: {
			viewBox: "0 0 640 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"
			}
		}]
	})(e)
}

function uh(e) {
	return ze({
		tag: "svg",
		attr: {
			viewBox: "0 0 512 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
			}
		}]
	})(e)
}

function ch(e) {
	return ze({
		tag: "svg",
		attr: {
			viewBox: "0 0 576 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
			}
		}]
	})(e)
}

function fh(e) {
	return ze({
		tag: "svg",
		attr: {
			viewBox: "0 0 640 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"
			}
		}]
	})(e)
}

function dh(e) {
	return ze({
		tag: "svg",
		attr: {
			viewBox: "0 0 448 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
			}
		}]
	})(e)
}

function ph(e) {
	return ze({
		tag: "svg",
		attr: {
			viewBox: "0 0 640 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
			}
		}]
	})(e)
}
const hh = ({
	isOpen: e,
	onClose: t,
	children: n,
	title: r,
	error: i
}) => c.jsx("div", {
	className: nt("fixed inset-0 flex items-center justify-center bg-black bg-opacity-50", {
		hidden: !e
	}),
	children: c.jsxs("div", {
		className: "relative bg-dark p-6 rounded-lg shadow-lg w-96 border border-white/15",
		children: [c.jsxs("div", {
			className: "flex items-center gap-2",
			children: [c.jsx(uh, {
				className: "w-5 h-5"
			}), r && c.jsx("h2", {
				className: "text-xl font-bold",
				children: r
			})]
		}), c.jsx("hr", {
			className: "border-white/15 my-3"
		}), c.jsx("div", {
			children: n
		}), c.jsx("button", {
			onClick: t,
			className: "absolute top-2 right-2 opacity-50 hover:opacity-100 transition-opacity",
			children: c.jsx(oh, {
				className: "w-6 h-6"
			})
		}), i && c.jsx("div", {
			className: "mt-3 -mb-3",
			children: c.jsx("h1", {
				className: "text-[#FF6153] text-sm",
				children: i
			})
		})]
	})
});
async function Lt(e, t, n) {
	const r = {
		method: "post",
		headers: {
			"Content-Type": "application/json; charset=UTF-8"
		},
		body: JSON.stringify(t)
	};
	if (ki() && n) return n;
	const i = window.GetParentResourceName ? window.GetParentResourceName() : "none";
	return await (await fetch(`https://${i}/${e}`, r)).json()
}

function gh(e) {
	return ze({
		tag: "svg",
		attr: {
			viewBox: "0 0 24 24"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 10H7v-2h5v2zm5-4H7V8h10v2z"
			}
		}]
	})(e)
}

function mh(e) {
	return ze({
		tag: "svg",
		attr: {
			viewBox: "0 0 384 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"
			}
		}]
	})(e)
}

function vh(e) {
	return ze({
		tag: "svg",
		attr: {
			viewBox: "0 0 640 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z"
			}
		}]
	})(e)
}
const yh = () => {
		const {
			Ranks: e
		} = Rt(), {
			t
		} = Ge(), n = () => e.map((r, i) => c.jsxs("div", {
			className: "flex items-center h-14 rounded bg-white/10",
			children: [c.jsx("div", {
				className: "relative w-14 h-14 min-w-14 min-h-14 rounded-l overflow-hidden flex items-center justify-center",
				children: c.jsx(ch, {
					className: "text-FFA944"
				})
			}), c.jsxs("div", {
				className: "flex items-center gap-2 ml-6 mr-2 w-48 relative",
				children: [c.jsx("div", {
					className: "bg-white/10 relative w-9 h-9 flex items-center justify-center overflow-hidden rounded",
					children: c.jsx("img", {
						src: `images/profiles/${r.photo}.png`,
						alt: "profile",
						className: "w-full h-full"
					})
				}), c.jsx("h1", {
					className: "text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis",
					children: r.characterName
				})]
			}), c.jsx("div", {
				className: "mr-8 bg-[#FF4747]/10 border-2 border-[#FF4747] w-8 min-w-8 h-8 flex items-center justify-center",
				children: c.jsx("h1", {
					className: "text-sm font-bold text-[#FF4747]",
					children: r.level
				})
			}), c.jsx("div", {
				className: "bg-[#FF4747]/10 border-2 border-[#FF4747] flex items-center justify-center min-h-8 h-8 px-2",
				children: c.jsx("h1", {
					className: "text-sm font-medium text-[#FF4747]",
					children: r.exp
				})
			})]
		}, i));
		return c.jsxs(c.Fragment, {
			children: [c.jsxs("div", {
				className: "rounded-t-lg flex p-3 text-xs",
				style: {
					background: "linear-gradient(89.95deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.09) 100%)"
				},
				children: [c.jsx("h1", {
					className: "mr-9 ml-4",
					children: "Rank"
				}), c.jsx("h1", {
					className: "mr-36 ml-3.5",
					children: t("name")
				}), c.jsx("h1", {
					className: "ml-2 mr-10",
					children: t("level")
				}), c.jsx("h1", {
					children: t("rep")
				})]
			}), c.jsx("div", {
				className: "w-full h-full overflow-auto flex flex-col gap-3 p-3 bg-white/5 rounded-b-lg",
				children: c.jsx(n, {})
			})]
		})
	},
	xh = () => {
		const {
			Tasks: e,
			userProfile: t
		} = Rt(), {
			t: n
		} = Ge(), r = async s => {
			await Lt("nui:startLobbyWithTask", s, !0)
		}, i = s => {
			if (!t || typeof(t == null ? void 0 : t.exp) != "number" || !t.nextLevelExp) return 0;
			const o = t.exp,
				a = s,
				u = t.nextLevelExp;
			return o + a >= u ? 100 : (o + a) / u * 100
		}, l = () => e.map((s, o) => c.jsxs("div", {
			className: "flex items-center h-14 rounded bg-white/10",
			children: [c.jsx("div", {
				className: "relative w-14 h-14 min-w-14 min-h-14 rounded-l overflow-hidden flex items-center justify-center",
				children: c.jsx("img", {
					className: "w-14 h-14",
					src: "images/gta_atlas.png",
					alt: "gta_atlas"
				})
			}), c.jsx("div", {
				className: "flex items-center gap-2 ml-6 mr-3 min-w-44",
				children: c.jsxs("div", {
					className: "flex items-center gap-1",
					children: [c.jsx("h1", {
						className: "text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis mr-1",
						children: s.title
					}), c.jsxs("h1", {
						className: "font-semibold text-FF4747 text-sm",
						children: ["[1-", s.max_client, "]"]
					}), s.max_client == 1 ? c.jsx(dh, {
						className: "text-FF4747 w-5 h-5"
					}) : s.max_client == 2 ? c.jsx(fh, {
						className: "text-FF4747 w-5 h-5"
					}) : c.jsx(ph, {
						className: "text-FF4747 w-5 h-5"
					})]
				})
			}), c.jsx("div", {
				className: "mr-3 bg-[#FF4747]/10 border-2 border-[#FF4747] w-8 min-w-8 h-8 flex items-center justify-center",
				children: c.jsx("h1", {
					className: "text-sm font-bold text-[#FF4747]",
					children: s.level
				})
			}), c.jsx("div", {
				className: "bg-[#FF4747]/10 border-2 border-[#FF4747] w-40 min-w-20 2xl:min-w-40 h-8 flex items-center justify-center",
				children: c.jsxs("h1", {
					className: "text-sm font-medium text-[#FF4747]",
					children: [n("money_type"), s.fee.toLocaleString()]
				})
			}), c.jsx("div", {
				className: "w-full h-8 mx-3 bg-white/10 border border-[#7c7c7c] flex items-center justify-center px-3",
				children: c.jsx("div", {
					className: "relative w-full h-1.5 bg-white/20 rounded-3xl overflow-hidden",
					children: c.jsx("div", {
						className: "absolute h-full bg-white rounded-3xl",
						style: {
							width: i(s.exp) + "%"
						}
					})
				})
			}), c.jsx("button", {
				onClick: () => r(s.unique_id),
				className: "mr-3 min-h-8 min-w-11 flex items-center justify-center border-2 border-[#FF4747] bg-[#FF4747]/25",
				children: c.jsx("img", {
					src: "images/icons/location.svg",
					alt: "location",
					className: "w-4 h-4"
				})
			})]
		}, o));
		return c.jsxs(c.Fragment, {
			children: [c.jsxs("div", {
				className: "rounded-t-lg flex p-3 text-xs",
				style: {
					background: "linear-gradient(89.95deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.09) 100%)"
				},
				children: [c.jsx("h1", {
					className: "mr-16 ml-3",
					children: n("maps")
				}), c.jsx("h1", {
					className: "mr-32",
					children: n("title")
				}), c.jsx("h1", {
					className: "ml-2 mr-16",
					children: n("level")
				}), c.jsx("h1", {
					className: "ml-1 mr-20",
					children: n("rewards")
				}), c.jsx("h1", {
					children: n("rep")
				}), c.jsx("h1", {
					className: "ml-auto mr-7",
					children: n("gps")
				})]
			}), c.jsx("div", {
				className: "w-full h-full overflow-auto flex flex-col gap-3 p-3 bg-white/5 rounded-b-lg",
				children: c.jsx(l, {})
			})]
		})
	};

function wh(e) {
	return ze({
		tag: "svg",
		attr: {
			fill: "currentColor",
			viewBox: "0 0 16 16"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
			}
		}]
	})(e)
}
const Sh = () => {
		const {
			t: e
		} = Ge(), {
			userProfile: t,
			currentLobby: n
		} = Rt(), [r, i] = T.useState(), [l, s] = T.useState(void 0), [o, a] = T.useState(t.photo), [u, p] = T.useState(), [g, f] = T.useState("tasks"), v = async () => {
			await Lt("nui:updateProfilePhoto", o, !0)
		}, x = () => !t || !t.exp || !t.nextLevelExp ? 0 : t.exp / t.nextLevelExp * 100, w = () => {
			s(void 0), i("profile-photo")
		}, P = () => {
			s(void 0), i("invite")
		}, h = async () => {
			const M = await Lt("nui:sendInviteToPlayer", u, {
				error: void 0
			});
			p(void 0), M.error ? s(M.error) : (s(void 0), i(void 0))
		}, d = () => c.jsxs("div", {
			className: "px-3 pt-3 pb-4 flex flex-col gap-1 rounded-b-lg",
			style: {
				background: "rgba(16,16,16,.45)"
			},
			children: [c.jsxs("div", {
				className: "flex items-center justify-between",
				children: [c.jsx("h1", {
					className: "text-11 font-semibold",
					children: e("reputation")
				}), c.jsxs("h1", {
					className: "text-11 font-semibold",
					children: [t.exp, "/", t.nextLevelExp]
				})]
			}), c.jsx("div", {
				className: "h-1 bg-43 rounded relative overflow-hidden",
				children: c.jsx("div", {
					className: "absolute h-full bg-white rounded-r",
					style: {
						width: `${x()}%`
					}
				})
			})]
		}), m = ({
			isLeader: M
		}) => c.jsxs("button", {
			onClick: w,
			className: "relative w-11 h-11 bg-white/10 rounded",
			children: [c.jsx("div", {
				className: "relative flex items-center justify-center w-full h-full overflow-hidden rounded",
				children: c.jsx("img", {
					src: `images/profiles/${t.photo}.png`,
					alt: "profile",
					className: "w-full h-full"
				})
			}), M && c.jsx(Ca, {
				className: "absolute -top-1.5 -left-1.5 text-FFA944 z-10"
			})]
		}), y = () => c.jsxs("div", {
			className: "flex gap-1.5",
			children: [!n.id && c.jsx(m, {
				isLeader: !0
			}), Array(n.id ? 4 : 3).fill(void 0).map((M, ye) => {
				var Ve, _e, Be;
				return c.jsx("div", {
					className: "relative w-11 h-11 bg-white/10 rounded",
					children: n.id && n.members[ye] ? c.jsxs(c.Fragment, {
						children: [c.jsx("button", {
							onClick: ((Ve = n.members[ye]) == null ? void 0 : Ve.source) == t.source ? w : () => {},
							className: nt("relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg", {
								"cursor-default": ((_e = n.members[ye]) == null ? void 0 : _e.source) != t.source
							}),
							children: c.jsx("img", {
								src: `images/profiles/${(Be=n.members[ye])==null?void 0:Be.photo}.png`,
								alt: "profile",
								className: "w-full h-full"
							})
						}), n.members[ye].source == n.leaderId && c.jsx(Ca, {
							className: "absolute -top-1.5 -left-1.5 text-FFA944 z-10"
						})]
					}) : c.jsx("button", {
						onClick: P,
						className: "relative w-full h-full flex items-center justify-center group",
						children: c.jsx(wh, {
							className: "w-6 h-6 text-white brightness-50 group-hover:brightness-100 transition"
						})
					})
				}, ye)
			})]
		}), k = () => c.jsx(c.Fragment, {
			children: c.jsxs("div", {
				className: "flex flex-col",
				children: [c.jsx(C, {}), c.jsx(d, {})]
			})
		}), C = () => c.jsx("div", {
			className: "rounded-t-lg flex flex-col justify-center py-3 pl-3 pr-2",
			style: {
				background: "linear-gradient(89deg, rgba(255, 255, 255, 0.12) 0%, rgba(40, 40, 40, 0.12) 100%)"
			},
			children: c.jsxs("div", {
				className: "flex justify-between",
				children: [c.jsxs("div", {
					className: "flex flex-col",
					children: [c.jsxs("div", {
						className: "flex items-center gap-1",
						children: [c.jsx("h1", {
							className: "text-sm font-semibold leading-4",
							children: e("total_reputation")
						}), c.jsx(gh, {
							className: "w-5 h-5 min-w-5 min-h-5"
						})]
					}), c.jsxs("h1", {
						className: "font-semibold text-11",
						children: [e("level"), " ", t.level]
					})]
				}), c.jsx(y, {})]
			})
		}), N = () => c.jsxs("div", {
			className: "p-3 rounded-lg flex flex-col gap-3 h-full",
			style: {
				background: "linear-gradient(88.63deg, rgba(255, 255, 255, 0.12) 0%, rgba(40, 40, 40, 0.12) 100%)"
			},
			children: [c.jsxs("div", {
				className: "flex justify-between items-center",
				children: [c.jsxs("div", {
					className: "flex flex-col",
					children: [c.jsx("h1", {
						className: "font-semibold text-sm",
						children: e("garbage_about")
					}), c.jsx("h1", {
						className: "text-xs font-semibold",
						children: e("victor_goods")
					})]
				}), c.jsx(mh, {
					className: "w-6 h-6"
				})]
			}), c.jsx("h1", {
				className: "text-11",
				children: e("desc_garbage_about")
			}), c.jsx("div", {
				className: "grayscale rounded-lg bg-cover bg-bottom h-40",
				style: {
					backgroundImage: "url(images/info-bg.png)"
				}
			})]
		}), L = () => r === "profile-photo" ? c.jsxs(c.Fragment, {
			children: [c.jsx("div", {
				className: "flex flex-wrap items-center justify-center gap-3",
				children: [1, 2, 3, 4, 5, 6, 7].map(M => c.jsx("button", {
					onClick: () => a(M),
					className: `w-16 h-16 border border-transparent rounded bg-white/15 overflow-hidden ${o===M?"border-white":""}`,
					children: c.jsx("div", {
						className: "w-full h-full overflow-hidden flex items-center justify-center",
						children: c.jsx("img", {
							src: `images/profiles/${M}.png`,
							alt: "profile-photo"
						})
					})
				}, M))
			}), c.jsx("div", {
				className: "flex justify-center mt-4",
				children: c.jsx("button", {
					onClick: v,
					className: "px-8 py-2 text-white rounded bg-green-600",
					children: c.jsx("h1", {
						className: "font-bold text-sm",
						children: e("save")
					})
				})
			})]
		}) : c.jsxs("div", {
			className: "flex flex-col gap-3",
			children: [c.jsx("input", {
				autoFocus: !0,
				className: "rounded bg-transparent ring-0 outline-none p-1.5 border border-white/50 focus:border-white text-center text-sm font-semibold",
				placeholder: e("player_id") + "...",
				type: "number",
				value: u,
				onChange: M => p(parseInt(M.currentTarget.value))
			}), c.jsx("button", {
				onClick: h,
				className: "font-semibold text-sm text-FF4747 bg-FF4747/25 hover:bg-FF4747/30 transition p-1.5 rounded border border-FF4747",
				children: e("invite")
			})]
		}), A = () => c.jsx("div", {
			className: "min-h-48 rounded-t-xl bg-cover relative",
			style: {
				backgroundImage: "url(images/app_delivery_bg.png)",
				boxShadow: "0px 4px 4px 0px #00000040"
			},
			children: c.jsxs("div", {
				className: "absolute bottom-1 right-4 flex items-center gap-2",
				children: [c.jsx("button", {
					onClick: () => f("tasks"),
					className: nt("border-2 p-1 rounded bg-FF4747/40 shadow-lg hover:border-FF4747", {
						"border-FF4747": g == "tasks",
						"border-FF4747/40": g == "ranks"
					}),
					children: c.jsx(ah, {
						className: "w-5 h-5"
					})
				}), c.jsx("button", {
					onClick: () => f("ranks"),
					className: nt("border-2 p-1 rounded bg-FFA944/40 shadow-lg hover:border-FFA944", {
						"border-FFA944": g == "ranks",
						"border-FFA944/40": g == "tasks"
					}),
					children: c.jsx(vh, {
						className: "w-5 h-5"
					})
				})]
			})
		}), z = () => c.jsx("div", {
			className: "rounded min-h-[81px] max-h-[81px] w-full overflow-hidden",
			children: c.jsx("div", {
				className: "w-full h-full bg-center bg-cover",
				style: {
					backgroundImage: "url(images/graph.png)"
				}
			})
		});
		return c.jsxs("div", {
			className: "relative flex flex-col gap-3 p-6 w-full h-full overflow-auto",
			children: [c.jsx(A, {}), c.jsxs("div", {
				className: "flex gap-3 w-full h-full overflow-auto scrollbar-hide",
				children: [c.jsxs("div", {
					className: "w-2/5 h-full flex flex-col gap-3",
					children: [c.jsx(k, {}), c.jsx(N, {}), c.jsx(z, {})]
				}), c.jsxs("div", {
					className: "w-full h-full flex flex-col overflow-auto",
					children: [g == "tasks" && c.jsx(xh, {}), g == "ranks" && c.jsx(yh, {})]
				})]
			}), c.jsx(hh, {
				isOpen: !!r,
				onClose: () => i(void 0),
				title: r && e(r === "invite" ? "invite" : "update_photo"),
				error: l,
				children: c.jsx(L, {})
			})]
		})
	},
	nf = T.createContext({}),
	kh = () => T.useContext(nf),
	Nh = () => {
		const {
			isAppRunning: e,
			page: t,
			currentLobby: n,
			taskInfo: r,
			setIsAppRunning: i
		} = Rt(), {
			visible: l
		} = kh(), {
			t: s
		} = Ge(), o = {
			garbage: {
				shortcut: c.jsx(th, {}),
				main: c.jsx(ih, {
					children: c.jsx(Sh, {})
				})
			},
			// delivery: {
			// 	shortcut: c.jsx(nh, {}),
			// 	main: () => {
			// 		Lt("nui:openBundleApp", "delivery", !0)
			// 	}
			// },
			// towtruck: {
			// 	shortcut: c.jsx(rh, {}),
			// 	main: () => {
			// 		Lt("nui:openBundleApp", "towtruck", !0)
			// 	}
			// }
		}, a = () => c.jsx("div", {
			className: "w-full h-full relative pt-6 pl-6 flex flex-col gap-6",
			children: Object.keys(o).map(p => c.jsx(et.Fragment, {
				children: o[p].shortcut
			}, p))
		}), u = () => {
			var g;
			const p = (g = o[t]) == null ? void 0 : g.main;
			return typeof p == "function" ? (p(), i(!1), c.jsx(c.Fragment, {})) : et.isValidElement(p) ? p : c.jsx(c.Fragment, {})
		};
		return c.jsxs(c.Fragment, {
			children: [c.jsx("div", {
				className: "w-full h-full z-10",
				style: {
					visibility: l ? "visible" : "hidden"
				},
				children: c.jsx(eh, {
					children: e ? c.jsx(u, {}) : c.jsx(a, {})
				})
			}), n.id && n.isTaskStarted && c.jsx("div", {
				className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-0",
				children: c.jsxs("div", {
					className: "relative min-w-64 max-w-64 flex flex-col items-center justify-center gap-3",
					children: [c.jsx("div", {
						children: c.jsxs("h1", {
							className: "text-xs font-bold text-FF4747 shadow-FF4747 p-1 px-3 bg-FF4747/10 border border-FF4747/15",
							children: [c.jsx("span", {
								children: s("progress")
							}), c.jsx("span", {
								children: " "
							}), c.jsx("span", {
								children: n.taskProgress
							}), c.jsx("span", {
								children: "/"
							}), c.jsx("span", {
								children: n.goals
							})]
						})
					}), c.jsx("div", {
						className: "relative h-0.5 w-full bg-white/15 flex justify-center rounded-3xl",
						children: c.jsx("div", {
							className: `absolute h-full w-2/3 bg-FF4747 rounded-3xl\r
                  shadow-[0_0_3px] shadow-FF4747`
						})
					}), c.jsx("div", {
						className: "w-full flex items-center justify-center p-2 bg-white/10 text-center rounded border border-white/25",
						children: c.jsx("h1", {
							className: "text-xs font-medium",
							children: r ?? s("continue_task")
						})
					})]
				})
			})]
		})
	},
	je = (e, t) => {
		const n = T.useRef(Tp);
		T.useEffect(() => {
			n.current = t
		}, [t]), T.useEffect(() => {
			const r = i => {
				const {
					action: l,
					data: s
				} = i.data;
				n.current && l === e && n.current(s)
			};
			return window.addEventListener("message", r), () => window.removeEventListener("message", r)
		}, [e])
	},
	Ch = ({
		children: e
	}) => {
		const [t, n] = T.useState(!1);
		T.useEffect(() => {
			if (!t) return;
			const i = l => {
				!ki() && ["Escape"].includes(l.code) && Lt("nui:hideFrame", !0, !0)
			};
			return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i)
		}, [t]), je("ui:setVisible", n);
		const r = T.useMemo(() => ({
			visible: t,
			setVisible: n
		}), [t]);
		return c.jsx(nf.Provider, {
			value: r,
			children: c.jsx("main", {
				className: nt("w-full h-screen", {
					"bg-black/75": ki()
				}),
				children: e
			})
		})
	},
	jh = ({
		children: e
	}) => {
		const {
			i18n: t
		} = Ge(), [n, r] = T.useState("garbage"), [i, l] = T.useState({}), [s, o] = T.useState({}), [a, u] = T.useState(!1), [p, g] = T.useState([]), [f, v] = T.useState(null), [x, w] = T.useState([]);
		T.useEffect(() => {
			Lt("nui:loadUI", !0, !0)
		}, []), je("ui:setupUI", h => {
			h.setLocale && t.addResourceBundle("en", "translation", h.setLocale), h.setTasks && g(Object.values(h.setTasks)), Lt("nui:onLoadUI", !0, !0)
		}), je("ui:setPage", r), je("ui:setUserProfile", l), je("ui:setCurrentLobby", o), je("ui:setLobbyMembers", h => {
			o(d => ({
				...d,
				members: h
			}))
		}), je("ui:setProfilePhoto", h => {
			l(d => ({
				...d,
				photo: h
			}))
		}), je("ui:setTaskProgress", h => {
			o(d => ({
				...d,
				taskProgress: h
			}))
		}), je("ui:setTasks", g), je("ui:setTaskInfo", v), je("ui:setRanks", h => {
			w(Object.values(h))
		}), je("ui:setDebug", () => {
			u(!0)
		});
		const P = {
			page: n,
			setPage: r,
			userProfile: i,
			currentLobby: s,
			isAppRunning: a,
			setIsAppRunning: u,
			Tasks: p,
			taskInfo: f,
			Ranks: x
		};
		return c.jsx(Gc.Provider, {
			value: P,
			children: e
		})
	},
	R = e => typeof e == "string",
	Mn = () => {
		let e, t;
		const n = new Promise((r, i) => {
			e = r, t = i
		});
		return n.resolve = e, n.reject = t, n
	},
	ja = e => e == null ? "" : "" + e,
	Eh = (e, t, n) => {
		e.forEach(r => {
			t[r] && (n[r] = t[r])
		})
	},
	Lh = /###/g,
	Ea = e => e && e.indexOf("###") > -1 ? e.replace(Lh, ".") : e,
	La = e => !e || R(e),
	Xn = (e, t, n) => {
		const r = R(t) ? t.split(".") : t;
		let i = 0;
		for (; i < r.length - 1;) {
			if (La(e)) return {};
			const l = Ea(r[i]);
			!e[l] && n && (e[l] = new n), Object.prototype.hasOwnProperty.call(e, l) ? e = e[l] : e = {}, ++i
		}
		return La(e) ? {} : {
			obj: e,
			k: Ea(r[i])
		}
	},
	Pa = (e, t, n) => {
		const {
			obj: r,
			k: i
		} = Xn(e, t, Object);
		if (r !== void 0 || t.length === 1) {
			r[i] = n;
			return
		}
		let l = t[t.length - 1],
			s = t.slice(0, t.length - 1),
			o = Xn(e, s, Object);
		for (; o.obj === void 0 && s.length;) l = `${s[s.length-1]}.${l}`, s = s.slice(0, s.length - 1), o = Xn(e, s, Object), o && o.obj && typeof o.obj[`${o.k}.${l}`] < "u" && (o.obj = void 0);
		o.obj[`${o.k}.${l}`] = n
	},
	Ph = (e, t, n, r) => {
		const {
			obj: i,
			k: l
		} = Xn(e, t, Object);
		i[l] = i[l] || [], i[l].push(n)
	},
	Ni = (e, t) => {
		const {
			obj: n,
			k: r
		} = Xn(e, t);
		if (n) return n[r]
	},
	Oh = (e, t, n) => {
		const r = Ni(e, n);
		return r !== void 0 ? r : Ni(t, n)
	},
	rf = (e, t, n) => {
		for (const r in t) r !== "__proto__" && r !== "constructor" && (r in e ? R(e[r]) || e[r] instanceof String || R(t[r]) || t[r] instanceof String ? n && (e[r] = t[r]) : rf(e[r], t[r], n) : e[r] = t[r]);
		return e
	},
	Zt = e => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Fh = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': "&quot;",
	"'": "&#39;",
	"/": "&#x2F;"
};
const Rh = e => R(e) ? e.replace(/[&<>"'\/]/g, t => Fh[t]) : e;
class zh {
	constructor(t) {
		this.capacity = t, this.regExpMap = new Map, this.regExpQueue = []
	}
	getRegExp(t) {
		const n = this.regExpMap.get(t);
		if (n !== void 0) return n;
		const r = new RegExp(t);
		return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(t, r), this.regExpQueue.push(t), r
	}
}
const _h = [" ", ",", "?", "!", ";"],
	Th = new zh(20),
	Ih = (e, t, n) => {
		t = t || "", n = n || "";
		const r = _h.filter(s => t.indexOf(s) < 0 && n.indexOf(s) < 0);
		if (r.length === 0) return !0;
		const i = Th.getRegExp(`(${r.map(s=>s==="?"?"\\?":s).join("|")})`);
		let l = !i.test(e);
		if (!l) {
			const s = e.indexOf(n);
			s > 0 && !i.test(e.substring(0, s)) && (l = !0)
		}
		return l
	},
	hs = function(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
		if (!e) return;
		if (e[t]) return e[t];
		const r = t.split(n);
		let i = e;
		for (let l = 0; l < r.length;) {
			if (!i || typeof i != "object") return;
			let s, o = "";
			for (let a = l; a < r.length; ++a)
				if (a !== l && (o += n), o += r[a], s = i[o], s !== void 0) {
					if (["string", "number", "boolean"].indexOf(typeof s) > -1 && a < r.length - 1) continue;
					l += a - l + 1;
					break
				} i = s
		}
		return i
	},
	Ci = e => e && e.replace("_", "-"),
	Mh = {
		type: "logger",
		log(e) {
			this.output("log", e)
		},
		warn(e) {
			this.output("warn", e)
		},
		error(e) {
			this.output("error", e)
		},
		output(e, t) {
			console && console[e] && console[e].apply(console, t)
		}
	};
class ji {
	constructor(t) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		this.init(t, n)
	}
	init(t) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		this.prefix = n.prefix || "i18next:", this.logger = t || Mh, this.options = n, this.debug = n.debug
	}
	log() {
		for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
		return this.forward(n, "log", "", !0)
	}
	warn() {
		for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
		return this.forward(n, "warn", "", !0)
	}
	error() {
		for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
		return this.forward(n, "error", "")
	}
	deprecate() {
		for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
		return this.forward(n, "warn", "WARNING DEPRECATED: ", !0)
	}
	forward(t, n, r, i) {
		return i && !this.debug ? null : (R(t[0]) && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t))
	}
	create(t) {
		return new ji(this.logger, {
			prefix: `${this.prefix}:${t}:`,
			...this.options
		})
	}
	clone(t) {
		return t = t || this.options, t.prefix = t.prefix || this.prefix, new ji(this.logger, t)
	}
}
var Qe = new ji;
class Hi {
	constructor() {
		this.observers = {}
	}
	on(t, n) {
		return t.split(" ").forEach(r => {
			this.observers[r] || (this.observers[r] = new Map);
			const i = this.observers[r].get(n) || 0;
			this.observers[r].set(n, i + 1)
		}), this
	}
	off(t, n) {
		if (this.observers[t]) {
			if (!n) {
				delete this.observers[t];
				return
			}
			this.observers[t].delete(n)
		}
	}
	emit(t) {
		for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
		this.observers[t] && Array.from(this.observers[t].entries()).forEach(s => {
			let [o, a] = s;
			for (let u = 0; u < a; u++) o(...r)
		}), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(s => {
			let [o, a] = s;
			for (let u = 0; u < a; u++) o.apply(o, [t, ...r])
		})
	}
}
class Oa extends Hi {
	constructor(t) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
			ns: ["translation"],
			defaultNS: "translation"
		};
		super(), this.data = t || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
	}
	addNamespaces(t) {
		this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
	}
	removeNamespaces(t) {
		const n = this.options.ns.indexOf(t);
		n > -1 && this.options.ns.splice(n, 1)
	}
	getResource(t, n, r) {
		let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
		const l = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
			s = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
		let o;
		t.indexOf(".") > -1 ? o = t.split(".") : (o = [t, n], r && (Array.isArray(r) ? o.push(...r) : R(r) && l ? o.push(...r.split(l)) : o.push(r)));
		const a = Ni(this.data, o);
		return !a && !n && !r && t.indexOf(".") > -1 && (t = o[0], n = o[1], r = o.slice(2).join(".")), a || !s || !R(r) ? a : hs(this.data && this.data[t] && this.data[t][n], r, l)
	}
	addResource(t, n, r, i) {
		let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
			silent: !1
		};
		const s = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator;
		let o = [t, n];
		r && (o = o.concat(s ? r.split(s) : r)), t.indexOf(".") > -1 && (o = t.split("."), i = n, n = o[1]), this.addNamespaces(n), Pa(this.data, o, i), l.silent || this.emit("added", t, n, r, i)
	}
	addResources(t, n, r) {
		let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
			silent: !1
		};
		for (const l in r)(R(r[l]) || Array.isArray(r[l])) && this.addResource(t, n, l, r[l], {
			silent: !0
		});
		i.silent || this.emit("added", t, n, r)
	}
	addResourceBundle(t, n, r, i, l) {
		let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
				silent: !1,
				skipCopy: !1
			},
			o = [t, n];
		t.indexOf(".") > -1 && (o = t.split("."), i = r, r = n, n = o[1]), this.addNamespaces(n);
		let a = Ni(this.data, o) || {};
		s.skipCopy || (r = JSON.parse(JSON.stringify(r))), i ? rf(a, r, l) : a = {
			...a,
			...r
		}, Pa(this.data, o, a), s.silent || this.emit("added", t, n, r)
	}
	removeResourceBundle(t, n) {
		this.hasResourceBundle(t, n) && delete this.data[t][n], this.removeNamespaces(n), this.emit("removed", t, n)
	}
	hasResourceBundle(t, n) {
		return this.getResource(t, n) !== void 0
	}
	getResourceBundle(t, n) {
		return n || (n = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
			...this.getResource(t, n)
		} : this.getResource(t, n)
	}
	getDataByLanguage(t) {
		return this.data[t]
	}
	hasLanguageSomeTranslations(t) {
		const n = this.getDataByLanguage(t);
		return !!(n && Object.keys(n) || []).find(i => n[i] && Object.keys(n[i]).length > 0)
	}
	toJSON() {
		return this.data
	}
}
var lf = {
	processors: {},
	addPostProcessor(e) {
		this.processors[e.name] = e
	},
	handle(e, t, n, r, i) {
		return e.forEach(l => {
			this.processors[l] && (t = this.processors[l].process(t, n, r, i))
		}), t
	}
};
const Fa = {};
class Ei extends Hi {
	constructor(t) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		super(), Eh(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Qe.create("translator")
	}
	changeLanguage(t) {
		t && (this.language = t)
	}
	exists(t) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
			interpolation: {}
		};
		if (t == null) return !1;
		const r = this.resolve(t, n);
		return r && r.res !== void 0
	}
	extractFromKey(t, n) {
		let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
		r === void 0 && (r = ":");
		const i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
		let l = n.ns || this.options.defaultNS || [];
		const s = r && t.indexOf(r) > -1,
			o = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !Ih(t, r, i);
		if (s && !o) {
			const a = t.match(this.interpolator.nestingRegexp);
			if (a && a.length > 0) return {
				key: t,
				namespaces: l
			};
			const u = t.split(r);
			(r !== i || r === i && this.options.ns.indexOf(u[0]) > -1) && (l = u.shift()), t = u.join(i)
		}
		return R(l) && (l = [l]), {
			key: t,
			namespaces: l
		}
	}
	translate(t, n, r) {
		if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), typeof n == "object" && (n = {
				...n
			}), n || (n = {}), t == null) return "";
		Array.isArray(t) || (t = [String(t)]);
		const i = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails,
			l = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
			{
				key: s,
				namespaces: o
			} = this.extractFromKey(t[t.length - 1], n),
			a = o[o.length - 1],
			u = n.lng || this.language,
			p = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
		if (u && u.toLowerCase() === "cimode") {
			if (p) {
				const y = n.nsSeparator || this.options.nsSeparator;
				return i ? {
					res: `${a}${y}${s}`,
					usedKey: s,
					exactUsedKey: s,
					usedLng: u,
					usedNS: a,
					usedParams: this.getUsedParamsDetails(n)
				} : `${a}${y}${s}`
			}
			return i ? {
				res: s,
				usedKey: s,
				exactUsedKey: s,
				usedLng: u,
				usedNS: a,
				usedParams: this.getUsedParamsDetails(n)
			} : s
		}
		const g = this.resolve(t, n);
		let f = g && g.res;
		const v = g && g.usedKey || s,
			x = g && g.exactUsedKey || s,
			w = Object.prototype.toString.apply(f),
			P = ["[object Number]", "[object Function]", "[object RegExp]"],
			h = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
			d = !this.i18nFormat || this.i18nFormat.handleAsObject,
			m = !R(f) && typeof f != "boolean" && typeof f != "number";
		if (d && f && m && P.indexOf(w) < 0 && !(R(h) && Array.isArray(f))) {
			if (!n.returnObjects && !this.options.returnObjects) {
				this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
				const y = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, f, {
					...n,
					ns: o
				}) : `key '${s} (${this.language})' returned an object instead of string.`;
				return i ? (g.res = y, g.usedParams = this.getUsedParamsDetails(n), g) : y
			}
			if (l) {
				const y = Array.isArray(f),
					k = y ? [] : {},
					C = y ? x : v;
				for (const N in f)
					if (Object.prototype.hasOwnProperty.call(f, N)) {
						const L = `${C}${l}${N}`;
						k[N] = this.translate(L, {
							...n,
							joinArrays: !1,
							ns: o
						}), k[N] === L && (k[N] = f[N])
					} f = k
			}
		} else if (d && R(h) && Array.isArray(f)) f = f.join(h), f && (f = this.extendTranslation(f, t, n, r));
		else {
			let y = !1,
				k = !1;
			const C = n.count !== void 0 && !R(n.count),
				N = Ei.hasDefaultValue(n),
				L = C ? this.pluralResolver.getSuffix(u, n.count, n) : "",
				A = n.ordinal && C ? this.pluralResolver.getSuffix(u, n.count, {
					ordinal: !1
				}) : "",
				z = C && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(),
				M = z && n[`defaultValue${this.options.pluralSeparator}zero`] || n[`defaultValue${L}`] || n[`defaultValue${A}`] || n.defaultValue;
			!this.isValidLookup(f) && N && (y = !0, f = M), this.isValidLookup(f) || (k = !0, f = s);
			const Ve = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && k ? void 0 : f,
				_e = N && M !== f && this.options.updateMissing;
			if (k || y || _e) {
				if (this.logger.log(_e ? "updateKey" : "missingKey", u, a, s, _e ? M : f), l) {
					const j = this.resolve(s, {
						...n,
						keySeparator: !1
					});
					j && j.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
				}
				let Be = [];
				const at = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
				if (this.options.saveMissingTo === "fallback" && at && at[0])
					for (let j = 0; j < at.length; j++) Be.push(at[j]);
				else this.options.saveMissingTo === "all" ? Be = this.languageUtils.toResolveHierarchy(n.lng || this.language) : Be.push(n.lng || this.language);
				const Gt = (j, O, F) => {
					const B = N && F !== f ? F : Ve;
					this.options.missingKeyHandler ? this.options.missingKeyHandler(j, a, O, B, _e, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(j, a, O, B, _e, n), this.emit("missingKey", j, a, O, f)
				};
				this.options.saveMissing && (this.options.saveMissingPlurals && C ? Be.forEach(j => {
					const O = this.pluralResolver.getSuffixes(j, n);
					z && n[`defaultValue${this.options.pluralSeparator}zero`] && O.indexOf(`${this.options.pluralSeparator}zero`) < 0 && O.push(`${this.options.pluralSeparator}zero`), O.forEach(F => {
						Gt([j], s + F, n[`defaultValue${F}`] || M)
					})
				}) : Gt(Be, s, M))
			}
			f = this.extendTranslation(f, t, n, g, r), k && f === s && this.options.appendNamespaceToMissingKey && (f = `${a}:${s}`), (k || y) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${a}:${s}` : s, y ? f : void 0) : f = this.options.parseMissingKeyHandler(f))
		}
		return i ? (g.res = f, g.usedParams = this.getUsedParamsDetails(n), g) : f
	}
	extendTranslation(t, n, r, i, l) {
		var s = this;
		if (this.i18nFormat && this.i18nFormat.parse) t = this.i18nFormat.parse(t, {
			...this.options.interpolation.defaultVariables,
			...r
		}, r.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
			resolved: i
		});
		else if (!r.skipInterpolation) {
			r.interpolation && this.interpolator.init({
				...r,
				interpolation: {
					...this.options.interpolation,
					...r.interpolation
				}
			});
			const u = R(t) && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
			let p;
			if (u) {
				const f = t.match(this.interpolator.nestingRegexp);
				p = f && f.length
			}
			let g = r.replace && !R(r.replace) ? r.replace : r;
			if (this.options.interpolation.defaultVariables && (g = {
					...this.options.interpolation.defaultVariables,
					...g
				}), t = this.interpolator.interpolate(t, g, r.lng || this.language || i.usedLng, r), u) {
				const f = t.match(this.interpolator.nestingRegexp),
					v = f && f.length;
				p < v && (r.nest = !1)
			}!r.lng && this.options.compatibilityAPI !== "v1" && i && i.res && (r.lng = this.language || i.usedLng), r.nest !== !1 && (t = this.interpolator.nest(t, function() {
				for (var f = arguments.length, v = new Array(f), x = 0; x < f; x++) v[x] = arguments[x];
				return l && l[0] === v[0] && !r.context ? (s.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${n[0]}`), null) : s.translate(...v, n)
			}, r)), r.interpolation && this.interpolator.reset()
		}
		const o = r.postProcess || this.options.postProcess,
			a = R(o) ? [o] : o;
		return t != null && a && a.length && r.applyPostProcessor !== !1 && (t = lf.handle(a, t, n, this.options && this.options.postProcessPassResolved ? {
			i18nResolved: {
				...i,
				usedParams: this.getUsedParamsDetails(r)
			},
			...r
		} : r, this)), t
	}
	resolve(t) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
			r, i, l, s, o;
		return R(t) && (t = [t]), t.forEach(a => {
			if (this.isValidLookup(r)) return;
			const u = this.extractFromKey(a, n),
				p = u.key;
			i = p;
			let g = u.namespaces;
			this.options.fallbackNS && (g = g.concat(this.options.fallbackNS));
			const f = n.count !== void 0 && !R(n.count),
				v = f && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(),
				x = n.context !== void 0 && (R(n.context) || typeof n.context == "number") && n.context !== "",
				w = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
			g.forEach(P => {
				this.isValidLookup(r) || (o = P, !Fa[`${w[0]}-${P}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(o) && (Fa[`${w[0]}-${P}`] = !0, this.logger.warn(`key "${i}" for languages "${w.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), w.forEach(h => {
					if (this.isValidLookup(r)) return;
					s = h;
					const d = [p];
					if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(d, p, h, P, n);
					else {
						let y;
						f && (y = this.pluralResolver.getSuffix(h, n.count, n));
						const k = `${this.options.pluralSeparator}zero`,
							C = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
						if (f && (d.push(p + y), n.ordinal && y.indexOf(C) === 0 && d.push(p + y.replace(C, this.options.pluralSeparator)), v && d.push(p + k)), x) {
							const N = `${p}${this.options.contextSeparator}${n.context}`;
							d.push(N), f && (d.push(N + y), n.ordinal && y.indexOf(C) === 0 && d.push(N + y.replace(C, this.options.pluralSeparator)), v && d.push(N + k))
						}
					}
					let m;
					for (; m = d.pop();) this.isValidLookup(r) || (l = m, r = this.getResource(h, P, m, n))
				}))
			})
		}), {
			res: r,
			usedKey: i,
			exactUsedKey: l,
			usedLng: s,
			usedNS: o
		}
	}
	isValidLookup(t) {
		return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "")
	}
	getResource(t, n, r) {
		let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
		return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, n, r, i) : this.resourceStore.getResource(t, n, r, i)
	}
	getUsedParamsDetails() {
		let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"],
			r = t.replace && !R(t.replace);
		let i = r ? t.replace : t;
		if (r && typeof t.count < "u" && (i.count = t.count), this.options.interpolation.defaultVariables && (i = {
				...this.options.interpolation.defaultVariables,
				...i
			}), !r) {
			i = {
				...i
			};
			for (const l of n) delete i[l]
		}
		return i
	}
	static hasDefaultValue(t) {
		const n = "defaultValue";
		for (const r in t)
			if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0) return !0;
		return !1
	}
}
const vl = e => e.charAt(0).toUpperCase() + e.slice(1);
class Ra {
	constructor(t) {
		this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Qe.create("languageUtils")
	}
	getScriptPartFromCode(t) {
		if (t = Ci(t), !t || t.indexOf("-") < 0) return null;
		const n = t.split("-");
		return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"))
	}
	getLanguagePartFromCode(t) {
		if (t = Ci(t), !t || t.indexOf("-") < 0) return t;
		const n = t.split("-");
		return this.formatLanguageCode(n[0])
	}
	formatLanguageCode(t) {
		if (R(t) && t.indexOf("-") > -1) {
			if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u") try {
				let i = Intl.getCanonicalLocales(t)[0];
				if (i && this.options.lowerCaseLng && (i = i.toLowerCase()), i) return i
			} catch {}
			const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
			let r = t.split("-");
			return this.options.lowerCaseLng ? r = r.map(i => i.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = vl(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = vl(r[1].toLowerCase())), n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = vl(r[2].toLowerCase()))), r.join("-")
		}
		return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t
	}
	isSupportedCode(t) {
		return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1
	}
	getBestMatchFromCodes(t) {
		if (!t) return null;
		let n;
		return t.forEach(r => {
			if (n) return;
			const i = this.formatLanguageCode(r);
			(!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i)
		}), !n && this.options.supportedLngs && t.forEach(r => {
			if (n) return;
			const i = this.getLanguagePartFromCode(r);
			if (this.isSupportedCode(i)) return n = i;
			n = this.options.supportedLngs.find(l => {
				if (l === i) return l;
				if (!(l.indexOf("-") < 0 && i.indexOf("-") < 0) && (l.indexOf("-") > 0 && i.indexOf("-") < 0 && l.substring(0, l.indexOf("-")) === i || l.indexOf(i) === 0 && i.length > 1)) return l
			})
		}), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n
	}
	getFallbackCodes(t, n) {
		if (!t) return [];
		if (typeof t == "function" && (t = t(n)), R(t) && (t = [t]), Array.isArray(t)) return t;
		if (!n) return t.default || [];
		let r = t[n];
		return r || (r = t[this.getScriptPartFromCode(n)]), r || (r = t[this.formatLanguageCode(n)]), r || (r = t[this.getLanguagePartFromCode(n)]), r || (r = t.default), r || []
	}
	toResolveHierarchy(t, n) {
		const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
			i = [],
			l = s => {
				s && (this.isSupportedCode(s) ? i.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`))
			};
		return R(t) && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && l(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && l(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && l(this.getLanguagePartFromCode(t))) : R(t) && l(this.formatLanguageCode(t)), r.forEach(s => {
			i.indexOf(s) < 0 && l(this.formatLanguageCode(s))
		}), i
	}
}
let $h = [{
		lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
		nr: [1, 2],
		fc: 1
	}, {
		lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
		nr: [1, 2],
		fc: 2
	}, {
		lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
		nr: [1],
		fc: 3
	}, {
		lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
		nr: [1, 2, 5],
		fc: 4
	}, {
		lngs: ["ar"],
		nr: [0, 1, 2, 3, 11, 100],
		fc: 5
	}, {
		lngs: ["cs", "sk"],
		nr: [1, 2, 5],
		fc: 6
	}, {
		lngs: ["csb", "pl"],
		nr: [1, 2, 5],
		fc: 7
	}, {
		lngs: ["cy"],
		nr: [1, 2, 3, 8],
		fc: 8
	}, {
		lngs: ["fr"],
		nr: [1, 2],
		fc: 9
	}, {
		lngs: ["ga"],
		nr: [1, 2, 3, 7, 11],
		fc: 10
	}, {
		lngs: ["gd"],
		nr: [1, 2, 3, 20],
		fc: 11
	}, {
		lngs: ["is"],
		nr: [1, 2],
		fc: 12
	}, {
		lngs: ["jv"],
		nr: [0, 1],
		fc: 13
	}, {
		lngs: ["kw"],
		nr: [1, 2, 3, 4],
		fc: 14
	}, {
		lngs: ["lt"],
		nr: [1, 2, 10],
		fc: 15
	}, {
		lngs: ["lv"],
		nr: [1, 2, 0],
		fc: 16
	}, {
		lngs: ["mk"],
		nr: [1, 2],
		fc: 17
	}, {
		lngs: ["mnk"],
		nr: [0, 1, 2],
		fc: 18
	}, {
		lngs: ["mt"],
		nr: [1, 2, 11, 20],
		fc: 19
	}, {
		lngs: ["or"],
		nr: [2, 1],
		fc: 2
	}, {
		lngs: ["ro"],
		nr: [1, 2, 20],
		fc: 20
	}, {
		lngs: ["sl"],
		nr: [5, 1, 2, 3],
		fc: 21
	}, {
		lngs: ["he", "iw"],
		nr: [1, 2, 20, 21],
		fc: 22
	}],
	Dh = {
		1: e => +(e > 1),
		2: e => +(e != 1),
		3: e => 0,
		4: e => e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2,
		5: e => e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5,
		6: e => e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2,
		7: e => e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2,
		8: e => e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3,
		9: e => +(e >= 2),
		10: e => e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4,
		11: e => e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3,
		12: e => +(e % 10 != 1 || e % 100 == 11),
		13: e => +(e !== 0),
		14: e => e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3,
		15: e => e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2,
		16: e => e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2,
		17: e => e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1,
		18: e => e == 0 ? 0 : e == 1 ? 1 : 2,
		19: e => e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3,
		20: e => e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2,
		21: e => e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0,
		22: e => e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
	};
const Ah = ["v1", "v2", "v3"],
	Uh = ["v4"],
	za = {
		zero: 0,
		one: 1,
		two: 2,
		few: 3,
		many: 4,
		other: 5
	},
	Vh = () => {
		const e = {};
		return $h.forEach(t => {
			t.lngs.forEach(n => {
				e[n] = {
					numbers: t.nr,
					plurals: Dh[t.fc]
				}
			})
		}), e
	};
class Bh {
	constructor(t) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		this.languageUtils = t, this.options = n, this.logger = Qe.create("pluralResolver"), (!this.options.compatibilityJSON || Uh.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Vh(), this.pluralRulesCache = {}
	}
	addRule(t, n) {
		this.rules[t] = n
	}
	clearCache() {
		this.pluralRulesCache = {}
	}
	getRule(t) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		if (this.shouldUseIntlApi()) try {
			const r = Ci(t === "dev" ? "en" : t),
				i = n.ordinal ? "ordinal" : "cardinal",
				l = JSON.stringify({
					cleanedCode: r,
					type: i
				});
			if (l in this.pluralRulesCache) return this.pluralRulesCache[l];
			const s = new Intl.PluralRules(r, {
				type: i
			});
			return this.pluralRulesCache[l] = s, s
		} catch {
			return
		}
		return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
	}
	needsPlural(t) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		const r = this.getRule(t, n);
		return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1
	}
	getPluralFormsOfKey(t, n) {
		let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		return this.getSuffixes(t, r).map(i => `${n}${i}`)
	}
	getSuffixes(t) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		const r = this.getRule(t, n);
		return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((i, l) => za[i] - za[l]).map(i => `${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`) : r.numbers.map(i => this.getSuffix(t, i, n)) : []
	}
	getSuffix(t, n) {
		let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		const i = this.getRule(t, r);
		return i ? this.shouldUseIntlApi() ? `${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}` : this.getSuffixRetroCompatible(i, n) : (this.logger.warn(`no plural rule found for: ${t}`), "")
	}
	getSuffixRetroCompatible(t, n) {
		const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
		let i = t.numbers[r];
		this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (i === 2 ? i = "plural" : i === 1 && (i = ""));
		const l = () => this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString();
		return this.options.compatibilityJSON === "v1" ? i === 1 ? "" : typeof i == "number" ? `_plural_${i.toString()}` : l() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? l() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString()
	}
	shouldUseIntlApi() {
		return !Ah.includes(this.options.compatibilityJSON)
	}
}
const _a = function(e, t, n) {
		let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
			i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
			l = Oh(e, t, n);
		return !l && i && R(n) && (l = hs(e, n, r), l === void 0 && (l = hs(t, n, r))), l
	},
	yl = e => e.replace(/\$/g, "$$$$");
class Hh {
	constructor() {
		let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		this.logger = Qe.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || (n => n), this.init(t)
	}
	init() {
		let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		t.interpolation || (t.interpolation = {
			escapeValue: !0
		});
		const {
			escape: n,
			escapeValue: r,
			useRawValueToEscape: i,
			prefix: l,
			prefixEscaped: s,
			suffix: o,
			suffixEscaped: a,
			formatSeparator: u,
			unescapeSuffix: p,
			unescapePrefix: g,
			nestingPrefix: f,
			nestingPrefixEscaped: v,
			nestingSuffix: x,
			nestingSuffixEscaped: w,
			nestingOptionsSeparator: P,
			maxReplaces: h,
			alwaysFormat: d
		} = t.interpolation;
		this.escape = n !== void 0 ? n : Rh, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = i !== void 0 ? i : !1, this.prefix = l ? Zt(l) : s || "{{", this.suffix = o ? Zt(o) : a || "}}", this.formatSeparator = u || ",", this.unescapePrefix = p ? "" : g || "-", this.unescapeSuffix = this.unescapePrefix ? "" : p || "", this.nestingPrefix = f ? Zt(f) : v || Zt("$t("), this.nestingSuffix = x ? Zt(x) : w || Zt(")"), this.nestingOptionsSeparator = P || ",", this.maxReplaces = h || 1e3, this.alwaysFormat = d !== void 0 ? d : !1, this.resetRegExp()
	}
	reset() {
		this.options && this.init(this.options)
	}
	resetRegExp() {
		const t = (n, r) => n && n.source === r ? (n.lastIndex = 0, n) : new RegExp(r, "g");
		this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
	}
	interpolate(t, n, r, i) {
		let l, s, o;
		const a = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {},
			u = v => {
				if (v.indexOf(this.formatSeparator) < 0) {
					const h = _a(n, a, v, this.options.keySeparator, this.options.ignoreJSONStructure);
					return this.alwaysFormat ? this.format(h, void 0, r, {
						...i,
						...n,
						interpolationkey: v
					}) : h
				}
				const x = v.split(this.formatSeparator),
					w = x.shift().trim(),
					P = x.join(this.formatSeparator).trim();
				return this.format(_a(n, a, w, this.options.keySeparator, this.options.ignoreJSONStructure), P, r, {
					...i,
					...n,
					interpolationkey: w
				})
			};
		this.resetRegExp();
		const p = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler,
			g = i && i.interpolation && i.interpolation.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
		return [{
			regex: this.regexpUnescape,
			safeValue: v => yl(v)
		}, {
			regex: this.regexp,
			safeValue: v => this.escapeValue ? yl(this.escape(v)) : yl(v)
		}].forEach(v => {
			for (o = 0; l = v.regex.exec(t);) {
				const x = l[1].trim();
				if (s = u(x), s === void 0)
					if (typeof p == "function") {
						const P = p(t, l, i);
						s = R(P) ? P : ""
					} else if (i && Object.prototype.hasOwnProperty.call(i, x)) s = "";
				else if (g) {
					s = l[0];
					continue
				} else this.logger.warn(`missed to pass in variable ${x} for interpolating ${t}`), s = "";
				else !R(s) && !this.useRawValueToEscape && (s = ja(s));
				const w = v.safeValue(s);
				if (t = t.replace(l[0], w), g ? (v.regex.lastIndex += s.length, v.regex.lastIndex -= l[0].length) : v.regex.lastIndex = 0, o++, o >= this.maxReplaces) break
			}
		}), t
	}
	nest(t, n) {
		let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
			i, l, s;
		const o = (a, u) => {
			const p = this.nestingOptionsSeparator;
			if (a.indexOf(p) < 0) return a;
			const g = a.split(new RegExp(`${p}[ ]*{`));
			let f = `{${g[1]}`;
			a = g[0], f = this.interpolate(f, s);
			const v = f.match(/'/g),
				x = f.match(/"/g);
			(v && v.length % 2 === 0 && !x || x.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
			try {
				s = JSON.parse(f), u && (s = {
					...u,
					...s
				})
			} catch (w) {
				return this.logger.warn(`failed parsing options string in nesting for key ${a}`, w), `${a}${p}${f}`
			}
			return s.defaultValue && s.defaultValue.indexOf(this.prefix) > -1 && delete s.defaultValue, a
		};
		for (; i = this.nestingRegexp.exec(t);) {
			let a = [];
			s = {
				...r
			}, s = s.replace && !R(s.replace) ? s.replace : s, s.applyPostProcessor = !1, delete s.defaultValue;
			let u = !1;
			if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
				const p = i[1].split(this.formatSeparator).map(g => g.trim());
				i[1] = p.shift(), a = p, u = !0
			}
			if (l = n(o.call(this, i[1].trim(), s), s), l && i[0] === t && !R(l)) return l;
			R(l) || (l = ja(l)), l || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`), l = ""), u && (l = a.reduce((p, g) => this.format(p, g, r.lng, {
				...r,
				interpolationkey: i[1].trim()
			}), l.trim())), t = t.replace(i[0], l), this.regexp.lastIndex = 0
		}
		return t
	}
}
const Kh = e => {
		let t = e.toLowerCase().trim();
		const n = {};
		if (e.indexOf("(") > -1) {
			const r = e.split("(");
			t = r[0].toLowerCase().trim();
			const i = r[1].substring(0, r[1].length - 1);
			t === "currency" && i.indexOf(":") < 0 ? n.currency || (n.currency = i.trim()) : t === "relativetime" && i.indexOf(":") < 0 ? n.range || (n.range = i.trim()) : i.split(";").forEach(s => {
				if (s) {
					const [o, ...a] = s.split(":"), u = a.join(":").trim().replace(/^'+|'+$/g, ""), p = o.trim();
					n[p] || (n[p] = u), u === "false" && (n[p] = !1), u === "true" && (n[p] = !0), isNaN(u) || (n[p] = parseInt(u, 10))
				}
			})
		}
		return {
			formatName: t,
			formatOptions: n
		}
	},
	bt = e => {
		const t = {};
		return (n, r, i) => {
			let l = i;
			i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (l = {
				...l,
				[i.interpolationkey]: void 0
			});
			const s = r + JSON.stringify(l);
			let o = t[s];
			return o || (o = e(Ci(r), i), t[s] = o), o(n)
		}
	};
class Wh {
	constructor() {
		let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		this.logger = Qe.create("formatter"), this.options = t, this.formats = {
			number: bt((n, r) => {
				const i = new Intl.NumberFormat(n, {
					...r
				});
				return l => i.format(l)
			}),
			currency: bt((n, r) => {
				const i = new Intl.NumberFormat(n, {
					...r,
					style: "currency"
				});
				return l => i.format(l)
			}),
			datetime: bt((n, r) => {
				const i = new Intl.DateTimeFormat(n, {
					...r
				});
				return l => i.format(l)
			}),
			relativetime: bt((n, r) => {
				const i = new Intl.RelativeTimeFormat(n, {
					...r
				});
				return l => i.format(l, r.range || "day")
			}),
			list: bt((n, r) => {
				const i = new Intl.ListFormat(n, {
					...r
				});
				return l => i.format(l)
			})
		}, this.init(t)
	}
	init(t) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
			interpolation: {}
		};
		this.formatSeparator = n.interpolation.formatSeparator || ","
	}
	add(t, n) {
		this.formats[t.toLowerCase().trim()] = n
	}
	addCached(t, n) {
		this.formats[t.toLowerCase().trim()] = bt(n)
	}
	format(t, n, r) {
		let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
		const l = n.split(this.formatSeparator);
		if (l.length > 1 && l[0].indexOf("(") > 1 && l[0].indexOf(")") < 0 && l.find(o => o.indexOf(")") > -1)) {
			const o = l.findIndex(a => a.indexOf(")") > -1);
			l[0] = [l[0], ...l.splice(1, o)].join(this.formatSeparator)
		}
		return l.reduce((o, a) => {
			const {
				formatName: u,
				formatOptions: p
			} = Kh(a);
			if (this.formats[u]) {
				let g = o;
				try {
					const f = i && i.formatParams && i.formatParams[i.interpolationkey] || {},
						v = f.locale || f.lng || i.locale || i.lng || r;
					g = this.formats[u](o, v, {
						...p,
						...i,
						...f
					})
				} catch (f) {
					this.logger.warn(f)
				}
				return g
			} else this.logger.warn(`there was no format function for ${u}`);
			return o
		}, t)
	}
}
const Qh = (e, t) => {
	e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--)
};
class Yh extends Hi {
	constructor(t, n, r) {
		let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
		super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = i, this.logger = Qe.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, i.backend, i)
	}
	queueLoad(t, n, r, i) {
		const l = {},
			s = {},
			o = {},
			a = {};
		return t.forEach(u => {
			let p = !0;
			n.forEach(g => {
				const f = `${u}|${g}`;
				!r.reload && this.store.hasResourceBundle(u, g) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? s[f] === void 0 && (s[f] = !0) : (this.state[f] = 1, p = !1, s[f] === void 0 && (s[f] = !0), l[f] === void 0 && (l[f] = !0), a[g] === void 0 && (a[g] = !0)))
			}), p || (o[u] = !0)
		}), (Object.keys(l).length || Object.keys(s).length) && this.queue.push({
			pending: s,
			pendingCount: Object.keys(s).length,
			loaded: {},
			errors: [],
			callback: i
		}), {
			toLoad: Object.keys(l),
			pending: Object.keys(s),
			toLoadLanguages: Object.keys(o),
			toLoadNamespaces: Object.keys(a)
		}
	}
	loaded(t, n, r) {
		const i = t.split("|"),
			l = i[0],
			s = i[1];
		n && this.emit("failedLoading", l, s, n), !n && r && this.store.addResourceBundle(l, s, r, void 0, void 0, {
			skipCopy: !0
		}), this.state[t] = n ? -1 : 2, n && r && (this.state[t] = 0);
		const o = {};
		this.queue.forEach(a => {
			Ph(a.loaded, [l], s), Qh(a, t), n && a.errors.push(n), a.pendingCount === 0 && !a.done && (Object.keys(a.loaded).forEach(u => {
				o[u] || (o[u] = {});
				const p = a.loaded[u];
				p.length && p.forEach(g => {
					o[u][g] === void 0 && (o[u][g] = !0)
				})
			}), a.done = !0, a.errors.length ? a.callback(a.errors) : a.callback())
		}), this.emit("loaded", o), this.queue = this.queue.filter(a => !a.done)
	}
	read(t, n, r) {
		let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
			l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
			s = arguments.length > 5 ? arguments[5] : void 0;
		if (!t.length) return s(null, {});
		if (this.readingCalls >= this.maxParallelReads) {
			this.waitingReads.push({
				lng: t,
				ns: n,
				fcName: r,
				tried: i,
				wait: l,
				callback: s
			});
			return
		}
		this.readingCalls++;
		const o = (u, p) => {
				if (this.readingCalls--, this.waitingReads.length > 0) {
					const g = this.waitingReads.shift();
					this.read(g.lng, g.ns, g.fcName, g.tried, g.wait, g.callback)
				}
				if (u && p && i < this.maxRetries) {
					setTimeout(() => {
						this.read.call(this, t, n, r, i + 1, l * 2, s)
					}, l);
					return
				}
				s(u, p)
			},
			a = this.backend[r].bind(this.backend);
		if (a.length === 2) {
			try {
				const u = a(t, n);
				u && typeof u.then == "function" ? u.then(p => o(null, p)).catch(o) : o(null, u)
			} catch (u) {
				o(u)
			}
			return
		}
		return a(t, n, o)
	}
	prepareLoading(t, n) {
		let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
			i = arguments.length > 3 ? arguments[3] : void 0;
		if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
		R(t) && (t = this.languageUtils.toResolveHierarchy(t)), R(n) && (n = [n]);
		const l = this.queueLoad(t, n, r, i);
		if (!l.toLoad.length) return l.pending.length || i(), null;
		l.toLoad.forEach(s => {
			this.loadOne(s)
		})
	}
	load(t, n, r) {
		this.prepareLoading(t, n, {}, r)
	}
	reload(t, n, r) {
		this.prepareLoading(t, n, {
			reload: !0
		}, r)
	}
	loadOne(t) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
		const r = t.split("|"),
			i = r[0],
			l = r[1];
		this.read(i, l, "read", void 0, void 0, (s, o) => {
			s && this.logger.warn(`${n}loading namespace ${l} for language ${i} failed`, s), !s && o && this.logger.log(`${n}loaded namespace ${l} for language ${i}`, o), this.loaded(t, s, o)
		})
	}
	saveMissing(t, n, r, i, l) {
		let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
			o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {};
		if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
			this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
			return
		}
		if (!(r == null || r === "")) {
			if (this.backend && this.backend.create) {
				const a = {
						...s,
						isUpdate: l
					},
					u = this.backend.create.bind(this.backend);
				if (u.length < 6) try {
					let p;
					u.length === 5 ? p = u(t, n, r, i, a) : p = u(t, n, r, i), p && typeof p.then == "function" ? p.then(g => o(null, g)).catch(o) : o(null, p)
				} catch (p) {
					o(p)
				} else u(t, n, r, i, o, a)
			}!t || !t[0] || this.store.addResource(t[0], n, r, i)
		}
	}
}
const Ta = () => ({
		debug: !1,
		initImmediate: !0,
		ns: ["translation"],
		defaultNS: ["translation"],
		fallbackLng: ["dev"],
		fallbackNS: !1,
		supportedLngs: !1,
		nonExplicitSupportedLngs: !1,
		load: "all",
		preload: !1,
		simplifyPluralSuffix: !0,
		keySeparator: ".",
		nsSeparator: ":",
		pluralSeparator: "_",
		contextSeparator: "_",
		partialBundledLanguages: !1,
		saveMissing: !1,
		updateMissing: !1,
		saveMissingTo: "fallback",
		saveMissingPlurals: !0,
		missingKeyHandler: !1,
		missingInterpolationHandler: !1,
		postProcess: !1,
		postProcessPassResolved: !1,
		returnNull: !1,
		returnEmptyString: !0,
		returnObjects: !1,
		joinArrays: !1,
		returnedObjectHandler: !1,
		parseMissingKeyHandler: !1,
		appendNamespaceToMissingKey: !1,
		appendNamespaceToCIMode: !1,
		overloadTranslationOptionHandler: e => {
			let t = {};
			if (typeof e[1] == "object" && (t = e[1]), R(e[1]) && (t.defaultValue = e[1]), R(e[2]) && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
				const n = e[3] || e[2];
				Object.keys(n).forEach(r => {
					t[r] = n[r]
				})
			}
			return t
		},
		interpolation: {
			escapeValue: !0,
			format: e => e,
			prefix: "{{",
			suffix: "}}",
			formatSeparator: ",",
			unescapePrefix: "-",
			nestingPrefix: "$t(",
			nestingSuffix: ")",
			nestingOptionsSeparator: ",",
			maxReplaces: 1e3,
			skipOnVariables: !0
		}
	}),
	Ia = e => (R(e.ns) && (e.ns = [e.ns]), R(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), R(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e),
	Ar = () => {},
	Jh = e => {
		Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n => {
			typeof e[n] == "function" && (e[n] = e[n].bind(e))
		})
	};
class hr extends Hi {
	constructor() {
		let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
			n = arguments.length > 1 ? arguments[1] : void 0;
		if (super(), this.options = Ia(t), this.services = {}, this.logger = Qe, this.modules = {
				external: []
			}, Jh(this), n && !this.isInitialized && !t.isClone) {
			if (!this.options.initImmediate) return this.init(t, n), this;
			setTimeout(() => {
				this.init(t, n)
			}, 0)
		}
	}
	init() {
		var t = this;
		let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
			r = arguments.length > 1 ? arguments[1] : void 0;
		this.isInitializing = !0, typeof n == "function" && (r = n, n = {}), !n.defaultNS && n.defaultNS !== !1 && n.ns && (R(n.ns) ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
		const i = Ta();
		this.options = {
			...i,
			...this.options,
			...Ia(n)
		}, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
			...i.interpolation,
			...this.options.interpolation
		}), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
		const l = p => p ? typeof p == "function" ? new p : p : null;
		if (!this.options.isClone) {
			this.modules.logger ? Qe.init(l(this.modules.logger), this.options) : Qe.init(null, this.options);
			let p;
			this.modules.formatter ? p = this.modules.formatter : typeof Intl < "u" && (p = Wh);
			const g = new Ra(this.options);
			this.store = new Oa(this.options.resources, this.options);
			const f = this.services;
			f.logger = Qe, f.resourceStore = this.store, f.languageUtils = g, f.pluralResolver = new Bh(g, {
				prepend: this.options.pluralSeparator,
				compatibilityJSON: this.options.compatibilityJSON,
				simplifyPluralSuffix: this.options.simplifyPluralSuffix
			}), p && (!this.options.interpolation.format || this.options.interpolation.format === i.interpolation.format) && (f.formatter = l(p), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new Hh(this.options), f.utils = {
				hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
			}, f.backendConnector = new Yh(l(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(v) {
				for (var x = arguments.length, w = new Array(x > 1 ? x - 1 : 0), P = 1; P < x; P++) w[P - 1] = arguments[P];
				t.emit(v, ...w)
			}), this.modules.languageDetector && (f.languageDetector = l(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = l(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new Ei(this.services, this.options), this.translator.on("*", function(v) {
				for (var x = arguments.length, w = new Array(x > 1 ? x - 1 : 0), P = 1; P < x; P++) w[P - 1] = arguments[P];
				t.emit(v, ...w)
			}), this.modules.external.forEach(v => {
				v.init && v.init(this)
			})
		}
		if (this.format = this.options.interpolation.format, r || (r = Ar), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
			const p = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
			p.length > 0 && p[0] !== "dev" && (this.options.lng = p[0])
		}!this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(p => {
			this[p] = function() {
				return t.store[p](...arguments)
			}
		}), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(p => {
			this[p] = function() {
				return t.store[p](...arguments), t
			}
		});
		const a = Mn(),
			u = () => {
				const p = (g, f) => {
					this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(f), r(g, f)
				};
				if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return p(null, this.t.bind(this));
				this.changeLanguage(this.options.lng, p)
			};
		return this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0), a
	}
	loadResources(t) {
		let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ar;
		const i = R(t) ? t : this.language;
		if (typeof t == "function" && (r = t), !this.options.resources || this.options.partialBundledLanguages) {
			if (i && i.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
			const l = [],
				s = o => {
					if (!o || o === "cimode") return;
					this.services.languageUtils.toResolveHierarchy(o).forEach(u => {
						u !== "cimode" && l.indexOf(u) < 0 && l.push(u)
					})
				};
			i ? s(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(a => s(a)), this.options.preload && this.options.preload.forEach(o => s(o)), this.services.backendConnector.load(l, this.options.ns, o => {
				!o && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(o)
			})
		} else r(null)
	}
	reloadResources(t, n, r) {
		const i = Mn();
		return typeof t == "function" && (r = t, t = void 0), typeof n == "function" && (r = n, n = void 0), t || (t = this.languages), n || (n = this.options.ns), r || (r = Ar), this.services.backendConnector.reload(t, n, l => {
			i.resolve(), r(l)
		}), i
	}
	use(t) {
		if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
		if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
		return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && lf.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this
	}
	setResolvedLanguage(t) {
		if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
			for (let n = 0; n < this.languages.length; n++) {
				const r = this.languages[n];
				if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
					this.resolvedLanguage = r;
					break
				}
			}
	}
	changeLanguage(t, n) {
		var r = this;
		this.isLanguageChangingTo = t;
		const i = Mn();
		this.emit("languageChanging", t);
		const l = a => {
				this.language = a, this.languages = this.services.languageUtils.toResolveHierarchy(a), this.resolvedLanguage = void 0, this.setResolvedLanguage(a)
			},
			s = (a, u) => {
				u ? (l(u), this.translator.changeLanguage(u), this.isLanguageChangingTo = void 0, this.emit("languageChanged", u), this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0, i.resolve(function() {
					return r.t(...arguments)
				}), n && n(a, function() {
					return r.t(...arguments)
				})
			},
			o = a => {
				!t && !a && this.services.languageDetector && (a = []);
				const u = R(a) ? a : this.services.languageUtils.getBestMatchFromCodes(a);
				u && (this.language || l(u), this.translator.language || this.translator.changeLanguage(u), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(u)), this.loadResources(u, p => {
					s(p, u)
				})
			};
		return !t && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(t), i
	}
	getFixedT(t, n, r) {
		var i = this;
		const l = function(s, o) {
			let a;
			if (typeof o != "object") {
				for (var u = arguments.length, p = new Array(u > 2 ? u - 2 : 0), g = 2; g < u; g++) p[g - 2] = arguments[g];
				a = i.options.overloadTranslationOptionHandler([s, o].concat(p))
			} else a = {
				...o
			};
			a.lng = a.lng || l.lng, a.lngs = a.lngs || l.lngs, a.ns = a.ns || l.ns, a.keyPrefix !== "" && (a.keyPrefix = a.keyPrefix || r || l.keyPrefix);
			const f = i.options.keySeparator || ".";
			let v;
			return a.keyPrefix && Array.isArray(s) ? v = s.map(x => `${a.keyPrefix}${f}${x}`) : v = a.keyPrefix ? `${a.keyPrefix}${f}${s}` : s, i.t(v, a)
		};
		return R(t) ? l.lng = t : l.lngs = t, l.ns = n, l.keyPrefix = r, l
	}
	t() {
		return this.translator && this.translator.translate(...arguments)
	}
	exists() {
		return this.translator && this.translator.exists(...arguments)
	}
	setDefaultNamespace(t) {
		this.options.defaultNS = t
	}
	hasLoadedNamespace(t) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
		if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
		const r = n.lng || this.resolvedLanguage || this.languages[0],
			i = this.options ? this.options.fallbackLng : !1,
			l = this.languages[this.languages.length - 1];
		if (r.toLowerCase() === "cimode") return !0;
		const s = (o, a) => {
			const u = this.services.backendConnector.state[`${o}|${a}`];
			return u === -1 || u === 0 || u === 2
		};
		if (n.precheck) {
			const o = n.precheck(this, s);
			if (o !== void 0) return o
		}
		return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(r, t) && (!i || s(l, t)))
	}
	loadNamespaces(t, n) {
		const r = Mn();
		return this.options.ns ? (R(t) && (t = [t]), t.forEach(i => {
			this.options.ns.indexOf(i) < 0 && this.options.ns.push(i)
		}), this.loadResources(i => {
			r.resolve(), n && n(i)
		}), r) : (n && n(), Promise.resolve())
	}
	loadLanguages(t, n) {
		const r = Mn();
		R(t) && (t = [t]);
		const i = this.options.preload || [],
			l = t.filter(s => i.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s));
		return l.length ? (this.options.preload = i.concat(l), this.loadResources(s => {
			r.resolve(), n && n(s)
		}), r) : (n && n(), Promise.resolve())
	}
	dir(t) {
		if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t) return "rtl";
		const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"],
			r = this.services && this.services.languageUtils || new Ra(Ta());
		return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
	}
	static createInstance() {
		let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
			n = arguments.length > 1 ? arguments[1] : void 0;
		return new hr(t, n)
	}
	cloneInstance() {
		let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
			n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ar;
		const r = t.forkResourceStore;
		r && delete t.forkResourceStore;
		const i = {
				...this.options,
				...t,
				isClone: !0
			},
			l = new hr(i);
		return (t.debug !== void 0 || t.prefix !== void 0) && (l.logger = l.logger.clone(t)), ["store", "services", "language"].forEach(o => {
			l[o] = this[o]
		}), l.services = {
			...this.services
		}, l.services.utils = {
			hasLoadedNamespace: l.hasLoadedNamespace.bind(l)
		}, r && (l.store = new Oa(this.store.data, i), l.services.resourceStore = l.store), l.translator = new Ei(l.services, i), l.translator.on("*", function(o) {
			for (var a = arguments.length, u = new Array(a > 1 ? a - 1 : 0), p = 1; p < a; p++) u[p - 1] = arguments[p];
			l.emit(o, ...u)
		}), l.init(i, n), l.translator.options = i, l.translator.backendConnector.services.utils = {
			hasLoadedNamespace: l.hasLoadedNamespace.bind(l)
		}, l
	}
	toJSON() {
		return {
			options: this.options,
			store: this.store,
			language: this.language,
			languages: this.languages,
			resolvedLanguage: this.resolvedLanguage
		}
	}
}
const ae = hr.createInstance();
ae.createInstance = hr.createInstance;
ae.createInstance;
ae.dir;
ae.init;
ae.loadResources;
ae.reloadResources;
ae.use;
ae.changeLanguage;
ae.getFixedT;
ae.t;
ae.exists;
ae.setDefaultNamespace;
ae.hasLoadedNamespace;
ae.loadNamespaces;
ae.loadLanguages;
ae.use(Gp).init({
	lng: "en",
	fallbackLng: "en",
	interpolation: {
		escapeValue: !1
	}
});
xl.createRoot(document.getElementById("root")).render(c.jsx(jh, {
	children: c.jsx(Ch, {
		children: c.jsx(Nh, {})
	})
}));