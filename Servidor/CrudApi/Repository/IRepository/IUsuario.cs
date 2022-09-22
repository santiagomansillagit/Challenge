using CrudApi.Entities;

namespace CrudApi.Repository.IRepository
{
    public interface IUsuario
    {
        ICollection<Usuarios> GetAllUser();
        Usuarios GetUserbyId(int id);
        bool CreateUser(Usuarios usuario);
        bool UpdateUser(Usuarios usuario);
        bool DeleteUser(Usuarios usuario);
        bool Save();
    }
}
