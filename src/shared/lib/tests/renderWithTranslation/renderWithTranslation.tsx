import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider, withTranslation } from "react-i18next";
import i18n from "shared/config/i18n/i18nforTest"
 

export const renderWithTranslation = (component : ReactNode) => {
  return render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>)
}