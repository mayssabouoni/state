import React from 'react';
import './App.css';
class App extends React.Component { 
    constructor() {  
         super();        
         this.state = { displayprofile: false,
time:0,
        }; 
         this.toggleDisplayprofile = this.toggleDisplayprofile.bind(this);
          
         }  
         toggleDisplayprofile(){  
             this.setState({displayprofile: !this.state.displayprofile});  
             } 
             componentDidMount() {
              setInterval(() => {
                this.setState((prevState) => ({
                  time: prevState.time + 1,
                }));
              }, 1000);
            
            }
             
         render() { 
           
             return (  
                 <div>  
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

                      <div className="counter" style={{color:'red'}}>
                             The last component was mounted since: {this.state.time} seconds
                           </div> 
                             
                </div>  
           )  
        
   

}  
  }
   export default App;  
