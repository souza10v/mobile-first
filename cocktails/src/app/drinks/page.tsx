import styles from "./page.module.css";

interface DrinkPageProps {

}

export default function DrinkPage(props: DrinkPageProps) {
    return (
       <main className={styles.main}>
        <h1 className={styles.title}>Lemon</h1>
       </main>
    )
}