using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstASPNETWebApp.Models
{
    public class CalculatorModel
    {
        [Required]
        [Range(0,100)]
        public string Assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public string GroupProject { get; set; }
        [Required]
        [Range(0, 100)]
        public string Quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public string Exams { get; set; }
        [Required]
        [Range(0, 100)]
        public string Intex { get; set; }

    }
}
