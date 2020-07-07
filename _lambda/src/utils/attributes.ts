import { HandlerInput } from 'ask-sdk-core';

export function setSessionAttributes(
  handlerInput: HandlerInput,
  key: string,
  value: any
) {
  const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
  sessionAttributes[key] = value;
  handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
}

export enum STATE {
  INITIAL,
  EXPECTING_TOP_UP_AMOUNT,
  EXPECTING_TOP_UP_AMOUNT_CONFIRMATION_RESPONSE,
  EXPECTING_VOICE_CODE,
}

export async function getState(handlerInput: HandlerInput) {
  const persistentAttributes = await handlerInput.attributesManager.getPersistentAttributes();
  const state = persistentAttributes.state;
  if (!state) {
    persistentAttributes.state = STATE.INITIAL;
    handlerInput.attributesManager.setPersistentAttributes(
      persistentAttributes
    );
    await handlerInput.attributesManager.savePersistentAttributes();
  }
  return persistentAttributes.state;
}

export async function updateState(handlerInput: HandlerInput, state: STATE) {
  const persistentAttributes = await handlerInput.attributesManager.getPersistentAttributes();
  persistentAttributes.state = state;
  handlerInput.attributesManager.setPersistentAttributes(persistentAttributes);
  await handlerInput.attributesManager.savePersistentAttributes();
}
