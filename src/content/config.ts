import { defineCollection, z } from 'astro:content';


const projects = defineCollection({
type: 'content',
schema: z.object({
title: z.string(),
date: z.coerce.date(),
summary: z.string().max(240),
tags: z.array(z.string()).optional(),
tech: z.array(z.string()).optional(),
repo: z.string().url().optional(),
demo: z.string().url().optional(),
cover: z.string().optional(),
})
});


const blog = defineCollection({
type: 'content',
schema: z.object({
title: z.string(),
date: z.coerce.date(),
description: z.string().max(240),
draft: z.boolean().optional()
})
});

const visualizations = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    liveUrl: z.string().url(),      
    thumbnail: z.string(),          
    tech: z.array(z.string()).optional(),
    order: z.number().optional(),
    featured: z.boolean().optional(),
  }),
});


export const collections = { projects, blog, visualizations};