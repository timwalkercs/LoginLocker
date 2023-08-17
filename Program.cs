using LoginLocker.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MySql.EntityFrameworkCore;

namespace LoginLocker
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //WebApp Builder
            var builder = WebApplication.CreateBuilder(args);

            //Add Controllers
            builder.Services.AddControllersWithViews();

            //Add DB Context
            builder.Services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseMySQL(builder.Configuration.GetConnectionString("DefaultConnection"));
            });

            //Build
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller}/{action=Index}/{id?}");

            app.MapFallbackToFile("index.html");

            app.Run();
        }
    }
}