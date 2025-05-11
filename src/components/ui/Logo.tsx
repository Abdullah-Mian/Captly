import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center">
        <svg 
          className="w-6 h-6 mr-2" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M9.5 12L11 13.5L14.5 10M7 19C4.79086 19 3 17.2091 3 15C3 13.1358 4.27532 11.5694 6 11.126C6 11.084 6 11.042 6 11C6 8.79086 7.79086 7 10 7C12.2091 7 14 8.79086 14 11C14 11.042 14 11.084 14 11.126C15.7247 11.5694 17 13.1358 17 15C17 17.2091 15.2091 19 13 19" 
            stroke="url(#gradient)" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="gradient" x1="3" y1="7" x2="17" y2="19" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0070F3" />
              <stop offset="1" stopColor="#7928CA" />
            </linearGradient>
          </defs>
        </svg>
        Captly
      </span>
    </Link>
  )
}

export default Logo
