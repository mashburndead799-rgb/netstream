import React, { useState, useRef, useEffect } from 'react';
import { X, Minus, Maximize2, Square } from 'lucide-react';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  icon?: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ id, title, children, isOpen, isMinimized, zIndex, onClose, onMinimize, onFocus, icon }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [size, setSize] = useState({ w: 900, h: 650 });
  const [isDragging, setIsDragging] = useState(false);
  const [rel, setRel] = useState({ x: 0, y: 0 });
  const [isMaximized, setIsMaximized] = useState(false);
  const [preMaximizeState, setPreMaximizeState] = useState({ x: 50, y: 50, w: 800, h: 600 });
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const offsetX = Math.floor(Math.random() * 40) + 20;
      const offsetY = Math.floor(Math.random() * 40) + 20;
      setPosition(prev => (prev.x === 50 && prev.y === 50) ? { x: 50 + offsetX, y: 50 + offsetY } : prev);
    }
  }, [isOpen]);

  const onMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0 || isMaximized) return;
    onFocus();
    
    if (windowRef.current) {
        const rect = windowRef.current.getBoundingClientRect();
        setIsDragging(true);
        setRel({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    }
    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    let newX = e.clientX - rel.x;
    let newY = e.clientY - rel.y;
    
    // Constraints
    if (newY < 0) newY = 0;
    
    setPosition({ x: newX, y: newY });
  };

  const onMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    } else {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging]);

  const toggleMaximize = () => {
      if (isMaximized) {
          setPosition({ x: preMaximizeState.x, y: preMaximizeState.y });
          setSize({ w: preMaximizeState.w, h: preMaximizeState.h });
      } else {
          setPreMaximizeState({ ...position, ...size });
          setPosition({ x: 0, y: 0 }); 
          setSize({ w: window.innerWidth, h: window.innerHeight - 80 }); // Leave space for dock
      }
      setIsMaximized(!isMaximized);
      onFocus();
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={windowRef}
      onMouseDownCapture={onFocus}
      className={`fixed flex flex-col bg-[#121212]/95 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-xl overflow-hidden transition-all duration-200 ${isMinimized ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 scale-100'} ${isDragging ? 'select-none transition-none' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.w}px`,
        height: `${size.h}px`,
        zIndex: zIndex,
        display: isMinimized ? 'none' : 'flex',
      }}
    >
      {/* Window Title Bar */}
      <div 
        className={`h-10 flex items-center justify-between px-3 bg-white/5 border-b border-white/5 ${isMaximized ? '' : 'cursor-default'}`}
        onMouseDown={onMouseDown}
        onDoubleClick={toggleMaximize}
      >
        <div className="flex items-center gap-3 overflow-hidden pl-1">
            <span className="text-blue-400">{icon}</span>
            <span className="text-gray-200 text-sm font-medium tracking-wide truncate select-none">
            {title}
            </span>
        </div>
        
        <div className="flex items-center gap-1">
          <button onClick={(e) => { e.stopPropagation(); onMinimize(); }} className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-md text-gray-400 hover:text-white transition-colors">
            <Minus size={16} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); toggleMaximize(); }} className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-md text-gray-400 hover:text-white transition-colors">
            {isMaximized ? <Square size={12} /> : <Maximize2 size={14} />}
          </button>
          <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:text-white rounded-md text-gray-400 transition-colors ml-1">
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 relative overflow-hidden bg-[#0f0f0f] text-white">
        {children}
      </div>
      
      {!isMaximized && (
        <div className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize z-50 flex items-end justify-end p-0.5">
            <div className="w-1.5 h-1.5 bg-gray-500/50 rounded-br-sm"></div>
        </div>
      )}
    </div>
  );
};

export default Window;