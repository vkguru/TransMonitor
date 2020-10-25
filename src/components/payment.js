import React from 'react';
import Data from './paymentData.json';
import arrow from '../asset/img/arrow.svg';

const Payment = () => {

  const options = [
    {id: '20', value: '20'},
    {id: '50', value: '50'},
    {id: '100', value: '100'},
    {id: '150', value: '150'},
    {id: '200', value: '200'}
  ];

  const displayOptions = [
    {id: 1, value: 'All'},
    {id: 2, value: 'Reconciled'},
    {id: 3, value: 'Un-reconciled'},
    {id: 4, value: 'Settled'},
    {id: 5, value: 'Un-settled'}
  ];

  const data = Data;

  const total = data.map((res) => (res.id));

  return (
    
    <section className="payment">
      <header className="heading">
        <h3>Payments</h3>
      </header>

      <div className="payment--head">

        <div className="payment--display">
          <p>
            Showing
            <span>
              <select>
                {options.map((option) => (
                  <option key={option.id} value={option.value}>{option.value}</option>
                ))}
              </select>
            </span>
            out of 500 payments
          </p>
        </div>

        <div className="payment--search">
          <form>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6573 12L7.66054 8.00325C6.77101 8.80345 5.60422 9.22472 4.40868 9.17734C3.21314 9.12995 2.08334 8.61766 1.25994 7.74958C0.436537 6.8815 -0.0153972 5.72623 0.000400647 4.52986C0.0161985 3.33348 0.49848 2.19056 1.34452 1.34452C2.19056 0.49848 3.33348 0.0161985 4.52986 0.000400647C5.72623 -0.0153972 6.8815 0.436537 7.74958 1.25994C8.61766 2.08334 9.12995 3.21314 9.17734 4.40868C9.22472 5.60422 8.80345 6.77101 8.00325 7.66054L12 11.6573L11.6573 12ZM4.5954 0.492454C3.7833 0.489588 2.98862 0.727783 2.31199 1.17687C1.63536 1.62597 1.10723 2.26575 0.794463 3.01521C0.481699 3.76467 0.398378 4.59008 0.555052 5.38693C0.711726 6.18377 1.10135 6.9162 1.67457 7.49146C2.2478 8.06671 2.97884 8.45892 3.77513 8.61841C4.57142 8.7779 5.39712 8.6975 6.14768 8.38739C6.89824 8.07727 7.53989 7.5514 7.99137 6.87637C8.44285 6.20133 8.68385 5.4075 8.68386 4.5954C8.68259 3.51012 8.2519 2.46945 7.48585 1.70069C6.71981 0.931925 5.68066 0.497555 4.5954 0.492454Z" fill="#0E1D25"/>
              </svg>
              <input type="search" placeholder="Search payments" />
          </form>
        </div>

        <div className="payment--show">
          <p>
            Show
            <span>
              <select>
                {displayOptions.map((display) => (
                  <option key={display.id} value={display.value}>{display.value}</option>
                ))}
              </select>
            </span>
          </p>
        </div>
      </div>

      <div className="payment--table">

        <table>
          <thead className="payment--table-head">

            <tr>
              <th className="item">Item Type</th>
              <th className="trans">Price</th>
              <th className="trans">Transaction No</th>
              <th className="trans">Time</th>
              <th className="trans">Status</th>
              <th></th>
            </tr>
            
          </thead>

          <tbody className="payment--table-body">

              {data.map((info) => (
                <tr key={info.id} className="payment--table-row">
                  <td className="item"><span>{info.user}</span>{info.itemType}</td>
                  <td className="trans">{info.price}</td>
                  <td className="trans">{info.transactionNo}</td>
                  <td className="trans">{info.time}</td>
                  <td className="trans status"><button className={info.status === 'Reconcilled'? 're': '' || info.status === 'Pending'? 'pe' : '' || info.status === 'Un-reconcilled'? 'unre': ''}>{info.status}</button></td>
                  <td><img src={arrow} alt="arrow" /></td>
                </tr>
              ))}

              {}
            
          </tbody>
        </table>

      </div>

      <div className="payment--meta">
        
        <div className="entries">
          <p>Showing 1 to {total.length} of 1 entries</p>
        </div>

        <div className="payment-navigation">
          <button className="prev">Previous</button>
          <button className="active">1</button>
          <button className="nu">2</button>
          <button className="next">Next</button>
        </div>

      </div>
    </section>
  )
}

export default Payment;