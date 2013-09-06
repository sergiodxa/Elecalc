function resParallel () {
	var value1 = parseFloat($('#sumRes #res1').val()),
		value2 = parseFloat($('#sumRes #res2').val());
	var multi = value1*value2;
	var sum = (value1)+(value2);
	var res = multi/sum;
	$('#sumRes #result').attr('value', res);
};
function resSeries () {
	var value1 = parseFloat($('#sumRes #res1').val()),
		value2 = parseFloat($('#sumRes #res2').val());
	var res = (value1)+(value2);
	$('#sumRes #result').attr('value', res);
};
function ohmResInt () {
	var voltage = parseFloat($('#Ohmcalcs #resvol').val()),
		resint = parseFloat($('#Ohmcalcs #resint').val());
	var res = voltage/resint;
	$('#Ohmcalcs #result').attr('value', res);
};
function ohmVol () {
	var resistance = parseFloat($('#Ohmcalcs #resvol').val()),
		intensity = parseFloat($('#Ohmcalcs #resint').val());
	var res = resistance*intensity;
	$('#Ohmcalcs #result').attr('value', res);
};
function maxwell () {
	var c1r1 = parseFloat($('#maxwell #col1row1').val()),
		c2r1 = parseFloat($('#maxwell #col2row1').val()),
		c3r1 = parseFloat($('#maxwell #col3row1').val()),
		c1r2 = parseFloat($('#maxwell #col1row2').val()),
		c2r2 = parseFloat($('#maxwell #col2row2').val()),
		c3r2 = parseFloat($('#maxwell #col3row2').val()),
		c1r3 = parseFloat($('#maxwell #col1row3').val()),
		c2r3 = parseFloat($('#maxwell #col2row3').val()),
		c3r3 = parseFloat($('#maxwell #col3row3').val()),
		value1 = parseFloat($('#maxwell #value1').val()),
		value2 = parseFloat($('#maxwell #value2').val()),
		value3 = parseFloat($('#maxwell #value3').val());
	base = ((c1r1*c2r2*c3r3)+(c1r2*c2r3*c3r1)+(c1r3*c2r1*c3r2))-((c3r1*c2r2*c1r3)+(c3r2*c2r3*c1r1)+(c3r3*c2r1*c1r2));
	sust1 = ((value1*c2r2*c3r3)+(value2*c2r3*c3r1)+(value3*c2r1*c3r2))-((c3r1*c2r2*value3)+(c3r2*c2r3*value1)+(c3r3*c2r1*value2));
	sust2 = ((c1r1*value2*c3r3)+(c1r2*value3*c3r1)+(c1r3*value1*c3r2))-((c3r1*value2*c1r3)+(c3r2*value3*c1r1)+(c3r3*value1*c1r2));
	sust3 = ((c1r1*c2r2*value3)+(c1r2*c2r3*value1)+(c1r3*c2r1*value2))-((value1*c2r2*c1r3)+(value2*c2r3*c1r1)+(value3*c2r1*c1r2));
	int1 = sust1/base;
	int2 = sust2/base;
	int3 = sust3/base;
	$('#maxwell #result1').attr('value', int1);
	$('#maxwell #result2').attr('value', int2);
	$('#maxwell #result3').attr('value', int3);
};
function lumenCalc () {
	var averageIluminance = parseFloat($('#lumenCalc #averageIluminance').val()),
		workPlane = parseFloat($('#lumenCalc #workPlane').val()),
		maintainceFactor = parseFloat($('#lumenCalc #maintainceFactor').val()),
		utilizationFactor = parseFloat($('#lumenCalc #utilizationFactor').val()),
		luminousFlux;
	luminousFlux = (averageIluminance*workPlane)/(maintainceFactor*utilizationFactor);
	$('#lumenCalc #luminousFlux').attr('value', luminousFlux);
	$('#luminairesCalc #luminousFlux2').attr('value', luminousFlux);
};
function luminairesCalc () {
	var luminousFlux2 = parseFloat($('#luminairesCalc #luminousFlux2').val());
		flowLamp = parseFloat($('#luminairesCalc #flowLamp').val());
		lampsFixture = parseFloat($('#luminairesCalc #lampsFixture').val());
		luminaires;
	luminaires = luminousFlux2/(flowLamp*lampsFixture);
	$('#luminairesCalc #luminaires').attr('value', luminaires);
};