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
        Task<Person> GetPersonById(Guid id);
        Task<int> AddPerson(Person person);
        Task<int> UpdatePerson(Person person);
        Task<int> DeletePerson(Guid id);
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

        public async Task<Person> GetPersonById(Guid id)
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
                var content = await _context.People.ToListAsync();
                return content;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public Task<int> AddPerson(Person person)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdatePerson(Person person)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeletePerson(Guid id)
        {
            throw new NotImplementedException();
        }

        private bool EntityExists(Guid id)
        {
            return _context.People.Any(e => e.Id == id);
        }
    }
}
