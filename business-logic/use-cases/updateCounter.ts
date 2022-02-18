import { Counter } from "../domain/counterEntity";
import { CounterGateway } from "../gateway/counterGateway";


type UpdateCounterGateway = Pick<
    CounterGateway, 
    'counter' | 'updateCounter' | 'setCounter'
>;
const debounce = require('lodash.debounce');
const debouncedTask = debounce((task: Promise<Counter | undefined>) => Promise.resolve(task()), 500);

const updateCounter = (
    gateway: UpdateCounterGateway,
    updateBy: (counter: Counter) => Counter
) => {
    const updatedCounter = gateway.counter ? 
        updateBy(gateway.counter) 
        : gateway.counter;
    if(updatedCounter) {
        gateway.setCounter(updatedCounter);
        return debouncedTask(() => gateway.updateCounter(updatedCounter));
    }
};

export { updateCounter };
export type { UpdateCounterGateway };