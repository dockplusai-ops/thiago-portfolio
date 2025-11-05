# 🖼️ Como Ativar as Imagens

Após adicionar suas imagens em `public/images/`, siga estes passos:

## 1️⃣ Adicione as Imagens

Coloque suas imagens em:
- `public/images/thiago-hero.jpg` (foto principal - formato quadrado)
- `public/images/thiago-professional-1.jpg` (foto profissional - formato 4:3)
- `public/images/thiago-worship.jpg` (foto ministrando - formato 4:3)

## 2️⃣ Ative as Imagens nos Componentes

Substitua `{false ?` por `{true ?` nos seguintes arquivos:

### Hero.tsx
Edite `components/sections/Hero.tsx` - linha ~234:
```tsx
{true ? (  // ← Mude de false para true
  <Image
    src="/images/thiago-hero.jpg"
    ...
  />
) : (
```

### About.tsx
Edite `components/sections/About.tsx` - linha ~123:
```tsx
{true ? (  // ← Mude de false para true
  <Image
    src="/images/thiago-professional-1.jpg"
    ...
  />
) : (
```

### Faith.tsx
Edite `components/sections/Faith.tsx` - linha ~51:
```tsx
{true ? (  // ← Mude de false para true
  <Image
    src="/images/thiago-worship.jpg"
    ...
  />
) : (
```

## 3️⃣ Teste

Salve os arquivos e o site irá atualizar automaticamente!

---

**Dica**: Se preferir, eu posso fazer isso automaticamente quando você confirmar que adicionou as imagens! 🚀
