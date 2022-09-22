using CrudApi.Entities;
using Microsoft.EntityFrameworkCore;

namespace CrudApi.Data
{
    public class CrudDbContext : DbContext
    {

        public DbSet<Usuarios>? Usuarios { get; set; }
        public DbSet<Actividades>? Actividades { get; set; }
    



        public CrudDbContext(DbContextOptions<CrudDbContext> options) : base(options)
        {

        }

    }
}
