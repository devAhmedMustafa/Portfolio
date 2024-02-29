export default function WebappBox({app}){
    return (
        <div className="text-white p-5 flex flex-col gap-4 w-full">
            <h1 className="text-4xl">{app.name}</h1>
            <p className="text-md mx-5">{app.desc}</p>
            <iframe width={'100%'} height={'700px'} src={app.link}></iframe>
        </div>
    )
}