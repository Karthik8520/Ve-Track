import {connect} from "react-redux"
import {signout} from "../../redux/userReducer/userActions"
import {withRouter} from "react-router-dom"
import "./head.css"




const Header = (props)=>{

    
    function signOut(e){
        e.preventDefault();
        // props.signout(null);
        props.history.push("/")
    }

    return (
        <div id="head-div">
            <div>
                <h1>Ve-Track</h1>
            </div>

            <div>
                {
                    props.user!=null ? <a href="" onClick={signOut}><h3>Sign out</h3></a> : null
                }
                
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>({
    signout : (data) =>(dispatch(signout(data)))
})

const mapStateToProps = (state)=>({
    user: state.currentUser.user
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))