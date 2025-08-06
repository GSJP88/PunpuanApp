import React from 'react'
import "../Styles/propertyViewPage.css"
import PropertySign from '../components/propertyView/PropertySign'
import PropertyImgSlide from '../components/propertyView/PropertyImgSlide'
import PropertyDetail from '../components/propertyView/PropertyDetail'
import PropertySpecs from '../components/propertyView/PropertySpecs'
import PropertyLocation from '../components/propertyView/PropertyLocation'

const PropertyViewPage = () => {
  return (
    <div className='property-view-page container'>
      <PropertySign/>
      <PropertyImgSlide/>
      <PropertySpecs/>
      <PropertyDetail/>
      <PropertyLocation/>
    </div>
  )
}

export default PropertyViewPage
