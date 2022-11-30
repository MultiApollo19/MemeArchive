import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

import Image from "next/image"
import Link from "next/link"
import logo from "../public/logo.svg"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

export default function Header(){
    const supabase = useSupabaseClient()
    const router = useRouter()
    const [user,setUser] = useState('')

    useEffect(()=>{
        getData()
        
    }    
    ,[])
    async function getData(){
        const user = await supabase.auth.getUser()
        
        console.log(user.data.user)
        setUser(user.data.user)
    }
    async function logOut(){
        await supabase.auth.signOut()
        router.reload()
    }
    //console.log(user)
    return(
        
        <div className="flex flex-nowrap h-12 flex-row bg-neutral-800 w-screen dark:border-gray-900 dark:text-white z-0 shadow-lg">
            <Image src={logo} width={128} height={64} alt="KekW"/>
            <h2 className="text-2xl py-2 ml-2">Meme archive</h2>
            {!user&&(<div className="py-2 pl-6">
                <Link href="sing-up" className="text-lg bg-sky-800 shadow-2xl rounded-md px-4 mt-2 hover:bg-sky-200 hover:text-black transition-all duration-200 ease-out cursor-pointer">Rejestracja</Link>
                <Link href="login" className="text-lg ml-2">Logowanie</Link>
            </div>)
            }
            {user&&(<div className="py-2 pl-6">
                <Link href="/" className="text-lg mr-2">{user.user_metadata.nickname}</Link>
                <Link href="/" onClick={e => {logOut()}} className="text-lg bg-sky-800 shadow-2xl rounded-md px-4 mt-2 hover:bg-sky-200 hover:text-black transition-all duration-200 ease-out cursor-pointer">Wyloguj</Link>
                
            </div>)
            }
        </div>
        
    )
    
}