import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss'
import React, { MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  lazy?: boolean
}

const ANIMATION_DELAY = 100;

export const Modal = (props: ModalProps) => {
  const { theme } = useTheme();
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false)
  const timeRef = useRef<ReturnType<typeof setTimeout>>();
  const { className, children, isOpen, onClose, lazy } = props;

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  const onContentClick = (event: MouseEvent) => {
    event.stopPropagation();
  }

  const handleClick = useCallback(() => {
    setIsMounted(false);
    setIsClosing(true);
    timeRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, ANIMATION_DELAY);
  }, [onClose])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onKeyDown = useCallback((e: any) => {
    if (e.key === "Escape") {
      handleClick();
    }
  }, [handleClick]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener("keydown", onKeyDown);
    }
  }, [isOpen, onKeyDown])

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div onClick={handleClick} className={classNames(cls.Modal, mods, [className, theme])}>
        <div className={cls.overlay}>
          <div onClick={onContentClick} className={cls.content}>{children}</div>
        </div>
      </div>
    </Portal>
  )
}