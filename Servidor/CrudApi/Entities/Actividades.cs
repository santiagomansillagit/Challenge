using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CrudApi.Entities
{
    public class Actividades
    {
        [Key]
        public int IdActividad{ get; set; }
 
        public DateTime FechaCreacion { get; set; }
      
        public int IdUsuario { get; set; }
        [ForeignKey("IdUsuario")]
        public Usuarios Usuarios { get; set; }

        [Required]
        public string Actividad { get; set; }
    

    }
}
