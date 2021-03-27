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
    [Route("api/author")]
    [EnableCors("corsPolicy")]
    public class AuthorController : ControllerBase
    {
        private readonly ILogger<AuthorController> _logger;
        private readonly IAuthorDataService _service;
        public AuthorController(
            ILogger<AuthorController> logger,
            IAuthorDataService service
            )
        {
            _service = service;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> GetAuthors()
        {
            var result = await _service.GetAuthors();

            if (result == null)
            {
                _logger.LogError($"Err: /api/author/GetAuthors");
                return BadRequest();
            }

            return Ok(SerializerHelper.JsonSerialize(result));
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetAuthorById(int id)
        {
            var result = await _service.GetAuthorById(id);

            if (result == null)
            {
                _logger.LogError($"Err: /api/author/GetAuthorById");
                return BadRequest();
            }

            return Ok(SerializerHelper.JsonSerialize(result));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Author author)
        {
            if (ModelState.IsValid)
            {
                var result = await _service.AddAuthor(author);
                if (result > 0)
                {
                    return Ok(result);
                }
                else
                {
                    _logger.LogError($"Err: /api/author/Post");
                    return BadRequest();
                }
            }
            else
            {
                //invalid model state
                _logger.LogError($"Err: /api/author/Post - Validation Error");
                return BadRequest();
            }
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] Author author)
        {

            if (ModelState.IsValid)
            {
                var result = await _service.UpdateAuthor(author);
                if (result > 0)
                {
                    return Ok(result);
                }
                else
                {
                    _logger.LogError($"Err: /api/author/Put");
                    return BadRequest();
                }
            }
            else
            {
                //invalid model state
                _logger.LogError($"Err: /api/author/Put - Validation Error");
                return BadRequest();
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _service.DeleteAuthor(id);
            if (result > 0)
            {
                return Ok(result);
            }
            else
            {
                _logger.LogError($"Err: /api/author/Delete");
                return BadRequest();
            }
        }
    }
}
