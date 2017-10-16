export const OPEN_CONTROL_PANEL_NAV = 'controlPanel/OPEN_CONTROL_PANEL_NAV';
export const CLOSE_CONTROL_PANEL_NAV = 'controlPanel/CLOSE_CONTROL_PANEL_NAV';

const initialState = false;

export const openControlPanelNav = () => ({
  type: OPEN_CONTROL_PANEL_NAV,
});

export const closeControlPanelNav = () => ({
  type: CLOSE_CONTROL_PANEL_NAV,
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CONTROL_PANEL_NAV: return true;
    case CLOSE_CONTROL_PANEL_NAV: return false;
    default: return state;
  }
}
