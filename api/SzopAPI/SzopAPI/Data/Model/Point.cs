namespace SzopAPI.Data.Model
{
    public class Point
    {
        public int PointId { get; set; }
        public string Street { get; set; }
        public int Number { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public List<TimeSpan> OpeningDateTimes { get; set; }

    }
}
