interface TitleProps {
    children: React.ReactNode;
    className?: string;
}

const Title = ({ children, className = "" }: TitleProps) => {
    return <h2 className={`text-2xl font-bold mb-10 text-center ${className}`}>{children}</h2>;
};

export default Title;