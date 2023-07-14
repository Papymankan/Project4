import React from 'react'
import './Product.css'
import Chart from '../../Components/Chart/Chart'

export default function Product() {
    let sellArray = [
        {
            'name': 'Apr',
            'sale': 390
        },
        {
            'name': 'May',
            'sale': 219
        },
        {
            'name': 'Jun',
            'sale': 541
        }
    ]
    return (
        <div className='Product'>
            <div className="container">
                <div className="productCreate">
                    <h1>Product</h1>
                    <button>Create</button>
                </div>
                <div className="productInfoTop">
                    <div className="productinfoTopLeft">
                        <Chart title='Sale in Last Month' data={sellArray} dataKey='sale' id='productChart' />
                    </div>
                    <div className="productinfoTopRight">
                        <div className="productInfoHeader">
                            <img src="/Sources/Products/4090.jpg" />
                            RTX 4090
                        </div>
                        <div className="productInfos">
                            <span>ID:</span>
                            <span>4</span>
                        </div>
                        <div className="productInfos">
                            <span>Name:</span>
                            <span>RTX 4090</span>
                        </div>
                        <div className="productInfos">
                            <span>Price:</span>
                            <span>$400</span>
                        </div>
                        <div className="productInfos">
                            <span>In Stock</span>
                            <span>Yes</span>
                        </div>
                    </div>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoBottomLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder='RTX 4090' />
                        <label>Product Price</label>
                        <input type="number" value={400} />
                        <label>Product Availability</label>
                        <select>
                            <option>yes</option>
                            <option>no</option>
                        </select>
                    </div>
                    <div className="productInfoBottomRight">
                        <img src="/Sources/Products/4090.jpg" />
                        <button>Upload Image</button>
                    </div>
                </div>
            </div>
        </div>
    )
}