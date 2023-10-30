import { hash, compare } from 'bcryptjs'

const PASSWORD_HASH_LENGTH = 12

export async function hashPassword(password: string) {
  const hashedPassword = await hash(password, PASSWORD_HASH_LENGTH)
  return hashedPassword
}

export async function verifyPassword(password: string, hashedPassword: string) {
  const isValid = await compare(password, hashedPassword)
  return isValid
}
