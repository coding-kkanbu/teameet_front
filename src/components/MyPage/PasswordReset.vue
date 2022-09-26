<template>
  <div>
    <v-dialog v-model="dialog.password" width="553" height="600">
      <v-card class="pa-6" color="#FFFFFF">
        <v-toolbar cards flat class="my-6">
          <img class="mx-auto" src="@/assets/tm_img/tm_shy.png" width="200" />
        </v-toolbar>
        <v-form ref="form" class="pa-3 pt-6 pb-0">
          <v-text-field
            v-model="postData.password1"
            name="password1"
            label="비밀번호"
            outlined
            color="primary"
            type="password"
          ></v-text-field>
          <v-text-field
            v-model="postData.password2"
            name="password2"
            label="비밀번호 확인"
            outlined
            color="primary"
            type="password"
          ></v-text-field>
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
            비밀번호 변경
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
    postData: {
      password1: '',
      password2: ''
    }
  }),
  computed: {
    ...mapState('userStore', ['dialog'])
  },
  methods: {
    save () {
      if (this.$refs.form.validate()) {
        api.changePassword(this, this.postData)
      }
    }
  }
}
</script>
