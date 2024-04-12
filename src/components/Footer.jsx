import React from "react";

function Footer() {
    return(
        <>
            <footer className="bg-gray-600 bottom-0 w-full">
                <div className="container max-w-6xl mx-auto flex items-center px-2 py-8">
                    <div className="w-full mx-auto flex justify-start items-center">
                        <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                            <ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
                                <li>
                                    <a className="inline-block py-2 px-3 text-white no-underline" href="#">Active</a>
                                </li>
                                <li>
                                    <a className="inline-block text-white no-underline hover:text-orange-600  py-2 px-3"
                                       href="#">link</a>
                                </li>
                                <li>
                                    <a className="inline-block text-white no-underline hover:text-orange-600 hover py-2 px-3"
                                       href="#">link</a>
                                </li>
                                <li>
                                    <a className="inline-block text-white no-underline hover:text-orange-600 py-2 px-3"
                                       href="#">link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;