import CreateBlog from '../../blogApp/src/assets/create_blog.jpg';
import Connections from '../../blogApp/src/assets/connections.jpeg';
import './App.css'
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import BlogCard from "./components/BlogCard.jsx";
import {useEffect, useState} from "react";
import useFetch from "./hooks/useFetch.jsx";

function App() {

    const {blogs} = useFetch('https://docent.cmi.hro.nl/bootb/demo/notes/');
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(3);
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = blogs.splice(indexOfFirstPost, indexOfLastPost);
    const blogCards = blogs.map((value) => (<BlogCard key={value.id} data={value}/>));
    const pageNumbers = [];

    for(let i=0; i < Math.ceil(blogCards.length / postPerPage); i++) {
        console.log(i)
        pageNumbers.push(i)
    }

    console.log(pageNumbers);


    return (
        <>

            {/*// <!--Header-->*/}
            <div className="w-full m-0 p-0 bg-cover bg-bottom">
                <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
                    {/*// <!--Title-->*/}
                    <p className="text-xl md:text-2xl text-gray-500">Welcome to my Blog</p>
                </div>
            </div>
            {/*// <!--Container-->*/}
            <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">

                <div className="mx-0 sm:mx-6">

                    <Navigation/>

                    <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">

                        {/*// <!--Lead Card-->*/}
                        <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
                            <a href="post.html" className="flex flex-wrap no-underline hover:no-underline">
                                <div className="w-full md:w-2/3 rounded-t">
                                    <img src={CreateBlog}
                                         className="h-full w-full shadow"/>
                                </div>

                                <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                                        <div className="w-full font-bold mt-7 text-xl text-gray-900 px-6">
                                            Create your own blog and share it with others!
                                        </div>
                                        <div className={"mt-5 relative"}>
                                        <img className={"w-80 h-80 mx-auto"} src={Connections}/>
                                        <div className={"bg-gray-900  w-60 top-28 left-16 opacity-80 absolute"}>
                                        <p className="text-white pt-5 font-serif text-base px-6 mb-5">
                                            Share you experience with other people around the world
                                        </p>
                                        </div>
                                            <button className={" h-7 pb-10 relative bottom-16 shadow-xl bg-gray-700"}><a href="/create-blog" className={"text-xl text-white "}>Create a blog</a></button>
                                        </div>
                                    </div>
                                </div>

                            </a>
                        </div>
                        {/*// <!--/Lead Card-->*/}


                        {/*// <!--Posts Container-->*/}
                        <div className="flex flex-wrap justify-between pt-12 -mx-6">

                            {/*// <!--1/3 col -->*/}
                            {blogCards}

                            <section className={"ml-10"}>
                                <div className={"flex justify-center"}>
                                {/*<button className={"w-32 pt-1 text-center h-10"}>Page numbers</button>*/}
                                </div>
                            </section>
                            {/*// <!--1/2 col -->*/}
                            <div className="w-full md:w-1/2 p-6 mt-10 flex flex-col flex-grow flex-shrink">
                                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                                    <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                                        <img src="https://source.unsplash.com/collection/3657445/800x600"
                                             className="h-full w-full rounded-t pb-6"/>
                                        <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                                        <div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor
                                            sit amet.
                                        </div>
                                        <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                            Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                                        </p>
                                    </a>
                                </div>
                                <div
                                    className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                                    <div className="flex items-center justify-between">
                                        <img className="w-8 h-8 rounded-full mr-4 avatar"
                                             data-tippy-content="Author Name"
                                             src="http://i.pravatar.cc/300" alt="Avatar of Author"/>
                                        <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                                    </div>
                                </div>
                            </div>

                            {/*// <!--1/2 col -->*/}
                            <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                                <div
                                    className="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                                    <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                                        <img src="https://source.unsplash.com/collection/764827/800x600"
                                             className="h-full w-full rounded-t pb-6"/>
                                        <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                                        <div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor
                                            sit amet.
                                        </div>
                                        <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                            Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                                        </p>
                                    </a>
                                </div>
                                <div
                                    className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                                    <div className="flex items-center justify-between">
                                        <img className="w-8 h-8 rounded-full mr-4 avatar"
                                             data-tippy-content="Author Name"
                                             src="http://i.pravatar.cc/300" alt="Avatar of Author"/>
                                        <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                                    </div>
                                </div>
                            </div>


                            {/*// <!--2/3 col -->*/}
                            <div className="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
                                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                                    <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                                        <img src="https://source.unsplash.com/collection/325867/800x600"
                                             className="h-full w-full rounded-t pb-6"/>
                                        <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                                        <div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor
                                            sit amet.
                                        </div>
                                        <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                            Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                                        </p>
                                    </a>
                                </div>
                                <div
                                    className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                                    <div className="flex items-center justify-between">
                                        <img className="w-8 h-8 rounded-full mr-4 avatar"
                                             data-tippy-content="Author Name"
                                             src="http://i.pravatar.cc/300" alt="Avatar of Author"/>
                                        <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                                    </div>
                                </div>
                            </div>

                            {/*// <!--1/3 col -->*/}
                            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                                    <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                                        <img src="https://source.unsplash.com/collection/1118905/800x600"
                                             className="h-full w-full rounded-t pb-6"/>
                                        <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                                        <div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor
                                            sit amet.
                                        </div>
                                        <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                            Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                                        </p>
                                    </a>
                                </div>
                                <div
                                    className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                                    <div className="flex items-center justify-between">
                                        <img className="w-8 h-8 rounded-full mr-4 avatar"
                                             data-tippy-content="Author Name"
                                             src="http://i.pravatar.cc/300" alt="Avatar of Author"/>
                                        <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/*// <!--/ Post Content-->*/}
                    </div>
                </div>

            </div>

            <Footer></Footer>
        </>
    )
}

export default App
