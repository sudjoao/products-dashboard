export class ServerError extends Error {
  constructor(message?: string) {
    super(message || 'Server Error.');
  }
}
