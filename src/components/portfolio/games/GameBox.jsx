export default function GameBox({game}){
    return (
        <div className="flex flex-col lg:flex-row justify-between p-5 text-white w-full">
            <div className="w-full lg:w-[50%] flex flex-col items-center gap-5">
                <p className="text-6xl">{game.name}</p>
                <Link to={game.game_link}><button className="text-2xl">Try it</button></Link>
            </div>

            <iframe className="w-full lg:w-[50%]" height={360} src={game.link} title="YouTube video player" allowFullScreen></iframe>
        </div>
    )
}