'use strict';
import React from 'react';
import {
    expect
} from 'chai';
import {
    shallow,
    mount,
    render
} from 'enzyme';
import Posts from '../../scripts/components/Posts';

describe('Component Posts', function() {
    function init(isLoading = false, posts = []){
      return (<Posts isLoading={isLoading} posts={posts}/>)
    }

    it('should load component', function() {
        const wrapper = shallow(init());
        expect(wrapper.is('div')).to.equal(true);
    })

    it('should be loading', function() {
        const wrapper = mount(init(true));
        expect(wrapper.props().isLoading).to.be.true;
        expect(wrapper.contains(<div>I am loading...</div>)).to.be.true;
    })

    it('should show number posts', function() {
        let posts = [{}, {}, {}];
        const wrapper = shallow(init(false, posts));
        expect(wrapper.contains(<div>{posts.length} Posts</div>)).to.be.true;
    })
});
