import useFetch from "../costomize/fetch";
import './Blog.scss';
import { Link, NavLink } from 'react-router-dom';


const Blog = () => {
    let newBlogs = []
    const { data: dataBlogs, isloadding, isError } = useFetch("https://jsonplaceholder.typicode.com/posts/", false)
    if (dataBlogs && dataBlogs.length > 0) {
        newBlogs = dataBlogs.slice(0, 10);
        console.log(newBlogs);
    }
    return (
        <>
            <h1>Card Flip with Text</h1>
            <h3>Hover over the image below:</h3>
            <div className="container">
                {isloadding === false && newBlogs && newBlogs.length > 0 &&
                    newBlogs.map(item => {
                        return (
                            < Link to={`/blog/${item.id}`}>
                                <div className="flip-card" key={item.id}>
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={"./imags/Capture.PNG"} alt={"Avatar"} style={{ width: "300px", height: "300px" }} />
                                        </div>
                                        <div className="flip-card-back">
                                            <h1>Title</h1>
                                            <p>{item.title}</p>
                                            <p>{item.body}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
                {isloadding === true &&
                    <div style={{ textAlign: 'center !important', with: "100%", color: 'red' }} ><span>Loading Data...</span></div>

                }
            </div>

        </>
    )
}
export default Blog;