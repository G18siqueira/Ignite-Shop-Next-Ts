import {
  HomeContainer,
  Product,
  SliderButtons,
  SliderContainer,
} from '@/styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

import Link from 'next/link'
import Image from 'next/image'

import camiseta1 from '../assets/camisetas/01.png'
import camiseta2 from '../assets/camisetas/02.png'
import camiseta3 from '../assets/camisetas/03.png'
import camiseta4 from '../assets/camisetas/04.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 50,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 2,
          spacing: 48,
        },
      },
    },
  })

  return (
    <HomeContainer>
      <SliderContainer ref={sliderRef} className="keen-slider">
        <Link href={''} className="keen-slider__slide">
          <Product>
            <Image src={camiseta1} width={520} height={480} alt={''} />

            <footer>
              <strong>Camiseta X</strong>
              <span>R$ 79,90</span>
            </footer>
          </Product>
        </Link>
        <Link href={''} className="keen-slider__slide">
          <Product>
            <Image src={camiseta2} width={520} height={480} alt={''} />

            <footer>
              <strong>Camiseta X</strong>
              <span>R$ 79,90</span>
            </footer>
          </Product>
        </Link>
        <Link href={''} className="keen-slider__slide">
          <Product>
            <Image src={camiseta3} width={520} height={480} alt={''} />

            <footer>
              <strong>Camiseta X</strong>
              <span>R$ 79,90</span>
            </footer>
          </Product>
        </Link>
        <Link href={''} className="keen-slider__slide">
          <Product>
            <Image src={camiseta4} width={520} height={480} alt={''} />

            <footer>
              <strong>Camiseta X</strong>
              <span>R$ 79,90</span>
            </footer>
          </Product>
        </Link>
      </SliderContainer>

      {instanceRef.current && (
        <SliderButtons>
          <button
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
          >
            <SlArrowLeft />
          </button>
          <button
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
          >
            <SlArrowRight />
          </button>
        </SliderButtons>
      )}
    </HomeContainer>
  )
}
