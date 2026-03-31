import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'
import * as schema from './schema'

// Supabase connection via Drizzle ORM
// Usa a "Transaction pooler" string do Supabase (porta 6543) para serverless (Vercel)
const client = postgres(process.env.DATABASE_URL!, { prepare: false })
export const db = drizzle(client, { schema })

// Supabase JS client — para funcionalidades extra (Storage, Auth, Realtime)
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!  // service role no server — NUNCA expor no client
)

export * from './schema'
