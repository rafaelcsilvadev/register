import { Bruno_Ace } from 'next/font/google';
import styles from './style.module.scss';
import NavBar from '@/app/(auth)/components/navBar/navbar';

const brunoAce = Bruno_Ace({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default function Menu() {
  return (
    <main>
      <NavBar/>
    </main>
  );
}
