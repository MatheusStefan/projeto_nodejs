const http = require('http');
const url = require('url');
const queryString = require('query-string');
// fs = file string, usado para salvar arquivos
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  
  // ACOES QUE QUERO FAZER NESSE PROJETO

  let resposta;

  // criar usuario
      // receber informacoes do usuario direto na barra de busca
      const params = queryString.parse(url.parse(req.url, true).search);
      
      // salvar essas informacoes
      fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err){
        if(err) throw err;
        console.log('Saved!');
      });

      resposta = 'Usuario criado com sucesso!';
  // atualizar usuario
  // selecionar/pesquisar usuario
  // remover usuario
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});