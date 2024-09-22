import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quikSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"
import Search from "./_components/search"

// TODO: receber agendamento como prop

const Home = async () => {
  //llamar a la base de datos
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershop = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl">
          Olá, <span className="font-bold">Felipe!</span>
        </h2>
        <p>Sexta, 2 de Fevereiro</p>

        {/* BUSQUEDA */}
        <div className="mt-6">
          <Search />
        </div>

        {/* BUSQUEDA RAPIDA*/}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quikSearchOptions.map((option) => (
            <Button className="gap-2" variant={"secondary"} key={option.title}>
              <Image
                alt={option.title}
                src={option.imageUrl}
                width={16}
                height={16}
              />
              {option.title}
            </Button>
          ))}
        </div>

        {/* BANNER */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* AGENDA */}
        <BookingItem />
        {/* RECOMENDADOS */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        {/* POPULARES */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershop.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Home
