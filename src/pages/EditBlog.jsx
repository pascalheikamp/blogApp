import React, {useEffect, useState} from "react";
import Navigation from "../components/Navigation.jsx";
import BlogHeader from "../assets/blog-header.jpeg";
import Event from "../assets/event.jpg";
import {json, Link, useParams} from "react-router-dom";

export default function EditBlog() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("")
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const {id} = useParams();

    useEffect(() => {
        editBlog();
    }, []);
    const editBlog = async(event) => {
        event.preventDefault();
        const result = await fetch('https://docent.cmi.hro.nl/bootb/demo/notes/' + id, {
            method:'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({title: title, author:author, body: description, date: date})
        })
        if(result.ok) {
            alert("Blog is successfully edited");
        }
        else {
            alert("Error");
        }
    }

    return (
        <>
            <Navigation></Navigation>
            <section className={"detail-section pt-10 pb-10 content grid grid-cols-1 bg-gray-50 "}>
                <div className={"col-span-9 flex flex-col justify-around"}>
                </div>
                <div className={"ml-5 mr-5 border-2 border-gray-400 pt-20 bg-white"}>
                    <h2 className={"text-3xl font-bold"}>Edit blog</h2>
                    <form method={"post"} onSubmit={editBlog}>
                        <div className={"flex mt-14 justify-center"}>
                            <label className={"ml-14 font-bold text-xl pr-10 pl-7"}>Title:</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} className={"mr-40 rounded border-2 border-blue-950"} type={"text"}/>
                        </div>
                        <div className={"flex mt-14 justify-center"}>
                            <label className={"ml-14 font-bold text-xl pr-10 pl-7"}>Author:</label>
                            <input value={author} onChange={(e) => setAuthor(e.target.value)} className={"mr-40 rounded border-2 border-blue-950"} type={"text"}/>
                        </div>
                        <div className={"flex mt-10 justify-center"}>
                            <label className={"ml-14  font-bold text-xl  pr-10 pr-10 pl-7"}>Description:</label>
                            <textarea  value={description} onChange={(e) => setDescription(e.target.value)} cols={35} rows={5} className={"mr-20  rounded border-2 border-blue-950"} type={"are"}/>
                        </div>
                        <div className={"flex mt-10 justify-center"}>
                            <label className={"ml-16  font-bold text-xl  pr-10 pl-7"}>Date:</label>
                            <input  value={date} onChange={(e) => setDate(e.target.value)} type={"date"} className={"mr-44 border-2 border-blue-950 rounded w-48"}/>
                        </div>
                        <button className={"bg-gray-900 w-28 rounded"}><Link className={"text-white"} to={`/detail/${id}`}>Back</Link> </button>
                        <input className={" mb-10 font-bold mt-10 h-10 bg-gray-900 w-28 text-white rounded ml-80"} value={'Edit'} type={'submit'}/>
                    </form>
                </div>
            </section>
        </>
    )
}
