import React, { Component } from 'react';
import Banner from './Banner';
import Item from './Item';

export default class Body extends Component {
  render() {
    return (
      <main className='pt-5 container px-lg-5'>
        <Banner />
        <div className='row'>
          <div className='col-xxl-4 col-lg-6 mb-5'>
            <Item />
          </div>
          <div className='col-xxl-4 col-lg-6 mb-5'>
            <Item />
          </div>
          <div className='col-xxl-4 col-lg-6 mb-5'>
            <Item />
          </div>
          <div className='col-xxl-4 col-lg-6 mb-5'>
            <Item />
          </div>
          <div className='col-xxl-4 col-lg-6 mb-5'>
            <Item />
          </div>
          <div className='col-xxl-4 col-lg-6 mb-5'>
            <Item />
          </div>
        </div>
      </main>
    );
  }
}
