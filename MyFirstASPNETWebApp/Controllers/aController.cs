using Microsoft.AspNetCore.Mvc;
using MyFirstASPNETWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstASPNETWebApp.Controllers
{
    public class aController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Calculator ()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Calculator(CalculatorModel model)
        {
            return View();
        }
    }
}
