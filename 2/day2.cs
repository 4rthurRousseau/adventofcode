using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace AdventOfCode
{
    public class Day2
    {
        public static void Main(string[] args)
        {
            const string INPUT = "INPUT";
            int p, r;
            p = r = 0;
            INPUT.Split(' ').ToList().ForEach(l => { p += CalculateWrappingPaperSize(l); r += CalculateRibbonSize(l);});
            Console.WriteLine(string.Format("Paper : {0}\nRibbon : {1}", p, r));
        }
        
        public static int CalculateWrappingPaperSize(string line){
            int[] v = line.Split('x').Select(i => Convert.ToInt32(i)).ToArray();
            return 2*v[0]*v[1] + 2*v[1]*v[2] + 2*v[2]*v[0] + Math.Min(Math.Min(2*v[0]*v[1],2*v[1]*v[2]),2*v[2]*v[0]) / 2; // a1 + a2 + a3 + Math.Min(a1,a2,a3)
        }
        
        public static int CalculateRibbonSize(string line){
            int[] v = line.Split('x').Select(i => Convert.ToInt32(i)).ToArray();
            return 2 * v[0] + 2 * v[1] + 2 * v[2] - 2 * Math.Max(Math.Max(v[0],v[1]),v[2]) + v[0] * v[1] * v[2]; // 2 * l + 2 * w + 2 * h - 2 * Math.max(l,w,h) + l * w * h
        }
        
    }
}