
import { useEffect, useState } from "react";
import {Option} from '../types/search'

export const useKeyboardNavigation = (
  isOpen: boolean,
  options: Option[],
  onSelect: (option: Option) => void,
  onClose: () => void
) => {
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  useEffect(() => {
    if (!isOpen) {
      setHighlightedIndex(-1);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex(prev => prev < options.length - 1 ? prev + 1 : 0);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex(prev => prev > 0 ? prev - 1 : options.length - 1);
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (highlightedIndex >= 0) {
            onSelect(options[highlightedIndex]);
          }
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, highlightedIndex, options, onSelect, onClose]);

  return highlightedIndex;
};