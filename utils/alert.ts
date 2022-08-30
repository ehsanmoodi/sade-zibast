import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Alert = withReactContent(Swal).mixin({
  buttonsStyling: false,
  iconColor: "#D04B4B",
  customClass: {
    confirmButton: "button button--primary",
    cancelButton: "button button--white mr-5",
  },
});
