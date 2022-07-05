import Product from "./product/Product"
import { useEffect, useState, useRef } from "react"

import * as Service from './Service'
import Loading from './loading.gif'

const Home = () => {

    const [product, setProduct] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        Service.getAll(pageNumber)
            .then(result => {
            
                setProduct(result);
                setLoading(true)
            })

    }, [pageNumber]);

    const loadMore = () => {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
    }


    const pageEnd = useRef()

    useEffect(() => {
        if (loading) {
            const observer = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                    loadMore()
                }
            },
                { threshold: 1 });
            observer.observe(pageEnd.current)
        }
    }, [loading])
    return (
        <>
            {
                product.length > 0
                    ? (
                        <ul className="overview">
                            {product.map(x => <Product key={x.name} product={x} />)}
                        </ul>
                    )
                    : <p>No course in database!</p>
            }
            <div className="loading">
                <img src={Loading} alt="loading"/>
            </div>
            <p ref={pageEnd}>end</p>
        </>

    )

}

export default Home