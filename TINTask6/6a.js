function celcToFahr(celsius) {
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var mes = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';

  return mes;
}

function fahrToCelc(fahr) {
  var fTemp = fahr;
  var fToCelc = (fTemp - 32) * 5 / 9;
  var mes = fTemp + '\xB0F is ' + fToCelc + '\xB0C.';

   return mes;
}

function convert() {
    var x = document.getElementById("myInput").value;
    document.getElementById("celcToFahr").innerHTML =  celcToFahr(x);
    document.getElementById("fahrToCelc").innerHTML =  fahrToCelc(x);
}
