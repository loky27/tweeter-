import React from "react";
import {Profile} from '../../Porfile';

class Profiles extends React.Component {
    constructor() {
        super();
        this.state = {
            profiles: Profile
        }
    }

    render() {
        return (
            <div>
                {this.state.profiles
                    .filter((profile) => 
                    profile.profile
                    .toLowerCase()
                    .includes(this.props.searchUser.toLowerCase()))
                    .map((user) => {
                        return (
                       <div className="">
                            <img className="profile-avatar" src={`${user.url}`} alt="profileImage"/>
                            <h5 className="mb-1">{user.profile}</h5>
                            <small>{`@${user.username}`}</small>
                        </div>
                        );
                    })}

            </div>
        );
    }
}
export default Profiles;