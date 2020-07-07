# alexa-typescript

## requirements:
- amazon developer account
- aws developer account
- node/npm
- serverless-cli
- ask-cli

## how to use this template
- clone/download it.
- in `_lambda/serverless.yml` replace the `service` attribute.
- deploy the lambda, `serverless deploy`, copy the ARN.
- in `_skill/skill-package/skill.json` replace the endpoint uri with the ARN.
- in `_skill/skill-package/skill.json` replace the name.
- in `_skill/skill-package/interactionModels/custom/en-GB.json` replace the `invocationName`.
- in `_skill/ask-resources.json` replace the TODO with your ASK local profile (probably `default`).
- deploy the skill, `ask deploy` or `ask deploy --profile [name of profile]` if you are not using the default profile.

**All values to replace are marked `TODO`**
