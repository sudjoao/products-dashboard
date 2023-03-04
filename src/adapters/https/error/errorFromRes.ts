import { BadRequestError } from './badRequestError';
import { NotFoundError } from './notFoundError';
import { ServerError } from './serverError';
import { UnauthenticatedError } from './unauthenticatedError';
import { UnauthorizedError } from './unauthorizedError';

export const ErrorFromRes = (status?: number | string, message?: string) => {
  const statusErrors: Record<number, Error> = {
    400: new BadRequestError(message),
    401: new UnauthenticatedError(message),
    403: new UnauthorizedError(message),
    404: new NotFoundError(message),
    500: new ServerError(message)
  };
  if (status) return statusErrors[Number(status)];
  return null;
};
