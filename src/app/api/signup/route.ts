import Joi, { object } from "joi"

import { create } from '@/functions/services/usersRepo'
import { NextApiResponse } from "next"

const register = async (request: Request, response: NextApiResponse) => {
  const info = await request.json()
  // const user =await request.formData()
  // const username = user.get('username')
  const result = await create(info)
  console.log('request-->', result)
  if(result.code) return response.status(500).json({error_message: 'Occured Error in MongoDB'})
  return Response.json({ result })
}

// register.schema = Joi.object({
//   email: Joi.string().required(),
//   username: Joi.string().required(),
//   password: Joi.string().min(3).max(8).required()
// })

export {register as POST}