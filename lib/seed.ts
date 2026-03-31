/**
 * Seed inicial da base de dados — dados de exemplo para desenvolvimento
 * Executar com: npx tsx lib/seed.ts
 */
import { db } from './db'
import { cases, team, services, testimonials, insights } from './schema'

async function seed() {
  console.log('🌱 Seeding database...')

  // ─── Services ────────────────────────────────────────────────────
  await db.insert(services).values([
    {
      slug: 'trafego-pago',
      name: 'Tráfego Pago',
      tagline: 'Mais alcance. Menos desperdício. Campanhas que pagam por si mesmas.',
      description: 'Meta Ads, Google Ads e TikTok Ads geridos com estratégia de performance real. Cada euro investido tem destino definido e resultado mensurável.',
      icon: 'BarChart2',
      order: 1,
    },
    {
      slug: 'influencer-marketing',
      name: 'Influencer Marketing',
      tagline: '50+ criadores. Europa inteira. Audiências reais, não métricas de vaidade.',
      description: 'A rede Braza Conecta cobre Portugal, Espanha, Alemanha e Brasil. Matchmaking estratégico entre marca e criador para campanhas que convertem.',
      icon: 'Users',
      order: 2,
    },
    {
      slug: 'gestao-redes-sociais',
      name: 'Gestão de Redes Sociais',
      tagline: 'Presença consistente. Conteúdo com propósito. Comunidade que cresce.',
      description: 'Estratégia editorial, produção de conteúdo, gestão de comunidade e relatórios mensais de performance para Instagram, TikTok e LinkedIn.',
      icon: 'Instagram',
      order: 3,
    },
    {
      slug: 'producao-conteudo',
      name: 'Produção de Conteúdo',
      tagline: 'Do conceito ao entregável. Vídeo, foto e copy que fazem a marca mover.',
      description: 'Equipa criativa completa: direção de arte, redação, gravação e edição. Produção de conteúdo para redes sociais, campanhas e brand content.',
      icon: 'Camera',
      order: 4,
    },
    {
      slug: 'branding',
      name: 'Branding & Identidade',
      tagline: 'Marcas que não se esquecem. Identidade que abre portas antes de falar.',
      description: 'Naming, identidade visual, tom de voz e brand guidelines. Construção de marca do zero ou reposicionamento estratégico.',
      icon: 'Layers',
      order: 5,
    },
    {
      slug: 'consultoria-estrategica',
      name: 'Consultoria Estratégica',
      tagline: 'Clareza antes da execução. Estratégia que alinha marketing com negócio.',
      description: 'Diagnóstico de presença digital, plano de 90 dias, análise de concorrência e definição de KPIs. Para marcas que querem crescer com direção.',
      icon: 'Target',
      order: 6,
    },
  ]).onConflictDoNothing()

  // ─── Cases ────────────────────────────────────────────────────────
  await db.insert(cases).values([
    {
      slug: 'restaurante-porto',
      title: 'De restaurante local a referência gastronómica',
      client: 'Casa do Porto',
      category: 'social',
      description: 'Estratégia de conteúdo + gestão de redes para restaurante premium no Porto. Em 6 meses, tornámos o perfil do cliente na referência gastronómica da cidade.',
      result: '+340% em alcance orgânico',
      metric1Label: 'Seguidores',
      metric1Value: '+8.2K',
      metric2Label: 'Alcance mensal',
      metric2Value: '340K',
      metric3Label: 'Reservas via DM',
      metric3Value: '+220%',
      featured: true,
      order: 1,
    },
    {
      slug: 'marca-moda-lisboa',
      title: 'Lançamento de marca de moda portuguesa',
      client: 'Atlântico Studio',
      category: 'influencer',
      description: 'Campanha de lançamento com 12 criadores portugueses + tráfego pago Meta. Resultado: esgotado em 48h na primeira coleção.',
      result: 'Esgotado em 48h',
      metric1Label: 'Criadores',
      metric1Value: '12',
      metric2Label: 'Impressões',
      metric2Value: '1.2M',
      metric3Label: 'ROI campanha',
      metric3Value: '4.8x',
      featured: true,
      order: 2,
    },
    {
      slug: 'tech-startup-lisboa',
      title: 'Lead generation B2B para startup tech',
      client: 'Konfidencial',
      category: 'paid_media',
      description: 'Campanhas LinkedIn Ads + Google Search para startup de cibersegurança. CPL reduzido em 60% vs. benchmark do setor.',
      result: 'CPL -60% vs benchmark',
      metric1Label: 'Leads/mês',
      metric1Value: '147',
      metric2Label: 'Custo por lead',
      metric2Value: '€8.40',
      metric3Label: 'Taxa conversão',
      metric3Value: '12.3%',
      featured: true,
      order: 3,
    },
  ]).onConflictDoNothing()

  // ─── Team ─────────────────────────────────────────────────────────
  await db.insert(team).values([
    { name: 'Diogo Braza', role: 'Founder & CEO', bio: 'Construindo marcas que dominam o digital desde 2020.', order: 1 },
    { name: 'Ana Ferreira', role: 'Head de Estratégia', bio: 'Ex-agência internacional. Especialista em growth para mercado ibérico.', order: 2 },
    { name: 'Miguel Santos', role: 'Head de Paid Media', bio: '€2M+ em media budget gerido. Google & Meta certified.', order: 3 },
    { name: 'Sofia Rodrigues', role: 'Head de Conteúdo', bio: 'Directora de arte + redatora. Conteúdo que converte.', order: 4 },
    { name: 'João Costa', role: 'Head de Influencer', bio: 'Rede de 50+ criadores em Portugal, Espanha e Alemanha.', order: 5 },
    { name: 'Marta Lima', role: 'Account Manager', bio: 'Garantindo que cada cliente sente que é o único cliente.', order: 6 },
  ]).onConflictDoNothing()

  // ─── Testimonials ─────────────────────────────────────────────────
  await db.insert(testimonials).values([
    {
      author: 'Ricardo Mendes',
      role: 'CEO',
      company: 'Casa do Porto',
      quote: 'Em 3 meses a Media Braza transformou completamente a nossa presença digital. As reservas aumentaram 220% e somos agora referência no Instagram do Porto.',
      rating: 5,
      order: 1,
    },
    {
      author: 'Inês Carvalho',
      role: 'Founder',
      company: 'Atlântico Studio',
      quote: 'O lançamento foi um sonho. 12 criadores, 1.2M de impressões e coleção esgotada em 48 horas. A equipa Braza percebe mesmo de influencer marketing.',
      rating: 5,
      order: 2,
    },
    {
      author: 'Pedro Azevedo',
      role: 'CMO',
      company: 'Konfidencial',
      quote: 'Viemos de uma situação onde gastávamos muito e sabíamos pouco. Hoje temos clareza total: cada euro investido tem ROI mensurável. Equipa excepcional.',
      rating: 5,
      order: 3,
    },
  ]).onConflictDoNothing()

  // ─── Insights ─────────────────────────────────────────────────────
  await db.insert(insights).values([
    {
      slug: 'influencer-marketing-2025',
      title: 'Influencer Marketing em 2025: o que funciona no mercado europeu',
      excerpt: 'O mercado de influencers mudou. Micro-creators com audiências de 10K–100K entregam ROI 6x superior aos mega-influencers. Veja os dados.',
      category: 'Influencer',
      readTime: 7,
      featured: true,
      published: true,
      publishedAt: new Date('2025-03-15'),
    },
    {
      slug: 'meta-ads-sem-desperdicio',
      title: 'Como cortámos o CPL em 60% sem aumentar o budget de Meta Ads',
      excerpt: 'A maior parte do budget em Meta Ads é desperdiçado nos primeiros 3 dias de campanha. Aqui está como evitar o erro mais comum.',
      category: 'Tráfego Pago',
      readTime: 5,
      published: true,
      publishedAt: new Date('2025-02-28'),
    },
    {
      slug: 'marca-portuguesa-europa',
      title: 'Como expandir uma marca portuguesa para Espanha e Alemanha',
      excerpt: 'Não é só traduzir o conteúdo. Adaptação cultural, creators locais e estratégia de entrada por cidade — o que realmente funciona.',
      category: 'Estratégia',
      readTime: 8,
      published: true,
      publishedAt: new Date('2025-01-20'),
    },
  ]).onConflictDoNothing()

  console.log('✅ Seed completed!')
  process.exit(0)
}

seed().catch((e) => {
  console.error('❌ Seed failed:', e)
  process.exit(1)
})
