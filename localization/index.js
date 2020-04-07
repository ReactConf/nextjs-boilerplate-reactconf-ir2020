import Falang from "./entries/fa_IR";
import Enlang from "./entries/en_US";
import { addLocaleData } from "react-intl";

const AppLocale = {
	fa: Falang,
	en: Enlang
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.fa.data);

export default AppLocale;
