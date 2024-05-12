import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name subject is required' }),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  message: z.string().min(4, 'Please enter a valid message').optional().or(z.literal('')),
});
