import React from 'react';
import TopGraph from './topGraph';

const Trans = () => {
  return (
    <section className="notify">

      <div className="notify__card">
        <div className="notify__card-lt">
          <p>Daily Transaction Volume</p>
          <h3>2,342</h3>
        </div>
        <div className="notify__card-graph">
          <TopGraph />
        </div>
      </div>

      <div className="notify__card">
        <div className="notify__card-lt">
          <p>Daily Transaction Value</p>
          <h3>₦4,000,000</h3>
        </div>
        <div className="notify__card-graph">
          <TopGraph />
        </div>
      </div>

      <div className="notify__card">
        <div className="notify__card-lt">
          <p>Total Transaction Volume</p>
          <h3>452,000</h3>
        </div>
        <div className="notify__card-graph">
          <TopGraph />
        </div>
      </div>

      <div className="notify__card">
        <div className="notify__card-lt">
          <p>Total Transaction Value</p>
          <h3>₦4,000,000</h3>
        </div>
        <div className="notify__card-graph">
          <TopGraph />
        </div>
      </div>
      
    </section>
  )
}

export default Trans;