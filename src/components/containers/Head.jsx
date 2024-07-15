import "@styles/Head.css"

export default function Head(){
    return (
        <div className="rounded-sm p-4 flex items-center justify-center relative overflow-hidden">
            <Personal name="Game Developer"/>

        </div>
    )
}

function Personal({name}){
    return(
        <div className="flex flex-col text-primary items-center gap-2">
            <h1 className="text-4xl md:text-6xl lg:text-9xl title selection:bg-none flex mb-8 items-center cursor-default text-shadow-sm">Ahmed <span className="-z-50">Mustafa.</span></h1>
            <h1 className="text-lg lg:text-xl z-20">{name} & Software Engineer</h1>
        </div>

    );
}