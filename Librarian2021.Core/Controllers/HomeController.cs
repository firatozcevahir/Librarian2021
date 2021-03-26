using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Librarian2021.Core.Controllers
{
    [Produces("application/json")]
    [Route("api/home")]
    [EnableCors("corsPolicy")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;
        // private readonly IApplicantDataService _service;
        public HomeController(
            ILogger<HomeController> logger
            //IApplicantDataService service
            )
        {
            // _service = service;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Healthy");
        }
    }
}
