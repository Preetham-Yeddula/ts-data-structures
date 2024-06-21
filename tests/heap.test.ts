import Heap from '../src/heap';

describe('Heap', () => {
    let heap: Heap<number>;

    beforeEach(() => {
        heap = new Heap<number>();
    });

    test('should start empty', () => {
        expect(heap.isEmpty()).toBe(true);
        expect(heap.size()).toBe(0);
    });

    test('should insert items', () => {
        heap.insert(1);
        heap.insert(2);
        expect(heap.size()).toBe(2);
        expect(heap.peek()).toBe(1);
    });

    test('should extract the root item', () => {
        heap.insert(1);
        heap.insert(2);
        expect(heap.extract()).toBe(1);
        expect(heap.size()).toBe(1);
        expect(heap.extract()).toBe(2);
        expect(heap.size()).toBe(0);
    });

    test('should peek at the root item without removing it', () => {
        heap.insert(1);
        heap.insert(2);
        expect(heap.peek()).toBe(1);
        expect(heap.size()).toBe(2);
    });

    test('should clear the heap', () => {
        heap.insert(1);
        heap.insert(2);
        heap.clear();
        expect(heap.isEmpty()).toBe(true);
    });
});
