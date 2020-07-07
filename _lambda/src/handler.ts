import {
  HandlerInput,
  RequestHandler,
  SkillBuilders,
  getRequestType,
} from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

const LaunchRequestHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput): boolean {
    return getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
  },
  handle(handlerInput: HandlerInput): Response {
    const speakOutput = 'hi there';
    return handlerInput.responseBuilder.speak(speakOutput).getResponse();
  },
};

exports.handler = SkillBuilders.custom()
  .addRequestHandlers(LaunchRequestHandler)
  .lambda();
