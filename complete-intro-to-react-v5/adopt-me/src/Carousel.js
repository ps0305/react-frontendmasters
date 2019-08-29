import React from 'react';

class Carousel extends React.Component {
    state = {
        photos: [],
        active: 0
    };
    // @getDerivedStateFromProps
    // getDerivedStateFromProps does exactly what it sounds like: 
    // it allows you to accept data from a parent and get state that is derived from it. 
    // In this case, we're removing the superfluous photos and just keeping the ones we want.
    static getDerivedStateFromProps({ media }) {
        let photos = ["http://placecorgi.com/600/600"];

        if (media.length) {
            photos = media.map(({ large }) => large);
        }
        return { photos };
    }

    handleIndexClick = event => {
        this.setState({
            active: +event.target.dataset.index
        });
    };
    render() {
        const { photos, active } = this.state;
        return (
            <div className="carousel">
                <img src={photos[active]} alt="animal" />
                <div className="carousel-smaller">
                    {photos.map((photo, index) => (
                // eslint-disable-next-line
                <img
                    key={photo}
                    onClick={this.handleIndexClick}
                    data-index={index}
                    src={photo}
                    className={index === active ? "active" : ""}
                    alt="animal thumbnail" />
                    ))}
            </div>
        </div>
        );
    }
}

export default Carousel;