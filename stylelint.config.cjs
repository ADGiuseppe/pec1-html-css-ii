/** @type {import('stylelint').Config} */
module.exports = {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "selector-class-pattern": "^[a-z0-9]+(?:__[a-z0-9]+)?(?:--[a-z0-9]+)?$"
  }
};