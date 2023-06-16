import { GetServerSideProps } from 'next'
import { stripe } from '@/lib/stripe'
import { useKeenSlider } from 'keen-slider/react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import {
  HomeContainer,
  Product,
  SliderButtons,
  SliderContainer,
} from '@/styles/pages/home'

import Stripe from 'stripe'
import Link from 'next/link'
import Image from 'next/image'

import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
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
        {products.map((product) => {
          return (
            <Link key={product.id} href={''} className="keen-slider__slide">
              <Product>
                <Image
                  src={product.imageUrl}
                  width={520}
                  height={480}
                  alt={''}
                />

                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          )
        })}
      </SliderContainer>

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
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount! / 100,
    }
  })
  console.log(products)
  return {
    props: {
      products,
    },
  }
}
