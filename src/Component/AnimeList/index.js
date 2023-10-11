import Image from "next/image"
import Link from "next/link"


const AnimeList = ({title, images, id}) => {
    return (  
        <Link href={`/${id}`} className="cursor-pointer">
            <Image src={images} alt="kaga bisa boss" width={350} height={350} className="object-cover" />
            <h3 className="font-bold md:text-xl sm:text-md p-4">{title}</h3>
        </Link>
    )
}

export default AnimeList