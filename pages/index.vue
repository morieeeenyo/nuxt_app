<template>
  <v-app>
    <!-- isプロパティを使わない場合はimportなしで使える -->
    <home-app-bar />
    <v-sheet>
      <v-container
        fluid
        :style="{ maxWidth: '1280px' }"
      >
        <v-row
          v-for="(menu, i) in menus"
          :key="`menu-${i}`"
        >
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
