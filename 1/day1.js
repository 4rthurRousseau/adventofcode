function day1() {
    var input = document.getElementsByTagName('pre')[0].innerHTML,  floor = 0,  basement = -1;
    for (var i = 0; i < input.length; i++)
    {
        floor += input[i] == '(' ? 1 : -1;
        basement = floor >= 0 && basement > -1 ? basement : i;
    }
    console.log('Floor : ' + floor + '\nBasement : ' + basement);
}
day1();