import React from "react";
import { Link } from 'react-router';
import config from '../../config';

/**
 * 加载图片或样式文件
 * */
import './sass/Footer.scss';
// import logo from './images/logo.png';

export default class TopBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="footer">
                <div className="layout">
                    <div>Copyright © XXXXX</div>
                </div>
            </div>
        )
    }
}