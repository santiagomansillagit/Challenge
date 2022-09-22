using CrudApi.Entities;

namespace CrudApi.Repository.IRepository
{
    public interface IActividad
    {
        ICollection<Actividades> GetAllActividades();
        Actividades GetActividadesbyId(int id);
        bool CreateActividades(Actividades actividades);
        bool UpdateActividades(Actividades actividades);
        bool DeleteActividades(Actividades actividades);
        bool Save();
    }
}
