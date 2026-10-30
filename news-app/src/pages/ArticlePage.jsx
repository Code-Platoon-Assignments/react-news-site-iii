import {useParams, useOutletContext} from 'react-router'
import Article from '../components/Article'

function ArticlePage (){

    const { getArticleById } = useOutletContext()
    let {articleID} = useParams()
    const article = getArticleById(articleID)

    if (!article) return <p>Article not found</p>

    return (
        <div>
            <Article {...article} />
        </div>
    )
}

export default ArticlePage
