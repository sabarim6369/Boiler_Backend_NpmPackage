# 🚀 BoilerBackend CLI

A minimal, production-ready backend boilerplate CLI to kickstart your Node.js REST API or GraphQL API project in seconds — with just one command!

Built with ❤️ by [sabarim6369](https://github.com/sabarim6369)

---

## ✨ Features

- ✅ Select between Express (REST API) or GraphQL (Apollo Server)
- 🌿 MongoDB Integration with Mongoose
- 🧱 MVC Folder Structure for Both
- ⚡️ GraphQL Resolver Structure
- ⚙️ Environment Variable Setup
- 🔁 Ready-to-use API routes

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

👤 Author
Created with ❤️ by [sabarim6369](https://github.com/sabarim6369)

📃 License
ISC

---
