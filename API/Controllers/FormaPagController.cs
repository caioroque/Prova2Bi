using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/formapag")]
    public class FormaPagController : ControllerBase
    {
        private readonly DataContext _context;
        public FormaPagController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] FormaPag formaPag)
        {
            _context.FormaPags.Add(formaPag);
            _context.SaveChanges();
            return Created("", formaPag);
        }

        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.FormaPags.ToList());

    }
}