import {repositoryPodcast} from "../repositories/podcasts-repository";



export const serviceListEpisode = async () => {

    const data = await repositoryPodcast();
    return data;
};