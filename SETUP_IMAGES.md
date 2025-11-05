# 📸 Guia de Configuração de Imagens

## 📁 Estrutura de Diretórios

Coloque suas imagens nos seguintes locais:

```
public/
├── images/
│   ├── thiago-hero.jpg          (Foto principal - Hero section)
│   ├── thiago-professional-1.jpg (Foto profissional - About section)
│   └── thiago-worship.jpg        (Foto ministrando - Faith section)
└── logos/
    └── (Logos das empresas - opcional)
```

## 📐 Especificações das Imagens

### 1. Hero Section (`thiago-hero.jpg`)
- **Uso**: Foto circular/redonda na hero section
- **Recomendado**: 800x800px ou 1000x1000px
- **Formato**: JPG ou PNG
- **Aspect Ratio**: 1:1 (quadrado)
- **Sugestão**: Use a foto profissional com fundo neutro (primeira ou terceira imagem que você mostrou)
- **Otimização**: Comprima para web (menos de 500KB)

### 2. About Section (`thiago-professional-1.jpg`)
- **Uso**: Foto profissional na seção "Quem Sou"
- **Recomendado**: 1200x900px ou 1600x1200px
- **Formato**: JPG ou PNG
- **Aspect Ratio**: 4:3
- **Sugestão**: Use a foto do escritório com laptop (segunda imagem) - parece perfeita!
- **Otimização**: Comprima para web (menos de 800KB)

### 3. Faith Section (`thiago-worship.jpg`)
- **Uso**: Foto ministrando/música na seção "Fé & Propósito"
- **Recomendado**: 1200x900px ou 1600x1200px
- **Formato**: JPG ou PNG
- **Aspect Ratio**: 4:3
- **Sugestão**: Se você tiver uma foto tocando/ministrando, use essa
- **Otimização**: Comprima para web (menos de 800KB)

## 🛠️ Como Adicionar as Imagens

### Opção 1: Via Terminal
```bash
# Copie suas imagens para os diretórios
cp /caminho/para/sua/foto.jpg public/images/thiago-hero.jpg
cp /caminho/para/sua/foto2.jpg public/images/thiago-professional-1.jpg
cp /caminho/para/sua/foto3.jpg public/images/thiago-worship.jpg
```

### Opção 2: Via Finder/Explorador
1. Abra a pasta `public/images/` do projeto
2. Copie e cole suas imagens
3. Renomeie para os nomes especificados acima

## ✅ Após Adicionar as Imagens

1. **Descomente as linhas de Image** nos componentes:
   - `components/sections/Hero.tsx`
   - `components/sections/About.tsx`
   - `components/sections/Faith.tsx`

2. **Comente ou remova os placeholders** (os divs com fundo gradient)

3. **Teste o site**: `npm run dev`

## 🎨 Dicas de Otimização

- Use ferramentas como [TinyPNG](https://tinypng.com/) ou [Squoosh](https://squoosh.app/) para comprimir
- Mantenha arquivos menores que 1MB cada
- Use JPG para fotos com muitas cores
- Use PNG apenas se precisar de transparência

## 📝 Checklist

- [ ] Imagem hero adicionada (`thiago-hero.jpg`)
- [ ] Imagem profissional adicionada (`thiago-professional-1.jpg`)
- [ ] Imagem faith adicionada (`thiago-worship.jpg`)
- [ ] Imagens descomentadas nos componentes
- [ ] Placeholders removidos
- [ ] Site testado e funcionando

---

**Próximo passo**: Após adicionar as imagens, descomente as linhas de `<Image>` nos componentes!
