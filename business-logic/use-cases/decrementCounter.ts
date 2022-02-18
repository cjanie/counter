import { decrement } from "../domain/counterModel";
import { updateCounterUseCase, UpdateCounterGateway } from "./updateCounter";

const decrementCounterUseCase = (gateway: UpdateCounterGateway) => {
    return updateCounterUseCase(gateway, decrement);
}

export { decrementCounterUseCase };