using Microsoft.AspNetCore.Mvc;
using SzopAPI.Data;
using SzopAPI.Data.Interface;
using SzopAPI.Data.Model;
using SzopAPI.Attributes;
using System.ComponentModel.DataAnnotations;

namespace SzopAPI.Controllers
{

    [Route("api/get-points")]
    [ApiKey]
    [ApiController]
    public class GetPointsController : ControllerBase
    {
        private IPoints points = new PointsRepository();



        // POST api/<PointController>
        [HttpPost]
        public ActionResult<string> GetPoints([Required] string url, [FromHeader(Name = "ApiKey")][Required] string apiKey)
        {
            string message = LoadPoints.DownloadFile(url);

            return message;
        }


    }
}
