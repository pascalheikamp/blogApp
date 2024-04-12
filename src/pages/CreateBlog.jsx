import React, {useState} from "react";
import Navigation from "../components/Navigation.jsx";
import Blog from '../assets/create_blog.jpg';
import App from "../App.jsx";

export default function CreateBlog() {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    const createBlog = async (event) => {
        event.preventDefault();

        const response= await fetch('https://docent.cmi.hro.nl/bootb/demo/notes/', {
            method: 'POST',
            headers:{
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({title: title, author:author, body: description, date: date})
        })
        if(response.ok) {
            // Need to fix that modal window will show up
           alert("Blog was created")
        }
        else {
            alert("Error!")
        }
    }
    return (
        <>
            <Navigation/>
            <section className={"blog-section flex flex-col"}>
                <h2 className={"text-4xl pb-10 text-white"}>Create a blog</h2>
                <div className={"flex pb-10 ml-20 justify-between pr-10 pl-20"}>
                    <form method={"post"} onSubmit={createBlog} className={"mr-32 form-section bg-gray-50 "}>
                        <h3 className={" pt-5 font-bold text-2xl"}>Creating a new blog post!</h3>
                        <div className={"flex mt-14 justify-around"}>
                            <label className={"ml-14 pl-7"}>Title:</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} className={"mr-40 rounded border-2 border-blue-950"} type={"text"}/>
                        </div>
                        <div className={"flex mt-14 justify-around"}>
                            <label className={"ml-14 pl-7"}>Author:</label>
                            <input value={author} onChange={(e) => setAuthor(e.target.value)} className={"mr-40 rounded border-2 border-blue-950"} type={"text"}/>
                        </div>
                        <div className={"flex mt-10 justify-around"}>
                            <label className={"ml-16  pr-10 pr-2 pl-7"}>Description:</label>
                            <textarea  value={description} onChange={(e) => setDescription(e.target.value)} cols={35} rows={5} className={"mr-10  rounded border-2 border-blue-950"} type={"are"}/>
                        </div>
                        <div className={"flex mt-10 justify-around"}>
                            <label className={"ml-16  pr-10 pl-7"}>Date:</label>
                            <input  value={date} onChange={(e) => setDate(e.target.value)} type={"date"} className={"mr-44 border-2 border-blue-950 rounded w-48"}/>
                        </div>
                        <input className={" font-bold mt-10 h-10 bg-gray-900 w-28 text-white rounded ml-80"} value={'Create'} type={'submit'}/>
                    </form>
                    <div><img className={"form-image"} src={Blog}/> </div>
                </div>
            </section>
        </>
    )
}
