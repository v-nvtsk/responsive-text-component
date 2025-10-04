const elementCallbackMap = new Map<Element, (entry: ResizeObserverEntry) => void>();

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const callback = elementCallbackMap.get(entry.target);
    if (callback) {
      callback(entry);
    }
  }
});

export const observe = (element: HTMLElement, callback: (entry: ResizeObserverEntry) => void) => {
  elementCallbackMap.set(element, callback);
  resizeObserver.observe(element);
};

export const unobserve = (element: HTMLElement) => {
  resizeObserver.unobserve(element);
  elementCallbackMap.delete(element);
};
