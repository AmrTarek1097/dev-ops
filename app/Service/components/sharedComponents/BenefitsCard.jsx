import React from 'react'

const BenefitsCard = ({icon, title, children}) => {
  return (
    <div className="space-y-7 grid place-items-center my-8">
          <img src={icon} alt="" />
          <h2 className="text-lg font-semibold">
            {title}
          </h2>
          <p className=" text-center text-lg font-normal leading-8">
            {children}
          </p>
        </div>
  )
}

export default BenefitsCard