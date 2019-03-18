import React, { Component } from 'react';
import firebase from './config';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

        this.handleUnameChange = this.handleUnameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUnameChange(event) {
        this.setState({email: event.target.value});
    }

    OnRegistrationclick() {
        
    }
    
    handleSubmit(event) {
        console.log('submit-->',this.state.email, '-----', this.state.password);
        event.preventDefault();
        const { email, password } = this.state;
        firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
            // this.props.history.push('/');
            console.log('success-->' + user)
        })
        .catch((error) => {
            // this.setState({ error: error });
            console.log('error-->'+ error);
        });
    }

    handlePwdChange(value){
        this.setState({
            password: value
        })
    }

   render(){
      return(
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 border border-primary rounded" style={{ marginTop: '50px' }}>
                    <h3 className="text-primary" style={{ textAlign: 'center' }}>Login</h3>
                    <form onSubmit={this.handleSubmit} className="omb_loginForm">
                        <table>
                            <tbody>
                                <tr>
                                    <td>UserName</td>
                                    <td>
                                        <input 
                                            type="text" 
                                            required 
                                            value={this.state.email} 
                                            onChange={this.handleUnameChange} 
                                            className="form-control input-sm" 
                                            placeholder="Enter Email" style={{ margin: '10px' }} 
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Password</td>
                                    <td>
                                        <input 
                                            type="password" 
                                            required value={this.state.password} 
                                            onChange={e => this.handlePwdChange(e.target.value)} 
                                            className="form-control input-lg" 
                                            placeholder="Enter Password" 
                                            style={{ margin: '10px' }} 
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="submit" value="Login" className="btn btn-success" style={{ marginBottom: '10px' }} />
                                    </td>
                                    <td>
                                        <input 
                                            type="button" 
                                            onClick={this.OnRegistrationclick} 
                                            value="Registration" 
                                            className="btn btn-warning" 
                                            style={{ marginBottom: '10px' }} 
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
      );
   }
}
export default App;