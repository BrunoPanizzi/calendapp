export default [
  {
    title: 'metas trabalho',
    id: '123',
    events: [
      {
        title: 'Evento',
        colorHue: 100,
        type: 'single',
        start: Date.now(),
      },
      {
        title: 'Evento',
        colorHue: 200,
        type: 'single',
        start: Date.now(),
      },
      {
        title: 'Evento grandao',
        colorHue: 0,
        type: 'span',
        start: Date.now(),
        end: Date.now() + 3 * 24 * 60 * 60 * 1000
      },
      {
        title: 'Evento grandao',
        colorHue: 250,
        type: 'span',
        start: Date.now() - 6 * 24 * 60 * 60 * 1000,
        end: Date.now() - 1 * 24 * 60 * 60 * 1000
      }
    ]
  },
  {
    title: 'Eventos',
    id: '456',
    events: [
      {
        title: 'Evento',
        colorHue: 100,
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
        colorHue: 300,
        type: 'span',
        start: Date.now() - 4 * 24 * 60 * 60 * 1000,
        end: Date.now() + 1 * 24 * 60 * 60 * 1000
      }
    ]
  },
]