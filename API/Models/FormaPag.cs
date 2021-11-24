using System;
using System.Collections.Generic;

namespace API.Models
{
    public class FormaPag
    {
        public FormaPag() => CriadoEm = DateTime.Now;
        public int Id { get; set; }
        public string Tipo { get; set; }
        public string Vezes { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}