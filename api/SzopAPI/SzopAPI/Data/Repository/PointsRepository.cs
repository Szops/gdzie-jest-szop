using System.Collections.Generic;
using System.Linq;
using SzopAPI.Data.Interface;
using SzopAPI.Data.Model;

namespace SzopAPI.Data
{
    public class PointsRepository : IPoints
    {
        List<Point> points = new List<Point>
        {
            new Point{PointId=1, Street="Czajkowskiego 39 A", Number = 2,Latitude=51.14011389588952, Longitude = 17.066555586778556, OpeningHour = new TimeSpan(13,20,00) , ClosingHour = new TimeSpan(13,20,00), Date = DateTime.Today},
            new Point{PointId=2, Street="Rynek", Number = 3, Latitude = 51.1394393, Longitude = 17.0226578, OpeningHour = new TimeSpan(13,20,00) , ClosingHour = new TimeSpan(13,20,00), Date = DateTime.Today},
        };
        public List<Point> GetAllPoints()
        {
            return points;
        }

        public Point GetPoint(int id)
        {
            return points.FirstOrDefault(x => x.PointId == id);
        }
    }
}