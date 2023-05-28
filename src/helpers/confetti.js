import confetti from 'canvas-confetti'

function randomInRange (min, max) {
  return Math.random() * (max - min) + min
}

export function makeConfetti () {
  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { y: 0.6 }
  })
}
