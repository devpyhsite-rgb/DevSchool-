import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { ChevronLeft, ChevronRight, Code, Play, BookOpen, CheckCircle, ArrowRight } from 'lucide-react'

const pythonSlides = [
  {
    id: 1,
    title: 'Introdução ao Python',
    subtitle: 'Bem-vindo ao mundo da programação',
    content: {
      text: 'Python é uma linguagem de programação de alto nível, interpretada e de propósito geral. É conhecida por sua sintaxe simples e legível.',
      code: `# Seu primeiro programa em Python
print("Olá, mundo!")
# Em português: imprimir("Olá, mundo!")`,
      translation: 'print = imprimir (mostrar na tela)'
    },
    type: 'intro'
  },
  {
    id: 2,
    title: 'Variáveis em Python',
    subtitle: 'Armazenando informações',
    content: {
      text: 'Variáveis são como caixas que guardam informações. Em Python, você não precisa declarar o tipo da variável.',
      code: `# Criando variáveis
nome = "João"
idade = 25
altura = 1.75

# Em português:
# nome = "João"
# idade = 25
# altura = 1.75`,
      translation: 'Variáveis guardam dados como texto, números, etc.'
    },
    type: 'concept'
  },
  {
    id: 3,
    title: 'Estrutura Condicional - if',
    subtitle: 'Tomando decisões no código',
    content: {
      text: 'A estrutura "if" permite que o programa tome decisões baseadas em condições.',
      code: `idade = 18

if idade >= 18:
    print("Você é maior de idade")
else:
    print("Você é menor de idade")

# Em português:
# se idade >= 18:
#     imprimir("Você é maior de idade")
# senão:
#     imprimir("Você é menor de idade")`,
      translation: 'if = se, else = senão'
    },
    type: 'concept'
  },
  {
    id: 4,
    title: 'Exercício Prático',
    subtitle: 'Vamos praticar!',
    content: {
      text: 'Agora é sua vez! Complete o código abaixo para criar um programa que verifica se um número é par ou ímpar.',
      code: `numero = 10

# Complete o código:
if numero % 2 == 0:
    print("O número é ___")
else:
    print("O número é ___")`,
      translation: '% = resto da divisão, == = igual a'
    },
    type: 'exercise'
  }
]

export default function InteractiveSlides() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [completedSlides, setCompletedSlides] = useState(new Set())
  const [showTranslation, setShowTranslation] = useState(false)

  const slide = pythonSlides[currentSlide]
  const progress = ((currentSlide + 1) / pythonSlides.length) * 100

  const nextSlide = () => {
    if (currentSlide < pythonSlides.length - 1) {
      setCompletedSlides(prev => new Set([...prev, currentSlide]))
      setCurrentSlide(currentSlide + 1)
      setShowTranslation(false)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
      setShowTranslation(false)
    }
  }

  const getSlideIcon = (type) => {
    switch (type) {
      case 'intro': return <BookOpen className="h-5 w-5" />
      case 'concept': return <Code className="h-5 w-5" />
      case 'exercise': return <Play className="h-5 w-5" />
      default: return <BookOpen className="h-5 w-5" />
    }
  }

  const getSlideColor = (type) => {
    switch (type) {
      case 'intro': return 'bg-blue-500'
      case 'concept': return 'bg-purple-500'
      case 'exercise': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Slides Interativos - Python
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          Aprenda programação passo a passo com explicações claras
        </p>
        
        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progresso</span>
            <span>{currentSlide + 1} de {pythonSlides.length}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-2">
          {pythonSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-primary scale-125' 
                  : completedSlides.has(index)
                    ? 'bg-green-500'
                    : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Slide */}
      <Card className="mb-8 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${getSlideColor(slide.type)} text-white`}>
                {getSlideIcon(slide.type)}
              </div>
              <div>
                <CardTitle className="text-2xl">{slide.title}</CardTitle>
                <p className="text-gray-600">{slide.subtitle}</p>
              </div>
            </div>
            <Badge variant="outline" className="capitalize">
              {slide.type === 'intro' ? 'Introdução' : 
               slide.type === 'concept' ? 'Conceito' : 'Exercício'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Explicação */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Explicação:</h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                {slide.content.text}
              </p>
              
              {/* Translation Toggle */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowTranslation(!showTranslation)}
                  className="mb-2"
                >
                  <ArrowRight className={`h-4 w-4 mr-2 transition-transform ${showTranslation ? 'rotate-90' : ''}`} />
                  Tradução dos Comandos
                </Button>
                {showTranslation && (
                  <p className="text-blue-700 font-medium">
                    💡 {slide.content.translation}
                  </p>
                )}
              </div>
            </div>

            {/* Código */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Código:</h4>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{slide.content.code}</pre>
              </div>
              
              {slide.type === 'exercise' && (
                <div className="mt-4">
                  <Button className="w-full bg-green-500 hover:bg-green-600">
                    <Play className="h-4 w-4 mr-2" />
                    Executar Código
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Anterior
        </Button>

        <div className="flex items-center space-x-4">
          {completedSlides.has(currentSlide) && (
            <div className="flex items-center text-green-600">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Concluído</span>
            </div>
          )}
        </div>

        <Button
          onClick={nextSlide}
          disabled={currentSlide === pythonSlides.length - 1}
          className="flex items-center bg-primary hover:bg-primary/90"
        >
          {currentSlide === pythonSlides.length - 1 ? 'Finalizar' : 'Próximo'}
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Course Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardContent className="pt-6">
            <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold text-gray-900">120</div>
            <div className="text-gray-600">Slides Totais</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Play className="h-8 w-8 mx-auto mb-2 text-green-500" />
            <div className="text-2xl font-bold text-gray-900">250</div>
            <div className="text-gray-600">Exercícios</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <CheckCircle className="h-8 w-8 mx-auto mb-2 text-purple-500" />
            <div className="text-2xl font-bold text-gray-900">{completedSlides.size}</div>
            <div className="text-gray-600">Concluídos</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

