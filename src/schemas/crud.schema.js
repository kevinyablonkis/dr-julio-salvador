import { z } from "zod";

export const createBlogSchema = z.object({
  title: z.string({
    required_error: "Titulo es requerido",
  }),
  description: z.string({
    required_error: "Descripción es requerido",
  }),
  name_archive: z.string({
    required_error: "El archivo es requerido",
  }),
});

export const createArticleSchema = z.object({
  title: z.string({
    required_error: "Titulo es requerido",
  }),
  description: z.string({
    required_error: "Descripción es requerido",
  }),
  name_archive: z.string({
    required_error: "El archivo es requerido",
  }),
});
