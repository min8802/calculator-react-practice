import Button from "../components/Button";

const ButtonEnter = ({name, setResult, result, operator, temp}) => {
    const onClickButton = () => {
        switch (operator) {
            case '+':
                result += +temp
                setResult(result);
                break
        };
    };
    
    return (
        <Button name={name} onClickButton={onClickButton}/>
    );
};

export default ButtonEnter

