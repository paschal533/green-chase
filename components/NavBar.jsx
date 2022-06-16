import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import Profile from '../assets/face.png';
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { ConnectButton } from "web3uikit";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const style = {
  wrapper: `bg-[white] z-10 border-b-4 fixed mb-20 overflow-x-hidden w-full justify-between w-screen px-[1.2rem] py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-black font-bold text-3xl`,
  space: `md:flex md:flex-1 flex md:w-[28vw] flex-0 w-[100%] mr-[3px] mx-[0.8rem] w-max-[650px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  headerItems: `md:flex w-full items-center justify-end`,
  headerItem: `text-black md:mt-[0px] mt-[10px] px-4 font-bold text-[#29303a] hover:text-[#c8cacd] cursor-pointer`,
  headerIcon: `text-[#8a939b] md:mt-[0px] mt-[10px] text-3xl font-black px-4 hover:text-[#c8cacd] cursor-pointer`,
}

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          {/*<Image src={Logo} height={40} width={40} />*/}
          <div className={style.logoText}>Greenchase</div>
        </div>
      </Link>
      <div className="hidden md:flex"> 
        <div className={style.space} />
        <div className={style.headerItems}>
          <Link href="/collections">
            <div className={style.headerItem}> Collections </div>
          </Link>
          <div className={style.headerItem}> Stats </div>
          <div className={style.headerItem}> Resources </div>
          <div className={style.headerItem}> Create </div>
          <div className={style.headerIcon}>
            <CgProfile />
          </div>
          <div className={style.headerIcon}>
            <MdOutlineAccountBalanceWallet />
          </div>
          <div className="">
            <ConnectButton />
          </div>
        </div>
      </div>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md bg-[white] text-black animate-slide-in"
          >
            <div className={style.headerItems}>
              <Link href="/collections">
                <div className={style.headerItem}> Collections </div>
              </Link>
              <div className={style.headerItem}> Stats </div>
              <div className={style.headerItem}> Resources </div>
              <div className={style.headerItem}> Create </div>
              <div className={style.headerIcon}>
                <Image src={Profile} height={30} width={30} />
              </div>
              <div className={style.headerIcon}>
                <MdOutlineAccountBalanceWallet />
              </div>
              <div>
                <ConnectButton />
              </div>
            </div>
            {toggleMenu && (
              <AiOutlineClose fontSize={28} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar;