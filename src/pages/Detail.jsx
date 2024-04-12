import React, {useEffect, useState} from "react";
import BlogHeader from '../assets/blog-header.jpeg';
import Event from '../assets/event.jpg';
import {Link, useParams} from "react-router-dom";
import Navigation from "../components/Navigation.jsx";

export default function Detail() {
    const [blogDetail, setBlogDetail] = useState("");
    const {id} = useParams();
    useEffect(() => {
        showBlogDetail()
    }, []);

    const showBlogDetail = async () => {
        const result = await fetch('https://docent.cmi.hro.nl/bootb/demo/notes/' + id, {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            setBlogDetail(data)
        })
    }
    console.log(blogDetail.title);
    console.log(id);
    return (
        <>
            <Navigation></Navigation>
            <section className={"detail-section pb-10 content grid grid-cols-2 bg-gray-50 "}>
                <div className={"col-span-9 flex flex-col justify-around"}>
                    <div>
                        <img className={" h-96 md:[clip-path:polygon(0%_0%,100%_0%,100%_90%,0%_50%)] w-full"}
                             src={BlogHeader}/>
                    </div>
                    <div className={"flex"}>
                        <div className={"w-32 ml-5 mb-10 h-8 rounded pb-2 bg-gray-900 text-center text-white"}>
                            <h2 className={"text-2xl"}>{blogDetail.title}</h2>
                        </div>
                        <div className={"w-32 ml-5 mb-10 h-8 rounded pb-2 bg-gray-900 text-center text-white"}>
                            <h2 className={"text-2xl"}>Category</h2>
                        </div>
                    </div>
                </div>
                <div className={"ml-5 pt-20 bg-white"}><p>{blogDetail.body}</p>
                    <button className={"ml-64 mt-60 bg-blue-950 text-white"}><Link to={`/edit-blog/${blogDetail.id}`}
                                                                                   className={"text-xl text-white "}>Edit
                        blog</Link></button>
                    <p className={"flex pb-5 pl-5"}> Created at: {blogDetail.date}</p>
                </div>
                <div className={"mr-5"}><img className={"shadow-xl blog-image"} src={Event}/></div>
            </section>
        </>
    )
}