using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace LoginLocker.Data.Models
{
    [Index(nameof(Username), IsUnique = true)]
    public class User
    {

        public int UserID { get; set; }

        [Required]
        public string Username { get; set; } //Username to Log on to site

        [Required]
        public string Masterpass { get; set; } //Account password used to access their stored logins

    }
}
