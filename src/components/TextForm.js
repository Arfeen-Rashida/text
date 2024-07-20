import React, {useState} from 'react'

//console.log(useState('Enter text here2'))

export default function TextForm(props) {
const handleUpClick = ()=>{
 // console.log("Uppercase was clicked: " + text);
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to upper case!", "success");
}
const handleLowClick = ()=>{
  // console.log("Lowercase was clicked: " + text);
   let newText = text.toLowerCase();
   setText(newText);
   props.showAlert("Converted to lower case!", "success");
 }
 const handleClear = ()=>{
  // console.log("Uppercase was clicked: " + text);
   let newText = '';
   setText(newText);
   props.showAlert("Text cleared!", "success");
 }
 //const shoot = () => {
 // alert("Great Shot!");
  //setText(newText);
//}
 const handleInvClick = ()=>{
  // console.log("Uppercase was clicked: " + text);
   let newText = "";
   for(let i=text.length-1; i>=0;i--)
    newText +=text[i];
   
   setText(newText);
   props.showAlert("Inverse is done!", "success");
 }
 const handleCopy = ()=>{
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to clipboard!", "success");
 }
 const handleRemExtSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra space removed!", "success");
 } 
const handleOnchange = (event)=>{
 // console.log("On Change");
  setText(event.target.value);
}

  const [text, setText] = useState('');
  //setText("gfygjhkjh");
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button> 
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lower case</button>
        {/*<button className="btn btn-primary mx-2" onClick={shoot}>Take the shot</button>*/}
        <button className="btn btn-primary mx-2" onClick={handleInvClick}>Inverse</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleRemExtSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p> {text.split(" ").length-1} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something"}</p>
    </div>
    </>
  )
}
