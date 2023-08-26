using LoginLocker.Data.Models;
using Microsoft.EntityFrameworkCore;
using LoginLocker.Controllers;


namespace LoginLocker.Data
{
    public class ApplicationDbContext : DbContext
    {
        //User Table
        public DbSet<User> Users { get; set; }

        //User's Logins Table
        public DbSet<Login> Logins { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure your entity mappings and other configurations
            // For example:

            //Users
            modelBuilder.Entity<User>().Property(u => u.UserID).ValueGeneratedOnAdd();
            modelBuilder.Entity<User>().HasKey(u => u.UserID);

            //Logins
            modelBuilder.Entity<Login>().Property(l => l.LoginID).ValueGeneratedOnAdd();
            modelBuilder.Entity<Login>().HasKey(l => l.LoginID);
            
        }

    }
}
