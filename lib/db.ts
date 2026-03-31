import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'
import { createClient } from '@supabase/supabase-js'
import * as schema from './schema'

// Supabase connection via Drizzle ORM
// Usa a "Transaction pooler" string do Supabase (porta 6543) para serverless (Vercel)
const client = postgres(process.env.DATABASE_URL || 'postgres://placeholder:placeholder@localhost:5432/placeholder', { prepare: false })
export const db = drizzle(client, { schema })

// Supabase JS client — para funcionalidades extra (Storage, Auth, Realtime)
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder'
)

export * from './schema'
