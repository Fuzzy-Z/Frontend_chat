# Frontend Vue.js

Este é o frontend da aplicação, desenvolvido com Vue.js 3.5.17, utilizando Node.js 24.3.0 e Vue CLI 5.0.8.

---

## Tecnologias

- Node.js 24.3.0
- Vue CLI 5.0.8
- Vue.js 3.5.17

---

## Como rodar o projeto

1. **Instalar as dependências**

```bash
npm install
```

2. **Iniciar o servidor de desenvolvimento**

```bash
npm run serve
```

O frontend estará disponível em [http://localhost:8080](http://localhost:8080).

---

## Usuários já criados no backend (seeds)

Estes usuários já estão disponíveis para login:

```ruby
User.create(email: "Kayky@email.com", password: "181023")
User.create(email: "Jean@email.com", password: "101010")
```

---

## Diferenciais do Projeto

Este projeto utiliza algumas tecnologias-chave para autenticação e comunicação em tempo real:

- **WebSocket**: Permite comunicação em tempo real entre cliente e servidor (ex: envio/recebimento instantâneo de mensagens).
- **Bcrypt**: Biblioteca para criptografar senhas com segurança no backend.
- **JWT (JSON Web Token)**: Utilizado para autenticação de usuários via tokens seguros e compactos.

---

## Considerações

- Certifique-se de que o backend esteja rodando antes de iniciar o frontend.
- O projeto foi testado em ambiente Node 24+ e Vue CLI 5+.

---

## Contato

Dúvidas, sugestões ou contribuições? Abra uma issue ou entre em contato.

---
