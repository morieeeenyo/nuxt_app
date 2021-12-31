<template>
  <!-- app→トップにヘッダーを固定 -->
  <v-app-bar
    app
    dark
  >
    <app-logo />
    <v-toolbar-title>
      {{ appName }}
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  // publicRuntimeConfigからappNameというキーに対応する値を呼び出す
  data ({ $config: { appName } }) {
    return {
      appName
    }
  }
}
</script>
