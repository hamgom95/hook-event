// mark react hook return value
type Hook<R> = R & { readonly __tag: "react-hook" };

export function createListener(target: EventTarget, type: string, handler: (event: Event) => void, options: boolean | EventListenerOptions): () => void;

export function useEvent<E extends Event>(target: EventTarget, type: string, options: boolean | EventListenerOptions): Hook<E>; 
