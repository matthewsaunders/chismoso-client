import { rest } from 'msw';

export const handlers = [
  rest.get('/user', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    );
  }),

  rest.get('/conversations', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        conversations: [
          {
            name: 'Guerf Group',
            id: 1,
          },
          {
            name: 'Man Date Monday',
            id: 2,
          },
        ],
      }),
    );
  }),

  rest.get('/conversations/1/messages', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        messages: [
          {
            id: 123,
            content: 'Hello, world!',
          }
        ],
      }),
    );
  }),

  rest.get('/conversations/2/messages', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        messages: [
          {
            id: 123,
            content: 'Goodbye, world!',
          }
        ],
      }),
    );
  }),

];
