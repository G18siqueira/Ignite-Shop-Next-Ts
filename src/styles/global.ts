import { globalCss, styled } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border box',
  },

  'html, body': {
    'overflow-x': 'hidden',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
})

export const Container = styled('div', {
  width: '100%',
  maxWidth: '1180px',
  margin: '0 auto',
  padding: '0 1.5rem',
})
