import React from 'react'
import {useState} from 'react'
import IMAGES from '../media/index'
import {HiArrowSmLeft , HiArrowSmRight} from "react-icons/hi"
import './header.scss';

const initialImage = IMAGES[0]

function Header() {
    const [img,setImg] = useState(initialImage);
    const date = new Date();
    let index = IMAGES.indexOf(img);
    let lastIndex = IMAGES.length - 1;

    function handleArrowClick(way) {
        if (way === 'right') {
            console.log(date.getMonth());
            index < lastIndex ? setImg(IMAGES[index + 1]) : setImg(IMAGES[0]);
        } else {
            index == 0 ? setImg(IMAGES[lastIndex]) : setImg(IMAGES[index-1]);
        }
    }

    return (
        <div className="header">
            <div className="container">
                <div className="img-container">
                    <img src={img.src} alt={img.name} />
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
        </div>
    )
}

export default Header
