import React from 'react';

interface CardComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const CardComponent: React.FC<CardComponentProps> = ({
  children,
  className = '',
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={`card p-6 md:p-8 relative overflow-hidden ${
        hoverEffect ? 'card-hover' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardComponent;
