import React from 'react'
import {useState,useEffect} from 'react'
import {IMAGES_header} from '../media/index'
import {HiArrowSmLeft , HiArrowSmRight} from "react-icons/hi"
import './header.scss';

const images = IMAGES_header;



function Header() {
    const [index,setIndex] = useState(0);

   // const interval = setInterval(() => {
    //    let index = images.indexOf(img);
    //    let next = index + 1;
    //    index < lastIndex ? setImg(images[next]) : setImg(images[0]);
   // } , 6000) 
   

    const date = new Date();
    let lastIndex = images.length - 1;

    function handleArrowClick(way) {
        if (way === 'right') {
            index < lastIndex ? setIndex(index + 1) : setIndex(0);
        } else {
            index == 0 ? setIndex(lastIndex) : setIndex(index-1);
        }
    }



    return (
        <div className="header">
            <div className="container">
                <div className="img-container">

                    {images.map((img) => {
                        console.log(img);
                        const imgIndex = images.indexOf(img);
                        return (<img className={imgIndex !== index ? `hidden img-${img.id}` : `img-${img.id}`} src={img.src} alt={img.name}/>)
                    })}

                </div>
                <div className="img-content">
                    <div className="season">
                        {`The ${date.getMonth()}th Season of ${date.getFullYear()}`}
                    </div>
                    <div className="img-title">
                        <h2>Season Inclusive Bounties</h2>
                    </div>
                    <div className="img-description">
                        <p>Limited stocks, New ones release the first of every month</p>
                    </div>
                    <button className="arrow-left" onClick={() => handleArrowClick('left')}><HiArrowSmLeft/></button>
                    <button className="arrow-right" onClick={() => handleArrowClick('right')}><HiArrowSmRight/></button>
                </div>
                
            </div>
        </div>
    )
}

export default Header
