
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Tentang from '../components/Tentang'
import logo from '../assets/redbull.png'


const About = () => {
    return (
        <div className='flex flex-col w-full items-center'>
        <Navigation />
        <Tentang />
        <div className="row">
                <div className="column1 ml-20 ">
                <div className='flex flex-row mb-4'>
                <img className="w-20 h-18 mr-2 ml-16" src={logo} alt="logo"/>
                    <h2 className="mt-6">RedBull</h2>
                </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis accusamus ea ducimus exercitationem beatae eius fugiat consequatur reiciendis voluptatem quibusdam ipsam laudantium, id sed tenetur. Nobis ea fuga corporis, labore ut quaerat tempora totam est excepturi reiciendis? Reiciendis vitae error exercitationem repudiandae minima laborum voluptates at possimus quos doloribus doloremque architecto debitis, repellat ipsam sunt totam. Odio neque omnis, magnam velit </p>
                </div>
                <div className="column ml-20">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis quam minus officia numquam ipsum? Id veniam, expedita ducimus recusandae sapiente possimus laborum aspernatur, consequuntur quisquam nesciunt error maiores sint. Ab cum dignissimos dicta neque sint iure recusandae quia commodi fuga, aliquam voluptate aut cupiditate nisi repellat blanditiis dolore eius illo corporis officiis! Minus aliquam quae libero veniam sequi, dolorum, molestias illum quasi consequuntur ut eius accusamus cupiditate iure dolore dicta tempore neque, mollitia nobis at! Consectetur eaque praesentium aperiam quia neque? Autem nam ullam vel saepe modi, sint dignissimos consequuntur eius architecto accusantium iste repellat ducimus eum aliquid!</p>
                    <button className=' mt-1'>Read More</button>
                </div>
            </div>
        <Footer/>
        </div>
    )
}
export default About