class LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class LinkedList<T> {
    private head: LinkedListNode<T> | null = null;

    append(element: T): void {
        // Implementation here
    }

    prepend(element: T): void {
        // Implementation here
    }

    delete(element: T): void {
        // Implementation here
    }

    find(element: T): LinkedListNode<T> | null {
        // Implementation here
        return null;
    }

    isEmpty(): boolean {
        // Implementation here
        return true;
    }

    size(): number {
        // Implementation here
        return 0;
    }

    clear(): void {
        // Implementation here
    }
}

export default LinkedList;
