FROM mcr.microsoft.com/dotnet/aspnet:6.0-focal AS base
WORKDIR /app
EXPOSE 5000

ENV ASPNETCORE_URLS=http://+:5000

FROM mcr.microsoft.com/dotnet/sdk:6.0-focal AS build
WORKDIR /src
COPY ["SzopAPI.csproj", "./"]
RUN dotnet restore "SzopAPI.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "SzopAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SzopAPI.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY ["Data/.", "./Data/"]
COPY --from=publish /app/publish .

#For local hosting
#ENTRYPOINT ["dotnet", "SzopAPI.dll"] 

#For Heroku
CMD ASPNETCORE_URLS=http://*:$PORT dotnet SzopAPI.dll
