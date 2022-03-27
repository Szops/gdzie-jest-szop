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
        public ActionResult<string> GetPoints(string url)
        {
            bool success = LoadPoints.DownloadFile(url);
            if (success)
            {
                return "OK";
            }
            else return "KO";
        }


    }
}
