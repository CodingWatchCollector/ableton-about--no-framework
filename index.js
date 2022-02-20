// remove no-js class to apply proper styling to navigation
document.documentElement.classList.remove('no-js')
const MediaLarge = 1040
const browserWidth = window.innerWidth

const navWrapper = document.getElementById('nav-main__wrapper')
const navMenuButton = document.getElementById('nav-menu__toggle')
const navMenu = document.getElementById(
  navMenuButton.getAttribute('aria-controls')
)

const closeWhenOutsideMainNav = e => {
  const activeElement = e.target
  if (!navWrapper.contains(activeElement)) {
    navMenuButtonToggleFlow(navMenuButton)
  }
}

const navMenuButtonToggleFlow = elem => {
  const targetClassList = elem.target.classList
  targetClassList.toggle('hide')
  if (targetClassList.contains('hide')) {
    navWrapper.classList.remove('nav-opened')
    elem.setAttribute('aria-expanded', 'false')
    // toggle 'expanded' buttons inside hidden target
    const toggleButtonsInsideTarget = elem.target.querySelectorAll(
      `button[is='nav-toggle-button'][aria-expanded='true']`
    )
    toggleButtonsInsideTarget.forEach(button => button.toggleClick())
    document.removeEventListener('click', closeWhenOutsideMainNav)
    document.removeEventListener('focusin', closeWhenOutsideMainNav)
  } else {
    document.addEventListener('click', closeWhenOutsideMainNav)
    document.addEventListener('focusin', closeWhenOutsideMainNav)
    navWrapper.classList.add('nav-opened')
    elem.setAttribute('aria-expanded', 'true')
  }
}

const toggleFlowSwitch = (elem, modifierName) => {
  switch (modifierName) {
    case 'nav-menu-button':
      navMenuButtonToggleFlow(elem)
      break
    default:
      throw ''
  }
}

class ToggleButton extends HTMLButtonElement {
  connectedCallback () {
    try {
      // not used in this project
      callbackFlowSwitch(this, this.dataset.modifier)
    } catch {
      this.removeAttribute('hidden')
      if (this.getAttribute('aria-expanded') !== 'false') {
        this.setAttribute('aria-expanded', 'false')
        this.target.classList.add('hide')
      }
    }
    this.addEventListener('click', this.toggleClick.bind(this))
  }

  toggleClick () {
    try {
      toggleFlowSwitch(this, this.dataset.modifier)
    } catch {
      const targetClassList = this.target.classList
      targetClassList.toggle('hide')
      if (targetClassList.contains('hide')) {
        this.setAttribute('aria-expanded', 'false')
        // toggle 'expanded' buttons inside hidden target
        const toggleButtonsInsideTarget = this.target.querySelectorAll(
          `button[is='nav-toggle-button'][aria-expanded='true']`
        )
        toggleButtonsInsideTarget.forEach(button => button.toggleClick())
      } else {
        this.setAttribute('aria-expanded', 'true')
      }
    }
  }

  get target () {
    return document.getElementById(this.getAttribute('aria-controls'))
  }
}

customElements.define('toggle-button', ToggleButton, {
  extends: 'button'
})
