window.onload = function() {
	if (!localStorage.fases) {
		localStorage.fases = '1';
	}
}
var showHideConfig = function() {
	var shadow = document.getElementById('shadow')
		config = document.getElementById('config');
	config.style.display = (config.style.display == 'none') ? 'block' : 'none';
	shadow.style.display = (shadow.style.display == 'none') ? 'block' : 'none';
}

var shadowClick = function() {
	var shadow = document.getElementById('shadow')
		config = document.getElementById('config');
	config.style.display = 'none';
	shadow.style.display = 'none';
}

var guardarConfig = function() {
	var fases = document.getElementById('fases')
	localStorage.fases = fases.options[fases.selectedIndex].value;
	showHideConfig();
}


// viejos códigos
function resCalc (type) {
	var value1 = parseFloat(document.querySelector('#res1_sumRes').value),
		value2 = parseFloat(document.querySelector('#res2_sumRes').value);
	if (type=="Serie") {
		res = value1+value2;
		document.querySelector('#result_sumRes').value = res+'Ω';
	}
	else if (type=="Parallel") {
		multi = value1*value2;
		sum = value1+value2;
		res = multi/sum;
		document.querySelector('#result_sumRes').value = res+'Ω';
	}
	else {
		document.querySelector('#result_sumRes').value = res+'How the hell did you not select anything?';
	}
};
function ohmCalc () {
	var voltage = parseFloat(document.querySelector('#voltage_ohmCalc').value),
		intensity = parseFloat(document.querySelector('#intensity_ohmCalc').value),
		resistance = parseFloat(document.querySelector('#resistance_ohmCalc').value);
	if (intensity>0 && resistance>0 && isNaN(voltage)) {
		voltage = intensity*resistance;
		document.querySelector('#voltage_ohmCalc').value = voltage+'V';
	}
	else if (voltage>0 && resistance>0 && isNaN(intensity)) {
		intensity = voltage/resistance;
		document.querySelector('#intensity_ohmCalc').value = intensity+'A';
	}
	else if (voltage>0 && intensity>0 && isNaN(resistance)) {
		resistance = voltage/intensity;
		document.querySelector('#resistance_ohmCalc').value = resistance+'Ω';
	}
	else {
		alert('Error, please let only one empty');
	}
};
function powerCalc () {
	var voltage = parseFloat(document.querySelector('#voltage_powerCalc').value),
		intensity = parseFloat(document.querySelector('#intensity_powerCalc').value),
		cosPhi = parseFloat(document.querySelector('#cosPhi_powerCalc').value),
		power = parseFloat(document.querySelector('#power_powerCalc').value);
	if (intensity>0 && cosPhi>0 && power>0 && isNaN(voltage)) {
		voltage = power/(intensity*cosPhi);
		document.querySelector('#voltage_powerCalc').value = voltage+'V';
	}
	else if (voltage>0 && cosPhi>0 && power>0 && isNaN(intensity)) {
		intensity = power/(voltage*cosPhi);
		document.querySelector('#intensity_powerCalc').value = intensity+'A';
	}
	else if (voltage>0 && intensity>0 && power>0 && isNaN(cosPhi)) {
		cosPhi = power/(voltage*intensity);
		document.querySelector('#cosPhi_powerCalc').value = cosPhi;
	}
	else if (voltage>0 && cosPhi>0 && intensity>0 && isNaN(power)) {
		power = voltage*intensity*cosPhi;
		document.querySelector('#power_powerCalc').value = power+'W';
	}
	else {
		alert('Error, please let only one empty');
	}
};
function maxwellCalc () {
	var c1r1 = parseFloat(document.querySelector('#col1row1_maxwellCalc').value),
		c2r1 = parseFloat(document.querySelector('#col2row1_maxwellCalc').value),
		c3r1 = parseFloat(document.querySelector('#col3row1_maxwellCalc').value),
		c1r2 = parseFloat(document.querySelector('#col1row2_maxwellCalc').value),
		c2r2 = parseFloat(document.querySelector('#col2row2_maxwellCalc').value),
		c3r2 = parseFloat(document.querySelector('#col3row2_maxwellCalc').value),
		c1r3 = parseFloat(document.querySelector('#col1row3_maxwellCalc').value),
		c2r3 = parseFloat(document.querySelector('#col2row3_maxwellCalc').value),
		c3r3 = parseFloat(document.querySelector('#col3row3_maxwellCalc').value),
		value1 = parseFloat(document.querySelector('#substituteValue1_maxwellCalc').value),
		value2 = parseFloat(document.querySelector('#substituteValue2_maxwellCalc').value),
		value3 = parseFloat(document.querySelector('#substituteValue3_maxwellCalc').value);
	base = ((c1r1*c2r2*c3r3)+(c1r2*c2r3*c3r1)+(c1r3*c2r1*c3r2))-((c3r1*c2r2*c1r3)+(c3r2*c2r3*c1r1)+(c3r3*c2r1*c1r2));
	sust1 = ((value1*c2r2*c3r3)+(value2*c2r3*c3r1)+(value3*c2r1*c3r2))-((c3r1*c2r2*value3)+(c3r2*c2r3*value1)+(c3r3*c2r1*value2));
	sust2 = ((c1r1*value2*c3r3)+(c1r2*value3*c3r1)+(c1r3*value1*c3r2))-((c3r1*value2*c1r3)+(c3r2*value3*c1r1)+(c3r3*value1*c1r2));
	sust3 = ((c1r1*c2r2*value3)+(c1r2*c2r3*value1)+(c1r3*c2r1*value2))-((value1*c2r2*c1r3)+(value2*c2r3*c1r1)+(value3*c2r1*c1r2));
	int1 = sust1/base;
	int2 = sust2/base;
	int3 = sust3/base;
	if (isNaN(int1) && isNaN(int2) && isNaN(int3)) {
		document.querySelector('#result1_maxwellCalc').value = 'Error, in this equation I need to divide by 0';
		document.querySelector('#result2_maxwellCalc').value = 'Error, in this equation I need to divide by 0';
		document.querySelector('#result3_maxwellCalc').value = 'Error, in this equation I need to divide by 0';
	}
	else {
		document.querySelector('#result1_maxwellCalc').value = int1+'A';
		document.querySelector('#result2_maxwellCalc').value = int2+'A';
		document.querySelector('#result3_maxwellCalc').value = int3+'A';
	}
};
function lumenCalc () {
	var averageIluminance = parseFloat(document.querySelector('#averageIluminance_lumenCalc').value),
		workPlane = parseFloat(document.querySelector('#workPlane_lumenCalc').value),
		maintainceFactor = parseFloat(document.querySelector('#maintainceFactor_lumenCalc').value),
		utilizationFactor = parseFloat(document.querySelector('#utilizationFactor_lumenCalc').value),
		luminousFlux = parseFloat(document.querySelector('#luminousFlux_lumenCalc').value);
	if (averageIluminance>0 && workPlane>0 && maintainceFactor>0 && utilizationFactor>0 && isNaN(luminousFlux)) {
		luminousFlux = (averageIluminance*workPlane)/(maintainceFactor*utilizationFactor);
		document.querySelector('#luminousFlux_lumenCalc').value = luminousFlux;
	}
	else if (luminousFlux>0 && workPlane>0 && maintainceFactor>0 && utilizationFactor>0 && isNaN(averageIluminance)) {
		averageIluminance = (luminousFlux*maintainceFactor*utilizationFactor)/(workPlane);
		document.querySelector('#averageIluminance_lumenCalc').value = averageIluminance;
	}
	else if (averageIluminance>0 && luminousFlux>0 && maintainceFactor>0 && utilizationFactor>0 && isNaN(workPlane)) {
		workPlane = (luminousFlux*maintainceFactor*utilizationFactor)/(averageIluminance);
		document.querySelector('#workPlane_lumenCalc').value = workPlane;
	}
	else if (averageIluminance>0 && workPlane>0 && luminousFlux>0 && utilizationFactor>0 && isNaN(maintainceFactor)) {
		maintainceFactor = (averageIluminance*workPlane)/(luminousFlux*utilizationFactor);
		document.querySelector('#maintainceFactor_lumenCalc').value = maintainceFactor;
	}
	else if (averageIluminance>0 && workPlane>0 && maintainceFactor>0 && luminousFlux>0 && isNaN(utilizationFactor)) {
		utilizationFactor = (averageIluminance*workPlane)/(maintainceFactor*luminousFlux);
		document.querySelector('#utilizationFactor_lumenCalc').value = utilizationFactor;
	}
	else {
		alert('Error, please let only one empty');
	}
};
function luminairesCalc () {
	var luminousFlux = parseFloat(document.querySelector('#luminousFlux_luminairesCalc').value),
		flowLamp = parseFloat(document.querySelector('#flowLamp_luminairesCalc').value),
		lampsFixture = parseFloat(document.querySelector('#lampsFixture_luminairesCalc').value),
		luminaires = parseFloat(document.querySelector('#luminaires_luminairesCalc').value);
	if (luminousFlux>0 && flowLamp>0 && lampsFixture>0 && isNaN(luminaires)) {
		luminaires = luminousFlux/(flowLamp*lampsFixture);
		document.querySelector('#luminaires_luminairesCalc').value = luminaires;
	}
	else if (luminaires>0 && flowLamp>0 && lampsFixture>0 && isNaN(luminousFlux)) {
		luminousFlux = luminaires*flowLamp*lampsFixture;
		document.querySelector('#luminousFlux_luminairesCalc').value = luminousFlux;
	}
	else if (luminaires>0 && luminousFlux>0 && lampsFixture>0 && isNaN(flowLamp)) {
		flowLamp = luminousFlux/(luminaires*lampsFixture);
		document.querySelector('#flowLamp_luminairesCalc').value = flowLamp;
	}
	else if (luminaires>0 && flowLamp>0 && luminousFlux>0 && isNaN(lampsFixture)) {
		lampsFixture = luminousFlux/(flowLamp*luminaires);
		document.querySelector('#lampsFixture_luminairesCalc').value = lampsFixture;
	}
	else {
		alert('Error, please let only one empty');
	}
};