using System;

namespace SzopAPI.Data.Model
{
    public class Point
    {
        public int PointId { get; set; }
        public string Street { get; set; }
        public string Sector { get; set; }
        public string Estate { get; set; }
        public List<DateTime> OpeningDateTimes { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string Description { get; set; }
        public bool OpenSoon { get; set; } = false;



    }
}
