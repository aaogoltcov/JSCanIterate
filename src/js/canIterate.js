'use strict';

export default function canIterate(object) {
    return Symbol.iterator in Object(object);
}
