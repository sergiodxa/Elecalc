function resCalc () {
	var value1 = parseFloat($('#res1_sumRes').val()),
		value2 = parseFloat($('#res2_sumRes').val()),
		type = $("#type_sumRes input[name='type']:checked").val(); 
	if (type=="Serie") {
		res = value1+value2;
		$('#result_sumRes').attr('value', res+'Ω‎');
	}
	else if (type=="Parallel") {
		multi = value1*value2;
		sum = value1+value2;
		res = multi/sum;
		$('#result_sumRes').attr('value', res+'Ω‎');
	}
	else {
		$('#result_sumRes').attr('value', 'How the hell did you not select anything?');
	}
};
function ohmCalc () {
	var value1 = parseFloat($('#value1_ohmCalc').val()),
		value2 = parseFloat($('#value2_ohmCalc').val()),
		unit1 = $("#unit1_ohmCalc input[name='unit1']:checked").val(),
		unit2 = $("#unit2_ohmCalc input[name='unit2']:checked").val();
	if (unit1=="V" && unit2=="R" || unit1=="V" && unit2=="I") {
		res = value1/value2;
		if (unit2=="R") {
			$('#result_ohmCalc').attr('value', res+'A');
		}
		else if (unit2=="I") {
			$('#result_ohmCalc').attr('value', res+'Ω‎');
		}
	}
	else if (unit1=="R" && unit2=="I" || unit1=="I" && unit2=="R") {
		res = value1*value2;
		$('#result_ohmCalc').attr('value', res+'V');
	}
	else {
		$('#result_ohmCalc').attr('value', 'Select a valid unit.');
	}
};
function powerCalc () {
	var voltage = parseFloat($('#voltage_powerCalc').val()),
		intensity = parseFloat($('#intensity_powerCalc').val()),
		cosPhi = parseFloat($('#cosPhi_powerCalc').val()),
		power = parseFloat($('#power_powerCalc').val());
	if (intensity>0 && cosPhi>0 && power>0 && isNaN(voltage)) {
		voltage = power/(intensity*cosPhi);
		$('#voltage_powerCalc').attr('value', voltage+'V');
	}
	else if (voltage>0 && cosPhi>0 && power>0 && isNaN(intensity)) {
		intensity = power/(voltage*cosPhi);
		$('#intensity_powerCalc').attr('value', intensity+'A');
	}
	else if (voltage>0 && intensity>0 && power>0 && isNaN(cosPhi)) {
		cosPhi = power/(voltage*intensity);
		$('#cosPhi_powerCalc').attr('value', cosPhi);
	}
	else if (voltage>0 && cosPhi>0 && intensity>0 && isNaN(power)) {
		power = voltage*intensity*cosPhi;
		$('#power_powerCalc').attr('value', power+'W');
	}
	else {
		alert('Error, please let only one empty');
	}
};
function maxwellCalc () {
	var c1r1 = parseFloat($('#col1row1_maxwellCalc').val()),
		c2r1 = parseFloat($('#col2row1_maxwellCalc').val()),
		c3r1 = parseFloat($('#col3row1_maxwellCalc').val()),
		c1r2 = parseFloat($('#col1row2_maxwellCalc').val()),
		c2r2 = parseFloat($('#col2row2_maxwellCalc').val()),
		c3r2 = parseFloat($('#col3row2_maxwellCalc').val()),
		c1r3 = parseFloat($('#col1row3_maxwellCalc').val()),
		c2r3 = parseFloat($('#col2row3_maxwellCalc').val()),
		c3r3 = parseFloat($('#col3row3_maxwellCalc').val()),
		value1 = parseFloat($('#substituteValue1_maxwellCalc').val()),
		value2 = parseFloat($('#substituteValue2_maxwellCalc').val()),
		value3 = parseFloat($('#substituteValue3_maxwellCalc').val());
	base = ((c1r1*c2r2*c3r3)+(c1r2*c2r3*c3r1)+(c1r3*c2r1*c3r2))-((c3r1*c2r2*c1r3)+(c3r2*c2r3*c1r1)+(c3r3*c2r1*c1r2));
	sust1 = ((value1*c2r2*c3r3)+(value2*c2r3*c3r1)+(value3*c2r1*c3r2))-((c3r1*c2r2*value3)+(c3r2*c2r3*value1)+(c3r3*c2r1*value2));
	sust2 = ((c1r1*value2*c3r3)+(c1r2*value3*c3r1)+(c1r3*value1*c3r2))-((c3r1*value2*c1r3)+(c3r2*value3*c1r1)+(c3r3*value1*c1r2));
	sust3 = ((c1r1*c2r2*value3)+(c1r2*c2r3*value1)+(c1r3*c2r1*value2))-((value1*c2r2*c1r3)+(value2*c2r3*c1r1)+(value3*c2r1*c1r2));
	int1 = sust1/base;
	int2 = sust2/base;
	int3 = sust3/base;
	if (isNaN(int1) && isNaN(int2) && isNaN(int3)) {
		$('#result1_maxwellCalc').attr('value', 'Error, in this equation I need to divide by 0');
		$('#result2_maxwellCalc').attr('value', 'Error, in this equation I need to divide by 0');
		$('#result3_maxwellCalc').attr('value', 'Error, in this equation I need to divide by 0');
	}
	else {
		$('#result1_maxwellCalc').attr('value', int1+'A');
		$('#result2_maxwellCalc').attr('value', int2+'A');
		$('#result3_maxwellCalc').attr('value', int3+'A');
	}
};
function lumenCalc () {
	var averageIluminance = parseFloat($('#averageIluminance_lumenCalc').val()),
		workPlane = parseFloat($('#workPlane_lumenCalc').val()),
		maintainceFactor = parseFloat($('#maintainceFactor_lumenCalc').val()),
		utilizationFactor = parseFloat($('#utilizationFactor_lumenCalc').val()),
		luminousFlux = parseFloat($('#luminousFlux_lumenCalc').val());
	if (averageIluminance>0 && workPlane>0 && maintainceFactor>0 && utilizationFactor>0 && isNaN(luminousFlux)) {
		luminousFlux = (averageIluminance*workPlane)/(maintainceFactor*utilizationFactor);
		$('#luminousFlux_lumenCalc').attr('value', luminousFlux);
	}
	else if (luminousFlux>0 && workPlane>0 && maintainceFactor>0 && utilizationFactor>0 && isNaN(averageIluminance)) {
		averageIluminance = (luminousFlux*maintainceFactor*utilizationFactor)/(workPlane);
		$('#averageIluminance_lumenCalc').attr('value', averageIluminance);
	}
	else if (averageIluminance>0 && luminousFlux>0 && maintainceFactor>0 && utilizationFactor>0 && isNaN(workPlane)) {
		workPlane = (luminousFlux*maintainceFactor*utilizationFactor)/(averageIluminance);
		$('#workPlane_lumenCalc').attr('value', workPlane);
	}
	else if (averageIluminance>0 && workPlane>0 && luminousFlux>0 && utilizationFactor>0 && isNaN(maintainceFactor)) {
		maintainceFactor = (averageIluminance*workPlane)/(luminousFlux*utilizationFactor);
		$('#maintainceFactor_lumenCalc').attr('value', maintainceFactor);
	}
	else if (averageIluminance>0 && workPlane>0 && maintainceFactor>0 && luminousFlux>0 && isNaN(utilizationFactor)) {
		utilizationFactor = (averageIluminance*workPlane)/(maintainceFactor*luminousFlux);
		$('#utilizationFactor_lumenCalc').attr('value', utilizationFactor);
	}
	else {
		alert('Error, please let only one empty');
	}
};
function luminairesCalc () {
	var luminousFlux = parseFloat($('#luminousFlux_luminairesCalc').val()),
		flowLamp = parseFloat($('#flowLamp_luminairesCalc').val()),
		lampsFixture = parseFloat($('#lampsFixture_luminairesCalc').val()),
		luminaires = parseFloat($('#luminaires_luminairesCalc').val());
	if (luminousFlux>0 && flowLamp>0 && lampsFixture>0 && isNaN(luminaires)) {
		luminaires = luminousFlux/(flowLamp*lampsFixture);
		$('#luminaires_luminairesCalc').attr('value', luminaires);
	}
	else if (luminaires>0 && flowLamp>0 && lampsFixture>0 && isNaN(luminousFlux)) {
		luminousFlux = luminaires*flowLamp*lampsFixture;
		$('#luminousFlux_luminairesCalc').attr('value', luminousFlux);
	}
	else if (luminaires>0 && luminousFlux>0 && lampsFixture>0 && isNaN(flowLamp)) {
		flowLamp = luminousFlux/(luminaires*lampsFixture);
		$('#flowLamp_luminairesCalc').attr('value', flowLamp);
	}
	else if (luminaires>0 && flowLamp>0 && luminousFlux>0 && isNaN(lampsFixture)) {
		lampsFixture = luminousFlux/(flowLamp*luminaires);
		$('#lampsFixture_luminairesCalc').attr('value', lampsFixture);
	}
	else {
		alert('Error, please let only one empty');
	}
};