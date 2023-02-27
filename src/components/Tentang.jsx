
import logo from '../assets/redbull.png';
import React from 'react';
import '../css/tentang.css'
import img7 from '../assets/prf.jpg'
import sej from '../assets/his.jpg'
import vm from '../assets/vm.jpg'


function Tentang() {
    return(
        <>
    <div className='profil mt-10 pt-[80px]'>
        <div className="profiltentang_11">
        <img src={logo}  className='ml-20 my-auto w-32 h-32' alt="" height={200} width={200}/>
            <div className="kataa1">
            <h2 className='ml-4 text-4xl'>RedBull</h2>
                <p className="kataa2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem, atque iure, amet architecto harum culpa ab eius magnam, quisquam porro ratione facilis nisi. Atque eius corrupti culpa a accusantium saepe incidunt velit officia repudiandae quo? Nulla, hic expedita? Id, veritatis doloribus laudantium officiis a praesentium explicabo est earum deleniti illo, sed sint? Quod, soluta. Reprehenderit tenetur neque repellendus totam omnis, harum sint aspernatur illo voluptates? Assumenda, et possimus dolorem dicta nemo consequatur nobis nam tempore rerum, cupiditate architecto porro.
                </p>
            </div>26d
        </div>
    </div>

    <div className='judultim'>
        <h1>TIM KAMI</h1>

    </div>

    <div className="maincard">
        <div className="profile-card">
            <img src={img7} alt="" />
            <div class="caption">
                <h3>Zacky</h3>
                <p>Senior App Developer</p>
            </div>
        </div>
        <div className="profile-card">
        <img src={img7} alt="" />
            <div class="caption">
                <h3>Zacky</h3>
                <p>Senior App Developer</p>
            </div>
        </div>
        <div className="profile-card">
        <img src={img7} alt="" />
            <div class="caption">
                <h3>Zacky</h3>
                <p>Senior App Developer</p>
            </div>
        </div>
  </div>
  <div className="maincard">
        <div className="profile-card">
        <img src={img7} alt="" />
            <div class="caption">
                <h3>Zacky</h3>
                <p>Senior App Developer</p>
            </div>
        </div>
        <div className="profile-card">
        <img src={img7} alt="" />
            <div class="caption">
                <h3>Zacky</h3>
                <p>Senior App Developer</p>
            </div>
        </div>
        <div className="profile-card">
        <img src={img7} alt="" />
            <div class="caption">
                <h3>Zacky</h3>
                <p>Senior App Developer</p>
            </div>
        </div>
  </div>

  <div className='profil mt-10 pt-[80px]'>
        <div className="profiltentang_1">
        <img src={vm}  className='mr-36' alt="" height={200} width={200}/>
            <div className="kataa2">
            <h2 className='ml-20 text-4xl'>VISI</h2>
                <p className="kataa2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem, atque iure, amet architecto harum culpa ab eius magnam, quisquam porro ratione facilis nisi. Atque eius corrupti culpa a accusantium saepe incidunt velit officia repudiandae quo? Nulla, hic expedita? Id, veritatis doloribus laudantium officiis a praesentium explicabo est earum deleniti illo, sed sint? Quod, soluta. Reprehenderit tenetur neque repellendus totam omnis, harum sint aspernatur illo voluptates? Assumenda, et possimus dolorem dicta nemo consequatur nobis nam tempore rerum, cupiditate architecto porro.
                </p>
            </div>
        </div>
    </div>



  <div className='profil mb-50'>
        <div className="profiltentang_2">
        <img src={vm}  className='' alt="" height={200} width={200}/>
            <div className="kataa1">
            <h2 className='ml-4 text-4xl'>MISI</h2>
                <p className="kataa2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem, atque iure, amet architecto harum culpa ab eius magnam, quisquam porro ratione facilis nisi. Atque eius corrupti culpa a accusantium saepe incidunt velit officia repudiandae quo? Nulla, hic expedita? Id, veritatis doloribus laudantium officiis a praesentium explicabo est earum deleniti illo, sed sint? Quod, soluta. Reprehenderit tenetur neque repellendus totam omnis, harum sint aspernatur illo voluptates? Assumenda, et possimus dolorem dicta nemo consequatur nobis nam tempore rerum, cupiditate architecto porro.
                </p>
            </div>
        </div>
    </div>

    <div className='profil mb-50'>
        <div className="profiltentang_2">
            <div className='flex flex-col'>
            <h2 className='ml-[60px] text-4xl'>SEJARAH</h2>
        <img src={sej}  className='' alt="" height={350} width={350}/>
        </div>
            <div className="kataa1">
                <p className="kataa2 mt-7" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem, atque iure, amet architecto harum culpa ab eius magnam, quisquam porro ratione facilis nisi. Atque eius corrupti culpa a accusantium saepe incidunt velit officia repudiandae quo? Nulla, hic expedita? Id, veritatis doloribus laudantium officiis a praesentium explicabo est earum deleniti illo, sed sint? Quod, soluta. Reprehenderit tenetur neque repellendus totam omnis, harum sint aspernatur illo voluptates? Assumenda, et possimus dolorem dicta nemo consequatur nobis nam tempore rerum, cupiditate architecto porro.
                </p>
            </div>
        </div>
    </div>
  </>

    );
}

export default Tentang;