using Microsoft.AspNetCore.Mvc;

namespace AzureSecureBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HelloController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("✅ Backend is working!");
        }
    }
}
