import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setFriendProfile} from "../../redux/profile_reducer";
import Profile from "./Profile";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {
    // constructor(props) {
    //     super();
    //     this.props = props;
    // }
    render() {
        return (
            <Profile {...this.props} />
        )
    }

    componentDidMount() {
        //this.props.toggleIsFetching(true);
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            //this.props.toggleIsFetching(false);
            this.props.setFriendProfile(response.data);
            //this.props.setTotalCount(response.data.totalCount);
        })
    }
}

let mapStateToProps = (state) => {
    return (
        {
            profile: state.profilePage.profile
        }
    )
}

let  WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps,{setFriendProfile}) (WithUrlDataContainer);







