using LoginLocker.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using MySql.EntityFrameworkCore;
using System.Text;

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

            // Add JWT Authentication
            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.RequireHttpsMetadata = false; // For development purposes only
                    options.SaveToken = true;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("secret-key")),
                        ValidateIssuer = false, // You can change this based on your requirements
                        ValidateAudience = false, // You can change this based on your requirements
                    };
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

            // Use authentication and authorization
            app.UseAuthentication();
            app.UseAuthorization();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller}/{action=Index}/{id?}");

            app.MapFallbackToFile("index.html");

            app.Run();
        }
    }
}