import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().email({ message: "please enter a valid email id" }),
    password: z.string().min(8, "password  length should be 8"),
})

export type loginType = z.infer<typeof loginSchema>