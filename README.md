vue-cli-plugin-init-project
# Prepare
- add the following json to your ~/.vuerc file
```json
"presets": {
  "lauraWert": {
    "useConfigFiles": true,
    "plugins": {
     "@vue/cli-plugin-babel": {},
     "@vue/cli-plugin-typescript": {
       "classComponent": true,
       "useTsWithBabel": true
     },
     "@vue/cli-plugin-eslint": {
       "config": "standard",
       "lintOn": [
         "save",
         "commit"
       ]
     },
     "@vue/cli-plugin-unit-mocha": {},
     "@vue/cli-plugin-e2e-cypress": {}
    },
    "router": true,
    "routerHistoryMode": true,
    "vuex": true,
    "cssPreprocessor": "stylus"
  }
}
```
#Install
- make a new vue project with the lauraWert preset
```bash
vue create <project-name>
```
- choose the lauraWert preset
- add the plugin
```bash
cd <project-name>
yarn add --dev @laura-wert/vue-cli-plugin-init-project
```
- install the boiler plate
```bash 
vue invoke @laura-wert/vue-cli-plugin-init-project 
```
#Installing plugin locally
- make a new vue project with the lauraWert preset
```bash
vue create <project-name>
```
- choose the lauraWert preset
- add the plugin
```bash
cd <project-name>
yarn add --dev file:/full/path/to/your/plugin
```
- install the boiler plate
```bash 
vue invoke @laura-wert/vue-cli-plugin-init-project 
```

