using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDataContext>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
    policy =>
    {
        policy.WithOrigins("http://localhost:5273")
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
}
)

var app = builder.Build();

app.UseCors("AllowFrontend");
app.MapGet("/", () => "Murieli");

//ENDPOINTS DE TAREFA
//GET: http://localhost:5273/api/chamado/listar
app.MapGet("/api/chamado/listar", ([FromServices] AppDataContext ctx) =>
{
    if (ctx.Chamados.Any())
    {
        return Results.Ok(ctx.Chamados.ToList());
    }
    return Results.NotFound("Nenhum chamado encontrada");
});

//POST: http://localhost:5273/api/chamado/cadastrar
app.MapPost("/api/chamado/cadastrar", ([FromServices] AppDataContext ctx, [FromBody] Chamado chamado) =>
{
    ctx.Chamados.Add(chamado);
    ctx.SaveChanges();
    return Results.Created("", chamado);
});

//PUT: http://localhost:5273/chamado/alterar/{id}
app.MapPut("/api/chamado/alterar/{id}", ([FromServices] AppDataContext ctx, [FromRoute] string id) =>
{
    //Implementar a alteração do status do chamado
});

//GET: http://localhost:5273/chamado/naoconcluidas
app.MapGet("/api/chamado/naoresolvidos", ([FromServices] AppDataContext ctx) =>
{
    //Implementar a listagem dos chamados não resolvidos
});

//GET: http://localhost:5273/chamado/concluidas
app.MapGet("/api/chamado/resolvidos", ([FromServices] AppDataContext ctx) =>
{
    //Implementar a listagem dos chamados resolvidos
});

record ChamadoId(string ID);

aapp.MapPatch("/api/chamado/alterar", async (ChamadoId chamadoInput, AppDbContext db) =>
{
    var chamado = await db.Chamados.FindAsync(chamadoInput.Id);

    if (chamado is null) return Results.NotFound();

    if (chamado.Status == "Aberto")
    {
        // Aberto -> Em atendimento
        chamado.Status = "Em atendimento";
    }
    else if (chamado.Status == "Em atendimento")
    chamado.Status = "Resolvido";
    }
    else 
    { return Results.Conflict("Chamado já está no status 'Resolvido' e não pode ser alterado.");
    }  await db.SaveChangesAsync();

    return Results.Ok(chamado);
    ).WithTags("Alterar Status");
    
app.Run();
