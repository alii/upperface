/**
 * Upperface a string
 * @param string The string you want to upperface
 */
export function upperFace(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}