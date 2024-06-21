import Stack from '../src/stack';

describe('Stack', () => {
    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack<number>();
    });

    test('should start empty', () => {
        expect(stack.isEmpty()).toBe(true);
        expect(stack.size()).toBe(0);
    });

    test('should push items', () => {
        stack.push(1);
        stack.push(2);
        expect(stack.size()).toBe(2);
        expect(stack.peek()).toBe(2);
    });

    test('should pop items', () => {
        stack.push(1);
        stack.push(2);
        expect(stack.pop()).toBe(2);
        expect(stack.size()).toBe(1);
        expect(stack.pop()).toBe(1);
        expect(stack.size()).toBe(0);
    });

    test('should peek at the top item without removing it', () => {
        stack.push(1);
        stack.push(2);
        expect(stack.peek()).toBe(2);
        expect(stack.size()).toBe(2);
    });

    test('should clear the stack', () => {
        stack.push(1);
        stack.push(2);
        stack.clear();
        expect(stack.isEmpty()).toBe(true);
    });
});
