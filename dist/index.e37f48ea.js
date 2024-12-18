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
        globalObject
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
})({"ik2hV":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"aenu9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _configJs = require("./config.js");
var _clockAPPViewJs = require("./views/clockAPPView.js");
var _clockAPPViewJsDefault = parcelHelpers.interopDefault(_clockAPPViewJs);
/**
 * Fetches the information of all countries from the Rest Countries API
 * and renders them onto the page with pagination.
 * @async
 * @function
 * @returns {Promise<void>}
 * @description
 * This function retrieves all countries from the API and displays them
 * on the page. It also includes pagination functionality to manage the
 * display of countries across different pages. A loading spinner is shown
 * while the data is being fetched. In case of an error, an error message
 * is displayed to the user.
 */ const controlClockAPP = async function() {
    try {
        (0, _clockAPPViewJsDefault.default).renderSpinner();
        /*
    const quotePromise = model.getQuote();
    const ipAddressPromise = model.getIPAddress();
    const geoLocationPromise = model.getGeoLocation(model.state.ip);
    const timePromise = model.getTime(model.state.timezones);
    const locationPromise = model.getLocation();
    */ /*
    await Promise.all([
      quotePromise,
      ipAddressPromise,
      geoLocationPromise,
      timePromise,
      locationPromise,
    ]);
    */ await _modelJs.getQuote();
        await _modelJs.getIPAddress();
        //await model.getGeoLocation(model.state.ip);
        await _modelJs.getTime(_modelJs.state.timezones);
        await _modelJs.getLocation();
        setTimeout(function() {
            const data = _modelJs.state;
            (0, _clockAPPViewJsDefault.default).render(data);
        }, _configJs.SHOW_COUNTRIES_SEC * 1000);
    } catch (err) {
        // Handle any errors that occur during the execution of the function
        console.error(err);
    }
};
const controlBackGroundImageAPP = function() {
    const greeting = (0, _clockAPPViewJsDefault.default)._getGreeting();
    const backgroundImage = (0, _clockAPPViewJsDefault.default)._getBackgroundImage(greeting);
    document.body.style.backgroundImage = `url(${backgroundImage})`;
};
const init = function() {
    (0, _clockAPPViewJsDefault.default).addLoadHandler(controlClockAPP);
    (0, _clockAPPViewJsDefault.default).addRefreshHandler(controlClockAPP);
    (0, _clockAPPViewJsDefault.default).addHandlerMoreLess();
    (0, _clockAPPViewJsDefault.default).addResizeHandler(controlBackGroundImageAPP);
};
init();

},{"./model.js":"Y4A21","./config.js":"k5Hzs","./views/clockAPPView.js":"j1mkB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "getIPAddress", ()=>getIPAddress);
parcelHelpers.export(exports, "getGeoLocation", ()=>getGeoLocation);
parcelHelpers.export(exports, "getLocation", ()=>getLocation);
parcelHelpers.export(exports, "getTime", ()=>getTime);
parcelHelpers.export(exports, "getQuote", ()=>getQuote);
var _configJs = require("./config.js");
var _helperJs = require("./helper.js");
const state = {
    quote: "",
    author: "",
    ip: "",
    timezones: "Asia/Dhaka",
    time: "",
    ampmStamp: "",
    location: "",
    timezone: "",
    dayOfWeek: "",
    dayOfYear: "",
    weekNumber: ""
};
const getIPAddress = async function() {
    try {
        const ipInformation = await (0, _helperJs.getJSON)(`${(0, _configJs.API_URL_FOR_IPADDRESS)}`);
        state.ip = ipInformation.ip;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
const getGeoLocation = async function(ipAddress) {
    try {
        const geoLocation = await (0, _helperJs.getJSON)(`${(0, _configJs.API_URL_FOR_GEOLOCATION)}?ip=${ipAddress}&apikey=${(0, _configJs.GEOLOCATION_KEY)}`);
        state.timezones = geoLocation.data.timezone.id;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
const getLocation = async function() {
    try {
        const pos = await new Promise((resolve, reject)=>{
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const { latitude, longitude } = pos.coords;
        const res = await fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=742721280376254714780x97916`);
        if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
        const data = await res.json();
        state.location = ` ${data.city}, ${data.country}`;
    } catch (err) {
        console.error(`${err.message}`);
    }
};
const getTime = async function(regionName = "Asia/Dhaka") {
    try {
        const time = await (0, _helperJs.getJSON)(`${(0, _configJs.API_URL_FOR_TIME)}${regionName}`);
        let currentTimeStamp = new Date(time.datetime).toLocaleTimeString();
        const ampmStamp = currentTimeStamp.split(" ")[1];
        state.ampmStamp = ampmStamp;
        const timeStamp = `${currentTimeStamp.split(" ")[0].split(":")[0].padStart(2, "0")}:${currentTimeStamp.split(" ")[0].split(":")[1].padStart(2, "0")}`;
        state.time = timeStamp;
        state.timezone = time.timezone;
        state.dayOfWeek = String(time.day_of_week + 1).padStart(2, "0");
        state.dayOfYear = String(time.day_of_year).padStart(3, "0");
        state.weekNumber = String(time.week_number).padStart(2, "0");
    } catch (error) {
        console.error(error);
        throw error;
    }
};
const getQuote = async function() {
    try {
        const quote = await (0, _helperJs.getJSON)(`${(0, _configJs.API_URL_FOR_QUOTES)}random`);
        state.author = quote[0].author;
        state.quote = quote[0].content;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

},{"./config.js":"k5Hzs","./helper.js":"lVRAz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL_FOR_IPADDRESS", ()=>API_URL_FOR_IPADDRESS);
parcelHelpers.export(exports, "API_URL_FOR_QUOTES", ()=>API_URL_FOR_QUOTES);
parcelHelpers.export(exports, "API_URL_FOR_GEOLOCATION", ()=>API_URL_FOR_GEOLOCATION);
parcelHelpers.export(exports, "API_URL_FOR_TIME", ()=>API_URL_FOR_TIME);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "COUNTRY_PER_PAGE", ()=>COUNTRY_PER_PAGE);
parcelHelpers.export(exports, "SHOW_COUNTRIES_SEC", ()=>SHOW_COUNTRIES_SEC);
parcelHelpers.export(exports, "GEOLOCATION_KEY", ()=>GEOLOCATION_KEY);
const API_URL_FOR_IPADDRESS = "https://api.ipify.org?format=json";
const API_URL_FOR_QUOTES = "https://api.quotable.io/quotes/";
const API_URL_FOR_GEOLOCATION = "https://api.ipbase.com/v2/info";
const API_URL_FOR_TIME = "https://worldtimeapi.org/api/timezone/";
const TIMEOUT_SEC = 30;
const COUNTRY_PER_PAGE = 20;
const SHOW_COUNTRIES_SEC = 1;
const GEOLOCATION_KEY = "ipb_live_pfxHet0CTysqczA3IdS9EiNYkmi9NNjVSGRBZRyK";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"lVRAz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
var _configJs = require("./config.js");
/**
 * Returns a Promise that rejects with an error after a specified number of seconds.
 *
 * @param {number} seconds - The number of seconds to wait before rejecting the promise.
 * @returns {Promise<never>} A Promise that rejects with an error indicating the request took too long.
 *
 * @description
 * This function takes a number of seconds as an argument and returns a Promise that
 * automatically rejects after the specified number of seconds. The Promise is
 * rejected with an Error object that contains a message that describes the timeout.
 */ const timeout = function(seconds) {
    return new Promise(function(_, reject) {
        setTimeout(()=>{
            reject(new Error(`Request took too long! Timeout after ${seconds} second`));
        }, seconds * 1000);
    });
};
const getJSON = async function(url) {
    try {
        console.log(url);
        mode: "no-cors";
        referrerPolicy: "unsafe-url";
        // Fetch the data from the given URL, and set a timeout of 5 seconds
        const response = await Promise.race([
            fetch(url),
            timeout((0, _configJs.TIMEOUT_SEC))
        ]);
        // If the request was not successful, reject the Promise with an error
        if (!response.ok) {
            const error = new Error(`${response.statusText} ${response.status}`);
            throw error;
        }
        // If the request was successful, parse the response data as JSON
        const jsonData = await response.json();
        // Return the parsed JSON data
        return jsonData;
    } catch (error) {
        // If there was an error, rethrow it to the caller
        console.log(error);
        throw error;
    }
};

},{"./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j1mkB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ClockAPPView", ()=>ClockAPPView);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconRefreshSvg = require("../../assets/desktop/icon-refresh.svg");
var _iconRefreshSvgDefault = parcelHelpers.interopDefault(_iconRefreshSvg);
var _iconSunSvg = require("../../assets/desktop/icon-sun.svg");
var _iconSunSvgDefault = parcelHelpers.interopDefault(_iconSunSvg);
var _iconMoonSvg = require("../../assets/desktop/icon-moon.svg");
var _iconMoonSvgDefault = parcelHelpers.interopDefault(_iconMoonSvg);
var _iconArrowDownSvg = require("../../assets/desktop/icon-arrow-down.svg");
var _iconArrowDownSvgDefault = parcelHelpers.interopDefault(_iconArrowDownSvg);
var _iconArrowUpSvg = require("../../assets/desktop/icon-arrow-up.svg");
var _iconArrowUpSvgDefault = parcelHelpers.interopDefault(_iconArrowUpSvg);
var _bgImageDaytimeJpg = require("../../assets/desktop/bg-image-daytime.jpg");
var _bgImageDaytimeJpgDefault = parcelHelpers.interopDefault(_bgImageDaytimeJpg);
var _bgImageNighttimeJpg = require("../../assets/desktop/bg-image-nighttime.jpg");
var _bgImageNighttimeJpgDefault = parcelHelpers.interopDefault(_bgImageNighttimeJpg);
var _bgImageDaytimeJpg1 = require("../../assets/tablet/bg-image-daytime.jpg");
var _bgImageDaytimeJpgDefault1 = parcelHelpers.interopDefault(_bgImageDaytimeJpg1);
var _bgImageNighttimeJpg1 = require("../../assets/tablet/bg-image-nighttime.jpg");
var _bgImageNighttimeJpgDefault1 = parcelHelpers.interopDefault(_bgImageNighttimeJpg1);
var _bgImageDaytimeJpg2 = require("../../assets/mobile/bg-image-daytime.jpg");
var _bgImageDaytimeJpgDefault2 = parcelHelpers.interopDefault(_bgImageDaytimeJpg2);
var _bgImageNighttimeJpg2 = require("../../assets/mobile/bg-image-nighttime.jpg");
var _bgImageNighttimeJpgDefault2 = parcelHelpers.interopDefault(_bgImageNighttimeJpg2);
class ClockAPPView {
    _parentElement = document.querySelector(".clock-app");
    _data;
    render(data) {
        if (!data) return;
        this._data = data;
        let markup = "";
        markup = this._generateMarkup();
        this._clearMarkup();
        this._parentElement.insertAdjacentHTML("beforeend", markup);
    }
    _clearMarkup() {
        this._parentElement.innerHTML = "";
    }
    renderSpinner = function() {
        let markup = `<div class="loader-container">
  <div class="loader"></div>
  <div class="loader-text">Loading...</div>
</div>`;
        this._parentElement.innerHTML = "";
        this._parentElement.insertAdjacentHTML("beforeend", markup);
    };
    addLoadHandler(render) {
        window.addEventListener("load", render);
    }
    addResizeHandler(render) {
        window.addEventListener("resize", render);
    }
    addRefreshHandler(render) {
        this._parentElement.addEventListener("click", function(event) {
            const refreshButton = event.target.closest("#quote-refresh");
            if (!refreshButton) return;
            refreshButton.addEventListener("click", render);
        });
    }
    addHandlerMoreLess() {
        this._parentElement.addEventListener("click", function(event) {
            event.preventDefault();
            const moreLessButton = event.target.closest("#more-less");
            if (!moreLessButton) return;
            moreLessButton.addEventListener("click", function(event) {
                let root = document.querySelector(":root");
                root.style.setProperty("--color-primary-other", "#000000");
                const arrowIcon = document.querySelector(".time-container__arrow");
                const timezoneDetails = document.querySelector(".timezone-container-details");
                const quoteSection = document.querySelector(".quote-container");
                const toggleButtonText = document.querySelector(".time-container__button-text");
                const greetingText = document.querySelector(".time-container__greeting");
                if (greetingText.textContent.trim().includes("Evening")) {
                    root.style.setProperty("--color-primary-other", "#000000");
                    root.style.setProperty("--color-White-other", "#ffffff");
                } else if (greetingText.textContent.trim().includes("Morning")) {
                    root.style.setProperty("--color-primary-other", "#ffffff");
                    root.style.setProperty("--color-White-other", "#000000");
                }
                quoteSection.classList.toggle("quote-container__hide");
                moreLessButton.classList.toggle("active");
                timezoneDetails.classList.toggle("timezone-container-details__hide");
                if (moreLessButton.classList.contains("active")) {
                    arrowIcon.src = (0, _iconArrowUpSvgDefault.default);
                    arrowIcon.style.height = "28px";
                    arrowIcon.style.width = "28px";
                    toggleButtonText.textContent = "Less";
                } else {
                    arrowIcon.src = (0, _iconArrowDownSvgDefault.default);
                    arrowIcon.style.height = "8px";
                    arrowIcon.style.width = "8px";
                    toggleButtonText.textContent = "More";
                }
            });
        });
    }
    _generateMarkup() {
        const greeting = this._getGreeting();
        const backgroundImage = this._getBackgroundImage(greeting);
        document.querySelector("body").style.backgroundImage = `url(${backgroundImage})`;
        const html = `
      <div class="quote-container">
        <div class="quote-container__quote">
          <p>${this._data.quote}</p>
          <div class="quote-container__refresh">
            <img id="quote-refresh"
              class="quote-container__refresh-icon"
              src="${(0, _iconRefreshSvgDefault.default)}"
              alt="icon-refresh"
            />
          </div>
        </div>
        <div class="quote-container__author">"${this._data.author}"</div>
      </div>
      <div class="time-container">
        <div class="time-container__details">
          <div class="time-container__header">
            <img
              class="time-container__icon"
              src="${this._getGreetingIcon(greeting)}"
              alt="icon-moon"
            />
            <h4 class="time-container__greeting heading-four">
              Good ${greeting} <span class="time-container__current-time">, IT\u{2019}S CURRENTLY</span>
            </h4>
          </div>
          <div class="time-container__time">
            <h1 class="time-container__hours heading-One">${this._data.time}</h1>
            <p class="time-container__ampm">${this._data.ampmStamp}</p>
          </div>
          <div class="time-container__location">
            <h3 class="heading-three">IN ${this._data.location}</h3>
          </div>
        </div>
        <div class="time-container__cta">
          <a id="more-less" class="time-container__button">
            <div class="time-container__button-text">MORE</div>
            <div class="time-container__arrow-container">
              <img
                class="time-container__arrow"
                src="${(0, _iconArrowDownSvgDefault.default)}"
                alt="icon-arrow"
              />
            </div>
          </a>
        </div>
      </div>

      <div class="timezone-container-details timezone-container-details__hide">
        <div class="timezone-container-details__row">
          <span>CURRENT TIMEZONE</span>
          <h2 class="heading-two">${this._data.timezone}</h2>
        </div>
        <div class="timezone-container-details__row">
          <span>Day of the week</span>
          <h2 class="heading-two">${this._data.dayOfWeek}</h2>
        </div>
        <div class="timezone-container-details__row">
          <span>Day of the year</span>
          <h2 class="heading-two">${this._data.dayOfYear}</h2>
        </div>
        <div class="timezone-container-details__row">
          <span>Week number</span>
          <h2 class="heading-two">${this._data.weekNumber}</h2>
        </div>
      </div>
    `;
        return html;
    }
    _getGreeting() {
        const [hourString] = this._data.time.split(":");
        const hour = Number(hourString);
        const ampmStamp = this._data.ampmStamp;
        const isMorning = (hour >= 5 || hour < 12) && ampmStamp == "AM" || (hour >= 12 || hour < 6) && ampmStamp == "PM";
        return isMorning ? "Morning" : "Evening";
    }
    _getGreetingIcon(greeting) {
        return greeting === "Morning" ? (0, _iconSunSvgDefault.default) : (0, _iconMoonSvgDefault.default);
    }
    _getBackgroundImage(greeting) {
        const isTablet = window.matchMedia("(max-width: 768px)").matches;
        const isMobile = window.matchMedia("(max-width: 375px)").matches;
        if (isMobile) return greeting === "Morning" ? (0, _bgImageDaytimeJpgDefault2.default) : (0, _bgImageNighttimeJpgDefault2.default);
        if (isTablet) return greeting === "Morning" ? (0, _bgImageDaytimeJpgDefault1.default) : (0, _bgImageNighttimeJpgDefault1.default);
        return greeting === "Morning" ? (0, _bgImageDaytimeJpgDefault.default) : (0, _bgImageNighttimeJpgDefault.default);
    }
}
exports.default = new ClockAPPView();

},{"./view.js":"bWlJ9","../../assets/desktop/icon-refresh.svg":"h0Jtu","../../assets/desktop/icon-sun.svg":"bqMMT","../../assets/desktop/icon-moon.svg":"iAEPN","../../assets/desktop/icon-arrow-down.svg":"48URG","../../assets/desktop/icon-arrow-up.svg":"lr7CZ","../../assets/desktop/bg-image-daytime.jpg":"2AXyu","../../assets/desktop/bg-image-nighttime.jpg":"hDSYy","../../assets/tablet/bg-image-daytime.jpg":"j6Qga","../../assets/tablet/bg-image-nighttime.jpg":"84lqR","../../assets/mobile/bg-image-daytime.jpg":"jKeFD","../../assets/mobile/bg-image-nighttime.jpg":"bc265","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWlJ9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "View", ()=>View);
class View {
}
exports.default = new View();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h0Jtu":[function(require,module,exports,__globalThis) {
module.exports = require("1b51900e86cd553c").getBundleURL('hWUTQ') + "icon-refresh.f581e243.svg" + "?" + Date.now();

},{"1b51900e86cd553c":"lgJ39"}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"bqMMT":[function(require,module,exports,__globalThis) {
module.exports = require("fd8063e93c5b82c6").getBundleURL('hWUTQ') + "icon-sun.3452a647.svg" + "?" + Date.now();

},{"fd8063e93c5b82c6":"lgJ39"}],"iAEPN":[function(require,module,exports,__globalThis) {
module.exports = require("b54a61119f85edb4").getBundleURL('hWUTQ') + "icon-moon.490b3dbd.svg" + "?" + Date.now();

},{"b54a61119f85edb4":"lgJ39"}],"48URG":[function(require,module,exports,__globalThis) {
module.exports = require("b6a3b512cb59747b").getBundleURL('hWUTQ') + "icon-arrow-down.0ba4ad89.svg" + "?" + Date.now();

},{"b6a3b512cb59747b":"lgJ39"}],"lr7CZ":[function(require,module,exports,__globalThis) {
module.exports = require("554c053046b87ffb").getBundleURL('hWUTQ') + "icon-arrow-up.41411248.svg" + "?" + Date.now();

},{"554c053046b87ffb":"lgJ39"}],"2AXyu":[function(require,module,exports,__globalThis) {
module.exports = require("6c5198e636a36771").getBundleURL('hWUTQ') + "bg-image-daytime.e3f16e11.jpg" + "?" + Date.now();

},{"6c5198e636a36771":"lgJ39"}],"hDSYy":[function(require,module,exports,__globalThis) {
module.exports = require("3428fb6757f48864").getBundleURL('hWUTQ') + "bg-image-nighttime.97cb8f1c.jpg" + "?" + Date.now();

},{"3428fb6757f48864":"lgJ39"}],"j6Qga":[function(require,module,exports,__globalThis) {
module.exports = require("87d023aa5980ab47").getBundleURL('hWUTQ') + "bg-image-daytime.a8f73978.jpg" + "?" + Date.now();

},{"87d023aa5980ab47":"lgJ39"}],"84lqR":[function(require,module,exports,__globalThis) {
module.exports = require("3bb435642d6ce85f").getBundleURL('hWUTQ') + "bg-image-nighttime.18299e2b.jpg" + "?" + Date.now();

},{"3bb435642d6ce85f":"lgJ39"}],"jKeFD":[function(require,module,exports,__globalThis) {
module.exports = require("f3d205e0795f2a34").getBundleURL('hWUTQ') + "bg-image-daytime.2aeba90a.jpg" + "?" + Date.now();

},{"f3d205e0795f2a34":"lgJ39"}],"bc265":[function(require,module,exports,__globalThis) {
module.exports = require("6191965463c2d188").getBundleURL('hWUTQ') + "bg-image-nighttime.3ca0e7e5.jpg" + "?" + Date.now();

},{"6191965463c2d188":"lgJ39"}]},["ik2hV","aenu9"], "aenu9", "parcelRequire94c2")

//# sourceMappingURL=index.e37f48ea.js.map
