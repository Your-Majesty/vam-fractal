module.exports = {
  title: 'Typography - V&A Sans',
  label: 'Typography',
  status: 'wip',
  default: 'regular',
  context: {
    heading: 'The quick brown fox jumps over the lazy dog 1234567890.'
  },
  variants: [
    {
      name: 'light',
      label: 'Light',
      context: {
        name: 'light',
        sizes: ['5', '6', '7']
      }
    },
    {
      name: 'regular',
      label: 'Regular',
      context: {
        name: 'regular',
        sizes: ['0', '1', '2', '3', '4', '5']
      }
    },
    {
      name: 'bold',
      label: 'Bold',
      context: {
        name: 'bold',
        sizes: ['0', '1', '2', '3', '4', '5', '6']
      }
    },
    {
      name: 'semi-bold',
      label: 'Semi-bold',
      context: {
        name: 'semi-bold',
        sizes: ['1', '5', '6', '7', '8', '9']
      }
    },
    {
      name: 'uppercase',
      label: 'Uppercase',
      context: {
        name: 'uppercase',
        weights: ['bold', 'semi-bold'],
        sizes: ['0', '1', '2', '3', '4', '5']
      }
    }
  ]
};
