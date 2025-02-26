// import fs from "fs";
// import path from "path";
import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { FilterPodCastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisode = async(podcastName: string | undefined):Promise<FilterPodCastModel> => {

    // Define a interface de retorno
    let responseFormatat: FilterPodCastModel = {
        statusCode:0,
        body:[],
    };
    // Buscando os dados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    // Verifico se tem conteudo

    if(data.length !== 0){
        responseFormatat.statusCode = StatusCode.OK;
    }else{
        responseFormatat.statusCode = StatusCode.NO_CONTENT;
    }
    responseFormatat.body = data;

    return responseFormatat;
}