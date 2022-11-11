import Image from "next/image"
import Link from "next/link"
import logo from "../public/logo.svg"

export default function Header(){
    return(
        <div className="flex flex-nowrap h-12 flex-row bg-neutral-800 w-screen dark:border-gray-900 dark:text-white z-0 shadow-lg">
            <Image src={logo} width={128} height={64}/>
            <h2 className="text-2xl py-2 ml-2">Meme archive</h2>
            
            <div className="py-2 pl-6">
                <Link href="#" className="text-2xl bg-sky-800 rounded-3xl px-4 py-1 hover:bg-white hover:border-2 hover:border-sky-800 hover:text-black transition-all duration-100 ease-out cursor-pointer"> TEST</Link>
            </div>
        </div>
        
    )
}