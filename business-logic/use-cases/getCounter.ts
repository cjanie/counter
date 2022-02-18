import { CounterGateway } from "../gateway/counterGateway";

type GetCounterGateway = Pick<CounterGateway, "loadInitialCounter">

const getCounter = (gateway: GetCounterGateway) => {
    gateway.loadInitialCounter();
}

export { getCounter };