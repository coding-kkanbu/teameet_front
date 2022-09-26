<template>
  <div class="pt-10">
    <h3 v-if="app==='pitapat'" class="pb-12">소개글 올리기</h3>
    <h3 v-else class="pb-12">토픽글 올리기</h3>

    <v-form ref="form" lazy-validation>
      <v-row class="pb-2">
        <v-col cols="1">
          <h5 class="mt-2">게시판</h5>
        </v-col>
        <v-col class="pl-0" cols="3">
          <v-select
            v-model="postData.category"
            dense
            :items="categoryName"
            placeholder="선택해주세요"
            outlined
            :rules="requiredRule"
          ></v-select>
        </v-col>
      </v-row>

      <v-row v-if="app === 'pitapat'">
        <v-col cols="4" v-for="select in selects" :key="select.name">
          <v-row>
            <v-col cols="3">
              <h5 class="mt-2">{{ select.name }}</h5>
            </v-col>
            <v-col class="pl-0" cols="8">
              <v-select
                v-model="sogaetingoption[select.slug]"
                dense
                :items="select.items"
                placeholder="선택해주세요"
                outlined
                :rules="requiredRule"
              ></v-select>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="4">
          <v-row>
            <v-col cols="3">
              <h5 class="mt-2">나이</h5>
            </v-col>
            <v-col class="pl-0" cols="8">
              <v-text-field
                v-model="sogaetingoption.age"
                type="number"
                dense
                outlined
                placeholder="숫자만 입력"
                :rules="requiredRule"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-text-field
        v-model="postData.title"
        outlined
        dense
        placeholder="제목"
        class="pt-7 px-1"
        :rules="requiredRule"
      >
      </v-text-field>

      <div class="pb-8 px-1">
        <ckeditor v-model="postData.content" :config="editorConfig"></ckeditor>
      </div>

      <v-text-field
        v-model="postData.tags"
        outlined
        dense
        placeholder="태그"
        class="mb-6"
        :rules="requiredRule"
      >
      </v-text-field>
    </v-form>

    <v-row justify="end" class="mr-0 mb-12">
      <v-btn color="#E0E0E0" class="mr-2">취소</v-btn>
      <v-btn @click="submit" color="primary" class="font-weight-bold"
        >완료</v-btn
      >
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CKEditor from 'ckeditor4-vue'
import api from '@/api/modules/post'

export default {
  components: {
    ckeditor: CKEditor.component
  },
  data: () => ({
    app: '',
    categoryName: [],
    postData: { category: '', title: '', content: '', tags: ['test1', 'test2'] },

    requiredRule: [(v) => !!v || '필수 입력값입니다.'],

    sogaetingoption: { region: '', gender: '', age: '' },
    selects: [
      {
        name: '지역',
        items: ['서울', '부산', '대구', '광주', '경기'],
        slug: 'region'
      },
      {
        name: '성별',
        items: ['남', '여'],
        slug: 'gender'
      }
    ],

    editorConfig: {
      toolbarGroups: [
        { name: 'styles' },
        {
          name: 'paragraph',
          groups: ['list', 'indent', 'blocks', 'align', 'bidi']
        },
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup', 'undo'] },
        { name: 'clipboard' },
        { name: 'insert' },
        { name: 'links' }
      ],
      width: '100%',
      height: '50vh'
    }
  }),

  async created () {
    this.app = this.$route.name === 'topicWrite' ? 'topic' : 'pitapat'

    if (this.app === 'pitapat') {
      this.categoryName = ['소개팅', '셀프소개팅', '미팅']
    } else {
      if (this.categories.length === 0) {
        await api.getTopicCategories()
      }
      this.categoryName = this.categories.map((category) => category.name)
    }
  },

  computed: {
    ...mapState('postStore', ['categories'])
  },

  methods: {
    submit () {
      if (this.$refs.form.validate() && this.postData.content) {
        if (this.app === 'pitapat') {
          this.sogaetingoption.gender =
            this.sogaetingoption.gender === '남' ? 1 : 2
          this.postData['sogaetingoption'] = this.sogaetingoption
        }

        api.writePost(this.app, this.postData)
      }
    }
  }
}
</script>

<style scoped>
.v-select,
.v-text-field--outlined >>> fieldset {
  border-color: #c4c4c4;
  border-width: 1px;
}
.v-btn {
  width: 100px;
  height: 40px !important;
  box-shadow: none;
}
</style>
