using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CrudApi.Entities
{
    public class Usuarios
    {
        [Key]
        public int IdUsuario { get; set; }
        [Required]
        [StringLength(150)]
        public string Nombre { get; set; }
        [Required]
        [StringLength(150)]
        public string Apellido { get; set; }
        [Required]
     
        public string Email { get; set; }
        [Required]
      
        public DateTime FechaNacimiento { get; set; }
        [Required]
        public int? Telefono { get; set; }
        public bool RecibeInfo { get; set; }
        public DateTime? FechaBaja { get; set; }

        public string Pais { get; set; }

        public Usuarios() { }

    }


}
