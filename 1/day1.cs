using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace AdventOfCode
{
	public class Day1
	{
		public static void Main(string[] args)
		{
			const string INPUT = "INPUT";
			int floor = 0;
			int basement = 0;
			int i = -1;
			input.ToList().ForEach(x => { i++; floor += x == '(' ? 1 : -1; basement = floor >= 0 && basement > -1 ? basement : i; });
			Console.WriteLine(string.Format("Floor : {0}\nBasement : {1}", floor, basement));
		}
		
	}
}