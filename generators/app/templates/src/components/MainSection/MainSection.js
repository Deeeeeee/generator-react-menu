import React from "react";
// import { BackTop } from 'antd';
/**
 * 加载公共组件
 * */
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

/**
 * 加载图片或样式文件
 * */
// import 'antd/lib/back-top/style/index.less';


export default class MainSection extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        window.scrollTo(0,0);
    }

    render() {
        const {actions, user} = this.props;
        return (
            <div id="mainSection" className={this.props.className}>
                <Header actions={ actions } user={ user } />
                {
                    this.props.children
                }
                {/*<BackTop />*/}
                {/*<Footer />*/}
            </div>
        )
    }
}