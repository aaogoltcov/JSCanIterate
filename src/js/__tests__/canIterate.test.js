import canIterate from '../canIterate';
import { test } from "@jest/globals";

test('should true', () => {
    expect(canIterate(new Map())).toBe(true);
    expect(canIterate(new Set())).toBe(true);
    expect(canIterate("Netology")).toBe(true);
})

test('should false', () => {
    expect(canIterate(null)).toBe(false);
    expect(canIterate(10)).toBe(false);
})
