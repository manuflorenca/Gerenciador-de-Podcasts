import { PodcastTransferModel } from "../models/filter-podcast-model";
import {repositoryPodcast} from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisode = async () => {

    let responseFormatat: PodcastTransferModel = {
        statusCode:0,
        body:[],
    };

    // Verifico se tem conteudo

    const data = await repositoryPodcast();

    if(data.length !== 0){
        responseFormatat.statusCode = StatusCode.OK;
    }else{
        responseFormatat.statusCode = StatusCode.NO_CONTENT;
    }
    responseFormatat.body = data;

    return data;
};