import Image from 'next/image'
import Logo from '../../public/netflix_logo.png';
// import Logo from '@/public/netflix_logo.png';

export const NetflixLogo = () => {
  return (
    <Image src={Logo} alt='logo.png' width={40} height={40}/>
  )
}
