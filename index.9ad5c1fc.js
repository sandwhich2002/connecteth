// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"eJhrF":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "344a65ae9ad5c1fc";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bsTmd":[function(require,module,exports) {
/*!
  * Bootstrap v5.0.0-beta3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ (function(global, factory) {
    module.exports = factory(require("@popperjs/core"));
})(this, function(Popper) {
    "use strict";
    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) Object.keys(e).forEach(function(k) {
            if (k !== "default") {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function() {
                        return e[k];
                    }
                });
            }
        });
        n["default"] = e;
        return Object.freeze(n);
    }
    var Popper__namespace = /*#__PURE__*/ _interopNamespace(Popper);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.0-beta3): util/index.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ const MAX_UID = 1000000;
    const MILLISECONDS_MULTIPLIER = 1000;
    const TRANSITION_END = "transitionend"; // Shoutout AngusCroll (https://goo.gl/pxwQGp)
    const toType = (obj)=>{
        if (obj === null || obj === undefined) return `${obj}`;
        return ({}).toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
    };
    /**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */ const getUID = (prefix)=>{
        do prefix += Math.floor(Math.random() * MAX_UID);
        while (document.getElementById(prefix));
        return prefix;
    };
    const getSelector = (element)=>{
        let selector = element.getAttribute("data-bs-target");
        if (!selector || selector === "#") {
            let hrefAttr = element.getAttribute("href"); // The only valid content that could double as a selector are IDs or classes,
            // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
            // `document.querySelector` will rightfully complain it is invalid.
            // See https://github.com/twbs/bootstrap/issues/32273
            if (!hrefAttr || !hrefAttr.includes("#") && !hrefAttr.startsWith(".")) return null;
             // Just in case some CMS puts out a full URL with the anchor appended
            if (hrefAttr.includes("#") && !hrefAttr.startsWith("#")) hrefAttr = "#" + hrefAttr.split("#")[1];
            selector = hrefAttr && hrefAttr !== "#" ? hrefAttr.trim() : null;
        }
        return selector;
    };
    const getSelectorFromElement = (element)=>{
        const selector = getSelector(element);
        if (selector) return document.querySelector(selector) ? selector : null;
        return null;
    };
    const getElementFromSelector = (element)=>{
        const selector = getSelector(element);
        return selector ? document.querySelector(selector) : null;
    };
    const getTransitionDurationFromElement = (element)=>{
        if (!element) return 0;
         // Get transition-duration of the element
        let { transitionDuration , transitionDelay  } = window.getComputedStyle(element);
        const floatTransitionDuration = Number.parseFloat(transitionDuration);
        const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found
        if (!floatTransitionDuration && !floatTransitionDelay) return 0;
         // If multiple durations are defined, take the first
        transitionDuration = transitionDuration.split(",")[0];
        transitionDelay = transitionDelay.split(",")[0];
        return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    };
    const triggerTransitionEnd = (element)=>{
        element.dispatchEvent(new Event(TRANSITION_END));
    };
    const isElement = (obj)=>(obj[0] || obj).nodeType;
    const emulateTransitionEnd = (element, duration)=>{
        let called = false;
        const durationPadding = 5;
        const emulatedDuration = duration + durationPadding;
        function listener() {
            called = true;
            element.removeEventListener(TRANSITION_END, listener);
        }
        element.addEventListener(TRANSITION_END, listener);
        setTimeout(()=>{
            if (!called) triggerTransitionEnd(element);
        }, emulatedDuration);
    };
    const typeCheckConfig = (componentName, config, configTypes)=>{
        Object.keys(configTypes).forEach((property)=>{
            const expectedTypes = configTypes[property];
            const value = config[property];
            const valueType = value && isElement(value) ? "element" : toType(value);
            if (!new RegExp(expectedTypes).test(valueType)) throw new TypeError(`${componentName.toUpperCase()}: ` + `Option "${property}" provided type "${valueType}" ` + `but expected type "${expectedTypes}".`);
        });
    };
    const isVisible = (element)=>{
        if (!element) return false;
        if (element.style && element.parentNode && element.parentNode.style) {
            const elementStyle = getComputedStyle(element);
            const parentNodeStyle = getComputedStyle(element.parentNode);
            return elementStyle.display !== "none" && parentNodeStyle.display !== "none" && elementStyle.visibility !== "hidden";
        }
        return false;
    };
    const isDisabled = (element)=>{
        if (!element || element.nodeType !== Node.ELEMENT_NODE) return true;
        if (element.classList.contains("disabled")) return true;
        if (typeof element.disabled !== "undefined") return element.disabled;
        return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
    };
    const findShadowRoot = (element)=>{
        if (!document.documentElement.attachShadow) return null;
         // Can find the shadow root otherwise it'll return the document
        if (typeof element.getRootNode === "function") {
            const root = element.getRootNode();
            return root instanceof ShadowRoot ? root : null;
        }
        if (element instanceof ShadowRoot) return element;
         // when we don't find a shadow root
        if (!element.parentNode) return null;
        return findShadowRoot(element.parentNode);
    };
    const noop = ()=>function() {};
    const reflow = (element)=>element.offsetHeight;
    const getjQuery = ()=>{
        const { jQuery  } = window;
        if (jQuery && !document.body.hasAttribute("data-bs-no-jquery")) return jQuery;
        return null;
    };
    const onDOMContentLoaded = (callback)=>{
        if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", callback);
        else callback();
    };
    const isRTL = ()=>document.documentElement.dir === "rtl";
    const defineJQueryPlugin = (name, plugin)=>{
        onDOMContentLoaded(()=>{
            const $ = getjQuery();
            /* istanbul ignore if */ if ($) {
                const JQUERY_NO_CONFLICT = $.fn[name];
                $.fn[name] = plugin.jQueryInterface;
                $.fn[name].Constructor = plugin;
                $.fn[name].noConflict = ()=>{
                    $.fn[name] = JQUERY_NO_CONFLICT;
                    return plugin.jQueryInterface;
                };
            }
        });
    };
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.0-beta3): dom/data.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ const elementMap = new Map();
    var Data = {
        set (element, key, instance) {
            if (!elementMap.has(element)) elementMap.set(element, new Map());
            const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
            // can be removed later when multiple key/instances are fine to be used
            if (!instanceMap.has(key) && instanceMap.size !== 0) {
                // eslint-disable-next-line no-console
                console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
                return;
            }
            instanceMap.set(key, instance);
        },
        get (element, key) {
            if (elementMap.has(element)) return elementMap.get(element).get(key) || null;
            return null;
        },
        remove (element, key) {
            if (!elementMap.has(element)) return;
            const instanceMap = elementMap.get(element);
            instanceMap.delete(key); // free up element references if there are no instances left for an element
            if (instanceMap.size === 0) elementMap.delete(element);
        }
    };
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.0-beta3): dom/event-handler.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
    const stripNameRegex = /\..*/;
    const stripUidRegex = /::\d+$/;
    const eventRegistry = {}; // Events storage
    let uidEvent = 1;
    const customEvents = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    const nativeEvents = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll"
    ]);
    /**
     * ------------------------------------------------------------------------
     * Private methods
     * ------------------------------------------------------------------------
     */ function getUidEvent(element, uid) {
        return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
    }
    function getEvent(element) {
        const uid = getUidEvent(element);
        element.uidEvent = uid;
        eventRegistry[uid] = eventRegistry[uid] || {};
        return eventRegistry[uid];
    }
    function bootstrapHandler(element, fn) {
        return function handler(event) {
            event.delegateTarget = element;
            if (handler.oneOff) EventHandler.off(element, event.type, fn);
            return fn.apply(element, [
                event
            ]);
        };
    }
    function bootstrapDelegationHandler(element, selector, fn) {
        return function handler(event) {
            const domElements = element.querySelectorAll(selector);
            for(let { target  } = event; target && target !== this; target = target.parentNode){
                for(let i = domElements.length; i--;)if (domElements[i] === target) {
                    event.delegateTarget = target;
                    if (handler.oneOff) // eslint-disable-next-line unicorn/consistent-destructuring
                    EventHandler.off(element, event.type, fn);
                    return fn.apply(target, [
                        event
                    ]);
                }
            } // To please ESLint
            return null;
        };
    }
    function findHandler(events, handler, delegationSelector = null) {
        const uidEventList = Object.keys(events);
        for(let i = 0, len = uidEventList.length; i < len; i++){
            const event = events[uidEventList[i]];
            if (event.originalHandler === handler && event.delegationSelector === delegationSelector) return event;
        }
        return null;
    }
    function normalizeParams(originalTypeEvent, handler, delegationFn) {
        const delegation = typeof handler === "string";
        const originalHandler = delegation ? delegationFn : handler; // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
        let typeEvent = originalTypeEvent.replace(stripNameRegex, "");
        const custom = customEvents[typeEvent];
        if (custom) typeEvent = custom;
        const isNative = nativeEvents.has(typeEvent);
        if (!isNative) typeEvent = originalTypeEvent;
        return [
            delegation,
            originalHandler,
            typeEvent
        ];
    }
    function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
        if (typeof originalTypeEvent !== "string" || !element) return;
        if (!handler) {
            handler = delegationFn;
            delegationFn = null;
        }
        const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
        const events = getEvent(element);
        const handlers = events[typeEvent] || (events[typeEvent] = {});
        const previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);
        if (previousFn) {
            previousFn.oneOff = previousFn.oneOff && oneOff;
            return;
        }
        const uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ""));
        const fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
        fn.delegationSelector = delegation ? handler : null;
        fn.originalHandler = originalHandler;
        fn.oneOff = oneOff;
        fn.uidEvent = uid;
        handlers[uid] = fn;
        element.addEventListener(typeEvent, fn, delegation);
    }
    function removeHandler(element, events, typeEvent, handler, delegationSelector) {
        const fn = findHandler(events[typeEvent], handler, delegationSelector);
        if (!fn) return;
        element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
        delete events[typeEvent][fn.uidEvent];
    }
    function removeNamespacedHandlers(element, events, typeEvent, namespace) {
        const storeElementEvent = events[typeEvent] || {};
        Object.keys(storeElementEvent).forEach((handlerKey)=>{
            if (handlerKey.includes(namespace)) {
                const event = storeElementEvent[handlerKey];
                removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
            }
        });
    }
    const EventHandler = {
        on (element, event, handler, delegationFn) {
            addHandler(element, event, handler, delegationFn, false);
        },
        one (element, event, handler, delegationFn) {
            addHandler(element, event, handler, delegationFn, true);
        },
        off (element, originalTypeEvent, handler, delegationFn) {
            if (typeof originalTypeEvent !== "string" || !element) return;
            const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
            const inNamespace = typeEvent !== originalTypeEvent;
            const events = getEvent(element);
            const isNamespace = originalTypeEvent.startsWith(".");
            if (typeof originalHandler !== "undefined") {
                // Simplest case: handler is passed, remove that listener ONLY.
                if (!events || !events[typeEvent]) return;
                removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
                return;
            }
            if (isNamespace) Object.keys(events).forEach((elementEvent)=>{
                removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
            });
            const storeElementEvent = events[typeEvent] || {};
            Object.keys(storeElementEvent).forEach((keyHandlers)=>{
                const handlerKey = keyHandlers.replace(stripUidRegex, "");
                if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
                    const event = storeElementEvent[keyHandlers];
                    removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
                }
            });
        },
        trigger (element, event, args) {
            if (typeof event !== "string" || !element) return null;
            const $ = getjQuery();
            const typeEvent = event.replace(stripNameRegex, "");
            const inNamespace = event !== typeEvent;
            const isNative = nativeEvents.has(typeEvent);
            let jQueryEvent;
            let bubbles = true;
            let nativeDispatch = true;
            let defaultPrevented = false;
            let evt = null;
            if (inNamespace && $) {
                jQueryEvent = $.Event(event, args);
                $(element).trigger(jQueryEvent);
                bubbles = !jQueryEvent.isPropagationStopped();
                nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
                defaultPrevented = jQueryEvent.isDefaultPrevented();
            }
            if (isNative) {
                evt = document.createEvent("HTMLEvents");
                evt.initEvent(typeEvent, bubbles, true);
            } else evt = new CustomEvent(event, {
                bubbles,
                cancelable: true
            });
             // merge custom information in our event
            if (typeof args !== "undefined") Object.keys(args).forEach((key)=>{
                Object.defineProperty(evt, key, {
                    get () {
                        return args[key];
                    }
                });
            });
            if (defaultPrevented) evt.preventDefault();
            if (nativeDispatch) element.dispatchEvent(evt);
            if (evt.defaultPrevented && typeof jQueryEvent !== "undefined") jQueryEvent.preventDefault();
            return evt;
        }
    };
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.0-beta3): base-component.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ const VERSION = "5.0.0-beta3";
    class BaseComponent {
        constructor(element){
            element = typeof element === "string" ? document.querySelector(element) : element;
            if (!element) return;
            this._element = element;
            Data.set(this._element, this.constructor.DATA_KEY, this);
        }
        dispose() {
            Data.remove(this._element, this.constructor.DATA_KEY);
            this._element = null;
        }
        /** Static */ static getInstance(element) {
            return Data.get(element, this.DATA_KEY);
        }
        static get VERSION() {
            return VERSION;
        }
    }
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.0-beta3): alert.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ const NAME$b = "alert";
    const DATA_KEY$b = "bs.alert";
    const EVENT_KEY$b = `.${DATA_KEY$b}`;
    const DATA_API_KEY$8 = ".data-api";
    const SELECTOR_DISMISS = '[data-bs-dismiss="alert"]';
    const EVENT_CLOSE = `close${EVENT_KEY$b}`;
    const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
    const EVENT_CLICK_DATA_API$7 = `click${EVENT_KEY$b}${DATA_API_KEY$8}`;
    const CLASS_NAME_ALERT = "alert";
    const CLASS_NAME_FADE$5 = "fade";
    const CLASS_NAME_SHOW$8 = "show";
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ class Alert extends BaseComponent {
        // Getters
        static get DATA_KEY() {
            return DATA_KEY$b;
        }
        close(element) {
            const rootElement = element ? this._getRootElement(element) : this._element;
            const customEvent = this._triggerCloseEvent(rootElement);
            if (customEvent === null || customEvent.defaultPrevented) return;
            this._removeElement(rootElement);
        }
        _getRootElement(element) {
            return getElementFromSelector(element) || element.closest(`.${CLASS_NAME_ALERT}`);
        }
        _triggerCloseEvent(element) {
            return EventHandler.trigger(element, EVENT_CLOSE);
        }
        _removeElement(element) {
            element.classList.remove(CLASS_NAME_SHOW$8);
            if (!element.classList.contains(CLASS_NAME_FADE$5)) {
                this._destroyElement(element);
                return;
            }
            const transitionDuration = getTransitionDurationFromElement(element);
            EventHandler.one(element, "transitionend", ()=>this._destroyElement(element));
            emulateTransitionEnd(element, transitionDuration);
        }
        _destroyElement(element) {
            if (element.parentNode) element.parentNode.removeChild(element);
            EventHandler.trigger(element, EVENT_CLOSED);
        }
        static jQueryInterface(config) {
            return this.each(function() {
                let data = Data.get(this, DATA_KEY$b);
                if (!data) data = new Alert(this);
                if (config === "close") data[config](this);
            });
        }
        static handleDismiss(alertInstance) {
            return function(event) {
                if (event) event.preventDefault();
                alertInstance.close(this);
            };
        }
    }
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */ EventHandler.on(document, EVENT_CLICK_DATA_API$7, SELECTOR_DISMISS, Alert.handleDismiss(new Alert()));
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Alert to jQuery only if jQuery is present
     */ defineJQueryPlugin(NAME$b, Alert);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.0-beta3): button.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ const NAME$a = "button";
    const DATA_KEY$a = "bs.button";
    const EVENT_KEY$a = `.${DATA_KEY$a}`;
    const DATA_API_KEY$7 = ".data-api";
    const CLASS_NAME_ACTIVE$3 = "active";
    const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
    const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$7}`;
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ class Button extends BaseComponent {
        // Getters
        static get DATA_KEY() {
            return DATA_KEY$a;
        }
        toggle() {
            // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
            this._element.setAttribute("aria-pressed", this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
        }
        static jQueryInterface(config) {
            return this.each(function() {
                let data = Data.get(this, DATA_KEY$a);
                if (!data) data = new Button(this);
                if (config === "toggle") data[config]();
            });
        }
    }
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */ EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event)=>{
        event.preventDefault();
        const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
        let data = Data.get(button, DATA_KEY$a);
        if (!data) data = new Button(button);
        data.toggle();
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Button to jQuery only if jQuery is present
     */ defineJQueryPlugin(NAME$a, Button);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.0-beta3): dom/manipulator.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ function normalizeData(val) {
        if (val === "true") return true;
        if (val === "false") return false;
        if (val === Number(val).toString()) return Number(val);
        if (val === "" || val === "null") return null;
        return val;
    }
    function normalizeDataKey(key) {
        return key.replace(/[A-Z]/g, (chr)=>`-${chr.toLowerCase()}`);
    }
    const Manipulator = {
        setDataAttribute (element, key, value) {
            element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
        },
        removeDataAttribute (element, key) {
            element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
        },
        getDataAttributes (element) {
            if (!element) return {};
            const attributes = {};
            Object.keys(element.dataset).filter((key)=>key.startsWith("bs")).forEach((key)=>{
                let pureKey = key.replace(/^bs/, "");
                pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
                attributes[pureKey] = normalizeData(element.dataset[key]);
            });
            return attributes;
        },
        getDataAttribute (element, key) {
            return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
        },
        offset (element) {
            const rect = element.getBoundingClientRect();
            return {
                top: rect.top + document.body.scrollTop,
                left: rect.left + document.body.scrollLeft
            };
        },
        position (element) {
            return {
                top: element.offsetTop,
                left: element.offsetLeft
            };
        }
    };
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.0-beta3): dom/selector-engine.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ const NODE_TEXT = 3;
    const SelectorEngine = {
        find (selector, element = document.documentElement) {
            return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
        },
        findOne (selector, element = document.documentElement) {
            return Element.prototype.querySelector.call(element, selector);
        },
        children (element, selector) {
            return [].concat(...element.children).filter((child)=>child.matches(selector));
        },
        parents (element, selector) {
            const parents = [];
            let ancestor = element.parentNode;
            while(ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT){
                if (ancestor.matches(selector)) parents.push(ancestor);
                ancestor = ancestor.parentNode;
            }
            return parents;
        },
        prev (element, selector) {
            let previous = element.previousElementSibling;
            while(previous){
                if (previous.matches(selector)) return [
                    previous
                ];
                previous = previous.previousElementSibling;
            }
            return [];
        },
        next (element, selector) {
            let next = element.nextElementSibling;
            while(next){
                if (next.matches(selector)) return [
                    next
                ];
                next = next.nextElementSibling;
            }
            return [];
        }
    };
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.0-beta3): carousel.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ const NAME$9 = "carousel";
    const DATA_KEY$9 = "bs.carousel";
    const EVENT_KEY$9 = `.${DATA_KEY$9}`;
    const DATA_API_KEY$6 = ".data-api";
    const ARROW_LEFT_KEY = "ArrowLeft";
    const ARROW_RIGHT_KEY = "ArrowRight";
    const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch
    const SWIPE_THRESHOLD = 40;
    const Default$8 = {
        interval: 5000,
        keyboard: true,
        slide: false,
        pause: "hover",
        wrap: true,
        touch: true
    };
    const DefaultType$8 = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    };
    const ORDER_NEXT = "next";
    const ORDER_PREV = "prev";
    const DIRECTION_LEFT = "left";
    const DIRECTION_RIGHT = "right";
    const EVENT_SLIDE = `slide${EVENT_KEY$9}`;
    const EVENT_SLID = `slid${EVENT_KEY$9}`;
    const EVENT_KEYDOWN = `keydown${EVENT_KEY$9}`;
    const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY$9}`;
    const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY$9}`;
    const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
    const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
    const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
    const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
    const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
    const EVENT_DRAG_START = `dragstart${EVENT_KEY$9}`;
    const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$9}${DATA_API_KEY$6}`;
    const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$9}${DATA_API_KEY$6}`;
    const CLASS_NAME_CAROUSEL = "carousel";
    const CLASS_NAME_ACTIVE$2 = "active";
    const CLASS_NAME_SLIDE = "slide";
    const CLASS_NAME_END = "carousel-item-end";
    const CLASS_NAME_START = "carousel-item-start";
    const CLASS_NAME_NEXT = "carousel-item-next";
    const CLASS_NAME_PREV = "carousel-item-prev";
    const CLASS_NAME_POINTER_EVENT = "pointer-event";
    const SELECTOR_ACTIVE$1 = ".active";
    const SELECTOR_ACTIVE_ITEM = ".active.carousel-item";
    const SELECTOR_ITEM = ".carousel-item";
    const SELECTOR_ITEM_IMG = ".carousel-item img";
    const SELECTOR_NEXT_PREV = ".carousel-item-next, .carousel-item-prev";
    const SELECTOR_INDICATORS = ".carousel-indicators";
    const SELECTOR_INDICATOR = "[data-bs-target]";
    const SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
    const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
    const POINTER_TYPE_TOUCH = "touch";
    const POINTER_TYPE_PEN = "pen";
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ class Carousel extends BaseComponent {
        constructor(element, config){
            super(element);
            this._items = null;
            this._interval = null;
            this._activeElement = null;
            this._isPaused = false;
            this._isSliding = false;
            this.touchTimeout = null;
            this.touchStartX = 0;
            this.touchDeltaX = 0;
            this._config = this._getConfig(config);
            this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
            this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
            this._pointerEvent = Boolean(window.PointerEvent);
            this._addEventListeners();
        }
        static get Default() {
            return Default$8;
        }
        static get DATA_KEY() {
            return DATA_KEY$9;
        }
        next() {
            if (!this._isSliding) this._slide(ORDER_NEXT);
        }
        nextWhenVisible() {
            // Don't call next when the page isn't visible
            // or the carousel or its parent isn't visible
            if (!document.hidden && isVisible(this._element)) this.next();
        }
        prev() {
            if (!this._isSliding) this._slide(ORDER_PREV);
        }
        pause(event) {
            if (!event) this._isPaused = true;
            if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
                triggerTransitionEnd(this._element);
                this.cycle(true);
            }
            clearInterval(this._interval);
            this._interval = null;
        }
        cycle(event) {
            if (!event) this._isPaused = false;
            if (this._interval) {
                clearInterval(this._interval);
                this._interval = null;
            }
            if (this._config && this._config.interval && !this._isPaused) {
                this._updateInterval();
                this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
            }
        }
        to(index) {
            this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
            const activeIndex = this._getItemIndex(this._activeElement);
            if (index > this._items.length - 1 || index < 0) return;
            if (this._isSliding) {
                EventHandler.one(this._element, EVENT_SLID, ()=>this.to(index));
                return;
            }
            if (activeIndex === index) {
                this.pause();
                this.cycle();
                return;
            }
            const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
            this._slide(order, this._items[index]);
        }
        dispose() {
            EventHandler.off(this._element, EVENT_KEY$9);
            this._items = null;
            this._config = null;
            this._interval = null;
            this._isPaused = null;
            this._isSliding = null;
            this._activeElement = null;
            this._indicatorsElement = null;
            super.dispose();
        }
        _getConfig(config) {
            config = {
                ...Default$8,
                ...config
            };
            typeCheckConfig(NAME$9, config, DefaultType$8);
            return config;
        }
        _handleSwipe() {
            const absDeltax = Math.abs(this.touchDeltaX);
            if (absDeltax <= SWIPE_THRESHOLD) return;
            const direction = absDeltax / this.touchDeltaX;
            this.touchDeltaX = 0;
            if (!direction) return;
            this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
        }
        _addEventListeners() {
            if (this._config.keyboard) EventHandler.on(this._element, EVENT_KEYDOWN, (event)=>this._keydown(event));
            if (this._config.pause === "hover") {
                EventHandler.on(this._element, EVENT_MOUSEENTER, (event)=>this.pause(event));
                EventHandler.on(this._element, EVENT_MOUSELEAVE, (event)=>this.cycle(event));
            }
            if (this._config.touch && this._touchSupported) this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            const start = (event)=>{
                if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) this.touchStartX = event.clientX;
                else if (!this._pointerEvent) this.touchStartX = event.touches[0].clientX;
            };
            const move = (event)=>{
                // ensure swiping with one touch and not pinching
                this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
            };
            const end = (event)=>{
                if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) this.touchDeltaX = event.clientX - this.touchStartX;
                this._handleSwipe();
                if (this._config.pause === "hover") {
                    // If it's a touch-enabled device, mouseenter/leave are fired as
                    // part of the mouse compatibility events on first tap - the carousel
                    // would stop cycling until user tapped out of it;
                    // here, we listen for touchend, explicitly pause the carousel
                    // (as if it's the second time we tap on it, mouseenter compat event
                    // is NOT fired) and after a timeout (to allow for mouse compatibility
                    // events to fire) we explicitly restart cycling
                    this.pause();
                    if (this.touchTimeout) clearTimeout(this.touchTimeout);
                    this.touchTimeout = setTimeout((event)=>this.cycle(event), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
                }
            };
            SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach((itemImg)=>{
                EventHandler.on(itemImg, EVENT_DRAG_START, (e)=>e.preventDefault());
            });
            if (this._pointerEvent) {
                EventHandler.on(this._element, EVENT_POINTERDOWN, (event)=>start(event));
                EventHandler.on(this._element, EVENT_POINTERUP, (event)=>end(event));
                this._element.classList.add(CLASS_NAME_POINTER_EVENT);
            } else {
                EventHandler.on(this._element, EVENT_TOUCHSTART, (event)=>start(event));
                EventHandler.on(this._element, EVENT_TOUCHMOVE, (event)=>move(event));
                EventHandler.on(this._element, EVENT_TOUCHEND, (event)=>end(event));
            }
        }
        _keydown(event) {
            if (/input|textarea/i.test(event.target.tagName)) return;
            if (event.key === ARROW_LEFT_KEY) {
                event.preventDefault();
                this._slide(DIRECTION_LEFT);
            } else if (event.key === ARROW_RIGHT_KEY) {
                event.preventDefault();
                this._slide(DIRECTION_RIGHT);
            }
        }
        _getItemIndex(element) {
            this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
            return this._items.indexOf(element);
        }
        _getItemByOrder(order, activeElement) {
            const isNext = order === ORDER_NEXT;
            const isPrev = order === ORDER_PREV;
            const activeIndex = this._getItemIndex(activeElement);
            const lastItemIndex = this._items.length - 1;
            const isGoingToWrap = isPrev && activeIndex === 0 || isNext && activeIndex === lastItemIndex;
            if (isGoingToWrap && !this._config.wrap) return activeElement;
            const delta = isPrev ? -1 : 1;
            const itemIndex = (activeIndex + delta) % this._items.length;
            return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
        }
        _triggerSlideEvent(relatedTarget, eventDirectionName) {
            const targetIndex = this._getItemIndex(relatedTarget);
            const fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));
            return EventHandler.trigger(this._element, EVENT_SLIDE, {
                relatedTarget,
                direction: eventDirectionName,
                from: fromIndex,
                to: targetIndex
            });
        }
        _setActiveIndicatorElement(element) {
            if (this._indicatorsElement) {
                const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
                activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
                activeIndicator.removeAttribute("aria-current");
                const indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);
                for(let i = 0; i < indicators.length; i++)if (Number.parseInt(indicators[i].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(element)) {
                    indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
                    indicators[i].setAttribute("aria-current", "true");
                    break;
                }
            }
        }
        _updateInterval() {
            const element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
            if (!element) return;
            const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
            if (elementInterval) {
                this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
                this._config.interval = elementInterval;
            } else this._config.interval = this._config.defaultInterval || this._config.interval;
        }
        _slide(directionOrOrder, element) {
            const order = this._directionToOrder(directionOrOrder);
            const activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
            const activeElementIndex = this._getItemIndex(activeElement);
            const nextElement = element || this._getItemByOrder(order, activeElement);
            const nextElementIndex = this._getItemIndex(nextElement);
            const isCycling = Boolean(this._interval);
            const isNext = order === ORDER_NEXT;
            const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
            const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
            const eventDirectionName = this._orderToDirection(order);
            if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
                this._isSliding = false;
                return;
            }
            const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
            if (slideEvent.defaultPrevented) return;
            if (!activeElement || !nextElement) // Some weirdness is happening, so we bail
            return;
            this._isSliding = true;
            if (isCycling) this.pause();
            this._setActiveIndicatorElement(nextElement);
            this._activeElement = nextElement;
            if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
                nextElement.classList.add(orderClassName);
                reflow(nextElement);
                activeElement.classList.add(directionalClassName);
                nextElement.classList.add(directionalClassName);
                const transitionDuration = getTransitionDurationFromElement(activeElement);
                EventHandler.one(activeElement, "transitionend", ()=>{
                    nextElement.classList.remove(directionalClassName, orderClassName);
                    nextElement.classList.add(CLASS_NAME_ACTIVE$2);
                    activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
                    this._isSliding = false;
                    setTimeout(()=>{
                        EventHandler.trigger(this._element, EVENT_SLID, {
                            relatedTarget: nextElement,
                            direction: eventDirectionName,
                            from: activeElementIndex,
                            to: nextElementIndex
                        });
                    }, 0);
                });
                emulateTransitionEnd(activeElement, transitionDuration);
            } else {
                activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
                nextElement.classList.add(CLASS_NAME_ACTIVE$2);
                this._isSliding = false;
                EventHandler.trigger(this._element, EVENT_SLID, {
                    relatedTarget: nextElement,
                    direction: eventDirectionName,
                    from: activeElementIndex,
                    to: nextElementIndex
                });
            }
            if (isCycling) this.cycle();
        }
        _directionToOrder(direction) {
            if (![
                DIRECTION_RIGHT,
                DIRECTION_LEFT
            ].includes(direction)) return direction;
            if (isRTL()) return direction === DIRECTION_RIGHT ? ORDER_PREV : ORDER_NEXT;
            return direction === DIRECTION_RIGHT ? ORDER_NEXT : ORDER_PREV;
        }
        _orderToDirection(order) {
            if (![
                ORDER_NEXT,
                ORDER_PREV
            ].includes(order)) return order;
            if (isRTL()) return order === ORDER_NEXT ? DIRECTION_LEFT : DIRECTION_RIGHT;
            return order === ORDER_NEXT ? DIRECTION_RIGHT : DIRECTION_LEFT;
        }
        static carouselInterface(element, config) {
            let data = Data.get(element, DATA_KEY$9);
            let _config = {
                ...Default$8,
                ...Manipulator.getDataAttributes(element)
            };
            if (typeof config === "object") _config = {
                ..._config,
                ...config
            };
            const action = typeof config === "string" ? config : _config.slide;
            if (!data) data = new Carousel(element, _config);
            if (typeof config === "number") data.to(config);
            else if (typeof action === "string") {
                if (typeof data[action] === "undefined") throw new TypeError(`No method named "${action}"`);
                data[action]();
            } else if (_config.interval && _config.ride) {
                data.pause();
                data.cycle();
            }
        }
        static jQueryInterface(config) {
            return this.each(function() {
                Carousel.carouselInterface(this, config);
            });
        }
        static dataApiClickHandler(event) {
            const target = getElementFromSelector(this);
            if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) return;
            const config = {
                ...Manipulator.getDataAttributes(target),
                ...Manipulator.getDataAttributes(this)
            };
            const slideIndex = this.getAttribute("data-bs-slide-to");
            if (slideIndex) config.interval = false;
            Carousel.carouselInterface(target, config);
            if (slideIndex) Data.get(target, DATA_KEY$9).to(slideIndex);
            event.preventDefault();
        }
    }
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */ EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
    EventHandler.on(window, EVENT_LOAD_DATA_API$2, ()=>{
        const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
        for(let i = 0, len = carousels.length; i < len; i++)Carousel.carouselInterface(carousels[i], Data.get(carousels[i], DATA_KEY$9));
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Carousel to jQuery only if jQuery is present
     */ defineJQueryPlugin(NAME$9, Carousel);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.0-beta3): collapse.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ const NAME$8 = "collapse";
    const DATA_KEY$8 = "bs.collapse";
    const EVENT_KEY$8 = `.${DATA_KEY$8}`;
    const DATA_API_KEY$5 = ".data-api";
    const Default$7 = {
        toggle: true,
        parent: ""
    };
    const DefaultType$7 = {
        toggle: "boolean",
        parent: "(string|element)"
    };
    const EVENT_SHOW$5 = `show${EVENT_KEY$8}`;
    const EVENT_SHOWN$5 = `shown${EVENT_KEY$8}`;
    const EVENT_HIDE$5 = `hide${EVENT_KEY$8}`;
    const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$8}`;
    const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
    const CLASS_NAME_SHOW$7 = "show";
    const CLASS_NAME_COLLAPSE = "collapse";
    const CLASS_NAME_COLLAPSING = "collapsing";
    const CLASS_NAME_COLLAPSED = "collapsed";
    const WIDTH = "width";
    const HEIGHT = "height";
    const SELECTOR_ACTIVES = ".show, .collapsing";
    const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ class Collapse extends BaseComponent {
        constructor(element, config){
            super(element);
            this._isTransitioning = false;
            this._config = this._getConfig(config);
            this._triggerArray = SelectorEngine.find(`${SELECTOR_DATA_TOGGLE$4}[href="#${this._element.id}"],` + `${SELECTOR_DATA_TOGGLE$4}[data-bs-target="#${this._element.id}"]`);
            const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
            for(let i = 0, len = toggleList.length; i < len; i++){
                const elem = toggleList[i];
                const selector = getSelectorFromElement(elem);
                const filterElement = SelectorEngine.find(selector).filter((foundElem)=>foundElem === this._element);
                if (selector !== null && filterElement.length) {
                    this._selector = selector;
                    this._triggerArray.push(elem);
                }
            }
            this._parent = this._config.parent ? this._getParent() : null;
            if (!this._config.parent) this._addAriaAndCollapsedClass(this._element, this._triggerArray);
            if (this._config.toggle) this.toggle();
        }
        static get Default() {
            return Default$7;
        }
        static get DATA_KEY() {
            return DATA_KEY$8;
        }
        toggle() {
            if (this._element.classList.contains(CLASS_NAME_SHOW$7)) this.hide();
            else this.show();
        }
        show() {
            if (this._isTransitioning || this._element.classList.contains(CLASS_NAME_SHOW$7)) return;
            let actives;
            let activesData;
            if (this._parent) {
                actives = SelectorEngine.find(SELECTOR_ACTIVES, this._parent).filter((elem)=>{
                    if (typeof this._config.parent === "string") return elem.getAttribute("data-bs-parent") === this._config.parent;
                    return elem.classList.contains(CLASS_NAME_COLLAPSE);
                });
                if (actives.length === 0) actives = null;
            }
            const container = SelectorEngine.findOne(this._selector);
            if (actives) {
                const tempActiveData = actives.find((elem)=>container !== elem);
                activesData = tempActiveData ? Data.get(tempActiveData, DATA_KEY$8) : null;
                if (activesData && activesData._isTransitioning) return;
            }
            const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);
            if (startEvent.defaultPrevented) return;
            if (actives) actives.forEach((elemActive)=>{
                if (container !== elemActive) Collapse.collapseInterface(elemActive, "hide");
                if (!activesData) Data.set(elemActive, DATA_KEY$8, null);
            });
            const dimension = this._getDimension();
            this._element.classList.remove(CLASS_NAME_COLLAPSE);
            this._element.classList.add(CLASS_NAME_COLLAPSING);
            this._element.style[dimension] = 0;
            if (this._triggerArray.length) this._triggerArray.forEach((element)=>{
                element.classList.remove(CLASS_NAME_COLLAPSED);
                element.setAttribute("aria-expanded", true);
            });
            this.setTransitioning(true);
            const complete = ()=>{
                this._element.classList.remove(CLASS_NAME_COLLAPSING);
                this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
                this._element.style[dimension] = "";
                this.setTransitioning(false);
                EventHandler.trigger(this._element, EVENT_SHOWN$5);
            };
            const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
            const scrollSize = `scroll${capitalizedDimension}`;
            const transitionDuration = getTransitionDurationFromElement(this._element);
            EventHandler.one(this._element, "transitionend", complete);
            emulateTransitionEnd(this._element, transitionDuration);
            this._element.style[dimension] = `${this._element[scrollSize]}px`;
        }
        hide() {
            if (this._isTransitioning || !this._element.classList.contains(CLASS_NAME_SHOW$7)) return;
            const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);
            if (startEvent.defaultPrevented) return;
            const dimension = this._getDimension();
            this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
            reflow(this._element);
            this._element.classList.add(CLASS_NAME_COLLAPSING);
            this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
            const triggerArrayLength = this._triggerArray.length;
            if (triggerArrayLength > 0) for(let i = 0; i < triggerArrayLength; i++){
                const trigger = this._triggerArray[i];
                const elem = getElementFromSelector(trigger);
                if (elem && !elem.classList.contains(CLASS_NAME_SHOW$7)) {
                    trigger.classList.add(CLASS_NAME_COLLAPSED);
                    trigger.setAttribute("aria-expanded", false);
                }
            }
            this.setTransitioning(true);
            const complete = ()=>{
                this.setTransitioning(false);
                this._element.classList.remove(CLASS_NAME_COLLAPSING);
                this._element.classList.add(CLASS_NAME_COLLAPSE);
                EventHandler.trigger(this._element, EVENT_HIDDEN$5);
            };
            this._element.style[dimension] = "";
            const transitionDuration = getTransitionDurationFromElement(this._element);
            EventHandler.one(this._element, "transitionend", complete);
            emulateTransitionEnd(this._element, transitionDuration);
        }
        setTransitioning(isTransitioning) {
            this._isTransitioning = isTransitioning;
        }
        dispose() {
            super.dispose();
            this._config = null;
            this._parent = null;
            this._triggerArray = null;
            this._isTransitioning = null;
        }
        _getConfig(config) {
            config = {
                ...Default$7,
                ...config
            };
            config.toggle = Boolean(config.toggle); // Coerce string values
            typeCheckConfig(NAME$8, config, DefaultType$7);
            return config;
        }
        _getDimension() {
            return this._element.classList.contains(WIDTH) ? WIDTH : HEIGHT;
        }
        _getParent() {
            let { parent  } = this._config;
            if (isElement(parent)) // it's a jQuery object
            {
                if (typeof parent.jquery !== "undefined" || typeof parent[0] !== "undefined") parent = parent[0];
            } else parent = SelectorEngine.findOne(parent);
            const selector = `${SELECTOR_DATA_TOGGLE$4}[data-bs-parent="${parent}"]`;
            SelectorEngine.find(selector, parent).forEach((element)=>{
                const selected = getElementFromSelector(element);
                this._addAriaAndCollapsedClass(selected, [
                    element
                ]);
            });
            return parent;
        }
        _addAriaAndCollapsedClass(element, triggerArray) {
            if (!element || !triggerArray.length) return;
            const isOpen = element.classList.contains(CLASS_NAME_SHOW$7);
            triggerArray.forEach((elem)=>{
                if (isOpen) elem.classList.remove(CLASS_NAME_COLLAPSED);
                else elem.classList.add(CLASS_NAME_COLLAPSED);
                elem.setAttribute("aria-expanded", isOpen);
            });
        }
        static collapseInterface(element, config) {
            let data = Data.get(element, DATA_KEY$8);
            const _config = {
                ...Default$7,
                ...Manipulator.getDataAttributes(element),
                ...typeof config === "object" && config ? config : {}
            };
            if (!data && _config.toggle && typeof config === "string" && /show|hide/.test(config)) _config.toggle = false;
            if (!data) data = new Collapse(element, _config);
            if (typeof config === "string") {
                if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        }
        static jQueryInterface(config) {
            return this.each(function() {
                Collapse.collapseInterface(this, config);
            });
        }
    }
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */ EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
        // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
        if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") event.preventDefault();
        const triggerData = Manipulator.getDataAttributes(this);
        const selector = getSelectorFromElement(this);
        const selectorElements = SelectorEngine.find(selector);
        selectorElements.forEach((element)=>{
            const data = Data.get(element, DATA_KEY$8);
            let config;
            if (data) {
                // update parent attribute
                if (data._parent === null && typeof triggerData.parent === "string") {
                    data._config.parent = triggerData.parent;
                    data._parent = data._getParent();
                }
                config = "toggle";
            } else config = triggerData;
            Collapse.collapseInterface(element, config);
        });
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Collapse to jQuery only if jQuery is present
     */ defineJQueryPlugin(NAME$8, Collapse);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.0-beta3): dropdown.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ const NAME$7 = "dropdown";
    const DATA_KEY$7 = "bs.dropdown";
    const EVENT_KEY$7 = `.${DATA_KEY$7}`;
    const DATA_API_KEY$4 = ".data-api";
    const ESCAPE_KEY$2 = "Escape";
    const SPACE_KEY = "Space";
    const TAB_KEY = "Tab";
    const ARROW_UP_KEY = "ArrowUp";
    const ARROW_DOWN_KEY = "ArrowDown";
    const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button
    const REGEXP_KEYDOWN = new RegExp(`${ARROW_UP_KEY}|${ARROW_DOWN_KEY}|${ESCAPE_KEY$2}`);
    const EVENT_HIDE$4 = `hide${EVENT_KEY$7}`;
    const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$7}`;
    const EVENT_SHOW$4 = `show${EVENT_KEY$7}`;
    const EVENT_SHOWN$4 = `shown${EVENT_KEY$7}`;
    const EVENT_CLICK = `click${EVENT_KEY$7}`;
    const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
    const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$7}${DATA_API_KEY$4}`;
    const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$7}${DATA_API_KEY$4}`;
    const CLASS_NAME_DISABLED = "disabled";
    const CLASS_NAME_SHOW$6 = "show";
    const CLASS_NAME_DROPUP = "dropup";
    const CLASS_NAME_DROPEND = "dropend";
    const CLASS_NAME_DROPSTART = "dropstart";
    const CLASS_NAME_NAVBAR = "navbar";
    const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
    const SELECTOR_MENU = ".dropdown-menu";
    const SELECTOR_NAVBAR_NAV = ".navbar-nav";
    const SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
    const PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
    const PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
    const PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
    const PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
    const PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
    const PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
    const Default$6 = {
        offset: [
            0,
            2
        ],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    };
    const DefaultType$6 = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)"
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ class Dropdown extends BaseComponent {
        constructor(element, config){
            super(element);
            this._popper = null;
            this._config = this._getConfig(config);
            this._menu = this._getMenuElement();
            this._inNavbar = this._detectNavbar();
            this._addEventListeners();
        }
        static get Default() {
            return Default$6;
        }
        static get DefaultType() {
            return DefaultType$6;
        }
        static get DATA_KEY() {
            return DATA_KEY$7;
        }
        toggle() {
            if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED)) return;
            const isActive = this._element.classList.contains(CLASS_NAME_SHOW$6);
            Dropdown.clearMenus();
            if (isActive) return;
            this.show();
        }
        show() {
            if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED) || this._menu.classList.contains(CLASS_NAME_SHOW$6)) return;
            const parent = Dropdown.getParentFromElement(this._element);
            const relatedTarget = {
                relatedTarget: this._element
            };
            const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);
            if (showEvent.defaultPrevented) return;
             // Totally disable Popper for Dropdowns in Navbar
            if (this._inNavbar) Manipulator.setDataAttribute(this._menu, "popper", "none");
            else {
                if (typeof Popper__namespace === "undefined") throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                let referenceElement = this._element;
                if (this._config.reference === "parent") referenceElement = parent;
                else if (isElement(this._config.reference)) {
                    referenceElement = this._config.reference; // Check if it's jQuery element
                    if (typeof this._config.reference.jquery !== "undefined") referenceElement = this._config.reference[0];
                } else if (typeof this._config.reference === "object") referenceElement = this._config.reference;
                const popperConfig = this._getPopperConfig();
                const isDisplayStatic = popperConfig.modifiers.find((modifier)=>modifier.name === "applyStyles" && modifier.enabled === false);
                this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);
                if (isDisplayStatic) Manipulator.setDataAttribute(this._menu, "popper", "static");
            } // If this is a touch-enabled device we add extra
            // empty mouseover listeners to the body's immediate children;
            // only needed because of broken event delegation on iOS
            // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
            if ("ontouchstart" in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) [].concat(...document.body.children).forEach((elem)=>EventHandler.on(elem, "mouseover", null, noop()));
            this._element.focus();
            this._element.setAttribute("aria-expanded", true);
            this._menu.classList.toggle(CLASS_NAME_SHOW$6);
            this._element.classList.toggle(CLASS_NAME_SHOW$6);
            EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
        }
        hide() {
            if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED) || !this._menu.classList.contains(CLASS_NAME_SHOW$6)) return;
            const relatedTarget = {
                relatedTarget: this._element
            };
            const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);
            if (hideEvent.defaultPrevented) return;
            if (this._popper) this._popper.destroy();
            this._menu.classList.toggle(CLASS_NAME_SHOW$6);
            this._element.classList.toggle(CLASS_NAME_SHOW$6);
            Manipulator.removeDataAttribute(this._menu, "popper");
            EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
        }
        dispose() {
            EventHandler.off(this._element, EVENT_KEY$7);
            this._menu = null;
            if (this._popper) {
                this._popper.destroy();
                this._popper = null;
            }
            super.dispose();
        }
        update() {
            this._inNavbar = this._detectNavbar();
            if (this._popper) this._popper.update();
        }
        _addEventListeners() {
            EventHandler.on(this._element, EVENT_CLICK, (event)=>{
                event.preventDefault();
                this.toggle();
            });
        }
        _getConfig(config) {
            config = {
                ...this.constructor.Default,
                ...Manipulator.getDataAttributes(this._element),
                ...config
            };
            typeCheckConfig(NAME$7, config, this.constructor.DefaultType);
            if (typeof config.reference === "object" && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== "function") // Popper virtual elements require a getBoundingClientRect method
            throw new TypeError(`${NAME$7.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return config;
        }
        _getMenuElement() {
            return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
        }
        _getPlacement() {
            const parentDropdown = this._element.parentNode;
            if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) return PLACEMENT_RIGHT;
            if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) return PLACEMENT_LEFT;
             // We need to trim the value because custom properties can also include spaces
            const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
            if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
            return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
        }
        _detectNavbar() {
            return this._element.closest(`.${CLASS_NAME_NAVBAR}`) !== null;
        }
        _getOffset() {
            const { offset  } = this._config;
            if (typeof offset === "string") return offset.split(",").map((val)=>Number.parseInt(val, 10));
            if (typeof offset === "function") return (popperData)=>offset(popperData, this._element);
            return offset;
        }
        _getPopperConfig() {
            const defaultBsPopperConfig = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }
                ]
            }; // Disable Popper if we have a static display
            if (this._config.display === "static") defaultBsPopperConfig.modifiers = [
                {
                    name: "applyStyles",
                    enabled: false
                }
            ];
            return {
                ...defaultBsPopperConfig,
                ...typeof this._config.popperConfig === "function" ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig
            };
        }
        static dropdownInterface(element, config) {
            let data = Data.get(element, DATA_KEY$7);
            const _config = typeof config === "object" ? config : null;
            if (!data) data = new Dropdown(element, _config);
            if (typeof config === "string") {
                if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        }
        static jQueryInterface(config) {
            return this.each(function() {
                Dropdown.dropdownInterface(this, config);
            });
        }
        static clearMenus(event) {
            if (event) {
                if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY) return;
                if (/input|select|textarea|form/i.test(event.target.tagName)) return;
            }
            const toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);
            for(let i = 0, len = toggles.length; i < len; i++){
                const context = Data.get(toggles[i], DATA_KEY$7);
                const relatedTarget = {
                    relatedTarget: toggles[i]
                };
                if (event && event.type === "click") relatedTarget.clickEvent = event;
                if (!context) continue;
                const dropdownMenu = context._menu;
                if (!toggles[i].classList.contains(CLASS_NAME_SHOW$6)) continue;
                if (event) {
                    // Don't close the menu if the clicked element or one of its parents is the dropdown button
                    if ([
                        context._element
                    ].some((element)=>event.composedPath().includes(element))) continue;
                     // Tab navigation through the dropdown menu shouldn't close the menu
                    if (event.type === "keyup" && event.key === TAB_KEY && dropdownMenu.contains(event.target)) continue;
                }
                const hideEvent = EventHandler.trigger(toggles[i], EVENT_HIDE$4, relatedTarget);
                if (hideEvent.defaultPrevented) continue;
                 // If this is a touch-enabled device we remove the extra
                // empty mouseover listeners we added for iOS support
                if ("ontouchstart" in document.documentElement) [].concat(...document.body.children).forEach((elem)=>EventHandler.off(elem, "mouseover", null, noop()));
                toggles[i].setAttribute("aria-expanded", "false");
                if (context._popper) context._popper.destroy();
                dropdownMenu.classList.remove(CLASS_NAME_SHOW$6);
                toggles[i].classList.remove(CLASS_NAME_SHOW$6);
                Manipulator.removeDataAttribute(dropdownMenu, "popper");
                EventHandler.trigger(toggles[i], EVENT_HIDDEN$4, relatedTarget);
            }
        }
        static getParentFromElement(element) {
            return getElementFromSelector(element) || element.parentNode;
        }
        static dataApiKeydownHandler(event) {
            // If not input/textarea:
            //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
            // If input/textarea:
            //  - If space key => not a dropdown command
            //  - If key is other than escape
            //    - If key is not up or down => not a dropdown command
            //    - If trigger inside the menu => not a dropdown command
            if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) return;
            event.preventDefault();
            event.stopPropagation();
            if (this.disabled || this.classList.contains(CLASS_NAME_DISABLED)) return;
            const parent = Dropdown.getParentFromElement(this);
            const isActive = this.classList.contains(CLASS_NAME_SHOW$6);
            if (event.key === ESCAPE_KEY$2) {
                const button = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
                button.focus();
                Dropdown.clearMenus();
                return;
            }
            if (!isActive && (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY)) {
                const button1 = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
                button1.click();
                return;
            }
            if (!isActive || event.key === SPACE_KEY) {
                Dropdown.clearMenus();
                return;
            }
            const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, parent).filter(isVisible);
            if (!items.length) return;
            let index = items.indexOf(event.target); // Up
            if (event.key === ARROW_UP_KEY && index > 0) index--;
             // Down
            if (event.key === ARROW_DOWN_KEY && index < items.length - 1) index++;
             // index is -1 if the first keydown is an ArrowUp
            index = index === -1 ? 0 : index;
            items[index].focus();
        }
    }
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */ EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
    EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
    EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
    EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
    EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
        event.preventDefault();
        Dropdown.dropdownInterface(this);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Dropdown to jQuery only if jQuery is present
     */ defineJQueryPlugin(NAME$7, Dropdown);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.0-beta3): modal.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ const NAME$6 = "modal";
    const DATA_KEY$6 = "bs.modal";
    const EVENT_KEY$6 = `.${DATA_KEY$6}`;
    const DATA_API_KEY$3 = ".data-api";
    const ESCAPE_KEY$1 = "Escape";
    const Default$5 = {
        backdrop: true,
        keyboard: true,
        focus: true
    };
    const DefaultType$5 = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    };
    const EVENT_HIDE$3 = `hide${EVENT_KEY$6}`;
    const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$6}`;
    const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$6}`;
    const EVENT_SHOW$3 = `show${EVENT_KEY$6}`;
    const EVENT_SHOWN$3 = `shown${EVENT_KEY$6}`;
    const EVENT_FOCUSIN$1 = `focusin${EVENT_KEY$6}`;
    const EVENT_RESIZE = `resize${EVENT_KEY$6}`;
    const EVENT_CLICK_DISMISS$2 = `click.dismiss${EVENT_KEY$6}`;
    const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$6}`;
    const EVENT_MOUSEUP_DISMISS = `mouseup.dismiss${EVENT_KEY$6}`;
    const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$6}`;
    const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
    const CLASS_NAME_SCROLLBAR_MEASURER = "modal-scrollbar-measure";
    const CLASS_NAME_BACKDROP = "modal-backdrop";
    const CLASS_NAME_OPEN = "modal-open";
    const CLASS_NAME_FADE$4 = "fade";
    const CLASS_NAME_SHOW$5 = "show";
    const CLASS_NAME_STATIC = "modal-static";
    const SELECTOR_DIALOG = ".modal-dialog";
    const SELECTOR_MODAL_BODY = ".modal-body";
    const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
    const SELECTOR_DATA_DISMISS$2 = '[data-bs-dismiss="modal"]';
    const SELECTOR_FIXED_CONTENT$1 = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
    const SELECTOR_STICKY_CONTENT$1 = ".sticky-top";
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ class Modal extends BaseComponent {
        constructor(element, config){
            super(element);
            this._config = this._getConfig(config);
            this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
            this._backdrop = null;
            this._isShown = false;
            this._isBodyOverflowing = false;
            this._ignoreBackdropClick = false;
            this._isTransitioning = false;
            this._scrollbarWidth = 0;
        }
        static get Default() {
            return Default$5;
        }
        static get DATA_KEY() {
            return DATA_KEY$6;
        }
        toggle(relatedTarget) {
            return this._isShown ? this.hide() : this.show(relatedTarget);
        }
        show(relatedTarget) {
            if (this._isShown || this._isTransitioning) return;
            if (this._isAnimated()) this._isTransitioning = true;
            const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
                relatedTarget
            });
            if (this._isShown || showEvent.defaultPrevented) return;
            this._isShown = true;
            this._checkScrollbar();
            this._setScrollbar();
            this._adjustDialog();
            this._setEscapeEvent();
            this._setResizeEvent();
            EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, SELECTOR_DATA_DISMISS$2, (event)=>this.hide(event));
            EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, ()=>{
                EventHandler.one(this._element, EVENT_MOUSEUP_DISMISS, (event)=>{
                    if (event.target === this._element) this._ignoreBackdropClick = true;
                });
            });
            this._showBackdrop(()=>this._showElement(relatedTarget));
        }
        hide(event) {
            if (event) event.preventDefault();
            if (!this._isShown || this._isTransitioning) return;
            const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
            if (hideEvent.defaultPrevented) return;
            this._isShown = false;
            const isAnimated = this._isAnimated();
            if (isAnimated) this._isTransitioning = true;
            this._setEscapeEvent();
            this._setResizeEvent();
            EventHandler.off(document, EVENT_FOCUSIN$1);
            this._element.classList.remove(CLASS_NAME_SHOW$5);
            EventHandler.off(this._element, EVENT_CLICK_DISMISS$2);
            EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);
            if (isAnimated) {
                const transitionDuration = getTransitionDurationFromElement(this._element);
                EventHandler.one(this._element, "transitionend", (event)=>this._hideModal(event));
                emulateTransitionEnd(this._element, transitionDuration);
            } else this._hideModal();
        }
        dispose() {
            [
                window,
                this._element,
                this._dialog
            ].forEach((htmlElement)=>EventHandler.off(htmlElement, EVENT_KEY$6));
            super.dispose();
            /**
         * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
         * Do not move `document` in `htmlElements` array
         * It will remove `EVENT_CLICK_DATA_API` event that should remain
         */ EventHandler.off(document, EVENT_FOCUSIN$1);
            this._config = null;
            this._dialog = null;
            this._backdrop = null;
            this._isShown = null;
            this._isBodyOverflowing = null;
            this._ignoreBackdropClick = null;
            this._isTransitioning = null;
            this._scrollbarWidth = null;
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _getConfig(config) {
            config = {
                ...Default$5,
                ...config
            };
            typeCheckConfig(NAME$6, config, DefaultType$5);
            return config;
        }
        _showElement(relatedTarget) {
            const isAnimated = this._isAnimated();
            const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
            if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) // Don't move modal's DOM position
            document.body.appendChild(this._element);
            this._element.style.display = "block";
            this._element.removeAttribute("aria-hidden");
            this._element.setAttribute("aria-modal", true);
            this._element.setAttribute("role", "dialog");
            this._element.scrollTop = 0;
            if (modalBody) modalBody.scrollTop = 0;
            if (isAnimated) reflow(this._element);
            this._element.classList.add(CLASS_NAME_SHOW$5);
            if (this._config.focus) this._enforceFocus();
            const transitionComplete = ()=>{
                if (this._config.focus) this._element.focus();
                this._isTransitioning = false;
                EventHandler.trigger(this._element, EVENT_SHOWN$3, {
                    relatedTarget
                });
            };
            if (isAnimated) {
                const transitionDuration = getTransitionDurationFromElement(this._dialog);
                EventHandler.one(this._dialog, "transitionend", transitionComplete);
                emulateTransitionEnd(this._dialog, transitionDuration);
            } else transitionComplete();
        }
        _enforceFocus() {
            EventHandler.off(document, EVENT_FOCUSIN$1); // guard against infinite focus loop
            EventHandler.on(document, EVENT_FOCUSIN$1, (event)=>{
                if (document !== event.target && this._element !== event.target && !this._element.contains(event.target)) this._element.focus();
            });
        }
        _setEscapeEvent() {
            if (this._isShown) EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event)=>{
                if (this._config.keyboard && event.key === ESCAPE_KEY$1) {
                    event.preventDefault();
                    this.hide();
                } else if (!this._config.keyboard && event.key === ESCAPE_KEY$1) this._triggerBackdropTransition();
            });
            else EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS);
        }
        _setResizeEvent() {
            if (this._isShown) EventHandler.on(window, EVENT_RESIZE, ()=>this._adjustDialog());
            else EventHandler.off(window, EVENT_RESIZE);
        }
        _hideModal() {
            this._element.style.display = "none";
            this._element.setAttribute("aria-hidden", true);
            this._element.removeAttribute("aria-modal");
            this._element.removeAttribute("role");
            this._isTransitioning = false;
            this._showBackdrop(()=>{
                document.body.classList.remove(CLASS_NAME_OPEN);
                this._resetAdjustments();
                this._resetScrollbar();
                EventHandler.trigger(this._element, EVENT_HIDDEN$3);
            });
        }
        _removeBackdrop() {
            this._backdrop.parentNode.removeChild(this._backdrop);
            this._backdrop = null;
        }
        _showBackdrop(callback) {
            const isAnimated = this._isAnimated();
            if (this._isShown && this._config.backdrop) {
                this._backdrop = document.createElement("div");
                this._backdrop.className = CLASS_NAME_BACKDROP;
                if (isAnimated) this._backdrop.classList.add(CLASS_NAME_FADE$4);
                document.body.appendChild(this._backdrop);
                EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, (event)=>{
                    if (this._ignoreBackdropClick) {
                        this._ignoreBackdropClick = false;
                        return;
                    }
                    if (event.target !== event.currentTarget) return;
                    if (this._config.backdrop === "static") this._triggerBackdropTransition();
                    else this.hide();
                });
                if (isAnimated) reflow(this._backdrop);
                this._backdrop.classList.add(CLASS_NAME_SHOW$5);
                if (!isAnimated) {
                    callback();
                    return;
                }
                const backdropTransitionDuration = getTransitionDurationFromElement(this._backdrop);
                EventHandler.one(this._backdrop, "transitionend", callback);
                emulateTransitionEnd(this._backdrop, backdropTransitionDuration);
            } else if (!this._isShown && this._backdrop) {
                this._backdrop.classList.remove(CLASS_NAME_SHOW$5);
                const callbackRemove = ()=>{
                    this._removeBackdrop();
                    callback();
                };
                if (isAnimated) {
                    const backdropTransitionDuration1 = getTransitionDurationFromElement(this._backdrop);
                    EventHandler.one(this._backdrop, "transitionend", callbackRemove);
                    emulateTransitionEnd(this._backdrop, backdropTransitionDuration1);
                } else callbackRemove();
            } else callback();
        }
        _isAnimated() {
            return this._element.classList.contains(CLASS_NAME_FADE$4);
        }
        _triggerBackdropTransition() {
            const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
            if (hideEvent.defaultPrevented) return;
            const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
            if (!isModalOverflowing) this._element.style.overflowY = "hidden";
            this._element.classList.add(CLASS_NAME_STATIC);
            const modalTransitionDuration = getTransitionDurationFromElement(this._dialog);
            EventHandler.off(this._element, "transitionend");
            EventHandler.one(this._element, "transitionend", ()=>{
                this._element.classList.remove(CLASS_NAME_STATIC);
                if (!isModalOverflowing) {
                    EventHandler.one(this._element, "transitionend", ()=>{
                        this._element.style.overflowY = "";
                    });
                    emulateTransitionEnd(this._element, modalTransitionDuration);
                }
            });
            emulateTransitionEnd(this._element, modalTransitionDuration);
            this._element.focus();
        }
        // the following methods are used to handle overflowing modals
        // ----------------------------------------------------------------------
        _adjustDialog() {
            const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
            if (!this._isBodyOverflowing && isModalOverflowing && !isRTL() || this._isBodyOverflowing && !isModalOverflowing && isRTL()) this._element.style.paddingLeft = `${this._scrollbarWidth}px`;
            if (this._isBodyOverflowing && !isModalOverflowing && !isRTL() || !this._isBodyOverflowing && isModalOverflowing && isRTL()) this._element.style.paddingRight = `${this._scrollbarWidth}px`;
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "";
            this._element.style.paddingRight = "";
        }
        _checkScrollbar() {
            const rect = document.body.getBoundingClientRect();
            this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
            this._scrollbarWidth = this._getScrollbarWidth();
        }
        _setScrollbar() {
            if (this._isBodyOverflowing) {
                this._setElementAttributes(SELECTOR_FIXED_CONTENT$1, "paddingRight", (calculatedValue)=>calculatedValue + this._scrollbarWidth);
                this._setElementAttributes(SELECTOR_STICKY_CONTENT$1, "marginRight", (calculatedValue)=>calculatedValue - this._scrollbarWidth);
                this._setElementAttributes("body", "paddingRight", (calculatedValue)=>calculatedValue + this._scrollbarWidth);
            }
            document.body.classList.add(CLASS_NAME_OPEN);
        }
        _setElementAttributes(selector, styleProp, callback) {
            SelectorEngine.find(selector).forEach((element)=>{
                if (element !== document.body && window.innerWidth > element.clientWidth + this._scrollbarWidth) return;
                const actualValue = element.style[styleProp];
                const calculatedValue = window.getComputedStyle(element)[styleProp];
                Manipulator.setDataAttribute(element, styleProp, actualValue);
                element.style[styleProp] = callback(Number.parseFloat(calculatedValue)) + "px";
            });
        }
        _resetScrollbar() {
            this._resetElementAttributes(SELECTOR_FIXED_CONTENT$1, "paddingRight");
            this._resetElementAttributes(SELECTOR_STICKY_CONTENT$1, "marginRight");
            this._resetElementAttributes("body", "paddingRight");
        }
        _resetElementAttributes(selector, styleProp) {
            SelectorEngine.find(selector).forEach((element)=>{
                const value = Manipulator.getDataAttribute(element, styleProp);
                if (typeof value === "undefined" && element === document.body) element.style[styleProp] = "";
                else {
                    Manipulator.removeDataAttribute(element, styleProp);
                    element.style[styleProp] = value;
                }
            });
        }
        _getScrollbarWidth() {
            // thx d.walsh
            const scrollDiv = document.createElement("div");
            scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
            document.body.appendChild(scrollDiv);
            const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
            return scrollbarWidth;
        }
        static jQueryInterface(config, relatedTarget) {
            return this.each(function() {
                let data = Data.get(this, DATA_KEY$6);
                const _config = {
                    ...Default$5,
                    ...Manipulator.getDataAttributes(this),
                    ...typeof config === "object" && config ? config : {}
                };
                if (!data) data = new Modal(this, _config);
                if (typeof config === "string") {
                    if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                    data[config](relatedTarget);
                }
            });
        }
    }
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */ EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
        const target = getElementFromSelector(this);
        if (this.tagName === "A" || this.tagName === "AREA") event.preventDefault();
        EventHandler.one(target, EVENT_SHOW$3, (showEvent)=>{
            if (showEvent.defaultPrevented) // only register focus restorer if modal will actually get shown
            return;
            EventHandler.one(target, EVENT_HIDDEN$3, ()=>{
                if (isVisible(this)) this.focus();
            });
        });
        let data = Data.get(target, DATA_KEY$6);
        if (!data) {
            const config = {
                ...Manipulator.getDataAttributes(target),
                ...Manipulator.getDataAttributes(this)
            };
            data = new Modal(target, config);
        }
        data.toggle(this);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Modal to jQuery only if jQuery is present
     */ defineJQueryPlugin(NAME$6, Modal);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.0-beta3): util/scrollBar.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ const SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed";
    const SELECTOR_STICKY_CONTENT = ".sticky-top";
    const getWidth = ()=>{
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
        const documentWidth = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - documentWidth);
    };
    const hide = (width = getWidth())=>{
        document.body.style.overflow = "hidden";
        _setElementAttributes(SELECTOR_FIXED_CONTENT, "paddingRight", (calculatedValue)=>calculatedValue + width);
        _setElementAttributes(SELECTOR_STICKY_CONTENT, "marginRight", (calculatedValue)=>calculatedValue - width);
        _setElementAttributes("body", "paddingRight", (calculatedValue)=>calculatedValue + width);
    };
    const _setElementAttributes = (selector, styleProp, callback)=>{
        const scrollbarWidth = getWidth();
        SelectorEngine.find(selector).forEach((element)=>{
            if (element !== document.body && window.innerWidth > element.clientWidth + scrollbarWidth) return;
            const actualValue = element.style[styleProp];
            const calculatedValue = window.getComputedStyle(element)[styleProp];
            Manipulator.setDataAttribute(element, styleProp, actualValue);
            element.style[styleProp] = callback(Number.parseFloat(calculatedValue)) + "px";
        });
    };
    const reset = ()=>{
        document.body.style.overflow = "auto";
        _resetElementAttributes(SELECTOR_FIXED_CONTENT, "paddingRight");
        _resetElementAttributes(SELECTOR_STICKY_CONTENT, "marginRight");
        _resetElementAttributes("body", "paddingRight");
    };
    const _resetElementAttributes = (selector, styleProp)=>{
        SelectorEngine.find(selector).forEach((element)=>{
            const value = Manipulator.getDataAttribute(element, styleProp);
            if (typeof value === "undefined" && element === document.body) element.style.removeProperty(styleProp);
            else {
                Manipulator.removeDataAttribute(element, styleProp);
                element.style[styleProp] = value;
            }
        });
    };
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.0-beta3): offcanvas.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ const NAME$5 = "offcanvas";
    const DATA_KEY$5 = "bs.offcanvas";
    const EVENT_KEY$5 = `.${DATA_KEY$5}`;
    const DATA_API_KEY$2 = ".data-api";
    const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$5}${DATA_API_KEY$2}`;
    const ESCAPE_KEY = "Escape";
    const Default$4 = {
        backdrop: true,
        keyboard: true,
        scroll: false
    };
    const DefaultType$4 = {
        backdrop: "boolean",
        keyboard: "boolean",
        scroll: "boolean"
    };
    const CLASS_NAME_BACKDROP_BODY = "offcanvas-backdrop";
    const CLASS_NAME_SHOW$4 = "show";
    const CLASS_NAME_TOGGLING = "offcanvas-toggling";
    const OPEN_SELECTOR = ".offcanvas.show";
    const ACTIVE_SELECTOR = `${OPEN_SELECTOR}, .${CLASS_NAME_TOGGLING}`;
    const EVENT_SHOW$2 = `show${EVENT_KEY$5}`;
    const EVENT_SHOWN$2 = `shown${EVENT_KEY$5}`;
    const EVENT_HIDE$2 = `hide${EVENT_KEY$5}`;
    const EVENT_HIDDEN$2 = `hidden${EVENT_KEY$5}`;
    const EVENT_FOCUSIN = `focusin${EVENT_KEY$5}`;
    const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$5}${DATA_API_KEY$2}`;
    const EVENT_CLICK_DISMISS$1 = `click.dismiss${EVENT_KEY$5}`;
    const SELECTOR_DATA_DISMISS$1 = '[data-bs-dismiss="offcanvas"]';
    const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ class Offcanvas extends BaseComponent {
        constructor(element, config){
            super(element);
            this._config = this._getConfig(config);
            this._isShown = false;
            this._addEventListeners();
        }
        static get Default() {
            return Default$4;
        }
        static get DATA_KEY() {
            return DATA_KEY$5;
        }
        toggle(relatedTarget) {
            return this._isShown ? this.hide() : this.show(relatedTarget);
        }
        show(relatedTarget) {
            if (this._isShown) return;
            const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
                relatedTarget
            });
            if (showEvent.defaultPrevented) return;
            this._isShown = true;
            this._element.style.visibility = "visible";
            if (this._config.backdrop) document.body.classList.add(CLASS_NAME_BACKDROP_BODY);
            if (!this._config.scroll) hide();
            this._element.classList.add(CLASS_NAME_TOGGLING);
            this._element.removeAttribute("aria-hidden");
            this._element.setAttribute("aria-modal", true);
            this._element.setAttribute("role", "dialog");
            this._element.classList.add(CLASS_NAME_SHOW$4);
            const completeCallBack = ()=>{
                this._element.classList.remove(CLASS_NAME_TOGGLING);
                EventHandler.trigger(this._element, EVENT_SHOWN$2, {
                    relatedTarget
                });
                this._enforceFocusOnElement(this._element);
            };
            setTimeout(completeCallBack, getTransitionDurationFromElement(this._element));
        }
        hide() {
            if (!this._isShown) return;
            const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);
            if (hideEvent.defaultPrevented) return;
            this._element.classList.add(CLASS_NAME_TOGGLING);
            EventHandler.off(document, EVENT_FOCUSIN);
            this._element.blur();
            this._isShown = false;
            this._element.classList.remove(CLASS_NAME_SHOW$4);
            const completeCallback = ()=>{
                this._element.setAttribute("aria-hidden", true);
                this._element.removeAttribute("aria-modal");
                this._element.removeAttribute("role");
                this._element.style.visibility = "hidden";
                if (this._config.backdrop) document.body.classList.remove(CLASS_NAME_BACKDROP_BODY);
                if (!this._config.scroll) reset();
                EventHandler.trigger(this._element, EVENT_HIDDEN$2);
                this._element.classList.remove(CLASS_NAME_TOGGLING);
            };
            setTimeout(completeCallback, getTransitionDurationFromElement(this._element));
        }
        _getConfig(config) {
            config = {
                ...Default$4,
                ...Manipulator.getDataAttributes(this._element),
                ...typeof config === "object" ? config : {}
            };
            typeCheckConfig(NAME$5, config, DefaultType$4);
            return config;
        }
        _enforceFocusOnElement(element) {
            EventHandler.off(document, EVENT_FOCUSIN); // guard against infinite focus loop
            EventHandler.on(document, EVENT_FOCUSIN, (event)=>{
                if (document !== event.target && element !== event.target && !element.contains(event.target)) element.focus();
            });
            element.focus();
        }
        _addEventListeners() {
            EventHandler.on(this._element, EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, ()=>this.hide());
            EventHandler.on(document, "keydown", (event)=>{
                if (this._config.keyboard && event.key === ESCAPE_KEY) this.hide();
            });
            EventHandler.on(document, EVENT_CLICK_DATA_API$1, (event)=>{
                const target = SelectorEngine.findOne(getSelectorFromElement(event.target));
                if (!this._element.contains(event.target) && target !== this._element) this.hide();
            });
        }
        static jQueryInterface(config) {
            return this.each(function() {
                const data = Data.get(this, DATA_KEY$5) || new Offcanvas(this, typeof config === "object" ? config : {});
                if (typeof config !== "string") return;
                if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
                data[config](this);
            });
        }
    }
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */ EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
        const target = getElementFromSelector(this);
        if ([
            "A",
            "AREA"
        ].includes(this.tagName)) event.preventDefault();
        if (isDisabled(this)) return;
        EventHandler.one(target, EVENT_HIDDEN$2, ()=>{
            // focus on trigger when it is closed
            if (isVisible(this)) this.focus();
        }); // avoid conflict when clicking a toggler of an offcanvas, while another is open
        const allReadyOpen = SelectorEngine.findOne(ACTIVE_SELECTOR);
        if (allReadyOpen && allReadyOpen !== target) return;
        const data = Data.get(target, DATA_KEY$5) || new Offcanvas(target);
        data.toggle(this);
    });
    EventHandler.on(window, EVENT_LOAD_DATA_API$1, ()=>{
        SelectorEngine.find(OPEN_SELECTOR).forEach((el)=>(Data.get(el, DATA_KEY$5) || new Offcanvas(el)).show());
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */ defineJQueryPlugin(NAME$5, Offcanvas);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.0-beta3): util/sanitizer.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ const uriAttrs = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
    ]);
    const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
    /**
     * A pattern that recognizes a commonly useful subset of URLs that are safe.
     *
     * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
     */ const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i;
    /**
     * A pattern that matches safe data URLs. Only matches image, video and audio types.
     *
     * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
     */ const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    const allowedAttribute = (attr, allowedAttributeList)=>{
        const attrName = attr.nodeName.toLowerCase();
        if (allowedAttributeList.includes(attrName)) {
            if (uriAttrs.has(attrName)) return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
            return true;
        }
        const regExp = allowedAttributeList.filter((attrRegex)=>attrRegex instanceof RegExp); // Check if a regular expression validates the attribute.
        for(let i = 0, len = regExp.length; i < len; i++){
            if (regExp[i].test(attrName)) return true;
        }
        return false;
    };
    const DefaultAllowlist = {
        // Global attributes allowed on any supplied element below.
        "*": [
            "class",
            "dir",
            "id",
            "lang",
            "role",
            ARIA_ATTRIBUTE_PATTERN
        ],
        a: [
            "target",
            "href",
            "title",
            "rel"
        ],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: [
            "src",
            "srcset",
            "alt",
            "title",
            "width",
            "height"
        ],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    };
    function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
        if (!unsafeHtml.length) return unsafeHtml;
        if (sanitizeFn && typeof sanitizeFn === "function") return sanitizeFn(unsafeHtml);
        const domParser = new window.DOMParser();
        const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
        const allowlistKeys = Object.keys(allowList);
        const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
        for(let i = 0, len = elements.length; i < len; i++){
            const el = elements[i];
            const elName = el.nodeName.toLowerCase();
            if (!allowlistKeys.includes(elName)) {
                el.parentNode.removeChild(el);
                continue;
            }
            const attributeList = [].concat(...el.attributes);
            const allowedAttributes = [].concat(allowList["*"] || [], allowList[elName] || []);
            attributeList.forEach((attr)=>{
                if (!allowedAttribute(attr, allowedAttributes)) el.removeAttribute(attr.nodeName);
            });
        }
        return createdDocument.body.innerHTML;
    }
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.0-beta3): tooltip.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ const NAME$4 = "tooltip";
    const DATA_KEY$4 = "bs.tooltip";
    const EVENT_KEY$4 = `.${DATA_KEY$4}`;
    const CLASS_PREFIX$1 = "bs-tooltip";
    const BSCLS_PREFIX_REGEX$1 = new RegExp(`(^|\\s)${CLASS_PREFIX$1}\\S+`, "g");
    const DISALLOWED_ATTRIBUTES = new Set([
        "sanitize",
        "allowList",
        "sanitizeFn"
    ]);
    const DefaultType$3 = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)"
    };
    const AttachmentMap = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: isRTL() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: isRTL() ? "right" : "left"
    };
    const Default$3 = {
        animation: true,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: false,
        selector: false,
        placement: "top",
        offset: [
            0,
            0
        ],
        container: false,
        fallbackPlacements: [
            "top",
            "right",
            "bottom",
            "left"
        ],
        boundary: "clippingParents",
        customClass: "",
        sanitize: true,
        sanitizeFn: null,
        allowList: DefaultAllowlist,
        popperConfig: null
    };
    const Event$2 = {
        HIDE: `hide${EVENT_KEY$4}`,
        HIDDEN: `hidden${EVENT_KEY$4}`,
        SHOW: `show${EVENT_KEY$4}`,
        SHOWN: `shown${EVENT_KEY$4}`,
        INSERTED: `inserted${EVENT_KEY$4}`,
        CLICK: `click${EVENT_KEY$4}`,
        FOCUSIN: `focusin${EVENT_KEY$4}`,
        FOCUSOUT: `focusout${EVENT_KEY$4}`,
        MOUSEENTER: `mouseenter${EVENT_KEY$4}`,
        MOUSELEAVE: `mouseleave${EVENT_KEY$4}`
    };
    const CLASS_NAME_FADE$3 = "fade";
    const CLASS_NAME_MODAL = "modal";
    const CLASS_NAME_SHOW$3 = "show";
    const HOVER_STATE_SHOW = "show";
    const HOVER_STATE_OUT = "out";
    const SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
    const TRIGGER_HOVER = "hover";
    const TRIGGER_FOCUS = "focus";
    const TRIGGER_CLICK = "click";
    const TRIGGER_MANUAL = "manual";
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ class Tooltip extends BaseComponent {
        constructor(element, config){
            if (typeof Popper__namespace === "undefined") throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(element); // private
            this._isEnabled = true;
            this._timeout = 0;
            this._hoverState = "";
            this._activeTrigger = {};
            this._popper = null; // Protected
            this.config = this._getConfig(config);
            this.tip = null;
            this._setListeners();
        }
        static get Default() {
            return Default$3;
        }
        static get NAME() {
            return NAME$4;
        }
        static get DATA_KEY() {
            return DATA_KEY$4;
        }
        static get Event() {
            return Event$2;
        }
        static get EVENT_KEY() {
            return EVENT_KEY$4;
        }
        static get DefaultType() {
            return DefaultType$3;
        }
        enable() {
            this._isEnabled = true;
        }
        disable() {
            this._isEnabled = false;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle(event) {
            if (!this._isEnabled) return;
            if (event) {
                const context = this._initializeOnDelegatedTarget(event);
                context._activeTrigger.click = !context._activeTrigger.click;
                if (context._isWithActiveTrigger()) context._enter(null, context);
                else context._leave(null, context);
            } else {
                if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$3)) {
                    this._leave(null, this);
                    return;
                }
                this._enter(null, this);
            }
        }
        dispose() {
            clearTimeout(this._timeout);
            EventHandler.off(this._element, this.constructor.EVENT_KEY);
            EventHandler.off(this._element.closest(`.${CLASS_NAME_MODAL}`), "hide.bs.modal", this._hideModalHandler);
            if (this.tip && this.tip.parentNode) this.tip.parentNode.removeChild(this.tip);
            this._isEnabled = null;
            this._timeout = null;
            this._hoverState = null;
            this._activeTrigger = null;
            if (this._popper) this._popper.destroy();
            this._popper = null;
            this.config = null;
            this.tip = null;
            super.dispose();
        }
        show() {
            if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
            if (!(this.isWithContent() && this._isEnabled)) return;
            const showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
            const shadowRoot = findShadowRoot(this._element);
            const isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);
            if (showEvent.defaultPrevented || !isInTheDom) return;
            const tip = this.getTipElement();
            const tipId = getUID(this.constructor.NAME);
            tip.setAttribute("id", tipId);
            this._element.setAttribute("aria-describedby", tipId);
            this.setContent();
            if (this.config.animation) tip.classList.add(CLASS_NAME_FADE$3);
            const placement = typeof this.config.placement === "function" ? this.config.placement.call(this, tip, this._element) : this.config.placement;
            const attachment = this._getAttachment(placement);
            this._addAttachmentClass(attachment);
            const container = this._getContainer();
            Data.set(tip, this.constructor.DATA_KEY, this);
            if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
                container.appendChild(tip);
                EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
            }
            if (this._popper) this._popper.update();
            else this._popper = Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
            tip.classList.add(CLASS_NAME_SHOW$3);
            const customClass = typeof this.config.customClass === "function" ? this.config.customClass() : this.config.customClass;
            if (customClass) tip.classList.add(...customClass.split(" "));
             // If this is a touch-enabled device we add extra
            // empty mouseover listeners to the body's immediate children;
            // only needed because of broken event delegation on iOS
            // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
            if ("ontouchstart" in document.documentElement) [].concat(...document.body.children).forEach((element)=>{
                EventHandler.on(element, "mouseover", noop());
            });
            const complete = ()=>{
                const prevHoverState = this._hoverState;
                this._hoverState = null;
                EventHandler.trigger(this._element, this.constructor.Event.SHOWN);
                if (prevHoverState === HOVER_STATE_OUT) this._leave(null, this);
            };
            if (this.tip.classList.contains(CLASS_NAME_FADE$3)) {
                const transitionDuration = getTransitionDurationFromElement(this.tip);
                EventHandler.one(this.tip, "transitionend", complete);
                emulateTransitionEnd(this.tip, transitionDuration);
            } else complete();
        }
        hide() {
            if (!this._popper) return;
            const tip = this.getTipElement();
            const complete = ()=>{
                if (this._isWithActiveTrigger()) return;
                if (this._hoverState !== HOVER_STATE_SHOW && tip.parentNode) tip.parentNode.removeChild(tip);
                this._cleanTipClass();
                this._element.removeAttribute("aria-describedby");
                EventHandler.trigger(this._element, this.constructor.Event.HIDDEN);
                if (this._popper) {
                    this._popper.destroy();
                    this._popper = null;
                }
            };
            const hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);
            if (hideEvent.defaultPrevented) return;
            tip.classList.remove(CLASS_NAME_SHOW$3); // If this is a touch-enabled device we remove the extra
            // empty mouseover listeners we added for iOS support
            if ("ontouchstart" in document.documentElement) [].concat(...document.body.children).forEach((element)=>EventHandler.off(element, "mouseover", noop));
            this._activeTrigger[TRIGGER_CLICK] = false;
            this._activeTrigger[TRIGGER_FOCUS] = false;
            this._activeTrigger[TRIGGER_HOVER] = false;
            if (this.tip.classList.contains(CLASS_NAME_FADE$3)) {
                const transitionDuration = getTransitionDurationFromElement(tip);
                EventHandler.one(tip, "transitionend", complete);
                emulateTransitionEnd(tip, transitionDuration);
            } else complete();
            this._hoverState = "";
        }
        update() {
            if (this._popper !== null) this._popper.update();
        }
        isWithContent() {
            return Boolean(this.getTitle());
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const element = document.createElement("div");
            element.innerHTML = this.config.template;
            this.tip = element.children[0];
            return this.tip;
        }
        setContent() {
            const tip = this.getTipElement();
            this.setElementContent(SelectorEngine.findOne(SELECTOR_TOOLTIP_INNER, tip), this.getTitle());
            tip.classList.remove(CLASS_NAME_FADE$3, CLASS_NAME_SHOW$3);
        }
        setElementContent(element, content) {
            if (element === null) return;
            if (typeof content === "object" && isElement(content)) {
                if (content.jquery) content = content[0];
                 // content is a DOM node or a jQuery
                if (this.config.html) {
                    if (content.parentNode !== element) {
                        element.innerHTML = "";
                        element.appendChild(content);
                    }
                } else element.textContent = content.textContent;
                return;
            }
            if (this.config.html) {
                if (this.config.sanitize) content = sanitizeHtml(content, this.config.allowList, this.config.sanitizeFn);
                element.innerHTML = content;
            } else element.textContent = content;
        }
        getTitle() {
            let title = this._element.getAttribute("data-bs-original-title");
            if (!title) title = typeof this.config.title === "function" ? this.config.title.call(this._element) : this.config.title;
            return title;
        }
        updateAttachment(attachment) {
            if (attachment === "right") return "end";
            if (attachment === "left") return "start";
            return attachment;
        }
        _initializeOnDelegatedTarget(event, context) {
            const dataKey = this.constructor.DATA_KEY;
            context = context || Data.get(event.delegateTarget, dataKey);
            if (!context) {
                context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
                Data.set(event.delegateTarget, dataKey, context);
            }
            return context;
        }
        _getOffset() {
            const { offset  } = this.config;
            if (typeof offset === "string") return offset.split(",").map((val)=>Number.parseInt(val, 10));
            if (typeof offset === "function") return (popperData)=>offset(popperData, this._element);
            return offset;
        }
        _getPopperConfig(attachment) {
            const defaultBsPopperConfig = {
                placement: attachment,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            altBoundary: true,
                            fallbackPlacements: this.config.fallbackPlacements
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this.config.boundary
                        }
                    },
                    {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    },
                    {
                        name: "onChange",
                        enabled: true,
                        phase: "afterWrite",
                        fn: (data)=>this._handlePopperPlacementChange(data)
                    }
                ],
                onFirstUpdate: (data)=>{
                    if (data.options.placement !== data.placement) this._handlePopperPlacementChange(data);
                }
            };
            return {
                ...defaultBsPopperConfig,
                ...typeof this.config.popperConfig === "function" ? this.config.popperConfig(defaultBsPopperConfig) : this.config.popperConfig
            };
        }
        _addAttachmentClass(attachment) {
            this.getTipElement().classList.add(`${CLASS_PREFIX$1}-${this.updateAttachment(attachment)}`);
        }
        _getContainer() {
            if (this.config.container === false) return document.body;
            if (isElement(this.config.container)) return this.config.container;
            return SelectorEngine.findOne(this.config.container);
        }
        _getAttachment(placement) {
            return AttachmentMap[placement.toUpperCase()];
        }
        _setListeners() {
            const triggers = this.config.trigger.split(" ");
            triggers.forEach((trigger)=>{
                if (trigger === "click") EventHandler.on(this._element, this.constructor.Event.CLICK, this.config.selector, (event)=>this.toggle(event));
                else if (trigger !== TRIGGER_MANUAL) {
                    const eventIn = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN;
                    const eventOut = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    EventHandler.on(this._element, eventIn, this.config.selector, (event)=>this._enter(event));
                    EventHandler.on(this._element, eventOut, this.config.selector, (event)=>this._leave(event));
                }
            });
            this._hideModalHandler = ()=>{
                if (this._element) this.hide();
            };
            EventHandler.on(this._element.closest(`.${CLASS_NAME_MODAL}`), "hide.bs.modal", this._hideModalHandler);
            if (this.config.selector) this.config = {
                ...this.config,
                trigger: "manual",
                selector: ""
            };
            else this._fixTitle();
        }
        _fixTitle() {
            const title = this._element.getAttribute("title");
            const originalTitleType = typeof this._element.getAttribute("data-bs-original-title");
            if (title || originalTitleType !== "string") {
                this._element.setAttribute("data-bs-original-title", title || "");
                if (title && !this._element.getAttribute("aria-label") && !this._element.textContent) this._element.setAttribute("aria-label", title);
                this._element.setAttribute("title", "");
            }
        }
        _enter(event, context) {
            context = this._initializeOnDelegatedTarget(event, context);
            if (event) context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
            if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$3) || context._hoverState === HOVER_STATE_SHOW) {
                context._hoverState = HOVER_STATE_SHOW;
                return;
            }
            clearTimeout(context._timeout);
            context._hoverState = HOVER_STATE_SHOW;
            if (!context.config.delay || !context.config.delay.show) {
                context.show();
                return;
            }
            context._timeout = setTimeout(()=>{
                if (context._hoverState === HOVER_STATE_SHOW) context.show();
            }, context.config.delay.show);
        }
        _leave(event, context) {
            context = this._initializeOnDelegatedTarget(event, context);
            if (event) context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
            if (context._isWithActiveTrigger()) return;
            clearTimeout(context._timeout);
            context._hoverState = HOVER_STATE_OUT;
            if (!context.config.delay || !context.config.delay.hide) {
                context.hide();
                return;
            }
            context._timeout = setTimeout(()=>{
                if (context._hoverState === HOVER_STATE_OUT) context.hide();
            }, context.config.delay.hide);
        }
        _isWithActiveTrigger() {
            for(const trigger in this._activeTrigger){
                if (this._activeTrigger[trigger]) return true;
            }
            return false;
        }
        _getConfig(config) {
            const dataAttributes = Manipulator.getDataAttributes(this._element);
            Object.keys(dataAttributes).forEach((dataAttr)=>{
                if (DISALLOWED_ATTRIBUTES.has(dataAttr)) delete dataAttributes[dataAttr];
            });
            if (config && typeof config.container === "object" && config.container.jquery) config.container = config.container[0];
            config = {
                ...this.constructor.Default,
                ...dataAttributes,
                ...typeof config === "object" && config ? config : {}
            };
            if (typeof config.delay === "number") config.delay = {
                show: config.delay,
                hide: config.delay
            };
            if (typeof config.title === "number") config.title = config.title.toString();
            if (typeof config.content === "number") config.content = config.content.toString();
            typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
            if (config.sanitize) config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
            return config;
        }
        _getDelegateConfig() {
            const config = {};
            if (this.config) {
                for(const key in this.config)if (this.constructor.Default[key] !== this.config[key]) config[key] = this.config[key];
            }
            return config;
        }
        _cleanTipClass() {
            const tip = this.getTipElement();
            const tabClass = tip.getAttribute("class").match(BSCLS_PREFIX_REGEX$1);
            if (tabClass !== null && tabClass.length > 0) tabClass.map((token)=>token.trim()).forEach((tClass)=>tip.classList.remove(tClass));
        }
        _handlePopperPlacementChange(popperData) {
            const { state  } = popperData;
            if (!state) return;
            this.tip = state.elements.popper;
            this._cleanTipClass();
            this._addAttachmentClass(this._getAttachment(state.placement));
        }
        static jQueryInterface(config) {
            return this.each(function() {
                let data = Data.get(this, DATA_KEY$4);
                const _config = typeof config === "object" && config;
                if (!data && /dispose|hide/.test(config)) return;
                if (!data) data = new Tooltip(this, _config);
                if (typeof config === "string") {
                    if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                    data[config]();
                }
            });
        }
    }
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Tooltip to jQuery only if jQuery is present
     */ defineJQueryPlugin(NAME$4, Tooltip);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.0-beta3): popover.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ const NAME$3 = "popover";
    const DATA_KEY$3 = "bs.popover";
    const EVENT_KEY$3 = `.${DATA_KEY$3}`;
    const CLASS_PREFIX = "bs-popover";
    const BSCLS_PREFIX_REGEX = new RegExp(`(^|\\s)${CLASS_PREFIX}\\S+`, "g");
    const Default$2 = {
        ...Tooltip.Default,
        placement: "right",
        offset: [
            0,
            8
        ],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    };
    const DefaultType$2 = {
        ...Tooltip.DefaultType,
        content: "(string|element|function)"
    };
    const Event$1 = {
        HIDE: `hide${EVENT_KEY$3}`,
        HIDDEN: `hidden${EVENT_KEY$3}`,
        SHOW: `show${EVENT_KEY$3}`,
        SHOWN: `shown${EVENT_KEY$3}`,
        INSERTED: `inserted${EVENT_KEY$3}`,
        CLICK: `click${EVENT_KEY$3}`,
        FOCUSIN: `focusin${EVENT_KEY$3}`,
        FOCUSOUT: `focusout${EVENT_KEY$3}`,
        MOUSEENTER: `mouseenter${EVENT_KEY$3}`,
        MOUSELEAVE: `mouseleave${EVENT_KEY$3}`
    };
    const CLASS_NAME_FADE$2 = "fade";
    const CLASS_NAME_SHOW$2 = "show";
    const SELECTOR_TITLE = ".popover-header";
    const SELECTOR_CONTENT = ".popover-body";
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ class Popover extends Tooltip {
        // Getters
        static get Default() {
            return Default$2;
        }
        static get NAME() {
            return NAME$3;
        }
        static get DATA_KEY() {
            return DATA_KEY$3;
        }
        static get Event() {
            return Event$1;
        }
        static get EVENT_KEY() {
            return EVENT_KEY$3;
        }
        static get DefaultType() {
            return DefaultType$2;
        }
        isWithContent() {
            return this.getTitle() || this._getContent();
        }
        setContent() {
            const tip = this.getTipElement(); // we use append for html objects to maintain js events
            this.setElementContent(SelectorEngine.findOne(SELECTOR_TITLE, tip), this.getTitle());
            let content = this._getContent();
            if (typeof content === "function") content = content.call(this._element);
            this.setElementContent(SelectorEngine.findOne(SELECTOR_CONTENT, tip), content);
            tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
        }
        _addAttachmentClass(attachment) {
            this.getTipElement().classList.add(`${CLASS_PREFIX}-${this.updateAttachment(attachment)}`);
        }
        _getContent() {
            return this._element.getAttribute("data-bs-content") || this.config.content;
        }
        _cleanTipClass() {
            const tip = this.getTipElement();
            const tabClass = tip.getAttribute("class").match(BSCLS_PREFIX_REGEX);
            if (tabClass !== null && tabClass.length > 0) tabClass.map((token)=>token.trim()).forEach((tClass)=>tip.classList.remove(tClass));
        }
        static jQueryInterface(config) {
            return this.each(function() {
                let data = Data.get(this, DATA_KEY$3);
                const _config = typeof config === "object" ? config : null;
                if (!data && /dispose|hide/.test(config)) return;
                if (!data) {
                    data = new Popover(this, _config);
                    Data.set(this, DATA_KEY$3, data);
                }
                if (typeof config === "string") {
                    if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                    data[config]();
                }
            });
        }
    }
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Popover to jQuery only if jQuery is present
     */ defineJQueryPlugin(NAME$3, Popover);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.0-beta3): scrollspy.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ const NAME$2 = "scrollspy";
    const DATA_KEY$2 = "bs.scrollspy";
    const EVENT_KEY$2 = `.${DATA_KEY$2}`;
    const DATA_API_KEY$1 = ".data-api";
    const Default$1 = {
        offset: 10,
        method: "auto",
        target: ""
    };
    const DefaultType$1 = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    };
    const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
    const EVENT_SCROLL = `scroll${EVENT_KEY$2}`;
    const EVENT_LOAD_DATA_API = `load${EVENT_KEY$2}${DATA_API_KEY$1}`;
    const CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
    const CLASS_NAME_ACTIVE$1 = "active";
    const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
    const SELECTOR_NAV_LIST_GROUP$1 = ".nav, .list-group";
    const SELECTOR_NAV_LINKS = ".nav-link";
    const SELECTOR_NAV_ITEMS = ".nav-item";
    const SELECTOR_LIST_ITEMS = ".list-group-item";
    const SELECTOR_DROPDOWN$1 = ".dropdown";
    const SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
    const METHOD_OFFSET = "offset";
    const METHOD_POSITION = "position";
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ class ScrollSpy extends BaseComponent {
        constructor(element, config){
            super(element);
            this._scrollElement = this._element.tagName === "BODY" ? window : this._element;
            this._config = this._getConfig(config);
            this._selector = `${this._config.target} ${SELECTOR_NAV_LINKS}, ${this._config.target} ${SELECTOR_LIST_ITEMS}, ${this._config.target} .${CLASS_NAME_DROPDOWN_ITEM}`;
            this._offsets = [];
            this._targets = [];
            this._activeTarget = null;
            this._scrollHeight = 0;
            EventHandler.on(this._scrollElement, EVENT_SCROLL, ()=>this._process());
            this.refresh();
            this._process();
        }
        static get Default() {
            return Default$1;
        }
        static get DATA_KEY() {
            return DATA_KEY$2;
        }
        refresh() {
            const autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
            const offsetMethod = this._config.method === "auto" ? autoMethod : this._config.method;
            const offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
            this._offsets = [];
            this._targets = [];
            this._scrollHeight = this._getScrollHeight();
            const targets = SelectorEngine.find(this._selector);
            targets.map((element)=>{
                const targetSelector = getSelectorFromElement(element);
                const target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;
                if (target) {
                    const targetBCR = target.getBoundingClientRect();
                    if (targetBCR.width || targetBCR.height) return [
                        Manipulator[offsetMethod](target).top + offsetBase,
                        targetSelector
                    ];
                }
                return null;
            }).filter((item)=>item).sort((a, b)=>a[0] - b[0]).forEach((item)=>{
                this._offsets.push(item[0]);
                this._targets.push(item[1]);
            });
        }
        dispose() {
            super.dispose();
            EventHandler.off(this._scrollElement, EVENT_KEY$2);
            this._scrollElement = null;
            this._config = null;
            this._selector = null;
            this._offsets = null;
            this._targets = null;
            this._activeTarget = null;
            this._scrollHeight = null;
        }
        _getConfig(config) {
            config = {
                ...Default$1,
                ...typeof config === "object" && config ? config : {}
            };
            if (typeof config.target !== "string" && isElement(config.target)) {
                let { id  } = config.target;
                if (!id) {
                    id = getUID(NAME$2);
                    config.target.id = id;
                }
                config.target = `#${id}`;
            }
            typeCheckConfig(NAME$2, config, DefaultType$1);
            return config;
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        }
        _process() {
            const scrollTop = this._getScrollTop() + this._config.offset;
            const scrollHeight = this._getScrollHeight();
            const maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();
            if (this._scrollHeight !== scrollHeight) this.refresh();
            if (scrollTop >= maxScroll) {
                const target = this._targets[this._targets.length - 1];
                if (this._activeTarget !== target) this._activate(target);
                return;
            }
            if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
                this._activeTarget = null;
                this._clear();
                return;
            }
            for(let i = this._offsets.length; i--;){
                const isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === "undefined" || scrollTop < this._offsets[i + 1]);
                if (isActiveTarget) this._activate(this._targets[i]);
            }
        }
        _activate(target) {
            this._activeTarget = target;
            this._clear();
            const queries = this._selector.split(",").map((selector)=>`${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`);
            const link = SelectorEngine.findOne(queries.join(","));
            if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
                SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
                link.classList.add(CLASS_NAME_ACTIVE$1);
            } else {
                // Set triggered link as active
                link.classList.add(CLASS_NAME_ACTIVE$1);
                SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach((listGroup)=>{
                    // Set triggered links parents as active
                    // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
                    SelectorEngine.prev(listGroup, `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`).forEach((item)=>item.classList.add(CLASS_NAME_ACTIVE$1)); // Handle special case when .nav-link is inside .nav-item
                    SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach((navItem)=>{
                        SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach((item)=>item.classList.add(CLASS_NAME_ACTIVE$1));
                    });
                });
            }
            EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
                relatedTarget: target
            });
        }
        _clear() {
            SelectorEngine.find(this._selector).filter((node)=>node.classList.contains(CLASS_NAME_ACTIVE$1)).forEach((node)=>node.classList.remove(CLASS_NAME_ACTIVE$1));
        }
        static jQueryInterface(config) {
            return this.each(function() {
                let data = Data.get(this, DATA_KEY$2);
                const _config = typeof config === "object" && config;
                if (!data) data = new ScrollSpy(this, _config);
                if (typeof config === "string") {
                    if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                    data[config]();
                }
            });
        }
    }
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */ EventHandler.on(window, EVENT_LOAD_DATA_API, ()=>{
        SelectorEngine.find(SELECTOR_DATA_SPY).forEach((spy)=>new ScrollSpy(spy, Manipulator.getDataAttributes(spy)));
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .ScrollSpy to jQuery only if jQuery is present
     */ defineJQueryPlugin(NAME$2, ScrollSpy);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.0-beta3): tab.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ const NAME$1 = "tab";
    const DATA_KEY$1 = "bs.tab";
    const EVENT_KEY$1 = `.${DATA_KEY$1}`;
    const DATA_API_KEY = ".data-api";
    const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
    const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
    const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
    const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
    const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}${DATA_API_KEY}`;
    const CLASS_NAME_DROPDOWN_MENU = "dropdown-menu";
    const CLASS_NAME_ACTIVE = "active";
    const CLASS_NAME_FADE$1 = "fade";
    const CLASS_NAME_SHOW$1 = "show";
    const SELECTOR_DROPDOWN = ".dropdown";
    const SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
    const SELECTOR_ACTIVE = ".active";
    const SELECTOR_ACTIVE_UL = ":scope > li > .active";
    const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
    const SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
    const SELECTOR_DROPDOWN_ACTIVE_CHILD = ":scope > .dropdown-menu .active";
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ class Tab extends BaseComponent {
        // Getters
        static get DATA_KEY() {
            return DATA_KEY$1;
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE) || isDisabled(this._element)) return;
            let previous;
            const target = getElementFromSelector(this._element);
            const listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);
            if (listElement) {
                const itemSelector = listElement.nodeName === "UL" || listElement.nodeName === "OL" ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
                previous = SelectorEngine.find(itemSelector, listElement);
                previous = previous[previous.length - 1];
            }
            const hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
                relatedTarget: this._element
            }) : null;
            const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
                relatedTarget: previous
            });
            if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) return;
            this._activate(this._element, listElement);
            const complete = ()=>{
                EventHandler.trigger(previous, EVENT_HIDDEN$1, {
                    relatedTarget: this._element
                });
                EventHandler.trigger(this._element, EVENT_SHOWN$1, {
                    relatedTarget: previous
                });
            };
            if (target) this._activate(target, target.parentNode, complete);
            else complete();
        }
        _activate(element, container, callback) {
            const activeElements = container && (container.nodeName === "UL" || container.nodeName === "OL") ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
            const active = activeElements[0];
            const isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);
            const complete = ()=>this._transitionComplete(element, active, callback);
            if (active && isTransitioning) {
                const transitionDuration = getTransitionDurationFromElement(active);
                active.classList.remove(CLASS_NAME_SHOW$1);
                EventHandler.one(active, "transitionend", complete);
                emulateTransitionEnd(active, transitionDuration);
            } else complete();
        }
        _transitionComplete(element, active, callback) {
            if (active) {
                active.classList.remove(CLASS_NAME_ACTIVE);
                const dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);
                if (dropdownChild) dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
                if (active.getAttribute("role") === "tab") active.setAttribute("aria-selected", false);
            }
            element.classList.add(CLASS_NAME_ACTIVE);
            if (element.getAttribute("role") === "tab") element.setAttribute("aria-selected", true);
            reflow(element);
            if (element.classList.contains(CLASS_NAME_FADE$1)) element.classList.add(CLASS_NAME_SHOW$1);
            if (element.parentNode && element.parentNode.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
                const dropdownElement = element.closest(SELECTOR_DROPDOWN);
                if (dropdownElement) SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE).forEach((dropdown)=>dropdown.classList.add(CLASS_NAME_ACTIVE));
                element.setAttribute("aria-expanded", true);
            }
            if (callback) callback();
        }
        static jQueryInterface(config) {
            return this.each(function() {
                const data = Data.get(this, DATA_KEY$1) || new Tab(this);
                if (typeof config === "string") {
                    if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                    data[config]();
                }
            });
        }
    }
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */ EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
        event.preventDefault();
        const data = Data.get(this, DATA_KEY$1) || new Tab(this);
        data.show();
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Tab to jQuery only if jQuery is present
     */ defineJQueryPlugin(NAME$1, Tab);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.0-beta3): toast.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ const NAME = "toast";
    const DATA_KEY = "bs.toast";
    const EVENT_KEY = `.${DATA_KEY}`;
    const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`;
    const EVENT_HIDE = `hide${EVENT_KEY}`;
    const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
    const EVENT_SHOW = `show${EVENT_KEY}`;
    const EVENT_SHOWN = `shown${EVENT_KEY}`;
    const CLASS_NAME_FADE = "fade";
    const CLASS_NAME_HIDE = "hide";
    const CLASS_NAME_SHOW = "show";
    const CLASS_NAME_SHOWING = "showing";
    const DefaultType = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    };
    const Default = {
        animation: true,
        autohide: true,
        delay: 5000
    };
    const SELECTOR_DATA_DISMISS = '[data-bs-dismiss="toast"]';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ class Toast extends BaseComponent {
        constructor(element, config){
            super(element);
            this._config = this._getConfig(config);
            this._timeout = null;
            this._setListeners();
        }
        static get DefaultType() {
            return DefaultType;
        }
        static get Default() {
            return Default;
        }
        static get DATA_KEY() {
            return DATA_KEY;
        }
        show() {
            const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
            if (showEvent.defaultPrevented) return;
            this._clearTimeout();
            if (this._config.animation) this._element.classList.add(CLASS_NAME_FADE);
            const complete = ()=>{
                this._element.classList.remove(CLASS_NAME_SHOWING);
                this._element.classList.add(CLASS_NAME_SHOW);
                EventHandler.trigger(this._element, EVENT_SHOWN);
                if (this._config.autohide) this._timeout = setTimeout(()=>{
                    this.hide();
                }, this._config.delay);
            };
            this._element.classList.remove(CLASS_NAME_HIDE);
            reflow(this._element);
            this._element.classList.add(CLASS_NAME_SHOWING);
            if (this._config.animation) {
                const transitionDuration = getTransitionDurationFromElement(this._element);
                EventHandler.one(this._element, "transitionend", complete);
                emulateTransitionEnd(this._element, transitionDuration);
            } else complete();
        }
        hide() {
            if (!this._element.classList.contains(CLASS_NAME_SHOW)) return;
            const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
            if (hideEvent.defaultPrevented) return;
            const complete = ()=>{
                this._element.classList.add(CLASS_NAME_HIDE);
                EventHandler.trigger(this._element, EVENT_HIDDEN);
            };
            this._element.classList.remove(CLASS_NAME_SHOW);
            if (this._config.animation) {
                const transitionDuration = getTransitionDurationFromElement(this._element);
                EventHandler.one(this._element, "transitionend", complete);
                emulateTransitionEnd(this._element, transitionDuration);
            } else complete();
        }
        dispose() {
            this._clearTimeout();
            if (this._element.classList.contains(CLASS_NAME_SHOW)) this._element.classList.remove(CLASS_NAME_SHOW);
            EventHandler.off(this._element, EVENT_CLICK_DISMISS);
            super.dispose();
            this._config = null;
        }
        _getConfig(config) {
            config = {
                ...Default,
                ...Manipulator.getDataAttributes(this._element),
                ...typeof config === "object" && config ? config : {}
            };
            typeCheckConfig(NAME, config, this.constructor.DefaultType);
            return config;
        }
        _setListeners() {
            EventHandler.on(this._element, EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, ()=>this.hide());
        }
        _clearTimeout() {
            clearTimeout(this._timeout);
            this._timeout = null;
        }
        static jQueryInterface(config) {
            return this.each(function() {
                let data = Data.get(this, DATA_KEY);
                const _config = typeof config === "object" && config;
                if (!data) data = new Toast(this, _config);
                if (typeof config === "string") {
                    if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                    data[config](this);
                }
            });
        }
    }
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Toast to jQuery only if jQuery is present
     */ defineJQueryPlugin(NAME, Toast);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.0-beta3): index.umd.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ var index_umd = {
        Alert,
        Button,
        Carousel,
        Collapse,
        Dropdown,
        Modal,
        Offcanvas,
        Popover,
        ScrollSpy,
        Tab,
        Toast,
        Tooltip
    };
    return index_umd;
}); //# sourceMappingURL=bootstrap.js.map

},{"@popperjs/core":"7unqC"}],"7unqC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
parcelHelpers.export(exports, "createPopperBase", ()=>(0, _createPopperJs.createPopper));
parcelHelpers.export(exports, "createPopper", ()=>(0, _popperJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper));
var _enumsJs = require("./enums.js");
parcelHelpers.exportAll(_enumsJs, exports);
var _indexJs = require("./modifiers/index.js"); // eslint-disable-next-line import/no-unused-modules
parcelHelpers.exportAll(_indexJs, exports);
var _createPopperJs = require("./createPopper.js");
var _popperJs = require("./popper.js");
var _popperLiteJs = require("./popper-lite.js");

},{"./enums.js":"lCAq5","./modifiers/index.js":"cap3W","./createPopper.js":"cHuNp","./popper.js":"1PuRF","./popper-lite.js":"gKW1N","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"lCAq5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "top", ()=>top);
parcelHelpers.export(exports, "bottom", ()=>bottom);
parcelHelpers.export(exports, "right", ()=>right);
parcelHelpers.export(exports, "left", ()=>left);
parcelHelpers.export(exports, "auto", ()=>auto);
parcelHelpers.export(exports, "basePlacements", ()=>basePlacements);
parcelHelpers.export(exports, "start", ()=>start);
parcelHelpers.export(exports, "end", ()=>end);
parcelHelpers.export(exports, "clippingParents", ()=>clippingParents);
parcelHelpers.export(exports, "viewport", ()=>viewport);
parcelHelpers.export(exports, "popper", ()=>popper);
parcelHelpers.export(exports, "reference", ()=>reference);
parcelHelpers.export(exports, "variationPlacements", ()=>variationPlacements);
parcelHelpers.export(exports, "placements", ()=>placements);
parcelHelpers.export(exports, "beforeRead", ()=>beforeRead);
parcelHelpers.export(exports, "read", ()=>read);
parcelHelpers.export(exports, "afterRead", ()=>afterRead);
parcelHelpers.export(exports, "beforeMain", ()=>beforeMain);
parcelHelpers.export(exports, "main", ()=>main);
parcelHelpers.export(exports, "afterMain", ()=>afterMain);
parcelHelpers.export(exports, "beforeWrite", ()=>beforeWrite);
parcelHelpers.export(exports, "write", ()=>write);
parcelHelpers.export(exports, "afterWrite", ()=>afterWrite);
parcelHelpers.export(exports, "modifierPhases", ()=>modifierPhases);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var placements = /*#__PURE__*/ [].concat(basePlacements, [
    auto
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []); // modifiers that need to read the DOM
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead"; // pure-logic modifiers
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain"; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"fafCr":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cap3W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyStyles", ()=>(0, _applyStylesJsDefault.default));
parcelHelpers.export(exports, "arrow", ()=>(0, _arrowJsDefault.default));
parcelHelpers.export(exports, "computeStyles", ()=>(0, _computeStylesJsDefault.default));
parcelHelpers.export(exports, "eventListeners", ()=>(0, _eventListenersJsDefault.default));
parcelHelpers.export(exports, "flip", ()=>(0, _flipJsDefault.default));
parcelHelpers.export(exports, "hide", ()=>(0, _hideJsDefault.default));
parcelHelpers.export(exports, "offset", ()=>(0, _offsetJsDefault.default));
parcelHelpers.export(exports, "popperOffsets", ()=>(0, _popperOffsetsJsDefault.default));
parcelHelpers.export(exports, "preventOverflow", ()=>(0, _preventOverflowJsDefault.default));
var _applyStylesJs = require("./applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _arrowJs = require("./arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _computeStylesJs = require("./computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _eventListenersJs = require("./eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _flipJs = require("./flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _hideJs = require("./hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _offsetJs = require("./offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _popperOffsetsJs = require("./popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _preventOverflowJs = require("./preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);

},{"./applyStyles.js":"4iMn4","./arrow.js":"31HFW","./computeStyles.js":"gDlm2","./eventListeners.js":"hBKsL","./flip.js":"fv5wq","./hide.js":"2g4OF","./offset.js":"3GKVY","./popperOffsets.js":"6I679","./preventOverflow.js":"1AMhb","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"4iMn4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("../dom-utils/getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name]; // arrow is optional + virtual elements
        if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? "" : value);
        });
    });
}
function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style = styleProperties.reduce(function(style, property) {
                style[property] = "";
                return style;
            }, {}); // arrow is optional + virtual elements
            if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect,
    requires: [
        "computeStyles"
    ]
};

},{"../dom-utils/getNodeName.js":"a2Qom","../dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"a2Qom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
}
exports.default = getNodeName;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"gYFUC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "isHTMLElement", ()=>isHTMLElement);
parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function isElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === "undefined") return false;
    var OwnElement = (0, _getWindowJsDefault.default)(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"2SkOo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getWindow(node) {
    if (node == null) return window;
    if (node.toString() !== "[object Window]") {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}
exports.default = getWindow;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"31HFW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _containsJs = require("../dom-utils/contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _withinJs = require("../utils/within.js");
var _mergePaddingObjectJs = require("../utils/mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("../utils/expandToHashMap.js");
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // eslint-disable-next-line import/no-unused-modules
var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
        placement: state.placement
    })) : padding;
    return (0, _mergePaddingObjectJsDefault.default)(typeof padding !== "number" ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
};
function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var axis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var isVertical = [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets) return;
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = (0, _getLayoutRectJsDefault.default)(arrowElement);
    var minProp = axis === "y" ? (0, _enumsJs.top) : (0, _enumsJs.left);
    var maxProp = axis === "y" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = (0, _getOffsetParentJsDefault.default)(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = (0, _withinJs.within)(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === "string") {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!(0, _instanceOfJs.isHTMLElement)(arrowElement)) console.error([
        'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
        "To use an SVG arrow, wrap it in an HTMLElement that will be used as",
        "the arrow."
    ].join(" "));
    if (!(0, _containsJsDefault.default)(state.elements.popper, arrowElement)) {
        console.error([
            'Popper: "arrow" modifier\'s `element` must be a child of the popper',
            "element."
        ].join(" "));
        return;
    }
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect,
    requires: [
        "popperOffsets"
    ],
    requiresIfExists: [
        "preventOverflow"
    ]
};

},{"../utils/getBasePlacement.js":"59Wp3","../dom-utils/getLayoutRect.js":"jvjuf","../dom-utils/contains.js":"4QxRR","../dom-utils/getOffsetParent.js":"laoYw","../utils/getMainAxisFromPlacement.js":"1Xlom","../utils/within.js":"3glSz","../utils/mergePaddingObject.js":"lEIf9","../utils/expandToHashMap.js":"iQlH5","../enums.js":"lCAq5","../dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"59Wp3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
function getBasePlacement(placement) {
    return placement.split("-")[0];
}
exports.default = getBasePlacement;

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"jvjuf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js"); // Returns the layout rect of an element relative to its offsetParent. Layout
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
function getLayoutRect(element) {
    var clientRect = (0, _getBoundingClientRectJsDefault.default)(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}
exports.default = getLayoutRect;

},{"./getBoundingClientRect.js":"9CFSQ","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"9CFSQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
var _mathJs = require("../utils/math.js");
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isLayoutViewportJs = require("./isLayoutViewport.js");
var _isLayoutViewportJsDefault = parcelHelpers.interopDefault(_isLayoutViewportJs);
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && (0, _instanceOfJs.isHTMLElement)(element)) {
        scaleX = element.offsetWidth > 0 ? (0, _mathJs.round)(clientRect.width) / element.offsetWidth || 1 : 1;
        scaleY = element.offsetHeight > 0 ? (0, _mathJs.round)(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = (0, _instanceOfJs.isElement)(element) ? (0, _getWindowJsDefault.default)(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !(0, _isLayoutViewportJsDefault.default)() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x: x,
        y: y
    };
}
exports.default = getBoundingClientRect;

},{"./instanceOf.js":"gYFUC","../utils/math.js":"gQqVe","./getWindow.js":"2SkOo","./isLayoutViewport.js":"3ipHv","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"gQqVe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "round", ()=>round);
var max = Math.max;
var min = Math.min;
var round = Math.round;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"3ipHv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test((0, _userAgentJsDefault.default)());
}
exports.default = isLayoutViewport;

},{"../utils/userAgent.js":"1hEx0","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"1hEx0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands) return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
    }).join(" ");
    return navigator.userAgent;
}
exports.default = getUAString;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"4QxRR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && (0, _instanceOfJs.isShadowRoot)(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next);
    } // Give up, the result is false
    return false;
}
exports.default = contains;

},{"./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"laoYw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _isTableElementJs = require("./isTableElement.js");
var _isTableElementJsDefault = parcelHelpers.interopDefault(_isTableElementJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function getTrueOffsetParent(element) {
    if (!(0, _instanceOfJs.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
    (0, _getComputedStyleJsDefault.default)(element).position === "fixed") return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
    var isFirefox = /firefox/i.test((0, _userAgentJsDefault.default)());
    var isIE = /Trident/i.test((0, _userAgentJsDefault.default)());
    if (isIE && (0, _instanceOfJs.isHTMLElement)(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = (0, _getComputedStyleJsDefault.default)(element);
        if (elementCss.position === "fixed") return null;
    }
    var currentNode = (0, _getParentNodeJsDefault.default)(element);
    if ((0, _instanceOfJs.isShadowRoot)(currentNode)) currentNode = currentNode.host;
    while((0, _instanceOfJs.isHTMLElement)(currentNode) && [
        "html",
        "body"
    ].indexOf((0, _getNodeNameJsDefault.default)(currentNode)) < 0){
        var css = (0, _getComputedStyleJsDefault.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [
            "transform",
            "perspective"
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function getOffsetParent(element) {
    var window = (0, _getWindowJsDefault.default)(element);
    var offsetParent = getTrueOffsetParent(element);
    while(offsetParent && (0, _isTableElementJsDefault.default)(offsetParent) && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && ((0, _getNodeNameJsDefault.default)(offsetParent) === "html" || (0, _getNodeNameJsDefault.default)(offsetParent) === "body" && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")) return window;
    return offsetParent || getContainingBlock(element) || window;
}
exports.default = getOffsetParent;

},{"./getWindow.js":"2SkOo","./getNodeName.js":"a2Qom","./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","./isTableElement.js":"2qBb7","./getParentNode.js":"bIHpd","../utils/userAgent.js":"1hEx0","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"3mZjB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getComputedStyle(element) {
    return (0, _getWindowJsDefault.default)(element).getComputedStyle(element);
}
exports.default = getComputedStyle;

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"2qBb7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
function isTableElement(element) {
    return [
        "table",
        "td",
        "th"
    ].indexOf((0, _getNodeNameJsDefault.default)(element)) >= 0;
}
exports.default = isTableElement;

},{"./getNodeName.js":"a2Qom","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"bIHpd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _instanceOfJs = require("./instanceOf.js");
function getParentNode(element) {
    if ((0, _getNodeNameJsDefault.default)(element) === "html") return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ((0, _instanceOfJs.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, _getDocumentElementJsDefault.default)(element) // fallback
    );
}
exports.default = getParentNode;

},{"./getNodeName.js":"a2Qom","./getDocumentElement.js":"eJ9Y1","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"eJ9Y1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (((0, _instanceOfJs.isElement)(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
exports.default = getDocumentElement;

},{"./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"1Xlom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getMainAxisFromPlacement(placement) {
    return [
        "top",
        "bottom"
    ].indexOf(placement) >= 0 ? "x" : "y";
}
exports.default = getMainAxisFromPlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"3glSz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "within", ()=>within);
parcelHelpers.export(exports, "withinMaxClamp", ()=>withinMaxClamp);
var _mathJs = require("./math.js");
function within(min, value, max) {
    return (0, _mathJs.max)(min, (0, _mathJs.min)(value, max));
}
function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
}

},{"./math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"lEIf9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getFreshSideObjectJs = require("./getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
function mergePaddingObject(paddingObject) {
    return Object.assign({}, (0, _getFreshSideObjectJsDefault.default)(), paddingObject);
}
exports.default = mergePaddingObject;

},{"./getFreshSideObject.js":"g4xOt","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"g4xOt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}
exports.default = getFreshSideObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"iQlH5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {});
}
exports.default = expandToHashMap;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"gDlm2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapToStyles", ()=>mapToStyles);
var _enumsJs = require("../enums.js");
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getWindowJs = require("../dom-utils/getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("../dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _mathJs = require("../utils/math.js"); // eslint-disable-next-line import/no-unused-modules
var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref) {
    var x = _ref.x, y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: (0, _mathJs.round)(x * dpr) / dpr || 0,
        y: (0, _mathJs.round)(y * dpr) / dpr || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = (0, _enumsJs.left);
    var sideY = (0, _enumsJs.top);
    var win = window;
    if (adaptive) {
        var offsetParent = (0, _getOffsetParentJsDefault.default)(popper);
        var heightProp = "clientHeight";
        var widthProp = "clientWidth";
        if (offsetParent === (0, _getWindowJsDefault.default)(popper)) {
            offsetParent = (0, _getDocumentElementJsDefault.default)(popper);
            if ((0, _getComputedStyleJsDefault.default)(offsetParent).position !== "static" && position === "absolute") {
                heightProp = "scrollHeight";
                widthProp = "scrollWidth";
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        offsetParent;
        if (placement === (0, _enumsJs.top) || (placement === (0, _enumsJs.left) || placement === (0, _enumsJs.right)) && variation === (0, _enumsJs.end)) {
            sideY = (0, _enumsJs.bottom);
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === (0, _enumsJs.left) || (placement === (0, _enumsJs.top) || placement === (0, _enumsJs.bottom)) && variation === (0, _enumsJs.end)) {
            sideX = (0, _enumsJs.right);
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var transitionProperty = (0, _getComputedStyleJsDefault.default)(state.elements.popper).transitionProperty || "";
    if (adaptive && [
        "transform",
        "top",
        "right",
        "bottom",
        "left"
    ].some(function(property) {
        return transitionProperty.indexOf(property) >= 0;
    })) console.warn([
        "Popper: Detected CSS transitions on at least one of the following",
        'CSS properties: "transform", "top", "right", "bottom", "left".',
        "\n\n",
        'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
        "for smooth transitions, or remove these properties from the CSS",
        "transition declaration on the popper element if only transitioning",
        "opacity or background-color for example.",
        "\n\n",
        "We recommend using the popper element as a wrapper around an inner",
        "element that can have any CSS property transitioned for animations."
    ].join(" "));
    var commonStyles = {
        placement: (0, _getBasePlacementJsDefault.default)(state.placement),
        variation: (0, _getVariationJsDefault.default)(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-placement": state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
};

},{"../enums.js":"lCAq5","../dom-utils/getOffsetParent.js":"laoYw","../dom-utils/getWindow.js":"2SkOo","../dom-utils/getDocumentElement.js":"eJ9Y1","../dom-utils/getComputedStyle.js":"3mZjB","../utils/getBasePlacement.js":"59Wp3","../utils/getVariation.js":"hIo7Y","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"hIo7Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getVariation(placement) {
    return placement.split("-")[1];
}
exports.default = getVariation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"hBKsL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("../dom-utils/getWindow.js"); // eslint-disable-next-line import/no-unused-modules
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var passive = {
    passive: true
};
function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = (0, _getWindowJsDefault.default)(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
    });
    if (resize) window.addEventListener("resize", instance.update, passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance.update, passive);
        });
        if (resize) window.removeEventListener("resize", instance.update, passive);
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {},
    effect: effect,
    data: {}
};

},{"../dom-utils/getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"fv5wq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getOppositePlacementJs = require("../utils/getOppositePlacement.js");
var _getOppositePlacementJsDefault = parcelHelpers.interopDefault(_getOppositePlacementJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getOppositeVariationPlacementJs = require("../utils/getOppositeVariationPlacement.js");
var _getOppositeVariationPlacementJsDefault = parcelHelpers.interopDefault(_getOppositeVariationPlacementJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _computeAutoPlacementJs = require("../utils/computeAutoPlacement.js");
var _computeAutoPlacementJsDefault = parcelHelpers.interopDefault(_computeAutoPlacementJs);
var _enumsJs = require("../enums.js");
var _getVariationJs = require("../utils/getVariation.js"); // eslint-disable-next-line import/no-unused-modules
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
function getExpandedFallbackPlacements(placement) {
    if ((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto)) return [];
    var oppositePlacement = (0, _getOppositePlacementJsDefault.default)(placement);
    return [
        (0, _getOppositeVariationPlacementJsDefault.default)(placement),
        oppositePlacement,
        (0, _getOppositeVariationPlacementJsDefault.default)(oppositePlacement)
    ];
}
function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        (0, _getOppositePlacementJsDefault.default)(preferredPlacement)
    ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto) ? (0, _computeAutoPlacementJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement = placements[i];
        var _basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
        var isStartVariation = (0, _getVariationJsDefault.default)(placement) === (0, _enumsJs.start);
        var isVertical = [
            (0, _enumsJs.top),
            (0, _enumsJs.bottom)
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? "width" : "height";
        var overflow = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? (0, _enumsJs.right) : (0, _enumsJs.left) : isStartVariation ? (0, _enumsJs.bottom) : (0, _enumsJs.top);
        if (referenceRect[len] > popperRect[len]) mainVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var altVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i = numberOfChecks; _i > 0; _i--){
            var _ret = _loop(_i);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: [
        "offset"
    ],
    data: {
        _skip: false
    }
};

},{"../utils/getOppositePlacement.js":"a8CY0","../utils/getBasePlacement.js":"59Wp3","../utils/getOppositeVariationPlacement.js":"bKTLC","../utils/detectOverflow.js":"ltCuw","../utils/computeAutoPlacement.js":"gytMj","../enums.js":"lCAq5","../utils/getVariation.js":"hIo7Y","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"a8CY0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}
exports.default = getOppositePlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"bKTLC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var hash = {
    start: "end",
    end: "start"
};
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
    });
}
exports.default = getOppositeVariationPlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"ltCuw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getClippingRectJs = require("../dom-utils/getClippingRect.js");
var _getClippingRectJsDefault = parcelHelpers.interopDefault(_getClippingRectJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getBoundingClientRectJs = require("../dom-utils/getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _computeOffsetsJs = require("./computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
var _rectToClientRectJs = require("./rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js");
var _mergePaddingObjectJs = require("./mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("./expandToHashMap.js"); // eslint-disable-next-line import/no-unused-modules
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
function detectOverflow(state, options) {
    if (options === void 0) options = {};
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? (0, _enumsJs.clippingParents) : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? (0, _enumsJs.viewport) : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? (0, _enumsJs.popper) : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = (0, _mergePaddingObjectJsDefault.default)(typeof padding !== "number" ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
    var altContext = elementContext === (0, _enumsJs.popper) ? (0, _enumsJs.reference) : (0, _enumsJs.popper);
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = (0, _getClippingRectJsDefault.default)((0, _instanceOfJs.isElement)(element) ? element : element.contextElement || (0, _getDocumentElementJsDefault.default)(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = (0, _getBoundingClientRectJsDefault.default)(state.elements.reference);
    var popperOffsets = (0, _computeOffsetsJsDefault.default)({
        reference: referenceClientRect,
        element: popperRect,
        strategy: "absolute",
        placement: placement
    });
    var popperClientRect = (0, _rectToClientRectJsDefault.default)(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === (0, _enumsJs.popper) ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === (0, _enumsJs.popper) && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                (0, _enumsJs.right),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                (0, _enumsJs.top),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}
exports.default = detectOverflow;

},{"../dom-utils/getClippingRect.js":"eeg2s","../dom-utils/getDocumentElement.js":"eJ9Y1","../dom-utils/getBoundingClientRect.js":"9CFSQ","./computeOffsets.js":"7jtXk","./rectToClientRect.js":"cQ3tg","../enums.js":"lCAq5","../dom-utils/instanceOf.js":"gYFUC","./mergePaddingObject.js":"lEIf9","./expandToHashMap.js":"iQlH5","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"eeg2s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getViewportRectJs = require("./getViewportRect.js");
var _getViewportRectJsDefault = parcelHelpers.interopDefault(_getViewportRectJs);
var _getDocumentRectJs = require("./getDocumentRect.js");
var _getDocumentRectJsDefault = parcelHelpers.interopDefault(_getDocumentRectJs);
var _listScrollParentsJs = require("./listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _rectToClientRectJs = require("../utils/rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _mathJs = require("../utils/math.js");
function getInnerBoundingClientRect(element, strategy) {
    var rect = (0, _getBoundingClientRectJsDefault.default)(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === (0, _enumsJs.viewport) ? (0, _rectToClientRectJsDefault.default)((0, _getViewportRectJsDefault.default)(element, strategy)) : (0, _instanceOfJs.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : (0, _rectToClientRectJsDefault.default)((0, _getDocumentRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
    var clippingParents = (0, _listScrollParentsJsDefault.default)((0, _getParentNodeJsDefault.default)(element));
    var canEscapeClipping = [
        "absolute",
        "fixed"
    ].indexOf((0, _getComputedStyleJsDefault.default)(element).position) >= 0;
    var clipperElement = canEscapeClipping && (0, _instanceOfJs.isHTMLElement)(element) ? (0, _getOffsetParentJsDefault.default)(element) : element;
    if (!(0, _instanceOfJs.isElement)(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return (0, _instanceOfJs.isElement)(clippingParent) && (0, _containsJsDefault.default)(clippingParent, clipperElement) && (0, _getNodeNameJsDefault.default)(clippingParent) !== "body";
    });
} // Gets the maximum area that the element is visible in due to any number of
function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent, strategy);
        accRect.top = (0, _mathJs.max)(rect.top, accRect.top);
        accRect.right = (0, _mathJs.min)(rect.right, accRect.right);
        accRect.bottom = (0, _mathJs.min)(rect.bottom, accRect.bottom);
        accRect.left = (0, _mathJs.max)(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}
exports.default = getClippingRect;

},{"../enums.js":"lCAq5","./getViewportRect.js":"cnH2G","./getDocumentRect.js":"d94SC","./listScrollParents.js":"2di3T","./getOffsetParent.js":"laoYw","./getDocumentElement.js":"eJ9Y1","./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","./getBoundingClientRect.js":"9CFSQ","./getParentNode.js":"bIHpd","./contains.js":"4QxRR","./getNodeName.js":"a2Qom","../utils/rectToClientRect.js":"cQ3tg","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"cnH2G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _isLayoutViewportJs = require("./isLayoutViewport.js");
var _isLayoutViewportJsDefault = parcelHelpers.interopDefault(_isLayoutViewportJs);
function getViewportRect(element, strategy) {
    var win = (0, _getWindowJsDefault.default)(element);
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        var layoutViewport = (0, _isLayoutViewportJsDefault.default)();
        if (layoutViewport || !layoutViewport && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + (0, _getWindowScrollBarXJsDefault.default)(element),
        y: y
    };
}
exports.default = getViewportRect;

},{"./getWindow.js":"2SkOo","./getDocumentElement.js":"eJ9Y1","./getWindowScrollBarX.js":"sz4Ld","./isLayoutViewport.js":"3ipHv","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"sz4Ld":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return (0, _getBoundingClientRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)).left + (0, _getWindowScrollJsDefault.default)(element).scrollLeft;
}
exports.default = getWindowScrollBarX;

},{"./getBoundingClientRect.js":"9CFSQ","./getDocumentElement.js":"eJ9Y1","./getWindowScroll.js":"1XUtN","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"1XUtN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getWindowScroll(node) {
    var win = (0, _getWindowJsDefault.default)(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}
exports.default = getWindowScroll;

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"d94SC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _mathJs = require("../utils/math.js"); // Gets the entire size of the scrollable document area, even extending outside
function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var winScroll = (0, _getWindowScrollJsDefault.default)(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = (0, _mathJs.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = (0, _mathJs.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + (0, _getWindowScrollBarXJsDefault.default)(element);
    var y = -winScroll.scrollTop;
    if ((0, _getComputedStyleJsDefault.default)(body || html).direction === "rtl") x += (0, _mathJs.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}
exports.default = getDocumentRect;

},{"./getDocumentElement.js":"eJ9Y1","./getComputedStyle.js":"3mZjB","./getWindowScrollBarX.js":"sz4Ld","./getWindowScroll.js":"1XUtN","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"2di3T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getScrollParentJs = require("./getScrollParent.js");
var _getScrollParentJsDefault = parcelHelpers.interopDefault(_getScrollParentJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = (0, _getScrollParentJsDefault.default)(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = (0, _getWindowJsDefault.default)(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], (0, _isScrollParentJsDefault.default)(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents((0, _getParentNodeJsDefault.default)(target)));
}
exports.default = listScrollParents;

},{"./getScrollParent.js":"jy4ZS","./getParentNode.js":"bIHpd","./getWindow.js":"2SkOo","./isScrollParent.js":"9rLGO","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"jy4ZS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
function getScrollParent(node) {
    if ([
        "html",
        "body",
        "#document"
    ].indexOf((0, _getNodeNameJsDefault.default)(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if ((0, _instanceOfJs.isHTMLElement)(node) && (0, _isScrollParentJsDefault.default)(node)) return node;
    return getScrollParent((0, _getParentNodeJsDefault.default)(node));
}
exports.default = getScrollParent;

},{"./getParentNode.js":"bIHpd","./isScrollParent.js":"9rLGO","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"9rLGO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = (0, _getComputedStyleJsDefault.default)(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
exports.default = isScrollParent;

},{"./getComputedStyle.js":"3mZjB","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"cQ3tg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function rectToClientRect(rect) {
    return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}
exports.default = rectToClientRect;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"7jtXk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getMainAxisFromPlacementJs = require("./getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _enumsJs = require("../enums.js");
function computeOffsets(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? (0, _getBasePlacementJsDefault.default)(placement) : null;
    var variation = placement ? (0, _getVariationJsDefault.default)(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case 0, _enumsJs.top:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case 0, _enumsJs.bottom:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 0, _enumsJs.right:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 0, _enumsJs.left:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === "y" ? "height" : "width";
        switch(variation){
            case 0, _enumsJs.start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case 0, _enumsJs.end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}
exports.default = computeOffsets;

},{"./getBasePlacement.js":"59Wp3","./getVariation.js":"hIo7Y","./getMainAxisFromPlacement.js":"1Xlom","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"gytMj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("./detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
function computeAutoPlacement(state, options) {
    if (options === void 0) options = {};
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? (0, _enumsJs.placements) : _options$allowedAutoP;
    var variation = (0, _getVariationJsDefault.default)(placement);
    var placements = variation ? flipVariations ? (0, _enumsJs.variationPlacements) : (0, _enumsJs.variationPlacements).filter(function(placement) {
        return (0, _getVariationJsDefault.default)(placement) === variation;
    }) : (0, _enumsJs.basePlacements);
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) {
        allowedPlacements = placements;
        console.error([
            "Popper: The `allowedAutoPlacements` option did not allow any",
            "placements. Ensure the `placement` option matches the variation",
            "of the allowed placements.",
            'For example, "auto" cannot be used to allow "bottom-start".',
            'Use "auto-start" instead.'
        ].join(" "));
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[(0, _getBasePlacementJsDefault.default)(placement)];
        return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}
exports.default = computeAutoPlacement;

},{"./getVariation.js":"hIo7Y","../enums.js":"lCAq5","./detectOverflow.js":"ltCuw","./getBasePlacement.js":"59Wp3","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"2g4OF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function isAnySideFullyClipped(overflow) {
    return [
        (0, _enumsJs.top),
        (0, _enumsJs.right),
        (0, _enumsJs.bottom),
        (0, _enumsJs.left)
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = (0, _detectOverflowJsDefault.default)(state, {
        elementContext: "reference"
    });
    var popperAltOverflow = (0, _detectOverflowJsDefault.default)(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-reference-hidden": isReferenceHidden,
        "data-popper-escaped": hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
        "preventOverflow"
    ],
    fn: hide
};

},{"../enums.js":"lCAq5","../utils/detectOverflow.js":"ltCuw","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"3GKVY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distanceAndSkiddingToXY", ()=>distanceAndSkiddingToXY);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _enumsJs = require("../enums.js"); // eslint-disable-next-line import/no-unused-modules
function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
    var invertDistance = [
        (0, _enumsJs.left),
        (0, _enumsJs.top)
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === "function" ? offset(Object.assign({}, rects, {
        placement: placement
    })) : offset, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = (0, _enumsJs.placements).reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
        return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
        "popperOffsets"
    ],
    fn: offset
};

},{"../utils/getBasePlacement.js":"59Wp3","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"6I679":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _computeOffsetsJs = require("../utils/computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = (0, _computeOffsetsJsDefault.default)({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: "absolute",
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
};

},{"../utils/computeOffsets.js":"7jtXk","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"1AMhb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _getAltAxisJs = require("../utils/getAltAxis.js");
var _getAltAxisJsDefault = parcelHelpers.interopDefault(_getAltAxisJs);
var _withinJs = require("../utils/within.js");
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getFreshSideObjectJs = require("../utils/getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
var _mathJs = require("../utils/math.js");
function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = (0, _detectOverflowJsDefault.default)(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var variation = (0, _getVariationJsDefault.default)(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var altAxis = (0, _getAltAxisJsDefault.default)(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) return;
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === "y" ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var altSide = mainAxis === "y" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var len = mainAxis === "y" ? "height" : "width";
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === (0, _enumsJs.start) ? referenceRect[len] : popperRect[len];
        var maxLen = variation === (0, _enumsJs.start) ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? (0, _getLayoutRectJsDefault.default)(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : (0, _getFreshSideObjectJsDefault.default)();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = (0, _withinJs.within)(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && (0, _getOffsetParentJsDefault.default)(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = (0, _withinJs.within)(tether ? (0, _mathJs.min)(min, tetherMin) : min, offset, tether ? (0, _mathJs.max)(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === "x" ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var _altSide = mainAxis === "x" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === "y" ? "height" : "width";
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            (0, _enumsJs.top),
            (0, _enumsJs.left)
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? (0, _withinJs.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0, _withinJs.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: [
        "offset"
    ]
};

},{"../enums.js":"lCAq5","../utils/getBasePlacement.js":"59Wp3","../utils/getMainAxisFromPlacement.js":"1Xlom","../utils/getAltAxis.js":"59FWE","../utils/within.js":"3glSz","../dom-utils/getLayoutRect.js":"jvjuf","../dom-utils/getOffsetParent.js":"laoYw","../utils/detectOverflow.js":"ltCuw","../utils/getVariation.js":"hIo7Y","../utils/getFreshSideObject.js":"g4xOt","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"59FWE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
}
exports.default = getAltAxis;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"cHuNp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>popperGenerator);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _detectOverflowJsDefault.default));
var _getCompositeRectJs = require("./dom-utils/getCompositeRect.js");
var _getCompositeRectJsDefault = parcelHelpers.interopDefault(_getCompositeRectJs);
var _getLayoutRectJs = require("./dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _listScrollParentsJs = require("./dom-utils/listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getComputedStyleJs = require("./dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _orderModifiersJs = require("./utils/orderModifiers.js");
var _orderModifiersJsDefault = parcelHelpers.interopDefault(_orderModifiersJs);
var _debounceJs = require("./utils/debounce.js");
var _debounceJsDefault = parcelHelpers.interopDefault(_debounceJs);
var _validateModifiersJs = require("./utils/validateModifiers.js");
var _validateModifiersJsDefault = parcelHelpers.interopDefault(_validateModifiersJs);
var _uniqueByJs = require("./utils/uniqueBy.js");
var _uniqueByJsDefault = parcelHelpers.interopDefault(_uniqueByJs);
var _getBasePlacementJs = require("./utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _mergeByNameJs = require("./utils/mergeByName.js");
var _mergeByNameJsDefault = parcelHelpers.interopDefault(_mergeByNameJs);
var _detectOverflowJs = require("./utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _instanceOfJs = require("./dom-utils/instanceOf.js");
var _enumsJs = require("./enums.js");
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === "function");
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {};
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
        if (options === void 0) options = defaultOptions;
        var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
                reference: reference,
                popper: popper
            },
            attributes: {},
            styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                    reference: (0, _instanceOfJs.isElement)(reference) ? (0, _listScrollParentsJsDefault.default)(reference) : reference.contextElement ? (0, _listScrollParentsJsDefault.default)(reference.contextElement) : [],
                    popper: (0, _listScrollParentsJsDefault.default)(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = (0, _orderModifiersJsDefault.default)((0, _mergeByNameJsDefault.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
                state.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                }); // Validate the provided modifiers so that the consumer will get warned
                var modifiers = (0, _uniqueByJsDefault.default)([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
                    var name = _ref.name;
                    return name;
                });
                (0, _validateModifiersJsDefault.default)(modifiers);
                if ((0, _getBasePlacementJsDefault.default)(state.options.placement) === (0, _enumsJs.auto)) {
                    var flipModifier = state.orderedModifiers.find(function(_ref2) {
                        var name = _ref2.name;
                        return name === "flip";
                    });
                    if (!flipModifier) console.error([
                        'Popper: "auto" placements require the "flip" modifier be',
                        "present and enabled to work."
                    ].join(" "));
                }
                var _getComputedStyle = (0, _getComputedStyleJsDefault.default)(popper), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
                // cause bugs with positioning, so we'll warn the consumer
                if ([
                    marginTop,
                    marginRight,
                    marginBottom,
                    marginLeft
                ].some(function(margin) {
                    return parseFloat(margin);
                })) console.warn([
                    'Popper: CSS "margin" styles cannot be used to apply padding',
                    "between the popper and its reference element or boundary.",
                    "To replicate margin, use the `offset` modifier, as well as",
                    "the `padding` option in the `preventOverflow` and `flip`",
                    "modifiers."
                ].join(" "));
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference, popper)) {
                    console.error(INVALID_ELEMENT_ERROR);
                    return;
                } // Store the reference and popper rects to be read by modifiers
                state.rects = {
                    reference: (0, _getCompositeRectJsDefault.default)(reference, (0, _getOffsetParentJsDefault.default)(popper), state.options.strategy === "fixed"),
                    popper: (0, _getLayoutRectJsDefault.default)(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state.orderedModifiers.forEach(function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                var __debug_loops__ = 0;
                for(var index = 0; index < state.orderedModifiers.length; index++){
                    __debug_loops__ += 1;
                    if (__debug_loops__ > 100) {
                        console.error(INFINITE_LOOP_ERROR);
                        break;
                    }
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === "function") state = fn({
                        state: state,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: (0, _debounceJsDefault.default)(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference, popper)) {
            console.error(INVALID_ELEMENT_ERROR);
            return instance;
        }
        instance.setOptions(options).then(function(state) {
            if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref3) {
                var name = _ref3.name, _ref3$options = _ref3.options, options = _ref3$options === void 0 ? {} : _ref3$options, effect = _ref3.effect;
                if (typeof effect === "function") {
                    var cleanupFn = effect({
                        state: state,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {};
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var createPopper = /*#__PURE__*/ popperGenerator(); // eslint-disable-next-line import/no-unused-modules

},{"./dom-utils/getCompositeRect.js":"ijPls","./dom-utils/getLayoutRect.js":"jvjuf","./dom-utils/listScrollParents.js":"2di3T","./dom-utils/getOffsetParent.js":"laoYw","./dom-utils/getComputedStyle.js":"3mZjB","./utils/orderModifiers.js":"N0VO0","./utils/debounce.js":"g6Chr","./utils/validateModifiers.js":"1S5dQ","./utils/uniqueBy.js":"hhl2M","./utils/getBasePlacement.js":"59Wp3","./utils/mergeByName.js":"2zTVN","./utils/detectOverflow.js":"ltCuw","./dom-utils/instanceOf.js":"gYFUC","./enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"ijPls":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getNodeScrollJs = require("./getNodeScroll.js");
var _getNodeScrollJsDefault = parcelHelpers.interopDefault(_getNodeScrollJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _mathJs = require("../utils/math.js");
function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = (0, _mathJs.round)(rect.width) / element.offsetWidth || 1;
    var scaleY = (0, _mathJs.round)(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = (0, _instanceOfJs.isHTMLElement)(offsetParent);
    var offsetParentIsScaled = (0, _instanceOfJs.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
    var documentElement = (0, _getDocumentElementJsDefault.default)(offsetParent);
    var rect = (0, _getBoundingClientRectJsDefault.default)(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, _getNodeNameJsDefault.default)(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
        (0, _isScrollParentJsDefault.default)(documentElement)) scroll = (0, _getNodeScrollJsDefault.default)(offsetParent);
        if ((0, _instanceOfJs.isHTMLElement)(offsetParent)) {
            offsets = (0, _getBoundingClientRectJsDefault.default)(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = (0, _getWindowScrollBarXJsDefault.default)(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}
exports.default = getCompositeRect;

},{"./getBoundingClientRect.js":"9CFSQ","./getNodeScroll.js":"bBjCr","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","./getWindowScrollBarX.js":"sz4Ld","./getDocumentElement.js":"eJ9Y1","./isScrollParent.js":"9rLGO","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"bBjCr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _instanceOfJs = require("./instanceOf.js");
var _getHTMLElementScrollJs = require("./getHTMLElementScroll.js");
var _getHTMLElementScrollJsDefault = parcelHelpers.interopDefault(_getHTMLElementScrollJs);
function getNodeScroll(node) {
    if (node === (0, _getWindowJsDefault.default)(node) || !(0, _instanceOfJs.isHTMLElement)(node)) return (0, _getWindowScrollJsDefault.default)(node);
    else return (0, _getHTMLElementScrollJsDefault.default)(node);
}
exports.default = getNodeScroll;

},{"./getWindowScroll.js":"1XUtN","./getWindow.js":"2SkOo","./instanceOf.js":"gYFUC","./getHTMLElementScroll.js":"6pwY2","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"6pwY2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}
exports.default = getHTMLElementScroll;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"N0VO0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js"); // source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase
    return (0, _enumsJs.modifierPhases).reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}
exports.default = orderModifiers;

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"g6Chr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function debounce(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}
exports.default = debounce;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"1S5dQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatJs = require("./format.js");
var _formatJsDefault = parcelHelpers.interopDefault(_formatJs);
var _enumsJs = require("../enums.js");
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = [
    "name",
    "enabled",
    "phase",
    "fn",
    "effect",
    "requires",
    "options"
];
function validateModifiers(modifiers) {
    modifiers.forEach(function(modifier) {
        [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
        .filter(function(value, index, self) {
            return self.indexOf(value) === index;
        }).forEach(function(key) {
            switch(key){
                case "name":
                    if (typeof modifier.name !== "string") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
                    break;
                case "enabled":
                    if (typeof modifier.enabled !== "boolean") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
                    break;
                case "phase":
                    if ((0, _enumsJs.modifierPhases).indexOf(modifier.phase) < 0) console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + (0, _enumsJs.modifierPhases).join(", "), '"' + String(modifier.phase) + '"'));
                    break;
                case "fn":
                    if (typeof modifier.fn !== "function") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
                    break;
                case "effect":
                    if (modifier.effect != null && typeof modifier.effect !== "function") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
                    break;
                case "requires":
                    if (modifier.requires != null && !Array.isArray(modifier.requires)) console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
                    break;
                case "requiresIfExists":
                    if (!Array.isArray(modifier.requiresIfExists)) console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
                    break;
                case "options":
                case "data":
                    break;
                default:
                    console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
                        return '"' + s + '"';
                    }).join(", ") + '; but "' + key + '" was provided.');
            }
            modifier.requires && modifier.requires.forEach(function(requirement) {
                if (modifiers.find(function(mod) {
                    return mod.name === requirement;
                }) == null) console.error((0, _formatJsDefault.default)(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
            });
        });
    });
}
exports.default = validateModifiers;

},{"./format.js":"baNIW","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"baNIW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function format(str) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
    return [].concat(args).reduce(function(p, c) {
        return p.replace(/%s/, c);
    }, str);
}
exports.default = format;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"hhl2M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function uniqueBy(arr, fn) {
    var identifiers = new Set();
    return arr.filter(function(item) {
        var identifier = fn(item);
        if (!identifiers.has(identifier)) {
            identifiers.add(identifier);
            return true;
        }
    });
}
exports.default = uniqueBy;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"2zTVN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
    }, {}); // IE11 does not support Object.values
    return Object.keys(merged).map(function(key) {
        return merged[key];
    });
}
exports.default = mergeByName;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"1PuRF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopper", ()=>createPopper) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _offsetJs = require("./modifiers/offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _flipJs = require("./modifiers/flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _preventOverflowJs = require("./modifiers/preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);
var _arrowJs = require("./modifiers/arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _hideJs = require("./modifiers/hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _popperLiteJs = require("./popper-lite.js");
var _indexJs = require("./modifiers/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var defaultModifiers = [
    (0, _eventListenersJsDefault.default),
    (0, _popperOffsetsJsDefault.default),
    (0, _computeStylesJsDefault.default),
    (0, _applyStylesJsDefault.default),
    (0, _offsetJsDefault.default),
    (0, _flipJsDefault.default),
    (0, _preventOverflowJsDefault.default),
    (0, _arrowJsDefault.default),
    (0, _hideJsDefault.default)
];
var createPopper = /*#__PURE__*/ (0, _createPopperJs.popperGenerator)({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"cHuNp","./modifiers/eventListeners.js":"hBKsL","./modifiers/popperOffsets.js":"6I679","./modifiers/computeStyles.js":"gDlm2","./modifiers/applyStyles.js":"4iMn4","./modifiers/offset.js":"3GKVY","./modifiers/flip.js":"fv5wq","./modifiers/preventOverflow.js":"1AMhb","./modifiers/arrow.js":"31HFW","./modifiers/hide.js":"2g4OF","./popper-lite.js":"gKW1N","./modifiers/index.js":"cap3W","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}],"gKW1N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var defaultModifiers = [
    (0, _eventListenersJsDefault.default),
    (0, _popperOffsetsJsDefault.default),
    (0, _computeStylesJsDefault.default),
    (0, _applyStylesJsDefault.default)
];
var createPopper = /*#__PURE__*/ (0, _createPopperJs.popperGenerator)({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"cHuNp","./modifiers/eventListeners.js":"hBKsL","./modifiers/popperOffsets.js":"6I679","./modifiers/computeStyles.js":"gDlm2","./modifiers/applyStyles.js":"4iMn4","@parcel/transformer-js/src/esmodule-helpers.js":"fafCr"}]},["eJhrF","bsTmd"], "bsTmd", "parcelRequire19b0")

//# sourceMappingURL=index.9ad5c1fc.js.map
