using API.data.Interface;
using API.data.Model;
using System.Collections.Generic;
using System.Linq;

namespace API.data.Repository
{
    public class PointsRepository : IPoints
    {
        List<Point> points = new List<Point>
        {
            new Point{PointId=1, Street="Grunwald", Number = 2, OpeningHour = new TimeSpan(13,20,00) , ClosingHour = new TimeSpan(13,20,00), Date = DateTime.Today},
            new Point{PointId=1, Street="Rynek", Number = 3, OpeningHour = new TimeSpan(13,20,00) , ClosingHour = new TimeSpan(13,20,00), Date = DateTime.Today},
        };
        public List<Point> GetAllPoints()
        {
            return points;
        }

        public Point GetPoint(int id)
        {
            return points.FirstOrDefault(x => x.PointId  == id);
        }
    }
}