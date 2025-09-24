import * as z from "zod";

type Address = {
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
};

const addressSchema = z.object({
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
});

const socialLinksSchema = z.object({
  twitter: z.url().optional(),
  facebook: z.url().optional(),
  linkedin: z.url().optional(),
  instagram: z.url().optional(),
});

const workExperienceSchema = z
  .object({
    jobTitle: z.string().optional(),
    company: z.object({
      name: z.string().optional(),
      address: addressSchema,
    }),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.jobTitle?.trim()) {
      if (!data.company?.name?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["company", "name"],
          message: "Company name is required when job title is set",
        });
      }
      if (!data.startDate?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["startDate"],
          message: "Start date is required when job title is set",
        });
      }
    }
  });

export type AdvancedUser = {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  password: string;
  phoneNumber?: string;
  bio: string;
  address?: Address;
  skills?: string[];
  workExperiences?: {
    jobTitle?: string;
    company?: {
      name?: string;
      address?: Address;
    };
    startDate?: string;
    endDate?: string;
  }[];
  socialLinks?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    instagram?: string;
    site?: string;
  };
};

export const defaultAdvancedUser: AdvancedUser = {
  firstName: "",
  lastName: "",
  age: "",
  email: "",
  password: "",
  bio: "",
};

export const advancedUserSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email address"),
  age: z
    .string()
    .transform((val) => parseInt(val, 10))
    .refine((val) => !!val && val >= 18, {
      message: "You must be 18 years old to create an account",
    }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
  phoneNumber: z.string().optional(),
  address: addressSchema.optional(),
  skills: z.array(z.string()).optional(),
  bio: z.string().min(1, "Bio is required"),
  socialLinks: socialLinksSchema.optional(),
  workExperiences: z.array(workExperienceSchema).optional(),
});
