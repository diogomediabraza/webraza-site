import { pgTable, serial, varchar, text, timestamp, boolean, integer } from 'drizzle-orm/pg-core'

// ─── Contacts — formulário de contacto / leads ────────────────────────────────
export const contacts = pgTable('contacts', {
  id:         serial('id').primaryKey(),
  name:       varchar('name', { length: 255 }).notNull(),
  email:      varchar('email', { length: 255 }).notNull(),
  company:    varchar('company', { length: 255 }),
  phone:      varchar('phone', { length: 50 }),
  service:    varchar('service', { length: 100 }),   // serviço de interesse
  budget:     varchar('budget', { length: 100 }),    // faixa de budget
  message:    text('message'),
  source:     varchar('source', { length: 100 }).default('site'), // site | instagram | google
  status:     varchar('status', { length: 50 }).default('new'),   // new | contacted | qualified | closed
  createdAt:  timestamp('created_at').defaultNow().notNull(),
  updatedAt:  timestamp('updated_at').defaultNow().notNull(),
})

// ─── Cases / Projetos ─────────────────────────────────────────────────────────
export const cases = pgTable('cases', {
  id:           serial('id').primaryKey(),
  slug:         varchar('slug', { length: 255 }).notNull().unique(),
  title:        varchar('title', { length: 255 }).notNull(),
  client:       varchar('client', { length: 255 }).notNull(),
  category:     varchar('category', { length: 100 }),  // influencer | paid_media | branding | social
  description:  text('description'),
  result:       varchar('result', { length: 255 }),     // ex: "+340% em alcance orgânico"
  metric1Label: varchar('metric1_label', { length: 100 }),
  metric1Value: varchar('metric1_value', { length: 100 }),
  metric2Label: varchar('metric2_label', { length: 100 }),
  metric2Value: varchar('metric2_value', { length: 100 }),
  metric3Label: varchar('metric3_label', { length: 100 }),
  metric3Value: varchar('metric3_value', { length: 100 }),
  coverImage:   varchar('cover_image', { length: 500 }),
  featured:     boolean('featured').default(false),
  order:        integer('order').default(0),
  publishedAt:  timestamp('published_at').defaultNow(),
  createdAt:    timestamp('created_at').defaultNow().notNull(),
})

// ─── Team Members ─────────────────────────────────────────────────────────────
export const team = pgTable('team', {
  id:       serial('id').primaryKey(),
  name:     varchar('name', { length: 255 }).notNull(),
  role:     varchar('role', { length: 255 }).notNull(),
  bio:      text('bio'),
  photo:    varchar('photo', { length: 500 }),
  linkedin: varchar('linkedin', { length: 500 }),
  order:    integer('order').default(0),
  active:   boolean('active').default(true),
})

// ─── Services ─────────────────────────────────────────────────────────────────
export const services = pgTable('services', {
  id:          serial('id').primaryKey(),
  slug:        varchar('slug', { length: 100 }).notNull().unique(),
  name:        varchar('name', { length: 255 }).notNull(),
  tagline:     varchar('tagline', { length: 255 }),
  description: text('description'),
  icon:        varchar('icon', { length: 100 }),
  color:       varchar('color', { length: 20 }).default('#FF5800'),
  order:       integer('order').default(0),
  active:      boolean('active').default(true),
})

// ─── Insights / Blog ──────────────────────────────────────────────────────────
export const insights = pgTable('insights', {
  id:          serial('id').primaryKey(),
  slug:        varchar('slug', { length: 255 }).notNull().unique(),
  title:       varchar('title', { length: 500 }).notNull(),
  excerpt:     text('excerpt'),
  content:     text('content'),
  category:    varchar('category', { length: 100 }),
  coverImage:  varchar('cover_image', { length: 500 }),
  readTime:    integer('read_time').default(5),  // minutos
  featured:    boolean('featured').default(false),
  published:   boolean('published').default(false),
  publishedAt: timestamp('published_at'),
  createdAt:   timestamp('created_at').defaultNow().notNull(),
  updatedAt:   timestamp('updated_at').defaultNow().notNull(),
})

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials = pgTable('testimonials', {
  id:        serial('id').primaryKey(),
  author:    varchar('author', { length: 255 }).notNull(),
  role:      varchar('role', { length: 255 }),
  company:   varchar('company', { length: 255 }),
  photo:     varchar('photo', { length: 500 }),
  quote:     text('quote').notNull(),
  rating:    integer('rating').default(5),
  featured:  boolean('featured').default(true),
  order:     integer('order').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

// ─── Newsletter subscribers ───────────────────────────────────────────────────
export const newsletter = pgTable('newsletter', {
  id:          serial('id').primaryKey(),
  email:       varchar('email', { length: 255 }).notNull().unique(),
  active:      boolean('active').default(true),
  subscribedAt: timestamp('subscribed_at').defaultNow().notNull(),
})

// Types
export type Contact    = typeof contacts.$inferSelect
export type NewContact = typeof contacts.$inferInsert
export type Case       = typeof cases.$inferSelect
export type TeamMember = typeof team.$inferSelect
export type Service    = typeof services.$inferSelect
export type Insight    = typeof insights.$inferSelect
export type Testimonial = typeof testimonials.$inferSelect
