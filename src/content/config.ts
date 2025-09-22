import { defineCollection, z } from 'astro:content';


const projects = defineCollection({
type: 'content',
schema: z.object({
title: z.string(),
date: z.string(), // ISO date
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
date: z.string(),
description: z.string().max(240),
draft: z.boolean().optional()
})
});


export const collections = { projects, blog };