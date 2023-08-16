using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace LoginLocker.Data.Models
{
    public class User
    {
        public int UserID { get; set; }
        public string Username { get; set; } //Username to Log on to site
        public string Masterpass { get; set; } //Account password used to access their stored logins

        public ICollection<Login> Logins { get; set; }
    }
}
