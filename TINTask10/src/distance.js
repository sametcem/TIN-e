/* eslint-disable no-undef */

exports.kmConverter = function() {
    let val = parseFloat(document.getElementById("km").value);
    document.getElementById("mile").value = (val * 0.62137).toFixed(2);
}

exports.mileConverter = function() {
    let val = parseFloat(document.getElementById("mile").value);
    document.getElementById("km").value = (val / 0.62137).toFixed(2);
}