import React from 'react'

// Data
import {TrendData} from '../../data/trendData.js';

// Styles
import './TrendCard.css';

const TrendCard = () => {
  return (
    <div className="trendCard">
        <h3>Trends for You</h3>

        {TrendData.map((trend) => {
            return (
                <div className="trend">
                    <span>#{trend.name}</span>
                    <span>{trend.shares}K shares</span>
                </div>    
            )       
        })}
    </div>
  )
}

export default TrendCard;