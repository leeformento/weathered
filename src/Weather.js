import React from "react";


// class Weather extends React.Component {
//     render() {
//         return (
//         <div>
//         {/* CONDITIONAL OPERATORS */}
//         { this.props.city && this.props.country && <p>Location: {this.props.city} {this.props.country}</p>}
//         { this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
//         { this.props.humidity &&<p>Humidity: {this.props.humidity}</p>}
//         {this.props.description && <p>Conditions: {this.props.description}</p>}
//         {this.props.error && <p> { this.props.error}</p>}
//         </div>
//         );
//     }
// };

// Stateless Functional Component. Don't have to import unnecessary functions in the file.
// SINCE WE DELETED CLASS, WE CANT USE "THIS"

// const Weather = (props) => {
//     return (
//         <div>
//         {/* CONDITIONAL OPERATORS */}
//         {props.city && props.country && <p>Location: {props.city} {props.country}</p>}
//         {props.temperature && <p>Temperature: {props.temperature}</p>}
//         {props.humidity &&<p>Humidity: {props.humidity}</p>}
//         {props.description && <p>Conditions: {props.description}</p>}
//         {props.error && <p> { props.error}</p>}
//         </div>
//         );
//     }
// explicitly return with arrow function
//if only need one thing, can get rid of () in (props)
    const Weather = props => (
        <div className = "weather__info">
        {/* CONDITIONAL OPERATORS */}
        {
            props.city && props.country && <p className="weather__key">Location:
             <span className="weather__value"> {props.city} {props.country}</span>
             </p>
        }
        {
            props.temperature && <p className="weather__key">Temperature:
                 <span className="weather__value" > {props.temperature}</span>
                 </p>
            
        }
        {
            props.humidity &&<p className="weather__key">Humidity: 
            <span className="weather__value"> {props.humidity}</span>
            </p>
        }
        {
            props.description && <p className="weather__key">Conditions:
                <span className="weather__value"> {props.description}</span>
                 </p>
        }
        {
            props.error && <p className="weather__error"> { props.error}</p>
        }
        </div>
    
    );

export default Weather;