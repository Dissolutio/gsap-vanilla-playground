gsap.registerPlugin(MorphSVGPlugin)

let currentGeneral = 'ullar'

function getNextGeneral(currentGeneral) {
  return {
    ['volarak']: 'thormun',
    ['thormun']: 'jandar',
    ['jandar']: 'valkrill',
    ['valkrill']: 'vydar',
    ['vydar']: 'utgar',
    ['utgar']: 'ullar',
    ['ullar']: 'volarak',
  }[currentGeneral]
}

function playNextAnimation(nextGeneral) {
  //  THORMUN GETS SCALED-Y DOWN
  if (nextGeneral === 'thormun') {
    gsap.timeline()
      .to(MorphSVGPlugin.convertToPath("#morphTarget"), {
        duration: 1,
        morphSVG: {
          shape: "#thormun-logo",
        },
      }, 0)
      .to("#morphTarget", {
        duration: 0.1,
        fill: "#cf9942",
      }, 0)
      .to("#morphTarget", {
        duration: 1,
        scaleX: 1,
        scaleY: 0.85,
      }, 0)
  }
  if (nextGeneral === 'volarak') {
    gsap.timeline()
      .to(MorphSVGPlugin.convertToPath("#morphTarget"), {
        duration: 1,
        morphSVG: {
          shape: "#volarak-logo",
        },
      }, 0)
      .to("#morphTarget", {
        duration: 0.1,
        fill: "#9da939",
      }, 0)
      .to("#morphTarget", {
        duration: 1,
        scaleX: 0.96,
        scaleY: 0.96,
      }, 0)
  }
  if (nextGeneral === 'valkrill') {
    gsap.timeline()
      .to(MorphSVGPlugin.convertToPath("#morphTarget"), {
        duration: 1,
        morphSVG: {
          shape: "#valkrill-logo",
        },
      }, 0)
      .to("#morphTarget", {
        duration: 0.1,
        fill: "#cf9942",
      }, 0)
  }
  if (nextGeneral === 'jandar') {
    gsap.timeline()
      .to(MorphSVGPlugin.convertToPath("#morphTarget"), {
        duration: 1,
        morphSVG: {
          shape: "#jandar-logo",
        },
      }, 0)
      .to("#morphTarget", {
        duration: 0.1,
        fill: "#5279b2",
      }, 0)
      .to("#morphTarget", {
        duration: 1,
        scale: 1,
      }, 0)
  }
  if (nextGeneral === 'ullar') {
    gsap.timeline()
      .to(MorphSVGPlugin.convertToPath("#morphTarget"), {
        duration: 1,
        morphSVG: {
          shape: "#ullar-logo",
        },
      }, 0)
      .to("#morphTarget", {
        duration: 0.1,
        fill: "#306a3a",
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
        duration: 0.1,
        fill: "#81272e",
      }, 0)
      .to("#morphTarget", {
        duration: 1,
        scale: 1,
      }, 0)
  }
  //  VYDAR GETS SCALED DOWN
  if (nextGeneral === 'vydar') {
    gsap.timeline()
      .to(MorphSVGPlugin.convertToPath("#morphTarget"), {
        duration: 1,
        morphSVG: {
          shape: "#vydar-logo",
        },
      }, 0)
      .to("#morphTarget", {
        duration: 0.1,
        fill: "#8598a8",
      }, 0)
      .to("#morphTarget", {
        duration: 1,
        scaleY: 0.7,
        scaleX: 0.8,
      }, 0)
  }
}
document.getElementById("play").onclick = function () {
  const nextGeneral = getNextGeneral(currentGeneral)
  playNextAnimation(nextGeneral)
  currentGeneral = nextGeneral
}