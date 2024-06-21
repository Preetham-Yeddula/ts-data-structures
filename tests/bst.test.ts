import BST from '../src/bst';

describe('BST', () => {
    let bst: BST<number>;

    beforeEach(() => {
        bst = new BST<number>();
    });

    test('should start empty', () => {
        expect(bst.isEmpty()).toBe(true);
        expect(bst.size()).toBe(0);
    });

    test('should insert items', () => {
        bst.insert(1);
        bst.insert(2);
        expect(bst.size()).toBe(2);
        expect(bst.find(1)).toBe(1);
        expect(bst.find(2)).toBe(2);
    });

    test('should remove items', () => {
        bst.insert(1);
        bst.insert(2);
        bst.remove(1);
        expect(bst.find(1)).toBeNull();
        expect(bst.size()).toBe(1);
    });

    test('should find an item', () => {
        bst.insert(1);
        bst.insert(2);
        expect(bst.find(2)).toBe(2);
        expect(bst.find(3)).toBeNull();
    });

    test('should clear the bst', () => {
        bst.insert(1);
        bst.insert(2);
        bst.clear();
        expect(bst.isEmpty()).toBe(true);
    });
});
