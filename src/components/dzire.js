import React ,{Component} from 'react';
import Car from '../assets/img/car.jpg';
import Color from '../assets/img/color.PNG';
import Seat from '../assets/img/seat.PNG';
import NA from '../assets/img/NA.PNG';
import twitter from '../assets/img/twitter.png';
import linkedin from '../assets/img/linkedin.png';
import insta from '../assets/img/instagram.png';
import dzireImg from '../car/dzire.jpg';


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
class dzire extends Component {

    render(){
        return(
            <div style={div1Style}>
            <div style={div2Style}>
            <div style={div3Style}>
            <img src={dzireImg} style={img1Style}/>
            <div style={div4Style}>
        <h2> Maruti SuzukiDzire</h2>
        <br></br> <img src={Color}/> White &emsp;&emsp; <img src={Seat}/> 4 Seater
        <br></br><br></br><p> Rent per day : <b style={b1Style}> ₹ 450</b></p><br></br>
        
      </div>
    </div>
    <div>
        <br></br><br></br>
        <h2 style={h2Style}>Car Details</h2>
        
        <p>Vehicle Number: MH 27 E 4456 <br></br><br></br>
        Petrol Car <br></br><br></br>
    1.2 Kappa Dual VTVT BS6 Petrol Engine <br></br><br></br>
New Maruti Suzuki  Dzire comes with Wonder Warranty options of upto 5 years Std. Customer can choose any warranty option as per his driving requirement at the time of new vehicle delivery. From a strong body structure to Standard Dual airbags and ABS with EBD, maximum care has been taken to integrate a piethora of safety features </p>
    </div>
    <div>
        <br></br><br></br>
        <h2 style={h2Style}>Current Booking</h2>
        <p>No booking</p>
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

export default dzire;