import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../action/actionCreators';
import Main from './main';

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;