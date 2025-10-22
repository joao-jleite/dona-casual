import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from "wouter";
import { toast } from "sonner";

export default function Order() {
  const [paymentMethod, setPaymentMethod] = useState("pix");
  const [showPixQR, setShowPixQR] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    product: "",
    size: "",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCVV: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (paymentMethod === "pix") {
      setShowPixQR(true);
      toast.success("QR Code PIX gerado! Escaneie para finalizar o pagamento.");
    } else {
      // Simulação de processamento de cartão
      toast.success("Pedido realizado com sucesso! Você receberá um e-mail de confirmação.");
      
      // EDITÁVEL: Aqui você pode adicionar integração real com gateway de pagamento
      // Exemplo: enviar dados para WhatsApp ou e-mail
      const message = `
Novo Pedido - Dona Casual
Nome: ${formData.name}
E-mail: ${formData.email}
Telefone: ${formData.phone}
Endereço: ${formData.address}, ${formData.city} - ${formData.state}, ${formData.zipCode}
Produto: ${formData.product}
Tamanho: ${formData.size}
Pagamento: Cartão de Crédito
      `.trim();
      
      console.log("Pedido enviado:", message);
    }
  };

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
              <Link href="/about" className="text-gray-700 hover:text-pink-600 transition">Sobre Nós</Link>
              <Link href="/contact" className="text-gray-700 hover:text-pink-600 transition">Contato</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Finalizar Pedido</h2>

          <Card>
            <CardHeader>
              <CardTitle>Informações do Pedido</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Dados Pessoais */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Dados Pessoais</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Endereço de Entrega */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Endereço de Entrega</h3>
                  
                  <div>
                    <Label htmlFor="address">Endereço Completo *</Label>
                    <Input
                      id="address"
                      type="text"
                      placeholder="Rua, número, complemento"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">Cidade *</Label>
                      <Input
                        id="city"
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="state">Estado *</Label>
                      <Input
                        id="state"
                        type="text"
                        placeholder="SP"
                        maxLength={2}
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="zipCode">CEP *</Label>
                      <Input
                        id="zipCode"
                        type="text"
                        placeholder="12345-678"
                        value={formData.zipCode}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Produto */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Produto</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="product">Produto Desejado *</Label>
                      <Input
                        id="product"
                        type="text"
                        placeholder="Ex: Vestido Floral Verão"
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="size">Tamanho *</Label>
                      <Input
                        id="size"
                        type="text"
                        placeholder="P, M, G, GG"
                        value={formData.size}
                        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Método de Pagamento */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Método de Pagamento</h3>
                  
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pix" id="pix" />
                      <Label htmlFor="pix" className="cursor-pointer">PIX (Aprovação Instantânea)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="cursor-pointer">Cartão de Crédito</Label>
                    </div>
                  </RadioGroup>

                  {/* Formulário de Cartão */}
                  {paymentMethod === "card" && (
                    <div className="space-y-4 mt-4 p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-amber-600 font-medium">
                        ⚠️ Simulação: Integração real será implementada futuramente
                      </p>
                      
                      <div>
                        <Label htmlFor="cardNumber">Número do Cartão</Label>
                        <Input
                          id="cardNumber"
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          value={formData.cardNumber}
                          onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label htmlFor="cardName">Nome no Cartão</Label>
                        <Input
                          id="cardName"
                          type="text"
                          placeholder="Nome como está no cartão"
                          value={formData.cardName}
                          onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="cardExpiry">Validade</Label>
                          <Input
                            id="cardExpiry"
                            type="text"
                            placeholder="MM/AA"
                            maxLength={5}
                            value={formData.cardExpiry}
                            onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                          />
                        </div>

                        <div>
                          <Label htmlFor="cardCVV">CVV</Label>
                          <Input
                            id="cardCVV"
                            type="text"
                            placeholder="123"
                            maxLength={4}
                            value={formData.cardCVV}
                            onChange={(e) => setFormData({ ...formData, cardCVV: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* QR Code PIX */}
                  {paymentMethod === "pix" && showPixQR && (
                    <div className="mt-4 p-6 bg-gray-50 rounded-lg text-center">
                      <p className="text-sm text-amber-600 font-medium mb-4">
                        ⚠️ QR Code Fictício - Integração real será implementada futuramente
                      </p>
                      <div className="bg-white p-4 inline-block rounded-lg shadow-md">
                        <div className="w-64 h-64 bg-gray-200 flex items-center justify-center">
                          <p className="text-gray-500">QR Code PIX</p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-gray-600">
                        Escaneie o código acima com o app do seu banco
                      </p>
                      <p className="mt-2 text-xs text-gray-500">
                        Chave PIX: contato@donacasual.com.br
                      </p>
                    </div>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-pink-600 hover:bg-pink-700 text-lg py-6"
                >
                  Finalizar Pedido
                </Button>

                <p className="text-xs text-center text-gray-500">
                  Ao finalizar o pedido, você concorda com nossos termos e condições
                </p>
              </form>
            </CardContent>
          </Card>
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

