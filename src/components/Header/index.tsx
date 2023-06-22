import { Container } from '@/styles/global'
import Image from 'next/image'
import logoImg from '../../assets/logo.svg'
import { HeaderContainer } from './styles'
import Link from 'next/link'

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Link href={'/'} aria-label="link home">
          {' '}
          <Image src={logoImg} alt="" />
        </Link>
      </Container>
    </HeaderContainer>
  )
}
