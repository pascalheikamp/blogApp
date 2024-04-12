import React from "react";
import {useState, useRef} from "react";
import Search from '../assets/search_icon.png';

function Navigation() {

        // const [isOpen, setIsOpen] = useState("");
        // const [search, setSearch] = useState("");
        //
        // const inputRef = useRef<HTMLInputElement>(null);
        // const blogs = [{name:"alfa", }, {name:"porsche"}];

        // const handleClick = ()=> {
        //     if(!isOpen) {
        //         inputRef.current?.focus();
        //     }
        //     setIsOpen(!Boolean(isOpen) ? "open" : "");
        // }
        //
        // const handleChange = e => setSearch(e.target.value);
        // const filteredBlogs =blogs.filter(
        //     blog => search.length & blog.name.toLowerCase().includes(search.toLowerCase())
        // )
    return(
        <>
            {/*// <!--Nav-->*/}
            <nav className="mt-0 w-full">
                <div className="container mx-auto flex items-center">

                    <div className="flex w-1/2 pl-4 text-sm">
                        <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                            <li className="mr-2">
                                <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2"
                                   href="/">Home</a>
                            </li>
                            <li className="mr-2">
                                <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2"
                                   href="post.html">Categories</a>
                            </li>
                            <li className="mr-2">
                                <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2"
                                   href="multimenu post.html">Biograpy</a>
                            </li>
                            <li className="mr-2">
                                <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2"
                                   href="#">Events</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex w-1/2 justify-end content-center">
                       <button className={"bg-transparent"} ><img className={"w-9 h-9"} src={Search} /></button>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navigation;