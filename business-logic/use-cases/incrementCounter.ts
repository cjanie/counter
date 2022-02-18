import { increment } from "../domain/counterModel";
import { updateCounterUseCase, UpdateCounterGateway } from "./updateCounter";

const incrementCounterUseCase = (gateway: UpdateCounterGateway) => {
    return updateCounterUseCase(gateway, increment);
}

export {incrementCounterUseCase };