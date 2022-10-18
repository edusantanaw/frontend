import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import {useApi} from '../hooks/useHooks'
import img0 from '../assets/img0.webp'
import img1 from '../assets/img1.webp'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'

function Articles() {

    const {data , error, loading} = useApi('/article/category')
    
    const imgs = [img0,img1, img2, img3]
    return (
        <>
            <div className={styles.category}>
                <h1>Categorias</h1>
                {loading && <span>Carregando...</span>}
                <div>
                    {data.length > 0 &&
                        data.map((category, i) => (
                            <div key={i} className={styles.category_card}>
                                <Link to={`/category/${category.name}`}>
                                    <div className={styles.card}>
                                        <h1>{category.name}</h1>
                                        <img src={imgs[i]} alt="category Image" />
                                        <p>total de artigos: {category.totArticles}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                </div>
                {error && <span>{error}</span>}
            </div>
        </>
    )
}


export default Articles