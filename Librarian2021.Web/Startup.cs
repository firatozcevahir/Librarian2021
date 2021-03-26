using Librarian2021.Data.Contexts;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Serilog;
using System;
using Microsoft.EntityFrameworkCore;
using Librarian2021.Data.Helpers;
using Librarian2021.Data.Services;
using Newtonsoft.Json;


namespace Librarian2021.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();

            services.AddLogging(builder =>
            {
                var filename = Configuration.GetSection("logger:filename").Value;
                var serilogLogger = new LoggerConfiguration()
                .WriteTo.File($"logs/{filename}.txt", rollingInterval: RollingInterval.Day)
                .CreateLogger();
                builder.AddSerilog(serilogLogger, true);
            });

            services.AddCors(options =>
            {
                options.AddPolicy("corsPolicy",
                         builder => builder
                              .WithOrigins("*").SetIsOriginAllowedToAllowWildcardSubdomains()
                              .AllowAnyHeader()
                              .AllowAnyOrigin()
                              .AllowAnyMethod()
                 );
            });

            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "wwwroot";
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Librarian2021.Web", Version = "v1" });
            });

            services.AddDbContext<LibrarianDbContext>(options =>
            {
                var dbtype = Configuration.GetSection("app:dbType").Value;
                var connectionstring = Configuration.GetSection("app:connectionString").Value;

                if (dbtype.Equals(nameof(DbType.SQLite), StringComparison.OrdinalIgnoreCase))
                {
                    options.UseSqlite(connectionstring);
                }
                else
                {
                    //handle other db types
                }
            });


            //Add DI services
            services.AddScoped<IAuthorDataService, AuthorDataService>();
            services.AddScoped<IPersonDataService, PersonDataService>();
            services.AddScoped<IBookDataService, BookDataService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseStaticFiles();
            app.UseDefaultFiles();
            app.UseRouting();
            app.UseAuthentication();
            app.UseCors("corsPolicy");
            app.UseAuthorization();
            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            var scopeFactory = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>();
            using (var scope = scopeFactory.CreateScope())
            {
                var services = scope.ServiceProvider;
                var context = scope.ServiceProvider.GetRequiredService<LibrarianDbContext>();
                // Init Db with example data
                DbInitializer.Initialize(services);
                var result = DbInitializer.SeedData(services);
                if (!result)
                {
                    // db failed to initialize
                }
            }

            app.UseSpa(spa =>
            {
                if (env.IsDevelopment())
                {
                    spa.UseProxyToSpaDevelopmentServer(Configuration.GetSection("app:spaDevelopmentServer").Value);
                }
            });
        }
    }
}
