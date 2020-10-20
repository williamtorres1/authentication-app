interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
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
