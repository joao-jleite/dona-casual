# 🛍️ Dona Casual - E-commerce de Moda Feminina

Site de e-commerce para loja de roupas casuais femininas com design elegante, responsivo e totalmente editável.

## 🌐 Link do Site

**GitHub Pages:** https://joao-jleite.github.io/dona-casual/

**Repositório:** https://github.com/joao-jleite/dona-casual

---

## 📋 Estrutura do Site

O site contém as seguintes páginas:

### 1. **Página Inicial** (`/`)
- Banner hero com imagem de destaque
- Seção "Novidades" com produtos em destaque
- Seção "Mais Vendidos" com produtos populares
- Sobre a marca
- Call-to-action para WhatsApp
- Footer completo

### 2. **Produtos** (`/products`)
- Grid de produtos com imagens
- Filtros por categoria (Todos, Conjuntos, Vestidos, Blusas, Calças)
- Cards com informações de preço e tamanhos
- Botão "Comprar Agora" em cada produto

### 3. **Sobre Nós** (`/about`)
- História emocional da marca
- Valores da empresa
- Call-to-action para a coleção

### 4. **Contato** (`/contact`)
- Formulário de contato (Nome, E-mail, Mensagem)
- Botão de WhatsApp com mensagem pré-configurada
- Informações de contato fictícias

### 5. **Pedido** (`/order`)
- Formulário completo de pedido
- Dados pessoais e endereço de entrega
- Seleção de produto e tamanho
- Opções de pagamento: PIX ou Cartão
- Geração de QR Code fictício para PIX
- Formulário simulado de cartão de crédito

---

## 🎨 Identidade Visual

- **Cores principais:** Rosa (#DB2777) e tons de cinza
- **Estilo:** Limpo, elegante e feminino
- **Responsividade:** Mobile-first, adaptado para todos os dispositivos
- **Tipografia:** Sistema de fontes padrão otimizado

---

## 📝 Como Editar o Site

### **1. Editar Textos e Conteúdos**

Os principais arquivos editáveis estão em `client/src/pages/`:

#### **Página Inicial** (`Home.tsx`)
```typescript
// Linha 5-20: Produtos em destaque
const featuredProducts = [
  {
    id: 1,
    name: "Conjunto Casual Elegante", // ← EDITAR NOME
    price: 189.90, // ← EDITAR PREÇO
    image: "/assets/images/products/product-1.jpg", // ← EDITAR IMAGEM
    badge: "Novidade" // ← EDITAR BADGE
  },
  // ...
];
```

#### **Produtos** (`Products.tsx`)
```typescript
// Linha 8-45: Lista de produtos
const products = [
  {
    id: 1,
    name: "Conjunto Casual Elegante", // ← EDITAR
    price: 189.90, // ← EDITAR
    category: "Conjuntos", // ← EDITAR
    size: ["P", "M", "G"], // ← EDITAR
    image: "/assets/images/products/product-1.jpg" // ← EDITAR
  },
  // ...
];
```

#### **Sobre Nós** (`About.tsx`)
```typescript
// Linha 24-70: Textos da história da marca
// Edite diretamente os parágrafos <p> e a lista de valores
```

#### **Contato** (`Contact.tsx`)
```typescript
// Linha 23: Número do WhatsApp
const phoneNumber = "5511999999999"; // ← EDITAR COM SEU NÚMERO

// Linha 95-110: Informações de contato
<p className="text-gray-600">
  Rua das Flores, 123 - Centro<br /> {/* ← EDITAR ENDEREÇO */}
  São Paulo - SP, 01234-567
</p>
```

#### **Pedido** (`Order.tsx`)
```typescript
// Linha 38-51: Lógica de envio do pedido
// Aqui você pode integrar com APIs de pagamento reais
// Exemplo: Stripe, PagSeguro, Mercado Pago, etc.
```

---

### **2. Substituir Imagens**

As imagens estão em `client/public/assets/images/`:

```
client/public/assets/images/
├── banners/
│   └── hero-banner.jpg          ← Banner principal da home
└── products/
    ├── product-1.jpg            ← Produto 1
    ├── product-2.jpg            ← Produto 2
    ├── product-3.jpg            ← Produto 3
    ├── product-4.jpg            ← Produto 4
    ├── product-5.jpg            ← Produto 5
    └── product-6.jpg            ← Produto 6
```

**Como substituir:**
1. Coloque a nova imagem na pasta correspondente
2. Mantenha o mesmo nome do arquivo OU
3. Atualize o caminho no código (ex: `image: "/assets/images/products/nova-imagem.jpg"`)

---

### **3. Alterar Cores e Estilo**

#### **Cores Principais** (`client/src/index.css`)
```css
/* Linha 10-30: Variáveis de cores */
:root {
  --primary: 330 81% 48%;  /* Rosa principal - EDITAR */
  --secondary: 240 4.8% 95.9%;
  /* ... */
}
```

#### **Cor dos Botões** (procure por `bg-pink-600` nos arquivos)
```tsx
// Substituir todas as ocorrências de:
className="bg-pink-600 hover:bg-pink-700"
// Por outra cor, exemplo:
className="bg-blue-600 hover:bg-blue-700"
```

---

### **4. Configurar WhatsApp**

Substitua o número fictício pelo seu número real:

**Em `Contact.tsx` (linha 23):**
```typescript
const phoneNumber = "5511999999999"; // ← Formato: código país + DDD + número
```

**Em `Home.tsx` (linha 171):**
```typescript
const phoneNumber = "5511999999999"; // ← Mesmo número
```

**Formato correto:**
- Brasil: `55` (código do país)
- DDD: `11` (São Paulo), `21` (Rio), etc.
- Número: `999999999`
- Exemplo completo: `5511999999999`

---

### **5. Integrar Pagamentos Reais**

Atualmente, o sistema de pagamento é **simulado**. Para integrar pagamentos reais:

#### **PIX**
1. Use uma API como [Mercado Pago](https://www.mercadopago.com.br/developers/pt/docs/checkout-api/landing) ou [PagSeguro](https://dev.pagseguro.uol.com.br/)
2. Gere QR Codes dinâmicos via API
3. Substitua o código em `Order.tsx` (linha 38-51)

#### **Cartão de Crédito**
1. Integre com [Stripe](https://stripe.com/br), [Mercado Pago](https://www.mercadopago.com.br/) ou similar
2. **NUNCA** processe dados de cartão diretamente
3. Use SDKs oficiais para segurança PCI-DSS

**Exemplo de integração (Mercado Pago):**
```typescript
// Instalar SDK
// npm install mercadopago

import mercadopago from 'mercadopago';

mercadopago.configure({
  access_token: 'SEU_ACCESS_TOKEN'
});

// Criar pagamento PIX
const payment = await mercadopago.payment.create({
  transaction_amount: 189.90,
  description: 'Conjunto Casual Elegante',
  payment_method_id: 'pix',
  payer: {
    email: formData.email
  }
});

// payment.point_of_interaction.transaction_data.qr_code_base64
// ← Use este QR Code
```

---

## 🚀 Como Desenvolver Localmente

### **Pré-requisitos**
- Node.js 18+ instalado
- pnpm instalado (`npm install -g pnpm`)

### **Passos**

1. **Clone o repositório:**
```bash
git clone https://github.com/joao-jleite/dona-casual.git
cd dona-casual
```

2. **Instale as dependências:**
```bash
pnpm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
pnpm dev
```

4. **Acesse no navegador:**
```
http://localhost:3000
```

---

## 📦 Como Fazer Deploy

### **GitHub Pages (Atual)**

1. **Faça suas alterações e commit:**
```bash
git add .
git commit -m "Descrição das alterações"
git push github main
```

2. **Construa a versão de produção:**
```bash
pnpm build
```

3. **Faça deploy para gh-pages:**
```bash
git checkout -b gh-pages
cp -r dist/public/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push github gh-pages --force
```

4. **Configure no GitHub:**
   - Acesse: https://github.com/joao-jleite/dona-casual/settings/pages
   - Selecione branch `gh-pages` e pasta `/`
   - Clique em "Save"

### **Outras Opções de Deploy**

- **Vercel:** https://vercel.com/ (Deploy automático via GitHub)
- **Netlify:** https://www.netlify.com/ (Deploy automático via GitHub)
- **Cloudflare Pages:** https://pages.cloudflare.com/

---

## 🛠️ Tecnologias Utilizadas

- **React 19** - Framework JavaScript
- **TypeScript** - Tipagem estática
- **Vite** - Build tool
- **Tailwind CSS 4** - Framework CSS
- **shadcn/ui** - Componentes de UI
- **Wouter** - Roteamento
- **Sonner** - Notificações toast

---

## 📂 Estrutura de Pastas

```
dona-casual/
├── client/
│   ├── public/
│   │   └── assets/
│   │       ├── images/
│   │       │   ├── banners/
│   │       │   └── products/
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis
│   │   ├── pages/           # Páginas do site
│   │   │   ├── Home.tsx
│   │   │   ├── Products.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Order.tsx
│   │   ├── App.tsx          # Rotas principais
│   │   └── index.css        # Estilos globais
├── dist/                    # Build de produção
├── package.json
└── README.md
```

---

## ✅ Checklist de Personalização

- [ ] Substituir imagens dos produtos
- [ ] Editar textos da página inicial
- [ ] Atualizar história da marca (Sobre Nós)
- [ ] Configurar número do WhatsApp
- [ ] Alterar informações de contato
- [ ] Personalizar cores da marca
- [ ] Adicionar produtos reais
- [ ] Integrar gateway de pagamento
- [ ] Configurar domínio personalizado (opcional)
- [ ] Adicionar Google Analytics (opcional)

---

## 🔒 Segurança

⚠️ **IMPORTANTE:**
- **NUNCA** armazene chaves de API no código-fonte
- Use variáveis de ambiente (`.env`) para dados sensíveis
- **NUNCA** processe dados de cartão diretamente no frontend
- Use HTTPS em produção
- Valide todos os dados do formulário no backend

---

## 📞 Suporte

Para dúvidas ou sugestões:
- **E-mail:** contato@donacasual.com.br (fictício)
- **WhatsApp:** Configurar em `Contact.tsx`

---

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente para fins comerciais ou pessoais.

---

## 🎉 Próximos Passos

1. **Adicionar mais produtos** - Expanda o catálogo
2. **Sistema de carrinho** - Permitir múltiplos itens
3. **Painel administrativo** - Gerenciar produtos e pedidos
4. **Blog de moda** - Conteúdo sobre tendências
5. **Newsletter** - Captura de e-mails
6. **Programa de fidelidade** - Pontos e descontos
7. **Avaliações de produtos** - Reviews de clientes
8. **Integração com redes sociais** - Instagram Shopping

---

**Desenvolvido com ❤️ para mulheres modernas**

© 2025 Dona Casual - Todos os direitos reservados

