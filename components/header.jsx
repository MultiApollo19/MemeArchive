import Image from "next/image"
import logo from "../public/logo.png"

export default function Header(){
    return(
        <div className="h-14 w-screen bg-slate-500 flex-auto flex">
            <Image src={logo} width={128} height={64} alt="logo"/>
        </div>
    )
}