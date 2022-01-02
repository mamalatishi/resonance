import React from 'react'
import {Link} from 'react-router-dom'
import {IMAGES_bg} from '../media/index.js'
import IMAGES from '../media/index';
import './main.scss';

//images for main : 11 13 7 8 



function Section({title,img}) {
    return (
        <div className='section'>
            <div className="img-container" style={{backgroundImage:`url(${img})`}}>
                <div className="title-container">
                    <div className="img-title">
                        {title}
                    </div>
                </div>
            </div>
        </div>
    )
}


function Main() {
    return (
        <div className="main" style={{backgroundImage:`url(${IMAGES_bg[0].src})`}}>
            <div className="container">
                <div className='brand-description'> The <span className="brand">Resonance</span> Between Your <span style={{color:'orange'}}>Dreams</span> and <span style={{color:'#036687'}}>Reality</span></div>
            </div>
            <div className="main-container">
                <Link to='/products?q=collection'>
                    <Section title="This Month's Collection" img={IMAGES[2].src}/>
                </Link>
                <Link to='/products?q=sale'>
                    <Section title='Holy Sales' img={IMAGES[3].src}/>
                </Link>
                <Link to='/products?q=categories'>
                    <Section title='Categories to Infinite Possibilities!' img={IMAGES[6].src} />
                </Link>
                <Link to='/about-us'>
                    <Section title='Find Our Social Media' img={IMAGES[8].src} />
                </Link>
            </div>
        </div>
    )
}

export default Main
