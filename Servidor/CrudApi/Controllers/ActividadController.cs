using CrudApi.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CrudApi.Controllers
{
    [Route("api/Actividad")]
    [ApiController]
    public class ActividadController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly ActividadService _actividadService;

        public ActividadController(IConfiguration config, ActividadService actividadService)
        {
            _config = config;
           _actividadService = actividadService;
        }

        [HttpGet("GetAllActividades")]
        [AllowAnonymous]
        public IActionResult GetAllActividades()
        {
            try
            {
                var actividades = _actividadService.GetAllActividad();
                return StatusCode(200, actividades);

            }
            catch (Exception ex)
            {
                return StatusCode(500, "Hubo un problema al obtener usuarios");
                throw;
            }
        }
    }
}
