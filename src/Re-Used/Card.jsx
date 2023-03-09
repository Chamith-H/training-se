export default function Card (props){
    return (
        <div className="Card">
            <h1>{props.Title}</h1>
            <p>{props.Description}</p>
        </div>
    )
}
