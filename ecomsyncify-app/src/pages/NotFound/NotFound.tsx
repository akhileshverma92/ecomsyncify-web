import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import { themeColors } from '../../theme/themeColors';

export default function NotFound() {

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8" style={{ backgroundColor: themeColors.white }}>
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div 
          className="mb-6 sm:mb-8"
          style={{
            background: `linear-gradient(135deg, ${themeColors.blue} 0%, ${themeColors.limeGreen} 50%, ${themeColors.teal} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold leading-none">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-6 sm:mb-8">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            style={{ color: themeColors.black }}
          >
            Page Not Found
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto"
            style={{ color: themeColors.gray }}
          >
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Search Icon */}
        <div className="mb-8 sm:mb-10 flex justify-center">
          <div 
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
              color: themeColors.white,
            }}
          >
            <Search size={48} className="sm:w-16 sm:h-16" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 touch-manipulation"
            style={{ 
              background: `linear-gradient(135deg, ${themeColors.blue} 0%, ${themeColors.limeGreen} 50%, ${themeColors.teal} 100%)`,
              color: themeColors.white,
              minHeight: '44px',
            }}
          >
            <Home size={20} />
            Go to Homepage
          </Link>
         
        </div>

        {/* Helpful Links */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t" style={{ borderColor: themeColors.grayLight }}>
          <p 
            className="text-sm sm:text-base mb-4 sm:mb-6"
            style={{ color: themeColors.gray }}
          >
            You might be looking for:
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              to="/product"
              className="px-4 py-2 rounded-lg text-sm sm:text-base transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: themeColors.grayLight,
                color: themeColors.black,
              }}
            >
              Products
            </Link>
            <Link
              to="/about-us"
              className="px-4 py-2 rounded-lg text-sm sm:text-base transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: themeColors.grayLight,
                color: themeColors.black,
              }}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-lg text-sm sm:text-base transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: themeColors.grayLight,
                color: themeColors.black,
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

