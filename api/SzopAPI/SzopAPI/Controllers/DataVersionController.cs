using Microsoft.AspNetCore.Mvc;
using SzopAPI.Data;


namespace SzopAPI.Controllers
{
    [Route("api/version")]
    [ApiController]
    public class DataVersionController : ControllerBase
    {

        // GET: api/<PointController>
        [HttpGet]
        public ActionResult<string> GetVersion()
        {
            var version = LoadPoints.GetVersion();
            return version;
        }

    }
}
