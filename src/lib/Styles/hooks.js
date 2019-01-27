import { makeStyles } from "@material-ui/styles";

/**
 * Use css-in-js typed stlying
 * @summary returns classes object, uses material-ui styling solution
 * @returns {object} Object with class names and string kvps
 * @since 0.1.0
 * @author develowlper
 * @param {object} styles Styles object to be applied
 */
const useStyles = styles => {
  return makeStyles(styles);
};

export default {
  useStyles
};

export { useStyles };
