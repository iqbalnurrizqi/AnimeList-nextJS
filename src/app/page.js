import AnimeList from "@/Component/AnimeList"
import Link from "next/link"

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const anime = await response.json()
  console.log(anime)

  return (
    <div>
    <div className="p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">PALING POPULER</h1>
    <Link href="/populer" className="md:text-xl text-md underline hover:text-indigo-500 transition-all">Lihat semua</Link>
    </div>
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
    {anime.data.map(data => {
      // console.log(data.images.webp.image_url)
      return(
        <div key={data.mal_id} className="shadow-xl">
        <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id}/>
        </div>
      )
        
    })}
    </div>
    </div>
  )
}

export default Home