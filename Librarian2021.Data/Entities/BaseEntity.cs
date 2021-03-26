using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Librarian2021.Data.Entities
{
    public class BaseEntity
    {
        [Required]
        [Key]
        [Column(Order = 1)]
        public Guid Id { get; set; }

        [Column(Order = 1010)]
        public DateTime CreatedAt { get; set; } = DateTime.Now;

        [Column(Order = 1030)]
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        [Column(Order = 1040)]
        public RecordState RecordState { get; set; } // = RecordState.Active;
    }

    public enum RecordState
    {
        Active = 1,

        Deleted = 2,

        Passive = 3
    }
}
