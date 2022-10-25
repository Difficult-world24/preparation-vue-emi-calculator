// Take large number as argument and return readable format.
// For example: 84329 -> 84,329
function humanRead(num, intSep = ",", floatSep = ".") {
  if (!num) {
    return "";
  }
  return new Intl.NumberFormat("en-US")
    .format(num)
    .replaceAll(".", floatSep)
    .replaceAll(",", intSep);
}

export default humanRead;
