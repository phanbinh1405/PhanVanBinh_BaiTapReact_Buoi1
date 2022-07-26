import React, { Component } from 'react';

export default class Banner extends Component {
  render() {
    return (
      <div className='py-5'>
        <div className='bg-light text-center p-5'>
          <div className='p-5'>
            <h1 className='display-5 fw-bold'>A warm welcome!</h1>
            <p className='fs-4'>
              Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </p>
            <a className='btn bg-primary text-white btn-lg' href='#'>
              Call to action
            </a>
          </div>
        </div>
      </div>
    );
  }
}
