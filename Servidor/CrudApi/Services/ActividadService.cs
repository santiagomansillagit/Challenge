using CrudApi.Entities;
using CrudApi.Repository.IRepository;

namespace CrudApi.Services
{
    public class ActividadService
    {
        private readonly IActividad _actividadRespository;

        public ActividadService(IActividad actividadRepository)
        {
            _actividadRespository = actividadRepository;
        }


        public bool CreateActividad(Actividades usuario)
        {
            return _actividadRespository.CreateActividades(usuario);

        }

        public bool UpdateActividad(Actividades usuario)
        {
            return _actividadRespository.UpdateActividades(usuario);

        }

        public Actividades GetActividadById(int id)
        {
            return _actividadRespository.GetActividadesbyId(id);
        }

        public ICollection<Actividades> GetAllActividad()
        {
            return _actividadRespository.GetAllActividades();
        }

        public bool DeleteActividad(int id)
        {
            var actividad = _actividadRespository.GetActividadesbyId(id);
            return _actividadRespository.DeleteActividades(actividad);
        }
    }
}
