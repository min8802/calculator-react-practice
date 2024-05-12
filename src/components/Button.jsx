const Button = ({name, onClickButton}) => {
    return (
        <button className="p-10" onClick={onClickButton}>
            {name}
        </button>
    );  
};

export default Button