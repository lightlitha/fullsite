// Utilities
import { camelCase, upperFirst } from 'lodash'

export default function (sections = []) {
  return {
    name: 'LoadSectionSub',

    // Iterates the provide list of components
    // and returns a function that returns a
    // Promise.
    components: sections.reduce((acc, cur) => {
      const arr = cur.split('::')
      const name = upperFirst(camelCase(arr[1]))

      acc[`Section${name}`] = () =>
        import(`@/views/sections/${arr[0]}/${name}.vue`)

      return acc
    }, {}),

    data: () => ({ sections }),
  }
}
