<template>
   <v-dialog max-width="500px" v-model="showDialog">
        <v-card>
            <v-card-title style="font-weight: bold;"><h4>Tạo mới</h4></v-card-title>
            <v-container style="background-color: rgb(247, 247, 247);">
              <v-row>
                <v-col cols="12" style="font-size: 13px;">
                  <p>Tên sản phẩm</p>
                  <v-text-field style="background-color: white;" density="compact" single-line hide-details variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" style="font-size: 13px;">
                  <p>Giá</p>
                  <v-text-field style="background-color: white;" density="compact" single-line hide-details variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" style="font-size: 13px;">
                  <p>Số lượng</p>
                  <v-text-field style="background-color: white;" density="compact" single-line hide-details variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" style="font-size: 13px;">
                  <p>Mô tả</p>
                  <v-textarea style="background-color: white;" density="compact" single-line hide-details variant="outlined"></v-textarea>
                </v-col>
                <v-col cols="12" style="font-size: 13px;">
                  <p>Ảnh sản phẩm</p>
                  <v-text-field placeholder="Nhập link ảnh" style="background-color: white;" density="compact" single-line hide-details variant="outlined"></v-text-field>
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