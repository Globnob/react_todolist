import './Intro.css';

function Intro(){
    return (
    <div class="intro">Welcome!
    <button id='_introbutton' class="intro">Get started</button>
 
    </div>
    );
}

function startButton(){
    let x = document.getElementById('_introbutton')
    if(x){
        console.log("ajme kralju");
    }
}

export default Intro;