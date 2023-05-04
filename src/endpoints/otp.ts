import totp from 'totp-generator'
import { Request, Response } from 'express'

export const otp = (req: Request, res: Response) => {
  // Get secret from request query
  const secret = <string>req.query.secret
  if (!secret) res.end('000000')
  else res.end(totp(secret))
}
