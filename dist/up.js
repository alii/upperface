"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upperFace = void 0;
/**
 * Upperface a string
 * @param string The string you want to upperface
 */
function upperFace(string) {
    return string.charCodeAt(0).toString().toUpperCase() + string.slice(1, string.length);
}
exports.upperFace = upperFace;
//# sourceMappingURL=up.js.map