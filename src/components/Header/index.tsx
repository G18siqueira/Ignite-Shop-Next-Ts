import { Container } from '@/styles/global'
import Image from 'next/image'
import logoImg from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Image src={logoImg} alt="" />
      </Container>
    </HeaderContainer>
  )
}
