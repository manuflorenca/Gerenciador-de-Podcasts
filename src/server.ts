import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from './controllers/podscasts-controller'
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";
import { hrtime } from "process";

const server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {

      // Querystring
      const [baseUrl,queryString] = request.url?.split("?") ?? ["",""];

      console.log(baseUrl);
      console.log(queryString);

      // Listar podcasts
      if(request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request,response);
      }

      if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(request,response);
      }
}
);

const port = process.env.PORT

server.listen(process.env.PORT, () => {
console.log(`Servidor iniciado na porta ${port}`);
})