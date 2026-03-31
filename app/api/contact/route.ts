export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { db, contacts } from '@/lib/db'
import { z } from 'zod'

const contactSchema = z.object({
  name:    z.string().min(2, 'Nome obrigatório'),
  email:   z.string().email('Email inválido'),
  company: z.string().optional(),
  phone:   z.string().optional(),
  service: z.string().optional(),
  budget:  z.string().optional(),
  message: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const data = parsed.data

    await db.insert(contacts).values({
      name:    data.name,
      email:   data.email,
      company: data.company || null,
      phone:   data.phone || null,
      service: data.service || null,
      budget:  data.budget || null,
      message: data.message || null,
      source:  'site',
      status:  'new',
    })

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
