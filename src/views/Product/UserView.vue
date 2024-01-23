<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-text-field
            style="background-color: white"
            density="compact"
            variant="outlined"
            label="Tìm kiếm"
            append-inner-icon="mdi mdi-magnify"
            single-line
            hide-details
            class="mr-2"
          ></v-text-field>
        </v-col>
        <v-col cols="9" class="text-right">
          <v-btn
            @click="dialog = true"
            color="primary"
            prepend-icon="mdi mdi-plus"
            class="text-uppercase"
            >Thêm</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-table density="compact">
              <thead>
                <tr>
                  <th class="text-left">Avatar</th>
                  <th class="text-left">Tên người dùng</th>
                  <th class="text-left">Ngày sinh</th>
                  <th class="text-left">Số điện thoại</th>
                  <th class="text-center">Acction</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in 10" :key="i">
                  <td>
                    <v-img
                      width="60"
                      height="50"
                      src="https://wall.vn/wp-content/uploads/2020/04/anh-dep-viet-nam-18.jpg"
                    ></v-img>
                  </td>
                  <td>Người dùng {{ i }}</td>
                  <td>09/07/2002</td>
                  <td>0343595727</td>                 
                  <td class="text-center">
                    <v-btn variant="text"
                      ><v-icon>mdi mdi-pencil</v-icon></v-btn
                    >
                    <v-btn variant="text"
                      ><v-icon>mdi mdi-delete</v-icon></v-btn
                    >
                  </td>
                </tr>
              </tbody>
            </v-table>
            <v-row class="ma-2">
              <v-col cols="8">
                <v-row>
                  <p class="mt-5 opacity">Showing</p>
                  <v-col cols="2">
                    <v-select
                      density="compact"
                      :items="['10', '20', '25', '30', 'All']"
                      variant="outlined"
                    ></v-select>
                  </v-col>
                  <p class="mt-5 opacity">of 50</p>
                </v-row>
              </v-col>
              <v-col cols="4" class="text-right">
                <v-pagination
                  variant="text"
                  density="compact"
                  :length="10"
                ></v-pagination>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <DialogVue v-model="dialog" />
  </div>
</template>

<script>
import DialogVue from "../../components/DialogUsers.vue";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  components: { DialogVue },
  name: "UserView",
};
</script>

<style>
</style>