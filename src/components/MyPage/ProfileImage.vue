<template>
  <div>
    <v-dialog v-model="dialog.image" width="553" height="600">
      <v-card class="pa-6" color="#FFFFFF">
        <v-toolbar cards flat class="my-6">
          <img class="mx-auto" src="@/assets/tm_img/tm_shy.png" width="200" />
        </v-toolbar>
        <v-form ref="form" class="pa-3 pt-6 pb-0">
          <v-row justify="center">
            <v-avatar class="profile" color="grey" size="164">
              <v-img :src="img"></v-img>
            </v-avatar>
          </v-row>

          <v-row class="mt-5">
            <v-col cols="3">
              <v-btn x-large color="primary">사진 찾기</v-btn>
            </v-col>
            <v-col cols="9">
              <v-text-field
                v-model="img"
                label="이미지"
                outlined
                disabled
                color="primary"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <v-card-actions class="px-2">
          <v-btn
            block
            x-large
            height="60"
            color="primary"
            depressed
            @click="save"
          >
            프로필 사진 변경
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import api from '@/api/modules/accounts'

export default {
  data: () => ({
    img: ''
  }),
  computed: {
    ...mapState('userStore', ['dialog'])
  },
  methods: {
    save () {
      if (this.$refs.form.validate()) {
        api.uploadProfileImage(this, { profile_image: this.img })
      }
    }
  }
}
</script>
