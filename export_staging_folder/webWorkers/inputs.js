postMessage("I\'m working before postMessage(\'ali\').");

onmessage = function (oEvent) {
  var objData = oEvent.data;
  postMessage(objData);
};
//# sourceMappingURL=inputs.js.map