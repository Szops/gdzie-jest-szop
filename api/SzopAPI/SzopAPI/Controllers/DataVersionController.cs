using Microsoft.AspNetCore.Mvc;
using SzopAPI.Data;
using SzopAPI.Data.Model;


namespace SzopAPI.Controllers
{
    [Route("api/version")]
    [ApiController]
    public class DataVersionController : ControllerBase
    {

        // GET: api/<PointController>
        [HttpGet]
        public ActionResult<DataVersion> GetVersion()
        {
            var versionString = LoadPoints.GetVersion();
            DataVersion ver = new DataVersion();
            ver.version = versionString;
            return ver;
        }

    }
}
