LISTAR TODOS OS USUARIOS
GET:/USERS
APAGAR TODOS OS USUARIOS
delete:/del

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