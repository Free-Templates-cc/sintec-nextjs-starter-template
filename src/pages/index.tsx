import Image from 'next/image'
import { Inter } from 'next/font/google'
import Bootstrap from '../components/bootstrap';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <>
  <Bootstrap />
  </>
}
