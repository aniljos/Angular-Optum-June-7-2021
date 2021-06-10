## Classroom Notes

### Date 06-07-2021


1. Github URL : https://github.com/aniljos/Angular-Optum-June-7-2021
2. Github REST API URL: https://github.com/aniljos/node-rest-api
3. Start Project: ng serve --open


### Decorators

1. ngModule, Component, Directive, Pipes
2. TypeScript: Similar to Annotation in Java, Attributes in .Net
3. Metadata

### Routes

1. Child Routes
2. Lazy Loading of Modules
3. Router Guards
4. Navigation Events
5. Route Parameters

### Share conversational data

1. Services: singletons
2. Parent-Child
3. Redux-ngRX  --> Reactive Programming

### e2e protractor for Angular 12

1. Install libraries: npm install protractor jasmine-spec-reporter ts-node --save-dev
2. In angular.json provide the e2e configuration in the "architect" section of the "awesome-app" project

``` json  
 "e2e": {
          "builder": "@angular-devkit/build-angular:protractor",
          "options": {
            "protractorConfig": "e2e/protractor.conf.js",
            "devServerTarget": "awesome-app:serve"
          },
          "configurations": {
            "production": {
              "devServerTarget": "awesome-app:serve:production"
            },
            "e2e": {
              "devServerTarget": "awesome-app:serve:e2e"
            }
          }
        }
```
4. Create a e2e folder in application root.
5. Create a protractor.conf.js in the e2e folder
6. Add the configuration to protractor.conf.js
```javascript
// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');


/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.PRETTY
      }
    }));
  }
};
```

 7. Create a tsconfig.json in the e2e folder and add the below config
 
``` json

{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "../out-tsc/e2e",
    "module": "commonjs",
    "target": "es2018",
    "types": [
      "jasmine",
      "node"
    ]
  }
}
```

8. Create a src folder in e2e folder and add the .spec files

### Storybook(installation for Angular 12)

1. npx sb init
2. npx sb upgrade --prerelease
3. npm install @storybook/builder-webpack5@next @storybook/manager-webpack5@next --save-dev
4. Modify .storybook/main.ts and add the code below
```javascript
  core: { 
    builder: 'webpack5'
  }
```
5. To run: npm run storybook
