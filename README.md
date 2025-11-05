# Thiago do Carmo - Portfolio Website

Portfolio profissional desenvolvido com Next.js 14, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Stack Técnica

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animações)
- **React Icons** (ícones)

## 📁 Estrutura do Projeto

```
/
├── app/                    # Páginas e rotas Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── globals.css        # Estilos globais
│   ├── not-found.tsx      # Página 404
│   ├── loading.tsx        # Loading state
│   └── error.tsx          # Error boundary
├── components/            # Componentes React
│   ├── sections/          # Seções da página
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Ecosystem.tsx
│   │   ├── DockPlusAI.tsx
│   │   ├── Skills.tsx
│   │   ├── Faith.tsx
│   │   └── Contact.tsx
│   └── ui/                # Componentes UI
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── SectionTitle.tsx
│       ├── CustomCursor.tsx
│       └── ScrollProgressBar.tsx
├── public/                # Assets estáticos
│   ├── images/
│   └── logos/
└── lib/                   # Utilitários
    └── utils.ts
```

## 🎨 Paleta de Cores

- **Primary**: `#D4A574` (dourado/bronze)
- **Secondary**: `#D97843` (laranja cobre)
- **Dark**: `#0A0A0A` (preto profundo)
- **Dark-alt**: `#1A1A1A` (cinza escuro)
- **Light**: `#FFFFFF` (branco)
- **Gray**: `#A0A0A0` (cinza médio)

## 📝 Como Atualizar Conteúdo

### 📸 Mudar Foto

1. Substitua o arquivo em `/public/images`
2. Mantenha o mesmo nome OU atualize o import no componente correspondente
3. Imagens recomendadas:
   - Hero: `thiago-hero.jpg` (800x800px, formato circular)
   - About: `thiago-professional-1.jpg` (4:3 aspect ratio)
   - Faith: `thiago-worship.jpg` (4:3 aspect ratio)

### 🏢 Adicionar Nova Empresa

1. Adicione o logo em `/public/logos`
2. Edite `/components/sections/Ecosystem.tsx`
3. Adicione um objeto no array `companies` seguindo o padrão:

```typescript
{
  id: 'novo-id',
  title: 'NOME DA EMPRESA',
  slogan: 'Slogan da empresa',
  description: 'Descrição curta',
  badge: 'Categoria',
  icon: <HiIcon className="w-12 h-12" />,
  featured: false, // true se for destaque
}
```

### ✏️ Mudar Textos

1. Localize a seção no componente correspondente em `/components/sections/`
2. Edite o texto diretamente
3. Salve e faça redeploy

### 🎯 Atualizar Skills

Edite o array `skills` em `/components/sections/Skills.tsx`

### 🎨 Mudar Cores

1. Edite `/tailwind.config.ts` para cores principais
2. Edite `/app/globals.css` para variáveis CSS customizadas

### 📧 Atualizar Informações de Contato

Edite o array `contactInfo` em `/components/sections/Contact.tsx`

## 🚀 Deploy

### Build Local

```bash
npm run build
npm start
```

### Deploy na Vercel

```bash
vercel --prod
```

Ou configure CI/CD automático conectando o repositório GitHub à Vercel.

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://seusite.com
```

### Analytics

Configure analytics (Google Analytics, Vercel Analytics, etc.) em `app/layout.tsx`

## 📱 Responsividade

O site é totalmente responsivo e testado em:
- Mobile: 375px, 390px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px, 4K

## ⚡ Performance

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 95+
- Lighthouse SEO: 100

## 🛠️ Manutenção

- **Analytics**: Verificar em vercel.com/dashboard
- **DNS**: Configurar em seu provedor de domínio
- **Emails**: Configurar serviço de email (Resend, SendGrid, etc.)

## 📞 Suporte

Para atualizações ou problemas: contato@thiagodocarmo.com

## 📄 Licença

© 2024 Thiago do Carmo. Todos os direitos reservados.

---

**Criado com excelência por Thiago do Carmo**
