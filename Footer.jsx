import { Code, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary rounded-lg p-2">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">DevSchool</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              A escola de programação mais acessível da internet. Aprenda qualquer linguagem 
              de programação com mais de 1.000 slides e 2.000 exercícios por apenas R$10.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Mail className="h-4 w-4" />
              <span>devpyhsite@gmail.com</span>
            </div>
          </div>

          {/* Linguagens */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Linguagens</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Python</a></li>
              <li><a href="#" className="hover:text-white transition-colors">JavaScript</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Java</a></li>
              <li><a href="#" className="hover:text-white transition-colors">C/C++</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PHP</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ruby</a></li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Exercícios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certificados</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Linha de Separação */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 DevSchool. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>para desenvolvedores</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

