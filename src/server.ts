import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from './controllers/podscasts-controller'

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {

      // Listar podcasts
      if(req.method === "GET" && req.url === "/api/list") {
        await getListEpisodes(req,res);
      }

      if(req.method === "GET" && req.url === "/api/episode"){
        await getFilterEpisodes(req,res);
      }
}
);

const port = process.env.PORT

server.listen(process.env.PORT, () => {
console.log(`Servidor iniciado na porta ${port}`);
})