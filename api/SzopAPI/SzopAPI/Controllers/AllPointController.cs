using Microsoft.AspNetCore.Mvc;
using SzopAPI.Data;
using SzopAPI.Data.Interface;
using SzopAPI.Data.Model;

namespace SzopAPI.Controllers
{
    [Route("api/all-point")]
    [ApiController]
    public class AllPointController : ControllerBase
    {
        private IPoints points = new PointsRepository();

        // GET: api/<PointController>
        [HttpGet]
        public ActionResult<IEnumerable<Point>> GetAllPoints()
        {
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

                if (nearestPoints.Count == 0)
                {
                    return NotFound();
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
