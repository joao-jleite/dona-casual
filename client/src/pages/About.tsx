import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
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
              <Link href="/products" className="text-gray-700 hover:text-pink-600 transition">Produtos</Link>
              <Link href="/about" className="text-pink-600 font-semibold">Sobre Nós</Link>
              <Link href="/contact" className="text-gray-700 hover:text-pink-600 transition">Contato</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-8 text-gray-800">Nossa História</h2>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-xl leading-relaxed">
              A <strong className="text-pink-600">Dona Casual</strong> nasceu de um sonho simples, mas poderoso: 
              criar roupas que celebram a essência da mulher moderna. Uma mulher que equilibra múltiplos papéis 
              com elegância, que valoriza o conforto sem abrir mão do estilo, e que encontra beleza na simplicidade 
              do dia a dia.
            </p>

            <p className="text-lg leading-relaxed">
              Tudo começou em 2020, quando nossa fundadora, Maria Silva, percebeu que faltava no mercado uma marca 
              que realmente entendesse as necessidades da mulher contemporânea. Ela queria peças versáteis que 
              pudessem acompanhá-la do café da manhã com as amigas até uma reunião importante, sem perder a 
              autenticidade e o charme.
            </p>

            <p className="text-lg leading-relaxed">
              Com essa visão em mente, nasceu a Dona Casual. Nosso nome reflete exatamente o que somos: uma marca 
              que valoriza a casualidade elegante, o conforto sofisticado e a praticidade com estilo. Cada peça é 
              cuidadosamente selecionada pensando em você, mulher que não tem tempo a perder, mas que nunca abre 
              mão de se sentir bem consigo mesma.
            </p>

            <div className="bg-pink-50 p-8 rounded-lg my-8">
              <h3 className="text-2xl font-bold text-pink-600 mb-4">Nossos Valores</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">✦</span>
                  <span><strong>Autenticidade:</strong> Acreditamos que cada mulher é única e merece expressar sua verdadeira essência através do que veste.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">✦</span>
                  <span><strong>Qualidade:</strong> Selecionamos apenas tecidos confortáveis e duráveis, porque você merece o melhor.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">✦</span>
                  <span><strong>Acessibilidade:</strong> Moda de qualidade não precisa ser inacessível. Nossos preços são justos e pensados para você.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">✦</span>
                  <span><strong>Sustentabilidade:</strong> Nos preocupamos com o futuro do nosso planeta e trabalhamos para minimizar nosso impacto ambiental.</span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed">
              Hoje, a Dona Casual é mais do que uma loja de roupas. Somos uma comunidade de mulheres que se apoiam, 
              que celebram suas conquistas e que encontram força na união. Cada cliente que veste nossas peças faz 
              parte dessa história, e é por isso que nos dedicamos todos os dias a oferecer não apenas produtos, 
              mas experiências que transformam.
            </p>

            <p className="text-lg leading-relaxed">
              Seja bem-vinda à família Dona Casual. Aqui, você é sempre a protagonista da sua própria história.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button className="bg-pink-600 hover:bg-pink-700 text-lg px-8 py-6">
                Conheça Nossa Coleção
              </Button>
            </Link>
          </div>
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

