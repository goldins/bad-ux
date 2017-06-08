import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'volume-controls',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const VolumeControlsView = require('./containers/VolumeControlsContainer').default
      const reducer = require('./modules/volume').default

      injectReducer(store, { key: 'volume', reducer })
      cb(null, VolumeControlsView)
    }, 'volumeControls')
  }
})
