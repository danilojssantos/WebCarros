import { Container } from "../../components/container";

export function Home(){
  return(
    <Container>
      <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex
      justify-center gap-2">
        <input className="w-full border-2 rounded-lg h-9 px-3 outline-none"
          placeholder="Digite o nome do carro"
        />
        <button className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg">
          Buscar
        </button>
      </section>
      <h1 className="font-bold text-center mt-6 text-2xl mb-4">
        Carros novos e usados em todo Brasil</h1>
    </Container>
  )
}
