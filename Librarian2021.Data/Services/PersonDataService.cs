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
    public interface IPersonDataService
    {
        Task<List<Person>> GetPeople();
        Task<Person> GetPersonById(int id);
        Task<int> AddPerson(Person person);
        Task<int> UpdatePerson(Person person);
        Task<int> DeletePerson(int id);
    }
    public class PersonDataService : IPersonDataService
    {
        private readonly LibrarianDbContext _context;
        public PersonDataService(
            LibrarianDbContext context
            )
        {
            _context = context;
        }

        public async Task<Person> GetPersonById(int id)
        {
            if (!EntityExists(id))
            {
                return null;
            }

            try
            {
                var content = await _context.People
                    .FirstOrDefaultAsync(a => a.Id == id);
                return content;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<List<Person>> GetPeople()
        {
            try
            {
                var content = await _context.People
                    .Include(p => p.Books)
                    .ToListAsync();
                return content;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<int> AddPerson(Person person)
        {
            try
            {
                _context.Add(person);
                return await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public async Task<int> UpdatePerson(Person person)
        {
            try
            {
                _context.Update(person);
                return await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public Task<int> DeletePerson(int id)
        {
            throw new NotImplementedException();
        }

        private bool EntityExists(int id)
        {
            return _context.People.Any(e => e.Id == id);
        }
    }
}
