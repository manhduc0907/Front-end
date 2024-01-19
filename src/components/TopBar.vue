<template>
  <v-app-bar >
    <div>
        <p>Danh sách sản phẩm</p>
    </div>
    <v-spacer></v-spacer>
    <v-toolbar-item>
        <v-btn>
            <!-- <v-icon> mdi mdi-fencing</v-icon> -->
        </v-btn>
        <v-btn>
                <v-icon>mdi mdi-bell</v-icon>
            <v-badge content="999+" color="red">
            </v-badge>
        </v-btn>
        <v-btn>
            <v-avatar>
            <v-img 
                src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/352540285_1667457463716513_1213699232460349449_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=LekiM-hwOHAAX_LyHFq&_nc_ht=scontent.fhan17-1.fna&cb_e2o_trans=q&oh=00_AfAxa9OTxqHFyKsCbBFh1Q78lQ_WZTT601SWztEVFTzzFw&oe=65ABED22"
                alt="Duc">
                
            </v-img>
        </v-avatar>
        </v-btn>
        
    </v-toolbar-item>
  </v-app-bar>
</template>

<script>
export default {
    name:'TopBar'
}
</script>

<style>

</style>