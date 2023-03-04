export class UnauthorizedError extends Error {
  constructor(message?: string) {
    super(message || 'You are not authorized.');
  }
}
