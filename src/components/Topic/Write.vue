<template>
  <div class="pt-10">
    <h3 class="pb-12">소개글 올리기</h3>

    <v-row
      class="pb-2"
      align="center"
      dense
      v-for="select in selects"
      :key="select.name"
    >
      <v-col cols="1">
        <h5>{{ select.name }}</h5>
      </v-col>
      <v-col class="pl-0" cols="3">
        <v-select
          dense
          hide-details
          :items="select.items"
          placeholder="선택해주세요"
          outlined
        ></v-select>
      </v-col>
    </v-row>
    <v-row class="pb-2" align="center" dense>
      <v-col cols="1">
        <h5>나이</h5>
      </v-col>
      <v-col class="pl-0" cols="3">
        <v-text-field
          dense
          hide-details
          outlined
          placeholder="숫자를 입력해주세요"
          class="hi"
        >
        </v-text-field>
      </v-col>
    </v-row>

    <div class="py-8">
      <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
    </div>

    <v-row justify="end" class="mr-3 mb-12">
      <v-btn color="#E0E0E0" class="mr-2">취소</v-btn>
      <v-btn color="primary" class="font-weight-bold">완료</v-btn>
    </v-row>
  </div>
</template>

<script>
import CKEditor from 'ckeditor4-vue'

export default {
  components: {
    ckeditor: CKEditor.component
  },
  data: () => ({
    selects: [
      { name: '게시판', items: ['소개팅', '셀프소개팅', '미팅'] },
      { name: '지역', items: ['서울', '부산', '대구', '광주', '경기'] },
      { name: '성별', items: ['남', '여'] }
    ],
    editorData: '',
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
      width: 950,
      height: 400
    }
  })
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
