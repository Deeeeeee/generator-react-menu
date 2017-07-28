import React from 'react';
import {Link} from 'react-router';
import config from '../../config';

/**
 * 加载公共组件
 * */
import MainSection from '../../components/MainSection/MainSection';

/**
 * 加载样式或图片文件
 * */
import './sass/caseDetail.scss'

class Cases extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visiable: false
        };
    }

    componentDidMount() {
        // var _this = this;
        // const {actions,location} = this.props;
        // let caseId = this.props.params.id;
        // actions.getCaseDetail({id:caseId}).then(
        //     _this.setState({
        //         visiable: true
        //     })
        // );
    }
    componentWillUnmount() {
       
    }
    render() {
        const {actions, home, user} = this.props;
        return (
            <MainSection actions={actions} home={home} user={user} currentNav={[3,-1]} className="case-detail-page">
                
            </MainSection>
        );
    }
}

export default Cases;