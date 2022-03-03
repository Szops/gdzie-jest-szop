using Microsoft.AspNetCore.Mvc;
using API.data.Interface;
using API.data.Model;
using API.data.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SzopAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PointController : ControllerBase
    {
        private IPoints points = new PointsRepository();

        // GET: api/<PointController>
        [HttpGet]
        public ActionResult<IEnumerable<Point>> GetAllMembers()
        {
            return points.GetAllPoints();
        }

        // GET api/<PointController>/5
        [HttpGet("{id}")]
        public ActionResult<Point> GetPointById(int id)
        {
            var point = points.GetPoint(id);
            if (point == null) {
                return NotFound();            
            }
            return point;
        }

        /*
        // POST api/<PointController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<PointController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PointController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        */
    }
}
