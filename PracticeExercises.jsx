import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Play, CheckCircle, XCircle, Lightbulb, RotateCcw, Trophy, Code } from 'lucide-react'

const exercises = [
  {
    id: 1,
    title: 'Primeiro Programa',
    difficulty: 'Fácil',
    description: 'Crie um programa que exibe "Olá, DevSchool!" na tela.',
    instruction: 'Use o comando print() para exibir a mensagem.',
    starterCode: '# Escreva seu código aqui\n',
    solution: 'print("Olá, DevSchool!")',
    hint: 'Lembre-se de usar aspas para texto e parênteses para a função print.',
    points: 10
  },
  {
    id: 2,
    title: 'Calculadora Simples',
    difficulty: 'Fácil',
    description: 'Crie variáveis para dois números e calcule a soma.',
    instruction: 'Crie duas variáveis com números e imprima a soma delas.',
    starterCode: '# Crie duas variáveis\nnumero1 = \nnumero2 = \n\n# Calcule e imprima a soma\n',
    solution: 'numero1 = 10\nnumero2 = 5\nsoma = numero1 + numero2\nprint(soma)',
    hint: 'Use o operador + para somar e print() para exibir o resultado.',
    points: 15
  },
  {
    id: 3,
    title: 'Verificador de Idade',
    difficulty: 'Médio',
    description: 'Crie um programa que verifica se uma pessoa é maior de idade.',
    instruction: 'Use if/else para verificar se a idade é >= 18.',
    starterCode: 'idade = 20\n\n# Complete o código\nif :\n    print("Maior de idade")\nelse:\n    print("Menor de idade")',
    solution: 'idade = 20\n\nif idade >= 18:\n    print("Maior de idade")\nelse:\n    print("Menor de idade")',
    hint: 'Use o operador >= para comparar a idade com 18.',
    points: 20
  },
  {
    id: 4,
    title: 'Loop de Números',
    difficulty: 'Médio',
    description: 'Use um loop para imprimir números de 1 a 5.',
    instruction: 'Use o comando for com range() para criar o loop.',
    starterCode: '# Complete o loop\nfor i in :\n    print(i)',
    solution: 'for i in range(1, 6):\n    print(i)',
    hint: 'range(1, 6) gera números de 1 a 5. Lembre-se que o último número não é incluído.',
    points: 25
  }
]

export default function PracticeExercises() {
  const [currentExercise, setCurrentExercise] = useState(0)
  const [userCode, setUserCode] = useState(exercises[0].starterCode)
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [result, setResult] = useState(null)
  const [completedExercises, setCompletedExercises] = useState(new Set())
  const [totalPoints, setTotalPoints] = useState(0)

  const exercise = exercises[currentExercise]
  const progress = ((currentExercise + 1) / exercises.length) * 100

  const runCode = () => {
    // Simulação de execução de código
    const trimmedUserCode = userCode.trim().toLowerCase()
    const trimmedSolution = exercise.solution.trim().toLowerCase()
    
    if (trimmedUserCode.includes('print') && trimmedUserCode.length > 10) {
      if (trimmedUserCode === trimmedSolution) {
        setResult({
          type: 'success',
          message: 'Perfeito! Código correto!',
          output: 'Código executado com sucesso!'
        })
        if (!completedExercises.has(currentExercise)) {
          setCompletedExercises(prev => new Set([...prev, currentExercise]))
          setTotalPoints(prev => prev + exercise.points)
        }
      } else {
        setResult({
          type: 'partial',
          message: 'Quase lá! O código funciona, mas pode ser melhorado.',
          output: 'Código executado, mas não é a solução ideal.'
        })
      }
    } else {
      setResult({
        type: 'error',
        message: 'Erro no código. Verifique a sintaxe.',
        output: 'Erro: Código incompleto ou com sintaxe incorreta.'
      })
    }
  }

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1)
      setUserCode(exercises[currentExercise + 1].starterCode)
      setResult(null)
      setShowHint(false)
      setShowSolution(false)
    }
  }

  const prevExercise = () => {
    if (currentExercise > 0) {
      setCurrentExercise(currentExercise - 1)
      setUserCode(exercises[currentExercise - 1].starterCode)
      setResult(null)
      setShowHint(false)
      setShowSolution(false)
    }
  }

  const resetCode = () => {
    setUserCode(exercise.starterCode)
    setResult(null)
    setShowHint(false)
    setShowSolution(false)
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Fácil': return 'bg-green-100 text-green-800'
      case 'Médio': return 'bg-yellow-100 text-yellow-800'
      case 'Difícil': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Exercícios Práticos - Python
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          Pratique seus conhecimentos com exercícios interativos
        </p>
        
        {/* Stats */}
        <div className="flex justify-center space-x-8 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{totalPoints}</div>
            <div className="text-sm text-gray-600">Pontos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{completedExercises.size}</div>
            <div className="text-sm text-gray-600">Concluídos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{exercises.length}</div>
            <div className="text-sm text-gray-600">Total</div>
          </div>
        </div>

        {/* Progress */}
        <div className="max-w-md mx-auto mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progresso</span>
            <span>{currentExercise + 1} de {exercises.length}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Exercise Description */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">
                Exercício {exercise.id}: {exercise.title}
              </CardTitle>
              <Badge className={getDifficultyColor(exercise.difficulty)}>
                {exercise.difficulty}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Descrição:</h4>
                <p className="text-gray-700">{exercise.description}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Instruções:</h4>
                <p className="text-gray-700">{exercise.instruction}</p>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Pontos: {exercise.points}</span>
                {completedExercises.has(currentExercise) && (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Concluído
                  </div>
                )}
              </div>

              {/* Hint */}
              <div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowHint(!showHint)}
                  className="mb-2"
                >
                  <Lightbulb className="h-4 w-4 mr-2" />
                  {showHint ? 'Ocultar' : 'Mostrar'} Dica
                </Button>
                {showHint && (
                  <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                    <p className="text-yellow-800 text-sm">💡 {exercise.hint}</p>
                  </div>
                )}
              </div>

              {/* Solution */}
              <div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowSolution(!showSolution)}
                  className="mb-2"
                >
                  <Code className="h-4 w-4 mr-2" />
                  {showSolution ? 'Ocultar' : 'Ver'} Solução
                </Button>
                {showSolution && (
                  <div className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-sm">
                    <pre>{exercise.solution}</pre>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Code Editor */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Editor de Código</CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={resetCode}
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Resetar
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Textarea
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                placeholder="Escreva seu código aqui..."
                className="font-mono text-sm min-h-[200px] bg-gray-50"
              />
              
              <Button
                onClick={runCode}
                className="w-full bg-green-500 hover:bg-green-600"
              >
                <Play className="h-4 w-4 mr-2" />
                Executar Código
              </Button>

              {/* Result */}
              {result && (
                <div className={`p-4 rounded-lg border ${
                  result.type === 'success' 
                    ? 'bg-green-50 border-green-200' 
                    : result.type === 'partial'
                    ? 'bg-yellow-50 border-yellow-200'
                    : 'bg-red-50 border-red-200'
                }`}>
                  <div className="flex items-center mb-2">
                    {result.type === 'success' ? (
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    ) : result.type === 'partial' ? (
                      <Trophy className="h-5 w-5 text-yellow-600 mr-2" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600 mr-2" />
                    )}
                    <span className={`font-semibold ${
                      result.type === 'success' 
                        ? 'text-green-800' 
                        : result.type === 'partial'
                        ? 'text-yellow-800'
                        : 'text-red-800'
                    }`}>
                      {result.message}
                    </span>
                  </div>
                  <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                    {result.output}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8">
        <Button
          variant="outline"
          onClick={prevExercise}
          disabled={currentExercise === 0}
        >
          Anterior
        </Button>

        <div className="flex space-x-2">
          {exercises.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentExercise(index)
                setUserCode(exercises[index].starterCode)
                setResult(null)
                setShowHint(false)
                setShowSolution(false)
              }}
              className={`w-8 h-8 rounded-full text-sm font-semibold transition-all duration-200 ${
                index === currentExercise 
                  ? 'bg-primary text-white' 
                  : completedExercises.has(index)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <Button
          onClick={nextExercise}
          disabled={currentExercise === exercises.length - 1}
          className="bg-primary hover:bg-primary/90"
        >
          Próximo
        </Button>
      </div>
    </div>
  )
}

