
// Elementi vezani za podesavanje visine
var visinaEl = document.getElementById("visinaIn");

var visinaOut = document.getElementById("visinaOut");
visinaOut.innerHTML = visinaEl.value + " цм";

// Elementi vezani za podesavanje tezine
var tezinaEl = document.getElementById("tezinaIn");

var tezinaOut = document.getElementById("tezinaOut");
tezinaOut.innerHTML = tezinaEl.value + " кг";

visinaEl.oninput = function() {
	visinaOut.innerHTML = visinaEl.value + " цм";
}

tezinaEl.oninput = function() {
	tezinaOut.innerHTML = this.value + " кг";
}

// Elementi vezani za izracunavanje bmi-ja

function bmi(tezina, visina) {

	var bmi = tezina / ((visina / 100) * (visina / 100));
	var bmiOut = document.getElementById("bmiOut");
	bmiOut.innerHTML = Math.round(bmi);
	var status = document.getElementById("status");
	if (bmiOut.innerHTML <= 18) {
		status.innerHTML = "неухрањеност";
	} else if (bmiOut.innerHTML > 18 && bmiOut.innerHTML <= 25) {
		status.innerHTML = "нормално";
	} else {
		status.innerHTML = "гојазност";
	}
	
}

document.getElementById("submitBtn").onclick = function() {bmi(tezinaEl.value, visinaEl.value)};
