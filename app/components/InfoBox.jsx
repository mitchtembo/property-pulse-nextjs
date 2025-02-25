import Link from "next/link"

const InfoBox = ({BtnInfo,heading,children, backgroundColor="bg-gray-100", textColor="text-gray-800"}) => {
    return (
        <div className={` ${backgroundColor} p-6 rounded-lg shadow-md`}>
            <h2 className={`text-2xl font-bold ${textColor}`}>{heading}</h2>
            <p className="mt-2 mb-4">
               {children}
            </p>
            <Link
                href={BtnInfo.Link}
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
                {BtnInfo.Text}
            </Link>
        </div>
    )
}

export default InfoBox