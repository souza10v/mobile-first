import { BackIcon } from "@/components/icons";
import styles from "./page.module.css";
import Card from "@/components/card";

interface DrinkPageProps {
    searchParams: {
        search: string;
    }
}

export default function DrinkPage({ searchParams }: DrinkPageProps) {
    console.log(searchParams.search)
    return (
       <main className={styles.main}>
          <header className={styles.header}>
                <button className={styles.backBtn}>
                    <BackIcon/>
                </button>
                <h1 className={styles.title}>{searchParams.search}</h1> 
                <div></div>
            </header>
            <div className={styles.cardList}>
            <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/twtbh51630406392.jpg" title="Caipirinha" />
            <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/twtbh51630406392.jpg" title="Caipirinha" />
            <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/twtbh51630406392.jpg" title="Caipirinha" />
            <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/twtbh51630406392.jpg" title="Caipirinha" />
            <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/twtbh51630406392.jpg" title="Caipirinha" />
            </div>
       </main>
    )
}