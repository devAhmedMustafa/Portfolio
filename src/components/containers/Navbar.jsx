export default function Navbar(){
    return (
        <div className="w-full bg-primary text-white my-1 rounded-full py-4">
            <ul className="list-none flex justify-center gap-6 text-lg">
                <li><i className="fa-brands fa-x-twitter"></i></li>
                <li><i className="fa-brands fa-instagram"></i></li>
                <li><i className="fa-brands fa-linkedin"></i></li>
            </ul>
        </div>
    )
}