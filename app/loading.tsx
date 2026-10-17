export default function Loading() {
    return (
        <div className="space-y-5" aria-busy="true" aria-label="Loading">
            <div className="h-8 w-48 animate-pulse rounded-lg bg-muted" />

            <div className="grid gap-4">
                {Array.from({ length: 4 }, (_, i) => (
                    <div
                        key={i}
                        className="overflow-hidden rounded-xl border bg-background p-5 shadow-sm"
                    >
                        <div className="flex items-start gap-4">
                            <div className="h-12 w-12 shrink-0 animate-pulse rounded-lg bg-muted" />

                            <div className="flex-1 space-y-3">
                                <div className="h-5 w-2/5 animate-pulse rounded-md bg-muted" />
                                <div className="h-4 w-4/5 animate-pulse rounded-md bg-muted" />
                                <div className="h-4 w-3/5 animate-pulse rounded-md bg-muted" />
                            </div>
                        </div>

                        <div className="mt-5 flex gap-2">
                            <div className="h-8 w-20 animate-pulse rounded-md bg-muted" />
                            <div className="h-8 w-24 animate-pulse rounded-md bg-muted" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}