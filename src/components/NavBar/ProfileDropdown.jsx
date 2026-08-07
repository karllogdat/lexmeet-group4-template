import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router";
import lexmeetLogo from '../../assets/LexLogo.svg';

export default function ProfileDropdown({ onOpenLogin }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);
  const [isArrowHovered, setIsArrowHovered] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLoginClick = () => {
    setIsOpen(false);
    if (onOpenLogin) onOpenLogin(); // Opens the Signin modal
  };

  const handleLogoutClick = () => {
    setIsOpen(false);
    alert('Logging out...');
  };

  return (
    <div 
      ref={dropdownRef} 
      style={{ 
        position: 'relative', 
        display: 'inline-block',
        fontFamily: "'g4-caption', sans-serif",
      }}
    >
      {/* Trigger Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsAvatarHovered(true)}
          onMouseLeave={() => setIsAvatarHovered(false)}
          style={{
            background: isAvatarHovered ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            transform: isAvatarHovered ? 'scale(1.05)' : 'scale(1)',
            fontFamily: "'g4-caption', sans-serif",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsArrowHovered(true)}
          onMouseLeave={() => setIsArrowHovered(false)}
          style={{
            background: isArrowHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            padding: '6px',
            transition: 'background 0.2s ease',
            fontFamily: "'g4-caption', sans-serif",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
            }}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 12px)',
            right: 0,
            backgroundColor: '#EBF4F6',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            width: '200px',
            padding: '8px 0',
            zIndex: 1000,
            color: '#0F2338',
            fontFamily: "'g4-caption', sans-serif",
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <DropdownItem 
              to="/lexmeet" 
              onClick={() => setIsOpen(false)}
              icon={
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: 'currentColor',
                    maskImage: `url(${lexmeetLogo})`,
                    WebkitMaskImage: `url(${lexmeetLogo})`,
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    display: 'block',
                  }}
                />
              }
            >
              Go to Lexmeet
            </DropdownItem>

            <DropdownItem 
              to="/admin" 
              onClick={() => setIsOpen(false)}
              icon={<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>}
            >
              Admin Account
            </DropdownItem>

            <DropdownItem 
              to="/settings" 
              onClick={() => setIsOpen(false)}
              icon={<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></>}
            >
              Settings
            </DropdownItem>

            <hr style={{ border: 'none', borderTop: '1px solid #c5d6dd', margin: '6px 0' }} />

            {/* Log-in Link Triggering Modal */}
            <DropdownItem 
              isButton 
              onClick={handleLoginClick} 
              icon={<><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></>}
            >
              Log-in
            </DropdownItem>

            {/* Log-out Button */}
            <DropdownItem 
              isButton 
              onClick={handleLogoutClick} 
              icon={<><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></>}
            >
              Log-out
            </DropdownItem>
          </ul>
        </div>
      )}
    </div>
  );
}

function DropdownItem({ to, children, icon, isButton = false, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 16px',
    color: '#0F2338',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.06)' : 'transparent',
    transition: 'background 0.2s ease',
    cursor: 'pointer',
    width: '100%',
    border: 'none',
    textAlign: 'left',
    fontFamily: "'g4-caption', sans-serif",
  };

  const renderIcon = () => {
    if (!icon) return null;
    let iconContent;
    if (React.isValidElement(icon) && (icon.type === 'span' || icon.type === 'img' || icon.type === 'svg')) {
      iconContent = icon;
    } else {
      iconContent = (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {icon}
        </svg>
      );
    }

    return (
      <span
        style={{
          width: '24px',
          height: '24px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {iconContent}
      </span>
    );
  };

  const content = (
    <>
      {renderIcon()}
      {children}
    </>
  );

  return (
    <li>
      {isButton ? (
        <button
          type="button"
          onClick={onClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={style}
        >
          {content}
        </button>
      ) : (
        <Link
          to={to}
          onClick={onClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={style}
        >
          {content}
        </Link>
      )}
    </li>
  );
}