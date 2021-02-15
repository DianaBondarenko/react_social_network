import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {setAuthUserData} from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true})
            .then(response => {
                console.log('get auth')
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }

}
//export HeaderContainer;

const mapToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapToProps, {setAuthUserData})(HeaderContainer);