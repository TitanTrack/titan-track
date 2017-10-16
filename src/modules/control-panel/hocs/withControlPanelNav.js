import { connect } from 'react-redux';
import {
  openControlPanelNav,
  closeControlPanelNav,
} from '../reducers/controlPanelNavReducer';

export default connect(
  (state) => ({
    isDrawerOpen: state.localUI.controlPanelNav,
  }),
  (dispatch) => ({
    handleDrawerOpen: () => {
      dispatch(openControlPanelNav());
    },
    handleDrawerClose: () => {
      dispatch(closeControlPanelNav());
    },
  })
);
