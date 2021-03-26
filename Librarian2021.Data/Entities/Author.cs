using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Librarian2021.Data.Entities
{
    public class Author: BaseEntity
    {
        [Required]
        [Column(TypeName = "varchar")]
        [MaxLength(64)]
        public string Name { get; set; }
        [Required]
        [Column(TypeName = "varchar")]
        [MaxLength(64)]
        public string LastName { get; set; }
        public virtual ICollection<Book> Books { get; set; }
    }
}
