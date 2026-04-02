🚀 Product Management System (Full Stack)

Este sistema permite que os usuários se autentiquem e gerenciem uma lista de produtos por meio de uma interface com autenticação segura via JWT, separando Backend (.NET 8/9) e Frontend (Angular 20).

🛠️ Tecnologias Utilizadas

Backend:
-Plataforma: .NET Core (Web API)
-Banco de Dados: SQL Server
-ORM: Entity Framework Core (Code First)
-Segurança: Autenticação e Autorização via JWT (JSON Web Tokens)
-Documentação: Swagger (OpenAPI)

Frontend:
-Framework: Angular 20 (Standalone Components)
-UI/UX: Angular Material (Material 3)
-Comunicação: HttpClient com Interceptores JWT
-Design: CSS3 com Flexbox e Layouts Responsivos

📦 Funcionalidades

Autenticação:
-Login com autenticação JWT
-Proteção de rotas usando Angular Guards
-Token enviado automaticamente em requisições de API

Gerenciamento de Produtos:
-Listar produtos
-Criar produtos
-Editar produtos
-Excluir produtos

🏗️ Arquitetura

O back-end segue uma estrutura em camadas:
-Controladores
-Serviços
-Repositórios
-Dados (DbContext)

Essa separação melhora a manutenção e a organização do log de negócios.

⚙️ Como Rodar o Projeto

1. Configuração do Banco de Dados
Certifique-se de que o SQL Server Express está em execução.
No arquivo appsettings.json do Backend, ajuste a ConnectionStrings se necessário.
No terminal da pasta ProductAPI, execute as migrations:

dotnet ef database update

2. Executando o Backend
Navegue até a pasta do projeto .NET:

cd ProductAPI
dotnet run

A API estará disponível em: http://localhost:5110 (ou a porta exibida no terminal).
Acesse o Swagger em: http://localhost:5110/swagger

3. Executando o Frontend
Navegue até a pasta do projeto Angular:

cd product-app
npm install
ng serve

Acesse o sistema no navegador: http://localhost:4200

🔑 Teste de Login

Use as seguintes credenciais:

Email: admin@email.com
Senha: 123456

📁 Estrutura do Projeto

/backend (ASP.NET Core API)
 ├── Controllers
 ├── Services
 ├── Data
 └── Models

/frontend (Angular Application)
 ├── core
 ├── pages
 ├── layouts
 └── guards


👨‍💻 Autor

Desenvolvido por Maycow Wolf