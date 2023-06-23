const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  const headers = {
    'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Content-Type': 'application/json',
  };
  
  res.writeHead(200, headers);
  res.end(JSON.stringify({
    "name": "Daiana 123",
    "age": 30,
    "cars": [
        { "name": "Ford", "models": ["Fiesta", "Focus", "Mustang"],"image": "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/cruze-sport6-rs-carros.jpg?imwidth=960" },
        { "name": "BMW", "models": ["320", "X3", "X5"], "image": "https://i0.statig.com.br/bancodeimagens/7k/4y/12/7k4y12j7k7od5kb9jlz83rvkd.jpg" },
        { "name": "BMW", "models": ["320", "X3", "X5"], "image": "https://i0.statig.com.br/bancodeimagens/7k/4y/12/7k4y12j7k7od5kb9jlz83rvkd.jpg" },
        { "name": "BMW", "models": ["320", "X3", "X5"], "image": "https://i0.statig.com.br/bancodeimagens/7k/4y/12/7k4y12j7k7od5kb9jlz83rvkd.jpg" },
        { "name": "BMW", "models": ["320", "X3", "X5"], "image": "https://i0.statig.com.br/bancodeimagens/7k/4y/12/7k4y12j7k7od5kb9jlz83rvkd.jpg" },
        { "name": "BMW", "models": ["320", "X3", "X5"], "image": "https://i0.statig.com.br/bancodeimagens/7k/4y/12/7k4y12j7k7od5kb9jlz83rvkd.jpg" },
        { "name": "BMW", "models": ["320", "X3", "X5"], "image": "https://i0.statig.com.br/bancodeimagens/7k/4y/12/7k4y12j7k7od5kb9jlz83rvkd.jpg" },
        { "name": "BMW", "models": ["320", "X3", "X5"], "image": "https://i0.statig.com.br/bancodeimagens/7k/4y/12/7k4y12j7k7od5kb9jlz83rvkd.jpg" },
        { "name": "BMW", "models": ["320", "X3", "X5"], "image": "https://i0.statig.com.br/bancodeimagens/7k/4y/12/7k4y12j7k7od5kb9jlz83rvkd.jpg" },
        { "name": "BMW", "models": ["320", "X3", "X5"], "image": "https://i0.statig.com.br/bancodeimagens/7k/4y/12/7k4y12j7k7od5kb9jlz83rvkd.jpg" },
        { "name": "BMW", "models": ["320", "X3", "X5"], "image": "https://i0.statig.com.br/bancodeimagens/7k/4y/12/7k4y12j7k7od5kb9jlz83rvkd.jpg" },
        { "name": "BMW", "models": ["320", "X3", "X5"], "image": "https://i0.statig.com.br/bancodeimagens/7k/4y/12/7k4y12j7k7od5kb9jlz83rvkd.jpg" },
        { "name": "BMW", "ßmodels": ["320", "X3", "X5"], "image": "https://i0.statig.com.br/bancodeimagens/7k/4y/12/7k4y12j7k7od5kb9jlz83rvkd.jpg" },
        { "name": "Fiat", "models": ["500", "Pandad"], "image": "https://conteudo.imguol.com.br/c/galeria/eb/2022/09/29/duelo-fiat-fastback-limited-edition-by-abarth-x-vw-t-cross-highline-1664474013004_v2_900x506.jpg" }
    ]
  }));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});