import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import logo from '../images/mountfuji.png';
// import logo2 from '../images/operahouse.png';
// import logo3 from '../images/Geirangerfjord.png';

export default function Card(props) {
    return (
        <>
            <div>
                <div className="parent">
                    <div>
                        <img src={`../images/${props.item.img}`} alt="alt1" className="images" />
                    </div>
                    <div>
                        <div className="hello">
                            <span className="bi bi-geo-alt-fill"></span>
                            &nbsp; &nbsp;
                            <span className="countryname">{props.item.location.country}</span>
                            &nbsp; &nbsp; &nbsp;
                            <a href="#" className="jkj">{props.item.location.maplink}</a>
                        </div>
                        <h3 className="heading">{props.item.title}</h3>
                        <h4 className="date">{props.item.date}</h4>
                        <p className="para">{props.item.description}</p>
                    </div>
                </div>
                <div className="hr">
                    {props.item.id !==3 ? <hr />:null}
                </div>
            </div>
        </>
    )
}