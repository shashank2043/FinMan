export const constants = {
  VALIDATION_ERROR: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  // Transaction status
  TRANSACTION_STATUS: {
    PENDING: 'pending',
    COMPLETED: 'completed',
    FAILED: 'failed'
  },
  // User roles
  USER_ROLES: {
    USER: 'user',
    ADMIN: 'admin'
  },
  // Pagination
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100
};