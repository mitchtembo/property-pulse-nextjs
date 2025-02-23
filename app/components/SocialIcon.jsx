import { FaGoogle, FaFacebook } from "react-icons/fa";

const SocialIcon = ({ 
    Icon, 
    bgColor = 'bg-white', 
    textColor = 'text-gray-700', 
    size = '24px', 
    padding = 'p-2' 
}) => {
    return (
        <div
            classNameName={`${bgColor} ${padding} rounded-full flex items-center justify-center`}
            style={{ width: size, height: size }}
        >
            <Icon classNameName={`${textColor} w-full h-full`} />
        </div>
    )
}

export default SocialIcon;