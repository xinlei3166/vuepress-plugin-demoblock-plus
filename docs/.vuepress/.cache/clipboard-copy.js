import {
  __commonJS,
  init_define_DEMOBLOCK_LOCALES,
  init_define_MZ_ZOOM_OPTIONS
} from "./chunk-NJDKWQPN.js";

// node_modules/clipboard-copy/index.js
var require_clipboard_copy = __commonJS({
  "node_modules/clipboard-copy/index.js"(exports, module) {
    init_define_DEMOBLOCK_LOCALES();
    init_define_MZ_ZOOM_OPTIONS();
    module.exports = clipboardCopy;
    function makeError() {
      return new DOMException("The request is not allowed", "NotAllowedError");
    }
    async function copyClipboardApi(text) {
      if (!navigator.clipboard) {
        throw makeError();
      }
      return navigator.clipboard.writeText(text);
    }
    async function copyExecCommand(text) {
      const span = document.createElement("span");
      span.textContent = text;
      span.style.whiteSpace = "pre";
      span.style.webkitUserSelect = "auto";
      span.style.userSelect = "all";
      document.body.appendChild(span);
      const selection = window.getSelection();
      const range = window.document.createRange();
      selection.removeAllRanges();
      range.selectNode(span);
      selection.addRange(range);
      let success = false;
      try {
        success = window.document.execCommand("copy");
      } finally {
        selection.removeAllRanges();
        window.document.body.removeChild(span);
      }
      if (!success)
        throw makeError();
    }
    async function clipboardCopy(text) {
      try {
        await copyClipboardApi(text);
      } catch (err) {
        try {
          await copyExecCommand(text);
        } catch (err2) {
          throw err2 || err || makeError();
        }
      }
    }
  }
});

// dep:clipboard-copy
init_define_DEMOBLOCK_LOCALES();
init_define_MZ_ZOOM_OPTIONS();
var clipboard_copy_default = require_clipboard_copy();
export {
  clipboard_copy_default as default
};
/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=clipboard-copy.js.map
