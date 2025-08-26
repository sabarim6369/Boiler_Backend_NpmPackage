# 🚀 BoilerBackend CLI

A minimal, production-ready backend boilerplate CLI to kickstart your **Node.js** (REST, GraphQL, gRPC) or **ASP.NET Web API** project in seconds — with just one command!  

Built with ❤️ by [sabarim6369](https://github.com/sabarim6369)  

---

## ✨ Features  

- ✅ Choose between:
  - **Express (REST API)**
  - **GraphQL (Apollo Server)**
  - **gRPC (Client + Server+MongoDB)**
  - **ASP.NET Web API (PostgreSQL + EF Core)**
- 🌿 MongoDB Integration with Mongoose (Node.js templates)
- 🐘 PostgreSQL Integration (for ASP.NET Core)
- 🧱 Clean MVC Folder Structure (Node.js)
- ⚡ GraphQL Resolver Structure
- 🔗 gRPC Client + Server Setup
- 🏗 Ready-to-use ASP.NET Web API Controllers & Config
- ⚙️ Environment Variable Setup
- 🔁 Pre-configured API routes

---

## 📦 Installation

Install globally using npm:

```bash
npm install -g boilerbackend-cli
boilerbackend-cli
```

You'll be prompted to choose between Express (REST API) and GraphQL (Apollo Server) and enter a project folder name.




🗂 Folder Structure
Depending on your selected option, a folder will be created with the following structure:

🔹 For Express (REST API)
```bash
your-project/
├── controllers/
├── models/
├── routes/
├── config/
├── .env
├── server.js
└── package.json
```
🔹 For GraphQL (Apollo Server)
```bash
your-project/
├── typeDefs/
├── resolvers/
├── mainResolvers/
├── config/
├── models/
├── utils/
├── server.js
└── .env
```
🔹 For gRPC (Client + Server)
```bash
your-project/
├── proto/
│   └── service.proto
├── server/
│   ├── server.js
│   └── handlers/
├── client/
│   └── client.js
├── config/
├── models/
├── .env
└── package.json

```
🔹 For ASP.NET Web API
```bash
your-project/
├── Controllers/
├── Db/
├── DIExtension/
├── Models/
├── Services/
├── Properties/
├── bin/
├── obj/
├── appsettings.json
├── appsettings.Development.json
├── your-project.csproj
├── your-project.http
└── Program.cs
```
dotnet restore
dotnet run


👤 Author
Created with ❤️ by [sabarim6369](https://github.com/sabarim6369)

📃 License
ISC

---
