using Microsoft.EntityFrameworkCore;
using UserAuthDemo.Data;
using UserAuthDemo.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.RegisterServices();

builder.Services.AddControllers();


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "UserAuth API V1");
        c.RoutePrefix = string.Empty;
    });
}
app.Use(async (context, next) =>
{
    Console.WriteLine("Starting");
    await next();
    Console.WriteLine("Ending");

});


app.MapControllers();

app.Run();
