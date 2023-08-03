import React from 'react'

const SubHeading = ({heading,subheading}) => {
  return (
    <div className="text-center  mb-5">
        <h1 className="text-4xl font-semibold text-darkBlue mb-1">{heading}</h1>
        <p className=" text-darkBlue">{subheading}</p>
      </div>
  )
}

export default SubHeading
