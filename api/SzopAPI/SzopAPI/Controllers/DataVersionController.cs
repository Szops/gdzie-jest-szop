using Microsoft.AspNetCore.Mvc;
using SzopAPI.Data;
using SzopAPI.Data.Interface;
using SzopAPI.Data.Model;

namespace SzopAPI.Controllers
{
    [Route("api/version")]
    [ApiController]
    public class DataVersionController : ControllerBase
    {
       
        // GET: api/<PointController>
        [HttpGet]
        public ActionResult<string> GetAllPoints()
        {
            return "OK";
        }

    }
}
