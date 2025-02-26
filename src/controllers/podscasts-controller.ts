import {IncomingMessage,request,ServerResponse} from "http";
import {serviceListEpisode} from '../services/list-episodes-service';
import { serviceFilterEpisode } from "../services/filter-episodies-service";
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";

export const getListEpisodes = async (req : IncomingMessage, res: ServerResponse) => {

    const content = await serviceListEpisode();

    res.writeHead(StatusCode.OK,{'content-type': ContentType.JSON});
    res.end(JSON.stringify(content));
    
};

export const getFilterEpisodes = async(
    req: IncomingMessage,
    res: ServerResponse
) => {

    const content = await serviceFilterEpisode(req.url);

    res.writeHead(StatusCode.OK, {"content-type": ContentType.JSON});
    res.end(JSON.stringify(content));
};