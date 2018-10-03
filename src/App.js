import React from "react"; // import react object that lives in package.json
import Titles from "./components/Titles" // can leave off the JS extension
import Form from "./components/Form"
import Weather from "./components/Weather"


const API_KEY = "e32e54e9ce9b4ddb62723fab06764987";


class App extends React.Component { 
  // creating a state. state is an object. contains key value pairs.
  // initial state. state will change once the button is pressed.
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  // use "this" independently with => . wherever you use this keyword, it's bound to this function/component. 
  // Built in methods. Can also create method. Im creating one.
  // async await: https calls. web request easier.
  // fetch api. newer methods in js.
  // e to prevent refresh page prevent default. event object.
  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // CREATE VARIABLE THAT CONTAINS THE FUNCTION AND MAKES THE CALL TO URL
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    // Convert response to JSON format. Javascript object notation. Convert data from API to readable format.
    // whatever we get from api_call => convert into json.
    const data = await api_call.json();
    if (city && country ) {
      // console.log(data);
    // don't ever directly manipulate the state. built in method call setState
    this.setState ({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      // returns an array. select index 0. then description.
      description: data.weather[0].description,
      error: ""
    });
    } else {
      this.setState ({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        // returns an array. select index 0. then description.
        description: undefined,
        error: "Please enter the city and country."
      });

    }
  }
  // initialize component. React Component is an object lives in module
//  display the data that goes inside the component. Build in react method 
render() {
  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-6 title-container">
                <Titles />
              </div>
              <div className="col-xs-6 form-container">
                <Form getWeather={this.getWeather} />
                <Weather 
                  temperature={this.state.temperature} 
                  humidity={this.state.humidity}
                  city={this.state.city}
                  country={this.state.country}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
};

export default App;
