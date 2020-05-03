import React ,{Component} from 'react';
import {Redirect} from 'react-router-dom';
const div1Style = {
    width:'100%',
    height:'100%',
    position: 'fixed',
    top:'10%'
}
const div2Style = {
    textAlign: 'left',
    width:'100%'
}
const h2Style  ={
    textAlign: 'left'
}
const divStyle = {
    width:'80%'
}
const div3Style = {
    textAlign: 'left',
    width:'80%'
}
const inputStyle = {
    float:'left',
    backgroundColor: 'white',
    color:'black',
    padding: '12px 20px',
    border: 'none',
    cursor: 'pointer'
}
const input1Style = {
    float:'right',
    backgroundColor: 'white',
    color:'black',
    padding: '12px 20px',
    border: 'none',
    cursor: 'pointer'
}
const buttonStyle = {
    float:'right',
    opacity:'0.8',
    backgroundColor: 'rgb(85, 85, 85)',
    color:'white',
    padding: '12px 20px',
    border: 'none',
    cursor: 'pointer',
    float: 'right',
    fontWeight: 'bold',
    borderRadius: '2px'
}
class book extends Component{
    render(){
        return(
            <div>
            <form onSubmit="/">
        <center>
        <div style={div1Style}>
            
        <div class="outer">
            
            <div class="inner">

                <div style={div2Style}>
                    <br></br><h2 style={h2Style}>Booking details</h2><br/><br/><br/><br/>
        <label for="fname" >Name</label>
    </div>
    <div style={divStyle}>
        <input type="text" id="fname" name="fname" placeholder="Jane Doe" required/></div></div>
        <div class="inner">
            <div style={div3Style}>
        <label for="lname" >Contact Number</label></div>
        <div style={divStyle}>
        <input type="tel" id="lname" name="lname" pattern="[789][0-9]{9}" placeholder="+91" required/></div></div>
    </div><br/><br/><br/>
    <div class="outer">
        <div class="inner">
            <div style={div3Style}>
    <label for="fname" >Issue Date</label>
</div>
<div style={divStyle}>
    <input type="date" id="fname" name="fname" placeholder="DD/MM/YYYY" required/></div></div>
    <div class="inner">
        <div style={div3Style}>
    <label for="lname" >Return Date</label></div>
    <div style={divStyle}>
    <input type="date" id="lname" name="lname" placeholder="DD/MM/YYYY" required/></div></div>
</div><br/><br/>
<div class="outer">
    <div class="inner" >
    <button type="submit" id="book" name="book"  onClick={() => alert("Booking Successful")} style={buttonStyle}>Book car</button></div>
</div>
</div>
</center>
      </form>
      </div>
        );
    }
}
export default book;