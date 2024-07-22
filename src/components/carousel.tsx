import React, { useRef } from "react";
import "./carousel.css";

interface CarouselProps {
    imagesLinks?: string[],
    mainBackgroundColor?: string;
    bordercolor?: string
}

const Carousel: React.FC<CarouselProps> = ({
    imagesLinks = ["https://raw.githubusercontent.com/Zratex/gallery/main/Images/Default/DefaultImage.png",
        "https://raw.githubusercontent.com/Zratex/gallery/main/Images/Default/DefaultImage2.png"],
    mainBackgroundColor = "",
    bordercolor = "",
}) => {
    let imageContainerRef = useRef<HTMLDivElement | null>(null);

    const previous = () => {
        if (imageContainerRef.current) {
            imageContainerRef.current.scrollLeft -= 500;
        }
    }
    const next = () => {
        if (imageContainerRef.current) {
            imageContainerRef.current.scrollLeft += 500;
        }
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