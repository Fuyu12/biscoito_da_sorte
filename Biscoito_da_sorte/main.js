const btnOpen = document.querySelector('#btnOpen')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let frase = [
    'frase1', 
    'OLA',
    "A esperança é a última que morre.",
    "Repita: Eu posso.",
    "Manter o foco é como ter um super poder!",
    "Não basta vontade, é preciso conhecer.",
    "conhece-te a ti mesmo e com quem andas.",
    "Você é o que você pensa!",
    "Persista, insista e não desista dos seus sonhos.",
    "Mantenha-se firme e não perca o foco.",
    "Seus sonhos não precisam de plateia , precisam de você.",
    "Não é falta de tempo, é prioridade.",
    "Cuidar de si não é egoísmo, é autocuidado.",
    "Tudo que você foca, cresce!",
    "O fim de um ciclo sempre trás o início deum novo caminho.",
]

btnOpen.addEventListener('click', handleOpenClick)

function handleOpenClick(event){
    event.preventDefault()

    screen1.classList.add('hide')
    screen2.classList.remove('hide')

   document.querySelector('.screen2 h2').innerText = `${frase[Math.round(Math.random() * frase.length)]}`
}