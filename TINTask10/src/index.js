/* eslint-disable no-undef */

const temp = require('./temperature.js');
const dist = require('./distance.js');

window.onload = function() {
    document.getElementById("celsius").addEventListener("change", temp.celsConverter);
    document.getElementById("celsius").addEventListener("input", temp.celsConverter);
    document.getElementById("fahr").addEventListener("input", temp.fahrConverter);
    document.getElementById("fahr").addEventListener("change", temp.fahrConverter);
    document.getElementById("kelvin").addEventListener("change", temp.kelvinConverter);
    document.getElementById("kelvin").addEventListener("input", temp.kelvinConverter);
    document.getElementById("km").addEventListener("input", dist.kmConverter);
    document.getElementById("km").addEventListener("change", dist.kmConverter);
    document.getElementById("mile").addEventListener("change", dist.mileConverter);
    document.getElementById("mile").addEventListener("input", dist.mileConverter);
}