<template>
  <v-app>
    <!-- isプロパティを使わない場合はimportなしで使える -->
    <home-app-bar />
    <!-- gradient→グラデーション -->
    <!-- lorempicsumから画像を取得 -->
    <v-img
      dark
      src="https://picsum.photos/id/20/1920/1080?blur=5"
      gradient="to top right, rgba(19,84,122,.6), rgba(128,208,199,.9)"
      :height="imgHeight"
    >
      <v-row
        align="center"
        justify="center"
        :style="{ height: `${imgHeight}px` }"
      >
        <v-col
          cols="12"
          class="text-center"
        >
          <h1 class="display-1 mb-4">
            未来を作ろう。ワクワクしよう。
          </h1>
          <h4
            class="subheading"
            :style="{ letterSpacing: '5px' }"
          >
            中小企業に特化した事業計画策定ツール
          </h4>
        </v-col>
      </v-row>
    </v-img>
    <v-sheet>
      <v-container
        fluid
        :style="{ maxWidth: '1280px' }"
      >
        <v-row
          v-for="(menu, i) in menus"
          :key="`menu-${i}`"
        >
          <v-col
        cols="12"
            >
            <v-card flat>
              <v-card-title class="justify-center display-1">
                {{ $t(`menus.${menu.title}`) }}
              </v-card-title>
              <v-card-text class="text-center">
                {{ menu.subtitle }}
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12">
            <!-- isで、指定したコンポーネントを読み込む -->
            <!-- home-about→HomeAbout.vue -->
            <div :is="`home-${menu.title}`" />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-app>
</template>

<script>
// コンポーネントのimport。isから呼び出す場合はimport必須
import HomeAbout from '~/components/home/HomeAbout'
import HomeProducts from '~/components/home/HomeProducts'
import HomePrice from '~/components/home/HomePrice'
import HomeContact from '~/components/home/HomeContact'
import HomeCompany from '~/components/home/HomeCompany'

export default {
  components: {
    HomeAbout,
    HomeProducts,
    HomePrice,
    HomeContact,
    HomeCompany
  },
  data () {
    return {
      imgHeight: 500, // 画像の高さ
      menus: [
        { title: 'about', subtitle: 'このサイトはブログ"独学プログラマ"で公開されているチュートリアルのデモアプリケーションです' },
        { title: 'products', subtitle: '他にはない優れた機能の数々' },
        { title: 'price', subtitle: '会社の成長に合わせた3つのプラン' },
        { title: 'contact', subtitle: 'お気軽にご連絡を' },
        { title: 'company', subtitle: '私たちの会社' }
      ]
    }
  }
}
</script>
