import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Map, Marker, NavigationControl, InfoWindow } from 'react-bmapgl';

class App extends React.Component {
    componentDidMount() {
        console.log(this.map);
    }

    render() {
        return (
            <Map
                ref={(ref) => {
                    this.map = ref.map;
                }}
                center={{ lng: 116.402544, lat: 39.928216 }}
                zoom="11"
            >
                <Marker position={{ lng: 116.402544, lat: 39.928216 }} />
                <NavigationControl />
                <InfoWindow position={{ lng: 116.402544, lat: 39.928216 }} text="内容" title="标题" />
            </Map>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
