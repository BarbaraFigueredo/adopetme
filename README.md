# AdoPetMe

Sistema completo de adoção de animais voltado para ONGs, protetores independentes e adotantes.

## Visão Geral

AdoPetMe é uma plataforma de adoção responsável e moderna com foco em:
- publicização de animais disponíveis para adoção;
- cruzamento inteligente entre adotantes e pets;
- análise automática de solicitações;
- gestão de processos e notificações.

## Objetivo

Desenvolver primeiro o frontend em Angular e, em seguida, documentar a integração com um backend Spring Boot usando JWT, APIs REST e interceptors.

## Principais Funcionalidades

- Autenticação de usuários (criar conta, login, recuperação de senha, editar perfil)
- Perfis de acesso: ADOTANTE, FUNCIONÁRIO e ADMINISTRADOR
- Catálogo de animais com filtros por espécie, idade, cor, porte e temperamento
- Cadastro de animais para equipe autorizada
- Solicitação de adoção com análise automática de documentos e requisitos
- Timeline e histórico de cada animal
- Favoritos e sugestões de animais semelhantes
- Agendamento de visitas e acompanhamento de solicitações
- Notificações automáticas e fluxo de pós-adoção

## Tecnologias Previstas

### Frontend

- Angular (versão estável mais recente)
- Angular Material
- RxJS
- SCSS

### Backend (integração futura)

- Java 21
- Spring Boot
- Spring Data JPA
- Spring Security
- PostgreSQL
- JWT Authentication
- Docker Compose

### Infraestrutura

- Containers separados para frontend, backend e banco de dados
- PostgreSQL

## Arquitetura

### Frontend (Angular)

- `src/app/modules`
- `src/app/components`
- `src/app/services`
- `src/app/models`
- `src/app/pages`
- `src/app/core`
- `src/app/shared`

### Backend (Clean Architecture)

- `domain`
  - `entities`
  - `repositories`
  - `services`
  - `enums`
- `application`
  - `usecases`
  - `dto`
  - `mappers`
- `infrastructure`
  - `persistence`
  - `security`
  - `configuration`
  - `external`
- `presentation`
  - `controllers`
  - `exception`
  - `requests`
  - `responses`

## Design Patterns Utilizados

- Strategy Pattern: cálculo de compatibilidade entre adotante e animal
- Chain of Responsibility: análise automática de solicitações de adoção
- Observer Pattern: disparo de eventos para notificações e fluxos de pós-adoção
- Factory Pattern: criação de notificações (Email, SMS, Push)
- Builder Pattern: construção de entidades complexas como Animal, Usuário e Solicitação de Adoção

## Fluxo de Negócio

1. Usuário cria conta e completa perfil
2. Usuário navega pelo catálogo de animais
3. Usuário adiciona animais aos favoritos ou inicia solicitação de adoção
4. Sistema executa análise automática de requisitos e documentos
5. Pode aprovar, recusar ou encaminhar para análise manual
6. Agendamento de visita e acompanhamento do processo
7. Conclusão da adoção e ativação do programa pós-adoção

## Como Executar

### Localmente (Frontend)

1. Instalar Node.js e Angular CLI
2. Navegar até a pasta do projeto
3. Executar `npm install`
4. Executar `ng serve`
5. Acessar `http://localhost:4200`

### Via Docker (planejado)

1. Configurar containers separados para frontend, backend e banco de dados
2. Utilizar `docker-compose.yml` com serviços:
   - `frontend`
   - `backend`
   - `database`
3. Garantir que o PostgreSQL utilize porta diferente da lista proibida
4. Executar `docker compose up --build`

## Integração Frontend / Backend

### Autenticação JWT

- O frontend armazenará o token JWT de forma segura no `localStorage` ou em cookies seguros
- O Angular usará um interceptor HTTP para anexar o token em cada requisição
- O backend Spring Boot validará o token e retornará respostas padrão para erros de autenticação

### Consumo de APIs REST

- Serviços Angular exclusivos para cada recurso (usuário, animal, solicitação, favoritados)
- Tratamento centralizado de erros via interceptors
- Componentes reativos com `Observables` e `async` pipe

### Organização dos Serviços

- `auth.service.ts` para login, registro e refresh token
- `animal.service.ts` para catálogo, filtros e detalhes
- `request.service.ts` para solicitações de adoção
- `notification.service.ts` para notificações do usuário

## Estrutura do Projeto

> Observação: o backend Spring Boot ainda precisam ser implementados no repositório.

## Decisões Arquiteturais

- Separação clara entre apresentação, lógica de negócio e dados
- Componentização do frontend para melhor manutenção e testes
- Uso de um motor de regras para análise de adoção e compatibilidade
- Adoção de boas práticas como SOLID, DRY e Clean Code

