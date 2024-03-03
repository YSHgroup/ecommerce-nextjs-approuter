import validator from 'validator'
import { compare } from 'bcryptjs'
import isEmail from 'validator/lib/isEmail'


const validatorUserField = (userData: Record<string, string>) => {
  let error = ['']
  if (validator.isEmpty(userData.email)) { error.push('Email is required!') }
  else { if (!validator.isEmail(userData.email)) error.push('Email is not valid!') }
  if (validator.isEmpty(userData.username)) { error.push('User Name is required.') }
  else { if (!validator.isLength(userData.username, { min: 3, max: 12 })) error.push('User Name is possible between 3 to 12.') }
  if (!validator.isLength(userData.password, { min: 6, max: 12 })) error.push('Password must be between 6 to 12.')
  error.shift()
  return error
}

const verifyPassword = (password: string, hashed: string) => {
  const isCorrect = compare(password, hashed)
  return isCorrect
}

export { validatorUserField as validator, verifyPassword }