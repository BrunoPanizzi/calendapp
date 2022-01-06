export default [
  {
    title: 'metas trabalho',
    id: '123',
    events: [
      {
        title: 'Evento',
        color: '#3ab61188',
        type: 'single',
        start: Date.now(),
      },
      {
        title: 'Evento',
        color: '#3ab61133',
        type: 'single',
        start: Date.now(),
      },
      {
        title: 'Evento grandao',
        color: '#3ab6c988',
        type: 'span',
        start: Date.now(),
        end: Date.now() + 3 * 24 * 60 * 60 * 1000
      },
      {
        title: 'Evento grandao',
        color: '#da56c988',
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
        color: '#3ab61188',
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
        color: '#da56c988',
        type: 'span',
        start: Date.now() - 3 * 24 * 60 * 60 * 1000,
        end: Date.now() + 1 * 24 * 60 * 60 * 1000
      }
    ]
  },
]