import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button';

interface ButButtonProps {
    className?: string;
}

//Компонент для тестирования
export const BugButton = ({ className }: ButButtonProps) => {
    const [error, setError] = useState(false);

    const dropError = () => {
      setError(true);
    } 

    useEffect(() => {
      if (error) {
        throw new Error();
      }
    }, [error])

    return (
        <Button 
          onClick={dropError} 
          className={classNames("", {}, [className])}
        >
          throw error
        </Button>
    )
}