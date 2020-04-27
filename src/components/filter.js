import React, { Component } from 'react';

export default class Filter extends Component {

    render() {
        return (
            <div className='row'>
                <div className='col-4'>
                    <p > <span style={{color : 'red'}}>{this.props.products.length} </span> items found</p>
                </div>
                
                <div className='col-4'>
                    <label>
                        Order by :
                        <select className='form-control' onChange={this.props.handlechangesort} value={this.props.sort}>
                            <option value=''>select</option>
                            <option value="lowest">lowest to highest</option>
                            <option value='highest'>Highest to lowest</option>
                        </select>
                    </label>
                </div>

                <div className='col-4'>
                    <label>
                        Order by :
                        <select className='form-control' onChange={this.props.handlechangesize} value={this.props.size}>
                            <option value=''>select</option>
                            <option value="XS">XS</option>
                            <option value='S'>S</option>
                            <option value='M'>M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}