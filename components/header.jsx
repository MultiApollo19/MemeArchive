import Image from "next/image"
import Link from "next/link"
import logo from "../public/logo.png"

export default function Header(){
    return(
        <div className="flex flex-nowrap h-12 flex-row bg-gray-700 w-screen dark:border-gray-900 dark:text-white z-0 shadow-lg">
            <Image src={logo} width={72} height={32} alt={logo} className="py-1"/>
            <h2 className="text-2xl py-2 ml-6">Meme archive</h2>
            
            <div className="py-2 pl-6">
                <Link href="#" className="text-2xl"> TEST</Link>
            </div>
        </div>
        
    )
}