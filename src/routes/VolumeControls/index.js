import { VolumeControlsView } from './components/VolumeControlsView'
import { injectReducer } from '../../store/reducers'

const reducer = require('./modules/volume').default

/*  Add the reducer to the store on key 'counter'  */

export default (store) => {
  injectReducer(store, { key: 'volume', reducer })

  return {
    path: 'volume-controls',
    component: VolumeControlsView
  }
}
