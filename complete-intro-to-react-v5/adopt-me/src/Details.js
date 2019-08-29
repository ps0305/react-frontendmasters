import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';

// const Details = props => {
//     return (
//         // debugging trick by Ryan Florence
//         // Will print all the routing parameters realted with destined props
//         <pre>
//             <code>
//                 {JSON.stringify(props, null, 4)}
//             </code>
//         </pre>
//     )
// }
class Details extends React.Component {
  state = { loading: true };
    componentDidMount() {
        pet.animal(this.props.id)
        .then(({ animal }) => {
            this.setState({
                name: animal.name,
                animal: animal.type,
                location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
                description: animal.description,
                media: animal.photos,
                breed: animal.breeds.primary,
                loading: false
            })
        }).catch((err) => this.setState({ error: err }));
    }

    render() {
        if ( this.state.loading ) {
            return <h1>Loading...</h1>
        }
        const { animal, name, location, description, media, breed } = this.state;

        return (
            <div className="details">
                <Carousel media={media}/>
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    <button>Adopt {name}</button>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

export default Details;