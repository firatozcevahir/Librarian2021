#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["Librarian2021.Web/Librarian2021.Web.csproj", "Librarian2021.Web/"]
RUN dotnet restore "Librarian2021.Web/Librarian2021.Web.csproj"
COPY . .
WORKDIR "/src/Librarian2021.Web"
RUN dotnet build "Librarian2021.Web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Librarian2021.Web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Librarian2021.Web.dll"]