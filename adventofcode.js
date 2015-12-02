function day1() {
	var input = document.getElementsByTagName('pre')[0].innerHTML,  floor = 0,  basement = -1;
	for (var i = 0; i < input.length; i++)
	{
		floor += input[i] == '(' ? 1 : -1;
		basement = floor >= 0 && basement > -1 ? basement : i;
	}
	console.log('Floor : ' + floor + '\nBasement : ' + basement);
}


function day2() {
	var input = document.getElementsByTagName('pre')[0].innerHTML,  ls = input.split('\n'), s = 0, r = 0;
	// Didn't used a forEach because of the 1001st line
	for (var i = 0; i < ls.length; i++) {
		if (ls[i] == "") break;
		v = ls[i].split('x'), l = v[0], w = v[1], h = v[2];
		a1 = 2*l*w, a2 = 2*w*h, a3 = 2*h*l;
		s += a1 + a2 + a3 + Math.min(a1,a2,a3) / 2;
		r += 2 * l + 2 * w + 2 * h - 2 * Math.max(l,w,h) + l * w * h;
	}
	console.log('Wrapping paper : ' + s + '\nRibbons : ' + r);
}