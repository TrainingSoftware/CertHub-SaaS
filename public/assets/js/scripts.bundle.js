/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../src/js/components/blockui.js":
/*!***************************************!*\
  !*** ../src/js/components/blockui.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";


// Class definition
var KTBlockUI = function(element, options) {
    //////////////////////////////
    // ** Private variables  ** //
    //////////////////////////////
    var the = this;

    if ( typeof element === "undefined" || element === null ) {
        return;
    }

    // Default options
    var defaultOptions = {
        zIndex: false,
        overlayClass: '',
        overflow: 'hidden',
        message: '<span class="spinner-border text-primary"></span>'
    };

    ////////////////////////////
    // ** Private methods  ** //
    ////////////////////////////

    var _construct = function() {
        if ( KTUtil.data(element).has('blockui') ) {
            the = KTUtil.data(element).get('blockui');
        } else {
            _init();
        }
    }

    var _init = function() {
        // Variables
        the.options = KTUtil.deepExtend({}, defaultOptions, options);
        the.element = element;
        the.overlayElement = null;
        the.blocked = false;
        the.positionChanged = false;
        the.overflowChanged = false;

        // Bind Instance
        KTUtil.data(the.element).set('blockui', the);
    }

    var _block = function() {
        if ( KTEventHandler.trigger(the.element, 'kt.blockui.block', the) === false ) {
            return;
        }

        var isPage = (the.element.tagName === 'BODY');
       
        var position = KTUtil.css(the.element, 'position');
        var overflow = KTUtil.css(the.element, 'overflow');
        var zIndex = isPage ? 10000 : 1;

        if (the.options.zIndex > 0) {
            zIndex = the.options.zIndex;
        } else {
            if (KTUtil.css(the.element, 'z-index') != 'auto') {
                zIndex = KTUtil.css(the.element, 'z-index');
            }
        }

        the.element.classList.add('blockui');

        if (position === "absolute" || position === "relative" || position === "fixed") {
            KTUtil.css(the.element, 'position', 'relative');
            the.positionChanged = true;
        }

        if (the.options.overflow === 'hidden' && overflow === 'visible') {           
            KTUtil.css(the.element, 'overflow', 'hidden');
            the.overflowChanged = true;
        }

        the.overlayElement = document.createElement('DIV');    
        the.overlayElement.setAttribute('class', 'blockui-overlay ' + the.options.overlayClass);
        
        the.overlayElement.innerHTML = the.options.message;

        KTUtil.css(the.overlayElement, 'z-index', zIndex);

        the.element.append(the.overlayElement);
        the.blocked = true;

        KTEventHandler.trigger(the.element, 'kt.blockui.after.blocked', the) === false
    }

    var _release = function() {
        if ( KTEventHandler.trigger(the.element, 'kt.blockui.release', the) === false ) {
            return;
        }

        the.element.classList.add('blockui');
        
        if (the.positionChanged) {
            KTUtil.css(the.element, 'position', '');
        }

        if (the.overflowChanged) {
            KTUtil.css(the.element, 'overflow', '');
        }

        if (the.overlayElement) {
            KTUtil.remove(the.overlayElement);
        }        

        the.blocked = false;

        KTEventHandler.trigger(the.element, 'kt.blockui.released', the);
    }

    var _isBlocked = function() {
        return the.blocked;
    }

    var _destroy = function() {
        KTUtil.data(the.element).remove('blockui');
    }

    // Construct class
    _construct();

    ///////////////////////
    // ** Public API  ** //
    ///////////////////////

    // Plugin API
    the.block = function() {
        _block();
    }

    the.release = function() {
        _release();
    }

    the.isBlocked = function() {
        return _isBlocked();
    }

    the.destroy = function() {
        return _destroy();
    }

    // Event API
    the.on = function(name, handler) {
        return KTEventHandler.on(the.element, name, handler);
    }

    the.one = function(name, handler) {
        return KTEventHandler.one(the.element, name, handler);
    }

    the.off = function(name) {
        return KTEventHandler.off(the.element, name);
    }

    the.trigger = function(name, event) {
        return KTEventHandler.trigger(the.element, name, event, the, event);
    }
};

// Static methods
KTBlockUI.getInstance = function(element) {
    if (element !== null && KTUtil.data(element).has('blockui')) {
        return KTUtil.data(element).get('blockui');
    } else {
        return null;
    }
}

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTBlockUI;
}

/***/ }),

/***/ "../src/js/components/cookie.js":
/*!**************************************!*\
  !*** ../src/js/components/cookie.js ***!
  \**************************************/
/***/ ((module) => {

"use strict";

// DOCS: https://javascript.info/cookie

// Class definition
var KTCookie = function() {
    return {
        // returns the cookie with the given name,
        // or undefined if not found
        get: function(name) {
            var matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));

            return matches ? decodeURIComponent(matches[1]) : null;
        },

        // Please note that a cookie value is encoded,
        // so getCookie uses a built-in decodeURIComponent function to decode it.
        set: function(name, value, options) {
            if ( typeof options === "undefined" || options === null ) {
                options = {};
            }

            options = Object.assign({}, {
                path: '/'
            }, options);

            if ( options.expires instanceof Date ) {
                options.expires = options.expires.toUTCString();
            }

            var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

            for ( var optionKey in options ) {
                if ( options.hasOwnProperty(optionKey) === false ) {
                    continue;
                }

                updatedCookie += "; " + optionKey;
                var optionValue = options[optionKey];

                if ( optionValue !== true ) {
                    updatedCookie += "=" + optionValue;
                }
            }

            document.cookie = updatedCookie;
        },

        // To remove a cookie, we can call it with a negative expiration date:
        remove: function(name) {
            this.set(name, "", {
                'max-age': -1
            });
        }
    }
}();

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTCookie;
}


/***/ }),

/***/ "../src/js/components/dialer.js":
/*!**************************************!*\
  !*** ../src/js/components/dialer.js ***!
  \**************************************/
/***/ ((module) => {

"use strict";


// Class definition
var KTDialer = function(element, options) {
    ////////////////////////////
    // ** Private variables  ** //
    ////////////////////////////
    var the = this;

    if (!element) {
        return;
    }

    // Default options
    var defaultOptions = {
        min: null,
        max: null,
        step: 1,
        decimals: 0,
        prefix: "",
        suffix: ""
    };

    ////////////////////////////
    // ** Private methods  ** //
    ////////////////////////////

    // Constructor
    var _construct = function() {
        if ( KTUtil.data(element).has('dialer') === true ) {
            the = KTUtil.data(element).get('dialer');
        } else {
            _init();
        }
    }

    // Initialize
    var _init = function() {
        // Variables
        the.options = KTUtil.deepExtend({}, defaultOptions, options);

        // Elements
        the.element = element;
        the.incElement = the.element.querySelector('[data-kt-dialer-control="increase"]');
        the.decElement = the.element.querySelector('[data-kt-dialer-control="decrease"]');
        the.inputElement = the.element.querySelector('input[type]'); 
        
        // Set Values
        if (_getOption('decimals')) {
            the.options.decimals = parseInt(_getOption('decimals'));
        }
        
        if (_getOption('prefix')) {
            the.options.prefix = _getOption('prefix');
        }
        
        if (_getOption('suffix')) {
            the.options.suffix = _getOption('suffix');
        }
        
        if (_getOption('step')) {
            the.options.step = parseFloat(_getOption('step'));
        }

        if (_getOption('min')) {
            the.options.min = parseFloat(_getOption('min'));
        }

        if (_getOption('max')) {
            the.options.max = parseFloat(_getOption('max'));
        }

        the.value = parseFloat(the.inputElement.value.replace(/[^\d.]/g, ''));  

        _setValue();

        // Event Handlers
        _handlers();

        // Bind Instance
        KTUtil.data(the.element).set('dialer', the);
    }

    // Handlers
    var _handlers = function() {
        KTUtil.addEvent(the.incElement, 'click', function(e) {
            e.preventDefault();
        
            _increase();
        });

        KTUtil.addEvent(the.decElement, 'click', function(e) {
            e.preventDefault();

            _decrease();
        });

        KTUtil.addEvent(the.inputElement, 'change', function(e) {
            e.preventDefault();

            _setValue();
        });
    }

    // Event handlers
    var _increase = function() {
        // Trigger "after.dialer" event
        KTEventHandler.trigger(the.element, 'kt.dialer.increase', the);

        the.inputElement.value = the.value + the.options.step;
        _setValue();

        // Trigger "before.dialer" event
        KTEventHandler.trigger(the.element, 'kt.dialer.increased', the);

        return the;
    }

    var _decrease = function() {
        // Trigger "after.dialer" event
        KTEventHandler.trigger(the.element, 'kt.dialer.decrease', the);

        the.inputElement.value = the.value - the.options.step;        
        _setValue();

        // Trigger "before.dialer" event
        KTEventHandler.trigger(the.element, 'kt.dialer.decreased', the);

        return the;
    }

    // Set Input Value
    var _setValue = function() {
        // Trigger "after.dialer" event
        KTEventHandler.trigger(the.element, 'kt.dialer.change', the);

        the.value = parseFloat(the.inputElement.value.replace(/[^\d.]/g, '')); 
        
        if (the.value < the.options.min) {
            the.value = the.options.min;
        }

        if (the.value > the.options.max) {
            the.value = the.options.max;
        }

        the.inputElement.value = _format(the.value);

        // Trigger "after.dialer" event
        KTEventHandler.trigger(the.element, 'kt.dialer.changed', the);
    }

    // Format
    var _format = function(val){
        return the.options.prefix + parseFloat(val).toFixed(the.options.decimals) + the.options.suffix;              
    }

    // Get option
    var _getOption = function(name) {
        if ( the.element.hasAttribute('data-kt-dialer-' + name) === true ) {
            var attr = the.element.getAttribute('data-kt-dialer-' + name);
            var value = attr;            

            return value;
        } else {
            return null;
        }
    }

    var _destroy = function() {
        KTUtil.data(the.element).remove('dialer');
    }

    // Construct class
    _construct();

    ///////////////////////
    // ** Public API  ** //
    ///////////////////////

    // Plugin API
    the.increase = function() {
        return _increase();
    }

    the.decrease = function() {
        return _decrease();
    }

    the.getElement = function() {
        return the.element;
    }

    the.destroy = function() {
        return _destroy();
    }

    // Event API
    the.on = function(name, handler) {
        return KTEventHandler.on(the.element, name, handler);
    }

    the.one = function(name, handler) {
        return KTEventHandler.one(the.element, name, handler);
    }

    the.off = function(name) {
        return KTEventHandler.off(the.element, name);
    }

    the.trigger = function(name, event) {
        return KTEventHandler.trigger(the.element, name, event, the, event);
    }
};

// Static methods
KTDialer.getInstance = function(element) {
    if ( element !== null && KTUtil.data(element).has('dialer') ) {
        return KTUtil.data(element).get('dialer');
    } else {
        return null;
    }
}

// Create instances
KTDialer.createInstances = function(selector = '[data-kt-dialer="true"]') {
    // Get instances
    var elements = document.body.querySelectorAll(selector);

    if ( elements && elements.length > 0 ) {
        for (var i = 0, len = elements.length; i < len; i++) {
            // Initialize instances
            new KTDialer(elements[i]);
        }
    }
}

// Global initialization
KTDialer.init = function() {
    KTDialer.createInstances();
};

// On document ready
if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', KTDialer.init);
} else {
    KTDialer.init();
}

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTDialer;
}

/***/ }),

/***/ "../src/js/components/drawer.js":
/*!**************************************!*\
  !*** ../src/js/components/drawer.js ***!
  \**************************************/
/***/ ((module) => {

"use strict";


// Class definition
var KTDrawer = function(element, options) {
    //////////////////////////////
    // ** Private variables  ** //
    //////////////////////////////
    var the = this;
    var body = document.getElementsByTagName("BODY")[0];

    if ( typeof element === "undefined" || element === null ) {
        return;
    }

    // Default options
    var defaultOptions = {
        overlay: true,
        direction: 'end',
        baseClass: 'drawer',
        overlayClass: 'drawer-overlay'
    };

    ////////////////////////////
    // ** Private methods  ** //
    ////////////////////////////

    var _construct = function() {
        if ( KTUtil.data(element).has('drawer') ) {
            the = KTUtil.data(element).get('drawer');
        } else {
            _init();
        }
    }

    var _init = function() {
        // Variables
        the.options = KTUtil.deepExtend({}, defaultOptions, options);
        the.uid = KTUtil.getUniqueId('drawer');
        the.element = element;
        the.overlayElement = null;
        the.name = the.element.getAttribute('data-kt-drawer-name');
        the.shown = false;
        the.lastWidth;
        the.toggleElement = null;

        // Set initialized
        the.element.setAttribute('data-kt-drawer', 'true');

        // Event Handlers
        _handlers();

        // Update Instance
        _update();

        // Bind Instance
        KTUtil.data(the.element).set('drawer', the);
    }

    var _handlers = function() {
        var togglers = _getOption('toggle');
        var closers = _getOption('close');

        if ( togglers !== null && togglers.length > 0 ) {
            KTUtil.on(body, togglers, 'click', function(e) {
                e.preventDefault();

                the.toggleElement = this;
                _toggle();
            });
        }

        if ( closers !== null && closers.length > 0 ) {
            KTUtil.on(body, closers, 'click', function(e) {
                e.preventDefault();

                the.closeElement = this;
                _hide();
            });
        }
    }

    var _toggle = function() {
        if ( KTEventHandler.trigger(the.element, 'kt.drawer.toggle', the) === false ) {
            return;
        }

        if ( the.shown === true ) {
            _hide();
        } else {
            _show();
        }

        KTEventHandler.trigger(the.element, 'kt.drawer.toggled', the);
    }

    var _hide = function() {
        if ( KTEventHandler.trigger(the.element, 'kt.drawer.hide', the) === false ) {
            return;
        }

        the.shown = false;

        _deleteOverlay();

        body.removeAttribute('data-kt-drawer-' + the.name, 'on');
        body.removeAttribute('data-kt-drawer');

        KTUtil.removeClass(the.element, the.options.baseClass + '-on');

        if ( the.toggleElement !== null ) {
            KTUtil.removeClass(the.toggleElement, 'active');
        }

        KTEventHandler.trigger(the.element, 'kt.drawer.after.hidden', the) === false
    }

    var _show = function() {
        if ( KTEventHandler.trigger(the.element, 'kt.drawer.show', the) === false ) {
            return;
        }

        the.shown = true;

        _createOverlay();
        body.setAttribute('data-kt-drawer-' + the.name, 'on');
        body.setAttribute('data-kt-drawer', 'on');

        KTUtil.addClass(the.element, the.options.baseClass + '-on');

        if ( the.toggleElement !== null ) {
            KTUtil.addClass(the.toggleElement, 'active');
        }

        KTEventHandler.trigger(the.element, 'kt.drawer.shown', the);
    }

    var _update = function() {
        var width = _getWidth();
        var direction = _getOption('direction');

        // Reset state
        if ( KTUtil.hasClass(the.element, the.options.baseClass + '-on') === true && String(body.getAttribute('data-kt-drawer-' + the.name + '-')) === 'on' ) {
            the.shown = true;
        } else {
            the.shown = false;
        }       

        // Activate/deactivate
        if ( _getOption('activate') === true ) {
            KTUtil.addClass(the.element, the.options.baseClass);
            KTUtil.addClass(the.element, the.options.baseClass + '-' + direction);
            KTUtil.css(the.element, 'width', width, true);

            the.lastWidth = width;
        } else {
            KTUtil.css(the.element, 'width', '');

            KTUtil.removeClass(the.element, the.options.baseClass);
            KTUtil.removeClass(the.element, the.options.baseClass + '-' + direction);

            _hide();
        }
    }

    var _createOverlay = function() {
        if ( _getOption('overlay') === true ) {
            the.overlayElement = document.createElement('DIV');

            KTUtil.css(the.overlayElement, 'z-index', KTUtil.css(the.element, 'z-index') - 1); // update

            body.append(the.overlayElement);

            KTUtil.addClass(the.overlayElement, _getOption('overlay-class'));

            KTUtil.addEvent(the.overlayElement, 'click', function(e) {
                e.preventDefault();
                _hide();
            });
        }
    }

    var _deleteOverlay = function() {
        if ( the.overlayElement !== null ) {
            KTUtil.remove(the.overlayElement);
        }
    }

    var _getOption = function(name) {
        if ( the.element.hasAttribute('data-kt-drawer-' + name) === true ) {
            var attr = the.element.getAttribute('data-kt-drawer-' + name);
            var value = KTUtil.getResponsiveValue(attr);

            if ( value !== null && String(value) === 'true' ) {
                value = true;
            } else if ( value !== null && String(value) === 'false' ) {
                value = false;
            }

            return value;
        } else {
            var optionName = KTUtil.snakeToCamel(name);

            if ( the.options[optionName] ) {
                return KTUtil.getResponsiveValue(the.options[optionName]);
            } else {
                return null;
            }
        }
    }

    var _getWidth = function() {
        var width = _getOption('width');

        if ( width === 'auto') {
            width = KTUtil.css(the.element, 'width');
        }

        return width;
    }

    var _destroy = function() {
        KTUtil.data(the.element).remove('drawer');
    }

    // Construct class
    _construct();

    ///////////////////////
    // ** Public API  ** //
    ///////////////////////

    // Plugin API
    the.toggle = function() {
        return _toggle();
    }

    the.show = function() {
        return _show();
    }

    the.hide = function() {
        return _hide();
    }

    the.isShown = function() {
        return the.shown;
    }

    the.update = function() {
        _update();
    }

    the.goElement = function() {
        return the.element;
    }

    the.destroy = function() {
        return _destroy();
    }

    // Event API
    the.on = function(name, handler) {
        return KTEventHandler.on(the.element, name, handler);
    }

    the.one = function(name, handler) {
        return KTEventHandler.one(the.element, name, handler);
    }

    the.off = function(name) {
        return KTEventHandler.off(the.element, name);
    }

    the.trigger = function(name, event) {
        return KTEventHandler.trigger(the.element, name, event, the, event);
    }
};

// Static methods
KTDrawer.getInstance = function(element) {
    if (element !== null && KTUtil.data(element).has('drawer')) {
        return KTUtil.data(element).get('drawer');
    } else {
        return null;
    }
}

// Hide all drawers and skip one if provided
KTDrawer.hideAll = function(skip = null, selector = '[data-kt-drawer="true"]') {
    var items = document.querySelectorAll(selector);

    if (items && items.length > 0) {
        for (var i = 0, len = items.length; i < len; i++) {
            var item = items[i];
            var drawer = KTDrawer.getInstance(item);

            if (!drawer) {
                continue;
            }

            if ( skip ) {
                if ( item !== skip ) {
                    drawer.hide();
                }
            } else {
                drawer.hide();
            }
        }
    }
}

// Update all drawers
KTDrawer.updateAll = function(selector = '[data-kt-drawer="true"]') {
    var items = document.querySelectorAll(selector);

    if (items && items.length > 0) {
        for (var i = 0, len = items.length; i < len; i++) {
            var item = items[i];
            var drawer = KTDrawer.getInstance(item);

            if (drawer) {
                drawer.update();;
            }
        }
    }
}

// Create instances
KTDrawer.createInstances = function(selector = '[data-kt-drawer="true"]') {
    var body = document.getElementsByTagName("BODY")[0];

    // Initialize Menus
    var elements = body.querySelectorAll(selector);
    var drawer;

    if ( elements && elements.length > 0 ) {
        for (var i = 0, len = elements.length; i < len; i++) {
            drawer = new KTDrawer(elements[i]);
        }
    }
}

// Toggle instances
KTDrawer.handleShow = function() {
    // External drawer toggle handler
    KTUtil.on(document.body,  '[data-kt-drawer-show="true"][data-kt-drawer-target]', 'click', function(e) {
        var element = document.querySelector(this.getAttribute('data-kt-drawer-target'));

        if (element) {
            KTDrawer.getInstance(element).show();
        } 
    });
}

// Dismiss instances
KTDrawer.handleDismiss = function() {
    // External drawer toggle handler
    KTUtil.on(document.body,  '[data-kt-drawer-dismiss="true"]', 'click', function(e) {
        var element = this.closest('[data-kt-drawer="true"]');

        if (element) {
            var drawer = KTDrawer.getInstance(element);
            if (drawer.isShown()) {
                drawer.hide();
            }
        } 
    });
}

// Window resize Handling
window.addEventListener('resize', function() {
    var timer;
    var body = document.getElementsByTagName("BODY")[0];

    KTUtil.throttle(timer, function() {
        // Locate and update drawer instances on window resize
        var elements = body.querySelectorAll('[data-kt-drawer="true"]');

        if ( elements && elements.length > 0 ) {
            for (var i = 0, len = elements.length; i < len; i++) {
                var drawer = KTDrawer.getInstance(elements[i]);
                if (drawer) {
                    drawer.update();
                }
            }
        }
    }, 200);
});

// Global initialization
KTDrawer.init = function() {
    KTDrawer.createInstances();
    KTDrawer.handleShow();
    KTDrawer.handleDismiss();
};

// On document ready
if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', KTDrawer.init);
} else {
    KTDrawer.init();
}

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTDrawer;
}

/***/ }),

/***/ "../src/js/components/event-handler.js":
/*!*********************************************!*\
  !*** ../src/js/components/event-handler.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


// Class definition
var KTEventHandler = function() {
    ////////////////////////////
    // ** Private Variables  ** //
    ////////////////////////////
    var _handlers = {};

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////
    var _triggerEvent = function(element, name, target, e) {
        if ( KTUtil.data(element).has(name) === true ) {
            var handlerId = KTUtil.data(element).get(name);

            if ( _handlers[name] && _handlers[name][handlerId] ) {
                var handler = _handlers[name][handlerId];

                if ( handler.name === name ) {
                    if ( handler.one == true ) {
                        if ( handler.fired == false ) {
                            _handlers[name][handlerId].fired = true;

                            return handler.callback.call(this, target, e);
                        }
                    } else {
                        return handler.callback.call(this, target, e);
                    }
                }
            }
        }

        return null;
    }

    var _addEvent = function(element, name, callback, one) {
        var handlerId = KTUtil.getUniqueId('event');

        KTUtil.data(element).set(name, handlerId);

        if ( !_handlers[name] ) {
            _handlers[name] = {};
        }

        _handlers[name][handlerId] = {
            name: name,
            callback: callback,
            one: one,
            fired: false
        };
    }

    var _removeEvent = function(element, name) {
        var handlerId = KTUtil.data(element).get(name);

        if (_handlers[name] && _handlers[name][handlerId]) {
            delete _handlers[name][handlerId];
        }
    }

    ////////////////////////////
    // ** Public Methods  ** //
    ////////////////////////////
    return {
        trigger: function(element, name, target, e) {
            return _triggerEvent(element, name, target, e);
        },

        on: function(element, name, handler) {
            return _addEvent(element, name, handler);
        },

        one: function(element, name, handler) {
            return _addEvent(element, name, handler, true);
        },

        off: function(element, name) {
            return _removeEvent(element, name);
        },

        debug: function() {
            for (var b in _handlers) {
                if ( _handlers.hasOwnProperty(b) ) console.log(b);
            }
        }
    }
}();

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTEventHandler;
}


/***/ }),

/***/ "../src/js/components/feedback.js":
/*!****************************************!*\
  !*** ../src/js/components/feedback.js ***!
  \****************************************/
/***/ ((module) => {

"use strict";


// Class definition
var KTFeedback = function(options) {
    ////////////////////////////
    // ** Private Variables  ** //
    ////////////////////////////
    var the = this;
    var body = document.getElementsByTagName("BODY")[0];

    // Default options
    var defaultOptions = {
        'width' : 100,
        'placement' : 'top-center',
        'content' : '',
        'type': 'popup'
    };

    ////////////////////////////
    // ** Private methods  ** //
    ////////////////////////////

    var _construct = function() {
        _init();
    }

    var _init = function() {
        // Variables
        the.options = KTUtil.deepExtend({}, defaultOptions, options);
        the.uid = KTUtil.getUniqueId('feedback');
        the.element;
        the.shown = false;

        // Event Handlers
        _handlers();

        // Bind Instance
        KTUtil.data(the.element).set('feedback', the);
    }

    var _handlers = function() {
        KTUtil.addEvent(the.element, 'click', function(e) {
            e.preventDefault();

            _go();
        });
    }

    var _show = function() {
        if ( KTEventHandler.trigger(the.element, 'kt.feedback.show', the) === false ) {
            return;
        }

        if ( the.options.type === 'popup') {
            _showPopup();
        }

        KTEventHandler.trigger(the.element, 'kt.feedback.shown', the);

        return the;
    }

    var _hide = function() {
        if ( KTEventHandler.trigger(the.element, 'kt.feedback.hide', the) === false ) {
            return;
        }

        if ( the.options.type === 'popup') {
            _hidePopup();
        }

        the.shown = false;

        KTEventHandler.trigger(the.element, 'kt.feedback.hidden', the);

        return the;
    }

    var _showPopup = function() {
        the.element = document.createElement("DIV");

        KTUtil.addClass(the.element, 'feedback feedback-popup');
        KTUtil.setHTML(the.element, the.options.content);

        if (the.options.placement == 'top-center') {
            _setPopupTopCenterPosition();
        }

        body.appendChild(the.element);

        KTUtil.addClass(the.element, 'feedback-shown');

        the.shown = true;
    }

    var _setPopupTopCenterPosition = function() {
        var width = KTUtil.getResponsiveValue(the.options.width);
        var height = KTUtil.css(the.element, 'height');

        KTUtil.addClass(the.element, 'feedback-top-center');

        KTUtil.css(the.element, 'width', width);
        KTUtil.css(the.element, 'left', '50%');
        KTUtil.css(the.element, 'top', '-' + height);
    }

    var _hidePopup = function() {
        the.element.remove();
    }

    var _destroy = function() {
        KTUtil.data(the.element).remove('feedback');
    }

    // Construct class
    _construct();

    ///////////////////////
    // ** Public API  ** //
    ///////////////////////

    // Plugin API
    the.show = function() {
        return _show();
    }

    the.hide = function() {
        return _hide();
    }

    the.isShown = function() {
        return the.shown;
    }

    the.getElement = function() {
        return the.element;
    }

    the.destroy = function() {
        return _destroy();
    }

    // Event API
    the.on = function(name, handler) {
        return KTEventHandler.on(the.element, name, handler);
    }

    the.one = function(name, handler) {
        return KTEventHandler.one(the.element, name, handler);
    }

    the.off = function(name) {
        return KTEventHandler.off(the.element, name);
    }

    the.trigger = function(name, event) {
        return KTEventHandler.trigger(the.element, name, event, the, event);
    }
};

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTFeedback;
}


/***/ }),

/***/ "../src/js/components/image-input.js":
/*!*******************************************!*\
  !*** ../src/js/components/image-input.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


// Class definition
var KTImageInput = function(element, options) {
    ////////////////////////////
    // ** Private Variables  ** //
    ////////////////////////////
    var the = this;

    if ( typeof element === "undefined" || element === null ) {
        return;
    }

    // Default Options
    var defaultOptions = {
        
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var _construct = function() {
        if ( KTUtil.data(element).has('image-input') === true ) {
            the = KTUtil.data(element).get('image-input');
        } else {
            _init();
        }
    }

    var _init = function() {
        // Variables
        the.options = KTUtil.deepExtend({}, defaultOptions, options);
        the.uid = KTUtil.getUniqueId('image-input');

        // Elements
        the.element = element;
        the.inputElement = KTUtil.find(element, 'input[type="file"]');
        the.wrapperElement = KTUtil.find(element, '.image-input-wrapper');
        the.cancelElement = KTUtil.find(element, '[data-kt-image-input-action="cancel"]');
        the.removeElement = KTUtil.find(element, '[data-kt-image-input-action="remove"]');
        the.hiddenElement = KTUtil.find(element, 'input[type="hidden"]');
        the.src = KTUtil.css(the.wrapperElement, 'backgroundImage');

        // Set initialized
        the.element.setAttribute('data-kt-image-input', 'true');

        // Event Handlers
        _handlers();

        // Bind Instance
        KTUtil.data(the.element).set('image-input', the);
    }

    // Init Event Handlers
    var _handlers = function() {
        KTUtil.addEvent(the.inputElement, 'change', _change);
        KTUtil.addEvent(the.cancelElement, 'click', _cancel);
        KTUtil.addEvent(the.removeElement, 'click', _remove);
    }

    // Event Handlers
    var _change = function(e) {
        e.preventDefault();

        if ( the.inputElement !== null && the.inputElement.files && the.inputElement.files[0] ) {
            // Fire change event
            if ( KTEventHandler.trigger(the.element, 'kt.imageinput.change', the) === false ) {
                return;
            }

            var reader = new FileReader();

            reader.onload = function(e) {
                KTUtil.css(the.wrapperElement, 'background-image', 'url('+ e.target.result +')');
            }

            reader.readAsDataURL(the.inputElement.files[0]);

            KTUtil.addClass(the.element, 'image-input-changed');
            KTUtil.removeClass(the.element, 'image-input-empty');

            // Fire removed event
            KTEventHandler.trigger(the.element, 'kt.imageinput.changed', the);
        }
    }

    var _cancel = function(e) {
        e.preventDefault();

        // Fire cancel event
        if ( KTEventHandler.trigger(the.element, 'kt.imageinput.cancel', the) === false ) {
            return;
        }

        KTUtil.removeClass(the.element, 'image-input-changed');
        KTUtil.removeClass(the.element, 'image-input-empty');
        KTUtil.css(the.wrapperElement, 'background-image', the.src);
        the.inputElement.value = "";

        if ( the.hiddenElement !== null ) {
            the.hiddenElement.value = "0";
        }

        // Fire canceled event
        KTEventHandler.trigger(the.element, 'kt.imageinput.canceled', the);
    }

    var _remove = function(e) {
        e.preventDefault();

        // Fire remove event
        if ( KTEventHandler.trigger(the.element, 'kt.imageinput.remove', the) === false ) {
            return;
        }

        KTUtil.removeClass(the.element, 'image-input-changed');
        KTUtil.addClass(the.element, 'image-input-empty');
        KTUtil.css(the.wrapperElement, 'background-image', "none");
        the.inputElement.value = "";

        if ( the.hiddenElement !== null ) {
            the.hiddenElement.value = "1";
        }

        // Fire removed event
        KTEventHandler.trigger(the.element, 'kt.imageinput.removed', the);
    }

    var _destroy = function() {
        KTUtil.data(the.element).remove('image-input');
    }

    // Construct Class
    _construct();

    ///////////////////////
    // ** Public API  ** //
    ///////////////////////

    // Plugin API
    the.getInputElement = function() {
        return the.inputElement;
    }

    the.goElement = function() {
        return the.element;
    }
    
    the.destroy = function() {
        return _destroy();
    }

    // Event API
    the.on = function(name, handler) {
        return KTEventHandler.on(the.element, name, handler);
    }

    the.one = function(name, handler) {
        return KTEventHandler.one(the.element, name, handler);
    }

    the.off = function(name) {
        return KTEventHandler.off(the.element, name);
    }

    the.trigger = function(name, event) {
        return KTEventHandler.trigger(the.element, name, event, the, event);
    }
};

// Static methods
KTImageInput.getInstance = function(element) {
    if ( element !== null && KTUtil.data(element).has('image-input') ) {
        return KTUtil.data(element).get('image-input');
    } else {
        return null;
    }
}

// Create instances
KTImageInput.createInstances = function(selector = '[data-kt-image-input]') {
    // Initialize Menus
    var elements = document.querySelectorAll(selector);

    if ( elements && elements.length > 0 ) {
        for (var i = 0, len = elements.length; i < len; i++) {
            new KTImageInput(elements[i]);
        }
    }
}

// Global initialization
KTImageInput.init = function() {
    KTImageInput.createInstances();
};

// On document ready
if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', KTImageInput.init);
} else {
    KTImageInput.init();
}

// Webpack Support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTImageInput;
}


/***/ }),

/***/ "../src/js/components/menu.js":
/*!************************************!*\
  !*** ../src/js/components/menu.js ***!
  \************************************/
/***/ ((module) => {

"use strict";


// Class definition
var KTMenu = function(element, options) {
    ////////////////////////////
    // ** Private Variables  ** //
    ////////////////////////////
    var the = this;

    if ( typeof element === "undefined" || element === null ) {
        return;
    }

    // Default Options
    var defaultOptions = {
        dropdown: {
            hoverTimeout: 200,
            zindex: 105
        },

        accordion: {
            slideSpeed: 250,
            expand: false
        }
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var _construct = function() {
        if ( KTUtil.data(element).has('menu') === true ) {
            the = KTUtil.data(element).get('menu');
        } else {
            _init();
        }
    }

    var _init = function() {
        the.options = KTUtil.deepExtend({}, defaultOptions, options);
        the.uid = KTUtil.getUniqueId('menu');
        the.element = element;
        the.triggerElement;

        // Set initialized
        the.element.setAttribute('data-kt-menu', 'true');

        _setTriggerElement();
        _update();

        KTUtil.data(the.element).set('menu', the);
    }

    var _destroy = function() {  // todo

    }

    // Event Handlers
    // Toggle handler
    var _click = function(element, e) {
        e.preventDefault();

        var item = _getItemElement(element);

        if ( _getItemOption(item, 'trigger') !== 'click' ) {
            return;
        }

        if ( _getItemOption(item, 'toggle') === false ) {
            _show(item);
        } else {
            _toggle(item);
        }
    }

    // Link handler
    var _link = function(element, e) {
        if ( KTEventHandler.trigger(the.element, 'kt.menu.link.click', the) === false )  {
            return;
        }

        // Dismiss all shown dropdowns
        KTMenu.hideDropdowns();

        KTEventHandler.trigger(the.element, 'kt.menu.link.clicked', the);
    }

    // Dismiss handler
    var _dismiss = function(element, e) {
        var item = _getItemElement(element);
        var items = _getItemChildElements(item);

        if ( item !== null && _getItemSubType(item) === 'dropdown') {
            _hide(item); // hide items dropdown
            // Hide all child elements as well
            
            if ( items.length > 0 ) {
                for (var i = 0, len = items.length; i < len; i++) {
                    if ( items[i] !== null &&  _getItemSubType(items[i]) === 'dropdown') {
                        _hide(tems[i]);
                    }
                }
            }
        }
    }

    // Mouseover handle
    var _mouseover = function(element, e) {
        var item = _getItemElement(element);

        if ( item === null ) {
            return;
        }

        if ( _getItemOption(item, 'trigger') !== 'hover' ) {
            return;
        }

        if ( KTUtil.data(item).get('hover') === '1' ) {
            clearTimeout(KTUtil.data(item).get('timeout'));
            KTUtil.data(item).remove('hover');
            KTUtil.data(item).remove('timeout');
        }

        _show(item);
    }

    // Mouseout handle
    var _mouseout = function(element, e) {
        var item = _getItemElement(element);

        if ( item === null ) {
            return;
        }

        if ( _getItemOption(item, 'trigger') !== 'hover' ) {
            return;
        }

        var timeout = setTimeout(function() {
            if ( KTUtil.data(item).get('hover') === '1' ) {
                _hide(item);
            }
        }, the.options.dropdown.hoverTimeout);

        KTUtil.data(item).set('hover', '1');
        KTUtil.data(item).set('timeout', timeout);
    }

    // Toggle item sub
    var _toggle = function(item) {
        if ( !item ) {
            item = the.triggerElement;
        }

        if ( _isItemSubShown(item) === true ) {
            _hide(item);
        } else {
            _show(item);
        }
    }

    // Show item sub
    var _show = function(item) {
        if ( !item ) {
            item = the.triggerElement;
        }

        if ( _isItemSubShown(item) === true ) {
            return;
        }

        if ( _getItemSubType(item) === 'dropdown' ) {
            _showDropdown(item); // // show current dropdown
        } else if ( _getItemSubType(item) === 'accordion' ) {
            _showAccordion(item);
        }

        // Remember last submenu type
        KTUtil.data(item).set('type', _getItemSubType(item));  // updated
    }

    // Hide item sub
    var _hide = function(item) {
        if ( !item ) {
            item = the.triggerElement;
        }

        if ( _isItemSubShown(item) === false ) {
            return;
        }
        
        if ( _getItemSubType(item) === 'dropdown' ) {
            _hideDropdown(item);
        } else if ( _getItemSubType(item) === 'accordion' ) {
            _hideAccordion(item);
        }
    }

    // Reset item state classes if item sub type changed
    var _reset = function(item) {        
        if ( _hasItemSub(item) === false ) {
            return;
        }

        var sub = _getItemSubElement(item);

        // Reset sub state if sub type is changed during the window resize
        if ( KTUtil.data(item).has('type') && KTUtil.data(item).get('type') !== _getItemSubType(item) ) {  // updated
            KTUtil.removeClass(item, 'hover'); 
            KTUtil.removeClass(item, 'show'); 
            KTUtil.removeClass(sub, 'show'); 
        }  // updated
    }

    // Update all item state classes if item sub type changed
    var _update = function() {
        var items = the.element.querySelectorAll('.menu-item[data-kt-menu-trigger]');

        if ( items && items.length > 0 ) {
            for (var i = 0, len = items.length; i < len; i++) {
                _reset(items[i]);
            }
        }
    }

    // Set external trigger element
    var _setTriggerElement = function() {
        var target = document.querySelector('[data-kt-menu-target="# ' + the.element.getAttribute('id')  + '"]');

        if ( target !== null ) {
            the.triggerElement = target;
        } else if ( the.element.closest('[data-kt-menu-trigger]') ) {
            the.triggerElement = the.element.closest('[data-kt-menu-trigger]');
        } else if ( the.element.parentNode && KTUtil.child(the.element.parentNode, '[data-kt-menu-trigger]')) {
            the.triggerElement = KTUtil.child(the.element.parentNode, '[data-kt-menu-trigger]');
        }

        if ( the.triggerElement ) {
            KTUtil.data(the.triggerElement).set('menu', the);
        }
    }

    // Test if menu has external trigger element
    var _isTriggerElement = function(item) {
        return ( the.triggerElement === item ) ? true : false;
    }

    // Test if item's sub is shown
    var _isItemSubShown = function(item) {
        var sub = _getItemSubElement(item);

        if ( sub !== null ) {
            if ( _getItemSubType(item) === 'dropdown' ) {
                if ( KTUtil.hasClass(sub, 'show') === true && sub.hasAttribute('data-popper-placement') === true ) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return KTUtil.hasClass(item, 'show');
            }
        } else {
            return false;
        }
    }

    // Test if item dropdown is permanent
    var _isItemDropdownPermanent = function(item) {
        return _getItemOption(item, 'permanent') === true ? true : false;
    }

    // Test if item's parent is shown
    var _isItemParentShown = function(item) {
        return KTUtil.parents(item, '.menu-item.show').length > 0;
    }

    // Test of it is item sub element
    var _isItemSubElement = function(item) {
        return KTUtil.hasClass(item, 'menu-sub');
    }

    // Test if item has sub
    var _hasItemSub = function(item) {
        return (KTUtil.hasClass(item, 'menu-item') && item.hasAttribute('data-kt-menu-trigger'));
    }

    // Get link element
    var _getItemLinkElement = function(item) {
        return KTUtil.child(item, '.menu-link');
    }

    // Get toggle element
    var _getItemToggleElement = function(item) {
        if ( the.triggerElement ) {
            return the.triggerElement;
        } else {
            return _getItemLinkElement(item);
        }
    }

    // Get item sub element
    var _getItemSubElement = function(item) {
        if ( _isTriggerElement(item) === true ) {
            return the.element;
        } if ( item.classList.contains('menu-sub') === true ) {
            return item;
        } else if ( KTUtil.data(item).has('sub') ) {
            return KTUtil.data(item).get('sub');
        } else {
            return KTUtil.child(item, '.menu-sub');
        }
    }

    // Get item sub type
    var _getItemSubType = function(element) {
        var sub = _getItemSubElement(element);

        if ( sub && parseInt(KTUtil.css(sub, 'z-index')) > 0 ) {
            return "dropdown";
        } else {
            return "accordion";
        }
    }

    // Get item element
    var _getItemElement = function(element) {
        var item, sub;

        // Element is the external trigger element
        if (_isTriggerElement(element) ) {
            return element;
        }   

        // Element has item toggler attribute
        if ( element.hasAttribute('data-kt-menu-trigger') ) {
            return element;
        }

        // Element has item DOM reference in it's data storage
        if ( KTUtil.data(element).has('item') ) {
            return KTUtil.data(element).get('item');
        }

        // Item is parent of element
        if ( (item = element.closest('.menu-item[data-kt-menu-trigger]')) ) {
            return item;
        }

        // Element's parent has item DOM reference in it's data storage
        if ( (sub = element.closest('.menu-sub')) ) {
            if ( KTUtil.data(sub).has('item') === true ) {
                return KTUtil.data(sub).get('item')
            } 
        }
    }

    // Get item parent element
    var _getItemParentElement = function(item) {  
        var sub = item.closest('.menu-sub');
        var parentItem;

        if ( KTUtil.data(sub).has('item') ) {
            return KTUtil.data(sub).get('item');
        }

        if ( sub && (parentItem = sub.closest('.menu-item[data-kt-menu-trigger]')) ) {
            return parentItem;
        }

        return null;
    }

    // Get item parent elements
    var _getItemParentElements = function(item) {
        var parents = [];
        var parent;
        var i = 0;

        do {
            parent = _getItemParentElement(item);
            
            if ( parent ) {
                parents.push(parent);
                item = parent;
            }           

            i++;
        } while (parent !== null && i < 20);

        if ( the.triggerElement ) {
            parents.unshift(the.triggerElement);
        }

        return parents;
    }

    // Get item child element
    var _getItemChildElement = function(item) {
        var selector = item;
        var element;

        if ( KTUtil.data(item).get('sub') ) {
            selector = KTUtil.data(item).get('sub');
        }

        if ( selector !== null ) {
            //element = selector.querySelector('.show.menu-item[data-kt-menu-trigger]');
            element = selector.querySelector('.menu-item[data-kt-menu-trigger]');

            if ( element ) {
                return element;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }   
    
    // Get item child elements
    var _getItemChildElements = function(item) {
        var children = [];
        var child;
        var i = 0;

        do {
            child = _getItemChildElement(item);
            
            if ( child ) {
                children.push(child);
                item = child;
            }           

            i++;
        } while (child !== null && i < 20);

        return children;
    }

    // Show item dropdown
    var _showDropdown = function(item) {
        // Handle dropdown show event
        if ( KTEventHandler.trigger(the.element, 'kt.menu.dropdown.show', item) === false )  {
            return;
        }

        // Hide all currently shown dropdowns except current one
        KTMenu.hideDropdowns(item); 

        var toggle = _isTriggerElement(item) ? item : _getItemLinkElement(item);
        var sub = _getItemSubElement(item);

        var width = _getItemOption(item, 'width');
        var height = _getItemOption(item, 'height');

        var zindex = the.options.dropdown.zindex; // update
        var parentZindex = KTUtil.getHighestZindex(item); // update

        // Apply a new z-index if dropdown's toggle element or it's parent has greater z-index // update
        if ( parentZindex !== null && parentZindex >= zindex ) {
            zindex = parentZindex + 1;
        }

        if ( zindex > 0 ) {
            KTUtil.css(sub, 'z-index', zindex);
        }

        if ( width !== null ) {
            KTUtil.css(sub, 'width', width);
        }

        if ( height !== null ) {
            KTUtil.css(sub, 'height', height);
        }

        KTUtil.css(sub, 'display', '');
        KTUtil.css(sub, 'overflow', '');

        // Init popper(new)
        _initDropdownPopper(item, sub); 

        KTUtil.addClass(item, 'show');
        KTUtil.addClass(item, 'menu-dropdown');
        KTUtil.addClass(sub, 'show');

        // Append the sub the the root of the menu
        if ( _getItemOption(item, 'overflow') === true ) {
            document.body.appendChild(sub);
            KTUtil.data(item).set('sub', sub);
            KTUtil.data(sub).set('item', item);
            KTUtil.data(sub).set('menu', the);
        } else {
            KTUtil.data(sub).set('item', item);
        }

        // Handle dropdown shown event
        KTEventHandler.trigger(the.element, 'kt.menu.dropdown.shown', item);
    }

    // Hide item dropdown
    var _hideDropdown = function(item) {
        // Handle dropdown hide event
        if ( KTEventHandler.trigger(the.element, 'kt.menu.dropdown.hide', item) === false )  {
            return;
        }

        var sub = _getItemSubElement(item);

        KTUtil.css(sub, 'z-index', '');
        KTUtil.css(sub, 'width', '');
        KTUtil.css(sub, 'height', '');

        KTUtil.removeClass(item, 'show');
        KTUtil.removeClass(item, 'menu-dropdown');
        KTUtil.removeClass(sub, 'show');

        // Append the sub back to it's parent
        if ( _getItemOption(item, 'overflow') === true ) {
            if (item.classList.contains('menu-item')) {
                item.appendChild(sub);
            } else {
                KTUtil.insertAfter(the.element, item);
            }
            
            KTUtil.data(item).remove('sub');
            KTUtil.data(sub).remove('item');
            KTUtil.data(sub).remove('menu');
        } 

        // Destroy popper(new)
        _destroyDropdownPopper(item);
        
        // Handle dropdown hidden event 
        KTEventHandler.trigger(the.element, 'kt.menu.dropdown.hidden', item);
    }

    // Init dropdown popper(new)
    var _initDropdownPopper = function(item, sub) {
        // Setup popper instance
        var reference;
        var attach = _getItemOption(item, 'attach');

        if ( attach ) {
            if ( attach === 'parent') {
                reference = item.parentNode;
            } else {
                reference = document.querySelector(attach);
            }
        } else {
            reference = item;
        }

        var popper = Popper.createPopper(reference, sub, _getDropdownPopperConfig(item)); 
        KTUtil.data(item).set('popper', popper);
    }

    // Destroy dropdown popper(new)
    var _destroyDropdownPopper = function(item) {
        if ( KTUtil.data(item).has('popper') === true ) {
            KTUtil.data(item).get('popper').destroy();
            KTUtil.data(item).remove('popper');
        }
    }

    // Prepare popper config for dropdown(see: https://popper.js.org/docs/v2/)
    var _getDropdownPopperConfig = function(item) {
        // Placement
        var placement = _getItemOption(item, 'placement');
        if (!placement) {
            placement = 'right';
        }

        // Offset
        var offsetValue = _getItemOption(item, 'offset');
        var offset = offsetValue ? offsetValue.split(",") : [];

        // Strategy
        var strategy = _getItemOption(item, 'overflow') === true ? 'absolute' : 'fixed';

        var altAxis = _getItemOption(item, 'flip') !== false ? true : false;

        var popperConfig = {
            placement: placement,
            strategy: strategy,
            modifiers: [{
                name: 'offset',
                options: {
                    offset: offset
                }
            }, {
                name: 'preventOverflow',
                options: {
                    altAxis: altAxis
                }
            }, {
                name: 'flip', 
                options: {
                    flipVariations: false
                }
            }]
        };

        return popperConfig;
    }

    // Show item accordion
    var _showAccordion = function(item) {
        if ( KTEventHandler.trigger(the.element, 'kt.menu.accordion.show', item) === false )  {
            return;
        }

        if ( the.options.accordion.expand === false ) {
            _hideAccordions(item);
        }

        var sub = _getItemSubElement(item);

        if ( KTUtil.data(item).has('popper') === true ) {
            _hideDropdown(item);
        }

        KTUtil.addClass(item, 'hover'); // updateWW

        KTUtil.addClass(item, 'showing');

        KTUtil.slideDown(sub, the.options.accordion.slideSpeed, function() {
            KTUtil.removeClass(item, 'showing');
            KTUtil.addClass(item, 'show');
            KTUtil.addClass(sub, 'show');

            KTEventHandler.trigger(the.element, 'kt.menu.accordion.shown', item);
        });        
    }

    // Hide item accordion
    var _hideAccordion = function(item) {
        if ( KTEventHandler.trigger(the.element, 'kt.menu.accordion.hide', item) === false )  {
            return;
        }
        
        var sub = _getItemSubElement(item);

        KTUtil.addClass(item, 'hiding');

        KTUtil.slideUp(sub, the.options.accordion.slideSpeed, function() {
            KTUtil.removeClass(item, 'hiding');
            KTUtil.removeClass(item, 'show');
            KTUtil.removeClass(sub, 'show');

            KTUtil.removeClass(item, 'hover'); // update

            KTEventHandler.trigger(the.element, 'kt.menu.accordion.hidden', item);
        });
    }

    // Hide all shown accordions of item
    var _hideAccordions = function(item) {
        var itemsToHide = KTUtil.findAll(the.element, '.show[data-kt-menu-trigger]');
        var itemToHide;

        if (itemsToHide && itemsToHide.length > 0) {
            for (var i = 0, len = itemsToHide.length; i < len; i++) {
                itemToHide = itemsToHide[i];

                if ( _getItemSubType(itemToHide) === 'accordion' && itemToHide !== item && item.contains(itemToHide) === false && itemToHide.contains(item) === false ) {
                    _hideAccordion(itemToHide);
                }
            }
        }
    }

    // Get item option(through html attributes)
    var _getItemOption = function(item, name) {
        var attr;
        var value = null;

        if ( item && item.hasAttribute('data-kt-menu-' + name) ) {
            attr = item.getAttribute('data-kt-menu-' + name);
            value = KTUtil.getResponsiveValue(attr);

            if ( value !== null && String(value) === 'true' ) {
                value = true;
            } else if ( value !== null && String(value) === 'false' ) {
                value = false;
            }
        }

        return value;
    }

    var _destroy = function() {
        KTUtil.data(the.element).remove('menu');
    }

    // Construct Class
    _construct();

    ///////////////////////
    // ** Public API  ** //
    ///////////////////////

    // Event Handlers
    the.click = function(element, e) {
        return _click(element, e);
    }

    the.link = function(element, e) {
        return _link(element, e);
    }

    the.dismiss = function(element, e) {
        return _dismiss(element, e);
    }

    the.mouseover = function(element, e) {
        return _mouseover(element, e);
    }

    the.mouseout = function(element, e) {
        return _mouseout(element, e);
    }

    // General Methods
    the.getItemTriggerType = function(item) {
        return _getItemOption(item, 'trigger');
    }

    the.getItemSubType = function(element) {
       return _getItemSubType(element);
    }

    the.show = function(item) {
        return _show(item);
    }

    the.hide = function(item) {
        return _hide(item);
    }

    the.reset = function(item) {
        return _reset(item);
    }

    the.update = function() {
        return _update();
    }

    the.getElement = function() {
        return the.element;
    }

    the.getItemLinkElement = function(item) {
        return _getItemLinkElement(item);
    }

    the.getItemToggleElement = function(item) {
        return _getItemToggleElement(item);
    }

    the.getItemSubElement = function(item) {
        return _getItemSubElement(item);
    }

    the.getItemParentElements = function(item) {
        return _getItemParentElements(item);
    }

    the.isItemSubShown = function(item) {
        return _isItemSubShown(item);
    }

    the.isItemParentShown = function(item) {
        return _isItemParentShown(item);
    }

    the.getTriggerElement = function() {
        return the.triggerElement;
    }

    the.isItemDropdownPermanent = function(item) {
        return _isItemDropdownPermanent(item);
    }

    the.destroy = function() {
        return _destroy();
    }

    // Accordion Mode Methods
    the.hideAccordions = function(item) {
        return _hideAccordions(item);
    }

    // Event API
    the.on = function(name, handler) {
        return KTEventHandler.on(the.element, name, handler);
    }

    the.one = function(name, handler) {
        return KTEventHandler.one(the.element, name, handler);
    }

    the.off = function(name) {
        return KTEventHandler.off(the.element, name);
    }
};

// Get KTMenu instance by element
KTMenu.getInstance = function(element) {
    var menu;
    var item;

    // Element has menu DOM reference in it's DATA storage
    if ( KTUtil.data(element).has('menu') ) {
        return KTUtil.data(element).get('menu');
    }

    // Element has .menu parent 
    if ( menu = element.closest('.menu') ) {
        if ( KTUtil.data(menu).has('menu') ) {
            return KTUtil.data(menu).get('menu');
        }
    }
    
    // Element has a parent with DOM reference to .menu in it's DATA storage
    if ( KTUtil.hasClass(element, 'menu-link') ) {
        var sub = element.closest('.menu-sub');

        if ( KTUtil.data(sub).has('menu') ) {
            return KTUtil.data(sub).get('menu');
        }
    } 

    return null;
}

// Hide all dropdowns and skip one if provided
KTMenu.hideDropdowns = function(skip) {
    var items = document.querySelectorAll('.show.menu-dropdown[data-kt-menu-trigger]');

    if (items && items.length > 0) {
        for (var i = 0, len = items.length; i < len; i++) {
            var item = items[i];
            var menu = KTMenu.getInstance(item);

            if ( menu && menu.getItemSubType(item) === 'dropdown' ) {
                if ( skip ) {
                    if ( menu.getItemSubElement(item).contains(skip) === false && item.contains(skip) === false &&  item !== skip ) {
                        menu.hide(item);
                    }
                } else {
                    menu.hide(item);
                }
            }
        }
    }
}

// Update all dropdowns popover instances
KTMenu.updateDropdowns = function() {
    var items = document.querySelectorAll('.show.menu-dropdown[data-kt-menu-trigger]');

    if (items && items.length > 0) {
        for (var i = 0, len = items.length; i < len; i++) {
            var item = items[i];

            if ( KTUtil.data(item).has('popper') ) {
                KTUtil.data(item).get('popper').forceUpdate();
            }
        }
    }
}

// Global handlers
KTMenu.initGlobalHandlers = function() {
    // Dropdown handler
    document.addEventListener("click", function(e) {
        var items = document.querySelectorAll('.show.menu-dropdown[data-kt-menu-trigger]');
        var menu;
        var item;
        var sub;
        var menuObj;

        if ( items && items.length > 0 ) {
            for ( var i = 0, len = items.length; i < len; i++ ) {
                item = items[i];
                menuObj = KTMenu.getInstance(item);

                if (menuObj && menuObj.getItemSubType(item) === 'dropdown') {
                    menu = menuObj.getElement();
                    sub = menuObj.getItemSubElement(item);

                    if ( item === e.target || item.contains(e.target) ) {
                        continue;
                    }
                    
                    if ( sub === e.target || sub.contains(e.target) ) {
                        continue;
                    }
                        
                    menuObj.hide(item);
                }
            }
        }
    });

    // Sub toggle handler(updated)
    KTUtil.on(document.body,  '.menu-item[data-kt-menu-trigger] > .menu-link, [data-kt-menu-trigger]:not(.menu-item):not([data-kt-menu-trigger="auto"])', 'click', function(e) {
        var menu = KTMenu.getInstance(this);

        if ( menu !== null ) {
            return menu.click(this, e);
        }
    });

    // Link handler
    KTUtil.on(document.body,  '.menu-item:not([data-kt-menu-trigger]) > .menu-link', 'click', function(e) {
        var menu = KTMenu.getInstance(this);

        if ( menu !== null ) {
            return menu.link(this, e);
        }
    });

    // Dismiss handler
    KTUtil.on(document.body,  '[data-kt-menu-dismiss="true"]', 'click', function(e) {
        var menu = KTMenu.getInstance(this);

        if ( menu !== null ) {
            return menu.dismiss(this, e);
        }
    });

    // Mouseover handler
    KTUtil.on(document.body,  '[data-kt-menu-trigger], .menu-sub', 'mouseover', function(e) {
        var menu = KTMenu.getInstance(this);

        if ( menu !== null && menu.getItemSubType(this) === 'dropdown' ) {
            return menu.mouseover(this, e);
        }
    });

    // Mouseout handler
    KTUtil.on(document.body,  '[data-kt-menu-trigger], .menu-sub', 'mouseout', function(e) {
        var menu = KTMenu.getInstance(this);

        if ( menu !== null && menu.getItemSubType(this) === 'dropdown' ) {
            return menu.mouseout(this, e);
        }
    });

    // Resize handler
    window.addEventListener('resize', function() {
        var menu;
        var timer;

        KTUtil.throttle(timer, function() {
            // Locate and update Offcanvas instances on window resize
            var elements = document.querySelectorAll('[data-kt-menu="true"]');

            if ( elements && elements.length > 0 ) {
                for (var i = 0, len = elements.length; i < len; i++) {
                    menu = KTMenu.getInstance(elements[i]);
                    if (menu) {
                        menu.update();
                    }
                }
            }
        }, 200);
    });
}

// Global instances
KTMenu.createInstances = function(selector = '[data-kt-menu="true"]') {
    // Initialize menus
    var elements = document.querySelectorAll(selector);
    if ( elements && elements.length > 0 ) {
        for (var i = 0, len = elements.length; i < len; i++) {
            new KTMenu(elements[i]);
        }
    }
}

// Global initialization
KTMenu.init = function() {
    // Global Event Handlers
    KTMenu.initGlobalHandlers();

    // Lazy Initialization
    KTMenu.createInstances();
};

// On document ready
if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', KTMenu.init);
} else {
   KTMenu.init();
}

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTMenu;
}


/***/ }),

/***/ "../src/js/components/password-meter.js":
/*!**********************************************!*\
  !*** ../src/js/components/password-meter.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


// Class definition
var KTPasswordMeter = function(element, options) {
    ////////////////////////////
    // ** Private variables  ** //
    ////////////////////////////
    var the = this;

    if (!element) {
        return;
    }

    // Default Options
    var defaultOptions = {
        minLength: 8,
        checkUppercase: true,        
        checkLowercase: true,
        checkDigit: true,
        checkChar: true,
        scoreHighlightClass: 'active'
    };

    ////////////////////////////
    // ** Private methods  ** //
    ////////////////////////////

    // Constructor
    var _construct = function() {
        if ( KTUtil.data(element).has('password-meter') === true ) {
            the = KTUtil.data(element).get('password-meter');
        } else {
            _init();
        }
    }

    // Initialize
    var _init = function() {
        // Variables
        the.options = KTUtil.deepExtend({}, defaultOptions, options);
        the.score = 0;
        the.checkSteps = 5;

        // Elements
        the.element = element;
        the.inputElement = the.element.querySelector('input[type]');
        the.visibilityElement = the.element.querySelector('[data-kt-password-meter-control="visibility"]');
        the.highlightElement = the.element.querySelector('[data-kt-password-meter-control="highlight"]'); 

        // Set initialized
        the.element.setAttribute('data-kt-password-meter', 'true');
        
        // Event Handlers
        _handlers();

        // Bind Instance
        KTUtil.data(the.element).set('password-meter', the);
    }

    // Handlers
    var _handlers = function() {
        the.inputElement.addEventListener('input', function() {
            _check();
        });

        if (the.visibilityElement) {
            the.visibilityElement.addEventListener('click', function() {
                _visibility();
            });
        }
    }   

    // Event handlers
    var _check = function() {
        var score = 0;
        var checkScore = _getCheckScore();
        
        if (_checkLength() === true) {
            score = score + checkScore;
        }

        if (the.options.checkUppercase === true && _checkLowercase() === true) {
            score = score + checkScore;
        }

        if (the.options.checkLowercase === true && _checkUppercase() === true ) {
            score = score + checkScore;
        }

        if (the.options.checkDigit === true && _checkDigit() === true ) {
            score = score + checkScore;
        }

        if (the.options.checkChar === true && _checkChar() === true ) {
            score = score + checkScore;
        }

        the.score = score;

        _highlight();
    }

    var _checkLength = function() {
        return the.inputElement.value.length >= the.options.minLength;  // 20 score
    }

    var _checkLowercase = function() {
        return /[a-z]/.test(the.inputElement.value);  // 20 score
    }

    var _checkUppercase = function() {
        return /[A-Z]/.test(the.inputElement.value);  // 20 score
    }

    var _checkDigit = function() {
        return /[0-9]/.test(the.inputElement.value);  // 20 score
    }

    var _checkChar = function() {
        return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(the.inputElement.value);  // 20 score
    }    

    var _getCheckScore = function() {
        var count = 1;
        
        if (the.options.checkUppercase === true) {
            count++;
        }

        if (the.options.checkLowercase === true) {
            count++;
        }

        if (the.options.checkDigit === true) {
            count++;
        }

        if (the.options.checkChar === true) {
            count++;
        }

        the.checkSteps = count;

        return 100 / the.checkSteps;
    }
    
    var _highlight = function() {
        var items = [].slice.call(the.highlightElement.querySelectorAll('div'));
        var total = items.length;
        var index = 0;
        var checkScore = _getCheckScore();
        var score = _getScore();

        items.map(function (item) {
            index++;

            if ( (checkScore * index * (the.checkSteps / total)) <= score ) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }            
        });
    }

    var _visibility = function() {
        var visibleIcon = the.visibilityElement.querySelector('i:not(.d-none), .svg-icon:not(.d-none)');
        var hiddenIcon = the.visibilityElement.querySelector('i.d-none, .svg-icon.d-none');
        
        if (the.inputElement.getAttribute('type').toLowerCase() === 'password' ) {
            the.inputElement.setAttribute('type', 'text');
        }  else {
            the.inputElement.setAttribute('type', 'password');
        }        

        visibleIcon.classList.add('d-none');
        hiddenIcon.classList.remove('d-none');

        the.inputElement.focus();
    }

    var _reset = function() {
        the.score = 0;

        _highlight();
    }

    // Gets current password score
    var _getScore = function() {
       return the.score;
    }

    var _destroy = function() {
        KTUtil.data(the.element).remove('password-meter');
    }

    // Construct class
    _construct();

    ///////////////////////
    // ** Public API  ** //
    ///////////////////////

    // Plugin API
    the.check = function() {
        return _check();
    }

    the.getScore = function() {
        return _getScore();
    }

    the.reset = function() {
        return _reset();
    }

    the.destroy = function() {
        return _destroy();
    }
};

// Static methods
KTPasswordMeter.getInstance = function(element) {
    if ( element !== null && KTUtil.data(element).has('password-meter') ) {
        return KTUtil.data(element).get('password-meter');
    } else {
        return null;
    }
}

// Create instances
KTPasswordMeter.createInstances = function(selector = '[data-kt-password-meter]') {
    // Get instances
    var elements = document.body.querySelectorAll(selector);

    if ( elements && elements.length > 0 ) {
        for (var i = 0, len = elements.length; i < len; i++) {
            // Initialize instances
            new KTPasswordMeter(elements[i]);
        }
    }
}

// Global initialization
KTPasswordMeter.init = function() {
    KTPasswordMeter.createInstances();
};

// On document ready
if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', KTPasswordMeter.init);
} else {
    KTPasswordMeter.init();
}

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTPasswordMeter;
}

/***/ }),

/***/ "../src/js/components/scroll.js":
/*!**************************************!*\
  !*** ../src/js/components/scroll.js ***!
  \**************************************/
/***/ ((module) => {

"use strict";


// Class definition
var KTScroll = function(element, options) {
    ////////////////////////////
    // ** Private Variables  ** //
    ////////////////////////////
    var the = this;
    var body = document.getElementsByTagName("BODY")[0];

    if (!element) {
        return;
    }

    // Default options
    var defaultOptions = {
        saveState: true
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var _construct = function() {
        if ( KTUtil.data(element).has('scroll') ) {
            the = KTUtil.data(element).get('scroll');
        } else {
            _init();
        }
    }

    var _init = function() {
        // Variables
        the.options = KTUtil.deepExtend({}, defaultOptions, options);

        // Elements
        the.element = element;        
        the.id = the.element.getAttribute('id');

        // Set initialized
        the.element.setAttribute('data-kt-scroll', 'true');

        // Update
        _update();

        // Bind Instance
        KTUtil.data(the.element).set('scroll', the);
    }

    var _setupHeight = function() {
        var heightType = _getHeightType();
        var height = _getHeight();

        // Set height
        if ( height !== null && height.length > 0 ) {
            KTUtil.css(the.element, heightType, height);
        } else {
            KTUtil.css(the.element, heightType, '');
        }
    }

    var _setupState = function () {
        if ( _getOption('save-state') === true && typeof KTCookie !== 'undefined' && the.id ) {
            if ( KTCookie.get(the.id + 'st') ) {
                var pos = parseInt(KTCookie.get(the.id + 'st'));

                if ( pos > 0 ) {
                    the.element.scrollTop = pos;
                }
            }
        }
    }

    var _setupScrollHandler = function() {
        if ( _getOption('save-state') === true && typeof KTCookie !== 'undefined' && the.id ) {
            the.element.addEventListener('scroll', _scrollHandler);
        } else {
            the.element.removeEventListener('scroll', _scrollHandler);
        }
    }

    var _destroyScrollHandler = function() {
        the.element.removeEventListener('scroll', _scrollHandler);
    }

    var _resetHeight = function() {
        KTUtil.css(the.element, _getHeightType(), '');
    }

    var _scrollHandler = function () {
        KTCookie.set(the.id + 'st', the.element.scrollTop);
    }

    var _update = function() {
        // Activate/deactivate
        if ( _getOption('activate') === true || the.element.hasAttribute('data-kt-scroll-activate') === false ) {
            _setupHeight();
            _setupScrollHandler();
            _setupState();
        } else {
            _resetHeight()
            _destroyScrollHandler();
        }        
    }

    var _getHeight = function() {
        var height = _getOption(_getHeightType());

        if ( height instanceof Function ) {
            return height.call();
        } else if ( height !== null && typeof height === 'string' && height.toLowerCase() === 'auto' ) {
            return _getAutoHeight();
        } else {
            return height;
        }
    }

    var _getAutoHeight = function() {
        var height = KTUtil.getViewPort().height;

        var dependencies = _getOption('dependencies');
        var wrappers = _getOption('wrappers');
        var offset = _getOption('offset');

        // Height dependencies
        if ( dependencies !== null ) {
            var elements = document.querySelectorAll(dependencies);

            if ( elements && elements.length > 0 ) {
                for ( var i = 0, len = elements.length; i < len; i++ ) {
                    var element = elements[i];

                    if ( KTUtil.visible(element) === false ) {
                        continue;
                    }

                    height = height - parseInt(KTUtil.css(element, 'height'));
                    height = height - parseInt(KTUtil.css(element, 'margin-top'));
                    height = height - parseInt(KTUtil.css(element, 'margin-bottom'));

                    if (KTUtil.css(element, 'border-top')) {
                        height = height - parseInt(KTUtil.css(element, 'border-top'));
                    }

                    if (KTUtil.css(element, 'border-bottom')) {
                        height = height - parseInt(KTUtil.css(element, 'border-bottom'));
                    }
                }
            }
        }

        // Wrappers
        if ( wrappers !== null ) {
            var elements = document.querySelectorAll(wrappers);
            if ( elements && elements.length > 0 ) {
                for ( var i = 0, len = elements.length; i < len; i++ ) {
                    var element = elements[i];

                    if ( KTUtil.visible(element) === false ) {
                        continue;
                    }

                    height = height - parseInt(KTUtil.css(element, 'margin-top'));
                    height = height - parseInt(KTUtil.css(element, 'margin-bottom'));
                    height = height - parseInt(KTUtil.css(element, 'padding-top'));
                    height = height - parseInt(KTUtil.css(element, 'padding-bottom'));

                    if (KTUtil.css(element, 'border-top')) {
                        height = height - parseInt(KTUtil.css(element, 'border-top'));
                    }

                    if (KTUtil.css(element, 'border-bottom')) {
                        height = height - parseInt(KTUtil.css(element, 'border-bottom'));
                    }
                }
            }
        }

        // Custom offset
        if ( offset !== null ) {
            height = height - parseInt(offset);
        }

        height = height - parseInt(KTUtil.css(the.element, 'margin-top'));
        height = height - parseInt(KTUtil.css(the.element, 'margin-bottom'));
        
        if (KTUtil.css(element, 'border-top')) {
            height = height - parseInt(KTUtil.css(element, 'border-top'));
        }

        if (KTUtil.css(element, 'border-bottom')) {
            height = height - parseInt(KTUtil.css(element, 'border-bottom'));
        }

        height = String(height) + 'px';

        return height;
    }

    var _getOption = function(name) {
        if ( the.element.hasAttribute('data-kt-scroll-' + name) === true ) {
            var attr = the.element.getAttribute('data-kt-scroll-' + name);

            var value = KTUtil.getResponsiveValue(attr);

            if ( value !== null && String(value) === 'true' ) {
                value = true;
            } else if ( value !== null && String(value) === 'false' ) {
                value = false;
            }

            return value;
        } else {
            var optionName = KTUtil.snakeToCamel(name);

            if ( the.options[optionName] ) {
                return KTUtil.getResponsiveValue(the.options[optionName]);
            } else {
                return null;
            }
        }
    }

    var _getHeightType = function() {
        if (_getOption('height')) {
            return 'height';
        } if (_getOption('min-height')) {
            return 'min-height';
        } if (_getOption('max-height')) {
            return 'max-height';
        }
    }

    var _destroy = function() {
        KTUtil.data(the.element).remove('scroll');
    }

    // Construct Class
    _construct();

    ///////////////////////
    // ** Public API  ** //
    ///////////////////////

    the.update = function() {
        return _update();
    }

    the.getHeight = function() {
        return _getHeight();
    }

    the.getElement = function() {
        return the.element;
    }

    the.destroy = function() {
        return _destroy();
    }
};

// Static methods
KTScroll.getInstance = function(element) {
    if ( element !== null && KTUtil.data(element).has('scroll') ) {
        return KTUtil.data(element).get('scroll');
    } else {
        return null;
    }
}

// Create instances
KTScroll.createInstances = function(selector = '[data-kt-scroll="true"]') {
    var body = document.getElementsByTagName("BODY")[0];

    // Initialize Menus
    var elements = body.querySelectorAll(selector);

    if ( elements && elements.length > 0 ) {
        for (var i = 0, len = elements.length; i < len; i++) {
            new KTScroll(elements[i]);
        }
    }
}

// Window resize handling
window.addEventListener('resize', function() {
    var timer;
    var body = document.getElementsByTagName("BODY")[0];

    KTUtil.throttle(timer, function() {
        // Locate and update Offcanvas instances on window resize
        var elements = body.querySelectorAll('[data-kt-scroll="true"]');

        if ( elements && elements.length > 0 ) {
            for (var i = 0, len = elements.length; i < len; i++) {
                var scroll = KTScroll.getInstance(elements[i]);
                if (scroll) {
                    scroll.update();
                }
            }
        }
    }, 200);
});

// Global initialization
KTScroll.init = function() {
    KTScroll.createInstances();
};

// On document ready
if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', KTScroll.init);
} else {
    KTScroll.init();
}

// Webpack Support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTScroll;
}


/***/ }),

/***/ "../src/js/components/scrolltop.js":
/*!*****************************************!*\
  !*** ../src/js/components/scrolltop.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


// Class definition
var KTScrolltop = function(element, options) {
    ////////////////////////////
    // ** Private variables  ** //
    ////////////////////////////
    var the = this;
    var body = document.getElementsByTagName("BODY")[0];

    if ( typeof element === "undefined" || element === null ) {
        return;
    }

    // Default options
    var defaultOptions = {
        offset: 300,
        speed: 600
    };

    ////////////////////////////
    // ** Private methods  ** //
    ////////////////////////////

    var _construct = function() {
        if (KTUtil.data(element).has('scrolltop')) {
            the = KTUtil.data(element).get('scrolltop');
        } else {
            _init();
        }
    }

    var _init = function() {
        // Variables
        the.options = KTUtil.deepExtend({}, defaultOptions, options);
        the.uid = KTUtil.getUniqueId('scrolltop');
        the.element = element;

        // Set initialized
        the.element.setAttribute('data-kt-scrolltop', 'true');

        // Event Handlers
        _handlers();

        // Bind Instance
        KTUtil.data(the.element).set('scrolltop', the);
    }

    var _handlers = function() {
        var timer;

        window.addEventListener('scroll', function() {
            KTUtil.throttle(timer, function() {
                _scroll();
            }, 200);
        });

        KTUtil.addEvent(the.element, 'click', function(e) {
            e.preventDefault();

            _go();
        });
    }

    var _scroll = function() {
        var offset = parseInt(_getOption('offset'));

        var pos = KTUtil.getScrollTop(); // current vertical position

        if ( pos > offset ) {
            if ( body.hasAttribute('data-kt-scrolltop') === false ) {
                body.setAttribute('data-kt-scrolltop', 'on');
            }
        } else {
            if ( body.hasAttribute('data-kt-scrolltop') === true ) {
                body.removeAttribute('data-kt-scrolltop');
            }
        }
    }

    var _go = function() {
        var speed = parseInt(_getOption('speed'));

        KTUtil.scrollTop(0, speed);
    }

    var _getOption = function(name) {
        if ( the.element.hasAttribute('data-kt-scrolltop-' + name) === true ) {
            var attr = the.element.getAttribute('data-kt-scrolltop-' + name);
            var value = KTUtil.getResponsiveValue(attr);

            if ( value !== null && String(value) === 'true' ) {
                value = true;
            } else if ( value !== null && String(value) === 'false' ) {
                value = false;
            }

            return value;
        } else {
            var optionName = KTUtil.snakeToCamel(name);

            if ( the.options[optionName] ) {
                return KTUtil.getResponsiveValue(the.options[optionName]);
            } else {
                return null;
            }
        }
    }

    var _destroy = function() {
        KTUtil.data(the.element).remove('scrolltop');
    }

    // Construct class
    _construct();

    ///////////////////////
    // ** Public API  ** //
    ///////////////////////

    // Plugin API
    the.go = function() {
        return _go();
    }

    the.getElement = function() {
        return the.element;
    }

    the.destroy = function() {
        return _destroy();
    }
};

// Static methods
KTScrolltop.getInstance = function(element) {
    if (element && KTUtil.data(element).has('scrolltop')) {
        return KTUtil.data(element).get('scrolltop');
    } else {
        return null;
    }
}

// Create instances
KTScrolltop.createInstances = function(selector = '[data-kt-scrolltop="true"]') {
    var body = document.getElementsByTagName("BODY")[0];

    // Initialize Menus
    var elements = body.querySelectorAll(selector);
    var scrolltop;

    if ( elements && elements.length > 0 ) {
        for (var i = 0, len = elements.length; i < len; i++) {
            scrolltop = new KTScrolltop(elements[i]);
        }
    }
}

// Global initialization
KTScrolltop.init = function() {
    KTScrolltop.createInstances();
};

// On document ready
if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', KTScrolltop.init);
} else {
    KTScrolltop.init();
}

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTScrolltop;
}


/***/ }),

/***/ "../src/js/components/search.js":
/*!**************************************!*\
  !*** ../src/js/components/search.js ***!
  \**************************************/
/***/ ((module) => {

"use strict";


// Class definition
var KTSearch = function(element, options) {
    ////////////////////////////
    // ** Private variables  ** //
    ////////////////////////////
    var the = this;

    if (!element) {
        return;
    }

    // Default Options
    var defaultOptions = {
        minLength: 2,  // Miniam text lenght to query search
        keypress: true,  // Enable search on keypress 
        enter: true,  // Enable search on enter key press
        layout: 'menu',  // Use 'menu' or 'inline' layout options to display search results
        responsive: null, // Pass integer value or bootstrap compatible breakpoint key(sm,md,lg,xl,xxl) to enable reponsive form mode for device width below the breakpoint value
        showOnFocus: true // Always show menu on input focus
    };

    ////////////////////////////
    // ** Private methods  ** //
    ////////////////////////////

    // Construct
    var _construct = function() {
        if ( KTUtil.data(element).has('search') === true ) {
            the = KTUtil.data(element).get('search');
        } else {
            _init();
        }
    }

    // Init
    var _init = function() {
        // Variables
        the.options = KTUtil.deepExtend({}, defaultOptions, options);
        the.processing = false;

        // Elements
        the.element = element;               
        the.contentElement = _getElement('content');     
        the.formElement = _getElement('form');         
        the.inputElement = _getElement('input');
        the.spinnerElement = _getElement('spinner');
        the.clearElement = _getElement('clear');
        the.toggleElement = _getElement('toggle');   
        the.submitElement = _getElement('submit');
        the.toolbarElement = _getElement('toolbar');   

        the.resultsElement = _getElement('results');
        the.suggestionElement = _getElement('suggestion'); 
        the.emptyElement = _getElement('empty'); 

        // Set initialized
        the.element.setAttribute('data-kt-search', 'true');
        
        // Layout
        the.layout = _getOption('layout');
        
        // Menu
        if ( the.layout === 'menu' ) {
            the.menuObject = new KTMenu(the.contentElement);
        } else {
            the.menuObject = null;
        }

        // Update
        _update();

        // Event Handlers
        _handlers();

        // Bind Instance
        KTUtil.data(the.element).set('search', the);
    }

    // Handlera
    var _handlers = function() {
        // Focus
        the.inputElement.addEventListener('focus', _focus);

        // Blur
        the.inputElement.addEventListener('blur', _blur);

        // Keypress
        if ( _getOption('keypress') === true ) {
            the.inputElement.addEventListener('input', _input);
        }

        // Submit
        if ( the.submitElement ) {
            the.submitElement.addEventListener('click', _search);
        }

        // Enter
        if ( _getOption('enter') === true ) {
            the.inputElement.addEventListener('keypress', _enter);
        }

        // Clear 
        if ( the.clearElement ) {
            the.clearElement.addEventListener('click', _clear);
        }

        // Menu
        if ( the.menuObject ) {
            // Toggle menu
            if ( the.toggleElement ) {
                the.toggleElement.addEventListener('click', _show);

                the.menuObject.on('kt.menu.dropdown.show', function(item) {
                    if (KTUtil.visible(the.toggleElement)) {
                        the.toggleElement.classList.add('active');
                        the.toggleElement.classList.add('show');
                    } 
                });
    
                the.menuObject.on('kt.menu.dropdown.hide', function(item) {
                    if (KTUtil.visible(the.toggleElement)) {
                        the.toggleElement.classList.remove('active');
                        the.toggleElement.classList.remove('show');
                    }
                });
            }            

            the.menuObject.on('kt.menu.dropdown.shown', function() {
                the.inputElement.focus();
            });
        } 

        // Window resize handling
        window.addEventListener('resize', function() {
            var timer;

            KTUtil.throttle(timer, function() {
                _update();
            }, 200);
        });
    }

    // Focus
    var _focus = function() {
        the.element.classList.add('focus');

        if ( _getOption('show-on-focus') === true || the.inputElement.value.length >= minLength ) {
            _show();
        }        
    }

    // Blur
    var _blur = function() {        
        the.element.classList.remove('focus');
    }

    // Enter 
    var _enter = function(e) {
        var key = e.charCode || e.keyCode || 0;

        if (key == 13) {
            e.preventDefault();

            _search();
        }
    }

    // Input
    var _input = function() {
        if ( _getOption('min-length') )  {
            var minLength = parseInt(_getOption('min-length'));

            if ( the.inputElement.value.length >= minLength ) {
                _search();
            } else if ( the.inputElement.value.length === 0 ) {
                _clear();
            }
        }
    }

    // Search
    var _search = function() {
        if (the.processing === false) {
            // Show search spinner
            if (the.spinnerElement) {
                the.spinnerElement.classList.remove("d-none");
            }
            
            // Hide search clear button
            if (the.clearElement) {
                the.clearElement.classList.add("d-none");
            }

            // Hide search toolbar
            if (the.toolbarElement && the.formElement.contains(the.toolbarElement)) {
                the.toolbarElement.classList.add("d-none");
            }

            // Focus input
            the.inputElement.focus();

            the.processing = true;
            KTEventHandler.trigger(the.element, 'kt.search.process', the);
        }
    }

    // Complete
    var _complete = function() {
        if (the.spinnerElement) {
            the.spinnerElement.classList.add("d-none");
        }

        // Show search toolbar
        if (the.clearElement) {
            the.clearElement.classList.remove("d-none");
        }

        if ( the.inputElement.value.length === 0 ) {
            _clear();
        }

        // Focus input
        the.inputElement.focus();

        _show();

        the.processing = false;
    }

    // Clear
    var _clear = function() {
        if ( KTEventHandler.trigger(the.element, 'kt.search.clear', the) === false )  {
            return;
        }

        // Clear and focus input
        the.inputElement.value = "";
        the.inputElement.focus();

        // Hide clear icon
        if (the.clearElement) {
            the.clearElement.classList.add("d-none");
        }

        // Show search toolbar
        if (the.toolbarElement && the.formElement.contains(the.toolbarElement)) {
            the.toolbarElement.classList.remove("d-none");
        }

        // Hide menu
        if ( _getOption('show-on-focus') === false ) {
            _hide();
        }

        KTEventHandler.trigger(the.element, 'kt.search.cleared', the);
    }

    // Update
    var _update = function() {
        // Handle responsive form
        if (the.layout === 'menu') {
            var responsiveFormMode = _getResponsiveFormMode();

            if ( responsiveFormMode === 'on' && the.contentElement.contains(the.formElement) === false ) {
                the.contentElement.prepend(the.formElement);
                the.formElement.classList.remove('d-none');                
            } else if ( responsiveFormMode === 'off' && the.contentElement.contains(the.formElement) === true ) {
                the.element.prepend(the.formElement);
                the.formElement.classList.add('d-none');
            }
        }
    }

    // Show menu
    var _show = function() {
        if ( the.menuObject ) {
            _update();

            the.menuObject.show(the.element);
        }
    }

    // Hide menu
    var _hide = function() {
        if ( the.menuObject ) {
            _update();

            the.menuObject.hide(the.element);
        }
    }

    // Get option
    var _getOption = function(name) {
        if ( the.element.hasAttribute('data-kt-search-' + name) === true ) {
            var attr = the.element.getAttribute('data-kt-search-' + name);
            var value = KTUtil.getResponsiveValue(attr);

            if ( value !== null && String(value) === 'true' ) {
                value = true;
            } else if ( value !== null && String(value) === 'false' ) {
                value = false;
            }

            return value;
        } else {
            var optionName = KTUtil.snakeToCamel(name);

            if ( the.options[optionName] ) {
                return KTUtil.getResponsiveValue(the.options[optionName]);
            } else {
                return null;
            }
        }
    }

    // Get element
    var _getElement = function(name) {
        return the.element.querySelector('[data-kt-search-element="' + name + '"]');
    }

    // Check if responsive form mode is enabled
    var _getResponsiveFormMode = function() {
        var responsive = _getOption('responsive');
        var width = KTUtil.getViewPort().width;

        if (!responsive) {
            return null;
        }

        var breakpoint = KTUtil.getBreakpoint(responsive);

        if (!breakpoint ) {
            breakpoint = parseInt(responsive);
        }

        if (width < breakpoint) {
            return "on";
        } else {
            return "off";
        }
    }

    var _destroy = function() {
        KTUtil.data(the.element).remove('search');
    }    

    // Construct class
    _construct();

    ///////////////////////
    // ** Public API  ** //
    ///////////////////////

    // Plugin API
    the.show = function() {
        return _show();
    }

    the.hide = function() {
        return _hide();
    }

    the.update = function() {
        return _update();
    }

    the.search = function() {
        return _search();
    }

    the.complete = function() {
        return _complete();
    }

    the.clear = function() {
        return _clear();
    }

    the.isProcessing = function() {
        return the.processing;
    }

    the.getQuery = function() {
        return the.inputElement.value;
    }    

    the.getMenu = function() {
        return the.menuObject;
    }

    the.getFormElement = function() {
        return the.formElement;
    }

    the.getInputElement = function() {
        return the.inputElement;
    }

    the.getContentElement = function() {
        return the.contentElement;
    }

    the.getElement = function() {
        return the.element;
    }

    the.destroy = function() {
        return _destroy();
    }

    // Event API
    the.on = function(name, handler) {
        return KTEventHandler.on(the.element, name, handler);
    }

    the.one = function(name, handler) {
        return KTEventHandler.one(the.element, name, handler);
    }

    the.off = function(name) {
        return KTEventHandler.off(the.element, name);
    }
};

// Static methods
KTSearch.getInstance = function(element) {
    if ( element !== null && KTUtil.data(element).has('search') ) {
        return KTUtil.data(element).get('search');
    } else {
        return null;
    }
}

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTSearch;
}


/***/ }),

/***/ "../src/js/components/stepper.js":
/*!***************************************!*\
  !*** ../src/js/components/stepper.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";


// Class definition
var KTStepper = function(element, options) {
    //////////////////////////////
    // ** Private variables  ** //
    //////////////////////////////
    var the = this;
    var body = document.getElementsByTagName("BODY")[0];

    if ( typeof element === "undefined" || element === null ) {
        return;
    }

    // Default Options
    var defaultOptions = {
        startIndex: 1,
        animation: false,
        animationSpeed: '0.3s',
        animationNextClass: 'animate__animated animate__slideInRight animate__fast',
        animationPreviousClass: 'animate__animated animate__slideInLeft animate__fast'
    };

    ////////////////////////////
    // ** Private methods  ** //
    ////////////////////////////

    var _construct = function() {
        if ( KTUtil.data(element).has('stepper') === true ) {
            the = KTUtil.data(element).get('stepper');
        } else {
            _init();
        }
    }

    var _init = function() {
        the.options = KTUtil.deepExtend({}, defaultOptions, options);
        the.uid = KTUtil.getUniqueId('stepper');

        the.element = element;

        // Set initialized
        the.element.setAttribute('data-kt-stepper', 'true');

        // Elements
        the.steps = KTUtil.findAll(the.element, '[data-kt-stepper-element="nav"]');
        the.btnNext = KTUtil.find(the.element, '[data-kt-stepper-action="next"]');
        the.btnPrevious = KTUtil.find(the.element, '[data-kt-stepper-action="previous"]');
        the.btnSubmit = KTUtil.find(the.element, '[data-kt-stepper-action="submit"]');

        // Variables
        the.totalStepsNumber = the.steps.length;
        the.passedStepIndex = 0;
        the.currentStepIndex = 1;
        the.clickedStepIndex = 0;

        // Set Current Step
        if ( the.options.startIndex > 1 ) {
            _goTo(the.options.startIndex);
        }

        // Event Handlers
        KTUtil.addEvent(the.btnNext, 'click', function(e) {
            e.preventDefault();

            KTEventHandler.trigger(the.element, 'kt.stepper.next', the);
        });

        KTUtil.addEvent(the.btnPrevious, 'click', function(e) {
            e.preventDefault();

            KTEventHandler.trigger(the.element, 'kt.stepper.previous', the);
        });

        KTUtil.on(the.element, '[data-kt-stepper-action="step"]', 'click', function(e) {
            e.preventDefault();

            if ( the.steps && the.steps.length > 0 ) {
                for (var i = 0, len = the.steps.length; i < len; i++) {
                    if ( the.steps[i] === this ) {
                        the.clickedStepIndex = i + 1;

                        KTEventHandler.trigger(the.element, 'kt.stepper.click', the);

                        return;
                    }
                }
            }
        });

        // Bind Instance
        KTUtil.data(the.element).set('stepper', the);
    }

    var _goTo = function(index) {
        // Trigger "change" event
        KTEventHandler.trigger(the.element, 'kt.stepper.change', the);

        // Skip if this step is already shown
        if ( index === the.currentStepIndex || index > the.totalStepsNumber || index < 0 ) {
            return;
        }

        // Validate step number
        index = parseInt(index);

        // Set current step
        the.passedStepIndex = the.currentStepIndex;
        the.currentStepIndex = index;

        // Refresh elements
        _refreshUI();

        // Trigger "changed" event
        KTEventHandler.trigger(the.element, 'kt.stepper.changed', the);

        return the;
    }

    var _goNext = function() {
        return _goTo( _getNextStepIndex() );
    }

    var _goPrevious = function() {
        return _goTo( _getPreviousStepIndex() );
    }

    var _goLast = function() {
        return _goTo( _getLastStepIndex() );
    }

    var _goFirst = function() {
        return _goTo( _getFirstStepIndex() );
    }

    var _refreshUI = function() {
        var state = '';

        if ( _isLastStep() ) {
            state = 'last';
        } else if ( _isFirstStep() ) {
            state = 'first';
        } else {
            state = 'between';
        }

        // Set state class
        KTUtil.removeClass(the.element, 'last');
        KTUtil.removeClass(the.element, 'first');
        KTUtil.removeClass(the.element, 'between');

        KTUtil.addClass(the.element, state);

        // Step Items
        var elements = KTUtil.findAll(the.element, '[data-kt-stepper-element="nav"], [data-kt-stepper-element="content"], [data-kt-stepper-element="info"]');

        if ( elements && elements.length > 0 ) {
            for (var i = 0, len = elements.length; i < len; i++) {
                var element = elements[i];
                var index = KTUtil.index(element) + 1;

                KTUtil.removeClass(element, 'current');
                KTUtil.removeClass(element, 'completed');
                KTUtil.removeClass(element, 'pending');

                if ( index == the.currentStepIndex ) {
                    KTUtil.addClass(element, 'current');

                    if ( the.options.animation !== false && element.getAttribute('data-kt-stepper-element') == 'content' ) {
                        KTUtil.css(element, 'animationDuration', the.options.animationSpeed);

                        var animation = _getStepDirection(the.passedStepIndex) === 'previous' ?  the.options.animationPreviousClass : the.options.animationNextClass;
                        KTUtil.animateClass(element, animation);
                    }
                } else {
                    if ( index < the.currentStepIndex ) {
                        KTUtil.addClass(element, 'completed');
                    } else {
                        KTUtil.addClass(element, 'pending');
                    }
                }
            }
        }
    }

    var _isLastStep = function() {
        return the.currentStepIndex === the.totalStepsNumber;
    }

    var _isFirstStep = function() {
        return the.currentStepIndex === 1;
    }

    var _isBetweenStep = function() {
        return _isLastStep() === false && _isFirstStep() === false;
    }

    var _getNextStepIndex = function() {
        if ( the.totalStepsNumber >= ( the.currentStepIndex + 1 ) ) {
            return the.currentStepIndex + 1;
        } else {
            return the.totalStepsNumber;
        }
    }

    var _getPreviousStepIndex = function() {
        if ( ( the.currentStepIndex - 1 ) > 1 ) {
            return the.currentStepIndex - 1;
        } else {
            return 1;
        }
    }

    var _getFirstStepIndex = function(){
        return 1;
    }

    var _getLastStepIndex = function() {
        return the.totalStepsNumber;
    }

    var _getTotalStepsNumber = function() {
        return the.totalStepsNumber;
    }

    var _getStepDirection = function(index) {
        if ( index > the.currentStepIndex ) {
            return 'next';
        } else {
            return 'previous';
        }
    }

    var _getStepContent = function(index) {
        var content = KTUtil.findAll(the.element, '[data-kt-stepper-element="content"]');

        if ( content[index-1] ) {
            return content[index-1];
        } else {
            return false;
        }
    }

    var _destroy = function() {
        KTUtil.data(the.element).remove('stepper');
    }

    // Construct Class
    _construct();

    ///////////////////////
    // ** Public API  ** //
    ///////////////////////

    // Plugin API
    the.getElement = function(index) {
        return the.element;
    }

    the.goTo = function(index) {
        return _goTo(index);
    }

    the.goPrevious = function() {
        return _goPrevious();
    }

    the.goNext = function() {
        return _goNext();
    }

    the.goFirst = function() {
        return _goFirst();
    }

    the.goLast = function() {
        return _goLast();
    }

    the.getCurrentStepIndex = function() {
        return the.currentStepIndex;
    }

    the.getNextStepIndex = function() {
        return the.nextStepIndex;
    }

    the.getPassedStepIndex = function() {
        return the.passedStepIndex;
    }

    the.getClickedStepIndex = function() {
        return the.clickedStepIndex;
    }

    the.getPreviousStepIndex = function() {
        return the.PreviousStepIndex;
    }

    the.destroy = function() {
        return _destroy();
    }

    // Event API
    the.on = function(name, handler) {
        return KTEventHandler.on(the.element, name, handler);
    }

    the.one = function(name, handler) {
        return KTEventHandler.one(the.element, name, handler);
    }

    the.off = function(name) {
        return KTEventHandler.off(the.element, name);
    }

    the.trigger = function(name, event) {
        return KTEventHandler.trigger(the.element, name, event, the, event);
    }
};

// Static methods
KTStepper.getInstance = function(element) {
    if ( element !== null && KTUtil.data(element).has('stepper') ) {
        return KTUtil.data(element).get('stepper');
    } else {
        return null;
    }
}

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTStepper;
}


/***/ }),

/***/ "../src/js/components/sticky.js":
/*!**************************************!*\
  !*** ../src/js/components/sticky.js ***!
  \**************************************/
/***/ ((module) => {

"use strict";


// Class definition
var KTSticky = function(element, options) {
    ////////////////////////////
    // ** Private Variables  ** //
    ////////////////////////////
    var the = this;
    var body = document.getElementsByTagName("BODY")[0];

    if ( typeof element === "undefined" || element === null ) {
        return;
    }

    // Default Options
    var defaultOptions = {
        offset: 200,
        releaseOffset: 0,
        reverse: false,
        animation: true,
        animationSpeed: '0.3s',
        animationClass: 'animation-slide-in-down'
    };
    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var _construct = function() {
        if ( KTUtil.data(element).has('sticky') === true ) {
            the = KTUtil.data(element).get('sticky');
        } else {
            _init();
        }
    }

    var _init = function() {
        the.element = element;
        the.options = KTUtil.deepExtend({}, defaultOptions, options);
        the.uid = KTUtil.getUniqueId('sticky');
        the.name = the.element.getAttribute('data-kt-sticky-name');
        the.attributeName = 'data-kt-sticky-' + the.name;
        the.eventTriggerState = true;
        the.lastScrollTop = 0;
        the.scrollHandler;

        // Set initialized
        the.element.setAttribute('data-kt-sticky', 'true');

        // Event Handlers
        window.addEventListener('scroll', _scroll);

        // Initial Launch
        _scroll();

        // Bind Instance
        KTUtil.data(the.element).set('sticky', the);
    }

    var _scroll = function(e) {
        var offset = _getOption('offset');
        var releaseOffset = _getOption('release-offset');
        var reverse = _getOption('reverse');
        var st;
        var attrName;
        var diff;

        // Exit if false
        if ( offset === false ) {
            return;
        }

        offset = parseInt(offset);
        releaseOffset = releaseOffset ? parseInt(releaseOffset) : 0;
        st = KTUtil.getScrollTop();
        diff = document.documentElement.scrollHeight - window.innerHeight - KTUtil.getScrollTop();

        if ( reverse === true ) {  // Release on reverse scroll mode
            if ( st > offset && (releaseOffset === 0 || releaseOffset < diff)) {
                if ( body.hasAttribute(the.attributeName) === false) {
                    _enable();
                    body.setAttribute(the.attributeName, 'on');
                }

                if ( the.eventTriggerState === true ) {
                    KTEventHandler.trigger(the.element, 'kt.sticky.on', the);
                    KTEventHandler.trigger(the.element, 'kt.sticky.change', the);

                    the.eventTriggerState = false;
                }
            } else { // Back scroll mode
                if ( body.hasAttribute(the.attributeName) === true) {
                    _disable();
                    body.removeAttribute(the.attributeName);
                }

                if ( the.eventTriggerState === false ) {
                    KTEventHandler.trigger(the.element, 'kt.sticky.off', the);
                    KTEventHandler.trigger(the.element, 'kt.sticky.change', the);
                    the.eventTriggerState = true;
                }
            }

            the.lastScrollTop = st;
        } else { // Classic scroll mode
            if ( st > offset && (releaseOffset === 0 || releaseOffset < diff)) {
                if ( body.hasAttribute(the.attributeName) === false) {
                    _enable();
                    body.setAttribute(the.attributeName, 'on');
                }

                if ( the.eventTriggerState === true ) {
                    KTEventHandler.trigger(the.element, 'kt.sticky.on', the);
                    KTEventHandler.trigger(the.element, 'kt.sticky.change', the);
                    the.eventTriggerState = false;
                }
            } else { // back scroll mode
                if ( body.hasAttribute(the.attributeName) === true ) {
                    _disable();
                    body.removeAttribute(the.attributeName);
                }

                if ( the.eventTriggerState === false ) {
                    KTEventHandler.trigger(the.element, 'kt.sticky.off', the);
                    KTEventHandler.trigger(the.element, 'kt.sticky.change', the);
                    the.eventTriggerState = true;
                }
            }
        }

        if (releaseOffset > 0) {
            if ( diff < releaseOffset ) {
                the.element.setAttribute('data-kt-sticky-released', 'true');
            } else {
                the.element.removeAttribute('data-kt-sticky-released');
            }
        }        
    }

    var _enable = function(update) {
        var top = _getOption('top');
        var left = _getOption('left');
        var right = _getOption('right');
        var width = _getOption('width');
        var zindex = _getOption('zindex');

        if ( update !== true && _getOption('animation') === true ) {
            KTUtil.css(the.element, 'animationDuration', _getOption('animationSpeed'));
            KTUtil.animateClass(the.element, 'animation ' + _getOption('animationClass'));
        }

        if ( zindex !== null ) {
            KTUtil.css(the.element, 'z-index', zindex);
            KTUtil.css(the.element, 'position', 'fixed');
        }

        if ( top !== null ) {
            KTUtil.css(the.element, 'top', top);
        }

        if ( width !== null ) {
            if (width['target']) {
                var targetElement = document.querySelector(width['target']);
                if (targetElement) {
                    width = KTUtil.css(targetElement, 'width');
                }
            }

            KTUtil.css(the.element, 'width', width);
        }

        if ( left !== null ) {
            if ( String(left).toLowerCase() === 'auto' ) {
                var offsetLeft = KTUtil.offset(the.element).left;

                if ( offsetLeft > 0 ) {
                    KTUtil.css(the.element, 'left', String(offsetLeft) + 'px');
                }
            }
        }
    }

    var _disable = function() {
        KTUtil.css(the.element, 'top', '');
        KTUtil.css(the.element, 'width', '');
        KTUtil.css(the.element, 'left', '');
        KTUtil.css(the.element, 'right', '');
        KTUtil.css(the.element, 'z-index', '');
        KTUtil.css(the.element, 'position', '');
    }

    var _getOption = function(name) {
        if ( the.element.hasAttribute('data-kt-sticky-' + name) === true ) {
            var attr = the.element.getAttribute('data-kt-sticky-' + name);
            var value = KTUtil.getResponsiveValue(attr);

            if ( value !== null && String(value) === 'true' ) {
                value = true;
            } else if ( value !== null && String(value) === 'false' ) {
                value = false;
            }

            return value;
        } else {
            var optionName = KTUtil.snakeToCamel(name);

            if ( the.options[optionName] ) {
                return KTUtil.getResponsiveValue(the.options[optionName]);
            } else {
                return null;
            }
        }
    }

    var _destroy = function() {
        window.removeEventListener('scroll', _scroll);
        KTUtil.data(the.element).remove('sticky');
    }

    // Construct Class
    _construct();

    ///////////////////////
    // ** Public API  ** //
    ///////////////////////

    // Methods
    the.update = function() {
        if ( body.hasAttribute(the.attributeName) === true ) {
            _disable();
            body.removeAttribute(the.attributeName);
            _enable(true);
            body.setAttribute(the.attributeName, 'on');
        }
    }

    the.destroy = function() {
        return _destroy();
    }

    // Event API
    the.on = function(name, handler) {
        return KTEventHandler.on(the.element, name, handler);
    }

    the.one = function(name, handler) {
        return KTEventHandler.one(the.element, name, handler);
    }

    the.off = function(name) {
        return KTEventHandler.off(the.element, name);
    }

    the.trigger = function(name, event) {
        return KTEventHandler.trigger(the.element, name, event, the, event);
    }
};

// Static methods
KTSticky.getInstance = function(element) {
    if ( element !== null && KTUtil.data(element).has('sticky') ) {
        return KTUtil.data(element).get('sticky');
    } else {
        return null;
    }
}

// Create instances
KTSticky.createInstances = function(selector = '[data-kt-sticky="true"]') {
    var body = document.getElementsByTagName("BODY")[0];

    // Initialize Menus
    var elements = body.querySelectorAll(selector);
    var sticky;

    if ( elements && elements.length > 0 ) {
        for (var i = 0, len = elements.length; i < len; i++) {
            sticky = new KTSticky(elements[i]);
        }
    }
}

// Window resize handler
window.addEventListener('resize', function() {
    var timer;
    var body = document.getElementsByTagName("BODY")[0];

    KTUtil.throttle(timer, function() {
        // Locate and update Offcanvas instances on window resize
        var elements = body.querySelectorAll('[data-kt-sticky="true"]');

        if ( elements && elements.length > 0 ) {
            for (var i = 0, len = elements.length; i < len; i++) {
                var sticky = KTSticky.getInstance(elements[i]);
                if (sticky) {
                    sticky.update();
                }
            }
        }
    }, 200);
});

// Global initialization
KTSticky.init = function() {
    KTSticky.createInstances();
};

// On document ready
if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', KTSticky.init);
} else {
    KTSticky.init();
}

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTSticky;
}


/***/ }),

/***/ "../src/js/components/swapper.js":
/*!***************************************!*\
  !*** ../src/js/components/swapper.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";


// Class definition
var KTSwapper = function(element, options) {
    ////////////////////////////
    // ** Private Variables  ** //
    ////////////////////////////
    var the = this;

    if ( typeof element === "undefined" || element === null ) {
        return;
    }

    // Default Options
    var defaultOptions = {
        mode: 'append'
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var _construct = function() {
        if ( KTUtil.data(element).has('swapper') === true ) {
            the = KTUtil.data(element).get('swapper');
        } else {
            _init();
        }
    }

    var _init = function() {
        the.element = element;
        the.options = KTUtil.deepExtend({}, defaultOptions, options);

        // Set initialized
        the.element.setAttribute('data-kt-swapper', 'true');

        // Initial update
        _update();

        // Bind Instance
        KTUtil.data(the.element).set('swapper', the);
    }

    var _update = function(e) {
        var parentSelector = _getOption('parent');

        var mode = _getOption('mode');
        var parentElement = parentSelector ? document.querySelector(parentSelector) : null;
       

        if (parentElement && element.parentNode !== parentElement) {
            if (mode === 'prepend') {
                parentElement.prepend(element);
            } else if (mode === 'append') {
                parentElement.append(element);
            }
        }
    }

    var _getOption = function(name) {
        if ( the.element.hasAttribute('data-kt-swapper-' + name) === true ) {
            var attr = the.element.getAttribute('data-kt-swapper-' + name);
            var value = KTUtil.getResponsiveValue(attr);

            if ( value !== null && String(value) === 'true' ) {
                value = true;
            } else if ( value !== null && String(value) === 'false' ) {
                value = false;
            }

            return value;
        } else {
            var optionName = KTUtil.snakeToCamel(name);

            if ( the.options[optionName] ) {
                return KTUtil.getResponsiveValue(the.options[optionName]);
            } else {
                return null;
            }
        }
    }

    var _destroy = function() {
        KTUtil.data(the.element).remove('swapper');
    }

    // Construct Class
    _construct();

    ///////////////////////
    // ** Public API  ** //
    ///////////////////////

    // Methods
    the.update = function() {
        _update();
    }

    the.destroy = function() {
        return _destroy();
    }

    // Event API
    the.on = function(name, handler) {
        return KTEventHandler.on(the.element, name, handler);
    }

    the.one = function(name, handler) {
        return KTEventHandler.one(the.element, name, handler);
    }

    the.off = function(name) {
        return KTEventHandler.off(the.element, name);
    }

    the.trigger = function(name, event) {
        return KTEventHandler.trigger(the.element, name, event, the, event);
    }
};

// Static methods
KTSwapper.getInstance = function(element) {
    if ( element !== null && KTUtil.data(element).has('swapper') ) {
        return KTUtil.data(element).get('swapper');
    } else {
        return null;
    }
}

// Create instances
KTSwapper.createInstances = function(selector = '[data-kt-swapper="true"]') {
    // Initialize Menus
    var elements = document.querySelectorAll(selector);
    var swapper;

    if ( elements && elements.length > 0 ) {
        for (var i = 0, len = elements.length; i < len; i++) {
            swapper = new KTSwapper(elements[i]);
        }
    }
}

// Window resize handler
window.addEventListener('resize', function() {
    var timer;

    KTUtil.throttle(timer, function() {
        // Locate and update Offcanvas instances on window resize
        var elements = document.querySelectorAll('[data-kt-swapper="true"]');

        if ( elements && elements.length > 0 ) {
            for (var i = 0, len = elements.length; i < len; i++) {
                var swapper = KTSwapper.getInstance(elements[i]);
                if (swapper) {
                    swapper.update();
                }                
            }
        }
    }, 200);
});

// Global initialization
KTSwapper.init = function() {
    KTSwapper.createInstances();
};

// On document ready
if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', KTSwapper.init);
} else {
    KTSwapper.init();
}

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTSwapper;
}


/***/ }),

/***/ "../src/js/components/toggle.js":
/*!**************************************!*\
  !*** ../src/js/components/toggle.js ***!
  \**************************************/
/***/ ((module) => {

"use strict";


// Class definition
var KTToggle = function(element, options) {
    ////////////////////////////
    // ** Private variables  ** //
    ////////////////////////////
    var the = this;
    var body = document.getElementsByTagName("BODY")[0];

    if (!element) {
        return;
    }

    // Default Options
    var defaultOptions = {
        saveState: true
    };

    ////////////////////////////
    // ** Private methods  ** //
    ////////////////////////////

    var _construct = function() {
        if ( KTUtil.data(element).has('toggle') === true ) {
            the = KTUtil.data(element).get('toggle');
        } else {
            _init();
        }
    }

    var _init = function() {
        // Variables
        the.options = KTUtil.deepExtend({}, defaultOptions, options);
        the.uid = KTUtil.getUniqueId('toggle');

        // Elements
        the.element = element;

        the.target = document.querySelector(the.element.getAttribute('data-kt-toggle-target')) ? document.querySelector(the.element.getAttribute('data-kt-toggle-target')) : the.element;
        the.state = the.element.hasAttribute('data-kt-toggle-state') ? the.element.getAttribute('data-kt-toggle-state') : '';
        the.attribute = 'data-kt-' + the.element.getAttribute('data-kt-toggle-name');

        // Event Handlers
        _handlers();

        // Bind Instance
        KTUtil.data(the.element).set('toggle', the);
    }

    var _handlers = function() {
        KTUtil.addEvent(the.element, 'click', function(e) {
            e.preventDefault();

            _toggle();
        });
    }

    // Event handlers
    var _toggle = function() {
        // Trigger "after.toggle" event
        KTEventHandler.trigger(the.element, 'kt.toggle.change', the);

        if ( _isEnabled() ) {
            _disable();
        } else {
            _enable();
        }

        // Trigger "before.toggle" event
        KTEventHandler.trigger(the.element, 'kt.toggle.changed', the);

        return the;
    }

    var _enable = function() {
        if ( _isEnabled() === true ) {
            return;
        }

        KTEventHandler.trigger(the.element, 'kt.toggle.enable', the);

        the.target.setAttribute(the.attribute, 'on');

        if (the.state.length > 0) {
            the.element.classList.add(the.state);
        }        

        if ( typeof KTCookie !== 'undefined' && the.options.saveState === true ) {
            KTCookie.set(the.attribute, 'on');
        }

        KTEventHandler.trigger(the.element, 'kt.toggle.enabled', the);

        return the;
    }

    var _disable = function() {
        if ( _isEnabled() === false ) {
            return;
        }

        KTEventHandler.trigger(the.element, 'kt.toggle.disable', the);

        the.target.removeAttribute(the.attribute);

        if (the.state.length > 0) {
            the.element.classList.remove(the.state);
        } 

        if ( typeof KTCookie !== 'undefined' && the.options.saveState === true ) {
            KTCookie.remove(the.attribute);
        }

        KTEventHandler.trigger(the.element, 'kt.toggle.disabled', the);

        return the;
    }

    var _isEnabled = function() {
        return (String(the.target.getAttribute(the.attribute)).toLowerCase() === 'on');
    }

    var _destroy = function() {
        KTUtil.data(the.element).remove('toggle');
    }

    // Construct class
    _construct();

    ///////////////////////
    // ** Public API  ** //
    ///////////////////////

    // Plugin API
    the.toggle = function() {
        return _toggle();
    }

    the.enable = function() {
        return _enable();
    }

    the.disable = function() {
        return _disable();
    }

    the.isEnabled = function() {
        return _isEnabled();
    }

    the.goElement = function() {
        return the.element;
    }

    the.destroy = function() {
        return _destroy();
    }

    // Event API
    the.on = function(name, handler) {
        return KTEventHandler.on(the.element, name, handler);
    }

    the.one = function(name, handler) {
        return KTEventHandler.one(the.element, name, handler);
    }

    the.off = function(name) {
        return KTEventHandler.off(the.element, name);
    }

    the.trigger = function(name, event) {
        return KTEventHandler.trigger(the.element, name, event, the, event);
    }
};

// Static methods
KTToggle.getInstance = function(element) {
    if ( element !== null && KTUtil.data(element).has('toggle') ) {
        return KTUtil.data(element).get('toggle');
    } else {
        return null;
    }
}

// Create instances
KTToggle.createInstances = function(selector = '[data-kt-toggle]') {
    var body = document.getElementsByTagName("BODY")[0];

    // Get instances
    var elements = body.querySelectorAll(selector);

    if ( elements && elements.length > 0 ) {
        for (var i = 0, len = elements.length; i < len; i++) {
            // Initialize instances
            new KTToggle(elements[i]);
        }
    }
}

// Global initialization
KTToggle.init = function() {
    KTToggle.createInstances();
};

// On document ready
if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', KTToggle.init);
} else {
    KTToggle.init();
}

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTToggle;
}

/***/ }),

/***/ "../src/js/components/util.js":
/*!************************************!*\
  !*** ../src/js/components/util.js ***!
  \************************************/
/***/ ((module) => {

"use strict";


/**
 * @class KTUtil  base utilize class that privides helper functions
 */

// Polyfills

// Element.matches() polyfill
if (!Element.prototype.matches) {
    Element.prototype.matches = function(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
    };
}

/**
 * Element.closest() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 */
if (!Element.prototype.closest) {
	Element.prototype.closest = function (s) {
		var el = this;
		var ancestor = this;
		if (!document.documentElement.contains(el)) return null;
		do {
			if (ancestor.matches(s)) return ancestor;
			ancestor = ancestor.parentElement;
		} while (ancestor !== null);
		return null;
	};
}

/**
 * ChildNode.remove() polyfill
 * https://gomakethings.com/removing-an-element-from-the-dom-the-es6-way/
 * @author Chris Ferdinandi
 * @license MIT
 */
(function (elem) {
	for (var i = 0; i < elem.length; i++) {
		if (!window[elem[i]] || 'remove' in window[elem[i]].prototype) continue;
		window[elem[i]].prototype.remove = function () {
			this.parentNode.removeChild(this);
		};
	}
})(['Element', 'CharacterData', 'DocumentType']);


//
// requestAnimationFrame polyfill by Erik Möller.
//  With fixes from Paul Irish and Tino Zijdel
//
//  http://paulirish.com/2011/requestanimationframe-for-smart-animating/
//  http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
//
//  MIT license
//
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame =
            window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

// Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/prepend()/prepend().md
(function(arr) {
    arr.forEach(function(item) {
        if (item.hasOwnProperty('prepend')) {
            return;
        }
        Object.defineProperty(item, 'prepend', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function prepend() {
                var argArr = Array.prototype.slice.call(arguments),
                    docFrag = document.createDocumentFragment();

                argArr.forEach(function(argItem) {
                    var isNode = argItem instanceof Node;
                    docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                });

                this.insertBefore(docFrag, this.firstChild);
            }
        });
    });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

// getAttributeNames
if (Element.prototype.getAttributeNames == undefined) {
  Element.prototype.getAttributeNames = function () {
    var attributes = this.attributes;
    var length = attributes.length;
    var result = new Array(length);
    for (var i = 0; i < length; i++) {
      result[i] = attributes[i].name;
    }
    return result;
  };
}

// Global variables
window.KTUtilElementDataStore = {};
window.KTUtilElementDataStoreID = 0;
window.KTUtilDelegatedEventHandlers = {};

var KTUtil = function() {
    var resizeHandlers = [];

    /**
     * Handle window resize event with some
     * delay to attach event handlers upon resize complete
     */
    var _windowResizeHandler = function() {
        var _runResizeHandlers = function() {
            // reinitialize other subscribed elements
            for (var i = 0; i < resizeHandlers.length; i++) {
                var each = resizeHandlers[i];
                each.call();
            }
        };

        var timer;

        window.addEventListener('resize', function() {
            KTUtil.throttle(timer, function() {
                _runResizeHandlers();
            }, 200);
        });
    };

    return {
        /**
         * Class main initializer.
         * @param {object} settings.
         * @returns null
         */
        //main function to initiate the theme
        init: function(settings) {
            _windowResizeHandler();
        },

        /**
         * Adds window resize event handler.
         * @param {function} callback function.
         */
        addResizeHandler: function(callback) {
            resizeHandlers.push(callback);
        },

        /**
         * Removes window resize event handler.
         * @param {function} callback function.
         */
        removeResizeHandler: function(callback) {
            for (var i = 0; i < resizeHandlers.length; i++) {
                if (callback === resizeHandlers[i]) {
                    delete resizeHandlers[i];
                }
            }
        },

        /**
         * Trigger window resize handlers.
         */
        runResizeHandlers: function() {
            _runResizeHandlers();
        },

        resize: function() {
            if (typeof(Event) === 'function') {
                // modern browsers
                window.dispatchEvent(new Event('resize'));
            } else {
                // for IE and other old browsers
                // causes deprecation warning on modern browsers
                var evt = window.document.createEvent('UIEvents');
                evt.initUIEvent('resize', true, false, window, 0);
                window.dispatchEvent(evt);
            }
        },

        /**
         * Get GET parameter value from URL.
         * @param {string} paramName Parameter name.
         * @returns {string}
         */
        getURLParam: function(paramName) {
            var searchString = window.location.search.substring(1),
                i, val, params = searchString.split("&");

            for (i = 0; i < params.length; i++) {
                val = params[i].split("=");
                if (val[0] == paramName) {
                    return unescape(val[1]);
                }
            }

            return null;
        },

        /**
         * Checks whether current device is mobile touch.
         * @returns {boolean}
         */
        isMobileDevice: function() {
            var test = (this.getViewPort().width < this.getBreakpoint('lg') ? true : false);

            if (test === false) {
                // For use within normal web clients
                test = navigator.userAgent.match(/iPad/i) != null;
            }

            return test;
        },

        /**
         * Checks whether current device is desktop.
         * @returns {boolean}
         */
        isDesktopDevice: function() {
            return KTUtil.isMobileDevice() ? false : true;
        },

        /**
         * Gets browser window viewport size. Ref:
         * http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
         * @returns {object}
         */
        getViewPort: function() {
            var e = window,
                a = 'inner';
            if (!('innerWidth' in window)) {
                a = 'client';
                e = document.documentElement || document.body;
            }

            return {
                width: e[a + 'Width'],
                height: e[a + 'Height']
            };
        },

		/**
         * Checks whether given device mode is currently activated.
         * @param {string} mode Responsive mode name(e.g: desktop,
         *     desktop-and-tablet, tablet, tablet-and-mobile, mobile)
         * @returns {boolean}
         */
        isBreakpointUp: function(mode) {
            var width = this.getViewPort().width;
			var breakpoint = this.getBreakpoint(mode);

			return (width >= breakpoint);
        },

		isBreakpointDown: function(mode) {
            var width = this.getViewPort().width;
			var breakpoint = this.getBreakpoint(mode);

			return (width < breakpoint);
        },

        getViewportWidth: function() {
            return this.getViewPort().width;
        },

        /**
         * Generates unique ID for give prefix.
         * @param {string} prefix Prefix for generated ID
         * @returns {boolean}
         */
        getUniqueId: function(prefix) {
            return prefix + Math.floor(Math.random() * (new Date()).getTime());
        },

        /**
         * Gets window width for give breakpoint mode.
         * @param {string} mode Responsive mode name(e.g: xl, lg, md, sm)
         * @returns {number}
         */
        getBreakpoint: function(breakpoint) {
            var value = this.getCssVariableValue('--bs-' + breakpoint);

            if ( value ) {
                value = parseInt(value.trim());
            } 

            return value;
        },

        /**
         * Checks whether object has property matchs given key path.
         * @param {object} obj Object contains values paired with given key path
         * @param {string} keys Keys path seperated with dots
         * @returns {object}
         */
        isset: function(obj, keys) {
            var stone;

            keys = keys || '';

            if (keys.indexOf('[') !== -1) {
                throw new Error('Unsupported object path notation.');
            }

            keys = keys.split('.');

            do {
                if (obj === undefined) {
                    return false;
                }

                stone = keys.shift();

                if (!obj.hasOwnProperty(stone)) {
                    return false;
                }

                obj = obj[stone];

            } while (keys.length);

            return true;
        },

        /**
         * Gets highest z-index of the given element parents
         * @param {object} el jQuery element object
         * @returns {number}
         */
        getHighestZindex: function(el) {
            var position, value;

            while (el && el !== document) {
                // Ignore z-index if position is set to a value where z-index is ignored by the browser
                // This makes behavior of this function consistent across browsers
                // WebKit always returns auto if the element is positioned
                position = KTUtil.css(el, 'position');

                if (position === "absolute" || position === "relative" || position === "fixed") {
                    // IE returns 0 when zIndex is not specified
                    // other browsers return a string
                    // we ignore the case of nested elements with an explicit value of 0
                    // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
                    value = parseInt(KTUtil.css(el, 'z-index'));

                    if (!isNaN(value) && value !== 0) {
                        return value;
                    }
                }

                el = el.parentNode;
            }

            return 1;
        },

        /**
         * Checks whether the element has any parent with fixed positionfreg
         * @param {object} el jQuery element object
         * @returns {boolean}
         */
        hasFixedPositionedParent: function(el) {
            var position;

            while (el && el !== document) {
                position = KTUtil.css(el, 'position');

                if (position === "fixed") {
                    return true;
                }

                el = el.parentNode;
            }

            return false;
        },

        /**
         * Simulates delay
         */
        sleep: function(milliseconds) {
            var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
                if ((new Date().getTime() - start) > milliseconds) {
                    break;
                }
            }
        },

        /**
         * Gets randomly generated integer value within given min and max range
         * @param {number} min Range start value
         * @param {number} max Range end value
         * @returns {number}
         */
        getRandomInt: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        /**
         * Checks whether Angular library is included
         * @returns {boolean}
         */
        isAngularVersion: function() {
            return window.Zone !== undefined ? true : false;
        },

        // Deep extend:  $.extend(true, {}, objA, objB);
        deepExtend: function(out) {
            out = out || {};

            for (var i = 1; i < arguments.length; i++) {
                var obj = arguments[i];
                if (!obj) continue;

                for (var key in obj) {
                    if (!obj.hasOwnProperty(key)) {
                        continue;
                    }

                    // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
                    if ( Object.prototype.toString.call(obj[key]) === '[object Object]' ) {
                        out[key] = KTUtil.deepExtend(out[key], obj[key]);
                        continue;
                    }

                    out[key] = obj[key];
                }
            }

            return out;
        },

        // extend:  $.extend({}, objA, objB);
        extend: function(out) {
            out = out || {};

            for (var i = 1; i < arguments.length; i++) {
                if (!arguments[i])
                    continue;

                for (var key in arguments[i]) {
                    if (arguments[i].hasOwnProperty(key))
                        out[key] = arguments[i][key];
                }
            }

            return out;
        },

        getBody: function() {
            return document.getElementsByTagName('body')[0];
        },

        /**
         * Checks whether the element has given classes
         * @param {object} el jQuery element object
         * @param {string} Classes string
         * @returns {boolean}
         */
        hasClasses: function(el, classes) {
            if (!el) {
                return;
            }

            var classesArr = classes.split(" ");

            for (var i = 0; i < classesArr.length; i++) {
                if (KTUtil.hasClass(el, KTUtil.trim(classesArr[i])) == false) {
                    return false;
                }
            }

            return true;
        },

        hasClass: function(el, className) {
            if (!el) {
                return;
            }

            return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
        },

        addClass: function(el, className) {
            if (!el || typeof className === 'undefined') {
                return;
            }

            var classNames = className.split(' ');

            if (el.classList) {
                for (var i = 0; i < classNames.length; i++) {
                    if (classNames[i] && classNames[i].length > 0) {
                        el.classList.add(KTUtil.trim(classNames[i]));
                    }
                }
            } else if (!KTUtil.hasClass(el, className)) {
                for (var x = 0; x < classNames.length; x++) {
                    el.className += ' ' + KTUtil.trim(classNames[x]);
                }
            }
        },

        removeClass: function(el, className) {
          if (!el || typeof className === 'undefined') {
                return;
            }

            var classNames = className.split(' ');

            if (el.classList) {
                for (var i = 0; i < classNames.length; i++) {
                    el.classList.remove(KTUtil.trim(classNames[i]));
                }
            } else if (KTUtil.hasClass(el, className)) {
                for (var x = 0; x < classNames.length; x++) {
                    el.className = el.className.replace(new RegExp('\\b' + KTUtil.trim(classNames[x]) + '\\b', 'g'), '');
                }
            }
        },

        triggerCustomEvent: function(el, eventName, data) {
            var event;
            if (window.CustomEvent) {
                event = new CustomEvent(eventName, {
                    detail: data
                });
            } else {
                event = document.createEvent('CustomEvent');
                event.initCustomEvent(eventName, true, true, data);
            }

            el.dispatchEvent(event);
        },

        triggerEvent: function(node, eventName) {
            // Make sure we use the ownerDocument from the provided node to avoid cross-window problems
            var doc;

            if (node.ownerDocument) {
                doc = node.ownerDocument;
            } else if (node.nodeType == 9) {
                // the node may be the document itself, nodeType 9 = DOCUMENT_NODE
                doc = node;
            } else {
                throw new Error("Invalid node passed to fireEvent: " + node.id);
            }

            if (node.dispatchEvent) {
                // Gecko-style approach (now the standard) takes more work
                var eventClass = "";

                // Different events have different event classes.
                // If this switch statement can't map an eventName to an eventClass,
                // the event firing is going to fail.
                switch (eventName) {
                case "click": // Dispatching of 'click' appears to not work correctly in Safari. Use 'mousedown' or 'mouseup' instead.
                case "mouseenter":
                case "mouseleave":
                case "mousedown":
                case "mouseup":
                    eventClass = "MouseEvents";
                    break;

                case "focus":
                case "change":
                case "blur":
                case "select":
                    eventClass = "HTMLEvents";
                    break;

                default:
                    throw "fireEvent: Couldn't find an event class for event '" + eventName + "'.";
                    break;
                }
                var event = doc.createEvent(eventClass);

                var bubbles = eventName == "change" ? false : true;
                event.initEvent(eventName, bubbles, true); // All events created as bubbling and cancelable.

                event.synthetic = true; // allow detection of synthetic events
                // The second parameter says go ahead with the default action
                node.dispatchEvent(event, true);
            } else if (node.fireEvent) {
                // IE-old school style
                var event = doc.createEventObject();
                event.synthetic = true; // allow detection of synthetic events
                node.fireEvent("on" + eventName, event);
            }
        },

        index: function( el ){
            var c = el.parentNode.children, i = 0;
            for(; i < c.length; i++ )
                if( c[i] == el ) return i;
        },

        trim: function(string) {
            return string.trim();
        },

        eventTriggered: function(e) {
            if (e.currentTarget.dataset.triggered) {
                return true;
            } else {
                e.currentTarget.dataset.triggered = true;

                return false;
            }
        },

        remove: function(el) {
            if (el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        },

        find: function(parent, query) {
            if ( parent !== null) {
                return parent.querySelector(query);
            } else {
                return null;
            }
        },

        findAll: function(parent, query) {
            if ( parent !== null ) {
                return parent.querySelectorAll(query);
            } else {
                return null;
            }
        },

        insertAfter: function(el, referenceNode) {
            return referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
        },

        parents: function(elem, selector) {
            // Set up a parent array
            var parents = [];

            // Push each parent element to the array
            for ( ; elem && elem !== document; elem = elem.parentNode ) {
                if (selector) {
                    if (elem.matches(selector)) {
                        parents.push(elem);
                    }
                    continue;
                }
                parents.push(elem);
            }

            // Return our parent array
            return parents;
        },

        children: function(el, selector, log) {
            if (!el || !el.childNodes) {
                return null;
            }

            var result = [],
                i = 0,
                l = el.childNodes.length;

            for (var i; i < l; ++i) {
                if (el.childNodes[i].nodeType == 1 && KTUtil.matches(el.childNodes[i], selector, log)) {
                    result.push(el.childNodes[i]);
                }
            }

            return result;
        },

        child: function(el, selector, log) {
            var children = KTUtil.children(el, selector, log);

            return children ? children[0] : null;
        },

        matches: function(el, selector, log) {
            var p = Element.prototype;
            var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
                return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
            };

            if (el && el.tagName) {
                return f.call(el, selector);
            } else {
                return false;
            }
        },

        data: function(el) {
            return {
                set: function(name, data) {
                    if (!el) {
                        return;
                    }

                    if (el.customDataTag === undefined) {
                        window.KTUtilElementDataStoreID++;
                        el.customDataTag = window.KTUtilElementDataStoreID;
                    }

                    if (window.KTUtilElementDataStore[el.customDataTag] === undefined) {
                        window.KTUtilElementDataStore[el.customDataTag] = {};
                    }

                    window.KTUtilElementDataStore[el.customDataTag][name] = data;
                },

                get: function(name) {
                    if (!el) {
                        return;
                    }

                    if (el.customDataTag === undefined) {
                        return null;
                    }

                    return this.has(name) ? window.KTUtilElementDataStore[el.customDataTag][name] : null;
                },

                has: function(name) {
                    if (!el) {
                        return false;
                    }

                    if (el.customDataTag === undefined) {
                        return false;
                    }

                    return (window.KTUtilElementDataStore[el.customDataTag] && window.KTUtilElementDataStore[el.customDataTag][name]) ? true : false;
                },

                remove: function(name) {
                    if (el && this.has(name)) {
                        delete window.KTUtilElementDataStore[el.customDataTag][name];
                    }
                }
            };
        },

        outerWidth: function(el, margin) {
            var width;

            if (margin === true) {
                width = parseFloat(el.offsetWidth);
                width += parseFloat(KTUtil.css(el, 'margin-left')) + parseFloat(KTUtil.css(el, 'margin-right'));

                return parseFloat(width);
            } else {
                width = parseFloat(el.offsetWidth);

                return width;
            }
        },

        offset: function(el) {
            var rect, win;

            if ( !el ) {
                return;
            }

            // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
            // Support: IE <=11 only
            // Running getBoundingClientRect on a
            // disconnected node in IE throws an error

            if ( !el.getClientRects().length ) {
                return { top: 0, left: 0 };
            }

            // Get document-relative position by adding viewport scroll to viewport-relative gBCR
            rect = el.getBoundingClientRect();
            win = el.ownerDocument.defaultView;

            return {
                top: rect.top + win.pageYOffset,
                left: rect.left + win.pageXOffset,
                right: window.innerWidth - (el.offsetLeft + el.offsetWidth)
            };
        },

        height: function(el) {
            return KTUtil.css(el, 'height');
        },

        outerHeight: function(el, withMargin) {
            var height = el.offsetHeight;
            var style;

            if (typeof withMargin !== 'undefined' && withMargin === true) {
                style = getComputedStyle(el);
                height += parseInt(style.marginTop) + parseInt(style.marginBottom);

                return height;
            } else {
                return height;
            }
        },

        visible: function(el) {
            return !(el.offsetWidth === 0 && el.offsetHeight === 0);
        },

        attr: function(el, name, value) {
            if (el == undefined) {
                return;
            }

            if (value !== undefined) {
                el.setAttribute(name, value);
            } else {
                return el.getAttribute(name);
            }
        },

        hasAttr: function(el, name) {
            if (el == undefined) {
                return;
            }

            return el.getAttribute(name) ? true : false;
        },

        removeAttr: function(el, name) {
            if (el == undefined) {
                return;
            }

            el.removeAttribute(name);
        },

        animate: function(from, to, duration, update, easing, done) {
            /**
             * TinyAnimate.easings
             *  Adapted from jQuery Easing
             */
            var easings = {};
            var easing;

            easings.linear = function(t, b, c, d) {
                return c * t / d + b;
            };

            easing = easings.linear;

            // Early bail out if called incorrectly
            if (typeof from !== 'number' ||
                typeof to !== 'number' ||
                typeof duration !== 'number' ||
                typeof update !== 'function') {
                return;
            }

            // Create mock done() function if necessary
            if (typeof done !== 'function') {
                done = function() {};
            }

            // Pick implementation (requestAnimationFrame | setTimeout)
            var rAF = window.requestAnimationFrame || function(callback) {
                window.setTimeout(callback, 1000 / 50);
            };

            // Animation loop
            var canceled = false;
            var change = to - from;

            function loop(timestamp) {
                var time = (timestamp || +new Date()) - start;

                if (time >= 0) {
                    update(easing(time, from, change, duration));
                }
                if (time >= 0 && time >= duration) {
                    update(to);
                    done();
                } else {
                    rAF(loop);
                }
            }

            update(from);

            // Start animation loop
            var start = window.performance && window.performance.now ? window.performance.now() : +new Date();

            rAF(loop);
        },

        actualCss: function(el, prop, cache) {
            var css = '';

            if (el instanceof HTMLElement === false) {
                return;
            }

            if (!el.getAttribute('kt-hidden-' + prop) || cache === false) {
                var value;

                // the element is hidden so:
                // making the el block so we can meassure its height but still be hidden
                css = el.style.cssText;
                el.style.cssText = 'position: absolute; visibility: hidden; display: block;';

                if (prop == 'width') {
                    value = el.offsetWidth;
                } else if (prop == 'height') {
                    value = el.offsetHeight;
                }

                el.style.cssText = css;

                // store it in cache
                el.setAttribute('kt-hidden-' + prop, value);

                return parseFloat(value);
            } else {
                // store it in cache
                return parseFloat(el.getAttribute('kt-hidden-' + prop));
            }
        },

        actualHeight: function(el, cache) {
            return KTUtil.actualCss(el, 'height', cache);
        },

        actualWidth: function(el, cache) {
            return KTUtil.actualCss(el, 'width', cache);
        },

        getScroll: function(element, method) {
            // The passed in `method` value should be 'Top' or 'Left'
            method = 'scroll' + method;
            return (element == window || element == document) ? (
                self[(method == 'scrollTop') ? 'pageYOffset' : 'pageXOffset'] ||
                (browserSupportsBoxModel && document.documentElement[method]) ||
                document.body[method]
            ) : element[method];
        },

        css: function(el, styleProp, value, important) {
            if (!el) {
                return;
            }

            if (value !== undefined) {
                if ( important === true ) {
                    el.style.setProperty(styleProp, value, 'important');
                } else {
                    el.style[styleProp] = value;
                }
            } else {
                var defaultView = (el.ownerDocument || document).defaultView;

                // W3C standard way:
                if (defaultView && defaultView.getComputedStyle) {
                    // sanitize property name to css notation
                    // (hyphen separated words eg. font-Size)
                    styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();

<<<<<<< Updated upstream
                    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
                } else if (el.currentStyle) { // IE
                    // sanitize property name to camelCase
                    styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
                        return letter.toUpperCase();
                    });
=======
"use strict";
eval(" // Class definition\n\nvar KTBlockUI = function KTBlockUI(element, options) {\n  //////////////////////////////\n  // ** Private variables  ** //\n  //////////////////////////////\n  var the = this;\n\n  if (typeof element === \"undefined\" || element === null) {\n    return;\n  } // Default options\n\n\n  var defaultOptions = {\n    zIndex: false,\n    overlayClass: '',\n    overflow: 'hidden',\n    message: '<span class=\"spinner-border text-primary\"></span>'\n  }; ////////////////////////////\n  // ** Private methods  ** //\n  ////////////////////////////\n\n  var _construct = function _construct() {\n    if (KTUtil.data(element).has('blockui')) {\n      the = KTUtil.data(element).get('blockui');\n    } else {\n      _init();\n    }\n  };\n\n  var _init = function _init() {\n    // Variables\n    the.options = KTUtil.deepExtend({}, defaultOptions, options);\n    the.element = element;\n    the.overlayElement = null;\n    the.blocked = false;\n    the.positionChanged = false;\n    the.overflowChanged = false; // Bind Instance\n\n    KTUtil.data(the.element).set('blockui', the);\n  };\n\n  var _block = function _block() {\n    if (KTEventHandler.trigger(the.element, 'kt.blockui.block', the) === false) {\n      return;\n    }\n\n    var isPage = the.element.tagName === 'BODY';\n    var position = KTUtil.css(the.element, 'position');\n    var overflow = KTUtil.css(the.element, 'overflow');\n    var zIndex = isPage ? 10000 : 1;\n\n    if (the.options.zIndex > 0) {\n      zIndex = the.options.zIndex;\n    } else {\n      if (KTUtil.css(the.element, 'z-index') != 'auto') {\n        zIndex = KTUtil.css(the.element, 'z-index');\n      }\n    }\n\n    the.element.classList.add('blockui');\n\n    if (position === \"absolute\" || position === \"relative\" || position === \"fixed\") {\n      KTUtil.css(the.element, 'position', 'relative');\n      the.positionChanged = true;\n    }\n\n    if (the.options.overflow === 'hidden' && overflow === 'visible') {\n      KTUtil.css(the.element, 'overflow', 'hidden');\n      the.overflowChanged = true;\n    }\n\n    the.overlayElement = document.createElement('DIV');\n    the.overlayElement.setAttribute('class', 'blockui-overlay ' + the.options.overlayClass);\n    the.overlayElement.innerHTML = the.options.message;\n    KTUtil.css(the.overlayElement, 'z-index', zIndex);\n    the.element.append(the.overlayElement);\n    the.blocked = true;\n    KTEventHandler.trigger(the.element, 'kt.blockui.after.blocked', the) === false;\n  };\n\n  var _release = function _release() {\n    if (KTEventHandler.trigger(the.element, 'kt.blockui.release', the) === false) {\n      return;\n    }\n\n    the.element.classList.add('blockui');\n\n    if (the.positionChanged) {\n      KTUtil.css(the.element, 'position', '');\n    }\n\n    if (the.overflowChanged) {\n      KTUtil.css(the.element, 'overflow', '');\n    }\n\n    if (the.overlayElement) {\n      KTUtil.remove(the.overlayElement);\n    }\n\n    the.blocked = false;\n    KTEventHandler.trigger(the.element, 'kt.blockui.released', the);\n  };\n\n  var _isBlocked = function _isBlocked() {\n    return the.blocked;\n  };\n\n  var _destroy = function _destroy() {\n    KTUtil.data(the.element).remove('blockui');\n  }; // Construct class\n\n\n  _construct(); ///////////////////////\n  // ** Public API  ** //\n  ///////////////////////\n  // Plugin API\n\n\n  the.block = function () {\n    _block();\n  };\n\n  the.release = function () {\n    _release();\n  };\n\n  the.isBlocked = function () {\n    return _isBlocked();\n  };\n\n  the.destroy = function () {\n    return _destroy();\n  }; // Event API\n\n\n  the.on = function (name, handler) {\n    return KTEventHandler.on(the.element, name, handler);\n  };\n\n  the.one = function (name, handler) {\n    return KTEventHandler.one(the.element, name, handler);\n  };\n\n  the.off = function (name) {\n    return KTEventHandler.off(the.element, name);\n  };\n\n  the.trigger = function (name, event) {\n    return KTEventHandler.trigger(the.element, name, event, the, event);\n  };\n}; // Static methods\n\n\nKTBlockUI.getInstance = function (element) {\n  if (element !== null && KTUtil.data(element).has('blockui')) {\n    return KTUtil.data(element).get('blockui');\n  } else {\n    return null;\n  }\n}; // Webpack support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTBlockUI;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvYmxvY2t1aS5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFTQyxPQUFULEVBQWtCQyxPQUFsQixFQUEyQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxNQUFJQyxHQUFHLEdBQUcsSUFBVjs7QUFFQSxNQUFLLE9BQU9GLE9BQVAsS0FBbUIsV0FBbkIsSUFBa0NBLE9BQU8sS0FBSyxJQUFuRCxFQUEwRDtBQUN0RDtBQUNILEdBUnNDLENBVXZDOzs7QUFDQSxNQUFJRyxjQUFjLEdBQUc7QUFDakJDLElBQUFBLE1BQU0sRUFBRSxLQURTO0FBRWpCQyxJQUFBQSxZQUFZLEVBQUUsRUFGRztBQUdqQkMsSUFBQUEsUUFBUSxFQUFFLFFBSE87QUFJakJDLElBQUFBLE9BQU8sRUFBRTtBQUpRLEdBQXJCLENBWHVDLENBa0J2QztBQUNBO0FBQ0E7O0FBRUEsTUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVztBQUN4QixRQUFLQyxNQUFNLENBQUNDLElBQVAsQ0FBWVYsT0FBWixFQUFxQlcsR0FBckIsQ0FBeUIsU0FBekIsQ0FBTCxFQUEyQztBQUN2Q1QsTUFBQUEsR0FBRyxHQUFHTyxNQUFNLENBQUNDLElBQVAsQ0FBWVYsT0FBWixFQUFxQlksR0FBckIsQ0FBeUIsU0FBekIsQ0FBTjtBQUNILEtBRkQsTUFFTztBQUNIQyxNQUFBQSxLQUFLO0FBQ1I7QUFDSixHQU5EOztBQVFBLE1BQUlBLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQVc7QUFDbkI7QUFDQVgsSUFBQUEsR0FBRyxDQUFDRCxPQUFKLEdBQWNRLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQixFQUFsQixFQUFzQlgsY0FBdEIsRUFBc0NGLE9BQXRDLENBQWQ7QUFDQUMsSUFBQUEsR0FBRyxDQUFDRixPQUFKLEdBQWNBLE9BQWQ7QUFDQUUsSUFBQUEsR0FBRyxDQUFDYSxjQUFKLEdBQXFCLElBQXJCO0FBQ0Fi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QUFHLENBQUNGLE9BQXZCLEVBQWdDMkMsSUFBaEMsQ0FBUDtBQUNILEdBRkQ7O0FBSUF6QyxFQUFBQSxHQUFHLENBQUNvQixPQUFKLEdBQWMsVUFBU3FCLElBQVQsRUFBZUksS0FBZixFQUFzQjtBQUNoQyxXQUFPMUIsY0FBYyxDQUFDQyxPQUFmLENBQXVCcEIsR0FBRyxDQUFDRixPQUEzQixFQUFvQzJDLElBQXBDLEVBQTBDSSxLQUExQyxFQUFpRDdDLEdBQWpELEVBQXNENkMsS0FBdEQsQ0FBUDtBQUNILEdBRkQ7QUFHSCxDQS9KRCxDLENBaUtBOzs7QUFDQWhELFNBQVMsQ0FBQ2lELFdBQVYsR0FBd0IsVUFBU2hELE9BQVQsRUFBa0I7QUFDdEMsTUFBSUEsT0FBTyxLQUFLLElBQVosSUFBb0JTLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZVixPQUFaLEVBQXFCVyxHQUFyQixDQUF5QixTQUF6QixDQUF4QixFQUE2RDtBQUN6RCxXQUFPRixNQUFNLENBQUNDLElBQVAsQ0FBWVYsT0FBWixFQUFxQlksR0FBckIsQ0FBeUIsU0FBekIsQ0FBUDtBQUNILEdBRkQsTUFFTztBQUNILFdBQU8sSUFBUDtBQUNIO0FBQ0osQ0FORCxDLENBUUE7OztBQUNBLElBQUksU0FBaUMsT0FBT3FDLE1BQU0sQ0FBQ0MsT0FBZCxLQUEwQixXQUEvRCxFQUE0RTtBQUN4RUQsRUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbkQsU0FBakI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY29tcG9uZW50cy9ibG9ja3VpLmpzPzM2OTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEJsb2NrVUkgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gKiogUHJpdmF0ZSB2YXJpYWJsZXMgICoqIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgdmFyIHRoZSA9IHRoaXM7XG5cbiAgICBpZiAoIHR5cGVvZiBlbGVtZW50ID09PSBcInVuZGVmaW5lZFwiIHx8IGVsZW1lbnQgPT09IG51bGwgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IG9wdGlvbnNcbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgIHpJbmRleDogZmFsc2UsXG4gICAgICAgIG92ZXJsYXlDbGFzczogJycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgbWVzc2FnZTogJzxzcGFuIGNsYXNzPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1wcmltYXJ5XCI+PC9zcGFuPidcbiAgICB9O1xuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vICoqIFByaXZhdGUgbWV0aG9kcyAgKiogLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICB2YXIgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIEtUVXRpbC5kYXRhKGVsZW1lbnQpLmhhcygnYmxvY2t1aScpICkge1xuICAgICAgICAgICAgdGhlID0gS1RVdGlsLmRhdGEoZWxlbWVudCkuZ2V0KCdibG9ja3VpJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfaW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFZhcmlhYmxlc1xuICAgICAgICB0aGUub3B0aW9ucyA9IEtUVXRpbC5kZWVwRXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoZS5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhlLm92ZXJsYXlFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhlLmJsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhlLnBvc2l0aW9uQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB0aGUub3ZlcmZsb3dDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQmluZCBJbnN0YW5jZVxuICAgICAgICBLVFV0aWwuZGF0YSh0aGUuZWxlbWVudCkuc2V0KCdibG9ja3VpJywgdGhlKTtcbiAgICB9XG5cbiAgICB2YXIgX2Jsb2NrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICggS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgJ2t0LmJsb2NrdWkuYmxvY2snLCB0aGUpID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpc1BhZ2UgPSAodGhlLmVsZW1lbnQudGFnTmFtZSA9PT0gJ0JPRFknKTtcbiAgICAgICBcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gS1RVdGlsLmNzcyh0aGUuZWxlbWVudCwgJ3Bvc2l0aW9uJyk7XG4gICAgICAgIHZhciBvdmVyZmxvdyA9IEtUVXRpbC5jc3ModGhlLmVsZW1lbnQsICdvdmVyZmxvdycpO1xuICAgICAgICB2YXIgekluZGV4ID0gaXNQYWdlID8gMTAwMDAgOiAxO1xuXG4gICAgICAgIGlmICh0aGUub3B0aW9ucy56SW5kZXggPiAwKSB7XG4gICAgICAgICAgICB6SW5kZXggPSB0aGUub3B0aW9ucy56SW5kZXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoS1RVdGlsLmNzcyh0aGUuZWxlbWVudCwgJ3otaW5kZXgnKSAhPSAnYXV0bycpIHtcbiAgICAgICAgICAgICAgICB6SW5kZXggPSBLVFV0aWwuY3NzKHRoZS5lbGVtZW50LCAnei1pbmRleCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhlLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmxvY2t1aScpO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJhYnNvbHV0ZVwiIHx8IHBvc2l0aW9uID09PSBcInJlbGF0aXZlXCIgfHwgcG9zaXRpb24gPT09IFwiZml4ZWRcIikge1xuICAgICAgICAgICAgS1RVdGlsLmNzcyh0aGUuZWxlbWVudCwgJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG4gICAgICAgICAgICB0aGUucG9zaXRpb25DaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGUub3B0aW9ucy5vdmVyZmxvdyA9PT0gJ2hpZGRlbicgJiYgb3ZlcmZsb3cgPT09ICd2aXNpYmxlJykgeyAgICAgICAgICAgXG4gICAgICAgICAgICBLVFV0aWwuY3NzKHRoZS5lbGVtZW50LCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgICAgICAgICB0aGUub3ZlcmZsb3dDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoZS5vdmVybGF5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpOyAgICBcbiAgICAgICAgdGhlLm92ZXJsYXlFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYmxvY2t1aS1vdmVybGF5ICcgKyB0aGUub3B0aW9ucy5vdmVybGF5Q2xhc3MpO1xuICAgICAgICBcbiAgICAgICAgdGhlLm92ZXJsYXlFbGVtZW50LmlubmVySFRNTCA9IHRoZS5vcHRpb25zLm1lc3NhZ2U7XG5cbiAgICAgICAgS1RVdGlsLmNzcyh0aGUub3ZlcmxheUVsZW1lbnQsICd6LWluZGV4JywgekluZGV4KTtcblxuICAgICAgICB0aGUuZWxlbWVudC5hcHBlbmQodGhlLm92ZXJsYXlFbGVtZW50KTtcbiAgICAgICAgdGhlLmJsb2NrZWQgPSB0cnVlO1xuXG4gICAgICAgIEtURXZlbnRIYW5kbGVyLnRyaWdnZXIodGhlLmVsZW1lbnQsICdrdC5ibG9ja3VpLmFmdGVyLmJsb2NrZWQnLCB0aGUpID09PSBmYWxzZVxuICAgIH1cblxuICAgIHZhciBfcmVsZWFzZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIEtURXZlbnRIYW5kbGVyLnRyaWdnZXIodGhlLmVsZW1lbnQsICdrdC5ibG9ja3VpLnJlbGVhc2UnLCB0aGUpID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoZS5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrdWknKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGUucG9zaXRpb25DaGFuZ2VkKSB7XG4gICAgICAgICAgICBLVFV0aWwuY3NzKHRoZS5lbGVtZW50LCAncG9zaXRpb24nLCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhlLm92ZXJmbG93Q2hhbmdlZCkge1xuICAgICAgICAgICAgS1RVdGlsLmNzcyh0aGUuZWxlbWVudCwgJ292ZXJmbG93JywgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoZS5vdmVybGF5RWxlbWVudCkge1xuICAgICAgICAgICAgS1RVdGlsLnJlbW92ZSh0aGUub3ZlcmxheUVsZW1lbnQpO1xuICAgICAgICB9ICAgICAgICBcblxuICAgICAgICB0aGUuYmxvY2tlZCA9IGZhbHNlO1xuXG4gICAgICAgIEtURXZlbnRIYW5kbGVyLnRyaWdnZXIodGhlLmVsZW1lbnQsICdrdC5ibG9ja3VpLnJlbGVhc2VkJywgdGhlKTtcbiAgICB9XG5cbiAgICB2YXIgX2lzQmxvY2tlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhlLmJsb2NrZWQ7XG4gICAgfVxuXG4gICAgdmFyIF9kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIEtUVXRpbC5kYXRhKHRoZS5lbGVtZW50KS5yZW1vdmUoJ2Jsb2NrdWknKTtcbiAgICB9XG5cbiAgICAvLyBDb25zdHJ1Y3QgY2xhc3NcbiAgICBfY29uc3RydWN0KCk7XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vICoqIFB1YmxpYyBBUEkgICoqIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIFBsdWdpbiBBUElcbiAgICB0aGUuYmxvY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgX2Jsb2NrKCk7XG4gICAgfVxuXG4gICAgdGhlLnJlbGVhc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgX3JlbGVhc2UoKTtcbiAgICB9XG5cbiAgICB0aGUuaXNCbG9ja2VkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfaXNCbG9ja2VkKCk7XG4gICAgfVxuXG4gICAgdGhlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLy8gRXZlbnQgQVBJXG4gICAgdGhlLm9uID0gZnVuY3Rpb24obmFtZSwgaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gS1RFdmVudEhhbmRsZXIub24odGhlLmVsZW1lbnQsIG5hbWUsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHRoZS5vbmUgPSBmdW5jdGlvbihuYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBLVEV2ZW50SGFuZGxlci5vbmUodGhlLmVsZW1lbnQsIG5hbWUsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHRoZS5vZmYgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHJldHVybiBLVEV2ZW50SGFuZGxlci5vZmYodGhlLmVsZW1lbnQsIG5hbWUpO1xuICAgIH1cblxuICAgIHRoZS50cmlnZ2VyID0gZnVuY3Rpb24obmFtZSwgZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIEtURXZlbnRIYW5kbGVyLnRyaWdnZXIodGhlLmVsZW1lbnQsIG5hbWUsIGV2ZW50LCB0aGUsIGV2ZW50KTtcbiAgICB9XG59O1xuXG4vLyBTdGF0aWMgbWV0aG9kc1xuS1RCbG9ja1VJLmdldEluc3RhbmNlID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50ICE9PSBudWxsICYmIEtUVXRpbC5kYXRhKGVsZW1lbnQpLmhhcygnYmxvY2t1aScpKSB7XG4gICAgICAgIHJldHVybiBLVFV0aWwuZGF0YShlbGVtZW50KS5nZXQoJ2Jsb2NrdWknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbi8vIFdlYnBhY2sgc3VwcG9ydFxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEtUQmxvY2tVSTtcbn0iXSwibmFtZXMiOlsiS1RCbG9ja1VJIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJ0aGUiLCJkZWZhdWx0T3B0aW9ucyIsInpJbmRleCIsIm92ZXJsYXlDbGFzcyIsIm92ZXJmbG93IiwibWVzc2FnZSIsIl9jb25zdHJ1Y3QiLCJLVFV0aWwiLCJkYXRhIiwiaGFzIiwiZ2V0IiwiX2luaXQiLCJkZWVwRXh0ZW5kIiwib3ZlcmxheUVsZW1lbnQiLCJibG9ja2VkIiwicG9zaXRpb25DaGFuZ2VkIiwib3ZlcmZsb3dDaGFuZ2VkIiwic2V0IiwiX2Jsb2NrIiwiS1RFdmVudEhhbmRsZXIiLCJ0cmlnZ2VyIiwiaXNQYWdlIiwidGFnTmFtZSIsInBvc2l0aW9uIiwiY3NzIiwiY2xhc3NMaXN0IiwiYWRkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiX3JlbGVhc2UiLCJyZW1vdmUiLCJfaXNCbG9ja2VkIiwiX2Rlc3Ryb3kiLCJibG9jayIsInJlbGVhc2UiLCJpc0Jsb2NrZWQiLCJkZXN0cm95Iiwib24iLCJuYW1lIiwiaGFuZGxlciIsIm9uZSIsIm9mZiIsImV2ZW50IiwiZ2V0SW5zdGFuY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/components/blockui.js\n");
>>>>>>> Stashed changes

                    value = el.currentStyle[styleProp];

                    // convert other units to pixels on IE
                    if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
                        return (function(value) {
                            var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;

<<<<<<< Updated upstream
                            el.runtimeStyle.left = el.currentStyle.left;
                            el.style.left = value || 0;
                            value = el.style.pixelLeft + "px";
                            el.style.left = oldLeft;
                            el.runtimeStyle.left = oldRsLeft;
=======
"use strict";
eval(" // DOCS: https://javascript.info/cookie\n// Class definition\n\nvar KTCookie = function () {\n  return {\n    // returns the cookie with the given name,\n    // or undefined if not found\n    get: function get(name) {\n      var matches = document.cookie.match(new RegExp(\"(?:^|; )\" + name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g, '\\\\$1') + \"=([^;]*)\"));\n      return matches ? decodeURIComponent(matches[1]) : null;\n    },\n    // Please note that a cookie value is encoded,\n    // so getCookie uses a built-in decodeURIComponent function to decode it.\n    set: function set(name, value, options) {\n      if (typeof options === \"undefined\" || options === null) {\n        options = {};\n      }\n\n      options = Object.assign({}, {\n        path: '/'\n      }, options);\n\n      if (options.expires instanceof Date) {\n        options.expires = options.expires.toUTCString();\n      }\n\n      var updatedCookie = encodeURIComponent(name) + \"=\" + encodeURIComponent(value);\n\n      for (var optionKey in options) {\n        if (options.hasOwnProperty(optionKey) === false) {\n          continue;\n        }\n\n        updatedCookie += \"; \" + optionKey;\n        var optionValue = options[optionKey];\n\n        if (optionValue !== true) {\n          updatedCookie += \"=\" + optionValue;\n        }\n      }\n\n      document.cookie = updatedCookie;\n    },\n    // To remove a cookie, we can call it with a negative expiration date:\n    remove: function remove(name) {\n      this.set(name, \"\", {\n        'max-age': -1\n      });\n    }\n  };\n}(); // Webpack support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTCookie;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvY29va2llLmpzLmpzIiwibWFwcGluZ3MiOiJDQUNBO0FBRUE7O0FBQ0EsSUFBSUEsUUFBUSxHQUFHLFlBQVc7QUFDdEIsU0FBTztBQUNIO0FBQ0E7QUFDQUMsSUFBQUEsR0FBRyxFQUFFLGFBQVNDLElBQVQsRUFBZTtBQUNoQixVQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0IsSUFBSUMsTUFBSixDQUNoQyxhQUFhTCxJQUFJLENBQUNNLE9BQUwsQ0FBYSw4QkFBYixFQUE2QyxNQUE3QyxDQUFiLEdBQW9FLFVBRHBDLENBQXRCLENBQWQ7QUFJQSxhQUFPTCxPQUFPLEdBQUdNLGtCQUFrQixDQUFDTixPQUFPLENBQUMsQ0FBRCxDQUFSLENBQXJCLEdBQW9DLElBQWxEO0FBQ0gsS0FURTtBQVdIO0FBQ0E7QUFDQU8sSUFBQUEsR0FBRyxFQUFFLGFBQVNSLElBQVQsRUFBZVMsS0FBZixFQUFzQkMsT0FBdEIsRUFBK0I7QUFDaEMsVUFBSyxPQUFPQSxPQUFQLEtBQW1CLFdBQW5CLElBQWtDQSxPQUFPLEtBQUssSUFBbkQsRUFBMEQ7QUFDdERBLFFBQUFBLE9BQU8sR0FBRyxFQUFWO0FBQ0g7O0FBRURBLE1BQUFBLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQjtBQUN4QkMsUUFBQUEsSUFBSSxFQUFFO0FBRGtCLE9BQWxCLEVBRVBILE9BRk8sQ0FBVjs7QUFJQSxVQUFLQSxPQUFPLENBQUNJLE9BQVIsWUFBMkJDLElBQWhDLEVBQXVDO0FBQ25DTCxRQUFBQSxPQUFPLENBQUNJLE9BQVIsR0FBa0JKLE9BQU8sQ0FBQ0ksT0FBUixDQUFnQkUsV0FBaEIsRUFBbEI7QUFDSDs7QUFFRCxVQUFJQyxhQUFhLEdBQUdDLGtCQUFrQixDQUFDbEIsSUFBRCxDQUFsQixHQUEyQixHQUEzQixHQUFpQ2tCLGtCQUFrQixDQUFDVCxLQUFELENBQXZFOztBQUVBLFdBQU0sSUFBSVUsU0FBVixJQUF1QlQsT0FBdkIsRUFBaUM7QUFDN0IsWUFBS0EsT0FBTyxDQUFDVSxjQUFSLENBQXVCRCxTQUF2QixNQUFzQyxLQUEzQyxFQUFtRDtBQUMvQztBQUNIOztBQUVERixRQUFBQSxhQUFhLElBQUksT0FBT0UsU0FBeEI7QUFDQSxZQUFJRSxXQUFXLEdBQUdYLE9BQU8sQ0FBQ1MsU0FBRCxDQUF6Qjs7QUFFQSxZQUFLRSxXQUFXLEtBQUssSUFBckIsRUFBNEI7QUFDeEJKLFVBQUFBLGFBQWEsSUFBSSxNQUFNSSxXQUF2QjtBQUNIO0FBQ0o7O0FBRURuQixNQUFBQSxRQUFRLENBQUNDLE1BQVQsR0FBa0JjLGFBQWxCO0FBQ0gsS0ExQ0U7QUE0Q0g7QUFDQUssSUFBQUEsTUFBTSxFQUFFLGdCQUFTdEIsSUFBVCxFQUFlO0FBQ25CLFdBQUtRLEdBQUwsQ0FBU1IsSUFBVCxFQUFlLEVBQWYsRUFBbUI7QUFDZixtQkFBVyxDQUFDO0FBREcsT0FBbkI7QUFHSDtBQWpERSxHQUFQO0FBbURILENBcERjLEVBQWYsQyxDQXNEQTs7O0FBQ0EsSUFBSSxTQUFpQyxPQUFPdUIsTUFBTSxDQUFDQyxPQUFkLEtBQTBCLFdBQS9ELEVBQTRFO0FBQ3hFRCxFQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIxQixRQUFqQjtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jb21wb25lbnRzL2Nvb2tpZS5qcz8wOTJkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gRE9DUzogaHR0cHM6Ly9qYXZhc2NyaXB0LmluZm8vY29va2llXG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVENvb2tpZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIHJldHVybnMgdGhlIGNvb2tpZSB3aXRoIHRoZSBnaXZlbiBuYW1lLFxuICAgICAgICAvLyBvciB1bmRlZmluZWQgaWYgbm90IGZvdW5kXG4gICAgICAgIGdldDogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cChcbiAgICAgICAgICAgICAgICBcIig/Ol58OyApXCIgKyBuYW1lLnJlcGxhY2UoLyhbXFwuJD8qfHt9XFwoXFwpXFxbXFxdXFxcXFxcL1xcK15dKS9nLCAnXFxcXCQxJykgKyBcIj0oW147XSopXCJcbiAgICAgICAgICAgICkpO1xuXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlcyA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKSA6IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gUGxlYXNlIG5vdGUgdGhhdCBhIGNvb2tpZSB2YWx1ZSBpcyBlbmNvZGVkLFxuICAgICAgICAvLyBzbyBnZXRDb29raWUgdXNlcyBhIGJ1aWx0LWluIGRlY29kZVVSSUNvbXBvbmVudCBmdW5jdGlvbiB0byBkZWNvZGUgaXQuXG4gICAgICAgIHNldDogZnVuY3Rpb24obmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIG9wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIgfHwgb3B0aW9ucyA9PT0gbnVsbCApIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgICAgICAgICAgcGF0aDogJy8nXG4gICAgICAgICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgICAgICAgaWYgKCBvcHRpb25zLmV4cGlyZXMgaW5zdGFuY2VvZiBEYXRlICkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZXhwaXJlcyA9IG9wdGlvbnMuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdXBkYXRlZENvb2tpZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblxuICAgICAgICAgICAgZm9yICggdmFyIG9wdGlvbktleSBpbiBvcHRpb25zICkge1xuICAgICAgICAgICAgICAgIGlmICggb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShvcHRpb25LZXkpID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdXBkYXRlZENvb2tpZSArPSBcIjsgXCIgKyBvcHRpb25LZXk7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvblZhbHVlID0gb3B0aW9uc1tvcHRpb25LZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBvcHRpb25WYWx1ZSAhPT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZENvb2tpZSArPSBcIj1cIiArIG9wdGlvblZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gdXBkYXRlZENvb2tpZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBUbyByZW1vdmUgYSBjb29raWUsIHdlIGNhbiBjYWxsIGl0IHdpdGggYSBuZWdhdGl2ZSBleHBpcmF0aW9uIGRhdGU6XG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQobmFtZSwgXCJcIiwge1xuICAgICAgICAgICAgICAgICdtYXgtYWdlJzogLTFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSgpO1xuXG4vLyBXZWJwYWNrIHN1cHBvcnRcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBLVENvb2tpZTtcbn1cbiJdLCJuYW1lcyI6WyJLVENvb2tpZSIsImdldCIsIm5hbWUiLCJtYXRjaGVzIiwiZG9jdW1lbnQiLCJjb29raWUiLCJtYXRjaCIsIlJlZ0V4cCIsInJlcGxhY2UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzZXQiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJwYXRoIiwiZXhwaXJlcyIsIkRhdGUiLCJ0b1VUQ1N0cmluZyIsInVwZGF0ZWRDb29raWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJvcHRpb25LZXkiLCJoYXNPd25Qcm9wZXJ0eSIsIm9wdGlvblZhbHVlIiwicmVtb3ZlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/components/cookie.js\n");
>>>>>>> Stashed changes

                            return value;
                        })(value);
                    }

                    return value;
                }
            }
        },

<<<<<<< Updated upstream
        slide: function(el, dir, speed, callback, recalcMaxHeight) {
            if (!el || (dir == 'up' && KTUtil.visible(el) === false) || (dir == 'down' && KTUtil.visible(el) === true)) {
                return;
            }
=======
"use strict";
eval(" // Class definition\n\nvar KTDialer = function KTDialer(element, options) {\n  ////////////////////////////\n  // ** Private variables  ** //\n  ////////////////////////////\n  var the = this;\n\n  if (!element) {\n    return;\n  } // Default options\n\n\n  var defaultOptions = {\n    min: null,\n    max: null,\n    step: 1,\n    decimals: 0,\n    prefix: \"\",\n    suffix: \"\"\n  }; ////////////////////////////\n  // ** Private methods  ** //\n  ////////////////////////////\n  // Constructor\n\n  var _construct = function _construct() {\n    if (KTUtil.data(element).has('dialer') === true) {\n      the = KTUtil.data(element).get('dialer');\n    } else {\n      _init();\n    }\n  }; // Initialize\n\n\n  var _init = function _init() {\n    // Variables\n    the.options = KTUtil.deepExtend({}, defaultOptions, options); // Elements\n\n    the.element = element;\n    the.incElement = the.element.querySelector('[data-kt-dialer-control=\"increase\"]');\n    the.decElement = the.element.querySelector('[data-kt-dialer-control=\"decrease\"]');\n    the.inputElement = the.element.querySelector('input[type]'); // Set Values\n\n    if (_getOption('decimals')) {\n      the.options.decimals = parseInt(_getOption('decimals'));\n    }\n\n    if (_getOption('prefix')) {\n      the.options.prefix = _getOption('prefix');\n    }\n\n    if (_getOption('suffix')) {\n      the.options.suffix = _getOption('suffix');\n    }\n\n    if (_getOption('step')) {\n      the.options.step = parseFloat(_getOption('step'));\n    }\n\n    if (_getOption('min')) {\n      the.options.min = parseFloat(_getOption('min'));\n    }\n\n    if (_getOption('max')) {\n      the.options.max = parseFloat(_getOption('max'));\n    }\n\n    the.value = parseFloat(the.inputElement.value.replace(/[^\\d.]/g, ''));\n\n    _setValue(); // Event Handlers\n\n\n    _handlers(); // Bind Instance\n\n\n    KTUtil.data(the.element).set('dialer', the);\n  }; // Handlers\n\n\n  var _handlers = function _handlers() {\n    KTUtil.addEvent(the.incElement, 'click', function (e) {\n      e.preventDefault();\n\n      _increase();\n    });\n    KTUtil.addEvent(the.decElement, 'click', function (e) {\n      e.preventDefault();\n\n      _decrease();\n    });\n    KTUtil.addEvent(the.inputElement, 'change', function (e) {\n      e.preventDefault();\n\n      _setValue();\n    });\n  }; // Event handlers\n\n\n  var _increase = function _increase() {\n    // Trigger \"after.dialer\" event\n    KTEventHandler.trigger(the.element, 'kt.dialer.increase', the);\n    the.inputElement.value = the.value + the.options.step;\n\n    _setValue(); // Trigger \"before.dialer\" event\n\n\n    KTEventHandler.trigger(the.element, 'kt.dialer.increased', the);\n    return the;\n  };\n\n  var _decrease = function _decrease() {\n    // Trigger \"after.dialer\" event\n    KTEventHandler.trigger(the.element, 'kt.dialer.decrease', the);\n    the.inputElement.value = the.value - the.options.step;\n\n    _setValue(); // Trigger \"before.dialer\" event\n\n\n    KTEventHandler.trigger(the.element, 'kt.dialer.decreased', the);\n    return the;\n  }; // Set Input Value\n\n\n  var _setValue = function _setValue() {\n    // Trigger \"after.dialer\" event\n    KTEventHandler.trigger(the.element, 'kt.dialer.change', the);\n    the.value = parseFloat(the.inputElement.value.replace(/[^\\d.]/g, ''));\n\n    if (the.value < the.options.min) {\n      the.value = the.options.min;\n    }\n\n    if (the.value > the.options.max) {\n      the.value = the.options.max;\n    }\n\n    the.inputElement.value = _format(the.value); // Trigger \"after.dialer\" event\n\n    KTEventHandler.trigger(the.element, 'kt.dialer.changed', the);\n  }; // Format\n\n\n  var _format = function _format(val) {\n    return the.options.prefix + parseFloat(val).toFixed(the.options.decimals) + the.options.suffix;\n  }; // Get option\n\n\n  var _getOption = function _getOption(name) {\n    if (the.element.hasAttribute('data-kt-dialer-' + name) === true) {\n      var attr = the.element.getAttribute('data-kt-dialer-' + name);\n      var value = attr;\n      return value;\n    } else {\n      return null;\n    }\n  };\n\n  var _destroy = function _destroy() {\n    KTUtil.data(the.element).remove('dialer');\n  }; // Construct class\n\n\n  _construct(); ///////////////////////\n  // ** Public API  ** //\n  ///////////////////////\n  // Plugin API\n\n\n  the.increase = function () {\n    return _increase();\n  };\n\n  the.decrease = function () {\n    return _decrease();\n  };\n\n  the.getElement = function () {\n    return the.element;\n  };\n\n  the.destroy = function () {\n    return _destroy();\n  }; // Event API\n\n\n  the.on = function (name, handler) {\n    return KTEventHandler.on(the.element, name, handler);\n  };\n\n  the.one = function (name, handler) {\n    return KTEventHandler.one(the.element, name, handler);\n  };\n\n  the.off = function (name) {\n    return KTEventHandler.off(the.element, name);\n  };\n\n  the.trigger = function (name, event) {\n    return KTEventHandler.trigger(the.element, name, event, the, event);\n  };\n}; // Static methods\n\n\nKTDialer.getInstance = function (element) {\n  if (element !== null && KTUtil.data(element).has('dialer')) {\n    return KTUtil.data(element).get('dialer');\n  } else {\n    return null;\n  }\n}; // Create instances\n\n\nKTDialer.createInstances = function () {\n  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-kt-dialer=\"true\"]';\n  // Get instances\n  var elements = document.body.querySelectorAll(selector);\n\n  if (elements && elements.length > 0) {\n    for (var i = 0, len = elements.length; i < len; i++) {\n      // Initialize instances\n      new KTDialer(elements[i]);\n    }\n  }\n}; // Global initialization\n\n\nKTDialer.init = function () {\n  KTDialer.createInstances();\n}; // On document ready\n\n\nif (document.readyState === 'loading') {\n  document.addEventListener('DOMContentLoaded', KTDialer.init);\n} else {\n  KTDialer.init();\n} // Webpack support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTDialer;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvZGlhbGVyLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVNDLE9BQVQsRUFBa0JDLE9BQWxCLEVBQTJCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLE1BQUlDLEdBQUcsR0FBRyxJQUFWOztBQUVBLE1BQUksQ0FBQ0YsT0FBTCxFQUFjO0FBQ1Y7QUFDSCxHQVJxQyxDQVV0Qzs7O0FBQ0EsTUFBSUcsY0FBYyxHQUFHO0FBQ2pCQyxJQUFBQSxHQUFHLEVBQUUsSUFEWTtBQUVqQkMsSUFBQUEsR0FBRyxFQUFFLElBRlk7QUFHakJDLElBQUFBLElBQUksRUFBRSxDQUhXO0FBSWpCQyxJQUFBQSxRQUFRLEVBQUUsQ0FKTztBQUtqQkMsSUFBQUEsTUFBTSxFQUFFLEVBTFM7QUFNakJDLElBQUFBLE1BQU0sRUFBRTtBQU5TLEdBQXJCLENBWHNDLENBb0J0QztBQUNBO0FBQ0E7QUFFQTs7QUFDQSxNQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFXO0FBQ3hCLFFBQUtDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZWixPQUFaLEVBQXFCYSxHQUFyQixDQUF5QixRQUF6QixNQUF1QyxJQUE1QyxFQUFtRDtBQUMvQ1gsTUFBQUEsR0FBRyxHQUFHUyxNQUFNLENBQUNDLElBQVAsQ0FBWVosT0FBWixFQUFxQmMsR0FBckIsQ0FBeUIsUUFBekIsQ0FBTjtBQUNILEtBRkQsTUFFTztBQUNIQyxNQUFBQSxLQUFLO0FBQ1I7QUFDSixHQU5ELENBekJzQyxDQWlDdEM7OztBQUNBLE1BQUlBLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQVc7QUFDbkI7QUFDQWIsSUFBQUEsR0FBRyxDQUFDRCxPQUFKLEdBQWNVLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQixFQUFsQixFQUFzQmIsY0FBdEIsRUFBc0NGLE9BQXRDLENBQWQsQ0FGbUIsQ0FJbkI7O0FBQ0FDLElBQUFBLEdBQUcsQ0FBQ0YsT0FBSixHQUFjQSxPQUFkO0FBQ0FFLElBQUFBLEdBQUcsQ0FBQ2UsVUFBSixHQUFpQmYsR0FBRyxDQUFDRixPQUFKLENBQVlrQixhQUFaLENBQTBCLHFDQUExQixDQUFqQjtBQUNBaEIsSUFBQUEsR0FBRyxDQUFDaUIsVUFBSixHQUFpQmpCLEdBQUcsQ0FBQ0YsT0FBSixDQUFZa0IsYUFBWixDQUEwQixxQ0FBMUIsQ0FBakI7QUFDQWhCLElBQUFBLEdBQUcsQ0FBQ2tCLFlBQUosR0FBbUJsQixHQUFHLENBQUNGLE9BQUosQ0FBWWtCLGFBQVosQ0FBMEIsYUFBMUIsQ0FBbkIsQ0FSbUIsQ0FVbkI7O0FBQ0EsUUFBSUcsVUFBVSxDQUFDLFVBQUQsQ0FBZCxFQUE0QjtBQUN4Qm5CLE1BQUFBLEdBQUcsQ0FBQ0QsT0FBSixDQUFZTSxRQUFaLEdBQXVCZSxRQUFRLENBQUNELFVBQVUsQ0FBQyxVQUFELENBQVgsQ0FBL0I7QUFDSDs7QUFFRCxRQUFJQSxVQUFVLENBQUMsUUFBRCxDQUFkLEVBQTBCO0FBQ3RCbkIsTUFBQUEsR0FBRyxDQUFDRCxPQUFKLENBQVlPLE1BQVosR0FBcUJhLFVBQVUsQ0FBQyxRQUFELENBQS9CO0FBQ0g7O0FBRUQsUUFBSUEsVUFBVSxDQUFDLFFBQUQsQ0FBZCxFQUEwQjtBQUN0Qm5CLE1BQUFBLEdBQUcsQ0FBQ0QsT0FBSixDQUFZUSxNQUFaLEdBQXFCWSxVQUFVLENBQUMsUUFBRCxDQUEvQjtBQUNIOztBQUVELFFBQUlBLFVBQVUsQ0FBQyxNQUFELENBQWQsRUFBd0I7QUFDcEJuQixNQUFBQSxHQUFHLENBQUNELE9BQUosQ0FBWUssSUFBWixHQUFtQmlCLFVBQVUsQ0FBQ0YsVUFBVSxDQUFDLE1BQUQsQ0FBWCxDQUE3QjtBQUNIOztBQUVELFFBQUlBLFVBQVUsQ0FBQyxLQUFELENBQWQsRUFBdUI7QUFDbkJuQixNQUFBQSxHQUFHLENBQUNELE9BQUosQ0FBWUcsR0FBWixHQUFrQm1CLFVBQVUsQ0FBQ0YsVUFBVSxDQUFDLEtBQUQsQ0FBWCxDQUE1QjtBQUNIOztBQUVELFFBQUlBLFVBQVUsQ0FBQyxLQUFELENBQWQsRUFBdUI7QUFDbkJuQixNQUFBQSxHQUFHLENBQUNELE9BQUosQ0FBWUksR0FBWixHQUFrQmtCLFVBQVUsQ0FBQ0YsVUFBVSxDQUFDLEtBQUQsQ0FBWCxDQUE1QjtBQUNIOztBQUVEbkIsSUFBQUEsR0FBRyxDQUFDc0IsS0FBSixHQUFZRCxVQUFVLENBQUNyQixHQUFHLENBQUNrQixZQUFKLENBQWlCSSxLQUFqQixDQUF1QkMsT0FBdkIsQ0FBK0IsU0FBL0IsRUFBMEMsRUFBMUMsQ0FBRCxDQUF0Qjs7QUFFQUMsSUFBQUEsU0FBUyxHQXJDVSxDQXVDbkI7OztBQUNBQyxJQUFBQSxTQUFTLEdBeENVLENBMENuQjs7O0FBQ0FoQixJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWVYsR0FBRyxDQUFDRixPQUFoQixFQUF5QjRCLEdBQXpCLENBQTZCLFFBQTdCLEVBQXVDMUIsR0FBdkM7QUFDSCxHQTVDRCxDQWxDc0MsQ0FnRnRDOzs7QUFDQSxNQUFJeUIsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBVztBQUN2QmhCLElBQUFBLE1BQU0sQ0FBQ2tCLFFBQVAsQ0FBZ0IzQixHQUFHLENBQUNlLFVBQXBCLEVBQWdDLE9BQWhDLEVBQXlDLFVBQVNhLENBQVQsRUFBWTtBQUNqREEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGOztBQUVBQyxNQUFBQSxTQUFTO0FBQ1osS0FKRDtBQU1BckIsSUFBQUEsTUFBTSxDQUFDa0IsUUFBUCxDQUFnQjNCLEdBQUcsQ0FBQ2lCLFVBQXBCLEVBQWdDLE9BQWhDLEVBQXlDLFVBQVNXLENBQVQsRUFBWTtBQUNqREEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGOztBQUVBRSxNQUFBQSxTQUFTO0FBQ1osS0FKRDtBQU1BdEIsSUFBQUEsTUFBTSxDQUFDa0IsUUFBUCxDQUFnQjNCLEdBQUcsQ0FBQ2tCLFlBQXBCLEVBQWtDLFFBQWxDLEVBQTRDLFVBQVNVLENBQVQsRUFBWTtBQUNwREEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGOztBQUVBTCxNQUFBQSxTQUFTO0FBQ1osS0FKRDtBQUtILEdBbEJELENBakZzQyxDQXFHdEM7OztBQUNBLE1BQUlNLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQVc7QUFDdkI7QUFDQUUsSUFBQUEsY0FBYyxDQUFDQyxPQUFmLENBQXVCakMsR0FBRyxDQUFDRixPQUEzQixFQUFvQyxvQkFBcEMsRUFBMERFLEdBQTFEO0FBRUFBLElBQUFBLEdBQUcsQ0FBQ2tCLFlBQUosQ0FBaUJJLEtBQWpCLEdBQXlCdEIsR0FBRyxDQUFDc0IsS0FBSixHQUFZdEIsR0FBRyxDQUFDRCxPQUFKLENBQVlLLElBQWpEOztBQUNBb0IsSUFBQUEsU0FBUyxHQUxjLENBT3ZCOzs7QUFDQVEsSUFBQUEsY0FBYyxDQUFDQyxPQUFmLENBQXVCakMsR0FBRyxDQUFDRixPQUEzQixFQUFvQyxxQkFBcEMsRUFBMkRFLEdBQTNEO0FBRUEsV0FBT0EsR0FBUDtBQUNILEdBWEQ7O0FBYUEsTUFBSStCLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQVc7QUFDdkI7QUFDQUMsSUFBQUEsY0FBYyxDQUFDQyxPQUFmLENBQXVCakMsR0FBRyxDQUFDRixPQUEzQixFQUFvQyxvQkFBcEMsRUFBMERFLEdBQTFEO0FBRUFBLElBQUFBLEdBQUcsQ0FBQ2tCLFlBQUosQ0FBaUJJLEtBQWpCLEdBQXlCdEIsR0FBRyxDQUFDc0IsS0FBSixHQUFZdEIsR0FBRyxDQUFDRCxPQUFKLENBQVlLLElBQWpEOztBQUNBb0IsSUFBQUEsU0FBUyxHQUxjLENBT3ZCOzs7QUFDQVEsSUFBQUEsY0FBYyxDQUFDQyxPQUFmLENBQXVCakMsR0FBRyxDQUFDRixPQUEzQixFQUFvQyxxQkFBcEMsRUFBMkRFLEdBQTNEO0FBRUEsV0FBT0EsR0FBUDtBQUNILEdBWEQsQ0FuSHNDLENBZ0l0Qzs7O0FBQ0EsTUFBSXdCLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQVc7QUFDdkI7QUFDQVEsSUFBQUEsY0FBYyxDQUFDQyxPQUFmLENBQXVCakMsR0FBRyxDQUFDRixPQUEzQixFQUFvQyxrQkFBcEMsRUFBd0RFLEdBQXhEO0FBRUFBLElBQUFBLEdBQUcsQ0FBQ3NCLEtBQUosR0FBWUQsVUFBVSxDQUFDckIsR0FBRyxDQUFDa0IsWUFBSixDQUFpQkksS0FBakIsQ0FBdUJDLE9BQXZCLENBQStCLFNBQS9CLEVBQTBDLEVBQTFDLENBQUQsQ0FBdEI7O0FBRUEsUUFBSXZCLEdBQUcsQ0FBQ3NCLEtBQUosR0FBWXRCLEdBQUcsQ0FBQ0QsT0FBSixDQUFZRyxHQUE1QixFQUFpQztBQUM3QkYsTUFBQUEsR0FBRyxDQUFDc0IsS0FBSixHQUFZdEIsR0FBRyxDQUFDRCxPQUFKLENBQVlHLEdBQXhCO0FBQ0g7O0FBRUQsUUFBSUYsR0FBRyxDQUFDc0IsS0FBSixHQUFZdEIsR0FBRyxDQUFDRCxPQUFKLENBQVlJLEdBQTVCLEVBQWlDO0FBQzdCSCxNQUFBQSxHQUFHLENBQUNzQixLQUFKLEdBQVl0QixHQUFHLENBQUNELE9BQUosQ0FBWUksR0FBeEI7QUFDSDs7QUFFREgsSUFBQUEsR0FBRyxDQUFDa0IsWUFBSixDQUFpQkksS0FBakIsR0FBeUJZLE9BQU8sQ0FBQ2xDLEdBQUcsQ0FBQ3NCLEtBQUwsQ0FBaEMsQ0FkdUIsQ0FnQnZCOztBQUNBVSxJQUFBQSxjQUFjLENBQUNDLE9BQWYsQ0FBdUJqQyxHQUFHLENBQUNGLE9BQTNCLEVBQW9DLG1CQUFwQyxFQUF5REUsR0FBekQ7QUFDSCxHQWxCRCxDQWpJc0MsQ0FxSnRDOzs7QUFDQSxNQUFJa0MsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBU0MsR0FBVCxFQUFhO0FBQ3ZCLFdBQU9uQyxHQUFHLENBQUNELE9BQUosQ0FBWU8sTUFBWixHQUFxQmUsVUFBVSxDQUFDYyxHQUFELENBQVYsQ0FBZ0JDLE9BQWhCLENBQXdCcEMsR0FBRyxDQUFDRCxPQUFKLENBQVlNLFFBQXBDLENBQXJCLEdBQXFFTCxHQUFHLENBQUNELE9BQUosQ0FBWVEsTUFBeEY7QUFDSCxHQUZELENBdEpzQyxDQTBKdEM7OztBQUNBLE1BQUlZLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVNrQixJQUFULEVBQWU7QUFDNUIsUUFBS3JDLEdBQUcsQ0FBQ0YsT0FBSixDQUFZd0MsWUFBWixDQUF5QixvQkFBb0JELElBQTdDLE1BQXVELElBQTVELEVBQW1FO0FBQy9ELFVBQUlFLElBQUksR0FBR3ZDLEdBQUcsQ0FBQ0YsT0FBSixDQUFZMEMsWUFBWixDQUF5QixvQkFBb0JILElBQTdDLENBQVg7QUFDQSxVQUFJZixLQUFLLEdBQUdpQixJQUFaO0FBRUEsYUFBT2pCLEtBQVA7QUFDSCxLQUxELE1BS087QUFDSCxhQUFPLElBQVA7QUFDSDtBQUNKLEdBVEQ7O0FBV0EsTUFBSW1CLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQVc7QUFDdEJoQyxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWVYsR0FBRyxDQUFDRixPQUFoQixFQUF5QjRDLE1BQXpCLENBQWdDLFFBQWhDO0FBQ0gsR0FGRCxDQXRLc0MsQ0EwS3RDOzs7QUFDQWxDLEVBQUFBLFVBQVUsR0EzSzRCLENBNkt0QztBQUNBO0FBQ0E7QUFFQTs7O0FBQ0FSLEVBQUFBLEdBQUcsQ0FBQzJDLFFBQUosR0FBZSxZQUFXO0FBQ3RCLFdBQU9iLFNBQVMsRUFBaEI7QUFDSCxHQUZEOztBQUlBOUIsRUFBQUEsR0FBRyxDQUFDNEMsUUFBSixHQUFlLFlBQVc7QUFDdEIsV0FBT2IsU0FBUyxFQUFoQjtBQUNILEdBRkQ7O0FBSUEvQixFQUFBQSxHQUFHLENBQUM2QyxVQUFKLEdBQWlCLFlBQVc7QUFDeEIsV0FBTzdDLEdBQUcsQ0FBQ0YsT0FBWDtBQUNILEdBRkQ7O0FBSUFFLEVBQUFBLEdBQUcsQ0FBQzhDLE9BQUosR0FBYyxZQUFXO0FBQ3JCLFdBQU9MLFFBQVEsRUFBZjtBQUNILEdBRkQsQ0E5THNDLENBa010Qzs7O0FBQ0F6QyxFQUFBQSxHQUFHLENBQUMrQyxFQUFKLEdBQVMsVUFBU1YsSUFBVCxFQUFlVyxPQUFmLEVBQXdCO0FBQzdCLFdBQU9oQixjQUFjLENBQUNlLEVBQWYsQ0FBa0IvQyxHQUFHLENBQUNGLE9BQXRCLEVBQStCdUMsSUFBL0IsRUFBcUNXLE9BQXJDLENBQVA7QUFDSCxHQUZEOztBQUlBaEQsRUFBQUEsR0FBRyxDQUFDaUQsR0FBSixHQUFVLFVBQVNaLElBQVQsRUFBZVcsT0FBZixFQUF3QjtBQUM5QixXQUFPaEIsY0FBYyxDQUFDaUIsR0FBZixDQUFtQmpELEdBQUcsQ0FBQ0YsT0FBdkIsRUFBZ0N1QyxJQUFoQyxFQUFzQ1csT0FBdEMsQ0FBUDtBQUNILEdBRkQ7O0FBSUFoRCxFQUFBQSxHQUFHLENBQUNrRCxHQUFKLEdBQVUsVUFBU2IsSUFBVCxFQUFlO0FBQ3JCLFdBQU9MLGNBQWMsQ0FBQ2tCLEdBQWYsQ0FBbUJsRCxHQUFHLENBQUNGLE9BQXZCLEVBQWdDdUMsSUFBaEMsQ0FBUDtBQUNILEdBRkQ7O0FBSUFyQyxFQUFBQSxHQUFHLENBQUNpQyxPQUFKLEdBQWMsVUFBU0ksSUFBVCxFQUFlYyxLQUFmLEVBQXNCO0FBQ2hDLFdBQU9uQixjQUFjLENBQUNDLE9BQWYsQ0FBdUJqQyxHQUFHLENBQUNGLE9BQTNCLEVBQW9DdUMsSUFBcEMsRUFBMENjLEtBQTFDLEVBQWlEbkQsR0FBakQsRUFBc0RtRCxLQUF0RCxDQUFQO0FBQ0gsR0FGRDtBQUdILENBbE5ELEMsQ0FvTkE7OztBQUNBdEQsUUFBUSxDQUFDdUQsV0FBVCxHQUF1QixVQUFTdEQsT0FBVCxFQUFrQjtBQUNyQyxNQUFLQSxPQUFPLEtBQUssSUFBWixJQUFvQlcsTUFBTSxDQUFDQyxJQUFQLENBQVlaLE9BQVosRUFBcUJhLEdBQXJCLENBQXlCLFFBQXpCLENBQXpCLEVBQThEO0FBQzFELFdBQU9GLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZWixPQUFaLEVBQXFCYyxHQUFyQixDQUF5QixRQUF6QixDQUFQO0FBQ0gsR0FGRCxNQUVPO0FBQ0gsV0FBTyxJQUFQO0FBQ0g7QUFDSixDQU5ELEMsQ0FRQTs7O0FBQ0FmLFFBQVEsQ0FBQ3dELGVBQVQsR0FBMkIsWUFBK0M7QUFBQSxNQUF0Q0MsUUFBc0MsdUVBQTNCLHlCQUEyQjtBQUN0RTtBQUNBLE1BQUlDLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxJQUFULENBQWNDLGdCQUFkLENBQStCSixRQUEvQixDQUFmOztBQUVBLE1BQUtDLFFBQVEsSUFBSUEsUUFBUSxDQUFDSSxNQUFULEdBQWtCLENBQW5DLEVBQXVDO0FBQ25DLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQVIsRUFBV0MsR0FBRyxHQUFHTixRQUFRLENBQUNJLE1BQS9CLEVBQXVDQyxDQUFDLEdBQUdDLEdBQTNDLEVBQWdERCxDQUFDLEVBQWpELEVBQXFEO0FBQ2pEO0FBQ0EsVUFBSS9ELFFBQUosQ0FBYTBELFFBQVEsQ0FBQ0ssQ0FBRCxDQUFyQjtBQUNIO0FBQ0o7QUFDSixDQVZELEMsQ0FZQTs7O0FBQ0EvRCxRQUFRLENBQUNpRSxJQUFULEdBQWdCLFlBQVc7QUFDdkJqRSxFQUFBQSxRQUFRLENBQUN3RCxlQUFUO0FBQ0gsQ0FGRCxDLENBSUE7OztBQUNBLElBQUlHLFFBQVEsQ0FBQ08sVUFBVCxLQUF3QixTQUE1QixFQUF1QztBQUNwQ1AsRUFBQUEsUUFBUSxDQUFDUSxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENuRSxRQUFRLENBQUNpRSxJQUF2RDtBQUNGLENBRkQsTUFFTztBQUNIakUsRUFBQUEsUUFBUSxDQUFDaUUsSUFBVDtBQUNILEMsQ0FFRDs7O0FBQ0EsSUFBSSxTQUFpQyxPQUFPRyxNQUFNLENBQUNDLE9BQWQsS0FBMEIsV0FBL0QsRUFBNEU7QUFDeEVELEVBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnJFLFFBQWpCO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvZGlhbGVyLmpzP2I2ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVERpYWxlciA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gKiogUHJpdmF0ZSB2YXJpYWJsZXMgICoqIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHZhciB0aGUgPSB0aGlzO1xuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IG9wdGlvbnNcbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgIG1pbjogbnVsbCxcbiAgICAgICAgbWF4OiBudWxsLFxuICAgICAgICBzdGVwOiAxLFxuICAgICAgICBkZWNpbWFsczogMCxcbiAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICBzdWZmaXg6IFwiXCJcbiAgICB9O1xuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vICoqIFByaXZhdGUgbWV0aG9kcyAgKiogLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAvLyBDb25zdHJ1Y3RvclxuICAgIHZhciBfY29uc3RydWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICggS1RVdGlsLmRhdGEoZWxlbWVudCkuaGFzKCdkaWFsZXInKSA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIHRoZSA9IEtUVXRpbC5kYXRhKGVsZW1lbnQpLmdldCgnZGlhbGVyJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfaW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZVxuICAgIHZhciBfaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBWYXJpYWJsZXNcbiAgICAgICAgdGhlLm9wdGlvbnMgPSBLVFV0aWwuZGVlcEV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgICAgIC8vIEVsZW1lbnRzXG4gICAgICAgIHRoZS5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhlLmluY0VsZW1lbnQgPSB0aGUuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1kaWFsZXItY29udHJvbD1cImluY3JlYXNlXCJdJyk7XG4gICAgICAgIHRoZS5kZWNFbGVtZW50ID0gdGhlLmVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZGlhbGVyLWNvbnRyb2w9XCJkZWNyZWFzZVwiXScpO1xuICAgICAgICB0aGUuaW5wdXRFbGVtZW50ID0gdGhlLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZV0nKTsgXG4gICAgICAgIFxuICAgICAgICAvLyBTZXQgVmFsdWVzXG4gICAgICAgIGlmIChfZ2V0T3B0aW9uKCdkZWNpbWFscycpKSB7XG4gICAgICAgICAgICB0aGUub3B0aW9ucy5kZWNpbWFscyA9IHBhcnNlSW50KF9nZXRPcHRpb24oJ2RlY2ltYWxzJykpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoX2dldE9wdGlvbigncHJlZml4JykpIHtcbiAgICAgICAgICAgIHRoZS5vcHRpb25zLnByZWZpeCA9IF9nZXRPcHRpb24oJ3ByZWZpeCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoX2dldE9wdGlvbignc3VmZml4JykpIHtcbiAgICAgICAgICAgIHRoZS5vcHRpb25zLnN1ZmZpeCA9IF9nZXRPcHRpb24oJ3N1ZmZpeCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoX2dldE9wdGlvbignc3RlcCcpKSB7XG4gICAgICAgICAgICB0aGUub3B0aW9ucy5zdGVwID0gcGFyc2VGbG9hdChfZ2V0T3B0aW9uKCdzdGVwJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9nZXRPcHRpb24oJ21pbicpKSB7XG4gICAgICAgICAgICB0aGUub3B0aW9ucy5taW4gPSBwYXJzZUZsb2F0KF9nZXRPcHRpb24oJ21pbicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfZ2V0T3B0aW9uKCdtYXgnKSkge1xuICAgICAgICAgICAgdGhlLm9wdGlvbnMubWF4ID0gcGFyc2VGbG9hdChfZ2V0T3B0aW9uKCdtYXgnKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGUudmFsdWUgPSBwYXJzZUZsb2F0KHRoZS5pbnB1dEVsZW1lbnQudmFsdWUucmVwbGFjZSgvW15cXGQuXS9nLCAnJykpOyAgXG5cbiAgICAgICAgX3NldFZhbHVlKCk7XG5cbiAgICAgICAgLy8gRXZlbnQgSGFuZGxlcnNcbiAgICAgICAgX2hhbmRsZXJzKCk7XG5cbiAgICAgICAgLy8gQmluZCBJbnN0YW5jZVxuICAgICAgICBLVFV0aWwuZGF0YSh0aGUuZWxlbWVudCkuc2V0KCdkaWFsZXInLCB0aGUpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZXJzXG4gICAgdmFyIF9oYW5kbGVycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBLVFV0aWwuYWRkRXZlbnQodGhlLmluY0VsZW1lbnQsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgXG4gICAgICAgICAgICBfaW5jcmVhc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgS1RVdGlsLmFkZEV2ZW50KHRoZS5kZWNFbGVtZW50LCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIF9kZWNyZWFzZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBLVFV0aWwuYWRkRXZlbnQodGhlLmlucHV0RWxlbWVudCwgJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgX3NldFZhbHVlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEV2ZW50IGhhbmRsZXJzXG4gICAgdmFyIF9pbmNyZWFzZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBUcmlnZ2VyIFwiYWZ0ZXIuZGlhbGVyXCIgZXZlbnRcbiAgICAgICAgS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgJ2t0LmRpYWxlci5pbmNyZWFzZScsIHRoZSk7XG5cbiAgICAgICAgdGhlLmlucHV0RWxlbWVudC52YWx1ZSA9IHRoZS52YWx1ZSArIHRoZS5vcHRpb25zLnN0ZXA7XG4gICAgICAgIF9zZXRWYWx1ZSgpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgXCJiZWZvcmUuZGlhbGVyXCIgZXZlbnRcbiAgICAgICAgS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgJ2t0LmRpYWxlci5pbmNyZWFzZWQnLCB0aGUpO1xuXG4gICAgICAgIHJldHVybiB0aGU7XG4gICAgfVxuXG4gICAgdmFyIF9kZWNyZWFzZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBUcmlnZ2VyIFwiYWZ0ZXIuZGlhbGVyXCIgZXZlbnRcbiAgICAgICAgS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgJ2t0LmRpYWxlci5kZWNyZWFzZScsIHRoZSk7XG5cbiAgICAgICAgdGhlLmlucHV0RWxlbWVudC52YWx1ZSA9IHRoZS52YWx1ZSAtIHRoZS5vcHRpb25zLnN0ZXA7ICAgICAgICBcbiAgICAgICAgX3NldFZhbHVlKCk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciBcImJlZm9yZS5kaWFsZXJcIiBldmVudFxuICAgICAgICBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3QuZGlhbGVyLmRlY3JlYXNlZCcsIHRoZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoZTtcbiAgICB9XG5cbiAgICAvLyBTZXQgSW5wdXQgVmFsdWVcbiAgICB2YXIgX3NldFZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFRyaWdnZXIgXCJhZnRlci5kaWFsZXJcIiBldmVudFxuICAgICAgICBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3QuZGlhbGVyLmNoYW5nZScsIHRoZSk7XG5cbiAgICAgICAgdGhlLnZhbHVlID0gcGFyc2VGbG9hdCh0aGUuaW5wdXRFbGVtZW50LnZhbHVlLnJlcGxhY2UoL1teXFxkLl0vZywgJycpKTsgXG4gICAgICAgIFxuICAgICAgICBpZiAodGhlLnZhbHVlIDwgdGhlLm9wdGlvbnMubWluKSB7XG4gICAgICAgICAgICB0aGUudmFsdWUgPSB0aGUub3B0aW9ucy5taW47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhlLnZhbHVlID4gdGhlLm9wdGlvbnMubWF4KSB7XG4gICAgICAgICAgICB0aGUudmFsdWUgPSB0aGUub3B0aW9ucy5tYXg7XG4gICAgICAgIH1cblxuICAgICAgICB0aGUuaW5wdXRFbGVtZW50LnZhbHVlID0gX2Zvcm1hdCh0aGUudmFsdWUpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgXCJhZnRlci5kaWFsZXJcIiBldmVudFxuICAgICAgICBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3QuZGlhbGVyLmNoYW5nZWQnLCB0aGUpO1xuICAgIH1cblxuICAgIC8vIEZvcm1hdFxuICAgIHZhciBfZm9ybWF0ID0gZnVuY3Rpb24odmFsKXtcbiAgICAgICAgcmV0dXJuIHRoZS5vcHRpb25zLnByZWZpeCArIHBhcnNlRmxvYXQodmFsKS50b0ZpeGVkKHRoZS5vcHRpb25zLmRlY2ltYWxzKSArIHRoZS5vcHRpb25zLnN1ZmZpeDsgICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIC8vIEdldCBvcHRpb25cbiAgICB2YXIgX2dldE9wdGlvbiA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgaWYgKCB0aGUuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEta3QtZGlhbGVyLScgKyBuYW1lKSA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIHZhciBhdHRyID0gdGhlLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWt0LWRpYWxlci0nICsgbmFtZSk7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBhdHRyOyAgICAgICAgICAgIFxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBLVFV0aWwuZGF0YSh0aGUuZWxlbWVudCkucmVtb3ZlKCdkaWFsZXInKTtcbiAgICB9XG5cbiAgICAvLyBDb25zdHJ1Y3QgY2xhc3NcbiAgICBfY29uc3RydWN0KCk7XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vICoqIFB1YmxpYyBBUEkgICoqIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIFBsdWdpbiBBUElcbiAgICB0aGUuaW5jcmVhc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9pbmNyZWFzZSgpO1xuICAgIH1cblxuICAgIHRoZS5kZWNyZWFzZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2RlY3JlYXNlKCk7XG4gICAgfVxuXG4gICAgdGhlLmdldEVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoZS5lbGVtZW50O1xuICAgIH1cblxuICAgIHRoZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8vIEV2ZW50IEFQSVxuICAgIHRoZS5vbiA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIEtURXZlbnRIYW5kbGVyLm9uKHRoZS5lbGVtZW50LCBuYW1lLCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICB0aGUub25lID0gZnVuY3Rpb24obmFtZSwgaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gS1RFdmVudEhhbmRsZXIub25lKHRoZS5lbGVtZW50LCBuYW1lLCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICB0aGUub2ZmID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gS1RFdmVudEhhbmRsZXIub2ZmKHRoZS5lbGVtZW50LCBuYW1lKTtcbiAgICB9XG5cbiAgICB0aGUudHJpZ2dlciA9IGZ1bmN0aW9uKG5hbWUsIGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCBuYW1lLCBldmVudCwgdGhlLCBldmVudCk7XG4gICAgfVxufTtcblxuLy8gU3RhdGljIG1ldGhvZHNcbktURGlhbGVyLmdldEluc3RhbmNlID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIGlmICggZWxlbWVudCAhPT0gbnVsbCAmJiBLVFV0aWwuZGF0YShlbGVtZW50KS5oYXMoJ2RpYWxlcicpICkge1xuICAgICAgICByZXR1cm4gS1RVdGlsLmRhdGEoZWxlbWVudCkuZ2V0KCdkaWFsZXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbi8vIENyZWF0ZSBpbnN0YW5jZXNcbktURGlhbGVyLmNyZWF0ZUluc3RhbmNlcyA9IGZ1bmN0aW9uKHNlbGVjdG9yID0gJ1tkYXRhLWt0LWRpYWxlcj1cInRydWVcIl0nKSB7XG4gICAgLy8gR2V0IGluc3RhbmNlc1xuICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgICBpZiAoIGVsZW1lbnRzICYmIGVsZW1lbnRzLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZXNcbiAgICAgICAgICAgIG5ldyBLVERpYWxlcihlbGVtZW50c1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEdsb2JhbCBpbml0aWFsaXphdGlvblxuS1REaWFsZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIEtURGlhbGVyLmNyZWF0ZUluc3RhbmNlcygpO1xufTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBLVERpYWxlci5pbml0KTtcbn0gZWxzZSB7XG4gICAgS1REaWFsZXIuaW5pdCgpO1xufVxuXG4vLyBXZWJwYWNrIHN1cHBvcnRcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBLVERpYWxlcjtcbn0iXSwibmFtZXMiOlsiS1REaWFsZXIiLCJlbGVtZW50Iiwib3B0aW9ucyIsInRoZSIsImRlZmF1bHRPcHRpb25zIiwibWluIiwibWF4Iiwic3RlcCIsImRlY2ltYWxzIiwicHJlZml4Iiwic3VmZml4IiwiX2NvbnN0cnVjdCIsIktUVXRpbCIsImRhdGEiLCJoYXMiLCJnZXQiLCJfaW5pdCIsImRlZXBFeHRlbmQiLCJpbmNFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImRlY0VsZW1lbnQiLCJpbnB1dEVsZW1lbnQiLCJfZ2V0T3B0aW9uIiwicGFyc2VJbnQiLCJwYXJzZUZsb2F0IiwidmFsdWUiLCJyZXBsYWNlIiwiX3NldFZhbHVlIiwiX2hhbmRsZXJzIiwic2V0IiwiYWRkRXZlbnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJfaW5jcmVhc2UiLCJfZGVjcmVhc2UiLCJLVEV2ZW50SGFuZGxlciIsInRyaWdnZXIiLCJfZm9ybWF0IiwidmFsIiwidG9GaXhlZCIsIm5hbWUiLCJoYXNBdHRyaWJ1dGUiLCJhdHRyIiwiZ2V0QXR0cmlidXRlIiwiX2Rlc3Ryb3kiLCJyZW1vdmUiLCJpbmNyZWFzZSIsImRlY3JlYXNlIiwiZ2V0RWxlbWVudCIsImRlc3Ryb3kiLCJvbiIsImhhbmRsZXIiLCJvbmUiLCJvZmYiLCJldmVudCIsImdldEluc3RhbmNlIiwiY3JlYXRlSW5zdGFuY2VzIiwic2VsZWN0b3IiLCJlbGVtZW50cyIsImRvY3VtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJpIiwibGVuIiwiaW5pdCIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/components/dialer.js\n");
>>>>>>> Stashed changes

            speed = (speed ? speed : 600);
            var calcHeight = KTUtil.actualHeight(el);
            var calcPaddingTop = false;
            var calcPaddingBottom = false;

            if (KTUtil.css(el, 'padding-top') && KTUtil.data(el).has('slide-padding-top') !== true) {
                KTUtil.data(el).set('slide-padding-top', KTUtil.css(el, 'padding-top'));
            }

<<<<<<< Updated upstream
            if (KTUtil.css(el, 'padding-bottom') && KTUtil.data(el).has('slide-padding-bottom') !== true) {
                KTUtil.data(el).set('slide-padding-bottom', KTUtil.css(el, 'padding-bottom'));
            }
=======
"use strict";
eval(" // Class definition\n\nvar KTDrawer = function KTDrawer(element, options) {\n  //////////////////////////////\n  // ** Private variables  ** //\n  //////////////////////////////\n  var the = this;\n  var body = document.getElementsByTagName(\"BODY\")[0];\n\n  if (typeof element === \"undefined\" || element === null) {\n    return;\n  } // Default options\n\n\n  var defaultOptions = {\n    overlay: true,\n    direction: 'end',\n    baseClass: 'drawer',\n    overlayClass: 'drawer-overlay'\n  }; ////////////////////////////\n  // ** Private methods  ** //\n  ////////////////////////////\n\n  var _construct = function _construct() {\n    if (KTUtil.data(element).has('drawer')) {\n      the = KTUtil.data(element).get('drawer');\n    } else {\n      _init();\n    }\n  };\n\n  var _init = function _init() {\n    // Variables\n    the.options = KTUtil.deepExtend({}, defaultOptions, options);\n    the.uid = KTUtil.getUniqueId('drawer');\n    the.element = element;\n    the.overlayElement = null;\n    the.name = the.element.getAttribute('data-kt-drawer-name');\n    the.shown = false;\n    the.lastWidth;\n    the.toggleElement = null; // Set initialized\n\n    the.element.setAttribute('data-kt-drawer', 'true'); // Event Handlers\n\n    _handlers(); // Update Instance\n\n\n    _update(); // Bind Instance\n\n\n    KTUtil.data(the.element).set('drawer', the);\n  };\n\n  var _handlers = function _handlers() {\n    var togglers = _getOption('toggle');\n\n    var closers = _getOption('close');\n\n    if (togglers !== null && togglers.length > 0) {\n      KTUtil.on(body, togglers, 'click', function (e) {\n        e.preventDefault();\n        the.toggleElement = this;\n\n        _toggle();\n      });\n    }\n\n    if (closers !== null && closers.length > 0) {\n      KTUtil.on(body, closers, 'click', function (e) {\n        e.preventDefault();\n        the.closeElement = this;\n\n        _hide();\n      });\n    }\n  };\n\n  var _toggle = function _toggle() {\n    if (KTEventHandler.trigger(the.element, 'kt.drawer.toggle', the) === false) {\n      return;\n    }\n\n    if (the.shown === true) {\n      _hide();\n    } else {\n      _show();\n    }\n\n    KTEventHandler.trigger(the.element, 'kt.drawer.toggled', the);\n  };\n\n  var _hide = function _hide() {\n    if (KTEventHandler.trigger(the.element, 'kt.drawer.hide', the) === false) {\n      return;\n    }\n\n    the.shown = false;\n\n    _deleteOverlay();\n\n    body.removeAttribute('data-kt-drawer-' + the.name, 'on');\n    body.removeAttribute('data-kt-drawer');\n    KTUtil.removeClass(the.element, the.options.baseClass + '-on');\n\n    if (the.toggleElement !== null) {\n      KTUtil.removeClass(the.toggleElement, 'active');\n    }\n\n    KTEventHandler.trigger(the.element, 'kt.drawer.after.hidden', the) === false;\n  };\n\n  var _show = function _show() {\n    if (KTEventHandler.trigger(the.element, 'kt.drawer.show', the) === false) {\n      return;\n    }\n\n    the.shown = true;\n\n    _createOverlay();\n\n    body.setAttribute('data-kt-drawer-' + the.name, 'on');\n    body.setAttribute('data-kt-drawer', 'on');\n    KTUtil.addClass(the.element, the.options.baseClass + '-on');\n\n    if (the.toggleElement !== null) {\n      KTUtil.addClass(the.toggleElement, 'active');\n    }\n\n    KTEventHandler.trigger(the.element, 'kt.drawer.shown', the);\n  };\n\n  var _update = function _update() {\n    var width = _getWidth();\n\n    var direction = _getOption('direction'); // Reset state\n\n\n    if (KTUtil.hasClass(the.element, the.options.baseClass + '-on') === true && String(body.getAttribute('data-kt-drawer-' + the.name + '-')) === 'on') {\n      the.shown = true;\n    } else {\n      the.shown = false;\n    } // Activate/deactivate\n\n\n    if (_getOption('activate') === true) {\n      KTUtil.addClass(the.element, the.options.baseClass);\n      KTUtil.addClass(the.element, the.options.baseClass + '-' + direction);\n      KTUtil.css(the.element, 'width', width, true);\n      the.lastWidth = width;\n    } else {\n      KTUtil.css(the.element, 'width', '');\n      KTUtil.removeClass(the.element, the.options.baseClass);\n      KTUtil.removeClass(the.element, the.options.baseClass + '-' + direction);\n\n      _hide();\n    }\n  };\n\n  var _createOverlay = function _createOverlay() {\n    if (_getOption('overlay') === true) {\n      the.overlayElement = document.createElement('DIV');\n      KTUtil.css(the.overlayElement, 'z-index', KTUtil.css(the.element, 'z-index') - 1); // update\n\n      body.append(the.overlayElement);\n      KTUtil.addClass(the.overlayElement, _getOption('overlay-class'));\n      KTUtil.addEvent(the.overlayElement, 'click', function (e) {\n        e.preventDefault();\n\n        _hide();\n      });\n    }\n  };\n\n  var _deleteOverlay = function _deleteOverlay() {\n    if (the.overlayElement !== null) {\n      KTUtil.remove(the.overlayElement);\n    }\n  };\n\n  var _getOption = function _getOption(name) {\n    if (the.element.hasAttribute('data-kt-drawer-' + name) === true) {\n      var attr = the.element.getAttribute('data-kt-drawer-' + name);\n      var value = KTUtil.getResponsiveValue(attr);\n\n      if (value !== null && String(value) === 'true') {\n        value = true;\n      } else if (value !== null && String(value) === 'false') {\n        value = false;\n      }\n\n      return value;\n    } else {\n      var optionName = KTUtil.snakeToCamel(name);\n\n      if (the.options[optionName]) {\n        return KTUtil.getResponsiveValue(the.options[optionName]);\n      } else {\n        return null;\n      }\n    }\n  };\n\n  var _getWidth = function _getWidth() {\n    var width = _getOption('width');\n\n    if (width === 'auto') {\n      width = KTUtil.css(the.element, 'width');\n    }\n\n    return width;\n  };\n\n  var _destroy = function _destroy() {\n    KTUtil.data(the.element).remove('drawer');\n  }; // Construct class\n\n\n  _construct(); ///////////////////////\n  // ** Public API  ** //\n  ///////////////////////\n  // Plugin API\n\n\n  the.toggle = function () {\n    return _toggle();\n  };\n\n  the.show = function () {\n    return _show();\n  };\n\n  the.hide = function () {\n    return _hide();\n  };\n\n  the.isShown = function () {\n    return the.shown;\n  };\n\n  the.update = function () {\n    _update();\n  };\n\n  the.goElement = function () {\n    return the.element;\n  };\n\n  the.destroy = function () {\n    return _destroy();\n  }; // Event API\n\n\n  the.on = function (name, handler) {\n    return KTEventHandler.on(the.element, name, handler);\n  };\n\n  the.one = function (name, handler) {\n    return KTEventHandler.one(the.element, name, handler);\n  };\n\n  the.off = function (name) {\n    return KTEventHandler.off(the.element, name);\n  };\n\n  the.trigger = function (name, event) {\n    return KTEventHandler.trigger(the.element, name, event, the, event);\n  };\n}; // Static methods\n\n\nKTDrawer.getInstance = function (element) {\n  if (element !== null && KTUtil.data(element).has('drawer')) {\n    return KTUtil.data(element).get('drawer');\n  } else {\n    return null;\n  }\n}; // Hide all drawers and skip one if provided\n\n\nKTDrawer.hideAll = function () {\n  var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '[data-kt-drawer=\"true\"]';\n  var items = document.querySelectorAll(selector);\n\n  if (items && items.length > 0) {\n    for (var i = 0, len = items.length; i < len; i++) {\n      var item = items[i];\n      var drawer = KTDrawer.getInstance(item);\n\n      if (!drawer) {\n        continue;\n      }\n\n      if (skip) {\n        if (item !== skip) {\n          drawer.hide();\n        }\n      } else {\n        drawer.hide();\n      }\n    }\n  }\n}; // Update all drawers\n\n\nKTDrawer.updateAll = function () {\n  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-kt-drawer=\"true\"]';\n  var items = document.querySelectorAll(selector);\n\n  if (items && items.length > 0) {\n    for (var i = 0, len = items.length; i < len; i++) {\n      var item = items[i];\n      var drawer = KTDrawer.getInstance(item);\n\n      if (drawer) {\n        drawer.update();\n        ;\n      }\n    }\n  }\n}; // Create instances\n\n\nKTDrawer.createInstances = function () {\n  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-kt-drawer=\"true\"]';\n  var body = document.getElementsByTagName(\"BODY\")[0]; // Initialize Menus\n\n  var elements = body.querySelectorAll(selector);\n  var drawer;\n\n  if (elements && elements.length > 0) {\n    for (var i = 0, len = elements.length; i < len; i++) {\n      drawer = new KTDrawer(elements[i]);\n    }\n  }\n}; // Toggle instances\n\n\nKTDrawer.handleShow = function () {\n  // External drawer toggle handler\n  KTUtil.on(document.body, '[data-kt-drawer-show=\"true\"][data-kt-drawer-target]', 'click', function (e) {\n    var element = document.querySelector(this.getAttribute('data-kt-drawer-target'));\n\n    if (element) {\n      KTDrawer.getInstance(element).show();\n    }\n  });\n}; // Dismiss instances\n\n\nKTDrawer.handleDismiss = function () {\n  // External drawer toggle handler\n  KTUtil.on(document.body, '[data-kt-drawer-dismiss=\"true\"]', 'click', function (e) {\n    var element = this.closest('[data-kt-drawer=\"true\"]');\n\n    if (element) {\n      var drawer = KTDrawer.getInstance(element);\n\n      if (drawer.isShown()) {\n        drawer.hide();\n      }\n    }\n  });\n}; // Window resize Handling\n\n\nwindow.addEventListener('resize', function () {\n  var timer;\n  var body = document.getElementsByTagName(\"BODY\")[0];\n  KTUtil.throttle(timer, function () {\n    // Locate and update drawer instances on window resize\n    var elements = body.querySelectorAll('[data-kt-drawer=\"true\"]');\n\n    if (elements && elements.length > 0) {\n      for (var i = 0, len = elements.length; i < len; i++) {\n        var drawer = KTDrawer.getInstance(elements[i]);\n\n        if (drawer) {\n          drawer.update();\n        }\n      }\n    }\n  }, 200);\n}); // Global initialization\n\nKTDrawer.init = function () {\n  KTDrawer.createInstances();\n  KTDrawer.handleShow();\n  KTDrawer.handleDismiss();\n}; // On document ready\n\n\nif (document.readyState === 'loading') {\n  document.addEventListener('DOMContentLoaded', KTDrawer.init);\n} else {\n  KTDrawer.init();\n} // Webpack support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTDrawer;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvZHJhd2VyLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVNDLE9BQVQsRUFBa0JDLE9BQWxCLEVBQTJCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLE1BQUlDLEdBQUcsR0FBRyxJQUFWO0FBQ0EsTUFBSUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQVg7O0FBRUEsTUFBSyxPQUFPTCxPQUFQLEtBQW1CLFdBQW5CLElBQWtDQSxPQUFPLEtBQUssSUFBbkQsRUFBMEQ7QUFDdEQ7QUFDSCxHQVRxQyxDQVd0Qzs7O0FBQ0EsTUFBSU0sY0FBYyxHQUFHO0FBQ2pCQyxJQUFBQSxPQUFPLEVBQUUsSUFEUTtBQUVqQkMsSUFBQUEsU0FBUyxFQUFFLEtBRk07QUFHakJDLElBQUFBLFNBQVMsRUFBRSxRQUhNO0FBSWpCQyxJQUFBQSxZQUFZLEVBQUU7QUFKRyxHQUFyQixDQVpzQyxDQW1CdEM7QUFDQTtBQUNBOztBQUVBLE1BQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVc7QUFDeEIsUUFBS0MsTUFBTSxDQUFDQyxJQUFQLENBQVliLE9BQVosRUFBcUJjLEdBQXJCLENBQXlCLFFBQXpCLENBQUwsRUFBMEM7QUFDdENaLE1BQUFBLEdBQUcsR0FBR1UsTUFBTSxDQUFDQyxJQUFQLENBQVliLE9BQVosRUFBcUJlLEdBQXJCLENBQXlCLFFBQXpCLENBQU47QUFDSCxLQUZELE1BRU87QUFDSEMsTUFBQUEsS0FBSztBQUNSO0FBQ0osR0FORDs7QUFRQSxNQUFJQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFXO0FBQ25CO0FBQ0FkLElBQUFBLEdBQUcsQ0FBQ0QsT0FBSixHQUFjVyxNQUFNLENBQUNLLFVBQVAsQ0FBa0IsRUFBbEIsRUFBc0JYLGNBQXRCLEVBQXNDTCxPQUF0QyxDQUFkO0FBQ0FDLElBQUFBLEdBQUcs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SCxDLENBRUQ7OztBQUNBLElBQUksU0FBaUMsT0FBT0UsTUFBTSxDQUFDQyxPQUFkLEtBQTBCLFdBQS9ELEVBQTRFO0FBQ3hFRCxFQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUJwRyxRQUFqQjtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jb21wb25lbnRzL2RyYXdlci5qcz9lZTFmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1REcmF3ZXIgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gKiogUHJpdmF0ZSB2YXJpYWJsZXMgICoqIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgdmFyIHRoZSA9IHRoaXM7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkJPRFlcIilbMF07XG5cbiAgICBpZiAoIHR5cGVvZiBlbGVtZW50ID09PSBcInVuZGVmaW5lZFwiIHx8IGVsZW1lbnQgPT09IG51bGwgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IG9wdGlvbnNcbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgIG92ZXJsYXk6IHRydWUsXG4gICAgICAgIGRpcmVjdGlvbjogJ2VuZCcsXG4gICAgICAgIGJhc2VDbGFzczogJ2RyYXdlcicsXG4gICAgICAgIG92ZXJsYXlDbGFzczogJ2RyYXdlci1vdmVybGF5J1xuICAgIH07XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gKiogUHJpdmF0ZSBtZXRob2RzICAqKiAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHZhciBfY29uc3RydWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICggS1RVdGlsLmRhdGEoZWxlbWVudCkuaGFzKCdkcmF3ZXInKSApIHtcbiAgICAgICAgICAgIHRoZSA9IEtUVXRpbC5kYXRhKGVsZW1lbnQpLmdldCgnZHJhd2VyJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfaW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFZhcmlhYmxlc1xuICAgICAgICB0aGUub3B0aW9ucyA9IEtUVXRpbC5kZWVwRXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoZS51aWQgPSBLVFV0aWwuZ2V0VW5pcXVlSWQoJ2RyYXdlcicpO1xuICAgICAgICB0aGUuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoZS5vdmVybGF5RWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoZS5uYW1lID0gdGhlLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWt0LWRyYXdlci1uYW1lJyk7XG4gICAgICAgIHRoZS5zaG93biA9IGZhbHNlO1xuICAgICAgICB0aGUubGFzdFdpZHRoO1xuICAgICAgICB0aGUudG9nZ2xlRWxlbWVudCA9IG51bGw7XG5cbiAgICAgICAgLy8gU2V0IGluaXRpYWxpemVkXG4gICAgICAgIHRoZS5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1rdC1kcmF3ZXInLCAndHJ1ZScpO1xuXG4gICAgICAgIC8vIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgIF9oYW5kbGVycygpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBJbnN0YW5jZVxuICAgICAgICBfdXBkYXRlKCk7XG5cbiAgICAgICAgLy8gQmluZCBJbnN0YW5jZVxuICAgICAgICBLVFV0aWwuZGF0YSh0aGUuZWxlbWVudCkuc2V0KCdkcmF3ZXInLCB0aGUpO1xuICAgIH1cblxuICAgIHZhciBfaGFuZGxlcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRvZ2dsZXJzID0gX2dldE9wdGlvbigndG9nZ2xlJyk7XG4gICAgICAgIHZhciBjbG9zZXJzID0gX2dldE9wdGlvbignY2xvc2UnKTtcblxuICAgICAgICBpZiAoIHRvZ2dsZXJzICE9PSBudWxsICYmIHRvZ2dsZXJzLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICBLVFV0aWwub24oYm9keSwgdG9nZ2xlcnMsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICB0aGUudG9nZ2xlRWxlbWVudCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgX3RvZ2dsZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGNsb3NlcnMgIT09IG51bGwgJiYgY2xvc2Vycy5sZW5ndGggPiAwICkge1xuICAgICAgICAgICAgS1RVdGlsLm9uKGJvZHksIGNsb3NlcnMsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICB0aGUuY2xvc2VFbGVtZW50ID0gdGhpcztcbiAgICAgICAgICAgICAgICBfaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX3RvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIEtURXZlbnRIYW5kbGVyLnRyaWdnZXIodGhlLmVsZW1lbnQsICdrdC5kcmF3ZXIudG9nZ2xlJywgdGhlKSA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHRoZS5zaG93biA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIF9oaWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfc2hvdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgJ2t0LmRyYXdlci50b2dnbGVkJywgdGhlKTtcbiAgICB9XG5cbiAgICB2YXIgX2hpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3QuZHJhd2VyLmhpZGUnLCB0aGUpID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoZS5zaG93biA9IGZhbHNlO1xuXG4gICAgICAgIF9kZWxldGVPdmVybGF5KCk7XG5cbiAgICAgICAgYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEta3QtZHJhd2VyLScgKyB0aGUubmFtZSwgJ29uJyk7XG4gICAgICAgIGJvZHkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWt0LWRyYXdlcicpO1xuXG4gICAgICAgIEtUVXRpbC5yZW1vdmVDbGFzcyh0aGUuZWxlbWVudCwgdGhlLm9wdGlvbnMuYmFzZUNsYXNzICsgJy1vbicpO1xuXG4gICAgICAgIGlmICggdGhlLnRvZ2dsZUVsZW1lbnQgIT09IG51bGwgKSB7XG4gICAgICAgICAgICBLVFV0aWwucmVtb3ZlQ2xhc3ModGhlLnRvZ2dsZUVsZW1lbnQsICdhY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEtURXZlbnRIYW5kbGVyLnRyaWdnZXIodGhlLmVsZW1lbnQsICdrdC5kcmF3ZXIuYWZ0ZXIuaGlkZGVuJywgdGhlKSA9PT0gZmFsc2VcbiAgICB9XG5cbiAgICB2YXIgX3Nob3cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3QuZHJhd2VyLnNob3cnLCB0aGUpID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoZS5zaG93biA9IHRydWU7XG5cbiAgICAgICAgX2NyZWF0ZU92ZXJsYXkoKTtcbiAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEta3QtZHJhd2VyLScgKyB0aGUubmFtZSwgJ29uJyk7XG4gICAgICAgIGJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLWt0LWRyYXdlcicsICdvbicpO1xuXG4gICAgICAgIEtUVXRpbC5hZGRDbGFzcyh0aGUuZWxlbWVudCwgdGhlLm9wdGlvbnMuYmFzZUNsYXNzICsgJy1vbicpO1xuXG4gICAgICAgIGlmICggdGhlLnRvZ2dsZUVsZW1lbnQgIT09IG51bGwgKSB7XG4gICAgICAgICAgICBLVFV0aWwuYWRkQ2xhc3ModGhlLnRvZ2dsZUVsZW1lbnQsICdhY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEtURXZlbnRIYW5kbGVyLnRyaWdnZXIodGhlLmVsZW1lbnQsICdrdC5kcmF3ZXIuc2hvd24nLCB0aGUpO1xuICAgIH1cblxuICAgIHZhciBfdXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB3aWR0aCA9IF9nZXRXaWR0aCgpO1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gX2dldE9wdGlvbignZGlyZWN0aW9uJyk7XG5cbiAgICAgICAgLy8gUmVzZXQgc3RhdGVcbiAgICAgICAgaWYgKCBLVFV0aWwuaGFzQ2xhc3ModGhlLmVsZW1lbnQsIHRoZS5vcHRpb25zLmJhc2VDbGFzcyArICctb24nKSA9PT0gdHJ1ZSAmJiBTdHJpbmcoYm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEta3QtZHJhd2VyLScgKyB0aGUubmFtZSArICctJykpID09PSAnb24nICkge1xuICAgICAgICAgICAgdGhlLnNob3duID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoZS5zaG93biA9IGZhbHNlO1xuICAgICAgICB9ICAgICAgIFxuXG4gICAgICAgIC8vIEFjdGl2YXRlL2RlYWN0aXZhdGVcbiAgICAgICAgaWYgKCBfZ2V0T3B0aW9uKCdhY3RpdmF0ZScpID09PSB0cnVlICkge1xuICAgICAgICAgICAgS1RVdGlsLmFkZENsYXNzKHRoZS5lbGVtZW50LCB0aGUub3B0aW9ucy5iYXNlQ2xhc3MpO1xuICAgICAgICAgICAgS1RVdGlsLmFkZENsYXNzKHRoZS5lbGVtZW50LCB0aGUub3B0aW9ucy5iYXNlQ2xhc3MgKyAnLScgKyBkaXJlY3Rpb24pO1xuICAgICAgICAgICAgS1RVdGlsLmNzcyh0aGUuZWxlbWVudCwgJ3dpZHRoJywgd2lkdGgsIHRydWUpO1xuXG4gICAgICAgICAgICB0aGUubGFzdFdpZHRoID0gd2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBLVFV0aWwuY3NzKHRoZS5lbGVtZW50LCAnd2lkdGgnLCAnJyk7XG5cbiAgICAgICAgICAgIEtUVXRpbC5yZW1vdmVDbGFzcyh0aGUuZWxlbWVudCwgdGhlLm9wdGlvbnMuYmFzZUNsYXNzKTtcbiAgICAgICAgICAgIEtUVXRpbC5yZW1vdmVDbGFzcyh0aGUuZWxlbWVudCwgdGhlLm9wdGlvbnMuYmFzZUNsYXNzICsgJy0nICsgZGlyZWN0aW9uKTtcblxuICAgICAgICAgICAgX2hpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfY3JlYXRlT3ZlcmxheSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIF9nZXRPcHRpb24oJ292ZXJsYXknKSA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIHRoZS5vdmVybGF5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXG4gICAgICAgICAgICBLVFV0aWwuY3NzKHRoZS5vdmVybGF5RWxlbWVudCwgJ3otaW5kZXgnLCBLVFV0aWwuY3NzKHRoZS5lbGVtZW50LCAnei1pbmRleCcpIC0gMSk7IC8vIHVwZGF0ZVxuXG4gICAgICAgICAgICBib2R5LmFwcGVuZCh0aGUub3ZlcmxheUVsZW1lbnQpO1xuXG4gICAgICAgICAgICBLVFV0aWwuYWRkQ2xhc3ModGhlLm92ZXJsYXlFbGVtZW50LCBfZ2V0T3B0aW9uKCdvdmVybGF5LWNsYXNzJykpO1xuXG4gICAgICAgICAgICBLVFV0aWwuYWRkRXZlbnQodGhlLm92ZXJsYXlFbGVtZW50LCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIF9oaWRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfZGVsZXRlT3ZlcmxheSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIHRoZS5vdmVybGF5RWxlbWVudCAhPT0gbnVsbCApIHtcbiAgICAgICAgICAgIEtUVXRpbC5yZW1vdmUodGhlLm92ZXJsYXlFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfZ2V0T3B0aW9uID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBpZiAoIHRoZS5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1rdC1kcmF3ZXItJyArIG5hbWUpID09PSB0cnVlICkge1xuICAgICAgICAgICAgdmFyIGF0dHIgPSB0aGUuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEta3QtZHJhd2VyLScgKyBuYW1lKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IEtUVXRpbC5nZXRSZXNwb25zaXZlVmFsdWUoYXR0cik7XG5cbiAgICAgICAgICAgIGlmICggdmFsdWUgIT09IG51bGwgJiYgU3RyaW5nKHZhbHVlKSA9PT0gJ3RydWUnICkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHZhbHVlICE9PSBudWxsICYmIFN0cmluZyh2YWx1ZSkgPT09ICdmYWxzZScgKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG9wdGlvbk5hbWUgPSBLVFV0aWwuc25ha2VUb0NhbWVsKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoIHRoZS5vcHRpb25zW29wdGlvbk5hbWVdICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBLVFV0aWwuZ2V0UmVzcG9uc2l2ZVZhbHVlKHRoZS5vcHRpb25zW29wdGlvbk5hbWVdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX2dldFdpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB3aWR0aCA9IF9nZXRPcHRpb24oJ3dpZHRoJyk7XG5cbiAgICAgICAgaWYgKCB3aWR0aCA9PT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICB3aWR0aCA9IEtUVXRpbC5jc3ModGhlLmVsZW1lbnQsICd3aWR0aCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cblxuICAgIHZhciBfZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBLVFV0aWwuZGF0YSh0aGUuZWxlbWVudCkucmVtb3ZlKCdkcmF3ZXInKTtcbiAgICB9XG5cbiAgICAvLyBDb25zdHJ1Y3QgY2xhc3NcbiAgICBfY29uc3RydWN0KCk7XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vICoqIFB1YmxpYyBBUEkgICoqIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIFBsdWdpbiBBUElcbiAgICB0aGUudG9nZ2xlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdG9nZ2xlKCk7XG4gICAgfVxuXG4gICAgdGhlLnNob3cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9zaG93KCk7XG4gICAgfVxuXG4gICAgdGhlLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhlLmlzU2hvd24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoZS5zaG93bjtcbiAgICB9XG5cbiAgICB0aGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIF91cGRhdGUoKTtcbiAgICB9XG5cbiAgICB0aGUuZ29FbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGUuZWxlbWVudDtcbiAgICB9XG5cbiAgICB0aGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2Rlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvLyBFdmVudCBBUElcbiAgICB0aGUub24gPSBmdW5jdGlvbihuYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBLVEV2ZW50SGFuZGxlci5vbih0aGUuZWxlbWVudCwgbmFtZSwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgdGhlLm9uZSA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIEtURXZlbnRIYW5kbGVyLm9uZSh0aGUuZWxlbWVudCwgbmFtZSwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgdGhlLm9mZiA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIEtURXZlbnRIYW5kbGVyLm9mZih0aGUuZWxlbWVudCwgbmFtZSk7XG4gICAgfVxuXG4gICAgdGhlLnRyaWdnZXIgPSBmdW5jdGlvbihuYW1lLCBldmVudCkge1xuICAgICAgICByZXR1cm4gS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgbmFtZSwgZXZlbnQsIHRoZSwgZXZlbnQpO1xuICAgIH1cbn07XG5cbi8vIFN0YXRpYyBtZXRob2RzXG5LVERyYXdlci5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCAhPT0gbnVsbCAmJiBLVFV0aWwuZGF0YShlbGVtZW50KS5oYXMoJ2RyYXdlcicpKSB7XG4gICAgICAgIHJldHVybiBLVFV0aWwuZGF0YShlbGVtZW50KS5nZXQoJ2RyYXdlcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuLy8gSGlkZSBhbGwgZHJhd2VycyBhbmQgc2tpcCBvbmUgaWYgcHJvdmlkZWRcbktURHJhd2VyLmhpZGVBbGwgPSBmdW5jdGlvbihza2lwID0gbnVsbCwgc2VsZWN0b3IgPSAnW2RhdGEta3QtZHJhd2VyPVwidHJ1ZVwiXScpIHtcbiAgICB2YXIgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBpdGVtcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgIHZhciBkcmF3ZXIgPSBLVERyYXdlci5nZXRJbnN0YW5jZShpdGVtKTtcblxuICAgICAgICAgICAgaWYgKCFkcmF3ZXIpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCBza2lwICkge1xuICAgICAgICAgICAgICAgIGlmICggaXRlbSAhPT0gc2tpcCApIHtcbiAgICAgICAgICAgICAgICAgICAgZHJhd2VyLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRyYXdlci5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFVwZGF0ZSBhbGwgZHJhd2Vyc1xuS1REcmF3ZXIudXBkYXRlQWxsID0gZnVuY3Rpb24oc2VsZWN0b3IgPSAnW2RhdGEta3QtZHJhd2VyPVwidHJ1ZVwiXScpIHtcbiAgICB2YXIgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBpdGVtcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgIHZhciBkcmF3ZXIgPSBLVERyYXdlci5nZXRJbnN0YW5jZShpdGVtKTtcblxuICAgICAgICAgICAgaWYgKGRyYXdlcikge1xuICAgICAgICAgICAgICAgIGRyYXdlci51cGRhdGUoKTs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIENyZWF0ZSBpbnN0YW5jZXNcbktURHJhd2VyLmNyZWF0ZUluc3RhbmNlcyA9IGZ1bmN0aW9uKHNlbGVjdG9yID0gJ1tkYXRhLWt0LWRyYXdlcj1cInRydWVcIl0nKSB7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkJPRFlcIilbMF07XG5cbiAgICAvLyBJbml0aWFsaXplIE1lbnVzXG4gICAgdmFyIGVsZW1lbnRzID0gYm9keS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICB2YXIgZHJhd2VyO1xuXG4gICAgaWYgKCBlbGVtZW50cyAmJiBlbGVtZW50cy5sZW5ndGggPiAwICkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGRyYXdlciA9IG5ldyBLVERyYXdlcihlbGVtZW50c1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFRvZ2dsZSBpbnN0YW5jZXNcbktURHJhd2VyLmhhbmRsZVNob3cgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBFeHRlcm5hbCBkcmF3ZXIgdG9nZ2xlIGhhbmRsZXJcbiAgICBLVFV0aWwub24oZG9jdW1lbnQuYm9keSwgICdbZGF0YS1rdC1kcmF3ZXItc2hvdz1cInRydWVcIl1bZGF0YS1rdC1kcmF3ZXItdGFyZ2V0XScsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWt0LWRyYXdlci10YXJnZXQnKSk7XG5cbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIEtURHJhd2VyLmdldEluc3RhbmNlKGVsZW1lbnQpLnNob3coKTtcbiAgICAgICAgfSBcbiAgICB9KTtcbn1cblxuLy8gRGlzbWlzcyBpbnN0YW5jZXNcbktURHJhd2VyLmhhbmRsZURpc21pc3MgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBFeHRlcm5hbCBkcmF3ZXIgdG9nZ2xlIGhhbmRsZXJcbiAgICBLVFV0aWwub24oZG9jdW1lbnQuYm9keSwgICdbZGF0YS1rdC1kcmF3ZXItZGlzbWlzcz1cInRydWVcIl0nLCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5jbG9zZXN0KCdbZGF0YS1rdC1kcmF3ZXI9XCJ0cnVlXCJdJyk7XG5cbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBkcmF3ZXIgPSBLVERyYXdlci5nZXRJbnN0YW5jZShlbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChkcmF3ZXIuaXNTaG93bigpKSB7XG4gICAgICAgICAgICAgICAgZHJhd2VyLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9KTtcbn1cblxuLy8gV2luZG93IHJlc2l6ZSBIYW5kbGluZ1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgIHZhciB0aW1lcjtcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQk9EWVwiKVswXTtcblxuICAgIEtUVXRpbC50aHJvdHRsZSh0aW1lciwgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIExvY2F0ZSBhbmQgdXBkYXRlIGRyYXdlciBpbnN0YW5jZXMgb24gd2luZG93IHJlc2l6ZVxuICAgICAgICB2YXIgZWxlbWVudHMgPSBib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWt0LWRyYXdlcj1cInRydWVcIl0nKTtcblxuICAgICAgICBpZiAoIGVsZW1lbnRzICYmIGVsZW1lbnRzLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZHJhd2VyID0gS1REcmF3ZXIuZ2V0SW5zdGFuY2UoZWxlbWVudHNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChkcmF3ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZHJhd2VyLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIDIwMCk7XG59KTtcblxuLy8gR2xvYmFsIGluaXRpYWxpemF0aW9uXG5LVERyYXdlci5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgS1REcmF3ZXIuY3JlYXRlSW5zdGFuY2VzKCk7XG4gICAgS1REcmF3ZXIuaGFuZGxlU2hvdygpO1xuICAgIEtURHJhd2VyLmhhbmRsZURpc21pc3MoKTtcbn07XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgS1REcmF3ZXIuaW5pdCk7XG59IGVsc2Uge1xuICAgIEtURHJhd2VyLmluaXQoKTtcbn1cblxuLy8gV2VicGFjayBzdXBwb3J0XG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gS1REcmF3ZXI7XG59Il0sIm5hbWVzIjpbIktURHJhd2VyIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJ0aGUiLCJib2R5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImRlZmF1bHRPcHRpb25zIiwib3ZlcmxheSIsImRpcmVjdGlvbiIsImJhc2VDbGFzcyIsIm92ZXJsYXlDbGFzcyIsIl9jb25zdHJ1Y3QiLCJLVFV0aWwiLCJkYXRhIiwiaGFzIiwiZ2V0IiwiX2luaXQiLCJkZWVwRXh0ZW5kIiwidWlkIiwiZ2V0VW5pcXVlSWQiLCJvdmVybGF5RWxlbWVudCIsIm5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJzaG93biIsImxhc3RXaWR0aCIsInRvZ2dsZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJfaGFuZGxlcnMiLCJfdXBkYXRlIiwic2V0IiwidG9nZ2xlcnMiLCJfZ2V0T3B0aW9uIiwiY2xvc2VycyIsImxlbmd0aCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiX3RvZ2dsZSIsImNsb3NlRWxlbWVudCIsIl9oaWRlIiwiS1RFdmVudEhhbmRsZXIiLCJ0cmlnZ2VyIiwiX3Nob3ciLCJfZGVsZXRlT3ZlcmxheSIsInJlbW92ZUF0dHJpYnV0ZSIsInJlbW92ZUNsYXNzIiwiX2NyZWF0ZU92ZXJsYXkiLCJhZGRDbGFzcyIsIndpZHRoIiwiX2dldFdpZHRoIiwiaGFzQ2xhc3MiLCJTdHJpbmciLCJjc3MiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kIiwiYWRkRXZlbnQiLCJyZW1vdmUiLCJoYXNBdHRyaWJ1dGUiLCJhdHRyIiwidmFsdWUiLCJnZXRSZXNwb25zaXZlVmFsdWUiLCJvcHRpb25OYW1lIiwic25ha2VUb0NhbWVsIiwiX2Rlc3Ryb3kiLCJ0b2dnbGUiLCJzaG93IiwiaGlkZSIsImlzU2hvd24iLCJ1cGRhdGUiLCJnb0VsZW1lbnQiLCJkZXN0cm95IiwiaGFuZGxlciIsIm9uZSIsIm9mZiIsImV2ZW50IiwiZ2V0SW5zdGFuY2UiLCJoaWRlQWxsIiwic2tpcCIsInNlbGVjdG9yIiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbiIsIml0ZW0iLCJkcmF3ZXIiLCJ1cGRhdGVBbGwiLCJjcmVhdGVJbnN0YW5jZXMiLCJlbGVtZW50cyIsImhhbmRsZVNob3ciLCJxdWVyeVNlbGVjdG9yIiwiaGFuZGxlRGlzbWlzcyIsImNsb3Nlc3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwidGltZXIiLCJ0aHJvdHRsZSIsImluaXQiLCJyZWFkeVN0YXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/components/drawer.js\n");
>>>>>>> Stashed changes

            if (KTUtil.data(el).has('slide-padding-top')) {
                calcPaddingTop = parseInt(KTUtil.data(el).get('slide-padding-top'));
            }

            if (KTUtil.data(el).has('slide-padding-bottom')) {
                calcPaddingBottom = parseInt(KTUtil.data(el).get('slide-padding-bottom'));
            }

<<<<<<< Updated upstream
            if (dir == 'up') { // up
                el.style.cssText = 'display: block; overflow: hidden;';
=======
"use strict";
eval(" // Class definition\n\nvar KTEventHandler = function () {\n  ////////////////////////////\n  // ** Private Variables  ** //\n  ////////////////////////////\n  var _handlers = {}; ////////////////////////////\n  // ** Private Methods  ** //\n  ////////////////////////////\n\n  var _triggerEvent = function _triggerEvent(element, name, target, e) {\n    if (KTUtil.data(element).has(name) === true) {\n      var handlerId = KTUtil.data(element).get(name);\n\n      if (_handlers[name] && _handlers[name][handlerId]) {\n        var handler = _handlers[name][handlerId];\n\n        if (handler.name === name) {\n          if (handler.one == true) {\n            if (handler.fired == false) {\n              _handlers[name][handlerId].fired = true;\n              return handler.callback.call(this, target, e);\n            }\n          } else {\n            return handler.callback.call(this, target, e);\n          }\n        }\n      }\n    }\n\n    return null;\n  };\n\n  var _addEvent = function _addEvent(element, name, callback, one) {\n    var handlerId = KTUtil.getUniqueId('event');\n    KTUtil.data(element).set(name, handlerId);\n\n    if (!_handlers[name]) {\n      _handlers[name] = {};\n    }\n\n    _handlers[name][handlerId] = {\n      name: name,\n      callback: callback,\n      one: one,\n      fired: false\n    };\n  };\n\n  var _removeEvent = function _removeEvent(element, name) {\n    var handlerId = KTUtil.data(element).get(name);\n\n    if (_handlers[name] && _handlers[name][handlerId]) {\n      delete _handlers[name][handlerId];\n    }\n  }; ////////////////////////////\n  // ** Public Methods  ** //\n  ////////////////////////////\n\n\n  return {\n    trigger: function trigger(element, name, target, e) {\n      return _triggerEvent(element, name, target, e);\n    },\n    on: function on(element, name, handler) {\n      return _addEvent(element, name, handler);\n    },\n    one: function one(element, name, handler) {\n      return _addEvent(element, name, handler, true);\n    },\n    off: function off(element, name) {\n      return _removeEvent(element, name);\n    },\n    debug: function debug() {\n      for (var b in _handlers) {\n        if (_handlers.hasOwnProperty(b)) console.log(b);\n      }\n    }\n  };\n}(); // Webpack support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTEventHandler;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvZXZlbnQtaGFuZGxlci5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxjQUFjLEdBQUcsWUFBVztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxNQUFJQyxTQUFTLEdBQUcsRUFBaEIsQ0FKNEIsQ0FNNUI7QUFDQTtBQUNBOztBQUNBLE1BQUlDLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBU0MsT0FBVCxFQUFrQkMsSUFBbEIsRUFBd0JDLE1BQXhCLEVBQWdDQyxDQUFoQyxFQUFtQztBQUNuRCxRQUFLQyxNQUFNLENBQUNDLElBQVAsQ0FBWUwsT0FBWixFQUFxQk0sR0FBckIsQ0FBeUJMLElBQXpCLE1BQW1DLElBQXhDLEVBQStDO0FBQzNDLFVBQUlNLFNBQVMsR0FBR0gsTUFBTSxDQUFDQyxJQUFQLENBQVlMLE9BQVosRUFBcUJRLEdBQXJCLENBQXlCUCxJQUF6QixDQUFoQjs7QUFFQSxVQUFLSCxTQUFTLENBQUNHLElBQUQsQ0FBVCxJQUFtQkgsU0FBUyxDQUFDRyxJQUFELENBQVQsQ0FBZ0JNLFNBQWhCLENBQXhCLEVBQXFEO0FBQ2pELFlBQUlFLE9BQU8sR0FBR1gsU0FBUyxDQUFDRyxJQUFELENBQVQsQ0FBZ0JNLFNBQWhCLENBQWQ7O0FBRUEsWUFBS0UsT0FBTyxDQUFDUixJQUFSLEtBQWlCQSxJQUF0QixFQUE2QjtBQUN6QixjQUFLUSxPQUFPLENBQUNDLEdBQVIsSUFBZSxJQUFwQixFQUEyQjtBQUN2QixnQkFBS0QsT0FBTyxDQUFDRSxLQUFSLElBQWlCLEtBQXRCLEVBQThCO0FBQzFCYixjQUFBQSxTQUFTLENBQUNHLElBQUQsQ0FBVCxDQUFnQk0sU0FBaEIsRUFBMkJJLEtBQTNCLEdBQW1DLElBQW5DO0FBRUEscUJBQU9GLE9BQU8sQ0FBQ0csUUFBUixDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEJYLE1BQTVCLEVBQW9DQyxDQUFwQyxDQUFQO0FBQ0g7QUFDSixXQU5ELE1BTU87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Q0FBQ0MsT0FBUCxHQUFpQjlCLGNBQWpCO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvZXZlbnQtaGFuZGxlci5qcz9jMzBmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RFdmVudEhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gKiogUHJpdmF0ZSBWYXJpYWJsZXMgICoqIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHZhciBfaGFuZGxlcnMgPSB7fTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyAqKiBQcml2YXRlIE1ldGhvZHMgICoqIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHZhciBfdHJpZ2dlckV2ZW50ID0gZnVuY3Rpb24oZWxlbWVudCwgbmFtZSwgdGFyZ2V0LCBlKSB7XG4gICAgICAgIGlmICggS1RVdGlsLmRhdGEoZWxlbWVudCkuaGFzKG5hbWUpID09PSB0cnVlICkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZXJJZCA9IEtUVXRpbC5kYXRhKGVsZW1lbnQpLmdldChuYW1lKTtcblxuICAgICAgICAgICAgaWYgKCBfaGFuZGxlcnNbbmFtZV0gJiYgX2hhbmRsZXJzW25hbWVdW2hhbmRsZXJJZF0gKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBfaGFuZGxlcnNbbmFtZV1baGFuZGxlcklkXTtcblxuICAgICAgICAgICAgICAgIGlmICggaGFuZGxlci5uYW1lID09PSBuYW1lICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGhhbmRsZXIub25lID09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGhhbmRsZXIuZmlyZWQgPT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hhbmRsZXJzW25hbWVdW2hhbmRsZXJJZF0uZmlyZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXIuY2FsbGJhY2suY2FsbCh0aGlzLCB0YXJnZXQsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXIuY2FsbGJhY2suY2FsbCh0aGlzLCB0YXJnZXQsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIF9hZGRFdmVudCA9IGZ1bmN0aW9uKGVsZW1lbnQsIG5hbWUsIGNhbGxiYWNrLCBvbmUpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJJZCA9IEtUVXRpbC5nZXRVbmlxdWVJZCgnZXZlbnQnKTtcblxuICAgICAgICBLVFV0aWwuZGF0YShlbGVtZW50KS5zZXQobmFtZSwgaGFuZGxlcklkKTtcblxuICAgICAgICBpZiAoICFfaGFuZGxlcnNbbmFtZV0gKSB7XG4gICAgICAgICAgICBfaGFuZGxlcnNbbmFtZV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9oYW5kbGVyc1tuYW1lXVtoYW5kbGVySWRdID0ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgICAgIG9uZTogb25lLFxuICAgICAgICAgICAgZmlyZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIF9yZW1vdmVFdmVudCA9IGZ1bmN0aW9uKGVsZW1lbnQsIG5hbWUpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJJZCA9IEtUVXRpbC5kYXRhKGVsZW1lbnQpLmdldChuYW1lKTtcblxuICAgICAgICBpZiAoX2hhbmRsZXJzW25hbWVdICYmIF9oYW5kbGVyc1tuYW1lXVtoYW5kbGVySWRdKSB7XG4gICAgICAgICAgICBkZWxldGUgX2hhbmRsZXJzW25hbWVdW2hhbmRsZXJJZF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gKiogUHVibGljIE1ldGhvZHMgICoqIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHJldHVybiB7XG4gICAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uKGVsZW1lbnQsIG5hbWUsIHRhcmdldCwgZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90cmlnZ2VyRXZlbnQoZWxlbWVudCwgbmFtZSwgdGFyZ2V0LCBlKTtcbiAgICAgICAgfSxcblxuICAgICAgICBvbjogZnVuY3Rpb24oZWxlbWVudCwgbmFtZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIF9hZGRFdmVudChlbGVtZW50LCBuYW1lLCBoYW5kbGVyKTtcbiAgICAgICAgfSxcblxuICAgICAgICBvbmU6IGZ1bmN0aW9uKGVsZW1lbnQsIG5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBfYWRkRXZlbnQoZWxlbWVudCwgbmFtZSwgaGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb2ZmOiBmdW5jdGlvbihlbGVtZW50LCBuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gX3JlbW92ZUV2ZW50KGVsZW1lbnQsIG5hbWUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlYnVnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGIgaW4gX2hhbmRsZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBfaGFuZGxlcnMuaGFzT3duUHJvcGVydHkoYikgKSBjb25zb2xlLmxvZyhiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0oKTtcblxuLy8gV2VicGFjayBzdXBwb3J0XG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gS1RFdmVudEhhbmRsZXI7XG59XG4iXSwibmFtZXMiOlsiS1RFdmVudEhhbmRsZXIiLCJfaGFuZGxlcnMiLCJfdHJpZ2dlckV2ZW50IiwiZWxlbWVudCIsIm5hbWUiLCJ0YXJnZXQiLCJlIiwiS1RVdGlsIiwiZGF0YSIsImhhcyIsImhhbmRsZXJJZCIsImdldCIsImhhbmRsZXIiLCJvbmUiLCJmaXJlZCIsImNhbGxiYWNrIiwiY2FsbCIsIl9hZGRFdmVudCIsImdldFVuaXF1ZUlkIiwic2V0IiwiX3JlbW92ZUV2ZW50IiwidHJpZ2dlciIsIm9uIiwib2ZmIiwiZGVidWciLCJiIiwiaGFzT3duUHJvcGVydHkiLCJjb25zb2xlIiwibG9nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/components/event-handler.js\n");
>>>>>>> Stashed changes

                if (calcPaddingTop) {
                    KTUtil.animate(0, calcPaddingTop, speed, function(value) {
                        el.style.paddingTop = (calcPaddingTop - value) + 'px';
                    }, 'linear');
                }

                if (calcPaddingBottom) {
                    KTUtil.animate(0, calcPaddingBottom, speed, function(value) {
                        el.style.paddingBottom = (calcPaddingBottom - value) + 'px';
                    }, 'linear');
                }

<<<<<<< Updated upstream
                KTUtil.animate(0, calcHeight, speed, function(value) {
                    el.style.height = (calcHeight - value) + 'px';
                }, 'linear', function() {
                    el.style.height = '';
                    el.style.display = 'none';
=======
"use strict";
eval(" // Class definition\n\nvar KTFeedback = function KTFeedback(options) {\n  ////////////////////////////\n  // ** Private Variables  ** //\n  ////////////////////////////\n  var the = this;\n  var body = document.getElementsByTagName(\"BODY\")[0]; // Default options\n\n  var defaultOptions = {\n    'width': 100,\n    'placement': 'top-center',\n    'content': '',\n    'type': 'popup'\n  }; ////////////////////////////\n  // ** Private methods  ** //\n  ////////////////////////////\n\n  var _construct = function _construct() {\n    _init();\n  };\n\n  var _init = function _init() {\n    // Variables\n    the.options = KTUtil.deepExtend({}, defaultOptions, options);\n    the.uid = KTUtil.getUniqueId('feedback');\n    the.element;\n    the.shown = false; // Event Handlers\n\n    _handlers(); // Bind Instance\n\n\n    KTUtil.data(the.element).set('feedback', the);\n  };\n\n  var _handlers = function _handlers() {\n    KTUtil.addEvent(the.element, 'click', function (e) {\n      e.preventDefault();\n\n      _go();\n    });\n  };\n\n  var _show = function _show() {\n    if (KTEventHandler.trigger(the.element, 'kt.feedback.show', the) === false) {\n      return;\n    }\n\n    if (the.options.type === 'popup') {\n      _showPopup();\n    }\n\n    KTEventHandler.trigger(the.element, 'kt.feedback.shown', the);\n    return the;\n  };\n\n  var _hide = function _hide() {\n    if (KTEventHandler.trigger(the.element, 'kt.feedback.hide', the) === false) {\n      return;\n    }\n\n    if (the.options.type === 'popup') {\n      _hidePopup();\n    }\n\n    the.shown = false;\n    KTEventHandler.trigger(the.element, 'kt.feedback.hidden', the);\n    return the;\n  };\n\n  var _showPopup = function _showPopup() {\n    the.element = document.createElement(\"DIV\");\n    KTUtil.addClass(the.element, 'feedback feedback-popup');\n    KTUtil.setHTML(the.element, the.options.content);\n\n    if (the.options.placement == 'top-center') {\n      _setPopupTopCenterPosition();\n    }\n\n    body.appendChild(the.element);\n    KTUtil.addClass(the.element, 'feedback-shown');\n    the.shown = true;\n  };\n\n  var _setPopupTopCenterPosition = function _setPopupTopCenterPosition() {\n    var width = KTUtil.getResponsiveValue(the.options.width);\n    var height = KTUtil.css(the.element, 'height');\n    KTUtil.addClass(the.element, 'feedback-top-center');\n    KTUtil.css(the.element, 'width', width);\n    KTUtil.css(the.element, 'left', '50%');\n    KTUtil.css(the.element, 'top', '-' + height);\n  };\n\n  var _hidePopup = function _hidePopup() {\n    the.element.remove();\n  };\n\n  var _destroy = function _destroy() {\n    KTUtil.data(the.element).remove('feedback');\n  }; // Construct class\n\n\n  _construct(); ///////////////////////\n  // ** Public API  ** //\n  ///////////////////////\n  // Plugin API\n\n\n  the.show = function () {\n    return _show();\n  };\n\n  the.hide = function () {\n    return _hide();\n  };\n\n  the.isShown = function () {\n    return the.shown;\n  };\n\n  the.getElement = function () {\n    return the.element;\n  };\n\n  the.destroy = function () {\n    return _destroy();\n  }; // Event API\n\n\n  the.on = function (name, handler) {\n    return KTEventHandler.on(the.element, name, handler);\n  };\n\n  the.one = function (name, handler) {\n    return KTEventHandler.one(the.element, name, handler);\n  };\n\n  the.off = function (name) {\n    return KTEventHandler.off(the.element, name);\n  };\n\n  the.trigger = function (name, event) {\n    return KTEventHandler.trigger(the.element, name, event, the, event);\n  };\n}; // Webpack support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTFeedback;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvZmVlZGJhY2suanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBU0MsT0FBVCxFQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxNQUFJQyxHQUFHLEdBQUcsSUFBVjtBQUNBLE1BQUlDLElBQUksR0FBR0MsUUFBUSxDQUFDQyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxDQUFYLENBTCtCLENBTy9COztBQUNBLE1BQUlDLGNBQWMsR0FBRztBQUNqQixhQUFVLEdBRE87QUFFakIsaUJBQWMsWUFGRztBQUdqQixlQUFZLEVBSEs7QUFJakIsWUFBUTtBQUpTLEdBQXJCLENBUitCLENBZS9CO0FBQ0E7QUFDQTs7QUFFQSxNQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFXO0FBQ3hCQyxJQUFBQSxLQUFLO0FBQ1IsR0FGRDs7QUFJQSxNQUFJQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFXO0FBQ25CO0FBQ0FOLElBQUFBLEdBQUcsQ0FBQ0QsT0FBSixHQUFjUSxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsRUFBbEIsRUFBc0JKLGNBQXRCLEVBQXNDTCxPQUF0QyxDQUFkO0FBQ0FDLElBQUFBLEdBQUcsQ0FBQ1MsR0FBSixHQUFVRixNQUFNLENBQUNHLFdBQVAsQ0FBbUIsVUFBbkIsQ0FBVjtBQUNBVixJQUFBQSxHQUFHLENBQUNXLE9BQUo7QUFDQVgsSUFBQUEsR0FBRyxDQUFDWSxLQUFKLEdBQVksS0FBWixDQUxtQixDQU9uQjs7QUFDQUMsSUFBQUEsU0FBUyxHQVJVLENBVW5COzs7QUFDQU4sSUFBQUEsTUFBTSxDQUFDTyxJQUFQLENBQVlkLEdBQUcsQ0FBQ1csT0FBaEIsRUFBeUJJLEdBQXpCLENBQTZCLFVBQTdCLEVBQXlDZixHQUF6QztBQUNILEdBWkQ7O0FBY0EsTUFBSWEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBVztBQUN2Qk4sSUFBQUEs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L0IsRUFBcUNDLE9BQXJDLENBQVA7QUFDSCxHQUZEOztBQUlBL0MsRUFBQUEsR0FBRyxDQUFDZ0QsR0FBSixHQUFVLFVBQVNGLElBQVQsRUFBZUMsT0FBZixFQUF3QjtBQUM5QixXQUFPMUIsY0FBYyxDQUFDMkIsR0FBZixDQUFtQmhELEdBQUcsQ0FBQ1csT0FBdkIsRUFBZ0NtQyxJQUFoQyxFQUFzQ0MsT0FBdEMsQ0FBUDtBQUNILEdBRkQ7O0FBSUEvQyxFQUFBQSxHQUFHLENBQUNpRCxHQUFKLEdBQVUsVUFBU0gsSUFBVCxFQUFlO0FBQ3JCLFdBQU96QixjQUFjLENBQUM0QixHQUFmLENBQW1CakQsR0FBRyxDQUFDVyxPQUF2QixFQUFnQ21DLElBQWhDLENBQVA7QUFDSCxHQUZEOztBQUlBOUMsRUFBQUEsR0FBRyxDQUFDc0IsT0FBSixHQUFjLFVBQVN3QixJQUFULEVBQWVJLEtBQWYsRUFBc0I7QUFDaEMsV0FBTzdCLGNBQWMsQ0FBQ0MsT0FBZixDQUF1QnRCLEdBQUcsQ0FBQ1csT0FBM0IsRUFBb0NtQyxJQUFwQyxFQUEwQ0ksS0FBMUMsRUFBaURsRCxHQUFqRCxFQUFzRGtELEtBQXRELENBQVA7QUFDSCxHQUZEO0FBR0gsQ0EzSkQsQyxDQTZKQTs7O0FBQ0EsSUFBSSxTQUFpQyxPQUFPQyxNQUFNLENBQUNDLE9BQWQsS0FBMEIsV0FBL0QsRUFBNEU7QUFDeEVELEVBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnRELFVBQWpCO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvZmVlZGJhY2suanM/MTcwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtURmVlZGJhY2sgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vICoqIFByaXZhdGUgVmFyaWFibGVzICAqKiAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB2YXIgdGhlID0gdGhpcztcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQk9EWVwiKVswXTtcblxuICAgIC8vIERlZmF1bHQgb3B0aW9uc1xuICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgJ3dpZHRoJyA6IDEwMCxcbiAgICAgICAgJ3BsYWNlbWVudCcgOiAndG9wLWNlbnRlcicsXG4gICAgICAgICdjb250ZW50JyA6ICcnLFxuICAgICAgICAndHlwZSc6ICdwb3B1cCdcbiAgICB9O1xuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vICoqIFByaXZhdGUgbWV0aG9kcyAgKiogLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICB2YXIgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBfaW5pdCgpO1xuICAgIH1cblxuICAgIHZhciBfaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBWYXJpYWJsZXNcbiAgICAgICAgdGhlLm9wdGlvbnMgPSBLVFV0aWwuZGVlcEV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGUudWlkID0gS1RVdGlsLmdldFVuaXF1ZUlkKCdmZWVkYmFjaycpO1xuICAgICAgICB0aGUuZWxlbWVudDtcbiAgICAgICAgdGhlLnNob3duID0gZmFsc2U7XG5cbiAgICAgICAgLy8gRXZlbnQgSGFuZGxlcnNcbiAgICAgICAgX2hhbmRsZXJzKCk7XG5cbiAgICAgICAgLy8gQmluZCBJbnN0YW5jZVxuICAgICAgICBLVFV0aWwuZGF0YSh0aGUuZWxlbWVudCkuc2V0KCdmZWVkYmFjaycsIHRoZSk7XG4gICAgfVxuXG4gICAgdmFyIF9oYW5kbGVycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBLVFV0aWwuYWRkRXZlbnQodGhlLmVsZW1lbnQsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgX2dvKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBfc2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIEtURXZlbnRIYW5kbGVyLnRyaWdnZXIodGhlLmVsZW1lbnQsICdrdC5mZWVkYmFjay5zaG93JywgdGhlKSA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHRoZS5vcHRpb25zLnR5cGUgPT09ICdwb3B1cCcpIHtcbiAgICAgICAgICAgIF9zaG93UG9wdXAoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEtURXZlbnRIYW5kbGVyLnRyaWdnZXIodGhlLmVsZW1lbnQsICdrdC5mZWVkYmFjay5zaG93bicsIHRoZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoZTtcbiAgICB9XG5cbiAgICB2YXIgX2hpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3QuZmVlZGJhY2suaGlkZScsIHRoZSkgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0aGUub3B0aW9ucy50eXBlID09PSAncG9wdXAnKSB7XG4gICAgICAgICAgICBfaGlkZVBvcHVwKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGUuc2hvd24gPSBmYWxzZTtcblxuICAgICAgICBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3QuZmVlZGJhY2suaGlkZGVuJywgdGhlKTtcblxuICAgICAgICByZXR1cm4gdGhlO1xuICAgIH1cblxuICAgIHZhciBfc2hvd1BvcHVwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoZS5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcblxuICAgICAgICBLVFV0aWwuYWRkQ2xhc3ModGhlLmVsZW1lbnQsICdmZWVkYmFjayBmZWVkYmFjay1wb3B1cCcpO1xuICAgICAgICBLVFV0aWwuc2V0SFRNTCh0aGUuZWxlbWVudCwgdGhlLm9wdGlvbnMuY29udGVudCk7XG5cbiAgICAgICAgaWYgKHRoZS5vcHRpb25zLnBsYWNlbWVudCA9PSAndG9wLWNlbnRlcicpIHtcbiAgICAgICAgICAgIF9zZXRQb3B1cFRvcENlbnRlclBvc2l0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHRoZS5lbGVtZW50KTtcblxuICAgICAgICBLVFV0aWwuYWRkQ2xhc3ModGhlLmVsZW1lbnQsICdmZWVkYmFjay1zaG93bicpO1xuXG4gICAgICAgIHRoZS5zaG93biA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIF9zZXRQb3B1cFRvcENlbnRlclBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB3aWR0aCA9IEtUVXRpbC5nZXRSZXNwb25zaXZlVmFsdWUodGhlLm9wdGlvbnMud2lkdGgpO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gS1RVdGlsLmNzcyh0aGUuZWxlbWVudCwgJ2hlaWdodCcpO1xuXG4gICAgICAgIEtUVXRpbC5hZGRDbGFzcyh0aGUuZWxlbWVudCwgJ2ZlZWRiYWNrLXRvcC1jZW50ZXInKTtcblxuICAgICAgICBLVFV0aWwuY3NzKHRoZS5lbGVtZW50LCAnd2lkdGgnLCB3aWR0aCk7XG4gICAgICAgIEtUVXRpbC5jc3ModGhlLmVsZW1lbnQsICdsZWZ0JywgJzUwJScpO1xuICAgICAgICBLVFV0aWwuY3NzKHRoZS5lbGVtZW50LCAndG9wJywgJy0nICsgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB2YXIgX2hpZGVQb3B1cCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGUuZWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB2YXIgX2Rlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgS1RVdGlsLmRhdGEodGhlLmVsZW1lbnQpLnJlbW92ZSgnZmVlZGJhY2snKTtcbiAgICB9XG5cbiAgICAvLyBDb25zdHJ1Y3QgY2xhc3NcbiAgICBfY29uc3RydWN0KCk7XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vICoqIFB1YmxpYyBBUEkgICoqIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIFBsdWdpbiBBUElcbiAgICB0aGUuc2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3Nob3coKTtcbiAgICB9XG5cbiAgICB0aGUuaGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2hpZGUoKTtcbiAgICB9XG5cbiAgICB0aGUuaXNTaG93biA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhlLnNob3duO1xuICAgIH1cblxuICAgIHRoZS5nZXRFbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGUuZWxlbWVudDtcbiAgICB9XG5cbiAgICB0aGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2Rlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvLyBFdmVudCBBUElcbiAgICB0aGUub24gPSBmdW5jdGlvbihuYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBLVEV2ZW50SGFuZGxlci5vbih0aGUuZWxlbWVudCwgbmFtZSwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgdGhlLm9uZSA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIEtURXZlbnRIYW5kbGVyLm9uZSh0aGUuZWxlbWVudCwgbmFtZSwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgdGhlLm9mZiA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIEtURXZlbnRIYW5kbGVyLm9mZih0aGUuZWxlbWVudCwgbmFtZSk7XG4gICAgfVxuXG4gICAgdGhlLnRyaWdnZXIgPSBmdW5jdGlvbihuYW1lLCBldmVudCkge1xuICAgICAgICByZXR1cm4gS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgbmFtZSwgZXZlbnQsIHRoZSwgZXZlbnQpO1xuICAgIH1cbn07XG5cbi8vIFdlYnBhY2sgc3VwcG9ydFxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEtURmVlZGJhY2s7XG59XG4iXSwibmFtZXMiOlsiS1RGZWVkYmFjayIsIm9wdGlvbnMiLCJ0aGUiLCJib2R5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImRlZmF1bHRPcHRpb25zIiwiX2NvbnN0cnVjdCIsIl9pbml0IiwiS1RVdGlsIiwiZGVlcEV4dGVuZCIsInVpZCIsImdldFVuaXF1ZUlkIiwiZWxlbWVudCIsInNob3duIiwiX2hhbmRsZXJzIiwiZGF0YSIsInNldCIsImFkZEV2ZW50IiwiZSIsInByZXZlbnREZWZhdWx0IiwiX2dvIiwiX3Nob3ciLCJLVEV2ZW50SGFuZGxlciIsInRyaWdnZXIiLCJ0eXBlIiwiX3Nob3dQb3B1cCIsIl9oaWRlIiwiX2hpZGVQb3B1cCIsImNyZWF0ZUVsZW1lbnQiLCJhZGRDbGFzcyIsInNldEhUTUwiLCJjb250ZW50IiwicGxhY2VtZW50IiwiX3NldFBvcHVwVG9wQ2VudGVyUG9zaXRpb24iLCJhcHBlbmRDaGlsZCIsIndpZHRoIiwiZ2V0UmVzcG9uc2l2ZVZhbHVlIiwiaGVpZ2h0IiwiY3NzIiwicmVtb3ZlIiwiX2Rlc3Ryb3kiLCJzaG93IiwiaGlkZSIsImlzU2hvd24iLCJnZXRFbGVtZW50IiwiZGVzdHJveSIsIm9uIiwibmFtZSIsImhhbmRsZXIiLCJvbmUiLCJvZmYiLCJldmVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/components/feedback.js\n");
>>>>>>> Stashed changes

                    if (typeof callback === 'function') {
                        callback();
                    }
                });


<<<<<<< Updated upstream
            } else if (dir == 'down') { // down
                el.style.cssText = 'display: block; overflow: hidden;';
=======
"use strict";
eval(" // Class definition\n\nvar KTImageInput = function KTImageInput(element, options) {\n  ////////////////////////////\n  // ** Private Variables  ** //\n  ////////////////////////////\n  var the = this;\n\n  if (typeof element === \"undefined\" || element === null) {\n    return;\n  } // Default Options\n\n\n  var defaultOptions = {}; ////////////////////////////\n  // ** Private Methods  ** //\n  ////////////////////////////\n\n  var _construct = function _construct() {\n    if (KTUtil.data(element).has('image-input') === true) {\n      the = KTUtil.data(element).get('image-input');\n    } else {\n      _init();\n    }\n  };\n\n  var _init = function _init() {\n    // Variables\n    the.options = KTUtil.deepExtend({}, defaultOptions, options);\n    the.uid = KTUtil.getUniqueId('image-input'); // Elements\n\n    the.element = element;\n    the.inputElement = KTUtil.find(element, 'input[type=\"file\"]');\n    the.wrapperElement = KTUtil.find(element, '.image-input-wrapper');\n    the.cancelElement = KTUtil.find(element, '[data-kt-image-input-action=\"cancel\"]');\n    the.removeElement = KTUtil.find(element, '[data-kt-image-input-action=\"remove\"]');\n    the.hiddenElement = KTUtil.find(element, 'input[type=\"hidden\"]');\n    the.src = KTUtil.css(the.wrapperElement, 'backgroundImage'); // Set initialized\n\n    the.element.setAttribute('data-kt-image-input', 'true'); // Event Handlers\n\n    _handlers(); // Bind Instance\n\n\n    KTUtil.data(the.element).set('image-input', the);\n  }; // Init Event Handlers\n\n\n  var _handlers = function _handlers() {\n    KTUtil.addEvent(the.inputElement, 'change', _change);\n    KTUtil.addEvent(the.cancelElement, 'click', _cancel);\n    KTUtil.addEvent(the.removeElement, 'click', _remove);\n  }; // Event Handlers\n\n\n  var _change = function _change(e) {\n    e.preventDefault();\n\n    if (the.inputElement !== null && the.inputElement.files && the.inputElement.files[0]) {\n      // Fire change event\n      if (KTEventHandler.trigger(the.element, 'kt.imageinput.change', the) === false) {\n        return;\n      }\n\n      var reader = new FileReader();\n\n      reader.onload = function (e) {\n        KTUtil.css(the.wrapperElement, 'background-image', 'url(' + e.target.result + ')');\n      };\n\n      reader.readAsDataURL(the.inputElement.files[0]);\n      KTUtil.addClass(the.element, 'image-input-changed');\n      KTUtil.removeClass(the.element, 'image-input-empty'); // Fire removed event\n\n      KTEventHandler.trigger(the.element, 'kt.imageinput.changed', the);\n    }\n  };\n\n  var _cancel = function _cancel(e) {\n    e.preventDefault(); // Fire cancel event\n\n    if (KTEventHandler.trigger(the.element, 'kt.imageinput.cancel', the) === false) {\n      return;\n    }\n\n    KTUtil.removeClass(the.element, 'image-input-changed');\n    KTUtil.removeClass(the.element, 'image-input-empty');\n    KTUtil.css(the.wrapperElement, 'background-image', the.src);\n    the.inputElement.value = \"\";\n\n    if (the.hiddenElement !== null) {\n      the.hiddenElement.value = \"0\";\n    } // Fire canceled event\n\n\n    KTEventHandler.trigger(the.element, 'kt.imageinput.canceled', the);\n  };\n\n  var _remove = function _remove(e) {\n    e.preventDefault(); // Fire remove event\n\n    if (KTEventHandler.trigger(the.element, 'kt.imageinput.remove', the) === false) {\n      return;\n    }\n\n    KTUtil.removeClass(the.element, 'image-input-changed');\n    KTUtil.addClass(the.element, 'image-input-empty');\n    KTUtil.css(the.wrapperElement, 'background-image', \"none\");\n    the.inputElement.value = \"\";\n\n    if (the.hiddenElement !== null) {\n      the.hiddenElement.value = \"1\";\n    } // Fire removed event\n\n\n    KTEventHandler.trigger(the.element, 'kt.imageinput.removed', the);\n  };\n\n  var _destroy = function _destroy() {\n    KTUtil.data(the.element).remove('image-input');\n  }; // Construct Class\n\n\n  _construct(); ///////////////////////\n  // ** Public API  ** //\n  ///////////////////////\n  // Plugin API\n\n\n  the.getInputElement = function () {\n    return the.inputElement;\n  };\n\n  the.goElement = function () {\n    return the.element;\n  };\n\n  the.destroy = function () {\n    return _destroy();\n  }; // Event API\n\n\n  the.on = function (name, handler) {\n    return KTEventHandler.on(the.element, name, handler);\n  };\n\n  the.one = function (name, handler) {\n    return KTEventHandler.one(the.element, name, handler);\n  };\n\n  the.off = function (name) {\n    return KTEventHandler.off(the.element, name);\n  };\n\n  the.trigger = function (name, event) {\n    return KTEventHandler.trigger(the.element, name, event, the, event);\n  };\n}; // Static methods\n\n\nKTImageInput.getInstance = function (element) {\n  if (element !== null && KTUtil.data(element).has('image-input')) {\n    return KTUtil.data(element).get('image-input');\n  } else {\n    return null;\n  }\n}; // Create instances\n\n\nKTImageInput.createInstances = function () {\n  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-kt-image-input]';\n  // Initialize Menus\n  var elements = document.querySelectorAll(selector);\n\n  if (elements && elements.length > 0) {\n    for (var i = 0, len = elements.length; i < len; i++) {\n      new KTImageInput(elements[i]);\n    }\n  }\n}; // Global initialization\n\n\nKTImageInput.init = function () {\n  KTImageInput.createInstances();\n}; // On document ready\n\n\nif (document.readyState === 'loading') {\n  document.addEventListener('DOMContentLoaded', KTImageInput.init);\n} else {\n  KTImageInput.init();\n} // Webpack Support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTImageInput;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvaW1hZ2UtaW5wdXQuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBU0MsT0FBVCxFQUFrQkMsT0FBbEIsRUFBMkI7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsTUFBSUMsR0FBRyxHQUFHLElBQVY7O0FBRUEsTUFBSyxPQUFPRixPQUFQLEtBQW1CLFdBQW5CLElBQWtDQSxPQUFPLEtBQUssSUFBbkQsRUFBMEQ7QUFDdEQ7QUFDSCxHQVJ5QyxDQVUxQzs7O0FBQ0EsTUFBSUcsY0FBYyxHQUFHLEVBQXJCLENBWDBDLENBZTFDO0FBQ0E7QUFDQTs7QUFFQSxNQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFXO0FBQ3hCLFFBQUtDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTixPQUFaLEVBQXFCTyxHQUFyQixDQUF5QixhQUF6QixNQUE0QyxJQUFqRCxFQUF3RDtBQUNwREwsTUFBQUEsR0FBRyxHQUFHRyxNQUFNLENBQUNDLElBQVAsQ0FBWU4sT0FBWixFQUFxQlEsR0FBckIsQ0FBeUIsYUFBekIsQ0FBTjtBQUNILEtBRkQsTUFFTztBQUNIQyxNQUFBQSxLQUFLO0FBQ1I7QUFDSixHQU5EOztBQVFBLE1BQUlBLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQVc7QUFDbkI7QUFDQVAsSUFBQUEsR0FBRyxDQUFDRCxPQUFKLEdBQWNJLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQixFQUFsQixFQUFzQlAsY0FBdEIsRUFBc0NGLE9BQXRDLENBQWQ7QUFDQUMsSUFBQUEsR0FBRyxDQUFDUyxHQUFKLEdBQVVOLE1BQU0sQ0FBQ08sV0FBUCxDQUFtQixhQUFuQixDQUFWLENBSG1CLENBS25COztBQUNBVixJQUFBQSxHQUFHLENBQUNGLE9BQUosR0FBY0EsT0FBZDtBQUNBRSxJQUFBQSxHQUFHLENBQUNXLFlBQUosR0FBbUJSLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZZCxPQUFaLEVBQXFC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cy9pbWFnZS1pbnB1dC5qcz82YWIyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RJbWFnZUlucHV0ID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucykge1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyAqKiBQcml2YXRlIFZhcmlhYmxlcyAgKiogLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgdmFyIHRoZSA9IHRoaXM7XG5cbiAgICBpZiAoIHR5cGVvZiBlbGVtZW50ID09PSBcInVuZGVmaW5lZFwiIHx8IGVsZW1lbnQgPT09IG51bGwgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IE9wdGlvbnNcbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgIFxuICAgIH07XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gKiogUHJpdmF0ZSBNZXRob2RzICAqKiAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHZhciBfY29uc3RydWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICggS1RVdGlsLmRhdGEoZWxlbWVudCkuaGFzKCdpbWFnZS1pbnB1dCcpID09PSB0cnVlICkge1xuICAgICAgICAgICAgdGhlID0gS1RVdGlsLmRhdGEoZWxlbWVudCkuZ2V0KCdpbWFnZS1pbnB1dCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2luaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBWYXJpYWJsZXNcbiAgICAgICAgdGhlLm9wdGlvbnMgPSBLVFV0aWwuZGVlcEV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGUudWlkID0gS1RVdGlsLmdldFVuaXF1ZUlkKCdpbWFnZS1pbnB1dCcpO1xuXG4gICAgICAgIC8vIEVsZW1lbnRzXG4gICAgICAgIHRoZS5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhlLmlucHV0RWxlbWVudCA9IEtUVXRpbC5maW5kKGVsZW1lbnQsICdpbnB1dFt0eXBlPVwiZmlsZVwiXScpO1xuICAgICAgICB0aGUud3JhcHBlckVsZW1lbnQgPSBLVFV0aWwuZmluZChlbGVtZW50LCAnLmltYWdlLWlucHV0LXdyYXBwZXInKTtcbiAgICAgICAgdGhlLmNhbmNlbEVsZW1lbnQgPSBLVFV0aWwuZmluZChlbGVtZW50LCAnW2RhdGEta3QtaW1hZ2UtaW5wdXQtYWN0aW9uPVwiY2FuY2VsXCJdJyk7XG4gICAgICAgIHRoZS5yZW1vdmVFbGVtZW50ID0gS1RVdGlsLmZpbmQoZWxlbWVudCwgJ1tkYXRhLWt0LWltYWdlLWlucHV0LWFjdGlvbj1cInJlbW92ZVwiXScpO1xuICAgICAgICB0aGUuaGlkZGVuRWxlbWVudCA9IEtUVXRpbC5maW5kKGVsZW1lbnQsICdpbnB1dFt0eXBlPVwiaGlkZGVuXCJdJyk7XG4gICAgICAgIHRoZS5zcmMgPSBLVFV0aWwuY3NzKHRoZS53cmFwcGVyRWxlbWVudCwgJ2JhY2tncm91bmRJbWFnZScpO1xuXG4gICAgICAgIC8vIFNldCBpbml0aWFsaXplZFxuICAgICAgICB0aGUuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEta3QtaW1hZ2UtaW5wdXQnLCAndHJ1ZScpO1xuXG4gICAgICAgIC8vIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgIF9oYW5kbGVycygpO1xuXG4gICAgICAgIC8vIEJpbmQgSW5zdGFuY2VcbiAgICAgICAgS1RVdGlsLmRhdGEodGhlLmVsZW1lbnQpLnNldCgnaW1hZ2UtaW5wdXQnLCB0aGUpO1xuICAgIH1cblxuICAgIC8vIEluaXQgRXZlbnQgSGFuZGxlcnNcbiAgICB2YXIgX2hhbmRsZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIEtUVXRpbC5hZGRFdmVudCh0aGUuaW5wdXRFbGVtZW50LCAnY2hhbmdlJywgX2NoYW5nZSk7XG4gICAgICAgIEtUVXRpbC5hZGRFdmVudCh0aGUuY2FuY2VsRWxlbWVudCwgJ2NsaWNrJywgX2NhbmNlbCk7XG4gICAgICAgIEtUVXRpbC5hZGRFdmVudCh0aGUucmVtb3ZlRWxlbWVudCwgJ2NsaWNrJywgX3JlbW92ZSk7XG4gICAgfVxuXG4gICAgLy8gRXZlbnQgSGFuZGxlcnNcbiAgICB2YXIgX2NoYW5nZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICggdGhlLmlucHV0RWxlbWVudCAhPT0gbnVsbCAmJiB0aGUuaW5wdXRFbGVtZW50LmZpbGVzICYmIHRoZS5pbnB1dEVsZW1lbnQuZmlsZXNbMF0gKSB7XG4gICAgICAgICAgICAvLyBGaXJlIGNoYW5nZSBldmVudFxuICAgICAgICAgICAgaWYgKCBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3QuaW1hZ2VpbnB1dC5jaGFuZ2UnLCB0aGUpID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIEtUVXRpbC5jc3ModGhlLndyYXBwZXJFbGVtZW50LCAnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoJysgZS50YXJnZXQucmVzdWx0ICsnKScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh0aGUuaW5wdXRFbGVtZW50LmZpbGVzWzBdKTtcblxuICAgICAgICAgICAgS1RVdGlsLmFkZENsYXNzKHRoZS5lbGVtZW50LCAnaW1hZ2UtaW5wdXQtY2hhbmdlZCcpO1xuICAgICAgICAgICAgS1RVdGlsLnJlbW92ZUNsYXNzKHRoZS5lbGVtZW50LCAnaW1hZ2UtaW5wdXQtZW1wdHknKTtcblxuICAgICAgICAgICAgLy8gRmlyZSByZW1vdmVkIGV2ZW50XG4gICAgICAgICAgICBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3QuaW1hZ2VpbnB1dC5jaGFuZ2VkJywgdGhlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfY2FuY2VsID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gRmlyZSBjYW5jZWwgZXZlbnRcbiAgICAgICAgaWYgKCBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3QuaW1hZ2VpbnB1dC5jYW5jZWwnLCB0aGUpID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIEtUVXRpbC5yZW1vdmVDbGFzcyh0aGUuZWxlbWVudCwgJ2ltYWdlLWlucHV0LWNoYW5nZWQnKTtcbiAgICAgICAgS1RVdGlsLnJlbW92ZUNsYXNzKHRoZS5lbGVtZW50LCAnaW1hZ2UtaW5wdXQtZW1wdHknKTtcbiAgICAgICAgS1RVdGlsLmNzcyh0aGUud3JhcHBlckVsZW1lbnQsICdiYWNrZ3JvdW5kLWltYWdlJywgdGhlLnNyYyk7XG4gICAgICAgIHRoZS5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgIGlmICggdGhlLmhpZGRlbkVsZW1lbnQgIT09IG51bGwgKSB7XG4gICAgICAgICAgICB0aGUuaGlkZGVuRWxlbWVudC52YWx1ZSA9IFwiMFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlyZSBjYW5jZWxlZCBldmVudFxuICAgICAgICBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3QuaW1hZ2VpbnB1dC5jYW5jZWxlZCcsIHRoZSk7XG4gICAgfVxuXG4gICAgdmFyIF9yZW1vdmUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBGaXJlIHJlbW92ZSBldmVudFxuICAgICAgICBpZiAoIEtURXZlbnRIYW5kbGVyLnRyaWdnZXIodGhlLmVsZW1lbnQsICdrdC5pbWFnZWlucHV0LnJlbW92ZScsIHRoZSkgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgS1RVdGlsLnJlbW92ZUNsYXNzKHRoZS5lbGVtZW50LCAnaW1hZ2UtaW5wdXQtY2hhbmdlZCcpO1xuICAgICAgICBLVFV0aWwuYWRkQ2xhc3ModGhlLmVsZW1lbnQsICdpbWFnZS1pbnB1dC1lbXB0eScpO1xuICAgICAgICBLVFV0aWwuY3NzKHRoZS53cmFwcGVyRWxlbWVudCwgJ2JhY2tncm91bmQtaW1hZ2UnLCBcIm5vbmVcIik7XG4gICAgICAgIHRoZS5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgIGlmICggdGhlLmhpZGRlbkVsZW1lbnQgIT09IG51bGwgKSB7XG4gICAgICAgICAgICB0aGUuaGlkZGVuRWxlbWVudC52YWx1ZSA9IFwiMVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlyZSByZW1vdmVkIGV2ZW50XG4gICAgICAgIEtURXZlbnRIYW5kbGVyLnRyaWdnZXIodGhlLmVsZW1lbnQsICdrdC5pbWFnZWlucHV0LnJlbW92ZWQnLCB0aGUpO1xuICAgIH1cblxuICAgIHZhciBfZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBLVFV0aWwuZGF0YSh0aGUuZWxlbWVudCkucmVtb3ZlKCdpbWFnZS1pbnB1dCcpO1xuICAgIH1cblxuICAgIC8vIENvbnN0cnVjdCBDbGFzc1xuICAgIF9jb25zdHJ1Y3QoKTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gKiogUHVibGljIEFQSSAgKiogLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgLy8gUGx1Z2luIEFQSVxuICAgIHRoZS5nZXRJbnB1dEVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoZS5pbnB1dEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdGhlLmdvRWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhlLmVsZW1lbnQ7XG4gICAgfVxuICAgIFxuICAgIHRoZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8vIEV2ZW50IEFQSVxuICAgIHRoZS5vbiA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIEtURXZlbnRIYW5kbGVyLm9uKHRoZS5lbGVtZW50LCBuYW1lLCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICB0aGUub25lID0gZnVuY3Rpb24obmFtZSwgaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gS1RFdmVudEhhbmRsZXIub25lKHRoZS5lbGVtZW50LCBuYW1lLCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICB0aGUub2ZmID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gS1RFdmVudEhhbmRsZXIub2ZmKHRoZS5lbGVtZW50LCBuYW1lKTtcbiAgICB9XG5cbiAgICB0aGUudHJpZ2dlciA9IGZ1bmN0aW9uKG5hbWUsIGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCBuYW1lLCBldmVudCwgdGhlLCBldmVudCk7XG4gICAgfVxufTtcblxuLy8gU3RhdGljIG1ldGhvZHNcbktUSW1hZ2VJbnB1dC5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICBpZiAoIGVsZW1lbnQgIT09IG51bGwgJiYgS1RVdGlsLmRhdGEoZWxlbWVudCkuaGFzKCdpbWFnZS1pbnB1dCcpICkge1xuICAgICAgICByZXR1cm4gS1RVdGlsLmRhdGEoZWxlbWVudCkuZ2V0KCdpbWFnZS1pbnB1dCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuLy8gQ3JlYXRlIGluc3RhbmNlc1xuS1RJbWFnZUlucHV0LmNyZWF0ZUluc3RhbmNlcyA9IGZ1bmN0aW9uKHNlbGVjdG9yID0gJ1tkYXRhLWt0LWltYWdlLWlucHV0XScpIHtcbiAgICAvLyBJbml0aWFsaXplIE1lbnVzXG4gICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgICBpZiAoIGVsZW1lbnRzICYmIGVsZW1lbnRzLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbmV3IEtUSW1hZ2VJbnB1dChlbGVtZW50c1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEdsb2JhbCBpbml0aWFsaXphdGlvblxuS1RJbWFnZUlucHV0LmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICBLVEltYWdlSW5wdXQuY3JlYXRlSW5zdGFuY2VzKCk7XG59O1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIEtUSW1hZ2VJbnB1dC5pbml0KTtcbn0gZWxzZSB7XG4gICAgS1RJbWFnZUlucHV0LmluaXQoKTtcbn1cblxuLy8gV2VicGFjayBTdXBwb3J0XG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gS1RJbWFnZUlucHV0O1xufVxuIl0sIm5hbWVzIjpbIktUSW1hZ2VJbnB1dCIsImVsZW1lbnQiLCJvcHRpb25zIiwidGhlIiwiZGVmYXVsdE9wdGlvbnMiLCJfY29uc3RydWN0IiwiS1RVdGlsIiwiZGF0YSIsImhhcyIsImdldCIsIl9pbml0IiwiZGVlcEV4dGVuZCIsInVpZCIsImdldFVuaXF1ZUlkIiwiaW5wdXRFbGVtZW50IiwiZmluZCIsIndyYXBwZXJFbGVtZW50IiwiY2FuY2VsRWxlbWVudCIsInJlbW92ZUVsZW1lbnQiLCJoaWRkZW5FbGVtZW50Iiwic3JjIiwiY3NzIiwic2V0QXR0cmlidXRlIiwiX2hhbmRsZXJzIiwic2V0IiwiYWRkRXZlbnQiLCJfY2hhbmdlIiwiX2NhbmNlbCIsIl9yZW1vdmUiLCJlIiwicHJldmVudERlZmF1bHQiLCJmaWxlcyIsIktURXZlbnRIYW5kbGVyIiwidHJpZ2dlciIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJ0YXJnZXQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInZhbHVlIiwiX2Rlc3Ryb3kiLCJyZW1vdmUiLCJnZXRJbnB1dEVsZW1lbnQiLCJnb0VsZW1lbnQiLCJkZXN0cm95Iiwib24iLCJuYW1lIiwiaGFuZGxlciIsIm9uZSIsIm9mZiIsImV2ZW50IiwiZ2V0SW5zdGFuY2UiLCJjcmVhdGVJbnN0YW5jZXMiLCJzZWxlY3RvciIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiaSIsImxlbiIsImluaXQiLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/components/image-input.js\n");
>>>>>>> Stashed changes

                if (calcPaddingTop) {
                    KTUtil.animate(0, calcPaddingTop, speed, function(value) {//
                        el.style.paddingTop = value + 'px';
                    }, 'linear', function() {
                        el.style.paddingTop = '';
                    });
                }

                if (calcPaddingBottom) {
                    KTUtil.animate(0, calcPaddingBottom, speed, function(value) {
                        el.style.paddingBottom = value + 'px';
                    }, 'linear', function() {
                        el.style.paddingBottom = '';
                    });
                }

<<<<<<< Updated upstream
                KTUtil.animate(0, calcHeight, speed, function(value) {
                    el.style.height = value + 'px';
                }, 'linear', function() {
                    el.style.height = '';
                    el.style.display = '';
                    el.style.overflow = '';
=======
"use strict";
eval(" // Class definition\n\nvar KTMenu = function KTMenu(element, options) {\n  ////////////////////////////\n  // ** Private Variables  ** //\n  ////////////////////////////\n  var the = this;\n\n  if (typeof element === \"undefined\" || element === null) {\n    return;\n  } // Default Options\n\n\n  var defaultOptions = {\n    dropdown: {\n      hoverTimeout: 200,\n      zindex: 105\n    },\n    accordion: {\n      slideSpeed: 250,\n      expand: false\n    }\n  }; ////////////////////////////\n  // ** Private Methods  ** //\n  ////////////////////////////\n\n  var _construct = function _construct() {\n    if (KTUtil.data(element).has('menu') === true) {\n      the = KTUtil.data(element).get('menu');\n    } else {\n      _init();\n    }\n  };\n\n  var _init = function _init() {\n    the.options = KTUtil.deepExtend({}, defaultOptions, options);\n    the.uid = KTUtil.getUniqueId('menu');\n    the.element = element;\n    the.triggerElement; // Set initialized\n\n    the.element.setAttribute('data-kt-menu', 'true');\n\n    _setTriggerElement();\n\n    _update();\n\n    KTUtil.data(the.element).set('menu', the);\n  };\n\n  var _destroy = function _destroy() {// todo\n  }; // Event Handlers\n  // Toggle handler\n\n\n  var _click = function _click(element, e) {\n    e.preventDefault();\n\n    var item = _getItemElement(element);\n\n    if (_getItemOption(item, 'trigger') !== 'click') {\n      return;\n    }\n\n    if (_getItemOption(item, 'toggle') === false) {\n      _show(item);\n    } else {\n      _toggle(item);\n    }\n  }; // Link handler\n\n\n  var _link = function _link(element, e) {\n    if (KTEventHandler.trigger(the.element, 'kt.menu.link.click', the) === false) {\n      return;\n    } // Dismiss all shown dropdowns\n\n\n    KTMenu.hideDropdowns();\n    KTEventHandler.trigger(the.element, 'kt.menu.link.clicked', the);\n  }; // Dismiss handler\n\n\n  var _dismiss = function _dismiss(element, e) {\n    var item = _getItemElement(element);\n\n    var items = _getItemChildElements(item);\n\n    if (item !== null && _getItemSubType(item) === 'dropdown') {\n      _hide(item); // hide items dropdown\n      // Hide all child elements as well\n\n\n      if (items.length > 0) {\n        for (var i = 0, len = items.length; i < len; i++) {\n          if (items[i] !== null && _getItemSubType(items[i]) === 'dropdown') {\n            _hide(tems[i]);\n          }\n        }\n      }\n    }\n  }; // Mouseover handle\n\n\n  var _mouseover = function _mouseover(element, e) {\n    var item = _getItemElement(element);\n\n    if (item === null) {\n      return;\n    }\n\n    if (_getItemOption(item, 'trigger') !== 'hover') {\n      return;\n    }\n\n    if (KTUtil.data(item).get('hover') === '1') {\n      clearTimeout(KTUtil.data(item).get('timeout'));\n      KTUtil.data(item).remove('hover');\n      KTUtil.data(item).remove('timeout');\n    }\n\n    _show(item);\n  }; // Mouseout handle\n\n\n  var _mouseout = function _mouseout(element, e) {\n    var item = _getItemElement(element);\n\n    if (item === null) {\n      return;\n    }\n\n    if (_getItemOption(item, 'trigger') !== 'hover') {\n      return;\n    }\n\n    var timeout = setTimeout(function () {\n      if (KTUtil.data(item).get('hover') === '1') {\n        _hide(item);\n      }\n    }, the.options.dropdown.hoverTimeout);\n    KTUtil.data(item).set('hover', '1');\n    KTUtil.data(item).set('timeout', timeout);\n  }; // Toggle item sub\n\n\n  var _toggle = function _toggle(item) {\n    if (!item) {\n      item = the.triggerElement;\n    }\n\n    if (_isItemSubShown(item) === true) {\n      _hide(item);\n    } else {\n      _show(item);\n    }\n  }; // Show item sub\n\n\n  var _show = function _show(item) {\n    if (!item) {\n      item = the.triggerElement;\n    }\n\n    if (_isItemSubShown(item) === true) {\n      return;\n    }\n\n    if (_getItemSubType(item) === 'dropdown') {\n      _showDropdown(item); // // show current dropdown\n\n    } else if (_getItemSubType(item) === 'accordion') {\n      _showAccordion(item);\n    } // Remember last submenu type\n\n\n    KTUtil.data(item).set('type', _getItemSubType(item)); // updated\n  }; // Hide item sub\n\n\n  var _hide = function _hide(item) {\n    if (!item) {\n      item = the.triggerElement;\n    }\n\n    if (_isItemSubShown(item) === false) {\n      return;\n    }\n\n    if (_getItemSubType(item) === 'dropdown') {\n      _hideDropdown(item);\n    } else if (_getItemSubType(item) === 'accordion') {\n      _hideAccordion(item);\n    }\n  }; // Reset item state classes if item sub type changed\n\n\n  var _reset = function _reset(item) {\n    if (_hasItemSub(item) === false) {\n      return;\n    }\n\n    var sub = _getItemSubElement(item); // Reset sub state if sub type is changed during the window resize\n\n\n    if (KTUtil.data(item).has('type') && KTUtil.data(item).get('type') !== _getItemSubType(item)) {\n      // updated\n      KTUtil.removeClass(item, 'hover');\n      KTUtil.removeClass(item, 'show');\n      KTUtil.removeClass(sub, 'show');\n    } // updated\n\n  }; // Update all item state classes if item sub type changed\n\n\n  var _update = function _update() {\n    var items = the.element.querySelectorAll('.menu-item[data-kt-menu-trigger]');\n\n    if (items && items.length > 0) {\n      for (var i = 0, len = items.length; i < len; i++) {\n        _reset(items[i]);\n      }\n    }\n  }; // Set external trigger element\n\n\n  var _setTriggerElement = function _setTriggerElement() {\n    var target = document.querySelector('[data-kt-menu-target=\"# ' + the.element.getAttribute('id') + '\"]');\n\n    if (target !== null) {\n      the.triggerElement = target;\n    } else if (the.element.closest('[data-kt-menu-trigger]')) {\n      the.triggerElement = the.element.closest('[data-kt-menu-trigger]');\n    } else if (the.element.parentNode && KTUtil.child(the.element.parentNode, '[data-kt-menu-trigger]')) {\n      the.triggerElement = KTUtil.child(the.element.parentNode, '[data-kt-menu-trigger]');\n    }\n\n    if (the.triggerElement) {\n      KTUtil.data(the.triggerElement).set('menu', the);\n    }\n  }; // Test if menu has external trigger element\n\n\n  var _isTriggerElement = function _isTriggerElement(item) {\n    return the.triggerElement === item ? true : false;\n  }; // Test if item's sub is shown\n\n\n  var _isItemSubShown = function _isItemSubShown(item) {\n    var sub = _getItemSubElement(item);\n\n    if (sub !== null) {\n      if (_getItemSubType(item) === 'dropdown') {\n        if (KTUtil.hasClass(sub, 'show') === true && sub.hasAttribute('data-popper-placement') === true) {\n          return true;\n        } else {\n          return false;\n        }\n      } else {\n        return KTUtil.hasClass(item, 'show');\n      }\n    } else {\n      return false;\n    }\n  }; // Test if item dropdown is permanent\n\n\n  var _isItemDropdownPermanent = function _isItemDropdownPermanent(item) {\n    return _getItemOption(item, 'permanent') === true ? true : false;\n  }; // Test if item's parent is shown\n\n\n  var _isItemParentShown = function _isItemParentShown(item) {\n    return KTUtil.parents(item, '.menu-item.show').length > 0;\n  }; // Test of it is item sub element\n\n\n  var _isItemSubElement = function _isItemSubElement(item) {\n    return KTUtil.hasClass(item, 'menu-sub');\n  }; // Test if item has sub\n\n\n  var _hasItemSub = function _hasItemSub(item) {\n    return KTUtil.hasClass(item, 'menu-item') && item.hasAttribute('data-kt-menu-trigger');\n  }; // Get link element\n\n\n  var _getItemLinkElement = function _getItemLinkElement(item) {\n    return KTUtil.child(item, '.menu-link');\n  }; // Get toggle element\n\n\n  var _getItemToggleElement = function _getItemToggleElement(item) {\n    if (the.triggerElement) {\n      return the.triggerElement;\n    } else {\n      return _getItemLinkElement(item);\n    }\n  }; // Get item sub element\n\n\n  var _getItemSubElement = function _getItemSubElement(item) {\n    if (_isTriggerElement(item) === true) {\n      return the.element;\n    }\n\n    if (item.classList.contains('menu-sub') === true) {\n      return item;\n    } else if (KTUtil.data(item).has('sub')) {\n      return KTUtil.data(item).get('sub');\n    } else {\n      return KTUtil.child(item, '.menu-sub');\n    }\n  }; // Get item sub type\n\n\n  var _getItemSubType = function _getItemSubType(element) {\n    var sub = _getItemSubElement(element);\n\n    if (sub && parseInt(KTUtil.css(sub, 'z-index')) > 0) {\n      return \"dropdown\";\n    } else {\n      return \"accordion\";\n    }\n  }; // Get item element\n\n\n  var _getItemElement = function _getItemElement(element) {\n    var item, sub; // Element is the external trigger element\n\n    if (_isTriggerElement(element)) {\n      return element;\n    } // Element has item toggler attribute\n\n\n    if (element.hasAttribute('data-kt-menu-trigger')) {\n      return element;\n    } // Element has item DOM reference in it's data storage\n\n\n    if (KTUtil.data(element).has('item')) {\n      return KTUtil.data(element).get('item');\n    } // Item is parent of element\n\n\n    if (item = element.closest('.menu-item[data-kt-menu-trigger]')) {\n      return item;\n    } // Element's parent has item DOM reference in it's data storage\n\n\n    if (sub = element.closest('.menu-sub')) {\n      if (KTUtil.data(sub).has('item') === true) {\n        return KTUtil.data(sub).get('item');\n      }\n    }\n  }; // Get item parent element\n\n\n  var _getItemParentElement = function _getItemParentElement(item) {\n    var sub = item.closest('.menu-sub');\n    var parentItem;\n\n    if (KTUtil.data(sub).has('item')) {\n      return KTUtil.data(sub).get('item');\n    }\n\n    if (sub && (parentItem = sub.closest('.menu-item[data-kt-menu-trigger]'))) {\n      return parentItem;\n    }\n\n    return null;\n  }; // Get item parent elements\n\n\n  var _getItemParentElements = function _getItemParentElements(item) {\n    var parents = [];\n    var parent;\n    var i = 0;\n\n    do {\n      parent = _getItemParentElement(item);\n\n      if (parent) {\n        parents.push(parent);\n        item = parent;\n      }\n\n      i++;\n    } while (parent !== null && i < 20);\n\n    if (the.triggerElement) {\n      parents.unshift(the.triggerElement);\n    }\n\n    return parents;\n  }; // Get item child element\n\n\n  var _getItemChildElement = function _getItemChildElement(item) {\n    var selector = item;\n    var element;\n\n    if (KTUtil.data(item).get('sub')) {\n      selector = KTUtil.data(item).get('sub');\n    }\n\n    if (selector !== null) {\n      //element = selector.querySelector('.show.menu-item[data-kt-menu-trigger]');\n      element = selector.querySelector('.menu-item[data-kt-menu-trigger]');\n\n      if (element) {\n        return element;\n      } else {\n        return null;\n      }\n    } else {\n      return null;\n    }\n  }; // Get item child elements\n\n\n  var _getItemChildElements = function _getItemChildElements(item) {\n    var children = [];\n    var child;\n    var i = 0;\n\n    do {\n      child = _getItemChildElement(item);\n\n      if (child) {\n        children.push(child);\n        item = child;\n      }\n\n      i++;\n    } while (child !== null && i < 20);\n\n    return children;\n  }; // Show item dropdown\n\n\n  var _showDropdown = function _showDropdown(item) {\n    // Handle dropdown show event\n    if (KTEventHandler.trigger(the.element, 'kt.menu.dropdown.show', item) === false) {\n      return;\n    } // Hide all currently shown dropdowns except current one\n\n\n    KTMenu.hideDropdowns(item);\n    var toggle = _isTriggerElement(item) ? item : _getItemLinkElement(item);\n\n    var sub = _getItemSubElement(item);\n\n    var width = _getItemOption(item, 'width');\n\n    var height = _getItemOption(item, 'height');\n\n    var zindex = the.options.dropdown.zindex; // update\n\n    var parentZindex = KTUtil.getHighestZindex(item); // update\n    // Apply a new z-index if dropdown's toggle element or it's parent has greater z-index // update\n\n    if (parentZindex !== null && parentZindex >= zindex) {\n      zindex = parentZindex + 1;\n    }\n\n    if (zindex > 0) {\n      KTUtil.css(sub, 'z-index', zindex);\n    }\n\n    if (width !== null) {\n      KTUtil.css(sub, 'width', width);\n    }\n\n    if (height !== null) {\n      KTUtil.css(sub, 'height', height);\n    }\n\n    KTUtil.css(sub, 'display', '');\n    KTUtil.css(sub, 'overflow', ''); // Init popper(new)\n\n    _initDropdownPopper(item, sub);\n\n    KTUtil.addClass(item, 'show');\n    KTUtil.addClass(item, 'menu-dropdown');\n    KTUtil.addClass(sub, 'show'); // Append the sub the the root of the menu\n\n    if (_getItemOption(item, 'overflow') === true) {\n      document.body.appendChild(sub);\n      KTUtil.data(item).set('sub', sub);\n      KTUtil.data(sub).set('item', item);\n      KTUtil.data(sub).set('menu', the);\n    } else {\n      KTUtil.data(sub).set('item', item);\n    } // Handle dropdown shown event\n\n\n    KTEventHandler.trigger(the.element, 'kt.menu.dropdown.shown', item);\n  }; // Hide item dropdown\n\n\n  var _hideDropdown = function _hideDropdown(item) {\n    // Handle dropdown hide event\n    if (KTEventHandler.trigger(the.element, 'kt.menu.dropdown.hide', item) === false) {\n      return;\n    }\n\n    var sub = _getItemSubElement(item);\n\n    KTUtil.css(sub, 'z-index', '');\n    KTUtil.css(sub, 'width', '');\n    KTUtil.css(sub, 'height', '');\n    KTUtil.removeClass(item, 'show');\n    KTUtil.removeClass(item, 'menu-dropdown');\n    KTUtil.removeClass(sub, 'show'); // Append the sub back to it's parent\n\n    if (_getItemOption(item, 'overflow') === true) {\n      if (item.classList.contains('menu-item')) {\n        item.appendChild(sub);\n      } else {\n        KTUtil.insertAfter(the.element, item);\n      }\n\n      KTUtil.data(item).remove('sub');\n      KTUtil.data(sub).remove('item');\n      KTUtil.data(sub).remove('menu');\n    } // Destroy popper(new)\n\n\n    _destroyDropdownPopper(item); // Handle dropdown hidden event \n\n\n    KTEventHandler.trigger(the.element, 'kt.menu.dropdown.hidden', item);\n  }; // Init dropdown popper(new)\n\n\n  var _initDropdownPopper = function _initDropdownPopper(item, sub) {\n    // Setup popper instance\n    var reference;\n\n    var attach = _getItemOption(item, 'attach');\n\n    if (attach) {\n      if (attach === 'parent') {\n        reference = item.parentNode;\n      } else {\n        reference = document.querySelector(attach);\n      }\n    } else {\n      reference = item;\n    }\n\n    var popper = Popper.createPopper(reference, sub, _getDropdownPopperConfig(item));\n    KTUtil.data(item).set('popper', popper);\n  }; // Destroy dropdown popper(new)\n\n\n  var _destroyDropdownPopper = function _destroyDropdownPopper(item) {\n    if (KTUtil.data(item).has('popper') === true) {\n      KTUtil.data(item).get('popper').destroy();\n      KTUtil.data(item).remove('popper');\n    }\n  }; // Prepare popper config for dropdown(see: https://popper.js.org/docs/v2/)\n\n\n  var _getDropdownPopperConfig = function _getDropdownPopperConfig(item) {\n    // Placement\n    var placement = _getItemOption(item, 'placement');\n\n    if (!placement) {\n      placement = 'right';\n    } // Offset\n\n\n    var offsetValue = _getItemOption(item, 'offset');\n\n    var offset = offsetValue ? offsetValue.split(\",\") : []; // Strategy\n\n    var strategy = _getItemOption(item, 'overflow') === true ? 'absolute' : 'fixed';\n    var altAxis = _getItemOption(item, 'flip') !== false ? true : false;\n    var popperConfig = {\n      placement: placement,\n      strategy: strategy,\n      modifiers: [{\n        name: 'offset',\n        options: {\n          offset: offset\n        }\n      }, {\n        name: 'preventOverflow',\n        options: {\n          altAxis: altAxis\n        }\n      }, {\n        name: 'flip',\n        options: {\n          flipVariations: false\n        }\n      }]\n    };\n    return popperConfig;\n  }; // Show item accordion\n\n\n  var _showAccordion = function _showAccordion(item) {\n    if (KTEventHandler.trigger(the.element, 'kt.menu.accordion.show', item) === false) {\n      return;\n    }\n\n    if (the.options.accordion.expand === false) {\n      _hideAccordions(item);\n    }\n\n    var sub = _getItemSubElement(item);\n\n    if (KTUtil.data(item).has('popper') === true) {\n      _hideDropdown(item);\n    }\n\n    KTUtil.addClass(item, 'hover'); // updateWW\n\n    KTUtil.addClass(item, 'showing');\n    KTUtil.slideDown(sub, the.options.accordion.slideSpeed, function () {\n      KTUtil.removeClass(item, 'showing');\n      KTUtil.addClass(item, 'show');\n      KTUtil.addClass(sub, 'show');\n      KTEventHandler.trigger(the.element, 'kt.menu.accordion.shown', item);\n    });\n  }; // Hide item accordion\n\n\n  var _hideAccordion = function _hideAccordion(item) {\n    if (KTEventHandler.trigger(the.element, 'kt.menu.accordion.hide', item) === false) {\n      return;\n    }\n\n    var sub = _getItemSubElement(item);\n\n    KTUtil.addClass(item, 'hiding');\n    KTUtil.slideUp(sub, the.options.accordion.slideSpeed, function () {\n      KTUtil.removeClass(item, 'hiding');\n      KTUtil.removeClass(item, 'show');\n      KTUtil.removeClass(sub, 'show');\n      KTUtil.removeClass(item, 'hover'); // update\n\n      KTEventHandler.trigger(the.element, 'kt.menu.accordion.hidden', item);\n    });\n  }; // Hide all shown accordions of item\n\n\n  var _hideAccordions = function _hideAccordions(item) {\n    var itemsToHide = KTUtil.findAll(the.element, '.show[data-kt-menu-trigger]');\n    var itemToHide;\n\n    if (itemsToHide && itemsToHide.length > 0) {\n      for (var i = 0, len = itemsToHide.length; i < len; i++) {\n        itemToHide = itemsToHide[i];\n\n        if (_getItemSubType(itemToHide) === 'accordion' && itemToHide !== item && item.contains(itemToHide) === false && itemToHide.contains(item) === false) {\n          _hideAccordion(itemToHide);\n        }\n      }\n    }\n  }; // Get item option(through html attributes)\n\n\n  var _getItemOption = function _getItemOption(item, name) {\n    var attr;\n    var value = null;\n\n    if (item && item.hasAttribute('data-kt-menu-' + name)) {\n      attr = item.getAttribute('data-kt-menu-' + name);\n      value = KTUtil.getResponsiveValue(attr);\n\n      if (value !== null && String(value) === 'true') {\n        value = true;\n      } else if (value !== null && String(value) === 'false') {\n        value = false;\n      }\n    }\n\n    return value;\n  };\n\n  var _destroy = function _destroy() {\n    KTUtil.data(the.element).remove('menu');\n  }; // Construct Class\n\n\n  _construct(); ///////////////////////\n  // ** Public API  ** //\n  ///////////////////////\n  // Event Handlers\n\n\n  the.click = function (element, e) {\n    return _click(element, e);\n  };\n\n  the.link = function (element, e) {\n    return _link(element, e);\n  };\n\n  the.dismiss = function (element, e) {\n    return _dismiss(element, e);\n  };\n\n  the.mouseover = function (element, e) {\n    return _mouseover(element, e);\n  };\n\n  the.mouseout = function (element, e) {\n    return _mouseout(element, e);\n  }; // General Methods\n\n\n  the.getItemTriggerType = function (item) {\n    return _getItemOption(item, 'trigger');\n  };\n\n  the.getItemSubType = function (element) {\n    return _getItemSubType(element);\n  };\n\n  the.show = function (item) {\n    return _show(item);\n  };\n\n  the.hide = function (item) {\n    return _hide(item);\n  };\n\n  the.reset = function (item) {\n    return _reset(item);\n  };\n\n  the.update = function () {\n    return _update();\n  };\n\n  the.getElement = function () {\n    return the.element;\n  };\n\n  the.getItemLinkElement = function (item) {\n    return _getItemLinkElement(item);\n  };\n\n  the.getItemToggleElement = function (item) {\n    return _getItemToggleElement(item);\n  };\n\n  the.getItemSubElement = function (item) {\n    return _getItemSubElement(item);\n  };\n\n  the.getItemParentElements = function (item) {\n    return _getItemParentElements(item);\n  };\n\n  the.isItemSubShown = function (item) {\n    return _isItemSubShown(item);\n  };\n\n  the.isItemParentShown = function (item) {\n    return _isItemParentShown(item);\n  };\n\n  the.getTriggerElement = function () {\n    return the.triggerElement;\n  };\n\n  the.isItemDropdownPermanent = function (item) {\n    return _isItemDropdownPermanent(item);\n  };\n\n  the.destroy = function () {\n    return _destroy();\n  }; // Accordion Mode Methods\n\n\n  the.hideAccordions = function (item) {\n    return _hideAccordions(item);\n  }; // Event API\n\n\n  the.on = function (name, handler) {\n    return KTEventHandler.on(the.element, name, handler);\n  };\n\n  the.one = function (name, handler) {\n    return KTEventHandler.one(the.element, name, handler);\n  };\n\n  the.off = function (name) {\n    return KTEventHandler.off(the.element, name);\n  };\n}; // Get KTMenu instance by element\n\n\nKTMenu.getInstance = function (element) {\n  var menu;\n  var item; // Element has menu DOM reference in it's DATA storage\n\n  if (KTUtil.data(element).has('menu')) {\n    return KTUtil.data(element).get('menu');\n  } // Element has .menu parent \n\n\n  if (menu = element.closest('.menu')) {\n    if (KTUtil.data(menu).has('menu')) {\n      return KTUtil.data(menu).get('menu');\n    }\n  } // Element has a parent with DOM reference to .menu in it's DATA storage\n\n\n  if (KTUtil.hasClass(element, 'menu-link')) {\n    var sub = element.closest('.menu-sub');\n\n    if (KTUtil.data(sub).has('menu')) {\n      return KTUtil.data(sub).get('menu');\n    }\n  }\n\n  return null;\n}; // Hide all dropdowns and skip one if provided\n\n\nKTMenu.hideDropdowns = function (skip) {\n  var items = document.querySelectorAll('.show.menu-dropdown[data-kt-menu-trigger]');\n\n  if (items && items.length > 0) {\n    for (var i = 0, len = items.length; i < len; i++) {\n      var item = items[i];\n      var menu = KTMenu.getInstance(item);\n\n      if (menu && menu.getItemSubType(item) === 'dropdown') {\n        if (skip) {\n          if (menu.getItemSubElement(item).contains(skip) === false && item.contains(skip) === false && item !== skip) {\n            menu.hide(item);\n          }\n        } else {\n          menu.hide(item);\n        }\n      }\n    }\n  }\n}; // Update all dropdowns popover instances\n\n\nKTMenu.updateDropdowns = function () {\n  var items = document.querySelectorAll('.show.menu-dropdown[data-kt-menu-trigger]');\n\n  if (items && items.length > 0) {\n    for (var i = 0, len = items.length; i < len; i++) {\n      var item = items[i];\n\n      if (KTUtil.data(item).has('popper')) {\n        KTUtil.data(item).get('popper').forceUpdate();\n      }\n    }\n  }\n}; // Global handlers\n\n\nKTMenu.initGlobalHandlers = function () {\n  // Dropdown handler\n  document.addEventListener(\"click\", function (e) {\n    var items = document.querySelectorAll('.show.menu-dropdown[data-kt-menu-trigger]');\n    var menu;\n    var item;\n    var sub;\n    var menuObj;\n\n    if (items && items.length > 0) {\n      for (var i = 0, len = items.length; i < len; i++) {\n        item = items[i];\n        menuObj = KTMenu.getInstance(item);\n\n        if (menuObj && menuObj.getItemSubType(item) === 'dropdown') {\n          menu = menuObj.getElement();\n          sub = menuObj.getItemSubElement(item);\n\n          if (item === e.target || item.contains(e.target)) {\n            continue;\n          }\n\n          if (sub === e.target || sub.contains(e.target)) {\n            continue;\n          }\n\n          menuObj.hide(item);\n        }\n      }\n    }\n  }); // Sub toggle handler(updated)\n\n  KTUtil.on(document.body, '.menu-item[data-kt-menu-trigger] > .menu-link, [data-kt-menu-trigger]:not(.menu-item):not([data-kt-menu-trigger=\"auto\"])', 'click', function (e) {\n    var menu = KTMenu.getInstance(this);\n\n    if (menu !== null) {\n      return menu.click(this, e);\n    }\n  }); // Link handler\n\n  KTUtil.on(document.body, '.menu-item:not([data-kt-menu-trigger]) > .menu-link', 'click', function (e) {\n    var menu = KTMenu.getInstance(this);\n\n    if (menu !== null) {\n      return menu.link(this, e);\n    }\n  }); // Dismiss handler\n\n  KTUtil.on(document.body, '[data-kt-menu-dismiss=\"true\"]', 'click', function (e) {\n    var menu = KTMenu.getInstance(this);\n\n    if (menu !== null) {\n      return menu.dismiss(this, e);\n    }\n  }); // Mouseover handler\n\n  KTUtil.on(document.body, '[data-kt-menu-trigger], .menu-sub', 'mouseover', function (e) {\n    var menu = KTMenu.getInstance(this);\n\n    if (menu !== null && menu.getItemSubType(this) === 'dropdown') {\n      return menu.mouseover(this, e);\n    }\n  }); // Mouseout handler\n\n  KTUtil.on(document.body, '[data-kt-menu-trigger], .menu-sub', 'mouseout', function (e) {\n    var menu = KTMenu.getInstance(this);\n\n    if (menu !== null && menu.getItemSubType(this) === 'dropdown') {\n      return menu.mouseout(this, e);\n    }\n  }); // Resize handler\n\n  window.addEventListener('resize', function () {\n    var menu;\n    var timer;\n    KTUtil.throttle(timer, function () {\n      // Locate and update Offcanvas instances on window resize\n      var elements = document.querySelectorAll('[data-kt-menu=\"true\"]');\n\n      if (elements && elements.length > 0) {\n        for (var i = 0, len = elements.length; i < len; i++) {\n          menu = KTMenu.getInstance(elements[i]);\n\n          if (menu) {\n            menu.update();\n          }\n        }\n      }\n    }, 200);\n  });\n}; // Global instances\n\n\nKTMenu.createInstances = function () {\n  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-kt-menu=\"true\"]';\n  // Initialize menus\n  var elements = document.querySelectorAll(selector);\n\n  if (elements && elements.length > 0) {\n    for (var i = 0, len = elements.length; i < len; i++) {\n      new KTMenu(elements[i]);\n    }\n  }\n}; // Global initialization\n\n\nKTMenu.init = function () {\n  // Global Event Handlers\n  KTMenu.initGlobalHandlers(); // Lazy Initialization\n\n  KTMenu.createInstances();\n}; // On document ready\n\n\nif (document.readyState === 'loading') {\n  document.addEventListener('DOMContentLoaded', KTMenu.init);\n} else {\n  KTMenu.init();\n} // Webpack support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTMenu;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFTQyxPQUFULEVBQWtCQyxPQUFsQixFQUEyQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxNQUFJQyxHQUFHLEdBQUcsSUFBVjs7QUFFQSxNQUFLLE9BQU9GLE9BQVAsS0FBbUIsV0FBbkIsSUFBa0NBLE9BQU8sS0FBSyxJQUFuRCxFQUEwRDtBQUN0RDtBQUNILEdBUm1DLENBVXBDOzs7QUFDQSxNQUFJRyxjQUFjLEdBQUc7QUFDakJDLElBQUFBLFFBQVEsRUFBRTtBQUNOQyxNQUFBQSxZQUFZLEVBQUUsR0FEUjtBQUVOQyxNQUFBQSxNQUFNLEVBQUU7QUFGRixLQURPO0FBTWpCQyxJQUFBQSxTQUFTLEVBQUU7QUFDUEMsTUFBQUEsVUFBVSxFQUFFLEdBREw7QUFFUEMsTUFBQUEsTUFBTSxFQUFFO0FBRkQ7QUFOTSxHQUFyQixDQVhvQyxDQXVCcEM7QUFDQTtBQUNBOztBQUVBLE1BQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVc7QUFDeEIsUUFBS0MsTUFBTSxDQUFDQyxJQUFQLENBQVlaLE9BQVosRUFBcUJhLEdBQXJCLENBQXlCLE1BQXpCLE1BQXFDLElBQTFDLEVBQWlEO0FBQzdDWCxNQUFBQSxHQUFHLEdBQUdTLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZWixPQUFaLEVBQXFCYyxHQUFyQixDQUF5QixNQUF6QixDQUFOO0FBQ0gsS0FGRCxNQUVPO0FBQ0hDLE1BQUFBLEtBQUs7QUFDUjtBQUNKLEdBTkQ7O0FBUUEsTUFBSUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBVztBQUNuQmIsSUFBQUEsR0FBRyxDQUFDRCxPQUFKLEdBQWNVLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQixFQUFsQixFQUFzQmIsY0FBdEIsRUFBc0NGLE9BQXRDLENBQWQ7QUFDQUMsSUFBQUEsR0FBRyxDQUFDZSxHQUFKLEdBQVVO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QUFDeEVELEVBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjVLLE1BQWpCO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvbWVudS5qcz9kYTc1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RNZW51ID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucykge1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyAqKiBQcml2YXRlIFZhcmlhYmxlcyAgKiogLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgdmFyIHRoZSA9IHRoaXM7XG5cbiAgICBpZiAoIHR5cGVvZiBlbGVtZW50ID09PSBcInVuZGVmaW5lZFwiIHx8IGVsZW1lbnQgPT09IG51bGwgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IE9wdGlvbnNcbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgIGRyb3Bkb3duOiB7XG4gICAgICAgICAgICBob3ZlclRpbWVvdXQ6IDIwMCxcbiAgICAgICAgICAgIHppbmRleDogMTA1XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWNjb3JkaW9uOiB7XG4gICAgICAgICAgICBzbGlkZVNwZWVkOiAyNTAsXG4gICAgICAgICAgICBleHBhbmQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vICoqIFByaXZhdGUgTWV0aG9kcyAgKiogLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICB2YXIgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIEtUVXRpbC5kYXRhKGVsZW1lbnQpLmhhcygnbWVudScpID09PSB0cnVlICkge1xuICAgICAgICAgICAgdGhlID0gS1RVdGlsLmRhdGEoZWxlbWVudCkuZ2V0KCdtZW51Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfaW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoZS5vcHRpb25zID0gS1RVdGlsLmRlZXBFeHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhlLnVpZCA9IEtUVXRpbC5nZXRVbmlxdWVJZCgnbWVudScpO1xuICAgICAgICB0aGUuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoZS50cmlnZ2VyRWxlbWVudDtcblxuICAgICAgICAvLyBTZXQgaW5pdGlhbGl6ZWRcbiAgICAgICAgdGhlLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWt0LW1lbnUnLCAndHJ1ZScpO1xuXG4gICAgICAgIF9zZXRUcmlnZ2VyRWxlbWVudCgpO1xuICAgICAgICBfdXBkYXRlKCk7XG5cbiAgICAgICAgS1RVdGlsLmRhdGEodGhlLmVsZW1lbnQpLnNldCgnbWVudScsIHRoZSk7XG4gICAgfVxuXG4gICAgdmFyIF9kZXN0cm95ID0gZnVuY3Rpb24oKSB7ICAvLyB0b2RvXG5cbiAgICB9XG5cbiAgICAvLyBFdmVudCBIYW5kbGVyc1xuICAgIC8vIFRvZ2dsZSBoYW5kbGVyXG4gICAgdmFyIF9jbGljayA9IGZ1bmN0aW9uKGVsZW1lbnQsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciBpdGVtID0gX2dldEl0ZW1FbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgIGlmICggX2dldEl0ZW1PcHRpb24oaXRlbSwgJ3RyaWdnZXInKSAhPT0gJ2NsaWNrJyApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggX2dldEl0ZW1PcHRpb24oaXRlbSwgJ3RvZ2dsZScpID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgIF9zaG93KGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RvZ2dsZShpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIExpbmsgaGFuZGxlclxuICAgIHZhciBfbGluayA9IGZ1bmN0aW9uKGVsZW1lbnQsIGUpIHtcbiAgICAgICAgaWYgKCBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3QubWVudS5saW5rLmNsaWNrJywgdGhlKSA9PT0gZmFsc2UgKSAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGlzbWlzcyBhbGwgc2hvd24gZHJvcGRvd25zXG4gICAgICAgIEtUTWVudS5oaWRlRHJvcGRvd25zKCk7XG5cbiAgICAgICAgS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgJ2t0Lm1lbnUubGluay5jbGlja2VkJywgdGhlKTtcbiAgICB9XG5cbiAgICAvLyBEaXNtaXNzIGhhbmRsZXJcbiAgICB2YXIgX2Rpc21pc3MgPSBmdW5jdGlvbihlbGVtZW50LCBlKSB7XG4gICAgICAgIHZhciBpdGVtID0gX2dldEl0ZW1FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICB2YXIgaXRlbXMgPSBfZ2V0SXRlbUNoaWxkRWxlbWVudHMoaXRlbSk7XG5cbiAgICAgICAgaWYgKCBpdGVtICE9PSBudWxsICYmIF9nZXRJdGVtU3ViVHlwZShpdGVtKSA9PT0gJ2Ryb3Bkb3duJykge1xuICAgICAgICAgICAgX2hpZGUoaXRlbSk7IC8vIGhpZGUgaXRlbXMgZHJvcGRvd25cbiAgICAgICAgICAgIC8vIEhpZGUgYWxsIGNoaWxkIGVsZW1lbnRzIGFzIHdlbGxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBpdGVtcy5sZW5ndGggPiAwICkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBpdGVtcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGl0ZW1zW2ldICE9PSBudWxsICYmICBfZ2V0SXRlbVN1YlR5cGUoaXRlbXNbaV0pID09PSAnZHJvcGRvd24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaGlkZSh0ZW1zW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1vdXNlb3ZlciBoYW5kbGVcbiAgICB2YXIgX21vdXNlb3ZlciA9IGZ1bmN0aW9uKGVsZW1lbnQsIGUpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBfZ2V0SXRlbUVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKCBpdGVtID09PSBudWxsICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfZ2V0SXRlbU9wdGlvbihpdGVtLCAndHJpZ2dlcicpICE9PSAnaG92ZXInICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBLVFV0aWwuZGF0YShpdGVtKS5nZXQoJ2hvdmVyJykgPT09ICcxJyApIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChLVFV0aWwuZGF0YShpdGVtKS5nZXQoJ3RpbWVvdXQnKSk7XG4gICAgICAgICAgICBLVFV0aWwuZGF0YShpdGVtKS5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICAgICAgICBLVFV0aWwuZGF0YShpdGVtKS5yZW1vdmUoJ3RpbWVvdXQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9zaG93KGl0ZW0pO1xuICAgIH1cblxuICAgIC8vIE1vdXNlb3V0IGhhbmRsZVxuICAgIHZhciBfbW91c2VvdXQgPSBmdW5jdGlvbihlbGVtZW50LCBlKSB7XG4gICAgICAgIHZhciBpdGVtID0gX2dldEl0ZW1FbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgIGlmICggaXRlbSA9PT0gbnVsbCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggX2dldEl0ZW1PcHRpb24oaXRlbSwgJ3RyaWdnZXInKSAhPT0gJ2hvdmVyJyApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICggS1RVdGlsLmRhdGEoaXRlbSkuZ2V0KCdob3ZlcicpID09PSAnMScgKSB7XG4gICAgICAgICAgICAgICAgX2hpZGUoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoZS5vcHRpb25zLmRyb3Bkb3duLmhvdmVyVGltZW91dCk7XG5cbiAgICAgICAgS1RVdGlsLmRhdGEoaXRlbSkuc2V0KCdob3ZlcicsICcxJyk7XG4gICAgICAgIEtUVXRpbC5kYXRhKGl0ZW0pLnNldCgndGltZW91dCcsIHRpbWVvdXQpO1xuICAgIH1cblxuICAgIC8vIFRvZ2dsZSBpdGVtIHN1YlxuICAgIHZhciBfdG9nZ2xlID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBpZiAoICFpdGVtICkge1xuICAgICAgICAgICAgaXRlbSA9IHRoZS50cmlnZ2VyRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggX2lzSXRlbVN1YlNob3duKGl0ZW0pID09PSB0cnVlICkge1xuICAgICAgICAgICAgX2hpZGUoaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfc2hvdyhpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNob3cgaXRlbSBzdWJcbiAgICB2YXIgX3Nob3cgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGlmICggIWl0ZW0gKSB7XG4gICAgICAgICAgICBpdGVtID0gdGhlLnRyaWdnZXJFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfaXNJdGVtU3ViU2hvd24oaXRlbSkgPT09IHRydWUgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF9nZXRJdGVtU3ViVHlwZShpdGVtKSA9PT0gJ2Ryb3Bkb3duJyApIHtcbiAgICAgICAgICAgIF9zaG93RHJvcGRvd24oaXRlbSk7IC8vIC8vIHNob3cgY3VycmVudCBkcm9wZG93blxuICAgICAgICB9IGVsc2UgaWYgKCBfZ2V0SXRlbVN1YlR5cGUoaXRlbSkgPT09ICdhY2NvcmRpb24nICkge1xuICAgICAgICAgICAgX3Nob3dBY2NvcmRpb24oaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1lbWJlciBsYXN0IHN1Ym1lbnUgdHlwZVxuICAgICAgICBLVFV0aWwuZGF0YShpdGVtKS5zZXQoJ3R5cGUnLCBfZ2V0SXRlbVN1YlR5cGUoaXRlbSkpOyAgLy8gdXBkYXRlZFxuICAgIH1cblxuICAgIC8vIEhpZGUgaXRlbSBzdWJcbiAgICB2YXIgX2hpZGUgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGlmICggIWl0ZW0gKSB7XG4gICAgICAgICAgICBpdGVtID0gdGhlLnRyaWdnZXJFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfaXNJdGVtU3ViU2hvd24oaXRlbSkgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIF9nZXRJdGVtU3ViVHlwZShpdGVtKSA9PT0gJ2Ryb3Bkb3duJyApIHtcbiAgICAgICAgICAgIF9oaWRlRHJvcGRvd24oaXRlbSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIF9nZXRJdGVtU3ViVHlwZShpdGVtKSA9PT0gJ2FjY29yZGlvbicgKSB7XG4gICAgICAgICAgICBfaGlkZUFjY29yZGlvbihpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlc2V0IGl0ZW0gc3RhdGUgY2xhc3NlcyBpZiBpdGVtIHN1YiB0eXBlIGNoYW5nZWRcbiAgICB2YXIgX3Jlc2V0ID0gZnVuY3Rpb24oaXRlbSkgeyAgICAgICAgXG4gICAgICAgIGlmICggX2hhc0l0ZW1TdWIoaXRlbSkgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN1YiA9IF9nZXRJdGVtU3ViRWxlbWVudChpdGVtKTtcblxuICAgICAgICAvLyBSZXNldCBzdWIgc3RhdGUgaWYgc3ViIHR5cGUgaXMgY2hhbmdlZCBkdXJpbmcgdGhlIHdpbmRvdyByZXNpemVcbiAgICAgICAgaWYgKCBLVFV0aWwuZGF0YShpdGVtKS5oYXMoJ3R5cGUnKSAmJiBLVFV0aWwuZGF0YShpdGVtKS5nZXQoJ3R5cGUnKSAhPT0gX2dldEl0ZW1TdWJUeXBlKGl0ZW0pICkgeyAgLy8gdXBkYXRlZFxuICAgICAgICAgICAgS1RVdGlsLnJlbW92ZUNsYXNzKGl0ZW0sICdob3ZlcicpOyBcbiAgICAgICAgICAgIEtUVXRpbC5yZW1vdmVDbGFzcyhpdGVtLCAnc2hvdycpOyBcbiAgICAgICAgICAgIEtUVXRpbC5yZW1vdmVDbGFzcyhzdWIsICdzaG93Jyk7IFxuICAgICAgICB9ICAvLyB1cGRhdGVkXG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGFsbCBpdGVtIHN0YXRlIGNsYXNzZXMgaWYgaXRlbSBzdWIgdHlwZSBjaGFuZ2VkXG4gICAgdmFyIF91cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhlLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbVtkYXRhLWt0LW1lbnUtdHJpZ2dlcl0nKTtcblxuICAgICAgICBpZiAoIGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gaXRlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBfcmVzZXQoaXRlbXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0IGV4dGVybmFsIHRyaWdnZXIgZWxlbWVudFxuICAgIHZhciBfc2V0VHJpZ2dlckVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LW1lbnUtdGFyZ2V0PVwiIyAnICsgdGhlLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpICArICdcIl0nKTtcblxuICAgICAgICBpZiAoIHRhcmdldCAhPT0gbnVsbCApIHtcbiAgICAgICAgICAgIHRoZS50cmlnZ2VyRWxlbWVudCA9IHRhcmdldDtcbiAgICAgICAgfSBlbHNlIGlmICggdGhlLmVsZW1lbnQuY2xvc2VzdCgnW2RhdGEta3QtbWVudS10cmlnZ2VyXScpICkge1xuICAgICAgICAgICAgdGhlLnRyaWdnZXJFbGVtZW50ID0gdGhlLmVsZW1lbnQuY2xvc2VzdCgnW2RhdGEta3QtbWVudS10cmlnZ2VyXScpO1xuICAgICAgICB9IGVsc2UgaWYgKCB0aGUuZWxlbWVudC5wYXJlbnROb2RlICYmIEtUVXRpbC5jaGlsZCh0aGUuZWxlbWVudC5wYXJlbnROb2RlLCAnW2RhdGEta3QtbWVudS10cmlnZ2VyXScpKSB7XG4gICAgICAgICAgICB0aGUudHJpZ2dlckVsZW1lbnQgPSBLVFV0aWwuY2hpbGQodGhlLmVsZW1lbnQucGFyZW50Tm9kZSwgJ1tkYXRhLWt0LW1lbnUtdHJpZ2dlcl0nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdGhlLnRyaWdnZXJFbGVtZW50ICkge1xuICAgICAgICAgICAgS1RVdGlsLmRhdGEodGhlLnRyaWdnZXJFbGVtZW50KS5zZXQoJ21lbnUnLCB0aGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGVzdCBpZiBtZW51IGhhcyBleHRlcm5hbCB0cmlnZ2VyIGVsZW1lbnRcbiAgICB2YXIgX2lzVHJpZ2dlckVsZW1lbnQgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiAoIHRoZS50cmlnZ2VyRWxlbWVudCA9PT0gaXRlbSApID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFRlc3QgaWYgaXRlbSdzIHN1YiBpcyBzaG93blxuICAgIHZhciBfaXNJdGVtU3ViU2hvd24gPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBzdWIgPSBfZ2V0SXRlbVN1YkVsZW1lbnQoaXRlbSk7XG5cbiAgICAgICAgaWYgKCBzdWIgIT09IG51bGwgKSB7XG4gICAgICAgICAgICBpZiAoIF9nZXRJdGVtU3ViVHlwZShpdGVtKSA9PT0gJ2Ryb3Bkb3duJyApIHtcbiAgICAgICAgICAgICAgICBpZiAoIEtUVXRpbC5oYXNDbGFzcyhzdWIsICdzaG93JykgPT09IHRydWUgJiYgc3ViLmhhc0F0dHJpYnV0ZSgnZGF0YS1wb3BwZXItcGxhY2VtZW50JykgPT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBLVFV0aWwuaGFzQ2xhc3MoaXRlbSwgJ3Nob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRlc3QgaWYgaXRlbSBkcm9wZG93biBpcyBwZXJtYW5lbnRcbiAgICB2YXIgX2lzSXRlbURyb3Bkb3duUGVybWFuZW50ID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gX2dldEl0ZW1PcHRpb24oaXRlbSwgJ3Blcm1hbmVudCcpID09PSB0cnVlID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFRlc3QgaWYgaXRlbSdzIHBhcmVudCBpcyBzaG93blxuICAgIHZhciBfaXNJdGVtUGFyZW50U2hvd24gPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiBLVFV0aWwucGFyZW50cyhpdGVtLCAnLm1lbnUtaXRlbS5zaG93JykubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICAvLyBUZXN0IG9mIGl0IGlzIGl0ZW0gc3ViIGVsZW1lbnRcbiAgICB2YXIgX2lzSXRlbVN1YkVsZW1lbnQgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiBLVFV0aWwuaGFzQ2xhc3MoaXRlbSwgJ21lbnUtc3ViJyk7XG4gICAgfVxuXG4gICAgLy8gVGVzdCBpZiBpdGVtIGhhcyBzdWJcbiAgICB2YXIgX2hhc0l0ZW1TdWIgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiAoS1RVdGlsLmhhc0NsYXNzKGl0ZW0sICdtZW51LWl0ZW0nKSAmJiBpdGVtLmhhc0F0dHJpYnV0ZSgnZGF0YS1rdC1tZW51LXRyaWdnZXInKSk7XG4gICAgfVxuXG4gICAgLy8gR2V0IGxpbmsgZWxlbWVudFxuICAgIHZhciBfZ2V0SXRlbUxpbmtFbGVtZW50ID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gS1RVdGlsLmNoaWxkKGl0ZW0sICcubWVudS1saW5rJyk7XG4gICAgfVxuXG4gICAgLy8gR2V0IHRvZ2dsZSBlbGVtZW50XG4gICAgdmFyIF9nZXRJdGVtVG9nZ2xlRWxlbWVudCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaWYgKCB0aGUudHJpZ2dlckVsZW1lbnQgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhlLnRyaWdnZXJFbGVtZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9nZXRJdGVtTGlua0VsZW1lbnQoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXQgaXRlbSBzdWIgZWxlbWVudFxuICAgIHZhciBfZ2V0SXRlbVN1YkVsZW1lbnQgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGlmICggX2lzVHJpZ2dlckVsZW1lbnQoaXRlbSkgPT09IHRydWUgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhlLmVsZW1lbnQ7XG4gICAgICAgIH0gaWYgKCBpdGVtLmNsYXNzTGlzdC5jb250YWlucygnbWVudS1zdWInKSA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9IGVsc2UgaWYgKCBLVFV0aWwuZGF0YShpdGVtKS5oYXMoJ3N1YicpICkge1xuICAgICAgICAgICAgcmV0dXJuIEtUVXRpbC5kYXRhKGl0ZW0pLmdldCgnc3ViJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gS1RVdGlsLmNoaWxkKGl0ZW0sICcubWVudS1zdWInKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldCBpdGVtIHN1YiB0eXBlXG4gICAgdmFyIF9nZXRJdGVtU3ViVHlwZSA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHN1YiA9IF9nZXRJdGVtU3ViRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICBpZiAoIHN1YiAmJiBwYXJzZUludChLVFV0aWwuY3NzKHN1YiwgJ3otaW5kZXgnKSkgPiAwICkge1xuICAgICAgICAgICAgcmV0dXJuIFwiZHJvcGRvd25cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcImFjY29yZGlvblwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0IGl0ZW0gZWxlbWVudFxuICAgIHZhciBfZ2V0SXRlbUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHZhciBpdGVtLCBzdWI7XG5cbiAgICAgICAgLy8gRWxlbWVudCBpcyB0aGUgZXh0ZXJuYWwgdHJpZ2dlciBlbGVtZW50XG4gICAgICAgIGlmIChfaXNUcmlnZ2VyRWxlbWVudChlbGVtZW50KSApIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9ICAgXG5cbiAgICAgICAgLy8gRWxlbWVudCBoYXMgaXRlbSB0b2dnbGVyIGF0dHJpYnV0ZVxuICAgICAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWt0LW1lbnUtdHJpZ2dlcicpICkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbGVtZW50IGhhcyBpdGVtIERPTSByZWZlcmVuY2UgaW4gaXQncyBkYXRhIHN0b3JhZ2VcbiAgICAgICAgaWYgKCBLVFV0aWwuZGF0YShlbGVtZW50KS5oYXMoJ2l0ZW0nKSApIHtcbiAgICAgICAgICAgIHJldHVybiBLVFV0aWwuZGF0YShlbGVtZW50KS5nZXQoJ2l0ZW0nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEl0ZW0gaXMgcGFyZW50IG9mIGVsZW1lbnRcbiAgICAgICAgaWYgKCAoaXRlbSA9IGVsZW1lbnQuY2xvc2VzdCgnLm1lbnUtaXRlbVtkYXRhLWt0LW1lbnUtdHJpZ2dlcl0nKSkgKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVsZW1lbnQncyBwYXJlbnQgaGFzIGl0ZW0gRE9NIHJlZmVyZW5jZSBpbiBpdCdzIGRhdGEgc3RvcmFnZVxuICAgICAgICBpZiAoIChzdWIgPSBlbGVtZW50LmNsb3Nlc3QoJy5tZW51LXN1YicpKSApIHtcbiAgICAgICAgICAgIGlmICggS1RVdGlsLmRhdGEoc3ViKS5oYXMoJ2l0ZW0nKSA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gS1RVdGlsLmRhdGEoc3ViKS5nZXQoJ2l0ZW0nKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldCBpdGVtIHBhcmVudCBlbGVtZW50XG4gICAgdmFyIF9nZXRJdGVtUGFyZW50RWxlbWVudCA9IGZ1bmN0aW9uKGl0ZW0pIHsgIFxuICAgICAgICB2YXIgc3ViID0gaXRlbS5jbG9zZXN0KCcubWVudS1zdWInKTtcbiAgICAgICAgdmFyIHBhcmVudEl0ZW07XG5cbiAgICAgICAgaWYgKCBLVFV0aWwuZGF0YShzdWIpLmhhcygnaXRlbScpICkge1xuICAgICAgICAgICAgcmV0dXJuIEtUVXRpbC5kYXRhKHN1YikuZ2V0KCdpdGVtJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHN1YiAmJiAocGFyZW50SXRlbSA9IHN1Yi5jbG9zZXN0KCcubWVudS1pdGVtW2RhdGEta3QtbWVudS10cmlnZ2VyXScpKSApIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRJdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gR2V0IGl0ZW0gcGFyZW50IGVsZW1lbnRzXG4gICAgdmFyIF9nZXRJdGVtUGFyZW50RWxlbWVudHMgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBwYXJlbnRzID0gW107XG4gICAgICAgIHZhciBwYXJlbnQ7XG4gICAgICAgIHZhciBpID0gMDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBwYXJlbnQgPSBfZ2V0SXRlbVBhcmVudEVsZW1lbnQoaXRlbSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggcGFyZW50ICkge1xuICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChwYXJlbnQpO1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBwYXJlbnQ7XG4gICAgICAgICAgICB9ICAgICAgICAgICBcblxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9IHdoaWxlIChwYXJlbnQgIT09IG51bGwgJiYgaSA8IDIwKTtcblxuICAgICAgICBpZiAoIHRoZS50cmlnZ2VyRWxlbWVudCApIHtcbiAgICAgICAgICAgIHBhcmVudHMudW5zaGlmdCh0aGUudHJpZ2dlckVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgfVxuXG4gICAgLy8gR2V0IGl0ZW0gY2hpbGQgZWxlbWVudFxuICAgIHZhciBfZ2V0SXRlbUNoaWxkRWxlbWVudCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gaXRlbTtcbiAgICAgICAgdmFyIGVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKCBLVFV0aWwuZGF0YShpdGVtKS5nZXQoJ3N1YicpICkge1xuICAgICAgICAgICAgc2VsZWN0b3IgPSBLVFV0aWwuZGF0YShpdGVtKS5nZXQoJ3N1YicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzZWxlY3RvciAhPT0gbnVsbCApIHtcbiAgICAgICAgICAgIC8vZWxlbWVudCA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJy5zaG93Lm1lbnUtaXRlbVtkYXRhLWt0LW1lbnUtdHJpZ2dlcl0nKTtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcubWVudS1pdGVtW2RhdGEta3QtbWVudS10cmlnZ2VyXScpO1xuXG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9ICAgXG4gICAgXG4gICAgLy8gR2V0IGl0ZW0gY2hpbGQgZWxlbWVudHNcbiAgICB2YXIgX2dldEl0ZW1DaGlsZEVsZW1lbnRzID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdmFyIGNoaWxkO1xuICAgICAgICB2YXIgaSA9IDA7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY2hpbGQgPSBfZ2V0SXRlbUNoaWxkRWxlbWVudChpdGVtKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCBjaGlsZCApIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICBpdGVtID0gY2hpbGQ7XG4gICAgICAgICAgICB9ICAgICAgICAgICBcblxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9IHdoaWxlIChjaGlsZCAhPT0gbnVsbCAmJiBpIDwgMjApO1xuXG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICAvLyBTaG93IGl0ZW0gZHJvcGRvd25cbiAgICB2YXIgX3Nob3dEcm9wZG93biA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgLy8gSGFuZGxlIGRyb3Bkb3duIHNob3cgZXZlbnRcbiAgICAgICAgaWYgKCBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3QubWVudS5kcm9wZG93bi5zaG93JywgaXRlbSkgPT09IGZhbHNlICkgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhpZGUgYWxsIGN1cnJlbnRseSBzaG93biBkcm9wZG93bnMgZXhjZXB0IGN1cnJlbnQgb25lXG4gICAgICAgIEtUTWVudS5oaWRlRHJvcGRvd25zKGl0ZW0pOyBcblxuICAgICAgICB2YXIgdG9nZ2xlID0gX2lzVHJpZ2dlckVsZW1lbnQoaXRlbSkgPyBpdGVtIDogX2dldEl0ZW1MaW5rRWxlbWVudChpdGVtKTtcbiAgICAgICAgdmFyIHN1YiA9IF9nZXRJdGVtU3ViRWxlbWVudChpdGVtKTtcblxuICAgICAgICB2YXIgd2lkdGggPSBfZ2V0SXRlbU9wdGlvbihpdGVtLCAnd2lkdGgnKTtcbiAgICAgICAgdmFyIGhlaWdodCA9IF9nZXRJdGVtT3B0aW9uKGl0ZW0sICdoZWlnaHQnKTtcblxuICAgICAgICB2YXIgemluZGV4ID0gdGhlLm9wdGlvbnMuZHJvcGRvd24uemluZGV4OyAvLyB1cGRhdGVcbiAgICAgICAgdmFyIHBhcmVudFppbmRleCA9IEtUVXRpbC5nZXRIaWdoZXN0WmluZGV4KGl0ZW0pOyAvLyB1cGRhdGVcblxuICAgICAgICAvLyBBcHBseSBhIG5ldyB6LWluZGV4IGlmIGRyb3Bkb3duJ3MgdG9nZ2xlIGVsZW1lbnQgb3IgaXQncyBwYXJlbnQgaGFzIGdyZWF0ZXIgei1pbmRleCAvLyB1cGRhdGVcbiAgICAgICAgaWYgKCBwYXJlbnRaaW5kZXggIT09IG51bGwgJiYgcGFyZW50WmluZGV4ID49IHppbmRleCApIHtcbiAgICAgICAgICAgIHppbmRleCA9IHBhcmVudFppbmRleCArIDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHppbmRleCA+IDAgKSB7XG4gICAgICAgICAgICBLVFV0aWwuY3NzKHN1YiwgJ3otaW5kZXgnLCB6aW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB3aWR0aCAhPT0gbnVsbCApIHtcbiAgICAgICAgICAgIEtUVXRpbC5jc3Moc3ViLCAnd2lkdGgnLCB3aWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGhlaWdodCAhPT0gbnVsbCApIHtcbiAgICAgICAgICAgIEtUVXRpbC5jc3Moc3ViLCAnaGVpZ2h0JywgaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIEtUVXRpbC5jc3Moc3ViLCAnZGlzcGxheScsICcnKTtcbiAgICAgICAgS1RVdGlsLmNzcyhzdWIsICdvdmVyZmxvdycsICcnKTtcblxuICAgICAgICAvLyBJbml0IHBvcHBlcihuZXcpXG4gICAgICAgIF9pbml0RHJvcGRvd25Qb3BwZXIoaXRlbSwgc3ViKTsgXG5cbiAgICAgICAgS1RVdGlsLmFkZENsYXNzKGl0ZW0sICdzaG93Jyk7XG4gICAgICAgIEtUVXRpbC5hZGRDbGFzcyhpdGVtLCAnbWVudS1kcm9wZG93bicpO1xuICAgICAgICBLVFV0aWwuYWRkQ2xhc3Moc3ViLCAnc2hvdycpO1xuXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgc3ViIHRoZSB0aGUgcm9vdCBvZiB0aGUgbWVudVxuICAgICAgICBpZiAoIF9nZXRJdGVtT3B0aW9uKGl0ZW0sICdvdmVyZmxvdycpID09PSB0cnVlICkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdWIpO1xuICAgICAgICAgICAgS1RVdGlsLmRhdGEoaXRlbSkuc2V0KCdzdWInLCBzdWIpO1xuICAgICAgICAgICAgS1RVdGlsLmRhdGEoc3ViKS5zZXQoJ2l0ZW0nLCBpdGVtKTtcbiAgICAgICAgICAgIEtUVXRpbC5kYXRhKHN1Yikuc2V0KCdtZW51JywgdGhlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEtUVXRpbC5kYXRhKHN1Yikuc2V0KCdpdGVtJywgaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIYW5kbGUgZHJvcGRvd24gc2hvd24gZXZlbnRcbiAgICAgICAgS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgJ2t0Lm1lbnUuZHJvcGRvd24uc2hvd24nLCBpdGVtKTtcbiAgICB9XG5cbiAgICAvLyBIaWRlIGl0ZW0gZHJvcGRvd25cbiAgICB2YXIgX2hpZGVEcm9wZG93biA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgLy8gSGFuZGxlIGRyb3Bkb3duIGhpZGUgZXZlbnRcbiAgICAgICAgaWYgKCBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3QubWVudS5kcm9wZG93bi5oaWRlJywgaXRlbSkgPT09IGZhbHNlICkgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdWIgPSBfZ2V0SXRlbVN1YkVsZW1lbnQoaXRlbSk7XG5cbiAgICAgICAgS1RVdGlsLmNzcyhzdWIsICd6LWluZGV4JywgJycpO1xuICAgICAgICBLVFV0aWwuY3NzKHN1YiwgJ3dpZHRoJywgJycpO1xuICAgICAgICBLVFV0aWwuY3NzKHN1YiwgJ2hlaWdodCcsICcnKTtcblxuICAgICAgICBLVFV0aWwucmVtb3ZlQ2xhc3MoaXRlbSwgJ3Nob3cnKTtcbiAgICAgICAgS1RVdGlsLnJlbW92ZUNsYXNzKGl0ZW0sICdtZW51LWRyb3Bkb3duJyk7XG4gICAgICAgIEtUVXRpbC5yZW1vdmVDbGFzcyhzdWIsICdzaG93Jyk7XG5cbiAgICAgICAgLy8gQXBwZW5kIHRoZSBzdWIgYmFjayB0byBpdCdzIHBhcmVudFxuICAgICAgICBpZiAoIF9nZXRJdGVtT3B0aW9uKGl0ZW0sICdvdmVyZmxvdycpID09PSB0cnVlICkge1xuICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWl0ZW0nKSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoc3ViKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgS1RVdGlsLmluc2VydEFmdGVyKHRoZS5lbGVtZW50LCBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgS1RVdGlsLmRhdGEoaXRlbSkucmVtb3ZlKCdzdWInKTtcbiAgICAgICAgICAgIEtUVXRpbC5kYXRhKHN1YikucmVtb3ZlKCdpdGVtJyk7XG4gICAgICAgICAgICBLVFV0aWwuZGF0YShzdWIpLnJlbW92ZSgnbWVudScpO1xuICAgICAgICB9IFxuXG4gICAgICAgIC8vIERlc3Ryb3kgcG9wcGVyKG5ldylcbiAgICAgICAgX2Rlc3Ryb3lEcm9wZG93blBvcHBlcihpdGVtKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEhhbmRsZSBkcm9wZG93biBoaWRkZW4gZXZlbnQgXG4gICAgICAgIEtURXZlbnRIYW5kbGVyLnRyaWdnZXIodGhlLmVsZW1lbnQsICdrdC5tZW51LmRyb3Bkb3duLmhpZGRlbicsIGl0ZW0pO1xuICAgIH1cblxuICAgIC8vIEluaXQgZHJvcGRvd24gcG9wcGVyKG5ldylcbiAgICB2YXIgX2luaXREcm9wZG93blBvcHBlciA9IGZ1bmN0aW9uKGl0ZW0sIHN1Yikge1xuICAgICAgICAvLyBTZXR1cCBwb3BwZXIgaW5zdGFuY2VcbiAgICAgICAgdmFyIHJlZmVyZW5jZTtcbiAgICAgICAgdmFyIGF0dGFjaCA9IF9nZXRJdGVtT3B0aW9uKGl0ZW0sICdhdHRhY2gnKTtcblxuICAgICAgICBpZiAoIGF0dGFjaCApIHtcbiAgICAgICAgICAgIGlmICggYXR0YWNoID09PSAncGFyZW50Jykge1xuICAgICAgICAgICAgICAgIHJlZmVyZW5jZSA9IGl0ZW0ucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhdHRhY2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVmZXJlbmNlID0gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwb3BwZXIgPSBQb3BwZXIuY3JlYXRlUG9wcGVyKHJlZmVyZW5jZSwgc3ViLCBfZ2V0RHJvcGRvd25Qb3BwZXJDb25maWcoaXRlbSkpOyBcbiAgICAgICAgS1RVdGlsLmRhdGEoaXRlbSkuc2V0KCdwb3BwZXInLCBwb3BwZXIpO1xuICAgIH1cblxuICAgIC8vIERlc3Ryb3kgZHJvcGRvd24gcG9wcGVyKG5ldylcbiAgICB2YXIgX2Rlc3Ryb3lEcm9wZG93blBvcHBlciA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaWYgKCBLVFV0aWwuZGF0YShpdGVtKS5oYXMoJ3BvcHBlcicpID09PSB0cnVlICkge1xuICAgICAgICAgICAgS1RVdGlsLmRhdGEoaXRlbSkuZ2V0KCdwb3BwZXInKS5kZXN0cm95KCk7XG4gICAgICAgICAgICBLVFV0aWwuZGF0YShpdGVtKS5yZW1vdmUoJ3BvcHBlcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJlcGFyZSBwb3BwZXIgY29uZmlnIGZvciBkcm9wZG93bihzZWU6IGh0dHBzOi8vcG9wcGVyLmpzLm9yZy9kb2NzL3YyLylcbiAgICB2YXIgX2dldERyb3Bkb3duUG9wcGVyQ29uZmlnID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAvLyBQbGFjZW1lbnRcbiAgICAgICAgdmFyIHBsYWNlbWVudCA9IF9nZXRJdGVtT3B0aW9uKGl0ZW0sICdwbGFjZW1lbnQnKTtcbiAgICAgICAgaWYgKCFwbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIHBsYWNlbWVudCA9ICdyaWdodCc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPZmZzZXRcbiAgICAgICAgdmFyIG9mZnNldFZhbHVlID0gX2dldEl0ZW1PcHRpb24oaXRlbSwgJ29mZnNldCcpO1xuICAgICAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0VmFsdWUgPyBvZmZzZXRWYWx1ZS5zcGxpdChcIixcIikgOiBbXTtcblxuICAgICAgICAvLyBTdHJhdGVneVxuICAgICAgICB2YXIgc3RyYXRlZ3kgPSBfZ2V0SXRlbU9wdGlvbihpdGVtLCAnb3ZlcmZsb3cnKSA9PT0gdHJ1ZSA/ICdhYnNvbHV0ZScgOiAnZml4ZWQnO1xuXG4gICAgICAgIHZhciBhbHRBeGlzID0gX2dldEl0ZW1PcHRpb24oaXRlbSwgJ2ZsaXAnKSAhPT0gZmFsc2UgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgdmFyIHBvcHBlckNvbmZpZyA9IHtcbiAgICAgICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgICAgICAgc3RyYXRlZ3k6IHN0cmF0ZWd5LFxuICAgICAgICAgICAgbW9kaWZpZXJzOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBhbHRBeGlzOiBhbHRBeGlzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdmbGlwJywgXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBmbGlwVmFyaWF0aW9uczogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBwb3BwZXJDb25maWc7XG4gICAgfVxuXG4gICAgLy8gU2hvdyBpdGVtIGFjY29yZGlvblxuICAgIHZhciBfc2hvd0FjY29yZGlvbiA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaWYgKCBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3QubWVudS5hY2NvcmRpb24uc2hvdycsIGl0ZW0pID09PSBmYWxzZSApICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHRoZS5vcHRpb25zLmFjY29yZGlvbi5leHBhbmQgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgX2hpZGVBY2NvcmRpb25zKGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN1YiA9IF9nZXRJdGVtU3ViRWxlbWVudChpdGVtKTtcblxuICAgICAgICBpZiAoIEtUVXRpbC5kYXRhKGl0ZW0pLmhhcygncG9wcGVyJykgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBfaGlkZURyb3Bkb3duKGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgS1RVdGlsLmFkZENsYXNzKGl0ZW0sICdob3ZlcicpOyAvLyB1cGRhdGVXV1xuXG4gICAgICAgIEtUVXRpbC5hZGRDbGFzcyhpdGVtLCAnc2hvd2luZycpO1xuXG4gICAgICAgIEtUVXRpbC5zbGlkZURvd24oc3ViLCB0aGUub3B0aW9ucy5hY2NvcmRpb24uc2xpZGVTcGVlZCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBLVFV0aWwucmVtb3ZlQ2xhc3MoaXRlbSwgJ3Nob3dpbmcnKTtcbiAgICAgICAgICAgIEtUVXRpbC5hZGRDbGFzcyhpdGVtLCAnc2hvdycpO1xuICAgICAgICAgICAgS1RVdGlsLmFkZENsYXNzKHN1YiwgJ3Nob3cnKTtcblxuICAgICAgICAgICAgS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgJ2t0Lm1lbnUuYWNjb3JkaW9uLnNob3duJywgaXRlbSk7XG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gSGlkZSBpdGVtIGFjY29yZGlvblxuICAgIHZhciBfaGlkZUFjY29yZGlvbiA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaWYgKCBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3QubWVudS5hY2NvcmRpb24uaGlkZScsIGl0ZW0pID09PSBmYWxzZSApICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHZhciBzdWIgPSBfZ2V0SXRlbVN1YkVsZW1lbnQoaXRlbSk7XG5cbiAgICAgICAgS1RVdGlsLmFkZENsYXNzKGl0ZW0sICdoaWRpbmcnKTtcblxuICAgICAgICBLVFV0aWwuc2xpZGVVcChzdWIsIHRoZS5vcHRpb25zLmFjY29yZGlvbi5zbGlkZVNwZWVkLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIEtUVXRpbC5yZW1vdmVDbGFzcyhpdGVtLCAnaGlkaW5nJyk7XG4gICAgICAgICAgICBLVFV0aWwucmVtb3ZlQ2xhc3MoaXRlbSwgJ3Nob3cnKTtcbiAgICAgICAgICAgIEtUVXRpbC5yZW1vdmVDbGFzcyhzdWIsICdzaG93Jyk7XG5cbiAgICAgICAgICAgIEtUVXRpbC5yZW1vdmVDbGFzcyhpdGVtLCAnaG92ZXInKTsgLy8gdXBkYXRlXG5cbiAgICAgICAgICAgIEtURXZlbnRIYW5kbGVyLnRyaWdnZXIodGhlLmVsZW1lbnQsICdrdC5tZW51LmFjY29yZGlvbi5oaWRkZW4nLCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gSGlkZSBhbGwgc2hvd24gYWNjb3JkaW9ucyBvZiBpdGVtXG4gICAgdmFyIF9oaWRlQWNjb3JkaW9ucyA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgdmFyIGl0ZW1zVG9IaWRlID0gS1RVdGlsLmZpbmRBbGwodGhlLmVsZW1lbnQsICcuc2hvd1tkYXRhLWt0LW1lbnUtdHJpZ2dlcl0nKTtcbiAgICAgICAgdmFyIGl0ZW1Ub0hpZGU7XG5cbiAgICAgICAgaWYgKGl0ZW1zVG9IaWRlICYmIGl0ZW1zVG9IaWRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBpdGVtc1RvSGlkZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGl0ZW1Ub0hpZGUgPSBpdGVtc1RvSGlkZVtpXTtcblxuICAgICAgICAgICAgICAgIGlmICggX2dldEl0ZW1TdWJUeXBlKGl0ZW1Ub0hpZGUpID09PSAnYWNjb3JkaW9uJyAmJiBpdGVtVG9IaWRlICE9PSBpdGVtICYmIGl0ZW0uY29udGFpbnMoaXRlbVRvSGlkZSkgPT09IGZhbHNlICYmIGl0ZW1Ub0hpZGUuY29udGFpbnMoaXRlbSkgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgICAgICBfaGlkZUFjY29yZGlvbihpdGVtVG9IaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXQgaXRlbSBvcHRpb24odGhyb3VnaCBodG1sIGF0dHJpYnV0ZXMpXG4gICAgdmFyIF9nZXRJdGVtT3B0aW9uID0gZnVuY3Rpb24oaXRlbSwgbmFtZSkge1xuICAgICAgICB2YXIgYXR0cjtcbiAgICAgICAgdmFyIHZhbHVlID0gbnVsbDtcblxuICAgICAgICBpZiAoIGl0ZW0gJiYgaXRlbS5oYXNBdHRyaWJ1dGUoJ2RhdGEta3QtbWVudS0nICsgbmFtZSkgKSB7XG4gICAgICAgICAgICBhdHRyID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEta3QtbWVudS0nICsgbmFtZSk7XG4gICAgICAgICAgICB2YWx1ZSA9IEtUVXRpbC5nZXRSZXNwb25zaXZlVmFsdWUoYXR0cik7XG5cbiAgICAgICAgICAgIGlmICggdmFsdWUgIT09IG51bGwgJiYgU3RyaW5nKHZhbHVlKSA9PT0gJ3RydWUnICkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHZhbHVlICE9PSBudWxsICYmIFN0cmluZyh2YWx1ZSkgPT09ICdmYWxzZScgKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICB2YXIgX2Rlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgS1RVdGlsLmRhdGEodGhlLmVsZW1lbnQpLnJlbW92ZSgnbWVudScpO1xuICAgIH1cblxuICAgIC8vIENvbnN0cnVjdCBDbGFzc1xuICAgIF9jb25zdHJ1Y3QoKTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gKiogUHVibGljIEFQSSAgKiogLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgLy8gRXZlbnQgSGFuZGxlcnNcbiAgICB0aGUuY2xpY2sgPSBmdW5jdGlvbihlbGVtZW50LCBlKSB7XG4gICAgICAgIHJldHVybiBfY2xpY2soZWxlbWVudCwgZSk7XG4gICAgfVxuXG4gICAgdGhlLmxpbmsgPSBmdW5jdGlvbihlbGVtZW50LCBlKSB7XG4gICAgICAgIHJldHVybiBfbGluayhlbGVtZW50LCBlKTtcbiAgICB9XG5cbiAgICB0aGUuZGlzbWlzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGUpIHtcbiAgICAgICAgcmV0dXJuIF9kaXNtaXNzKGVsZW1lbnQsIGUpO1xuICAgIH1cblxuICAgIHRoZS5tb3VzZW92ZXIgPSBmdW5jdGlvbihlbGVtZW50LCBlKSB7XG4gICAgICAgIHJldHVybiBfbW91c2VvdmVyKGVsZW1lbnQsIGUpO1xuICAgIH1cblxuICAgIHRoZS5tb3VzZW91dCA9IGZ1bmN0aW9uKGVsZW1lbnQsIGUpIHtcbiAgICAgICAgcmV0dXJuIF9tb3VzZW91dChlbGVtZW50LCBlKTtcbiAgICB9XG5cbiAgICAvLyBHZW5lcmFsIE1ldGhvZHNcbiAgICB0aGUuZ2V0SXRlbVRyaWdnZXJUeXBlID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gX2dldEl0ZW1PcHRpb24oaXRlbSwgJ3RyaWdnZXInKTtcbiAgICB9XG5cbiAgICB0aGUuZ2V0SXRlbVN1YlR5cGUgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgcmV0dXJuIF9nZXRJdGVtU3ViVHlwZShlbGVtZW50KTtcbiAgICB9XG5cbiAgICB0aGUuc2hvdyA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIF9zaG93KGl0ZW0pO1xuICAgIH1cblxuICAgIHRoZS5oaWRlID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gX2hpZGUoaXRlbSk7XG4gICAgfVxuXG4gICAgdGhlLnJlc2V0ID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gX3Jlc2V0KGl0ZW0pO1xuICAgIH1cblxuICAgIHRoZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91cGRhdGUoKTtcbiAgICB9XG5cbiAgICB0aGUuZ2V0RWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhlLmVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdGhlLmdldEl0ZW1MaW5rRWxlbWVudCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIF9nZXRJdGVtTGlua0VsZW1lbnQoaXRlbSk7XG4gICAgfVxuXG4gICAgdGhlLmdldEl0ZW1Ub2dnbGVFbGVtZW50ID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gX2dldEl0ZW1Ub2dnbGVFbGVtZW50KGl0ZW0pO1xuICAgIH1cblxuICAgIHRoZS5nZXRJdGVtU3ViRWxlbWVudCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIF9nZXRJdGVtU3ViRWxlbWVudChpdGVtKTtcbiAgICB9XG5cbiAgICB0aGUuZ2V0SXRlbVBhcmVudEVsZW1lbnRzID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gX2dldEl0ZW1QYXJlbnRFbGVtZW50cyhpdGVtKTtcbiAgICB9XG5cbiAgICB0aGUuaXNJdGVtU3ViU2hvd24gPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiBfaXNJdGVtU3ViU2hvd24oaXRlbSk7XG4gICAgfVxuXG4gICAgdGhlLmlzSXRlbVBhcmVudFNob3duID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gX2lzSXRlbVBhcmVudFNob3duKGl0ZW0pO1xuICAgIH1cblxuICAgIHRoZS5nZXRUcmlnZ2VyRWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhlLnRyaWdnZXJFbGVtZW50O1xuICAgIH1cblxuICAgIHRoZS5pc0l0ZW1Ecm9wZG93blBlcm1hbmVudCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIF9pc0l0ZW1Ecm9wZG93blBlcm1hbmVudChpdGVtKTtcbiAgICB9XG5cbiAgICB0aGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2Rlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvLyBBY2NvcmRpb24gTW9kZSBNZXRob2RzXG4gICAgdGhlLmhpZGVBY2NvcmRpb25zID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gX2hpZGVBY2NvcmRpb25zKGl0ZW0pO1xuICAgIH1cblxuICAgIC8vIEV2ZW50IEFQSVxuICAgIHRoZS5vbiA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIEtURXZlbnRIYW5kbGVyLm9uKHRoZS5lbGVtZW50LCBuYW1lLCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICB0aGUub25lID0gZnVuY3Rpb24obmFtZSwgaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gS1RFdmVudEhhbmRsZXIub25lKHRoZS5lbGVtZW50LCBuYW1lLCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICB0aGUub2ZmID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gS1RFdmVudEhhbmRsZXIub2ZmKHRoZS5lbGVtZW50LCBuYW1lKTtcbiAgICB9XG59O1xuXG4vLyBHZXQgS1RNZW51IGluc3RhbmNlIGJ5IGVsZW1lbnRcbktUTWVudS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICB2YXIgbWVudTtcbiAgICB2YXIgaXRlbTtcblxuICAgIC8vIEVsZW1lbnQgaGFzIG1lbnUgRE9NIHJlZmVyZW5jZSBpbiBpdCdzIERBVEEgc3RvcmFnZVxuICAgIGlmICggS1RVdGlsLmRhdGEoZWxlbWVudCkuaGFzKCdtZW51JykgKSB7XG4gICAgICAgIHJldHVybiBLVFV0aWwuZGF0YShlbGVtZW50KS5nZXQoJ21lbnUnKTtcbiAgICB9XG5cbiAgICAvLyBFbGVtZW50IGhhcyAubWVudSBwYXJlbnQgXG4gICAgaWYgKCBtZW51ID0gZWxlbWVudC5jbG9zZXN0KCcubWVudScpICkge1xuICAgICAgICBpZiAoIEtUVXRpbC5kYXRhKG1lbnUpLmhhcygnbWVudScpICkge1xuICAgICAgICAgICAgcmV0dXJuIEtUVXRpbC5kYXRhKG1lbnUpLmdldCgnbWVudScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIEVsZW1lbnQgaGFzIGEgcGFyZW50IHdpdGggRE9NIHJlZmVyZW5jZSB0byAubWVudSBpbiBpdCdzIERBVEEgc3RvcmFnZVxuICAgIGlmICggS1RVdGlsLmhhc0NsYXNzKGVsZW1lbnQsICdtZW51LWxpbmsnKSApIHtcbiAgICAgICAgdmFyIHN1YiA9IGVsZW1lbnQuY2xvc2VzdCgnLm1lbnUtc3ViJyk7XG5cbiAgICAgICAgaWYgKCBLVFV0aWwuZGF0YShzdWIpLmhhcygnbWVudScpICkge1xuICAgICAgICAgICAgcmV0dXJuIEtUVXRpbC5kYXRhKHN1YikuZ2V0KCdtZW51Jyk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEhpZGUgYWxsIGRyb3Bkb3ducyBhbmQgc2tpcCBvbmUgaWYgcHJvdmlkZWRcbktUTWVudS5oaWRlRHJvcGRvd25zID0gZnVuY3Rpb24oc2tpcCkge1xuICAgIHZhciBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaG93Lm1lbnUtZHJvcGRvd25bZGF0YS1rdC1tZW51LXRyaWdnZXJdJyk7XG5cbiAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gaXRlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgICAgICB2YXIgbWVudSA9IEtUTWVudS5nZXRJbnN0YW5jZShpdGVtKTtcblxuICAgICAgICAgICAgaWYgKCBtZW51ICYmIG1lbnUuZ2V0SXRlbVN1YlR5cGUoaXRlbSkgPT09ICdkcm9wZG93bicgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBza2lwICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIG1lbnUuZ2V0SXRlbVN1YkVsZW1lbnQoaXRlbSkuY29udGFpbnMoc2tpcCkgPT09IGZhbHNlICYmIGl0ZW0uY29udGFpbnMoc2tpcCkgPT09IGZhbHNlICYmICBpdGVtICE9PSBza2lwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVudS5oaWRlKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWVudS5oaWRlKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gVXBkYXRlIGFsbCBkcm9wZG93bnMgcG9wb3ZlciBpbnN0YW5jZXNcbktUTWVudS51cGRhdGVEcm9wZG93bnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hvdy5tZW51LWRyb3Bkb3duW2RhdGEta3QtbWVudS10cmlnZ2VyXScpO1xuXG4gICAgaWYgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGl0ZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuXG4gICAgICAgICAgICBpZiAoIEtUVXRpbC5kYXRhKGl0ZW0pLmhhcygncG9wcGVyJykgKSB7XG4gICAgICAgICAgICAgICAgS1RVdGlsLmRhdGEoaXRlbSkuZ2V0KCdwb3BwZXInKS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBHbG9iYWwgaGFuZGxlcnNcbktUTWVudS5pbml0R2xvYmFsSGFuZGxlcnMgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBEcm9wZG93biBoYW5kbGVyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob3cubWVudS1kcm9wZG93bltkYXRhLWt0LW1lbnUtdHJpZ2dlcl0nKTtcbiAgICAgICAgdmFyIG1lbnU7XG4gICAgICAgIHZhciBpdGVtO1xuICAgICAgICB2YXIgc3ViO1xuICAgICAgICB2YXIgbWVudU9iajtcblxuICAgICAgICBpZiAoIGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICBmb3IgKCB2YXIgaSA9IDAsIGxlbiA9IGl0ZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgICAgICBtZW51T2JqID0gS1RNZW51LmdldEluc3RhbmNlKGl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1lbnVPYmogJiYgbWVudU9iai5nZXRJdGVtU3ViVHlwZShpdGVtKSA9PT0gJ2Ryb3Bkb3duJykge1xuICAgICAgICAgICAgICAgICAgICBtZW51ID0gbWVudU9iai5nZXRFbGVtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHN1YiA9IG1lbnVPYmouZ2V0SXRlbVN1YkVsZW1lbnQoaXRlbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBpdGVtID09PSBlLnRhcmdldCB8fCBpdGVtLmNvbnRhaW5zKGUudGFyZ2V0KSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIHN1YiA9PT0gZS50YXJnZXQgfHwgc3ViLmNvbnRhaW5zKGUudGFyZ2V0KSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbWVudU9iai5oaWRlKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gU3ViIHRvZ2dsZSBoYW5kbGVyKHVwZGF0ZWQpXG4gICAgS1RVdGlsLm9uKGRvY3VtZW50LmJvZHksICAnLm1lbnUtaXRlbVtkYXRhLWt0LW1lbnUtdHJpZ2dlcl0gPiAubWVudS1saW5rLCBbZGF0YS1rdC1tZW51LXRyaWdnZXJdOm5vdCgubWVudS1pdGVtKTpub3QoW2RhdGEta3QtbWVudS10cmlnZ2VyPVwiYXV0b1wiXSknLCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBtZW51ID0gS1RNZW51LmdldEluc3RhbmNlKHRoaXMpO1xuXG4gICAgICAgIGlmICggbWVudSAhPT0gbnVsbCApIHtcbiAgICAgICAgICAgIHJldHVybiBtZW51LmNsaWNrKHRoaXMsIGUpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBMaW5rIGhhbmRsZXJcbiAgICBLVFV0aWwub24oZG9jdW1lbnQuYm9keSwgICcubWVudS1pdGVtOm5vdChbZGF0YS1rdC1tZW51LXRyaWdnZXJdKSA+IC5tZW51LWxpbmsnLCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBtZW51ID0gS1RNZW51LmdldEluc3RhbmNlKHRoaXMpO1xuXG4gICAgICAgIGlmICggbWVudSAhPT0gbnVsbCApIHtcbiAgICAgICAgICAgIHJldHVybiBtZW51LmxpbmsodGhpcywgZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIERpc21pc3MgaGFuZGxlclxuICAgIEtUVXRpbC5vbihkb2N1bWVudC5ib2R5LCAgJ1tkYXRhLWt0LW1lbnUtZGlzbWlzcz1cInRydWVcIl0nLCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBtZW51ID0gS1RNZW51LmdldEluc3RhbmNlKHRoaXMpO1xuXG4gICAgICAgIGlmICggbWVudSAhPT0gbnVsbCApIHtcbiAgICAgICAgICAgIHJldHVybiBtZW51LmRpc21pc3ModGhpcywgZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIE1vdXNlb3ZlciBoYW5kbGVyXG4gICAgS1RVdGlsLm9uKGRvY3VtZW50LmJvZHksICAnW2RhdGEta3QtbWVudS10cmlnZ2VyXSwgLm1lbnUtc3ViJywgJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIG1lbnUgPSBLVE1lbnUuZ2V0SW5zdGFuY2UodGhpcyk7XG5cbiAgICAgICAgaWYgKCBtZW51ICE9PSBudWxsICYmIG1lbnUuZ2V0SXRlbVN1YlR5cGUodGhpcykgPT09ICdkcm9wZG93bicgKSB7XG4gICAgICAgICAgICByZXR1cm4gbWVudS5tb3VzZW92ZXIodGhpcywgZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIE1vdXNlb3V0IGhhbmRsZXJcbiAgICBLVFV0aWwub24oZG9jdW1lbnQuYm9keSwgICdbZGF0YS1rdC1tZW51LXRyaWdnZXJdLCAubWVudS1zdWInLCAnbW91c2VvdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBtZW51ID0gS1RNZW51LmdldEluc3RhbmNlKHRoaXMpO1xuXG4gICAgICAgIGlmICggbWVudSAhPT0gbnVsbCAmJiBtZW51LmdldEl0ZW1TdWJUeXBlKHRoaXMpID09PSAnZHJvcGRvd24nICkge1xuICAgICAgICAgICAgcmV0dXJuIG1lbnUubW91c2VvdXQodGhpcywgZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFJlc2l6ZSBoYW5kbGVyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWVudTtcbiAgICAgICAgdmFyIHRpbWVyO1xuXG4gICAgICAgIEtUVXRpbC50aHJvdHRsZSh0aW1lciwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBMb2NhdGUgYW5kIHVwZGF0ZSBPZmZjYW52YXMgaW5zdGFuY2VzIG9uIHdpbmRvdyByZXNpemVcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWt0LW1lbnU9XCJ0cnVlXCJdJyk7XG5cbiAgICAgICAgICAgIGlmICggZWxlbWVudHMgJiYgZWxlbWVudHMubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbWVudSA9IEtUTWVudS5nZXRJbnN0YW5jZShlbGVtZW50c1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZW51KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51LnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyMDApO1xuICAgIH0pO1xufVxuXG4vLyBHbG9iYWwgaW5zdGFuY2VzXG5LVE1lbnUuY3JlYXRlSW5zdGFuY2VzID0gZnVuY3Rpb24oc2VsZWN0b3IgPSAnW2RhdGEta3QtbWVudT1cInRydWVcIl0nKSB7XG4gICAgLy8gSW5pdGlhbGl6ZSBtZW51c1xuICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIGlmICggZWxlbWVudHMgJiYgZWxlbWVudHMubGVuZ3RoID4gMCApIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBuZXcgS1RNZW51KGVsZW1lbnRzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gR2xvYmFsIGluaXRpYWxpemF0aW9uXG5LVE1lbnUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIEdsb2JhbCBFdmVudCBIYW5kbGVyc1xuICAgIEtUTWVudS5pbml0R2xvYmFsSGFuZGxlcnMoKTtcblxuICAgIC8vIExhenkgSW5pdGlhbGl6YXRpb25cbiAgICBLVE1lbnUuY3JlYXRlSW5zdGFuY2VzKCk7XG59O1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIEtUTWVudS5pbml0KTtcbn0gZWxzZSB7XG4gICBLVE1lbnUuaW5pdCgpO1xufVxuXG4vLyBXZWJwYWNrIHN1cHBvcnRcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBLVE1lbnU7XG59XG4iXSwibmFtZXMiOlsiS1RNZW51IiwiZWxlbWVudCIsIm9wdGlvbnMiLCJ0aGUiLCJkZWZhdWx0T3B0aW9ucyIsImRyb3Bkb3duIiwiaG92ZXJUaW1lb3V0IiwiemluZGV4IiwiYWNjb3JkaW9uIiwic2xpZGVTcGVlZCIsImV4cGFuZCIsIl9jb25zdHJ1Y3QiLCJLVFV0aWwiLCJkYXRhIiwiaGFzIiwiZ2V0IiwiX2luaXQiLCJkZWVwRXh0ZW5kIiwidWlkIiwiZ2V0VW5pcXVlSWQiLCJ0cmlnZ2VyRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIl9zZXRUcmlnZ2VyRWxlbWVudCIsIl91cGRhdGUiLCJzZXQiLCJfZGVzdHJveSIsIl9jbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIml0ZW0iLCJfZ2V0SXRlbUVsZW1lbnQiLCJfZ2V0SXRlbU9wdGlvbiIsIl9zaG93IiwiX3RvZ2dsZSIsIl9saW5rIiwiS1RFdmVudEhhbmRsZXIiLCJ0cmlnZ2VyIiwiaGlkZURyb3Bkb3ducyIsIl9kaXNtaXNzIiwiaXRlbXMiLCJfZ2V0SXRlbUNoaWxkRWxlbWVudHMiLCJfZ2V0SXRlbVN1YlR5cGUiLCJfaGlkZSIsImxlbmd0aCIsImkiLCJsZW4iLCJ0ZW1zIiwiX21vdXNlb3ZlciIsImNsZWFyVGltZW91dCIsInJlbW92ZSIsIl9tb3VzZW91dCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiX2lzSXRlbVN1YlNob3duIiwiX3Nob3dEcm9wZG93biIsIl9zaG93QWNjb3JkaW9uIiwiX2hpZGVEcm9wZG93biIsIl9oaWRlQWNjb3JkaW9uIiwiX3Jlc2V0IiwiX2hhc0l0ZW1TdWIiLCJzdWIiLCJfZ2V0SXRlbVN1YkVsZW1lbnQiLCJyZW1vdmVDbGFzcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0YXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJjbG9zZXN0IiwicGFyZW50Tm9kZSIsImNoaWxkIiwiX2lzVHJpZ2dlckVsZW1lbnQiLCJoYXNDbGFzcyIsImhhc0F0dHJpYnV0ZSIsIl9pc0l0ZW1Ecm9wZG93blBlcm1hbmVudCIsIl9pc0l0ZW1QYXJlbnRTaG93biIsInBhcmVudHMiLCJfaXNJdGVtU3ViRWxlbWVudCIsIl9nZXRJdGVtTGlua0VsZW1lbnQiLCJfZ2V0SXRlbVRvZ2dsZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcnNlSW50IiwiY3NzIiwiX2dldEl0ZW1QYXJlbnRFbGVtZW50IiwicGFyZW50SXRlbSIsIl9nZXRJdGVtUGFyZW50RWxlbWVudHMiLCJwYXJlbnQiLCJwdXNoIiwidW5zaGlmdCIsIl9nZXRJdGVtQ2hpbGRFbGVtZW50Iiwic2VsZWN0b3IiLCJjaGlsZHJlbiIsInRvZ2dsZSIsIndpZHRoIiwiaGVpZ2h0IiwicGFyZW50WmluZGV4IiwiZ2V0SGlnaGVzdFppbmRleCIsIl9pbml0RHJvcGRvd25Qb3BwZXIiLCJhZGRDbGFzcyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImluc2VydEFmdGVyIiwiX2Rlc3Ryb3lEcm9wZG93blBvcHBlciIsInJlZmVyZW5jZSIsImF0dGFjaCIsInBvcHBlciIsIlBvcHBlciIsImNyZWF0ZVBvcHBlciIsIl9nZXREcm9wZG93blBvcHBlckNvbmZpZyIsImRlc3Ryb3kiLCJwbGFjZW1lbnQiLCJvZmZzZXRWYWx1ZSIsIm9mZnNldCIsInNwbGl0Iiwic3RyYXRlZ3kiLCJhbHRBeGlzIiwicG9wcGVyQ29uZmlnIiwibW9kaWZpZXJzIiwibmFtZSIsImZsaXBWYXJpYXRpb25zIiwiX2hpZGVBY2NvcmRpb25zIiwic2xpZGVEb3duIiwic2xpZGVVcCIsIml0ZW1zVG9IaWRlIiwiZmluZEFsbCIsIml0ZW1Ub0hpZGUiLCJhdHRyIiwidmFsdWUiLCJnZXRSZXNwb25zaXZlVmFsdWUiLCJTdHJpbmciLCJjbGljayIsImxpbmsiLCJkaXNtaXNzIiwibW91c2VvdmVyIiwibW91c2VvdXQiLCJnZXRJdGVtVHJpZ2dlclR5cGUiLCJnZXRJdGVtU3ViVHlwZSIsInNob3ciLCJoaWRlIiwicmVzZXQiLCJ1cGRhdGUiLCJnZXRFbGVtZW50IiwiZ2V0SXRlbUxpbmtFbGVtZW50IiwiZ2V0SXRlbVRvZ2dsZUVsZW1lbnQiLCJnZXRJdGVtU3ViRWxlbWVudCIsImdldEl0ZW1QYXJlbnRFbGVtZW50cyIsImlzSXRlbVN1YlNob3duIiwiaXNJdGVtUGFyZW50U2hvd24iLCJnZXRUcmlnZ2VyRWxlbWVudCIsImlzSXRlbURyb3Bkb3duUGVybWFuZW50IiwiaGlkZUFjY29yZGlvbnMiLCJvbiIsImhhbmRsZXIiLCJvbmUiLCJvZmYiLCJnZXRJbnN0YW5jZSIsIm1lbnUiLCJza2lwIiwidXBkYXRlRHJvcGRvd25zIiwiZm9yY2VVcGRhdGUiLCJpbml0R2xvYmFsSGFuZGxlcnMiLCJhZGRFdmVudExpc3RlbmVyIiwibWVudU9iaiIsIndpbmRvdyIsInRpbWVyIiwidGhyb3R0bGUiLCJlbGVtZW50cyIsImNyZWF0ZUluc3RhbmNlcyIsImluaXQiLCJyZWFkeVN0YXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/components/menu.js\n");
>>>>>>> Stashed changes

                    if (typeof callback === 'function') {
                        callback();
                    }
                });
            }
        },

        slideUp: function(el, speed, callback) {
            KTUtil.slide(el, 'up', speed, callback);
        },

<<<<<<< Updated upstream
        slideDown: function(el, speed, callback) {
            KTUtil.slide(el, 'down', speed, callback);
        },
=======
"use strict";
eval(" // Class definition\n\nvar KTPasswordMeter = function KTPasswordMeter(element, options) {\n  ////////////////////////////\n  // ** Private variables  ** //\n  ////////////////////////////\n  var the = this;\n\n  if (!element) {\n    return;\n  } // Default Options\n\n\n  var defaultOptions = {\n    minLength: 8,\n    checkUppercase: true,\n    checkLowercase: true,\n    checkDigit: true,\n    checkChar: true,\n    scoreHighlightClass: 'active'\n  }; ////////////////////////////\n  // ** Private methods  ** //\n  ////////////////////////////\n  // Constructor\n\n  var _construct = function _construct() {\n    if (KTUtil.data(element).has('password-meter') === true) {\n      the = KTUtil.data(element).get('password-meter');\n    } else {\n      _init();\n    }\n  }; // Initialize\n\n\n  var _init = function _init() {\n    // Variables\n    the.options = KTUtil.deepExtend({}, defaultOptions, options);\n    the.score = 0;\n    the.checkSteps = 5; // Elements\n\n    the.element = element;\n    the.inputElement = the.element.querySelector('input[type]');\n    the.visibilityElement = the.element.querySelector('[data-kt-password-meter-control=\"visibility\"]');\n    the.highlightElement = the.element.querySelector('[data-kt-password-meter-control=\"highlight\"]'); // Set initialized\n\n    the.element.setAttribute('data-kt-password-meter', 'true'); // Event Handlers\n\n    _handlers(); // Bind Instance\n\n\n    KTUtil.data(the.element).set('password-meter', the);\n  }; // Handlers\n\n\n  var _handlers = function _handlers() {\n    the.inputElement.addEventListener('input', function () {\n      _check();\n    });\n\n    if (the.visibilityElement) {\n      the.visibilityElement.addEventListener('click', function () {\n        _visibility();\n      });\n    }\n  }; // Event handlers\n\n\n  var _check = function _check() {\n    var score = 0;\n\n    var checkScore = _getCheckScore();\n\n    if (_checkLength() === true) {\n      score = score + checkScore;\n    }\n\n    if (the.options.checkUppercase === true && _checkLowercase() === true) {\n      score = score + checkScore;\n    }\n\n    if (the.options.checkLowercase === true && _checkUppercase() === true) {\n      score = score + checkScore;\n    }\n\n    if (the.options.checkDigit === true && _checkDigit() === true) {\n      score = score + checkScore;\n    }\n\n    if (the.options.checkChar === true && _checkChar() === true) {\n      score = score + checkScore;\n    }\n\n    the.score = score;\n\n    _highlight();\n  };\n\n  var _checkLength = function _checkLength() {\n    return the.inputElement.value.length >= the.options.minLength; // 20 score\n  };\n\n  var _checkLowercase = function _checkLowercase() {\n    return /[a-z]/.test(the.inputElement.value); // 20 score\n  };\n\n  var _checkUppercase = function _checkUppercase() {\n    return /[A-Z]/.test(the.inputElement.value); // 20 score\n  };\n\n  var _checkDigit = function _checkDigit() {\n    return /[0-9]/.test(the.inputElement.value); // 20 score\n  };\n\n  var _checkChar = function _checkChar() {\n    return /[~`!#$%\\^&*+=\\-\\[\\]\\\\';,/{}|\\\\\":<>\\?]/g.test(the.inputElement.value); // 20 score\n  };\n\n  var _getCheckScore = function _getCheckScore() {\n    var count = 1;\n\n    if (the.options.checkUppercase === true) {\n      count++;\n    }\n\n    if (the.options.checkLowercase === true) {\n      count++;\n    }\n\n    if (the.options.checkDigit === true) {\n      count++;\n    }\n\n    if (the.options.checkChar === true) {\n      count++;\n    }\n\n    the.checkSteps = count;\n    return 100 / the.checkSteps;\n  };\n\n  var _highlight = function _highlight() {\n    var items = [].slice.call(the.highlightElement.querySelectorAll('div'));\n    var total = items.length;\n    var index = 0;\n\n    var checkScore = _getCheckScore();\n\n    var score = _getScore();\n\n    items.map(function (item) {\n      index++;\n\n      if (checkScore * index * (the.checkSteps / total) <= score) {\n        item.classList.add('active');\n      } else {\n        item.classList.remove('active');\n      }\n    });\n  };\n\n  var _visibility = function _visibility() {\n    var visibleIcon = the.visibilityElement.querySelector('i:not(.d-none), .svg-icon:not(.d-none)');\n    var hiddenIcon = the.visibilityElement.querySelector('i.d-none, .svg-icon.d-none');\n\n    if (the.inputElement.getAttribute('type').toLowerCase() === 'password') {\n      the.inputElement.setAttribute('type', 'text');\n    } else {\n      the.inputElement.setAttribute('type', 'password');\n    }\n\n    visibleIcon.classList.add('d-none');\n    hiddenIcon.classList.remove('d-none');\n    the.inputElement.focus();\n  };\n\n  var _reset = function _reset() {\n    the.score = 0;\n\n    _highlight();\n  }; // Gets current password score\n\n\n  var _getScore = function _getScore() {\n    return the.score;\n  };\n\n  var _destroy = function _destroy() {\n    KTUtil.data(the.element).remove('password-meter');\n  }; // Construct class\n\n\n  _construct(); ///////////////////////\n  // ** Public API  ** //\n  ///////////////////////\n  // Plugin API\n\n\n  the.check = function () {\n    return _check();\n  };\n\n  the.getScore = function () {\n    return _getScore();\n  };\n\n  the.reset = function () {\n    return _reset();\n  };\n\n  the.destroy = function () {\n    return _destroy();\n  };\n}; // Static methods\n\n\nKTPasswordMeter.getInstance = function (element) {\n  if (element !== null && KTUtil.data(element).has('password-meter')) {\n    return KTUtil.data(element).get('password-meter');\n  } else {\n    return null;\n  }\n}; // Create instances\n\n\nKTPasswordMeter.createInstances = function () {\n  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-kt-password-meter]';\n  // Get instances\n  var elements = document.body.querySelectorAll(selector);\n\n  if (elements && elements.length > 0) {\n    for (var i = 0, len = elements.length; i < len; i++) {\n      // Initialize instances\n      new KTPasswordMeter(elements[i]);\n    }\n  }\n}; // Global initialization\n\n\nKTPasswordMeter.init = function () {\n  KTPasswordMeter.createInstances();\n}; // On document ready\n\n\nif (document.readyState === 'loading') {\n  document.addEventListener('DOMContentLoaded', KTPasswordMeter.init);\n} else {\n  KTPasswordMeter.init();\n} // Webpack support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTPasswordMeter;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvcGFzc3dvcmQtbWV0ZXIuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFTQyxPQUFULEVBQWtCQyxPQUFsQixFQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQSxNQUFJQyxHQUFHLEdBQUcsSUFBVjs7QUFFQSxNQUFJLENBQUNGLE9BQUwsRUFBYztBQUNWO0FBQ0gsR0FSNEMsQ0FVN0M7OztBQUNBLE1BQUlHLGNBQWMsR0FBRztBQUNqQkMsSUFBQUEsU0FBUyxFQUFFLENBRE07QUFFakJDLElBQUFBLGNBQWMsRUFBRSxJQUZDO0FBR2pCQyxJQUFBQSxjQUFjLEVBQUUsSUFIQztBQUlqQkMsSUFBQUEsVUFBVSxFQUFFLElBSks7QUFLakJDLElBQUFBLFNBQVMsRUFBRSxJQUxNO0FBTWpCQyxJQUFBQSxtQkFBbUIsRUFBRTtBQU5KLEdBQXJCLENBWDZDLENBb0I3QztBQUNBO0FBQ0E7QUFFQTs7QUFDQSxNQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFXO0FBQ3hCLFFBQUtDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZWixPQUFaLEVBQXFCYSxHQUFyQixDQUF5QixnQkFBekIsTUFBK0MsSUFBcEQsRUFBMkQ7QUFDdkRYLE1BQUFBLEdBQUcsR0FBR1MsTUFBTSxDQUFDQyxJQUFQLENBQVlaLE9BQVosRUFBcUJjLEdBQXJCLENBQXlCLGdCQUF6QixDQUFOO0FBQ0gsS0FGRCxNQUVPO0FBQ0hDLE1BQUFBLEtBQUs7QUFDUjtBQUNKLEdBTkQsQ0F6QjZDLENBaUM3Qzs7O0FBQ0EsTUFBSUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBVztBQUNuQjtBQUNBYixJQUFBQSxHQUFHLENBQUNELE9BQUosR0FBY1UsTUFBTSxDQUFDSyxVQUFQLENBQWtCLEVBQWxCLEVBQXNCYixjQUF0QixFQUFzQ0YsT0FBdEMsQ0FBZDtBQUNBQyxJQUFBQSxHQUFHLENBQUNlLEtB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eUUsSUFBaEIsR0FBdUIsWUFBVztBQUM5QnpFLEVBQUFBLGVBQWUsQ0FBQ2tFLGVBQWhCO0FBQ0gsQ0FGRCxDLENBSUE7OztBQUNBLElBQUlHLFFBQVEsQ0FBQ0ssVUFBVCxLQUF3QixTQUE1QixFQUF1QztBQUNwQ0wsRUFBQUEsUUFBUSxDQUFDMUMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDM0IsZUFBZSxDQUFDeUUsSUFBOUQ7QUFDRixDQUZELE1BRU87QUFDSHpFLEVBQUFBLGVBQWUsQ0FBQ3lFLElBQWhCO0FBQ0gsQyxDQUVEOzs7QUFDQSxJQUFJLFNBQWlDLE9BQU9FLE1BQU0sQ0FBQ0MsT0FBZCxLQUEwQixXQUEvRCxFQUE0RTtBQUN4RUQsRUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCNUUsZUFBakI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY29tcG9uZW50cy9wYXNzd29yZC1tZXRlci5qcz80NTMwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RQYXNzd29yZE1ldGVyID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucykge1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyAqKiBQcml2YXRlIHZhcmlhYmxlcyAgKiogLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgdmFyIHRoZSA9IHRoaXM7XG5cbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgT3B0aW9uc1xuICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgbWluTGVuZ3RoOiA4LFxuICAgICAgICBjaGVja1VwcGVyY2FzZTogdHJ1ZSwgICAgICAgIFxuICAgICAgICBjaGVja0xvd2VyY2FzZTogdHJ1ZSxcbiAgICAgICAgY2hlY2tEaWdpdDogdHJ1ZSxcbiAgICAgICAgY2hlY2tDaGFyOiB0cnVlLFxuICAgICAgICBzY29yZUhpZ2hsaWdodENsYXNzOiAnYWN0aXZlJ1xuICAgIH07XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gKiogUHJpdmF0ZSBtZXRob2RzICAqKiAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIENvbnN0cnVjdG9yXG4gICAgdmFyIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCBLVFV0aWwuZGF0YShlbGVtZW50KS5oYXMoJ3Bhc3N3b3JkLW1ldGVyJykgPT09IHRydWUgKSB7XG4gICAgICAgICAgICB0aGUgPSBLVFV0aWwuZGF0YShlbGVtZW50KS5nZXQoJ3Bhc3N3b3JkLW1ldGVyJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfaW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZVxuICAgIHZhciBfaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBWYXJpYWJsZXNcbiAgICAgICAgdGhlLm9wdGlvbnMgPSBLVFV0aWwuZGVlcEV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGUuc2NvcmUgPSAwO1xuICAgICAgICB0aGUuY2hlY2tTdGVwcyA9IDU7XG5cbiAgICAgICAgLy8gRWxlbWVudHNcbiAgICAgICAgdGhlLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGUuaW5wdXRFbGVtZW50ID0gdGhlLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZV0nKTtcbiAgICAgICAgdGhlLnZpc2liaWxpdHlFbGVtZW50ID0gdGhlLmVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3QtcGFzc3dvcmQtbWV0ZXItY29udHJvbD1cInZpc2liaWxpdHlcIl0nKTtcbiAgICAgICAgdGhlLmhpZ2hsaWdodEVsZW1lbnQgPSB0aGUuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1wYXNzd29yZC1tZXRlci1jb250cm9sPVwiaGlnaGxpZ2h0XCJdJyk7IFxuXG4gICAgICAgIC8vIFNldCBpbml0aWFsaXplZFxuICAgICAgICB0aGUuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEta3QtcGFzc3dvcmQtbWV0ZXInLCAndHJ1ZScpO1xuICAgICAgICBcbiAgICAgICAgLy8gRXZlbnQgSGFuZGxlcnNcbiAgICAgICAgX2hhbmRsZXJzKCk7XG5cbiAgICAgICAgLy8gQmluZCBJbnN0YW5jZVxuICAgICAgICBLVFV0aWwuZGF0YSh0aGUuZWxlbWVudCkuc2V0KCdwYXNzd29yZC1tZXRlcicsIHRoZSk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlcnNcbiAgICB2YXIgX2hhbmRsZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoZS5pbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF9jaGVjaygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhlLnZpc2liaWxpdHlFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGUudmlzaWJpbGl0eUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfdmlzaWJpbGl0eSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9ICAgXG5cbiAgICAvLyBFdmVudCBoYW5kbGVyc1xuICAgIHZhciBfY2hlY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNjb3JlID0gMDtcbiAgICAgICAgdmFyIGNoZWNrU2NvcmUgPSBfZ2V0Q2hlY2tTY29yZSgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKF9jaGVja0xlbmd0aCgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzY29yZSA9IHNjb3JlICsgY2hlY2tTY29yZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGUub3B0aW9ucy5jaGVja1VwcGVyY2FzZSA9PT0gdHJ1ZSAmJiBfY2hlY2tMb3dlcmNhc2UoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc2NvcmUgPSBzY29yZSArIGNoZWNrU2NvcmU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhlLm9wdGlvbnMuY2hlY2tMb3dlcmNhc2UgPT09IHRydWUgJiYgX2NoZWNrVXBwZXJjYXNlKCkgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBzY29yZSA9IHNjb3JlICsgY2hlY2tTY29yZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGUub3B0aW9ucy5jaGVja0RpZ2l0ID09PSB0cnVlICYmIF9jaGVja0RpZ2l0KCkgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBzY29yZSA9IHNjb3JlICsgY2hlY2tTY29yZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGUub3B0aW9ucy5jaGVja0NoYXIgPT09IHRydWUgJiYgX2NoZWNrQ2hhcigpID09PSB0cnVlICkge1xuICAgICAgICAgICAgc2NvcmUgPSBzY29yZSArIGNoZWNrU2NvcmU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGUuc2NvcmUgPSBzY29yZTtcblxuICAgICAgICBfaGlnaGxpZ2h0KCk7XG4gICAgfVxuXG4gICAgdmFyIF9jaGVja0xlbmd0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhlLmlucHV0RWxlbWVudC52YWx1ZS5sZW5ndGggPj0gdGhlLm9wdGlvbnMubWluTGVuZ3RoOyAgLy8gMjAgc2NvcmVcbiAgICB9XG5cbiAgICB2YXIgX2NoZWNrTG93ZXJjYXNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAvW2Etel0vLnRlc3QodGhlLmlucHV0RWxlbWVudC52YWx1ZSk7ICAvLyAyMCBzY29yZVxuICAgIH1cblxuICAgIHZhciBfY2hlY2tVcHBlcmNhc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIC9bQS1aXS8udGVzdCh0aGUuaW5wdXRFbGVtZW50LnZhbHVlKTsgIC8vIDIwIHNjb3JlXG4gICAgfVxuXG4gICAgdmFyIF9jaGVja0RpZ2l0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAvWzAtOV0vLnRlc3QodGhlLmlucHV0RWxlbWVudC52YWx1ZSk7ICAvLyAyMCBzY29yZVxuICAgIH1cblxuICAgIHZhciBfY2hlY2tDaGFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAvW35gISMkJVxcXiYqKz1cXC1cXFtcXF1cXFxcJzssL3t9fFxcXFxcIjo8PlxcP10vZy50ZXN0KHRoZS5pbnB1dEVsZW1lbnQudmFsdWUpOyAgLy8gMjAgc2NvcmVcbiAgICB9ICAgIFxuXG4gICAgdmFyIF9nZXRDaGVja1Njb3JlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhlLm9wdGlvbnMuY2hlY2tVcHBlcmNhc2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhlLm9wdGlvbnMuY2hlY2tMb3dlcmNhc2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhlLm9wdGlvbnMuY2hlY2tEaWdpdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGUub3B0aW9ucy5jaGVja0NoYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cblxuICAgICAgICB0aGUuY2hlY2tTdGVwcyA9IGNvdW50O1xuXG4gICAgICAgIHJldHVybiAxMDAgLyB0aGUuY2hlY2tTdGVwcztcbiAgICB9XG4gICAgXG4gICAgdmFyIF9oaWdobGlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW10uc2xpY2UuY2FsbCh0aGUuaGlnaGxpZ2h0RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKSk7XG4gICAgICAgIHZhciB0b3RhbCA9IGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgdmFyIGNoZWNrU2NvcmUgPSBfZ2V0Q2hlY2tTY29yZSgpO1xuICAgICAgICB2YXIgc2NvcmUgPSBfZ2V0U2NvcmUoKTtcblxuICAgICAgICBpdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGluZGV4Kys7XG5cbiAgICAgICAgICAgIGlmICggKGNoZWNrU2NvcmUgKiBpbmRleCAqICh0aGUuY2hlY2tTdGVwcyAvIHRvdGFsKSkgPD0gc2NvcmUgKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIF92aXNpYmlsaXR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2aXNpYmxlSWNvbiA9IHRoZS52aXNpYmlsaXR5RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpOm5vdCguZC1ub25lKSwgLnN2Zy1pY29uOm5vdCguZC1ub25lKScpO1xuICAgICAgICB2YXIgaGlkZGVuSWNvbiA9IHRoZS52aXNpYmlsaXR5RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpLmQtbm9uZSwgLnN2Zy1pY29uLmQtbm9uZScpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoZS5pbnB1dEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJykudG9Mb3dlckNhc2UoKSA9PT0gJ3Bhc3N3b3JkJyApIHtcbiAgICAgICAgICAgIHRoZS5pbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgfSAgZWxzZSB7XG4gICAgICAgICAgICB0aGUuaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICdwYXNzd29yZCcpO1xuICAgICAgICB9ICAgICAgICBcblxuICAgICAgICB2aXNpYmxlSWNvbi5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgaGlkZGVuSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcblxuICAgICAgICB0aGUuaW5wdXRFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgdmFyIF9yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGUuc2NvcmUgPSAwO1xuXG4gICAgICAgIF9oaWdobGlnaHQoKTtcbiAgICB9XG5cbiAgICAvLyBHZXRzIGN1cnJlbnQgcGFzc3dvcmQgc2NvcmVcbiAgICB2YXIgX2dldFNjb3JlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgcmV0dXJuIHRoZS5zY29yZTtcbiAgICB9XG5cbiAgICB2YXIgX2Rlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgS1RVdGlsLmRhdGEodGhlLmVsZW1lbnQpLnJlbW92ZSgncGFzc3dvcmQtbWV0ZXInKTtcbiAgICB9XG5cbiAgICAvLyBDb25zdHJ1Y3QgY2xhc3NcbiAgICBfY29uc3RydWN0KCk7XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vICoqIFB1YmxpYyBBUEkgICoqIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIFBsdWdpbiBBUElcbiAgICB0aGUuY2hlY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9jaGVjaygpO1xuICAgIH1cblxuICAgIHRoZS5nZXRTY29yZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2dldFNjb3JlKCk7XG4gICAgfVxuXG4gICAgdGhlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcmVzZXQoKTtcbiAgICB9XG5cbiAgICB0aGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2Rlc3Ryb3koKTtcbiAgICB9XG59O1xuXG4vLyBTdGF0aWMgbWV0aG9kc1xuS1RQYXNzd29yZE1ldGVyLmdldEluc3RhbmNlID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIGlmICggZWxlbWVudCAhPT0gbnVsbCAmJiBLVFV0aWwuZGF0YShlbGVtZW50KS5oYXMoJ3Bhc3N3b3JkLW1ldGVyJykgKSB7XG4gICAgICAgIHJldHVybiBLVFV0aWwuZGF0YShlbGVtZW50KS5nZXQoJ3Bhc3N3b3JkLW1ldGVyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG4vLyBDcmVhdGUgaW5zdGFuY2VzXG5LVFBhc3N3b3JkTWV0ZXIuY3JlYXRlSW5zdGFuY2VzID0gZnVuY3Rpb24oc2VsZWN0b3IgPSAnW2RhdGEta3QtcGFzc3dvcmQtbWV0ZXJdJykge1xuICAgIC8vIEdldCBpbnN0YW5jZXNcbiAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gICAgaWYgKCBlbGVtZW50cyAmJiBlbGVtZW50cy5sZW5ndGggPiAwICkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2VzXG4gICAgICAgICAgICBuZXcgS1RQYXNzd29yZE1ldGVyKGVsZW1lbnRzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gR2xvYmFsIGluaXRpYWxpemF0aW9uXG5LVFBhc3N3b3JkTWV0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIEtUUGFzc3dvcmRNZXRlci5jcmVhdGVJbnN0YW5jZXMoKTtcbn07XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgS1RQYXNzd29yZE1ldGVyLmluaXQpO1xufSBlbHNlIHtcbiAgICBLVFBhc3N3b3JkTWV0ZXIuaW5pdCgpO1xufVxuXG4vLyBXZWJwYWNrIHN1cHBvcnRcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBLVFBhc3N3b3JkTWV0ZXI7XG59Il0sIm5hbWVzIjpbIktUUGFzc3dvcmRNZXRlciIsImVsZW1lbnQiLCJvcHRpb25zIiwidGhlIiwiZGVmYXVsdE9wdGlvbnMiLCJtaW5MZW5ndGgiLCJjaGVja1VwcGVyY2FzZSIsImNoZWNrTG93ZXJjYXNlIiwiY2hlY2tEaWdpdCIsImNoZWNrQ2hhciIsInNjb3JlSGlnaGxpZ2h0Q2xhc3MiLCJfY29uc3RydWN0IiwiS1RVdGlsIiwiZGF0YSIsImhhcyIsImdldCIsIl9pbml0IiwiZGVlcEV4dGVuZCIsInNjb3JlIiwiY2hlY2tTdGVwcyIsImlucHV0RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2aXNpYmlsaXR5RWxlbWVudCIsImhpZ2hsaWdodEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJfaGFuZGxlcnMiLCJzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2NoZWNrIiwiX3Zpc2liaWxpdHkiLCJjaGVja1Njb3JlIiwiX2dldENoZWNrU2NvcmUiLCJfY2hlY2tMZW5ndGgiLCJfY2hlY2tMb3dlcmNhc2UiLCJfY2hlY2tVcHBlcmNhc2UiLCJfY2hlY2tEaWdpdCIsIl9jaGVja0NoYXIiLCJfaGlnaGxpZ2h0IiwidmFsdWUiLCJsZW5ndGgiLCJ0ZXN0IiwiY291bnQiLCJpdGVtcyIsInNsaWNlIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b3RhbCIsImluZGV4IiwiX2dldFNjb3JlIiwibWFwIiwiaXRlbSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInZpc2libGVJY29uIiwiaGlkZGVuSWNvbiIsImdldEF0dHJpYnV0ZSIsInRvTG93ZXJDYXNlIiwiZm9jdXMiLCJfcmVzZXQiLCJfZGVzdHJveSIsImNoZWNrIiwiZ2V0U2NvcmUiLCJyZXNldCIsImRlc3Ryb3kiLCJnZXRJbnN0YW5jZSIsImNyZWF0ZUluc3RhbmNlcyIsInNlbGVjdG9yIiwiZWxlbWVudHMiLCJkb2N1bWVudCIsImJvZHkiLCJpIiwibGVuIiwiaW5pdCIsInJlYWR5U3RhdGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/components/password-meter.js\n");
>>>>>>> Stashed changes

        show: function(el, display) {
            if (typeof el !== 'undefined') {
                el.style.display = (display ? display : 'block');
            }
        },

        hide: function(el) {
            if (typeof el !== 'undefined') {
                el.style.display = 'none';
            }
        },

<<<<<<< Updated upstream
        addEvent: function(el, type, handler, one) {
            if (typeof el !== 'undefined' && el !== null) {
                el.addEventListener(type, handler);
            }
        },
=======
"use strict";
eval(" // Class definition\n\nvar KTScroll = function KTScroll(element, options) {\n  ////////////////////////////\n  // ** Private Variables  ** //\n  ////////////////////////////\n  var the = this;\n  var body = document.getElementsByTagName(\"BODY\")[0];\n\n  if (!element) {\n    return;\n  } // Default options\n\n\n  var defaultOptions = {\n    saveState: true\n  }; ////////////////////////////\n  // ** Private Methods  ** //\n  ////////////////////////////\n\n  var _construct = function _construct() {\n    if (KTUtil.data(element).has('scroll')) {\n      the = KTUtil.data(element).get('scroll');\n    } else {\n      _init();\n    }\n  };\n\n  var _init = function _init() {\n    // Variables\n    the.options = KTUtil.deepExtend({}, defaultOptions, options); // Elements\n\n    the.element = element;\n    the.id = the.element.getAttribute('id'); // Set initialized\n\n    the.element.setAttribute('data-kt-scroll', 'true'); // Update\n\n    _update(); // Bind Instance\n\n\n    KTUtil.data(the.element).set('scroll', the);\n  };\n\n  var _setupHeight = function _setupHeight() {\n    var heightType = _getHeightType();\n\n    var height = _getHeight(); // Set height\n\n\n    if (height !== null && height.length > 0) {\n      KTUtil.css(the.element, heightType, height);\n    } else {\n      KTUtil.css(the.element, heightType, '');\n    }\n  };\n\n  var _setupState = function _setupState() {\n    if (_getOption('save-state') === true && typeof KTCookie !== 'undefined' && the.id) {\n      if (KTCookie.get(the.id + 'st')) {\n        var pos = parseInt(KTCookie.get(the.id + 'st'));\n\n        if (pos > 0) {\n          the.element.scrollTop = pos;\n        }\n      }\n    }\n  };\n\n  var _setupScrollHandler = function _setupScrollHandler() {\n    if (_getOption('save-state') === true && typeof KTCookie !== 'undefined' && the.id) {\n      the.element.addEventListener('scroll', _scrollHandler);\n    } else {\n      the.element.removeEventListener('scroll', _scrollHandler);\n    }\n  };\n\n  var _destroyScrollHandler = function _destroyScrollHandler() {\n    the.element.removeEventListener('scroll', _scrollHandler);\n  };\n\n  var _resetHeight = function _resetHeight() {\n    KTUtil.css(the.element, _getHeightType(), '');\n  };\n\n  var _scrollHandler = function _scrollHandler() {\n    KTCookie.set(the.id + 'st', the.element.scrollTop);\n  };\n\n  var _update = function _update() {\n    // Activate/deactivate\n    if (_getOption('activate') === true || the.element.hasAttribute('data-kt-scroll-activate') === false) {\n      _setupHeight();\n\n      _setupScrollHandler();\n\n      _setupState();\n    } else {\n      _resetHeight();\n\n      _destroyScrollHandler();\n    }\n  };\n\n  var _getHeight = function _getHeight() {\n    var height = _getOption(_getHeightType());\n\n    if (height instanceof Function) {\n      return height.call();\n    } else if (height !== null && typeof height === 'string' && height.toLowerCase() === 'auto') {\n      return _getAutoHeight();\n    } else {\n      return height;\n    }\n  };\n\n  var _getAutoHeight = function _getAutoHeight() {\n    var height = KTUtil.getViewPort().height;\n\n    var dependencies = _getOption('dependencies');\n\n    var wrappers = _getOption('wrappers');\n\n    var offset = _getOption('offset'); // Height dependencies\n\n\n    if (dependencies !== null) {\n      var elements = document.querySelectorAll(dependencies);\n\n      if (elements && elements.length > 0) {\n        for (var i = 0, len = elements.length; i < len; i++) {\n          var element = elements[i];\n\n          if (KTUtil.visible(element) === false) {\n            continue;\n          }\n\n          height = height - parseInt(KTUtil.css(element, 'height'));\n          height = height - parseInt(KTUtil.css(element, 'margin-top'));\n          height = height - parseInt(KTUtil.css(element, 'margin-bottom'));\n\n          if (KTUtil.css(element, 'border-top')) {\n            height = height - parseInt(KTUtil.css(element, 'border-top'));\n          }\n\n          if (KTUtil.css(element, 'border-bottom')) {\n            height = height - parseInt(KTUtil.css(element, 'border-bottom'));\n          }\n        }\n      }\n    } // Wrappers\n\n\n    if (wrappers !== null) {\n      var elements = document.querySelectorAll(wrappers);\n\n      if (elements && elements.length > 0) {\n        for (var i = 0, len = elements.length; i < len; i++) {\n          var element = elements[i];\n\n          if (KTUtil.visible(element) === false) {\n            continue;\n          }\n\n          height = height - parseInt(KTUtil.css(element, 'margin-top'));\n          height = height - parseInt(KTUtil.css(element, 'margin-bottom'));\n          height = height - parseInt(KTUtil.css(element, 'padding-top'));\n          height = height - parseInt(KTUtil.css(element, 'padding-bottom'));\n\n          if (KTUtil.css(element, 'border-top')) {\n            height = height - parseInt(KTUtil.css(element, 'border-top'));\n          }\n\n          if (KTUtil.css(element, 'border-bottom')) {\n            height = height - parseInt(KTUtil.css(element, 'border-bottom'));\n          }\n        }\n      }\n    } // Custom offset\n\n\n    if (offset !== null) {\n      height = height - parseInt(offset);\n    }\n\n    height = height - parseInt(KTUtil.css(the.element, 'margin-top'));\n    height = height - parseInt(KTUtil.css(the.element, 'margin-bottom'));\n\n    if (KTUtil.css(element, 'border-top')) {\n      height = height - parseInt(KTUtil.css(element, 'border-top'));\n    }\n\n    if (KTUtil.css(element, 'border-bottom')) {\n      height = height - parseInt(KTUtil.css(element, 'border-bottom'));\n    }\n\n    height = String(height) + 'px';\n    return height;\n  };\n\n  var _getOption = function _getOption(name) {\n    if (the.element.hasAttribute('data-kt-scroll-' + name) === true) {\n      var attr = the.element.getAttribute('data-kt-scroll-' + name);\n      var value = KTUtil.getResponsiveValue(attr);\n\n      if (value !== null && String(value) === 'true') {\n        value = true;\n      } else if (value !== null && String(value) === 'false') {\n        value = false;\n      }\n\n      return value;\n    } else {\n      var optionName = KTUtil.snakeToCamel(name);\n\n      if (the.options[optionName]) {\n        return KTUtil.getResponsiveValue(the.options[optionName]);\n      } else {\n        return null;\n      }\n    }\n  };\n\n  var _getHeightType = function _getHeightType() {\n    if (_getOption('height')) {\n      return 'height';\n    }\n\n    if (_getOption('min-height')) {\n      return 'min-height';\n    }\n\n    if (_getOption('max-height')) {\n      return 'max-height';\n    }\n  };\n\n  var _destroy = function _destroy() {\n    KTUtil.data(the.element).remove('scroll');\n  }; // Construct Class\n\n\n  _construct(); ///////////////////////\n  // ** Public API  ** //\n  ///////////////////////\n\n\n  the.update = function () {\n    return _update();\n  };\n\n  the.getHeight = function () {\n    return _getHeight();\n  };\n\n  the.getElement = function () {\n    return the.element;\n  };\n\n  the.destroy = function () {\n    return _destroy();\n  };\n}; // Static methods\n\n\nKTScroll.getInstance = function (element) {\n  if (element !== null && KTUtil.data(element).has('scroll')) {\n    return KTUtil.data(element).get('scroll');\n  } else {\n    return null;\n  }\n}; // Create instances\n\n\nKTScroll.createInstances = function () {\n  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-kt-scroll=\"true\"]';\n  var body = document.getElementsByTagName(\"BODY\")[0]; // Initialize Menus\n\n  var elements = body.querySelectorAll(selector);\n\n  if (elements && elements.length > 0) {\n    for (var i = 0, len = elements.length; i < len; i++) {\n      new KTScroll(elements[i]);\n    }\n  }\n}; // Window resize handling\n\n\nwindow.addEventListener('resize', function () {\n  var timer;\n  var body = document.getElementsByTagName(\"BODY\")[0];\n  KTUtil.throttle(timer, function () {\n    // Locate and update Offcanvas instances on window resize\n    var elements = body.querySelectorAll('[data-kt-scroll=\"true\"]');\n\n    if (elements && elements.length > 0) {\n      for (var i = 0, len = elements.length; i < len; i++) {\n        var scroll = KTScroll.getInstance(elements[i]);\n\n        if (scroll) {\n          scroll.update();\n        }\n      }\n    }\n  }, 200);\n}); // Global initialization\n\nKTScroll.init = function () {\n  KTScroll.createInstances();\n}; // On document ready\n\n\nif (document.readyState === 'loading') {\n  document.addEventListener('DOMContentLoaded', KTScroll.init);\n} else {\n  KTScroll.init();\n} // Webpack Support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTScroll;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvc2Nyb2xsLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVNDLE9BQVQsRUFBa0JDLE9BQWxCLEVBQTJCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLE1BQUlDLEdBQUcsR0FBRyxJQUFWO0FBQ0EsTUFBSUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQVg7O0FBRUEsTUFBSSxDQUFDTCxPQUFMLEVBQWM7QUFDVjtBQUNILEdBVHFDLENBV3RDOzs7QUFDQSxNQUFJTSxjQUFjLEdBQUc7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNLEdBQXJCLENBWnNDLENBZ0J0QztBQUNBO0FBQ0E7O0FBRUEsTUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVztBQUN4QixRQUFLQyxNQUFNLENBQUNDLElBQVAsQ0FBWVYsT0FBWixFQUFxQlcsR0FBckIsQ0FBeUIsUUFBekIsQ0FBTCxFQUEwQztBQUN0Q1QsTUFBQUEsR0FBRyxHQUFHTyxNQUFNLENBQUNDLElBQVAsQ0FBWVYsT0FBWixFQUFxQlksR0FBckIsQ0FBeUIsUUFBekIsQ0FBTjtBQUNILEtBRkQsTUFFTztBQUNIQyxNQUFBQSxLQUFLO0FBQ1I7QUFDSixHQU5EOztBQVFBLE1BQUlBLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQVc7QUFDbkI7QUFDQVgsSUFBQUEsR0FBRyxDQUFDRCxPQUFKLEdBQWNRLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQixFQUFsQixFQUFzQlIsY0FBdEIsRUFBc0NMLE9BQXRDLENBQWQsQ0FGbUIsQ0FJbkI7O0FBQ0FDLElBQUFBLEdBQUcsQ0FBQ0YsT0FBSixHQUFjQSxPQUFkO0FBQ0FFLElBQUFBLEdBQUcsQ0FBQ2EsRUFBSixHQUFTYixHQUFHLENBQUNGLE9BQUosQ0FBWWdCLFlBQVosQ0FBeUIsSUFBekIsQ0FBVCxDQU5tQixD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QixDQUFDLEdBQUcsQ0FBUixFQUFXQyxHQUFHLEdBQUdILFFBQVEsQ0FBQ3ZCLE1BQS9CLEVBQXVDeUIsQ0FBQyxHQUFHQyxHQUEzQyxFQUFnREQsQ0FBQyxFQUFqRCxFQUFxRDtBQUNqRCxZQUFJc0IsTUFBTSxHQUFHekUsUUFBUSxDQUFDbUUsV0FBVCxDQUFxQmxCLFFBQVEsQ0FBQ0UsQ0FBRCxDQUE3QixDQUFiOztBQUNBLFlBQUlzQixNQUFKLEVBQVk7QUFDUkEsVUFBQUEsTUFBTSxDQUFDVixNQUFQO0FBQ0g7QUFDSjtBQUNKO0FBQ0osR0FaRCxFQVlHLEdBWkg7QUFhSCxDQWpCRCxFLENBbUJBOztBQUNBL0QsUUFBUSxDQUFDMEUsSUFBVCxHQUFnQixZQUFXO0FBQ3ZCMUUsRUFBQUEsUUFBUSxDQUFDb0UsZUFBVDtBQUNILENBRkQsQyxDQUlBOzs7QUFDQSxJQUFJL0QsUUFBUSxDQUFDc0UsVUFBVCxLQUF3QixTQUE1QixFQUF1QztBQUNwQ3RFLEVBQUFBLFFBQVEsQ0FBQzhCLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q25DLFFBQVEsQ0FBQzBFLElBQXZEO0FBQ0YsQ0FGRCxNQUVPO0FBQ0gxRSxFQUFBQSxRQUFRLENBQUMwRSxJQUFUO0FBQ0gsQyxDQUVEOzs7QUFDQSxJQUFJLFNBQWlDLE9BQU9FLE1BQU0sQ0FBQ0MsT0FBZCxLQUEwQixXQUEvRCxFQUE0RTtBQUN4RUQsRUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCN0UsUUFBakI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY29tcG9uZW50cy9zY3JvbGwuanM/Y2VjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUU2Nyb2xsID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucykge1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyAqKiBQcml2YXRlIFZhcmlhYmxlcyAgKiogLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgdmFyIHRoZSA9IHRoaXM7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkJPRFlcIilbMF07XG5cbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgb3B0aW9uc1xuICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgc2F2ZVN0YXRlOiB0cnVlXG4gICAgfTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyAqKiBQcml2YXRlIE1ldGhvZHMgICoqIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgdmFyIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCBLVFV0aWwuZGF0YShlbGVtZW50KS5oYXMoJ3Njcm9sbCcpICkge1xuICAgICAgICAgICAgdGhlID0gS1RVdGlsLmRhdGEoZWxlbWVudCkuZ2V0KCdzY3JvbGwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9pbml0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX2luaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gVmFyaWFibGVzXG4gICAgICAgIHRoZS5vcHRpb25zID0gS1RVdGlsLmRlZXBFeHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAgICAgICAvLyBFbGVtZW50c1xuICAgICAgICB0aGUuZWxlbWVudCA9IGVsZW1lbnQ7ICAgICAgICBcbiAgICAgICAgdGhlLmlkID0gdGhlLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuXG4gICAgICAgIC8vIFNldCBpbml0aWFsaXplZFxuICAgICAgICB0aGUuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEta3Qtc2Nyb2xsJywgJ3RydWUnKTtcblxuICAgICAgICAvLyBVcGRhdGVcbiAgICAgICAgX3VwZGF0ZSgpO1xuXG4gICAgICAgIC8vIEJpbmQgSW5zdGFuY2VcbiAgICAgICAgS1RVdGlsLmRhdGEodGhlLmVsZW1lbnQpLnNldCgnc2Nyb2xsJywgdGhlKTtcbiAgICB9XG5cbiAgICB2YXIgX3NldHVwSGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBoZWlnaHRUeXBlID0gX2dldEhlaWdodFR5cGUoKTtcbiAgICAgICAgdmFyIGhlaWdodCA9IF9nZXRIZWlnaHQoKTtcblxuICAgICAgICAvLyBTZXQgaGVpZ2h0XG4gICAgICAgIGlmICggaGVpZ2h0ICE9PSBudWxsICYmIGhlaWdodC5sZW5ndGggPiAwICkge1xuICAgICAgICAgICAgS1RVdGlsLmNzcyh0aGUuZWxlbWVudCwgaGVpZ2h0VHlwZSwgaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEtUVXRpbC5jc3ModGhlLmVsZW1lbnQsIGhlaWdodFR5cGUsICcnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfc2V0dXBTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCBfZ2V0T3B0aW9uKCdzYXZlLXN0YXRlJykgPT09IHRydWUgJiYgdHlwZW9mIEtUQ29va2llICE9PSAndW5kZWZpbmVkJyAmJiB0aGUuaWQgKSB7XG4gICAgICAgICAgICBpZiAoIEtUQ29va2llLmdldCh0aGUuaWQgKyAnc3QnKSApIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9zID0gcGFyc2VJbnQoS1RDb29raWUuZ2V0KHRoZS5pZCArICdzdCcpKTtcblxuICAgICAgICAgICAgICAgIGlmICggcG9zID4gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhlLmVsZW1lbnQuc2Nyb2xsVG9wID0gcG9zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfc2V0dXBTY3JvbGxIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICggX2dldE9wdGlvbignc2F2ZS1zdGF0ZScpID09PSB0cnVlICYmIHR5cGVvZiBLVENvb2tpZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhlLmlkICkge1xuICAgICAgICAgICAgdGhlLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgX3Njcm9sbEhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhlLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgX3Njcm9sbEhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9kZXN0cm95U2Nyb2xsSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGUuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBfc2Nyb2xsSGFuZGxlcik7XG4gICAgfVxuXG4gICAgdmFyIF9yZXNldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBLVFV0aWwuY3NzKHRoZS5lbGVtZW50LCBfZ2V0SGVpZ2h0VHlwZSgpLCAnJyk7XG4gICAgfVxuXG4gICAgdmFyIF9zY3JvbGxIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBLVENvb2tpZS5zZXQodGhlLmlkICsgJ3N0JywgdGhlLmVsZW1lbnQuc2Nyb2xsVG9wKTtcbiAgICB9XG5cbiAgICB2YXIgX3VwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBBY3RpdmF0ZS9kZWFjdGl2YXRlXG4gICAgICAgIGlmICggX2dldE9wdGlvbignYWN0aXZhdGUnKSA9PT0gdHJ1ZSB8fCB0aGUuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEta3Qtc2Nyb2xsLWFjdGl2YXRlJykgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgX3NldHVwSGVpZ2h0KCk7XG4gICAgICAgICAgICBfc2V0dXBTY3JvbGxIYW5kbGVyKCk7XG4gICAgICAgICAgICBfc2V0dXBTdGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3Jlc2V0SGVpZ2h0KClcbiAgICAgICAgICAgIF9kZXN0cm95U2Nyb2xsSGFuZGxlcigpO1xuICAgICAgICB9ICAgICAgICBcbiAgICB9XG5cbiAgICB2YXIgX2dldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaGVpZ2h0ID0gX2dldE9wdGlvbihfZ2V0SGVpZ2h0VHlwZSgpKTtcblxuICAgICAgICBpZiAoIGhlaWdodCBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgICAgICAgICAgcmV0dXJuIGhlaWdodC5jYWxsKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIGhlaWdodCAhPT0gbnVsbCAmJiB0eXBlb2YgaGVpZ2h0ID09PSAnc3RyaW5nJyAmJiBoZWlnaHQudG9Mb3dlckNhc2UoKSA9PT0gJ2F1dG8nICkge1xuICAgICAgICAgICAgcmV0dXJuIF9nZXRBdXRvSGVpZ2h0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9nZXRBdXRvSGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBoZWlnaHQgPSBLVFV0aWwuZ2V0Vmlld1BvcnQoKS5oZWlnaHQ7XG5cbiAgICAgICAgdmFyIGRlcGVuZGVuY2llcyA9IF9nZXRPcHRpb24oJ2RlcGVuZGVuY2llcycpO1xuICAgICAgICB2YXIgd3JhcHBlcnMgPSBfZ2V0T3B0aW9uKCd3cmFwcGVycycpO1xuICAgICAgICB2YXIgb2Zmc2V0ID0gX2dldE9wdGlvbignb2Zmc2V0Jyk7XG5cbiAgICAgICAgLy8gSGVpZ2h0IGRlcGVuZGVuY2llc1xuICAgICAgICBpZiAoIGRlcGVuZGVuY2llcyAhPT0gbnVsbCApIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZGVwZW5kZW5jaWVzKTtcblxuICAgICAgICAgICAgaWYgKCBlbGVtZW50cyAmJiBlbGVtZW50cy5sZW5ndGggPiAwICkge1xuICAgICAgICAgICAgICAgIGZvciAoIHZhciBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudHNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBLVFV0aWwudmlzaWJsZShlbGVtZW50KSA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCAtIHBhcnNlSW50KEtUVXRpbC5jc3MoZWxlbWVudCwgJ2hlaWdodCcpKTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnbWFyZ2luLXRvcCcpKTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnbWFyZ2luLWJvdHRvbScpKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoS1RVdGlsLmNzcyhlbGVtZW50LCAnYm9yZGVyLXRvcCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBoZWlnaHQgLSBwYXJzZUludChLVFV0aWwuY3NzKGVsZW1lbnQsICdib3JkZXItdG9wJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKEtUVXRpbC5jc3MoZWxlbWVudCwgJ2JvcmRlci1ib3R0b20nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnYm9yZGVyLWJvdHRvbScpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdyYXBwZXJzXG4gICAgICAgIGlmICggd3JhcHBlcnMgIT09IG51bGwgKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHdyYXBwZXJzKTtcbiAgICAgICAgICAgIGlmICggZWxlbWVudHMgJiYgZWxlbWVudHMubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgICAgICBmb3IgKCB2YXIgaSA9IDAsIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICggS1RVdGlsLnZpc2libGUoZWxlbWVudCkgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBoZWlnaHQgLSBwYXJzZUludChLVFV0aWwuY3NzKGVsZW1lbnQsICdtYXJnaW4tdG9wJykpO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBoZWlnaHQgLSBwYXJzZUludChLVFV0aWwuY3NzKGVsZW1lbnQsICdtYXJnaW4tYm90dG9tJykpO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBoZWlnaHQgLSBwYXJzZUludChLVFV0aWwuY3NzKGVsZW1lbnQsICdwYWRkaW5nLXRvcCcpKTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAncGFkZGluZy1ib3R0b20nKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKEtUVXRpbC5jc3MoZWxlbWVudCwgJ2JvcmRlci10b3AnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnYm9yZGVyLXRvcCcpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChLVFV0aWwuY3NzKGVsZW1lbnQsICdib3JkZXItYm90dG9tJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCAtIHBhcnNlSW50KEtUVXRpbC5jc3MoZWxlbWVudCwgJ2JvcmRlci1ib3R0b20nKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDdXN0b20gb2Zmc2V0XG4gICAgICAgIGlmICggb2Zmc2V0ICE9PSBudWxsICkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQob2Zmc2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhlaWdodCA9IGhlaWdodCAtIHBhcnNlSW50KEtUVXRpbC5jc3ModGhlLmVsZW1lbnQsICdtYXJnaW4tdG9wJykpO1xuICAgICAgICBoZWlnaHQgPSBoZWlnaHQgLSBwYXJzZUludChLVFV0aWwuY3NzKHRoZS5lbGVtZW50LCAnbWFyZ2luLWJvdHRvbScpKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChLVFV0aWwuY3NzKGVsZW1lbnQsICdib3JkZXItdG9wJykpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCAtIHBhcnNlSW50KEtUVXRpbC5jc3MoZWxlbWVudCwgJ2JvcmRlci10b3AnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoS1RVdGlsLmNzcyhlbGVtZW50LCAnYm9yZGVyLWJvdHRvbScpKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBoZWlnaHQgLSBwYXJzZUludChLVFV0aWwuY3NzKGVsZW1lbnQsICdib3JkZXItYm90dG9tJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGVpZ2h0ID0gU3RyaW5nKGhlaWdodCkgKyAncHgnO1xuXG4gICAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfVxuXG4gICAgdmFyIF9nZXRPcHRpb24gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGlmICggdGhlLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWt0LXNjcm9sbC0nICsgbmFtZSkgPT09IHRydWUgKSB7XG4gICAgICAgICAgICB2YXIgYXR0ciA9IHRoZS5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1rdC1zY3JvbGwtJyArIG5hbWUpO1xuXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBLVFV0aWwuZ2V0UmVzcG9uc2l2ZVZhbHVlKGF0dHIpO1xuXG4gICAgICAgICAgICBpZiAoIHZhbHVlICE9PSBudWxsICYmIFN0cmluZyh2YWx1ZSkgPT09ICd0cnVlJyApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB2YWx1ZSAhPT0gbnVsbCAmJiBTdHJpbmcodmFsdWUpID09PSAnZmFsc2UnICkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25OYW1lID0gS1RVdGlsLnNuYWtlVG9DYW1lbChuYW1lKTtcblxuICAgICAgICAgICAgaWYgKCB0aGUub3B0aW9uc1tvcHRpb25OYW1lXSApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gS1RVdGlsLmdldFJlc3BvbnNpdmVWYWx1ZSh0aGUub3B0aW9uc1tvcHRpb25OYW1lXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9nZXRIZWlnaHRUeXBlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChfZ2V0T3B0aW9uKCdoZWlnaHQnKSkge1xuICAgICAgICAgICAgcmV0dXJuICdoZWlnaHQnO1xuICAgICAgICB9IGlmIChfZ2V0T3B0aW9uKCdtaW4taGVpZ2h0JykpIHtcbiAgICAgICAgICAgIHJldHVybiAnbWluLWhlaWdodCc7XG4gICAgICAgIH0gaWYgKF9nZXRPcHRpb24oJ21heC1oZWlnaHQnKSkge1xuICAgICAgICAgICAgcmV0dXJuICdtYXgtaGVpZ2h0JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBLVFV0aWwuZGF0YSh0aGUuZWxlbWVudCkucmVtb3ZlKCdzY3JvbGwnKTtcbiAgICB9XG5cbiAgICAvLyBDb25zdHJ1Y3QgQ2xhc3NcbiAgICBfY29uc3RydWN0KCk7XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vICoqIFB1YmxpYyBBUEkgICoqIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHRoZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91cGRhdGUoKTtcbiAgICB9XG5cbiAgICB0aGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZ2V0SGVpZ2h0KCk7XG4gICAgfVxuXG4gICAgdGhlLmdldEVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoZS5lbGVtZW50O1xuICAgIH1cblxuICAgIHRoZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZGVzdHJveSgpO1xuICAgIH1cbn07XG5cbi8vIFN0YXRpYyBtZXRob2RzXG5LVFNjcm9sbC5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICBpZiAoIGVsZW1lbnQgIT09IG51bGwgJiYgS1RVdGlsLmRhdGEoZWxlbWVudCkuaGFzKCdzY3JvbGwnKSApIHtcbiAgICAgICAgcmV0dXJuIEtUVXRpbC5kYXRhKGVsZW1lbnQpLmdldCgnc2Nyb2xsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG4vLyBDcmVhdGUgaW5zdGFuY2VzXG5LVFNjcm9sbC5jcmVhdGVJbnN0YW5jZXMgPSBmdW5jdGlvbihzZWxlY3RvciA9ICdbZGF0YS1rdC1zY3JvbGw9XCJ0cnVlXCJdJykge1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJCT0RZXCIpWzBdO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBNZW51c1xuICAgIHZhciBlbGVtZW50cyA9IGJvZHkucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgICBpZiAoIGVsZW1lbnRzICYmIGVsZW1lbnRzLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbmV3IEtUU2Nyb2xsKGVsZW1lbnRzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gV2luZG93IHJlc2l6ZSBoYW5kbGluZ1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgIHZhciB0aW1lcjtcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQk9EWVwiKVswXTtcblxuICAgIEtUVXRpbC50aHJvdHRsZSh0aW1lciwgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIExvY2F0ZSBhbmQgdXBkYXRlIE9mZmNhbnZhcyBpbnN0YW5jZXMgb24gd2luZG93IHJlc2l6ZVxuICAgICAgICB2YXIgZWxlbWVudHMgPSBib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWt0LXNjcm9sbD1cInRydWVcIl0nKTtcblxuICAgICAgICBpZiAoIGVsZW1lbnRzICYmIGVsZW1lbnRzLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsID0gS1RTY3JvbGwuZ2V0SW5zdGFuY2UoZWxlbWVudHNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIDIwMCk7XG59KTtcblxuLy8gR2xvYmFsIGluaXRpYWxpemF0aW9uXG5LVFNjcm9sbC5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgS1RTY3JvbGwuY3JlYXRlSW5zdGFuY2VzKCk7XG59O1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIEtUU2Nyb2xsLmluaXQpO1xufSBlbHNlIHtcbiAgICBLVFNjcm9sbC5pbml0KCk7XG59XG5cbi8vIFdlYnBhY2sgU3VwcG9ydFxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEtUU2Nyb2xsO1xufVxuIl0sIm5hbWVzIjpbIktUU2Nyb2xsIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJ0aGUiLCJib2R5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImRlZmF1bHRPcHRpb25zIiwic2F2ZVN0YXRlIiwiX2NvbnN0cnVjdCIsIktUVXRpbCIsImRhdGEiLCJoYXMiLCJnZXQiLCJfaW5pdCIsImRlZXBFeHRlbmQiLCJpZCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsIl91cGRhdGUiLCJzZXQiLCJfc2V0dXBIZWlnaHQiLCJoZWlnaHRUeXBlIiwiX2dldEhlaWdodFR5cGUiLCJoZWlnaHQiLCJfZ2V0SGVpZ2h0IiwibGVuZ3RoIiwiY3NzIiwiX3NldHVwU3RhdGUiLCJfZ2V0T3B0aW9uIiwiS1RDb29raWUiLCJwb3MiLCJwYXJzZUludCIsInNjcm9sbFRvcCIsIl9zZXR1cFNjcm9sbEhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiX3Njcm9sbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2Rlc3Ryb3lTY3JvbGxIYW5kbGVyIiwiX3Jlc2V0SGVpZ2h0IiwiaGFzQXR0cmlidXRlIiwiRnVuY3Rpb24iLCJjYWxsIiwidG9Mb3dlckNhc2UiLCJfZ2V0QXV0b0hlaWdodCIsImdldFZpZXdQb3J0IiwiZGVwZW5kZW5jaWVzIiwid3JhcHBlcnMiLCJvZmZzZXQiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuIiwidmlzaWJsZSIsIlN0cmluZyIsIm5hbWUiLCJhdHRyIiwidmFsdWUiLCJnZXRSZXNwb25zaXZlVmFsdWUiLCJvcHRpb25OYW1lIiwic25ha2VUb0NhbWVsIiwiX2Rlc3Ryb3kiLCJyZW1vdmUiLCJ1cGRhdGUiLCJnZXRIZWlnaHQiLCJnZXRFbGVtZW50IiwiZGVzdHJveSIsImdldEluc3RhbmNlIiwiY3JlYXRlSW5zdGFuY2VzIiwic2VsZWN0b3IiLCJ3aW5kb3ciLCJ0aW1lciIsInRocm90dGxlIiwic2Nyb2xsIiwiaW5pdCIsInJlYWR5U3RhdGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/components/scroll.js\n");
>>>>>>> Stashed changes

        removeEvent: function(el, type, handler) {
            if (el !== null) {
                el.removeEventListener(type, handler);
            }
        },

        on: function(element, selector, event, handler) {
            if ( element === null ) {
                return;
            }

<<<<<<< Updated upstream
            var eventId = KTUtil.getUniqueId('event');
=======
"use strict";
eval(" // Class definition\n\nvar KTScrolltop = function KTScrolltop(element, options) {\n  ////////////////////////////\n  // ** Private variables  ** //\n  ////////////////////////////\n  var the = this;\n  var body = document.getElementsByTagName(\"BODY\")[0];\n\n  if (typeof element === \"undefined\" || element === null) {\n    return;\n  } // Default options\n\n\n  var defaultOptions = {\n    offset: 300,\n    speed: 600\n  }; ////////////////////////////\n  // ** Private methods  ** //\n  ////////////////////////////\n\n  var _construct = function _construct() {\n    if (KTUtil.data(element).has('scrolltop')) {\n      the = KTUtil.data(element).get('scrolltop');\n    } else {\n      _init();\n    }\n  };\n\n  var _init = function _init() {\n    // Variables\n    the.options = KTUtil.deepExtend({}, defaultOptions, options);\n    the.uid = KTUtil.getUniqueId('scrolltop');\n    the.element = element; // Set initialized\n\n    the.element.setAttribute('data-kt-scrolltop', 'true'); // Event Handlers\n\n    _handlers(); // Bind Instance\n\n\n    KTUtil.data(the.element).set('scrolltop', the);\n  };\n\n  var _handlers = function _handlers() {\n    var timer;\n    window.addEventListener('scroll', function () {\n      KTUtil.throttle(timer, function () {\n        _scroll();\n      }, 200);\n    });\n    KTUtil.addEvent(the.element, 'click', function (e) {\n      e.preventDefault();\n\n      _go();\n    });\n  };\n\n  var _scroll = function _scroll() {\n    var offset = parseInt(_getOption('offset'));\n    var pos = KTUtil.getScrollTop(); // current vertical position\n\n    if (pos > offset) {\n      if (body.hasAttribute('data-kt-scrolltop') === false) {\n        body.setAttribute('data-kt-scrolltop', 'on');\n      }\n    } else {\n      if (body.hasAttribute('data-kt-scrolltop') === true) {\n        body.removeAttribute('data-kt-scrolltop');\n      }\n    }\n  };\n\n  var _go = function _go() {\n    var speed = parseInt(_getOption('speed'));\n    KTUtil.scrollTop(0, speed);\n  };\n\n  var _getOption = function _getOption(name) {\n    if (the.element.hasAttribute('data-kt-scrolltop-' + name) === true) {\n      var attr = the.element.getAttribute('data-kt-scrolltop-' + name);\n      var value = KTUtil.getResponsiveValue(attr);\n\n      if (value !== null && String(value) === 'true') {\n        value = true;\n      } else if (value !== null && String(value) === 'false') {\n        value = false;\n      }\n\n      return value;\n    } else {\n      var optionName = KTUtil.snakeToCamel(name);\n\n      if (the.options[optionName]) {\n        return KTUtil.getResponsiveValue(the.options[optionName]);\n      } else {\n        return null;\n      }\n    }\n  };\n\n  var _destroy = function _destroy() {\n    KTUtil.data(the.element).remove('scrolltop');\n  }; // Construct class\n\n\n  _construct(); ///////////////////////\n  // ** Public API  ** //\n  ///////////////////////\n  // Plugin API\n\n\n  the.go = function () {\n    return _go();\n  };\n\n  the.getElement = function () {\n    return the.element;\n  };\n\n  the.destroy = function () {\n    return _destroy();\n  };\n}; // Static methods\n\n\nKTScrolltop.getInstance = function (element) {\n  if (element && KTUtil.data(element).has('scrolltop')) {\n    return KTUtil.data(element).get('scrolltop');\n  } else {\n    return null;\n  }\n}; // Create instances\n\n\nKTScrolltop.createInstances = function () {\n  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-kt-scrolltop=\"true\"]';\n  var body = document.getElementsByTagName(\"BODY\")[0]; // Initialize Menus\n\n  var elements = body.querySelectorAll(selector);\n  var scrolltop;\n\n  if (elements && elements.length > 0) {\n    for (var i = 0, len = elements.length; i < len; i++) {\n      scrolltop = new KTScrolltop(elements[i]);\n    }\n  }\n}; // Global initialization\n\n\nKTScrolltop.init = function () {\n  KTScrolltop.createInstances();\n}; // On document ready\n\n\nif (document.readyState === 'loading') {\n  document.addEventListener('DOMContentLoaded', KTScrolltop.init);\n} else {\n  KTScrolltop.init();\n} // Webpack support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTScrolltop;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvc2Nyb2xsdG9wLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQVNDLE9BQVQsRUFBa0JDLE9BQWxCLEVBQTJCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLE1BQUlDLEdBQUcsR0FBRyxJQUFWO0FBQ0EsTUFBSUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQVg7O0FBRUEsTUFBSyxPQUFPTCxPQUFQLEtBQW1CLFdBQW5CLElBQWtDQSxPQUFPLEtBQUssSUFBbkQsRUFBMEQ7QUFDdEQ7QUFDSCxHQVR3QyxDQVd6Qzs7O0FBQ0EsTUFBSU0sY0FBYyxHQUFHO0FBQ2pCQyxJQUFBQSxNQUFNLEVBQUUsR0FEUztBQUVqQkMsSUFBQUEsS0FBSyxFQUFFO0FBRlUsR0FBckIsQ0FaeUMsQ0FpQnpDO0FBQ0E7QUFDQTs7QUFFQSxNQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFXO0FBQ3hCLFFBQUlDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZWCxPQUFaLEVBQXFCWSxHQUFyQixDQUF5QixXQUF6QixDQUFKLEVBQTJDO0FBQ3ZDVixNQUFBQSxHQUFHLEdBQUdRLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZWCxPQUFaLEVBQXFCYSxHQUFyQixDQUF5QixXQUF6QixDQUFOO0FBQ0gsS0FGRCxNQUVPO0FBQ0hDLE1BQUFBLEtBQUs7QUFDUjtBQUNKLEdBTkQ7O0FBUUEsTUFBSUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBVztBQUNuQjtBQUNBWixJQUFBQSxHQUFHLENBQUNELE9BQUosR0FBY1MsTUFBTSxDQUFDSyxVQUFQLENBQWtCLEVBQWxCLEVBQXNCVCxjQUF0QixFQUFzQ0wsT0FBdEMsQ0FBZDtBQUNBQyxJQUFBQSxHQUFHLENBQUNjLEdBQUosR0FBVU4sTUFBTSxDQUFDTyxXQUFQLENBQW1CLFdBQW5CLENBQVY7QUFD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b25lbnRzL3Njcm9sbHRvcC5qcz8zMTdkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RTY3JvbGx0b3AgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vICoqIFByaXZhdGUgdmFyaWFibGVzICAqKiAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB2YXIgdGhlID0gdGhpcztcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQk9EWVwiKVswXTtcblxuICAgIGlmICggdHlwZW9mIGVsZW1lbnQgPT09IFwidW5kZWZpbmVkXCIgfHwgZWxlbWVudCA9PT0gbnVsbCApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgb3B0aW9uc1xuICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgb2Zmc2V0OiAzMDAsXG4gICAgICAgIHNwZWVkOiA2MDBcbiAgICB9O1xuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vICoqIFByaXZhdGUgbWV0aG9kcyAgKiogLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICB2YXIgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoS1RVdGlsLmRhdGEoZWxlbWVudCkuaGFzKCdzY3JvbGx0b3AnKSkge1xuICAgICAgICAgICAgdGhlID0gS1RVdGlsLmRhdGEoZWxlbWVudCkuZ2V0KCdzY3JvbGx0b3AnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9pbml0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX2luaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gVmFyaWFibGVzXG4gICAgICAgIHRoZS5vcHRpb25zID0gS1RVdGlsLmRlZXBFeHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhlLnVpZCA9IEtUVXRpbC5nZXRVbmlxdWVJZCgnc2Nyb2xsdG9wJyk7XG4gICAgICAgIHRoZS5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICAvLyBTZXQgaW5pdGlhbGl6ZWRcbiAgICAgICAgdGhlLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWt0LXNjcm9sbHRvcCcsICd0cnVlJyk7XG5cbiAgICAgICAgLy8gRXZlbnQgSGFuZGxlcnNcbiAgICAgICAgX2hhbmRsZXJzKCk7XG5cbiAgICAgICAgLy8gQmluZCBJbnN0YW5jZVxuICAgICAgICBLVFV0aWwuZGF0YSh0aGUuZWxlbWVudCkuc2V0KCdzY3JvbGx0b3AnLCB0aGUpO1xuICAgIH1cblxuICAgIHZhciBfaGFuZGxlcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRpbWVyO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIEtUVXRpbC50aHJvdHRsZSh0aW1lciwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX3Njcm9sbCgpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgS1RVdGlsLmFkZEV2ZW50KHRoZS5lbGVtZW50LCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIF9nbygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgX3Njcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gcGFyc2VJbnQoX2dldE9wdGlvbignb2Zmc2V0JykpO1xuXG4gICAgICAgIHZhciBwb3MgPSBLVFV0aWwuZ2V0U2Nyb2xsVG9wKCk7IC8vIGN1cnJlbnQgdmVydGljYWwgcG9zaXRpb25cblxuICAgICAgICBpZiAoIHBvcyA+IG9mZnNldCApIHtcbiAgICAgICAgICAgIGlmICggYm9keS5oYXNBdHRyaWJ1dGUoJ2RhdGEta3Qtc2Nyb2xsdG9wJykgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgIGJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLWt0LXNjcm9sbHRvcCcsICdvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCBib2R5Lmhhc0F0dHJpYnV0ZSgnZGF0YS1rdC1zY3JvbGx0b3AnKSA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICBib2R5LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1rdC1zY3JvbGx0b3AnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfZ28gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNwZWVkID0gcGFyc2VJbnQoX2dldE9wdGlvbignc3BlZWQnKSk7XG5cbiAgICAgICAgS1RVdGlsLnNjcm9sbFRvcCgwLCBzcGVlZCk7XG4gICAgfVxuXG4gICAgdmFyIF9nZXRPcHRpb24gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGlmICggdGhlLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWt0LXNjcm9sbHRvcC0nICsgbmFtZSkgPT09IHRydWUgKSB7XG4gICAgICAgICAgICB2YXIgYXR0ciA9IHRoZS5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1rdC1zY3JvbGx0b3AtJyArIG5hbWUpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gS1RVdGlsLmdldFJlc3BvbnNpdmVWYWx1ZShhdHRyKTtcblxuICAgICAgICAgICAgaWYgKCB2YWx1ZSAhPT0gbnVsbCAmJiBTdHJpbmcodmFsdWUpID09PSAndHJ1ZScgKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICggdmFsdWUgIT09IG51bGwgJiYgU3RyaW5nKHZhbHVlKSA9PT0gJ2ZhbHNlJyApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9uTmFtZSA9IEtUVXRpbC5zbmFrZVRvQ2FtZWwobmFtZSk7XG5cbiAgICAgICAgICAgIGlmICggdGhlLm9wdGlvbnNbb3B0aW9uTmFtZV0gKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEtUVXRpbC5nZXRSZXNwb25zaXZlVmFsdWUodGhlLm9wdGlvbnNbb3B0aW9uTmFtZV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBLVFV0aWwuZGF0YSh0aGUuZWxlbWVudCkucmVtb3ZlKCdzY3JvbGx0b3AnKTtcbiAgICB9XG5cbiAgICAvLyBDb25zdHJ1Y3QgY2xhc3NcbiAgICBfY29uc3RydWN0KCk7XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vICoqIFB1YmxpYyBBUEkgICoqIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIFBsdWdpbiBBUElcbiAgICB0aGUuZ28gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9nbygpO1xuICAgIH1cblxuICAgIHRoZS5nZXRFbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGUuZWxlbWVudDtcbiAgICB9XG5cbiAgICB0aGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2Rlc3Ryb3koKTtcbiAgICB9XG59O1xuXG4vLyBTdGF0aWMgbWV0aG9kc1xuS1RTY3JvbGx0b3AuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgJiYgS1RVdGlsLmRhdGEoZWxlbWVudCkuaGFzKCdzY3JvbGx0b3AnKSkge1xuICAgICAgICByZXR1cm4gS1RVdGlsLmRhdGEoZWxlbWVudCkuZ2V0KCdzY3JvbGx0b3AnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbi8vIENyZWF0ZSBpbnN0YW5jZXNcbktUU2Nyb2xsdG9wLmNyZWF0ZUluc3RhbmNlcyA9IGZ1bmN0aW9uKHNlbGVjdG9yID0gJ1tkYXRhLWt0LXNjcm9sbHRvcD1cInRydWVcIl0nKSB7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkJPRFlcIilbMF07XG5cbiAgICAvLyBJbml0aWFsaXplIE1lbnVzXG4gICAgdmFyIGVsZW1lbnRzID0gYm9keS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICB2YXIgc2Nyb2xsdG9wO1xuXG4gICAgaWYgKCBlbGVtZW50cyAmJiBlbGVtZW50cy5sZW5ndGggPiAwICkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHNjcm9sbHRvcCA9IG5ldyBLVFNjcm9sbHRvcChlbGVtZW50c1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEdsb2JhbCBpbml0aWFsaXphdGlvblxuS1RTY3JvbGx0b3AuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIEtUU2Nyb2xsdG9wLmNyZWF0ZUluc3RhbmNlcygpO1xufTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBLVFNjcm9sbHRvcC5pbml0KTtcbn0gZWxzZSB7XG4gICAgS1RTY3JvbGx0b3AuaW5pdCgpO1xufVxuXG4vLyBXZWJwYWNrIHN1cHBvcnRcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBLVFNjcm9sbHRvcDtcbn1cbiJdLCJuYW1lcyI6WyJLVFNjcm9sbHRvcCIsImVsZW1lbnQiLCJvcHRpb25zIiwidGhlIiwiYm9keSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJkZWZhdWx0T3B0aW9ucyIsIm9mZnNldCIsInNwZWVkIiwiX2NvbnN0cnVjdCIsIktUVXRpbCIsImRhdGEiLCJoYXMiLCJnZXQiLCJfaW5pdCIsImRlZXBFeHRlbmQiLCJ1aWQiLCJnZXRVbmlxdWVJZCIsInNldEF0dHJpYnV0ZSIsIl9oYW5kbGVycyIsInNldCIsInRpbWVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRocm90dGxlIiwiX3Njcm9sbCIsImFkZEV2ZW50IiwiZSIsInByZXZlbnREZWZhdWx0IiwiX2dvIiwicGFyc2VJbnQiLCJfZ2V0T3B0aW9uIiwicG9zIiwiZ2V0U2Nyb2xsVG9wIiwiaGFzQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwic2Nyb2xsVG9wIiwibmFtZSIsImF0dHIiLCJnZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsImdldFJlc3BvbnNpdmVWYWx1ZSIsIlN0cmluZyIsIm9wdGlvbk5hbWUiLCJzbmFrZVRvQ2FtZWwiLCJfZGVzdHJveSIsInJlbW92ZSIsImdvIiwiZ2V0RWxlbWVudCIsImRlc3Ryb3kiLCJnZXRJbnN0YW5jZSIsImNyZWF0ZUluc3RhbmNlcyIsInNlbGVjdG9yIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2Nyb2xsdG9wIiwibGVuZ3RoIiwiaSIsImxlbiIsImluaXQiLCJyZWFkeVN0YXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/components/scrolltop.js\n");
>>>>>>> Stashed changes

            window.KTUtilDelegatedEventHandlers[eventId] = function(e) {
                var targets = element.querySelectorAll(selector);
                var target = e.target;

                while ( target && target !== element ) {
                    for ( var i = 0, j = targets.length; i < j; i++ ) {
                        if ( target === targets[i] ) {
                            handler.call(target, e);
                        }
                    }

<<<<<<< Updated upstream
                    target = target.parentNode;
                }
            }
=======
"use strict";
eval(" // Class definition\n\nvar KTSearch = function KTSearch(element, options) {\n  ////////////////////////////\n  // ** Private variables  ** //\n  ////////////////////////////\n  var the = this;\n\n  if (!element) {\n    return;\n  } // Default Options\n\n\n  var defaultOptions = {\n    minLength: 2,\n    // Miniam text lenght to query search\n    keypress: true,\n    // Enable search on keypress \n    enter: true,\n    // Enable search on enter key press\n    layout: 'menu',\n    // Use 'menu' or 'inline' layout options to display search results\n    responsive: null,\n    // Pass integer value or bootstrap compatible breakpoint key(sm,md,lg,xl,xxl) to enable reponsive form mode for device width below the breakpoint value\n    showOnFocus: true // Always show menu on input focus\n\n  }; ////////////////////////////\n  // ** Private methods  ** //\n  ////////////////////////////\n  // Construct\n\n  var _construct = function _construct() {\n    if (KTUtil.data(element).has('search') === true) {\n      the = KTUtil.data(element).get('search');\n    } else {\n      _init();\n    }\n  }; // Init\n\n\n  var _init = function _init() {\n    // Variables\n    the.options = KTUtil.deepExtend({}, defaultOptions, options);\n    the.processing = false; // Elements\n\n    the.element = element;\n    the.contentElement = _getElement('content');\n    the.formElement = _getElement('form');\n    the.inputElement = _getElement('input');\n    the.spinnerElement = _getElement('spinner');\n    the.clearElement = _getElement('clear');\n    the.toggleElement = _getElement('toggle');\n    the.submitElement = _getElement('submit');\n    the.toolbarElement = _getElement('toolbar');\n    the.resultsElement = _getElement('results');\n    the.suggestionElement = _getElement('suggestion');\n    the.emptyElement = _getElement('empty'); // Set initialized\n\n    the.element.setAttribute('data-kt-search', 'true'); // Layout\n\n    the.layout = _getOption('layout'); // Menu\n\n    if (the.layout === 'menu') {\n      the.menuObject = new KTMenu(the.contentElement);\n    } else {\n      the.menuObject = null;\n    } // Update\n\n\n    _update(); // Event Handlers\n\n\n    _handlers(); // Bind Instance\n\n\n    KTUtil.data(the.element).set('search', the);\n  }; // Handlera\n\n\n  var _handlers = function _handlers() {\n    // Focus\n    the.inputElement.addEventListener('focus', _focus); // Blur\n\n    the.inputElement.addEventListener('blur', _blur); // Keypress\n\n    if (_getOption('keypress') === true) {\n      the.inputElement.addEventListener('input', _input);\n    } // Submit\n\n\n    if (the.submitElement) {\n      the.submitElement.addEventListener('click', _search);\n    } // Enter\n\n\n    if (_getOption('enter') === true) {\n      the.inputElement.addEventListener('keypress', _enter);\n    } // Clear \n\n\n    if (the.clearElement) {\n      the.clearElement.addEventListener('click', _clear);\n    } // Menu\n\n\n    if (the.menuObject) {\n      // Toggle menu\n      if (the.toggleElement) {\n        the.toggleElement.addEventListener('click', _show);\n        the.menuObject.on('kt.menu.dropdown.show', function (item) {\n          if (KTUtil.visible(the.toggleElement)) {\n            the.toggleElement.classList.add('active');\n            the.toggleElement.classList.add('show');\n          }\n        });\n        the.menuObject.on('kt.menu.dropdown.hide', function (item) {\n          if (KTUtil.visible(the.toggleElement)) {\n            the.toggleElement.classList.remove('active');\n            the.toggleElement.classList.remove('show');\n          }\n        });\n      }\n\n      the.menuObject.on('kt.menu.dropdown.shown', function () {\n        the.inputElement.focus();\n      });\n    } // Window resize handling\n\n\n    window.addEventListener('resize', function () {\n      var timer;\n      KTUtil.throttle(timer, function () {\n        _update();\n      }, 200);\n    });\n  }; // Focus\n\n\n  var _focus = function _focus() {\n    the.element.classList.add('focus');\n\n    if (_getOption('show-on-focus') === true || the.inputElement.value.length >= minLength) {\n      _show();\n    }\n  }; // Blur\n\n\n  var _blur = function _blur() {\n    the.element.classList.remove('focus');\n  }; // Enter \n\n\n  var _enter = function _enter(e) {\n    var key = e.charCode || e.keyCode || 0;\n\n    if (key == 13) {\n      e.preventDefault();\n\n      _search();\n    }\n  }; // Input\n\n\n  var _input = function _input() {\n    if (_getOption('min-length')) {\n      var minLength = parseInt(_getOption('min-length'));\n\n      if (the.inputElement.value.length >= minLength) {\n        _search();\n      } else if (the.inputElement.value.length === 0) {\n        _clear();\n      }\n    }\n  }; // Search\n\n\n  var _search = function _search() {\n    if (the.processing === false) {\n      // Show search spinner\n      if (the.spinnerElement) {\n        the.spinnerElement.classList.remove(\"d-none\");\n      } // Hide search clear button\n\n\n      if (the.clearElement) {\n        the.clearElement.classList.add(\"d-none\");\n      } // Hide search toolbar\n\n\n      if (the.toolbarElement && the.formElement.contains(the.toolbarElement)) {\n        the.toolbarElement.classList.add(\"d-none\");\n      } // Focus input\n\n\n      the.inputElement.focus();\n      the.processing = true;\n      KTEventHandler.trigger(the.element, 'kt.search.process', the);\n    }\n  }; // Complete\n\n\n  var _complete = function _complete() {\n    if (the.spinnerElement) {\n      the.spinnerElement.classList.add(\"d-none\");\n    } // Show search toolbar\n\n\n    if (the.clearElement) {\n      the.clearElement.classList.remove(\"d-none\");\n    }\n\n    if (the.inputElement.value.length === 0) {\n      _clear();\n    } // Focus input\n\n\n    the.inputElement.focus();\n\n    _show();\n\n    the.processing = false;\n  }; // Clear\n\n\n  var _clear = function _clear() {\n    if (KTEventHandler.trigger(the.element, 'kt.search.clear', the) === false) {\n      return;\n    } // Clear and focus input\n\n\n    the.inputElement.value = \"\";\n    the.inputElement.focus(); // Hide clear icon\n\n    if (the.clearElement) {\n      the.clearElement.classList.add(\"d-none\");\n    } // Show search toolbar\n\n\n    if (the.toolbarElement && the.formElement.contains(the.toolbarElement)) {\n      the.toolbarElement.classList.remove(\"d-none\");\n    } // Hide menu\n\n\n    if (_getOption('show-on-focus') === false) {\n      _hide();\n    }\n\n    KTEventHandler.trigger(the.element, 'kt.search.cleared', the);\n  }; // Update\n\n\n  var _update = function _update() {\n    // Handle responsive form\n    if (the.layout === 'menu') {\n      var responsiveFormMode = _getResponsiveFormMode();\n\n      if (responsiveFormMode === 'on' && the.contentElement.contains(the.formElement) === false) {\n        the.contentElement.prepend(the.formElement);\n        the.formElement.classList.remove('d-none');\n      } else if (responsiveFormMode === 'off' && the.contentElement.contains(the.formElement) === true) {\n        the.element.prepend(the.formElement);\n        the.formElement.classList.add('d-none');\n      }\n    }\n  }; // Show menu\n\n\n  var _show = function _show() {\n    if (the.menuObject) {\n      _update();\n\n      the.menuObject.show(the.element);\n    }\n  }; // Hide menu\n\n\n  var _hide = function _hide() {\n    if (the.menuObject) {\n      _update();\n\n      the.menuObject.hide(the.element);\n    }\n  }; // Get option\n\n\n  var _getOption = function _getOption(name) {\n    if (the.element.hasAttribute('data-kt-search-' + name) === true) {\n      var attr = the.element.getAttribute('data-kt-search-' + name);\n      var value = KTUtil.getResponsiveValue(attr);\n\n      if (value !== null && String(value) === 'true') {\n        value = true;\n      } else if (value !== null && String(value) === 'false') {\n        value = false;\n      }\n\n      return value;\n    } else {\n      var optionName = KTUtil.snakeToCamel(name);\n\n      if (the.options[optionName]) {\n        return KTUtil.getResponsiveValue(the.options[optionName]);\n      } else {\n        return null;\n      }\n    }\n  }; // Get element\n\n\n  var _getElement = function _getElement(name) {\n    return the.element.querySelector('[data-kt-search-element=\"' + name + '\"]');\n  }; // Check if responsive form mode is enabled\n\n\n  var _getResponsiveFormMode = function _getResponsiveFormMode() {\n    var responsive = _getOption('responsive');\n\n    var width = KTUtil.getViewPort().width;\n\n    if (!responsive) {\n      return null;\n    }\n\n    var breakpoint = KTUtil.getBreakpoint(responsive);\n\n    if (!breakpoint) {\n      breakpoint = parseInt(responsive);\n    }\n\n    if (width < breakpoint) {\n      return \"on\";\n    } else {\n      return \"off\";\n    }\n  };\n\n  var _destroy = function _destroy() {\n    KTUtil.data(the.element).remove('search');\n  }; // Construct class\n\n\n  _construct(); ///////////////////////\n  // ** Public API  ** //\n  ///////////////////////\n  // Plugin API\n\n\n  the.show = function () {\n    return _show();\n  };\n\n  the.hide = function () {\n    return _hide();\n  };\n\n  the.update = function () {\n    return _update();\n  };\n\n  the.search = function () {\n    return _search();\n  };\n\n  the.complete = function () {\n    return _complete();\n  };\n\n  the.clear = function () {\n    return _clear();\n  };\n\n  the.isProcessing = function () {\n    return the.processing;\n  };\n\n  the.getQuery = function () {\n    return the.inputElement.value;\n  };\n\n  the.getMenu = function () {\n    return the.menuObject;\n  };\n\n  the.getFormElement = function () {\n    return the.formElement;\n  };\n\n  the.getInputElement = function () {\n    return the.inputElement;\n  };\n\n  the.getContentElement = function () {\n    return the.contentElement;\n  };\n\n  the.getElement = function () {\n    return the.element;\n  };\n\n  the.destroy = function () {\n    return _destroy();\n  }; // Event API\n\n\n  the.on = function (name, handler) {\n    return KTEventHandler.on(the.element, name, handler);\n  };\n\n  the.one = function (name, handler) {\n    return KTEventHandler.one(the.element, name, handler);\n  };\n\n  the.off = function (name) {\n    return KTEventHandler.off(the.element, name);\n  };\n}; // Static methods\n\n\nKTSearch.getInstance = function (element) {\n  if (element !== null && KTUtil.data(element).has('search')) {\n    return KTUtil.data(element).get('search');\n  } else {\n    return null;\n  }\n}; // Webpack support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTSearch;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvc2VhcmNoLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVNDLE9BQVQsRUFBa0JDLE9BQWxCLEVBQTJCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLE1BQUlDLEdBQUcsR0FBRyxJQUFWOztBQUVBLE1BQUksQ0FBQ0YsT0FBTCxFQUFjO0FBQ1Y7QUFDSCxHQVJxQyxDQVV0Qzs7O0FBQ0EsTUFBSUcsY0FBYyxHQUFHO0FBQ2pCQyxJQUFBQSxTQUFTLEVBQUUsQ0FETTtBQUNGO0FBQ2ZDLElBQUFBLFFBQVEsRUFBRSxJQUZPO0FBRUE7QUFDakJDLElBQUFBLEtBQUssRUFBRSxJQUhVO0FBR0g7QUFDZEMsSUFBQUEsTUFBTSxFQUFFLE1BSlM7QUFJQTtBQUNqQkMsSUFBQUEsVUFBVSxFQUFFLElBTEs7QUFLQztBQUNsQkMsSUFBQUEsV0FBVyxFQUFFLElBTkksQ0FNQzs7QUFORCxHQUFyQixDQVhzQyxDQW9CdEM7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsTUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVztBQUN4QixRQUFLQyxNQUFNLENBQUNDLElBQVAsQ0FBWVosT0FBWixFQUFxQmEsR0FBckIsQ0FBeUIsUUFBekIsTUFBdUMsSUFBNUMsRUFBbUQ7QUFDL0NYLE1BQUFBLEdBQUcsR0FBR1MsTUFBTSxDQUFDQyxJQUFQLENBQVlaLE9BQVosRUFBcUJjLEdBQXJCLENBQXlCLFFBQXpCLENBQU47QUFDSCxLQUZELE1BRU87QUFDSEMsTUFBQUEsS0FBSztBQUNSO0FBQ0osR0FORCxDQXpCc0MsQ0FpQ3RDOzs7QUFDQSxNQUFJQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFXO0FBQ25CO0FBQ0FiLElBQUFBLEdBQUcsQ0FBQ0QsT0FBSixHQUFjVSxNQUFNLENBQUNLLFVBQVAsQ0FBa0IsRUFBbEIsRUFBc0JiLGNBQXRCLEVBQXNDRixPQUF0QyxDQUFkO0FBQ0FD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VCxFQUFlMEIsT0FBZixFQUF3QjtBQUM3QixXQUFPbkMsY0FBYyxDQUFDbkIsRUFBZixDQUFrQjNDLEdBQUcsQ0FBQ0YsT0FBdEIsRUFBK0J5RSxJQUEvQixFQUFxQzBCLE9BQXJDLENBQVA7QUFDSCxHQUZEOztBQUlBakcsRUFBQUEsR0FBRyxDQUFDa0csR0FBSixHQUFVLFVBQVMzQixJQUFULEVBQWUwQixPQUFmLEVBQXdCO0FBQzlCLFdBQU9uQyxjQUFjLENBQUNvQyxHQUFmLENBQW1CbEcsR0FBRyxDQUFDRixPQUF2QixFQUFnQ3lFLElBQWhDLEVBQXNDMEIsT0FBdEMsQ0FBUDtBQUNILEdBRkQ7O0FBSUFqRyxFQUFBQSxHQUFHLENBQUNtRyxHQUFKLEdBQVUsVUFBUzVCLElBQVQsRUFBZTtBQUNyQixXQUFPVCxjQUFjLENBQUNxQyxHQUFmLENBQW1CbkcsR0FBRyxDQUFDRixPQUF2QixFQUFnQ3lFLElBQWhDLENBQVA7QUFDSCxHQUZEO0FBR0gsQ0FyYUQsQyxDQXVhQTs7O0FBQ0ExRSxRQUFRLENBQUN1RyxXQUFULEdBQXVCLFVBQVN0RyxPQUFULEVBQWtCO0FBQ3JDLE1BQUtBLE9BQU8sS0FBSyxJQUFaLElBQW9CVyxNQUFNLENBQUNDLElBQVAsQ0FBWVosT0FBWixFQUFxQmEsR0FBckIsQ0FBeUIsUUFBekIsQ0FBekIsRUFBOEQ7QUFDMUQsV0FBT0YsTUFBTSxDQUFDQyxJQUFQLENBQVlaLE9BQVosRUFBcUJjLEdBQXJCLENBQXlCLFFBQXpCLENBQVA7QUFDSCxHQUZELE1BRU87QUFDSCxXQUFPLElBQVA7QUFDSDtBQUNKLENBTkQsQyxDQVFBOzs7QUFDQSxJQUFJLFNBQWlDLE9BQU95RixNQUFNLENBQUNDLE9BQWQsS0FBMEIsV0FBL0QsRUFBNEU7QUFDeEVELEVBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpHLFFBQWpCO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvc2VhcmNoLmpzPzQ5OTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVFNlYXJjaCA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gKiogUHJpdmF0ZSB2YXJpYWJsZXMgICoqIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHZhciB0aGUgPSB0aGlzO1xuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IE9wdGlvbnNcbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgIG1pbkxlbmd0aDogMiwgIC8vIE1pbmlhbSB0ZXh0IGxlbmdodCB0byBxdWVyeSBzZWFyY2hcbiAgICAgICAga2V5cHJlc3M6IHRydWUsICAvLyBFbmFibGUgc2VhcmNoIG9uIGtleXByZXNzIFxuICAgICAgICBlbnRlcjogdHJ1ZSwgIC8vIEVuYWJsZSBzZWFyY2ggb24gZW50ZXIga2V5IHByZXNzXG4gICAgICAgIGxheW91dDogJ21lbnUnLCAgLy8gVXNlICdtZW51JyBvciAnaW5saW5lJyBsYXlvdXQgb3B0aW9ucyB0byBkaXNwbGF5IHNlYXJjaCByZXN1bHRzXG4gICAgICAgIHJlc3BvbnNpdmU6IG51bGwsIC8vIFBhc3MgaW50ZWdlciB2YWx1ZSBvciBib290c3RyYXAgY29tcGF0aWJsZSBicmVha3BvaW50IGtleShzbSxtZCxsZyx4bCx4eGwpIHRvIGVuYWJsZSByZXBvbnNpdmUgZm9ybSBtb2RlIGZvciBkZXZpY2Ugd2lkdGggYmVsb3cgdGhlIGJyZWFrcG9pbnQgdmFsdWVcbiAgICAgICAgc2hvd09uRm9jdXM6IHRydWUgLy8gQWx3YXlzIHNob3cgbWVudSBvbiBpbnB1dCBmb2N1c1xuICAgIH07XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gKiogUHJpdmF0ZSBtZXRob2RzICAqKiAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIENvbnN0cnVjdFxuICAgIHZhciBfY29uc3RydWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICggS1RVdGlsLmRhdGEoZWxlbWVudCkuaGFzKCdzZWFyY2gnKSA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIHRoZSA9IEtUVXRpbC5kYXRhKGVsZW1lbnQpLmdldCgnc2VhcmNoJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfaW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSW5pdFxuICAgIHZhciBfaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBWYXJpYWJsZXNcbiAgICAgICAgdGhlLm9wdGlvbnMgPSBLVFV0aWwuZGVlcEV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGUucHJvY2Vzc2luZyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEVsZW1lbnRzXG4gICAgICAgIHRoZS5lbGVtZW50ID0gZWxlbWVudDsgICAgICAgICAgICAgICBcbiAgICAgICAgdGhlLmNvbnRlbnRFbGVtZW50ID0gX2dldEVsZW1lbnQoJ2NvbnRlbnQnKTsgICAgIFxuICAgICAgICB0aGUuZm9ybUVsZW1lbnQgPSBfZ2V0RWxlbWVudCgnZm9ybScpOyAgICAgICAgIFxuICAgICAgICB0aGUuaW5wdXRFbGVtZW50ID0gX2dldEVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRoZS5zcGlubmVyRWxlbWVudCA9IF9nZXRFbGVtZW50KCdzcGlubmVyJyk7XG4gICAgICAgIHRoZS5jbGVhckVsZW1lbnQgPSBfZ2V0RWxlbWVudCgnY2xlYXInKTtcbiAgICAgICAgdGhlLnRvZ2dsZUVsZW1lbnQgPSBfZ2V0RWxlbWVudCgndG9nZ2xlJyk7ICAgXG4gICAgICAgIHRoZS5zdWJtaXRFbGVtZW50ID0gX2dldEVsZW1lbnQoJ3N1Ym1pdCcpO1xuICAgICAgICB0aGUudG9vbGJhckVsZW1lbnQgPSBfZ2V0RWxlbWVudCgndG9vbGJhcicpOyAgIFxuXG4gICAgICAgIHRoZS5yZXN1bHRzRWxlbWVudCA9IF9nZXRFbGVtZW50KCdyZXN1bHRzJyk7XG4gICAgICAgIHRoZS5zdWdnZXN0aW9uRWxlbWVudCA9IF9nZXRFbGVtZW50KCdzdWdnZXN0aW9uJyk7IFxuICAgICAgICB0aGUuZW1wdHlFbGVtZW50ID0gX2dldEVsZW1lbnQoJ2VtcHR5Jyk7IFxuXG4gICAgICAgIC8vIFNldCBpbml0aWFsaXplZFxuICAgICAgICB0aGUuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEta3Qtc2VhcmNoJywgJ3RydWUnKTtcbiAgICAgICAgXG4gICAgICAgIC8vIExheW91dFxuICAgICAgICB0aGUubGF5b3V0ID0gX2dldE9wdGlvbignbGF5b3V0Jyk7XG4gICAgICAgIFxuICAgICAgICAvLyBNZW51XG4gICAgICAgIGlmICggdGhlLmxheW91dCA9PT0gJ21lbnUnICkge1xuICAgICAgICAgICAgdGhlLm1lbnVPYmplY3QgPSBuZXcgS1RNZW51KHRoZS5jb250ZW50RWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGUubWVudU9iamVjdCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGVcbiAgICAgICAgX3VwZGF0ZSgpO1xuXG4gICAgICAgIC8vIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgIF9oYW5kbGVycygpO1xuXG4gICAgICAgIC8vIEJpbmQgSW5zdGFuY2VcbiAgICAgICAgS1RVdGlsLmRhdGEodGhlLmVsZW1lbnQpLnNldCgnc2VhcmNoJywgdGhlKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGVyYVxuICAgIHZhciBfaGFuZGxlcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRm9jdXNcbiAgICAgICAgdGhlLmlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIF9mb2N1cyk7XG5cbiAgICAgICAgLy8gQmx1clxuICAgICAgICB0aGUuaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBfYmx1cik7XG5cbiAgICAgICAgLy8gS2V5cHJlc3NcbiAgICAgICAgaWYgKCBfZ2V0T3B0aW9uKCdrZXlwcmVzcycpID09PSB0cnVlICkge1xuICAgICAgICAgICAgdGhlLmlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIF9pbnB1dCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdWJtaXRcbiAgICAgICAgaWYgKCB0aGUuc3VibWl0RWxlbWVudCApIHtcbiAgICAgICAgICAgIHRoZS5zdWJtaXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3NlYXJjaCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbnRlclxuICAgICAgICBpZiAoIF9nZXRPcHRpb24oJ2VudGVyJykgPT09IHRydWUgKSB7XG4gICAgICAgICAgICB0aGUuaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgX2VudGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENsZWFyIFxuICAgICAgICBpZiAoIHRoZS5jbGVhckVsZW1lbnQgKSB7XG4gICAgICAgICAgICB0aGUuY2xlYXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2NsZWFyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1lbnVcbiAgICAgICAgaWYgKCB0aGUubWVudU9iamVjdCApIHtcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBtZW51XG4gICAgICAgICAgICBpZiAoIHRoZS50b2dnbGVFbGVtZW50ICkge1xuICAgICAgICAgICAgICAgIHRoZS50b2dnbGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3Nob3cpO1xuXG4gICAgICAgICAgICAgICAgdGhlLm1lbnVPYmplY3Qub24oJ2t0Lm1lbnUuZHJvcGRvd24uc2hvdycsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtUVXRpbC52aXNpYmxlKHRoZS50b2dnbGVFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhlLnRvZ2dsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGUudG9nZ2xlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICAgICAgdGhlLm1lbnVPYmplY3Qub24oJ2t0Lm1lbnUuZHJvcGRvd24uaGlkZScsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEtUVXRpbC52aXNpYmxlKHRoZS50b2dnbGVFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhlLnRvZ2dsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGUudG9nZ2xlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcblxuICAgICAgICAgICAgdGhlLm1lbnVPYmplY3Qub24oJ2t0Lm1lbnUuZHJvcGRvd24uc2hvd24nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGUuaW5wdXRFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBcblxuICAgICAgICAvLyBXaW5kb3cgcmVzaXplIGhhbmRsaW5nXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0aW1lcjtcblxuICAgICAgICAgICAgS1RVdGlsLnRocm90dGxlKHRpbWVyLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfdXBkYXRlKCk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGb2N1c1xuICAgIHZhciBfZm9jdXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhlLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcblxuICAgICAgICBpZiAoIF9nZXRPcHRpb24oJ3Nob3ctb24tZm9jdXMnKSA9PT0gdHJ1ZSB8fCB0aGUuaW5wdXRFbGVtZW50LnZhbHVlLmxlbmd0aCA+PSBtaW5MZW5ndGggKSB7XG4gICAgICAgICAgICBfc2hvdygpO1xuICAgICAgICB9ICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBCbHVyXG4gICAgdmFyIF9ibHVyID0gZnVuY3Rpb24oKSB7ICAgICAgICBcbiAgICAgICAgdGhlLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcbiAgICB9XG5cbiAgICAvLyBFbnRlciBcbiAgICB2YXIgX2VudGVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIga2V5ID0gZS5jaGFyQ29kZSB8fCBlLmtleUNvZGUgfHwgMDtcblxuICAgICAgICBpZiAoa2V5ID09IDEzKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIF9zZWFyY2goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIElucHV0XG4gICAgdmFyIF9pbnB1dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIF9nZXRPcHRpb24oJ21pbi1sZW5ndGgnKSApICB7XG4gICAgICAgICAgICB2YXIgbWluTGVuZ3RoID0gcGFyc2VJbnQoX2dldE9wdGlvbignbWluLWxlbmd0aCcpKTtcblxuICAgICAgICAgICAgaWYgKCB0aGUuaW5wdXRFbGVtZW50LnZhbHVlLmxlbmd0aCA+PSBtaW5MZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgX3NlYXJjaCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICggdGhlLmlucHV0RWxlbWVudC52YWx1ZS5sZW5ndGggPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgX2NsZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZWFyY2hcbiAgICB2YXIgX3NlYXJjaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhlLnByb2Nlc3NpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAvLyBTaG93IHNlYXJjaCBzcGlubmVyXG4gICAgICAgICAgICBpZiAodGhlLnNwaW5uZXJFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhlLnNwaW5uZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEhpZGUgc2VhcmNoIGNsZWFyIGJ1dHRvblxuICAgICAgICAgICAgaWYgKHRoZS5jbGVhckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGUuY2xlYXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEhpZGUgc2VhcmNoIHRvb2xiYXJcbiAgICAgICAgICAgIGlmICh0aGUudG9vbGJhckVsZW1lbnQgJiYgdGhlLmZvcm1FbGVtZW50LmNvbnRhaW5zKHRoZS50b29sYmFyRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGUudG9vbGJhckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRm9jdXMgaW5wdXRcbiAgICAgICAgICAgIHRoZS5pbnB1dEVsZW1lbnQuZm9jdXMoKTtcblxuICAgICAgICAgICAgdGhlLnByb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICAgICAgS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgJ2t0LnNlYXJjaC5wcm9jZXNzJywgdGhlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvbXBsZXRlXG4gICAgdmFyIF9jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhlLnNwaW5uZXJFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGUuc3Bpbm5lckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNob3cgc2VhcmNoIHRvb2xiYXJcbiAgICAgICAgaWYgKHRoZS5jbGVhckVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoZS5jbGVhckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdGhlLmlucHV0RWxlbWVudC52YWx1ZS5sZW5ndGggPT09IDAgKSB7XG4gICAgICAgICAgICBfY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZvY3VzIGlucHV0XG4gICAgICAgIHRoZS5pbnB1dEVsZW1lbnQuZm9jdXMoKTtcblxuICAgICAgICBfc2hvdygpO1xuXG4gICAgICAgIHRoZS5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQ2xlYXJcbiAgICB2YXIgX2NsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICggS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgJ2t0LnNlYXJjaC5jbGVhcicsIHRoZSkgPT09IGZhbHNlICkgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENsZWFyIGFuZCBmb2N1cyBpbnB1dFxuICAgICAgICB0aGUuaW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgICAgICAgdGhlLmlucHV0RWxlbWVudC5mb2N1cygpO1xuXG4gICAgICAgIC8vIEhpZGUgY2xlYXIgaWNvblxuICAgICAgICBpZiAodGhlLmNsZWFyRWxlbWVudCkge1xuICAgICAgICAgICAgdGhlLmNsZWFyRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2hvdyBzZWFyY2ggdG9vbGJhclxuICAgICAgICBpZiAodGhlLnRvb2xiYXJFbGVtZW50ICYmIHRoZS5mb3JtRWxlbWVudC5jb250YWlucyh0aGUudG9vbGJhckVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGUudG9vbGJhckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhpZGUgbWVudVxuICAgICAgICBpZiAoIF9nZXRPcHRpb24oJ3Nob3ctb24tZm9jdXMnKSA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICBfaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgJ2t0LnNlYXJjaC5jbGVhcmVkJywgdGhlKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGVcbiAgICB2YXIgX3VwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBIYW5kbGUgcmVzcG9uc2l2ZSBmb3JtXG4gICAgICAgIGlmICh0aGUubGF5b3V0ID09PSAnbWVudScpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zaXZlRm9ybU1vZGUgPSBfZ2V0UmVzcG9uc2l2ZUZvcm1Nb2RlKCk7XG5cbiAgICAgICAgICAgIGlmICggcmVzcG9uc2l2ZUZvcm1Nb2RlID09PSAnb24nICYmIHRoZS5jb250ZW50RWxlbWVudC5jb250YWlucyh0aGUuZm9ybUVsZW1lbnQpID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICB0aGUuY29udGVudEVsZW1lbnQucHJlcGVuZCh0aGUuZm9ybUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoZS5mb3JtRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCByZXNwb25zaXZlRm9ybU1vZGUgPT09ICdvZmYnICYmIHRoZS5jb250ZW50RWxlbWVudC5jb250YWlucyh0aGUuZm9ybUVsZW1lbnQpID09PSB0cnVlICkge1xuICAgICAgICAgICAgICAgIHRoZS5lbGVtZW50LnByZXBlbmQodGhlLmZvcm1FbGVtZW50KTtcbiAgICAgICAgICAgICAgICB0aGUuZm9ybUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTaG93IG1lbnVcbiAgICB2YXIgX3Nob3cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCB0aGUubWVudU9iamVjdCApIHtcbiAgICAgICAgICAgIF91cGRhdGUoKTtcblxuICAgICAgICAgICAgdGhlLm1lbnVPYmplY3Quc2hvdyh0aGUuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIaWRlIG1lbnVcbiAgICB2YXIgX2hpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCB0aGUubWVudU9iamVjdCApIHtcbiAgICAgICAgICAgIF91cGRhdGUoKTtcblxuICAgICAgICAgICAgdGhlLm1lbnVPYmplY3QuaGlkZSh0aGUuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXQgb3B0aW9uXG4gICAgdmFyIF9nZXRPcHRpb24gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGlmICggdGhlLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWt0LXNlYXJjaC0nICsgbmFtZSkgPT09IHRydWUgKSB7XG4gICAgICAgICAgICB2YXIgYXR0ciA9IHRoZS5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1rdC1zZWFyY2gtJyArIG5hbWUpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gS1RVdGlsLmdldFJlc3BvbnNpdmVWYWx1ZShhdHRyKTtcblxuICAgICAgICAgICAgaWYgKCB2YWx1ZSAhPT0gbnVsbCAmJiBTdHJpbmcodmFsdWUpID09PSAndHJ1ZScgKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICggdmFsdWUgIT09IG51bGwgJiYgU3RyaW5nKHZhbHVlKSA9PT0gJ2ZhbHNlJyApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9uTmFtZSA9IEtUVXRpbC5zbmFrZVRvQ2FtZWwobmFtZSk7XG5cbiAgICAgICAgICAgIGlmICggdGhlLm9wdGlvbnNbb3B0aW9uTmFtZV0gKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEtUVXRpbC5nZXRSZXNwb25zaXZlVmFsdWUodGhlLm9wdGlvbnNbb3B0aW9uTmFtZV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldCBlbGVtZW50XG4gICAgdmFyIF9nZXRFbGVtZW50ID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gdGhlLmVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3Qtc2VhcmNoLWVsZW1lbnQ9XCInICsgbmFtZSArICdcIl0nKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiByZXNwb25zaXZlIGZvcm0gbW9kZSBpcyBlbmFibGVkXG4gICAgdmFyIF9nZXRSZXNwb25zaXZlRm9ybU1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNpdmUgPSBfZ2V0T3B0aW9uKCdyZXNwb25zaXZlJyk7XG4gICAgICAgIHZhciB3aWR0aCA9IEtUVXRpbC5nZXRWaWV3UG9ydCgpLndpZHRoO1xuXG4gICAgICAgIGlmICghcmVzcG9uc2l2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYnJlYWtwb2ludCA9IEtUVXRpbC5nZXRCcmVha3BvaW50KHJlc3BvbnNpdmUpO1xuXG4gICAgICAgIGlmICghYnJlYWtwb2ludCApIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQgPSBwYXJzZUludChyZXNwb25zaXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aWR0aCA8IGJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIm9uXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJvZmZcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBLVFV0aWwuZGF0YSh0aGUuZWxlbWVudCkucmVtb3ZlKCdzZWFyY2gnKTtcbiAgICB9ICAgIFxuXG4gICAgLy8gQ29uc3RydWN0IGNsYXNzXG4gICAgX2NvbnN0cnVjdCgpO1xuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyAqKiBQdWJsaWMgQVBJICAqKiAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAvLyBQbHVnaW4gQVBJXG4gICAgdGhlLnNob3cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9zaG93KCk7XG4gICAgfVxuXG4gICAgdGhlLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3VwZGF0ZSgpO1xuICAgIH1cblxuICAgIHRoZS5zZWFyY2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9zZWFyY2goKTtcbiAgICB9XG5cbiAgICB0aGUuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHRoZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2NsZWFyKCk7XG4gICAgfVxuXG4gICAgdGhlLmlzUHJvY2Vzc2luZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhlLnByb2Nlc3Npbmc7XG4gICAgfVxuXG4gICAgdGhlLmdldFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGUuaW5wdXRFbGVtZW50LnZhbHVlO1xuICAgIH0gICAgXG5cbiAgICB0aGUuZ2V0TWVudSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhlLm1lbnVPYmplY3Q7XG4gICAgfVxuXG4gICAgdGhlLmdldEZvcm1FbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGUuZm9ybUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdGhlLmdldElucHV0RWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhlLmlucHV0RWxlbWVudDtcbiAgICB9XG5cbiAgICB0aGUuZ2V0Q29udGVudEVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoZS5jb250ZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICB0aGUuZ2V0RWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhlLmVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdGhlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLy8gRXZlbnQgQVBJXG4gICAgdGhlLm9uID0gZnVuY3Rpb24obmFtZSwgaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gS1RFdmVudEhhbmRsZXIub24odGhlLmVsZW1lbnQsIG5hbWUsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHRoZS5vbmUgPSBmdW5jdGlvbihuYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBLVEV2ZW50SGFuZGxlci5vbmUodGhlLmVsZW1lbnQsIG5hbWUsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHRoZS5vZmYgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHJldHVybiBLVEV2ZW50SGFuZGxlci5vZmYodGhlLmVsZW1lbnQsIG5hbWUpO1xuICAgIH1cbn07XG5cbi8vIFN0YXRpYyBtZXRob2RzXG5LVFNlYXJjaC5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICBpZiAoIGVsZW1lbnQgIT09IG51bGwgJiYgS1RVdGlsLmRhdGEoZWxlbWVudCkuaGFzKCdzZWFyY2gnKSApIHtcbiAgICAgICAgcmV0dXJuIEtUVXRpbC5kYXRhKGVsZW1lbnQpLmdldCgnc2VhcmNoJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG4vLyBXZWJwYWNrIHN1cHBvcnRcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBLVFNlYXJjaDtcbn1cbiJdLCJuYW1lcyI6WyJLVFNlYXJjaCIsImVsZW1lbnQiLCJvcHRpb25zIiwidGhlIiwiZGVmYXVsdE9wdGlvbnMiLCJtaW5MZW5ndGgiLCJrZXlwcmVzcyIsImVudGVyIiwibGF5b3V0IiwicmVzcG9uc2l2ZSIsInNob3dPbkZvY3VzIiwiX2NvbnN0cnVjdCIsIktUVXRpbCIsImRhdGEiLCJoYXMiLCJnZXQiLCJfaW5pdCIsImRlZXBFeHRlbmQiLCJwcm9jZXNzaW5nIiwiY29udGVudEVsZW1lbnQiLCJfZ2V0RWxlbWVudCIsImZvcm1FbGVtZW50IiwiaW5wdXRFbGVtZW50Iiwic3Bpbm5lckVsZW1lbnQiLCJjbGVhckVsZW1lbnQiLCJ0b2dnbGVFbGVtZW50Iiwic3VibWl0RWxlbWVudCIsInRvb2xiYXJFbGVtZW50IiwicmVzdWx0c0VsZW1lbnQiLCJzdWdnZXN0aW9uRWxlbWVudCIsImVtcHR5RWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIl9nZXRPcHRpb24iLCJtZW51T2JqZWN0IiwiS1RNZW51IiwiX3VwZGF0ZSIsIl9oYW5kbGVycyIsInNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfZm9jdXMiLCJfYmx1ciIsIl9pbnB1dCIsIl9zZWFyY2giLCJfZW50ZXIiLCJfY2xlYXIiLCJfc2hvdyIsIm9uIiwiaXRlbSIsInZpc2libGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJmb2N1cyIsIndpbmRvdyIsInRpbWVyIiwidGhyb3R0bGUiLCJ2YWx1ZSIsImxlbmd0aCIsImUiLCJrZXkiLCJjaGFyQ29kZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcnNlSW50IiwiY29udGFpbnMiLCJLVEV2ZW50SGFuZGxlciIsInRyaWdnZXIiLCJfY29tcGxldGUiLCJfaGlkZSIsInJlc3BvbnNpdmVGb3JtTW9kZSIsIl9nZXRSZXNwb25zaXZlRm9ybU1vZGUiLCJwcmVwZW5kIiwic2hvdyIsImhpZGUiLCJuYW1lIiwiaGFzQXR0cmlidXRlIiwiYXR0ciIsImdldEF0dHJpYnV0ZSIsImdldFJlc3BvbnNpdmVWYWx1ZSIsIlN0cmluZyIsIm9wdGlvbk5hbWUiLCJzbmFrZVRvQ2FtZWwiLCJxdWVyeVNlbGVjdG9yIiwid2lkdGgiLCJnZXRWaWV3UG9ydCIsImJyZWFrcG9pbnQiLCJnZXRCcmVha3BvaW50IiwiX2Rlc3Ryb3kiLCJ1cGRhdGUiLCJzZWFyY2giLCJjb21wbGV0ZSIsImNsZWFyIiwiaXNQcm9jZXNzaW5nIiwiZ2V0UXVlcnkiLCJnZXRNZW51IiwiZ2V0Rm9ybUVsZW1lbnQiLCJnZXRJbnB1dEVsZW1lbnQiLCJnZXRDb250ZW50RWxlbWVudCIsImdldEVsZW1lbnQiLCJkZXN0cm95IiwiaGFuZGxlciIsIm9uZSIsIm9mZiIsImdldEluc3RhbmNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/components/search.js\n");
>>>>>>> Stashed changes

            KTUtil.addEvent(element, event, window.KTUtilDelegatedEventHandlers[eventId]);

            return eventId;
        },

<<<<<<< Updated upstream
        off: function(element, event, eventId) {
            if (!element || !window.KTUtilDelegatedEventHandlers[eventId]) {
                return;
            }
=======
"use strict";
eval(" // Class definition\n\nvar KTStepper = function KTStepper(element, options) {\n  //////////////////////////////\n  // ** Private variables  ** //\n  //////////////////////////////\n  var the = this;\n  var body = document.getElementsByTagName(\"BODY\")[0];\n\n  if (typeof element === \"undefined\" || element === null) {\n    return;\n  } // Default Options\n\n\n  var defaultOptions = {\n    startIndex: 1,\n    animation: false,\n    animationSpeed: '0.3s',\n    animationNextClass: 'animate__animated animate__slideInRight animate__fast',\n    animationPreviousClass: 'animate__animated animate__slideInLeft animate__fast'\n  }; ////////////////////////////\n  // ** Private methods  ** //\n  ////////////////////////////\n\n  var _construct = function _construct() {\n    if (KTUtil.data(element).has('stepper') === true) {\n      the = KTUtil.data(element).get('stepper');\n    } else {\n      _init();\n    }\n  };\n\n  var _init = function _init() {\n    the.options = KTUtil.deepExtend({}, defaultOptions, options);\n    the.uid = KTUtil.getUniqueId('stepper');\n    the.element = element; // Set initialized\n\n    the.element.setAttribute('data-kt-stepper', 'true'); // Elements\n\n    the.steps = KTUtil.findAll(the.element, '[data-kt-stepper-element=\"nav\"]');\n    the.btnNext = KTUtil.find(the.element, '[data-kt-stepper-action=\"next\"]');\n    the.btnPrevious = KTUtil.find(the.element, '[data-kt-stepper-action=\"previous\"]');\n    the.btnSubmit = KTUtil.find(the.element, '[data-kt-stepper-action=\"submit\"]'); // Variables\n\n    the.totalStepsNumber = the.steps.length;\n    the.passedStepIndex = 0;\n    the.currentStepIndex = 1;\n    the.clickedStepIndex = 0; // Set Current Step\n\n    if (the.options.startIndex > 1) {\n      _goTo(the.options.startIndex);\n    } // Event Handlers\n\n\n    KTUtil.addEvent(the.btnNext, 'click', function (e) {\n      e.preventDefault();\n      KTEventHandler.trigger(the.element, 'kt.stepper.next', the);\n    });\n    KTUtil.addEvent(the.btnPrevious, 'click', function (e) {\n      e.preventDefault();\n      KTEventHandler.trigger(the.element, 'kt.stepper.previous', the);\n    });\n    KTUtil.on(the.element, '[data-kt-stepper-action=\"step\"]', 'click', function (e) {\n      e.preventDefault();\n\n      if (the.steps && the.steps.length > 0) {\n        for (var i = 0, len = the.steps.length; i < len; i++) {\n          if (the.steps[i] === this) {\n            the.clickedStepIndex = i + 1;\n            KTEventHandler.trigger(the.element, 'kt.stepper.click', the);\n            return;\n          }\n        }\n      }\n    }); // Bind Instance\n\n    KTUtil.data(the.element).set('stepper', the);\n  };\n\n  var _goTo = function _goTo(index) {\n    // Trigger \"change\" event\n    KTEventHandler.trigger(the.element, 'kt.stepper.change', the); // Skip if this step is already shown\n\n    if (index === the.currentStepIndex || index > the.totalStepsNumber || index < 0) {\n      return;\n    } // Validate step number\n\n\n    index = parseInt(index); // Set current step\n\n    the.passedStepIndex = the.currentStepIndex;\n    the.currentStepIndex = index; // Refresh elements\n\n    _refreshUI(); // Trigger \"changed\" event\n\n\n    KTEventHandler.trigger(the.element, 'kt.stepper.changed', the);\n    return the;\n  };\n\n  var _goNext = function _goNext() {\n    return _goTo(_getNextStepIndex());\n  };\n\n  var _goPrevious = function _goPrevious() {\n    return _goTo(_getPreviousStepIndex());\n  };\n\n  var _goLast = function _goLast() {\n    return _goTo(_getLastStepIndex());\n  };\n\n  var _goFirst = function _goFirst() {\n    return _goTo(_getFirstStepIndex());\n  };\n\n  var _refreshUI = function _refreshUI() {\n    var state = '';\n\n    if (_isLastStep()) {\n      state = 'last';\n    } else if (_isFirstStep()) {\n      state = 'first';\n    } else {\n      state = 'between';\n    } // Set state class\n\n\n    KTUtil.removeClass(the.element, 'last');\n    KTUtil.removeClass(the.element, 'first');\n    KTUtil.removeClass(the.element, 'between');\n    KTUtil.addClass(the.element, state); // Step Items\n\n    var elements = KTUtil.findAll(the.element, '[data-kt-stepper-element=\"nav\"], [data-kt-stepper-element=\"content\"], [data-kt-stepper-element=\"info\"]');\n\n    if (elements && elements.length > 0) {\n      for (var i = 0, len = elements.length; i < len; i++) {\n        var element = elements[i];\n        var index = KTUtil.index(element) + 1;\n        KTUtil.removeClass(element, 'current');\n        KTUtil.removeClass(element, 'completed');\n        KTUtil.removeClass(element, 'pending');\n\n        if (index == the.currentStepIndex) {\n          KTUtil.addClass(element, 'current');\n\n          if (the.options.animation !== false && element.getAttribute('data-kt-stepper-element') == 'content') {\n            KTUtil.css(element, 'animationDuration', the.options.animationSpeed);\n            var animation = _getStepDirection(the.passedStepIndex) === 'previous' ? the.options.animationPreviousClass : the.options.animationNextClass;\n            KTUtil.animateClass(element, animation);\n          }\n        } else {\n          if (index < the.currentStepIndex) {\n            KTUtil.addClass(element, 'completed');\n          } else {\n            KTUtil.addClass(element, 'pending');\n          }\n        }\n      }\n    }\n  };\n\n  var _isLastStep = function _isLastStep() {\n    return the.currentStepIndex === the.totalStepsNumber;\n  };\n\n  var _isFirstStep = function _isFirstStep() {\n    return the.currentStepIndex === 1;\n  };\n\n  var _isBetweenStep = function _isBetweenStep() {\n    return _isLastStep() === false && _isFirstStep() === false;\n  };\n\n  var _getNextStepIndex = function _getNextStepIndex() {\n    if (the.totalStepsNumber >= the.currentStepIndex + 1) {\n      return the.currentStepIndex + 1;\n    } else {\n      return the.totalStepsNumber;\n    }\n  };\n\n  var _getPreviousStepIndex = function _getPreviousStepIndex() {\n    if (the.currentStepIndex - 1 > 1) {\n      return the.currentStepIndex - 1;\n    } else {\n      return 1;\n    }\n  };\n\n  var _getFirstStepIndex = function _getFirstStepIndex() {\n    return 1;\n  };\n\n  var _getLastStepIndex = function _getLastStepIndex() {\n    return the.totalStepsNumber;\n  };\n\n  var _getTotalStepsNumber = function _getTotalStepsNumber() {\n    return the.totalStepsNumber;\n  };\n\n  var _getStepDirection = function _getStepDirection(index) {\n    if (index > the.currentStepIndex) {\n      return 'next';\n    } else {\n      return 'previous';\n    }\n  };\n\n  var _getStepContent = function _getStepContent(index) {\n    var content = KTUtil.findAll(the.element, '[data-kt-stepper-element=\"content\"]');\n\n    if (content[index - 1]) {\n      return content[index - 1];\n    } else {\n      return false;\n    }\n  };\n\n  var _destroy = function _destroy() {\n    KTUtil.data(the.element).remove('stepper');\n  }; // Construct Class\n\n\n  _construct(); ///////////////////////\n  // ** Public API  ** //\n  ///////////////////////\n  // Plugin API\n\n\n  the.getElement = function (index) {\n    return the.element;\n  };\n\n  the.goTo = function (index) {\n    return _goTo(index);\n  };\n\n  the.goPrevious = function () {\n    return _goPrevious();\n  };\n\n  the.goNext = function () {\n    return _goNext();\n  };\n\n  the.goFirst = function () {\n    return _goFirst();\n  };\n\n  the.goLast = function () {\n    return _goLast();\n  };\n\n  the.getCurrentStepIndex = function () {\n    return the.currentStepIndex;\n  };\n\n  the.getNextStepIndex = function () {\n    return the.nextStepIndex;\n  };\n\n  the.getPassedStepIndex = function () {\n    return the.passedStepIndex;\n  };\n\n  the.getClickedStepIndex = function () {\n    return the.clickedStepIndex;\n  };\n\n  the.getPreviousStepIndex = function () {\n    return the.PreviousStepIndex;\n  };\n\n  the.destroy = function () {\n    return _destroy();\n  }; // Event API\n\n\n  the.on = function (name, handler) {\n    return KTEventHandler.on(the.element, name, handler);\n  };\n\n  the.one = function (name, handler) {\n    return KTEventHandler.one(the.element, name, handler);\n  };\n\n  the.off = function (name) {\n    return KTEventHandler.off(the.element, name);\n  };\n\n  the.trigger = function (name, event) {\n    return KTEventHandler.trigger(the.element, name, event, the, event);\n  };\n}; // Static methods\n\n\nKTStepper.getInstance = function (element) {\n  if (element !== null && KTUtil.data(element).has('stepper')) {\n    return KTUtil.data(element).get('stepper');\n  } else {\n    return null;\n  }\n}; // Webpack support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTStepper;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvc3RlcHBlci5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFTQyxPQUFULEVBQWtCQyxPQUFsQixFQUEyQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxNQUFJQyxHQUFHLEdBQUcsSUFBVjtBQUNBLE1BQUlDLElBQUksR0FBR0MsUUFBUSxDQUFDQyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxDQUFYOztBQUVBLE1BQUssT0FBT0wsT0FBUCxLQUFtQixXQUFuQixJQUFrQ0EsT0FBTyxLQUFLLElBQW5ELEVBQTBEO0FBQ3REO0FBQ0gsR0FUc0MsQ0FXdkM7OztBQUNBLE1BQUlNLGNBQWMsR0FBRztBQUNqQkMsSUFBQUEsVUFBVSxFQUFFLENBREs7QUFFakJDLElBQUFBLFNBQVMsRUFBRSxLQUZNO0FBR2pCQyxJQUFBQSxjQUFjLEVBQUUsTUFIQztBQUlqQkMsSUFBQUEsa0JBQWtCLEVBQUUsdURBSkg7QUFLakJDLElBQUFBLHNCQUFzQixFQUFFO0FBTFAsR0FBckIsQ0FadUMsQ0FvQnZDO0FBQ0E7QUFDQTs7QUFFQSxNQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFXO0FBQ3hCLFFBQUtDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZZCxPQUFaLEVBQXFCZSxHQUFyQixDQUF5QixTQUF6QixNQUF3QyxJQUE3QyxFQUFvRDtBQUNoRGIsTUFBQUEsR0FBRyxHQUFHVyxNQUFNLENBQUNDLElBQVAsQ0FBWWQsT0FBWixFQUFxQmdCLEdBQXJCLENBQXlCLFNBQXpCLENBQU47QUFDSCxLQUZELE1BRU87QUFDSEMsTUFBQUEsS0FBSztBQUNSO0FBQ0osR0FORDs7QUFRQSxNQUFJQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFXO0FBQ25CZixJQUFBQSxHQUFHLENBQUNELE9BQUosR0FBY1ksTUFBTSxDQUFDSyxVQUFQLENBQWtCLEVBQWxCLEVBQXNCWixjQUF0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QUFrQjtBQUN0QyxNQUFLQSxPQUFPLEtBQUssSUFBWixJQUFvQmEsTUFBTSxDQUFDQyxJQUFQLENBQVlkLE9BQVosRUFBcUJlLEdBQXJCLENBQXlCLFNBQXpCLENBQXpCLEVBQStEO0FBQzNELFdBQU9GLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZZCxPQUFaLEVBQXFCZ0IsR0FBckIsQ0FBeUIsU0FBekIsQ0FBUDtBQUNILEdBRkQsTUFFTztBQUNILFdBQU8sSUFBUDtBQUNIO0FBQ0osQ0FORCxDLENBUUE7OztBQUNBLElBQUksU0FBaUMsT0FBTzBFLE1BQU0sQ0FBQ0MsT0FBZCxLQUEwQixXQUEvRCxFQUE0RTtBQUN4RUQsRUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCNUYsU0FBakI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY29tcG9uZW50cy9zdGVwcGVyLmpzPzI0NTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVFN0ZXBwZXIgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gKiogUHJpdmF0ZSB2YXJpYWJsZXMgICoqIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgdmFyIHRoZSA9IHRoaXM7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkJPRFlcIilbMF07XG5cbiAgICBpZiAoIHR5cGVvZiBlbGVtZW50ID09PSBcInVuZGVmaW5lZFwiIHx8IGVsZW1lbnQgPT09IG51bGwgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IE9wdGlvbnNcbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgIHN0YXJ0SW5kZXg6IDEsXG4gICAgICAgIGFuaW1hdGlvbjogZmFsc2UsXG4gICAgICAgIGFuaW1hdGlvblNwZWVkOiAnMC4zcycsXG4gICAgICAgIGFuaW1hdGlvbk5leHRDbGFzczogJ2FuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX3NsaWRlSW5SaWdodCBhbmltYXRlX19mYXN0JyxcbiAgICAgICAgYW5pbWF0aW9uUHJldmlvdXNDbGFzczogJ2FuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX3NsaWRlSW5MZWZ0IGFuaW1hdGVfX2Zhc3QnXG4gICAgfTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyAqKiBQcml2YXRlIG1ldGhvZHMgICoqIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgdmFyIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCBLVFV0aWwuZGF0YShlbGVtZW50KS5oYXMoJ3N0ZXBwZXInKSA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIHRoZSA9IEtUVXRpbC5kYXRhKGVsZW1lbnQpLmdldCgnc3RlcHBlcicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2luaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGUub3B0aW9ucyA9IEtUVXRpbC5kZWVwRXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoZS51aWQgPSBLVFV0aWwuZ2V0VW5pcXVlSWQoJ3N0ZXBwZXInKTtcblxuICAgICAgICB0aGUuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgLy8gU2V0IGluaXRpYWxpemVkXG4gICAgICAgIHRoZS5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1rdC1zdGVwcGVyJywgJ3RydWUnKTtcblxuICAgICAgICAvLyBFbGVtZW50c1xuICAgICAgICB0aGUuc3RlcHMgPSBLVFV0aWwuZmluZEFsbCh0aGUuZWxlbWVudCwgJ1tkYXRhLWt0LXN0ZXBwZXItZWxlbWVudD1cIm5hdlwiXScpO1xuICAgICAgICB0aGUuYnRuTmV4dCA9IEtUVXRpbC5maW5kKHRoZS5lbGVtZW50LCAnW2RhdGEta3Qtc3RlcHBlci1hY3Rpb249XCJuZXh0XCJdJyk7XG4gICAgICAgIHRoZS5idG5QcmV2aW91cyA9IEtUVXRpbC5maW5kKHRoZS5lbGVtZW50LCAnW2RhdGEta3Qtc3RlcHBlci1hY3Rpb249XCJwcmV2aW91c1wiXScpO1xuICAgICAgICB0aGUuYnRuU3VibWl0ID0gS1RVdGlsLmZpbmQodGhlLmVsZW1lbnQsICdbZGF0YS1rdC1zdGVwcGVyLWFjdGlvbj1cInN1Ym1pdFwiXScpO1xuXG4gICAgICAgIC8vIFZhcmlhYmxlc1xuICAgICAgICB0aGUudG90YWxTdGVwc051bWJlciA9IHRoZS5zdGVwcy5sZW5ndGg7XG4gICAgICAgIHRoZS5wYXNzZWRTdGVwSW5kZXggPSAwO1xuICAgICAgICB0aGUuY3VycmVudFN0ZXBJbmRleCA9IDE7XG4gICAgICAgIHRoZS5jbGlja2VkU3RlcEluZGV4ID0gMDtcblxuICAgICAgICAvLyBTZXQgQ3VycmVudCBTdGVwXG4gICAgICAgIGlmICggdGhlLm9wdGlvbnMuc3RhcnRJbmRleCA+IDEgKSB7XG4gICAgICAgICAgICBfZ29Ubyh0aGUub3B0aW9ucy5zdGFydEluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgIEtUVXRpbC5hZGRFdmVudCh0aGUuYnRuTmV4dCwgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3Quc3RlcHBlci5uZXh0JywgdGhlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgS1RVdGlsLmFkZEV2ZW50KHRoZS5idG5QcmV2aW91cywgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3Quc3RlcHBlci5wcmV2aW91cycsIHRoZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIEtUVXRpbC5vbih0aGUuZWxlbWVudCwgJ1tkYXRhLWt0LXN0ZXBwZXItYWN0aW9uPVwic3RlcFwiXScsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCB0aGUuc3RlcHMgJiYgdGhlLnN0ZXBzLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoZS5zdGVwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoZS5zdGVwc1tpXSA9PT0gdGhpcyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZS5jbGlja2VkU3RlcEluZGV4ID0gaSArIDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEtURXZlbnRIYW5kbGVyLnRyaWdnZXIodGhlLmVsZW1lbnQsICdrdC5zdGVwcGVyLmNsaWNrJywgdGhlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBCaW5kIEluc3RhbmNlXG4gICAgICAgIEtUVXRpbC5kYXRhKHRoZS5lbGVtZW50KS5zZXQoJ3N0ZXBwZXInLCB0aGUpO1xuICAgIH1cblxuICAgIHZhciBfZ29UbyA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgIC8vIFRyaWdnZXIgXCJjaGFuZ2VcIiBldmVudFxuICAgICAgICBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3Quc3RlcHBlci5jaGFuZ2UnLCB0aGUpO1xuXG4gICAgICAgIC8vIFNraXAgaWYgdGhpcyBzdGVwIGlzIGFscmVhZHkgc2hvd25cbiAgICAgICAgaWYgKCBpbmRleCA9PT0gdGhlLmN1cnJlbnRTdGVwSW5kZXggfHwgaW5kZXggPiB0aGUudG90YWxTdGVwc051bWJlciB8fCBpbmRleCA8IDAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBWYWxpZGF0ZSBzdGVwIG51bWJlclxuICAgICAgICBpbmRleCA9IHBhcnNlSW50KGluZGV4KTtcblxuICAgICAgICAvLyBTZXQgY3VycmVudCBzdGVwXG4gICAgICAgIHRoZS5wYXNzZWRTdGVwSW5kZXggPSB0aGUuY3VycmVudFN0ZXBJbmRleDtcbiAgICAgICAgdGhlLmN1cnJlbnRTdGVwSW5kZXggPSBpbmRleDtcblxuICAgICAgICAvLyBSZWZyZXNoIGVsZW1lbnRzXG4gICAgICAgIF9yZWZyZXNoVUkoKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIFwiY2hhbmdlZFwiIGV2ZW50XG4gICAgICAgIEtURXZlbnRIYW5kbGVyLnRyaWdnZXIodGhlLmVsZW1lbnQsICdrdC5zdGVwcGVyLmNoYW5nZWQnLCB0aGUpO1xuXG4gICAgICAgIHJldHVybiB0aGU7XG4gICAgfVxuXG4gICAgdmFyIF9nb05leHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9nb1RvKCBfZ2V0TmV4dFN0ZXBJbmRleCgpICk7XG4gICAgfVxuXG4gICAgdmFyIF9nb1ByZXZpb3VzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZ29UbyggX2dldFByZXZpb3VzU3RlcEluZGV4KCkgKTtcbiAgICB9XG5cbiAgICB2YXIgX2dvTGFzdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2dvVG8oIF9nZXRMYXN0U3RlcEluZGV4KCkgKTtcbiAgICB9XG5cbiAgICB2YXIgX2dvRmlyc3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9nb1RvKCBfZ2V0Rmlyc3RTdGVwSW5kZXgoKSApO1xuICAgIH1cblxuICAgIHZhciBfcmVmcmVzaFVJID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9ICcnO1xuXG4gICAgICAgIGlmICggX2lzTGFzdFN0ZXAoKSApIHtcbiAgICAgICAgICAgIHN0YXRlID0gJ2xhc3QnO1xuICAgICAgICB9IGVsc2UgaWYgKCBfaXNGaXJzdFN0ZXAoKSApIHtcbiAgICAgICAgICAgIHN0YXRlID0gJ2ZpcnN0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlID0gJ2JldHdlZW4nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHN0YXRlIGNsYXNzXG4gICAgICAgIEtUVXRpbC5yZW1vdmVDbGFzcyh0aGUuZWxlbWVudCwgJ2xhc3QnKTtcbiAgICAgICAgS1RVdGlsLnJlbW92ZUNsYXNzKHRoZS5lbGVtZW50LCAnZmlyc3QnKTtcbiAgICAgICAgS1RVdGlsLnJlbW92ZUNsYXNzKHRoZS5lbGVtZW50LCAnYmV0d2VlbicpO1xuXG4gICAgICAgIEtUVXRpbC5hZGRDbGFzcyh0aGUuZWxlbWVudCwgc3RhdGUpO1xuXG4gICAgICAgIC8vIFN0ZXAgSXRlbXNcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gS1RVdGlsLmZpbmRBbGwodGhlLmVsZW1lbnQsICdbZGF0YS1rdC1zdGVwcGVyLWVsZW1lbnQ9XCJuYXZcIl0sIFtkYXRhLWt0LXN0ZXBwZXItZWxlbWVudD1cImNvbnRlbnRcIl0sIFtkYXRhLWt0LXN0ZXBwZXItZWxlbWVudD1cImluZm9cIl0nKTtcblxuICAgICAgICBpZiAoIGVsZW1lbnRzICYmIGVsZW1lbnRzLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IEtUVXRpbC5pbmRleChlbGVtZW50KSArIDE7XG5cbiAgICAgICAgICAgICAgICBLVFV0aWwucmVtb3ZlQ2xhc3MoZWxlbWVudCwgJ2N1cnJlbnQnKTtcbiAgICAgICAgICAgICAgICBLVFV0aWwucmVtb3ZlQ2xhc3MoZWxlbWVudCwgJ2NvbXBsZXRlZCcpO1xuICAgICAgICAgICAgICAgIEtUVXRpbC5yZW1vdmVDbGFzcyhlbGVtZW50LCAncGVuZGluZycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBpbmRleCA9PSB0aGUuY3VycmVudFN0ZXBJbmRleCApIHtcbiAgICAgICAgICAgICAgICAgICAgS1RVdGlsLmFkZENsYXNzKGVsZW1lbnQsICdjdXJyZW50Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGUub3B0aW9ucy5hbmltYXRpb24gIT09IGZhbHNlICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWt0LXN0ZXBwZXItZWxlbWVudCcpID09ICdjb250ZW50JyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEtUVXRpbC5jc3MoZWxlbWVudCwgJ2FuaW1hdGlvbkR1cmF0aW9uJywgdGhlLm9wdGlvbnMuYW5pbWF0aW9uU3BlZWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gX2dldFN0ZXBEaXJlY3Rpb24odGhlLnBhc3NlZFN0ZXBJbmRleCkgPT09ICdwcmV2aW91cycgPyAgdGhlLm9wdGlvbnMuYW5pbWF0aW9uUHJldmlvdXNDbGFzcyA6IHRoZS5vcHRpb25zLmFuaW1hdGlvbk5leHRDbGFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIEtUVXRpbC5hbmltYXRlQ2xhc3MoZWxlbWVudCwgYW5pbWF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggaW5kZXggPCB0aGUuY3VycmVudFN0ZXBJbmRleCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEtUVXRpbC5hZGRDbGFzcyhlbGVtZW50LCAnY29tcGxldGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBLVFV0aWwuYWRkQ2xhc3MoZWxlbWVudCwgJ3BlbmRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfaXNMYXN0U3RlcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhlLmN1cnJlbnRTdGVwSW5kZXggPT09IHRoZS50b3RhbFN0ZXBzTnVtYmVyO1xuICAgIH1cblxuICAgIHZhciBfaXNGaXJzdFN0ZXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoZS5jdXJyZW50U3RlcEluZGV4ID09PSAxO1xuICAgIH1cblxuICAgIHZhciBfaXNCZXR3ZWVuU3RlcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2lzTGFzdFN0ZXAoKSA9PT0gZmFsc2UgJiYgX2lzRmlyc3RTdGVwKCkgPT09IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBfZ2V0TmV4dFN0ZXBJbmRleCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIHRoZS50b3RhbFN0ZXBzTnVtYmVyID49ICggdGhlLmN1cnJlbnRTdGVwSW5kZXggKyAxICkgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhlLmN1cnJlbnRTdGVwSW5kZXggKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoZS50b3RhbFN0ZXBzTnVtYmVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9nZXRQcmV2aW91c1N0ZXBJbmRleCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoICggdGhlLmN1cnJlbnRTdGVwSW5kZXggLSAxICkgPiAxICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoZS5jdXJyZW50U3RlcEluZGV4IC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9nZXRGaXJzdFN0ZXBJbmRleCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHZhciBfZ2V0TGFzdFN0ZXBJbmRleCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhlLnRvdGFsU3RlcHNOdW1iZXI7XG4gICAgfVxuXG4gICAgdmFyIF9nZXRUb3RhbFN0ZXBzTnVtYmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGUudG90YWxTdGVwc051bWJlcjtcbiAgICB9XG5cbiAgICB2YXIgX2dldFN0ZXBEaXJlY3Rpb24gPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICBpZiAoIGluZGV4ID4gdGhlLmN1cnJlbnRTdGVwSW5kZXggKSB7XG4gICAgICAgICAgICByZXR1cm4gJ25leHQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdwcmV2aW91cyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX2dldFN0ZXBDb250ZW50ID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBLVFV0aWwuZmluZEFsbCh0aGUuZWxlbWVudCwgJ1tkYXRhLWt0LXN0ZXBwZXItZWxlbWVudD1cImNvbnRlbnRcIl0nKTtcblxuICAgICAgICBpZiAoIGNvbnRlbnRbaW5kZXgtMV0gKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGVudFtpbmRleC0xXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBLVFV0aWwuZGF0YSh0aGUuZWxlbWVudCkucmVtb3ZlKCdzdGVwcGVyJyk7XG4gICAgfVxuXG4gICAgLy8gQ29uc3RydWN0IENsYXNzXG4gICAgX2NvbnN0cnVjdCgpO1xuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyAqKiBQdWJsaWMgQVBJICAqKiAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAvLyBQbHVnaW4gQVBJXG4gICAgdGhlLmdldEVsZW1lbnQgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhlLmVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdGhlLmdvVG8gPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICByZXR1cm4gX2dvVG8oaW5kZXgpO1xuICAgIH1cblxuICAgIHRoZS5nb1ByZXZpb3VzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZ29QcmV2aW91cygpO1xuICAgIH1cblxuICAgIHRoZS5nb05leHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9nb05leHQoKTtcbiAgICB9XG5cbiAgICB0aGUuZ29GaXJzdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2dvRmlyc3QoKTtcbiAgICB9XG5cbiAgICB0aGUuZ29MYXN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZ29MYXN0KCk7XG4gICAgfVxuXG4gICAgdGhlLmdldEN1cnJlbnRTdGVwSW5kZXggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoZS5jdXJyZW50U3RlcEluZGV4O1xuICAgIH1cblxuICAgIHRoZS5nZXROZXh0U3RlcEluZGV4ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGUubmV4dFN0ZXBJbmRleDtcbiAgICB9XG5cbiAgICB0aGUuZ2V0UGFzc2VkU3RlcEluZGV4ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGUucGFzc2VkU3RlcEluZGV4O1xuICAgIH1cblxuICAgIHRoZS5nZXRDbGlja2VkU3RlcEluZGV4ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGUuY2xpY2tlZFN0ZXBJbmRleDtcbiAgICB9XG5cbiAgICB0aGUuZ2V0UHJldmlvdXNTdGVwSW5kZXggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoZS5QcmV2aW91c1N0ZXBJbmRleDtcbiAgICB9XG5cbiAgICB0aGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2Rlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvLyBFdmVudCBBUElcbiAgICB0aGUub24gPSBmdW5jdGlvbihuYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBLVEV2ZW50SGFuZGxlci5vbih0aGUuZWxlbWVudCwgbmFtZSwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgdGhlLm9uZSA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIEtURXZlbnRIYW5kbGVyLm9uZSh0aGUuZWxlbWVudCwgbmFtZSwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgdGhlLm9mZiA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIEtURXZlbnRIYW5kbGVyLm9mZih0aGUuZWxlbWVudCwgbmFtZSk7XG4gICAgfVxuXG4gICAgdGhlLnRyaWdnZXIgPSBmdW5jdGlvbihuYW1lLCBldmVudCkge1xuICAgICAgICByZXR1cm4gS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgbmFtZSwgZXZlbnQsIHRoZSwgZXZlbnQpO1xuICAgIH1cbn07XG5cbi8vIFN0YXRpYyBtZXRob2RzXG5LVFN0ZXBwZXIuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgaWYgKCBlbGVtZW50ICE9PSBudWxsICYmIEtUVXRpbC5kYXRhKGVsZW1lbnQpLmhhcygnc3RlcHBlcicpICkge1xuICAgICAgICByZXR1cm4gS1RVdGlsLmRhdGEoZWxlbWVudCkuZ2V0KCdzdGVwcGVyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG4vLyBXZWJwYWNrIHN1cHBvcnRcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBLVFN0ZXBwZXI7XG59XG4iXSwibmFtZXMiOlsiS1RTdGVwcGVyIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJ0aGUiLCJib2R5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImRlZmF1bHRPcHRpb25zIiwic3RhcnRJbmRleCIsImFuaW1hdGlvbiIsImFuaW1hdGlvblNwZWVkIiwiYW5pbWF0aW9uTmV4dENsYXNzIiwiYW5pbWF0aW9uUHJldmlvdXNDbGFzcyIsIl9jb25zdHJ1Y3QiLCJLVFV0aWwiLCJkYXRhIiwiaGFzIiwiZ2V0IiwiX2luaXQiLCJkZWVwRXh0ZW5kIiwidWlkIiwiZ2V0VW5pcXVlSWQiLCJzZXRBdHRyaWJ1dGUiLCJzdGVwcyIsImZpbmRBbGwiLCJidG5OZXh0IiwiZmluZCIsImJ0blByZXZpb3VzIiwiYnRuU3VibWl0IiwidG90YWxTdGVwc051bWJlciIsImxlbmd0aCIsInBhc3NlZFN0ZXBJbmRleCIsImN1cnJlbnRTdGVwSW5kZXgiLCJjbGlja2VkU3RlcEluZGV4IiwiX2dvVG8iLCJhZGRFdmVudCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIktURXZlbnRIYW5kbGVyIiwidHJpZ2dlciIsIm9uIiwiaSIsImxlbiIsInNldCIsImluZGV4IiwicGFyc2VJbnQiLCJfcmVmcmVzaFVJIiwiX2dvTmV4dCIsIl9nZXROZXh0U3RlcEluZGV4IiwiX2dvUHJldmlvdXMiLCJfZ2V0UHJldmlvdXNTdGVwSW5kZXgiLCJfZ29MYXN0IiwiX2dldExhc3RTdGVwSW5kZXgiLCJfZ29GaXJzdCIsIl9nZXRGaXJzdFN0ZXBJbmRleCIsInN0YXRlIiwiX2lzTGFzdFN0ZXAiLCJfaXNGaXJzdFN0ZXAiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZWxlbWVudHMiLCJnZXRBdHRyaWJ1dGUiLCJjc3MiLCJfZ2V0U3RlcERpcmVjdGlvbiIsImFuaW1hdGVDbGFzcyIsIl9pc0JldHdlZW5TdGVwIiwiX2dldFRvdGFsU3RlcHNOdW1iZXIiLCJfZ2V0U3RlcENvbnRlbnQiLCJjb250ZW50IiwiX2Rlc3Ryb3kiLCJyZW1vdmUiLCJnZXRFbGVtZW50IiwiZ29UbyIsImdvUHJldmlvdXMiLCJnb05leHQiLCJnb0ZpcnN0IiwiZ29MYXN0IiwiZ2V0Q3VycmVudFN0ZXBJbmRleCIsImdldE5leHRTdGVwSW5kZXgiLCJuZXh0U3RlcEluZGV4IiwiZ2V0UGFzc2VkU3RlcEluZGV4IiwiZ2V0Q2xpY2tlZFN0ZXBJbmRleCIsImdldFByZXZpb3VzU3RlcEluZGV4IiwiUHJldmlvdXNTdGVwSW5kZXgiLCJkZXN0cm95IiwibmFtZSIsImhhbmRsZXIiLCJvbmUiLCJvZmYiLCJldmVudCIsImdldEluc3RhbmNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/components/stepper.js\n");
>>>>>>> Stashed changes

            KTUtil.removeEvent(element, event, window.KTUtilDelegatedEventHandlers[eventId]);

            delete window.KTUtilDelegatedEventHandlers[eventId];
        },

<<<<<<< Updated upstream
        one: function onetime(el, type, callback) {
            el.addEventListener(type, function callee(e) {
                // remove event
                if (e.target && e.target.removeEventListener) {
                    e.target.removeEventListener(e.type, callee);
                }
=======
"use strict";
eval(" // Class definition\n\nvar KTSticky = function KTSticky(element, options) {\n  ////////////////////////////\n  // ** Private Variables  ** //\n  ////////////////////////////\n  var the = this;\n  var body = document.getElementsByTagName(\"BODY\")[0];\n\n  if (typeof element === \"undefined\" || element === null) {\n    return;\n  } // Default Options\n\n\n  var defaultOptions = {\n    offset: 200,\n    releaseOffset: 0,\n    reverse: false,\n    animation: true,\n    animationSpeed: '0.3s',\n    animationClass: 'animation-slide-in-down'\n  }; ////////////////////////////\n  // ** Private Methods  ** //\n  ////////////////////////////\n\n  var _construct = function _construct() {\n    if (KTUtil.data(element).has('sticky') === true) {\n      the = KTUtil.data(element).get('sticky');\n    } else {\n      _init();\n    }\n  };\n\n  var _init = function _init() {\n    the.element = element;\n    the.options = KTUtil.deepExtend({}, defaultOptions, options);\n    the.uid = KTUtil.getUniqueId('sticky');\n    the.name = the.element.getAttribute('data-kt-sticky-name');\n    the.attributeName = 'data-kt-sticky-' + the.name;\n    the.eventTriggerState = true;\n    the.lastScrollTop = 0;\n    the.scrollHandler; // Set initialized\n\n    the.element.setAttribute('data-kt-sticky', 'true'); // Event Handlers\n\n    window.addEventListener('scroll', _scroll); // Initial Launch\n\n    _scroll(); // Bind Instance\n\n\n    KTUtil.data(the.element).set('sticky', the);\n  };\n\n  var _scroll = function _scroll(e) {\n    var offset = _getOption('offset');\n\n    var releaseOffset = _getOption('release-offset');\n\n    var reverse = _getOption('reverse');\n\n    var st;\n    var attrName;\n    var diff; // Exit if false\n\n    if (offset === false) {\n      return;\n    }\n\n    offset = parseInt(offset);\n    releaseOffset = releaseOffset ? parseInt(releaseOffset) : 0;\n    st = KTUtil.getScrollTop();\n    diff = document.documentElement.scrollHeight - window.innerHeight - KTUtil.getScrollTop();\n\n    if (reverse === true) {\n      // Release on reverse scroll mode\n      if (st > offset && (releaseOffset === 0 || releaseOffset < diff)) {\n        if (body.hasAttribute(the.attributeName) === false) {\n          _enable();\n\n          body.setAttribute(the.attributeName, 'on');\n        }\n\n        if (the.eventTriggerState === true) {\n          KTEventHandler.trigger(the.element, 'kt.sticky.on', the);\n          KTEventHandler.trigger(the.element, 'kt.sticky.change', the);\n          the.eventTriggerState = false;\n        }\n      } else {\n        // Back scroll mode\n        if (body.hasAttribute(the.attributeName) === true) {\n          _disable();\n\n          body.removeAttribute(the.attributeName);\n        }\n\n        if (the.eventTriggerState === false) {\n          KTEventHandler.trigger(the.element, 'kt.sticky.off', the);\n          KTEventHandler.trigger(the.element, 'kt.sticky.change', the);\n          the.eventTriggerState = true;\n        }\n      }\n\n      the.lastScrollTop = st;\n    } else {\n      // Classic scroll mode\n      if (st > offset && (releaseOffset === 0 || releaseOffset < diff)) {\n        if (body.hasAttribute(the.attributeName) === false) {\n          _enable();\n\n          body.setAttribute(the.attributeName, 'on');\n        }\n\n        if (the.eventTriggerState === true) {\n          KTEventHandler.trigger(the.element, 'kt.sticky.on', the);\n          KTEventHandler.trigger(the.element, 'kt.sticky.change', the);\n          the.eventTriggerState = false;\n        }\n      } else {\n        // back scroll mode\n        if (body.hasAttribute(the.attributeName) === true) {\n          _disable();\n\n          body.removeAttribute(the.attributeName);\n        }\n\n        if (the.eventTriggerState === false) {\n          KTEventHandler.trigger(the.element, 'kt.sticky.off', the);\n          KTEventHandler.trigger(the.element, 'kt.sticky.change', the);\n          the.eventTriggerState = true;\n        }\n      }\n    }\n\n    if (releaseOffset > 0) {\n      if (diff < releaseOffset) {\n        the.element.setAttribute('data-kt-sticky-released', 'true');\n      } else {\n        the.element.removeAttribute('data-kt-sticky-released');\n      }\n    }\n  };\n\n  var _enable = function _enable(update) {\n    var top = _getOption('top');\n\n    var left = _getOption('left');\n\n    var right = _getOption('right');\n\n    var width = _getOption('width');\n\n    var zindex = _getOption('zindex');\n\n    if (update !== true && _getOption('animation') === true) {\n      KTUtil.css(the.element, 'animationDuration', _getOption('animationSpeed'));\n      KTUtil.animateClass(the.element, 'animation ' + _getOption('animationClass'));\n    }\n\n    if (zindex !== null) {\n      KTUtil.css(the.element, 'z-index', zindex);\n      KTUtil.css(the.element, 'position', 'fixed');\n    }\n\n    if (top !== null) {\n      KTUtil.css(the.element, 'top', top);\n    }\n\n    if (width !== null) {\n      if (width['target']) {\n        var targetElement = document.querySelector(width['target']);\n\n        if (targetElement) {\n          width = KTUtil.css(targetElement, 'width');\n        }\n      }\n\n      KTUtil.css(the.element, 'width', width);\n    }\n\n    if (left !== null) {\n      if (String(left).toLowerCase() === 'auto') {\n        var offsetLeft = KTUtil.offset(the.element).left;\n\n        if (offsetLeft > 0) {\n          KTUtil.css(the.element, 'left', String(offsetLeft) + 'px');\n        }\n      }\n    }\n  };\n\n  var _disable = function _disable() {\n    KTUtil.css(the.element, 'top', '');\n    KTUtil.css(the.element, 'width', '');\n    KTUtil.css(the.element, 'left', '');\n    KTUtil.css(the.element, 'right', '');\n    KTUtil.css(the.element, 'z-index', '');\n    KTUtil.css(the.element, 'position', '');\n  };\n\n  var _getOption = function _getOption(name) {\n    if (the.element.hasAttribute('data-kt-sticky-' + name) === true) {\n      var attr = the.element.getAttribute('data-kt-sticky-' + name);\n      var value = KTUtil.getResponsiveValue(attr);\n\n      if (value !== null && String(value) === 'true') {\n        value = true;\n      } else if (value !== null && String(value) === 'false') {\n        value = false;\n      }\n\n      return value;\n    } else {\n      var optionName = KTUtil.snakeToCamel(name);\n\n      if (the.options[optionName]) {\n        return KTUtil.getResponsiveValue(the.options[optionName]);\n      } else {\n        return null;\n      }\n    }\n  };\n\n  var _destroy = function _destroy() {\n    window.removeEventListener('scroll', _scroll);\n    KTUtil.data(the.element).remove('sticky');\n  }; // Construct Class\n\n\n  _construct(); ///////////////////////\n  // ** Public API  ** //\n  ///////////////////////\n  // Methods\n\n\n  the.update = function () {\n    if (body.hasAttribute(the.attributeName) === true) {\n      _disable();\n\n      body.removeAttribute(the.attributeName);\n\n      _enable(true);\n\n      body.setAttribute(the.attributeName, 'on');\n    }\n  };\n\n  the.destroy = function () {\n    return _destroy();\n  }; // Event API\n\n\n  the.on = function (name, handler) {\n    return KTEventHandler.on(the.element, name, handler);\n  };\n\n  the.one = function (name, handler) {\n    return KTEventHandler.one(the.element, name, handler);\n  };\n\n  the.off = function (name) {\n    return KTEventHandler.off(the.element, name);\n  };\n\n  the.trigger = function (name, event) {\n    return KTEventHandler.trigger(the.element, name, event, the, event);\n  };\n}; // Static methods\n\n\nKTSticky.getInstance = function (element) {\n  if (element !== null && KTUtil.data(element).has('sticky')) {\n    return KTUtil.data(element).get('sticky');\n  } else {\n    return null;\n  }\n}; // Create instances\n\n\nKTSticky.createInstances = function () {\n  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-kt-sticky=\"true\"]';\n  var body = document.getElementsByTagName(\"BODY\")[0]; // Initialize Menus\n\n  var elements = body.querySelectorAll(selector);\n  var sticky;\n\n  if (elements && elements.length > 0) {\n    for (var i = 0, len = elements.length; i < len; i++) {\n      sticky = new KTSticky(elements[i]);\n    }\n  }\n}; // Window resize handler\n\n\nwindow.addEventListener('resize', function () {\n  var timer;\n  var body = document.getElementsByTagName(\"BODY\")[0];\n  KTUtil.throttle(timer, function () {\n    // Locate and update Offcanvas instances on window resize\n    var elements = body.querySelectorAll('[data-kt-sticky=\"true\"]');\n\n    if (elements && elements.length > 0) {\n      for (var i = 0, len = elements.length; i < len; i++) {\n        var sticky = KTSticky.getInstance(elements[i]);\n\n        if (sticky) {\n          sticky.update();\n        }\n      }\n    }\n  }, 200);\n}); // Global initialization\n\nKTSticky.init = function () {\n  KTSticky.createInstances();\n}; // On document ready\n\n\nif (document.readyState === 'loading') {\n  document.addEventListener('DOMContentLoaded', KTSticky.init);\n} else {\n  KTSticky.init();\n} // Webpack support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTSticky;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvc3RpY2t5LmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVNDLE9BQVQsRUFBa0JDLE9BQWxCLEVBQTJCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLE1BQUlDLEdBQUcsR0FBRyxJQUFWO0FBQ0EsTUFBSUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQVg7O0FBRUEsTUFBSyxPQUFPTCxPQUFQLEtBQW1CLFdBQW5CLElBQWtDQSxPQUFPLEtBQUssSUFBbkQsRUFBMEQ7QUFDdEQ7QUFDSCxHQVRxQyxDQVd0Qzs7O0FBQ0EsTUFBSU0sY0FBYyxHQUFHO0FBQ2pCQyxJQUFBQSxNQUFNLEVBQUUsR0FEUztBQUVqQkMsSUFBQUEsYUFBYSxFQUFFLENBRkU7QUFHakJDLElBQUFBLE9BQU8sRUFBRSxLQUhRO0FBSWpCQyxJQUFBQSxTQUFTLEVBQUUsSUFKTTtBQUtqQkMsSUFBQUEsY0FBYyxFQUFFLE1BTEM7QUFNakJDLElBQUFBLGNBQWMsRUFBRTtBQU5DLEdBQXJCLENBWnNDLENBb0J0QztBQUNBO0FBQ0E7O0FBRUEsTUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVztBQUN4QixRQUFLQyxNQUFNLENBQUNDLElBQVAsQ0FBWWYsT0FBWixFQUFxQmdCLEdBQXJCLENBQXlCLFFBQXpCLE1BQXVDLElBQTVDLEVBQW1EO0FBQy9DZCxNQUFBQSxHQUFHLEdBQUdZLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZZixPQUFaLEVBQXFCaUIsR0FBckIsQ0FBeUIsUUFBekIsQ0FBTjtBQUNILEtBRkQsTUFFTztBQUNIQyxNQUFBQSxLQUFLO0FBQ1I7QUFDSixHQU5EOztBQVFBLE1BQUlBLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQVc7QUFDbkJoQixJQUFBQSxHQUFHLENBQUNGLE9BQUosR0FBY0EsT0FBZDtBQUNBRSxJQUFB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bEQsUUFBUSxDQUFDd0YsSUFBVCxHQUFnQixZQUFXO0FBQ3ZCeEYsRUFBQUEsUUFBUSxDQUFDOEUsZUFBVDtBQUNILENBRkQsQyxDQUlBOzs7QUFDQSxJQUFJekUsUUFBUSxDQUFDb0YsVUFBVCxLQUF3QixTQUE1QixFQUF1QztBQUNwQ3BGLEVBQUFBLFFBQVEsQ0FBQzBCLGdCQUFULENBQTBCLGtCQUExQixFQUE4Qy9CLFFBQVEsQ0FBQ3dGLElBQXZEO0FBQ0YsQ0FGRCxNQUVPO0FBQ0h4RixFQUFBQSxRQUFRLENBQUN3RixJQUFUO0FBQ0gsQyxDQUVEOzs7QUFDQSxJQUFJLFNBQWlDLE9BQU9FLE1BQU0sQ0FBQ0MsT0FBZCxLQUEwQixXQUEvRCxFQUE0RTtBQUN4RUQsRUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCM0YsUUFBakI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY29tcG9uZW50cy9zdGlja3kuanM/YTM1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUU3RpY2t5ID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucykge1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyAqKiBQcml2YXRlIFZhcmlhYmxlcyAgKiogLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgdmFyIHRoZSA9IHRoaXM7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkJPRFlcIilbMF07XG5cbiAgICBpZiAoIHR5cGVvZiBlbGVtZW50ID09PSBcInVuZGVmaW5lZFwiIHx8IGVsZW1lbnQgPT09IG51bGwgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IE9wdGlvbnNcbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgIG9mZnNldDogMjAwLFxuICAgICAgICByZWxlYXNlT2Zmc2V0OiAwLFxuICAgICAgICByZXZlcnNlOiBmYWxzZSxcbiAgICAgICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgICAgICBhbmltYXRpb25TcGVlZDogJzAuM3MnLFxuICAgICAgICBhbmltYXRpb25DbGFzczogJ2FuaW1hdGlvbi1zbGlkZS1pbi1kb3duJ1xuICAgIH07XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vICoqIFByaXZhdGUgTWV0aG9kcyAgKiogLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICB2YXIgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIEtUVXRpbC5kYXRhKGVsZW1lbnQpLmhhcygnc3RpY2t5JykgPT09IHRydWUgKSB7XG4gICAgICAgICAgICB0aGUgPSBLVFV0aWwuZGF0YShlbGVtZW50KS5nZXQoJ3N0aWNreScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2luaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGUuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoZS5vcHRpb25zID0gS1RVdGlsLmRlZXBFeHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhlLnVpZCA9IEtUVXRpbC5nZXRVbmlxdWVJZCgnc3RpY2t5Jyk7XG4gICAgICAgIHRoZS5uYW1lID0gdGhlLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWt0LXN0aWNreS1uYW1lJyk7XG4gICAgICAgIHRoZS5hdHRyaWJ1dGVOYW1lID0gJ2RhdGEta3Qtc3RpY2t5LScgKyB0aGUubmFtZTtcbiAgICAgICAgdGhlLmV2ZW50VHJpZ2dlclN0YXRlID0gdHJ1ZTtcbiAgICAgICAgdGhlLmxhc3RTY3JvbGxUb3AgPSAwO1xuICAgICAgICB0aGUuc2Nyb2xsSGFuZGxlcjtcblxuICAgICAgICAvLyBTZXQgaW5pdGlhbGl6ZWRcbiAgICAgICAgdGhlLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWt0LXN0aWNreScsICd0cnVlJyk7XG5cbiAgICAgICAgLy8gRXZlbnQgSGFuZGxlcnNcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIF9zY3JvbGwpO1xuXG4gICAgICAgIC8vIEluaXRpYWwgTGF1bmNoXG4gICAgICAgIF9zY3JvbGwoKTtcblxuICAgICAgICAvLyBCaW5kIEluc3RhbmNlXG4gICAgICAgIEtUVXRpbC5kYXRhKHRoZS5lbGVtZW50KS5zZXQoJ3N0aWNreScsIHRoZSk7XG4gICAgfVxuXG4gICAgdmFyIF9zY3JvbGwgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSBfZ2V0T3B0aW9uKCdvZmZzZXQnKTtcbiAgICAgICAgdmFyIHJlbGVhc2VPZmZzZXQgPSBfZ2V0T3B0aW9uKCdyZWxlYXNlLW9mZnNldCcpO1xuICAgICAgICB2YXIgcmV2ZXJzZSA9IF9nZXRPcHRpb24oJ3JldmVyc2UnKTtcbiAgICAgICAgdmFyIHN0O1xuICAgICAgICB2YXIgYXR0ck5hbWU7XG4gICAgICAgIHZhciBkaWZmO1xuXG4gICAgICAgIC8vIEV4aXQgaWYgZmFsc2VcbiAgICAgICAgaWYgKCBvZmZzZXQgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb2Zmc2V0ID0gcGFyc2VJbnQob2Zmc2V0KTtcbiAgICAgICAgcmVsZWFzZU9mZnNldCA9IHJlbGVhc2VPZmZzZXQgPyBwYXJzZUludChyZWxlYXNlT2Zmc2V0KSA6IDA7XG4gICAgICAgIHN0ID0gS1RVdGlsLmdldFNjcm9sbFRvcCgpO1xuICAgICAgICBkaWZmID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCAtIEtUVXRpbC5nZXRTY3JvbGxUb3AoKTtcblxuICAgICAgICBpZiAoIHJldmVyc2UgPT09IHRydWUgKSB7ICAvLyBSZWxlYXNlIG9uIHJldmVyc2Ugc2Nyb2xsIG1vZGVcbiAgICAgICAgICAgIGlmICggc3QgPiBvZmZzZXQgJiYgKHJlbGVhc2VPZmZzZXQgPT09IDAgfHwgcmVsZWFzZU9mZnNldCA8IGRpZmYpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBib2R5Lmhhc0F0dHJpYnV0ZSh0aGUuYXR0cmlidXRlTmFtZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIF9lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUodGhlLmF0dHJpYnV0ZU5hbWUsICdvbicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICggdGhlLmV2ZW50VHJpZ2dlclN0YXRlID09PSB0cnVlICkge1xuICAgICAgICAgICAgICAgICAgICBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3Quc3RpY2t5Lm9uJywgdGhlKTtcbiAgICAgICAgICAgICAgICAgICAgS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgJ2t0LnN0aWNreS5jaGFuZ2UnLCB0aGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoZS5ldmVudFRyaWdnZXJTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIEJhY2sgc2Nyb2xsIG1vZGVcbiAgICAgICAgICAgICAgICBpZiAoIGJvZHkuaGFzQXR0cmlidXRlKHRoZS5hdHRyaWJ1dGVOYW1lKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfZGlzYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICBib2R5LnJlbW92ZUF0dHJpYnV0ZSh0aGUuYXR0cmlidXRlTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCB0aGUuZXZlbnRUcmlnZ2VyU3RhdGUgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgICAgICBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3Quc3RpY2t5Lm9mZicsIHRoZSk7XG4gICAgICAgICAgICAgICAgICAgIEtURXZlbnRIYW5kbGVyLnRyaWdnZXIodGhlLmVsZW1lbnQsICdrdC5zdGlja3kuY2hhbmdlJywgdGhlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhlLmV2ZW50VHJpZ2dlclN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoZS5sYXN0U2Nyb2xsVG9wID0gc3Q7XG4gICAgICAgIH0gZWxzZSB7IC8vIENsYXNzaWMgc2Nyb2xsIG1vZGVcbiAgICAgICAgICAgIGlmICggc3QgPiBvZmZzZXQgJiYgKHJlbGVhc2VPZmZzZXQgPT09IDAgfHwgcmVsZWFzZU9mZnNldCA8IGRpZmYpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBib2R5Lmhhc0F0dHJpYnV0ZSh0aGUuYXR0cmlidXRlTmFtZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIF9lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUodGhlLmF0dHJpYnV0ZU5hbWUsICdvbicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICggdGhlLmV2ZW50VHJpZ2dlclN0YXRlID09PSB0cnVlICkge1xuICAgICAgICAgICAgICAgICAgICBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3Quc3RpY2t5Lm9uJywgdGhlKTtcbiAgICAgICAgICAgICAgICAgICAgS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgJ2t0LnN0aWNreS5jaGFuZ2UnLCB0aGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGUuZXZlbnRUcmlnZ2VyU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBiYWNrIHNjcm9sbCBtb2RlXG4gICAgICAgICAgICAgICAgaWYgKCBib2R5Lmhhc0F0dHJpYnV0ZSh0aGUuYXR0cmlidXRlTmFtZSkgPT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIF9kaXNhYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkucmVtb3ZlQXR0cmlidXRlKHRoZS5hdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIHRoZS5ldmVudFRyaWdnZXJTdGF0ZSA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgICAgIEtURXZlbnRIYW5kbGVyLnRyaWdnZXIodGhlLmVsZW1lbnQsICdrdC5zdGlja3kub2ZmJywgdGhlKTtcbiAgICAgICAgICAgICAgICAgICAgS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgJ2t0LnN0aWNreS5jaGFuZ2UnLCB0aGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGUuZXZlbnRUcmlnZ2VyU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZWxlYXNlT2Zmc2V0ID4gMCkge1xuICAgICAgICAgICAgaWYgKCBkaWZmIDwgcmVsZWFzZU9mZnNldCApIHtcbiAgICAgICAgICAgICAgICB0aGUuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEta3Qtc3RpY2t5LXJlbGVhc2VkJywgJ3RydWUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhlLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWt0LXN0aWNreS1yZWxlYXNlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgICAgICBcbiAgICB9XG5cbiAgICB2YXIgX2VuYWJsZSA9IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICAgICAgICB2YXIgdG9wID0gX2dldE9wdGlvbigndG9wJyk7XG4gICAgICAgIHZhciBsZWZ0ID0gX2dldE9wdGlvbignbGVmdCcpO1xuICAgICAgICB2YXIgcmlnaHQgPSBfZ2V0T3B0aW9uKCdyaWdodCcpO1xuICAgICAgICB2YXIgd2lkdGggPSBfZ2V0T3B0aW9uKCd3aWR0aCcpO1xuICAgICAgICB2YXIgemluZGV4ID0gX2dldE9wdGlvbignemluZGV4Jyk7XG5cbiAgICAgICAgaWYgKCB1cGRhdGUgIT09IHRydWUgJiYgX2dldE9wdGlvbignYW5pbWF0aW9uJykgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBLVFV0aWwuY3NzKHRoZS5lbGVtZW50LCAnYW5pbWF0aW9uRHVyYXRpb24nLCBfZ2V0T3B0aW9uKCdhbmltYXRpb25TcGVlZCcpKTtcbiAgICAgICAgICAgIEtUVXRpbC5hbmltYXRlQ2xhc3ModGhlLmVsZW1lbnQsICdhbmltYXRpb24gJyArIF9nZXRPcHRpb24oJ2FuaW1hdGlvbkNsYXNzJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB6aW5kZXggIT09IG51bGwgKSB7XG4gICAgICAgICAgICBLVFV0aWwuY3NzKHRoZS5lbGVtZW50LCAnei1pbmRleCcsIHppbmRleCk7XG4gICAgICAgICAgICBLVFV0aWwuY3NzKHRoZS5lbGVtZW50LCAncG9zaXRpb24nLCAnZml4ZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdG9wICE9PSBudWxsICkge1xuICAgICAgICAgICAgS1RVdGlsLmNzcyh0aGUuZWxlbWVudCwgJ3RvcCcsIHRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHdpZHRoICE9PSBudWxsICkge1xuICAgICAgICAgICAgaWYgKHdpZHRoWyd0YXJnZXQnXSkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih3aWR0aFsndGFyZ2V0J10pO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoID0gS1RVdGlsLmNzcyh0YXJnZXRFbGVtZW50LCAnd2lkdGgnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEtUVXRpbC5jc3ModGhlLmVsZW1lbnQsICd3aWR0aCcsIHdpZHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggbGVmdCAhPT0gbnVsbCApIHtcbiAgICAgICAgICAgIGlmICggU3RyaW5nKGxlZnQpLnRvTG93ZXJDYXNlKCkgPT09ICdhdXRvJyApIHtcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0TGVmdCA9IEtUVXRpbC5vZmZzZXQodGhlLmVsZW1lbnQpLmxlZnQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoIG9mZnNldExlZnQgPiAwICkge1xuICAgICAgICAgICAgICAgICAgICBLVFV0aWwuY3NzKHRoZS5lbGVtZW50LCAnbGVmdCcsIFN0cmluZyhvZmZzZXRMZWZ0KSArICdweCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBLVFV0aWwuY3NzKHRoZS5lbGVtZW50LCAndG9wJywgJycpO1xuICAgICAgICBLVFV0aWwuY3NzKHRoZS5lbGVtZW50LCAnd2lkdGgnLCAnJyk7XG4gICAgICAgIEtUVXRpbC5jc3ModGhlLmVsZW1lbnQsICdsZWZ0JywgJycpO1xuICAgICAgICBLVFV0aWwuY3NzKHRoZS5lbGVtZW50LCAncmlnaHQnLCAnJyk7XG4gICAgICAgIEtUVXRpbC5jc3ModGhlLmVsZW1lbnQsICd6LWluZGV4JywgJycpO1xuICAgICAgICBLVFV0aWwuY3NzKHRoZS5lbGVtZW50LCAncG9zaXRpb24nLCAnJyk7XG4gICAgfVxuXG4gICAgdmFyIF9nZXRPcHRpb24gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGlmICggdGhlLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWt0LXN0aWNreS0nICsgbmFtZSkgPT09IHRydWUgKSB7XG4gICAgICAgICAgICB2YXIgYXR0ciA9IHRoZS5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1rdC1zdGlja3ktJyArIG5hbWUpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gS1RVdGlsLmdldFJlc3BvbnNpdmVWYWx1ZShhdHRyKTtcblxuICAgICAgICAgICAgaWYgKCB2YWx1ZSAhPT0gbnVsbCAmJiBTdHJpbmcodmFsdWUpID09PSAndHJ1ZScgKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICggdmFsdWUgIT09IG51bGwgJiYgU3RyaW5nKHZhbHVlKSA9PT0gJ2ZhbHNlJyApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9uTmFtZSA9IEtUVXRpbC5zbmFrZVRvQ2FtZWwobmFtZSk7XG5cbiAgICAgICAgICAgIGlmICggdGhlLm9wdGlvbnNbb3B0aW9uTmFtZV0gKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEtUVXRpbC5nZXRSZXNwb25zaXZlVmFsdWUodGhlLm9wdGlvbnNbb3B0aW9uTmFtZV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgX3Njcm9sbCk7XG4gICAgICAgIEtUVXRpbC5kYXRhKHRoZS5lbGVtZW50KS5yZW1vdmUoJ3N0aWNreScpO1xuICAgIH1cblxuICAgIC8vIENvbnN0cnVjdCBDbGFzc1xuICAgIF9jb25zdHJ1Y3QoKTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gKiogUHVibGljIEFQSSAgKiogLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgLy8gTWV0aG9kc1xuICAgIHRoZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCBib2R5Lmhhc0F0dHJpYnV0ZSh0aGUuYXR0cmlidXRlTmFtZSkgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBfZGlzYWJsZSgpO1xuICAgICAgICAgICAgYm9keS5yZW1vdmVBdHRyaWJ1dGUodGhlLmF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgICAgX2VuYWJsZSh0cnVlKTtcbiAgICAgICAgICAgIGJvZHkuc2V0QXR0cmlidXRlKHRoZS5hdHRyaWJ1dGVOYW1lLCAnb24nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8vIEV2ZW50IEFQSVxuICAgIHRoZS5vbiA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIEtURXZlbnRIYW5kbGVyLm9uKHRoZS5lbGVtZW50LCBuYW1lLCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICB0aGUub25lID0gZnVuY3Rpb24obmFtZSwgaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gS1RFdmVudEhhbmRsZXIub25lKHRoZS5lbGVtZW50LCBuYW1lLCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICB0aGUub2ZmID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gS1RFdmVudEhhbmRsZXIub2ZmKHRoZS5lbGVtZW50LCBuYW1lKTtcbiAgICB9XG5cbiAgICB0aGUudHJpZ2dlciA9IGZ1bmN0aW9uKG5hbWUsIGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCBuYW1lLCBldmVudCwgdGhlLCBldmVudCk7XG4gICAgfVxufTtcblxuLy8gU3RhdGljIG1ldGhvZHNcbktUU3RpY2t5LmdldEluc3RhbmNlID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIGlmICggZWxlbWVudCAhPT0gbnVsbCAmJiBLVFV0aWwuZGF0YShlbGVtZW50KS5oYXMoJ3N0aWNreScpICkge1xuICAgICAgICByZXR1cm4gS1RVdGlsLmRhdGEoZWxlbWVudCkuZ2V0KCdzdGlja3knKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbi8vIENyZWF0ZSBpbnN0YW5jZXNcbktUU3RpY2t5LmNyZWF0ZUluc3RhbmNlcyA9IGZ1bmN0aW9uKHNlbGVjdG9yID0gJ1tkYXRhLWt0LXN0aWNreT1cInRydWVcIl0nKSB7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkJPRFlcIilbMF07XG5cbiAgICAvLyBJbml0aWFsaXplIE1lbnVzXG4gICAgdmFyIGVsZW1lbnRzID0gYm9keS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICB2YXIgc3RpY2t5O1xuXG4gICAgaWYgKCBlbGVtZW50cyAmJiBlbGVtZW50cy5sZW5ndGggPiAwICkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHN0aWNreSA9IG5ldyBLVFN0aWNreShlbGVtZW50c1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFdpbmRvdyByZXNpemUgaGFuZGxlclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgIHZhciB0aW1lcjtcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQk9EWVwiKVswXTtcblxuICAgIEtUVXRpbC50aHJvdHRsZSh0aW1lciwgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIExvY2F0ZSBhbmQgdXBkYXRlIE9mZmNhbnZhcyBpbnN0YW5jZXMgb24gd2luZG93IHJlc2l6ZVxuICAgICAgICB2YXIgZWxlbWVudHMgPSBib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWt0LXN0aWNreT1cInRydWVcIl0nKTtcblxuICAgICAgICBpZiAoIGVsZW1lbnRzICYmIGVsZW1lbnRzLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RpY2t5ID0gS1RTdGlja3kuZ2V0SW5zdGFuY2UoZWxlbWVudHNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChzdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RpY2t5LnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIDIwMCk7XG59KTtcblxuLy8gR2xvYmFsIGluaXRpYWxpemF0aW9uXG5LVFN0aWNreS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgS1RTdGlja3kuY3JlYXRlSW5zdGFuY2VzKCk7XG59O1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIEtUU3RpY2t5LmluaXQpO1xufSBlbHNlIHtcbiAgICBLVFN0aWNreS5pbml0KCk7XG59XG5cbi8vIFdlYnBhY2sgc3VwcG9ydFxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEtUU3RpY2t5O1xufVxuIl0sIm5hbWVzIjpbIktUU3RpY2t5IiwiZWxlbWVudCIsIm9wdGlvbnMiLCJ0aGUiLCJib2R5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImRlZmF1bHRPcHRpb25zIiwib2Zmc2V0IiwicmVsZWFzZU9mZnNldCIsInJldmVyc2UiLCJhbmltYXRpb24iLCJhbmltYXRpb25TcGVlZCIsImFuaW1hdGlvbkNsYXNzIiwiX2NvbnN0cnVjdCIsIktUVXRpbCIsImRhdGEiLCJoYXMiLCJnZXQiLCJfaW5pdCIsImRlZXBFeHRlbmQiLCJ1aWQiLCJnZXRVbmlxdWVJZCIsIm5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJhdHRyaWJ1dGVOYW1lIiwiZXZlbnRUcmlnZ2VyU3RhdGUiLCJsYXN0U2Nyb2xsVG9wIiwic2Nyb2xsSGFuZGxlciIsInNldEF0dHJpYnV0ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfc2Nyb2xsIiwic2V0IiwiZSIsIl9nZXRPcHRpb24iLCJzdCIsImF0dHJOYW1lIiwiZGlmZiIsInBhcnNlSW50IiwiZ2V0U2Nyb2xsVG9wIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJoYXNBdHRyaWJ1dGUiLCJfZW5hYmxlIiwiS1RFdmVudEhhbmRsZXIiLCJ0cmlnZ2VyIiwiX2Rpc2FibGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ1cGRhdGUiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJ3aWR0aCIsInppbmRleCIsImNzcyIsImFuaW1hdGVDbGFzcyIsInRhcmdldEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJvZmZzZXRMZWZ0IiwiYXR0ciIsInZhbHVlIiwiZ2V0UmVzcG9uc2l2ZVZhbHVlIiwib3B0aW9uTmFtZSIsInNuYWtlVG9DYW1lbCIsIl9kZXN0cm95IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsImRlc3Ryb3kiLCJvbiIsImhhbmRsZXIiLCJvbmUiLCJvZmYiLCJldmVudCIsImdldEluc3RhbmNlIiwiY3JlYXRlSW5zdGFuY2VzIiwic2VsZWN0b3IiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdGlja3kiLCJsZW5ndGgiLCJpIiwibGVuIiwidGltZXIiLCJ0aHJvdHRsZSIsImluaXQiLCJyZWFkeVN0YXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/components/sticky.js\n");
>>>>>>> Stashed changes

                // need to verify from https://themeforest.net/author_dashboard#comment_23615588
                if (el && el.removeEventListener) {
				    e.currentTarget.removeEventListener(e.type, callee);
			    }

                // call handler
                return callback(e);
            });
        },

<<<<<<< Updated upstream
        hash: function(str) {
            var hash = 0,
                i, chr;
=======
"use strict";
eval(" // Class definition\n\nvar KTSwapper = function KTSwapper(element, options) {\n  ////////////////////////////\n  // ** Private Variables  ** //\n  ////////////////////////////\n  var the = this;\n\n  if (typeof element === \"undefined\" || element === null) {\n    return;\n  } // Default Options\n\n\n  var defaultOptions = {\n    mode: 'append'\n  }; ////////////////////////////\n  // ** Private Methods  ** //\n  ////////////////////////////\n\n  var _construct = function _construct() {\n    if (KTUtil.data(element).has('swapper') === true) {\n      the = KTUtil.data(element).get('swapper');\n    } else {\n      _init();\n    }\n  };\n\n  var _init = function _init() {\n    the.element = element;\n    the.options = KTUtil.deepExtend({}, defaultOptions, options); // Set initialized\n\n    the.element.setAttribute('data-kt-swapper', 'true'); // Initial update\n\n    _update(); // Bind Instance\n\n\n    KTUtil.data(the.element).set('swapper', the);\n  };\n\n  var _update = function _update(e) {\n    var parentSelector = _getOption('parent');\n\n    var mode = _getOption('mode');\n\n    var parentElement = parentSelector ? document.querySelector(parentSelector) : null;\n\n    if (parentElement && element.parentNode !== parentElement) {\n      if (mode === 'prepend') {\n        parentElement.prepend(element);\n      } else if (mode === 'append') {\n        parentElement.append(element);\n      }\n    }\n  };\n\n  var _getOption = function _getOption(name) {\n    if (the.element.hasAttribute('data-kt-swapper-' + name) === true) {\n      var attr = the.element.getAttribute('data-kt-swapper-' + name);\n      var value = KTUtil.getResponsiveValue(attr);\n\n      if (value !== null && String(value) === 'true') {\n        value = true;\n      } else if (value !== null && String(value) === 'false') {\n        value = false;\n      }\n\n      return value;\n    } else {\n      var optionName = KTUtil.snakeToCamel(name);\n\n      if (the.options[optionName]) {\n        return KTUtil.getResponsiveValue(the.options[optionName]);\n      } else {\n        return null;\n      }\n    }\n  };\n\n  var _destroy = function _destroy() {\n    KTUtil.data(the.element).remove('swapper');\n  }; // Construct Class\n\n\n  _construct(); ///////////////////////\n  // ** Public API  ** //\n  ///////////////////////\n  // Methods\n\n\n  the.update = function () {\n    _update();\n  };\n\n  the.destroy = function () {\n    return _destroy();\n  }; // Event API\n\n\n  the.on = function (name, handler) {\n    return KTEventHandler.on(the.element, name, handler);\n  };\n\n  the.one = function (name, handler) {\n    return KTEventHandler.one(the.element, name, handler);\n  };\n\n  the.off = function (name) {\n    return KTEventHandler.off(the.element, name);\n  };\n\n  the.trigger = function (name, event) {\n    return KTEventHandler.trigger(the.element, name, event, the, event);\n  };\n}; // Static methods\n\n\nKTSwapper.getInstance = function (element) {\n  if (element !== null && KTUtil.data(element).has('swapper')) {\n    return KTUtil.data(element).get('swapper');\n  } else {\n    return null;\n  }\n}; // Create instances\n\n\nKTSwapper.createInstances = function () {\n  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-kt-swapper=\"true\"]';\n  // Initialize Menus\n  var elements = document.querySelectorAll(selector);\n  var swapper;\n\n  if (elements && elements.length > 0) {\n    for (var i = 0, len = elements.length; i < len; i++) {\n      swapper = new KTSwapper(elements[i]);\n    }\n  }\n}; // Window resize handler\n\n\nwindow.addEventListener('resize', function () {\n  var timer;\n  KTUtil.throttle(timer, function () {\n    // Locate and update Offcanvas instances on window resize\n    var elements = document.querySelectorAll('[data-kt-swapper=\"true\"]');\n\n    if (elements && elements.length > 0) {\n      for (var i = 0, len = elements.length; i < len; i++) {\n        var swapper = KTSwapper.getInstance(elements[i]);\n\n        if (swapper) {\n          swapper.update();\n        }\n      }\n    }\n  }, 200);\n}); // Global initialization\n\nKTSwapper.init = function () {\n  KTSwapper.createInstances();\n}; // On document ready\n\n\nif (document.readyState === 'loading') {\n  document.addEventListener('DOMContentLoaded', KTSwapper.init);\n} else {\n  KTSwapper.init();\n} // Webpack support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTSwapper;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvc3dhcHBlci5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFTQyxPQUFULEVBQWtCQyxPQUFsQixFQUEyQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxNQUFJQyxHQUFHLEdBQUcsSUFBVjs7QUFFQSxNQUFLLE9BQU9GLE9BQVAsS0FBbUIsV0FBbkIsSUFBa0NBLE9BQU8sS0FBSyxJQUFuRCxFQUEwRDtBQUN0RDtBQUNILEdBUnNDLENBVXZDOzs7QUFDQSxNQUFJRyxjQUFjLEdBQUc7QUFDakJDLElBQUFBLElBQUksRUFBRTtBQURXLEdBQXJCLENBWHVDLENBZXZDO0FBQ0E7QUFDQTs7QUFFQSxNQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFXO0FBQ3hCLFFBQUtDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUCxPQUFaLEVBQXFCUSxHQUFyQixDQUF5QixTQUF6QixNQUF3QyxJQUE3QyxFQUFvRDtBQUNoRE4sTUFBQUEsR0FBRyxHQUFHSSxNQUFNLENBQUNDLElBQVAsQ0FBWVAsT0FBWixFQUFxQlMsR0FBckIsQ0FBeUIsU0FBekIsQ0FBTjtBQUNILEtBRkQsTUFFTztBQUNIQyxNQUFBQSxLQUFLO0FBQ1I7QUFDSixHQU5EOztBQVFBLE1BQUlBLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQVc7QUFDbkJSLElBQUFBLEdBQUcsQ0FBQ0YsT0FBSixHQUFjQSxPQUFkO0FBQ0FFLElBQUFBLEdBQUcsQ0FBQ0QsT0FBSixHQUFjSyxNQUFNLENBQUNLLFVBQVAsQ0FBa0IsRUFBbEIsRUFBc0JSLGNBQXRCLEVBQXNDRixPQUF0QyxDQUFkLENBRm1CLENBSW5COztBQUNBQyxJQUFBQSxHQUFHLENBQUNGLE9BQUosQ0FBWVksWUFBWixDQUF5QixpQkFBekIsRUFBNEMsTUFBNUMsRUFMbUIsQ0FPbkI7O0FBQ0FDLElBQUFBLE9BQU8sR0FSWSxDQVVuQjs7O0FBQ0FQLElB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O0FBQ0gsQ0FGRCxDLENBSUE7OztBQUNBLElBQUkxQixRQUFRLENBQUN1QyxVQUFULEtBQXdCLFNBQTVCLEVBQXVDO0FBQ3BDdkMsRUFBQUEsUUFBUSxDQUFDbUMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDdkQsU0FBUyxDQUFDMEQsSUFBeEQ7QUFDRixDQUZELE1BRU87QUFDSDFELEVBQUFBLFNBQVMsQ0FBQzBELElBQVY7QUFDSCxDLENBRUQ7OztBQUNBLElBQUksU0FBaUMsT0FBT0UsTUFBTSxDQUFDQyxPQUFkLEtBQTBCLFdBQS9ELEVBQTRFO0FBQ3hFRCxFQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUI3RCxTQUFqQjtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jb21wb25lbnRzL3N3YXBwZXIuanM/Mzc0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUU3dhcHBlciA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gKiogUHJpdmF0ZSBWYXJpYWJsZXMgICoqIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHZhciB0aGUgPSB0aGlzO1xuXG4gICAgaWYgKCB0eXBlb2YgZWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBlbGVtZW50ID09PSBudWxsICkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBPcHRpb25zXG4gICAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICBtb2RlOiAnYXBwZW5kJ1xuICAgIH07XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gKiogUHJpdmF0ZSBNZXRob2RzICAqKiAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHZhciBfY29uc3RydWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICggS1RVdGlsLmRhdGEoZWxlbWVudCkuaGFzKCdzd2FwcGVyJykgPT09IHRydWUgKSB7XG4gICAgICAgICAgICB0aGUgPSBLVFV0aWwuZGF0YShlbGVtZW50KS5nZXQoJ3N3YXBwZXInKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9pbml0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX2luaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhlLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGUub3B0aW9ucyA9IEtUVXRpbC5kZWVwRXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gU2V0IGluaXRpYWxpemVkXG4gICAgICAgIHRoZS5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1rdC1zd2FwcGVyJywgJ3RydWUnKTtcblxuICAgICAgICAvLyBJbml0aWFsIHVwZGF0ZVxuICAgICAgICBfdXBkYXRlKCk7XG5cbiAgICAgICAgLy8gQmluZCBJbnN0YW5jZVxuICAgICAgICBLVFV0aWwuZGF0YSh0aGUuZWxlbWVudCkuc2V0KCdzd2FwcGVyJywgdGhlKTtcbiAgICB9XG5cbiAgICB2YXIgX3VwZGF0ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIHBhcmVudFNlbGVjdG9yID0gX2dldE9wdGlvbigncGFyZW50Jyk7XG5cbiAgICAgICAgdmFyIG1vZGUgPSBfZ2V0T3B0aW9uKCdtb2RlJyk7XG4gICAgICAgIHZhciBwYXJlbnRFbGVtZW50ID0gcGFyZW50U2VsZWN0b3IgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudFNlbGVjdG9yKSA6IG51bGw7XG4gICAgICAgXG5cbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlICE9PSBwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gJ3ByZXBlbmQnKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5wcmVwZW5kKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnYXBwZW5kJykge1xuICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9nZXRPcHRpb24gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGlmICggdGhlLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWt0LXN3YXBwZXItJyArIG5hbWUpID09PSB0cnVlICkge1xuICAgICAgICAgICAgdmFyIGF0dHIgPSB0aGUuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEta3Qtc3dhcHBlci0nICsgbmFtZSk7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBLVFV0aWwuZ2V0UmVzcG9uc2l2ZVZhbHVlKGF0dHIpO1xuXG4gICAgICAgICAgICBpZiAoIHZhbHVlICE9PSBudWxsICYmIFN0cmluZyh2YWx1ZSkgPT09ICd0cnVlJyApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB2YWx1ZSAhPT0gbnVsbCAmJiBTdHJpbmcodmFsdWUpID09PSAnZmFsc2UnICkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25OYW1lID0gS1RVdGlsLnNuYWtlVG9DYW1lbChuYW1lKTtcblxuICAgICAgICAgICAgaWYgKCB0aGUub3B0aW9uc1tvcHRpb25OYW1lXSApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gS1RVdGlsLmdldFJlc3BvbnNpdmVWYWx1ZSh0aGUub3B0aW9uc1tvcHRpb25OYW1lXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIEtUVXRpbC5kYXRhKHRoZS5lbGVtZW50KS5yZW1vdmUoJ3N3YXBwZXInKTtcbiAgICB9XG5cbiAgICAvLyBDb25zdHJ1Y3QgQ2xhc3NcbiAgICBfY29uc3RydWN0KCk7XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vICoqIFB1YmxpYyBBUEkgICoqIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIE1ldGhvZHNcbiAgICB0aGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIF91cGRhdGUoKTtcbiAgICB9XG5cbiAgICB0aGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2Rlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvLyBFdmVudCBBUElcbiAgICB0aGUub24gPSBmdW5jdGlvbihuYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBLVEV2ZW50SGFuZGxlci5vbih0aGUuZWxlbWVudCwgbmFtZSwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgdGhlLm9uZSA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIEtURXZlbnRIYW5kbGVyLm9uZSh0aGUuZWxlbWVudCwgbmFtZSwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgdGhlLm9mZiA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIEtURXZlbnRIYW5kbGVyLm9mZih0aGUuZWxlbWVudCwgbmFtZSk7XG4gICAgfVxuXG4gICAgdGhlLnRyaWdnZXIgPSBmdW5jdGlvbihuYW1lLCBldmVudCkge1xuICAgICAgICByZXR1cm4gS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgbmFtZSwgZXZlbnQsIHRoZSwgZXZlbnQpO1xuICAgIH1cbn07XG5cbi8vIFN0YXRpYyBtZXRob2RzXG5LVFN3YXBwZXIuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgaWYgKCBlbGVtZW50ICE9PSBudWxsICYmIEtUVXRpbC5kYXRhKGVsZW1lbnQpLmhhcygnc3dhcHBlcicpICkge1xuICAgICAgICByZXR1cm4gS1RVdGlsLmRhdGEoZWxlbWVudCkuZ2V0KCdzd2FwcGVyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG4vLyBDcmVhdGUgaW5zdGFuY2VzXG5LVFN3YXBwZXIuY3JlYXRlSW5zdGFuY2VzID0gZnVuY3Rpb24oc2VsZWN0b3IgPSAnW2RhdGEta3Qtc3dhcHBlcj1cInRydWVcIl0nKSB7XG4gICAgLy8gSW5pdGlhbGl6ZSBNZW51c1xuICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIHZhciBzd2FwcGVyO1xuXG4gICAgaWYgKCBlbGVtZW50cyAmJiBlbGVtZW50cy5sZW5ndGggPiAwICkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHN3YXBwZXIgPSBuZXcgS1RTd2FwcGVyKGVsZW1lbnRzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gV2luZG93IHJlc2l6ZSBoYW5kbGVyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRpbWVyO1xuXG4gICAgS1RVdGlsLnRocm90dGxlKHRpbWVyLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gTG9jYXRlIGFuZCB1cGRhdGUgT2ZmY2FudmFzIGluc3RhbmNlcyBvbiB3aW5kb3cgcmVzaXplXG4gICAgICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWt0LXN3YXBwZXI9XCJ0cnVlXCJdJyk7XG5cbiAgICAgICAgaWYgKCBlbGVtZW50cyAmJiBlbGVtZW50cy5sZW5ndGggPiAwICkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN3YXBwZXIgPSBLVFN3YXBwZXIuZ2V0SW5zdGFuY2UoZWxlbWVudHNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChzd2FwcGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YXBwZXIudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIDIwMCk7XG59KTtcblxuLy8gR2xvYmFsIGluaXRpYWxpemF0aW9uXG5LVFN3YXBwZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIEtUU3dhcHBlci5jcmVhdGVJbnN0YW5jZXMoKTtcbn07XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgS1RTd2FwcGVyLmluaXQpO1xufSBlbHNlIHtcbiAgICBLVFN3YXBwZXIuaW5pdCgpO1xufVxuXG4vLyBXZWJwYWNrIHN1cHBvcnRcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBLVFN3YXBwZXI7XG59XG4iXSwibmFtZXMiOlsiS1RTd2FwcGVyIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJ0aGUiLCJkZWZhdWx0T3B0aW9ucyIsIm1vZGUiLCJfY29uc3RydWN0IiwiS1RVdGlsIiwiZGF0YSIsImhhcyIsImdldCIsIl9pbml0IiwiZGVlcEV4dGVuZCIsInNldEF0dHJpYnV0ZSIsIl91cGRhdGUiLCJzZXQiLCJlIiwicGFyZW50U2VsZWN0b3IiLCJfZ2V0T3B0aW9uIiwicGFyZW50RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudE5vZGUiLCJwcmVwZW5kIiwiYXBwZW5kIiwibmFtZSIsImhhc0F0dHJpYnV0ZSIsImF0dHIiLCJnZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsImdldFJlc3BvbnNpdmVWYWx1ZSIsIlN0cmluZyIsIm9wdGlvbk5hbWUiLCJzbmFrZVRvQ2FtZWwiLCJfZGVzdHJveSIsInJlbW92ZSIsInVwZGF0ZSIsImRlc3Ryb3kiLCJvbiIsImhhbmRsZXIiLCJLVEV2ZW50SGFuZGxlciIsIm9uZSIsIm9mZiIsInRyaWdnZXIiLCJldmVudCIsImdldEluc3RhbmNlIiwiY3JlYXRlSW5zdGFuY2VzIiwic2VsZWN0b3IiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzd2FwcGVyIiwibGVuZ3RoIiwiaSIsImxlbiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aW1lciIsInRocm90dGxlIiwiaW5pdCIsInJlYWR5U3RhdGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/components/swapper.js\n");
>>>>>>> Stashed changes

            if (str.length === 0) return hash;
            for (i = 0; i < str.length; i++) {
                chr = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + chr;
                hash |= 0; // Convert to 32bit integer
            }

            return hash;
        },

<<<<<<< Updated upstream
        animateClass: function(el, animationName, callback) {
            var animation;
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
                msAnimation: 'msAnimationEnd',
            };
=======
"use strict";
eval(" // Class definition\n\nvar KTToggle = function KTToggle(element, options) {\n  ////////////////////////////\n  // ** Private variables  ** //\n  ////////////////////////////\n  var the = this;\n  var body = document.getElementsByTagName(\"BODY\")[0];\n\n  if (!element) {\n    return;\n  } // Default Options\n\n\n  var defaultOptions = {\n    saveState: true\n  }; ////////////////////////////\n  // ** Private methods  ** //\n  ////////////////////////////\n\n  var _construct = function _construct() {\n    if (KTUtil.data(element).has('toggle') === true) {\n      the = KTUtil.data(element).get('toggle');\n    } else {\n      _init();\n    }\n  };\n\n  var _init = function _init() {\n    // Variables\n    the.options = KTUtil.deepExtend({}, defaultOptions, options);\n    the.uid = KTUtil.getUniqueId('toggle'); // Elements\n\n    the.element = element;\n    the.target = document.querySelector(the.element.getAttribute('data-kt-toggle-target')) ? document.querySelector(the.element.getAttribute('data-kt-toggle-target')) : the.element;\n    the.state = the.element.hasAttribute('data-kt-toggle-state') ? the.element.getAttribute('data-kt-toggle-state') : '';\n    the.attribute = 'data-kt-' + the.element.getAttribute('data-kt-toggle-name'); // Event Handlers\n\n    _handlers(); // Bind Instance\n\n\n    KTUtil.data(the.element).set('toggle', the);\n  };\n\n  var _handlers = function _handlers() {\n    KTUtil.addEvent(the.element, 'click', function (e) {\n      e.preventDefault();\n\n      _toggle();\n    });\n  }; // Event handlers\n\n\n  var _toggle = function _toggle() {\n    // Trigger \"after.toggle\" event\n    KTEventHandler.trigger(the.element, 'kt.toggle.change', the);\n\n    if (_isEnabled()) {\n      _disable();\n    } else {\n      _enable();\n    } // Trigger \"before.toggle\" event\n\n\n    KTEventHandler.trigger(the.element, 'kt.toggle.changed', the);\n    return the;\n  };\n\n  var _enable = function _enable() {\n    if (_isEnabled() === true) {\n      return;\n    }\n\n    KTEventHandler.trigger(the.element, 'kt.toggle.enable', the);\n    the.target.setAttribute(the.attribute, 'on');\n\n    if (the.state.length > 0) {\n      the.element.classList.add(the.state);\n    }\n\n    if (typeof KTCookie !== 'undefined' && the.options.saveState === true) {\n      KTCookie.set(the.attribute, 'on');\n    }\n\n    KTEventHandler.trigger(the.element, 'kt.toggle.enabled', the);\n    return the;\n  };\n\n  var _disable = function _disable() {\n    if (_isEnabled() === false) {\n      return;\n    }\n\n    KTEventHandler.trigger(the.element, 'kt.toggle.disable', the);\n    the.target.removeAttribute(the.attribute);\n\n    if (the.state.length > 0) {\n      the.element.classList.remove(the.state);\n    }\n\n    if (typeof KTCookie !== 'undefined' && the.options.saveState === true) {\n      KTCookie.remove(the.attribute);\n    }\n\n    KTEventHandler.trigger(the.element, 'kt.toggle.disabled', the);\n    return the;\n  };\n\n  var _isEnabled = function _isEnabled() {\n    return String(the.target.getAttribute(the.attribute)).toLowerCase() === 'on';\n  };\n\n  var _destroy = function _destroy() {\n    KTUtil.data(the.element).remove('toggle');\n  }; // Construct class\n\n\n  _construct(); ///////////////////////\n  // ** Public API  ** //\n  ///////////////////////\n  // Plugin API\n\n\n  the.toggle = function () {\n    return _toggle();\n  };\n\n  the.enable = function () {\n    return _enable();\n  };\n\n  the.disable = function () {\n    return _disable();\n  };\n\n  the.isEnabled = function () {\n    return _isEnabled();\n  };\n\n  the.goElement = function () {\n    return the.element;\n  };\n\n  the.destroy = function () {\n    return _destroy();\n  }; // Event API\n\n\n  the.on = function (name, handler) {\n    return KTEventHandler.on(the.element, name, handler);\n  };\n\n  the.one = function (name, handler) {\n    return KTEventHandler.one(the.element, name, handler);\n  };\n\n  the.off = function (name) {\n    return KTEventHandler.off(the.element, name);\n  };\n\n  the.trigger = function (name, event) {\n    return KTEventHandler.trigger(the.element, name, event, the, event);\n  };\n}; // Static methods\n\n\nKTToggle.getInstance = function (element) {\n  if (element !== null && KTUtil.data(element).has('toggle')) {\n    return KTUtil.data(element).get('toggle');\n  } else {\n    return null;\n  }\n}; // Create instances\n\n\nKTToggle.createInstances = function () {\n  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-kt-toggle]';\n  var body = document.getElementsByTagName(\"BODY\")[0]; // Get instances\n\n  var elements = body.querySelectorAll(selector);\n\n  if (elements && elements.length > 0) {\n    for (var i = 0, len = elements.length; i < len; i++) {\n      // Initialize instances\n      new KTToggle(elements[i]);\n    }\n  }\n}; // Global initialization\n\n\nKTToggle.init = function () {\n  KTToggle.createInstances();\n}; // On document ready\n\n\nif (document.readyState === 'loading') {\n  document.addEventListener('DOMContentLoaded', KTToggle.init);\n} else {\n  KTToggle.init();\n} // Webpack support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTToggle;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvdG9nZ2xlLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVNDLE9BQVQsRUFBa0JDLE9BQWxCLEVBQTJCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLE1BQUlDLEdBQUcsR0FBRyxJQUFWO0FBQ0EsTUFBSUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQVg7O0FBRUEsTUFBSSxDQUFDTCxPQUFMLEVBQWM7QUFDVjtBQUNILEdBVHFDLENBV3RDOzs7QUFDQSxNQUFJTSxjQUFjLEdBQUc7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNLEdBQXJCLENBWnNDLENBZ0J0QztBQUNBO0FBQ0E7O0FBRUEsTUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVztBQUN4QixRQUFLQyxNQUFNLENBQUNDLElBQVAsQ0FBWVYsT0FBWixFQUFxQlcsR0FBckIsQ0FBeUIsUUFBekIsTUFBdUMsSUFBNUMsRUFBbUQ7QUFDL0NULE1BQUFBLEdBQUcsR0FBR08sTUFBTSxDQUFDQyxJQUFQLENBQVlWLE9BQVosRUFBcUJZLEdBQXJCLENBQXlCLFFBQXpCLENBQU47QUFDSCxLQUZELE1BRU87QUFDSEMsTUFBQUEsS0FBSztBQUNSO0FBQ0osR0FORDs7QUFRQSxNQUFJQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFXO0FBQ25CO0FBQ0FYLElBQUFBLEdBQUcsQ0FBQ0QsT0FBSixHQUFjUSxNQUFNLENBQUNLLFVBQVAsQ0FBa0IsRUFBbEIsRUFBc0JSLGNBQXRCLEVBQXNDTCxPQUF0QyxDQUFkO0FBQ0FDLElBQUFBLEdBQUcsQ0FBQ2EsR0FBSixHQUFVTixNQUFNLENBQUNPLFdBQVAsQ0FBbUIsUUFBbkIsQ0FBVixDQUhtQixDQUtuQjs7QUFDQWQsSUFBQUEsR0FBRyxDQUFDRixPQUFKLEdBQWNBLE9BQWQ7QUFFQUUsSUFBQUEs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QzBCLENBQUMsR0FBR0MsR0FBM0MsRUFBZ0RELENBQUMsRUFBakQsRUFBcUQ7QUFDakQ7QUFDQSxVQUFJOUQsUUFBSixDQUFhNEQsUUFBUSxDQUFDRSxDQUFELENBQXJCO0FBQ0g7QUFDSjtBQUNKLENBWkQsQyxDQWNBOzs7QUFDQTlELFFBQVEsQ0FBQ2dFLElBQVQsR0FBZ0IsWUFBVztBQUN2QmhFLEVBQUFBLFFBQVEsQ0FBQzBELGVBQVQ7QUFDSCxDQUZELEMsQ0FJQTs7O0FBQ0EsSUFBSXJELFFBQVEsQ0FBQzRELFVBQVQsS0FBd0IsU0FBNUIsRUFBdUM7QUFDcEM1RCxFQUFBQSxRQUFRLENBQUM2RCxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENsRSxRQUFRLENBQUNnRSxJQUF2RDtBQUNGLENBRkQsTUFFTztBQUNIaEUsRUFBQUEsUUFBUSxDQUFDZ0UsSUFBVDtBQUNILEMsQ0FFRDs7O0FBQ0EsSUFBSSxTQUFpQyxPQUFPRyxNQUFNLENBQUNDLE9BQWQsS0FBMEIsV0FBL0QsRUFBNEU7QUFDeEVELEVBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnBFLFFBQWpCO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvdG9nZ2xlLmpzP2FiMGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVFRvZ2dsZSA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gKiogUHJpdmF0ZSB2YXJpYWJsZXMgICoqIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHZhciB0aGUgPSB0aGlzO1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJCT0RZXCIpWzBdO1xuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IE9wdGlvbnNcbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgIHNhdmVTdGF0ZTogdHJ1ZVxuICAgIH07XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gKiogUHJpdmF0ZSBtZXRob2RzICAqKiAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHZhciBfY29uc3RydWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICggS1RVdGlsLmRhdGEoZWxlbWVudCkuaGFzKCd0b2dnbGUnKSA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIHRoZSA9IEtUVXRpbC5kYXRhKGVsZW1lbnQpLmdldCgndG9nZ2xlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfaW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFZhcmlhYmxlc1xuICAgICAgICB0aGUub3B0aW9ucyA9IEtUVXRpbC5kZWVwRXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoZS51aWQgPSBLVFV0aWwuZ2V0VW5pcXVlSWQoJ3RvZ2dsZScpO1xuXG4gICAgICAgIC8vIEVsZW1lbnRzXG4gICAgICAgIHRoZS5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICB0aGUudGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGUuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEta3QtdG9nZ2xlLXRhcmdldCcpKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhlLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWt0LXRvZ2dsZS10YXJnZXQnKSkgOiB0aGUuZWxlbWVudDtcbiAgICAgICAgdGhlLnN0YXRlID0gdGhlLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWt0LXRvZ2dsZS1zdGF0ZScpID8gdGhlLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWt0LXRvZ2dsZS1zdGF0ZScpIDogJyc7XG4gICAgICAgIHRoZS5hdHRyaWJ1dGUgPSAnZGF0YS1rdC0nICsgdGhlLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWt0LXRvZ2dsZS1uYW1lJyk7XG5cbiAgICAgICAgLy8gRXZlbnQgSGFuZGxlcnNcbiAgICAgICAgX2hhbmRsZXJzKCk7XG5cbiAgICAgICAgLy8gQmluZCBJbnN0YW5jZVxuICAgICAgICBLVFV0aWwuZGF0YSh0aGUuZWxlbWVudCkuc2V0KCd0b2dnbGUnLCB0aGUpO1xuICAgIH1cblxuICAgIHZhciBfaGFuZGxlcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgS1RVdGlsLmFkZEV2ZW50KHRoZS5lbGVtZW50LCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIF90b2dnbGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRXZlbnQgaGFuZGxlcnNcbiAgICB2YXIgX3RvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBUcmlnZ2VyIFwiYWZ0ZXIudG9nZ2xlXCIgZXZlbnRcbiAgICAgICAgS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgJ2t0LnRvZ2dsZS5jaGFuZ2UnLCB0aGUpO1xuXG4gICAgICAgIGlmICggX2lzRW5hYmxlZCgpICkge1xuICAgICAgICAgICAgX2Rpc2FibGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9lbmFibGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyaWdnZXIgXCJiZWZvcmUudG9nZ2xlXCIgZXZlbnRcbiAgICAgICAgS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgJ2t0LnRvZ2dsZS5jaGFuZ2VkJywgdGhlKTtcblxuICAgICAgICByZXR1cm4gdGhlO1xuICAgIH1cblxuICAgIHZhciBfZW5hYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICggX2lzRW5hYmxlZCgpID09PSB0cnVlICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgJ2t0LnRvZ2dsZS5lbmFibGUnLCB0aGUpO1xuXG4gICAgICAgIHRoZS50YXJnZXQuc2V0QXR0cmlidXRlKHRoZS5hdHRyaWJ1dGUsICdvbicpO1xuXG4gICAgICAgIGlmICh0aGUuc3RhdGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhlLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGUuc3RhdGUpO1xuICAgICAgICB9ICAgICAgICBcblxuICAgICAgICBpZiAoIHR5cGVvZiBLVENvb2tpZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhlLm9wdGlvbnMuc2F2ZVN0YXRlID09PSB0cnVlICkge1xuICAgICAgICAgICAgS1RDb29raWUuc2V0KHRoZS5hdHRyaWJ1dGUsICdvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgS1RFdmVudEhhbmRsZXIudHJpZ2dlcih0aGUuZWxlbWVudCwgJ2t0LnRvZ2dsZS5lbmFibGVkJywgdGhlKTtcblxuICAgICAgICByZXR1cm4gdGhlO1xuICAgIH1cblxuICAgIHZhciBfZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIF9pc0VuYWJsZWQoKSA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3QudG9nZ2xlLmRpc2FibGUnLCB0aGUpO1xuXG4gICAgICAgIHRoZS50YXJnZXQucmVtb3ZlQXR0cmlidXRlKHRoZS5hdHRyaWJ1dGUpO1xuXG4gICAgICAgIGlmICh0aGUuc3RhdGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhlLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGUuc3RhdGUpO1xuICAgICAgICB9IFxuXG4gICAgICAgIGlmICggdHlwZW9mIEtUQ29va2llICE9PSAndW5kZWZpbmVkJyAmJiB0aGUub3B0aW9ucy5zYXZlU3RhdGUgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBLVENvb2tpZS5yZW1vdmUodGhlLmF0dHJpYnV0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBLVEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoZS5lbGVtZW50LCAna3QudG9nZ2xlLmRpc2FibGVkJywgdGhlKTtcblxuICAgICAgICByZXR1cm4gdGhlO1xuICAgIH1cblxuICAgIHZhciBfaXNFbmFibGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoU3RyaW5nKHRoZS50YXJnZXQuZ2V0QXR0cmlidXRlKHRoZS5hdHRyaWJ1dGUpKS50b0xvd2VyQ2FzZSgpID09PSAnb24nKTtcbiAgICB9XG5cbiAgICB2YXIgX2Rlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgS1RVdGlsLmRhdGEodGhlLmVsZW1lbnQpLnJlbW92ZSgndG9nZ2xlJyk7XG4gICAgfVxuXG4gICAgLy8gQ29uc3RydWN0IGNsYXNzXG4gICAgX2NvbnN0cnVjdCgpO1xuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyAqKiBQdWJsaWMgQVBJICAqKiAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAvLyBQbHVnaW4gQVBJXG4gICAgdGhlLnRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RvZ2dsZSgpO1xuICAgIH1cblxuICAgIHRoZS5lbmFibGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9lbmFibGUoKTtcbiAgICB9XG5cbiAgICB0aGUuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2Rpc2FibGUoKTtcbiAgICB9XG5cbiAgICB0aGUuaXNFbmFibGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfaXNFbmFibGVkKCk7XG4gICAgfVxuXG4gICAgdGhlLmdvRWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhlLmVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdGhlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLy8gRXZlbnQgQVBJXG4gICAgdGhlLm9uID0gZnVuY3Rpb24obmFtZSwgaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gS1RFdmVudEhhbmRsZXIub24odGhlLmVsZW1lbnQsIG5hbWUsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHRoZS5vbmUgPSBmdW5jdGlvbihuYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBLVEV2ZW50SGFuZGxlci5vbmUodGhlLmVsZW1lbnQsIG5hbWUsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHRoZS5vZmYgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHJldHVybiBLVEV2ZW50SGFuZGxlci5vZmYodGhlLmVsZW1lbnQsIG5hbWUpO1xuICAgIH1cblxuICAgIHRoZS50cmlnZ2VyID0gZnVuY3Rpb24obmFtZSwgZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIEtURXZlbnRIYW5kbGVyLnRyaWdnZXIodGhlLmVsZW1lbnQsIG5hbWUsIGV2ZW50LCB0aGUsIGV2ZW50KTtcbiAgICB9XG59O1xuXG4vLyBTdGF0aWMgbWV0aG9kc1xuS1RUb2dnbGUuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgaWYgKCBlbGVtZW50ICE9PSBudWxsICYmIEtUVXRpbC5kYXRhKGVsZW1lbnQpLmhhcygndG9nZ2xlJykgKSB7XG4gICAgICAgIHJldHVybiBLVFV0aWwuZGF0YShlbGVtZW50KS5nZXQoJ3RvZ2dsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuLy8gQ3JlYXRlIGluc3RhbmNlc1xuS1RUb2dnbGUuY3JlYXRlSW5zdGFuY2VzID0gZnVuY3Rpb24oc2VsZWN0b3IgPSAnW2RhdGEta3QtdG9nZ2xlXScpIHtcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQk9EWVwiKVswXTtcblxuICAgIC8vIEdldCBpbnN0YW5jZXNcbiAgICB2YXIgZWxlbWVudHMgPSBib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gICAgaWYgKCBlbGVtZW50cyAmJiBlbGVtZW50cy5sZW5ndGggPiAwICkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2VzXG4gICAgICAgICAgICBuZXcgS1RUb2dnbGUoZWxlbWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBHbG9iYWwgaW5pdGlhbGl6YXRpb25cbktUVG9nZ2xlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICBLVFRvZ2dsZS5jcmVhdGVJbnN0YW5jZXMoKTtcbn07XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgS1RUb2dnbGUuaW5pdCk7XG59IGVsc2Uge1xuICAgIEtUVG9nZ2xlLmluaXQoKTtcbn1cblxuLy8gV2VicGFjayBzdXBwb3J0XG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gS1RUb2dnbGU7XG59Il0sIm5hbWVzIjpbIktUVG9nZ2xlIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJ0aGUiLCJib2R5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImRlZmF1bHRPcHRpb25zIiwic2F2ZVN0YXRlIiwiX2NvbnN0cnVjdCIsIktUVXRpbCIsImRhdGEiLCJoYXMiLCJnZXQiLCJfaW5pdCIsImRlZXBFeHRlbmQiLCJ1aWQiLCJnZXRVbmlxdWVJZCIsInRhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJzdGF0ZSIsImhhc0F0dHJpYnV0ZSIsImF0dHJpYnV0ZSIsIl9oYW5kbGVycyIsInNldCIsImFkZEV2ZW50IiwiZSIsInByZXZlbnREZWZhdWx0IiwiX3RvZ2dsZSIsIktURXZlbnRIYW5kbGVyIiwidHJpZ2dlciIsIl9pc0VuYWJsZWQiLCJfZGlzYWJsZSIsIl9lbmFibGUiLCJzZXRBdHRyaWJ1dGUiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJLVENvb2tpZSIsInJlbW92ZUF0dHJpYnV0ZSIsInJlbW92ZSIsIlN0cmluZyIsInRvTG93ZXJDYXNlIiwiX2Rlc3Ryb3kiLCJ0b2dnbGUiLCJlbmFibGUiLCJkaXNhYmxlIiwiaXNFbmFibGVkIiwiZ29FbGVtZW50IiwiZGVzdHJveSIsIm9uIiwibmFtZSIsImhhbmRsZXIiLCJvbmUiLCJvZmYiLCJldmVudCIsImdldEluc3RhbmNlIiwiY3JlYXRlSW5zdGFuY2VzIiwic2VsZWN0b3IiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuIiwiaW5pdCIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/components/toggle.js\n");
>>>>>>> Stashed changes

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    animation = animations[t];
                }
            }
            
            KTUtil.addClass(el, animationName);

            KTUtil.one(el, animation, function() {
                KTUtil.removeClass(el, animationName);
            });

<<<<<<< Updated upstream
            if (callback) {
                KTUtil.one(el, animation, callback);
            }
        },

        transitionEnd: function(el, callback) {
            var transition;
            var transitions = {
                transition: 'transitionend',
                OTransition: 'oTransitionEnd',
                MozTransition: 'mozTransitionEnd',
                WebkitTransition: 'webkitTransitionEnd',
                msTransition: 'msTransitionEnd'
            };

            for (var t in transitions) {
                if (el.style[t] !== undefined) {
                    transition = transitions[t];
                }
            }

            KTUtil.one(el, transition, callback);
        },

        animationEnd: function(el, callback) {
            var animation;
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
                msAnimation: 'msAnimationEnd'
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    animation = animations[t];
                }
            }

            KTUtil.one(el, animation, callback);
        },

        animateDelay: function(el, value) {
            var vendors = ['webkit-', 'moz-', 'ms-', 'o-', ''];
            for (var i = 0; i < vendors.length; i++) {
                KTUtil.css(el, vendors[i] + 'animation-delay', value);
            }
        },

        animateDuration: function(el, value) {
            var vendors = ['webkit-', 'moz-', 'ms-', 'o-', ''];
            for (var i = 0; i < vendors.length; i++) {
                KTUtil.css(el, vendors[i] + 'animation-duration', value);
            }
        },

        scrollTo: function(target, offset, duration) {
            var duration = duration ? duration : 500;
            var targetPos = target ? KTUtil.offset(target).top : 0;
            var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            var from, to;

            if (offset) {
                targetPos = targetPos - offset;
            }

            from = scrollPos;
            to = targetPos;

            KTUtil.animate(from, to, duration, function(value) {
                document.documentElement.scrollTop = value;
                document.body.parentNode.scrollTop = value;
                document.body.scrollTop = value;
            }); //, easing, done
        },

        scrollTop: function(offset, duration) {
            KTUtil.scrollTo(null, offset, duration);
        },

        isArray: function(obj) {
            return obj && Array.isArray(obj);
        },

        isEmpty: function(obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    return false;
                }
            }

            return true;
        },

        numberString: function(nStr) {
            nStr += '';
            var x = nStr.split('.');
            var x1 = x[0];
            var x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
            }
            return x1 + x2;
        },

        isRTL: function() {
            return (document.querySelector('html').getAttribute("direction") === 'rtl');
        },

        snakeToCamel: function(s){
            return s.replace(/(\-\w)/g, function(m){return m[1].toUpperCase();});
        },

        filterBoolean: function(val) {
            // Convert string boolean
			if (val === true || val === 'true') {
				return true;
			}

			if (val === false || val === 'false') {
				return false;
			}

            return val;
        },

        setHTML: function(el, html) {
            el.innerHTML = html;
        },

        getHTML: function(el) {
            if (el) {
                return el.innerHTML;
            }
        },

        getDocumentHeight: function() {
            var body = document.body;
            var html = document.documentElement;

            return Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
        },

        getScrollTop: function() {
            return  (document.scrollingElement || document.documentElement).scrollTop;
        },

        colorLighten: function(color, amount) {
            const addLight = function(color, amount){
                let cc = parseInt(color,16) + amount;
                let c = (cc > 255) ? 255 : (cc);
                c = (c.toString(16).length > 1 ) ? c.toString(16) : `0${c.toString(16)}`;
                return c;
            }

            color = (color.indexOf("#")>=0) ? color.substring(1,color.length) : color;
            amount = parseInt((255*amount)/100);
            
            return color = `#${addLight(color.substring(0,2), amount)}${addLight(color.substring(2,4), amount)}${addLight(color.substring(4,6), amount)}`;
        },

        colorDarken: function(color, amount) {
            const subtractLight = function(color, amount){
                let cc = parseInt(color,16) - amount;
                let c = (cc < 0) ? 0 : (cc);
                c = (c.toString(16).length > 1 ) ? c.toString(16) : `0${c.toString(16)}`;

                return c;
            }
              
            color = (color.indexOf("#")>=0) ? color.substring(1,color.length) : color;
            amount = parseInt((255*amount)/100);

            return color = `#${subtractLight(color.substring(0,2), amount)}${subtractLight(color.substring(2,4), amount)}${subtractLight(color.substring(4,6), amount)}`;
        },

        // Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds
        throttle:  function (timer, func, delay) {
        	// If setTimeout is already scheduled, no need to do anything
        	if (timer) {
        		return;
        	}

        	// Schedule a setTimeout after delay seconds
        	timer  =  setTimeout(function () {
        		func();

        		// Once setTimeout function execution is finished, timerId = undefined so that in <br>
        		// the next scroll event function execution can be scheduled by the setTimeout
        		timer  =  undefined;
        	}, delay);
        },

        // Debounce function: Input as function which needs to be debounced and delay is the debounced time in milliseconds
        debounce: function (timer, func, delay) {
        	// Cancels the setTimeout method execution
        	clearTimeout(timer)

        	// Executes the func after delay time.
        	timer  =  setTimeout(func, delay);
        },

        parseJson: function(value) {
            if (typeof value === 'string') {
                value = value.replace(/'/g, "\"");

                var jsonStr = value.replace(/(\w+:)|(\w+ :)/g, function(matched) {
                    return '"' + matched.substring(0, matched.length - 1) + '":';
                });

                try {
                    value = JSON.parse(jsonStr);
                } catch(e) { }
            }

            return value;
        },

        getResponsiveValue: function(value, defaultValue) {
            var width = this.getViewPort().width;
            var result;

            value = KTUtil.parseJson(value);

            if (typeof value === 'object') {
                var resultKey;
                var resultBreakpoint = -1;
                var breakpoint;

                for (var key in value) {
                    if (key === 'default') {
                        breakpoint = 0;
                    } else {
                        breakpoint = this.getBreakpoint(key) ? this.getBreakpoint(key) : parseInt(key);
                    }

                    if (breakpoint <= width && breakpoint > resultBreakpoint) {
                        resultKey = key;
                        resultBreakpoint = breakpoint;
                    }
                }

                if (resultKey) {
                    result = value[resultKey];
                } else {
                    result = value;
                }
            } else {
                result = value;
            }

            return result;
        },

        each: function(array, callback) {
            return [].slice.call(array).map(callback);
        },

        getSelectorMatchValue: function(value) {
            var result = null;
            value = KTUtil.parseJson(value);

            if ( typeof value === 'object' ) {
                // Match condition
                if ( value['match'] !== undefined ) {
                    var selector = Object.keys(value['match'])[0];
                    value = Object.values(value['match'])[0];

                    if ( document.querySelector(selector) !== null ) {
                        result = value;
                    }
                }
            } else {
                result = value;
            }

            return result;
        },

        getConditionalValue: function(value) {
            var value = KTUtil.parseJson(value);
            var result = KTUtil.getResponsiveValue(value);

            if ( result !== null && result['match'] !== undefined ) {
                result = KTUtil.getSelectorMatchValue(result);
            }

            if ( result === null && value !== null && value['default'] !== undefined ) {
                result = value['default'];
            }

            return result;
        },

        getCssVariableValue: function(variableName) {
            var hex = getComputedStyle(document.documentElement).getPropertyValue(variableName);
            if ( hex && hex.length > 0 ) {
                hex = hex.trim();
            }

            return hex;
        },

        isInViewport: function(element) {        
            var rect = element.getBoundingClientRect();

            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        },

        onDOMContentLoaded: function(callback) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', callback);
            } else {
                callback();
            }
        },

        inIframe: function() {
            try {
                return window.self !== window.top;
            } catch (e) {
                return true;
            }
        }
    }
}();

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTUtil;
}
=======
"use strict";
eval("\n/**\n * @class KTUtil  base utilize class that privides helper functions\n */\n// Polyfills\n// Element.matches() polyfill\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nif (!Element.prototype.matches) {\n  Element.prototype.matches = function (s) {\n    var matches = (this.document || this.ownerDocument).querySelectorAll(s),\n        i = matches.length;\n\n    while (--i >= 0 && matches.item(i) !== this) {}\n\n    return i > -1;\n  };\n}\n/**\n * Element.closest() polyfill\n * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill\n */\n\n\nif (!Element.prototype.closest) {\n  Element.prototype.closest = function (s) {\n    var el = this;\n    var ancestor = this;\n    if (!document.documentElement.contains(el)) return null;\n\n    do {\n      if (ancestor.matches(s)) return ancestor;\n      ancestor = ancestor.parentElement;\n    } while (ancestor !== null);\n\n    return null;\n  };\n}\n/**\n * ChildNode.remove() polyfill\n * https://gomakethings.com/removing-an-element-from-the-dom-the-es6-way/\n * @author Chris Ferdinandi\n * @license MIT\n */\n\n\n(function (elem) {\n  for (var i = 0; i < elem.length; i++) {\n    if (!window[elem[i]] || 'remove' in window[elem[i]].prototype) continue;\n\n    window[elem[i]].prototype.remove = function () {\n      this.parentNode.removeChild(this);\n    };\n  }\n})(['Element', 'CharacterData', 'DocumentType']); //\n// requestAnimationFrame polyfill by Erik Möller.\n//  With fixes from Paul Irish and Tino Zijdel\n//\n//  http://paulirish.com/2011/requestanimationframe-for-smart-animating/\n//  http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating\n//\n//  MIT license\n//\n\n\n(function () {\n  var lastTime = 0;\n  var vendors = ['webkit', 'moz'];\n\n  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {\n    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];\n    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];\n  }\n\n  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback) {\n    var currTime = new Date().getTime();\n    var timeToCall = Math.max(0, 16 - (currTime - lastTime));\n    var id = window.setTimeout(function () {\n      callback(currTime + timeToCall);\n    }, timeToCall);\n    lastTime = currTime + timeToCall;\n    return id;\n  };\n  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {\n    clearTimeout(id);\n  };\n})(); // Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/prepend()/prepend().md\n\n\n(function (arr) {\n  arr.forEach(function (item) {\n    if (item.hasOwnProperty('prepend')) {\n      return;\n    }\n\n    Object.defineProperty(item, 'prepend', {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function prepend() {\n        var argArr = Array.prototype.slice.call(arguments),\n            docFrag = document.createDocumentFragment();\n        argArr.forEach(function (argItem) {\n          var isNode = argItem instanceof Node;\n          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));\n        });\n        this.insertBefore(docFrag, this.firstChild);\n      }\n    });\n  });\n})([Element.prototype, Document.prototype, DocumentFragment.prototype]); // getAttributeNames\n\n\nif (Element.prototype.getAttributeNames == undefined) {\n  Element.prototype.getAttributeNames = function () {\n    var attributes = this.attributes;\n    var length = attributes.length;\n    var result = new Array(length);\n\n    for (var i = 0; i < length; i++) {\n      result[i] = attributes[i].name;\n    }\n\n    return result;\n  };\n} // Global variables\n\n\nwindow.KTUtilElementDataStore = {};\nwindow.KTUtilElementDataStoreID = 0;\nwindow.KTUtilDelegatedEventHandlers = {};\n\nvar KTUtil = function () {\n  var resizeHandlers = [];\n  /**\n   * Handle window resize event with some\n   * delay to attach event handlers upon resize complete\n   */\n\n  var _windowResizeHandler = function _windowResizeHandler() {\n    var _runResizeHandlers = function _runResizeHandlers() {\n      // reinitialize other subscribed elements\n      for (var i = 0; i < resizeHandlers.length; i++) {\n        var each = resizeHandlers[i];\n        each.call();\n      }\n    };\n\n    var timer;\n    window.addEventListener('resize', function () {\n      KTUtil.throttle(timer, function () {\n        _runResizeHandlers();\n      }, 200);\n    });\n  };\n\n  return {\n    /**\n     * Class main initializer.\n     * @param {object} settings.\n     * @returns null\n     */\n    //main function to initiate the theme\n    init: function init(settings) {\n      _windowResizeHandler();\n    },\n\n    /**\n     * Adds window resize event handler.\n     * @param {function} callback function.\n     */\n    addResizeHandler: function addResizeHandler(callback) {\n      resizeHandlers.push(callback);\n    },\n\n    /**\n     * Removes window resize event handler.\n     * @param {function} callback function.\n     */\n    removeResizeHandler: function removeResizeHandler(callback) {\n      for (var i = 0; i < resizeHandlers.length; i++) {\n        if (callback === resizeHandlers[i]) {\n          delete resizeHandlers[i];\n        }\n      }\n    },\n\n    /**\n     * Trigger window resize handlers.\n     */\n    runResizeHandlers: function runResizeHandlers() {\n      _runResizeHandlers();\n    },\n    resize: function resize() {\n      if (typeof Event === 'function') {\n        // modern browsers\n        window.dispatchEvent(new Event('resize'));\n      } else {\n        // for IE and other old browsers\n        // causes deprecation warning on modern browsers\n        var evt = window.document.createEvent('UIEvents');\n        evt.initUIEvent('resize', true, false, window, 0);\n        window.dispatchEvent(evt);\n      }\n    },\n\n    /**\n     * Get GET parameter value from URL.\n     * @param {string} paramName Parameter name.\n     * @returns {string}\n     */\n    getURLParam: function getURLParam(paramName) {\n      var searchString = window.location.search.substring(1),\n          i,\n          val,\n          params = searchString.split(\"&\");\n\n      for (i = 0; i < params.length; i++) {\n        val = params[i].split(\"=\");\n\n        if (val[0] == paramName) {\n          return unescape(val[1]);\n        }\n      }\n\n      return null;\n    },\n\n    /**\n     * Checks whether current device is mobile touch.\n     * @returns {boolean}\n     */\n    isMobileDevice: function isMobileDevice() {\n      var test = this.getViewPort().width < this.getBreakpoint('lg') ? true : false;\n\n      if (test === false) {\n        // For use within normal web clients\n        test = navigator.userAgent.match(/iPad/i) != null;\n      }\n\n      return test;\n    },\n\n    /**\n     * Checks whether current device is desktop.\n     * @returns {boolean}\n     */\n    isDesktopDevice: function isDesktopDevice() {\n      return KTUtil.isMobileDevice() ? false : true;\n    },\n\n    /**\n     * Gets browser window viewport size. Ref:\n     * http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/\n     * @returns {object}\n     */\n    getViewPort: function getViewPort() {\n      var e = window,\n          a = 'inner';\n\n      if (!('innerWidth' in window)) {\n        a = 'client';\n        e = document.documentElement || document.body;\n      }\n\n      return {\n        width: e[a + 'Width'],\n        height: e[a + 'Height']\n      };\n    },\n\n    /**\n           * Checks whether given device mode is currently activated.\n           * @param {string} mode Responsive mode name(e.g: desktop,\n           *     desktop-and-tablet, tablet, tablet-and-mobile, mobile)\n           * @returns {boolean}\n           */\n    isBreakpointUp: function isBreakpointUp(mode) {\n      var width = this.getViewPort().width;\n      var breakpoint = this.getBreakpoint(mode);\n      return width >= breakpoint;\n    },\n    isBreakpointDown: function isBreakpointDown(mode) {\n      var width = this.getViewPort().width;\n      var breakpoint = this.getBreakpoint(mode);\n      return width < breakpoint;\n    },\n    getViewportWidth: function getViewportWidth() {\n      return this.getViewPort().width;\n    },\n\n    /**\n     * Generates unique ID for give prefix.\n     * @param {string} prefix Prefix for generated ID\n     * @returns {boolean}\n     */\n    getUniqueId: function getUniqueId(prefix) {\n      return prefix + Math.floor(Math.random() * new Date().getTime());\n    },\n\n    /**\n     * Gets window width for give breakpoint mode.\n     * @param {string} mode Responsive mode name(e.g: xl, lg, md, sm)\n     * @returns {number}\n     */\n    getBreakpoint: function getBreakpoint(breakpoint) {\n      var value = this.getCssVariableValue('--bs-' + breakpoint);\n\n      if (value) {\n        value = parseInt(value.trim());\n      }\n\n      return value;\n    },\n\n    /**\n     * Checks whether object has property matchs given key path.\n     * @param {object} obj Object contains values paired with given key path\n     * @param {string} keys Keys path seperated with dots\n     * @returns {object}\n     */\n    isset: function isset(obj, keys) {\n      var stone;\n      keys = keys || '';\n\n      if (keys.indexOf('[') !== -1) {\n        throw new Error('Unsupported object path notation.');\n      }\n\n      keys = keys.split('.');\n\n      do {\n        if (obj === undefined) {\n          return false;\n        }\n\n        stone = keys.shift();\n\n        if (!obj.hasOwnProperty(stone)) {\n          return false;\n        }\n\n        obj = obj[stone];\n      } while (keys.length);\n\n      return true;\n    },\n\n    /**\n     * Gets highest z-index of the given element parents\n     * @param {object} el jQuery element object\n     * @returns {number}\n     */\n    getHighestZindex: function getHighestZindex(el) {\n      var position, value;\n\n      while (el && el !== document) {\n        // Ignore z-index if position is set to a value where z-index is ignored by the browser\n        // This makes behavior of this function consistent across browsers\n        // WebKit always returns auto if the element is positioned\n        position = KTUtil.css(el, 'position');\n\n        if (position === \"absolute\" || position === \"relative\" || position === \"fixed\") {\n          // IE returns 0 when zIndex is not specified\n          // other browsers return a string\n          // we ignore the case of nested elements with an explicit value of 0\n          // <div style=\"z-index: -10;\"><div style=\"z-index: 0;\"></div></div>\n          value = parseInt(KTUtil.css(el, 'z-index'));\n\n          if (!isNaN(value) && value !== 0) {\n            return value;\n          }\n        }\n\n        el = el.parentNode;\n      }\n\n      return 1;\n    },\n\n    /**\n     * Checks whether the element has any parent with fixed positionfreg\n     * @param {object} el jQuery element object\n     * @returns {boolean}\n     */\n    hasFixedPositionedParent: function hasFixedPositionedParent(el) {\n      var position;\n\n      while (el && el !== document) {\n        position = KTUtil.css(el, 'position');\n\n        if (position === \"fixed\") {\n          return true;\n        }\n\n        el = el.parentNode;\n      }\n\n      return false;\n    },\n\n    /**\n     * Simulates delay\n     */\n    sleep: function sleep(milliseconds) {\n      var start = new Date().getTime();\n\n      for (var i = 0; i < 1e7; i++) {\n        if (new Date().getTime() - start > milliseconds) {\n          break;\n        }\n      }\n    },\n\n    /**\n     * Gets randomly generated integer value within given min and max range\n     * @param {number} min Range start value\n     * @param {number} max Range end value\n     * @returns {number}\n     */\n    getRandomInt: function getRandomInt(min, max) {\n      return Math.floor(Math.random() * (max - min + 1)) + min;\n    },\n\n    /**\n     * Checks whether Angular library is included\n     * @returns {boolean}\n     */\n    isAngularVersion: function isAngularVersion() {\n      return window.Zone !== undefined ? true : false;\n    },\n    // Deep extend:  $.extend(true, {}, objA, objB);\n    deepExtend: function deepExtend(out) {\n      out = out || {};\n\n      for (var i = 1; i < arguments.length; i++) {\n        var obj = arguments[i];\n        if (!obj) continue;\n\n        for (var key in obj) {\n          if (!obj.hasOwnProperty(key)) {\n            continue;\n          } // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/\n\n\n          if (Object.prototype.toString.call(obj[key]) === '[object Object]') {\n            out[key] = KTUtil.deepExtend(out[key], obj[key]);\n            continue;\n          }\n\n          out[key] = obj[key];\n        }\n      }\n\n      return out;\n    },\n    // extend:  $.extend({}, objA, objB);\n    extend: function extend(out) {\n      out = out || {};\n\n      for (var i = 1; i < arguments.length; i++) {\n        if (!arguments[i]) continue;\n\n        for (var key in arguments[i]) {\n          if (arguments[i].hasOwnProperty(key)) out[key] = arguments[i][key];\n        }\n      }\n\n      return out;\n    },\n    getBody: function getBody() {\n      return document.getElementsByTagName('body')[0];\n    },\n\n    /**\n     * Checks whether the element has given classes\n     * @param {object} el jQuery element object\n     * @param {string} Classes string\n     * @returns {boolean}\n     */\n    hasClasses: function hasClasses(el, classes) {\n      if (!el) {\n        return;\n      }\n\n      var classesArr = classes.split(\" \");\n\n      for (var i = 0; i < classesArr.length; i++) {\n        if (KTUtil.hasClass(el, KTUtil.trim(classesArr[i])) == false) {\n          return false;\n        }\n      }\n\n      return true;\n    },\n    hasClass: function hasClass(el, className) {\n      if (!el) {\n        return;\n      }\n\n      return el.classList ? el.classList.contains(className) : new RegExp('\\\\b' + className + '\\\\b').test(el.className);\n    },\n    addClass: function addClass(el, className) {\n      if (!el || typeof className === 'undefined') {\n        return;\n      }\n\n      var classNames = className.split(' ');\n\n      if (el.classList) {\n        for (var i = 0; i < classNames.length; i++) {\n          if (classNames[i] && classNames[i].length > 0) {\n            el.classList.add(KTUtil.trim(classNames[i]));\n          }\n        }\n      } else if (!KTUtil.hasClass(el, className)) {\n        for (var x = 0; x < classNames.length; x++) {\n          el.className += ' ' + KTUtil.trim(classNames[x]);\n        }\n      }\n    },\n    removeClass: function removeClass(el, className) {\n      if (!el || typeof className === 'undefined') {\n        return;\n      }\n\n      var classNames = className.split(' ');\n\n      if (el.classList) {\n        for (var i = 0; i < classNames.length; i++) {\n          el.classList.remove(KTUtil.trim(classNames[i]));\n        }\n      } else if (KTUtil.hasClass(el, className)) {\n        for (var x = 0; x < classNames.length; x++) {\n          el.className = el.className.replace(new RegExp('\\\\b' + KTUtil.trim(classNames[x]) + '\\\\b', 'g'), '');\n        }\n      }\n    },\n    triggerCustomEvent: function triggerCustomEvent(el, eventName, data) {\n      var event;\n\n      if (window.CustomEvent) {\n        event = new CustomEvent(eventName, {\n          detail: data\n        });\n      } else {\n        event = document.createEvent('CustomEvent');\n        event.initCustomEvent(eventName, true, true, data);\n      }\n\n      el.dispatchEvent(event);\n    },\n    triggerEvent: function triggerEvent(node, eventName) {\n      // Make sure we use the ownerDocument from the provided node to avoid cross-window problems\n      var doc;\n\n      if (node.ownerDocument) {\n        doc = node.ownerDocument;\n      } else if (node.nodeType == 9) {\n        // the node may be the document itself, nodeType 9 = DOCUMENT_NODE\n        doc = node;\n      } else {\n        throw new Error(\"Invalid node passed to fireEvent: \" + node.id);\n      }\n\n      if (node.dispatchEvent) {\n        // Gecko-style approach (now the standard) takes more work\n        var eventClass = \"\"; // Different events have different event classes.\n        // If this switch statement can't map an eventName to an eventClass,\n        // the event firing is going to fail.\n\n        switch (eventName) {\n          case \"click\": // Dispatching of 'click' appears to not work correctly in Safari. Use 'mousedown' or 'mouseup' instead.\n\n          case \"mouseenter\":\n          case \"mouseleave\":\n          case \"mousedown\":\n          case \"mouseup\":\n            eventClass = \"MouseEvents\";\n            break;\n\n          case \"focus\":\n          case \"change\":\n          case \"blur\":\n          case \"select\":\n            eventClass = \"HTMLEvents\";\n            break;\n\n          default:\n            throw \"fireEvent: Couldn't find an event class for event '\" + eventName + \"'.\";\n            break;\n        }\n\n        var event = doc.createEvent(eventClass);\n        var bubbles = eventName == \"change\" ? false : true;\n        event.initEvent(eventName, bubbles, true); // All events created as bubbling and cancelable.\n\n        event.synthetic = true; // allow detection of synthetic events\n        // The second parameter says go ahead with the default action\n\n        node.dispatchEvent(event, true);\n      } else if (node.fireEvent) {\n        // IE-old school style\n        var event = doc.createEventObject();\n        event.synthetic = true; // allow detection of synthetic events\n\n        node.fireEvent(\"on\" + eventName, event);\n      }\n    },\n    index: function index(el) {\n      var c = el.parentNode.children,\n          i = 0;\n\n      for (; i < c.length; i++) {\n        if (c[i] == el) return i;\n      }\n    },\n    trim: function trim(string) {\n      return string.trim();\n    },\n    eventTriggered: function eventTriggered(e) {\n      if (e.currentTarget.dataset.triggered) {\n        return true;\n      } else {\n        e.currentTarget.dataset.triggered = true;\n        return false;\n      }\n    },\n    remove: function remove(el) {\n      if (el && el.parentNode) {\n        el.parentNode.removeChild(el);\n      }\n    },\n    find: function find(parent, query) {\n      if (parent !== null) {\n        return parent.querySelector(query);\n      } else {\n        return null;\n      }\n    },\n    findAll: function findAll(parent, query) {\n      if (parent !== null) {\n        return parent.querySelectorAll(query);\n      } else {\n        return null;\n      }\n    },\n    insertAfter: function insertAfter(el, referenceNode) {\n      return referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);\n    },\n    parents: function parents(elem, selector) {\n      // Set up a parent array\n      var parents = []; // Push each parent element to the array\n\n      for (; elem && elem !== document; elem = elem.parentNode) {\n        if (selector) {\n          if (elem.matches(selector)) {\n            parents.push(elem);\n          }\n\n          continue;\n        }\n\n        parents.push(elem);\n      } // Return our parent array\n\n\n      return parents;\n    },\n    children: function children(el, selector, log) {\n      if (!el || !el.childNodes) {\n        return null;\n      }\n\n      var result = [],\n          i = 0,\n          l = el.childNodes.length;\n\n      for (var i; i < l; ++i) {\n        if (el.childNodes[i].nodeType == 1 && KTUtil.matches(el.childNodes[i], selector, log)) {\n          result.push(el.childNodes[i]);\n        }\n      }\n\n      return result;\n    },\n    child: function child(el, selector, log) {\n      var children = KTUtil.children(el, selector, log);\n      return children ? children[0] : null;\n    },\n    matches: function matches(el, selector, log) {\n      var p = Element.prototype;\n\n      var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function (s) {\n        return [].indexOf.call(document.querySelectorAll(s), this) !== -1;\n      };\n\n      if (el && el.tagName) {\n        return f.call(el, selector);\n      } else {\n        return false;\n      }\n    },\n    data: function data(el) {\n      return {\n        set: function set(name, data) {\n          if (!el) {\n            return;\n          }\n\n          if (el.customDataTag === undefined) {\n            window.KTUtilElementDataStoreID++;\n            el.customDataTag = window.KTUtilElementDataStoreID;\n          }\n\n          if (window.KTUtilElementDataStore[el.customDataTag] === undefined) {\n            window.KTUtilElementDataStore[el.customDataTag] = {};\n          }\n\n          window.KTUtilElementDataStore[el.customDataTag][name] = data;\n        },\n        get: function get(name) {\n          if (!el) {\n            return;\n          }\n\n          if (el.customDataTag === undefined) {\n            return null;\n          }\n\n          return this.has(name) ? window.KTUtilElementDataStore[el.customDataTag][name] : null;\n        },\n        has: function has(name) {\n          if (!el) {\n            return false;\n          }\n\n          if (el.customDataTag === undefined) {\n            return false;\n          }\n\n          return window.KTUtilElementDataStore[el.customDataTag] && window.KTUtilElementDataStore[el.customDataTag][name] ? true : false;\n        },\n        remove: function remove(name) {\n          if (el && this.has(name)) {\n            delete window.KTUtilElementDataStore[el.customDataTag][name];\n          }\n        }\n      };\n    },\n    outerWidth: function outerWidth(el, margin) {\n      var width;\n\n      if (margin === true) {\n        width = parseFloat(el.offsetWidth);\n        width += parseFloat(KTUtil.css(el, 'margin-left')) + parseFloat(KTUtil.css(el, 'margin-right'));\n        return parseFloat(width);\n      } else {\n        width = parseFloat(el.offsetWidth);\n        return width;\n      }\n    },\n    offset: function offset(el) {\n      var rect, win;\n\n      if (!el) {\n        return;\n      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)\n      // Support: IE <=11 only\n      // Running getBoundingClientRect on a\n      // disconnected node in IE throws an error\n\n\n      if (!el.getClientRects().length) {\n        return {\n          top: 0,\n          left: 0\n        };\n      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR\n\n\n      rect = el.getBoundingClientRect();\n      win = el.ownerDocument.defaultView;\n      return {\n        top: rect.top + win.pageYOffset,\n        left: rect.left + win.pageXOffset,\n        right: window.innerWidth - (el.offsetLeft + el.offsetWidth)\n      };\n    },\n    height: function height(el) {\n      return KTUtil.css(el, 'height');\n    },\n    outerHeight: function outerHeight(el, withMargin) {\n      var height = el.offsetHeight;\n      var style;\n\n      if (typeof withMargin !== 'undefined' && withMargin === true) {\n        style = getComputedStyle(el);\n        height += parseInt(style.marginTop) + parseInt(style.marginBottom);\n        return height;\n      } else {\n        return height;\n      }\n    },\n    visible: function visible(el) {\n      return !(el.offsetWidth === 0 && el.offsetHeight === 0);\n    },\n    attr: function attr(el, name, value) {\n      if (el == undefined) {\n        return;\n      }\n\n      if (value !== undefined) {\n        el.setAttribute(name, value);\n      } else {\n        return el.getAttribute(name);\n      }\n    },\n    hasAttr: function hasAttr(el, name) {\n      if (el == undefined) {\n        return;\n      }\n\n      return el.getAttribute(name) ? true : false;\n    },\n    removeAttr: function removeAttr(el, name) {\n      if (el == undefined) {\n        return;\n      }\n\n      el.removeAttribute(name);\n    },\n    animate: function animate(from, to, duration, update, easing, done) {\n      /**\n       * TinyAnimate.easings\n       *  Adapted from jQuery Easing\n       */\n      var easings = {};\n      var easing;\n\n      easings.linear = function (t, b, c, d) {\n        return c * t / d + b;\n      };\n\n      easing = easings.linear; // Early bail out if called incorrectly\n\n      if (typeof from !== 'number' || typeof to !== 'number' || typeof duration !== 'number' || typeof update !== 'function') {\n        return;\n      } // Create mock done() function if necessary\n\n\n      if (typeof done !== 'function') {\n        done = function done() {};\n      } // Pick implementation (requestAnimationFrame | setTimeout)\n\n\n      var rAF = window.requestAnimationFrame || function (callback) {\n        window.setTimeout(callback, 1000 / 50);\n      }; // Animation loop\n\n\n      var canceled = false;\n      var change = to - from;\n\n      function loop(timestamp) {\n        var time = (timestamp || +new Date()) - start;\n\n        if (time >= 0) {\n          update(easing(time, from, change, duration));\n        }\n\n        if (time >= 0 && time >= duration) {\n          update(to);\n          done();\n        } else {\n          rAF(loop);\n        }\n      }\n\n      update(from); // Start animation loop\n\n      var start = window.performance && window.performance.now ? window.performance.now() : +new Date();\n      rAF(loop);\n    },\n    actualCss: function actualCss(el, prop, cache) {\n      var css = '';\n\n      if (el instanceof HTMLElement === false) {\n        return;\n      }\n\n      if (!el.getAttribute('kt-hidden-' + prop) || cache === false) {\n        var value; // the element is hidden so:\n        // making the el block so we can meassure its height but still be hidden\n\n        css = el.style.cssText;\n        el.style.cssText = 'position: absolute; visibility: hidden; display: block;';\n\n        if (prop == 'width') {\n          value = el.offsetWidth;\n        } else if (prop == 'height') {\n          value = el.offsetHeight;\n        }\n\n        el.style.cssText = css; // store it in cache\n\n        el.setAttribute('kt-hidden-' + prop, value);\n        return parseFloat(value);\n      } else {\n        // store it in cache\n        return parseFloat(el.getAttribute('kt-hidden-' + prop));\n      }\n    },\n    actualHeight: function actualHeight(el, cache) {\n      return KTUtil.actualCss(el, 'height', cache);\n    },\n    actualWidth: function actualWidth(el, cache) {\n      return KTUtil.actualCss(el, 'width', cache);\n    },\n    getScroll: function getScroll(element, method) {\n      // The passed in `method` value should be 'Top' or 'Left'\n      method = 'scroll' + method;\n      return element == window || element == document ? self[method == 'scrollTop' ? 'pageYOffset' : 'pageXOffset'] || browserSupportsBoxModel && document.documentElement[method] || document.body[method] : element[method];\n    },\n    css: function css(el, styleProp, value, important) {\n      if (!el) {\n        return;\n      }\n\n      if (value !== undefined) {\n        if (important === true) {\n          el.style.setProperty(styleProp, value, 'important');\n        } else {\n          el.style[styleProp] = value;\n        }\n      } else {\n        var defaultView = (el.ownerDocument || document).defaultView; // W3C standard way:\n\n        if (defaultView && defaultView.getComputedStyle) {\n          // sanitize property name to css notation\n          // (hyphen separated words eg. font-Size)\n          styleProp = styleProp.replace(/([A-Z])/g, \"-$1\").toLowerCase();\n          return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);\n        } else if (el.currentStyle) {\n          // IE\n          // sanitize property name to camelCase\n          styleProp = styleProp.replace(/\\-(\\w)/g, function (str, letter) {\n            return letter.toUpperCase();\n          });\n          value = el.currentStyle[styleProp]; // convert other units to pixels on IE\n\n          if (/^\\d+(em|pt|%|ex)?$/i.test(value)) {\n            return function (value) {\n              var oldLeft = el.style.left,\n                  oldRsLeft = el.runtimeStyle.left;\n              el.runtimeStyle.left = el.currentStyle.left;\n              el.style.left = value || 0;\n              value = el.style.pixelLeft + \"px\";\n              el.style.left = oldLeft;\n              el.runtimeStyle.left = oldRsLeft;\n              return value;\n            }(value);\n          }\n\n          return value;\n        }\n      }\n    },\n    slide: function slide(el, dir, speed, callback, recalcMaxHeight) {\n      if (!el || dir == 'up' && KTUtil.visible(el) === false || dir == 'down' && KTUtil.visible(el) === true) {\n        return;\n      }\n\n      speed = speed ? speed : 600;\n      var calcHeight = KTUtil.actualHeight(el);\n      var calcPaddingTop = false;\n      var calcPaddingBottom = false;\n\n      if (KTUtil.css(el, 'padding-top') && KTUtil.data(el).has('slide-padding-top') !== true) {\n        KTUtil.data(el).set('slide-padding-top', KTUtil.css(el, 'padding-top'));\n      }\n\n      if (KTUtil.css(el, 'padding-bottom') && KTUtil.data(el).has('slide-padding-bottom') !== true) {\n        KTUtil.data(el).set('slide-padding-bottom', KTUtil.css(el, 'padding-bottom'));\n      }\n\n      if (KTUtil.data(el).has('slide-padding-top')) {\n        calcPaddingTop = parseInt(KTUtil.data(el).get('slide-padding-top'));\n      }\n\n      if (KTUtil.data(el).has('slide-padding-bottom')) {\n        calcPaddingBottom = parseInt(KTUtil.data(el).get('slide-padding-bottom'));\n      }\n\n      if (dir == 'up') {\n        // up\n        el.style.cssText = 'display: block; overflow: hidden;';\n\n        if (calcPaddingTop) {\n          KTUtil.animate(0, calcPaddingTop, speed, function (value) {\n            el.style.paddingTop = calcPaddingTop - value + 'px';\n          }, 'linear');\n        }\n\n        if (calcPaddingBottom) {\n          KTUtil.animate(0, calcPaddingBottom, speed, function (value) {\n            el.style.paddingBottom = calcPaddingBottom - value + 'px';\n          }, 'linear');\n        }\n\n        KTUtil.animate(0, calcHeight, speed, function (value) {\n          el.style.height = calcHeight - value + 'px';\n        }, 'linear', function () {\n          el.style.height = '';\n          el.style.display = 'none';\n\n          if (typeof callback === 'function') {\n            callback();\n          }\n        });\n      } else if (dir == 'down') {\n        // down\n        el.style.cssText = 'display: block; overflow: hidden;';\n\n        if (calcPaddingTop) {\n          KTUtil.animate(0, calcPaddingTop, speed, function (value) {\n            //\n            el.style.paddingTop = value + 'px';\n          }, 'linear', function () {\n            el.style.paddingTop = '';\n          });\n        }\n\n        if (calcPaddingBottom) {\n          KTUtil.animate(0, calcPaddingBottom, speed, function (value) {\n            el.style.paddingBottom = value + 'px';\n          }, 'linear', function () {\n            el.style.paddingBottom = '';\n          });\n        }\n\n        KTUtil.animate(0, calcHeight, speed, function (value) {\n          el.style.height = value + 'px';\n        }, 'linear', function () {\n          el.style.height = '';\n          el.style.display = '';\n          el.style.overflow = '';\n\n          if (typeof callback === 'function') {\n            callback();\n          }\n        });\n      }\n    },\n    slideUp: function slideUp(el, speed, callback) {\n      KTUtil.slide(el, 'up', speed, callback);\n    },\n    slideDown: function slideDown(el, speed, callback) {\n      KTUtil.slide(el, 'down', speed, callback);\n    },\n    show: function show(el, display) {\n      if (typeof el !== 'undefined') {\n        el.style.display = display ? display : 'block';\n      }\n    },\n    hide: function hide(el) {\n      if (typeof el !== 'undefined') {\n        el.style.display = 'none';\n      }\n    },\n    addEvent: function addEvent(el, type, handler, one) {\n      if (typeof el !== 'undefined' && el !== null) {\n        el.addEventListener(type, handler);\n      }\n    },\n    removeEvent: function removeEvent(el, type, handler) {\n      if (el !== null) {\n        el.removeEventListener(type, handler);\n      }\n    },\n    on: function on(element, selector, event, handler) {\n      if (element === null) {\n        return;\n      }\n\n      var eventId = KTUtil.getUniqueId('event');\n\n      window.KTUtilDelegatedEventHandlers[eventId] = function (e) {\n        var targets = element.querySelectorAll(selector);\n        var target = e.target;\n\n        while (target && target !== element) {\n          for (var i = 0, j = targets.length; i < j; i++) {\n            if (target === targets[i]) {\n              handler.call(target, e);\n            }\n          }\n\n          target = target.parentNode;\n        }\n      };\n\n      KTUtil.addEvent(element, event, window.KTUtilDelegatedEventHandlers[eventId]);\n      return eventId;\n    },\n    off: function off(element, event, eventId) {\n      if (!element || !window.KTUtilDelegatedEventHandlers[eventId]) {\n        return;\n      }\n\n      KTUtil.removeEvent(element, event, window.KTUtilDelegatedEventHandlers[eventId]);\n      delete window.KTUtilDelegatedEventHandlers[eventId];\n    },\n    one: function onetime(el, type, callback) {\n      el.addEventListener(type, function callee(e) {\n        // remove event\n        if (e.target && e.target.removeEventListener) {\n          e.target.removeEventListener(e.type, callee);\n        } // need to verify from https://themeforest.net/author_dashboard#comment_23615588\n\n\n        if (el && el.removeEventListener) {\n          e.currentTarget.removeEventListener(e.type, callee);\n        } // call handler\n\n\n        return callback(e);\n      });\n    },\n    hash: function hash(str) {\n      var hash = 0,\n          i,\n          chr;\n      if (str.length === 0) return hash;\n\n      for (i = 0; i < str.length; i++) {\n        chr = str.charCodeAt(i);\n        hash = (hash << 5) - hash + chr;\n        hash |= 0; // Convert to 32bit integer\n      }\n\n      return hash;\n    },\n    animateClass: function animateClass(el, animationName, callback) {\n      var animation;\n      var animations = {\n        animation: 'animationend',\n        OAnimation: 'oAnimationEnd',\n        MozAnimation: 'mozAnimationEnd',\n        WebkitAnimation: 'webkitAnimationEnd',\n        msAnimation: 'msAnimationEnd'\n      };\n\n      for (var t in animations) {\n        if (el.style[t] !== undefined) {\n          animation = animations[t];\n        }\n      }\n\n      KTUtil.addClass(el, animationName);\n      KTUtil.one(el, animation, function () {\n        KTUtil.removeClass(el, animationName);\n      });\n\n      if (callback) {\n        KTUtil.one(el, animation, callback);\n      }\n    },\n    transitionEnd: function transitionEnd(el, callback) {\n      var transition;\n      var transitions = {\n        transition: 'transitionend',\n        OTransition: 'oTransitionEnd',\n        MozTransition: 'mozTransitionEnd',\n        WebkitTransition: 'webkitTransitionEnd',\n        msTransition: 'msTransitionEnd'\n      };\n\n      for (var t in transitions) {\n        if (el.style[t] !== undefined) {\n          transition = transitions[t];\n        }\n      }\n\n      KTUtil.one(el, transition, callback);\n    },\n    animationEnd: function animationEnd(el, callback) {\n      var animation;\n      var animations = {\n        animation: 'animationend',\n        OAnimation: 'oAnimationEnd',\n        MozAnimation: 'mozAnimationEnd',\n        WebkitAnimation: 'webkitAnimationEnd',\n        msAnimation: 'msAnimationEnd'\n      };\n\n      for (var t in animations) {\n        if (el.style[t] !== undefined) {\n          animation = animations[t];\n        }\n      }\n\n      KTUtil.one(el, animation, callback);\n    },\n    animateDelay: function animateDelay(el, value) {\n      var vendors = ['webkit-', 'moz-', 'ms-', 'o-', ''];\n\n      for (var i = 0; i < vendors.length; i++) {\n        KTUtil.css(el, vendors[i] + 'animation-delay', value);\n      }\n    },\n    animateDuration: function animateDuration(el, value) {\n      var vendors = ['webkit-', 'moz-', 'ms-', 'o-', ''];\n\n      for (var i = 0; i < vendors.length; i++) {\n        KTUtil.css(el, vendors[i] + 'animation-duration', value);\n      }\n    },\n    scrollTo: function scrollTo(target, offset, duration) {\n      var duration = duration ? duration : 500;\n      var targetPos = target ? KTUtil.offset(target).top : 0;\n      var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;\n      var from, to;\n\n      if (offset) {\n        targetPos = targetPos - offset;\n      }\n\n      from = scrollPos;\n      to = targetPos;\n      KTUtil.animate(from, to, duration, function (value) {\n        document.documentElement.scrollTop = value;\n        document.body.parentNode.scrollTop = value;\n        document.body.scrollTop = value;\n      }); //, easing, done\n    },\n    scrollTop: function scrollTop(offset, duration) {\n      KTUtil.scrollTo(null, offset, duration);\n    },\n    isArray: function isArray(obj) {\n      return obj && Array.isArray(obj);\n    },\n    isEmpty: function isEmpty(obj) {\n      for (var prop in obj) {\n        if (obj.hasOwnProperty(prop)) {\n          return false;\n        }\n      }\n\n      return true;\n    },\n    numberString: function numberString(nStr) {\n      nStr += '';\n      var x = nStr.split('.');\n      var x1 = x[0];\n      var x2 = x.length > 1 ? '.' + x[1] : '';\n      var rgx = /(\\d+)(\\d{3})/;\n\n      while (rgx.test(x1)) {\n        x1 = x1.replace(rgx, '$1' + ',' + '$2');\n      }\n\n      return x1 + x2;\n    },\n    isRTL: function isRTL() {\n      return document.querySelector('html').getAttribute(\"direction\") === 'rtl';\n    },\n    snakeToCamel: function snakeToCamel(s) {\n      return s.replace(/(\\-\\w)/g, function (m) {\n        return m[1].toUpperCase();\n      });\n    },\n    filterBoolean: function filterBoolean(val) {\n      // Convert string boolean\n      if (val === true || val === 'true') {\n        return true;\n      }\n\n      if (val === false || val === 'false') {\n        return false;\n      }\n\n      return val;\n    },\n    setHTML: function setHTML(el, html) {\n      el.innerHTML = html;\n    },\n    getHTML: function getHTML(el) {\n      if (el) {\n        return el.innerHTML;\n      }\n    },\n    getDocumentHeight: function getDocumentHeight() {\n      var body = document.body;\n      var html = document.documentElement;\n      return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);\n    },\n    getScrollTop: function getScrollTop() {\n      return (document.scrollingElement || document.documentElement).scrollTop;\n    },\n    colorLighten: function colorLighten(color, amount) {\n      var addLight = function addLight(color, amount) {\n        var cc = parseInt(color, 16) + amount;\n        var c = cc > 255 ? 255 : cc;\n        c = c.toString(16).length > 1 ? c.toString(16) : \"0\".concat(c.toString(16));\n        return c;\n      };\n\n      color = color.indexOf(\"#\") >= 0 ? color.substring(1, color.length) : color;\n      amount = parseInt(255 * amount / 100);\n      return color = \"#\".concat(addLight(color.substring(0, 2), amount)).concat(addLight(color.substring(2, 4), amount)).concat(addLight(color.substring(4, 6), amount));\n    },\n    colorDarken: function colorDarken(color, amount) {\n      var subtractLight = function subtractLight(color, amount) {\n        var cc = parseInt(color, 16) - amount;\n        var c = cc < 0 ? 0 : cc;\n        c = c.toString(16).length > 1 ? c.toString(16) : \"0\".concat(c.toString(16));\n        return c;\n      };\n\n      color = color.indexOf(\"#\") >= 0 ? color.substring(1, color.length) : color;\n      amount = parseInt(255 * amount / 100);\n      return color = \"#\".concat(subtractLight(color.substring(0, 2), amount)).concat(subtractLight(color.substring(2, 4), amount)).concat(subtractLight(color.substring(4, 6), amount));\n    },\n    // Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds\n    throttle: function throttle(timer, func, delay) {\n      // If setTimeout is already scheduled, no need to do anything\n      if (timer) {\n        return;\n      } // Schedule a setTimeout after delay seconds\n\n\n      timer = setTimeout(function () {\n        func(); // Once setTimeout function execution is finished, timerId = undefined so that in <br>\n        // the next scroll event function execution can be scheduled by the setTimeout\n\n        timer = undefined;\n      }, delay);\n    },\n    // Debounce function: Input as function which needs to be debounced and delay is the debounced time in milliseconds\n    debounce: function debounce(timer, func, delay) {\n      // Cancels the setTimeout method execution\n      clearTimeout(timer); // Executes the func after delay time.\n\n      timer = setTimeout(func, delay);\n    },\n    parseJson: function parseJson(value) {\n      if (typeof value === 'string') {\n        value = value.replace(/'/g, \"\\\"\");\n        var jsonStr = value.replace(/(\\w+:)|(\\w+ :)/g, function (matched) {\n          return '\"' + matched.substring(0, matched.length - 1) + '\":';\n        });\n\n        try {\n          value = JSON.parse(jsonStr);\n        } catch (e) {}\n      }\n\n      return value;\n    },\n    getResponsiveValue: function getResponsiveValue(value, defaultValue) {\n      var width = this.getViewPort().width;\n      var result;\n      value = KTUtil.parseJson(value);\n\n      if (_typeof(value) === 'object') {\n        var resultKey;\n        var resultBreakpoint = -1;\n        var breakpoint;\n\n        for (var key in value) {\n          if (key === 'default') {\n            breakpoint = 0;\n          } else {\n            breakpoint = this.getBreakpoint(key) ? this.getBreakpoint(key) : parseInt(key);\n          }\n\n          if (breakpoint <= width && breakpoint > resultBreakpoint) {\n            resultKey = key;\n            resultBreakpoint = breakpoint;\n          }\n        }\n\n        if (resultKey) {\n          result = value[resultKey];\n        } else {\n          result = value;\n        }\n      } else {\n        result = value;\n      }\n\n      return result;\n    },\n    each: function each(array, callback) {\n      return [].slice.call(array).map(callback);\n    },\n    getSelectorMatchValue: function getSelectorMatchValue(value) {\n      var result = null;\n      value = KTUtil.parseJson(value);\n\n      if (_typeof(value) === 'object') {\n        // Match condition\n        if (value['match'] !== undefined) {\n          var selector = Object.keys(value['match'])[0];\n          value = Object.values(value['match'])[0];\n\n          if (document.querySelector(selector) !== null) {\n            result = value;\n          }\n        }\n      } else {\n        result = value;\n      }\n\n      return result;\n    },\n    getConditionalValue: function getConditionalValue(value) {\n      var value = KTUtil.parseJson(value);\n      var result = KTUtil.getResponsiveValue(value);\n\n      if (result !== null && result['match'] !== undefined) {\n        result = KTUtil.getSelectorMatchValue(result);\n      }\n\n      if (result === null && value !== null && value['default'] !== undefined) {\n        result = value['default'];\n      }\n\n      return result;\n    },\n    getCssVariableValue: function getCssVariableValue(variableName) {\n      var hex = getComputedStyle(document.documentElement).getPropertyValue(variableName);\n\n      if (hex && hex.length > 0) {\n        hex = hex.trim();\n      }\n\n      return hex;\n    },\n    isInViewport: function isInViewport(element) {\n      var rect = element.getBoundingClientRect();\n      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);\n    },\n    onDOMContentLoaded: function onDOMContentLoaded(callback) {\n      if (document.readyState === 'loading') {\n        document.addEventListener('DOMContentLoaded', callback);\n      } else {\n        callback();\n      }\n    },\n    inIframe: function inIframe() {\n      try {\n        return window.self !== window.top;\n      } catch (e) {\n        return true;\n      }\n    }\n  };\n}(); // Webpack support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTUtil;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvdXRpbC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUViO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7QUFDQSxJQUFJLENBQUNBLE9BQU8sQ0FBQ0MsU0FBUixDQUFrQkMsT0FBdkIsRUFBZ0M7QUFDNUJGLEVBQUFBLE9BQU8sQ0FBQ0MsU0FBUixDQUFrQkMsT0FBbEIsR0FBNEIsVUFBU0MsQ0FBVCxFQUFZO0FBQ3BDLFFBQUlELE9BQU8sR0FBRyxDQUFDLEtBQUtFLFFBQUwsSUFBaUIsS0FBS0MsYUFBdkIsRUFBc0NDLGdCQUF0QyxDQUF1REgsQ0FBdkQsQ0FBZDtBQUFBLFFBQ0lJLENBQUMsR0FBR0wsT0FBTyxDQUFDTSxNQURoQjs7QUFFQSxXQUFPLEVBQUVELENBQUYsSUFBTyxDQUFQLElBQVlMLE9BQU8sQ0FBQ08sSUFBUixDQUFhRixDQUFiLE1BQW9CLElBQXZDLEVBQTZDLENBQUU7O0FBQy9DLFdBQU9BLENBQUMsR0FBRyxDQUFDLENBQVo7QUFDSCxHQUxEO0FBTUg7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBSSxDQUFDUCxPQUFPLENBQUNDLFNBQVIsQ0FBa0JTLE9BQXZCLEVBQWdDO0FBQy9CVixFQUFBQSxPQUFPLENBQUNDLFNBQVIsQ0FBa0JTLE9BQWxCLEdBQTRCLFVBQVVQLENBQVYsRUFBYTtBQUN4QyxRQUFJUSxFQUFFLEdBQUcsSUFBVDtBQUNBLFFBQUlDLFFBQVEsR0FBRyxJQUFmO0FBQ0EsUUFBSSxDQUFDUixRQUFRLENBQUNTLGVBQVQsQ0FBeUJDLFFBQXpCLENBQWtDSCxFQUFsQyxDQUFMLEVBQTRDLE9BQU8sSUFBUDs7QUFDNUMsT0FBRztBQUNGLFVBQUlDLFFBQVEsQ0FBQ1YsT0FBVCxDQUFpQkMsQ0FBakIsQ0FBSixFQUF5QixPQUFPUyxRQUFQO0FBQ3pCQSxNQUFBQSxRQUFRLEdBQUdBLFFBQVEsQ0FBQ0csYUFBcEI7QUFDQSxLQUhELFFBR1NILFFBQVEsS0FBSyxJQUh0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UixNQUFNLENBQUNDLE9BQWQsS0FBMEIsV0FBL0QsRUFBNEU7QUFDeEVELEVBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnRVLE1BQWpCO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2NvbXBvbmVudHMvdXRpbC5qcz9jNTY1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEBjbGFzcyBLVFV0aWwgIGJhc2UgdXRpbGl6ZSBjbGFzcyB0aGF0IHByaXZpZGVzIGhlbHBlciBmdW5jdGlvbnNcbiAqL1xuXG4vLyBQb2x5ZmlsbHNcblxuLy8gRWxlbWVudC5tYXRjaGVzKCkgcG9seWZpbGxcbmlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPSBmdW5jdGlvbihzKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gKHRoaXMuZG9jdW1lbnQgfHwgdGhpcy5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHMpLFxuICAgICAgICAgICAgaSA9IG1hdGNoZXMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoLS1pID49IDAgJiYgbWF0Y2hlcy5pdGVtKGkpICE9PSB0aGlzKSB7fVxuICAgICAgICByZXR1cm4gaSA+IC0xO1xuICAgIH07XG59XG5cbi8qKlxuICogRWxlbWVudC5jbG9zZXN0KCkgcG9seWZpbGxcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L2Nsb3Nlc3QjUG9seWZpbGxcbiAqL1xuaWYgKCFFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0KSB7XG5cdEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbiAocykge1xuXHRcdHZhciBlbCA9IHRoaXM7XG5cdFx0dmFyIGFuY2VzdG9yID0gdGhpcztcblx0XHRpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhlbCkpIHJldHVybiBudWxsO1xuXHRcdGRvIHtcblx0XHRcdGlmIChhbmNlc3Rvci5tYXRjaGVzKHMpKSByZXR1cm4gYW5jZXN0b3I7XG5cdFx0XHRhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudEVsZW1lbnQ7XG5cdFx0fSB3aGlsZSAoYW5jZXN0b3IgIT09IG51bGwpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9O1xufVxuXG4vKipcbiAqIENoaWxkTm9kZS5yZW1vdmUoKSBwb2x5ZmlsbFxuICogaHR0cHM6Ly9nb21ha2V0aGluZ3MuY29tL3JlbW92aW5nLWFuLWVsZW1lbnQtZnJvbS10aGUtZG9tLXRoZS1lczYtd2F5L1xuICogQGF1dGhvciBDaHJpcyBGZXJkaW5hbmRpXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuKGZ1bmN0aW9uIChlbGVtKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbS5sZW5ndGg7IGkrKykge1xuXHRcdGlmICghd2luZG93W2VsZW1baV1dIHx8ICdyZW1vdmUnIGluIHdpbmRvd1tlbGVtW2ldXS5wcm90b3R5cGUpIGNvbnRpbnVlO1xuXHRcdHdpbmRvd1tlbGVtW2ldXS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xuXHRcdH07XG5cdH1cbn0pKFsnRWxlbWVudCcsICdDaGFyYWN0ZXJEYXRhJywgJ0RvY3VtZW50VHlwZSddKTtcblxuXG4vL1xuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci5cbi8vICBXaXRoIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbi8vXG4vLyAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbi8vICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4vL1xuLy8gIE1JVCBsaWNlbnNlXG4vL1xuKGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYXN0VGltZSA9IDA7XG4gICAgdmFyIHZlbmRvcnMgPSBbJ3dlYmtpdCcsICdtb3onXTtcbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPVxuICAgICAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fCB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICB9XG5cbiAgICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcbiAgICAgICAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICAgICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9O1xuXG4gICAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgICB9O1xufSgpKTtcblxuLy8gU291cmNlOiBodHRwczovL2dpdGh1Yi5jb20vanNlcnovanNfcGllY2UvYmxvYi9tYXN0ZXIvRE9NL1BhcmVudE5vZGUvcHJlcGVuZCgpL3ByZXBlbmQoKS5tZFxuKGZ1bmN0aW9uKGFycikge1xuICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoJ3ByZXBlbmQnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdGVtLCAncHJlcGVuZCcsIHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVwZW5kKCkge1xuICAgICAgICAgICAgICAgIHZhciBhcmdBcnIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgICAgICAgICAgICBkb2NGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICAgICAgICAgICAgYXJnQXJyLmZvckVhY2goZnVuY3Rpb24oYXJnSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNOb2RlID0gYXJnSXRlbSBpbnN0YW5jZW9mIE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGRvY0ZyYWcuYXBwZW5kQ2hpbGQoaXNOb2RlID8gYXJnSXRlbSA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhhcmdJdGVtKSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRCZWZvcmUoZG9jRnJhZywgdGhpcy5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KShbRWxlbWVudC5wcm90b3R5cGUsIERvY3VtZW50LnByb3RvdHlwZSwgRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGVdKTtcblxuLy8gZ2V0QXR0cmlidXRlTmFtZXNcbmlmIChFbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVOYW1lcyA9PSB1bmRlZmluZWQpIHtcbiAgRWxlbWVudC5wcm90b3R5cGUuZ2V0QXR0cmlidXRlTmFtZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSB0aGlzLmF0dHJpYnV0ZXM7XG4gICAgdmFyIGxlbmd0aCA9IGF0dHJpYnV0ZXMubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHRbaV0gPSBhdHRyaWJ1dGVzW2ldLm5hbWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbi8vIEdsb2JhbCB2YXJpYWJsZXNcbndpbmRvdy5LVFV0aWxFbGVtZW50RGF0YVN0b3JlID0ge307XG53aW5kb3cuS1RVdGlsRWxlbWVudERhdGFTdG9yZUlEID0gMDtcbndpbmRvdy5LVFV0aWxEZWxlZ2F0ZWRFdmVudEhhbmRsZXJzID0ge307XG5cbnZhciBLVFV0aWwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzaXplSGFuZGxlcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB3aW5kb3cgcmVzaXplIGV2ZW50IHdpdGggc29tZVxuICAgICAqIGRlbGF5IHRvIGF0dGFjaCBldmVudCBoYW5kbGVycyB1cG9uIHJlc2l6ZSBjb21wbGV0ZVxuICAgICAqL1xuICAgIHZhciBfd2luZG93UmVzaXplSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgX3J1blJlc2l6ZUhhbmRsZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyByZWluaXRpYWxpemUgb3RoZXIgc3Vic2NyaWJlZCBlbGVtZW50c1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNpemVIYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBlYWNoID0gcmVzaXplSGFuZGxlcnNbaV07XG4gICAgICAgICAgICAgICAgZWFjaC5jYWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHRpbWVyO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIEtUVXRpbC50aHJvdHRsZSh0aW1lciwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX3J1blJlc2l6ZUhhbmRsZXJzKCk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENsYXNzIG1haW4gaW5pdGlhbGl6ZXIuXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZXR0aW5ncy5cbiAgICAgICAgICogQHJldHVybnMgbnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgLy9tYWluIGZ1bmN0aW9uIHRvIGluaXRpYXRlIHRoZSB0aGVtZVxuICAgICAgICBpbml0OiBmdW5jdGlvbihzZXR0aW5ncykge1xuICAgICAgICAgICAgX3dpbmRvd1Jlc2l6ZUhhbmRsZXIoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkcyB3aW5kb3cgcmVzaXplIGV2ZW50IGhhbmRsZXIuXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgYWRkUmVzaXplSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJlc2l6ZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmVzIHdpbmRvdyByZXNpemUgZXZlbnQgaGFuZGxlci5cbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdmVSZXNpemVIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNpemVIYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayA9PT0gcmVzaXplSGFuZGxlcnNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc2l6ZUhhbmRsZXJzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVHJpZ2dlciB3aW5kb3cgcmVzaXplIGhhbmRsZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgcnVuUmVzaXplSGFuZGxlcnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgX3J1blJlc2l6ZUhhbmRsZXJzKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YoRXZlbnQpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgLy8gbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXNpemUnKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGZvciBJRSBhbmQgb3RoZXIgb2xkIGJyb3dzZXJzXG4gICAgICAgICAgICAgICAgLy8gY2F1c2VzIGRlcHJlY2F0aW9uIHdhcm5pbmcgb24gbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgICAgICAgICAgdmFyIGV2dCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFdmVudCgnVUlFdmVudHMnKTtcbiAgICAgICAgICAgICAgICBldnQuaW5pdFVJRXZlbnQoJ3Jlc2l6ZScsIHRydWUsIGZhbHNlLCB3aW5kb3csIDApO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBHRVQgcGFyYW1ldGVyIHZhbHVlIGZyb20gVVJMLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1OYW1lIFBhcmFtZXRlciBuYW1lLlxuICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0VVJMUGFyYW06IGZ1bmN0aW9uKHBhcmFtTmFtZSkge1xuICAgICAgICAgICAgdmFyIHNlYXJjaFN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpLFxuICAgICAgICAgICAgICAgIGksIHZhbCwgcGFyYW1zID0gc2VhcmNoU3RyaW5nLnNwbGl0KFwiJlwiKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbCA9IHBhcmFtc1tpXS5zcGxpdChcIj1cIik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbFswXSA9PSBwYXJhbU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZXNjYXBlKHZhbFsxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2tzIHdoZXRoZXIgY3VycmVudCBkZXZpY2UgaXMgbW9iaWxlIHRvdWNoLlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIGlzTW9iaWxlRGV2aWNlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0ZXN0ID0gKHRoaXMuZ2V0Vmlld1BvcnQoKS53aWR0aCA8IHRoaXMuZ2V0QnJlYWtwb2ludCgnbGcnKSA/IHRydWUgOiBmYWxzZSk7XG5cbiAgICAgICAgICAgIGlmICh0ZXN0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIC8vIEZvciB1c2Ugd2l0aGluIG5vcm1hbCB3ZWIgY2xpZW50c1xuICAgICAgICAgICAgICAgIHRlc3QgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpICE9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0ZXN0O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVja3Mgd2hldGhlciBjdXJyZW50IGRldmljZSBpcyBkZXNrdG9wLlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIGlzRGVza3RvcERldmljZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gS1RVdGlsLmlzTW9iaWxlRGV2aWNlKCkgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgYnJvd3NlciB3aW5kb3cgdmlld3BvcnQgc2l6ZS4gUmVmOlxuICAgICAgICAgKiBodHRwOi8vYW5keWxhbmd0b24uY28udWsvYXJ0aWNsZXMvamF2YXNjcmlwdC9nZXQtdmlld3BvcnQtc2l6ZS1qYXZhc2NyaXB0L1xuICAgICAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0Vmlld1BvcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGUgPSB3aW5kb3csXG4gICAgICAgICAgICAgICAgYSA9ICdpbm5lcic7XG4gICAgICAgICAgICBpZiAoISgnaW5uZXJXaWR0aCcgaW4gd2luZG93KSkge1xuICAgICAgICAgICAgICAgIGEgPSAnY2xpZW50JztcbiAgICAgICAgICAgICAgICBlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGVbYSArICdXaWR0aCddLFxuICAgICAgICAgICAgICAgIGhlaWdodDogZVthICsgJ0hlaWdodCddXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG5cdFx0LyoqXG4gICAgICAgICAqIENoZWNrcyB3aGV0aGVyIGdpdmVuIGRldmljZSBtb2RlIGlzIGN1cnJlbnRseSBhY3RpdmF0ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIFJlc3BvbnNpdmUgbW9kZSBuYW1lKGUuZzogZGVza3RvcCxcbiAgICAgICAgICogICAgIGRlc2t0b3AtYW5kLXRhYmxldCwgdGFibGV0LCB0YWJsZXQtYW5kLW1vYmlsZSwgbW9iaWxlKVxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIGlzQnJlYWtwb2ludFVwOiBmdW5jdGlvbihtb2RlKSB7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSB0aGlzLmdldFZpZXdQb3J0KCkud2lkdGg7XG5cdFx0XHR2YXIgYnJlYWtwb2ludCA9IHRoaXMuZ2V0QnJlYWtwb2ludChtb2RlKTtcblxuXHRcdFx0cmV0dXJuICh3aWR0aCA+PSBicmVha3BvaW50KTtcbiAgICAgICAgfSxcblxuXHRcdGlzQnJlYWtwb2ludERvd246IGZ1bmN0aW9uKG1vZGUpIHtcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IHRoaXMuZ2V0Vmlld1BvcnQoKS53aWR0aDtcblx0XHRcdHZhciBicmVha3BvaW50ID0gdGhpcy5nZXRCcmVha3BvaW50KG1vZGUpO1xuXG5cdFx0XHRyZXR1cm4gKHdpZHRoIDwgYnJlYWtwb2ludCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0Vmlld3BvcnRXaWR0aDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWaWV3UG9ydCgpLndpZHRoO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZW5lcmF0ZXMgdW5pcXVlIElEIGZvciBnaXZlIHByZWZpeC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeCBQcmVmaXggZm9yIGdlbmVyYXRlZCBJRFxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIGdldFVuaXF1ZUlkOiBmdW5jdGlvbihwcmVmaXgpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXggKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobmV3IERhdGUoKSkuZ2V0VGltZSgpKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB3aW5kb3cgd2lkdGggZm9yIGdpdmUgYnJlYWtwb2ludCBtb2RlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZSBSZXNwb25zaXZlIG1vZGUgbmFtZShlLmc6IHhsLCBsZywgbWQsIHNtKVxuICAgICAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0QnJlYWtwb2ludDogZnVuY3Rpb24oYnJlYWtwb2ludCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLScgKyBicmVha3BvaW50KTtcblxuICAgICAgICAgICAgaWYgKCB2YWx1ZSApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlLnRyaW0oKSk7XG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrcyB3aGV0aGVyIG9iamVjdCBoYXMgcHJvcGVydHkgbWF0Y2hzIGdpdmVuIGtleSBwYXRoLlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqIE9iamVjdCBjb250YWlucyB2YWx1ZXMgcGFpcmVkIHdpdGggZ2l2ZW4ga2V5IHBhdGhcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGtleXMgS2V5cyBwYXRoIHNlcGVyYXRlZCB3aXRoIGRvdHNcbiAgICAgICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIGlzc2V0OiBmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgICAgICAgICAgIHZhciBzdG9uZTtcblxuICAgICAgICAgICAga2V5cyA9IGtleXMgfHwgJyc7XG5cbiAgICAgICAgICAgIGlmIChrZXlzLmluZGV4T2YoJ1snKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIG9iamVjdCBwYXRoIG5vdGF0aW9uLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXlzID0ga2V5cy5zcGxpdCgnLicpO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKG9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdG9uZSA9IGtleXMuc2hpZnQoKTtcblxuICAgICAgICAgICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KHN0b25lKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgb2JqID0gb2JqW3N0b25lXTtcblxuICAgICAgICAgICAgfSB3aGlsZSAoa2V5cy5sZW5ndGgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyBoaWdoZXN0IHotaW5kZXggb2YgdGhlIGdpdmVuIGVsZW1lbnQgcGFyZW50c1xuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gZWwgalF1ZXJ5IGVsZW1lbnQgb2JqZWN0XG4gICAgICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBnZXRIaWdoZXN0WmluZGV4OiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uLCB2YWx1ZTtcblxuICAgICAgICAgICAgd2hpbGUgKGVsICYmIGVsICE9PSBkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgIC8vIElnbm9yZSB6LWluZGV4IGlmIHBvc2l0aW9uIGlzIHNldCB0byBhIHZhbHVlIHdoZXJlIHotaW5kZXggaXMgaWdub3JlZCBieSB0aGUgYnJvd3NlclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgbWFrZXMgYmVoYXZpb3Igb2YgdGhpcyBmdW5jdGlvbiBjb25zaXN0ZW50IGFjcm9zcyBicm93c2Vyc1xuICAgICAgICAgICAgICAgIC8vIFdlYktpdCBhbHdheXMgcmV0dXJucyBhdXRvIGlmIHRoZSBlbGVtZW50IGlzIHBvc2l0aW9uZWRcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IEtUVXRpbC5jc3MoZWwsICdwb3NpdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09PSBcImFic29sdXRlXCIgfHwgcG9zaXRpb24gPT09IFwicmVsYXRpdmVcIiB8fCBwb3NpdGlvbiA9PT0gXCJmaXhlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElFIHJldHVybnMgMCB3aGVuIHpJbmRleCBpcyBub3Qgc3BlY2lmaWVkXG4gICAgICAgICAgICAgICAgICAgIC8vIG90aGVyIGJyb3dzZXJzIHJldHVybiBhIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBpZ25vcmUgdGhlIGNhc2Ugb2YgbmVzdGVkIGVsZW1lbnRzIHdpdGggYW4gZXhwbGljaXQgdmFsdWUgb2YgMFxuICAgICAgICAgICAgICAgICAgICAvLyA8ZGl2IHN0eWxlPVwiei1pbmRleDogLTEwO1wiPjxkaXYgc3R5bGU9XCJ6LWluZGV4OiAwO1wiPjwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KEtUVXRpbC5jc3MoZWwsICd6LWluZGV4JykpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4odmFsdWUpICYmIHZhbHVlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZWxlbWVudCBoYXMgYW55IHBhcmVudCB3aXRoIGZpeGVkIHBvc2l0aW9uZnJlZ1xuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gZWwgalF1ZXJ5IGVsZW1lbnQgb2JqZWN0XG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgaGFzRml4ZWRQb3NpdGlvbmVkUGFyZW50OiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uO1xuXG4gICAgICAgICAgICB3aGlsZSAoZWwgJiYgZWwgIT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBLVFV0aWwuY3NzKGVsLCAncG9zaXRpb24nKTtcblxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJmaXhlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaW11bGF0ZXMgZGVsYXlcbiAgICAgICAgICovXG4gICAgICAgIHNsZWVwOiBmdW5jdGlvbihtaWxsaXNlY29uZHMpIHtcbiAgICAgICAgICAgIHZhciBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxZTc7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICgobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydCkgPiBtaWxsaXNlY29uZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHJhbmRvbWx5IGdlbmVyYXRlZCBpbnRlZ2VyIHZhbHVlIHdpdGhpbiBnaXZlbiBtaW4gYW5kIG1heCByYW5nZVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluIFJhbmdlIHN0YXJ0IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXggUmFuZ2UgZW5kIHZhbHVlXG4gICAgICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBnZXRSYW5kb21JbnQ6IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2tzIHdoZXRoZXIgQW5ndWxhciBsaWJyYXJ5IGlzIGluY2x1ZGVkXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgaXNBbmd1bGFyVmVyc2lvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LlpvbmUgIT09IHVuZGVmaW5lZCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBEZWVwIGV4dGVuZDogICQuZXh0ZW5kKHRydWUsIHt9LCBvYmpBLCBvYmpCKTtcbiAgICAgICAgZGVlcEV4dGVuZDogZnVuY3Rpb24ob3V0KSB7XG4gICAgICAgICAgICBvdXQgPSBvdXQgfHwge307XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoIW9iaikgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gYmFzZWQgb24gaHR0cHM6Ly9qYXZhc2NyaXB0d2VibG9nLndvcmRwcmVzcy5jb20vMjAxMS8wOC8wOC9maXhpbmctdGhlLWphdmFzY3JpcHQtdHlwZW9mLW9wZXJhdG9yL1xuICAgICAgICAgICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmpba2V5XSkgPT09ICdbb2JqZWN0IE9iamVjdF0nICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0W2tleV0gPSBLVFV0aWwuZGVlcEV4dGVuZChvdXRba2V5XSwgb2JqW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9IG9ialtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBleHRlbmQ6ICAkLmV4dGVuZCh7fSwgb2JqQSwgb2JqQik7XG4gICAgICAgIGV4dGVuZDogZnVuY3Rpb24ob3V0KSB7XG4gICAgICAgICAgICBvdXQgPSBvdXQgfHwge307XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhcmd1bWVudHNbaV0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRCb2R5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZWxlbWVudCBoYXMgZ2l2ZW4gY2xhc3Nlc1xuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gZWwgalF1ZXJ5IGVsZW1lbnQgb2JqZWN0XG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBDbGFzc2VzIHN0cmluZ1xuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIGhhc0NsYXNzZXM6IGZ1bmN0aW9uKGVsLCBjbGFzc2VzKSB7XG4gICAgICAgICAgICBpZiAoIWVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY2xhc3Nlc0FyciA9IGNsYXNzZXMuc3BsaXQoXCIgXCIpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXNBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoS1RVdGlsLmhhc0NsYXNzKGVsLCBLVFV0aWwudHJpbShjbGFzc2VzQXJyW2ldKSkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGlmICghZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QgPyBlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSA6IG5ldyBSZWdFeHAoJ1xcXFxiJyArIGNsYXNzTmFtZSArICdcXFxcYicpLnRlc3QoZWwuY2xhc3NOYW1lKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24oZWwsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgaWYgKCFlbCB8fCB0eXBlb2YgY2xhc3NOYW1lID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNsYXNzTmFtZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcblxuICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3NOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lc1tpXSAmJiBjbGFzc05hbWVzW2ldLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoS1RVdGlsLnRyaW0oY2xhc3NOYW1lc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICghS1RVdGlsLmhhc0NsYXNzKGVsLCBjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBjbGFzc05hbWVzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSArPSAnICcgKyBLVFV0aWwudHJpbShjbGFzc05hbWVzW3hdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgICAgICBpZiAoIWVsIHx8IHR5cGVvZiBjbGFzc05hbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY2xhc3NOYW1lcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuXG4gICAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc05hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoS1RVdGlsLnRyaW0oY2xhc3NOYW1lc1tpXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoS1RVdGlsLmhhc0NsYXNzKGVsLCBjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBjbGFzc05hbWVzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoJ1xcXFxiJyArIEtUVXRpbC50cmltKGNsYXNzTmFtZXNbeF0pICsgJ1xcXFxiJywgJ2cnKSwgJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB0cmlnZ2VyQ3VzdG9tRXZlbnQ6IGZ1bmN0aW9uKGVsLCBldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBldmVudDtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuQ3VzdG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiBkYXRhXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICAgICAgICAgICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSwgZGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRyaWdnZXJFdmVudDogZnVuY3Rpb24obm9kZSwgZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgdXNlIHRoZSBvd25lckRvY3VtZW50IGZyb20gdGhlIHByb3ZpZGVkIG5vZGUgdG8gYXZvaWQgY3Jvc3Mtd2luZG93IHByb2JsZW1zXG4gICAgICAgICAgICB2YXIgZG9jO1xuXG4gICAgICAgICAgICBpZiAobm9kZS5vd25lckRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09IDkpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgbm9kZSBtYXkgYmUgdGhlIGRvY3VtZW50IGl0c2VsZiwgbm9kZVR5cGUgOSA9IERPQ1VNRU5UX05PREVcbiAgICAgICAgICAgICAgICBkb2MgPSBub2RlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5vZGUgcGFzc2VkIHRvIGZpcmVFdmVudDogXCIgKyBub2RlLmlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vZGUuZGlzcGF0Y2hFdmVudCkge1xuICAgICAgICAgICAgICAgIC8vIEdlY2tvLXN0eWxlIGFwcHJvYWNoIChub3cgdGhlIHN0YW5kYXJkKSB0YWtlcyBtb3JlIHdvcmtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRDbGFzcyA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICAvLyBEaWZmZXJlbnQgZXZlbnRzIGhhdmUgZGlmZmVyZW50IGV2ZW50IGNsYXNzZXMuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBzd2l0Y2ggc3RhdGVtZW50IGNhbid0IG1hcCBhbiBldmVudE5hbWUgdG8gYW4gZXZlbnRDbGFzcyxcbiAgICAgICAgICAgICAgICAvLyB0aGUgZXZlbnQgZmlyaW5nIGlzIGdvaW5nIHRvIGZhaWwuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiY2xpY2tcIjogLy8gRGlzcGF0Y2hpbmcgb2YgJ2NsaWNrJyBhcHBlYXJzIHRvIG5vdCB3b3JrIGNvcnJlY3RseSBpbiBTYWZhcmkuIFVzZSAnbW91c2Vkb3duJyBvciAnbW91c2V1cCcgaW5zdGVhZC5cbiAgICAgICAgICAgICAgICBjYXNlIFwibW91c2VlbnRlclwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJtb3VzZWxlYXZlXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1vdXNlZG93blwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJtb3VzZXVwXCI6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q2xhc3MgPSBcIk1vdXNlRXZlbnRzXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcImZvY3VzXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcImNoYW5nZVwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJibHVyXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcInNlbGVjdFwiOlxuICAgICAgICAgICAgICAgICAgICBldmVudENsYXNzID0gXCJIVE1MRXZlbnRzXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJmaXJlRXZlbnQ6IENvdWxkbid0IGZpbmQgYW4gZXZlbnQgY2xhc3MgZm9yIGV2ZW50ICdcIiArIGV2ZW50TmFtZSArIFwiJy5cIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IGRvYy5jcmVhdGVFdmVudChldmVudENsYXNzKTtcblxuICAgICAgICAgICAgICAgIHZhciBidWJibGVzID0gZXZlbnROYW1lID09IFwiY2hhbmdlXCIgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICAgICAgZXZlbnQuaW5pdEV2ZW50KGV2ZW50TmFtZSwgYnViYmxlcywgdHJ1ZSk7IC8vIEFsbCBldmVudHMgY3JlYXRlZCBhcyBidWJibGluZyBhbmQgY2FuY2VsYWJsZS5cblxuICAgICAgICAgICAgICAgIGV2ZW50LnN5bnRoZXRpYyA9IHRydWU7IC8vIGFsbG93IGRldGVjdGlvbiBvZiBzeW50aGV0aWMgZXZlbnRzXG4gICAgICAgICAgICAgICAgLy8gVGhlIHNlY29uZCBwYXJhbWV0ZXIgc2F5cyBnbyBhaGVhZCB3aXRoIHRoZSBkZWZhdWx0IGFjdGlvblxuICAgICAgICAgICAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCwgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUuZmlyZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSUUtb2xkIHNjaG9vbCBzdHlsZVxuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IGRvYy5jcmVhdGVFdmVudE9iamVjdCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnN5bnRoZXRpYyA9IHRydWU7IC8vIGFsbG93IGRldGVjdGlvbiBvZiBzeW50aGV0aWMgZXZlbnRzXG4gICAgICAgICAgICAgICAgbm9kZS5maXJlRXZlbnQoXCJvblwiICsgZXZlbnROYW1lLCBldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5kZXg6IGZ1bmN0aW9uKCBlbCApe1xuICAgICAgICAgICAgdmFyIGMgPSBlbC5wYXJlbnROb2RlLmNoaWxkcmVuLCBpID0gMDtcbiAgICAgICAgICAgIGZvcig7IGkgPCBjLmxlbmd0aDsgaSsrIClcbiAgICAgICAgICAgICAgICBpZiggY1tpXSA9PSBlbCApIHJldHVybiBpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRyaW06IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy50cmltKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZXZlbnRUcmlnZ2VyZWQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50cmlnZ2VyZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudHJpZ2dlcmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICBpZiAoZWwgJiYgZWwucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGZpbmQ6IGZ1bmN0aW9uKHBhcmVudCwgcXVlcnkpIHtcbiAgICAgICAgICAgIGlmICggcGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmluZEFsbDogZnVuY3Rpb24ocGFyZW50LCBxdWVyeSkge1xuICAgICAgICAgICAgaWYgKCBwYXJlbnQgIT09IG51bGwgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5zZXJ0QWZ0ZXI6IGZ1bmN0aW9uKGVsLCByZWZlcmVuY2VOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVmZXJlbmNlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbCwgcmVmZXJlbmNlTm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFyZW50czogZnVuY3Rpb24oZWxlbSwgc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIC8vIFNldCB1cCBhIHBhcmVudCBhcnJheVxuICAgICAgICAgICAgdmFyIHBhcmVudHMgPSBbXTtcblxuICAgICAgICAgICAgLy8gUHVzaCBlYWNoIHBhcmVudCBlbGVtZW50IHRvIHRoZSBhcnJheVxuICAgICAgICAgICAgZm9yICggOyBlbGVtICYmIGVsZW0gIT09IGRvY3VtZW50OyBlbGVtID0gZWxlbS5wYXJlbnROb2RlICkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGVsZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goZWxlbSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJldHVybiBvdXIgcGFyZW50IGFycmF5XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfSxcblxuICAgICAgICBjaGlsZHJlbjogZnVuY3Rpb24oZWwsIHNlbGVjdG9yLCBsb2cpIHtcbiAgICAgICAgICAgIGlmICghZWwgfHwgIWVsLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdLFxuICAgICAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgICAgIGwgPSBlbC5jaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yICh2YXIgaTsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmIChlbC5jaGlsZE5vZGVzW2ldLm5vZGVUeXBlID09IDEgJiYgS1RVdGlsLm1hdGNoZXMoZWwuY2hpbGROb2Rlc1tpXSwgc2VsZWN0b3IsIGxvZykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZWwuY2hpbGROb2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIGNoaWxkOiBmdW5jdGlvbihlbCwgc2VsZWN0b3IsIGxvZykge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gS1RVdGlsLmNoaWxkcmVuKGVsLCBzZWxlY3RvciwgbG9nKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuID8gY2hpbGRyZW5bMF0gOiBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1hdGNoZXM6IGZ1bmN0aW9uKGVsLCBzZWxlY3RvciwgbG9nKSB7XG4gICAgICAgICAgICB2YXIgcCA9IEVsZW1lbnQucHJvdG90eXBlO1xuICAgICAgICAgICAgdmFyIGYgPSBwLm1hdGNoZXMgfHwgcC53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgcC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgcC5tc01hdGNoZXNTZWxlY3RvciB8fCBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdLmluZGV4T2YuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHMpLCB0aGlzKSAhPT0gLTE7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmLmNhbGwoZWwsIHNlbGVjdG9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24obmFtZSwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoZWwuY3VzdG9tRGF0YVRhZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuS1RVdGlsRWxlbWVudERhdGFTdG9yZUlEKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jdXN0b21EYXRhVGFnID0gd2luZG93LktUVXRpbEVsZW1lbnREYXRhU3RvcmVJRDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuS1RVdGlsRWxlbWVudERhdGFTdG9yZVtlbC5jdXN0b21EYXRhVGFnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuS1RVdGlsRWxlbWVudERhdGFTdG9yZVtlbC5jdXN0b21EYXRhVGFnXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LktUVXRpbEVsZW1lbnREYXRhU3RvcmVbZWwuY3VzdG9tRGF0YVRhZ11bbmFtZV0gPSBkYXRhO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsLmN1c3RvbURhdGFUYWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB3aW5kb3cuS1RVdGlsRWxlbWVudERhdGFTdG9yZVtlbC5jdXN0b21EYXRhVGFnXVtuYW1lXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGhhczogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoZWwuY3VzdG9tRGF0YVRhZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHdpbmRvdy5LVFV0aWxFbGVtZW50RGF0YVN0b3JlW2VsLmN1c3RvbURhdGFUYWddICYmIHdpbmRvdy5LVFV0aWxFbGVtZW50RGF0YVN0b3JlW2VsLmN1c3RvbURhdGFUYWddW25hbWVdKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbCAmJiB0aGlzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHdpbmRvdy5LVFV0aWxFbGVtZW50RGF0YVN0b3JlW2VsLmN1c3RvbURhdGFUYWddW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBvdXRlcldpZHRoOiBmdW5jdGlvbihlbCwgbWFyZ2luKSB7XG4gICAgICAgICAgICB2YXIgd2lkdGg7XG5cbiAgICAgICAgICAgIGlmIChtYXJnaW4gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHBhcnNlRmxvYXQoZWwub2Zmc2V0V2lkdGgpO1xuICAgICAgICAgICAgICAgIHdpZHRoICs9IHBhcnNlRmxvYXQoS1RVdGlsLmNzcyhlbCwgJ21hcmdpbi1sZWZ0JykpICsgcGFyc2VGbG9hdChLVFV0aWwuY3NzKGVsLCAnbWFyZ2luLXJpZ2h0JykpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQod2lkdGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHBhcnNlRmxvYXQoZWwub2Zmc2V0V2lkdGgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG9mZnNldDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIHZhciByZWN0LCB3aW47XG5cbiAgICAgICAgICAgIGlmICggIWVsICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmV0dXJuIHplcm9zIGZvciBkaXNjb25uZWN0ZWQgYW5kIGhpZGRlbiAoZGlzcGxheTogbm9uZSkgZWxlbWVudHMgKGdoLTIzMTApXG4gICAgICAgICAgICAvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcbiAgICAgICAgICAgIC8vIFJ1bm5pbmcgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGFcbiAgICAgICAgICAgIC8vIGRpc2Nvbm5lY3RlZCBub2RlIGluIElFIHRocm93cyBhbiBlcnJvclxuXG4gICAgICAgICAgICBpZiAoICFlbC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gR2V0IGRvY3VtZW50LXJlbGF0aXZlIHBvc2l0aW9uIGJ5IGFkZGluZyB2aWV3cG9ydCBzY3JvbGwgdG8gdmlld3BvcnQtcmVsYXRpdmUgZ0JDUlxuICAgICAgICAgICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgd2luID0gZWwub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0b3A6IHJlY3QudG9wICsgd2luLnBhZ2VZT2Zmc2V0LFxuICAgICAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICByaWdodDogd2luZG93LmlubmVyV2lkdGggLSAoZWwub2Zmc2V0TGVmdCArIGVsLm9mZnNldFdpZHRoKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBoZWlnaHQ6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gS1RVdGlsLmNzcyhlbCwgJ2hlaWdodCcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG91dGVySGVpZ2h0OiBmdW5jdGlvbihlbCwgd2l0aE1hcmdpbikge1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IGVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIHZhciBzdHlsZTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aXRoTWFyZ2luICE9PSAndW5kZWZpbmVkJyAmJiB3aXRoTWFyZ2luID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICAgICAgICAgICAgICBoZWlnaHQgKz0gcGFyc2VJbnQoc3R5bGUubWFyZ2luVG9wKSArIHBhcnNlSW50KHN0eWxlLm1hcmdpbkJvdHRvbSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gaGVpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gIShlbC5vZmZzZXRXaWR0aCA9PT0gMCAmJiBlbC5vZmZzZXRIZWlnaHQgPT09IDApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGF0dHI6IGZ1bmN0aW9uKGVsLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKGVsID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGhhc0F0dHI6IGZ1bmN0aW9uKGVsLCBuYW1lKSB7XG4gICAgICAgICAgICBpZiAoZWwgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKG5hbWUpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZUF0dHI6IGZ1bmN0aW9uKGVsLCBuYW1lKSB7XG4gICAgICAgICAgICBpZiAoZWwgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYW5pbWF0ZTogZnVuY3Rpb24oZnJvbSwgdG8sIGR1cmF0aW9uLCB1cGRhdGUsIGVhc2luZywgZG9uZSkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaW55QW5pbWF0ZS5lYXNpbmdzXG4gICAgICAgICAgICAgKiAgQWRhcHRlZCBmcm9tIGpRdWVyeSBFYXNpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIGVhc2luZ3MgPSB7fTtcbiAgICAgICAgICAgIHZhciBlYXNpbmc7XG5cbiAgICAgICAgICAgIGVhc2luZ3MubGluZWFyID0gZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjICogdCAvIGQgKyBiO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZWFzaW5nID0gZWFzaW5ncy5saW5lYXI7XG5cbiAgICAgICAgICAgIC8vIEVhcmx5IGJhaWwgb3V0IGlmIGNhbGxlZCBpbmNvcnJlY3RseVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmcm9tICE9PSAnbnVtYmVyJyB8fFxuICAgICAgICAgICAgICAgIHR5cGVvZiB0byAhPT0gJ251bWJlcicgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgZHVyYXRpb24gIT09ICdudW1iZXInIHx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIHVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIG1vY2sgZG9uZSgpIGZ1bmN0aW9uIGlmIG5lY2Vzc2FyeVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkb25lICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgZG9uZSA9IGZ1bmN0aW9uKCkge307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFBpY2sgaW1wbGVtZW50YXRpb24gKHJlcXVlc3RBbmltYXRpb25GcmFtZSB8IHNldFRpbWVvdXQpXG4gICAgICAgICAgICB2YXIgckFGID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNTApO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGxvb3BcbiAgICAgICAgICAgIHZhciBjYW5jZWxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IHRvIC0gZnJvbTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gbG9vcCh0aW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICB2YXIgdGltZSA9ICh0aW1lc3RhbXAgfHwgK25ldyBEYXRlKCkpIC0gc3RhcnQ7XG5cbiAgICAgICAgICAgICAgICBpZiAodGltZSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZShlYXNpbmcodGltZSwgZnJvbSwgY2hhbmdlLCBkdXJhdGlvbikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGltZSA+PSAwICYmIHRpbWUgPj0gZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlKHRvKTtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJBRihsb29wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVwZGF0ZShmcm9tKTtcblxuICAgICAgICAgICAgLy8gU3RhcnQgYW5pbWF0aW9uIGxvb3BcbiAgICAgICAgICAgIHZhciBzdGFydCA9IHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID8gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpIDogK25ldyBEYXRlKCk7XG5cbiAgICAgICAgICAgIHJBRihsb29wKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhY3R1YWxDc3M6IGZ1bmN0aW9uKGVsLCBwcm9wLCBjYWNoZSkge1xuICAgICAgICAgICAgdmFyIGNzcyA9ICcnO1xuXG4gICAgICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZWwuZ2V0QXR0cmlidXRlKCdrdC1oaWRkZW4tJyArIHByb3ApIHx8IGNhY2hlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZTtcblxuICAgICAgICAgICAgICAgIC8vIHRoZSBlbGVtZW50IGlzIGhpZGRlbiBzbzpcbiAgICAgICAgICAgICAgICAvLyBtYWtpbmcgdGhlIGVsIGJsb2NrIHNvIHdlIGNhbiBtZWFzc3VyZSBpdHMgaGVpZ2h0IGJ1dCBzdGlsbCBiZSBoaWRkZW5cbiAgICAgICAgICAgICAgICBjc3MgPSBlbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgICAgICAgICAgIGVsLnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246IGFic29sdXRlOyB2aXNpYmlsaXR5OiBoaWRkZW47IGRpc3BsYXk6IGJsb2NrOyc7XG5cbiAgICAgICAgICAgICAgICBpZiAocHJvcCA9PSAnd2lkdGgnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZWwub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wID09ICdoZWlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsLnN0eWxlLmNzc1RleHQgPSBjc3M7XG5cbiAgICAgICAgICAgICAgICAvLyBzdG9yZSBpdCBpbiBjYWNoZVxuICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgna3QtaGlkZGVuLScgKyBwcm9wLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHN0b3JlIGl0IGluIGNhY2hlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoZWwuZ2V0QXR0cmlidXRlKCdrdC1oaWRkZW4tJyArIHByb3ApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBhY3R1YWxIZWlnaHQ6IGZ1bmN0aW9uKGVsLCBjYWNoZSkge1xuICAgICAgICAgICAgcmV0dXJuIEtUVXRpbC5hY3R1YWxDc3MoZWwsICdoZWlnaHQnLCBjYWNoZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWN0dWFsV2lkdGg6IGZ1bmN0aW9uKGVsLCBjYWNoZSkge1xuICAgICAgICAgICAgcmV0dXJuIEtUVXRpbC5hY3R1YWxDc3MoZWwsICd3aWR0aCcsIGNhY2hlKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRTY3JvbGw6IGZ1bmN0aW9uKGVsZW1lbnQsIG1ldGhvZCkge1xuICAgICAgICAgICAgLy8gVGhlIHBhc3NlZCBpbiBgbWV0aG9kYCB2YWx1ZSBzaG91bGQgYmUgJ1RvcCcgb3IgJ0xlZnQnXG4gICAgICAgICAgICBtZXRob2QgPSAnc2Nyb2xsJyArIG1ldGhvZDtcbiAgICAgICAgICAgIHJldHVybiAoZWxlbWVudCA9PSB3aW5kb3cgfHwgZWxlbWVudCA9PSBkb2N1bWVudCkgPyAoXG4gICAgICAgICAgICAgICAgc2VsZlsobWV0aG9kID09ICdzY3JvbGxUb3AnKSA/ICdwYWdlWU9mZnNldCcgOiAncGFnZVhPZmZzZXQnXSB8fFxuICAgICAgICAgICAgICAgIChicm93c2VyU3VwcG9ydHNCb3hNb2RlbCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbbWV0aG9kXSkgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5W21ldGhvZF1cbiAgICAgICAgICAgICkgOiBlbGVtZW50W21ldGhvZF07XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3NzOiBmdW5jdGlvbihlbCwgc3R5bGVQcm9wLCB2YWx1ZSwgaW1wb3J0YW50KSB7XG4gICAgICAgICAgICBpZiAoIWVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmICggaW1wb3J0YW50ID09PSB0cnVlICkge1xuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZVByb3AsIHZhbHVlLCAnaW1wb3J0YW50Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGVbc3R5bGVQcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRWaWV3ID0gKGVsLm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQpLmRlZmF1bHRWaWV3O1xuXG4gICAgICAgICAgICAgICAgLy8gVzNDIHN0YW5kYXJkIHdheTpcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdFZpZXcgJiYgZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBzYW5pdGl6ZSBwcm9wZXJ0eSBuYW1lIHRvIGNzcyBub3RhdGlvblxuICAgICAgICAgICAgICAgICAgICAvLyAoaHlwaGVuIHNlcGFyYXRlZCB3b3JkcyBlZy4gZm9udC1TaXplKVxuICAgICAgICAgICAgICAgICAgICBzdHlsZVByb3AgPSBzdHlsZVByb3AucmVwbGFjZSgvKFtBLVpdKS9nLCBcIi0kMVwiKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbC5jdXJyZW50U3R5bGUpIHsgLy8gSUVcbiAgICAgICAgICAgICAgICAgICAgLy8gc2FuaXRpemUgcHJvcGVydHkgbmFtZSB0byBjYW1lbENhc2VcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVQcm9wID0gc3R5bGVQcm9wLnJlcGxhY2UoL1xcLShcXHcpL2csIGZ1bmN0aW9uKHN0ciwgbGV0dGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZWwuY3VycmVudFN0eWxlW3N0eWxlUHJvcF07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29udmVydCBvdGhlciB1bml0cyB0byBwaXhlbHMgb24gSUVcbiAgICAgICAgICAgICAgICAgICAgaWYgKC9eXFxkKyhlbXxwdHwlfGV4KT8kL2kudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2xkTGVmdCA9IGVsLnN0eWxlLmxlZnQsIG9sZFJzTGVmdCA9IGVsLnJ1bnRpbWVTdHlsZS5sZWZ0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucnVudGltZVN0eWxlLmxlZnQgPSBlbC5jdXJyZW50U3R5bGUubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gdmFsdWUgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGVsLnN0eWxlLnBpeGVsTGVmdCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gb2xkTGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5ydW50aW1lU3R5bGUubGVmdCA9IG9sZFJzTGVmdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2xpZGU6IGZ1bmN0aW9uKGVsLCBkaXIsIHNwZWVkLCBjYWxsYmFjaywgcmVjYWxjTWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICBpZiAoIWVsIHx8IChkaXIgPT0gJ3VwJyAmJiBLVFV0aWwudmlzaWJsZShlbCkgPT09IGZhbHNlKSB8fCAoZGlyID09ICdkb3duJyAmJiBLVFV0aWwudmlzaWJsZShlbCkgPT09IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGVlZCA9IChzcGVlZCA/IHNwZWVkIDogNjAwKTtcbiAgICAgICAgICAgIHZhciBjYWxjSGVpZ2h0ID0gS1RVdGlsLmFjdHVhbEhlaWdodChlbCk7XG4gICAgICAgICAgICB2YXIgY2FsY1BhZGRpbmdUb3AgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBjYWxjUGFkZGluZ0JvdHRvbSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoS1RVdGlsLmNzcyhlbCwgJ3BhZGRpbmctdG9wJykgJiYgS1RVdGlsLmRhdGEoZWwpLmhhcygnc2xpZGUtcGFkZGluZy10b3AnKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIEtUVXRpbC5kYXRhKGVsKS5zZXQoJ3NsaWRlLXBhZGRpbmctdG9wJywgS1RVdGlsLmNzcyhlbCwgJ3BhZGRpbmctdG9wJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoS1RVdGlsLmNzcyhlbCwgJ3BhZGRpbmctYm90dG9tJykgJiYgS1RVdGlsLmRhdGEoZWwpLmhhcygnc2xpZGUtcGFkZGluZy1ib3R0b20nKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIEtUVXRpbC5kYXRhKGVsKS5zZXQoJ3NsaWRlLXBhZGRpbmctYm90dG9tJywgS1RVdGlsLmNzcyhlbCwgJ3BhZGRpbmctYm90dG9tJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoS1RVdGlsLmRhdGEoZWwpLmhhcygnc2xpZGUtcGFkZGluZy10b3AnKSkge1xuICAgICAgICAgICAgICAgIGNhbGNQYWRkaW5nVG9wID0gcGFyc2VJbnQoS1RVdGlsLmRhdGEoZWwpLmdldCgnc2xpZGUtcGFkZGluZy10b3AnKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChLVFV0aWwuZGF0YShlbCkuaGFzKCdzbGlkZS1wYWRkaW5nLWJvdHRvbScpKSB7XG4gICAgICAgICAgICAgICAgY2FsY1BhZGRpbmdCb3R0b20gPSBwYXJzZUludChLVFV0aWwuZGF0YShlbCkuZ2V0KCdzbGlkZS1wYWRkaW5nLWJvdHRvbScpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRpciA9PSAndXAnKSB7IC8vIHVwXG4gICAgICAgICAgICAgICAgZWwuc3R5bGUuY3NzVGV4dCA9ICdkaXNwbGF5OiBibG9jazsgb3ZlcmZsb3c6IGhpZGRlbjsnO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGNQYWRkaW5nVG9wKSB7XG4gICAgICAgICAgICAgICAgICAgIEtUVXRpbC5hbmltYXRlKDAsIGNhbGNQYWRkaW5nVG9wLCBzcGVlZCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnBhZGRpbmdUb3AgPSAoY2FsY1BhZGRpbmdUb3AgLSB2YWx1ZSkgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9LCAnbGluZWFyJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGNQYWRkaW5nQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIEtUVXRpbC5hbmltYXRlKDAsIGNhbGNQYWRkaW5nQm90dG9tLCBzcGVlZCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnBhZGRpbmdCb3R0b20gPSAoY2FsY1BhZGRpbmdCb3R0b20gLSB2YWx1ZSkgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9LCAnbGluZWFyJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgS1RVdGlsLmFuaW1hdGUoMCwgY2FsY0hlaWdodCwgc3BlZWQsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IChjYWxjSGVpZ2h0IC0gdmFsdWUpICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9LCAnbGluZWFyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpciA9PSAnZG93bicpIHsgLy8gZG93blxuICAgICAgICAgICAgICAgIGVsLnN0eWxlLmNzc1RleHQgPSAnZGlzcGxheTogYmxvY2s7IG92ZXJmbG93OiBoaWRkZW47JztcblxuICAgICAgICAgICAgICAgIGlmIChjYWxjUGFkZGluZ1RvcCkge1xuICAgICAgICAgICAgICAgICAgICBLVFV0aWwuYW5pbWF0ZSgwLCBjYWxjUGFkZGluZ1RvcCwgc3BlZWQsIGZ1bmN0aW9uKHZhbHVlKSB7Ly9cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnBhZGRpbmdUb3AgPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH0sICdsaW5lYXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnBhZGRpbmdUb3AgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGNQYWRkaW5nQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIEtUVXRpbC5hbmltYXRlKDAsIGNhbGNQYWRkaW5nQm90dG9tLCBzcGVlZCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnBhZGRpbmdCb3R0b20gPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH0sICdsaW5lYXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnBhZGRpbmdCb3R0b20gPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgS1RVdGlsLmFuaW1hdGUoMCwgY2FsY0hlaWdodCwgc3BlZWQsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9LCAnbGluZWFyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLm92ZXJmbG93ID0gJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHNsaWRlVXA6IGZ1bmN0aW9uKGVsLCBzcGVlZCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIEtUVXRpbC5zbGlkZShlbCwgJ3VwJywgc3BlZWQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICBzbGlkZURvd246IGZ1bmN0aW9uKGVsLCBzcGVlZCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIEtUVXRpbC5zbGlkZShlbCwgJ2Rvd24nLCBzcGVlZCwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uKGVsLCBkaXNwbGF5KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAoZGlzcGxheSA/IGRpc3BsYXkgOiAnYmxvY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBoaWRlOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGFkZEV2ZW50OiBmdW5jdGlvbihlbCwgdHlwZSwgaGFuZGxlciwgb25lKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsICE9PSAndW5kZWZpbmVkJyAmJiBlbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlRXZlbnQ6IGZ1bmN0aW9uKGVsLCB0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG9uOiBmdW5jdGlvbihlbGVtZW50LCBzZWxlY3RvciwgZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmICggZWxlbWVudCA9PT0gbnVsbCApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBldmVudElkID0gS1RVdGlsLmdldFVuaXF1ZUlkKCdldmVudCcpO1xuXG4gICAgICAgICAgICB3aW5kb3cuS1RVdGlsRGVsZWdhdGVkRXZlbnRIYW5kbGVyc1tldmVudElkXSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKCB0YXJnZXQgJiYgdGFyZ2V0ICE9PSBlbGVtZW50ICkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCB2YXIgaSA9IDAsIGogPSB0YXJnZXRzLmxlbmd0aDsgaSA8IGo7IGkrKyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0ID09PSB0YXJnZXRzW2ldICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0YXJnZXQsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBLVFV0aWwuYWRkRXZlbnQoZWxlbWVudCwgZXZlbnQsIHdpbmRvdy5LVFV0aWxEZWxlZ2F0ZWRFdmVudEhhbmRsZXJzW2V2ZW50SWRdKTtcblxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50SWQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb2ZmOiBmdW5jdGlvbihlbGVtZW50LCBldmVudCwgZXZlbnRJZCkge1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50IHx8ICF3aW5kb3cuS1RVdGlsRGVsZWdhdGVkRXZlbnRIYW5kbGVyc1tldmVudElkXSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgS1RVdGlsLnJlbW92ZUV2ZW50KGVsZW1lbnQsIGV2ZW50LCB3aW5kb3cuS1RVdGlsRGVsZWdhdGVkRXZlbnRIYW5kbGVyc1tldmVudElkXSk7XG5cbiAgICAgICAgICAgIGRlbGV0ZSB3aW5kb3cuS1RVdGlsRGVsZWdhdGVkRXZlbnRIYW5kbGVyc1tldmVudElkXTtcbiAgICAgICAgfSxcblxuICAgICAgICBvbmU6IGZ1bmN0aW9uIG9uZXRpbWUoZWwsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmN0aW9uIGNhbGxlZShlKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGV2ZW50XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLnR5cGUsIGNhbGxlZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gbmVlZCB0byB2ZXJpZnkgZnJvbSBodHRwczovL3RoZW1lZm9yZXN0Lm5ldC9hdXRob3JfZGFzaGJvYXJkI2NvbW1lbnRfMjM2MTU1ODhcbiAgICAgICAgICAgICAgICBpZiAoZWwgJiYgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuXHRcdFx0XHQgICAgZS5jdXJyZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZS50eXBlLCBjYWxsZWUpO1xuXHRcdFx0ICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNhbGwgaGFuZGxlclxuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhc2g6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICAgICAgdmFyIGhhc2ggPSAwLFxuICAgICAgICAgICAgICAgIGksIGNocjtcblxuICAgICAgICAgICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHJldHVybiBoYXNoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNociA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAgICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGNocjtcbiAgICAgICAgICAgICAgICBoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaGFzaDtcbiAgICAgICAgfSxcblxuICAgICAgICBhbmltYXRlQ2xhc3M6IGZ1bmN0aW9uKGVsLCBhbmltYXRpb25OYW1lLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbjtcbiAgICAgICAgICAgIHZhciBhbmltYXRpb25zID0ge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCcsXG4gICAgICAgICAgICAgICAgT0FuaW1hdGlvbjogJ29BbmltYXRpb25FbmQnLFxuICAgICAgICAgICAgICAgIE1vekFuaW1hdGlvbjogJ21vekFuaW1hdGlvbkVuZCcsXG4gICAgICAgICAgICAgICAgV2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICAgICAgICAgICAgICBtc0FuaW1hdGlvbjogJ21zQW5pbWF0aW9uRW5kJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZvciAodmFyIHQgaW4gYW5pbWF0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChlbC5zdHlsZVt0XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbiA9IGFuaW1hdGlvbnNbdF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBLVFV0aWwuYWRkQ2xhc3MoZWwsIGFuaW1hdGlvbk5hbWUpO1xuXG4gICAgICAgICAgICBLVFV0aWwub25lKGVsLCBhbmltYXRpb24sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIEtUVXRpbC5yZW1vdmVDbGFzcyhlbCwgYW5pbWF0aW9uTmFtZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgS1RVdGlsLm9uZShlbCwgYW5pbWF0aW9uLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgdHJhbnNpdGlvbkVuZDogZnVuY3Rpb24oZWwsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgdHJhbnNpdGlvbjtcbiAgICAgICAgICAgIHZhciB0cmFuc2l0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgICAgICAgICAgICAgT1RyYW5zaXRpb246ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgICAgICAgICAgICAgTW96VHJhbnNpdGlvbjogJ21velRyYW5zaXRpb25FbmQnLFxuICAgICAgICAgICAgICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgICAgICAgICBtc1RyYW5zaXRpb246ICdtc1RyYW5zaXRpb25FbmQnXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKHZhciB0IGluIHRyYW5zaXRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsLnN0eWxlW3RdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb25zW3RdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgS1RVdGlsLm9uZShlbCwgdHJhbnNpdGlvbiwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFuaW1hdGlvbkVuZDogZnVuY3Rpb24oZWwsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uO1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJyxcbiAgICAgICAgICAgICAgICBPQW5pbWF0aW9uOiAnb0FuaW1hdGlvbkVuZCcsXG4gICAgICAgICAgICAgICAgTW96QW5pbWF0aW9uOiAnbW96QW5pbWF0aW9uRW5kJyxcbiAgICAgICAgICAgICAgICBXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgICAgICAgICAgICAgIG1zQW5pbWF0aW9uOiAnbXNBbmltYXRpb25FbmQnXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKHZhciB0IGluIGFuaW1hdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWwuc3R5bGVbdF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24gPSBhbmltYXRpb25zW3RdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgS1RVdGlsLm9uZShlbCwgYW5pbWF0aW9uLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYW5pbWF0ZURlbGF5OiBmdW5jdGlvbihlbCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciB2ZW5kb3JzID0gWyd3ZWJraXQtJywgJ21vei0nLCAnbXMtJywgJ28tJywgJyddO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgS1RVdGlsLmNzcyhlbCwgdmVuZG9yc1tpXSArICdhbmltYXRpb24tZGVsYXknLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYW5pbWF0ZUR1cmF0aW9uOiBmdW5jdGlvbihlbCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciB2ZW5kb3JzID0gWyd3ZWJraXQtJywgJ21vei0nLCAnbXMtJywgJ28tJywgJyddO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgS1RVdGlsLmNzcyhlbCwgdmVuZG9yc1tpXSArICdhbmltYXRpb24tZHVyYXRpb24nLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2Nyb2xsVG86IGZ1bmN0aW9uKHRhcmdldCwgb2Zmc2V0LCBkdXJhdGlvbikge1xuICAgICAgICAgICAgdmFyIGR1cmF0aW9uID0gZHVyYXRpb24gPyBkdXJhdGlvbiA6IDUwMDtcbiAgICAgICAgICAgIHZhciB0YXJnZXRQb3MgPSB0YXJnZXQgPyBLVFV0aWwub2Zmc2V0KHRhcmdldCkudG9wIDogMDtcbiAgICAgICAgICAgIHZhciBzY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwO1xuICAgICAgICAgICAgdmFyIGZyb20sIHRvO1xuXG4gICAgICAgICAgICBpZiAob2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0UG9zID0gdGFyZ2V0UG9zIC0gb2Zmc2V0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmcm9tID0gc2Nyb2xsUG9zO1xuICAgICAgICAgICAgdG8gPSB0YXJnZXRQb3M7XG5cbiAgICAgICAgICAgIEtUVXRpbC5hbmltYXRlKGZyb20sIHRvLCBkdXJhdGlvbiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlLnNjcm9sbFRvcCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gdmFsdWU7XG4gICAgICAgICAgICB9KTsgLy8sIGVhc2luZywgZG9uZVxuICAgICAgICB9LFxuXG4gICAgICAgIHNjcm9sbFRvcDogZnVuY3Rpb24ob2Zmc2V0LCBkdXJhdGlvbikge1xuICAgICAgICAgICAgS1RVdGlsLnNjcm9sbFRvKG51bGwsIG9mZnNldCwgZHVyYXRpb24pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGlzQXJyYXk6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIG9iaiAmJiBBcnJheS5pc0FycmF5KG9iaik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXNFbXB0eTogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbnVtYmVyU3RyaW5nOiBmdW5jdGlvbihuU3RyKSB7XG4gICAgICAgICAgICBuU3RyICs9ICcnO1xuICAgICAgICAgICAgdmFyIHggPSBuU3RyLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICB2YXIgeDEgPSB4WzBdO1xuICAgICAgICAgICAgdmFyIHgyID0geC5sZW5ndGggPiAxID8gJy4nICsgeFsxXSA6ICcnO1xuICAgICAgICAgICAgdmFyIHJneCA9IC8oXFxkKykoXFxkezN9KS87XG4gICAgICAgICAgICB3aGlsZSAocmd4LnRlc3QoeDEpKSB7XG4gICAgICAgICAgICAgICAgeDEgPSB4MS5yZXBsYWNlKHJneCwgJyQxJyArICcsJyArICckMicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHgxICsgeDI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXNSVEw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuZ2V0QXR0cmlidXRlKFwiZGlyZWN0aW9uXCIpID09PSAncnRsJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc25ha2VUb0NhbWVsOiBmdW5jdGlvbihzKXtcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoLyhcXC1cXHcpL2csIGZ1bmN0aW9uKG0pe3JldHVybiBtWzFdLnRvVXBwZXJDYXNlKCk7fSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmlsdGVyQm9vbGVhbjogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IHN0cmluZyBib29sZWFuXG5cdFx0XHRpZiAodmFsID09PSB0cnVlIHx8IHZhbCA9PT0gJ3RydWUnKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodmFsID09PSBmYWxzZSB8fCB2YWwgPT09ICdmYWxzZScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldEhUTUw6IGZ1bmN0aW9uKGVsLCBodG1sKSB7XG4gICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldEhUTUw6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwuaW5uZXJIVE1MO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGdldERvY3VtZW50SGVpZ2h0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgIHZhciBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoIGJvZHkuc2Nyb2xsSGVpZ2h0LCBib2R5Lm9mZnNldEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLm9mZnNldEhlaWdodCApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFNjcm9sbFRvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gIChkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuc2Nyb2xsVG9wO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNvbG9yTGlnaHRlbjogZnVuY3Rpb24oY29sb3IsIGFtb3VudCkge1xuICAgICAgICAgICAgY29uc3QgYWRkTGlnaHQgPSBmdW5jdGlvbihjb2xvciwgYW1vdW50KXtcbiAgICAgICAgICAgICAgICBsZXQgY2MgPSBwYXJzZUludChjb2xvciwxNikgKyBhbW91bnQ7XG4gICAgICAgICAgICAgICAgbGV0IGMgPSAoY2MgPiAyNTUpID8gMjU1IDogKGNjKTtcbiAgICAgICAgICAgICAgICBjID0gKGMudG9TdHJpbmcoMTYpLmxlbmd0aCA+IDEgKSA/IGMudG9TdHJpbmcoMTYpIDogYDAke2MudG9TdHJpbmcoMTYpfWA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbG9yID0gKGNvbG9yLmluZGV4T2YoXCIjXCIpPj0wKSA/IGNvbG9yLnN1YnN0cmluZygxLGNvbG9yLmxlbmd0aCkgOiBjb2xvcjtcbiAgICAgICAgICAgIGFtb3VudCA9IHBhcnNlSW50KCgyNTUqYW1vdW50KS8xMDApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gY29sb3IgPSBgIyR7YWRkTGlnaHQoY29sb3Iuc3Vic3RyaW5nKDAsMiksIGFtb3VudCl9JHthZGRMaWdodChjb2xvci5zdWJzdHJpbmcoMiw0KSwgYW1vdW50KX0ke2FkZExpZ2h0KGNvbG9yLnN1YnN0cmluZyg0LDYpLCBhbW91bnQpfWA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29sb3JEYXJrZW46IGZ1bmN0aW9uKGNvbG9yLCBhbW91bnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnRyYWN0TGlnaHQgPSBmdW5jdGlvbihjb2xvciwgYW1vdW50KXtcbiAgICAgICAgICAgICAgICBsZXQgY2MgPSBwYXJzZUludChjb2xvciwxNikgLSBhbW91bnQ7XG4gICAgICAgICAgICAgICAgbGV0IGMgPSAoY2MgPCAwKSA/IDAgOiAoY2MpO1xuICAgICAgICAgICAgICAgIGMgPSAoYy50b1N0cmluZygxNikubGVuZ3RoID4gMSApID8gYy50b1N0cmluZygxNikgOiBgMCR7Yy50b1N0cmluZygxNil9YDtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbG9yID0gKGNvbG9yLmluZGV4T2YoXCIjXCIpPj0wKSA/IGNvbG9yLnN1YnN0cmluZygxLGNvbG9yLmxlbmd0aCkgOiBjb2xvcjtcbiAgICAgICAgICAgIGFtb3VudCA9IHBhcnNlSW50KCgyNTUqYW1vdW50KS8xMDApO1xuXG4gICAgICAgICAgICByZXR1cm4gY29sb3IgPSBgIyR7c3VidHJhY3RMaWdodChjb2xvci5zdWJzdHJpbmcoMCwyKSwgYW1vdW50KX0ke3N1YnRyYWN0TGlnaHQoY29sb3Iuc3Vic3RyaW5nKDIsNCksIGFtb3VudCl9JHtzdWJ0cmFjdExpZ2h0KGNvbG9yLnN1YnN0cmluZyg0LDYpLCBhbW91bnQpfWA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gVGhyb3R0bGUgZnVuY3Rpb246IElucHV0IGFzIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGJlIHRocm90dGxlZCBhbmQgZGVsYXkgaXMgdGhlIHRpbWUgaW50ZXJ2YWwgaW4gbWlsbGlzZWNvbmRzXG4gICAgICAgIHRocm90dGxlOiAgZnVuY3Rpb24gKHRpbWVyLCBmdW5jLCBkZWxheSkge1xuICAgICAgICBcdC8vIElmIHNldFRpbWVvdXQgaXMgYWxyZWFkeSBzY2hlZHVsZWQsIG5vIG5lZWQgdG8gZG8gYW55dGhpbmdcbiAgICAgICAgXHRpZiAodGltZXIpIHtcbiAgICAgICAgXHRcdHJldHVybjtcbiAgICAgICAgXHR9XG5cbiAgICAgICAgXHQvLyBTY2hlZHVsZSBhIHNldFRpbWVvdXQgYWZ0ZXIgZGVsYXkgc2Vjb25kc1xuICAgICAgICBcdHRpbWVyICA9ICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXHRcdGZ1bmMoKTtcblxuICAgICAgICBcdFx0Ly8gT25jZSBzZXRUaW1lb3V0IGZ1bmN0aW9uIGV4ZWN1dGlvbiBpcyBmaW5pc2hlZCwgdGltZXJJZCA9IHVuZGVmaW5lZCBzbyB0aGF0IGluIDxicj5cbiAgICAgICAgXHRcdC8vIHRoZSBuZXh0IHNjcm9sbCBldmVudCBmdW5jdGlvbiBleGVjdXRpb24gY2FuIGJlIHNjaGVkdWxlZCBieSB0aGUgc2V0VGltZW91dFxuICAgICAgICBcdFx0dGltZXIgID0gIHVuZGVmaW5lZDtcbiAgICAgICAgXHR9LCBkZWxheSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gRGVib3VuY2UgZnVuY3Rpb246IElucHV0IGFzIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGJlIGRlYm91bmNlZCBhbmQgZGVsYXkgaXMgdGhlIGRlYm91bmNlZCB0aW1lIGluIG1pbGxpc2Vjb25kc1xuICAgICAgICBkZWJvdW5jZTogZnVuY3Rpb24gKHRpbWVyLCBmdW5jLCBkZWxheSkge1xuICAgICAgICBcdC8vIENhbmNlbHMgdGhlIHNldFRpbWVvdXQgbWV0aG9kIGV4ZWN1dGlvblxuICAgICAgICBcdGNsZWFyVGltZW91dCh0aW1lcilcblxuICAgICAgICBcdC8vIEV4ZWN1dGVzIHRoZSBmdW5jIGFmdGVyIGRlbGF5IHRpbWUuXG4gICAgICAgIFx0dGltZXIgID0gIHNldFRpbWVvdXQoZnVuYywgZGVsYXkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBhcnNlSnNvbjogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8nL2csIFwiXFxcIlwiKTtcblxuICAgICAgICAgICAgICAgIHZhciBqc29uU3RyID0gdmFsdWUucmVwbGFjZSgvKFxcdys6KXwoXFx3KyA6KS9nLCBmdW5jdGlvbihtYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnXCInICsgbWF0Y2hlZC5zdWJzdHJpbmcoMCwgbWF0Y2hlZC5sZW5ndGggLSAxKSArICdcIjonO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKGpzb25TdHIpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkgeyB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRSZXNwb25zaXZlVmFsdWU6IGZ1bmN0aW9uKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IHRoaXMuZ2V0Vmlld1BvcnQoKS53aWR0aDtcbiAgICAgICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgICAgIHZhbHVlID0gS1RVdGlsLnBhcnNlSnNvbih2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdEtleTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0QnJlYWtwb2ludCA9IC0xO1xuICAgICAgICAgICAgICAgIHZhciBicmVha3BvaW50O1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50ID0gdGhpcy5nZXRCcmVha3BvaW50KGtleSkgPyB0aGlzLmdldEJyZWFrcG9pbnQoa2V5KSA6IHBhcnNlSW50KGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoYnJlYWtwb2ludCA8PSB3aWR0aCAmJiBicmVha3BvaW50ID4gcmVzdWx0QnJlYWtwb2ludCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0S2V5ID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0QnJlYWtwb2ludCA9IGJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlW3Jlc3VsdEtleV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICBlYWNoOiBmdW5jdGlvbihhcnJheSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKGFycmF5KS5tYXAoY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFNlbGVjdG9yTWF0Y2hWYWx1ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgdmFsdWUgPSBLVFV0aWwucGFyc2VKc29uKHZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICkge1xuICAgICAgICAgICAgICAgIC8vIE1hdGNoIGNvbmRpdGlvblxuICAgICAgICAgICAgICAgIGlmICggdmFsdWVbJ21hdGNoJ10gIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gT2JqZWN0LmtleXModmFsdWVbJ21hdGNoJ10pWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE9iamVjdC52YWx1ZXModmFsdWVbJ21hdGNoJ10pWzBdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICggZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgIT09IG51bGwgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0Q29uZGl0aW9uYWxWYWx1ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IEtUVXRpbC5wYXJzZUpzb24odmFsdWUpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IEtUVXRpbC5nZXRSZXNwb25zaXZlVmFsdWUodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAoIHJlc3VsdCAhPT0gbnVsbCAmJiByZXN1bHRbJ21hdGNoJ10gIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBLVFV0aWwuZ2V0U2VsZWN0b3JNYXRjaFZhbHVlKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggcmVzdWx0ID09PSBudWxsICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlWydkZWZhdWx0J10gIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZVsnZGVmYXVsdCddO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldENzc1ZhcmlhYmxlVmFsdWU6IGZ1bmN0aW9uKHZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgdmFyIGhleCA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKHZhcmlhYmxlTmFtZSk7XG4gICAgICAgICAgICBpZiAoIGhleCAmJiBoZXgubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgICAgICBoZXggPSBoZXgudHJpbSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaGV4O1xuICAgICAgICB9LFxuXG4gICAgICAgIGlzSW5WaWV3cG9ydDogZnVuY3Rpb24oZWxlbWVudCkgeyAgICAgICAgXG4gICAgICAgICAgICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgcmVjdC50b3AgPj0gMCAmJlxuICAgICAgICAgICAgICAgIHJlY3QubGVmdCA+PSAwICYmXG4gICAgICAgICAgICAgICAgcmVjdC5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxuICAgICAgICAgICAgICAgIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25ET01Db250ZW50TG9hZGVkOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5JZnJhbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LnNlbGYgIT09IHdpbmRvdy50b3A7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KCk7XG5cbi8vIFdlYnBhY2sgc3VwcG9ydFxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEtUVXRpbDtcbn0iXSwibmFtZXMiOlsiRWxlbWVudCIsInByb3RvdHlwZSIsIm1hdGNoZXMiLCJzIiwiZG9jdW1lbnQiLCJvd25lckRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJpdGVtIiwiY2xvc2VzdCIsImVsIiwiYW5jZXN0b3IiLCJkb2N1bWVudEVsZW1lbnQiLCJjb250YWlucyIsInBhcmVudEVsZW1lbnQiLCJlbGVtIiwid2luZG93IiwicmVtb3ZlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwibGFzdFRpbWUiLCJ2ZW5kb3JzIiwieCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJjdXJyVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidGltZVRvQ2FsbCIsIk1hdGgiLCJtYXgiLCJpZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJhcnIiLCJmb3JFYWNoIiwiaGFzT3duUHJvcGVydHkiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsInZhbHVlIiwicHJlcGVuZCIsImFyZ0FyciIsIkFycmF5Iiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZG9jRnJhZyIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJhcmdJdGVtIiwiaXNOb2RlIiwiTm9kZSIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJTdHJpbmciLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiRG9jdW1lbnQiLCJEb2N1bWVudEZyYWdtZW50IiwiZ2V0QXR0cmlidXRlTmFtZXMiLCJ1bmRlZmluZWQiLCJhdHRyaWJ1dGVzIiwicmVzdWx0IiwibmFtZSIsIktUVXRpbEVsZW1lbnREYXRhU3RvcmUiLCJLVFV0aWxFbGVtZW50RGF0YVN0b3JlSUQiLCJLVFV0aWxEZWxlZ2F0ZWRFdmVudEhhbmRsZXJzIiwiS1RVdGlsIiwicmVzaXplSGFuZGxlcnMiLCJfd2luZG93UmVzaXplSGFuZGxlciIsIl9ydW5SZXNpemVIYW5kbGVycyIsImVhY2giLCJ0aW1lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aHJvdHRsZSIsImluaXQiLCJzZXR0aW5ncyIsImFkZFJlc2l6ZUhhbmRsZXIiLCJwdXNoIiwicmVtb3ZlUmVzaXplSGFuZGxlciIsInJ1blJlc2l6ZUhhbmRsZXJzIiwicmVzaXplIiwiRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiZXZ0IiwiY3JlYXRlRXZlbnQiLCJpbml0VUlFdmVudCIsImdldFVSTFBhcmFtIiwicGFyYW1OYW1lIiwic2VhcmNoU3RyaW5nIiwibG9jYXRpb24iLCJzZWFyY2giLCJzdWJzdHJpbmciLCJ2YWwiLCJwYXJhbXMiLCJzcGxpdCIsInVuZXNjYXBlIiwiaXNNb2JpbGVEZXZpY2UiLCJ0ZXN0IiwiZ2V0Vmlld1BvcnQiLCJ3aWR0aCIsImdldEJyZWFrcG9pbnQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsImlzRGVza3RvcERldmljZSIsImUiLCJhIiwiYm9keSIsImhlaWdodCIsImlzQnJlYWtwb2ludFVwIiwibW9kZSIsImJyZWFrcG9pbnQiLCJpc0JyZWFrcG9pbnREb3duIiwiZ2V0Vmlld3BvcnRXaWR0aCIsImdldFVuaXF1ZUlkIiwicHJlZml4IiwiZmxvb3IiLCJyYW5kb20iLCJnZXRDc3NWYXJpYWJsZVZhbHVlIiwicGFyc2VJbnQiLCJ0cmltIiwiaXNzZXQiLCJvYmoiLCJrZXlzIiwic3RvbmUiLCJpbmRleE9mIiwiRXJyb3IiLCJzaGlmdCIsImdldEhpZ2hlc3RaaW5kZXgiLCJwb3NpdGlvbiIsImNzcyIsImlzTmFOIiwiaGFzRml4ZWRQb3NpdGlvbmVkUGFyZW50Iiwic2xlZXAiLCJtaWxsaXNlY29uZHMiLCJzdGFydCIsImdldFJhbmRvbUludCIsIm1pbiIsImlzQW5ndWxhclZlcnNpb24iLCJab25lIiwiZGVlcEV4dGVuZCIsIm91dCIsImtleSIsInRvU3RyaW5nIiwiZXh0ZW5kIiwiZ2V0Qm9keSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGFzQ2xhc3NlcyIsImNsYXNzZXMiLCJjbGFzc2VzQXJyIiwiaGFzQ2xhc3MiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJSZWdFeHAiLCJhZGRDbGFzcyIsImNsYXNzTmFtZXMiLCJhZGQiLCJyZW1vdmVDbGFzcyIsInJlcGxhY2UiLCJ0cmlnZ2VyQ3VzdG9tRXZlbnQiLCJldmVudE5hbWUiLCJkYXRhIiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImluaXRDdXN0b21FdmVudCIsInRyaWdnZXJFdmVudCIsIm5vZGUiLCJkb2MiLCJub2RlVHlwZSIsImV2ZW50Q2xhc3MiLCJidWJibGVzIiwiaW5pdEV2ZW50Iiwic3ludGhldGljIiwiZmlyZUV2ZW50IiwiY3JlYXRlRXZlbnRPYmplY3QiLCJpbmRleCIsImMiLCJjaGlsZHJlbiIsInN0cmluZyIsImV2ZW50VHJpZ2dlcmVkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ0cmlnZ2VyZWQiLCJmaW5kIiwicGFyZW50IiwicXVlcnkiLCJxdWVyeVNlbGVjdG9yIiwiZmluZEFsbCIsImluc2VydEFmdGVyIiwicmVmZXJlbmNlTm9kZSIsIm5leHRTaWJsaW5nIiwicGFyZW50cyIsInNlbGVjdG9yIiwibG9nIiwiY2hpbGROb2RlcyIsImwiLCJjaGlsZCIsInAiLCJmIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJ0YWdOYW1lIiwic2V0IiwiY3VzdG9tRGF0YVRhZyIsImdldCIsImhhcyIsIm91dGVyV2lkdGgiLCJtYXJnaW4iLCJwYXJzZUZsb2F0Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXQiLCJyZWN0Iiwid2luIiwiZ2V0Q2xpZW50UmVjdHMiLCJ0b3AiLCJsZWZ0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZGVmYXVsdFZpZXciLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0IiwicmlnaHQiLCJpbm5lcldpZHRoIiwib2Zmc2V0TGVmdCIsIm91dGVySGVpZ2h0Iiwid2l0aE1hcmdpbiIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInZpc2libGUiLCJhdHRyIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiaGFzQXR0ciIsInJlbW92ZUF0dHIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhbmltYXRlIiwiZnJvbSIsInRvIiwiZHVyYXRpb24iLCJ1cGRhdGUiLCJlYXNpbmciLCJkb25lIiwiZWFzaW5ncyIsImxpbmVhciIsInQiLCJiIiwiZCIsInJBRiIsImNhbmNlbGVkIiwiY2hhbmdlIiwibG9vcCIsInRpbWVzdGFtcCIsInRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImFjdHVhbENzcyIsInByb3AiLCJjYWNoZSIsIkhUTUxFbGVtZW50IiwiY3NzVGV4dCIsImFjdHVhbEhlaWdodCIsImFjdHVhbFdpZHRoIiwiZ2V0U2Nyb2xsIiwiZWxlbWVudCIsIm1ldGhvZCIsInNlbGYiLCJicm93c2VyU3VwcG9ydHNCb3hNb2RlbCIsInN0eWxlUHJvcCIsImltcG9ydGFudCIsInNldFByb3BlcnR5IiwidG9Mb3dlckNhc2UiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiY3VycmVudFN0eWxlIiwic3RyIiwibGV0dGVyIiwidG9VcHBlckNhc2UiLCJvbGRMZWZ0Iiwib2xkUnNMZWZ0IiwicnVudGltZVN0eWxlIiwicGl4ZWxMZWZ0Iiwic2xpZGUiLCJkaXIiLCJzcGVlZCIsInJlY2FsY01heEhlaWdodCIsImNhbGNIZWlnaHQiLCJjYWxjUGFkZGluZ1RvcCIsImNhbGNQYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJkaXNwbGF5Iiwib3ZlcmZsb3ciLCJzbGlkZVVwIiwic2xpZGVEb3duIiwic2hvdyIsImhpZGUiLCJhZGRFdmVudCIsInR5cGUiLCJoYW5kbGVyIiwib25lIiwicmVtb3ZlRXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib24iLCJldmVudElkIiwidGFyZ2V0cyIsInRhcmdldCIsImoiLCJvZmYiLCJvbmV0aW1lIiwiY2FsbGVlIiwiaGFzaCIsImNociIsImNoYXJDb2RlQXQiLCJhbmltYXRlQ2xhc3MiLCJhbmltYXRpb25OYW1lIiwiYW5pbWF0aW9uIiwiYW5pbWF0aW9ucyIsIk9BbmltYXRpb24iLCJNb3pBbmltYXRpb24iLCJXZWJraXRBbmltYXRpb24iLCJtc0FuaW1hdGlvbiIsInRyYW5zaXRpb25FbmQiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJPVHJhbnNpdGlvbiIsIk1velRyYW5zaXRpb24iLCJXZWJraXRUcmFuc2l0aW9uIiwibXNUcmFuc2l0aW9uIiwiYW5pbWF0aW9uRW5kIiwiYW5pbWF0ZURlbGF5IiwiYW5pbWF0ZUR1cmF0aW9uIiwic2Nyb2xsVG8iLCJ0YXJnZXRQb3MiLCJzY3JvbGxQb3MiLCJzY3JvbGxUb3AiLCJpc0FycmF5IiwiaXNFbXB0eSIsIm51bWJlclN0cmluZyIsIm5TdHIiLCJ4MSIsIngyIiwicmd4IiwiaXNSVEwiLCJzbmFrZVRvQ2FtZWwiLCJtIiwiZmlsdGVyQm9vbGVhbiIsInNldEhUTUwiLCJodG1sIiwiaW5uZXJIVE1MIiwiZ2V0SFRNTCIsImdldERvY3VtZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsaW5nRWxlbWVudCIsImNvbG9yTGlnaHRlbiIsImNvbG9yIiwiYW1vdW50IiwiYWRkTGlnaHQiLCJjYyIsImNvbG9yRGFya2VuIiwic3VidHJhY3RMaWdodCIsImZ1bmMiLCJkZWxheSIsImRlYm91bmNlIiwicGFyc2VKc29uIiwianNvblN0ciIsIm1hdGNoZWQiLCJKU09OIiwicGFyc2UiLCJnZXRSZXNwb25zaXZlVmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJyZXN1bHRLZXkiLCJyZXN1bHRCcmVha3BvaW50IiwiYXJyYXkiLCJtYXAiLCJnZXRTZWxlY3Rvck1hdGNoVmFsdWUiLCJ2YWx1ZXMiLCJnZXRDb25kaXRpb25hbFZhbHVlIiwidmFyaWFibGVOYW1lIiwiaGV4IiwiaXNJblZpZXdwb3J0IiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRXaWR0aCIsIm9uRE9NQ29udGVudExvYWRlZCIsInJlYWR5U3RhdGUiLCJpbklmcmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/components/util.js\n");
>>>>>>> Stashed changes

/***/ }),

/***/ "../src/js/layout/app.js":
/*!*******************************!*\
  !*** ../src/js/layout/app.js ***!
  \*******************************/
/***/ ((module) => {

"use strict";
<<<<<<< Updated upstream


// Class definition
var KTApp = function() {
    var initPageLoader =  function() {
        // CSS3 Transitions only after page load(.page-loading class added to body tag and remove with JS on page load)
        KTUtil.removeClass(document.body, 'page-loading');
    }

    var initBootstrapTooltip = function(el, options) {
        var delay = {};

        // Handle delay options
        if (el.hasAttribute('data-bs-delay-hide')) {
            delay['hide'] = el.getAttribute('data-bs-delay-hide');
        }

        if (el.hasAttribute('data-bs-delay-show')) {
            delay['show'] = el.getAttribute('data-bs-delay-show');
        }

        if (delay) {
            options['delay'] = delay;
        }

        // Check dismiss options
        if (el.hasAttribute('data-bs-dismiss') && el.getAttribute('data-bs-dismiss') == 'click') {
            options['dismiss'] = 'click';
        }            

        // Initialize popover
        var tp = new bootstrap.Tooltip(el, options);

        // Handle dismiss
        if (options['dismiss'] && options['dismiss'] === 'click') {
            // Hide popover on element click
            el.addEventListener("click", function(e) {
                tp.hide();
            });
        }

        return tp;
    }

    var initBootstrapTooltips = function(el, options) {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            initBootstrapTooltip(tooltipTriggerEl, {});
        });
    }

    var initBootstrapPopover = function(el, options) {
        var delay = {};

        // Handle delay options
        if (el.hasAttribute('data-bs-delay-hide')) {
            delay['hide'] = el.getAttribute('data-bs-delay-hide');
        }

        if (el.hasAttribute('data-bs-delay-show')) {
            delay['show'] = el.getAttribute('data-bs-delay-show');
        }

        if (delay) {
            options['delay'] = delay;
        }

        // Handle dismiss option
        if (el.getAttribute('data-bs-dismiss') == 'true') {
            options['dismiss'] = true;
        }

        if (options['dismiss'] === true) {
            options['template'] = '<div class="popover" role="tooltip"><div class="popover-arrow"></div><span class="popover-dismiss btn btn-icon"><i class="bi bi-x fs-2"></i></span><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }

        // Initialize popover
        var popover = new bootstrap.Popover(el, options);

        // Handle dismiss click
        if (options['dismiss'] === true) {
            var dismissHandler = function (e) {
                popover.hide();
            }

            el.addEventListener('shown.bs.popover', function() {
                var dismissEl = document.getElementById(el.getAttribute('aria-describedby'));
                dismissEl.addEventListener('click', dismissHandler);
            });

            el.addEventListener('hide.bs.popover', function() {
                var dismissEl = document.getElementById(el.getAttribute('aria-describedby'));
                dismissEl.removeEventListener('click', dismissHandler);
            });
        }

        return popover;
    }

    var initBootstrapPopovers = function() {
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));

        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            initBootstrapPopover(popoverTriggerEl, {});
        });
    }

    var initScrollSpy = function() {
        var elements = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'));

        elements.map(function (element) {
            var sel = element.getAttribute('data-bs-target');            
            var scrollContent = document.querySelector(element.getAttribute('data-bs-target'));
            var scrollSpy = bootstrap.ScrollSpy.getInstance(scrollContent);
            if (scrollSpy) {
                scrollSpy.refresh();
            }
        });
    }

    var initButtons = function() {
        var buttonsGroup = [].slice.call(document.querySelectorAll('[data-kt-buttons="true"]'));

        buttonsGroup.map(function (group) {
            var selector = group.hasAttribute('data-kt-buttons-target') ? group.getAttribute('data-kt-buttons-target') : '.btn';

            // Toggle Handler
            KTUtil.on(group, selector, 'click', function(e) {
                var buttons = [].slice.call(group.querySelectorAll(selector + '.active'));

                buttons.map(function (button) {
                    button.classList.remove('active');
                });

                this.classList.add('active');
            });
        });
    }   

    var initCheck = function() {
        // Toggle Handler
        KTUtil.on(document.body,  '[data-kt-check="true"]', 'change', function(e) {
            var check = this;
            var targets = document.querySelectorAll(check.getAttribute('data-kt-check-target'));

            KTUtil.each(targets, function (target) {
                if (target.type == 'checkbox') {
                    target.checked = check.checked;
                } else {
                    target.classList.toggle('active');
                }                
            });
        });
    }

    var initSelect2 = function() {
        var elements = [].slice.call(document.querySelectorAll('[data-control="select2"], [data-kt-select2="true"]'));
       
        elements.map(function (element) {
            var options = {
                dir: document.body.getAttribute('direction')
            };

            if ( element.getAttribute('data-hide-search') == 'true') {
                options.minimumResultsForSearch = Infinity;
            }
            
            $(element).select2(options);
        });
    }

    var initAutosize = function() {
        var inputs = [].slice.call(document.querySelectorAll('[data-kt-autosize="true"]'));
       
        inputs.map(function (input) {
            autosize(input);
        });
    }

    var initCountUp = function() {
        var elements = [].slice.call(document.querySelectorAll('[data-kt-countup="true"]:not(.counted)'));

        elements.map(function (element) {
            if (KTUtil.isInViewport(element) && KTUtil.visible(element) ) {
                var options = {};

                var value = element.getAttribute('data-kt-countup-value');
                value = parseFloat(value.replace(/,/g,""));

                if (element.hasAttribute('data-kt-countup-start-val')) {
                    options.startVal = parseFloat(element.getAttribute('data-kt-countup-start-val'));
                }

                if (element.hasAttribute('data-kt-countup-duration')) {
                    options.duration = parseInt(element.getAttribute('data-kt-countup-duration'));
                }

                if (element.hasAttribute('data-kt-countup-decimal-places')) {
                    options.decimalPlaces = parseInt(element.getAttribute('data-kt-countup-decimal-places'));
                }

                if (element.hasAttribute('data-kt-countup-prefix')) {
                    options.prefix = element.getAttribute('data-kt-countup-prefix');
                }

                if (element.hasAttribute('data-kt-countup-suffix')) {
                    options.suffix = element.getAttribute('data-kt-countup-suffix');
                }

                var count = new countUp.CountUp(element, value, options);

                count.start();
                
                element.classList.add('counted');
            }                
        });
    }

    var initCountUpTabs = function() {
        // Initial call
        initCountUp();

        // Window scroll event handler
        window.addEventListener('scroll', initCountUp);

        // Tabs shown event handler
        var tabs = [].slice.call(document.querySelectorAll('[data-kt-countup-tabs="true"][data-bs-toggle="tab"]'));
        tabs.map(function (tab) {
            tab.addEventListener('shown.bs.tab', initCountUp);
        });        
    }

    var initTinySliders = function() {
        // Init Slider
        var initSlider = function(el) {
            if (!el) {
                return;
            }

            const tnsOptions = {};

            // Convert string boolean
            const checkBool = function(val) {
                if (val === 'true') {
                    return true;
                }
                if (val === 'false') {
                    return false;
                }
                return val;
            };

            // get extra options via data attributes
            el.getAttributeNames().forEach(function(attrName) {
                // more options; https://github.com/ganlanyuan/tiny-slider#options
                if ((/^data-tns-.*/g).test(attrName)) {
                    let optionName = attrName.replace('data-tns-', '').toLowerCase().replace(/(?:[\s-])\w/g, function(match) {
                        return match.replace('-', '').toUpperCase();
                    });
                    
                    if (attrName === 'data-tns-responsive') {
                        // fix string with a valid json
                        const jsonStr = el.getAttribute(attrName).replace(/(\w+:)|(\w+ :)/g, function(matched) {
                            return '"' + matched.substring(0, matched.length - 1) + '":';
                        });
                        try {
                            // convert json string to object
                            tnsOptions[optionName] = JSON.parse(jsonStr);
                        }
                        catch (e) {
                        }
                    }
                    else {
                        tnsOptions[optionName] = checkBool(el.getAttribute(attrName));
                    }
                }
            });

            const opt = Object.assign({}, {
                container: el,
                slideBy: 'page',
                autoplay: true,
                autoplayButtonOutput: false,
            }, tnsOptions);

            if (el.closest('.tns')) {
                KTUtil.addClass(el.closest('.tns'), 'tns-initiazlied');
            }

            return tns(opt);
        }

        // Sliders
        const elements = Array.prototype.slice.call(document.querySelectorAll('[data-tns="true"]'), 0);

        if (!elements && elements.length === 0) {
            return;
        }

        elements.forEach(function(el) {
            initSlider(el);
        });
    }

    var initSmoothScroll = function() {
        if (SmoothScroll) {

            new SmoothScroll('a[data-kt-scroll-toggle][href*="#"]', {
                speed: 900,
                offset: function (anchor, toggle) {
                    // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
                    // This example is a function, but you could do something as simple as `offset: 25`

                    // An example returning different values based on whether the clicked link was in the header nav or not
                    if (anchor.hasAttribute('data-kt-scroll-offset')) {
                        var val = KTUtil.getResponsiveValue(anchor.getAttribute('data-kt-scroll-offset'));

                        return val;
                    } else {
                        return 0;
                    }
                }
            });
        }        
    }

    return {
        init: function() {
            this.initPageLoader();

            this.initBootstrapTooltips();
            
            this.initBootstrapPopovers();
            
            this.initScrollSpy();
            
            this.initButtons();
            
            this.initCheck();
            
            this.initSelect2();
            
            this.initCountUp();

            this.initCountUpTabs();

            this.initAutosize();

            this.initTinySliders();

            this.initSmoothScroll();
        },

        initPageLoader: function() {
            initPageLoader();
        },

        initBootstrapTooltip: function(el, options) {
            return initBootstrapTooltip(el, options);
        },

        initBootstrapTooltips: function() {
            initBootstrapTooltips();
        },

        initBootstrapPopovers: function() {
            initBootstrapPopovers();
        },

        initBootstrapPopover: function(el, options) {
            return initBootstrapPopover(el, options);
        },

        initScrollSpy: function() {
            initScrollSpy();
        },

        initButtons: function() {
            initButtons();
        },

        initCheck: function() {
            initCheck();
        },

        initSelect2: function() {
            initSelect2();
        },

        initCountUp: function() {
            initCountUp();
        },

        initCountUpTabs: function() {
            initCountUpTabs();
        },

        initAutosize: function() {
            initAutosize();
        },

        initTinySliders: function() {
            initTinySliders();
        },

        initSmoothScroll: function() {
            initSmoothScroll();
        },

        isDarkMode: function() {
            return document.body.classList.contains('dark-mode');
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTApp.init();
});

// On window load
window.addEventListener("load", function() {
	KTApp.initPageLoader();
});

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTApp;
}
=======
eval(" // Class definition\n\nvar KTApp = function () {\n  var _initPageLoader = function initPageLoader() {\n    // CSS3 Transitions only after page load(.page-loading class added to body tag and remove with JS on page load)\n    KTUtil.removeClass(document.body, 'page-loading');\n  };\n\n  var _initBootstrapTooltip = function initBootstrapTooltip(el, options) {\n    var delay = {}; // Handle delay options\n\n    if (el.hasAttribute('data-bs-delay-hide')) {\n      delay['hide'] = el.getAttribute('data-bs-delay-hide');\n    }\n\n    if (el.hasAttribute('data-bs-delay-show')) {\n      delay['show'] = el.getAttribute('data-bs-delay-show');\n    }\n\n    if (delay) {\n      options['delay'] = delay;\n    } // Check dismiss options\n\n\n    if (el.hasAttribute('data-bs-dismiss') && el.getAttribute('data-bs-dismiss') == 'click') {\n      options['dismiss'] = 'click';\n    } // Initialize popover\n\n\n    var tp = new bootstrap.Tooltip(el, options); // Handle dismiss\n\n    if (options['dismiss'] && options['dismiss'] === 'click') {\n      // Hide popover on element click\n      el.addEventListener(\"click\", function (e) {\n        tp.hide();\n      });\n    }\n\n    return tp;\n  };\n\n  var _initBootstrapTooltips = function initBootstrapTooltips(el, options) {\n    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle=\"tooltip\"]'));\n    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {\n      _initBootstrapTooltip(tooltipTriggerEl, {});\n    });\n  };\n\n  var _initBootstrapPopover = function initBootstrapPopover(el, options) {\n    var delay = {}; // Handle delay options\n\n    if (el.hasAttribute('data-bs-delay-hide')) {\n      delay['hide'] = el.getAttribute('data-bs-delay-hide');\n    }\n\n    if (el.hasAttribute('data-bs-delay-show')) {\n      delay['show'] = el.getAttribute('data-bs-delay-show');\n    }\n\n    if (delay) {\n      options['delay'] = delay;\n    } // Handle dismiss option\n\n\n    if (el.getAttribute('data-bs-dismiss') == 'true') {\n      options['dismiss'] = true;\n    }\n\n    if (options['dismiss'] === true) {\n      options['template'] = '<div class=\"popover\" role=\"tooltip\"><div class=\"popover-arrow\"></div><span class=\"popover-dismiss btn btn-icon\"><i class=\"bi bi-x fs-2\"></i></span><h3 class=\"popover-header\"></h3><div class=\"popover-body\"></div></div>';\n    } // Initialize popover\n\n\n    var popover = new bootstrap.Popover(el, options); // Handle dismiss click\n\n    if (options['dismiss'] === true) {\n      var dismissHandler = function dismissHandler(e) {\n        popover.hide();\n      };\n\n      el.addEventListener('shown.bs.popover', function () {\n        var dismissEl = document.getElementById(el.getAttribute('aria-describedby'));\n        dismissEl.addEventListener('click', dismissHandler);\n      });\n      el.addEventListener('hide.bs.popover', function () {\n        var dismissEl = document.getElementById(el.getAttribute('aria-describedby'));\n        dismissEl.removeEventListener('click', dismissHandler);\n      });\n    }\n\n    return popover;\n  };\n\n  var _initBootstrapPopovers = function initBootstrapPopovers() {\n    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle=\"popover\"]'));\n    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {\n      _initBootstrapPopover(popoverTriggerEl, {});\n    });\n  };\n\n  var _initScrollSpy = function initScrollSpy() {\n    var elements = [].slice.call(document.querySelectorAll('[data-bs-spy=\"scroll\"]'));\n    elements.map(function (element) {\n      var sel = element.getAttribute('data-bs-target');\n      var scrollContent = document.querySelector(element.getAttribute('data-bs-target'));\n      var scrollSpy = bootstrap.ScrollSpy.getInstance(scrollContent);\n\n      if (scrollSpy) {\n        scrollSpy.refresh();\n      }\n    });\n  };\n\n  var _initButtons = function initButtons() {\n    var buttonsGroup = [].slice.call(document.querySelectorAll('[data-kt-buttons=\"true\"]'));\n    buttonsGroup.map(function (group) {\n      var selector = group.hasAttribute('data-kt-buttons-target') ? group.getAttribute('data-kt-buttons-target') : '.btn'; // Toggle Handler\n\n      KTUtil.on(group, selector, 'click', function (e) {\n        var buttons = [].slice.call(group.querySelectorAll(selector + '.active'));\n        buttons.map(function (button) {\n          button.classList.remove('active');\n        });\n        this.classList.add('active');\n      });\n    });\n  };\n\n  var _initCheck = function initCheck() {\n    // Toggle Handler\n    KTUtil.on(document.body, '[data-kt-check=\"true\"]', 'change', function (e) {\n      var check = this;\n      var targets = document.querySelectorAll(check.getAttribute('data-kt-check-target'));\n      KTUtil.each(targets, function (target) {\n        if (target.type == 'checkbox') {\n          target.checked = check.checked;\n        } else {\n          target.classList.toggle('active');\n        }\n      });\n    });\n  };\n\n  var _initSelect = function initSelect2() {\n    var elements = [].slice.call(document.querySelectorAll('[data-control=\"select2\"], [data-kt-select2=\"true\"]'));\n    elements.map(function (element) {\n      var options = {\n        dir: document.body.getAttribute('direction')\n      };\n\n      if (element.getAttribute('data-hide-search') == 'true') {\n        options.minimumResultsForSearch = Infinity;\n      }\n\n      $(element).select2(options);\n    });\n  };\n\n  var _initAutosize = function initAutosize() {\n    var inputs = [].slice.call(document.querySelectorAll('[data-kt-autosize=\"true\"]'));\n    inputs.map(function (input) {\n      autosize(input);\n    });\n  };\n\n  var _initCountUp = function initCountUp() {\n    var elements = [].slice.call(document.querySelectorAll('[data-kt-countup=\"true\"]:not(.counted)'));\n    elements.map(function (element) {\n      if (KTUtil.isInViewport(element) && KTUtil.visible(element)) {\n        var options = {};\n        var value = element.getAttribute('data-kt-countup-value');\n        value = parseFloat(value.replace(/,/g, \"\"));\n\n        if (element.hasAttribute('data-kt-countup-start-val')) {\n          options.startVal = parseFloat(element.getAttribute('data-kt-countup-start-val'));\n        }\n\n        if (element.hasAttribute('data-kt-countup-duration')) {\n          options.duration = parseInt(element.getAttribute('data-kt-countup-duration'));\n        }\n\n        if (element.hasAttribute('data-kt-countup-decimal-places')) {\n          options.decimalPlaces = parseInt(element.getAttribute('data-kt-countup-decimal-places'));\n        }\n\n        if (element.hasAttribute('data-kt-countup-prefix')) {\n          options.prefix = element.getAttribute('data-kt-countup-prefix');\n        }\n\n        if (element.hasAttribute('data-kt-countup-suffix')) {\n          options.suffix = element.getAttribute('data-kt-countup-suffix');\n        }\n\n        var count = new countUp.CountUp(element, value, options);\n        count.start();\n        element.classList.add('counted');\n      }\n    });\n  };\n\n  var _initCountUpTabs = function initCountUpTabs() {\n    // Initial call\n    _initCountUp(); // Window scroll event handler\n\n\n    window.addEventListener('scroll', _initCountUp); // Tabs shown event handler\n\n    var tabs = [].slice.call(document.querySelectorAll('[data-kt-countup-tabs=\"true\"][data-bs-toggle=\"tab\"]'));\n    tabs.map(function (tab) {\n      tab.addEventListener('shown.bs.tab', _initCountUp);\n    });\n  };\n\n  var _initTinySliders = function initTinySliders() {\n    // Init Slider\n    var initSlider = function initSlider(el) {\n      if (!el) {\n        return;\n      }\n\n      var tnsOptions = {}; // Convert string boolean\n\n      var checkBool = function checkBool(val) {\n        if (val === 'true') {\n          return true;\n        }\n\n        if (val === 'false') {\n          return false;\n        }\n\n        return val;\n      }; // get extra options via data attributes\n\n\n      el.getAttributeNames().forEach(function (attrName) {\n        // more options; https://github.com/ganlanyuan/tiny-slider#options\n        if (/^data-tns-.*/g.test(attrName)) {\n          var optionName = attrName.replace('data-tns-', '').toLowerCase().replace(/(?:[\\s-])\\w/g, function (match) {\n            return match.replace('-', '').toUpperCase();\n          });\n\n          if (attrName === 'data-tns-responsive') {\n            // fix string with a valid json\n            var jsonStr = el.getAttribute(attrName).replace(/(\\w+:)|(\\w+ :)/g, function (matched) {\n              return '\"' + matched.substring(0, matched.length - 1) + '\":';\n            });\n\n            try {\n              // convert json string to object\n              tnsOptions[optionName] = JSON.parse(jsonStr);\n            } catch (e) {}\n          } else {\n            tnsOptions[optionName] = checkBool(el.getAttribute(attrName));\n          }\n        }\n      });\n      var opt = Object.assign({}, {\n        container: el,\n        slideBy: 'page',\n        autoplay: true,\n        autoplayButtonOutput: false\n      }, tnsOptions);\n\n      if (el.closest('.tns')) {\n        KTUtil.addClass(el.closest('.tns'), 'tns-initiazlied');\n      }\n\n      return tns(opt);\n    }; // Sliders\n\n\n    var elements = Array.prototype.slice.call(document.querySelectorAll('[data-tns=\"true\"]'), 0);\n\n    if (!elements && elements.length === 0) {\n      return;\n    }\n\n    elements.forEach(function (el) {\n      initSlider(el);\n    });\n  };\n\n  var _initSmoothScroll = function initSmoothScroll() {\n    if (SmoothScroll) {\n      new SmoothScroll('a[data-kt-scroll-toggle][href*=\"#\"]', {\n        speed: 900,\n        offset: function offset(anchor, toggle) {\n          // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels\n          // This example is a function, but you could do something as simple as `offset: 25`\n          // An example returning different values based on whether the clicked link was in the header nav or not\n          if (anchor.hasAttribute('data-kt-scroll-offset')) {\n            var val = KTUtil.getResponsiveValue(anchor.getAttribute('data-kt-scroll-offset'));\n            return val;\n          } else {\n            return 0;\n          }\n        }\n      });\n    }\n  };\n\n  return {\n    init: function init() {\n      this.initPageLoader();\n      this.initBootstrapTooltips();\n      this.initBootstrapPopovers();\n      this.initScrollSpy();\n      this.initButtons();\n      this.initCheck();\n      this.initSelect2();\n      this.initCountUp();\n      this.initCountUpTabs();\n      this.initAutosize();\n      this.initTinySliders();\n      this.initSmoothScroll();\n    },\n    initPageLoader: function initPageLoader() {\n      _initPageLoader();\n    },\n    initBootstrapTooltip: function initBootstrapTooltip(el, options) {\n      return _initBootstrapTooltip(el, options);\n    },\n    initBootstrapTooltips: function initBootstrapTooltips() {\n      _initBootstrapTooltips();\n    },\n    initBootstrapPopovers: function initBootstrapPopovers() {\n      _initBootstrapPopovers();\n    },\n    initBootstrapPopover: function initBootstrapPopover(el, options) {\n      return _initBootstrapPopover(el, options);\n    },\n    initScrollSpy: function initScrollSpy() {\n      _initScrollSpy();\n    },\n    initButtons: function initButtons() {\n      _initButtons();\n    },\n    initCheck: function initCheck() {\n      _initCheck();\n    },\n    initSelect2: function initSelect2() {\n      _initSelect();\n    },\n    initCountUp: function initCountUp() {\n      _initCountUp();\n    },\n    initCountUpTabs: function initCountUpTabs() {\n      _initCountUpTabs();\n    },\n    initAutosize: function initAutosize() {\n      _initAutosize();\n    },\n    initTinySliders: function initTinySliders() {\n      _initTinySliders();\n    },\n    initSmoothScroll: function initSmoothScroll() {\n      _initSmoothScroll();\n    },\n    isDarkMode: function isDarkMode() {\n      return document.body.classList.contains('dark-mode');\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTApp.init();\n}); // On window load\n\nwindow.addEventListener(\"load\", function () {\n  KTApp.initPageLoader();\n}); // Webpack support\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTApp;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxpQkFBZ0I7QUFDbkIsS0FqRkU7QUFtRkhPLElBQUFBLFVBQVUsRUFBRSxzQkFBVztBQUNuQixhQUFPakksUUFBUSxDQUFDQyxJQUFULENBQWNpRCxTQUFkLENBQXdCZ0YsUUFBeEIsQ0FBaUMsV0FBakMsQ0FBUDtBQUNIO0FBckZFLEdBQVA7QUF1RkgsQ0EzWlcsRUFBWixDLENBNlpBOzs7QUFDQXBJLE1BQU0sQ0FBQ3FJLGtCQUFQLENBQTBCLFlBQVc7QUFDakN2SSxFQUFBQSxLQUFLLENBQUNvSSxJQUFOO0FBQ0gsQ0FGRCxFLENBSUE7O0FBQ0F4QyxNQUFNLENBQUM3RSxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFXO0FBQzFDZixFQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxDQUZELEUsQ0FJQTs7QUFDQSxJQUFJLFNBQWlDLE9BQU91SSxNQUFNLENBQUNDLE9BQWQsS0FBMEIsV0FBL0QsRUFBNEU7QUFDeEVELEVBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpJLEtBQWpCO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2xheW91dC9hcHAuanM/NDNmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUQXBwID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGluaXRQYWdlTG9hZGVyID0gIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBDU1MzIFRyYW5zaXRpb25zIG9ubHkgYWZ0ZXIgcGFnZSBsb2FkKC5wYWdlLWxvYWRpbmcgY2xhc3MgYWRkZWQgdG8gYm9keSB0YWcgYW5kIHJlbW92ZSB3aXRoIEpTIG9uIHBhZ2UgbG9hZClcbiAgICAgICAgS1RVdGlsLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdwYWdlLWxvYWRpbmcnKTtcbiAgICB9XG5cbiAgICB2YXIgaW5pdEJvb3RzdHJhcFRvb2x0aXAgPSBmdW5jdGlvbihlbCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgZGVsYXkgPSB7fTtcblxuICAgICAgICAvLyBIYW5kbGUgZGVsYXkgb3B0aW9uc1xuICAgICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdkYXRhLWJzLWRlbGF5LWhpZGUnKSkge1xuICAgICAgICAgICAgZGVsYXlbJ2hpZGUnXSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1icy1kZWxheS1oaWRlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdkYXRhLWJzLWRlbGF5LXNob3cnKSkge1xuICAgICAgICAgICAgZGVsYXlbJ3Nob3cnXSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1icy1kZWxheS1zaG93Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbJ2RlbGF5J10gPSBkZWxheTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGRpc21pc3Mgb3B0aW9uc1xuICAgICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdkYXRhLWJzLWRpc21pc3MnKSAmJiBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtZGlzbWlzcycpID09ICdjbGljaycpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbJ2Rpc21pc3MnXSA9ICdjbGljayc7XG4gICAgICAgIH0gICAgICAgICAgICBcblxuICAgICAgICAvLyBJbml0aWFsaXplIHBvcG92ZXJcbiAgICAgICAgdmFyIHRwID0gbmV3IGJvb3RzdHJhcC5Ub29sdGlwKGVsLCBvcHRpb25zKTtcblxuICAgICAgICAvLyBIYW5kbGUgZGlzbWlzc1xuICAgICAgICBpZiAob3B0aW9uc1snZGlzbWlzcyddICYmIG9wdGlvbnNbJ2Rpc21pc3MnXSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgLy8gSGlkZSBwb3BvdmVyIG9uIGVsZW1lbnQgY2xpY2tcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdHAuaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHA7XG4gICAgfVxuXG4gICAgdmFyIGluaXRCb290c3RyYXBUb29sdGlwcyA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciB0b29sdGlwVHJpZ2dlckxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIl0nKSk7XG5cbiAgICAgICAgdmFyIHRvb2x0aXBMaXN0ID0gdG9vbHRpcFRyaWdnZXJMaXN0Lm1hcChmdW5jdGlvbiAodG9vbHRpcFRyaWdnZXJFbCkge1xuICAgICAgICAgICAgaW5pdEJvb3RzdHJhcFRvb2x0aXAodG9vbHRpcFRyaWdnZXJFbCwge30pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgaW5pdEJvb3RzdHJhcFBvcG92ZXIgPSBmdW5jdGlvbihlbCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgZGVsYXkgPSB7fTtcblxuICAgICAgICAvLyBIYW5kbGUgZGVsYXkgb3B0aW9uc1xuICAgICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdkYXRhLWJzLWRlbGF5LWhpZGUnKSkge1xuICAgICAgICAgICAgZGVsYXlbJ2hpZGUnXSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1icy1kZWxheS1oaWRlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdkYXRhLWJzLWRlbGF5LXNob3cnKSkge1xuICAgICAgICAgICAgZGVsYXlbJ3Nob3cnXSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1icy1kZWxheS1zaG93Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbJ2RlbGF5J10gPSBkZWxheTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhhbmRsZSBkaXNtaXNzIG9wdGlvblxuICAgICAgICBpZiAoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLWRpc21pc3MnKSA9PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbJ2Rpc21pc3MnXSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9uc1snZGlzbWlzcyddID09PSB0cnVlKSB7XG4gICAgICAgICAgICBvcHRpb25zWyd0ZW1wbGF0ZSddID0gJzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwicG9wb3Zlci1hcnJvd1wiPjwvZGl2PjxzcGFuIGNsYXNzPVwicG9wb3Zlci1kaXNtaXNzIGJ0biBidG4taWNvblwiPjxpIGNsYXNzPVwiYmkgYmkteCBmcy0yXCI+PC9pPjwvc3Bhbj48aDMgY2xhc3M9XCJwb3BvdmVyLWhlYWRlclwiPjwvaDM+PGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPjwvZGl2PjwvZGl2PidcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXRpYWxpemUgcG9wb3ZlclxuICAgICAgICB2YXIgcG9wb3ZlciA9IG5ldyBib290c3RyYXAuUG9wb3ZlcihlbCwgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gSGFuZGxlIGRpc21pc3MgY2xpY2tcbiAgICAgICAgaWYgKG9wdGlvbnNbJ2Rpc21pc3MnXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGRpc21pc3NIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBwb3BvdmVyLmhpZGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignc2hvd24uYnMucG9wb3ZlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBkaXNtaXNzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKSk7XG4gICAgICAgICAgICAgICAgZGlzbWlzc0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzbWlzc0hhbmRsZXIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUuYnMucG9wb3ZlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBkaXNtaXNzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKSk7XG4gICAgICAgICAgICAgICAgZGlzbWlzc0VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzbWlzc0hhbmRsZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcG9wb3ZlcjtcbiAgICB9XG5cbiAgICB2YXIgaW5pdEJvb3RzdHJhcFBvcG92ZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwb3BvdmVyVHJpZ2dlckxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXRvZ2dsZT1cInBvcG92ZXJcIl0nKSk7XG5cbiAgICAgICAgdmFyIHBvcG92ZXJMaXN0ID0gcG9wb3ZlclRyaWdnZXJMaXN0Lm1hcChmdW5jdGlvbiAocG9wb3ZlclRyaWdnZXJFbCkge1xuICAgICAgICAgICAgaW5pdEJvb3RzdHJhcFBvcG92ZXIocG9wb3ZlclRyaWdnZXJFbCwge30pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgaW5pdFNjcm9sbFNweSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXNweT1cInNjcm9sbFwiXScpKTtcblxuICAgICAgICBlbGVtZW50cy5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBzZWwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBzY3JvbGxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnKSk7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsU3B5ID0gYm9vdHN0cmFwLlNjcm9sbFNweS5nZXRJbnN0YW5jZShzY3JvbGxDb250ZW50KTtcbiAgICAgICAgICAgIGlmIChzY3JvbGxTcHkpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxTcHkucmVmcmVzaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgaW5pdEJ1dHRvbnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGJ1dHRvbnNHcm91cCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEta3QtYnV0dG9ucz1cInRydWVcIl0nKSk7XG5cbiAgICAgICAgYnV0dG9uc0dyb3VwLm1hcChmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RvciA9IGdyb3VwLmhhc0F0dHJpYnV0ZSgnZGF0YS1rdC1idXR0b25zLXRhcmdldCcpID8gZ3JvdXAuZ2V0QXR0cmlidXRlKCdkYXRhLWt0LWJ1dHRvbnMtdGFyZ2V0JykgOiAnLmJ0bic7XG5cbiAgICAgICAgICAgIC8vIFRvZ2dsZSBIYW5kbGVyXG4gICAgICAgICAgICBLVFV0aWwub24oZ3JvdXAsIHNlbGVjdG9yLCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJ1dHRvbnMgPSBbXS5zbGljZS5jYWxsKGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IgKyAnLmFjdGl2ZScpKTtcblxuICAgICAgICAgICAgICAgIGJ1dHRvbnMubWFwKGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9ICAgXG5cbiAgICB2YXIgaW5pdENoZWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFRvZ2dsZSBIYW5kbGVyXG4gICAgICAgIEtUVXRpbC5vbihkb2N1bWVudC5ib2R5LCAgJ1tkYXRhLWt0LWNoZWNrPVwidHJ1ZVwiXScsICdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgY2hlY2sgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNoZWNrLmdldEF0dHJpYnV0ZSgnZGF0YS1rdC1jaGVjay10YXJnZXQnKSk7XG5cbiAgICAgICAgICAgIEtUVXRpbC5lYWNoKHRhcmdldHMsIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LnR5cGUgPT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2hlY2tlZCA9IGNoZWNrLmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGluaXRTZWxlY3QyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY29udHJvbD1cInNlbGVjdDJcIl0sIFtkYXRhLWt0LXNlbGVjdDI9XCJ0cnVlXCJdJykpO1xuICAgICAgIFxuICAgICAgICBlbGVtZW50cy5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGRpcjogZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoJ2RpcmVjdGlvbicpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWhpZGUtc2VhcmNoJykgPT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCA9IEluZmluaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAkKGVsZW1lbnQpLnNlbGVjdDIob3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBpbml0QXV0b3NpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGlucHV0cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEta3QtYXV0b3NpemU9XCJ0cnVlXCJdJykpO1xuICAgICAgIFxuICAgICAgICBpbnB1dHMubWFwKGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICAgICAgYXV0b3NpemUoaW5wdXQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgaW5pdENvdW50VXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1rdC1jb3VudHVwPVwidHJ1ZVwiXTpub3QoLmNvdW50ZWQpJykpO1xuXG4gICAgICAgIGVsZW1lbnRzLm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKEtUVXRpbC5pc0luVmlld3BvcnQoZWxlbWVudCkgJiYgS1RVdGlsLnZpc2libGUoZWxlbWVudCkgKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7fTtcblxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWt0LWNvdW50dXAtdmFsdWUnKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgvLC9nLFwiXCIpKTtcblxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1rdC1jb3VudHVwLXN0YXJ0LXZhbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc3RhcnRWYWwgPSBwYXJzZUZsb2F0KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWt0LWNvdW50dXAtc3RhcnQtdmFsJykpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1rdC1jb3VudHVwLWR1cmF0aW9uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5kdXJhdGlvbiA9IHBhcnNlSW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWt0LWNvdW50dXAtZHVyYXRpb24nKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWt0LWNvdW50dXAtZGVjaW1hbC1wbGFjZXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmRlY2ltYWxQbGFjZXMgPSBwYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1rdC1jb3VudHVwLWRlY2ltYWwtcGxhY2VzJykpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1rdC1jb3VudHVwLXByZWZpeCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHJlZml4ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEta3QtY291bnR1cC1wcmVmaXgnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEta3QtY291bnR1cC1zdWZmaXgnKSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnN1ZmZpeCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWt0LWNvdW50dXAtc3VmZml4Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ID0gbmV3IGNvdW50VXAuQ291bnRVcChlbGVtZW50LCB2YWx1ZSwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICBjb3VudC5zdGFydCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY291bnRlZCcpO1xuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGluaXRDb3VudFVwVGFicyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBJbml0aWFsIGNhbGxcbiAgICAgICAgaW5pdENvdW50VXAoKTtcblxuICAgICAgICAvLyBXaW5kb3cgc2Nyb2xsIGV2ZW50IGhhbmRsZXJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluaXRDb3VudFVwKTtcblxuICAgICAgICAvLyBUYWJzIHNob3duIGV2ZW50IGhhbmRsZXJcbiAgICAgICAgdmFyIHRhYnMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWt0LWNvdW50dXAtdGFicz1cInRydWVcIl1bZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0nKSk7XG4gICAgICAgIHRhYnMubWFwKGZ1bmN0aW9uICh0YWIpIHtcbiAgICAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdzaG93bi5icy50YWInLCBpbml0Q291bnRVcCk7XG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgfVxuXG4gICAgdmFyIGluaXRUaW55U2xpZGVycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBJbml0IFNsaWRlclxuICAgICAgICB2YXIgaW5pdFNsaWRlciA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICBpZiAoIWVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0bnNPcHRpb25zID0ge307XG5cbiAgICAgICAgICAgIC8vIENvbnZlcnQgc3RyaW5nIGJvb2xlYW5cbiAgICAgICAgICAgIGNvbnN0IGNoZWNrQm9vbCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgIGlmICh2YWwgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBnZXQgZXh0cmEgb3B0aW9ucyB2aWEgZGF0YSBhdHRyaWJ1dGVzXG4gICAgICAgICAgICBlbC5nZXRBdHRyaWJ1dGVOYW1lcygpLmZvckVhY2goZnVuY3Rpb24oYXR0ck5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBtb3JlIG9wdGlvbnM7IGh0dHBzOi8vZ2l0aHViLmNvbS9nYW5sYW55dWFuL3Rpbnktc2xpZGVyI29wdGlvbnNcbiAgICAgICAgICAgICAgICBpZiAoKC9eZGF0YS10bnMtLiovZykudGVzdChhdHRyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbk5hbWUgPSBhdHRyTmFtZS5yZXBsYWNlKCdkYXRhLXRucy0nLCAnJykudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8oPzpbXFxzLV0pXFx3L2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2gucmVwbGFjZSgnLScsICcnKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyTmFtZSA9PT0gJ2RhdGEtdG5zLXJlc3BvbnNpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmaXggc3RyaW5nIHdpdGggYSB2YWxpZCBqc29uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBqc29uU3RyID0gZWwuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKS5yZXBsYWNlKC8oXFx3KzopfChcXHcrIDopL2csIGZ1bmN0aW9uKG1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1wiJyArIG1hdGNoZWQuc3Vic3RyaW5nKDAsIG1hdGNoZWQubGVuZ3RoIC0gMSkgKyAnXCI6JztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb252ZXJ0IGpzb24gc3RyaW5nIHRvIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRuc09wdGlvbnNbb3B0aW9uTmFtZV0gPSBKU09OLnBhcnNlKGpzb25TdHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRuc09wdGlvbnNbb3B0aW9uTmFtZV0gPSBjaGVja0Jvb2woZWwuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3Qgb3B0ID0gT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogZWwsXG4gICAgICAgICAgICAgICAgc2xpZGVCeTogJ3BhZ2UnLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5QnV0dG9uT3V0cHV0OiBmYWxzZSxcbiAgICAgICAgICAgIH0sIHRuc09wdGlvbnMpO1xuXG4gICAgICAgICAgICBpZiAoZWwuY2xvc2VzdCgnLnRucycpKSB7XG4gICAgICAgICAgICAgICAgS1RVdGlsLmFkZENsYXNzKGVsLmNsb3Nlc3QoJy50bnMnKSwgJ3Rucy1pbml0aWF6bGllZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdG5zKG9wdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTbGlkZXJzXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG5zPVwidHJ1ZVwiXScpLCAwKTtcblxuICAgICAgICBpZiAoIWVsZW1lbnRzICYmIGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgaW5pdFNsaWRlcihlbCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBpbml0U21vb3RoU2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChTbW9vdGhTY3JvbGwpIHtcblxuICAgICAgICAgICAgbmV3IFNtb290aFNjcm9sbCgnYVtkYXRhLWt0LXNjcm9sbC10b2dnbGVdW2hyZWYqPVwiI1wiXScsIHtcbiAgICAgICAgICAgICAgICBzcGVlZDogOTAwLFxuICAgICAgICAgICAgICAgIG9mZnNldDogZnVuY3Rpb24gKGFuY2hvciwgdG9nZ2xlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEludGVnZXIgb3IgRnVuY3Rpb24gcmV0dXJuaW5nIGFuIGludGVnZXIuIEhvdyBmYXIgdG8gb2Zmc2V0IHRoZSBzY3JvbGxpbmcgYW5jaG9yIGxvY2F0aW9uIGluIHBpeGVsc1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGV4YW1wbGUgaXMgYSBmdW5jdGlvbiwgYnV0IHlvdSBjb3VsZCBkbyBzb21ldGhpbmcgYXMgc2ltcGxlIGFzIGBvZmZzZXQ6IDI1YFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFuIGV4YW1wbGUgcmV0dXJuaW5nIGRpZmZlcmVudCB2YWx1ZXMgYmFzZWQgb24gd2hldGhlciB0aGUgY2xpY2tlZCBsaW5rIHdhcyBpbiB0aGUgaGVhZGVyIG5hdiBvciBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuY2hvci5oYXNBdHRyaWJ1dGUoJ2RhdGEta3Qtc2Nyb2xsLW9mZnNldCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gS1RVdGlsLmdldFJlc3BvbnNpdmVWYWx1ZShhbmNob3IuZ2V0QXR0cmlidXRlKCdkYXRhLWt0LXNjcm9sbC1vZmZzZXQnKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9ICAgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFBhZ2VMb2FkZXIoKTtcblxuICAgICAgICAgICAgdGhpcy5pbml0Qm9vdHN0cmFwVG9vbHRpcHMoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5pbml0Qm9vdHN0cmFwUG9wb3ZlcnMoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5pbml0U2Nyb2xsU3B5KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuaW5pdEJ1dHRvbnMoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5pbml0Q2hlY2soKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5pbml0U2VsZWN0MigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmluaXRDb3VudFVwKCk7XG5cbiAgICAgICAgICAgIHRoaXMuaW5pdENvdW50VXBUYWJzKCk7XG5cbiAgICAgICAgICAgIHRoaXMuaW5pdEF1dG9zaXplKCk7XG5cbiAgICAgICAgICAgIHRoaXMuaW5pdFRpbnlTbGlkZXJzKCk7XG5cbiAgICAgICAgICAgIHRoaXMuaW5pdFNtb290aFNjcm9sbCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRQYWdlTG9hZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGluaXRQYWdlTG9hZGVyKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdEJvb3RzdHJhcFRvb2x0aXA6IGZ1bmN0aW9uKGVsLCBvcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5pdEJvb3RzdHJhcFRvb2x0aXAoZWwsIG9wdGlvbnMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRCb290c3RyYXBUb29sdGlwczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbml0Qm9vdHN0cmFwVG9vbHRpcHMoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0Qm9vdHN0cmFwUG9wb3ZlcnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW5pdEJvb3RzdHJhcFBvcG92ZXJzKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdEJvb3RzdHJhcFBvcG92ZXI6IGZ1bmN0aW9uKGVsLCBvcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5pdEJvb3RzdHJhcFBvcG92ZXIoZWwsIG9wdGlvbnMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRTY3JvbGxTcHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW5pdFNjcm9sbFNweSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRCdXR0b25zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGluaXRCdXR0b25zKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdENoZWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGluaXRDaGVjaygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRTZWxlY3QyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGluaXRTZWxlY3QyKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdENvdW50VXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW5pdENvdW50VXAoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0Q291bnRVcFRhYnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW5pdENvdW50VXBUYWJzKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdEF1dG9zaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGluaXRBdXRvc2l6ZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRUaW55U2xpZGVyczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbml0VGlueVNsaWRlcnMoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0U21vb3RoU2Nyb2xsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGluaXRTbW9vdGhTY3JvbGwoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBpc0RhcmtNb2RlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFyay1tb2RlJyk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVEFwcC5pbml0KCk7XG59KTtcblxuLy8gT24gd2luZG93IGxvYWRcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcblx0S1RBcHAuaW5pdFBhZ2VMb2FkZXIoKTtcbn0pO1xuXG4vLyBXZWJwYWNrIHN1cHBvcnRcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBLVEFwcDtcbn0iXSwibmFtZXMiOlsiS1RBcHAiLCJpbml0UGFnZUxvYWRlciIsIktUVXRpbCIsInJlbW92ZUNsYXNzIiwiZG9jdW1lbnQiLCJib2R5IiwiaW5pdEJvb3RzdHJhcFRvb2x0aXAiLCJlbCIsIm9wdGlvbnMiLCJkZWxheSIsImhhc0F0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInRwIiwiYm9vdHN0cmFwIiwiVG9vbHRpcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaGlkZSIsImluaXRCb290c3RyYXBUb29sdGlwcyIsInRvb2x0aXBUcmlnZ2VyTGlzdCIsInNsaWNlIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b29sdGlwTGlzdCIsIm1hcCIsInRvb2x0aXBUcmlnZ2VyRWwiLCJpbml0Qm9vdHN0cmFwUG9wb3ZlciIsInBvcG92ZXIiLCJQb3BvdmVyIiwiZGlzbWlzc0hhbmRsZXIiLCJkaXNtaXNzRWwiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbml0Qm9vdHN0cmFwUG9wb3ZlcnMiLCJwb3BvdmVyVHJpZ2dlckxpc3QiLCJwb3BvdmVyTGlzdCIsInBvcG92ZXJUcmlnZ2VyRWwiLCJpbml0U2Nyb2xsU3B5IiwiZWxlbWVudHMiLCJlbGVtZW50Iiwic2VsIiwic2Nyb2xsQ29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxTcHkiLCJTY3JvbGxTcHkiLCJnZXRJbnN0YW5jZSIsInJlZnJlc2giLCJpbml0QnV0dG9ucyIsImJ1dHRvbnNHcm91cCIsImdyb3VwIiwic2VsZWN0b3IiLCJvbiIsImJ1dHRvbnMiLCJidXR0b24iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJpbml0Q2hlY2siLCJjaGVjayIsInRhcmdldHMiLCJlYWNoIiwidGFyZ2V0IiwidHlwZSIsImNoZWNrZWQiLCJ0b2dnbGUiLCJpbml0U2VsZWN0MiIsImRpciIsIm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIiwiSW5maW5pdHkiLCIkIiwic2VsZWN0MiIsImluaXRBdXRvc2l6ZSIsImlucHV0cyIsImlucHV0IiwiYXV0b3NpemUiLCJpbml0Q291bnRVcCIsImlzSW5WaWV3cG9ydCIsInZpc2libGUiLCJ2YWx1ZSIsInBhcnNlRmxvYXQiLCJyZXBsYWNlIiwic3RhcnRWYWwiLCJkdXJhdGlvbiIsInBhcnNlSW50IiwiZGVjaW1hbFBsYWNlcyIsInByZWZpeCIsInN1ZmZpeCIsImNvdW50IiwiY291bnRVcCIsIkNvdW50VXAiLCJzdGFydCIsImluaXRDb3VudFVwVGFicyIsIndpbmRvdyIsInRhYnMiLCJ0YWIiLCJpbml0VGlueVNsaWRlcnMiLCJpbml0U2xpZGVyIiwidG5zT3B0aW9ucyIsImNoZWNrQm9vbCIsInZhbCIsImdldEF0dHJpYnV0ZU5hbWVzIiwiZm9yRWFjaCIsImF0dHJOYW1lIiwidGVzdCIsIm9wdGlvbk5hbWUiLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwidG9VcHBlckNhc2UiLCJqc29uU3RyIiwibWF0Y2hlZCIsInN1YnN0cmluZyIsImxlbmd0aCIsIkpTT04iLCJwYXJzZSIsIm9wdCIsIk9iamVjdCIsImFzc2lnbiIsImNvbnRhaW5lciIsInNsaWRlQnkiLCJhdXRvcGxheSIsImF1dG9wbGF5QnV0dG9uT3V0cHV0IiwiY2xvc2VzdCIsImFkZENsYXNzIiwidG5zIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJpbml0U21vb3RoU2Nyb2xsIiwiU21vb3RoU2Nyb2xsIiwic3BlZWQiLCJvZmZzZXQiLCJhbmNob3IiLCJnZXRSZXNwb25zaXZlVmFsdWUiLCJpbml0IiwiaXNEYXJrTW9kZSIsImNvbnRhaW5zIiwib25ET01Db250ZW50TG9hZGVkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/layout/app.js\n");
>>>>>>> Stashed changes

/***/ }),

/***/ "../../../themes/metronic/html/demo10/src/js/layout/explore.js":
/*!*********************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/layout/explore.js ***!
  \*********************************************************************/
/***/ (() => {

"use strict";
<<<<<<< Updated upstream


// Class definition
var KTLayoutExplore = function() {
    // Private variables    
    var explore;

    // Private functions

    // Public methods
	return {
		init: function() {
            // Elements
            explore = document.querySelector('#kt_explore');

            if (!explore) {
                return;
            }      
		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTLayoutExplore.init();
});
=======
eval(" // Class definition\n\nvar KTLayoutExplore = function () {\n  // Private variables    \n  var explore; // Private functions\n  // Public methods\n\n  return {\n    init: function init() {\n      // Elements\n      explore = document.querySelector('#kt_explore');\n\n      if (!explore) {\n        return;\n      }\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTLayoutExplore.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2xheW91dC9leHBsb3JlLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGVBQWUsR0FBRyxZQUFXO0FBQzdCO0FBQ0EsTUFBSUMsT0FBSixDQUY2QixDQUk3QjtBQUVBOztBQUNILFNBQU87QUFDTkMsSUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQ1A7QUFDQUQsTUFBQUEsT0FBTyxHQUFHRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBVjs7QUFFQSxVQUFJLENBQUNILE9BQUwsRUFBYztBQUNWO0FBQ0g7QUFDVjtBQVJLLEdBQVA7QUFVQSxDQWpCcUIsRUFBdEIsQyxDQW1CQTs7O0FBQ0FJLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ04sRUFBQUEsZUFBZSxDQUFDRSxJQUFoQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2xheW91dC9leHBsb3JlLmpzP2IxNGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVExheW91dEV4cGxvcmUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBQcml2YXRlIHZhcmlhYmxlcyAgICBcbiAgICB2YXIgZXhwbG9yZTtcblxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuXHRyZXR1cm4ge1xuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gRWxlbWVudHNcbiAgICAgICAgICAgIGV4cGxvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfZXhwbG9yZScpO1xuXG4gICAgICAgICAgICBpZiAoIWV4cGxvcmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9ICAgICAgXG5cdFx0fVxuXHR9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVExheW91dEV4cGxvcmUuaW5pdCgpO1xufSk7Il0sIm5hbWVzIjpbIktUTGF5b3V0RXhwbG9yZSIsImV4cGxvcmUiLCJpbml0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/layout/explore.js\n");
>>>>>>> Stashed changes

/***/ }),

/***/ "../../../themes/metronic/html/demo10/src/js/layout/search.js":
/*!********************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/layout/search.js ***!
  \********************************************************************/
/***/ (() => {

"use strict";
<<<<<<< Updated upstream


// Class definition
var KTLayoutSearch = function() {
    // Private variables
    var element;
    var formElement;
    var mainElement;
    var resultsElement;
    var wrapperElement;
    var emptyElement;

    var preferencesElement;
    var preferencesShowElement;
    var preferencesDismissElement;
    
    var advancedOptionsFormElement;
    var advancedOptionsFormShowElement;
    var advancedOptionsFormCancelElement;
    var advancedOptionsFormSearchElement;
    
    var searchObject;

    // Private functions
    var processs = function(search) {
        var timeout = setTimeout(function() {
            var number = KTUtil.getRandomInt(1, 3);

            // Hide recently viewed
            mainElement.classList.add('d-none');

            if (number === 3) {
                // Hide results
                resultsElement.classList.add('d-none');
                // Show empty message 
                emptyElement.classList.remove('d-none');
            } else {
                // Show results
                resultsElement.classList.remove('d-none');
                // Hide empty message 
                emptyElement.classList.add('d-none');
            }                  

            // Complete search
            search.complete();
        }, 1500);
    }

    var clear = function(search) {
        // Show recently viewed
        mainElement.classList.remove('d-none');
        // Hide results
        resultsElement.classList.add('d-none');
        // Hide empty message 
        emptyElement.classList.add('d-none');
    }    

    var handlePreferences = function() {
        // Preference show handler
        preferencesShowElement.addEventListener('click', function() {
            wrapperElement.classList.add('d-none');
            preferencesElement.classList.remove('d-none');
        });

        // Preference dismiss handler
        preferencesDismissElement.addEventListener('click', function() {
            wrapperElement.classList.remove('d-none');
            preferencesElement.classList.add('d-none');
        });
    }

    var handleAdvancedOptionsForm = function() {
        // Show
        advancedOptionsFormShowElement.addEventListener('click', function() {
            wrapperElement.classList.add('d-none');
            advancedOptionsFormElement.classList.remove('d-none');
        });

        // Cancel
        advancedOptionsFormCancelElement.addEventListener('click', function() {
            wrapperElement.classList.remove('d-none');
            advancedOptionsFormElement.classList.add('d-none');
        });

        // Search
        advancedOptionsFormSearchElement.addEventListener('click', function() {
            
        });
    }

    // Public methods
	return {
		init: function() {
            // Elements
            element = document.querySelector('#kt_header_search');

            if (!element) {
                return;
            }

            wrapperElement = element.querySelector('[data-kt-search-element="wrapper"]');
            formElement = element.querySelector('[data-kt-search-element="form"]');
            mainElement = element.querySelector('[data-kt-search-element="main"]');
            resultsElement = element.querySelector('[data-kt-search-element="results"]');
            emptyElement = element.querySelector('[data-kt-search-element="empty"]');

            preferencesElement = element.querySelector('[data-kt-search-element="preferences"]');
            preferencesShowElement = element.querySelector('[data-kt-search-element="preferences-show"]');
            preferencesDismissElement = element.querySelector('[data-kt-search-element="preferences-dismiss"]');

            advancedOptionsFormElement = element.querySelector('[data-kt-search-element="advanced-options-form"]');
            advancedOptionsFormShowElement = element.querySelector('[data-kt-search-element="advanced-options-form-show"]');
            advancedOptionsFormCancelElement = element.querySelector('[data-kt-search-element="advanced-options-form-cancel"]');
            advancedOptionsFormSearchElement = element.querySelector('[data-kt-search-element="advanced-options-form-search"]');
            
            // Initialize search handler
            searchObject = new KTSearch(element);

            // Search handler
            searchObject.on('kt.search.process', processs);

            // Clear handler
            searchObject.on('kt.search.clear', clear);

            // Custom handlers
            handlePreferences();
            handleAdvancedOptionsForm();            
		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTLayoutSearch.init();
});
=======
eval(" // Class definition\n\nvar KTLayoutSearch = function () {\n  // Private variables\n  var element;\n  var formElement;\n  var mainElement;\n  var resultsElement;\n  var wrapperElement;\n  var emptyElement;\n  var preferencesElement;\n  var preferencesShowElement;\n  var preferencesDismissElement;\n  var advancedOptionsFormElement;\n  var advancedOptionsFormShowElement;\n  var advancedOptionsFormCancelElement;\n  var advancedOptionsFormSearchElement;\n  var searchObject; // Private functions\n\n  var processs = function processs(search) {\n    var timeout = setTimeout(function () {\n      var number = KTUtil.getRandomInt(1, 3); // Hide recently viewed\n\n      mainElement.classList.add('d-none');\n\n      if (number === 3) {\n        // Hide results\n        resultsElement.classList.add('d-none'); // Show empty message \n\n        emptyElement.classList.remove('d-none');\n      } else {\n        // Show results\n        resultsElement.classList.remove('d-none'); // Hide empty message \n\n        emptyElement.classList.add('d-none');\n      } // Complete search\n\n\n      search.complete();\n    }, 1500);\n  };\n\n  var clear = function clear(search) {\n    // Show recently viewed\n    mainElement.classList.remove('d-none'); // Hide results\n\n    resultsElement.classList.add('d-none'); // Hide empty message \n\n    emptyElement.classList.add('d-none');\n  };\n\n  var handlePreferences = function handlePreferences() {\n    // Preference show handler\n    preferencesShowElement.addEventListener('click', function () {\n      wrapperElement.classList.add('d-none');\n      preferencesElement.classList.remove('d-none');\n    }); // Preference dismiss handler\n\n    preferencesDismissElement.addEventListener('click', function () {\n      wrapperElement.classList.remove('d-none');\n      preferencesElement.classList.add('d-none');\n    });\n  };\n\n  var handleAdvancedOptionsForm = function handleAdvancedOptionsForm() {\n    // Show\n    advancedOptionsFormShowElement.addEventListener('click', function () {\n      wrapperElement.classList.add('d-none');\n      advancedOptionsFormElement.classList.remove('d-none');\n    }); // Cancel\n\n    advancedOptionsFormCancelElement.addEventListener('click', function () {\n      wrapperElement.classList.remove('d-none');\n      advancedOptionsFormElement.classList.add('d-none');\n    }); // Search\n\n    advancedOptionsFormSearchElement.addEventListener('click', function () {});\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      // Elements\n      element = document.querySelector('#kt_header_search');\n\n      if (!element) {\n        return;\n      }\n\n      wrapperElement = element.querySelector('[data-kt-search-element=\"wrapper\"]');\n      formElement = element.querySelector('[data-kt-search-element=\"form\"]');\n      mainElement = element.querySelector('[data-kt-search-element=\"main\"]');\n      resultsElement = element.querySelector('[data-kt-search-element=\"results\"]');\n      emptyElement = element.querySelector('[data-kt-search-element=\"empty\"]');\n      preferencesElement = element.querySelector('[data-kt-search-element=\"preferences\"]');\n      preferencesShowElement = element.querySelector('[data-kt-search-element=\"preferences-show\"]');\n      preferencesDismissElement = element.querySelector('[data-kt-search-element=\"preferences-dismiss\"]');\n      advancedOptionsFormElement = element.querySelector('[data-kt-search-element=\"advanced-options-form\"]');\n      advancedOptionsFormShowElement = element.querySelector('[data-kt-search-element=\"advanced-options-form-show\"]');\n      advancedOptionsFormCancelElement = element.querySelector('[data-kt-search-element=\"advanced-options-form-cancel\"]');\n      advancedOptionsFormSearchElement = element.querySelector('[data-kt-search-element=\"advanced-options-form-search\"]'); // Initialize search handler\n\n      searchObject = new KTSearch(element); // Search handler\n\n      searchObject.on('kt.search.process', processs); // Clear handler\n\n      searchObject.on('kt.search.clear', clear); // Custom handlers\n\n      handlePreferences();\n      handleAdvancedOptionsForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTLayoutSearch.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2xheW91dC9zZWFyY2guanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsY0FBYyxHQUFHLFlBQVc7QUFDNUI7QUFDQSxNQUFJQyxPQUFKO0FBQ0EsTUFBSUMsV0FBSjtBQUNBLE1BQUlDLFdBQUo7QUFDQSxNQUFJQyxjQUFKO0FBQ0EsTUFBSUMsY0FBSjtBQUNBLE1BQUlDLFlBQUo7QUFFQSxNQUFJQyxrQkFBSjtBQUNBLE1BQUlDLHNCQUFKO0FBQ0EsTUFBSUMseUJBQUo7QUFFQSxNQUFJQywwQkFBSjtBQUNBLE1BQUlDLDhCQUFKO0FBQ0EsTUFBSUMsZ0NBQUo7QUFDQSxNQUFJQyxnQ0FBSjtBQUVBLE1BQUlDLFlBQUosQ0FsQjRCLENBb0I1Qjs7QUFDQSxNQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFTQyxNQUFULEVBQWlCO0FBQzVCLFFBQUlDLE9BQU8sR0FBR0MsVUFBVSxDQUFDLFlBQVc7QUFDaEMsVUFBSUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FBYixDQURnQyxDQUdoQzs7QUFDQWxCLE1BQUFBLFdBQVcsQ0FBQ21CLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLFFBQTFCOztBQUVBLFVBQUlKLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ2Q7QUFDQWYsUUFBQUEsY0FBYyxDQUFDa0IsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsUUFBN0IsRUFGYyxDQUdkOztBQUNBakIsUUFBQUEsWUFBWSxDQUFDZ0IsU0FBYixDQUF1QkUsTUFBdkIsQ0FBOEIsUUFBOUI7QUFDSCxPQUxELE1BS087QUFDSDtBQUNBcEIsUUFBQUEsY0FBYyxDQUFDa0IsU0FBZixDQUF5QkUsTUFBekIsQ0FBZ0MsUUFBaEMsRUFGRyxDQUdIOztBQUNBbEIsUUFBQUEsWUFBWSxDQUFDZ0IsU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsUUFBM0I7QUFDSCxPQWhCK0IsQ0FrQmhDOzs7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QXNCLEdBQUdQLE9BQU8sQ0FBQytCLGFBQVIsQ0FBc0IsNkNBQXRCLENBQXpCO0FBQ0F2QixNQUFBQSx5QkFBeUIsR0FBR1IsT0FBTyxDQUFDK0IsYUFBUixDQUFzQixnREFBdEIsQ0FBNUI7QUFFQXRCLE1BQUFBLDBCQUEwQixHQUFHVCxPQUFPLENBQUMrQixhQUFSLENBQXNCLGtEQUF0QixDQUE3QjtBQUNBckIsTUFBQUEsOEJBQThCLEdBQUdWLE9BQU8sQ0FBQytCLGFBQVIsQ0FBc0IsdURBQXRCLENBQWpDO0FBQ0FwQixNQUFBQSxnQ0FBZ0MsR0FBR1gsT0FBTyxDQUFDK0IsYUFBUixDQUFzQix5REFBdEIsQ0FBbkM7QUFDQW5CLE1BQUFBLGdDQUFnQyxHQUFHWixPQUFPLENBQUMrQixhQUFSLENBQXNCLHlEQUF0QixDQUFuQyxDQXJCTyxDQXVCUDs7QUFDQWxCLE1BQUFBLFlBQVksR0FBRyxJQUFJbUIsUUFBSixDQUFhaEMsT0FBYixDQUFmLENBeEJPLENBMEJQOztBQUNBYSxNQUFBQSxZQUFZLENBQUNvQixFQUFiLENBQWdCLG1CQUFoQixFQUFxQ25CLFFBQXJDLEVBM0JPLENBNkJQOztBQUNBRCxNQUFBQSxZQUFZLENBQUNvQixFQUFiLENBQWdCLGlCQUFoQixFQUFtQ1IsS0FBbkMsRUE5Qk8sQ0FnQ1A7O0FBQ0FDLE1BQUFBLGlCQUFpQjtBQUNqQkUsTUFBQUEseUJBQXlCO0FBQ2xDO0FBcENLLEdBQVA7QUFzQ0EsQ0E5SG9CLEVBQXJCLEMsQ0FnSUE7OztBQUNBVCxNQUFNLENBQUNlLGtCQUFQLENBQTBCLFlBQVc7QUFDakNuQyxFQUFBQSxjQUFjLENBQUM4QixJQUFmO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvbGF5b3V0L3NlYXJjaC5qcz83ODQ4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RMYXlvdXRTZWFyY2ggPSBmdW5jdGlvbigpIHtcbiAgICAvLyBQcml2YXRlIHZhcmlhYmxlc1xuICAgIHZhciBlbGVtZW50O1xuICAgIHZhciBmb3JtRWxlbWVudDtcbiAgICB2YXIgbWFpbkVsZW1lbnQ7XG4gICAgdmFyIHJlc3VsdHNFbGVtZW50O1xuICAgIHZhciB3cmFwcGVyRWxlbWVudDtcbiAgICB2YXIgZW1wdHlFbGVtZW50O1xuXG4gICAgdmFyIHByZWZlcmVuY2VzRWxlbWVudDtcbiAgICB2YXIgcHJlZmVyZW5jZXNTaG93RWxlbWVudDtcbiAgICB2YXIgcHJlZmVyZW5jZXNEaXNtaXNzRWxlbWVudDtcbiAgICBcbiAgICB2YXIgYWR2YW5jZWRPcHRpb25zRm9ybUVsZW1lbnQ7XG4gICAgdmFyIGFkdmFuY2VkT3B0aW9uc0Zvcm1TaG93RWxlbWVudDtcbiAgICB2YXIgYWR2YW5jZWRPcHRpb25zRm9ybUNhbmNlbEVsZW1lbnQ7XG4gICAgdmFyIGFkdmFuY2VkT3B0aW9uc0Zvcm1TZWFyY2hFbGVtZW50O1xuICAgIFxuICAgIHZhciBzZWFyY2hPYmplY3Q7XG5cbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBwcm9jZXNzcyA9IGZ1bmN0aW9uKHNlYXJjaCkge1xuICAgICAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbnVtYmVyID0gS1RVdGlsLmdldFJhbmRvbUludCgxLCAzKTtcblxuICAgICAgICAgICAgLy8gSGlkZSByZWNlbnRseSB2aWV3ZWRcbiAgICAgICAgICAgIG1haW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuXG4gICAgICAgICAgICBpZiAobnVtYmVyID09PSAzKSB7XG4gICAgICAgICAgICAgICAgLy8gSGlkZSByZXN1bHRzXG4gICAgICAgICAgICAgICAgcmVzdWx0c0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgLy8gU2hvdyBlbXB0eSBtZXNzYWdlIFxuICAgICAgICAgICAgICAgIGVtcHR5RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gU2hvdyByZXN1bHRzXG4gICAgICAgICAgICAgICAgcmVzdWx0c0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgLy8gSGlkZSBlbXB0eSBtZXNzYWdlIFxuICAgICAgICAgICAgICAgIGVtcHR5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gQ29tcGxldGUgc2VhcmNoXG4gICAgICAgICAgICBzZWFyY2guY29tcGxldGUoKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgfVxuXG4gICAgdmFyIGNsZWFyID0gZnVuY3Rpb24oc2VhcmNoKSB7XG4gICAgICAgIC8vIFNob3cgcmVjZW50bHkgdmlld2VkXG4gICAgICAgIG1haW5FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICAvLyBIaWRlIHJlc3VsdHNcbiAgICAgICAgcmVzdWx0c0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgIC8vIEhpZGUgZW1wdHkgbWVzc2FnZSBcbiAgICAgICAgZW1wdHlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgIH0gICAgXG5cbiAgICB2YXIgaGFuZGxlUHJlZmVyZW5jZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gUHJlZmVyZW5jZSBzaG93IGhhbmRsZXJcbiAgICAgICAgcHJlZmVyZW5jZXNTaG93RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd3JhcHBlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgICAgICBwcmVmZXJlbmNlc0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFByZWZlcmVuY2UgZGlzbWlzcyBoYW5kbGVyXG4gICAgICAgIHByZWZlcmVuY2VzRGlzbWlzc0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHdyYXBwZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgcHJlZmVyZW5jZXNFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlQWR2YW5jZWRPcHRpb25zRm9ybSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBTaG93XG4gICAgICAgIGFkdmFuY2VkT3B0aW9uc0Zvcm1TaG93RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd3JhcHBlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgICAgICBhZHZhbmNlZE9wdGlvbnNGb3JtRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2FuY2VsXG4gICAgICAgIGFkdmFuY2VkT3B0aW9uc0Zvcm1DYW5jZWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3cmFwcGVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIGFkdmFuY2VkT3B0aW9uc0Zvcm1FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZWFyY2hcbiAgICAgICAgYWR2YW5jZWRPcHRpb25zRm9ybVNlYXJjaEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuXHRyZXR1cm4ge1xuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gRWxlbWVudHNcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfaGVhZGVyX3NlYXJjaCcpO1xuXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdyYXBwZXJFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1zZWFyY2gtZWxlbWVudD1cIndyYXBwZXJcIl0nKTtcbiAgICAgICAgICAgIGZvcm1FbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1zZWFyY2gtZWxlbWVudD1cImZvcm1cIl0nKTtcbiAgICAgICAgICAgIG1haW5FbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1zZWFyY2gtZWxlbWVudD1cIm1haW5cIl0nKTtcbiAgICAgICAgICAgIHJlc3VsdHNFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1zZWFyY2gtZWxlbWVudD1cInJlc3VsdHNcIl0nKTtcbiAgICAgICAgICAgIGVtcHR5RWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3Qtc2VhcmNoLWVsZW1lbnQ9XCJlbXB0eVwiXScpO1xuXG4gICAgICAgICAgICBwcmVmZXJlbmNlc0VsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXNlYXJjaC1lbGVtZW50PVwicHJlZmVyZW5jZXNcIl0nKTtcbiAgICAgICAgICAgIHByZWZlcmVuY2VzU2hvd0VsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXNlYXJjaC1lbGVtZW50PVwicHJlZmVyZW5jZXMtc2hvd1wiXScpO1xuICAgICAgICAgICAgcHJlZmVyZW5jZXNEaXNtaXNzRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3Qtc2VhcmNoLWVsZW1lbnQ9XCJwcmVmZXJlbmNlcy1kaXNtaXNzXCJdJyk7XG5cbiAgICAgICAgICAgIGFkdmFuY2VkT3B0aW9uc0Zvcm1FbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1zZWFyY2gtZWxlbWVudD1cImFkdmFuY2VkLW9wdGlvbnMtZm9ybVwiXScpO1xuICAgICAgICAgICAgYWR2YW5jZWRPcHRpb25zRm9ybVNob3dFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1zZWFyY2gtZWxlbWVudD1cImFkdmFuY2VkLW9wdGlvbnMtZm9ybS1zaG93XCJdJyk7XG4gICAgICAgICAgICBhZHZhbmNlZE9wdGlvbnNGb3JtQ2FuY2VsRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3Qtc2VhcmNoLWVsZW1lbnQ9XCJhZHZhbmNlZC1vcHRpb25zLWZvcm0tY2FuY2VsXCJdJyk7XG4gICAgICAgICAgICBhZHZhbmNlZE9wdGlvbnNGb3JtU2VhcmNoRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3Qtc2VhcmNoLWVsZW1lbnQ9XCJhZHZhbmNlZC1vcHRpb25zLWZvcm0tc2VhcmNoXCJdJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEluaXRpYWxpemUgc2VhcmNoIGhhbmRsZXJcbiAgICAgICAgICAgIHNlYXJjaE9iamVjdCA9IG5ldyBLVFNlYXJjaChlbGVtZW50KTtcblxuICAgICAgICAgICAgLy8gU2VhcmNoIGhhbmRsZXJcbiAgICAgICAgICAgIHNlYXJjaE9iamVjdC5vbigna3Quc2VhcmNoLnByb2Nlc3MnLCBwcm9jZXNzcyk7XG5cbiAgICAgICAgICAgIC8vIENsZWFyIGhhbmRsZXJcbiAgICAgICAgICAgIHNlYXJjaE9iamVjdC5vbigna3Quc2VhcmNoLmNsZWFyJywgY2xlYXIpO1xuXG4gICAgICAgICAgICAvLyBDdXN0b20gaGFuZGxlcnNcbiAgICAgICAgICAgIGhhbmRsZVByZWZlcmVuY2VzKCk7XG4gICAgICAgICAgICBoYW5kbGVBZHZhbmNlZE9wdGlvbnNGb3JtKCk7ICAgICAgICAgICAgXG5cdFx0fVxuXHR9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVExheW91dFNlYXJjaC5pbml0KCk7XG59KTsiXSwibmFtZXMiOlsiS1RMYXlvdXRTZWFyY2giLCJlbGVtZW50IiwiZm9ybUVsZW1lbnQiLCJtYWluRWxlbWVudCIsInJlc3VsdHNFbGVtZW50Iiwid3JhcHBlckVsZW1lbnQiLCJlbXB0eUVsZW1lbnQiLCJwcmVmZXJlbmNlc0VsZW1lbnQiLCJwcmVmZXJlbmNlc1Nob3dFbGVtZW50IiwicHJlZmVyZW5jZXNEaXNtaXNzRWxlbWVudCIsImFkdmFuY2VkT3B0aW9uc0Zvcm1FbGVtZW50IiwiYWR2YW5jZWRPcHRpb25zRm9ybVNob3dFbGVtZW50IiwiYWR2YW5jZWRPcHRpb25zRm9ybUNhbmNlbEVsZW1lbnQiLCJhZHZhbmNlZE9wdGlvbnNGb3JtU2VhcmNoRWxlbWVudCIsInNlYXJjaE9iamVjdCIsInByb2Nlc3NzIiwic2VhcmNoIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJudW1iZXIiLCJLVFV0aWwiLCJnZXRSYW5kb21JbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb21wbGV0ZSIsImNsZWFyIiwiaGFuZGxlUHJlZmVyZW5jZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQWR2YW5jZWRPcHRpb25zRm9ybSIsImluaXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJLVFNlYXJjaCIsIm9uIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/layout/search.js\n");
>>>>>>> Stashed changes

/***/ }),

/***/ "../../../themes/metronic/html/demo10/src/js/layout/toolbar.js":
/*!*********************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/layout/toolbar.js ***!
  \*********************************************************************/
/***/ (() => {

"use strict";
<<<<<<< Updated upstream
=======
eval(" // Class definition\n\nvar KTLayoutToolbar = function () {\n  // Private variables\n  var toolbar; // Private functions\n\n  var initForm = function initForm() {\n    var rangeSlider = document.querySelector(\"#kt_toolbar_slider\");\n    var rangeSliderValueElement = document.querySelector(\"#kt_toolbar_slider_value\");\n\n    if (!rangeSlider) {\n      return;\n    }\n\n    noUiSlider.create(rangeSlider, {\n      start: [5],\n      connect: [true, false],\n      step: 1,\n      format: wNumb({\n        decimals: 1\n      }),\n      range: {\n        min: [1],\n        max: [10]\n      }\n    });\n    rangeSlider.noUiSlider.on(\"update\", function (values, handle) {\n      rangeSliderValueElement.innerHTML = values[handle];\n    });\n    var handle = rangeSlider.querySelector(\".noUi-handle\");\n    handle.setAttribute(\"tabindex\", 0);\n    handle.addEventListener(\"click\", function () {\n      this.focus();\n    });\n    handle.addEventListener(\"keydown\", function (event) {\n      var value = Number(rangeSlider.noUiSlider.get());\n\n      switch (event.which) {\n        case 37:\n          rangeSlider.noUiSlider.set(value - 1);\n          break;\n\n        case 39:\n          rangeSlider.noUiSlider.set(value + 1);\n          break;\n      }\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      // Elements\n      toolbar = document.querySelector('#kt_toolbar');\n\n      if (!toolbar) {\n        return;\n      }\n\n      initForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTLayoutToolbar.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2xheW91dC90b29sYmFyLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGVBQWUsR0FBRyxZQUFZO0FBQzlCO0FBQ0EsTUFBSUMsT0FBSixDQUY4QixDQUk5Qjs7QUFDQSxNQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFZO0FBQ3ZCLFFBQUlDLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixDQUFsQjtBQUNBLFFBQUlDLHVCQUF1QixHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsMEJBQXZCLENBQTlCOztBQUVBLFFBQUksQ0FBQ0YsV0FBTCxFQUFrQjtBQUNkO0FBQ0g7O0FBRURJLElBQUFBLFVBQVUsQ0FBQ0MsTUFBWCxDQUFrQkwsV0FBbEIsRUFBK0I7QUFDM0JNLE1BQUFBLEtBQUssRUFBRSxDQUFDLENBQUQsQ0FEb0I7QUFFM0JDLE1BQUFBLE9BQU8sRUFBRSxDQUFDLElBQUQsRUFBTyxLQUFQLENBRmtCO0FBRzNCQyxNQUFBQSxJQUFJLEVBQUUsQ0FIcUI7QUFJM0JDLE1BQUFBLE1BQU0sRUFBRUMsS0FBSyxDQUFDO0FBQ1ZDLFFBQUFBLFFBQVEsRUFBRTtBQURBLE9BQUQsQ0FKYztBQU8zQkMsTUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFFBQUFBLEdBQUcsRUFBRSxDQUFDLENBQUQsQ0FERjtBQUVIQyxRQUFBQSxHQUFHLEVBQUUsQ0FBQyxFQUFEO0FBRkY7QUFQb0IsS0FBL0I7QUFhQWQsSUFBQUEsV0FBVyxDQUFDSSxVQUFaLENBQXVCVyxFQUF2QixDQUEwQixRQUExQixFQUFvQyxVQUFVQyxNQUFWLEVBQWtCQyxNQUFsQixFQUEwQjtBQUMxRGQsTUFBQUEsdUJBQXVCLENBQUNlLFNBQXhCLEdBQW9DRixNQUFNLENBQUNDLE1BQUQsQ0FBMUM7QUFDSCxLQUZEO0FBSUEsUUFBSUEsTUFBTSxHQUFHakIsV0FBVyxDQUFDRSxhQUFaLENBQTBCLGNBQTFCLENBQWI7QUFFQWUsSUFBQUEsTUFBTSxDQUFDRSxZQUFQLENBQW9CLFVBQXBCLEVBQWdDLENBQWhDO0FBRUFGLElBQUFBLE1BQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBWTtBQUN6QyxXQUFLQyxLQUFMO0FBQ0gsS0FGRDtBQUlBSixJQUFBQSxNQUFNLENBQUNHLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQVVFLEtBQVYsRUFBaUI7QUFDaEQsVUFBSUMsS0FBSyxHQUFHQyxNQUFNLENBQUN4QixXQUFXLENBQUNJLFVBQVosQ0FBdUJxQixHQUF2QixFQUFELENBQWxCOztBQUVBLGNBQVFILEtBQUssQ0FBQ0ksS0FBZDtBQUNJLGFBQUssRUFBTDtBQUNJMUIsVUFBQUEsV0FBVyxDQUFDSSxVQUFaLENBQXVCdUIsR0FBdkIsQ0FBMkJKLEtBQUssR0FBRyxDQUFuQztBQUNBOztBQUNKLGFBQUssRUFBTDtBQUNJdkIsVUFBQUEsV0FBVyxDQUFDSSxVQUFaLENBQXVCdUIsR0FBdkIsQ0FBMkJKLEtBQUssR0FBRyxDQUFuQztBQUNBO0FBTlI7QUFRSCxLQVhEO0FBWUgsR0E3Q0QsQ0FMOEIsQ0FvRDlCOzs7QUFDQSxTQUFPO0FBQ0hLLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkO0FBQ0E5QixNQUFBQSxPQUFPLEdBQUdHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFWOztBQUVBLFVBQUksQ0FBQ0osT0FBTCxFQUFjO0FBQ1Y7QUFDSDs7QUFFREMsTUFBQUEsUUFBUTtBQUNYO0FBVkUsR0FBUDtBQVlILENBakVxQixFQUF0QixDLENBbUVBOzs7QUFDQThCLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ2pDLEVBQUFBLGVBQWUsQ0FBQytCLElBQWhCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvbGF5b3V0L3Rvb2xiYXIuanM/NjQxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUTGF5b3V0VG9vbGJhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcml2YXRlIHZhcmlhYmxlc1xuICAgIHZhciB0b29sYmFyO1xuXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgaW5pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByYW5nZVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja3RfdG9vbGJhcl9zbGlkZXJcIik7XG4gICAgICAgIHZhciByYW5nZVNsaWRlclZhbHVlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja3RfdG9vbGJhcl9zbGlkZXJfdmFsdWVcIik7XG5cbiAgICAgICAgaWYgKCFyYW5nZVNsaWRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9VaVNsaWRlci5jcmVhdGUocmFuZ2VTbGlkZXIsIHtcbiAgICAgICAgICAgIHN0YXJ0OiBbNV0sXG4gICAgICAgICAgICBjb25uZWN0OiBbdHJ1ZSwgZmFsc2VdLFxuICAgICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICAgIGZvcm1hdDogd051bWIoe1xuICAgICAgICAgICAgICAgIGRlY2ltYWxzOiAxXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHJhbmdlOiB7XG4gICAgICAgICAgICAgICAgbWluOiBbMV0sXG4gICAgICAgICAgICAgICAgbWF4OiBbMTBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJhbmdlU2xpZGVyLm5vVWlTbGlkZXIub24oXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlKSB7XG4gICAgICAgICAgICByYW5nZVNsaWRlclZhbHVlRWxlbWVudC5pbm5lckhUTUwgPSB2YWx1ZXNbaGFuZGxlXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGhhbmRsZSA9IHJhbmdlU2xpZGVyLnF1ZXJ5U2VsZWN0b3IoXCIubm9VaS1oYW5kbGVcIik7XG5cbiAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApO1xuXG4gICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBOdW1iZXIocmFuZ2VTbGlkZXIubm9VaVNsaWRlci5nZXQoKSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICByYW5nZVNsaWRlci5ub1VpU2xpZGVyLnNldCh2YWx1ZSAtIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICByYW5nZVNsaWRlci5ub1VpU2xpZGVyLnNldCh2YWx1ZSArIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBFbGVtZW50c1xuICAgICAgICAgICAgdG9vbGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF90b29sYmFyJyk7XG5cbiAgICAgICAgICAgIGlmICghdG9vbGJhcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5pdEZvcm0oKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcbiAgICBLVExheW91dFRvb2xiYXIuaW5pdCgpO1xufSk7Il0sIm5hbWVzIjpbIktUTGF5b3V0VG9vbGJhciIsInRvb2xiYXIiLCJpbml0Rm9ybSIsInJhbmdlU2xpZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicmFuZ2VTbGlkZXJWYWx1ZUVsZW1lbnQiLCJub1VpU2xpZGVyIiwiY3JlYXRlIiwic3RhcnQiLCJjb25uZWN0Iiwic3RlcCIsImZvcm1hdCIsIndOdW1iIiwiZGVjaW1hbHMiLCJyYW5nZSIsIm1pbiIsIm1heCIsIm9uIiwidmFsdWVzIiwiaGFuZGxlIiwiaW5uZXJIVE1MIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvY3VzIiwiZXZlbnQiLCJ2YWx1ZSIsIk51bWJlciIsImdldCIsIndoaWNoIiwic2V0IiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/layout/toolbar.js\n");
>>>>>>> Stashed changes


// Class definition
var KTLayoutToolbar = function () {
    // Private variables
    var toolbar;

    // Private functions
    var initForm = function () {
        var rangeSlider = document.querySelector("#kt_toolbar_slider");
        var rangeSliderValueElement = document.querySelector("#kt_toolbar_slider_value");

<<<<<<< Updated upstream
        if (!rangeSlider) {
            return;
        }

        noUiSlider.create(rangeSlider, {
            start: [5],
            connect: [true, false],
            step: 1,
            format: wNumb({
                decimals: 1
            }),
            range: {
                min: [1],
                max: [10]
            }
        });

        rangeSlider.noUiSlider.on("update", function (values, handle) {
            rangeSliderValueElement.innerHTML = values[handle];
        });

        var handle = rangeSlider.querySelector(".noUi-handle");

        handle.setAttribute("tabindex", 0);

        handle.addEventListener("click", function () {
            this.focus();
        });

        handle.addEventListener("keydown", function (event) {
            var value = Number(rangeSlider.noUiSlider.get());

            switch (event.which) {
                case 37:
                    rangeSlider.noUiSlider.set(value - 1);
                    break;
                case 39:
                    rangeSlider.noUiSlider.set(value + 1);
                    break;
            }
        });
    }

    // Public methods
    return {
        init: function () {
            // Elements
            toolbar = document.querySelector('#kt_toolbar');

            if (!toolbar) {
                return;
            }

            initForm();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTLayoutToolbar.init();
});
=======
eval("// Keenthemes' plugins\nwindow.KTUtil = __webpack_require__(/*! @/src/js/components/util.js */ \"./resources/src/js/components/util.js\");\nwindow.KTBlockUI = __webpack_require__(/*! @/src/js/components/blockui.js */ \"./resources/src/js/components/blockui.js\");\nwindow.KTCookie = __webpack_require__(/*! @/src/js/components/cookie.js */ \"./resources/src/js/components/cookie.js\");\nwindow.KTDialer = __webpack_require__(/*! @/src/js/components/dialer.js */ \"./resources/src/js/components/dialer.js\");\nwindow.KTDrawer = __webpack_require__(/*! @/src/js/components/drawer.js */ \"./resources/src/js/components/drawer.js\");\nwindow.KTEventHandler = __webpack_require__(/*! @/src/js/components/event-handler.js */ \"./resources/src/js/components/event-handler.js\");\nwindow.KTFeedback = __webpack_require__(/*! @/src/js/components/feedback.js */ \"./resources/src/js/components/feedback.js\");\nwindow.KTImageInput = __webpack_require__(/*! @/src/js/components/image-input.js */ \"./resources/src/js/components/image-input.js\");\nwindow.KTMenu = __webpack_require__(/*! @/src/js/components/menu.js */ \"./resources/src/js/components/menu.js\");\nwindow.KTPasswordMeter = __webpack_require__(/*! @/src/js/components/password-meter.js */ \"./resources/src/js/components/password-meter.js\");\nwindow.KTScroll = __webpack_require__(/*! @/src/js/components/scroll.js */ \"./resources/src/js/components/scroll.js\");\nwindow.KTScrolltop = __webpack_require__(/*! @/src/js/components/scrolltop.js */ \"./resources/src/js/components/scrolltop.js\");\nwindow.KTSearch = __webpack_require__(/*! @/src/js/components/search.js */ \"./resources/src/js/components/search.js\");\nwindow.KTStepper = __webpack_require__(/*! @/src/js/components/stepper.js */ \"./resources/src/js/components/stepper.js\");\nwindow.KTSticky = __webpack_require__(/*! @/src/js/components/sticky.js */ \"./resources/src/js/components/sticky.js\");\nwindow.KTSwapper = __webpack_require__(/*! @/src/js/components/swapper.js */ \"./resources/src/js/components/swapper.js\");\nwindow.KTToggle = __webpack_require__(/*! @/src/js/components/toggle.js */ \"./resources/src/js/components/toggle.js\"); // Layout base js\n\nwindow.KTApp = __webpack_require__(/*! @/src/js/layout/app.js */ \"./resources/src/js/layout/app.js\");\nwindow.KTLayoutExplore = __webpack_require__(/*! @/src/js/layout/explore.js */ \"./resources/src/js/layout/explore.js\");\nwindow.KTLayoutSearch = __webpack_require__(/*! @/src/js/layout/search.js */ \"./resources/src/js/layout/search.js\");\nwindow.KTLayoutToolbar = __webpack_require__(/*! @/src/js/layout/toolbar.js */ \"./resources/src/js/layout/toolbar.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL3dlYnBhY2svc2NyaXB0cy5kZW1vMi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0JDLG1CQUFPLENBQUMsMEVBQUQsQ0FBdkI7QUFDQUYsTUFBTSxDQUFDRyxTQUFQLEdBQW1CRCxtQkFBTyxDQUFDLGdGQUFELENBQTFCO0FBQ0FGLE1BQU0sQ0FBQ0ksUUFBUCxHQUFrQkYsbUJBQU8sQ0FBQyw4RUFBRCxDQUF6QjtBQUNBRixNQUFNLENBQUNLLFFBQVAsR0FBa0JILG1CQUFPLENBQUMsOEVBQUQsQ0FBekI7QUFDQUYsTUFBTSxDQUFDTSxRQUFQLEdBQWtCSixtQkFBTyxDQUFDLDhFQUFELENBQXpCO0FBQ0FGLE1BQU0sQ0FBQ08sY0FBUCxHQUF3QkwsbUJBQU8sQ0FBQyw0RkFBRCxDQUEvQjtBQUNBRixNQUFNLENBQUNRLFVBQVAsR0FBb0JOLG1CQUFPLENBQUMsa0ZBQUQsQ0FBM0I7QUFDQUYsTUFBTSxDQUFDUyxZQUFQLEdBQXNCUCxtQkFBTyxDQUFDLHdGQUFELENBQTdCO0FBQ0FGLE1BQU0sQ0FBQ1UsTUFBUCxHQUFnQlIsbUJBQU8sQ0FBQywwRUFBRCxDQUF2QjtBQUNBRixNQUFNLENBQUNXLGVBQVAsR0FBeUJULG1CQUFPLENBQUMsOEZBQUQsQ0FBaEM7QUFDQUYsTUFBTSxDQUFDWSxRQUFQLEdBQWtCVixtQkFBTyxDQUFDLDhFQUFELENBQXpCO0FBQ0FGLE1BQU0sQ0FBQ2EsV0FBUCxHQUFxQlgsbUJBQU8sQ0FBQyxvRkFBRCxDQUE1QjtBQUNBRixNQUFNLENBQUNjLFFBQVAsR0FBa0JaLG1CQUFPLENBQUMsOEVBQUQsQ0FBekI7QUFDQUYsTUFBTSxDQUFDZSxTQUFQLEdBQW1CYixtQkFBTyxDQUFDLGdGQUFELENBQTFCO0FBQ0FGLE1BQU0sQ0FBQ2dCLFFBQVAsR0FBa0JkLG1CQUFPLENBQUMsOEVBQUQsQ0FBekI7QUFDQUYsTUFBTSxDQUFDaUIsU0FBUCxHQUFtQmYsbUJBQU8sQ0FBQyxnRkFBRCxDQUExQjtBQUNBRixNQUFNLENBQUNrQixRQUFQLEdBQWtCaEIsbUJBQU8sQ0FBQyw4RUFBRCxDQUF6QixDLENBRUE7O0FBQ0FGLE1BQU0sQ0FBQ21CLEtBQVAsR0FBZWpCLG1CQUFPLENBQUMsZ0VBQUQsQ0FBdEI7QUFDQUYsTUFBTSxDQUFDb0IsZUFBUCxHQUF5QmxCLG1CQUFPLENBQUMsd0VBQUQsQ0FBaEM7QUFDQUYsTUFBTSxDQUFDcUIsY0FBUCxHQUF3Qm5CLG1CQUFPLENBQUMsc0VBQUQsQ0FBL0I7QUFDQUYsTUFBTSxDQUFDc0IsZUFBUCxHQUF5QnBCLG1CQUFPLENBQUMsd0VBQUQsQ0FBaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL3dlYnBhY2svc2NyaXB0cy5kZW1vMi5qcz9mOGE3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEtlZW50aGVtZXMnIHBsdWdpbnNcbndpbmRvdy5LVFV0aWwgPSByZXF1aXJlKCdAL3NyYy9qcy9jb21wb25lbnRzL3V0aWwuanMnKTtcbndpbmRvdy5LVEJsb2NrVUkgPSByZXF1aXJlKCdAL3NyYy9qcy9jb21wb25lbnRzL2Jsb2NrdWkuanMnKTtcbndpbmRvdy5LVENvb2tpZSA9IHJlcXVpcmUoJ0Avc3JjL2pzL2NvbXBvbmVudHMvY29va2llLmpzJyk7XG53aW5kb3cuS1REaWFsZXIgPSByZXF1aXJlKCdAL3NyYy9qcy9jb21wb25lbnRzL2RpYWxlci5qcycpO1xud2luZG93LktURHJhd2VyID0gcmVxdWlyZSgnQC9zcmMvanMvY29tcG9uZW50cy9kcmF3ZXIuanMnKTtcbndpbmRvdy5LVEV2ZW50SGFuZGxlciA9IHJlcXVpcmUoJ0Avc3JjL2pzL2NvbXBvbmVudHMvZXZlbnQtaGFuZGxlci5qcycpO1xud2luZG93LktURmVlZGJhY2sgPSByZXF1aXJlKCdAL3NyYy9qcy9jb21wb25lbnRzL2ZlZWRiYWNrLmpzJyk7XG53aW5kb3cuS1RJbWFnZUlucHV0ID0gcmVxdWlyZSgnQC9zcmMvanMvY29tcG9uZW50cy9pbWFnZS1pbnB1dC5qcycpO1xud2luZG93LktUTWVudSA9IHJlcXVpcmUoJ0Avc3JjL2pzL2NvbXBvbmVudHMvbWVudS5qcycpO1xud2luZG93LktUUGFzc3dvcmRNZXRlciA9IHJlcXVpcmUoJ0Avc3JjL2pzL2NvbXBvbmVudHMvcGFzc3dvcmQtbWV0ZXIuanMnKTtcbndpbmRvdy5LVFNjcm9sbCA9IHJlcXVpcmUoJ0Avc3JjL2pzL2NvbXBvbmVudHMvc2Nyb2xsLmpzJyk7XG53aW5kb3cuS1RTY3JvbGx0b3AgPSByZXF1aXJlKCdAL3NyYy9qcy9jb21wb25lbnRzL3Njcm9sbHRvcC5qcycpO1xud2luZG93LktUU2VhcmNoID0gcmVxdWlyZSgnQC9zcmMvanMvY29tcG9uZW50cy9zZWFyY2guanMnKTtcbndpbmRvdy5LVFN0ZXBwZXIgPSByZXF1aXJlKCdAL3NyYy9qcy9jb21wb25lbnRzL3N0ZXBwZXIuanMnKTtcbndpbmRvdy5LVFN0aWNreSA9IHJlcXVpcmUoJ0Avc3JjL2pzL2NvbXBvbmVudHMvc3RpY2t5LmpzJyk7XG53aW5kb3cuS1RTd2FwcGVyID0gcmVxdWlyZSgnQC9zcmMvanMvY29tcG9uZW50cy9zd2FwcGVyLmpzJyk7XG53aW5kb3cuS1RUb2dnbGUgPSByZXF1aXJlKCdAL3NyYy9qcy9jb21wb25lbnRzL3RvZ2dsZS5qcycpO1xuXG4vLyBMYXlvdXQgYmFzZSBqc1xud2luZG93LktUQXBwID0gcmVxdWlyZSgnQC9zcmMvanMvbGF5b3V0L2FwcC5qcycpO1xud2luZG93LktUTGF5b3V0RXhwbG9yZSA9IHJlcXVpcmUoJ0Avc3JjL2pzL2xheW91dC9leHBsb3JlLmpzJyk7XG53aW5kb3cuS1RMYXlvdXRTZWFyY2ggPSByZXF1aXJlKCdAL3NyYy9qcy9sYXlvdXQvc2VhcmNoLmpzJyk7XG53aW5kb3cuS1RMYXlvdXRUb29sYmFyID0gcmVxdWlyZSgnQC9zcmMvanMvbGF5b3V0L3Rvb2xiYXIuanMnKTtcbiJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJLVFV0aWwiLCJyZXF1aXJlIiwiS1RCbG9ja1VJIiwiS1RDb29raWUiLCJLVERpYWxlciIsIktURHJhd2VyIiwiS1RFdmVudEhhbmRsZXIiLCJLVEZlZWRiYWNrIiwiS1RJbWFnZUlucHV0IiwiS1RNZW51IiwiS1RQYXNzd29yZE1ldGVyIiwiS1RTY3JvbGwiLCJLVFNjcm9sbHRvcCIsIktUU2VhcmNoIiwiS1RTdGVwcGVyIiwiS1RTdGlja3kiLCJLVFN3YXBwZXIiLCJLVFRvZ2dsZSIsIktUQXBwIiwiS1RMYXlvdXRFeHBsb3JlIiwiS1RMYXlvdXRTZWFyY2giLCJLVExheW91dFRvb2xiYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/webpack/scripts.demo2.js\n");
>>>>>>> Stashed changes

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************************************************!*\
  !*** ../../../themes/metronic/html/tools/webpack/scripts.demo10.js ***!
  \*********************************************************************/
// Keenthemes' plugins
window.KTUtil = __webpack_require__(/*! @/src/js/components/util.js */ "../src/js/components/util.js");
window.KTBlockUI = __webpack_require__(/*! @/src/js/components/blockui.js */ "../src/js/components/blockui.js");
window.KTCookie = __webpack_require__(/*! @/src/js/components/cookie.js */ "../src/js/components/cookie.js");
window.KTDialer = __webpack_require__(/*! @/src/js/components/dialer.js */ "../src/js/components/dialer.js");
window.KTDrawer = __webpack_require__(/*! @/src/js/components/drawer.js */ "../src/js/components/drawer.js");
window.KTEventHandler = __webpack_require__(/*! @/src/js/components/event-handler.js */ "../src/js/components/event-handler.js");
window.KTFeedback = __webpack_require__(/*! @/src/js/components/feedback.js */ "../src/js/components/feedback.js");
window.KTImageInput = __webpack_require__(/*! @/src/js/components/image-input.js */ "../src/js/components/image-input.js");
window.KTMenu = __webpack_require__(/*! @/src/js/components/menu.js */ "../src/js/components/menu.js");
window.KTPasswordMeter = __webpack_require__(/*! @/src/js/components/password-meter.js */ "../src/js/components/password-meter.js");
window.KTScroll = __webpack_require__(/*! @/src/js/components/scroll.js */ "../src/js/components/scroll.js");
window.KTScrolltop = __webpack_require__(/*! @/src/js/components/scrolltop.js */ "../src/js/components/scrolltop.js");
window.KTSearch = __webpack_require__(/*! @/src/js/components/search.js */ "../src/js/components/search.js");
window.KTStepper = __webpack_require__(/*! @/src/js/components/stepper.js */ "../src/js/components/stepper.js");
window.KTSticky = __webpack_require__(/*! @/src/js/components/sticky.js */ "../src/js/components/sticky.js");
window.KTSwapper = __webpack_require__(/*! @/src/js/components/swapper.js */ "../src/js/components/swapper.js");
window.KTToggle = __webpack_require__(/*! @/src/js/components/toggle.js */ "../src/js/components/toggle.js");

// Layout base js
window.KTApp = __webpack_require__(/*! @/src/js/layout/app.js */ "../src/js/layout/app.js");
window.KTLayoutExplore = __webpack_require__(/*! @/src/js/layout/explore.js */ "../../../themes/metronic/html/demo10/src/js/layout/explore.js");
window.KTLayoutSearch = __webpack_require__(/*! @/src/js/layout/search.js */ "../../../themes/metronic/html/demo10/src/js/layout/search.js");
window.KTLayoutToolbar = __webpack_require__(/*! @/src/js/layout/toolbar.js */ "../../../themes/metronic/html/demo10/src/js/layout/toolbar.js");

})();

/******/ })()
;
//# sourceMappingURL=scripts.bundle.js.map