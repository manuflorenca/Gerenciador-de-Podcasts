import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from './controllers/podscasts-controller'
import { Routes } from "./routes/routes";

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {

      // Querystring
      const [baseUrl,queryString] = req.url?.split("?") ?? ["",""];

      console.log(baseUrl);
      console.log(queryString);

      // Listar podcasts
      if(req.method === "GET" && baseUrl === Routes.LIST) {
        await getListEpisodes(req,res);
      }

      if(req.method === "GET" && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(req,res);
      }
}
);

const port = process.env.PORT

server.listen(process.env.PORT, () => {
console.log(`Servidor iniciado na porta ${port}`);
})