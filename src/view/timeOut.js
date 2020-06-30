import React,{Component} from 'react';
import reactDom from 'react-dom';
class timeOut extends Component{
    render(){
        return (
            <div>
                <h1>hello world</h1>
                <p>
                    现在是
                    {new Date().toDateString()}
                </p>
            </div>
        )
    }
}

function showTime(){
    setInterval(()=>{
        return  reactDom.render(timeOut,document.getElementById('app'))  
    },1000)
}

export default showTime