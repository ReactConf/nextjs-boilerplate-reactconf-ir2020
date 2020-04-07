import React from "react";
import { intlShape, injectIntl, FormattedMessage } from "react-intl";

const InjectMassage = props => (
	<FormattedMessage children={msg => msg} {...props} />
);

InjectMassage.propTypes = {
	intl: intlShape.isRequired
};
export default injectIntl(InjectMassage, {
	withRef: false
});
