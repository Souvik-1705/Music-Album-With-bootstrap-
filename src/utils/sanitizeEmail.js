export const sanitizeEmail = (email) => {
    if (typeof email !== 'string') return '';
    return email.replace(/[@.]/g, '');
  };