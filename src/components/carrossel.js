// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./carrossel.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function Carrossel() {
  return (
    <div className='container' >
    <div className='logo'>
        <img src='/img/centauro_img.png' alt='logo centauro' className='logo'/>
    </div>
    <div className='title'>
        <h2>A Centauro abriu descontos exclusivos! Aproveite!</h2>
    </div>
    
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="carrossel_1">
                <img src='/img/camisa-polo-amarela.png' alt='camisa polo amarela' className='product'/>
                <h2>Camisa Polo Liga Retrô Brasil Estrela - Adulto</h2>
                <p>R$ 143,91</p>
                <button className='button'>
                    <a href='https://www.centauro.com.br/camisa-liga-retro-brasil-polo-estrela-m03q39-mktp.html#cor=08&u_gclid=CjwKCAiA68ebBhB-EiwALVC-NleEoGUlQxyUW_KXJM1_4Yv-vrB11CpmVuswHpcc-LLkOxkj5QIJ2BoCLvYQAvD_BwE'
                        className='link'> Ver Produto
                    </a>
                </button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="carrossel_2">
                <img src='/img/camisa-polo-azul.png' alt='camisa polo azul' className='product'/>
                <h2>Camiseta do Brasil CBF Torcedor - Masculina</h2>
                <p>R$ 149,99</p>
                <button className='button'>
                    <a href='https://www.centauro.com.br/camiseta-do-brasil-cbf-torcedor-masculina-968618.html#cor=05&u_gclid=CjwKCAiA68ebBhB-EiwALVC-NleEoGUlQxyUW_KXJM1_4Yv-vrB11CpmVuswHpcc-LLkOxkj5QIJ2BoCLvYQAvD_BwE'
                        className='link'> Ver Produto
                    </a>
                </button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="carrossel_3">
                <img src='/img/bola.png' alt='bola' className='product'/>
                <h2>Bola de Futebol de Campo Seleção do Brasil CBF Azul</h2>
                <p>R$ 69,99</p>
                <button className='button'>
                    <a href='https://www.centauro.com.br/bola-de-futebol-de-campo-selecao-do-brasil-cbf-azul-971882.html#cor=04&u_gclid=CjwKCAiA68ebBhB-EiwALVC-NleEoGUlQxyUW_KXJM1_4Yv-vrB11CpmVuswHpcc-LLkOxkj5QIJ2BoCLvYQAvD_BwE'
                        className='link'> Ver Produto
                    </a>
                </button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="carrossel_4">
                <img src='/img/caneleira.png' alt='caneleira' className='product'/>
                <h2>Caneleira de Futebol Adams W6892A-SP - Adulto</h2>
                <p>R$ 49,99</p>
                <button className='button'>
                    <a href='https://www.centauro.com.br/caneleira-de-futebol-adams-w6892a-sp-adulto-942849.html#cor=02&u_gclid=CjwKCAiA68ebBhB-EiwALVC-NleEoGUlQxyUW_KXJM1_4Yv-vrB11CpmVuswHpcc-LLkOxkj5QIJ2BoCLvYQAvD_BwE'
                        className='link'> Ver Produto
                    </a>
                </button>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
