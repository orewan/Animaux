import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "../Header/Header.module.css"

class Header extends React.Component{

    render(){
        return(
            <div>
                <div className="topHeader" >
                <button type="button" class="btn btn-primary">Creer votre compte</button>
                </div>
            </div>
        );
    }
}

export default Header