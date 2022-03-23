using Microsoft.AspNetCore.Mvc;
using SzopAPI.Data;
using SzopAPI.Data.Interface;
using SzopAPI.Data.Model;

namespace SzopAPI.Controllers
{
    [Route("api/get-points")]
    [ApiController]
    public class GetPointsController : ControllerBase
    {
        private IPoints points = new PointsRepository();



        // POST api/<PointController>
        [HttpPost]
        public ActionResult<List<Point>> GetPoints(string url)
        {
            LoadPoints.DownloadFile(url);

            string fileName = url;
            int lastIndex = fileName.LastIndexOf('/');
            int length = fileName.Length - lastIndex;

            fileName = fileName.Substring(fileName.Length - length);

            List<Point> points = LoadPoints.LoadPointFromXLSX(fileName);
            return points;
        }


    }
}
