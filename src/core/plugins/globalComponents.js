import {
  BlackInput,
  BlackCard,
  BlackDropdown,
  BlackButton,
  BlackCheckbox,
} from '@/components/black/index'
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component(BlackInput.name, BlackInput)
    Vue.component(BlackCard.name, BlackCard)
    Vue.component(BlackDropdown.name, BlackDropdown)
    Vue.component(BlackButton.name, BlackButton)
    Vue.component(BlackCheckbox.name, BlackCheckbox)
  },
}

export default GlobalComponents
