<template>
  <div>
    <v-card-title class="font-weight-bold justify-center">
      メンバー
    </v-card-title>
    <v-row justify="space-around">
      <v-col
        v-for="(member, i) in members"
        :key="`member-${i}`"
      >
        <v-list-item>
          <v-list-item-icon>
            <img
              :src="member.img"
              :alt="member.nickname"
              :aspect-ratio="192 / 336"
              width="50"
            >
          </v-list-item-icon>
          <v-list-item-content>
            <div>
              {{ member.name }}
            </div>
            <v-list-item-action-text>
              {{ member.position }}
              </v-list-item-action-text>
            <v-list-item-action-text>
              <v-btn
                v-if="member.twitter"
                :href="member.twitter"
                target="_blank"
                rel="noopener noreferrer"
                small
                icon
              >
                <v-icon size="18">
                  mdi-twitter
                </v-icon>
              </v-btn>
            </v-list-item-action-text>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
    <v-card-title class="font-weight-bold justify-center">
      会社情報
    </v-card-title>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="10"
        md="8"
      >
        <v-list
          flat
          dense
        >
          <v-divider />
          <template v-for="(info, i) in infomations">
            <v-list-item :key="`info-list-${i}`">
              <v-list-item-icon>
                <v-icon v-text="info.icon" />
              </v-list-item-icon>
              <v-list-item-content>
                <a
                  v-if="info.link"
                  :href="info.link"
                  rel="nofollow"
                  target="_blank"
                  class="text-decoration-none"
                >
                  {{ info.link }}
                </a>
                <div
                  v-else
                  class="text-subtitle-1"
                  v-text="info.text"
                />
              </v-list-item-content>
            </v-list-item>
            <v-divider :key="`info-divider-${i}`" />
          </template>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import member1 from '../../assets/images/member1.png'

export default {
  data () {
    const twitter = 'https://twitter.com/togo_mentor'
    const companyUrl = 'http://moritania.ml'
    return {
      members: [
        { name: 'もうり', position: '国王', img: member1, twitter },
        { name: 'もうり', position: '国王', img: member1, twitter },
        { name: 'もうり', position: '国王', img: member1, twitter },
        { name: 'もうり', position: '国王', img: member1, twitter },
        { name: 'もうり', position: '国王', img: member1, twitter },
      ],
      infomations: [
        { icon: 'mdi-domain', text: '毛利タニア共和国' },
        { icon: 'mdi-link-variant', link: companyUrl },
        { icon: 'mdi-flag', text: '2020年11月に設立' },
        { icon: 'mdi-account-multiple', text: '1人のメンバー' },
        { icon: 'mdi-map-marker', text: '日本' },
        { icon: 'mdi-handshake', text: 'Webアプリ開発・経営コンサルティング' }
      ]
    }
  }
}
</script>
