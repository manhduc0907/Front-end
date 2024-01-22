<template>
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
          @click="showDialog = true"
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
                <th class="text-left">Tên sản phẩm</th>
                <th class="text-left">Giá</th>
                <th class="text-left">Số lượng</th>
                <th class="text-left">Mô tả</th>
                <th class="text-left">Ảnh</th>
                <th class="text-center">Acction</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 10" :key="i">
                <td>Sản phẩm {{ i }}</td>
                <td>$6,000</td>
                <td>1</td>
                <td style="width: 250px" class="v-text-truncate">
                  Lorem ipsum dolor sit amet
                </td>
                <td>
                  <v-img
                    width="60"
                    height="50"
                    src="https://res.cloudinary.com/dgtjdhrnq/image/upload/v1705460127/logo1_adshdl.png"
                  ></v-img>
                </td>
                <td class="text-center">
                  <v-btn variant="text"><v-icon>mdi mdi-pencil</v-icon></v-btn>
                  <v-btn variant="text"><v-icon>mdi mdi-delete</v-icon></v-btn>
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
            <!-- <v-col cols="1" class="text-right">
                      <span style="font-size: 11px;">Showing</span>
                    </v-col>
                    <v-col cols="2">
                      <v-select style="width: 100px;height: 5px !important;"
                          density="compact"
                          :items="['10', '20', '25', '30', 'All']"
                          variant="outlined"
                        ></v-select>
                    </v-col>
                  <v-col cols="2"></v-col> -->
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
</template>

<script>
export default {};
</script>

<style>
</style>