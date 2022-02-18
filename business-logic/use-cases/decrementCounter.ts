import { decrement } from "../domain/counterModel";
import { updateCounter, UpdateCounterGateway } from "./updateCounter";

const decrementCounter = (gateway: UpdateCounterGateway) => {
    return updateCounter(gateway, decrement);
}

export { decrementCounter };