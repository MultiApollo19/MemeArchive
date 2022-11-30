import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Head from 'next/head'
import { useRouter } from 'next/router';

export default function Login(){
    const router = useRouter();
    const session = useSession()
    const supabase = useSupabaseClient()
    async function handleSubmit(event){
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.passwd.value;
        const nickname = event.target.nick.value;
        if(!nickname){
            alert("Podaj nick!")
        }
        if(!email){
            alert("Podaj email!")
        }
        if(!password){
            alert("Podaj hasło")
        }
        else{
            if(password.length < 7){
                alert("Hasło musi być dłuższe niż 8 znaków")
            }
        }
        if(nickname&&email && password.length >=8){
            const {data} = await supabase.auth.signUp({
                email: email,
                password: password,
                options:{
                    data:{
                        nickname: nickname,
                        avatar: 'https://ui-avatars.com/api/?name='+nickname
                    }
                }                
            })
            const {error} =await supabase
            .from('profiles')
            .insert({id: data.user.id,avatar_url: 'https://ui-avatars.com/api/?name='+nickname,username: nickname}
            )
            console.log(data,error)
            alert("Wiadomość z linkiem aktywacyjnym została wysłana")
            router.push("/")

        }

        
    }

    return(
        <div className="flex flex-col items-center justify-center bg-neutral-500 mt-32 w-1/4 h-1/4 mx-auto rounded-xl shadow-xl ">
            <Head>
                <title>Meme Archive | Rejestracja</title>
            </Head>
                <h1 className="flex text-3xl text-black pb-6">Zarejestruj się</h1>
                <form onSubmit={handleSubmit}>
                <div className="flex mx-auto text-black "><label htmlFor="email">Nick: </label><input className="text-xl text-black items-black w-max rounded-md border-2 shadow-lg ml-2" type='text' id='nick' name='nick'></input></div>
                    <div className="flex mx-auto text-black mt-2"><label htmlFor="email">Email: </label><input className="text-xl text-black items-black w-max rounded-md border-2 shadow-lg ml-2" type='email' id='email' name='email'></input></div>
                    <div className="flex mx-auto text-black mt-2"><label htmlFor="passwd">Hasło: </label><input className="text-xl text-black items-black w-max rounded-md border-2 shadow-lg ml-2" type='password' id='passwd' name='passwd'></input></div>
                    <div className="flex flex-row">
                    <button className="flex  text-black mx-auto  text-xl mt-2 bg-sky-800 rounded-lg p-2 hover:bg-sky-200 hover:text-black transition-all duration-200 ease-out cursor-pointer" type='submit' name='sign-up'>Rejestracja</button>
        
                    </div>
                
                
                </form>
                <div>
        </div>
            </div>
            
        
    )
}