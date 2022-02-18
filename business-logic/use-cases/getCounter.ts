import { CounterGateway } from "../gateway/counterGateway";

type GetCounterGateway = Pick<CounterGateway, "loadInitialCounter">

const getCounterUseCase = (gateway: GetCounterGateway) => {
    gateway.loadInitialCounter();
}

export { getCounterUseCase };