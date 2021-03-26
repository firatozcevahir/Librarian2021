using Librarian2021.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Librarian2021.Data.Contexts
{
    public class LibrarianDbContext : DbContext
    {
        public LibrarianDbContext()
        {

        }
        public LibrarianDbContext(DbContextOptions<LibrarianDbContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            //if (!optionsBuilder.IsConfigured)
            //{
            //    optionsBuilder.UseSqlite("Data Source=librariandb2021.db");
            //}

        }

        #region Entities
        public virtual DbSet<Author> Authors { get; set; }
        public virtual DbSet<Book> Books { get; set; }
        public virtual DbSet<Person> People { get; set; }
        #endregion

        #region SaveChanges
        public override int SaveChanges()
        {
            AuditEntities();

            return base.SaveChanges();
        }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            AuditEntities();

            return await base.SaveChangesAsync(cancellationToken);
        }

        private void AuditEntities()
        {
            var now = DateTime.Now;

            foreach (
                    var entry in ChangeTracker
                    .Entries<BaseEntity>()
                    .Where(p =>

                    p.State == EntityState.Added ||
                    p.State == EntityState.Deleted ||
                    p.State == EntityState.Modified
                    )
                    .ToArray()
                )
            {
                var entity = entry.Entity;

                switch (entry.State)
                {
                    case EntityState.Added:
                        {
                            entity.CreatedAt = now;

                            entity.UpdatedAt = now;
                            entity.RecordState = RecordState.Active;
                            break;
                        }
                    case EntityState.Modified:
                        {
                            entity.UpdatedAt = now;
                            break;
                        }
                    case EntityState.Deleted:
                        {
                            entry.State = EntityState.Modified;

                            entity.RecordState = RecordState.Deleted;
                            entity.UpdatedAt = now;

                            break;
                        }

                }
            }
        }

        #endregion
    }

}
