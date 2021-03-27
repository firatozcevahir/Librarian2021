using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Librarian2021.Data.Entities
{
    public class Book : BaseEntity
    {
        [Required]
        [Column(TypeName = "varchar")]
        [MaxLength(64)]
        public string Title { get; set; }

        [Required]
        public DateTime PublishYear { get; set; }

        [Required]
        [Column(TypeName = "varchar")]
        [MaxLength(40)]
        public string Genre { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }

        [NotMapped]
        public bool IsOccupied
        {
            get
            {
                return PersonId != null;
            }
        }

        public int AuthorId { get; set; }

        [ForeignKey(nameof(AuthorId))]
        public virtual Author Author { get; set; }

        public int? PersonId { get; set; }

        [ForeignKey(nameof(PersonId))]
        public virtual Person Person { get; set; }
    }
}
