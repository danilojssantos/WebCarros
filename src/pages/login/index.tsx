import logoImg from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import { Container } from "../../components/container"
import { Input } from '../../components/input'
import {useForm} from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
  email: z.string().email("Insira um email válido").min(1, "campo de email é obrigatório"),
  password: z.string().min(1, "o campo de email é obrigatório"),
})

type FormData = z.infer<typeof schema>
export function Login(){
  const {register,handleSubmit,formState:{errors} } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode:"onChange"
  })

  function onSubmit(data:FormData){
    console.log(data)
  }
  return(
    <Container>
    
    <div className="w-full min-h-screen flex justify-center items-center 
    flex-col gap-4">
      <Link to="/" className="mb-6 max-w-sm w-full ">
        <img src={logoImg} alt="Logo do site"
        className="w-full" />
      </Link>
         <form 
         className="bg-white max-w-xl w-full rounded-lg p-4"
         onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <Input 
            type="email" placeholder="digite seu email"
            name="email"
            error={errors.email?.message}
            register={register}
            />

          </div>  
          <div className="mb-3">
            <Input 
            type="password" placeholder="digite sua senha"
            name="password"
            error={errors.password?.message}
            register={register}
            />

          </div>  
          <button type="submit" className="bg-zinc-900 w-full rounded-md text-white h-10 font-medium">
            Acessar
          </button>

         </form>
         <Link to="/register">
            Ainda não possui uma conta? Cadastre-se
         </Link>
    </div>
    </Container>
  )
}
