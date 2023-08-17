using Microsoft.AspNetCore.Mvc;
using LoginLocker.Data.Models;
using LoginLocker.Data;
using System.Threading.Tasks;

namespace LoginLocker.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        
        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] User user)
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

        //TEST CONRTOLLER METHOD TO GAUGE COMMUNICATION WITH FRONT-END
        [HttpGet("Test")]
        public IActionResult Test()
        {
            return Ok("GET request test successful.");
        }


    }
}