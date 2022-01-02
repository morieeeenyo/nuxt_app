<template>
  <!-- app→トップにヘッダーを固定 -->
  <v-app-bar
    app
    :dark="!isScrollPoint"
    :height="appBarHeight"
    :color="toolbarStyle.color"
    :elevation="toolbarStyle.elevation"
  >
    <app-logo
      @click.native="goTo('scroll-top')"
    />
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
        @click="goTo(menu.title)"
      >
        {{ $t(`menus.${menu.title}`) }}
      </v-btn>
    </v-toolbar-items>

    <app-signup-button />
    <app-login-button />

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
  data ({ $config: { appName }, $store  }) {
    return {
      appName,
      scrollY: 0, // 縦方向のスクロール
      appBarHeight: $store.state.styles.beforeLogin.appBarHeight // 56px
    }
  },
  // dataを使って計算するプロパティ
  computed: {
    isScrollPoint () {
      return this.scrollY > (this.imgHeight - this.appBarHeight) // スクロールの高さが444pxより大きい場合true
    },
    toolbarStyle () {
      const color = this.isScrollPoint ? 'white' : 'transparent' // スクロールの高さに応じて色を変更する
      const elevation = this.isScrollPoint ? 4 : 0 // 影
      return { color, elevation }
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
    },
    goTo (id) {
      this.$vuetify.goTo(`#${id}`)
    }
  }
}
</script>
