using CrudApi.Entities;
using CrudApi.Repository.IRepository;

namespace CrudApi.Services
{
    public class UsuarioService
    {
        private readonly IUsuario _usuarioRespository;

        public UsuarioService(IUsuario usuarioRepository )
        {
            _usuarioRespository = usuarioRepository;
        }


        public bool CreateUsuario(Usuarios usuario)
        {
            return _usuarioRespository.CreateUser(usuario);

        }

        public bool UpdateUsuario(Usuarios usuario)
        {
            return _usuarioRespository.UpdateUser(usuario);

        }

        public Usuarios GetUsuarioById(int id)
        {
            return _usuarioRespository.GetUserbyId(id);
        }
        
        public ICollection<Usuarios> GetAllUsuarios()
        {
            return _usuarioRespository.GetAllUser();
        }
        
        public bool DeleteUsuario(Usuarios usuario)
        {
            usuario.FechaBaja = DateTime.Now;
            return _usuarioRespository.UpdateUser(usuario);
        }



    }
}
