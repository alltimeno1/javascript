class Cycle {
  constructor(name, next=null) {
    this.name = name
    this.next = next
  }
}

const rock = new Cycle('rock')
const scissors = new Cycle('scissors')
const paper = new Cycle('paper')

rock.next = scissors
scissors.next = paper
paper.next = rock

const choice = [rock, scissors, paper]

function play() {
  const player = choice[parseInt(prompt('rock: 0, scissors: 1, paper: 2'))]
  const computer = choice[Math.floor(Math.random() * 3)]

  console.log(`${player.name} vs ${computer.name}`)

  if (player.next === computer) {
    console.log('You win!')
  } else if(player === computer.next) {
    console.log('You lose!')
  } else {
    console.log('Draw!')
  }
}

play()