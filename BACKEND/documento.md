
```markdown
# Documentação da API - Ponto de Encontro

## Usuários

### Listar Todos os Usuários
**Endpoint:** `GET /users`  
**Descrição:** Retorna a lista de todos os usuários cadastrados.  

---

### Cadastro de Usuário
**Endpoint:** `POST /sign-up`  
**Descrição:** Cadastra um novo usuário no sistema.  
**Body (JSON):**
```json
{
  "name": "teste",
  "birth_date": "2001/05/30",
  "email": "wertyu@sdff",
  "gender": "male",
  "password": "30/05/2001"
}
```

---

### Ativação de Conta
**Endpoint:** `PUT /activation_account`  
**Descrição:** Ativa a conta do usuário com um código enviado por e-mail.  
**Body (JSON):**
```json
{
  "email": "wertyu@sdff",
  "code": "111111"
}
```

---

### Reenviar Código de Ativação
**Endpoint:** `PUT /reenviar_codigo`  
**Descrição:** Reenvia o código de ativação para o e-mail do usuário.  
**Body (JSON):**
```json
{
  "email": "wertyu@sdff"
}
```

---

### Adicionar Interesses
**Endpoint:** `POST /add_interests`  
**Descrição:** Adiciona interesses ao perfil do usuário.  
**Body (JSON):**
```json
{
  "email": "pires@sdff",
  "interests": [
    "brincar",
    "cagar",
    "mijar",
    "namorar"
  ]
}
```

---

### Adicionar Descrição ao Perfil
**Endpoint:** `PUT /add_description`  
**Descrição:** Adiciona ou atualiza a descrição do perfil do usuário.  
**Body (JSON):**
```json
{
  "email": "pires@sdff",
  "description": "rei dos piratas"
}
```

---

### Login do Usuário
**Endpoint:** `POST /sign-in`  
**Descrição:** Autentica o usuário e retorna um token JWT.  
**Body (JSON):**
```json
{
  "email": "teste@teste",
  "password": "123456789"
}
```

**Resposta (JSON):**
```json
{
  "message": "Usuário logado com sucesso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### Obter Perfil do Usuário
**Endpoint:** `GET /profile`  
**Descrição:** Retorna os dados do perfil do usuário autenticado.  
**Headers:**
```json
{
  "token": "QWERTYJK4567IEGBVRTHGHJ"
}
```

**Resposta (JSON):**
```json
{
  "user": {
    "datas": {
      "id": 12,
      "name": "Pires",
      "birth_date": "2001-05-29T23:00:00.000Z",
      "email": "teste@teste",
      "gender": "male",
      "photo": null,
      "description": null,
      "password": "$2b$10$oTFSjkCXfpDJlSyO9ymiiuQ...",
      "activationCode": "",
      "profile_photo": null,
      "status": "single",
      "activated": 1,
      "created_at": "2025-03-03T12:52:35.000Z",
      "updated_at": "2025-03-03T12:53:37.000Z"
    }
  }
}
```

---

## Mensagens

### Enviar Mensagem
**Endpoint:** `POST /sendMsg`  
**Descrição:** Envia uma mensagem para outro usuário.  
**Body (JSON):**
```json
{
  "emissor": "10",
  "receptor": "7",
  "content": "ola"
}
```

---

### Listar Mensagens
**Endpoint:** `GET /seeMsg`  
**Descrição:** Retorna todas as mensagens de um usuário.  
**Body (JSON):**
```json
{
  "id": "10"
}
```

---

## Atividades

### Criar Atividade
**Endpoint:** `POST /ativity`  
**Descrição:** Cria uma nova atividade/evento.  
**Body (JSON):**
```json
{
  "title": "festa de pijama",
  "description": "melhor festa entre amigos e amigas",
  "begin_date": "2025/03/07",
  "end_date": "2025/03/07",
  "user_id": "10"
}
```

---

### Confirmar Participação em Atividade
**Endpoint:** `POST /confirm`  
**Descrição:** Confirma a participação de um usuário em uma atividade.  
**Body (JSON):**
```json
{
  "id_activity": "3",
  "user_id": "10"
}
```

---

### Listar Atividades do Usuário
**Endpoint:** `GET /seeAtivity`  
**Descrição:** Retorna a lista de atividades de um usuário.  
**Body (JSON):**
```json
{
  "user_id": "10"
}
```

---

### Listar Participantes de uma Atividade
**Endpoint:** `GET /seeParticipants`  
**Descrição:** Retorna a lista de participantes de uma atividade específica.  
**Body (JSON):**
```json
{
  "id_activity": "1",
  "user_id": "10"
}
```
```

Agora é só copiar e colar sem perder a formatação!
