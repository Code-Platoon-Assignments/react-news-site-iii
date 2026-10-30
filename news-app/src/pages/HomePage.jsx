import { useOutletContext } from "react-router"
import ArticleList from "../components/AritcleList"


function HomePage (){
    const { articles } = useOutletContext()

    return (
        <div>
            <ArticleList articles={articles}/>
        </div>
    )
}

export default HomePage
