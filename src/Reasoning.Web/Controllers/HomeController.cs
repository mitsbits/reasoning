using Microsoft.AspNetCore.Mvc;

namespace Reasoning.Web.Controllers
{
    public class HomeController :Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}