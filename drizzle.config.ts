import type { Config } from 'drizzle-kit'

export default {
  schema: './lib/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    // Usa a "Direct connection" string do Supabase (porta 5432) para migrations
    url: process.env.DATABASE_URL!,
  },
} satisfies Config
