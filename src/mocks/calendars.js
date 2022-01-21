export default [
  {
    title: 'metas trabalho',
    id: '123',
    events: [
      {
        title: 'Evento',
        color: 'hsla(100, 100%, 50%, 0.5)',
        type: 'single',
        start: Date.now(),
      },
      {
        title: 'Evento',
        color: 'hsla(200, 100%, 50%, 0.5)',
        type: 'single',
        start: Date.now(),
      },
      {
        title: 'Evento grandao',
        color: 'hsla(0, 100%, 50%, 0.5)',
        type: 'span',
        start: Date.now(),
        end: Date.now() + 3 * 24 * 60 * 60 * 1000
      },
      {
        title: 'Evento grandao',
        color: 'hsla(250, 100%, 50%, 0.5)',
        type: 'span',
        start: Date.now() - 3 * 24 * 60 * 60 * 1000,
        end: Date.now() + 1 * 24 * 60 * 60 * 1000
      }
    ]
  },
  {
    title: 'Eventos',
    id: '456',
    events: [
      {
        title: 'Evento',
        color: 'hsla(100, 100%, 50%, 0.5)',
        type: 'single',
        start: Date.now(),
      },
    ]
  },
  {
    title: 'Aniversários',
    id: '789',
    events: [
      {
        title: 'Evento grandao',
        color: 'hsla(300, 100%, 50%, 0.5)',
        type: 'span',
        start: Date.now() - 3 * 24 * 60 * 60 * 1000,
        end: Date.now() + 1 * 24 * 60 * 60 * 1000
      }
    ]
  },
]