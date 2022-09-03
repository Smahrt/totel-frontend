import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";

// const InjectMassage = (props: any) => <FormattedMessage {...props} />;

const InjectMassage = (props: any) => {
	return <FormattedMessage {...props} />;
};

export default injectIntl(InjectMassage, {
  forwardRef: false,
});
