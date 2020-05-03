import React ,{Component} from 'react';
import Car from '../assets/img/car.jpg';
import Color from '../assets/img/color.PNG';
import Seat from '../assets/img/seat.PNG';
import NA from '../assets/img/NA.PNG';
import twitter from '../assets/img/twitter.png';
import linkedin from '../assets/img/linkedin.png';
import insta from '../assets/img/instagram.png';
import eco from '../car/eco.jpeg';


const div1Style = {
    width:'100%',
    height:'100%'
}
const div2Style = {
    width:'60%',
    height:'40%',
    position:'absolute',
    top:'15%',
    left:'20%',
}
const div3Style = {
    width:'100%',
    height:'100%',
    border:'1px solid lightgrey'
}
const img1Style ={
    width: '60%',
    height:'100%',
}
const div4Style = {
    padding:'0px',
    float:'right',
    marginRight: '5%', 
    marginTop: -'2%'
}
const b1Style ={
    fontSize: '20px'
}
const button1Style = {
    backgroundColor: 'lightgrey',
    color:'white',
    padding: '12px 20px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '2px',
}
const p1Style = {
    color:'red'
}
const h2Style ={
    borderBottom: '2px solid darkgray',
    color:'rgb(112, 112, 112)'
}
const trStyle ={
    color:'rgb(131, 131, 131)'
}
const inputStyle = {
    float:'left',
    backgroundColor: 'white',
    color:'black',
    padding: '12px 0px',
    border: 'none',
    cursor: 'pointer'
}
const input1Style = {
    float:'left',
    backgroundColor: 'white',
    color:'black',
    padding: '12px 20px',
    border: 'none',
    cursor: 'pointer'
}
class ecosport extends Component {

    render(){
        return(
            <div style={div1Style}>
            <div style={div2Style}>
            <div style={div3Style}>
            <img src={eco} style={img1Style}/>
            <div style={div4Style}>
        <h2>Eco Sport</h2>
        <br></br> <img src={Color}/> White &emsp;&emsp; <img src={Seat}/> 6 Seater
        <br></br><br></br><p> Rent per day : <b style={b1Style}> ₹ 550</b></p><br></br>
        <p style={p1Style}>
        <button type="button" style={button1Style} disabled>Book Now</button>&nbsp;Currently unavailable!</p>
      
      </div>
    </div>
    <div>
        <br></br><br></br>
        <h2 style={h2Style}>Car Details</h2>
        <img src={NA}/>
        <p>Vehicle Number: MH 27 E 5456 <br></br><br></br>
        Diesel Car <br></br><br></br>
    1.2 Kappa Dual VTVT BS6 Petrol Engine <br></br><br></br>
    Perfect combination of Sporty style, comfort and bold look. Know More. Discover more fun, more style and more thrill</p>    </div>
    <div>
        <br></br><br></br>
        <h2 style={h2Style}>Current Booking</h2>
        <table >
            <tr style={trStyle}>
                <td>NAME</td>
                <td>PHONE NUMBER</td>
                <td>ISSUE DATE</td>
                <td>RETURN DATE</td>
            </tr>
            <tr>
                <td>Jon Doe</td>
                <td>+917905654483</td>
                <td>25th Jan '20</td>
                <td>28th Jan '20</td>
            </tr>
        </table>
        <br/>
        <br/>
            <h2>Rent Vroom</h2><br></br>
            <p>
                Rentvroom Pvt. Ltd.<br></br><br></br>
                No: 296, 3rd Cross Rd, Jakkasandra, 1st Block, Koramangla<br></br>
                Bengaluru, Karnataka 560034
            </p><br></br>
            <img src={twitter}/>&emsp;&emsp;<img src={insta}/>&emsp;&emsp;<img src={linkedin}/><br></br>
            <input type="submit" id="back" name="back" value="Home" style={inputStyle}/><input type="submit" id="back" name="back" value="Contact" style={input1Style}/><input type="submit" id="back" name="back" value="About" style={input1Style}/>
        </div>
        </div>
        </div>


        );
    }
}

export default ecosport;