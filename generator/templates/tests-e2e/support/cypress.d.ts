/* tslint:disable-next-line */
declare namespace Cypress {
  /* tslint:disable interface-name no-any */
  interface Chainable<Subject = any> {
    getByName<E extends Node = HTMLElement>(...parts: string[]): Chainable<JQuery<E>>

    findByName<E extends Node = HTMLElement>(...parts: string[]): Chainable<JQuery<E>>

    getInput<E extends Node = HTMLElement>(...parts: string[]): Chainable<JQuery<E>>

    findInput<E extends Node = HTMLElement>(...parts: string[]): Chainable<JQuery<E>>

    getField<E extends Node = HTMLElement>(...parts: string[]): Chainable<JQuery<E>>

    findField<E extends Node = HTMLElement>(...parts: string[]): Chainable<JQuery<E>>

    shouldHaveValidationError<E extends Node = HTMLElement>(errorMessage: string): void

    shouldNotHaveValidationError<E extends Node = HTMLElement>(): void

    shouldShowNotification<E extends Node = HTMLElement>(
      errorMessage: string,
      index?: number,
    ): void

    selectOption(labelOrIndex: string | string[] | number | number[]): void

    errorGetRequest<E extends Node = HTMLElement>(url: string, message: string): Chainable<E>
  }
}
