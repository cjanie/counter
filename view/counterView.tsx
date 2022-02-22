import { useEffect } from "react";
import { CounterGateway } from "../business-logic/gateway/counterGateway"
import { useCounterViewModel } from "../controller/counterViewModel"

const CounterView = () => {
    const gateway: CounterGateway = { // Mock
        counter: {value: 1},
        isLoading: false,
        isUpdating: false,
        loadInitialCounter: () => Promise.resolve({value: 0}),
        setCounter: ({value = 2}) => {value: 2},
        updateCounter: ({value = 3}) => Promise.resolve({value: 1}),
    }
    const {
        count,
        shouldDisableButton,
        shouldShowSpinner,
        getCounter,
        incrementCounter,
        decrementCounter,
    } = useCounterViewModel(gateway);

    useEffect(() => {
        getCounter();
    }, [getCounter]);

    return (
        <div>
            {shouldShowSpinner ? (
                <p>Spinner</p>
            ) : (
                <>
                    <button 
                        onClick={decrementCounter}
                        disabled={shouldDisableButton}
                    >dec</button>
                    <span>{count}</span>
                    <button
                        onClick={incrementCounter}
                    >inc</button>
                </>
            )}
        </div>
    );
}

export default CounterView;