const StyleDictionary = require('style-dictionary')
const { formattedVariables } = StyleDictionary.formatHelpers

StyleDictionary.registerFormat({
  name: 'css/variables',
  formatter: function ({ dictionary, options }) {
    const { outputReferences } = options
    const theme = this.theme ? this.theme : ''
    return (
      `:root[data-theme='${theme}'] {\n` +
      formattedVariables({ format: 'css', dictionary, outputReferences }) +
      '\n}\n'
    )
  },
})

StyleDictionary.registerTransform({
  name: 'typography.roboto/shorthand',
  type: 'value',
  transitive: true,
  matcher: (token) => token.type === 'typography',
  transformer: (token) => {
    const { fontSize, lineHeight, fontFamily } = token.value

    const fontWeight = (token) => {
      switch (token) {
        case 'Thin':
          return 300
        case 'Regular':
          return 400
        case 'SemiBold':
          return 500
        case 'Bold':
          return 600
        case 'ExtraBold':
          return 700
        default:
          return 'auto'
      }
    }

    return `${fontWeight(token.value.fontWeight)} ${fontSize}pt${
      lineHeight !== 'AUTO' ? `/${lineHeight}` : ''
    } ${fontFamily}`
  },
})

StyleDictionary.registerTransform({
  name: 'shadow/shorthand',
  type: 'value',
  transitive: true,
  matcher: function (token) {
    return token.type === 'boxShadow'
  },
  transformer: (token) => {
    const shadow = Object.values(token.value)
    const [x, y, blur, spread, color] = shadow.map((s) => s.toString())
    return `${x}px ${y}px ${blur}px ${spread}px ${color}`
  },
})

StyleDictionary.registerTransform({
  name: 'breakpoint/px',
  type: 'value',
  transitive: true,
  matcher: function (token) {
    return token.path.includes('breakpoint')
  },
  transformer: (token) => {
    return `${token.value}px`
  },
})

StyleDictionary.registerTransformGroup({
  name: 'figmaJsonToCss',
  transforms: [
    'typography.roboto/shorthand',
    'shadow/shorthand',
    'breakpoint/px',
    'attribute/cti',
    'name/cti/kebab',
    'time/seconds',
    'content/icon',
    'size/rem',
    'color/css',
  ],
})

const globalStyleDictionary = StyleDictionary.extend({
  source: ['./src/styles/tokens/figmaTokens/global.json'],
  platforms: {
    css: {
      transformGroup: 'figmaJsonToCss',
      buildPath: './src/styles/tokens/',
      files: [
        {
          destination: '_global.css',
          format: 'css/variables',
          theme: '',
        },
      ],
    },
  },
})
globalStyleDictionary.buildPlatform('css')

const lightStyleDictionary = globalStyleDictionary.extend({
  source: ['./src/styles/tokens/figmaTokens/theme_light.json'],
  platforms: {
    css: {
      transformGroup: 'figmaJsonToCss',
      buildPath: './src/styles/tokens/',
      files: [
        {
          destination: '_light.css',
          format: 'css/variables',
          theme: 'light',
        },
      ],
    },
  },
})
lightStyleDictionary.buildPlatform('css')

const darkStyleDictionary = globalStyleDictionary.extend({
  source: ['./src/styles/tokens/figmaTokens/theme_dark.json'],
  platforms: {
    css: {
      transformGroup: 'figmaJsonToCss',
      buildPath: './src/styles/tokens/',
      files: [
        {
          destination: '_dark.css',
          format: 'css/variables',
          theme: 'dark',
        },
      ],
    },
  },
})
darkStyleDictionary.buildPlatform('css')
