using Microsoft.AspNetCore.Mvc;
using LoginLocker.Data.Models;
using LoginLocker.Data;
using System.Threading.Tasks;

namespace LoginLocker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        //[HttpPost("RegisterUser")]
        [HttpPost]
        public async Task<IActionResult> RegisterUser([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest("User data is missing.");
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Users.Add(user);
                    await _context.SaveChangesAsync();

                    return Ok(new { message = "User registered successfully" });
                }
                catch (Exception ex)
                {
                    // Log the exception for debugging
                    // You can also provide a more user-friendly error message
                    return StatusCode(500, "An error occurred while registering the user.");
                }
            }
            else
            {
                // Return validation errors
                return BadRequest(ModelState);
            }
        }
    }
}