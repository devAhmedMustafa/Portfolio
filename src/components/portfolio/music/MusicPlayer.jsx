export default function MusicPlayer({soundtrack}){
    return (
        <div className="w-full lg:w-[50%]">
            <iframe width="100%" height="166" src={soundtrack.link}></iframe>
        </div>
    )
}