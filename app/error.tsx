"use client";

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="flex min-h-[400px] items-center justify-center">
            <div className="w-full max-w-md rounded-2xl border bg-background p-8 text-center shadow-sm">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-7 w-7 text-red-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v4m0 4h.01M10.3 3.7 2.6 18a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 3.7a2 2 0 0 0-3.4 0Z"
                        />
                    </svg>
                </div>

                <h1 className="text-2xl font-semibold tracking-tight">
                    Something went wrong
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    An unexpected error occurred. Please try again.
                </p>

                <button
                    onClick={reset}
                    className="mt-6 inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 active:scale-[0.98]"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}