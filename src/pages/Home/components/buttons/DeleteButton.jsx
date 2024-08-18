/* eslint-disable react/prop-types */
export default function DeleteButton({onClick}){

    return (
        <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-700 hover:text-red-500" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}