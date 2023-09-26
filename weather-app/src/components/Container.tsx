export const Container: React.FC<{children: JSX.Element}> = ({children}) => {
    return (
    <div className="container w-[60%] my-10">
        {children}
    </div>)
}