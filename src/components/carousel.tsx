import React, { useRef } from "react";
import "./carousel.css";

function Carousel({
    imagesLinks = ["https://raw.githubusercontent.com/Zratex/gallery/main/Images/Default/DefaultImage.png",
        "https://raw.githubusercontent.com/Zratex/gallery/main/Images/Default/DefaultImage2.png"],
    mainBackgroundColor = "",
    bordercolor = "",
}) {
    let imageContainerRef = useRef(null);

    const previous = () => {
        imageContainerRef.current.scrollLeft -= 500;
    }
    const next = () => {
        imageContainerRef.current.scrollLeft += 500;
    }

    return (
        <div className="carousel-container" style={{
            '--carousel-main-Background-Color': mainBackgroundColor,
            '--carousel-border-color': bordercolor,
        } as React.CSSProperties}>
            <div className="carousel-content">
                <div className="carousel-previous" onClick={previous}></div>
                <div className="carousel-slide-panel" ref={imageContainerRef}>
                    {imagesLinks.map((image, index) => {
                        return (
                            <img key={index} className="carousel-image" src={image} />
                        )
                    })}
                </div>
                <div className="carousel-next" onClick={next}></div>
            </div>
        </div>
    );
}

export default Carousel;