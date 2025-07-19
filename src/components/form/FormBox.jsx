const FormBox = ({ children, onSubmit, className }) => {
    return (
        <form onSubmit={onSubmit} className={`${className} flex flex-col gap-4`}>
            {children}
        </form>
    )
}

export default FormBox;