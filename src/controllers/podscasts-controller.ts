import {IncomingMessage,request,ServerResponse} from "http";
import {serviceListEpisode} from '../services/list-episodes-service';
import { serviceFilterEpisode } from "../services/filter-episodies-service";
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/filter-podcast-model";

export const getListEpisodes = async (req : IncomingMessage, res: ServerResponse) => {

    const content = await serviceListEpisode();

    res.writeHead(StatusCode.OK,{'content-type': ContentType.JSON});
    res.end(JSON.stringify(content));
    
};

export const getFilterEpisodes = async(
    req: IncomingMessage,
    res: ServerResponse
) => {

    const content: PodcastTransferModel = await serviceFilterEpisode(req.url);

    res.writeHead(content.statusCode, {"content-type": ContentType.JSON});
    res.end(JSON.stringify(content.body));
};