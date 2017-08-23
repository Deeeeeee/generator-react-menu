import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

/**
 * 加载公共样式文件
 * */
// import './_common_less/index.less';
import './_common_sass/reset.scss';
import './_common_sass/base.scss';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
        const { children, location, actions, home, user} = this.props;
        return (
            <div>
                {
                    React.cloneElement(children, {
                        key: location.pathname,
                        actions,
                        home,
                        user
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        routing: state.routing,
        //
        home: state.home,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
