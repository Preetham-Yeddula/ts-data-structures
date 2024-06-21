import Queue from '../src/queue';

describe('Queue', () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
    });

    test('should start empty', () => {
        expect(queue.isEmpty()).toBe(true);
        expect(queue.size()).toBe(0);
    });

    test('should enqueue items', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.size()).toBe(2);
        expect(queue.front()).toBe(1);
    });

    test('should dequeue items', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).toBe(1);
        expect(queue.size()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.size()).toBe(0);
    });

    test('should peek at the front item without removing it', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.front()).toBe(1);
        expect(queue.size()).toBe(2);
    });

    test('should clear the queue', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.clear();
        expect(queue.isEmpty()).toBe(true);
    });
});
