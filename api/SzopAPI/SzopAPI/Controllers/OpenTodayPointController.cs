using Microsoft.AspNetCore.Mvc;
using SzopAPI.Data;
using SzopAPI.Data.Interface;
using SzopAPI.Data.Model;

namespace SzopAPI.Controllers
{
    [Route("api/open-point")]
    [ApiController]
    public class OpenTodayPointController : ControllerBase
    {
        private IPoints points = new PointsRepository();

        // GET: api/<PointController>
        [HttpGet]
        public ActionResult<IEnumerable<Point>> GetAllOpenPoints()
        {

            foreach (Point point in points.GetAllPoints())
            {
                if (TimeHelper.IsPointOpenToday(point.OpeningDateTimes))
                {
                    point.OpenSoon = true;
                }
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

            if (TimeHelper.IsPointOpenToday(point.OpeningDateTimes))
            {
                point.OpenSoon = true;
            }

            return point;
        }


        // POST api/<PointController>
        [HttpPost]
        public ActionResult<IEnumerable<Point>> GetNearestPoints(double latitude, double longitude, double maxDistance)
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
                    if (TimeHelper.IsPointOpenToday(point.OpeningDateTimes))
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
