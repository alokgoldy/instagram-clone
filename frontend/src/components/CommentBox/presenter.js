import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const CommentBox = (props, context) => (
    <form>
        <textarea placeholder={context.t("Add a comment...")}/>
    </form>
)

CommentBox.contextTypes = {
    t: PropTypes.func.isRequired
}

export default CommentBox;