import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "Usuario es requerido",
  }),
  email: z
    .string({
      required_error: "Correo es requerido",
    })
    .email({
      message: "Correo invalido",
    }),
  password: z
    .string({
      required_error: "Contraseña es requerido",
    })
    .min(6, {
      message: "Contraseña muy corta (min. 6)",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Correo es requerido",
    })
    .email({
      message: "Correo invalido",
    }),
  password: z
    .string({
      required_error: "Contraseña es requerida",
    })
    .min(6, {
      message: "Contraseña muy corta (min. 6)",
    }),
});
