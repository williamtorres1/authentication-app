export function signIn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        token: 'dskjfskldjfdsf',
        user: {
          name: 'William Torres',
          email: 'contatowilliamtorres@gmail.com',
        },
      });
    }, 2000);
  });
}
