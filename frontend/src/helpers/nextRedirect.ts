import Router from "next/router";

export default function nextRedirect({res, to}) {
  if(typeof window === 'undefined' && !!res){
    res.writeHead(302, {location: to})
    res.end()
  }else
    Router.push(to);
}
