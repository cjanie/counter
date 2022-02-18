import { increment } from "../domain/counterModel";
import { updateCounter, UpdateCounterGateway } from "./updateCounter";

const incrementCounter = (gateway: UpdateCounterGateway) => {
    return updateCounter(gateway, increment);
}

export {incrementCounter };