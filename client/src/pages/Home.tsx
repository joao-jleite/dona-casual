import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "wouter";

// DADOS FICTÍCIOS - EDITÁVEL
const featuredProducts = [
  {
    id: 1,
    name: "Conjunto Casual Elegante",
    price: 189.90,
    image: "/assets/images/products/product-1.jpg",
    badge: "Novidade"
  },
  {
    id: 2,
    name: "Vestido Floral Verão",
    price: 149.90,
    image: "/assets/images/products/product-2.jpg",
    badge: "Mais Vendido"
  },
  {
    id: 3,
    name: "Look Executivo Casual",
    price: 229.90,
    image: "/assets/images/products/product-3.jpg",
    badge: "Look do Dia"
  }
];

const bestsellers = [
  {
    id: 4,
    name: "Conjunto Linho Premium",
    price: 279.90,
    image: "/assets/images/products/product-4.jpg"
  },
  {
    id: 5,
    name: "Blusa Casual Chic",
    price: 89.90,
    image: "/assets/images/products/product-5.jpg"
  },
  {
    id: 6,
    name: "Calça Wide Leg Elegante",
    price: 159.90,
    image: "/assets/images/products/product-6.jpg"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="text-2xl font-bold text-pink-600 cursor-pointer">Dona Casual</h1>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="text-pink-600 font-semibold">Início</Link>
              <Link href="/products" className="text-gray-700 hover:text-pink-600 transition">Produtos</Link>
              <Link href="/about" className="text-gray-700 hover:text-pink-600 transition">Sobre Nós</Link>
              <Link href="/contact" className="text-gray-700 hover:text-pink-600 transition">Contato</Link>
            </nav>
            <Link href="/order">
              <Button className="bg-pink-600 hover:bg-pink-700">
                Fazer Pedido
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/banners/hero-banner.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Moda Casual com Elegância
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              Descubra peças que combinam conforto e estilo para o seu dia a dia
            </p>
            <Link href="/products">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-lg px-8 py-6">
                Ver Coleção
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Novidades */}
      <section className="py-16 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Novidades</h2>
            <p className="text-gray-600 text-lg">Confira as últimas tendências da nossa coleção</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.badge}
                  </span>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-pink-600">R$ {product.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Link href="/order" className="w-full">
                    <Button className="w-full bg-pink-600 hover:bg-pink-700">
                      Comprar Agora
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mais Vendidos */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Mais Vendidos</h2>
            <p className="text-gray-600 text-lg">As peças favoritas das nossas clientes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestsellers.map(product => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-pink-600">R$ {product.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Link href="/order" className="w-full">
                    <Button className="w-full bg-pink-600 hover:bg-pink-700">
                      Comprar Agora
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
                Ver Todos os Produtos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre a Marca */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Por que escolher a Dona Casual?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Somos mais do que uma loja de roupas. Somos uma comunidade de mulheres que valorizam 
              o conforto, a elegância e a autenticidade. Cada peça é cuidadosamente selecionada 
              pensando em você, mulher moderna que não abre mão do estilo no dia a dia.
            </p>
            <Link href="/about">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                Conheça Nossa História
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-pink-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Precisa de Ajuda?</h2>
          <p className="text-xl mb-8">Fale conosco pelo WhatsApp e tire todas as suas dúvidas!</p>
          <Button 
            size="lg" 
            className="bg-white text-pink-600 hover:bg-gray-100"
            onClick={() => {
              const phoneNumber = "5511999999999";
              const message = "Olá, quero ajuda com um pedido!";
              window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
            }}
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Falar no WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Dona Casual</h3>
              <p className="text-gray-400">Moda feminina casual e elegante para o seu dia a dia</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <div className="flex flex-col gap-2">
                <Link href="/" className="text-gray-400 hover:text-white transition">Início</Link>
                <Link href="/products" className="text-gray-400 hover:text-white transition">Produtos</Link>
                <Link href="/about" className="text-gray-400 hover:text-white transition">Sobre Nós</Link>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">Contato</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="text-gray-400 space-y-2">
                <p>contato@donacasual.com.br</p>
                <p>(11) 99999-9999</p>
                <p>Rua das Flores, 123<br />São Paulo - SP</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition text-2xl">📷</a>
                <a href="#" className="text-gray-400 hover:text-white transition text-2xl">📘</a>
                <a href="#" className="text-gray-400 hover:text-white transition text-2xl">💬</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
            <p>© 2025 Dona Casual - Todos os direitos reservados</p>
            <p className="mt-2 text-sm">Desenvolvido com ❤️ para mulheres modernas</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

