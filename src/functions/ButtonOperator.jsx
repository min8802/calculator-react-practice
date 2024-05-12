import Button from "../components/Button";

const ButtonOperator = ({name, setResult, setOperator, result, setTemp}) => {
    const onClickButton = () => {
        setOperator("+");
        setTemp(result);
        result = 0;
        setResult(result);
        console.log(name);
        console.log(result);
    };
    return (
        <Button name={name} onClickButton={onClickButton}/>
    );
};

export default ButtonOperator;