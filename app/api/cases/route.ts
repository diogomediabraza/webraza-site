import { NextRequest, NextResponse } from 'next/server'
import { db, cases } from '@/lib/db'
import { eq } from 'drizzle-orm'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const featured = searchParams.get('featured')
  const category = searchParams.get('category')

  try {
    const conditions = []
    if (featured === 'true') conditions.push(eq(cases.featured, true))

    const result = await db.query.cases.findMany({
      orderBy: (cases, { asc }) => [asc(cases.order)],
      limit: 20,
    })

    const filtered = category
      ? result.filter(c => c.category === category)
      : result

    return NextResponse.json({ cases: filtered })
  } catch (error) {
    console.error('Cases API error:', error)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
