import HomePageComponent from '../components/homePage'
import Navbar from '../components/common/navbar'

function HomePage(){
    return(
        <div>
            <Navbar/>
            <HomePageComponent/>
        </div>
    )
}

export default HomePage;