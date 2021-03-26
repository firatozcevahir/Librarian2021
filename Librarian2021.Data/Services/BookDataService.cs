using Librarian2021.Data.Contexts;
using Librarian2021.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Librarian2021.Data.Services
{
    public interface IBookDataService
    {
        Task<List<Book>> GetBooks();
        Task<Book> GetBookById(Guid id);
        Task<int> AddBook(Book book);
        Task<int> UpdateBook(Book book);
        Task<int> DeleteBook(Guid id);
    }
    public class BookDataService : IBookDataService
    {
        private readonly LibrarianDbContext _context;
        public BookDataService(
            LibrarianDbContext context
            )
        {
            _context = context;
        }

        public async Task<Book> GetBookById(Guid id)
        {
            if (!EntityExists(id))
            {
                return null;
            }

            try
            {
                var content = await _context.Books
                    .FirstOrDefaultAsync(a => a.Id == id);
                return content;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<List<Book>> GetBooks()
        {
            try
            {
                var content = await _context.Books.ToListAsync();
                return content;
            }
            catch (Exception ex)
            {
                throw;
            }
        }       

        public Task<int> AddBook(Book book)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateBook(Book book)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteBook(Guid id)
        {
            throw new NotImplementedException();
        }

        private bool EntityExists(Guid id)
        {
            return _context.Books.Any(e => e.Id == id);
        }
    }
}
