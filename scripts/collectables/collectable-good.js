//@ts-check
import { CollectableItem } from "./collectable-base.js";

export class GoodCollectable extends CollectableItem {
    constructor(x = 0, y = 0) {
        super(x, y);
    };
};