<template>
  <div class="pt-10">
    <h3 class="pb-4">소개글 올리기</h3>
    <h5 class="pb-8 font-weight-light">기본 정보를 입력해주세요</h5>

    <v-row class="pb-2" align="center" dense v-for="select in selects" :key="select.name">
      <v-col cols="1">
        <h4>{{ select.name }}</h4>
      </v-col>
      <v-col cols="3">
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
        <h4>나이</h4>
      </v-col>
      <v-col cols="3">
        <v-text-field hide-details dense outlined placeholder="숫자를 입력해주세요" class="hi">
        </v-text-field>
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  data: () => ({
    selects: [
      { name: '게시판', items: ['소개팅', '셀프소개팅', '미팅'] },
      { name: '지역', items: ['서울', '부산', '대구', '광주', '경기'] },
      { name: '성별', items: ['남', '여'] }
    ]
  })
}
</script>

<style scoped>
.v-select,
.v-text-field--outlined >>> fieldset {
  border-color: #C4C4C4;
  border-width: 1px;
}
</style>
