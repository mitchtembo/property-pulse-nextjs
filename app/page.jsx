import Link  from "next/link";
const Homepage = () => {
  return (
    <div classNameName="text-2xl bg-red">
      <h1 classNameName='text-2xl text-center'>Wlcome to Property Pulse</h1>
      <Link href='/properties' classNameName='text-2xl text-center'>View Properties</Link><br />
    </div>
  )
}

export default Homepage
