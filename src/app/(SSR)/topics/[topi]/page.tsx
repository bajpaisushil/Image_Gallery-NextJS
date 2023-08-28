import { UnsplashImage } from "@/models/unsplashImage";
import Image from "next/image";
import styles from './TopicPage.module.css';
import { Metadata } from "next";

interface PageProps{
    params: {topi: string}
}
export function generateMetadata({params: {topi}}: PageProps): Metadata{
    return{
        title: topi+"-NextJS Image Gallery"
}
}
export function generateStaticParams(){
    return ["health", "fitness", "coding"].map(topic=> ({topic}))
}

export default async function Page({params: {topi}}: PageProps){
    const response=await fetch(`https://api.unsplash.com/photos/random?query=${topi}&count=31&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
    const images: UnsplashImage[]=await response.json();

    return (
        <div>
            <h1>Topic - {topi}</h1>
            {
                images?.map(image=>(
                    <Image
                    src={image.urls.raw}
                    width={250}
                    height={250}
                    alt={image.description}
                    key={image.urls.raw}
                    className={styles.image}
                    />
                ))
            }
        </div>
    )
}