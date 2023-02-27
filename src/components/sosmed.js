import '../css/sosmed.css';
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Sosmed = () => {
    return ( 
        <>
        <div className="sosmed-container">
            <h2>Contact Us</h2>
            <div className="sosmed-row">
                <div className="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, harum qui suscipit doloremque facere minus similique voluptatibus quidem at unde vel </p>
                </div>
                <div className="sosmed">
                    <ul>
                        <li><FaYoutube id='icon'/> RBull</li>
                        <li><FaWhatsapp id='icon'/> 089602809437</li>
                    </ul>
                    <ul>
                        <li><FaFacebook id='icon'/> 089602809437</li>
                        <li><FaInstagram id='icon'/> RedBull</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Sosmed;