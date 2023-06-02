import { styled } from '..'

export const HomeContainer = styled('section', {
  width: '100%',
  position: 'relative',

  '@media (min-width: 73.75rem)': {
    display: 'flex',
    maxWidth: 'calc(100vw - ((100vw - 73.75rem)/2))',
    minHeight: '41rem',
    margin: '0 0 0 auto',
  },
})
export const SliderContainer = styled('div', { width: '100%' })
export const SliderButtons = styled('div', {
  button: {
    backgroundColor: 'transparent',
    border: '0',
    position: 'absolute',
    top: '50%',
    transform: 'translatey(-50%)',
    cursor: 'pointer',

    '&:first-of-type': {
      left: '1rem',
    },
    '&:last-of-type': {
      right: '1rem',
    },

    svg: {
      fontSize: '24px',
      lineHeight: '0',
      color: '$white',

      '@media (min-width: 73.75rem)': {
        fontSize: '48px',
      },
    },
  },
})
export const Product = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%);',
  borderRadius: '8px',
  position: 'relative',
  overflow: 'hidden',

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },

  img: { objectFit: 'cover' },

  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'rgba(0, 0, 0,.6)',
    padding: '2rem',
    borderRadius: '6px',
    position: 'absolute',
    bottom: '.25rem',
    left: '.25rem',
    right: '.25rem',

    '@media (min-width: 73.75rem)': {
      transform: 'translateY(110%)',
      opacity: 0,
      transition: 'all .2s ease-in-out',
    },

    strong: {
      fontSize: '$lg',
      color: '$white',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
  },
})
