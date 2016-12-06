using Microsoft.EntityFrameworkCore;
using OpenIddict;
using Reasoning.Web.Models;

namespace Reasoning.Web.Data
{
    public class ApplicationDbContext : OpenIddictDbContext<AppUser>
    {
        public ApplicationDbContext(DbContextOptions options)
                : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}