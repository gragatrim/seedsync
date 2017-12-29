export class MockEventSource {
    url: string;
    onerror: (event: Event) => any;

    eventListeners: Map<string, (event: sse.IOnMessageEvent) => void> = new Map();

    constructor(url: string) {
        this.url = url;
    }

    addEventListener(type: string, h: (event: sse.IOnMessageEvent) => void) {
        this.eventListeners.set(type, h);
    }

    close() {}
}

export function createMockEventSource(url: string): MockEventSource {
    let mockEventSource = new MockEventSource(url);
    spyOn(mockEventSource, 'addEventListener').and.callThrough();
    spyOn(mockEventSource, 'close').and.callThrough();
    return mockEventSource;
}
