export class UnauthorizedError extends Error {
  constructor(message?: string) {
    super(message || 'Você  não tem autorização para acessar essa página.');
  }
}
