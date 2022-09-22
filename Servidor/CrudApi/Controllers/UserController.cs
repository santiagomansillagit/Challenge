using CrudApi.Entities;
using CrudApi.Entities.Dtos;
using CrudApi.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CrudApi.Controllers
{
    [Route("api/Usuario")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly IConfiguration _config;
        private readonly UsuarioService _usuarioService;
        private readonly ActividadService _actividadService;

        public UserController(IConfiguration config, UsuarioService usuarioService, ActividadService actividadService)
        {
            _config = config;
            _usuarioService = usuarioService;
            _actividadService = actividadService;
        }

      

        // GET api/<UserController>/5
        [HttpGet("GetUsuario")]
        [AllowAnonymous]
        public IActionResult GetUserById(int id)
        {
            try
            {
                Usuarios usuario =_usuarioService.GetUsuarioById(id);
                return StatusCode(200, usuario);

            }
            catch (Exception)
            {
                return StatusCode(500, "Hubo un problema al obtener el usuario");
                throw;
            }
        }

        // POST api/<UserController>
        [HttpPost("CreateUsuario")]
        [AllowAnonymous]
        public IActionResult CreateUsuario([FromBody] UsuarioDto usuarioDto)
        {
            try
            {
                Usuarios usuario = new Usuarios();
                usuario.Nombre = usuarioDto.Nombre;
                usuario.Apellido = usuarioDto.Apellido;
                usuario.Pais = usuarioDto.Pais;
                usuario.RecibeInfo = usuarioDto.RecibeInfo;
                usuario.Email = usuarioDto.Email;
                usuario.FechaNacimiento = usuarioDto.FechaNacimiento;
                if (usuarioDto.Telefono != null)
                usuario.Telefono = usuarioDto.Telefono;

                bool respCreate = _usuarioService.CreateUsuario(usuario);

                Actividades actividad = new Actividades();
                actividad.IdUsuario = _usuarioService.GetAllUsuarios().LastOrDefault().IdUsuario;
                actividad.FechaCreacion = DateTime.Now;
                actividad.Actividad = "Se creó el usuario " + usuario.Nombre + " " + usuario.Apellido;

                _actividadService.CreateActividad(actividad);

                return StatusCode(200, true);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Hubo un problema al crear el usuario");
                throw;
            }
           
        }

        [HttpGet("GetAllUsuarios")]
        [AllowAnonymous]
        public IActionResult GetAllUsuarios()
        {
            try
            {
                var usuarios = _usuarioService.GetAllUsuarios();
                return StatusCode(200, usuarios);

            }
            catch (Exception ex)
            {
                return StatusCode(500, "Hubo un problema al obtener usuarios");
                throw;
            }
        }

        // PUT api/<UserController>/5
        [HttpPost("UpdateUsuario")]
        public ActionResult UpdateUsuario([FromBody] Usuarios usuario)
        {

            try
            {
                Usuarios user = _usuarioService.GetUsuarioById(usuario.IdUsuario);

                user.Nombre = usuario.Nombre;
                user.Apellido = usuario.Apellido;
                user.Pais = usuario.Pais;
                user.RecibeInfo = usuario.RecibeInfo;
                user.Email = usuario.Email;
                user.FechaNacimiento = usuario.FechaNacimiento;
                user.Telefono = usuario.Telefono;



                bool respCreate = _usuarioService.UpdateUsuario(user);

                Actividades actividad = new Actividades();

                actividad.IdUsuario = usuario.IdUsuario;
                actividad.FechaCreacion = DateTime.Now;
                actividad.Actividad = "Se actualizó el usuario " + usuario.Nombre + " " + usuario.Apellido;

                _actividadService.CreateActividad(actividad);

                return StatusCode(200, true);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Hubo un problema al crear el usuario");
                throw;
            }

        }

        [HttpPost("DeleteUsuario/{id}")]
        public IActionResult DeleteUsuario(int id)
        {
            try
            {

                if (id != null)
                {
                    var user = _usuarioService.GetUsuarioById(id);
                    user.FechaBaja = DateTime.Now;

                    var resp = _usuarioService.UpdateUsuario(user);

                    Actividades actividad = new Actividades();

                    var us = _usuarioService.GetUsuarioById(id);
                    actividad.IdUsuario = user.IdUsuario;
                    actividad.FechaCreacion = DateTime.Now;
                    actividad.Actividad = "Se eliminó el usuario " + us.Nombre + " " + us.Apellido;

                    _actividadService.CreateActividad(actividad);

                    return StatusCode(200, new { code = 1, message = "Se actualizo correctamente" });
                }
                else
                    return StatusCode(401, new { code = 2, message = "No se encontro el usuario" });

            }
            catch (Exception)
            {
                return StatusCode(500, "Hubo un problema");
                throw;
            }

        }
    }
}
