📋 Descrição do Projeto

Este componente implementa uma interface de cadastro de usuários utilizando React com integração a uma API externa.


A aplicação permite realizar as operações básicas de um CRUD:

✅ Listar usuários
➕ Cadastrar novos usuários
❌ Excluir usuários


⚙️ Funcionamento

O componente Home utiliza os hooks do React para gerenciar estado, referências e efeitos colaterais:

useState → Armazena a lista de usuários

useRef → Captura os valores dos inputs sem precisar de estado controlado

useEffect → Executa a busca inicial de usuários ao carregar a página


🔗 Integração com API

As requisições são feitas através de um serviço (api) que se comunica com o backend:

GET /usuarios → Retorna a lista de usuários

POST /usuarios → Cria um novo usuário

DELETE /usuarios/:id → Remove um usuário


🧾 Funcionalidades

📥 Buscar usuários

Ao carregar o componente, a função getUsers() é chamada automaticamente para buscar os dados da API e atualizar a interface.

➕ Criar usuário

A função createUsers():

Captura os valores dos campos (nome, email e idade)
Envia os dados para a API
Limpa os inputs após o envio
Atualiza a lista de usuários na tela
🗑️ Deletar usuário

A função deleteUsers(id):

Envia uma requisição para remover o usuário pelo ID
Atualiza a lista após a exclusão
🎨 Interface

A interface é composta por:

Um formulário com campos de:

Nome, Email, Idade, Um botão para salvar o usuário

Uma lista dinâmica de usuários exibida em formato de cards
Um botão de exclusão com ícone de lixeira para cada usuário

🚀 Atualização em tempo real

Após qualquer ação (criar ou deletar), a lista de usuários é automaticamente atualizada, garantindo que a interface esteja sempre sincronizada com o backend.                    
