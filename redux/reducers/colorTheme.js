import * as types from "../actions/colorTheme/actionTypes";
import { colors } from "../../helpers/style";

const initialState = {
    theme: colors.light,
    dark: false
};

export default theme = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_THEME: {
            const { theme, dark } = action;
            return {
                theme,
                dark
            };
        }
        default:
            return state;
    }
}