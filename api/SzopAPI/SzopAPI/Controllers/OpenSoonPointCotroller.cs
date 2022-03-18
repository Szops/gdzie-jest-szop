using Microsoft.AspNetCore.Mvc;
using SzopAPI.Data;
using SzopAPI.Data.Interface;
using SzopAPI.Data.Model;

namespace SzopAPI.Controllers
{
    [Route("api/open-soon-point")]
    [ApiController]
    public class OpenSoonPointController : ControllerBase
    {
        private IPoints points = new PointsRepository();

        // GET: api/<PointController>
        [HttpGet]
        public ActionResult<IEnumerable<Point>> GetAllOpenPoints()
        {
            List<Point> returnPoints = new List<Point>();

            foreach (Point point in points.GetAllPoints())
            {
                if (TimeHelper.IsPointOpenSoon(point.OpeningDateTimes, 48))
                {
                    point.OpenSoon = true;
                }

                point.OpeningDateTimes = TimeHelper.CutDatesToEarliest(point.OpeningDateTimes, 5);
            }
            return points.GetAllPoints();
        }

        // GET api/<PointController>/5
        [HttpGet("{id}")]
        public ActionResult<Point> GetPointById(int id)
        {
            var point = points.GetPoint(id);
            if (point == null)
            {
                return NotFound();
            }

            if (TimeHelper.IsPointOpenSoon(point.OpeningDateTimes, 48))
            {
                point.OpenSoon = true;
            }
            point.OpeningDateTimes = TimeHelper.CutDatesToEarliest(point.OpeningDateTimes, 5);
            return point;
        }


        // POST api/<PointController>
        [HttpPost]
        public ActionResult<IEnumerable<Point>> GetNearestPoints(double latitude, double longitude, double maxDistance, int numberOfHours)
        {
            if (maxDistance > 0)
            {
                var allPoints = points.GetAllPoints();
                var nearestPoints = new List<Point>();

                foreach (var point in points.GetAllPoints())
                {
                    if (DistanceHelper.DistanceTo(latitude, longitude, point.Latitude, point.Longitude) <= maxDistance)
                    {
                        nearestPoints.Add(point);

                    }
                }


                foreach (Point point in nearestPoints)
                {
                    point.OpeningDateTimes = TimeHelper.CutDatesToEarliest(point.OpeningDateTimes, 5);
                    if (TimeHelper.IsPointOpenSoon(point.OpeningDateTimes, numberOfHours))
                    {
                        point.OpenSoon = true;
                    }
                }

                return nearestPoints;
            }
            else
            {
                return BadRequest();
            }
        }

    }
}
