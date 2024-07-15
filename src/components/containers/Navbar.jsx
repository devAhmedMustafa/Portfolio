import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="w-full  text-primary my-1 rounded-full py-4 z-50">
            <ul className="list-none flex justify-center gap-6 text-xl z-50">
                <li>
                    <Link target="_blank" to="https://twitter.com/meAhmedMustafa">
                        <i className="fa-brands fa-x-twitter"></i>
                    </Link>
                </li>
                <li>
                    <Link target="_blank" to="https://www.instagram.com/ahmedmustafa.u">
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                </li>
                <li>
                    <Link target="_blank" to="https://www.linkedin.com/in/ahmedmustafadev/">
                        <i className="fa-brands fa-linkedin"></i>
                    </Link>
                </li>
                <li>
                    <Link target="_blank" to="https://github.com/devAhmedMustafa">
                        <i className="fa-brands fa-github"></i>
                    </Link>
                </li>
            </ul>
        </div>
    )
}