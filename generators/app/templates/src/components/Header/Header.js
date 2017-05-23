import React from "react";
import {Link} from 'react-router';
import config from '../../config';

/**
 * 加载图片或样式文件
 * */
import './sass/Header.scss';
import logo from './images/logo.png';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            visiable: false
        }
    }

    componentDidMount() {
        const {actions} = this.props;
        // actions.getUserInfo();
    }

    handleLogout() {
        const {actions} = this.props;
        // actions.logout();
    }

    render() {
        const { home, currentNav} = this.props;
        return (
            <div className="header">
                    <div className="layout ">
                        <h1>
                            <Link to="/">
                                {/*<img src={ logo } alt=""/>*/}
                                logo
                            </Link>
                        </h1>
                        
                    </div>
               
            </div>
        )
    }
}