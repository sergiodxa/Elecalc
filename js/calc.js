function resCalc () {
	var value1 = parseFloat($('#res1').val()),
		value2 = parseFloat($('#res2').val()),
		type = $("#type input[name='type']:checked").val(); 
	if (type=="Serie") {
		res = value1+value2;
		$('#sumRes div .result').attr('value', res+'Ω‎');
	}
	else if (type=="Parallel") {
		multi = value1*value2;
		sum = value1+value2;
		res = multi/sum;
		$('#sumRes div .result').attr('value', res+'Ω‎');
	}
	else {
		$('#sumRes div .result').attr('value', 'How the hell did you not select anything?');
	}
};
function ohmCalc () {
	var value1 = parseFloat($('#value1').val()),
		value2 = parseFloat($('#value2').val()),
		unit1 = $("#unit1 input[name='unit1']:checked").val(),
		unit2 = $("#unit2 input[name='unit2']:checked").val();
	if (unit1=="V" && unit2=="R" || unit1=="V" && unit2=="I") {
		res = value1/value2;
		if (unit2=="R") {
			$('#Ohmcalcs div .result').attr('value', res+'A');
		}
		else if (unit2=="I") {
			$('#Ohmcalcs div .result').attr('value', res+'Ω‎');
		}
	}
	else if (unit1=="R" && unit2=="I" || unit1=="I" && unit2=="R") {
		res = value1*value2;
		$('#Ohmcalcs div .result').attr('value', res+'V');
	}
	else {
		$('#Ohmcalcs div .result').attr('value', 'Select a valid unit.');
	}
}
function maxwell () {
	var c1r1 = parseFloat($('#col1row1').val()),
		c2r1 = parseFloat($('#col2row1').val()),
		c3r1 = parseFloat($('#col3row1').val()),
		c1r2 = parseFloat($('#col1row2').val()),
		c2r2 = parseFloat($('#col2row2').val()),
		c3r2 = parseFloat($('#col3row2').val()),
		c1r3 = parseFloat($('#col1row3').val()),
		c2r3 = parseFloat($('#col2row3').val()),
		c3r3 = parseFloat($('#col3row3').val()),
		value1 = parseFloat($('#substituteValue1').val()),
		value2 = parseFloat($('#substituteValue2').val()),
		value3 = parseFloat($('#substituteValue3').val());
	base = ((c1r1*c2r2*c3r3)+(c1r2*c2r3*c3r1)+(c1r3*c2r1*c3r2))-((c3r1*c2r2*c1r3)+(c3r2*c2r3*c1r1)+(c3r3*c2r1*c1r2));
	sust1 = ((value1*c2r2*c3r3)+(value2*c2r3*c3r1)+(value3*c2r1*c3r2))-((c3r1*c2r2*value3)+(c3r2*c2r3*value1)+(c3r3*c2r1*value2));
	sust2 = ((c1r1*value2*c3r3)+(c1r2*value3*c3r1)+(c1r3*value1*c3r2))-((c3r1*value2*c1r3)+(c3r2*value3*c1r1)+(c3r3*value1*c1r2));
	sust3 = ((c1r1*c2r2*value3)+(c1r2*c2r3*value1)+(c1r3*c2r1*value2))-((value1*c2r2*c1r3)+(value2*c2r3*c1r1)+(value3*c2r1*c1r2));
	int1 = sust1/base;
	int2 = sust2/base;
	int3 = sust3/base;
	$('#result1').attr('value', int1);
	$('#result2').attr('value', int2);
	$('#result3').attr('value', int3);
};
function lumenCalc () {
	var averageIluminance = $('#averageIluminance').val(),
		workPlane = $('#workPlane').val(),
		maintainceFactor = $('#maintainceFactor').val(),
		utilizationFactor = $('#utilizationFactor').val(),
		luminousFlux = $('#luminousFlux').val();
	if (luminousFlux==0 && averageIluminance>=1 && workPlane>=1 && maintainceFactor>=1 && utilizationFactor>=1) {
		luminousFlux = (averageIluminance*workPlane)/(maintainceFactor*utilizationFactor);
		$('#luminousFlux').attr('value', luminousFlux);
	}
	else if (averageIluminance==0 && luminousFlux>=1 && workPlane>=1 && maintainceFactor>=1 && utilizationFactor>=1) {
		averageIluminance = (luminousFlux*maintainceFactor*utilizationFactor)/(workPlane);
		$('#averageIluminance').attr('value', averageIluminance);
	}
	else if (workPlane==0 && averageIluminance>=1 && luminousFlux>=1 && maintainceFactor>=1 && utilizationFactor>=1) {
		workPlane = (luminousFlux*maintainceFactor*utilizationFactor)/(averageIluminance);
		$('#workPlane').attr('value', workPlane);
	}
	else if (maintainceFactor==0 && averageIluminance>=1 && workPlane>=1 && luminousFlux>=1 && utilizationFactor>=1) {
		maintainceFactor = (averageIluminance*workPlane)/(luminousFlux*utilizationFactor);
		$('#maintainceFactor').attr('value', maintainceFactor);
	}
	else if (utilizationFactor==0 && averageIluminance>=1 && workPlane>=1 && maintainceFactor>=1 && luminousFlux>=1) {
		utilizationFactor = (averageIluminance*workPlane)/(maintainceFactor*luminousFlux);
		$('#utilizationFactor').attr('value', utilizationFactor);
	}
	else {
		alert('Error, please let only one empty');
	}
};
function luminairesCalc () {
	var luminousFlux = $('#luminairesCalc #luminousFlux2').val(),
		flowLamp = $('#luminairesCalc #flowLamp').val(),
		lampsFixture = $('#luminairesCalc #lampsFixture').val(),
		luminaires = $('#luminairesCalc #luminaires').val();
	if (luminaires==0 && luminousFlux>0 && flowLamp>0 && lampsFixture>0) {
		luminaires = luminousFlux/(flowLamp*lampsFixture);
		$('#luminaires').attr('value', luminaires);
	}
	else if (luminousFlux==0 && luminaires>0 && flowLamp>0 && lampsFixture>0) {
		luminousFlux = luminaires*flowLamp*lampsFixture;
		$('#luminousFlux2').attr('value', luminousFlux);
	}
	else if (flowLamp==0 && luminaires>0 && luminousFlux>0 && lampsFixture>0) {
		flowLamp = luminousFlux/(luminaires*lampsFixture);
		$('#flowLamp').attr('value', flowLamp);
	}
	else if (lampsFixture==0 && luminaires>0 && flowLamp>0 && luminousFlux>0) {
		lampsFixture = luminousFlux/(flowLamp*luminaires);
		$('#lampsFixture').attr('value', lampsFixture);
	}
	else {
		alert('Error, please let only one empty');
	}
};