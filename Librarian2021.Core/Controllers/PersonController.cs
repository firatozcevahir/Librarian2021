using Librarian2021.Data.Entities;
using Librarian2021.Data.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Librarian2021.Core.Helpers;

namespace Librarian2021.Core.Controllers
{
    [Produces("application/json")]
    [Route("api/person")]
    [EnableCors("corsPolicy")]
    public class PersonController : ControllerBase
    {
        private readonly ILogger<PersonController> _logger;
        private readonly IPersonDataService _service;
        public PersonController(
            ILogger<PersonController> logger,
            IPersonDataService service
            )
        {
            _service = service;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> GetPeople()
        {
            var result = await _service.GetPeople();

            if (result == null)
            {
                _logger.LogError($"Err: /api/book/GetBooks");
                return BadRequest();
            }

            return Ok(SerializerHelper.JsonSerialize(result));
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetPersonById(Guid id)
        {
            var result = await _service.GetPersonById(id);

            if (result == null)
            {
                _logger.LogError($"Err: /api/person/GetPersonById");
                return BadRequest();
            }

            return Ok(SerializerHelper.JsonSerialize(result));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Person person)
        {
            if (ModelState.IsValid)
            {
                var result = await _service.AddPerson(person);
                if (result > 0)
                {
                    return Ok(result);
                }
                else
                {
                    _logger.LogError($"Err: /api/person/Post");
                    return BadRequest();
                }
            }
            else
            {
                //invalid model state
                _logger.LogError($"Err: /api/person/Post - Validation Error");
                return BadRequest();
            }
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] Person person)
        {

            if (ModelState.IsValid)
            {
                var result = await _service.UpdatePerson(person);
                if (result > 0)
                {
                    return Ok(result);
                }
                else
                {
                    _logger.LogError($"Err: /api/person/Put");
                    return BadRequest();
                }
            }
            else
            {
                //invalid model state
                _logger.LogError($"Err: /api/person/Put - Validation Error");
                return BadRequest();
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var result = await _service.DeletePerson(id);
            if (result > 0)
            {
                return Ok(result);
            }
            else
            {
                _logger.LogError($"Err: /api/person/Delete");
                return BadRequest();
            }
        }
    }
}
