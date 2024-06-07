
Documentação da API de Centros de Reciclagem e Espécies Marinhas
Esta API fornece endpoints para gerenciar centros de reciclagem e espécies marinhas. A API é simulada usando json-server e os dados são armazenados em um arquivo db.json.
Endpoints
1. Centros de Reciclagem
Endpoint: GET /centros
Descrição: Lista todos os centros de reciclagem cadastrados.
Uso no App: Este endpoint é utilizado para obter e exibir a lista de todos os centros de reciclagem no aplicativo. Ele é chamado ao carregar a tela principal dos centros de reciclagem.
Exemplo de Requisição:
GET http://localhost:8080/centros
Exemplo de Resposta:
[
  {
    "id": "1",
    "nome": "Centro de Reciclagem A",
    "endereco": "Rua A, 123",
    "telefone": "(11) 1234-5678",
    "email": "contato@centroa.com",
    "latitude": -23.550520,
    "longitude": -46.633308
  },
  {
    "id": "2",
    "nome": "Centro de Reciclagem B",
    "endereco": "Rua B, 456",
    "telefone": "(11) 8765-4321",
    "email": "contato@centrob.com",
    "latitude": -23.551520,
    "longitude": -46.634308
  }
]
Endpoint: POST /centros
Descrição: Adiciona um novo centro de reciclagem.
Uso no App: Este endpoint é utilizado quando o usuário deseja adicionar um novo centro de reciclagem. Ele é chamado ao submeter o formulário de criação de centro de reciclagem.
Exemplo de Requisição:
POST http://localhost:8080/centros
Content-Type: application/json
{
  "nome": "Centro de Reciclagem F",
  "endereco": "Rua F, 303",
  "telefone": "(11) 2345-6789",
  "email": "contato@centrof.com",
  "latitude": -23.555520,
  "longitude": -46.638308
}
Exemplo de Resposta:
{
  "id": "6",
  "nome": "Centro de Reciclagem F",
  "endereco": "Rua F, 303",
  "telefone": "(11) 2345-6789",
  "email": "contato@centrof.com",
  "latitude": -23.555520,
  "longitude": -46.638308
}
2. Espécies Marinhas
Endpoint: GET /especies
Descrição: Lista todas as espécies marinhas cadastradas.
Uso no App: Este endpoint é utilizado para obter e exibir a lista de todas as espécies marinhas no aplicativo. Ele é chamado ao carregar a tela principal das espécies marinhas.
Exemplo de Requisição:
GET http://localhost:8080/especies
Exemplo de Resposta:
[
  {
    "id": "0e9c9984-0da4-4894-be14-958d4e89d195",
    "nomeCientifico": "Orcinus orca",
    "nomeComum": "Orca",
    "habitat": "Pacífico",
    "statusConservacao": "Em risco"
  },
  {
    "id": "671bc185-6dff-4c61-8335-a7cf9cfb3f4b",
    "nomeCientifico": "Amphiprion ocellaris",
    "nomeComum": "Peixe palhaço",
    "habitat": "Oceano Pacífico",
    "statusConservacao": "Preservado"
  }
]
Endpoint: POST /especies
Descrição: Adiciona uma nova espécie marinha.
Uso no App: Este endpoint é utilizado quando o usuário deseja adicionar uma nova espécie marinha. Ele é chamado ao submeter o formulário de criação de espécie marinha.
Exemplo de Requisição:
POST http://localhost:8080/especies
Content-Type: application/json
{
  "nomeCientifico": "Testudo graeca",
  "nomeComum": "Tartaruga grega",
  "habitat": "Mar Mediterrâneo",
  "statusConservacao": "Vulnerável"
}
Exemplo de Resposta:
{
  "id": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
  "nomeCientifico": "Testudo graeca",
  "nomeComum": "Tartaruga grega",
  "habitat": "Mar Mediterrâneo",
  "statusConservacao": "Vulnerável"
}
Exemplos de Uso
Requisição para listar centros de reciclagem
Comando CURL:
curl -X GET http://localhost:8080/centros
Requisição para adicionar um centro de reciclagem
Comando CURL:
curl -X POST http://localhost:8080/centros -H "Content-Type: application/json" -d '{
  "nome": "Centro de Reciclagem F",
  "endereco": "Rua F, 303",
  "telefone": "(11) 2345-6789",
  "email": "contato@centrof.com",
  "latitude": -23.555520,
  "longitude": -46.638308
}'
Requisição para listar espécies marinhas
Comando CURL:
curl -X GET http://localhost:8080/especies
Requisição para adicionar uma espécie marinha
Comando CURL:
curl -X POST http://localhost:8080/especies -H "Content-Type: application/json" -d '{
  "nomeCientifico": "Testudo graeca",
  "nomeComum": "Tartaruga grega",
  "habitat": "Mar Mediterrâneo",
  "statusConservacao": "Vulnerável"
}'
Erros Comuns
        •        404 Not Found: Certifique-se de que o endpoint está correto e que o json-server está em execução na porta correta.
        •        500 Internal Server Error: Verifique a estrutura do JSON enviado na requisição.
Notas
        •        Lembre-se de substituir localhost pelo endereço IP local da sua máquina se estiver testando a API em um dispositivo físico ou emulador.
        •        A API é simulada usando json-server, então todos os dados são armazenados em memória e serão resetados ao reiniciar o servidor.