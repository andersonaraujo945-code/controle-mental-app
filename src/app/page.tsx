import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, DollarSign, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">MindControl Pro</h1>
          </div>
          <div className="space-x-4">
            <Link href="/login">
              <Button variant="outline">Entrar</Button>
            </Link>
            <Link href="/signup">
              <Button>Começar Agora</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Domine o Controle da Mente Humana
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Aprenda a controlar seus pensamentos, entender relacionamentos profundos e gerenciar suas finanças de forma consciente.
          Acesso mensal a conteúdos exclusivos sobre psicologia, relacionamentos e finanças pessoais.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/signup">
            <Button size="lg" className="text-lg px-8 py-4">
              Assinar por R$ 49,90/mês
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Módulos Exclusivos
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <Brain className="h-12 w-12 text-indigo-600 mb-4" />
              <CardTitle>Controle Mental</CardTitle>
              <CardDescription>
                Técnicas para controlar pensamentos negativos e desenvolver uma mente disciplinada.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Como se livrar da pornografia</li>
                <li>• Controle de impulsos</li>
                <li>• Meditação guiada</li>
                <li>• Técnicas de foco</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Heart className="h-12 w-12 text-pink-600 mb-4" />
              <CardTitle>Relacionamentos</CardTitle>
              <CardDescription>
                Entenda como homens e mulheres pensam e se comunicam.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Linguagem masculina vs feminina</li>
                <li>• Como entender uma mulher</li>
                <li>• Como entender um homem</li>
                <li>• Comunicação efetiva</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <DollarSign className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Controle Financeiro</CardTitle>
              <CardDescription>
                Desenvolva hábitos financeiros saudáveis e alcance independência financeira.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Orçamento pessoal</li>
                <li>• Controle de gastos</li>
                <li>• Investimentos básicos</li>
                <li>• Mentalidade de abundância</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>Conteúdo Premium</CardTitle>
              <CardDescription>
                Acesso exclusivo a vídeos, artigos e exercícios práticos.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Vídeos explicativos</li>
                <li>• Exercícios práticos</li>
                <li>• Comunidade privada</li>
                <li>• Suporte personalizado</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Pronto para Transformar Sua Vida?</CardTitle>
            <CardDescription className="text-lg">
              Junte-se a milhares de pessoas que já estão no caminho da transformação pessoal.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-3xl font-bold text-indigo-600">R$ 49,90/mês</p>
              <p className="text-gray-600">Cancelamento a qualquer momento</p>
              <Link href="/signup">
                <Button size="lg" className="w-full">
                  Começar Minha Jornada
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="h-6 w-6" />
            <span className="text-xl font-bold">MindControl Pro</span>
          </div>
          <p className="text-gray-400">
            © 2024 MindControl Pro. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}