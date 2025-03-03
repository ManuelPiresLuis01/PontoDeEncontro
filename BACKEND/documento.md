LISTAR TODOS OS USUARIOS
GET:/USERS

cadastro:
POST:/sign-up
{
  "name": "teste",
  "birth_date": "2001/05/30",
  "email": "wertyu@sdff",
  "gender": "male",
  "password": "30/05/2001"
}


ativação de conta 
PUT:/activation_account
{
  "email": "wertyu@sdff",
  "code":"111111"
}

renviar codigo
PUT:
{
  "email": "wertyu@sdff"
}

add interesses 
POST:/add_interests
{
  "email": "pires@sdff",
  "interests": [
    "brincar",
    "cagar",
    "mijar",
    "namorar"
  ]
}

add descricao
PUT:add_description
{
  "email": "pires@sdff",
  "description": "rei dos piratas"
}

login
POST: /sign-in
{
  "email": "teste@teste",
  "password": "123456789"
}

resposta login:
{
  "message": "Usuário logado com sucesso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJuYW1lIjoiUGlyZXMiLCJlbWFpbCI6InRlc3RlQHRlc3RlIiwiaWF0IjoxNzQxMDEzNzM2LCJleHAiOjE3NDExMDAxMzZ9.5UwwM3DZtHLfBvn3_ZmlNR_hHEhAM-1NJppx0N0q_mo"
}

perfil
GET: /profile
{
  "token": "QWERTYJK4567IEGBVRTHGHJ"
}

resposta perfil:
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
      "password": "$2b$10$oTFSjkCXfpDJlSyO9ymiiuQ/ErH6q5K15W0/j3jaUB8lfePvxT3gm",
      "activationCode": "",
      "profile_photo": null,
      "status": "single",
      "activated": 1,
      "created_at": "2025-03-03T12:52:35.000Z",
      "updated_at": "2025-03-03T12:53:37.000Z"
    }
  }
}

enviar mensagem
POST:/sendMsg
{
  "emissor": "10",
  "receptor": "7",
  "content": "ola"
}

listar mensagens
GET:/seeMsg
{
  "id": "10",
}


/*ATIVITY ROUTES */

POST:/ativity
{
  "title": "festa de pijama",
  "description": "melhor festa entre amigos e amigas",
  "begin_date": "2025/03/07",
  "end_date": "2025/03/07",
  "user_id": "10"
}

POST:/confirm
{
  "id_activity": "3",
  "user_id": "10"
}

GET:/seeAtivity
{
  "user_id": "10"
}

GET:/seeParticipants
{
  "id_activity": "1",
  "user_id": "10"
}