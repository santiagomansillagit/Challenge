using CrudApi.Data;
using CrudApi.Repository;
using CrudApi.Repository.IRepository;
using CrudApi.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<CrudDbContext>(options =>

    options.UseSqlServer(builder.Configuration.GetConnectionString("defaultConnection") ?? throw new InvalidOperationException("Connection string 'CrudDbContext' not found.")));


// Add services to the container.
builder.Services.AddScoped<IUsuario, UsuarioRepository>();
builder.Services.AddScoped<IActividad, ActividadRepository>();
builder.Services.AddScoped<UsuarioService>();
builder.Services.AddScoped<ActividadService>();
builder.Services.AddCors();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

//Politica de accesos cors
app.UseCors(options =>
{
    options.AllowAnyOrigin();
    options.AllowAnyMethod();
    options.AllowAnyHeader();

});

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
