import {useEffect, useState} from "react";

const useFetch = (url) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
    const fetchBlogs = async () => {
        const response = fetch(url, {
            headers: {
                'accept': 'application/json'
            },
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.items);
                setBlogs(data.items)
            }).catch((error) => (console.log(error)))
    };
    fetchBlogs()
    }, []);
  return {blogs}
}

export default useFetch;
// const blogCards = blogs.map((value) => (<BlogCard key={value.id} data={value}/>));