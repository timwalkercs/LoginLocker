﻿using Microsoft.AspNetCore.Mvc;
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

        //Register New Users
        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest("User data is missing.");
            }

            var userExists = _context.Users.Any(u => u.Username == user.Username);
            if (userExists)
            {
                return Ok(new { message = "This username already exists..." });
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Users.Add(user);
                    await _context.SaveChangesAsync();
                    return Ok(new { message = "User registered successfully! Sign in." });
                }
                catch (Exception ex)
                {
                    return StatusCode(500, "An error occurred while registering the user.");
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        //Sign In existing Users
        [HttpPost]
        [Route("SignIn")]
        public async Task<IActionResult> SignIn([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest("User data is missing.");
            }

            //if ModelState is valid
            if (ModelState.IsValid)
            {
                try
                {
                    //Check if Username Password combo is valid
                    if (VerifyLogin(user.Username, user.Masterpass))
                    {
                        return Ok(new { message = "This username password combo does exist!" });
                    }
                    else 
                    {
                        return Ok(new { message = "This username password combination does not exist, try again." });
                    }

                }
                catch (Exception ex)
                {
                    return StatusCode(500, "An error occurred while signing in.");
                }
            }
            else
            {
                // Return validation errors
                return BadRequest(ModelState);
            }         
        }

        private bool VerifyLogin(string enteredUser, string enteredPass) {
            var loginExists = _context.Users.Any(u => u.Username == enteredUser && u.Masterpass == enteredPass);
            if (loginExists) return true; else return false;
        }

    }
}