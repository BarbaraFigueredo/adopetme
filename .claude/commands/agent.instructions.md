# Sistema de Adoção de Animais – AdoPetMe

Você é um Engenheiro de Software Sênior especialista em Java, Spring Boot, Angular, Arquitetura de Software e Design Patterns.

Desenvolva um sistema completo de adoção de animais chamado AdoPetMe, voltado para ONGs, protetores independentes e adotantes.

O objetivo é criar uma plataforma moderna, intuitiva, responsiva e de fácil manutenção, seguindo boas práticas de engenharia de software, Clean Architecture e princípios SOLID.

---

Tecnologias

Backend

- Java 21
- Spring Boot
- Spring Data JPA
- Spring Security
- PostgreSQL
- Docker
- JWT Authentication

Frontend

- Angular (versão estável mais recente)
- Angular Material
- RxJS
- SCSS

Banco de Dados

- PostgreSQL
- NÃO utilizar as portas:
  - 5432
  - 5434
  - 5435
  - 5532

Infraestrutura

- Docker Compose
- Containers separados para:
  - Frontend
  - Backend
  - Banco de Dados

---

Arquitetura

Priorize Arquitetura de Software.

Utilize Clean Architecture com separação clara de responsabilidades.

Estrutura sugerida:

domain
├── entities
├── repositories
├── services
├── enums

application
├── usecases
├── dto
├── mappers

infrastructure
├── persistence
├── security
├── configuration
├── external

presentation
├── controllers
├── exception
├── requests
├── responses

Aplicar os princípios:

- SOLID
- Clean Code
- DRY
- KISS

---

Design Patterns Obrigatórios

Strategy Pattern

Utilizar para o cálculo de compatibilidade entre usuário e animal.

Exemplos:

- Compatibilidade com apartamento
- Compatibilidade com crianças
- Compatibilidade com outros animais
- Compatibilidade por experiência do adotante

---

Chain of Responsibility

Utilizar para a análise automática da solicitação de adoção.

Fluxo sugerido:

Validação de idade
↓
Validação de residência
↓
Validação documental
↓
Validação de histórico
↓
Resultado final

Possíveis resultados:

- APROVADO
- RECUSADO
- EM ANÁLISE MANUAL

---

Observer Pattern

Utilizar para eventos do sistema:

- Cadastro realizado
- Solicitação enviada
- Solicitação aprovada
- Solicitação recusada
- Animal adotado

---

Factory Pattern

Utilizar para criação de notificações.

Tipos:

- Email
- SMS
- Push Notification

---

Builder Pattern

Utilizar para criação de entidades complexas.

Exemplo:

- Animal
- Usuário
- Solicitação de adoção

---

Funcionalidades do Sistema

Autenticação

O usuário poderá:

- Criar conta
- Fazer login
- Recuperar senha
- Editar perfil

Perfis:

- ADOTANTE
- FUNCIONÁRIO
- ADMINISTRADOR

---

Cadastro de Usuário

Dados obrigatórios:

- Nome completo
- Data de nascimento
- Documento
- Email
- Celular

Endereço:

- CEP
- Rua
- Número
- Complemento
- Bairro
- Cidade
- Estado

Informações para análise de adoção:

- Tipo de moradia
- Possui quintal
- Possui crianças
- Possui outros animais
- Experiência com animais

---

Catálogo de Animais

O usuário poderá visualizar animais disponíveis para adoção.

Filtros:

- Espécie
- Idade
- Cor predominante
- Porte
- Temperamento

Espécies:

- Gato
- Cachorro
- Coelho
- Cavalo

---

Cadastro de Animais

Área exclusiva para funcionários.

Dados:

- Nome
- Espécie
- Idade
- Cor predominante
- Porte
- Temperamento
- Sexo
- Descrição
- Foto principal
- Fotos adicionais
- Status

Status:

- Disponível
- Reservado
- Em processo de adoção
- Adotado

---

Timeline do Animal

Cada animal deve possuir histórico completo.

Exemplo:

12/01 - Resgatado
20/01 - Tratamento veterinário concluído
05/02 - Castrado
12/02 - Disponível para adoção
25/02 - Adotado

---

Favoritos

O usuário poderá salvar animais para visualizar posteriormente.

Funcionalidade adicional:

Quando um animal favoritado for adotado, o sistema deverá sugerir automaticamente outros animais semelhantes.

---

Compatibilidade Inteligente

Implementar uma funcionalidade chamada:

"Encontre o Pet Ideal"

O usuário responderá um questionário.

O sistema calculará um percentual de compatibilidade.

Exemplo:

Luna - 95%
Thor - 92%
Mel - 88%

O cálculo deve considerar:

- Moradia
- Espaço disponível
- Crianças
- Outros animais
- Experiência prévia

---

Solicitação de Adoção

Fluxo:

Escolher animal
↓
Solicitar adoção
↓
Análise automática
↓
Agendamento de visita
↓
Resultado final
↓
Adoção concluída

---

Sistema de Aprovação Automática

Implementar motor de regras.

Exemplos:

Aprovar:

- Maior de idade
- Cadastro completo
- Residência válida

Recusar:

- Menor de idade
- Dados inconsistentes

Encaminhar para análise manual:

- Casos intermediários

---

Acompanhamento da Solicitação

O usuário deverá visualizar o andamento da solicitação.

Exemplo:

Solicitação recebida
✔️

Documentação analisada
✔️

Visita agendada
✔️

Visita realizada
✔️

Aprovado
✔️

Animal entregue
✔️

---

Agendamento de Visitas

Antes da conclusão da adoção:

- Escolha de data
- Escolha de horário
- Aprovação do funcionário

---

Programa Pós-Adoção

Diferencial da plataforma.

Após:

- 30 dias
- 90 dias
- 180 dias

O sistema deverá enviar questionários automáticos.

Perguntas:

- Como está a adaptação?
- O animal está saudável?
- Deseja enviar fotos?

As respostas deverão ficar registradas.

---

Histórias de Sucesso

Área pública da plataforma.

Exibir:

- Fotos enviadas pelos adotantes
- Relatos da adoção
- Data da adoção

---

Dashboard Administrativo

Área exclusiva para funcionários e administradores.

Indicadores:

- Total de animais disponíveis
- Total de animais adotados
- Solicitações pendentes
- Solicitações aprovadas
- Solicitações recusadas
- Espécie mais adotada
- Tempo médio para adoção
- Taxa de aprovação

---

Notificações

Enviar notificações automáticas para:

- Cadastro realizado
- Solicitação enviada
- Aprovação
- Recusa
- Agendamento
- Pós-adoção

---

Frontend

Desenvolver primeiro o Frontend.

Requisitos:

- Layout moderno
- Design profissional
- Alta usabilidade
- Responsivo para desktop e mobile
- Componentização adequada
- Acessibilidade básica

Paleta de cores:

- SW6064
- SW6053
- SW6360
- SW6642
- SW6342

Utilizar:

- Gradientes suaves
- Microinterações
- Hover effects
- Cards modernos
- Animações discretas

---

Imagens

Utilizar imagens reais e autorizadas.

Somente utilizar imagens provenientes de bancos gratuitos e licenciados para uso público, como:

- Unsplash
- Pexels
- Pixabay

Adicionar imagens de:

- Gatos
- Cachorros
- Coelhos
- Cavalos

Nas áreas:

- Home
- Banner principal
- Página de adoção
- Histórias de sucesso

---

README

Criar um README extremamente bem elaborado.

Requisitos:

- Linguagem simples e humana
- Passo a passo de instalação
- Arquitetura explicada visualmente
- Estrutura do projeto
- Tecnologias utilizadas
- Como executar via Docker
- Como executar localmente
- Principais funcionalidades
- Fluxos de negócio
- Decisões arquiteturais
- Design Patterns utilizados e justificativa

O README deve ser profissional, mas fácil de entender para recrutadores, professores e desenvolvedores iniciantes.

---

Primeiramente desenvolveremos todo o Frontend em Angular. Após a conclusão do Frontend, explicar detalhadamente como será realizada a integração com o Backend Spring Boot, incluindo autenticação JWT, consumo de APIs REST, tratamento de erros, interceptors e organização dos serviços.