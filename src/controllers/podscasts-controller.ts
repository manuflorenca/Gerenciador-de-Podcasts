import {IncomingMessage,request,ServerResponse} from "http";
import {serviceListEpisode} from '../services/list-episodes-service';
import { serviceFilterEpisode } from "../services/filter-episodies-service";

export const getListEpisodes = async (req : IncomingMessage, res: ServerResponse) => {

    const content = await serviceListEpisode();

    res.writeHead(200,{'content-type': "application/json"});
    res.end(JSON.stringify(content));
    
};

export const getFilterEpisodes = async(
    req: IncomingMessage,
    res: ServerResponse
) => {
    // http://localhost:3333/api/episode?p=flow
    const queryString = req.url?.split("?p=")[1] || "";

    const content = await serviceFilterEpisode(queryString);

    res.writeHead(200, {"content-type":"application/json"});
    res.end(JSON.stringify(content));
};