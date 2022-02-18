import React from "react";
import { CounterGateway } from "../business-logic/gateway/counterGateway";
import { decrementCounterUseCase } from "../business-logic/use-cases/decrementCounter";
import { getCounterUseCase } from "../business-logic/use-cases/getCounter";
import { incrementCounterUseCase } from "../business-logic/use-cases/incrementCounter";

function useCounterViewModel(gateway: CounterGateway) {
    const getCounter = React.useCallback(
        function () {
            getCounterUseCase({
                loadInitialCounter: gateway.loadInitialCounter
            });
        },
        [gateway.loadInitialCounter]
    );

    const incrementCounter = React.useCallback(
        function () {
            incrementCounterUseCase({
                counter: gateway.counter,
                updateCounter: gateway.updateCounter,
                setCounter: gateway.setCounter,
            });
        },
        [gateway.counter, gateway.updateCounter, gateway.setCounter]
    );

    const decrementCounter = React.useCallback(
        function () {
            decrementCounterUseCase({
                counter: gateway.counter,
                updateCounter: gateway.updateCounter,
                setCounter: gateway.setCounter,
            });
        },
        [gateway.counter, gateway.updateCounter, gateway.setCounter]
    );

    return {
        count: gateway.counter?.value,
        shouldShowSpinner: typeof gateway.counter === 'undefined' || gateway.isLoading,
        shouldDisableButton: gateway.counter?.value === 0,
        getCounter,
        incrementCounter,
        decrementCounter,
    }
}

export { useCounterViewModel };