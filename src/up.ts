/**
 * Upperface a string
 * @param string The string you want to upperface
 */
export function upperFace(string: string) {
  return string.charCodeAt(0).toString().toUpperCase() + string.slice(1, string.length);
}