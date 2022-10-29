import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Head from 'next/head'

export default function Account(){
    const session = useSession()
    const supabase = useSupabaseClient()

    async function handleSubmit(event){
        
        event.preventDefault();
        const email = event.target.email.value;

        if(!email){
            alert("Email is neded!")
        }else{
            const { data, error } = await supabase.auth.signInWithOtp({
                email: email,
            })
            console.log(data)
            console.log(error)
        }
        /**/
    }

    return(
        <div className="flex flex-col items-center justify-center bg-white mt-32 w-1/4 h-1/4 mx-auto rounded-xl shadow-lg">
            <Head>
                <title>Meme Archive | Login</title>
            </Head>
                <h1 className="flex text-3xl text-black pb-10">Login using MagicLink</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex mx-auto text-black "><label htmlFor="email">Email: </label><input className="text-xl text-black items-black w-max rounded-md border-2 shadow-lg ml-2" type='email' id='email' name='email'></input></div>
                    <div className="flex flex-row">
                    <button className="flex  text-black mx-auto  text-xl mt-2 bg-blue-500 rounded-lg p-2 hover:bg-blue-200 hover:border-2 hover:border-blue-500 shadow-lg transition-all duration-100 ease-linear cursor-pointer" type='submit' name='login'>Log in</button>
        
                    </div>
                
                
                </form>
                <div>
        </div>
            </div>
            
        
    )
}