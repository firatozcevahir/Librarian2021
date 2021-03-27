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
    [Route("api/book")]
    [EnableCors("corsPolicy")]
    public class BookController : ControllerBase
    {
        private readonly ILogger<BookController> _logger;
        private readonly IBookDataService _service;
        public BookController(
            ILogger<BookController> logger,
            IBookDataService service
            )
        {
            _service = service;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> GetBooks()
        {
            var result = await _service.GetBooks();

            if (result == null)
            {
                _logger.LogError($"Err: /api/book/GetBooks");
                return BadRequest();
            }

            return Ok(SerializerHelper.JsonSerialize(result));
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetBookById(int id)
        {
            var result = await _service.GetBookById(id);

            if (result == null)
            {
                _logger.LogError($"Err: /api/book/GetBookById");
                return BadRequest();
            }

            return Ok(SerializerHelper.JsonSerialize(result));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Book book)
        {
            if (ModelState.IsValid)
            {
                var result = await _service.AddBook(book);
                if (result > 0)
                {
                    return Ok(result);
                }
                else
                {
                    _logger.LogError($"Err: /api/book/Post");
                    return BadRequest();
                }
            }
            else
            {
                //invalid model state
                _logger.LogError($"Err: /api/book/Post - Validation Error");
                return BadRequest();
            }
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] Book book)
        {

            if (ModelState.IsValid)
            {
                var result = await _service.UpdateBook(book);
                if (result > 0)
                {
                    return Ok(result);
                }
                else
                {
                    _logger.LogError($"Err: /api/book/Put");
                    return BadRequest();
                }
            }
            else
            {
                //invalid model state
                _logger.LogError($"Err: /api/book/Put - Validation Error");
                return BadRequest();
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _service.DeleteBook(id);
            if (result > 0)
            {
                return Ok(result);
            }
            else
            {
                _logger.LogError($"Err: /api/book/Delete");
                return BadRequest();
            }
        }
    }
}
