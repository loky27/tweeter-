import React from 'react';
import Trends from '../trends/trends';
import Profiles from "../profiles/profiles"
import './sindebar.css'
class SidebarCol extends React.Component {
    constructor() {
        super();
        this.state = {

            option: false,
            searchUser: ""
        }
    }
    handleSearch = (evento) => {
        //Capturar lo que está escribiendo el usuario
        const user = evento.target.value;
        this.setState({searchUser: user,option: user});
    };
    render() {

        return (
            <div className="t-sidebar-col">
                <div className="">
                    <div>
                        <div className="form-group">
                            <label for="formGroupExampleInput">aquien buscas</label>
                            <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Usuario"
                                onChange={this.handleSearch}
                                value={this.state.searchUser}/>
                        </div>
                    </div>
                    {this.state.option
                        ? 
                        <Profiles searchUser={this.state.searchUser}/>
                        : 
                        <Trends/>
                    }
                </div>
            </div>
        )
    }
}
export default SidebarCol;