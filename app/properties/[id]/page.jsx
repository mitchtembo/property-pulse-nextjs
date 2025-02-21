

function PropertyPage({params, searchParams,}) {
  console.log("PropertyPage Component")
  
  return (
    <div> 
      <h1>Property Page: {params.id}</h1>

    </div>
  )       
}

export default PropertyPage