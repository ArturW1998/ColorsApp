import chroma from 'chroma-js';

import sizes from './sizes/';

const { down } = sizes;

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    '&:hover svg': {
      color: '#fff',
      transform: 'scale(1.5)'
    },
    [down('lg')]: {
      width: '25%',
      height: '20%'
    },
    [down('md')]: {
      width: '50%',
      height: '10%'
    },
    [down('sm')]: {
      width: '100%',
      height: '5%'
    }
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: ({ color }) => (chroma(color).luminance() <= 0.08 ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.6)'),
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    [down('sm')]: {
      padding: '5px 10px'
    }
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out'
  }
};

export default styles;
