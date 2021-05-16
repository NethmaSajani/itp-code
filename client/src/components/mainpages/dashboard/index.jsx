import React, { useState } from 'react'
import {Route, Switch} from 'react-router-dom'
import './dash.css'
import Products from '../products/Products'


export default function Home() {







    return (
        <div id="dashboard_container">
           
                    <li class="sidebar_item">Room </li>
                    <li class="sidebar_item">Booking</li>
                    <li class="sidebar_item">Food </li>
                    <li class="sidebar_item">Order</li>
                    <li class="sidebar_item">Employee</li>
                    <li class="sidebar_item">Supplier</li>
                    <li class="sidebar_item">Inventory</li>
                    <li class="sidebar_item"></li>
              
            
        </div>
    )
}
