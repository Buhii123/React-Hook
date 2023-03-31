import { useParams, useHistory } from "react-router-dom"
import useFetch from "../costomize/fetch";
const DetailBlog = () => {
    let { id } = useParams();
    let history = useHistory();
    const handleBackData = () => {
        history.push("/blog");
    }
    const { data: dataBlogDetail, isLoading, isError }
        = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false)

    return (
        <>
            <div>

                <div className="blog-detail">
                    {dataBlogDetail &&
                        <>
                            <div className="title">
                                Blog ID: {id} ---  {isLoading === true ? 'Loading data ...' : dataBlogDetail.title}
                            </div>
                            <div className="content">
                                {dataBlogDetail.body}
                            </div>

                        </>
                    }
                </div>

                <div style={{ margin: "20px" }} > <button style={{ cursor: "pointer" }} onClick={handleBackData}>&lt;-- Back </button></div>
            </div>
        </>

    )

}
export default DetailBlog 