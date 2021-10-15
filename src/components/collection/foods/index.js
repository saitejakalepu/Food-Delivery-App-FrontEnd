import {React,useEffect, useState} from "react";
import "./foods.css"
import Slider from "react-slick";
import PrevArrow from "../../arrows/prevArrow"
import NextArrow from "../../arrows/nextArrow";
import '../../../styles/commonClasses.css';

const foodItems = [
  {
    id: 1,
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },
  {
    id: 2,
    title: "Burger",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
  },
  {
    id: 3,
    title: "Rolls",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/e61347d2b01cfae669530bd4b8e778e41632716577.png",
  },
  {
    id: 4,
    title: "Cake",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
  },
  {
    id: 5,
    title: "Biryani",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
  },
  {
    id: 6,
    title: "Chaat",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/3d902eb4bb267efea010ade87bcb1f3f1632716698.png",
  },
  {
    id: 7,
    title: "Momos",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
  },
  {
    id: 8,
    title: "Paneer",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/9428a39fba2a97f7470b8f3f26af86af1632716606.png",
  },
  {
    id: 9,
    title: "Samosa",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/bc0cc8557a06fcd3aacdd7b241cf9db71632716547.png",
  },
  {
    id: 10,
    title: "Paratha",
    cover:
      "https://b.zmtcdn.com/data/dish_images/49a62bf16f88e7d22994e387626292161632717505.png",
  },
  {
    id: 11,
    title: "Pastry",
    cover:
      "https://b.zmtcdn.com/data/homepage_dish_data/4/f06d9a57b0847677e36f163a7b7fe54a.png",
  },
];


const Foods = () => {


  const[displaySlides, setdisplaySlides]= useState(4);

  const settings = {
    infinite: false,
    slidesToShow: displaySlides,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };


  useEffect(() => {

    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
      if(window.innerWidth < 1196)
      setdisplaySlides(Math.floor(window.innerWidth/300));
    } 
    function handleResize() {
    if(window.innerWidth < 1196)
    setdisplaySlides(Math.floor(window.innerWidth/300));
    else
    setdisplaySlides(4);
  }
    window.addEventListener('resize', handleResize)
  })

  return (
    <div className="delivery-collections">
      <div className="max-width">
        <div className="collection-title">Inspiration for your first order</div>
        <Slider {...settings} className="slider">
          {foodItems.map((item) => {
            return <div>
            <div className="delivery-item-cover">
              <img
                src={item.cover}
                className="delivery-item-image"
                alt={item.title}
              />
            </div>
            <div className="delivery-item-title">{item.title}</div>
          </div>
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Foods;
