import React from 'react';
import SlideComponent from './common/SlideComponent';

const SliderSelect = ({ data, setData }) => {
  console.log(data);

  const bankLimit = 10000;

  return (
    <>
      <SlideComponent
        label='Home Value'
        min={1000}
        max={bankLimit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
            homeValue: value,
          })
        }
        unit='€'
        amount={data.homeValue}
      />
      <SlideComponent
        label='Down Payment'
        min={0}
        max={data.homeValue}
        value={data.downPayment}
        defaultValue={data.downPayment}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: data.homeValue - value,
            downPayment: value,
          })
        }
        unit='€'
        amount={data.downPayment}
      />
      <SlideComponent
        label='Loan Amount'
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: data.homeValue - value,
            loanAmount: value,
          })
        }
        unit='€'
        amount={data.loanAmount}
      />
      <SlideComponent
        label='Interest Rate'
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={0.5}
        onChange={(e, value) =>
          setData({
            ...data,
            interestRate: value,
          })
        }
        amount={data.interestRate}
        unit='%'
      />
    </>
  );
};

export default SliderSelect;
