import { Counter } from "./CounterEntity";

const create = (count: Counter['value']) => ({value: count});

const decrement = (counter: Counter) => ({
    value: Math.max(counter.value - 1, 0)
});

const increment = (counter: Counter) => ({
    value: counter.value + 1
});

export { create, decrement, increment };