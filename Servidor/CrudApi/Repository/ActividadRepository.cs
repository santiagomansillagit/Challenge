using CrudApi.Data;
using CrudApi.Entities;
using CrudApi.Repository.IRepository;

namespace CrudApi.Repository
{
    public class ActividadRepository : IActividad
    {

        private readonly CrudDbContext _bd;

        public ActividadRepository(CrudDbContext bd)
        {
            _bd = bd;
        }
        public bool CreateActividades(Actividades actividad)
        {
            _bd.Actividades.Add(actividad);
            return Save();
        }

        public bool DeleteActividades(Actividades actividad)
        {
            _bd.Actividades.Remove(actividad);
            return Save();
        }

        public ICollection<Actividades> GetAllActividades()
        {
            return _bd.Actividades.ToList();
        }

        public Actividades GetActividadesbyId(int id)
        {
            return _bd.Actividades.SingleOrDefault(x => x.IdActividad == id);

        }

        public bool Save()
        {
            return _bd.SaveChanges() >= 0 ? true : false;
        }

        public bool UpdateActividades(Actividades actividad)
        {
            _bd.Actividades.Update(actividad);
            return Save();
        }

    }
}
