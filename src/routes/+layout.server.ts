// src/routes/+layout.server.ts
// creating a load frunction to return a session
export const load = async ({ locals: { getSession } }) => {

    return {
      session: await getSession(),
    };

  }