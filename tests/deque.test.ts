import Deque from '../src/deque';

describe('Deque', () => {
    let deque: Deque<number>;

    beforeEach(() => {
        deque = new Deque<number>();
    });

    test('should start empty', () => {
        expect(deque.isEmpty()).toBe(true);
        expect(deque.size()).toBe(0);
    });

    test('should add items to the front', () => {
        deque.addFront(1);
        deque.addFront(2);
        expect(deque.size()).toBe(2);
        expect(deque.front()).toBe(2);
    });

    test('should add items to the back', () => {
        deque.addBack(1);
        deque.addBack(2);
        expect(deque.size()).toBe(2);
        expect(deque.back()).toBe(2);
    });

    test('should remove items from the front', () => {
        deque.addFront(1);
        deque.addFront(2);
        expect(deque.removeFront()).toBe(2);
        expect(deque.size()).toBe(1);
        expect(deque.removeFront()).toBe(1);
        expect(deque.size()).toBe(0);
    });

    test('should remove items from the back', () => {
        deque.addBack(1);
        deque.addBack(2);
        expect(deque.removeBack()).toBe(2);
        expect(deque.size()).toBe(1);
        expect(deque.removeBack()).toBe(1);
        expect(deque.size()).toBe(0);
    });

    test('should peek at the front item without removing it', () => {
        deque.addFront(1);
        deque.addFront(2);
        expect(deque.front()).toBe(2);
        expect(deque.size()).toBe(2);
    });

    test('should peek at the back item without removing it', () => {
        deque.addBack(1);
        deque.addBack(2);
        expect(deque.back()).toBe(2);
        expect(deque.size()).toBe(2);
    });

    test('should clear the deque', () => {
        deque.addFront(1);
        deque.addFront(2);
        deque.clear();
        expect(deque.isEmpty()).toBe(true);
    });
});
