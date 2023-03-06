export class BadRequestError extends Error {
  constructor(message?: string) {
    super(message || 'Não foi possível processar esta solicitação.');
  }
}
