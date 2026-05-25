import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/posts' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        date: z.string(),
    }),
})

export const collections = { posts }
