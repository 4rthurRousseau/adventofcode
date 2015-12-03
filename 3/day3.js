function day3() {
	function calculate(s) {
		var input = document.getElementsByTagName('pre')[0].textContent, locations = {}, h = {'0,0': 0};

		for (var i=0; i < s; i++) {
			locations[i] = { x: 0, y: 0 };
			h['0:0']++;
		}
		for (var i=0; i<input.length; i++) {
			switch (input[i]) {
				case '^':
					locations[i % s].y++;
				break;
				case '>':
					locations[i % s].x++;
				break;
				case 'v':
					locations[i % s].y--;
				break;
				case '<':
					locations[i % s].x--;
				break;
			}
			var key = locations[i % s].x+','+locations[i % s].y;
			h[key] ? h[key]++ : h[key] = 1;
		}
		return Object.keys(h).length;
	}
	console.log('Santa : ' + calculate(1) + '\nSanta and Robosanta : ' + calculate(2));
}
day3();