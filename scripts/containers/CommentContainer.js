import {
    connect
} from 'react-redux';
import Comment from '../components/Comments';
import {fetchPosts} from '../actions/postActions'

const mapStateToProps = (state) => {
    return {
        posts: state.board.posts,
        isLoading: state.board.isLoading
    };
};

function mergeProps(stateProps, dispatchProps, ownProps) {
    const{posts} = stateProps;
    const {
        dispatch
    } = dispatchProps;

    if(posts.length == 0)
      dispatch(fetchPosts());

    return {
        ...stateProps,
        ...ownProps
    };
}

export default connect(mapStateToProps, null, mergeProps)(Comment);
