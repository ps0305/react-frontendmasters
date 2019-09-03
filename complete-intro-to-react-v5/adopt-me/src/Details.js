import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
// eslint-disable-next-line
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';
import { navigate } from '@reach/router';
import Modal from './Modal';
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
    state = { loading: true, showModal: false };
    componentDidMount() {
        // throw new Error('lol');
        pet.animal(this.props.id)
        .then(({ animal }) => {
            this.setState({
                url: animal.url,
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
   toggleModal = () => {
       this.setState({
           showModal: !this.state.showModal
       })
   } 
   adopt = () => navigate(this.state.url);
    render() {
        if ( this.state.loading ) {
            return <h1>Loading...</h1>
        }
        const { animal, name, location, description, media, breed, showModal } = this.state;

        return (
            <div className="details">
                <Carousel media={media}/>
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    <ThemeContext.Consumer>
                        {([theme]) => (
                            <button
                            onClick={this.toggleModal} 
                            style={{backgroundColor: theme}} >
                                Adopt {name}
                                </button>
                            )}
                    </ThemeContext.Consumer>
                        <p>{description}</p>
                        {
                            showModal ? (
                                <Modal>
                                    <div>
                                        <h1>Would you like to adopt {name}?</h1>
                                        <div className="buttons">
                                            <button onClick={this.adopt}>Yes</button>
                                            <button onClick={this.toggleModal}>No</button>
                                        </div>
                                    </div>
                                </Modal>
                            ) : null
                        }
                </div>
            </div>
        )
    }
}

export default Details;
// export default function DetailsWithErrorBoundary(props) {
//     return (
//         <ErrorBoundary>
//             <Details {...props}/>
//         </ErrorBoundary>
//     );
// }