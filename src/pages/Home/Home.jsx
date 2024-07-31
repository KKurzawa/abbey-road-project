import './Home.css'
import Header from '../../components/Header/Header'
import Shows from '../../components/Shows/Shows'
import Band from '../../components/Band/Band'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <Shows />
            <Band />
            <Contact />
            <Footer />
        </>
    )
}

export default Home