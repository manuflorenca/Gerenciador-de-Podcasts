import {IncomingMessage,request,ServerResponse} from "http";

export const getListEpisodes = async (req : IncomingMessage, res: ServerResponse) => {
    res.writeHead(200,{'content-type': "application/json"});
    res.end(JSON.stringify([
        {
          podcastName: "flow",
          episode: "CBUM - Flow #319",
          videoId:"pQSuQmUfS30",
          categories: ["saúde", "esporte","bodybuilder"]
        },
        {
          podcastName: "flow",
          episode: "RUBENS BARRICHELLO - Flow #339",
          videoId:"4KDGTdiOV4I",
          categories: ["esporte", "corrida"]
        },
      ]));
};
