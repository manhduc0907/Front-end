<template>
   <v-dialog max-width="500px" v-model="showDialog">
        <v-card>
            <v-card-title style="font-weight: bold;"><h4>Tạo mới người dùng</h4></v-card-title>
            <v-container style="background-color: rgb(247, 247, 247);">
              <v-row>
                <v-col cols="12" style="font-size: 13px;">
                  <p>Tên người dùng</p>
                  <v-text-field placeholder="Nhập tên người dùng" style="background-color: white;" density="compact" single-line hide-details variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" style="font-size: 13px;">
                  <p>Email</p>
                  <v-text-field placeholder="Nhập email" style="background-color: white;" density="compact" single-line hide-details variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" style="font-size: 13px;">
                  <p>Ngày sinh</p>
                  <v-text-field placeholder="YYYY/MM/DD" style="background-color: white;" density="compact" single-line hide-details variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" style="font-size: 13px;">
                  <p>Số điện thoại</p>
                  <v-text-field placeholder="Nhập số điện thoại" style="background-color: white;" density="compact" single-line hide-details variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" style="font-size: 13px;">
                  <p>Avatar</p>
                  <v-text-field placeholder="Nhập link ảnh avatar" style="background-color: white;" density="compact" single-line hide-details variant="outlined"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <v-card-actions class="pr-4">
              <v-spacer></v-spacer>
              <v-btn text="Hủy"></v-btn>
              <v-btn color="primary" variant="elevated" text="Thêm"></v-btn>
            </v-card-actions>
          </v-card>
      </v-dialog>
</template>

<script>
export default {
  name:'DialogView',
  props: ['dialog'],
    computed: {
        ShowDialog: {
            get() {
                return this.dialog;
            },
            set(value) {
                if (!value) {
                    this.$emit('close');
                }
            }
        }
    }
}
</script>

<style>

</style>