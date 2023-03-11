export const MovieView = ({movie, onBackClick}) => {
    return (
        <>
        <div>{movie.title}</div>
        <button onClick={onBackClick}>Back</button>
        </>
    )
}