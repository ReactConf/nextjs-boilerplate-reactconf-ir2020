import React from "react";
import { injectIntl } from "react-intl";

const ReactIntlContext = React.createContext(null);
export const IntlContextProvider = injectIntl(({ intl, children }) => (
	<ReactIntlContext.Provider value={intl}>
		{children}
	</ReactIntlContext.Provider>
));
export const useIntl = () => React.useContext(ReactIntlContext);

export default useIntl;
