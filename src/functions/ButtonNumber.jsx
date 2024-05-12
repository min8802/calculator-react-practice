import Button from "../components/Button"

const ButtonNumber = ({name, result, setResult}) => {
    const onClickButton = () => {
        if (result == "0") {
            setResult(name);
        } else {
            result = String(result);
            setResult(result+name);
        }
    };
    return (
        <Button name={name} onClickButton={onClickButton}/>
    );
};

export default ButtonNumber;