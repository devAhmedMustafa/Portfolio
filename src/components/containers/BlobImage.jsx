export default function BlobImage({url}){
    console.log(url)
    return (
        <div className="max-w-[46%] w-fit rounded-xl overflow-hidden h-fit">
            <img className="w-fit" src={url} alt="Page Image"></img>
        </div>
    )
}