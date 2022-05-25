const http = require('http');
const url = require('url');
const queryString = require('query-string');
// fs = file string, usado para salvar arquivos
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  
  var resposta;
  const urlparse = url.parse(req.url, true);
  const params = queryString.parse(urlparse.search);

  // criar e atualizar usuario
  if(urlparse.pathname == '/criar-usuario') {

      // receber informacoes do usuario direto na barra de busca
      
      
      // salvar essas informacoes
      fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err){
        if(err) throw err;
        console.log('Saved!');

        res.statusCode = 201;
        res.setHeader('Content-Type', 'text/plain');
        res.end(resposta);
      });

      resposta = 'Usuario criado com sucesso!';
  }
  // selecionar/pesquisar usuario
  else if(urlparse.pathname == '/selecionar-usuario'){
    fs.readFile('users/' + params.id + '.txt', function(err, data) {
      resposta = data;

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(resposta);
    });
  }

  // remover usuario
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});