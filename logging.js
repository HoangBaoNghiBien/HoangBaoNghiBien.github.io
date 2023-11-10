// CHANGE ME: point this to your own spreadsheet to log
// your own data by modifying the function at the bottom.
//
// A simple Google-spreadsheet-based event logging framework.
//
// This is currently set up to log every mousedown and keydown
// event, as well as any events that might be triggered within
// the app by triggering the 'log' event anywhere in the doc
// as follows:
//
// $(element).trigger('log', ['myevent', {key1: val1, key2: val2}]);

var ENABLE_NETWORK_LOGGING = true; // Controls network logging.
var ENABLE_CONSOLE_LOGGING = true; // Controls console logging.
var LOG_VERSION = 'B';             // Labels every entry with version: "A".

// These event types are intercepted for logging before jQuery handlers.
var EVENT_TYPES_TO_LOG = {
  mousedown: true,
  keydown: true
};

// These event properties are copied to the log if present.
var EVENT_PROPERTIES_TO_LOG = {
  which: true,
  pageX: true,
  pageY: true
};

// This function is called to record some global state on each event.
var GLOBAL_STATE_TO_LOG = function () {
  return {
  };
};

(function () {

  // A persistent unique id for the user.
  var uid = getUniqueId();

  // Hooks up all the event listeners.
  function hookEventsToLog() {
    // Set up low-level event capturing.  This intercepts all
    // native events before they bubble, so we log the state
    // *before* normal event processing.
    for (var event_type in EVENT_TYPES_TO_LOG) {
      document.addEventListener(event_type, logEvent, true);
    }

    // Once the page is loaded, show our own unique id.
    $(function () {
      console.log('Your unique id is', uid);
      $('#bottomtext').html('Logging to the network as <nobr>' + uid + '</nobr>')
    });

    // Listen to 'log' events which are triggered anywhere in the document.
    $(document).on('log', logEvent);
  }

  // Returns a CSS selector that is descriptive of
  // the element, for example, "td.left div" for
  // a class-less div within a td of class "left".
  function elementDesc(elt) {
    if (elt == document) {
      return 'document';
    } else if (elt == window) {
      return 'window';
    }
    function descArray(elt) {
      var desc = [elt.tagName.toLowerCase()];
      if (elt.id) {
        desc.push('#' + elt.id);
      }
      for (var j = 0; j < elt.classList.length; j++) {
        desc.push('.' + elt.classList[j]);
      }
      return desc;
    }
    var desc = [];
    while (elt && desc.length <= 1) {
      var desc2 = descArray(elt);
      if (desc.length == 0) {
        desc = desc2;
      } else if (desc2.length > 1) {
        desc2.push(' ', desc[0]);
        desc = desc2;
      }
      elt = elt.parentElement;
    }
    return desc.join('');
  }

  // Parse user agent string by looking for recognized substring.
  function findFirstString(str, choices) {
    for (var j = 0; j < choices.length; j++) {
      if (str.indexOf(choices[j]) >= 0) {
        return choices[j];
      }
    }
    return '?';
  }

  // Genrates or remembers a somewhat-unique ID with distilled user-agent info.
  function getUniqueId() {
    if (!('uid' in localStorage)) {
      var browser = findFirstString(navigator.userAgent, [
        'Seamonkey', 'Firefox', 'Chromium', 'Chrome', 'Safari', 'OPR', 'Opera',
        'Edge', 'MSIE', 'Blink', 'Webkit', 'Gecko', 'Trident', 'Mozilla']);
      var os = findFirstString(navigator.userAgent, [
        'Android', 'iOS', 'Symbian', 'Blackberry', 'Windows Phone', 'Windows',
        'OS X', 'Linux', 'iOS', 'CrOS']).replace(/ /g, '_');
      var unique = ('' + Math.random()).substr(2);
      localStorage['uid'] = os + '-' + browser + '-' + unique;
    }
    return localStorage['uid'];
  }

  // Retrieve or assign a user number.
  function getUserNumber(uid) {
    // Retrieve the mapping object from localStorage, or initialize it if it doesn't exist.
    var userNumbersMap = JSON.parse(localStorage.getItem('userNumbersMap')) || {};
    var maxNumber = parseInt(localStorage.getItem('maxUserNumber'), 20);

    // Initialize maxNumber if it doesn't exist.
    if (isNaN(maxNumber)) {
      maxNumber = 0;
    }

    // If the uid has not been assigned a userNumber yet, do so.
    if (!userNumbersMap.hasOwnProperty(uid)) {
      userNumbersMap[uid] = maxNumber;

      // Increment the max number for the next new user and update localStorage.
      maxNumber++;
      localStorage.setItem('maxUserNumber', maxNumber.toString());
      localStorage.setItem('userNumbersMap', JSON.stringify(userNumbersMap));
    }

    // Return the user number associated with the uid.
    return userNumbersMap[uid];
  }

  // Log the given event.
  function logEvent(event, customName, customInfo) {
    var time = (new Date).getTime();
    var name = customName || event.type;
    // By default, monitor some global state on every event.
    var infoObj = GLOBAL_STATE_TO_LOG();

    var userNumber = getUserNumber(uid); // Retrieve the user number.

    // And monitor a few interesting fields from the event, if present.
    for (var key in EVENT_PROPERTIES_TO_LOG) {
      if (key in event) {
        infoObj[key] = event[key];
      }
    }
    // Let a custom event add fields to the info.
    if (customInfo) {
      $.extend(infoObj, customInfo);
    }
    var info = JSON.stringify(infoObj);
    var target = elementDesc(event.target);
    var state = location.hash;

    if (ENABLE_CONSOLE_LOGGING) {
      console.log(uid, userNumber, time, name, target, info, state, LOG_VERSION);
    }
    if (ENABLE_NETWORK_LOGGING) {
      sendNetworkLog(uid, userNumber, time, name, target, info, state, LOG_VERSION);
    }
  }

  // OK, go.
  if (ENABLE_NETWORK_LOGGING) {
    hookEventsToLog();
  }

})();

/////////////////////////////////////////////////////////////////////////////
// CHANGE ME:
// ** Replace the function below by substituting your own google form. **
/////////////////////////////////////////////////////////////////////////////
//
// 1. Create a Google form called "Network Log" at forms.google.com.
// 2. Set it up to have several "short answer" questions; here we assume
//    seven questions: uid, time, name, target, info, state, version.
// 3. Run googlesender.py (at goo.gl/jUkahv) to make a javascript
//    function that submits records directly to the form.
// 4. Put that function in here, and replace the current sendNetworkLog
//    so that your version is called to log events to your form.
//
// For example, the following code was written as follows:
// curl -sL goo.gl/jUkahv | python - https://docs.google.com/forms/d/1A...0/edit
//
// This preocess changes the ids below to direct your data into your own
// form and spreadsheet. The formid must be customized, and also the form
// field names such as "entry.1291686978" must be matched to your form.
// (The numerical field names for a Google form can be found by inspecting
// the form input fields.) This can be done manually, but since this is an
// error-prone process, it can be easier to use googlesender.py.
//
/////////////////////////////////////////////////////////////////////////////

// "A" version network log submission function
// submits to the google form at this URL:
// docs.google.com/forms/d/1Ao......................................QE0/edit
function sendNetworkLog(
  uid,
  userNumber,
  time,
  name,
  target,
  info,
  state,
  version) {
  var formid = "e/1FAIpQLSeVg__pP-4KcLZp3vddtJO6gucncK7qxp1Q0kXlDsmkKxqXxg";
  var data = {
    "entry.1989974691": uid,
    "entry.1295713906": userNumber,
    "entry.2033536801": time,
    "entry.2099692500": name,
    "entry.1049947669": target,
    "entry.118907996": info,
    "entry.146074813": state,
    "entry.486055746": version
  };
  var params = [];
  for (key in data) {
    params.push(key + "=" + encodeURIComponent(data[key]));
  }
  // Submit the form using an image to avoid CORS warnings.
  (new Image).src = "https://docs.google.com/forms/d/" + formid +
    "/formResponse?" + params.join("&");
}
