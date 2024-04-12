import React, {useEffect, useRef, useState} from "react";
import DeleteIcon from '../assets/delete-icon.png';
import EyeIcon from '../assets/eye_icon.png';
import {Link} from "react-router-dom";
import Detail from "../pages/Detail.jsx";

export default function BlogCard(props) {

    const blogElement = useRef(null)

    const deleteBlogCard = async () => {
        const blogId = blogElement.current.id;
        const response = await fetch(`https://docent.cmi.hro.nl/bootb/demo/notes/${blogId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.ok) {
            console.log('Blog post successfully removed')
            window.location.reload();
        } else {
            console.error("Failed to remove blog post")
        }
    }

    return (
        <>
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div ref={blogElement} id={props.data.id}
                     className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                        <img src="https://source.unsplash.com/collection/225/800x600"
                             className="h-64 w-full rounded-t pb-6"/>
                        <p className="w-full text-gray-600 text-xs md:text-sm px-6">{props.data.title}</p>
                        <p className="text-black mx-auto">
                            {props.data.body}
                        </p>
                    </a>
                </div>
                <div
                    className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center justify-between">
                        <img className="w-8 h-8 rounded-full mr-4 avatar"
                             data-tippy-content="Author Name"
                             src="http://i.pravatar.cc/300" alt="Avatar of Author"/>
                        <button id={props.data.id} onClick={deleteBlogCard} className={" bg-transparent"}>< img
                            className={"w-10 h-10"} src={DeleteIcon}/></button>
                        <Link to={`/detail/${props.data.id}`}>< img
                            className={"w-10 h-10"} src={EyeIcon}/></Link>
                        <p className="text-gray-600 text-xs md:text-sm">{props.data.date}</p>
                    </div>
                </div>
            </div>
        </>
    )
}