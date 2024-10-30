declare global {
	interface Window {
		scheduler: {
			yield?: (options?: YieldOptions) => Promise<void>;
			postTask?: (fn: () => void, options?: YieldOptions) => void;
		};
	}
}

type YieldOptions = {
	signal?: AbortSignal;
	priority?: 'user-blocking' | 'user-visible' | 'background';
};
/**
 * Yields to main thread before continuing execution.
 * If priority is 'user-blocking', it will asynchronously resolve in older browsers.
 * @param {object} options - see [https://github.com/WICG/scheduling-apis/blob/main/explainers/yield-and-continuation.md](spec)
 * @see https://kurtextrem.de/posts/improve-inp for reference
 */
export const yieldToMain = (options?: YieldOptions) => {
	if ('scheduler' in window) {
		if ('yield' in window.scheduler) {
			return window.scheduler.yield?.(options);
		}

		if ('postTask' in window.scheduler) {
			return window.scheduler.postTask?.(() => {}, options);
		}
	}

	// `setTimeout` could suffer from being delayed for longer - so for browsers not supporting yield,
	// we guarantee execution for high priority actions, but it doesn't yield as trade-off.
	if (options?.priority === 'user-blocking') {
		return Promise.resolve();
	}
	return new Promise((resolve) => setTimeout(resolve));
};

// A little helper which yields before running the function
export const yieldBefore = async (fn: () => void, options: YieldOptions) => {
	await yieldToMain(options);
	return fn();
};
