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



    <v-spacer />
    <!-- これより下の要素は右寄せになる -->
    <v-toolbar-items class="ml-2">
      <v-btn
        v-for="(menu, i) in menus"
        :key="`menu-btn-${i}`"
        text
      >
        {{ $t(`menus.${menu.title}`) }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    imgHeight: {
      type: Number,
      default: 0
    }
  },
  // publicRuntimeConfigからappNameというキーに対応する値を呼び出す
  data ({ $config: { appName } }) {
    return {
      appName,
      scrollY: 0 // 縦方向のスクロール
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll) // イベント予約
  },
  beforeDestroy () {
    // ページ遷移等でコンポーネントが表示されなくなる際に実行
    window.removeEventListener('scroll', this.onScroll) // イベント解除
  },
  methods: {
    onScroll () {
      this.scrollY = window.scrollY // 画面上のスクロール値をstateに格納
    }
  }
}
</script>
