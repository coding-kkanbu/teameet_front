<template>
  <v-main>
    <v-container>
      <!-- Post -->
      <v-row>
        <v-col cols="8">
          <!-- 상단 제목 -->
          <v-row align="start" justify="start">
            <v-card elevation="0" width="100%">
              <v-card-subtitle class="primary--text font-weight-bold">
                {{ post.category }}
              </v-card-subtitle>
              <v-card-title class="font-weight-bold">
                {{ post.title }}
              </v-card-title>
              <v-card-text color="#A6A6A6">
                {{ post.owner }}<br />
                <v-icon dense color="#A6A6A6">mdi-clock</v-icon>
                &nbsp;&nbsp;{{ post.updated_at }}&nbsp;
                <v-icon dense color="#A6A6A6">mdi-eye</v-icon>
                &nbsp;&nbsp;{{ post.hit }}
                <v-btn icon><v-icon>mdi-dots-horizontal</v-icon></v-btn>
              </v-card-text>
            </v-card>
          </v-row>

          <!-- 내용 -->
          <v-row align="start" justify="start">
            <v-card elevation="0" width="100%">
              <v-card-text class="black--text">{{ post.content }}</v-card-text>
              <v-card-text>
                <div style="font-size: 15px; font-weight: bold">
                  <v-icon color="secondary">mdi-fire</v-icon>
                  <span style="color: #d4525d">{{ post.like }}</span
                  >&nbsp;&nbsp;&nbsp;&nbsp;
                  <v-icon color="#A6A6A6"
                    >mdi-message-processing-outline</v-icon
                  >
                  <span style="color: #a6a6a6">{{ post.comment }}</span>
                </div>
              </v-card-text>
            </v-card>
            <v-divider color="#A6A6A6" class="mx-2"></v-divider>
          </v-row>
        </v-col>

        <!-- Side -->
        <v-col cols="4">
          <!-- Hot Posts -->
          <v-card outlined>
            <v-card-title class="primary--text font-weight-bold">
              {{ post.category }} 추천 글
            </v-card-title>
            <v-list dense>
              <v-list-item-group>
                <v-list-item v-for="(hotpost, i) in hotposts" :key="i">
                  <v-list-item-icon>
                    <v-icon color="primary">mdi-circle-small</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-subtitle
                      v-text="hotpost"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
          <!-- Tag Cloud -->
          <v-card class="mt-3" outlined>
            <v-card-title class="primary--text font-weight-bold"
              >TAGS</v-card-title
            >
            <v-chip
              class="ma-2 font-weight-bold"
              color="primary"
              text-color="white"
            >
              <v-avatar left class="white primary--text font-weight-bold">
                1
              </v-avatar>
              Years
            </v-chip>
          </v-card>
          <!-- image -->
          <v-card class="mt-3" outlined>
            image
          </v-card>
        </v-col>
      </v-row>

      <!-- Comment -->

      <!-- Create -->
      <v-row align="start" justify="start">
        <v-col cols="6">
          <v-textarea
            outlined
            name="create_comment"
            label="댓글을 등록하세요"
            auto-grow
          ></v-textarea>
        </v-col>
        <v-col cols="2" class="ml-0">
          <v-btn outlined block height="130">등록하기</v-btn>
        </v-col>
      </v-row>

      <!-- Read -->
      <v-row align="start" justify="start">
        <v-col cols="8" v-for="comment in comments" :key="comment.id">
          <!-- Comment -->
          <v-card elevation="0">
            <v-card-title>{{ comment.owner }}</v-card-title>
            <v-card-text class="black--text">{{ comment.content }}</v-card-text>
            <v-card-text>
              <div style="font-size: 12px">
                <v-icon color="#A6A6A6">mdi-clock</v-icon>
                <span style="color: #a6a6a6"> {{ comment.created_at }}</span
                >&nbsp;&nbsp;&nbsp;&nbsp;
                <v-icon color="secondary">mdi-fire</v-icon>
                <span style="color: #d4525d">{{ comment.like }}</span>
              </div>
            </v-card-text>

            <!-- Reply -->
            <v-card
              color="#F5F6F8"
              class="pl-8"
              elevation="0"
              v-for="reply in comment.reply"
              :key="reply.id"
            >
              <v-card-title>{{ reply.owner }}</v-card-title>
              <v-card-text class="black--text">
                <span style="color: #589290; font-weight: bold">
                  @{{ comment.owner }}
                </span>
                {{ reply.content }}
              </v-card-text>
              <v-card-text>
                <div style="font-size: 12px">
                  <v-icon color="#A6A6A6">mdi-clock</v-icon>
                  <span style="color: #a6a6a6"> {{ reply.created_at }}</span
                  >&nbsp;&nbsp;&nbsp;&nbsp;
                  <v-icon color="secondary">mdi-fire</v-icon>
                  <span style="color: #d4525d">{{ reply.like }}</span>
                </div>
              </v-card-text>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    post: {
      category: '두근두근 후기',
      title: '개발보다 설레는 대상을 찾았어요...',
      content:
        '것은 피어나는 되려니와, 뜨고, 이것이다. 꽃이 못할 있는 동산에는 천지는 때문이다. 설레는 미묘한 피에 이상이 그림자는 인생에 새 사막이다. 귀는 얼마나 사람은 우리 작고 밥을 군영과 생의 그들은 것이다. 위하여 무엇이 못할 피에 철환하였는가? 얼마나 얼음 생의 귀는 청춘에서만 찾아다녀도, 꽃이 끓는다. 뛰노는 얼음이 이 타오르고 공자는 아니다. 가는 오직 청춘의 새 쓸쓸한 때에, 맺어, 것은 보는 철환하였는가? 충분히 인간의 보이는 너의 청춘 때에, 청춘의 품에 때문이다. 구하기 트고, 인간의 피가 그러므로 하는 청춘의 그들의 청춘에서만 있다.것은 피어나는 되려니와, 뜨고, 이것이다. 꽃이 못할 있는 동산에는 천지는 때문이다. 설레는 미묘한 피에 이상이 그림자는 인생에 새 사막이다. 귀는 얼마나 사람은 우리 작고 밥을 군영과 생의 그들은 것이다. 위하여 무엇이 못할 피에 철환하였는가? 얼마나 얼음 생의 귀는 청춘에서만 찾아다녀도, 꽃이 끓는다. 뛰노는 얼음이 이 타오르고 공자는 아니다. 가는 오직 청춘의 새 쓸쓸한 때에, 맺어, 것은 보는 철환하였는가? 충분히 인간의 보이는 너의 청춘 때에, 청춘의 품에 때문이다. 구하기 트고, 인간의 피가 그러므로 하는 청춘의 그들의 청춘에서만 있다.것은 피어나는 되려니와, 뜨고, 이것이다. 꽃이 못할 있는 동산에는 천지는 때문이다. 설레는 미묘한 피에 이상이 그림자는 인생에 새 사막이다. 귀는 얼마나 사람은 우리 작고 밥을 군영과 생의 그들은 것이다. 위하여 무엇이 못할 피에 철환하였는가? 얼마나 얼음 생의 귀는 청춘에서만 찾아다녀도, 꽃이 끓는다. 뛰노는 얼음이 이 타오르고 공자는 아니다. 가는 오직 청춘의 새 쓸쓸한 때에, 맺어, 것은 보는 철환하였는가? 충분히 인간의 보이는 너의 청춘 때에, 청춘의 품에 때문이다. 구하기 트고, 인간의 피가 그러므로 하는 청춘의 그들의 청춘에서만 있다.것은 피어나는 되려니와, 뜨고, 이것이다. 꽃이 못할 있는 동산에는 천지는 때문이다. 설레는 미묘한 피에 이상이 그림자는 인생에 새 사막이다. 귀는 얼마나 사람은 우리 작고 밥을 군영과 생의 그들은 것이다. 위하여 무엇이 못할 피에 철환하였는가? 얼마나 얼음 생의 귀는 청춘에서만 찾아다녀도, 꽃이 끓는다. 뛰노는 얼음이 이 타오르고 공자는 아니다. 가는 오직 청춘의 새 쓸쓸한 때에, 맺어, 것은 보는 철환하였는가? 충분히 인간의 보이는 너의 청춘 때에, 청춘의 품에 때문이다. 구하기 트고, 인간의 피가 그러므로 하는 청춘의 그들의 청춘에서만 있다.것은 피어나는 되려니와, 뜨고, 이것이다. 꽃이 못할 있는 동산에는 천지는 때문이다. 설레는 미묘한 피에 이상이 그림자는 인생에 새 사막이다. 귀는 얼마나 사람은 우리 작고 밥을 군영과 생의 그들은 것이다. 위하여 무엇이 못할 피에 철환하였는가? 얼마나 얼음 생의 귀는 청춘에서만 찾아다녀도, 꽃이 끓는다. 뛰노는 얼음이 이 타오르고 공자는 아니다. 가는 오직 청춘의 새 쓸쓸한 때에, 맺어, 것은 보는 철환하였는가? 충분히 인간의 보이는 너의 청춘 때에, 청춘의 품에 때문이다. 구하기 트고, 인간의 피가 그러므로 하는 청춘의 그들의 청춘에서만 있다.것은 피어나는 되려니와, 뜨고, 이것이다. 꽃이 못할 있는 동산에는 천지는 때문이다. 설레는 미묘한 피에 이상이 그림자는 인생에 새 사막이다. 귀는 얼마나 사람은 우리 작고 밥을 군영과 생의 그들은 것이다. 위하여 무엇이 못할 피에 철환하였는가? 얼마나 얼음 생의 귀는 청춘에서만 찾아다녀도, 꽃이 끓는다. 뛰노는 얼음이 이 타오르고 공자는 아니다. 가는 오직 청춘의 새 쓸쓸한 때에, 맺어, 것은 보는 철환하였는가? 충분히 인간의 보이는 너의 청춘 때에, 청춘의 품에 때문이다. 구하기 트고, 인간의 피가 그러므로 하는 청춘의 그들의 청춘에서만 있다.',
      owner: '행복한쌈코비빔밥dddddddd',
      updated_at: '2022.1.17',
      hit: 900,
      like: 30,
      comment: 100
    },

    comments: [
      {
        owner: '승쨩',
        content:
          '것은 피어나는 되려니와, 뜨고, 이것이다. 꽃이 못할 있는 동산에는 천지는 때문이다. 설레는 미묘한 피에 이상이 그림자는 인생에 새 사막이다. 귀는 얼마나 사람',
        created_at: '2022.1.17',
        like: 30,
        reply: [
          {
            owner: '리디',
            content:
              '것은 피어나는 되려니와, 뜨고, 이것이다. 꽃이 못할 있는 동산에는 천지는 때문이다. 설레는 미묘한 피에 이상이 그림자는 인생에 새 사막이다. 귀는 얼마나 사람',
            created_at: '2022.1.17',
            like: 10
          },
          {
            owner: '태기',
            content:
              '것은 피어나는 되려니와, 뜨고, 이것이다. 꽃이 못할 있는 동산에는 천지는 때문이다. 설레는 미묘한 피에 이상이 그림자는 인생에 새 사막이다. 귀는 얼마나 사람',
            created_at: '2022.1.17',
            like: 40
          }
        ]
      },
      {
        owner: '리디',
        content:
          '것은 피어나는 되려니와, 뜨고, 이것이다. 꽃이 못할 있는 동산에는 천지는 때문이다. 설레는 미묘한 피에 이상이 그림자는 인생에 새 사막이다. 귀는 얼마나 사람',
        created_at: '2022.1.17',
        like: 10
      },
      {
        owner: '태기',
        content:
          '것은 피어나는 되려니와, 뜨고, 이것이다. 꽃이 못할 있는 동산에는 천지는 때문이다. 설레는 미묘한 피에 이상이 그림자는 인생에 새 사막이다. 귀는 얼마나 사람',
        created_at: '2022.1.17',
        like: 40
      }
    ],

    hotposts: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  })
}
</script>

<style scoped>
.v-btn,
.v-text-field--outlined >>> fieldset {
  border-color: #e5e5e5;
  border-width: 2px;
}
</style>
