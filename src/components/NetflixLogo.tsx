import Image from 'next/image'
import Logo from '../../public/netflix_logo.png';
// import Logo from '@/public/netflix_logo.png';

export const NetflixLogo = () => {
  return (
    // <Image src={Logo} alt='logo.png' width={40} height={40}/>
    <>
    <h1 className='uppercase text-3xl text-red-600 font-bold'>Netflix</h1>
    </>
  )
}
