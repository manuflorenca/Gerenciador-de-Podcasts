// import fs from "fs";
// import path from "path";
import { repositoryPodcast } from "../repositories/podcasts-repository"



export const serviceFilterEpisode = async(podcastName: string) => {
    const data = await repositoryPodcast(podcastName);
    return data;
}