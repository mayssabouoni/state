import React from 'react';
import './App.css';
class App extends React.Component { 
    constructor() {  
         super();        
         this.state = { displayprofile: false
            
            ,count: 0,
            timedStats: 0
        }; 
         this.toggleDisplayprofile = this.toggleDisplayprofile.bind(this);
         this.timer = this.timer.bind(this);  
         }  
         toggleDisplayprofile(){  
             this.setState({displayprofile: !this.state.displayprofile});  
             } 
             timer() {
                this.setState({ count: this.state.count + 1 });
              }
              componentWillMount() {
                this.timerId = setInterval(this.timer, 1000);
              }
            
              async componentDidMount() {
                const data = await fetch("/timed-stats.json");
                this.setState({ timedStats: data });
              }
            
              componentWillUnmount() {
                clearInterval(this.timerId);
              }
             
         render() { 
            const { count } = this.state; 
             return (  
                 <div id="count">{count} >  
                     <h1 style={{ color: "white", fontSize: 100 , textAlign:'center' }}>Welcome to my profile</h1>  
                     {  
                         this.state.displayprofile ? (   
                             <div>
                                 <img style={{ displayprofile:'center' }} src={"/imageInPublic.jpg"} className="imageInPublic" alt="imageInPublic" ></img>    
                                 <p style={{ color: "black", fontSize: 30, textAlign:'left' }}>
                                 <h1>mayssa bouoni</h1>
                                 <h2>i was a management student</h2>
                                 <h3>i m a full stack js student </h3>    
                                 </p>  
                                 <button onClick={this.toggleDisplayprofile}> Show Less </button>  
                           </div> 
                        
                             ) : (  
                                 <div>  
                                     <button onClick={this.toggleDisplayprofile}> Read More </button>  
                                 </div>  
                             )  
                     }  
                </div>  
           )  
       }  
   }  
   export default App;  