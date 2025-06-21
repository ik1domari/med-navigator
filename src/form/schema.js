import { z } from "zod";

export const orderFormSchema = z.object({
  name: z.string().min(2, { message: "Имя должно быть больше 2 символов" }),
  phone: z.string().min(10, { message: "Введите корректный номер" }),
  email: z.string().email({ message: "Введите корректную почту" }),
  comment: z.string().optional(),
});
