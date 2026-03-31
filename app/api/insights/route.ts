export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { db, insights } from '@/lib/db'
import { eq } from 'drizzle-orm'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const featured = searchParams.get('featured')

  try {
    const result = await db.query.insights.findMany({
      where: eq(insights.published, true),
      orderBy: (insights, { desc }) => [desc(insights.publishedAt)],
      limit: 20,
    })

    const filtered = featured === 'true'
      ? result.filter(i => i.featured)
      : result

    return NextResponse.json({ insights: filtered })
  } catch (error) {
    console.error('Insights API error:', error)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
