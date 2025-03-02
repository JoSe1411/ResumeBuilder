"use client"

import { z } from 'zod';

const formSchema = z.object({
  photo: z.string()
    .url({ message: "Please enter a valid image URL" })
    .optional()
    .nullable()
    .or(z.literal(''))
    .describe("URL to profile photo"),
  
  firstName: z.string()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(50, { message: "First name must be less than 50 characters" })
    .trim()
    .describe("Your first/given name"),
  
  lastName: z.string()
    .min(2, { message: "Last name must be at least 2 characters" })
    .max(50, { message: "Last name must be less than 50 characters" })
    .trim()
    .describe("Your last/family name"),
  
  jobTitle: z.string()
    .min(2, { message: "Job title must be at least 2 characters" })
    .max(100, { message: "Job title must be less than 100 characters" })
    .trim()
    .describe("Your current or desired job title"),
  
  city: z.string()
    .min(2, { message: "City must be at least 2 characters" })
    .max(50, { message: "City must be less than 50 characters" })
    .trim()
    .describe("City of residence"),
  
  country: z.string()
    .min(2, { message: "Country must be at least 2 characters" })
    .max(50, { message: "Country must be less than 50 characters" })
    .trim()
    .describe("Country of residence"),
  
  phone: z.string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(20, { message: "Phone number is too long" })
    .regex(/^\+?[0-9\s\-()]+$/, { message: "Please enter a valid phone number" })
    .trim()
    .describe("Contact phone number"),
  
  email: z.string()
    .email({ message: "Please enter a valid email address" })
    .max(100, { message: "Email address is too long" })
    .trim()
    .toLowerCase()
    .describe("Contact email address"),
})
  .describe("Personal information section of the resume");

export default formSchema;