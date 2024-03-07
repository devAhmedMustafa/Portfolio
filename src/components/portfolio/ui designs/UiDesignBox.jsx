export default function UiDesignBox({design}){
    return (
        <div className="text-white p-4 flex flex-col gap-5">
            <h1 className="text-4xl">{design.name}</h1>
            <p>{design.desc}</p>

            <div className="columns-2 lg:columns-3">
                {design.images.map((img)=> <img src={img} alt=""/>)}
            </div>
        </div>
    )
}