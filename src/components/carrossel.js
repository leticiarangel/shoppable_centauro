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
        <div className="desconto">
            <button className="balao">
                <p className="desconto_valor">Desconto de 25%</p>
            </button>
        </div>
        <div className='title'>
            <p>Aproveite os descontos exclusivos pra quem tá curtindo o Social TV!</p>
        </div>
        
        <Swiper
            slidesPerView={2}
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
                    <h2>Camisa Polo Liga Retrô Estrela</h2>
                    <p>R$ 143,91</p>
                    <button className='button'>
                        <a href='https://www.centauro.com.br/camisa-liga-retro-brasil-polo-estrela-m03q39-mktp.html#cor=08&u_gclid=CjwKCAiA68ebBhB-EiwALVC-NleEoGUlQxyUW_KXJM1_4Yv-vrB11CpmVuswHpcc-LLkOxkj5QIJ2BoCLvYQAvD_BwE'
                            className='link' target="_blank"> Ver Produto
                        </a>
                    </button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="carrossel_2">
                    <img src='/img/camisa-polo-azul.png' alt='camisa polo azul' className='product'/>
                    <h2>Camiseta do Brasil Torcedor</h2>
                    <p>R$ 149,99</p>
                    <button className='button'>
                        <a href='https://www.centauro.com.br/camiseta-do-brasil-cbf-torcedor-masculina-968618.html#cor=05&u_gclid=CjwKCAiA68ebBhB-EiwALVC-NleEoGUlQxyUW_KXJM1_4Yv-vrB11CpmVuswHpcc-LLkOxkj5QIJ2BoCLvYQAvD_BwE'
                            className='link' target="_blank"> Ver Produto
                        </a>
                    </button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="carrossel_3">
                    <img src='/img/bola.png' alt='bola' className='product'/>
                    <h2>Bola de Campo Seleção do Brasil</h2>
                    <p>R$ 69,99</p>
                    <button className='button'>
                        <a href='https://www.centauro.com.br/bola-de-futebol-de-campo-selecao-do-brasil-cbf-azul-971882.html#cor=04&u_gclid=CjwKCAiA68ebBhB-EiwALVC-NleEoGUlQxyUW_KXJM1_4Yv-vrB11CpmVuswHpcc-LLkOxkj5QIJ2BoCLvYQAvD_BwE'
                            className='link' target="_blank"> Ver Produto
                        </a>
                    </button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="carrossel_4">
                    <img src='/img/caneleira.png' alt='caneleira' className='product'/>
                    <h2>Caneleira de Futebol Adams</h2>
                    <p>R$ 49,99</p>
                    <button className='button'>
                        <a href='https://www.centauro.com.br/caneleira-de-futebol-adams-w6892a-sp-adulto-942849.html#cor=02&u_gclid=CjwKCAiA68ebBhB-EiwALVC-NleEoGUlQxyUW_KXJM1_4Yv-vrB11CpmVuswHpcc-LLkOxkj5QIJ2BoCLvYQAvD_BwE'
                            className='link' target="_blank"> Ver Produto
                        </a>
                    </button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="carrossel_5">
                    <img src='/img/joelheira.png' alt='joelheira' className='product'/>
                    <h2>Joelheira Patelar de Neoprene Oxer</h2>
                    <p>R$ 19,99</p>
                    <button className='button'>
                        <a href='https://www.centauro.com.br/joelheira-patelar-de-neoprene-oxer-753039.html#cor=02&u_gclid=Cj0KCQiAsdKbBhDHARIsANJ6-jeAwxY4DPZhWcshkKVpy4QhYM7K6PoUMPTpvvdpJUFN3yHc_RVRJj0aAr9MEALw_wcB'
                            className='link' target="_blank"> Ver Produto
                        </a>
                    </button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="carrossel_6">
                    <img src='/img/toalha-micro.png' alt='toalha de microfibra' className='product'/>
                    <h2>Toalha Microfibra Oxer Treino GG</h2>
                    <p>R$ 49,99</p>
                    <button className='button'>
                        <a href='https://www.centauro.com.br/toalha-microfibra-oxer-treino-gg-961490.html#cor=3A&u_gclid=Cj0KCQiAsdKbBhDHARIsANJ6-jeAwxY4DPZhWcshkKVpy4QhYM7K6PoUMPTpvvdpJUFN3yHc_RVRJj0aAr9MEALw_wcB'
                            className='link' target="_blank"> Ver Produto
                        </a>
                    </button>
                </div>
            </SwiperSlide>
        </Swiper>
        <div className='logo'>
            <p className="logo_text">Mensagem oferecida por</p>
            <div className="logo_img_1">
                <img src='/img/centauro-logo.png' alt='logo centauro' className='logo_img'/>
            </div>
        </div>
    </div>
  );
}
