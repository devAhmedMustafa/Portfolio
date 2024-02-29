import ColliderObject from "../graphics systems/ColliderObject";

export default function Skills(){
    return (
        <div className="w-full bg-black h-[500px] relative">
            <ColliderObject delta={0.06} speed={20}/>
        </div>
    )
}