using Librarian2021.Data.Contexts;
using Librarian2021.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Librarian2021.Data.Services
{
    public class DbInitializer
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            try
            {
                using (var context = serviceProvider.GetRequiredService<LibrarianDbContext>())
                {
                    context.Database.Migrate();
                }
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException(ex.Message.ToString());
            }
        }
        public static bool SeedData(IServiceProvider serviceProvider)
        {
            using (var context = new LibrarianDbContext(
           serviceProvider.GetRequiredService<DbContextOptions<LibrarianDbContext>>()))
            {
                if (context.Authors.Any() || context.Books.Any() || context.People.Any())
                {
                    return true;   // has data already
                }

                var dataList = new List<Author>
                {
                    new Author {
                        Name = "Author Name 1",
                        LastName = "Author Last Name 1",
                        Books = new List<Book>
                        {
                            new Book {
                                Title = "Test 1 Book",
                                Genre = "Science",
                                PublishYear = DateTime.Now,
                                Person = new Person
                                {
                                    Name = "Fırat",
                                    LastName = "Özcevahir",
                                    PhoneNumber = "123123123",
                                    Address = "Istanbul"
                                },
                                StartDate = DateTime.Now,
                                EndDate = DateTime.Now.AddDays(10)
                            },

                            new Book { Title = "Test 2 Book", Genre = "Horror", PublishYear = DateTime.Now },
                            new Book { Title = "Test 3 Book", Genre = "Adventure", PublishYear = DateTime.Now },
                        }
                    },
                    new Author { Name = "Author Name 2", LastName = "Author Last Name 2" },
                    new Author { Name = "Author Name 3", LastName = "Author Last Name 3" }
                };

                context.AddRange(dataList);
                return context.SaveChanges() > 0; //successfully added entities
            }
        }
    }
}
