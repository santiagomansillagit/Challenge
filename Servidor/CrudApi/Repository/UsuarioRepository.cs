using CrudApi.Data;
using CrudApi.Entities;
using CrudApi.Repository.IRepository;

namespace CrudApi.Repository
{
    public class UsuarioRepository : IUsuario
    {

        private readonly CrudDbContext _bd;

        public UsuarioRepository(CrudDbContext bd)
        {
            _bd = bd;
        }
        public bool CreateUser(Usuarios usuario)
        {
            _bd.Usuarios.Add(usuario);
            return Save();
        }

        public bool DeleteUser(Usuarios usuario)
        {
            _bd.Usuarios.Remove(usuario);
            return Save();
        }

        public ICollection<Usuarios> GetAllUser()
        {
            return _bd.Usuarios.Where(x => x.FechaBaja == null).ToList();
        }

        public Usuarios GetUserbyId(int id)
        {
            return _bd.Usuarios.SingleOrDefault(x => x.IdUsuario == id);

        }

        public bool Save()
        {
            return _bd.SaveChanges() >= 0 ? true : false;
        }

        public bool UpdateUser(Usuarios usuario)
        {
            _bd.Usuarios.Update(usuario);
            return Save();
        }
    }
}
