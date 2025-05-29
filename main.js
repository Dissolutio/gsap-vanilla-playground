gsap.registerPlugin(MorphSVGPlugin)

let currentGeneral = 'ullar'

function getNextGeneral(currentGeneral) {
  return {
    ['vydar']: 'utgar',
    ['utgar']: 'ullar',
    ['ullar']: 'vydar'
  }[currentGeneral]
}

function playNextAnimation(nextGeneral) {
  if (nextGeneral === 'ullar') {
    // toUtgar.time(0)
    // iconTransform.tweenFromTo(1, 2)
    gsap.timeline().to("#morphTarget", {
      duration: 1,
      fill: "green",
    }, 0).to(MorphSVGPlugin.convertToPath("#morphTarget"), {
      duration: 1,
      morphSVG: {
        shape: "#ullar-logo",
      },
    }, 0)
      .to("#morphTarget", {
        duration: 1,
        scale: 1,
      }, 0)
  }
  if (nextGeneral === 'utgar') {
    gsap.timeline()
      .to(MorphSVGPlugin.convertToPath("#morphTarget"), {
        duration: 1,
        morphSVG: {
          shape: "#utgar-logo",
        },
      }, 0)
      .to("#morphTarget", {
        duration: 1,
        fill: "red",
      }, 0)
      .to("#morphTarget", {
        duration: 1,
        scale: 1,
      }, 0)
  }
  if (nextGeneral === 'vydar') {
    gsap.timeline()
      .to(MorphSVGPlugin.convertToPath("#morphTarget"), {
        duration: 1,
        morphSVG: {
          shape: "#vydar-logo",
        },
      }, 0)
      .to("#morphTarget", {
        duration: 1,
        fill: "#8598a8",
      }, 0)
      .to("#morphTarget", {
        duration: 1,
        scale: 0.7,
      }, 0)
  }
}
document.getElementById("play").onclick = function () {
  const nextGeneral = getNextGeneral(currentGeneral)
  playNextAnimation(nextGeneral)
  currentGeneral = nextGeneral
}