import * as actions from '../../scripts/actions/postActions';
import {UPDATE_POSTS, FETCHING_POSTS} from '../../scripts/actions/postActions';
import {expect} from 'chai';

describe('actions', () => {
    it('should create an action to fetch posts', () => {
        const expectedAction = {
            type: FETCHING_POSTS,
            isLoading: true
        }

        expect(actions.fetchingPosts().type).to.equal(expectedAction.type);
        expect(actions.fetchingPosts().isLoading).to.equal(expectedAction.isLoading);
    })
})
