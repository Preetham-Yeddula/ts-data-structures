import LinkedList from '../src/linkedlist';

describe('LinkedList', () => {
    let list: LinkedList<number>;

    beforeEach(() => {
        list = new LinkedList<number>();
    });

    test('should start empty', () => {
        expect(list.isEmpty()).toBe(true);
        expect(list.size()).toBe(0);
    });

    test('should append items', () => {
        list.append(1);
        list.append(2);
        expect(list.size()).toBe(2);
        expect(list.find(1)?.value).toBe(1);
        expect(list.find(2)?.value).toBe(2);
    });

    test('should prepend items', () => {
        list.prepend(1);
        list.prepend(2);
        expect(list.size()).toBe(2);
        expect(list.find(2)?.value).toBe(2);
    });

    test('should delete items', () => {
        list.append(1);
        list.append(2);
        list.delete(1);
        expect(list.find(1)).toBeNull();
        expect(list.size()).toBe(1);
    });

    test('should find an item', () => {
        list.append(1);
        list.append(2);
        expect(list.find(2)?.value).toBe(2);
        expect(list.find(3)).toBeNull();
    });

    test('should clear the list', () => {
        list.append(1);
        list.append(2);
        list.clear();
        expect(list.isEmpty()).toBe(true);
    });
});
