import Router from "next/router";
import { ServerResponse } from "node:http";

interface redirectDTO {
  res: ServerResponse;
  to: string;
}

export default function initialPropsRedirect({res, to}: redirectDTO) {
  console.log('redirecionando para ' + to);
  if(typeof window === 'undefined'){
    res.writeHead(302, {location: to})
    res.end()
  }else
    Router.push(to);
}