import { NextRequest } from "next/server";

import {auth} from '../auth'

export const  jwtMiddleware = async (req: NextRequest) => {
  if(isPublicPath(req)) return

  //verify token in request cookie
  const id = auth.verifyToken()
  req.headers.set('id', id)
}

const isPublicPath = (req: NextRequest) => {
  const publicPaths = [
    'POST:api/'
  ]
  return publicPaths.includes(`${req.method}:${req.nextUrl.pathname}`)
}