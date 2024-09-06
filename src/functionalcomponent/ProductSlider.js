import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import ProductItem from './ProductItem';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function ProductSlider({ data }) {
    let options = {
        loop: true,
        autoplay: true,
        margin: 15,
        autoplaySpeed: 1000,
        speed: 10,
        responsiveRefreshRate: 1000,
        navText: ["<button style='baground-color:blue;color:black;border-radious:50%;width:50px;'><i class='fa fa-arrow-right '></button>", "<button style='border:none;baground-color:blue;color:white;border-radious:50%;width:50px;'><i class='fa fa-arrow-right'></button>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1080: {
                items: 4
            },
            1920: {
                items: 5
            },
        }
    }
    return (
        <>
            <OwlCarousel className='owl-theme' {...options} nav>
                {
                    data.map((item, index) => {
                        return <div key={index}>
                            <ProductItem item={item} />

                        </div>
                    })
                }

            </OwlCarousel>
        </>
    )
}

