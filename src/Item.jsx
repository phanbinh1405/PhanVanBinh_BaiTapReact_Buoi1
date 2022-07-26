import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    return (
      <div className='card border-0 bg-light h-100'>
        <div className='card-body text-center pt-0 p-5'>
          <div
            className='bg-primary bg-gradient text-white rounded-3 mb-4'
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '4rem', height: '4rem', fontSize: '2rem', marginTop:'-25px' }}
          >
            <i className='bi bi-collection'></i>
          </div>
          <h2 className='fs-4 fw-bold'>Fresh new layout</h2>
          <p className='mb-0'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
        </div>
      </div>
    );
  }
}
