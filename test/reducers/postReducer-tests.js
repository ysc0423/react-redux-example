import reducer from '../../scripts/reducers/postReducers'
import {UPDATE_POSTS, FETCHING_POSTS} from '../../scripts/actions/postActions';
import {expect} from 'chai';

describe('post reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).to.deep.equal({posts: [], isLoading: false})
    })

    it('should handle FETCHING_POSTS', () => {
        expect(reducer({
            posts: [],
            isLoading: false
        }, {
            type: FETCHING_POSTS,
            isLoading: true
        })).to.deep.equal({posts: [], isLoading: true})
    });
});
