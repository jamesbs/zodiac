export function passThroughRequest<T>(target: (arg: T) => any) {
  return (call: { request: T }, onComplete) => onComplete(
    null,
    target(call.request),
  )
}
