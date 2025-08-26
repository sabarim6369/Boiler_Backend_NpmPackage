using Microsoft.AspNetCore.Mvc;
using UserAuthDemo.Models;
using UserAuthDemo.Services;

namespace UserAuthDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        // POST api/user/register
        [HttpPost("register")]
        public IActionResult Register([FromBody] User user)
        {
            var createdUser = _userService.Register(user);
            return Ok(new { message = "User registered successfully", user = createdUser });
        }

        // POST api/user/login
        [HttpPost("login")]
        public IActionResult Login([FromBody] User loginUser)
        {
            var user = _userService.Login(loginUser.Email, loginUser.Password);
            if (user == null)
                return Unauthorized(new { message = "Invalid credentials" });

            return Ok(new { message = "Login successful", user = user.Name });
        }

        // GET api/user/all
        [HttpGet("all")]
        public IActionResult GetAllUsers()
        {
            var users = _userService.GetAllUsers();
            return Ok(users);
        }

        // GET api/user/{id}
        [HttpGet("{id}")]
        public IActionResult GetUserById(int id)
        {
            var user = _userService.GetUserById(id);
            if (user == null) return NotFound();
            return Ok(user);
        }

        // PUT api/user/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateUser(int id, [FromBody] User updatedUser)
        {
            var user = _userService.UpdateUser(id, updatedUser);
            if (user == null) return NotFound();
            return Ok(user);
        }

        // DELETE api/user/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            var result = _userService.DeleteUser(id);
            if (!result) return NotFound();
            return NoContent();
        }
    }
}
