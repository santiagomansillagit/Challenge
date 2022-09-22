using AutoMapper;
using CrudApi.Entities;
using CrudApi.Entities.Dtos;

namespace CrudApi.Mappers
{
    public class Mappers : Profile

    {
        public Mappers()
        {
            CreateMap<Usuarios, UsuarioDto>().ReverseMap();
        }

    }
}
