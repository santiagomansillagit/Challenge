namespace CrudApi.Entities.Dtos
{
    public class UsuarioDto
    {
     
        public string Nombre { get; set; }
      
        public string Apellido { get; set; }
  
        public string Email { get; set; }
      
        public DateTime FechaNacimiento { get; set; }
   
        public int? Telefono { get; set; }
        public bool RecibeInfo { get; set; }

        public string Pais { get; set; }
  

    }
}
