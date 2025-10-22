import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "wouter";

// DADOS FICTÍCIOS - EDITÁVEL
const products = [
  {
    id: 1,
    name: "Conjunto Casual Elegante",
    price: 189.90,
    category: "Conjuntos",
    size: ["P", "M", "G"],
    image: "/assets/images/products/product-1.jpg"
  },
  {
    id: 2,
    name: "Vestido Floral Verão",
    price: 149.90,
    category: "Vestidos",
    size: ["P", "M", "G", "GG"],
    image: "/assets/images/products/product-2.jpg"
  },
  {
    id: 3,
    name: "Look Executivo Casual",
    price: 229.90,
    category: "Conjuntos",
    size: ["P", "M", "G"],
    image: "/assets/images/products/product-3.jpg"
  },
  {
    id: 4,
    name: "Conjunto Linho Premium",
    price: 279.90,
    category: "Conjuntos",
    size: ["P", "M", "G", "GG"],
    image: "/assets/images/products/product-4.jpg"
  },
  {
    id: 5,
    name: "Blusa Casual Chic",
    price: 89.90,
    category: "Blusas",
    size: ["P", "M", "G"],
    image: "/assets/images/products/product-5.jpg"
  },
  {
    id: 6,
    name: "Calça Wide Leg Elegante",
    price: 159.90,
    category: "Calças",
    size: ["36", "38", "40", "42"],
    image: "/assets/images/products/product-6.jpg"
  }
];

const categories = ["Todos", "Conjuntos", "Vestidos", "Blusas", "Calças"];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts = selectedCategory === "Todos" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="text-2xl font-bold text-pink-600 cursor-pointer">Dona Casual</h1>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="text-gray-700 hover:text-pink-600 transition">Início</Link>
              <Link href="/products" className="text-pink-600 font-semibold">Produtos</Link>
              <Link href="/about" className="text-gray-700 hover:text-pink-600 transition">Sobre Nós</Link>
              <Link href="/contact" className="text-gray-700 hover:text-pink-600 transition">Contato</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Nossos Produtos</h2>
        
        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? "bg-pink-600 hover:bg-pink-700" : ""}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
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
                <p className="text-sm text-gray-600 mb-2">Categoria: {product.category}</p>
                <p className="text-sm text-gray-600 mb-3">Tamanhos: {product.size.join(", ")}</p>
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
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Dona Casual</h3>
              <p className="text-gray-400">Moda feminina casual e elegante</p>
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
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition">WhatsApp</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
            <p>© 2025 Dona Casual - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

