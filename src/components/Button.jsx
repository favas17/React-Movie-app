
function AuthButton({onClick,label,className}) {


    return(
        <button onClick={onClick} className={className}>
            {label}
        </button>
    )
}

export default AuthButton;