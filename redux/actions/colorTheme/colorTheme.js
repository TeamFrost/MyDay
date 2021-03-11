import * as types from "./actionTypes";
import { colors } from "../../../helpers/style.js"
import { storeData } from "../../../helpers/storage"

export const changeTheme = (theme) => (dispatch) => {
    storeData('@reportm-theme', theme)
        .then(() => {
            let dark;
            if (theme === colors.light) {
                dark = false
            }
            else {
                dark = true
            }
            dispatch(change_theme(theme, dark));
        })
        .catch((error) => {
            alert(error)
        });
};


const change_theme = (theme, value) => ({
    type: types.CHANGE_THEME,
    theme: theme,
    dark: value
});