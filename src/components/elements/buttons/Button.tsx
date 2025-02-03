"use client"

type buttonProps = {
  className?: string;
  label?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({ className, label, onClick, type }: buttonProps) => {
  return (
    <button type={type} onClick={onClick} className={className}>{label}</button>
  )
}

export default Button