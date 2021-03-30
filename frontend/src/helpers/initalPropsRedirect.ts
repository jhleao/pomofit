import { NextApiResponse } from "next";
import Router from "next/router";

interface redirectDTO {
  res: NextApiResponse;
  to: string;
}

export default function initialPropsRedirect({res, to}: redirectDTO) {
  if(typeof window === 'undefined'){
    res.writeHead(302, {location: to})
    res.end()
  }else
    Router.push(to);
}