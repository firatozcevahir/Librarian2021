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
    public interface IAuthorDataService
    {
        Task<List<Author>> GetAuthors();
        Task<List<Author>> GetAuthorsWithBooks();
        Task<Author> GetAuthorById(int id);
        Task<int> AddAuthor(Author author);
        Task<int> UpdateAuthor(Author author);
        Task<int> DeleteAuthor(int id);
    }
    public class AuthorDataService : IAuthorDataService
    {
        private readonly LibrarianDbContext _context;
        public AuthorDataService(
            LibrarianDbContext context
            )
        {
            _context = context;
        }

        public async Task<Author> GetAuthorById(int id)
        {
            if (!EntityExists(id))
            {
                return null;
            }

            try
            {
                var content = await _context.Authors
                    .Include(a => a.Books)
                    .FirstOrDefaultAsync(a => a.Id == id);
                return content;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<List<Author>> GetAuthors()
        {
            try
            {
                var content = await _context.Authors
                    .Include(a => a.Books)
                    .OrderBy(a => a.Name)
                    .ToListAsync();
                return content;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<List<Author>> GetAuthorsWithBooks()
        {
            try
            {
                var content = await _context.Authors
                    .Include(a => a.Books)
                    .ToListAsync();
                return content;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<int> AddAuthor(Author author)
        {
            try
            {
                _context.Add(author);
                return await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {

                throw;
            }
        }
        public async Task<int> UpdateAuthor(Author author)
        {
            try
            {
                _context.Update(author);
                return await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public Task<int> DeleteAuthor(int id)
        {
            throw new NotImplementedException();
        }

        private bool EntityExists(int id)
        {
            return _context.Authors.Any(e => e.Id == id);
        }
    }
}
