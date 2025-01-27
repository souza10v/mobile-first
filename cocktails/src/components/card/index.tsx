import Image from "next/image";
import './styles.css';

interface CardProps {
    imageUrl: string;
    title: string;
}

export default function Card(props: CardProps) {
    return (
        <div className="card">
            <img
                src={props.imageUrl}
                alt={props.title}
                className="card-img"
            />

            {/* <Image
                src={props.imageUrl}
                alt={props.title}
                className="card-img"
                width={300} 
                height={200}
            /> */}

            <h3>
                {props.title}
            </h3>
        </div>
    )
}