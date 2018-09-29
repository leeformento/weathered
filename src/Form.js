import React from "react";

// NOT STATE
// class Form extends React.Component {
//     render() {
//         return (
//             // setting up a React attribute. call in this.prop..
        // <form onSubmit = {this.props.getWeather}>
        //     <input type="text" name ="city" placeholder="City" />
        //     <input type="text" name ="country" placeholder="Country" />
        //     <button>Get Weather</button>
        // </form>
//         );
//     }
// };


const Form = props => (
    <form onSubmit = {props.getWeather}>
    <input type="text" name ="city" placeholder="City" />
    <input type="text" name ="country" placeholder="Country" />
    <button>Get Weather</button>
</form>

);
export default Form;