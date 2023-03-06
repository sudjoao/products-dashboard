export class ServerError extends Error {
  constructor(message?: string) {
    super(message || 'Erro no servidor. Tente novamente mais tarde.');
  }
}
