module.exports = {
    "env": {
      "browser": true,
      "es2021": true
    },
    "overrides": [
      {
        "env": {
          "node": true
        },
        "files": [
          ".eslintrc.{js,cjs}"
        ],
        "parserOptions": {
          "sourceType": "script"
        }
      }
    ],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "rules": {
      "node/no-unsupported-features/es-syntax": "off",
      "space-before-function-paren": "warn",
      "promise-function-async": "off",
      "strict-boolean-expressions": "off",
      "no-floating-promises": "off",
      "padded-blocks": "warn"
    }
  };
  