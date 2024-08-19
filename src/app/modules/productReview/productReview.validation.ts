import { z } from 'zod';

export const productReviewValidationSchema = z.object({
  productId: z.string().min(1, 'Product ID is required'),
  rating: z.number().min(1, 'Rating must be at least 1').max(5, 'Rating must be at most 5'),
  userName: z.string().min(1, 'User name is required'),
  verified: z.boolean(),
  comment: z.string().optional(),
  images: z.array(z.string().url().optional())
});


