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
        Task<Book> GetBookById(int id);
        Task<int> AddBook(Book book);
        Task<int> UpdateBook(Book book);
        Task<int> UpdateBookHolder(Book book);
        Task<int> DeleteBook(int id);
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

        public async Task<Book> GetBookById(int id)
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
                var content = await _context.Books
                    .Include(b => b.Author)
                    .OrderBy(b => b.Title)
                    .ToListAsync();
                return content;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<int> AddBook(Book book)
        {
            try
            {
                _context.Add(book);
                return await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public async Task<int> UpdateBook(Book book)
        {
            try
            {
                _context.Update(book);
                return await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public async Task<int> UpdateBookHolder(Book book)
        {
            try
            {
                _context.Update(book);
                return await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public Task<int> DeleteBook(int id)
        {
            throw new NotImplementedException();
        }

        private bool EntityExists(int id)
        {
            return _context.Books.Any(e => e.Id == id);
        }
    }
}
