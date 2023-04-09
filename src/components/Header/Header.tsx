import React, { useRef } from 'react'
import TopNav from '../TopNav/TopNav'
import MainMenu from '../MainMenu/MainMenu'
import SearchBar from '../SearchBar/SearchBar'
import useVerticalScrollEvent from '@/hooks/useVerticalScrollEvent'

type Props = {}

const Header = (props: Props) => {

  const stickyRef = useRef<HTMLDivElement>(null);

  useVerticalScrollEvent((evt:any) => {
    if(evt.currentTarget.scrollY >= 172) {
      (stickyRef.current as HTMLDivElement).classList.add('navbar_fixed');
      return;
    } 
    if(evt.currentTarget.scrollY <= 42) {
      (stickyRef.current as HTMLDivElement).classList.remove('navbar_fixed');
      return;
    }
    
  });

  
  return (
    <header className="header_area" ref={stickyRef}>
        <TopNav />
        <MainMenu />
        
        <SearchBar />
      </header>
  )
}

export default Header