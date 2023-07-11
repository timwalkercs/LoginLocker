namespace LoginLocker.Data.Models
{
    public class Login
    {
        public int LoginID { get; set; }
        public string Title { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Phone { get; set; }
        public string Password { get; set; }

        //Foreign Key
        public int UserID { get; set; }
        public User User { get; set; } // Navigation property representing the relationship with User entity
    }
}
