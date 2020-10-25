import React from 'react';

const Summary = () => {
  return (
    <section className="quickview">
      
      <div className="quickview__graph">

        <div className="quickview__graph--heading">

          <div className="date">
            <h3>Today: 5, Aug 2018</h3>
          </div>

          <div className="duration">
              <select id="duration" name="1 Jan - 1 June">
                <option>1 Jan - 1 June</option>
              </select>
          </div>

          <div className="scroll-button">
            <button>&lt;</button>
            <button>&gt;</button>
          </div>

        </div>

      </div>

      <div className="quickview__text">
        
        <div className="quickview__text--order">
          <h4>Order</h4>

          <div className="quickview__text--seperator">
            <div className="quickview__text--fill"></div>
          </div>

          <div className="quickview__text--order-detail">
            <p>Pending Orders:<span className="pending"> 20</span></p>
            <p>Reconciled Orders:<span className="reconciled"> 80</span></p>
            <p>Total Orders:<span className="total"> 100</span></p>
          </div>
        </div>
        
        <div className="quickview__text--order">
          <h4>Payments</h4>

          <div className="quickview__text--seperator">
            <div className="quickview__text--fill"></div>
          </div>

          <div className="quickview__text--order-detail">
            <p>Un-reconcilled Payments:<span className="pending"> 20</span></p>
            <p>Reconcilled Payments:<span className="reconciled"> 80</span></p>
            <p>Total Payments:<span className="total"> 100</span></p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Summary;
