using Microsoft.Extensions.DependencyInjection;
using UserAuthDemo.Services;


namespace UserAuthDemo.Extensions
{
    public static class ServiceExtensions
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<UserService>();
        }
    }
}
