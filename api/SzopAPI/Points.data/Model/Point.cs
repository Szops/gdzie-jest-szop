using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.data.Model
{
    public class Point
    {
        public int PointId { get; set; }
        public string Street { get; set; }
        public int Number { get; set; }
        public TimeSpan OpeningHour { get; set; }
        public TimeSpan ClosingHour { get; set; }
        public DateTime Date { get; set; }

    }
}
