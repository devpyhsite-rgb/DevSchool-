import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Code, Play, BookOpen, Trophy, Clock } from 'lucide-react'

const languages = [
  {
    id: 'python',
    name: 'Python',
    description: 'Linguagem versátil e fácil de aprender',
    color: 'bg-yellow-500',
    difficulty: 'Iniciante',
    slides: 120,
    exercises: 250,
    duration: '8 semanas',
    features: ['Sintaxe simples', 'Data Science', 'Web Development', 'Automação']
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'A linguagem da web moderna',
    color: 'bg-yellow-400',
    difficulty: 'Iniciante',
    slides: 110,
    exercises: 230,
    duration: '6 semanas',
    features: ['Frontend', 'Backend', 'Mobile', 'Desktop']
  },
  {
    id: 'java',
    name: 'Java',
    description: 'Robusta e orientada a objetos',
    color: 'bg-red-500',
    difficulty: 'Intermediário',
    slides: 140,
    exercises: 280,
    duration: '10 semanas',
    features: ['Enterprise', 'Android', 'Web Services', 'Desktop']
  },
  {
    id: 'cpp',
    name: 'C/C++',
    description: 'Performance e controle total',
    color: 'bg-blue-600',
    difficulty: 'Avançado',
    slides: 160,
    exercises: 320,
    duration: '12 semanas',
    features: ['Sistemas', 'Games', 'Embedded', 'Performance']
  },
  {
    id: 'php',
    name: 'PHP',
    description: 'Desenvolvimento web server-side',
    color: 'bg-purple-600',
    difficulty: 'Iniciante',
    slides: 100,
    exercises: 200,
    duration: '6 semanas',
    features: ['Web Backend', 'CMS', 'E-commerce', 'APIs']
  },
  {
    id: 'ruby',
    name: 'Ruby',
    description: 'Elegante e produtiva',
    color: 'bg-red-600',
    difficulty: 'Intermediário',
    slides: 90,
    exercises: 180,
    duration: '8 semanas',
    features: ['Web Apps', 'Scripting', 'Automação', 'Startups']
  }
]

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(null)
  const [filter, setFilter] = useState('all')

  const filteredLanguages = languages.filter(lang => {
    if (filter === 'all') return true
    return lang.difficulty.toLowerCase() === filter
  })

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Iniciante': return 'bg-green-100 text-green-800'
      case 'Intermediário': return 'bg-yellow-100 text-yellow-800'
      case 'Avançado': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Escolha Sua Linguagem
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Selecione a linguagem que deseja aprender e veja o conteúdo disponível
        </p>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            className="rounded-full"
          >
            Todas
          </Button>
          <Button
            variant={filter === 'iniciante' ? 'default' : 'outline'}
            onClick={() => setFilter('iniciante')}
            className="rounded-full"
          >
            Iniciante
          </Button>
          <Button
            variant={filter === 'intermediário' ? 'default' : 'outline'}
            onClick={() => setFilter('intermediário')}
            className="rounded-full"
          >
            Intermediário
          </Button>
          <Button
            variant={filter === 'avançado' ? 'default' : 'outline'}
            onClick={() => setFilter('avançado')}
            className="rounded-full"
          >
            Avançado
          </Button>
        </div>
      </div>

      {/* Grid de Linguagens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredLanguages.map((lang) => (
          <Card 
            key={lang.id} 
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg transform hover:scale-105 ${
              selectedLanguage?.id === lang.id ? 'ring-2 ring-primary shadow-lg' : ''
            }`}
            onClick={() => setSelectedLanguage(lang)}
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className={`w-12 h-12 ${lang.color} rounded-lg flex items-center justify-center`}>
                  <Code className="h-6 w-6 text-white" />
                </div>
                <Badge className={getDifficultyColor(lang.difficulty)}>
                  {lang.difficulty}
                </Badge>
              </div>
              <CardTitle className="text-xl">{lang.name}</CardTitle>
              <CardDescription>{lang.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <BookOpen className="h-4 w-4 mx-auto mb-1 text-primary" />
                  <div className="font-semibold">{lang.slides}</div>
                  <div className="text-gray-500">Slides</div>
                </div>
                <div>
                  <Trophy className="h-4 w-4 mx-auto mb-1 text-accent" />
                  <div className="font-semibold">{lang.exercises}</div>
                  <div className="text-gray-500">Exercícios</div>
                </div>
                <div>
                  <Clock className="h-4 w-4 mx-auto mb-1 text-purple-500" />
                  <div className="font-semibold">{lang.duration}</div>
                  <div className="text-gray-500">Duração</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detalhes da Linguagem Selecionada */}
      {selectedLanguage && (
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 ${selectedLanguage.color} rounded-lg flex items-center justify-center`}>
                <Code className="h-8 w-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl">{selectedLanguage.name}</CardTitle>
                <CardDescription className="text-lg">{selectedLanguage.description}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4">O que você vai aprender:</h4>
                <ul className="space-y-2">
                  {selectedLanguage.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Estatísticas do curso:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Slides interativos:</span>
                    <span className="font-semibold">{selectedLanguage.slides}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Exercícios práticos:</span>
                    <span className="font-semibold">{selectedLanguage.exercises}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duração estimada:</span>
                    <span className="font-semibold">{selectedLanguage.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nível:</span>
                    <Badge className={getDifficultyColor(selectedLanguage.difficulty)}>
                      {selectedLanguage.difficulty}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 bg-primary hover:bg-primary/90">
                <Play className="h-4 w-4 mr-2" />
                Começar Curso
              </Button>
              <Button variant="outline" className="flex-1">
                <BookOpen className="h-4 w-4 mr-2" />
                Ver Prévia
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

